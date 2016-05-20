The cf-pagination component provides a responsive approach to multipage page navigation.


## Dependencies
- cf-core
- cf-buttons
- cf-icons


## Variables

Theme variables for setting the color and sizes. Overwrite them in your own project by duplicating the variable `@key: value`.

### Sizing variables

```
@pagination-font-size:          16px;
```
The font size of pagination text.

```
@pagination-bp:                 640px;
```
Screen width at which pagination styling changes to target larger screens.


### Color variables

```
@pagination-text:               darken(#895983, 15%);
```
Pagination text color.


```
@pagination-bg:                 lighten(#905c8a, 45%);
```
Pagination form background color.


## Default pagination

Default pagination consists of "Previous" and "Next" links, styled as buttons, and an inline form (input, submit button) that allows users to navigate to specific pages by number.

To enable the component to jump directly to the paginated content, place `#pagination_content` directly above your paginated content.

### Example
<div id="pagination_content"></div>

<!-- Paginated content here -->

<nav class="pagination">
    <a class="btn btn__super pagination_prev" href="#pagination_content">
        <span class="btn_icon__left cf-icon cf-icon-left"></span>
        Previous
    </a>
    <a class="btn btn__super pagination_next" href="#pagination_content">
        Next
        <span class="btn_icon__right cf-icon cf-icon-right"></span>
    </a>
    <form class="pagination_form" action="index.html#pagination_content">
        <label class="pagination_label"
               for="pagination_current-page">
            Page
            <span class="u-visually-hidden">
                number out of 149 total pages
            </span>
        </label>
        <input
            class="pagination_current-page"
            id="pagination_current-page"
            name="pagination_current-page"
            type="number" min="1" max="149"
            value="149">
        <span class="pagination_label">
            <span aria-hidden="true">
                of 149
            </span>
        </span>
        <button class="btn btn__link pagination_submit"
                id="pagination_submit"
                type="submit">
            Go
        </button>
    </form>
</nav>

### Markup

```
<div id="pagination_content"></div>

<!-- Paginated content here -->

<nav class="pagination">
    <a class="btn btn__super pagination_prev" href="#pagination_content">
        <span class="btn_icon__left cf-icon cf-icon-left"></span>
        Previous
    </a>
    <a class="btn btn__super pagination_next" href="#pagination_content">
        Next
        <span class="btn_icon__right cf-icon cf-icon-right"></span>
    </a>
    <form class="pagination_form" action="index.html#pagination_content">
        <label class="pagination_label"
               for="pagination_current-page">
            Page
            <span class="u-visually-hidden">
                number out of 149 total pages
            </span>
        </label>
        <input
            class="pagination_current-page"
            id="pagination_current-page"
            name="pagination_current-page"
            type="number" min="1" max="149"
            value="149">
        <span class="pagination_label">
            <span aria-hidden="true">
                of 149
            </span>
        </span>
        <button class="btn btn__link pagination_submit"
                id="pagination_submit"
                type="submit">
            Go
        </button>
    </form>
</nav>
```

## Responsive behavior

- Less than 320px: On very small screens, the previous link, next link, and page number form stack vertically.
- 320px – `@pagination-bp`: On small screens, the pagination links display next to each other, stacked on top of the form.
- `@pagination-bp` and up: On larger screens, all pagination components display on a single line, with the form between the previous and next links.
