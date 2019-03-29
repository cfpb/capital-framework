#!/bin/sh

# First, back up the current changelog
mv CHANGELOG.md /tmp/cf-changelog.md

# Generate the latest changelog entries
# See docs at https://github.com/lerna/lerna-changelog
lerna-changelog --next-release-from-metadata > CHANGELOG.md

# Add a new line to keep releases spaced nicely
echo "\n" >> CHANGELOG.md

# Combine the two
cat /tmp/cf-changelog.md >> CHANGELOG.md

# Delete the temporary file for good measure
rm /tmp/cf-changelog.md
