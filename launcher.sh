#!/bin/bash

./bin/webpack-dev-server &
P1=$!
rails s &
P2=$!
wait $P1 $P2
