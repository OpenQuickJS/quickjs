# QuickJS Android

> Self-maintained QuickJS Android Bindings.

## Usage

1. Download the latest `.aar` archive from [release](https://github.com/shiqimei/quickjs-android/releases) page;
2. In Android Studio: `File > New > New Module > Import .JAR/.AAR Package`, locate `.aar`, click `Finish`.

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

See [Usages.md](./Usages.md) for advanced usages.

## Develop

```bash
git clone --recurse-submodules https://github.com/shiqimei/quickjs-android.git
```

Open the folder `quickjs-android` in Android Studio.

## Benchmark

This is a non-serious benchmark. The purpose is to compare the performance of QuickJS and V8 on Android.

| Engine |  v8  | QuickJS (Script Mode) | QuickJS (Bytecode Mode) |
| :----: | :--: | :-------------------: | :---------------------: |
|  init  | 37ms |         18ms          |          18ms           |
|  eval  | 35ms |         282ms         |          48ms           |
| total  | 72ms |         300ms         |          56ms           |

- Device: Huawei P30 Pro (Kirin 980), Android 10.
- Test JavaScript File: `asset:/sonic.js` (189 KB).

### Conclusion

1. Even when operating in bytecode mode, QuickJS's evaluation time is notably higher than V8's, and this disparity intensifies as the JavaScript file size increases.
2. QuickJS's initialization time is slightly lower than V8's, and this advantage is constant despite of file sizes.

## Acknowledgement

1. [bellard/quickjs](https://github.com/bellard/quickjs) QuickJS official repository.
2. [seven332/quickjs-android](https://github.com/seven332/quickjs-android) QuickJS Android Wrapper.
3. [openwebf/quickjs](https://github.com/openwebf/quickjs) Optimized quickjs mantained by OpenWebF team.
4. [taoweiji/quickjs-android](https://github.com/taoweiji/quickjs-android) Android Bindings for QuickJS, A fine little javascript engine.
