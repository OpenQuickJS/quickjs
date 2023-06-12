#!/bin/bash

set -x

rm -rf build bin lib 
mkdir build
cmake -G Ninja -DCMAKE_BUILD_TYPE=Release -B build -S .
cmake --build ./build --target qjs run-test262 -j 8