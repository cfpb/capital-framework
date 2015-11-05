## cfv2 notes

### general to-do

1. verify `capital-framework.css` integrity. just because there are no errors 
during compilation doesn't mean the resulting file is what we want it to be.

### ideal workflow for updating capital framework

1. Edit component(s) source code.
1. Manually increment version number in the `package.json`s of whatever component(s) you edited.
1. Run `npm publish` from this dir.
1. That's it.

A `prepublish` script will:
1. Figure out which components have changed.
1. Package them.
1. Publish them.
1. Increment capital-framework's version [appropriately](https://github.com/cfpb/capital-framework/issues/179).
1. Package capital-framework.
1. Publish capital-framework.

### npm

#### to-do

- the `postinstall` script should only happen for contributors? not consumers
who are `npm install capital-framework`ing?
- when preparing npm modules, auto-add the `less` and `style` properties
- less gets compiled from `src` to components' root dirs, the same should happen
to js. strip comments but don't minify for the `component.js` file. minify for 
the `component.min.js` file.
- remove all `package.json` properties with a `//` key.
- alphabetize properties by key.

#### what should happen when you run `npm publish` from this dir

1. Check `git status` to ensure the repos working directory is clean. If it isn't, abort and tell the user to commit their changes.
1. Look through the `component/` dir and grab the name and version of each component from all their `package.json`s.
1. For each component:
  1. Contact npm and get the most recent version number published.
  1. Compare the version number listed in `package.json` with the version in npm.
  1. If the local version is the same, abort and do nothing. The code wasn't touched.
  1. If the local version is smaller, abort and alert the user that something is awry.
  1. If the local version number is greater, the component is pushed to a needsToBePublished array.
1. If needsToBePublished.length > 0, continue on. Otherwise, tell the user there's nothing to do.
1. Run the gulp `build-components` task. It will:
  1. Create a `tmp` dir in the project root.
  1. Create a dir for every component in `tmp`.
  1. Compile every component's stylesheets to `tmp/cf-component/cf-component.css`.
  1. Compile every component's JS to `tmp/cf-component/cf-component.js`.
1. For each component in the needsToBePublished array:
  1. Go to its directory in `tmp`.
  1. `npm publish`.
1. `package.json` files in component dirs are merged with capital-framework's 
`package.json`. so if you want to override a package.json property, add it to 
the component's package.json. otherwise it will default to whatever is in cf's 
manifest.

#### npm notes

- why are there `style` and `less` properties? `package.json` is schemaless so you
can add whatever properties you want. UI frameworks have adopted [style and less
properties](https://github.com/twbs/bootstrap/blob/50bea4625a09d14cec93e4dbdd9d336005ac7d85/package.json#L19-L21)
to point to stylesheets.

