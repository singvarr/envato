#!/bin/bash

mkdir -p dist
mkdir dist/js && cp -r js/* dist/js
mkdir dist/img && cp -r img/* dist/img
mkdir dist/fonts && cp -r fonts/* dist/fonts
cp ./index.html dist
