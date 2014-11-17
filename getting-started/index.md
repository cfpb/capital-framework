---
layout: default
title:  "Getting started"
---

The Capital Framework provides a set of modular HTML, CSS, and JavaScript patterns that can be used both collectively and individually. Our recommended workflow is to use the cf-generator Yeoman generator to scaffold out a new Capital Framework project. This allows you to pick and choose your modules as well as providing a solid front end build process.

## Using the Yeoman generator

To use the Yeoman generator, you will need [Node.js](http://nodejs.org/), [Yeoman](http://yeoman.io/), [Grunt](http://gruntjs.com/), and [Bower](http://bower.io/).

### Installing dependencies

[Node.js](http://nodejs.org/) can be downloaded and installed directly from the Node website, or by using a package manager for your system. At the CFPB we use Homebrew. To install the dependencies:

{% highlight bash %}
$ brew install node #if installing node with homebrew
$ npm install -g grunt-cli bower yo generator-cf
{% endhighlight %}

### Scaffolding out a project

To create a new project, create a directory, cd into that directory, and run the `yo cf` command:

{% highlight bash %}
$ mkdir my-awesome-projet
$ cd my-awesome-project
$ yo cf
{% endhighlight %}

The generator will prompt you to complete information about the project and choose the Capital Framework modules you would like to use.

## Downloading the compiled source

If you would prefer to download the compiled CSS and JavaScript source files, we have a downloadable package available.