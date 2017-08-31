#!/bin/bash

# ID=117 OLD_PASSWORD="cat55" NEW_PASSWORD="cat" TOKEN=BAhJIiVlYjA1ZTg1YjU2NDgzY2Y2OWZjZDk3NzllY2RmMTZhZgY6BkVG--ef7471e712e0cb2ab5ec0ecdfefcd2d7344808f9 sh scripts/change-password-json.sh

# API="${API_ORIGIN:-http://httpbin.org}"
# URL_PATH="/patch?id=${ID}"
API="${API_ORIGIN:-https://ga-library-api.herokuapp.com}"
URL_PATH="/change-password/${ID}"

curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLD_PASSWORD}"'",
      "new": "'"${NEW_PASSWORD}"'"
    }
  }'

echo
