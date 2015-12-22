#!/bin/bash
set -e

# Abort if this is a pull request OR if we're not on master OR if it's not node v4
if [[ -n "$TRAVIS" ]] &&
   [[ "$TRAVIS_PULL_REQUEST" != "false" || "$TRAVIS_BRANCH" != "$GH_PROD_BRANCH" || "$TRAVIS_NODE_VERSION" != "4.2" ]]; then
  echo "TRAVIS: ${TRAVIS}"
  echo "TRAVIS_PULL_REQUEST: ${TRAVIS_PULL_REQUEST}"
  echo "TRAVIS_BRANCH: ${TRAVIS_BRANCH}"
  echo "GH_PROD_BRANCH: ${GH_PROD_BRANCH}"
  echo "GH_DEV_BRANCH: ${GH_DEV_BRANCH}"
  echo "TRAVIS_NODE_VERSION: ${TRAVIS_NODE_VERSION}"
  echo "Abort!"
  exit 0;
fi

# If NPM env variables are set and we're in Travis
if [[ -n "$NPM_USERNAME" ]] && [[ -n "$NPM_PASSWORD" ]] && [[ -n "$NPM_EMAIL" ]] && [[ -n "$TRAVIS" ]]; then
  echo "Logging into npm..."
  echo -e "${NPM_USERNAME}\n${NPM_PASSWORD}\n${NPM_EMAIL}\n" | npm login
  echo "Adding git credentials..."
  git config user.name "CFPBot"
  git config user.email "CFPBot@users.noreply.github.com"
fi

node scripts/npm/prepublish
npm publish
