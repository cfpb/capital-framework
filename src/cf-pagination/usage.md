The cf-pagination component provides a responsive approach to multipage page navigation for Capital Framework.

[`cf-core`](../cf-core), [`cf-buttons`](../cf-buttons), and [`cf-icons`](../cf-icons) components are all dependencies of this component."

> NOTE: If you use `cf-pagination.less` directly,
  be sure to run the file through
  [Autoprefixer](https://github.com/postcss/autoprefixer),
  or your compiled Capital Framework CSS will
  not work perfectly in older browsers.

## Table of contents

- [Variables](#variables)
    - [Sizing variables](#sizing-variables)
    - [Color variables](#color-variables)
- [Default pagination](#default-pagination)
- [Responsive behavior](#responsive-behavior)

## Variables

Theme variables for setting the color and sizes. Color variables are from 18F's [US Web Design Standards](https://github.com/18F/web-design-standards/blob/18f-pages-staging/src/stylesheets/core/_variables.scss). Overwrite them in your own project by duplicating the variable `@key: value`.


### Color variables

Pagination text color.
```
@pagination-text-color: #757575; // $color-gray-medium
```

Pagination form background color.
```
@pagination-bg-color: #f1f1f1; // $color-gray-lightest
```


### Sizing variables

The font size of pagination text.
```
@pagination-font-size__px:          16px;
```


## Default pagination

Default pagination consists of "Previous" and "Next" links, styled as buttons, and an inline form (input, submit button) that allows users to navigate to specific pages by number.

To enable the component to jump directly to the paginated content, place `#pagination_content` directly above your paginated content.

<div id="pagination_content"></div>

<!-- Paginated content here -->

<nav class="m-pagination" role="navigation" aria-label="Pagination">
    <a class="btn
              m-pagination_btn-prev"
       href="?page=1#pagination_content">
        <span class="cf-icon cf-icon-left btn_icon__left "></span>
        Newer
    </a>
    <a class="btn
             m-pagination_btn-next"
       href="?page=3#pagination_content">
        Older
        <span class="cf-icon cf-icon-right btn_icon__right"></span>
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
        <button class="btn
                         btn__link
                         m-pagination_submit-btn"
                  id="m-pagination_submit-btn"
                  type="submit">Go</button>
    </form>
</nav>

```
<div id="pagination_content"></div>

<!-- Paginated content here -->

<nav class="m-pagination" role="navigation" aria-label="Pagination">
    <a class="btn
              m-pagination_btn-prev"
       href="?page=1#pagination_content">
        <span class="cf-icon cf-icon-left btn_icon__left "></span>
        Newer
    </a>
    <a class="btn
             m-pagination_btn-next"
       href="?page=3#pagination_content">
        Older
        <span class="cf-icon cf-icon-right btn_icon__right"></span>
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
        <button class="btn
                       btn__link
                       m-pagination_submit-btn"
                  id="m-pagination_submit-btn"
                  type="submit">Go</button>
    </form>
</nav>
```

## Responsive behavior

- `@bp-xs-max`: On small screens, the pagination links display next to each other, stacked on top of the form.
