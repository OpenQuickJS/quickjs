# QuickJS Android

> Self-maintained QuickJS Android Bindings.

## Build

```bash
git clone --recurse-submodules https://github.com/shiqimei/quickjs-android.git
```

Open the folder `quickjs-android` in Android Studio.

## Usage

### Evaluate Javascript Scripts

```Java
QuickJS quickJS = new QuickJS.Builder().build();
try (JSRuntime runtime = quickJS.createJSRuntime()) {
  try (JSContext context = runtime.createJSContext()) {
    String script1 = "" +
        "function fibonacci(n) {" +
        "  if (n == 0 || n == 1) return n;" +
        "  return fibonacci(n - 1) + fibonacci(n - 2);" +
        "}";
    // Evaluate a script without return value
    context.evaluate(script1, "fibonacci.js");

    String script2 = "fibonacci(10);";
    // Evaluate a script with return value
    int result = context.evaluate(script2, "fibonacci.js", int.class);
    assertEquals(55, result);
  }
}
```

### Call Java Methods in Javascript Scripts

Non-static methods and static methods are supported. Wrap a Java method as a JSFunction, then add the JSFunction to the JSContext. Call it like a normal Javascript function.

```Java
QuickJS quickJS = new QuickJS.Builder().build();
try (JSRuntime runtime = quickJS.createJSRuntime()) {
  try (JSContext context = runtime.createJSContext()) {
    // Non-static method
    Integer integer = 0;
    JSFunction zeroCompareTo = context.createJSFunction(integer, Method.create(Integer.class, Integer.class.getMethod("compareTo", Integer.class)));
    // Add the function to the global object
    context.getGlobalObject().setProperty("zeroCompareTo", zeroCompareTo);
    assertEquals(-1, (int) context.evaluate("zeroCompareTo(1)", "test.js", int.class));
    assertEquals(1, (int) context.evaluate("zeroCompareTo(-1)", "test.js", int.class));

    // Static method
    JSFunction javaAbs = context.createJSFunctionS(Math.class, Method.create(Math.class, Math.class.getMethod("abs", int.class)));
    // Add the function to the global object
    context.getGlobalObject().setProperty("javaAbs", javaAbs);
    assertEquals(1, (int) context.evaluate("javaAbs(1)", "test.js", int.class));
    assertEquals(1, (int) context.evaluate("javaAbs(-1)", "test.js", int.class));
  }
}
```

Or create a JSFunction with a callback.

```Java
QuickJS quickJS = new QuickJS.Builder().build();
try (JSRuntime runtime = quickJS.createJSRuntime()) {
  try (JSContext context = runtime.createJSContext()) {
    // Create a JSFunction with a callback
    JSValue plusFunction = context.createJSFunction((context, args) -> {
      int a = args[0].cast(JSNumber.class).getInt();
      int b = args[1].cast(JSNumber.class).getInt();
      int sum = a + b;
      return context.createJSNumber(sum);
    });

    context.getGlobalObject().setProperty("plus", plusFunction);
    int result = context.evaluate("plus(1, 2)", "test.js", Integer.class);
    assertThat(result).isEqualTo(3);
  }
}
```

### Call Javascript Methods in Java codes

Just **evaluate** it. Or call `JSFunction.invoke()`.

### Promise

Use `JSContext.executePendingJob()` to execute pending job of promises. You may call `JSContext.executePendingJob()` several times until it returns `false`.

```Java
QuickJS quickJS = new QuickJS.Builder().build();
try (JSRuntime runtime = quickJS.createJSRuntime()) {
  try (JSContext context = runtime.createJSContext()) {
    context.evaluate("a = 1;Promise.resolve().then(() => { a = 2 })", "test.js");
    assertEquals(1, context.getGlobalObject().getProperty("a").cast(JSNumber.class).getInt());
    // Execute the pending job
    assertTrue(context.executePendingJob());
    assertEquals(2, context.getGlobalObject().getProperty("a").cast(JSNumber.class).getInt());
    // No pending job
    assertFalse(context.executePendingJob());
  }
}
```

### Conversion between Java Values and Javascript Values

Java values are converted to Javascript values when calling Java methods in Javascript scripts. Javascript values are converted to a Java values when receiving return values from evaluated Javascript scripts. QuickJS Android supports primitive types, string, array.

```Java
QuickJS quickJS = new QuickJS.Builder().build();
try (JSRuntime runtime = quickJS.createJSRuntime()) {
  try (JSContext context = runtime.createJSContext()) {
    String[] result = context.evaluate("['hello', 'world']", "test.js", String[].class);
    assertArrayEquals(new String[] { "hello", "world" }, result);
  }
}
```

Java Interfaces are also supported.

```Java
interface Calculator {
  double plus(double a, double b);
  double minus(double a, double b);
  double multiplies(double a, double b);
  double divides(double a, double b);
  void noop();
}

QuickJS quickJS = new QuickJS.Builder().build();
try (JSRuntime runtime = quickJS.createJSRuntime()) {
  try (JSContext context = runtime.createJSContext()) {
    Calculator calculator = context.evaluate("" +
      "a = {\n" +
      "  plus: function(a, b) { return a + b },\n" +
      "  minus: function(a, b) { return a - b },\n" +
      "  multiplies: function(a, b) { return a * b },\n" +
      "  divides: function(a, b) { return a / b },\n" +
      "  noop: function() { }\n" +
      "}", "test.js", Calculator.class);
  }
}
```

Use `TypeAdapter` to support any type you like.

```Java
private static class AtomicIntegerTypeAdapter extends TypeAdapter<AtomicInteger> {
  @Override
  public JSValue toJSValue(Depot depot, Context context, AtomicInteger value) {
    return context.createJSNumber(value.get());
  }

  @Override
  public AtomicInteger fromJSValue(Depot depot, Context context, JSValue value) {
    return new AtomicInteger(value.cast(JSNumber.class).getInt());
  }
}

QuickJS quickJS = new QuickJS.Builder().registerTypeAdapter(AtomicInteger.class, new AtomicIntegerTypeAdapter()).build();
try (JSRuntime runtime = quickJS.createJSRuntime()) {
  try (JSContext context = runtime.createJSContext()) {
    AtomicInteger atomicInteger = context.evaluate("1", "test.js", AtomicInteger.class);
    assertEquals(1, atomicInteger.get());
  }
}
```

## Benchmark

| Engine | v8   | QuickJS (Bytecode Mode) |
| :-: | :-: | :-: |
| init   | 30ms | 14ms                    |
| eval   | 29ms | 47ms                    |
| total  | 59ms | 61ms                    |

- Device: Huawei P30 Pro (Kirin 980), Android 10.
- Test JavaScript File: `asset:/sonic.js` (189 KB).

### Conclusion

1. Even when operating in bytecode mode, QuickJS's evaluation time is notably higher than V8's, and this disparity intensifies as the JavaScript file size increases.
2. QuickJS's initialization time is slightly lower than V8's, and this advantage is constant despite of file sizes.

## Concept

QuickJS Android uses the similar APIs to QuickJS.

### JSRuntime

> JSRuntime represents a Javascript runtime corresponding to an object heap. Several runtimes can exist at the same time but they cannot exchange objects. Inside a given runtime, no multi-threading is supported.
>
> -- QuickJS Document

### JSContext

> JSContext represents a Javascript context (or Realm). Each JSContext has its own global objects and system objects. There can be several JSContexts per JSRuntime and they can share objects, similar to frames of the same origin sharing Javascript objects in a web browser.
>
> -- QuickJS Document

### JSValue

> JSValue represents a Javascript value which can be a primitive type or an object.
>
> -- QuickJS Document

Available subclasses of `JSValue` are `JSNull`, `JSUndefined`, `JSBoolean`, `JSNumber`, `JSString`, `JSObject`, `JSArray`, `JSFunction`, `JSSymbol`.

## Test

The original tests and benchmarks of QuickJS are in [android-test](android-test). It's a console-like app running all tests and benchmarks at startup, like `make test`.

## Acknowledgement

1. [bellard/quickjs](https://github.com/bellard/quickjs) QuickJS official repository.
2. [seven332/quickjs-android](https://github.com/seven332/quickjs-android) QuickJS Android Wrapper.
3. [openwebf/quickjs](https://github.com/openwebf/quickjs) Optimized quickjs mantained by OpenWebF team.
4. [taoweiji/quickjs-android](https://github.com/taoweiji/quickjs-android) Android Bindings for QuickJS, A fine little javascript engine.
