---
layout: default
title:  "Setting up component tests with QUnit"
parent:
  name: "Contributing"
  url: "contributing/#javascript-testing"
toc:
  root: /contributing/qunit.html
  list:
  - name: "Getting started"
  - name: "Testing suite files overview"
  - name: "Example test"
---


{% include toc.html %}


## Getting started

Copy the `test` folder from [cf-expandables](https://github.com/cfpb/cf-expandables)
as a starting place for writing tests for your own component.

_New to unit testing and QUnit?
Read an [Introduction to Unit Testing](http://qunitjs.com/intro/) on the
QUnit site._


## Testing suite files overview

Tests should be located in a components `test` folder and should contain the
following files:

### \<component-name\>.html

_This page runs the tests and is also where you will write the markup for your
test scenarios._

- The file name should be the same as the name key in `bower.json`.
- Linking to `jquery.js`, `qunit.js` and `qunit.css` is required for the test suite.
Also required is the CSS and JS needed to run your component and any component
markup needed for the unit tests.
- You can run the tests with Grunt using the `grunt test` task.
- You can also open the test page in your browser if you need to debug while
writing tests.

### \<component-name\>.js

_This is where you will write the unit tests for your component._

- The file name should be the same as the name key in `bower.json`.
- Use the [QUnit API Documentation](http://api.qunitjs.com/) for a list of the
test types you can run.


## Example test

**\<component-name\>.html**

{% highlight html %}
...
<button id="go">Go!</button>
...
{% endhighlight %}

**\<component-name\>.js**

{% highlight js %}
...
test('Verify the text.', function() {
  expect( 1 );
  ok( $('#go').text() == 'Go!', 'The button should say "Go!"' );
});
...
{% endhighlight %}
