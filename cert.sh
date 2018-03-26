#!/bin/bash

set -u

run() {
  # get certificates, pem will be stored in
  # /etc/letsencrypt/live/www.xiaodongli.me/fullchain.pem
  # /etc/letsencrypt/live/www.xiaodongli.me/privkey.pem
  docker run -it \
    --volumes-from web-server \
    certbot/certbot certonly --webroot -w /srv/blog/www -d www.xiaodongli.me -d xiaodongli.me
}

renew() {
  # renew certificates
  docker run -it \
    --volumes-from web-server \
    certbot/certbot renew
}

usage() {
  opts="run renew"
  echo -e "\navailable options:"
  for opt in $opts; do
    echo "  ${opt}"
  done
}

case "$1" in
  run)
    run
    ;;
  renew)
    renew
    ;;
  *)
    usage
    ;;
esac
