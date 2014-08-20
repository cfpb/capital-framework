---
layout: default
title:  "About the cf-demo repository"
toc:
  root: /cf-demo/
  list:
  - name: "The purpose of cf-demo"
  - name: "The code"
  - name: "Contributing"
  - name: "Getting started"
    list:
    - name: "Using the compiled version"
    - name: "Using the build system"
      list:
      - name: "Requirements"
      - name: "Workflow"
      - name: "Adding/removing/updating Bower components"
    - name: "Adding new dependencies"
---


{% include toc.html %}


## The purpose of cf-demo

{% include workflow-intro.md %}


**Setting you up with a modern workflow**  
We're using Grunt to compile our Less files, minify and concatenate CSS and JS,
automatically add vendor prefixes when they are needed, run tests, etc.
And since it's already included you'll be able to use it for whatever else your
project might need.


**Project scaffolding**  
*Still in research*  
Setting up the framework for your project and creating new components should be
quick and easy.
We hope to have a starter repo or a scaffolding system set up but this is still
in research.
We are currently looking into [Yeoman.io](http://yeoman.io/).
In the meantime you can contribute to our discussion on scaffolding by following
[this issue](https://github.com/cfpb/capital-framework/issues/49).


## The code

[cf-demo](https://github.com/cfpb/cf-demo)


## Contributing

We welcome your feedback and contributions.

- [Find out about contributing]({{ site.baseurl }}/contributing/)
- [File a bug](https://github.com/cfpb/cf-demo/issues/new?body=%23%23%20URL%0D%0D%0D%23%23%20Actual%20Behavior%0D%0D%0D%23%23%20Expected%20Behavior%0D%0D%0D%23%23%20Steps%20to%20Reproduce%0D%0D%0D%23%23%20Screenshot&labels=bug)


## Getting started

You can use Capital Framework in two ways:

1. Download a compiled version of this repository and just start coding.
It includes all of the Capital Framework components along with any third party
dependencies.
2. Use the [cf-demo](https://github.com/cfpb/cf-demo)
   repository to build your own custom implementation.
   * _Requires some comfortability with the command line (Terminal).
   Some experience with Grunt a plus._


### Using the compiled version

_"I just want to get the stuff and make something quickly"_

1. Download the zip file of the [latest release](https://github.com/cfpb/cf-demo/releases),
   which contains the contents of the `dist/` folder.
   _Note that the `dist` folder is generated with Grunt and that it does not
   get checked into GitHub.
   You will not see it in this repository._
2. Unzip it.
3. Get going!


### Using the build system

_"I want to build my own"_


#### Requirements

- [npm](https://npmjs.org/)
- [grunt-cli](http://gruntjs.com/getting-started)
- That's it! NPM will help you install everything else you need.


#### Workflow

1. Clone the repo and `cd` into its root
        
        # no need to fork the project or clone the full git history
        git clone --depth 1 git://github.com/cfpb/cf-demo.git

        # move the repository to your own project name
        mv cf-demo my-project

        # cd into the project root
        cd my-project
2. `npm install` – Initializes Grunt in this folder and installs dependencies.
3. `grunt vendor` – Pulls in Bower components.
4. `grunt compile` (or just `grunt`) – Compiles Less files, updates vendor prefixes,
concatenates JS files, and rewrites image and font asset paths.
5. Develop your project in the `src` folder. Add your project's Less in `src/static/css` and JS in `src/static/js`.
6. Repeat step 4 to recompile Less. (Or optionally setup the watch task to recompile on the fly.)
7. `grunt dist` – Minifies CSS and JS and appends a banner to them, creates a
`dist` folder (or empties it out if one already exists), and moves files from
`src` to `dist`.
Note that unminified CSS and JS and folders within `vendor` are not copied over
unless there are rules within `copy:dist` to override this
(for example review how we handle html5shiv within the `copy:dist` task).

Optionally you can easily push the contents of the `dist` folder up to GitHub
pages by running `grunt gh-pages`.
For more information read the `grunt gh-pages`
[overview](https://github.com/tschaub/grunt-gh-pages#overview).

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


### Adding new dependencies

#### Step 1: Add to `bower.json`

{% include adding-deps-step1.md %}

#### Step 2: Wiring assets

{% include adding-deps-step2.md %}
