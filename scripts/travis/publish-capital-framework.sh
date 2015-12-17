#!/bin/sh

# Abort if this is a pull request OR if we're not on master OR if it's not node v4
if [[ $TRAVIS_PULL_REQUEST != "false"|| $TRAVIS_BRANCH != $GH_BRANCH || $TRAVIS_NODE_VERSION != "4.2" ]]; then exit 0; fi

git config user.name "CFPBot"
git config user.email "CFPBot@users.noreply.github.com"
echo -e "$NPM_USERNAME\n$NPM_PASSWORD\n$NPM_EMAIL" | npm login
npm run release
