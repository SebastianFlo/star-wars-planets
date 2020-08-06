#!/bin/bash
for file in ./src/assets/*.png;

do cwebp -q 50 -lossless "$file" -o "${file%.png}.webp";

done
