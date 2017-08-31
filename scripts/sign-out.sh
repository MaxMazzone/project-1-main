#!/bin/bash

# ID=117 TOKEN=BAhJIiVhN2FhZTZhN2E4ZDIyNjhhN2MwM2I2YjcxMjEyZGU0ZgY6BkVG--29fe26a2d09c3d6f16000cb8ab54bb1d68170e75 sh scripts/sign-out.sh

# API="${API_ORIGIN:-http://httpbin.org}"
# URL_PATH="/delete?id=$ID"
API="${API_ORIGIN:-https://ga-library-api.herokuapp.com}"
URL_PATH="/sign-out/$ID"

curl "${API}${URL_PATH}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \

echo
