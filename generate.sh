#!/bin/bash

set -u

if [[ ! -d mynote ]]; then
    git clone https://github.com/seasons521/mynote.git
fi

docker exec -it node-server node production.js "crontab/generate?root=/srv/blog/mynote/"
