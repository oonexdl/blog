#!/bin/bash

set -u

docker-compose up -d --remove-orphans --build --force-recreate
