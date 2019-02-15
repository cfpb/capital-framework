#!/bin/sh

# Generate a changelog for all PRs after the Lerna migration (git tag v7.6.0)
# See docs at https://github.com/lerna/lerna-changelog
lerna-changelog --from v7.6.0 > CHANGELOG.md

# Add the pre-Lerna changelog to the bottom of the generated one.
cat ./scripts/templates/CHANGELOG.legacy.md >> ./CHANGELOG.md
