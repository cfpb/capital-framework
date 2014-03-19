---
layout: page
title:  "About the components"
---


## About the components

{% include components-intro.md %}


## The code

{% include components-repositories.md %}

_Styleguides built with the excellent [Topdoc](https://github.com/topcoat/topdoc/)._


## Contributing

We welcome your feedback and contributions.  
[Find out about contributing]({{ site.baseurl }}/contributing/)

If you'd like to create a new component please review our [roadmap](/roadmap/)
first to make sure we haven't already started.
Also consider if we can leverage any existing code from CFPB web products.

We hope to have a starter repo or a scaffolding system set up for creating
new components quickly but this is still in research.
We are currently looking into [Yeoman.io](http://yeoman.io/).
In the meantime you can contribute to the discussion by following
[this issue](https://github.com/cfpb/cf-demo/issues/49).


## Compiling a component

### Requirements

- [npm](https://npmjs.org/)
- [grunt-cli](http://gruntjs.com/getting-started)
- That's it! NPM will help you install everything else you need.

### Workflow

1. Clone a component repo and `cd` into its root
2. `npm install` – Initializes Grunt in this folder and installs dependencies.
3. `grunt vendor` – Pulls in Bower components.
4. `grunt` – Compiles LESS files and generates the docs and demo pages.


## Using components independent of Capital Framework

If you're already using [Bower](http://bower.io/), simply add this component as a dependency
and integrate it into your build process.
It's not currently in the Bower registry, so you'll have to point to this Git repo's URL.

You can also just view the CSS in the `demo` folder and snag what you want.


## Demo/Docs pages

Each component builds out a demo and docs page.
The demo page is a simple html page with no extra styling which is useful for
browser testing the component.
The docs page is a generated style guide documenting the component markup and CSS.

These pages are generated using the [grunt-topdoc](https://github.com/topcoat/grunt-topdoc)
task which uses templates from [cf-component-demo](https://github.com/cfpb/cf-component-demo).
Components are set up to generate these pages along with the default Grunt tasks.

Make sure that any new CSS is appropriately documented using Topdoc.
Please refer to the [Getting Started](https://github.com/cfpb/cf-component-demo/blob/master/README.md#getting-started)
section of cf-component-demo for further information.