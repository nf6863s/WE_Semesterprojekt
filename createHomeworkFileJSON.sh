#!/usr/bin/env sh

set -e

jsonfile="./homework/hw.json"

echo -n "{ \"files\": [" > $jsonfile

files=$(find "./homework/" -type f)
first=true

for f in $files
do

dir=$(dirname $f)
name=$(basename $f)
if [ "$name" != "hw.json" ]
then
  if [ "$first" = true ]
  then
    echo -n "\"$dir/$name\"" >> $jsonfile
    first=false
  else
    echo -n ",\"$dir/$name\"" >> $jsonfile
  fi
fi

done

echo -n "] }" >> $jsonfile
