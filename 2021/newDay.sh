#!/usr/bin/env bash

if [ $# -eq 0 ]
  then
    echo "No arguments supplied. Provide day number in a zero padded format."
    echo "Example: newDay.sh 02"
    exit 1
fi


if [ ! -d ./day_template ]
  then
    echo "Please run from the advent-of-code/2021/ directory."
    exit 1
  fi

dir="day$1"

if [  -d ./$dir ]
  then
    echo "Error: $dir directory exists. Exiting."
    exit 1
  fi

echo -n "Creating $dir..."
mkdir  $dir
cp ./day_template/index.js  $dir/index.js
cp ./day_template/01.in     $dir/$1.in
cp ./day_template/01.sample $dir/$1.sample
cp ./day_template/readme.md $dir/readme.md
cd $dir
echo "Done."


