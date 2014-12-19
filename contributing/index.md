---
layout: default
title:  "Contributing"
---

## Demos and docs

Each component should build out a demo and docs page using
[grunt-topdoc](https://github.com/topcoat/grunt-topdoc). The demo page is a simple html page with no extra styling which is useful for browser testing the component. The docs page is a generated style guide documenting the component markup and CSS.

These pages are generated using the grunt-topdoc task which uses templates from cf-component-demo. Components are set up to generate these pages along with the default Grunt tasks.

## Browser testing

Components should be cross browser tested. When contributing code please publicly track the tests you have run using the
[testing checklist snippet](testing-snippet.html).

## JavaScript testing

JavaScript tests can be run with the `grunt test` command. Before making a pull request please publicly track that all tests have passed
using the [testing checklist snippet](testing-snippet.html).

New unit tests should be written using [QUnit](https://qunitjs.com/) for any functionality added.


## Accessibility testing

Components should conform to [Section 508](http://www.section508.gov/)
and [WCAG 2.0 level AA](http://www.w3.org/TR/WCAG20/) guidelines.
When contributing code please publicly track the tests you have run using the
[testing checklist snippet](testing-snippet.html).

As each component is different we ask that you update the snippet to track
the accessibility guidlines you have tested for.


## Coding style

In lieu of a formal style guide, take care to maintain the existing coding style.


### Adhere to any linting errors or warnings

Linting tasks that are set up within component build processes are there to
promote consistency. When contributing code please publicly track that there are no linting errors
or warnings using the [testing checklist snippet](testing-snippet.html).


### Follow our CSS naming conventions

**We are using a customized BEM format**

{% highlight css %}
.block-name
.block-name_element-name
.block-name__block-modifier
.block-name_element-name__element-modifier
{% endhighlight %}

**Avoid creating elements of modifiers**

Appending an element name to a modifier class can result in a confusing class
name like `.list__space_item`.
Avoid this in favor of using a descendant, like this: `.list__spaced .list_item`.


### Shoot for mobile first declarations

In most cases styles should be declared mobile first,
then enhanced with `min-width` media queries. By doing this we create a base experience that all devices can use and one that does not require media query support.


### Automatically create an alternate stylesheet for older IE

Use [grunt-legacssy](https://github.com/robinpokorny/grunt-legacssy) to
automatically create an alternate version of your stylesheet.
The alternate version will be stripped of media query rules matching your
specified criteria while leaving the contents of those rules intact.

Use conditional comments to serve this alternate stylesheet to older versions
of Internet Explorer.

Our recommended configuration for grunt-legacssy:

{% highlight js %}
legacssy: {
  demo: {
    options: {
      legacyWidth: 960
    },
    files: {
      'main.lt-ie9.css': 'main.css'
    }
  }
}
{% endhighlight %}


## Contributing to existing components

If you'd like to contribute to an existing Capital Framework component, please use the [fork and pull model](https://help.github.com/articles/using-pull-requests/).

## Creating new Components

We hope to soon offer a Yeoman generator for creating new components quickly. In the meantime our current recommendation is to clone and edit an existing component.

Please read our [Anatomy of a Component](anatomy.html) page for more information on the different aspects of a component.

## Licensing

The project is in the public domain within the United States, and
copyright and related rights in the work worldwide are waived through
the [CC0 1.0 Universal public domain dedication][CC0].

All contributions to this project will be released under the CC0
dedication. By submitting a pull request, you are agreeing to comply
with this waiver of copyright interest.

[CC0]: http://creativecommons.org/publicdomain/zero/1.0/