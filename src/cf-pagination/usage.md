## Pagination

### Default pagination

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
