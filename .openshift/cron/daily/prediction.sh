#!/bin/bash

key=$GMAPP_BROWSER_KEY

curl -H "Content-Type: application/json" -X POST -d '{"key":"'$key'"}' $OPENSHIFT_APP_DNS/bin/predict