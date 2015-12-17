#!/bin/sh

# Abort if this is a pull request OR if we're not on master OR if it's not node v4
if [[ $TRAVIS_PULL_REQUEST != "false"|| $TRAVIS_BRANCH != $GH_BRANCH || $TRAVIS_NODE_VERSION != "4.2" ]]; then
  echo "TRAVIS_PULL_REQUEST : ${TRAVIS_PULL_REQUEST}"
  echo "TRAVIS_BRANCH : ${TRAVIS_BRANCH}"
  echo "GH_BRANCH : ${GH_BRANCH}"
  echo "TRAVIS_NODE_VERSION : ${TRAVIS_NODE_VERSION}"
  exit 0;
fi

git config user.name "CFPBot"
git config user.email "CFPBot@users.noreply.github.com"
echo -e "$NPM_USERNAME\n$NPM_PASSWORD\n$NPM_EMAIL" | npm login
npm run release
