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
