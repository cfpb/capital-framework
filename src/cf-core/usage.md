# cf-core

The cf-core component acts as the backbone for Capital Framework.
It's made up of four child components `cf-vars`, `cf-media-queries`,
`cf-utilities`, and `cf-base`.

**NOTE: If you use any cf-core Less file directly,
  be sure to run the files through
  [Autoprefixer](https://github.com/postcss/autoprefixer),
  or your compiled Capital Framework CSS will
  not work perfectly in older browsers.**

## Table of contents

- [Variables](#variables)
    - [Color variables](#color-variables)
    - [Sizing variables](#sizing-variables)
    - [Breakpoint variables](#breakpoint-variables)
    - [Webfont variables](#webfont-variables)
- [Media queries](#media-queries)
    - [Respond to min and max mixins](#respond-to-min-and-max-width-mixins)
    - [Respond to range mixin](#respond-to-range-mixin)
    - [Respond to dpi mixin](#respond-to-dpi-mixin)
    - [Respond to print mixin](#respond-to-print-mixin)
- [Utilities](#utilities)
    - [Helper classes](#helper-classes)
    - [Mixins](#mixins)
- [Base typography](#base-typography)
    - [Webfonts](#webfonts)
    - [Type hierarchy](#type-hierarchy)
    - [Body copy vertical margins](#body-copy-vertical-margins)
    - [Default links](#default-links)
    - [Underlined links](#underlined-links)
    - [Lists](#lists)
    - [Tables](#tables)
    - [Block quote](#block-quote)
- [Base images](#base-images)
    - [Full-width images](#full-width-images)
    - [Figure](#figure)


## Variables

Theme variables for setting the color and sizes throughout the project.
Overwrite them in your own project by duplicating the variable `@key: value`.

### Color variables

Color variables referenced in comments are from [cf-core brand-palette.less](https://github.com/cfpb/capital-framework/blob/master/src/cf-core/src/cf-brand-colors.less).

```less
// body
@text:                   @black;

// a
@link-text:              @pacific;
@link-underline:         @pacific;
@link-text-visited:      @teal;
@link-underline-visited: @teal;
@link-text-hover:        @pacific-60;
@link-underline-hover:   @pacific-60;
@link-text-active:       @navy;
@link-underline-active:  @navy;

// table

@thead-text:             @text;
@thead-bg:               @gray-10;

@table-head-bg:          @thead-bg;
@table-cell-bg:          @white;
@table-cell-bg_alt:      @gray-5;
@table-scrolling-border: @gray-40;
@table-border:           @gray;

// code
@code-text:              @text;
@code-bg:                @gray-5;
```

### Sizing variables

```less
@base-font-size-px:   16px;
@base-line-height-px: 22px;
@base-line-height:    unit(@base-line-height-px / @base-font-size-px);

@size-xl:             48px; // Super-size

@size-i:              34px; // h1-size
@size-ii:             26px; // h2-size
@size-iii:            22px; // h3-size
@size-iv:             18px; // h4-size
@size-v:              14px; // h5-site
@size-vi:             12px; // h6-size
@size-code:           13px; // Custom size only for Mono code blocks
```

### Breakpoint variables

```less
@bp-xs-max:  600px;
@bp-sm-min:  @bp-xs-max + 1px;
@bp-sm-max:  900px;
@bp-med-min: @bp-sm-max + 1px;
@bp-med-max: 1020px;
@bp-lg-min:  @bp-med-max + 1px;
@bp-lg-max:  1230px;
@bp-xl-min:  @bp-lg-max + 1px;
```

### Webfont variables

```less
@webfont-regular: Arial;
@webfont-italic:  Arial;
@webfont-medium:  Arial;
@webfont-demi:    Arial;
```


## Media queries

Mixins for consistent media queries that take `px` values and convert them
to `em` values.

### Respond to min and max width mixins

These mixins take a `px` value breakpoint and set of style rules and converts
them to the corresponding min or max width media query.

```less
.respond-to-min(@bp, @rules);

.respond-to-max(@bp, @rules);
```

Ex.

```less
.respond-to-min( @bp-sm-min, {
    .title {
        font-size: 2em;
    }
} );

// Compiles to…
@media only all and (min-width: 37.5625em) {
    .title {
        font-size: 2em;
    }
}
```

### Respond to range mixin

This mixin takes both min and max `px` values and a set of style rules and
converts them to the corresponding min and max media query.

```less
.respond-to-range(@bp1, @bp2, @rules);
```

Ex.

```less
.respond-to-range( @bp-sm-min, @bp-sm-max, {
    .title {
        font-size: 2em;
    }
} );

// Compiles to…
@media only all and (min-width: 37.5625em) and (max-width: 56.25em) {
    .title {
        font-size: 2em;
    }
}
```

### Respond to dpi mixin

This mixin allows us to easily write styles
that target high-resolution screens,
such as Apple retina screens.

```less
// The following LESS…
.example {
    background: url(regular-resolution-image.png);
    .respond-to-dpi(2, {
        background-image: url(retina-image.png);
    });
}

// …Exports to
.example {
    background: url(regular-resolution-image.png);
}
@media (min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    .example {
        background-image: url(retina-image.png);
    }
}
```

### Respond to print mixin

This mixin allows us to easily write styles that target both
`@media print` and `.print`.

```less
// The following LESS…
.example {
    color: @gray;
    .respond-to-print({
        color: @black;
    });
}

// …Exports to
.example {
    color: #75787B;
}
@media print {
    .example {
        color: #101820;
    }
}
.print .example {
    color: #101820;
}
```


## Utilities

### Helper classes

#### JS only

Hide an element when JavaScript isn't available. Requires a small script in the
`<head>` of your `<html>` document that removes a `.no-js` class.

1. Add a `no-js` class to the `html`:

  ```
  <html class="no-js">
  ```

2. Add a script to remove the `no-js`
   class after confirming JavaScript is available:

  ```
  <script>
      // Confirm availability of JavaScript and remove no-js class from html.
      var docElement = document.documentElement;
      docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2');
  </script>
  ```

3. Add the utility class to the element you want to hide:

  ```
  <div class="u-js-only"></div>
  ```

#### Clearfix

Clear the floated elements to avoid having floated elements
flow around later ones.

For example, to float an element to the left, but prevent the following text
from flowing into it, use:

```
<div class="u-clearfix">
    <div style="float:left; width:100%; height:60px; background:black;"></div>
</div>
<em>This text would normally flow up into the black box if the box above</em>
```

**NOTE: For more information see
[this article](http://css-tricks.com/snippets/css/clear-fix).**

#### Visually hidden

Hide an element from view while keeping it accessible to screen readers.

For example, to create a link with a social network icon,
but allow sight-impaired users to understand the context,
add descriptive text with the `u-visually-hidden` class:

```
<h1>
    <a href="#">
        <span class="cf-icon cf-icon-twitter-square"></span>
        <span class="u-visually-hidden">Share on Twitter</span>
    </a>
</h1>
```

#### Totally hidden

Use `u-hidden` to hide an element from everything (including screen readers).
This is useful for dynamically hiding and showing content.
It is also useful for progressive enhancement.
For example, if you want to hide something initially on page load
but show it after checking for browser support,
use JavaScript to remove this class from the element after verifying support.

#### Inline block

**NOTE: DEPRECATED. Identical to `display: inline-block`.**

```
<div class="u-inline-block"></div>
```

#### Float right

Adds `float: right` to the element. Can be used as a mixin with `.u-right()`
to add right floating behavior to an element.

```
<div class="u-right"></div>
```

#### Break word

Force word breaks within an element. Useful for small containers where text may
over-run the width of the container.

**NOTE: This only works in Internet Explorer 8 when the element with the
`.u-break-word` class has layout. See
[this stackoverflow](http://stackoverflow.com/questions/3997223/word-wrapbreak-word-not-working-in-ie8)
for more information.**

<div class="u-break-word u-mb30"
     style="width: 100px; padding: 0.5em; border: 1px solid silver;">
    This link should break:
    <a href="#">
        something@example.com
    </a>
</div>
<div class="u-mb30"
     style="width: 100px; padding: 0.5em; border: 1px solid silver;">
    This link should not:
    <a href="#">
        something@example.com
    </a>
</div>

```
<div class="u-break-word">
    This link should break:
    <a href="#">
        something@example.com
    </a>
</div>

<div>
    This link should not:
    <a href="#">
        something@example.com
    </a>
</div>
```

#### Margin utilities

Force a `margin` top or bottom on an element in pixels.

```less
.u-m[p][#]
```

_`[p]` is the position, use `t` for top or `b` for bottom. `[#]` is the pixel
value, available options are 0, 5, 10, 15, 20, 30, 45, 60_

```
<h1 class="u-mb0">Heading with zero bottom margin</h1>
```

#### Width utilities

Set the `width` of an element in percentages.

<!-- NOTE: Inline style properties for demonstration only. -->
<div class="u-w100pct" style="background: #f4edf3; margin-bottom: 1px;">
    <code>.u-w100pct</code>
</div>
<div class="u-w90pct" style="background: #f4edf3; margin-bottom: 1px;">
    <code>.u-w90pct</code>
</div>
<div class="u-w80pct" style="background: #f4edf3; margin-bottom: 1px;">
    <code>.u-w80pct</code>
</div>
<div class="u-w70pct" style="background: #f4edf3; margin-bottom: 1px;">
    <code>.u-w70pct</code>
</div>
<div class="u-w60pct" style="background: #f4edf3; margin-bottom: 1px;">
    <code>.u-w60pct</code>
</div>
<div class="u-w50pct" style="background: #f4edf3; margin-bottom: 1px;">
    <code>.u-w50pct</code>
</div>
<div class="u-w40pct" style="background: #f4edf3; margin-bottom: 1px;">
    <code>.u-w40pct</code>
</div>
<div class="u-w30pct" style="background: #f4edf3; margin-bottom: 1px;">
    <code>.u-w30pct</code>
</div>
<div class="u-w20pct" style="background: #f4edf3; margin-bottom: 1px;">
    <code>.u-w20pct</code>
</div>
<div class="u-w10pct" style="background: #f4edf3; margin-bottom: 1px;">
    <code>.u-w10pct</code>
</div>
<div class="u-w75pct" style="background: #f4edf3; margin-bottom: 1px;">
    <code>.u-w75pct</code>
</div>
<div class="u-w25pct" style="background: #f4edf3; margin-bottom: 1px;">
    <code>.u-w25pct</code>
</div>
<div class="u-w66pct" style="background: #f4edf3; margin-bottom: 1px;">
    <code>.u-w66pct</code>
</div>
<div class="u-w33pct" style="background: #f4edf3; margin-bottom: 1px;">
    <code>.u-w33pct</code>
</div>

```
<div class="u-w100pct" style="background: #f4edf3; margin-bottom: 1px;">
    <code>.u-w100pct</code>
</div>
<div class="u-w90pct" style="background: #f4edf3; margin-bottom: 1px;">
    <code>.u-w90pct</code>
</div>
<div class="u-w80pct" style="background: #f4edf3; margin-bottom: 1px;">
    <code>.u-w80pct</code>
</div>
<div class="u-w70pct" style="background: #f4edf3; margin-bottom: 1px;">
    <code>.u-w70pct</code>
</div>
<div class="u-w60pct" style="background: #f4edf3; margin-bottom: 1px;">
    <code>.u-w60pct</code>
</div>
<div class="u-w50pct" style="background: #f4edf3; margin-bottom: 1px;">
    <code>.u-w50pct</code>
</div>
<div class="u-w40pct" style="background: #f4edf3; margin-bottom: 1px;">
    <code>.u-w40pct</code>
</div>
<div class="u-w30pct" style="background: #f4edf3; margin-bottom: 1px;">
    <code>.u-w30pct</code>
</div>
<div class="u-w20pct" style="background: #f4edf3; margin-bottom: 1px;">
    <code>.u-w20pct</code>
</div>
<div class="u-w10pct" style="background: #f4edf3; margin-bottom: 1px;">
    <code>.u-w10pct</code>
</div>
<div class="u-w75pct" style="background: #f4edf3; margin-bottom: 1px;">
    <code>.u-w75pct</code>
</div>
<div class="u-w25pct" style="background: #f4edf3; margin-bottom: 1px;">
    <code>.u-w25pct</code>
</div>
<div class="u-w66pct" style="background: #f4edf3; margin-bottom: 1px;">
    <code>.u-w66pct</code>
</div>
<div class="u-w33pct" style="background: #f4edf3; margin-bottom: 1px;">
    <code>.u-w33pct</code>
</div>
```

#### Width-specific display

Show or hide content based on the current display size.

##### Show on mobile

Displays content on a screen width under `601px`.

<!-- NOTE: Inline style properties for demonstration only. -->
<div style="border: 1px solid black; min-height: 22px; padding: 5px;">
    <p class="u-show-on-mobile">Visible on mobile</p>
</div>

```
<p class="u-show-on-mobile">Visible on mobile</p>
```

##### Hide on mobile

Hides content on a screen width under `601px`.

<!-- NOTE: Inline style properties for demonstration only. -->
<div style="border: 1px solid black; min-height: 22px; padding: 5px;">
    <p class="u-hide-on-mobile">Hidden on mobile</p>
</div>

```
<p class="u-hide-on-mobile">Hidden on mobile</p>
```

### Mixins

#### Align with button

Align an element vertically with the text within a button that may be to either
side.

_Pass `font-size` as the argument for calculating spacing, default value is
`@base-font-size-px`._

```less
.u-align-with-btn(@font-size: @base-font-size-px);
```

#### Flexible proportional containers

Utilize intrinsic ratios to create a flexible container that retains an aspect
ratio. When `<img>` tags scale they retain their aspect ratio, but if you need
a flexible video you will need to use this mixin.

_Read more about intrinsic ratios:
<http://alistapart.com/article/creating-intrinsic-ratios-for-video>_

```less
.u-flexible-container-mixin(@width: 16, @height: 9);
```

In addition to the mixin, there are two default classes available for building
16:9 and 4:3 containers.

_When using the mixin, pass the `width` as the first argument, and the `height`
as the second argument. Default values are `16, 9`._

_Original mixin credit: <https://gist.github.com/craigmdennis/6655047>_

To create a 16:9 flexible video player, wrap the video element in an element
with `u-flexible-container` and add the `u-flexible-container_inner` to the
video element.

<!-- NOTE: Inline style properties for demonstration only. -->
<div class="u-flexible-container">
    <video class="u-flexible-container_inner"
           style="background:#75787B;"
           controls>
    </video>
</div>

```
<div class="u-flexible-container">
    <video class="u-flexible-container_inner"
           style="background:#75787B;"
           controls>
    </video>
</div>
```

To create a flexible container with only a background (no inner video or object
element), ommit the inner container.

<div class="u-flexible-container"
     style="background-image: url(http://placekitten.com/700/394);
            background-position: center center;
            background-repeat: no-repeat;"></div>

```
<div class="u-flexible-container"
     style="background-image: url(http://placekitten.com/700/394);
            background-position: center center;
            background-repeat: no-repeat;"></div>
```

To create a 4:3 flexible video player, add the `__4_3` modifier to the container

<div class="u-flexible-container u-flexible-container__4-3">
    <video class="u-flexible-container_inner"
           style="background:#75787B;"
           controls>
    </video>
</div>

```
<div class="u-flexible-container u-flexible-container__4-3">
    <video class="u-flexible-container_inner"
           style="background:#75787B;"
           controls>
    </video>
</div>
```

#### Link modifiers

Modify link properties using the following mixins.

##### Link colors

Calling the mixin without arguments will set the following states:
default - `#0071bc`, `:hover` - `#205493`, `focus:` - `#0071bc`,
`:visited` - `#4c2c92`, `:active` - `#046b99`.

```less
u-link__colors()
```

Passing a single argument into the mixin will set the color for the
default, `:visited`, `:hover`, `:focus`, `:active` states.

```less
u-link__colors(@c)
```

Passing two arguments into the mixin will set the color for the default,
`:visited`, and `:active` states as the first argument, and `:hover` and
`:focus` as the second argument.

```less
u-link__colors(@c, @h)
```

Passing five arguments will set the color for the default, `:visited`,
`:hover`, `:focus`, and `:active` states respectively.

```less
u-link__colors(@c, @v, @h, @f, @a)
```

Passing ten arguments will set the text (default, `:visited`, `:hover`,
`:focus`, and `:active` states in the first five arguments) and border colors
(default, `:visited`, `:hover`, `:focus`, and `:active` states in the
following five arguments) separately.

```less
u-link__colors(@c, @v, @h, @f, @a, @bc, @bv, @bh, @bf, @ba)
```

**NOTE: A base mixin of `u-link__colors-base()` exists, but please refrain from
using this mixin directly in order to promote consistent naming throughout
this project. If you need to set colors for all states of a link, use
`.u-link__colors(@c, @v, @h, @f, @a)`.**

##### Link borders

Force the default bottom `border` on the default and `:hover` states.

```less
.u-link__border()
```

Turn off the default bottom `border` on the default and `:hover` states.

```less
.u-link__no-border()
```

Turn off the default bottom `border` on the default state but force a bottom
`border` on the `:hover` state.

```less
.u-link__hover-border()
```

##### Link children

Calling this mixin without arguments will set the default color for the
`:hover` state of a child within a link, without affecting the link itself.

```less
.u-link__hover-child()
```

Passing a single argument into the mixin will set a custom color for the
`:hover` state of a child within a link, without affecting the link itself.

```less
.u-link__hover-child(@c)
```

#### Small text utility

##### Class

Sets the element to `14px` (in `em`s).

_To be used on default `16px` text only. To use on text set to another size,
use the mixin below._

```less
.u-small-text
```

##### Mixin

Sets the element to `14px` (in `em`s) based on the text size passed as
`@context`.

```less
.u-small-text(@context)
```

```less
// Ex.
.example {
  font-size: unit(20px / @base-font-size-px, em);

  small {
    .u-small-text(20px);
  }
}

// Compiles to…
.example {
  font-size: 1.25em;
}

.example small {
  font-size: 0.7em;
}
```


## Base typography

### Webfonts

Sets the font-stack, weight, and style of an element.

```less
.u-webfont-regular();
.u-webfont-italic();
.u-webfont-medium();
.u-webfont-demi();
```

To use your own fonts in the webfont mixins, set your own font with the
`@webfont-regular/italic/medium/demi` variables in your `cf-theme-overrides.less`
file.

**NOTE: These mixins also add the appropriate `.lt-ie9` overrides. `.lt-ie9`
overrides are necessary to override `font-style` and `font-weight` each time
the webfont is used. These overrides are built into the webfont mixins so you
get them automatically. Note that this requires you to use conditional
classes on the `html` element:
<https://github.com/h5bp/html5-boilerplate/blob/v4.3.0/doc/html.md#conditional-html-classes.>**

### Type hierarchy

#### Default body type

<p>Lorem ipsum dolor sit amet, <em>consectetur adipisicing elit</em>, sed do
eiusmod <strong>tempor incididunt</strong> ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.</p>

```
<p>Lorem ipsum dolor sit amet, <em>consectetur adipisicing elit</em>, sed do
eiusmod <strong>tempor incididunt</strong> ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
aliquip ex ea commodo consequat.</p>
```

#### Heading level 1

_Responsive heading. At small screen sizes, displays as heading level 2._

<div>
    <h1>Example heading element</h1>
    <p class="h1">A non-heading element</p>
</div>

```
<h1>Example heading element</h1>
<p class="h1">A non-heading element</p>
```

#### Heading level 2

_Responsive heading. At small screen sizes, displays as heading level 3._

<div>
    <h2>Example heading element</h2>
    <p class="h2">A non-heading element</p>
</div>

```
<h2>Example heading element</h2>
<p class="h2">A non-heading element</p>
```

#### Heading level 3

_Responsive heading. At small screen sizes, displays as heading level 4._

<div>
    <h3>Example heading element</h3>
    <p class="h3">A non-heading element</p>
</div>

```
<h3>Example heading element</h3>
<p class="h3">A non-heading element</p>
```

#### Heading level 4

_Not a responsive heading._

<div>
    <h4>Example heading element</h4>
    <p class="h4">A non-heading element</p>
</div>

```
<h4>Example heading element</h4>
<p class="h4">A non-heading element</p>
```

#### Heading level 5

_Not a responsive heading._

<div>
    <h5>Example heading element</h5>
    <p class="h5">A non-heading element</p>
</div>

```
<h5>Example heading element</h5>
<p class="h5">A non-heading element</p>
```

#### Heading level 6

_Not a responsive heading._

<div>
    <h6>Example heading element</h6>
    <p class="h6">A non-heading element</p>
</div>

```
<h6>Example heading element</h6>
<p class="h6">A non-heading element</p>
```

#### Lead paragraph

_Responsive text. Displays as a Heading 3 on large screens; displays at Heading
4 size (but still Regular weight) on small screens._

<p class="lead-paragraph">Ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

```
<p class="lead-paragraph">Ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
```

#### Display heading (aka "superheading")

<h1 class="superheading">Example display heading</h1>

```
<h1 class="superheading">Example display heading</h1>
```

### Body copy vertical margins

- Applies `15px` bottom `margin` to all `p`, `ul`, `ol`, `dl`, `figure`,
  `table`, and `blockquote` elements.
- Applies `-5px` top `margin` to lists following paragraphs to reduce `margin`
  between them to `10px`.
- Applies `8px` bottom `margin` to list items that are not within a `nav`
  element.
- Assumes that the font size of each of these items remains the default.

<p>Paragraph margin example</p>
<p>Paragraph margin example</p>
<ul>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
</ul>
<p>Paragraph margin example</p>

```
<p>Paragraph margin example</p>
<p>Paragraph margin example</p>
<ul>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
</ul>
<p>Paragraph margin example</p>
```

### Default links

_Note that the `.visited`, `.hover`, `.focus`, `.active` classes are for
demonstration purposes only and should not be used in production._

#### Default state

<a href="#">Default link style</a>

```
<a href="#">Default link style</a>
```

#### Visited state

<a href="#" class="visited">Visited link style</a>

```
<a href="#" class="visited">Visited link style</a>
```

#### Hovered state

<a href="#" class="hover">Visited link style</a>

```
<a href="#" class="hover">Visited link style</a>
```

#### Focused state

<a href="#" class="focus">Visited link style</a>

```
<a href="#" class="focus">Visited link style</a>
```

#### Active state

<a href="#" class="active">Visited link style</a>

```
<a href="#" class="active">Visited link style</a>
```

### Underlined links

Links are automatically underlined when they are a child of a `p`, `li`, or
`dd`. To enable them elsewhere, simply add a `border-bottom-width: 1px;` to
the link.

_Note that the `.visited`, `.hover`, `.focus`, `.active` classes are for
demonstration purposes only and should not be used in production._

#### States

<p>
    <a href="#">Default</a>,
    <a href="#" class="visited">Visited</a>,
    <a href="#" class="hover">Hovered</a>,
    <a href="#" class="focus">Focused</a>,
    <a href="#" class="active">Active</a>
</p>

```
<p>
    <a href="#">Default</a>,
    <a href="#" class="visited">Visited</a>,
    <a href="#" class="hover">Hovered</a>,
    <a href="#" class="focus">Focused</a>,
    <a href="#" class="active">Active</a>
</p>
```

#### Underline conditions

<div>
    <p>
        <a href="#">A child of a paragraph</a>
    </p>
    <ul>
        <li>
            <a href="#">A child of a list item</a>
        </li>
    </ul>
    <dl>
        <dt>
            Definition list term
        </dt>
        <dd>
            <a href="#">A child of a definition list description</a>
        </dd>
    </dl>
</div>

```
<p>
    <a href="#">A child of a paragraph</a>
</p>
<ul>
    <li>
        <a href="#">A child of a list item</a>
    </li>
</ul>
<dl>
    <dt>
        Definition list term
    </dt>
    <dd>
        <a href="#">A child of a definition list description</a>
    </dd>
</dl>
```

#### Exceptions for underlined links

Links within a `nav` element are not underlined.

<nav>
    <p>
        <a href="#">A child of a paragraph</a>
    </p>
    <ul>
        <li>
            <a href="#">A child of a list item</a>
        </li>
    </ul>
    <dl>
        <dt>
            Definition list term
        </dt>
        <dd>
            <a href="#">A child of a definition list description</a>
        </dd>
    </dl>
</nav>

```
<nav>
    <p>
        <a href="#">A child of a paragraph</a>
    </p>
    <ul>
        <li>
            <a href="#">A child of a list item</a>
        </li>
    </ul>
    <dl>
        <dt>
            Definition list term
        </dt>
        <dd>
            <a href="#">A child of a definition list description</a>
        </dd>
    </dl>
</nav>
```

### Lists

#### Unordered list

<div>
    <p> Paragraph example for visual reference</p>
    <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
    </ul>
</div>

```
<p> Paragraph example for visual reference</p>
<ul>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
</ul>
```

#### Ordered list

<div>
    <p>Paragraph example for visual reference</p>
    <ol>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
    </ol>
</div>

```
<p>Paragraph example for visual reference</p>
<ol>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
</ol>
```

### Tables

#### Standard table

<table>
    <thead>
        <tr>
            <th>Column 1 header</th>
            <th>Column 2 header</th>
            <th>Column 3 header</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Row 1, column 1</td>
            <td>Row 1, column 2</td>
            <td>Row 1, column 3</td>
        </tr>
        <tr>
            <td>Row 2, column 1</td>
            <td>Row 2, column 2</td>
            <td>Row 2, column 3</td>
        </tr>
        <tr>
            <td>Row 3, column 1</td>
            <td>Row 3, column 2</td>
            <td>Row 3, column 3</td>
        </tr>
    </tbody>
</table>

```
<table>
    <thead>
        <tr>
            <th>Column 1 header</th>
            <th>Column 2 header</th>
            <th>Column 3 header</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Row 1, column 1</td>
            <td>Row 1, column 2</td>
            <td>Row 1, column 3</td>
        </tr>
        <tr>
            <td>Row 2, column 1</td>
            <td>Row 2, column 2</td>
            <td>Row 2, column 3</td>
        </tr>
        <tr>
            <td>Row 3, column 1</td>
            <td>Row 3, column 2</td>
            <td>Row 3, column 3</td>
        </tr>
    </tbody>
</table>
```

### Block quote

The use of a `blockquote` is to quote an external work. See
`.pull-quote` if you need to highlight an excerpt from the current work.

**NOTE: It is best practice to document the URL of a quoted work using
the `cite` attribute.**

<blockquote cite="link-to-source">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
    similique fugit hic eligendi praesentium officiis illum optio iusto
    commodi eum tempore nisi ad in perferendis enim quo dolores.
    Reprehenderit similique earum quibusdam possimus vitae esse
    nesciunt mollitia sed beatae aliquid dolores iure a impedit quam
    minus eum modi illum ducimus eligendi eveniet labore non sequi
    voluptate et totam praesentium animi itaque asperiores dolorum
    sunt laudantium repellat nam commodi. Perspiciatis natus aliquam
    veniam officiis ducimus voluptatum ut necessitatibus non!
</blockquote>

```
<blockquote cite="link-to-source">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
    similique fugit hic eligendi praesentium officiis illum optio iusto
    commodi eum tempore nisi ad in perferendis enim quo dolores.
    Reprehenderit similique earum quibusdam possimus vitae esse
    nesciunt mollitia sed beatae aliquid dolores iure a impedit quam
    minus eum modi illum ducimus eligendi eveniet labore non sequi
    voluptate et totam praesentium animi itaque asperiores dolorum
    sunt laudantium repellat nam commodi. Perspiciatis natus aliquam
    veniam officiis ducimus voluptatum ut necessitatibus non!
</blockquote>
```


## Base images

### Full-width images

Gives all images a default `max-width` of `100%` of their container.

<img src="http://placekitten.com/800/40" alt="">

```
<img src="http://placekitten.com/800/40" alt="">
```

### Figure

Resets browser default side `margins` for `figure` to `0`,
and removes bottom inline spacing from `img` elements within.

<figure>
    <img src="http://placekitten.com/340/320">
</figure>

```
<figure>
    <img src="http://placekitten.com/340/320">
</figure>
```

## Code blocks

### Inline code

<p>This is an example of paragraph text <code>&lt;a href="#"&gt;Test Link&lt;/a&gt;</code> with an inline code block</p>

```
<p>This is an example of paragraph text with an inline code block <code>&lt;a href="#" class="a-btn" title="Test button"&gt;Anchor Tag&lt;/a&gt;</code></p>
```

### Fenced code block

This is an example of a fenced code block following some paragraph text.

<pre>
<code>&lt;a href="#" class="a-btn" title="Test button"&gt;Anchor Tag&lt;/a&gt;
&lt;button class="a-btn" title="Test button"&gt;Button Tag&lt;/button&gt;
&lt;input type="submit" value="Input Tag" class="a-btn"&gt;</code>
</pre>

```
<pre>
<code>&lt;a href="#" class="a-btn" title="Test button"&gt;Anchor Tag&lt;/a&gt;
&lt;button class="a-btn" title="Test button"&gt;Button Tag&lt;/button&gt;
&lt;input type="submit" value="Input Tag" class="a-btn"&gt;</code>
</pre>
```

**NOTE: Do not include indentation or white space within the `<code>` tags unless you want it to be rendered.**
