---
layout: default
title:  "Making contributions"
toc:
  root: /contributing/
  list:
  - name: "Current open pull requests"
  - name: "Making contributions"
  - name: "Demos and docs"
  - name: "Browser testing"
  - name: "JavaScript testing"
  - name: "Accessibility testing"
  - name: "Coding style"
    list:
    - name: "Adhere to any linting errors or warnings"
    - name: "Follow our CSS naming conventions"
    - name: "Use Less but don't go crazy"
    - name: "Shoot for mobile first declarations"
    - name: "Automatically create an alternate stylesheet for older IE"
  - name: "Governance"
  - name: "Licensing"
---


{% include toc.html %}


## Current open pull requests

The [status]({{ site.baseurl }}/contributing/status.html) page helps us to keep
tabs on which repositories have open pull requests.


## Making contributions

If you'd like to contribute to Capital Framework, please use the fork-and-pull
model:

1. Fork a repository to your personal account.
2. Create a branch and make your changes.
3. Test the changes locally/in your personal fork.
If the repository contains tests make sure they all pass.
For more information review the [Javascript testing](#javascript-testing) section.
4. Submit a pull request to open a discussion about your proposed changes.
5. We'll talk about it and decide to merge or request additional changes.

If you would like to create a new component please review our notes on the
[About the components page]({{ site.baseurl }}/components/#contributing)


## Demos and docs

Each component should build out a demo and docs page using
[grunt-topdoc](https://github.com/topcoat/grunt-topdoc) and
[cf-component-demo](https://github.com/cfpb/cf-component-demo).
Read more about them at
[components/#demos-and-docs]({{ site.baseurl }}/components/#demos-and-docs).


## Browser testing

Components should be cross browser tested.
When contributing code please publicly track the tests you have run using the
[testing checklist snippet]({{ site.baseurl }}/contributing/testing-snippet.html).
Included is a list of browsers that we recommend testing in.


## JavaScript testing

JavaScript tests that are set up within component build processes are there to
promote stable code.
They can be run with the `grunt test` command.
Before making a pull request please publicly track that all tests have passed
using the [testing checklist snippet]({{ site.baseurl }}/contributing/testing-snippet.html).
New unit tests should be written using [QUnit](https://qunitjs.com/) for any new
functionality added.

Read our _[Setting up component tests with QUnit]({{ site.baseurl }}/contributing/qunit.html)_
guide for more information.


## Accessibility testing

Components should conform to [Section 508](http://www.section508.gov/)
and [WCAG 2.0 level AA](http://www.w3.org/TR/WCAG20/) guidelines.
When contributing code please publicly track the tests you have run using the
[testing checklist snippet]({{ site.baseurl }}/contributing/testing-snippet.html).
As each component is different we ask that you update the snippet to track
the accessibility guidlines you have tested for.


## Coding style

In lieu of a formal style guide, take care to maintain the existing coding style.

A few notes on this...


### Adhere to any linting errors or warnings

Linting tasks that are set up within component build processes are there to
promote consistency.
Please follow their advice.
Open an issue if you think they should be updated.
When contributing code please publicly track that there are no linting errors
or warnings using the [testing checklist snippet]({{ site.baseurl }}/contributing/testing-snippet.html).


### Follow our CSS naming conventions

**We are using a customized BEM format**

{% highlight css %}
.block-name
.block-name_element-name
.block-name__block-modifier
.block-name_element-name__element-modifier
{% endhighlight %}

*If you're curious how we landed here please review the discussion:
[https://github.com/cfpb/capital-framework/issues/40](https://github.com/cfpb/capital-framework/issues/40)*

#### More on BEM

**Don't create elements of modifiers**

Appending an element name to a modifier class can result in a confusing class
name like `.list__space_item`.
Avoid this in favor of using a descendant, like this: `.list__spaced .list_item`.

**Notes when nesting blocks**

Keep in mind that here will be scenarios where an element overrides elements of
another block.

For example, in this structural diagram...

~~~
.press-contacts
  .press-contacts_main-list.list
    .list_item
~~~
{: .highlight }

`.press-contacts_main-list` is an element of `.press-contacts` but can override
elements of `.list` like so: `.press-contacts_main-list .list_item`.
It is overriding the standard `.list`'s `.list_item` styles.

As for naming conventions you should make sure to use the original block name
when overriding a block with an element.
For example notice how `.press-contacts_main-list` uses **`list`** in its name.


### Use Less but don't go crazy

Leverage basic features of Less to take advantage of the efficiency and
maintainability that a CSS preprocessor offers, while hopefully avoiding the
pitfalls of taking it too far and decreasing maintainability.

For example:

- Use `unit()` to document em calculations.
[Read the discussion](https://github.com/cfpb/cf-demo/issues/10).


### Shoot for mobile first declarations

In most cases styles should be declared mobile first,
then enhanced with `min-width` media queries.
By doing this we create a base experience that all devices can use
and one that does not require media query support.
(Note that this does not prevent you from creating your desktop styles first
as long as you end up with a stylesheet that is mobile first in the end.)


### Automatically create an alternate stylesheet for older IE

Use [grunt-legacssy](https://github.com/robinpokorny/grunt-legacssy) to
automatically create an alternate version of your stylesheet.
The alternate version will be stripped of media query rules matching your
specified criteria while leaving the contents of those rules intact.
Use conditional comments to serve this alternate stylesheet to older versions
of Internet Explorer.
Follow the conditonal comment usage shown in the
[HTML file for cf-pagination](https://github.com/cfpb/cf-pagination/blob/gh-pages/demo/index.html).

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


## Governance

- Currently there are two project shepherds with the responsibility of
  maintaining the framework and shepherding the change process.
- Anyone can make a pull request to update the framework.
- Bug fixes should have a low barrier to entry requiring only one of the
  project shepherds to review and accept.
- New features or big changes require discussion during the CFPB weekly
  front end developer meetings to raise any potential red flags
  (for example, if the change would have significant implications to the
  CFPB Design Manual).
  Presuming none:
  - Make sure code is reviewed by at least one other front end developer
    (hopefully not a shepherd)
  - The request for change can then be accepted by one of the two project shepherds.
- All submitted code should be run through a linting tool to catch simple errors.
  - We will provide guidance on how to do this, with CFPB code style-specific rules.
- Criteria for vetting third party components for inclusion:
  - Browser compatibility
  - Accessibility
  - Adoption/activity/maturity
  - Ease of applying our styling


## Licensing

The project is in the public domain within the United States, and
copyright and related rights in the work worldwide are waived through
the [CC0 1.0 Universal public domain dedication][CC0].

All contributions to this project will be released under the CC0
dedication. By submitting a pull request, you are agreeing to comply
with this waiver of copyright interest.

[CC0]: http://creativecommons.org/publicdomain/zero/1.0/