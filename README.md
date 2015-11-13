# Voltrazord

The goal of Voltrazord is to make the process of updating CF components as simple as:

1. Edit component(s) source code in `src/`.
1. Manually increment version number in the `package.json`s of whatever component(s) you edited.
1. Submit a PR.
1. That's it.

## How?

Travis CI will handle the building and publishing of components to npm by running `npm publish` whenever a new commit is pushed to master. `npm publish` will execute a [prepublish](https://github.com/contolini/capital-framework/blob/0192c567807ec53fee27d5b5085ce31cc52903f3/package.json#L25) [script](https://github.com/contolini/capital-framework/blob/0192c567807ec53fee27d5b5085ce31cc52903f3/scripts/npm/prepublish/index.js) that does the following things:

1. Look through the `component/` dir and grab the name and version of each component from all their `package.json`s.
1. For each component:
  1. Contact npm and get the most recent version number published.
  1. Compare the version number listed in `package.json` with the version in npm.
  1. If the local version is the same, abort and do nothing. The code wasn't touched.
  1. If the local version is smaller, abort and alert the user that something is awry.
  1. If the local version number is greater, the component is pushed to a needsToBePublished array.
1. Run `gulp build --component=whatever-component` for every component that needs to be published. `gulp build` does the following:
  1. Create a `tmp` dir in the project root.
  1. Create a dir for every component in `tmp`.
  1. Process these [templates](https://github.com/contolini/capital-framework/tree/0192c567807ec53fee27d5b5085ce31cc52903f3/scripts/templates) with the component's info.
  1. Merge component's manifest with the primary `package.json` to fill in missing fields.
  1. Compile every component's stylesheets to `tmp/cf-component/cf-component.css`.
  1. Compile every component's JS to `tmp/cf-component/cf-component.js`.
1. After each component is built, publish each one individually to npm:
  1. Go to its directory in `tmp`.
  1. Run `npm publish`.
1. Bump the capital-framework package.json appropriately. <-- This functionality isn't complete, see to-do below.

After this prepublish script finishes, `npm publish` continues as normal and the main capital-framework package is published to npm.

## To-Do

- Tests. I haven't ported over any accessibility or JS tests from the original CF repos.
  - JS tests: I copied over the [cf-expandables](https://github.com/contolini/capital-framework/tree/voltrazord/test) test file but nothing is done with it. Going forward, all JS tests will live in the root `test/` directory and not component directories.
  - Accessibility tests: We compile all the `usage.md` docs into a huge HTML file and have node-wcag or pa11y scan it for accessibility concerns.
  - Visual regression tests? @ans has [thoughts](https://github.com/cfpb/capital-framework/issues/191#issuecomment-153049029) on this.
- Docs. I haven't ported over component docs to individual `usage.md` files. I just copied cf-buttons' docs into every `usage.md` file.
- Travis integration. Travis will need to run `npm publish` when a commit is pushed to master. This will trigger the `scripts/npm/prepublish` script because it's listed as a "prepublish" action in `package.json`. What's the best way to have Travis do this? [This](https://gist.github.com/domenic/ec8b0fc8ab45f39403dd) might be relevant.
- The `scripts/npm/prepublish` script successfully builds and publishes individual components. It doesn't currently build and publish the master component, `capital-framework`. I don't think any building needs to happen. The primary `package.json` version number just needs to be incremented.


## To experience Voltrazord:

```sh
git clone -b voltrazord git@github.com:contolini/capital-framework.git ~/Downloads/voltrazord
cd ~/Downloads/voltrazord
npm install -g gulp
npm install
gulp build
```

----

## Open source licensing info
1. [TERMS](TERMS.md)
2. [LICENSE](LICENSE)
3. [CFPB Source Code Policy](https://github.com/cfpb/source-code-policy/)
