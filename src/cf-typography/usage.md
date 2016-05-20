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

- Use a pull quote to highlight excerpts from the current work. This is not to be confused with blockquote which quotes from an external work.

- Since a pull quote is an excerpt and repeats content from the article it's contained within you should use the aside element.


## Micro copy

### Standard micro copy

<p class="micro-copy">
    Lorem ipsum dolor sit amet
</p>

```
<p class="micro-copy">
    Lorem ipsum dolor sit amet
</p>
```

### Large micro copy

<p class="micro-copy">
    Lorem ipsum dolor sit amet
</p>

```
<p class="micro-copy">
    Lorem ipsum dolor sit amet
</p>
```

### Short description

## .short-desc

<p class="short-desc">I am short description.</p>

```
<p class="short-desc">I am short description.</p>
```

### .short-desc__large (modifier)

<p class="short-desc short-desc__large">I am large short description.</p>

```
<p class="short-desc short-desc__large">I am large short description.</p>
```

## Date

### Default date

<span class="date">
    Nov 4, 2013
</span>

```
<span class="date">
    Nov 4, 2013
</span>
```
## Category slug

### Default category slug

<a href="#" class="category-slug">
    <span class="category-slug_icon cf-icon cf-icon-dialogue"></span>
    <span class="u-visually-hidden">Category:</span>
    Consumer finance
</a>

```
<a href="#" class="category-slug">
    <span class="category-slug_icon cf-icon cf-icon-dialogue"></span>
    <span class="u-visually-hidden">Category:</span>
    Consumer finance
</a>
```

- We suggest using a .u-visually-hidden element to add more context for screen readers.


## Header slug

### Default header slug

<h2 class="header-slug">
    <span class="header-slug_inner">
        Blog summary
    </span>
</h2>

```
<h2 class="header-slug">
    <span class="header-slug_inner">
        Blog summary
    </span>
</h2>
```

## Padded header

### Default padded header

<h2 class="padded-header">
    Header
</h2>

```
<h2 class="padded-header">
    Header
</h2>
```
## Fancy slug

### Default fancy slug

<h2 class="fancy-slug">
    <span class="fancy-slug_text">
        <span class="fancy-slug_ribbon-left"></span>
        Watchroom
        <span class="fancy-slug_ribbon-right"></span>
    </span>
</h2>

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

- meta-header_right should come first in the markup so that when it floats to the right it will appear on the same line as .meta-header_left.

- Note that the example shows .meta-header_left using the .category-slug pattern and .meta-header_right using the .date pattern but you could use other patterns in place of them. Or you can even swap them so that date is attached to .meta-header_left and .category-slug is attacked to .meta-header_right.


### Alternate meta header arrangements

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

- Just some random variations to show off what you could do.


## Links with icons

- Styles to enable adding an icon to a link and preventing the link's underline from extending under the icon.
- For the underlined icon prevention to work, you must wrap the link text with a `span.icon-link_text`. There can be no whitespace between the text and the opening and closing span tags.

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

- The modifier names match the cf-icon names of commonly-used icons.
- Icons appear to the right of a link, by default.


### Links with icons on the left (modifier)

<a class="icon-link icon-link__mail icon-link__before" href="#">
    <span class="icon-link_text">john.smith@cfpb.gov</span>
</a><br>
<a class="icon-link icon-link__phone icon-link__before" href="#">
    (123) 456-7890
</a>

```
<a class="icon-link icon-link__mail icon-link__before" href="#">
    <span class="icon-link_text">john.smith@cfpb.gov</span>
</a><br>
<a class="icon-link icon-link__phone icon-link__before" href="#">
    (123) 456-7890
</a>
```
- Simply add the `.icon-link__before` modifier to place the icon before the link text.
- You can omit the `span.icon-link_text` wrapper if you do not need an underline on a particular link.


### Non-wrapping icon links

<p>
    For more information, email
    <a class="icon-link icon-link__mail icon-link__no-wrap" href="#">
        <span class="icon-link_text">john.smith@cfpb.gov</span>
    </a>.
</p>

```
<p>
    For more information, email
    <a class="icon-link icon-link__mail icon-link__no-wrap" href="#">
        <span class="icon-link_text">john.smith@cfpb.gov</span>
    </a>.
</p>
```

- Warning: Icons added to inline links can sometimes break onto the next line. If you want to prevent this, you can add the `__no-wrap` modifier to `.icon-link`.


## Styled link

<a class="styled-link" href="#">
    Default styled link
</a>

```
<a class="styled-link" href="#">
    Default styled link
</a>
```

## Jump link

<a class="jump-link" href="#">
    <span class="jump-link_text">Default jump link</span>
</a>

```
<a class="jump-link" href="#">
    <span class="jump-link_text">Default jump link</span>
</a>
```

### .jump-link__large (modifier)

<a class="jump-link jump-link__large" href="#">
    <span class="jump-link_text">Large jump link</span>
</a>

```
<a class="jump-link jump-link__large" href="#">
    <span class="jump-link_text">Large jump link</span>
</a>
```

- 18px font-size, compared to the default of 16px

## .jump-link__<icon> (modifier)

<a class="jump-link jump-link__right" href="#">
    <span class="jump-link_text">Jump link using the right icon from cf-icons</span>
</a>

```
<a class="jump-link jump-link__right" href="#">
    <span class="jump-link_text">Jump link using the right icon from cf-icons</span>
</a>
```
- .jump-link extends .icon-link, so all that is needed to add an icon to a jump link is to add a modifier with the icon's name.


### .jump-link__before (modifier)

<a class="jump-link jump-link__left jump-link__before" href="#">
    <span class="jump-link_text">Jump link with icon on left</span>
</a>

```
<a class="jump-link jump-link__left jump-link__before" href="#">
    <span class="jump-link_text">Jump link with icon on left</span>
</a>
```

- Jump links can also have icons before the text, like icon links.


### .jump-link__bg (modifier)

<a class="jump-link jump-link__bg" href="#">
    <span class="jump-link_text">Jump link with grey background and
        solid borders on small screens</span>
</a>

```
<a class="jump-link jump-link__bg" href="#">
    <span class="jump-link_text">Jump link with grey background and
        solid borders on small screens</span>
</a>
```

## Block link


### .block-link

<a class="block-link" href="#">
    Default block link
</a>

```
<a class="block-link" href="#">
    Default block link
</a>
```

- Convert a standard inline link to a block-level element with padding, background, and borders.
- Primarily used within a max-width 599px media query (see .jump-link and .list__links).


## Unstyled list modifier

### Default example

<ul class="list list__unstyled">
    <li class="list_item">
        <a class="list_link">List item 1</a>
    </li>
    <li class="list_item">
        <a class="list_link">List item 2</a>
    </li>
    <li class="list_item">
        <a class="list_link">List item 3</a>
    </li>
</ul>

```
<ul class="list list__unstyled">
    <li class="list_item">
        <a class="list_link">List item 1</a>
    </li>
    <li class="list_item">
        <a class="list_link">List item 2</a>
    </li>
    <li class="list_item">
        <a class="list_link">List item 3</a>
    </li>
</ul>
```

## Spaced list modifier

### Default example

<ul class="list list__spaced">
    <li class="list_item">
        <a class="list_link">List item 1</a>
    </li>
    <li class="list_item">
        <a class="list_link">List item 2</a>
    </li>
    <li class="list_item">
        <a class="list_link">List item 3</a>
    </li>
</ul>

```
<ul class="list list__spaced">
    <li class="list_item">
        <a class="list_link">List item 1</a>
    </li>
    <li class="list_item">
        <a class="list_link">List item 2</a>
    </li>
    <li class="list_item">
        <a class="list_link">List item 3</a>
    </li>
</ul>
```

## Spaced list item modifier

### Default example

<ul class="list">
    <li class="list_item">
        <a class="list_link">List item 1</a>
    </li>
    <li class="list_item">
        <a class="list_link">List item 2</a>
    </li>
    <li class="list_item list_item__spaced">
        <a class="list_link">List item 3</a>
    </li>
    <li class="list_item">
        <a class="list_link">List item 4</a>
    </li>
</ul>

```
<ul class="list">
    <li class="list_item">
        <a class="list_link">List item 1</a>
    </li>
    <li class="list_item">
        <a class="list_link">List item 2</a>
    </li>
    <li class="list_item list_item__spaced">
        <a class="list_link">List item 3</a>
    </li>
    <li class="list_item">
        <a class="list_link">List item 4</a>
    </li>
</ul>
```

## Horizontal list modifier

### Default example

<ul class="list list__horizontal">
    <li class="list_item">
        <a class="list_link">List item 1</a>
    </li>
    <li class="list_item">
        <a class="list_link">List item 2</a>
    </li>
    <li class="list_item">
        <a class="list_link">List item 3</a>
    </li>
</ul>

```
<ul class="list list__horizontal">
    <li class="list_item">
        <a class="list_link">List item 1</a>
    </li>
    <li class="list_item">
        <a class="list_link">List item 2</a>
    </li>
    <li class="list_item">
        <a class="list_link">List item 3</a>
    </li>
</ul>
```

## Icon list modifier

- Set up a list with icons on the left, in place of bullets.
- Will need some more work to allow lines to wrap.

### Default example

<ul class="list list__icons">
    <li class="list_item">
        <span class="cf-icon cf-icon-email list_icon"></span>
        List item 1
    </li>
    <li class="list_item">
        <span class="cf-icon cf-icon-phone list_icon"></span>
        List item 1
    </li>
    <li class="list_item">
        <span class="cf-icon cf-icon-fax list_icon"></span>
        List item 1
    </li>
</ul>

```
<ul class="list list__icons">
    <li class="list_item">
        <span class="cf-icon cf-icon-email list_icon"></span>
        List item 1
    </li>
    <li class="list_item">
        <span class="cf-icon cf-icon-phone list_icon"></span>
        List item 1
    </li>
    <li class="list_item">
        <span class="cf-icon cf-icon-fax list_icon"></span>
        List item 1
    </li>
</ul>
```

## Link list modifier

- The link list modifier is intended to be used for lists where each item is a link. It converts to a finger-friendly link with a large tap area on smaller screens.

### Default example

<ul class="list list__links">
    <li class="list_item">
        <a class="list_link" href="#">List item 1</a>
    </li>
    <li class="list_item">
        <a class="list_link" href="#">List item 2</a>
    </li>
    <li class="list_item">
        <a class="list_link" href="#">List item 3</a>
    </li>
</ul>

```
<ul class="list list__links">
    <li class="list_item">
        <a class="list_link" href="#">List item 1</a>
    </li>
    <li class="list_item">
        <a class="list_link" href="#">List item 2</a>
    </li>
    <li class="list_item">
        <a class="list_link" href="#">List item 3</a>
    </li>
</ul>
```

### Link list with icons

<ul class="list list__links list__icons">
    <li class="list_item">
        <a class="list_link icon-link icon-link__before icon-link__email"
           href="#">
            <span class="icon-link_text">List item 1</span>
        </a>
    </li>
    <li class="list_item">
        <a class="list_link icon-link icon-link__before icon-link__phone"
           href="#">
            <span class="icon-link_text">List item 2</span>
        </a>
    </li>
    <li class="list_item">
        <a class="list_link icon-link icon-link__before icon-link__fax"
           href="#">
            <span class="icon-link_text">List item 3</span>
        </a>
    </li>
</ul>

```
<ul class="list list__links list__icons">
    <li class="list_item">
        <a class="list_link icon-link icon-link__before icon-link__email"
           href="#">
            <span class="icon-link_text">List item 1</span>
        </a>
    </li>
    <li class="list_item">
        <a class="list_link icon-link icon-link__before icon-link__phone"
           href="#">
            <span class="icon-link_text">List item 2</span>
        </a>
    </li>
    <li class="list_item">
        <a class="list_link icon-link icon-link__before icon-link__fax"
           href="#">
            <span class="icon-link_text">List item 3</span>
        </a>
    </li>
</ul>
```

## Custom bullet mixin

### Custom bullet

.custom-bullet(@text, @color, @offset, @size, @font, @type)

- Displays custom bullets to the left of specified elements as :before pseudo elements.

- To use, pass this mixin values for the bullet to be displayed: text, color, font size, and offset (distance away from the parent element the bullet should appear). Font family parameter is optional and defaults to inherited.

- Bullets are absolutely positioned outside of their parent's flow, so they will not receive certain properties applied to the parent (borders, text-decoration, etc).

- By default, custom bullets hang outside of their parent's content box (in the margin or padding if there is any). If you want the bullets to align with the left boundary of the parent's content box, give the parent a left margin value equal to the offset.


## Branded list modifier

### Branded list

<ul class="list__branded">
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ul>

```
<ul class="list__branded">
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ul>
```

- Uses .custom-bullet mixin to generate custom main-brand-color square bullets.
