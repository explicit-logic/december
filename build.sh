#!/usr/bin/env bash

rm -rf dist

npx tsc --project tsconfig.cjs.json
npx tsc-alias -v --dir dist -p tsconfig.cjs.json

for file in $(find dist -name "*.js"); do 
  mv -- "$file" "${file%.js}.cjs"
done

npx tsc --project tsconfig.esm.json & npx tsc -p tsconfig.types.json

npx tsc-alias -v --dir dist -p tsconfig.esm.json
npx tsc-alias -v --dir dist -p tsconfig.types.json
