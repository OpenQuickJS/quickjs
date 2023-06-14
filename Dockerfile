# OpenQuickJS Testing Environment

# Use an Alpine base image
FROM alpine:latest

# Install necessary packages
RUN apk add --no-cache git build-base ninja curl cmake

# Install Rust (nightly version) and cbindgen
RUN apk add --no-cache curl perl-utils && \
    curl https://sh.rustup.rs -sSf | sh -s -- -y && \
    . $HOME/.cargo/env && \
    rustup default nightly && \
    cargo install --force cbindgen

# Add cargo binaries to PATH
ENV PATH="/root/.cargo/bin:${PATH}"