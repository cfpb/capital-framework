---
layout: default
title:  "About the Grunt tasks"
---

## About the Grunt tasks

An explanation of the tasks within `Gruntfile.js`.

<pre class="highlight">
<code>{% for term in site.data.component-grunt-terms %}<a href="{{ site.baseurl }}/components/anatomy.html#{{ term.slug }}">{{ term.name }}</a>
{% endfor %}</code>
</pre>


{% for term in site.data.component-grunt-terms %}

## {{ term.name }}

{% if term.definition %}
{{ term.definition }}
{% endif %}

{% endfor %}
