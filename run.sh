#!/bin/bash
alias run=./run.sh
echo "Compiling typescript"
npx tsc
echo "Running compiled typescript code"
echo 
echo 
echo "==================================="
echo
echo
node dist/main.js
