---
layout: default
title:  "About the Grunt tasks"
description: >
  An explanation of the tasks within `Gruntfile.js`.
  _Note that this page is a work in progress and is missing a lot of content._
---


<div class="toc">

<h2>Table of contents</h2>

<pre class="highlight">
<code>{% for term in site.data.component-grunt-terms %}<a href="{{ site.baseurl }}/components/anatomy.html#{{ term.slug }}">{{ term.name }}</a>
{% endfor %}</code>
</pre>

</div>


{% for term in site.data.component-grunt-terms %}

## {{ term.name }}

{% if term.definition %}
{{ term.definition }}
{% endif %}

{% endfor %}
