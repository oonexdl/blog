#!/bin/bash

set -u

if [[ ! -d mynote ]]; then
    git clone https://github.com/seasons521/mynote.git
fi

node production.js "crontab/generate?root=$(pwd)/mynote/"
