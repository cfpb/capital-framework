---
layout: default
title: "Quick start"
description: |
  Capital Framework is a set of front-end components developed at the
  [Consumer Financial Protection Bureau](http://cfpb.github.io/).
  Here's a quick example showing you how you can start using Capital Framework
  right away.
is_root: true
---

You can quickly grab componenets through the command line with Bower:

~~~
$ bower install git://github.com/cfpb/cf-grid.git
~~~
{: .highlight }

Once downloaded you can import the Capital Framework source files that you need:

~~~
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
~~~
{: .highlight }

That's it! You've just set up a simple two column layout.

