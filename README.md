# QuickJS

> A community-driven QuickJS fork.

### Optimizations

In addition to the relevant features and optimizations in the [TODO](https://github.com/openwebf/quickjs/blob/master/TODO) file, the more important optimizations are:

- [x] Column number
- [ ] Basic Debugger API
- [x] Poly IC
  - [x] Self Poly IC
  - [x] Prototype Poly IC 
- [x] Replace malloc To [mimalloc](https://github.com/microsoft/mimalloc)
- [ ] Improve The Performance Of GC

In our plan, we first complete the above optimizations and then gradually add the remaining parts.

### Develop

#### Clone

```bash
git clone --recurse-submodules https://github.com/openquickjs/quickjs.git
```

#### Install Build Tools

```bash
brew install cmake ninja # macOS
sudo apt install cmake ninja-build # Ubuntu
```

The Windows build environment is not yet officially supported.

#### Build

```shell
bash scripts/build.sh # build quickjs qjs
bash scripts/test.sh # run test262 tests
```

You can find `libquickjs.a` in `lib` folder and `qjs` / `run-test262` in `bin` folder.

1. If you're using Visual Studio Code, you can use the `CMake Tools` extension to build the program.
2. If you're using CLion, you can open the project directly to build the program.

Using VSCode or CLion for regular development is recommended.

#### Debug

Install Debug Tools if you need.

```bash
brew install lldb # macOS
sudo apt install lldb # Ubuntu
```

If you're using VSCode, you can use the `C/C++` and `Code LLDB` extension to debug.

### Tests

```bash
Average memory statistics for 75250 tests:

NAME                    COUNT     SIZE
memory allocated         1011   124975  (123.6 per block)
memory used               967   117030  (0 overhead, 8.2 average slack)
atoms                     532    26858  (50.5 per atom)
objects                   172    12425  (72.2 per object)
properties              876    15798  (5.1 per object)
shapes                   60    13809  (230.2 per shape)
bytecode functions         13     1685
bytecode                 13      931  (71.6 per function)
C functions               100
arrays                      1
fast arrays               1
elements                  1       16  (1.0 per fast array)

Result: 515/75250 errors, 1392 excluded, 7972 skipped, 515 new
```


### Benchmark

> - Apple M1 Pro
> - macOS Monterey 12.2.1
> - Clang 13.0.0 arm64-apple-darwin21.3.0

|               | bellard/quickjs (2788d71)    | openwebf/quickjs (latest)       |
| ------------- | ---------- | ---------- |
| Richards      | 1188        | 1457       |
| Crypto        | 1443        | 1527       |
| RayTrace      | 744        | 1995       |
| NavierStokes  | 2775        | 2979       |
| DeltaBlue     | 1100        | 1595       |
| Total score   | 1312        | 1840 (+40.2%)      |
| File Size(KB) | 1.3M        | 1.4M        |