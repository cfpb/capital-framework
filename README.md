# Capital Framework

Capital Framework is a set of front-end components developed at the
[Consumer Financial Protection Bureau](http://cfpb.github.io/).
The defining feature of these components is their modular nature which aims to
make updating and sharing much easier than traditional frameworks.
They also aim to meet accessibility standards and support Internet Explorer 7
since these are features that are crucial to the success of web products at the
CFPB.

Capital Framework currently includes the following components:

- [cf-buttons](https://github.com/cfpb/cf-buttons)
- [cf-colors](https://github.com/cfpb/cf-colors)
- [cf-expandables](https://github.com/cfpb/cf-expandables)
- [cf-forms](https://github.com/cfpb/cf-forms)
- [cf-grid](https://github.com/cfpb/cf-grid)
- [cf-pagination](https://github.com/cfpb/cf-pagination)
- [cf-typography](https://github.com/cfpb/cf-typography)

[See a demo of them all on one page &rarr;](http://cfpb.github.io/capital-framework)


## The benefits of modular components

Much like [Topcoat](https://github.com/topcoat) each component is its own repository.
Managing all of these repositories within your project is done using Bower.
This setup provides a lot of flexibility;
for example you can choose to include only the components that you need,
and you can add or update components as you need them, all through Bower.
This makes it easier for projects using the framework
to take advantage of updates and bug fixes at their own convenience.
We hope this leads to more contributions to the framework;
meaning if something is broken and you fix it you'll be fixing it for everyone
(but only if they want it).


## More about this repo

This repository is an example of how one would bundle all of the Capital Framework
components together and use them within a project.
It also acts as a front-end workflow recommendation utilizing tools like
[Bower](http://bower.io/) and [Grunt](http://gruntjs.com/).


### A modern workflow

We're using Grunt to compile our Less files, minify and concatenate CSS and JS,
automatically add vendor prefixes when they are needed, run tests, etc.
And since it's already included you'll be able to use it for whatever else your
project might need.


### Project scaffolding

*Still in research*

Setting up the framework for your project and creating new components should be
quick and easy.
We are currently [looking into](https://github.com/cfpb/capital-framework/issues/49)
[Yeoman.io](http://yeoman.io/).


## Contributing

We welcome your feedback and contributions.

- [Find out about contributing](https://github.com/cfpb/capital-framework/blob/master/CONTRIBUTING.md)
- [File a bug](https://github.com/cfpb/capital-framework/issues/new?body=%23%23%20URL%0D%0D%0D%23%23%20Actual%20Behavior%0D%0D%0D%23%23%20Expected%20Behavior%0D%0D%0D%23%23%20Steps%20to%20Reproduce%0D%0D%0D%23%23%20Screenshot&labels=bug)


## Getting started

You can use Capital Framework in two ways:

1. Download a compiled version of this repository and just start coding.
It includes all of the Capital Framework components along with any third party
dependencies.
2. Use this repository to build your own custom implementation.
   * _Requires some comfortability with the command line (Terminal).
   Some experience with Grunt a plus._


### "I just want to get the stuff and make something quickly"

1. Download the zip file of the [latest release](https://github.com/cfpb/capital-framework/releases),
   which contains the contents of the `dist/` folder.
   _Note that the `dist` folder is generated with Grunt and that it does not
   get checked into GitHub.
   You will not see it in this repository._
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
        mv capital-framework my-project

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
