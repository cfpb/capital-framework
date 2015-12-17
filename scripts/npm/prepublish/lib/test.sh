#!/bin/bash
set -e

git checkout $TRAVIS_BRANCH
git commit -am "travis test"
git push "https://${GH_TOKEN}@${GH_REF}" master:master
