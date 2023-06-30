#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "quickjs/quickjs.h"

char *change_extension(const char *path, const char *new_ext) {
  char *dot = strrchr(path, '.');
  if (dot == NULL) {
    dot = path + strlen(path);  // append at the end if there's no extension
  }
  size_t new_path_len = dot - path + strlen(new_ext) + 1;  // +1 for null terminator
  char *new_path = malloc(new_path_len);
  strncpy(new_path, path, dot - path);
  strcpy(new_path + (dot - path), new_ext);
  return new_path;
}

int main(int argc, char *argv[]) {
  if (argc < 2 || argc > 3) {
    printf("Usage: %s <source.js> [<output.qbc>]\n", argv[0]);
    return 1;
  }

  const char *source_path = argv[1];
  char *output_path;
  if (argc == 3) {
    output_path = argv[2];
  } else {
    output_path = change_extension(source_path, ".qbc");
  }

  FILE *source_file = fopen(source_path, "r");
  if (source_file == NULL) {
    printf("Cannot open source file: %s\n", source_path);
    return 1;
  }

  // get file length
  fseek(source_file, 0, SEEK_END);
  long length = ftell(source_file);
  fseek(source_file, 0, SEEK_SET);

  // read source code into buffer
  char *source = malloc(length);
  if (source) {
    fread(source, 1, length, source_file);
  }
  fclose(source_file);

  JSRuntime *rt;
  JSContext *ctx;

  rt = JS_NewRuntime();
  ctx = JS_NewContext(rt);

  // compile source code to bytecode
  JSValue bytecode = JS_Eval(ctx, source, length, source_path, JS_EVAL_FLAG_COMPILE_ONLY);

  free(source);

  if (JS_IsException(bytecode)) {
    printf("Compilation failed.\n");
    JS_FreeValue(ctx, bytecode);
    JS_FreeContext(ctx);
    JS_FreeRuntime(rt);
    return 1;
  }

  // write bytecode to buffer
  size_t bytecode_length;
  uint8_t *buffer = JS_WriteObject(ctx, &bytecode_length, bytecode, JS_WRITE_OBJ_BYTECODE);

  JS_FreeValue(ctx, bytecode);

  // write buffer to binary file
  FILE *output_file = fopen(output_path, "wb");
  if (output_file == NULL) {
    printf("Cannot open output file: %s\n", output_path);
    JS_FreeContext(ctx);
    JS_FreeRuntime(rt);
    return 1;
  }

  fwrite(buffer, 1, bytecode_length, output_file);
  fclose(output_file);

  js_free(ctx, buffer);
  JS_FreeContext(ctx);
  JS_FreeRuntime(rt);

  printf("Bytecode has been written to: %s\n", output_path);

  if (argc == 2) {
    free(output_path);
  }
  return 0;
}
