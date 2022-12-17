#!/usr/bin/env bash

source ./build.sh

git add -A
npm version ${1:-patch} --force

cp package.json ./dist
cp .npmrc ./dist

cd dist
npm publish

git push && git push --tags
