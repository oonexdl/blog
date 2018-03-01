#!/bin/bash

set -u

if [[ ! -d mynote ]]; then
    git clone git@github.com:seasons521/mynote.git
else
    cd mynote && git pull && cd ..;
fi

rootPath="$(pwd)/mynote/"
node production.js "crontab/generate?root=$(pwd)/mynote/"