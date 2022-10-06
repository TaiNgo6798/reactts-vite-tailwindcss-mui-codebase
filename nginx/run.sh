#!/bin/sh

# SEARCH="BACKEND_HOST_PORT"
# REPLACE="http:\/\/$API_HOST:$API_PORT"
CONFIG_FILE="/etc/nginx/conf.d/default.conf"
# cat nginx.template | sed -e "s/$SEARCH/$REPLACE/" > "$CONFIG_FILE"
cat nginx.template  > "$CONFIG_FILE"
nginx -g "daemon off;"