# Capital Framework

Capital Framework is a modular front-end framework developed at the
[Consumer Financial Protection Bureau](http://cfpb.github.io/).

This is the master repo which allows for building the framework with some or all of the components that we have
developed so far.

Capital Framework includes the following components:

- [cf-buttons](https://github.com/cfpb/cf-buttons)
- [cf-colors](https://github.com/cfpb/cf-colors)
- [cf-expandables](https://github.com/cfpb/cf-expandables)
- [cf-forms](https://github.com/cfpb/cf-forms)
- [cf-grid](https://github.com/cfpb/cf-grid)
- [cf-pagination](https://github.com/cfpb/cf-pagination)
- [cf-typography](https://github.com/cfpb/cf-typography)


## Contributing

We welcome your feedback and contributions.

- [Find out about contributing](https://github.com/cfpb/capital-framework/blob/master/CONTRIBUTING.md)
- [File a bug](https://github.com/cfpb/capital-framework/issues/new?body=%23%23%20URL%0D%0D%0D%23%23%20Actual%20Behavior%0D%0D%0D%23%23%20Expected%20Behavior%0D%0D%0D%23%23%20Steps%20to%20Reproduce%0D%0D%0D%23%23%20Screenshot&labels=bug)


## Getting Started

You can use Capital Framework in two ways:

1. Download the compiled base framework with all included packages and just start coding.
2. Get the source of the framework and build your own custom implementation of it.
   * _Requires some comfortability with the command line (Terminal). Some experience with Grunt a plus._

### "I just want to get the stuff and make something quickly"

1. Download the zip file of the latest release (link coming soon),
   which contains the contents of the `dist/` folder.
2. Unzip it.
3. Get going!

### "I want to build my own"

#### Requirements

- [npm](https://npmjs.org/)
- [grunt-cli](http://gruntjs.com/getting-started)
- That's it! NPM will help you install everything else you need.

#### Workflow

1. Clone the repo and `cd` into its root
        
        # no need to fork the project or clone the full git history
        git clone --depth 1 git://github.com/cfpb/capital-framework.git

        # move the repository to your own project name
        mv front-end my-project

        # cd into the project root
        cd my-project
2. `npm install` – Initializes Grunt in this folder and installs dependencies.
3. `grunt vendor` – Pulls in Bower components.
4. `grunt compile` (or just `grunt`) – Compiles LESS files, concatenates and minifies JS files, and rewrites image
   and font asset paths.
5. Develop your project in the `src` folder. Add your project's LESS in `src/static/css` and JS in `src/static/js`.
6. Repeat step 4 to recompile LESS. (Or optionally setup the watch task to recompile on the fly.)

#### Adding/removing/updating Bower components

1. Edit the list of dependencies in `bower.json`.
2. Re-run `grunt vendor`.
3. Make any needed Gruntfile/template adjustments for consuming the new component (see below).
4. Re-run `grunt compile`.

##### Extra steps for components that contain production assets like fonts and images:

1. Update `exportsOverride` in `package.json` to move the componenets asset types to the predefined asset
   directories, like `/static/fonts/`.
2. If this new package has CSS linking to fonts or images, the paths to them will automatically be rewritten as a
   root relative link like `/static/fonts/`. If you have other asset types you will need to update the
   `string-replace` task in Gruntfile.js.

---

*This file was generated on Fri Feb 21 2014 18:09:24.*
