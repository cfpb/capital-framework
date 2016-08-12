A set of HTML and CSS layout helpers.


## Dependencies

- cf-core
- cf-grid


## Variables

Theme variables for setting the color and sizes.
Overwrite them in your own project by duplicating the variable `@key: value`.

Ex. to change the color of your main content border
add `@content_main-border: #cc0000;` to your project.

### Color variables

```
// .block
@block__bg:                     lighten(#3a8899, 55%);
@block__border:                 #3a8899;
@block__border-top:             @block__border;
@block__border-right:           @block__border;
@block__border-bottom:          @block__border;
@block__border-left:            @block__border;

// .content_main
@content_main-border:           #3a8899;

// .content_sidebar
@content_sidebar-bg:            lighten(#3a8899, 55%);
@content_sidebar-border:        #3a8899;

// .content_bar
@content_bar:                   #3a8899;

// .content_line
@content_line:                  #3a8899;

// .grid_column__top-divider
@grid_column__top-divider:      #3a8899;

// .grid_column__top-divider
@grid_column__left-divider:     #3a8899;
```


## Content layouts

### Standard content columns

<div class="content-l">
    <div class="content-l_col content-l_col-1">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Full-width column (spans 12 columns)
        </div>
    </div>
    <div class="content-l_col content-l_col-1-2">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Half-width column (spans 6/12 columns)
        </div>
    </div>
    <div class="content-l_col content-l_col-1-2">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Half-width column (spans 6/12 columns)
        </div>
    </div>
    <div class="content-l_col content-l_col-1-3">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Third-width column (spans 4/12 columns)
        </div>
    </div>
    <div class="content-l_col content-l_col-1-3">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Third-width column (spans 4/12 columns)
        </div>
    </div>
    <div class="content-l_col content-l_col-1-3">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Third-width column (spans 4/12 columns)
        </div>
    </div>
    <div class="content-l_col content-l_col-2-3">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Two thirds-width column (spans 8/12 columns)
        </div>
    </div>
    <div class="content-l_col content-l_col-1-3">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Third-width column (spans 4/12 columns)
        </div>
    </div>
    <div class="content-l_col content-l_col-1-4">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;">
            Quarter width column (spans 3/12 columns)
        </div>
    </div>
    <div class="content-l_col content-l_col-3-4">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;">
            Three-quarter width column (spans 9/12 columns)
        </div>
    </div>
</div>

```
<div class="content-l">
    <div class="content-l_col content-l_col-1">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Full-width column (spans 12 columns)
        </div>
    </div>
    <div class="content-l_col content-l_col-1-2">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Half-width column (spans 6/12 columns)
        </div>
    </div>
    <div class="content-l_col content-l_col-1-2">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Half-width column (spans 6/12 columns)
        </div>
    </div>
    <div class="content-l_col content-l_col-1-3">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Third-width column (spans 4/12 columns)
        </div>
    </div>
    <div class="content-l_col content-l_col-1-3">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Third-width column (spans 4/12 columns)
        </div>
    </div>
    <div class="content-l_col content-l_col-1-3">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Third-width column (spans 4/12 columns)
        </div>
    </div>
    <div class="content-l_col content-l_col-2-3">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Two thirds-width column (spans 8/12 columns)
        </div>
    </div>
    <div class="content-l_col content-l_col-1-3">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Third-width column (spans 4/12 columns)
        </div>
    </div>
    <div class="content-l_col content-l_col-1-4">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;">
            Quarter width column (spans 3/12 columns)
        </div>
    </div>
    <div class="content-l_col content-l_col-3-4">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;">
            Three-quarter width column (spans 9/12 columns)
        </div>
    </div>
</div>
```

### Large gutters modifier

<div class="content-l content-l__main  content-l__large-gutters">
    <div class="content-l_col content-l_col-1">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Full-width column (spans 12 columns)
        </div>
    </div>
</div>
<div class="content-l content-l__main  content-l__large-gutters">
    <div class="content-l_col content-l_col-1-2">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Half-width column (spans 6/12 columns)
        </div>
    </div>
    <div class="content-l_col content-l_col-1-2">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Half-width column (spans 6/12 columns)
        </div>
    </div>
</div>

```
<div class="content-l content-l__main  content-l__large-gutters">
    <div class="content-l_col content-l_col-1">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Full-width column (spans 12 columns)
        </div>
    </div>
</div>
<div class="content-l content-l__main  content-l__large-gutters">
    <div class="content-l_col content-l_col-1-2">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Half-width column (spans 6/12 columns)
        </div>
    </div>
    <div class="content-l_col content-l_col-1-2">
        <div style="background: #F1F2F2;
                    text-align: center;
                    padding: 8px;
                    margin-bottom: 4px;">
            Half-width column (spans 6/12 columns)
        </div>
    </div>
</div>
```


## Content layout column dividers

Adds dividers between specified `.content-l_col-X-X` classes.

Layout dividers work in conjunction with `.content-l_col-X-X` elements and have
specific needs depending on which column element variant they are attached to.
For example `.content-l_col-1-2` has different divider needs than `.content-l_col-1-3`
because they may break to single columns at different breakpoints.

Dividers use absolute positioning relative to the .content-l element and depend
on `.content-l` using `position: relative;`.
This allows vertical dividers to span the height of the tallest column.
Just be aware that if you have more than one row of columns,
and each row has columns of different widths, the borders will cause unwanted
overlapping since they will span the height of the entire .content-l element.

<div class="content-l content-l__large-gutters">
    <div class="content-l_col content-l_col-1-2">
        <img src="http://placekitten.com/600/320" alt="Placeholder image">
        <br>
        Half-width column (spans 6/12 columns)
    </div>
    <div class="content-l_col content-l_col-1-2 content-l_col__before-divider">
        <img src="http://placekitten.com/600/320" alt="Placeholder image">
        <br>
        Half-width column (spans 6/12 columns)
    </div>
</div>
<br>
<div class="content-l content-l__large-gutters">
    <div class="content-l_col content-l_col-1-3">
        Third-width column (spans 4/12 columns)
    </div>
    <div class="content-l_col content-l_col-1-3 content-l_col__before-divider">
        Third-width column (spans 4/12 columns)
    </div>
    <div class="content-l_col content-l_col-1-3 content-l_col__before-divider">
        Third-width column (spans 4/12 columns)
    </div>
</div>

```
<div class="content-l content-l__large-gutters">
    <div class="content-l_col content-l_col-1-2">
        <img src="http://placekitten.com/600/320" alt="Placeholder image">
        <br>
        Half-width column (spans 6/12 columns)
    </div>
    <div class="content-l_col content-l_col-1-2 content-l_col__before-divider">
        <img src="http://placekitten.com/600/320" alt="Placeholder image">
        <br>
        Half-width column (spans 6/12 columns)
    </div>
</div>
<br>
<!-- Starting a new .content-l so that the dividers from
     .content-l_col.content-l_col-1-2.content-l_col__before-divider
     won't overlap the .content-l_col-1-3 columns. -->
<div class="content-l content-l__large-gutters">
    <div class="content-l_col content-l_col-1-3">
        Third-width column (spans 4/12 columns)
    </div>
    <div class="content-l_col content-l_col-1-3 content-l_col__before-divider">
        Third-width column (spans 4/12 columns)
    </div>
    <div class="content-l_col content-l_col-1-3 content-l_col__before-divider">
        Third-width column (spans 4/12 columns)
    </div>
</div>
```


## Content bar

A 10 pixel bar that divides the header or hero from the main content.
This is necessary because we don't have a predictable place to put a full-width border.
It needs to be under the hero on pages with heroes, but under the header if there is no hero.
``.content_bar` must come after ``.content_hero` but before ``.content_wrapper`.

<div class="content_bar"></div>

```
<div class="content_bar"></div>
```


## Content line

A 1 pixel edge to edge bar that can divide content.

<div class="content_line"></div>

```
<div class="content_line"></div>
```


## Main content and sidebar

Standard layout for the main content area and sidebar.

By default `.content_main` and `.content_sidebar` stack vertically.
When using the modifiers described below to create columns,
the columns will remain stacked for smaller screens and then convert to to columns at 801px.

`.content_bar` must come after `.content_hero` (if it exists) but before `.content_wrapper`.
Inline styling is for demonstration purposes only; do not include it in your markup.

<main class="content" role="main">
    <section class="content_hero" style="background: #E3E4E5">
        Content hero
    </section>
    <div class="content_bar"></div>
    <div class="content_wrapper">
        <section class="content_main">
            Main content area
        </section>
        <aside class="content_sidebar" style="background: #F1F2F2">
            Sidebar
        </aside>
    </div>
</main>

```
<main class="content" role="main">
    <section class="content_hero" style="background: #E3E4E5">
        Content hero
    </section>
    <div class="content_bar"></div>
    <div class="content_wrapper">
        <section class="content_main">
            Main content area
        </section>
        <aside class="content_sidebar" style="background: #F1F2F2">
            Sidebar
        </aside>
    </div>
</main>
```


## Left-hand navigation layout

Add a class of `.content__L-R` to `main.content` to determine the width ratio of `.content_main` and `.content_sidebar`,
where 'L' is the left-hand item and 'R' is the right-hand item.
The two common configurations are 1-3 (sidebar on the left, content on the right, in a ratio of 1:3)
and 2-1 (content on the left, sidebar on the right, in a ratio of 2:1).

It is assumed that the content is wider than the sidebar.

<main class="content content__1-3" role="main">
    <div class="content_bar"></div>
    <div class="content_wrapper">
        <aside class="content_sidebar">
            Section navigation
        </aside>
        <section class="content_main">
            <h2>Main content area</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cum corrupti tempora nam nihil qui mollitia consectetur
                corporis nemo culpa dolorum! Laborum at eos deleniti
                consequatur itaque officiis debitis quisquam! Provident!
            </p>
        </section>
    </div>
</main>
<footer class="footer" role="contentinfo">
    <div class="wrapper">
        Footer
    </div>
</footer>

```
<main class="content content__1-3" role="main">
    <div class="content_bar"></div>
    <div class="content_wrapper">
        <aside class="content_sidebar">
            Section navigation
        </aside>
        <section class="content_main">
            <h2>Main content area</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cum corrupti tempora nam nihil qui mollitia consectetur
                corporis nemo culpa dolorum! Laborum at eos deleniti
                consequatur itaque officiis debitis quisquam! Provident!
            </p>
        </section>
    </div>
</main>
<footer class="footer" role="contentinfo">
    <div class="wrapper">
        Footer
    </div>
</footer>
```


## Right-hand sidebar layout

Add a class of `.content__L-R` to `main.content` to determine the width ratio of `.content_main` and `.content_sidebar`,
where 'L' is the left-hand item and 'R' is the right-hand item.
The two common configurations are 1-3 (sidebar on the left, content on the right, in a ratio of 1:3)
and 2-1 (content on the left, sidebar on the right, in a ratio of 2:1).
It is assumed that the content is wider than the sidebar.

Inline styling is for demonstration purposes only; do not include it in your markup.

<main class="content content__2-1" role="main">
    <div class="content_bar"></div>
    <div class="content_wrapper">
        <section class="content_main">
            <h2>Main content area</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cum corrupti tempora nam nihil qui mollitia consectetur
                corporis nemo culpa dolorum! Laborum at eos deleniti
                consequatur itaque officiis debitis quisquam! Provident!
            </p>
        </section>
        <aside class="content_sidebar" style="background: #F1F2F2">
            Sidebar
        </aside>
    </div>
</main>
<footer class="footer" role="contentinfo">
    <div class="wrapper">
        Footer
    </div>
</footer>

```
<main class="content content__2-1" role="main">
    <div class="content_bar"></div>
    <div class="content_wrapper">
        <section class="content_main">
            <h2>Main content area</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cum corrupti tempora nam nihil qui mollitia consectetur
                corporis nemo culpa dolorum! Laborum at eos deleniti
                consequatur itaque officiis debitis quisquam! Provident!
            </p>
        </section>
        <aside class="content_sidebar" style="background: #F1F2F2">
            Sidebar
        </aside>
    </div>
</main>
<footer class="footer" role="contentinfo">
    <div class="wrapper">
        Footer
    </div>
</footer>
```


## Narrow content column option

Add a class of `.content_main__narrow` to `.content_main` to get a one-column
(in a 12-column grid) gutter on the right side.

Inline styling is for demonstration purposes only; do not include it in your markup.

<main class="content content__2-1" role="main">
    <div class="content_bar"></div>
    <div class="content_wrapper">
        <section class="content_main content_main__narrow">
            <h2>Main content area</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cum corrupti tempora nam nihil qui mollitia consectetur
                corporis nemo culpa dolorum! Laborum at eos deleniti
                consequatur itaque officiis debitis quisquam! Provident!
            </p>
        </section>
        <aside class="content_sidebar" style="background: #F1F2F2">
            Sidebar
        </aside>
    </div>
</main>
<footer class="footer" role="contentinfo">
    <div class="wrapper">
        Footer
    </div>
</footer>

```
<main class="content content__2-1" role="main">
    <div class="content_bar"></div>
    <div class="content_wrapper">
        <section class="content_main content_main__narrow">
            <h2>Main content area</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cum corrupti tempora nam nihil qui mollitia consectetur
                corporis nemo culpa dolorum! Laborum at eos deleniti
                consequatur itaque officiis debitis quisquam! Provident!
            </p>
        </section>
        <aside class="content_sidebar" style="background: #F1F2F2">
            Sidebar
        </aside>
    </div>
</main>
<footer class="footer" role="contentinfo">
    <div class="wrapper">
        Footer
    </div>
</footer>
```


## Flush bottom modifier

Add a class of `.content__flush-bottom` to `.content_main` or content_sidebar to remove bottom padding.

<main class="content content__1-3" role="main">
    <div class="content_bar"></div>
    <div class="content_wrapper">
        <aside class="content_sidebar content__flush-bottom">
            Side with no bottom padding...
        </aside>
        <section class="content_main content__flush-bottom">
            Main content with no bottom padding...
            <div class="block
                        block__flush-bottom
                        block__flush-sides
                        block__bg">
                .content__flush-bottom is very useful when you have a
                content block inside of .content_main with a background
                and flush sides.
            </div>
        </section>
    </div>
</main>
<footer class="footer" role="contentinfo">
    <div class="wrapper">
        Footer
    </div>
</footer>

```
<main class="content content__1-3" role="main">
    <div class="content_bar"></div>
    <div class="content_wrapper">
        <aside class="content_sidebar content__flush-bottom">
            Side with no bottom padding...
        </aside>
        <section class="content_main content__flush-bottom">
            Main content with no bottom padding...
            <div class="block
                        block__flush-bottom
                        block__flush-sides
                        block__bg">
                .content__flush-bottom is very useful when you have a
                content block inside of .content_main with a background
                and flush sides.
            </div>
        </section>
    </div>
</main>
<footer class="footer" role="contentinfo">
    <div class="wrapper">
        Footer
    </div>
</footer>
```

## Flush top modifier (only on small screens)

Add a class of `.content__flush-top-on-small` to `.content_main` or `.content_sidebar`
to remove top padding on small screens only.
'Small' screens in this case refers to the breakpoint where `.content_main` and
`.content_sidebar` single column layout.

<main class="content content__1-3" role="main">
    <div class="content_bar"></div>
    <div class="content_wrapper">
        <aside class="content_sidebar content__flush-top-on-small">
            Side with no top padding on small screens...
        </aside>
        <section class="content_main">
            Main content
        </section>
    </div>
</main>
<footer class="footer" role="contentinfo">
    <div class="wrapper">
        Footer
    </div>
</footer>

```
<main class="content content__1-3" role="main">
    <div class="content_bar"></div>
    <div class="content_wrapper">
        <aside class="content_sidebar content__flush-top-on-small">
            Side with no top padding on small screens...
        </aside>
        <section class="content_main">
            Main content
        </section>
    </div>
</main>
<footer class="footer" role="contentinfo">
    <div class="wrapper">
        Footer
    </div>
</footer>
```


## Flush all modifier (only on small screens)

Add a class of `.content__flush-all-on-small` to `.content_main` or `.content_sidebar`
to remove all padding and border-based gutters on small screens only.
'Small' screens in this case refers to the breakpoint where `.content_main` and `.content_sidebar` single column layout.

<main class="content content__1-3" role="main">
    <div class="content_bar"></div>
    <div class="content_wrapper">
        <aside class="content_sidebar content__flush-all-on-small">
            Side with no padding or border-based gutters on small screens...
        </aside>
        <section class="content_main">
            Main content
        </section>
    </div>
</main>
<footer class="footer" role="contentinfo">
    <div class="wrapper">
        Footer
    </div>
</footer>

```
<main class="content content__1-3" role="main">
    <div class="content_bar"></div>
    <div class="content_wrapper">
        <aside class="content_sidebar content__flush-all-on-small">
            Side with no padding or border-based gutters on small screens...
        </aside>
        <section class="content_main">
            Main content
        </section>
    </div>
</main>
<footer class="footer" role="contentinfo">
    <div class="wrapper">
        Footer
    </div>
</footer>
```


## Block

`.block` is a base class with several modifiers that help you separate chunks of
content via margins, padding, borders, and backgrounds.

### Standard block example

The standard `.block` class by itself simply adds a margin of twice the gutter width to the top and bottom.

Main content...
<div class="block">
    Content block
</div>
<div class="block">
    Content block
</div>
<div class="block">
    Content block
</div>

```
Main content...
<div class="block">
    Content block
</div>
<div class="block">
    Content block
</div>
<div class="block">
    Content block
</div>
```

### Border-top modifier

Adds top border to `.block`.

Main content...
<div class="block block__border-top">
    Content block with top border.
</div>

```
Main content...
<div class="block block__border-top">
    Content block with top border.
</div>
```

### Border-right modifier

Adds right border to `.block`.

Main content...
<div class="block block__border-right">
    Content block with right border.
</div>

```
Main content...
<div class="block block__border-right">
    Content block with right border.
</div>
```

### Border-bottom modifier

Adds bottom border to `.block`.

Main content...
<div class="block block__border-bottom">
    Content block with bottom border.
</div>

```
Main content...
<div class="block block__border-bottom">
    Content block with bottom border.
</div>
```

### Border-left modifier

Adds left border to `.block`.

Main content...
<div class="block block__border-left">
    Content block with left border.
</div>

```
Main content...
<div class="block block__border-left">
    Content block with left border.
</div>
```

### Border modifier

Adds border on all sides to `.block`.

Main content...
<div class="block block__border">
    Content block with borders on all sides.
</div>

```
Main content...
<div class="block block__border">
    Content block with borders on all sides.
</div>
```

### Flush-top modifier

Removes the top margin from `.block`.

Main content...
<div class="block block__flush-top">
    Content block with no top margin.
</div>
<div class="block">
    Content block
</div>

```
Main content...
<div class="block block__flush-top">
    Content block with no top margin.
</div>
<div class="block">
    Content block
</div>
```

### Flush-bottom modifier

Removes the bottom margin from `.block`.

Main content...
<div class="block block__flush-bottom">
    Content block with no bottom margin.
</div>
<div class="block">
    Content block
</div>

```
Main content...
<div class="block block__flush-bottom">
    Content block with no bottom margin.
</div>
<div class="block">
    Content block
</div>
```

### Flush-sides modifier

Removes the side margin from `.block`.
Typically used in conjunction with `.block__bg` to create a 'well' whose
background extends into the left and right gutters. (See below.)

<main class="content content__1-3" role="main">
    <div class="content_wrapper">
        <aside class="content_sidebar">
            Section navigation
        </aside>
        <section class="content_main">
            Main content...
            <aside class="block block__flush-sides">
                Content block with no side margins.
            </aside>
        </section>
    </div>
</main>

```
<main class="content content__1-3" role="main">
    <div class="content_wrapper">
        <aside class="content_sidebar">
            Section navigation
        </aside>
        <section class="content_main">
            Main content...
            <aside class="block block__flush-sides">
                Content block with no side margins.
            </aside>
        </section>
    </div>
</main>
```

### Flush modifier

Removes the side, top, and bottom margin from `.block`.

<main class="content content__1-3" role="main">
    <div class="content_wrapper">
        <aside class="content_sidebar">
            Section navigation
        </aside>
        <section class="content_main">
            Main content...
            <aside class="block block__flush">
                Content block with no margins.
            </aside>
        </section>
    </div>
</main>

```
<main class="content content__1-3" role="main">
    <div class="content_wrapper">
        <aside class="content_sidebar">
            Section navigation
        </aside>
        <section class="content_main">
            Main content...
            <aside class="block block__flush">
                Content block with no margins.
            </aside>
        </section>
    </div>
</main>
```

### Background modifier

Adds a background color and padding to `.block`.
Setup for (ems-equivalent) 30px padding on top and 60px on bottom.

Main content...
<div class="block block__bg">
    Content block with a background
</div>

```
Main content...
<div class="block block__bg">
    Content block with a background
</div>
```

### Background and flush-sides modifier combo example

This is an example of combining modifiers to get a flush padded bg with a `.block`.

<main class="content content__1-3" role="main">
    <div class="content_wrapper">
        <aside class="content_sidebar">
            Section navigation
        </aside>
        <section class="content_main content__flush-bottom">
            Main content...
            <div class="block block__flush-sides block__bg">
                Content block with a background and flush sides
            </div>
        </section>
    </div>
</main>

```
<main class="content content__1-3" role="main">
    <div class="content_wrapper">
        <aside class="content_sidebar">
            Section navigation
        </aside>
        <section class="content_main content__flush-bottom">
            Main content...
            <div class="block block__flush-sides block__bg">
                Content block with a background and flush sides
            </div>
        </section>
    </div>
</main>
```

### Padded-top modifier

Breaks top margin into margin & padding. Useful in combination with
`block__border-top` to add padding between block contents & border.

Main content...
<div class="block block__padded-top block__border-top">
    Content block with reduced top margin & added top padding
    and border.
</div>

```
Main content...
<div class="block block__padded-top block__border-top">
    Content block with reduced top margin & added top padding
    and border.
</div>
```

### Padded-bottom modifier

Breaks bottom margin into margin & padding. Useful in combination with
`block__border-bottom` to add padding between block contents & border.

Main content...
<div class="block block__padded-bottom block__border-bottom">
    Content block with reduced bottom margin & added bottom padding
    and border.
</div>

```
Main content...
<div class="block block__padded-bottom block__border-bottom">
    Content block with reduced bottom margin & added bottom padding
    and border.
</div>
```

### Sub blocks

Useful for when you need some consistent margins between blocks that are nested within other blocks.
Note that the divs with inline styles are for demonstration purposes only and should not be used in production.

<div class="block block__sub">
    <div style="background: #F1F2F2; padding: 8px;">
        Sub content block
    </div>
</div>
<div class="block block__sub">
    <div style="background: #F1F2F2; padding: 8px;">
        Sub content block
    </div>
</div>
<div class="block block__sub">
    <div style="background: #F1F2F2; padding: 8px;">
        Sub content block
    </div>
</div>

```
<div class="block block__sub">
    <div style="background: #F1F2F2; padding: 8px;">
        Sub content block
    </div>
</div>
<div class="block block__sub">
    <div style="background: #F1F2F2; padding: 8px;">
        Sub content block
    </div>
</div>
<div class="block block__sub">
    <div style="background: #F1F2F2; padding: 8px;">
        Sub content block
    </div>
</div>
```

### Mixing content blocks with content layouts

You can safely combine `.block` with `.content-l_col` to achieve a column-based
layout at larger screens with no top margins and a vertical layout at smaller screens that do have margins.
Note that the divs with inline styles are for demonstration purposes only and should not be used in production.

<div class="content-l">
    <div class="block content-l_col content-l_col-1-2">
        <div style="background: #F1F2F2; padding: 8px;">
            Content block that is also a content column.
            Notice how my top margins only exist on smaller screens when
            I need to stack vertically.
        </div>
    </div>
    <div class="block content-l_col content-l_col-1-2">
        <div style="background: #F1F2F2; padding: 8px;">
            Content block that is also a content column.
            Notice how my top margins only exist on smaller screens when
            I need to stack vertically.
        </div>
    </div>
</div>

```
<div class="content-l">
    <div class="block content-l_col content-l_col-1-2">
        <div style="background: #F1F2F2; padding: 8px;">
            Content block that is also a content column.
            Notice how my top margins only exist on smaller screens when
            I need to stack vertically.
        </div>
    </div>
    <div class="block content-l_col content-l_col-1-2">
        <div style="background: #F1F2F2; padding: 8px;">
            Content block that is also a content column.
            Notice how my top margins only exist on smaller screens when
            I need to stack vertically.
        </div>
    </div>
</div>
```


## Bleedbar sidebar styling

Simply add class `.content__bleedbar` to `main.content`.
Only supports sidebars on the right, for now.
Inline styling is for demonstration purposes only; do not include it in your markup.

<main class="content content__2-1 content__bleedbar" role="main">
    <section class="content_hero" style="background: #E3E4E5">
        Content hero
    </section>
    <div class="content_bar"></div>
    <div class="content_wrapper">
        <section class="content_main">
            Main content area
        </section>
        <aside class="content_sidebar">
            Bleeding sidebar
        </aside>
    </div>
</main>

```
<main class="content content__2-1 content__bleedbar" role="main">
    <section class="content_hero" style="background: #E3E4E5">
        Content hero
    </section>
    <div class="content_bar"></div>
    <div class="content_wrapper">
        <section class="content_main">
            Main content area
        </section>
        <aside class="content_sidebar">
            Bleeding sidebar
        </aside>
    </div>
</main>
```


## cf-grid helpers

### .wrapper (base)

Turns an element into a cf-grid wrapper at 801px and above.
Includes some explicit declarations for IE8 due to the fact that it doesn't support media queries.

<div class="wrapper">
    Wrapper
</div>

```
<div class="wrapper">
    Wrapper
</div>
```

### Column divider modifiers

cf-grid columns use left and right borders for fixed margins which means it's
not possible to set visual left and right borders directly on them.
Instead we can use the :before pseudo element and position it absolutely.
The added benefit of doing it this way is that the border spans the entire
height of the next parent using `position: relative;`.
This means that the border will always match the height of the tallest column in the row.

```less
.my-column-1-2 {

    // Creates a column that spans 6 out of 12 columns.
    .grid_column(6, 12);

    // Add a top divider only at screen 599px and smaller.
    .respond-to-max(599px {
        .grid_column__top-divider();
    });

    // Add a left divider only at screen 600px and larger.
    .respond-to-min(600px, {
        .grid_column__left-divider();
    });

}
```


## Featured content module

Featured content module, like a hero, consists of headline/text/optional call to action along with a visual. It is intended to be used in a main content column next to a sidebar.

Text is full width & displayed above the visual in the default/mobile view.
At larger screen sizes, the text occupies a fixed portion of the screen (equal to the width of 5 of 12 columns at 701px & 3 of 12 columns at 901px for desktop).
The visual occupies the remaining space.
The visual should be 640x360 (16x9 ratio) and resize to fit the height of the FCM with a static width and is center-cropped when it becomes too wide for the available space.

<section class="block block__border block__flush featured-content-module">
    <div class="featured-content-module_text">
        <p class=h4>
            <span class="featured-content-module_icon cf-icon cf-icon-speech-bubble">
</span> Featured </p>
        <h2>Feature title</h2>
        <p>Lorem ipsum dolor sit amet, ei ius adhuc inani iudico, labitur instructior ex pri. Cu pri inani constituto, cum aeque noster commodo cu.</p>
        <a class="jump-link jump-link__underline"> <span class="jump-link_text">Read more about the feature</span> </a>
    </div>
    <div class="featured-content-module_visual"> <img class="featured-content-module_img" src="http://placekitten.com/g/540/270"> </div>
</section>

```
<section class="block block__border block__flush featured-content-module">
    <div class="featured-content-module_text">
        <p class=h4>
            <span class="featured-content-module_icon cf-icon cf-icon-speech-bubble">
</span> Featured </p>
        <h2>Feature title</h2>
        <p>Lorem ipsum dolor sit amet, ei ius adhuc inani iudico, labitur instructior ex pri. Cu pri inani constituto, cum aeque noster commodo cu.</p>
        <a class="jump-link jump-link__underline"> <span class="jump-link_text">Read more about the feature</span> </a>
    </div>
    <div class="featured-content-module_visual"> <img class="featured-content-module_img" src="http://placekitten.com/g/540/270"> </div>
</section>
```


## Heroes

A hero consists of a headline, a small amount of additional text,
an optional call to action, and an illustration.
Its background color is flush with the sides of the screen, and the content is centered with wrapper classes.

The illustration can be customized by setting the `background-image` property on the `.hero_image` element.

On small screens (or where media queries are not supported),
the text spans the full width of the `.hero_wrapper` and the illustration is displayed underneath.

For larger screen sizes, media queries are used to position the illustration to the right of the text.

On desktop, the hero should not exceed 285px in height.
The image should be 195px in height to conform to this standard.

<section class="m-hero">
    <div class="m-hero_wrapper wrapper">
        <div class="m-hero_text">
            <h1 class="m-hero_heading">Hero title</h1>
            <p class="m-hero_subhead">
                Hero text goes here
            </p>
            <p class="m-hero_cta">
                <a>Call to action</a>
            </p>
        </div>
        <div class="m-hero_image" style="background-image: url('http://placekitten.com/g/400/195')"></div>
    </div>
</section>

```
<section class="m-hero">
    <div class="m-hero_wrapper wrapper">
        <div class="m-hero_text">
            <h1 class="m-hero_heading">Hero title</h1>
            <p class="m-hero_subhead">
                Hero text goes here
            </p>
            <p class="m-hero_cta">
                <a>Call to action</a>
            </p>
        </div>
        <div class="m-hero_image" style="background-image: url('http://placekitten.com/g/400/195')"></div>
    </div>
</section>
```
