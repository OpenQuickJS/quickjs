#ifdef CONFIG_DEBUG_ON_RELEASE
#include "debug.h"

// log messages to `qjs` repl output

void __internal_debug_log(const char* fmt, ...) {
  va_list argp;
  va_start(argp, fmt);

  vprintf(fmt, argp);

  va_end(argp);
  printf("\n");
}
#endif