The cf-pagination component provides a responsive approach to multipage page
navigation for Capital Framework.

[`cf-core`](../cf-core), [`cf-buttons`](../cf-buttons), and
[`cf-icons`](../cf-icons) components are all dependencies of this component.

> NOTE: If you use `cf-pagination.less` directly,
  be sure to run the file through
  [Autoprefixer](https://github.com/postcss/autoprefixer),
  or your compiled Capital Framework CSS will
  not work perfectly in older browsers.


## Table of contents

- [Variables](#variables)
    - [Color variables](#color-variables)
    - [Sizing variables](#sizing-variables)
- [Default pagination](#default-pagination)
- [Responsive behavior](#responsive-behavior)


## Variables

Theme variables for setting the color and sizes throughout the project.
Overwrite them in your own project by duplicating the variable `@key: value`.

### Color variables

`$color-` variables referenced in comments are from 18F's
[U.S. Web Design Standards](https://github.com/18F/web-design-standards/blob/staging/src/stylesheets/core/_variables.scss)

```
// text color
@pagination-text-color: #757575; // $color-gray-medium

// form background color
@pagination-bg-color:   #f1f1f1; // $color-gray-lightest
```

### Sizing variables

```
// pagination text
@pagination-font-size__px: 16px;
```


## Default pagination

Default pagination consists of "Previous" and "Next" links, styled as buttons,
and an inline form (input, submit button) that allows users to navigate to
specific pages by number.

To enable the component to jump directly to the paginated content, place
`#pagination_content` directly above your paginated content.

<div id="pagination_content"></div>

<!-- Paginated content here -->

<nav class="m-pagination" role="navigation" aria-label="Pagination">
    <a class="a-btn
              m-pagination_btn-prev"
       href="?page=1#pagination_content">
        <span class="cf-icon cf-icon-left cf-icon__before"></span>
        Newer
    </a>
    <a class="a-btn
              m-pagination_btn-next"
       href="?page=3#pagination_content">
        Older
        <span class="cf-icon cf-icon-right cf-icon__after"></span>
    </a>
    <form class="m-pagination_form"
            action="#pagination_content">
        <label class="m-pagination_label"
                 for="m-pagination_current-page">
            Page
            <span class="u-visually-hidden">
                number 2 out
            </span>
            <input class="m-pagination_current-page"
                     id="m-pagination_current-page"
                     name="page"
                     type="number"
                     min="1"
                     max="149"
                     pattern="[0-9]*"
                     inputmode="numeric"
                     value="2">
            of 149
        </label>
        <button class="a-btn
                       a-btn__link
                       m-pagination_submit-btn"
                  id="m-pagination_submit-btn"
                  type="submit">Go</button>
    </form>
</nav>

```
<div id="pagination_content"></div>

<!-- Paginated content here -->

<nav class="m-pagination" role="navigation" aria-label="Pagination">
    <a class="a-btn
              m-pagination_btn-prev"
       href="?page=1#pagination_content">
        <span class="cf-icon cf-icon-left cf-icon__before"></span>
        Newer
    </a>
    <a class="a-btn
              m-pagination_btn-next"
       href="?page=3#pagination_content">
        Older
        <span class="cf-icon cf-icon-right cf-icon__after"></span>
    </a>
    <form class="m-pagination_form"
            action="#pagination_content">
        <label class="m-pagination_label"
                 for="m-pagination_current-page">
            Page
            <span class="u-visually-hidden">
                number 2 out
            </span>
            <input class="m-pagination_current-page"
                     id="m-pagination_current-page"
                     name="page"
                     type="number"
                     min="1"
                     max="149"
                     pattern="[0-9]*"
                     inputmode="numeric"
                     value="2">
            of 149
        </label>
        <button class="a-btn
                       a-btn__link
                       m-pagination_submit-btn"
                  id="m-pagination_submit-btn"
                  type="submit">Go</button>
    </form>
</nav>
```


## Responsive behavior

- `@bp-xs-max`: On small screens, the pagination links display next to each
  other, stacked on top of the form.
