# Rust Crates

## Prerequisites

### `rust nightly`

We rely on features that are only available in `rust nightly`. To install `rust nightly`:

```bash
rustup default nightly
rustup update
```

### `cbindgen`

We use `cbindgen` to generate the C header file for the Rust library. To install `cbindgen`:

```bash
cargo install --force cbindgen
```