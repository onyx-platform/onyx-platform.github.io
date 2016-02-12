#!/usr/bin/env bash

set -o errexit
set -o pipefail
set -o nounset
set -o xtrace

if [[ "$#" -ne 2 ]]; then
    echo "Usage: $0 <git sha or tag of Onyx core> <onyx version>"
    echo "Example: $0 0.8.4 0.8.4"
else
    # Build user guide
    rm -rf onyx
    git clone https://github.com/onyx-platform/onyx.git
    git -C onyx checkout $1

    mkdir -p docs/user-guide/$2
    rm -rf docs/user-guide/$2/*
    cp -R onyx/doc/user-guide/* docs/user-guide/$2/
    rm -rf docs/user-guide/latest/*
    cp -R onyx/doc/user-guide/* docs/user-guide/latest/

    # Build API docs
    mkdir -p docs/api/$2/
    rm -rf docs/api/$2/*
    cp -R onyx/doc/api/* docs/api/$2/
    rm -rf docs/api/latest/*
    cp -R onyx/doc/api/* docs/api/latest/

    rm -rf onyx

    # Build cheat sheet
    rm -rf onyx-cheat-sheet
    git clone https://github.com/onyx-platform/onyx-cheat-sheet.git
    rm onyx-cheat-sheet/resources/public/js/app.js || true
    mkdir -p docs/cheat-sheet/$2
    rm -rf docs/cheat-sheet/$2/*
    cd onyx-cheat-sheet && lein with-profile -dev,+uberjar cljsbuild once
    cd ..
    cp onyx-cheat-sheet/resources/public/js/app.js docs/cheat-sheet/$2
    cp onyx-cheat-sheet/resources/public/css/style.css css/cheat-sheet-style.css
    cp onyx-cheat-sheet/resources/index.html docs/cheat-sheet/$2

    rm -rf docs/cheat-sheet/latest/*
    cp onyx-cheat-sheet/resources/public/js/app.js docs/cheat-sheet/latest
    cp onyx-cheat-sheet/resources/index.html docs/cheat-sheet/latest

    rm -rf onyx-cheat-sheet

    git add docs

    # Update Onyx version
    sed -i.bak "s/.*onyx_version.*/onyx_version: $2/g" _config.yml
    rm _config.yml.bak
fi
