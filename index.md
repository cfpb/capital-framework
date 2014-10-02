---
layout: default
title: "Nice to meet you"
description: |
  Capital Framework is a set of HTML, CSS, and JavaScript patterns by the
  [Consumer Financial Protection Bureau](https://cfpb.github.io/) with the
  following goals:
  consolidate front-end code patterns across CFPB web products in a
  [collaborative way](https://cfpb.github.io/capital-framework/components/#an-introduction-to-the-component-methodology),
  adhere to design and UX standards set forth by the
  [CFPB Design Manual](https://cfpb.github.io/design-manual/),
  respect the guiding principles of accessibility,
  and support a wide range of browsers, even down to IE7.

  As a work of the United States Government, all code is open source and in the
  public domain (excluding any exceptions listed within a Capital Framework
  component's TERMS).
  We encourage you to use this framework in your own projects and to contribute
  back.
is_root: true
---


## Test drive

You can quickly grab components through the command line with Bower:

~~~
$ bower install git://github.com/cfpb/cf-grid.git
~~~
{: .highlight }

Once downloaded you can import the Capital Framework source files that you need:

{% highlight css %}
@import "bower_components/cf-grid/src/cf-grid.less";

// Set up a wrapper for your page using the grid_wrapper mixin from cf-grid.
.my-page-wrapper {
    .grid_wrapper();
}

// Set up some structural elements using the grid_column mixin from cf-grid.
.my-main-content {
    .grid_column(8);
}
.my-sidebar {
    .grid_column(4);
}
{% endhighlight %}
{: .highlight }

That's it! You've just set up a simple two column layout.


## The workflow

{% include workflow-intro.md %}

![cf-demo in relation to components]({{ site.baseurl }}/assets/img/cf-overview.png)

_The Octocat character and designs are © GitHub, Inc._


## Get the code

{% include components-repositories.md %}

Recommended workflow/sample project:  
[cf-demo](https://github.com/cfpb/cf-demo)

Jade templates for creating docs and demos for Capital Framework components:  
[cf-component-demo](https://github.com/cfpb/cf-component-demo)

A set of common Grunt tasks for Capital Framework components:  
[cf-grunt-config](https://github.com/cfpb/cf-grunt-config)

Project-wide documentation for Capital Framework:  
[capital-framework](https://github.com/cfpb/capital-framework)
