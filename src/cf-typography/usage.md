## Variables

### Color variables

```
@pull-quote_body
@pull-quote_citation
@micro-copy-text
@date-text
@category-slug-text
@category-slug-hover
@header-slug-thin-border
@header-slug-thick-border
@padded-header-text
@padded-header-bg
@padded-header-border
@fancy-slug-text
@fancy-slug-bg
@fancy-slug-border
@meta-header-border
@jump-link__bg
@jump-link__bg-border
@list__branded-bullet
```

## Pull quote

### Default pull quote

<aside class="pull-quote">
    <div class="pull-quote_body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Cum corrupti tempora nam nihil qui mollitia consectetur
        corporis nemo culpa dolorum!
    </div>
    <footer>
        <cite class="pull-quote_citation">
            - Author Name
        </cite>
    <footer>
</aside>

```
<aside class="pull-quote">
    <div class="pull-quote_body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Cum corrupti tempora nam nihil qui mollitia consectetur
        corporis nemo culpa dolorum!
    </div>
    <footer>
        <cite class="pull-quote_citation">
            - Author Name
        </cite>
    <footer>
</aside>
```

### Large pull quote

<aside class="pull-quote pull-quote__large">
    <div class="pull-quote_body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Cum corrupti tempora nam nihil qui mollitia consectetur
        corporis nemo culpa dolorum!
    </div>
    <footer>
        <cite class="pull-quote_citation">
            - Author Name
        </cite>
    <footer>
</aside>

```
<aside class="pull-quote pull-quote__large">
    <div class="pull-quote_body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Cum corrupti tempora nam nihil qui mollitia consectetur
        corporis nemo culpa dolorum!
    </div>
    <footer>
        <cite class="pull-quote_citation">
            - Author Name
        </cite>
    <footer>
</aside>
```


## Micro copy

### Standard micro copy

```
<p class="micro-copy">
    Lorem ipsum dolor sit amet
</p>
```
### Large micro copy

```
<p class="micro-copy">
    Lorem ipsum dolor sit amet
</p>
```

### Short description

## .short-desc

```
<p class="short-desc">I am short description.</p>
```

### .short-desc__large (modifier)

```
<p class="short-desc short-desc__large">I am large short description.</p>
```
## Date

### Default date

```
<span class="date">
    Nov 4, 2013
</span>
```
### Category slug

## Default category slug

```
<a href="#" class="category-slug">
    <span class="category-slug_icon cf-icon cf-icon-dialogue"></span>
    <span class="u-visually-hidden">Category:</span>
    Consumer finance
</a>
```

## Header slug

### Default header slug

```
<h2 class="header-slug">
    <span class="header-slug_inner">
        Blog summary
    </span>
</h2>
```

## Padded header

### Default padded header

```
<h2 class="padded-header">
    Header
</h2>

```
## Fancy slug

### Default fancy slug

```
<h2 class="fancy-slug">
    <span class="fancy-slug_text">
        <span class="fancy-slug_ribbon-left"></span>
        Watchroom
        <span class="fancy-slug_ribbon-right"></span>
    </span>
</h2>

```

## Meta header

### Default meta header

```
<div class="meta-header">
    <span class="meta-header_right date">
        Nov 4, 2013
    </span>
    <a href="#" class="meta-header_left category-slug">
        <span class="cf-icon cf-icon-credit-card"></span>
        Consumer finance
    </a>
</div>
```

## Alternate meta header arrangements

```
<div class="meta-header">
    <a href="#" class="meta-header_right category-slug">
        <span class="cf-icon cf-icon-credit-card"></span>
    </a>
    <span class="meta-header_left date">
        Nov 4, 2013
    </span>
</div>
<br>
<div class="meta-header">
    <a href="#" class="meta-header_left category-slug">
        <span class="cf-icon cf-icon-credit-card"></span>
        Consumer finance
    </a>
</div>
```

## Links with icons

```
<p>
    For more information, email
    <a class="icon-link icon-link__mail" href="#">
        <span class="icon-link_text">john.smith@cfpb.gov</span>
    </a>.
    Alternatively, you can
    <a class="icon-link icon-link__download" href="#">
        <span class="icon-link_text">download the info sheet</span>
    </a>.
    Oh, you might also want to visit this
    <a class="icon-link icon-link__external-link" href="#">
        <span class="icon-link_text">other organization's website</span>
    </a> for further details.
</p>
<a class="icon-link icon-link__right" href="#">
    Visit another section of our site
</a>
```












