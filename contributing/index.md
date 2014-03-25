---
layout: page
title:  "Making contributions"
---

## Table of contents

- [Current open pull requests]({{ site.baseurl }}/contributing/#current-open-pull-requests)
- [Making contributions]({{ site.baseurl }}/contributing/#making-contributions)
- [Demos and docs]({{ site.baseurl }}/contributing/#demos-and-docs)
- [Browser testing]({{ site.baseurl }}/contributing/#browser-testing)
- [JavaScript testing]({{ site.baseurl }}/contributing/#javascript-testing)
- [Coding style]({{ site.baseurl }}/contributing/#coding-style)
- [Governance]({{ site.baseurl }}/contributing/#governance)
- [Licensing]({{ site.baseurl }}/contributing/#licensing)


## Current open pull requests

The [status]({{ site.baseurl }}/contributing/status.html) page helps us to keep
tabs on which repositories have open pull requests.


## Making contributions

If you'd like to contribute to Capital Framework, please use the fork-and-pull
model:

1. Fork a repository to your personal account.
2. Create a branch and make your changes.
3. Test the changes locally/in your personal fork.
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

Use [this snippet]({{ site.baseurl }}/contributing/browser-testing.html) as a list of browsers to test in.


## JavaScript testing

JavaScript tests that are set up within component build processes are there to
promote stable code.
Before making a pull request please make sure that all tests pass and that any
new functionality is tested.


## Coding style

In lieu of a formal style guide, take care to maintain the existing coding style.

A few notes on this...

**Adhere to any linting errors or warnings**  
Linting tasks that are set up within component build processes are there to
promote consistency.
Please follow their advice.
Open an issue if you think they should be updated.

**CSS naming conventions**  
The discussion: [https://github.com/cfpb/cf-demo/issues/40](https://github.com/cfpb/cf-demo/issues/40)  
The recommendation: Use our custom BEM naming conventions; see below:

{% highlight css %}
.block-name
.block-name_element-name
.block-name__block-modifier
.block-name_element-name__element-modifier
{% endhighlight %}

**Use Less but don't go crazy**  
Leverage basic features of Less to take advantage of the efficiency and
maintainability that a CSS preprocessor offers, while hopefully avoiding the
pitfalls of taking it too far and decreasing maintainability.

For example:

- Use `unit()` to document em calculations.
[Read the discussion](https://github.com/cfpb/cf-demo/issues/10).

**Shoot for mobile first declarations**  
In most cases styles should be declared mobile first,
then enhanced with `min-width` media queries.
By doing this we create a base experience that all devices can use
and one that does not require media query support.
(Note that this does not prevent you from creating your desktop styles first
as long as you end up with a stylesheet that is mobile first in the end.)


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