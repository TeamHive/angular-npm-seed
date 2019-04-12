#!/bin/bash

get_property() {

  VALUE=$(cat ./libs/$1/package.json | grep $2 | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]')

  echo "$3$VALUE"
}

get_property $1 $2 $3
