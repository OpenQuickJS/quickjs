#!/bin/bash

set -x

if [ ! -d test262 ]; then
    git clone https://github.com/tc39/test262.git test262
fi

cd test262
# git checkout ac1c3546c393d89b37483c3a32eddfe7dd1903a7
# patch -p1 < ../tests/test262.patch
cd ..
touch test262_errors.txt
./bin/run-test262 -m -c test262.conf -a