#!/bin/sh

# Abort if this is a pull request OR if we're not on master OR if it's not node v4
if [ "$TRAVIS_PULL_REQUEST" != "false" ] || [ "$TRAVIS_BRANCH" != "$GH_BRANCH" ] || [ "$TRAVIS_NODE_VERSION" != "4.2" ]; then
  echo "TRAVIS_PULL_REQUEST: ${TRAVIS_PULL_REQUEST}"
  echo "TRAVIS_BRANCH: ${TRAVIS_BRANCH}"
  echo "GH_BRANCH: ${GH_BRANCH}"
  echo "TRAVIS_NODE_VERSION: ${TRAVIS_NODE_VERSION}"
  echo "Abort!"
  exit 0;
fi

# If `npm whoami` doesn't return anything (meaning the user isn't logged in)
if [ -z "$(npm whoami)" ]; then
  # If NPM env variables are set and we're in Travis
  if [-n "$NPM_USERNAME"] && [-n "$NPM_PASSWORD"] && [-n "$NPM_EMAIL"] && [$TRAVIS == "true"]; then
    echo -e "$NPM_USERNAME\n$NPM_PASSWORD\n$NPM_EMAIL" | npm login
    git config user.name "CFPBot"
    git config user.email "CFPBot@users.noreply.github.com"
  else
    echo "Please log into npm before continuing"
    exit 1
  fi
fi

node scripts/npm/prepublish && npm publish
