---
layout: sub-page
title:  "Component repository anatomy"
description: "An explanation of the folders and files that make up a component repository."
parent:
  name: "About the components"
  url: "components/#anatomy-of-a-component"
---



<pre class="highlight">
<code>{% for term in site.data.component-repo-terms %}<a href="{{ site.baseurl }}/components/anatomy.html#{{ term.slug }}">{{ term.name }}</a>
{% endfor %}</code>
</pre>


{% for term in site.data.component-repo-terms %}

## {{ term.name }}

{% if term.definition %}
{{ term.definition }}
{% endif %}

{% endfor %}
