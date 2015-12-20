#!/usr/bin/env bash
INPUT=$1
echo -n .
jsdoc -X "$INPUT/0-src.html" | json-tidy > "$INPUT/1-jsdoc.json"
echo -n .
jsdoc-parse --html "$INPUT/0-src.html" > "$INPUT/2-jsdoc-parse.json"
echo -n .
dmd < "$INPUT/2-jsdoc-parse.json" > "$INPUT/3-dmd.md"
echo
