#!/bin/bash

npx nx build shell &
npx nx build login &
npx nx build navbar &
npx nx build feed &
npx nx build user &
wait
