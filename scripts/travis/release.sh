#!/bin/bash
set -e

export COMMIT_AUTHOR_NAME="$(git log -1 $TRAVIS_COMMIT --pretty="%aN")"

# Echo some variables to make Travis CI debugging easier 
echo "TRAVIS: ${TRAVIS}"
echo "TRAVIS_PULL_REQUEST: ${TRAVIS_PULL_REQUEST}"
echo "TRAVIS_BRANCH: ${TRAVIS_BRANCH}"
echo "GH_PROD_BRANCH: ${GH_PROD_BRANCH}"
echo "GH_DEV_BRANCH: ${GH_DEV_BRANCH}"
echo "TRAVIS_NODE_VERSION: ${TRAVIS_NODE_VERSION}"
echo "COMMIT_AUTHOR_NAME: ${COMMIT_AUTHOR_NAME}"

# If this is Travis CI AND
if [[ -n "$TRAVIS" ]] &&
      # This is a pull request OR 
   [[ "$TRAVIS_PULL_REQUEST" != "false" ||
      # This branch isn't master OR
      "$TRAVIS_BRANCH" != "$GH_PROD_BRANCH" ||
      # The commit author is CFPBot
      "$COMMIT_AUTHOR_NAME" == "CFPBot" ]];
# Then abort everything
then
  echo "Abort!"
  exit 0;
fi

# If we're in Travis, configure git
if [[ -n "$TRAVIS" ]]; then
  echo "Adding git credentials..."
  git config user.name "CFPBot"
  git config user.email "cfpbot@users.noreply.github.com"
fi

node scripts/npm/prepublish $1

if [[ $1 != "--dryrun" ]]; then
  npm publish
fi
