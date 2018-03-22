#!/bin/bash

set -u

ENV=${ENV:-"dev"}

up() {
  echo "recreate containers and start"
  docker-compose -f docker-compose.${ENV}.yml up -d --remove-orphans --build --force-recreate
}

stop() {
  echo "stop containers only"
  docker-compose -f docker-compose.${ENV}.yml stop
}

restart() {
  echo "stop and start containers only"
  docker-compose -f docker-compose.${ENV}.yml restart
}

down() {
  echo "remove containers, network and volumns"
  docker-compose -f docker-compose.${ENV}.yml down
}

usage() {
  opts="up stop down"
  echo -e "\navailable options:"
  for opt in $opts; do
    echo "  ${opt}"
  done
}

case "$1" in
  up )
    up
    ;;
  stop )
    stop
    ;;
  restart )
    restart
    ;;
  down )
    down
    ;;
  * )
    usage
    ;;
esac