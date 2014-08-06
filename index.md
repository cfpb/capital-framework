---
layout: default
title: "Nice to meet you"
description: |
  Capital Framework is a set of front-end components developed at the
  [Consumer Financial Protection Bureau](http://cfpb.github.io/).
is_root: true
---


## Defining features:

- Components are broken into distinct [modular repositories]({{ site.baseurl }}/components/#an-introduction-to-the-component-methodology).
- Coding meets accessibility standards.
- Built to support Internet Explorer down to version 7.


## Test drive

You can quickly grab componenets through the command line with Bower:

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
