# OpenQuickJS Testing Environment

# Use an Ubuntu base image
FROM ubuntu:latest

# Install necessary packages
RUN apt-get update && \
    apt-get install -y ninja-build && \
    apt-get clean

# Install Rust (nightly version) and cbindgen
RUN curl https://sh.rustup.rs -sSf | sh -s -- -y && \
    . $HOME/.cargo/env && \
    rustup default nightly && \
    cargo install --force cbindgen
