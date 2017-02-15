#!/bin/bash

# Make dirs
mkdir -p bin
mkdir -p runtime

# Compile compiler
gcc src/c/compiler.c --static -o bin/compiler

# Clone, pull and compile runner code
git clone https://github.com/springhack/alxw_judge_core_src src/c/runner
cd src/c/runner
git pull
make

# Copy runner
mv runner ../../../bin/runner
