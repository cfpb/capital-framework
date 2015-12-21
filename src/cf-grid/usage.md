## CF Grid

### Less variables

The following variables are exposed, allowing you to easily override them before compiling. Most mixins allows you to further override these values by passing them arguments.

```
@grid_box-sizing-polyfill-path: '../../box-sizing-polyfill;
```

> The path where boxsizing.htc is located.

> This path MUST be overridden in your project and set to a root relative url.

```
@grid_wrapper-width: 1200px;
```

> The grid's maximum width in px.

```
@grid_gutter-width: 30px;
```

> The fixed width between columns.

```
@grid_total-columns: 12;
```

> The total number of columns used in calculating column widths.

```
@grid_debug
```

> Gives column blocks a background color if set to true.

## Wrapper

> Wrappers are centered containers with a max-width and fixed gutters that match the gutter widths of columns.

> To support IE 6/7, ensure that the path to boxsizing.htc is set using the @grid_box-sizing-polyfill-path Less variable. Read more: https://github.com/Schepp/box-sizing-polyfill.

### Less mixin

```
.grid_wrapper( @grid_wrapper-width: @grid_wrapper-width )
```

> You can create wrappers with different max-widths by passing a pixel value into the mixin.

### Usage

```
.main-wrapper {
  .grid_wrapper();
}
.wide-wrapper {
  .grid_wrapper( 1900px );
}
```

```
<div class="main-wrapper">
    This container now has left and right padding and a centered max width.
</div>
<div class="wide-wrapper">
    This container is the same except it has a wider max-width.
</div>
```

### Columns

### Less mixin

```
.grid_column( @columns: 1; @total: @grid_total-columns; @prefix: 0; @suffix: 0 )
```

> Computes column widths and prefix/suffix padding.

> CSS borders are used for fixed gutters.

### Usage

```
.main-wrapper {
  .grid_wrapper();
}
.half {
  .grid_column(1, 2);
}
```

```
<div class="main-wrapper">
    <div class="half">I am half of my parent.</div>
    <div class="half">I am half of my parent.</div>
</div>
```

## Push and Pull mixins for source ordering

### Less mixin

```
.push( @offset: 1, @grid_total-columns: @grid_total-columns )
```

```
.pull( @offset: 1, @grid_total-columns: @grid_total-columns )
```

### Usage

```
.first {
  .grid_column(1, 2);
  .grid_pull(1);
}
.second {
  .grid_column(1, 2);
  .grid_push(1);
}
```

```
<div>
    <div class="second">I am first in the markup but appear after .first.</div>
    <div class="first">I am second in the markup but appear before .second.</div>
</div>
```

## Nested columns

> Since all cf-grid columns have left and right gutters you will notice undesireable offsetting when nesting columns. Normally this is removed with complex selectors or by adding classes to the first and last column per 'row'. In cf-grid the way to get around this is by wrapping your columns in a container that utilizes the .grid_nested-col-group() mixin. This mixin uses negative left and right margins to pull the columns back into alignment with parent columns.

> NOTE: Working this way allows you to easily create responsive grids. You are free to control the number of columns per 'row' without having to deal with the first and last columns of each row.

> NOTE: cf-grids does not use 'rows' and there is no row container. To clarify, if you have a 12 column grid and place 24 columns inside of a wrapper cf-grid columns will automaitcally stack into 2 'rows' of 12.

### Less mixin

```
.grid_nested-col-group()
```

### Usage

```
.main-wrapper {
  .grid_wrapper();
}
.cols {
  .grid_nested-col-group();
}
.half {
  .grid_column(1, 2);
}
```

```
<div class="main-wrapper">
    <div class="half">
        <div class="cols">
            <div class="half"></div>
            <div class="half"></div>
        </div>
    </div>
    <div class="half">
        <div class="cols">
            <div class="half"></div>
            <div class="half"></div>
        </div>
    </div>
</div>
```


## Example grid layouts

### 12 columns w/ 1200px max width

  <div class="cols-12">

      <section>
          <div class="col col-1"><p>one</p></div>
          <div class="col col-1"><p>one</p></div>
          <div class="col col-1"><p>one</p></div>
          <div class="col col-1"><p>one</p></div>
          <div class="col col-1"><p>one</p></div>
          <div class="col col-1"><p>one</p></div>
          <div class="col col-1"><p>one</p></div>
          <div class="col col-1"><p>one</p></div>
          <div class="col col-1"><p>one</p></div>
          <div class="col col-1"><p>one</p></div>
          <div class="col col-1"><p>one</p></div>
          <div class="col col-1"><p>one</p></div>
      </section>

      <section>
          <div class="col col-2"><p>two</p></div>
          <div class="col col-2"><p>two</p></div>
          <div class="col col-2"><p>two</p></div>
          <div class="col col-2"><p>two</p></div>
          <div class="col col-2"><p>two</p></div>
          <div class="col col-2"><p>two</p></div>
      </section>

      <section>
          <div class="col col-2"><p>two</p></div>
          <div class="col col-3"><p>three</p></div>
          <div class="col col-2"><p>two</p></div>
          <div class="col col-3"><p>three</p></div>
          <div class="col col-2"><p>two</p></div>
      </section>

      <section>
          <div class="col col-3"><p>three</p></div>
          <div class="col col-3"><p>three</p></div>
          <div class="col col-3"><p>three</p></div>
          <div class="col col-3"><p>three</p></div>
      </section>

      <section>
          <div class="col col-4"><p>four</p></div>
          <div class="col col-4"><p>four</p></div>
          <div class="col col-4"><p>four</p></div>
      </section>

      <section>
          <div class="col col-6"><p>six</p></div>
          <div class="col col-6"><p>six</p></div>
      </section>

      <section>
          <div class="col col-12"><p>twelve</p></div>
      </section>

  </div>

````
<div class="cols-12">

    <section>
        <div class="col col-1"><p>one</p></div>
        <div class="col col-1"><p>one</p></div>
        <div class="col col-1"><p>one</p></div>
        <div class="col col-1"><p>one</p></div>
        <div class="col col-1"><p>one</p></div>
        <div class="col col-1"><p>one</p></div>
        <div class="col col-1"><p>one</p></div>
        <div class="col col-1"><p>one</p></div>
        <div class="col col-1"><p>one</p></div>
        <div class="col col-1"><p>one</p></div>
        <div class="col col-1"><p>one</p></div>
        <div class="col col-1"><p>one</p></div>
    </section>

    <section>
        <div class="col col-2"><p>two</p></div>
        <div class="col col-2"><p>two</p></div>
        <div class="col col-2"><p>two</p></div>
        <div class="col col-2"><p>two</p></div>
        <div class="col col-2"><p>two</p></div>
        <div class="col col-2"><p>two</p></div>
    </section>

    <section>
        <div class="col col-2"><p>two</p></div>
        <div class="col col-3"><p>three</p></div>
        <div class="col col-2"><p>two</p></div>
        <div class="col col-3"><p>three</p></div>
        <div class="col col-2"><p>two</p></div>
    </section>

    <section>
        <div class="col col-3"><p>three</p></div>
        <div class="col col-3"><p>three</p></div>
        <div class="col col-3"><p>three</p></div>
        <div class="col col-3"><p>three</p></div>
    </section>

    <section>
        <div class="col col-4"><p>four</p></div>
        <div class="col col-4"><p>four</p></div>
        <div class="col col-4"><p>four</p></div>
    </section>

    <section>
        <div class="col col-6"><p>six</p></div>
        <div class="col col-6"><p>six</p></div>
    </section>

    <section>
        <div class="col col-12"><p>twelve</p></div>
    </section>

</div>
```

### Prefixing/Suffixing

  <div class="cols-12">

      <section>
          <div class="col col-1 suffix-11"><p>prefix 0, suffix 11</p></div>
          <div class="col col-1 prefix-1 suffix-10"><p>prefix 1, suffix 10</p></div>
          <div class="col col-1 prefix-2 suffix-9"><p>prefix 2, suffix 9</p></div>
          <div class="col col-1 prefix-3 suffix-8"><p>prefix 3, suffix 8</p></div>
          <div class="col col-1 prefix-4 suffix-7"><p>prefix 4, suffix 7</p></div>
          <div class="col col-1 prefix-5 suffix-6"><p>prefix 5, suffix 6</p></div>
          <div class="col col-1 prefix-6 suffix-5"><p>prefix 6, suffix 5</p></div>
          <div class="col col-1 prefix-7 suffix-4"><p>prefix 7, suffix 4</p></div>
          <div class="col col-1 prefix-8 suffix-3"><p>prefix 8, suffix 3</p></div>
          <div class="col col-1 prefix-9 suffix-2"><p>prefix 9, suffix 2</p></div>
          <div class="col col-1 prefix-10 suffix-1"><p>prefix 10, suffix 1</p></div>
          <div class="col col-1 prefix-11"><p>prefix 11, suffix 0</p></div>
      </section>

  </div>

```
<div class="cols-12">

    <section>
        <div class="col col-1 suffix-11"><p>prefix 0, suffix 11</p></div>
        <div class="col col-1 prefix-1 suffix-10"><p>prefix 1, suffix 10</p></div>
        <div class="col col-1 prefix-2 suffix-9"><p>prefix 2, suffix 9</p></div>
        <div class="col col-1 prefix-3 suffix-8"><p>prefix 3, suffix 8</p></div>
        <div class="col col-1 prefix-4 suffix-7"><p>prefix 4, suffix 7</p></div>
        <div class="col col-1 prefix-5 suffix-6"><p>prefix 5, suffix 6</p></div>
        <div class="col col-1 prefix-6 suffix-5"><p>prefix 6, suffix 5</p></div>
        <div class="col col-1 prefix-7 suffix-4"><p>prefix 7, suffix 4</p></div>
        <div class="col col-1 prefix-8 suffix-3"><p>prefix 8, suffix 3</p></div>
        <div class="col col-1 prefix-9 suffix-2"><p>prefix 9, suffix 2</p></div>
        <div class="col col-1 prefix-10 suffix-1"><p>prefix 10, suffix 1</p></div>
        <div class="col col-1 prefix-11"><p>prefix 11, suffix 0</p></div>
    </section>

</div>
```

### Push/Pull

  <div class="cols-12">

    <section>
        <div class="col col-4 push-8"><p>four, push eight</p></div>
        <div class="col col-8 pull-4"><p>eight, pull four</p></div>
    </section>

    <section>
        <div class="col col-9 push-3"><p>nine, push three</p></div>
        <div class="col col-3 pull-9"><p>three, pull nine</p></div>
    </section>

  </div>

```
<div class="cols-12">

  <section>
      <div class="col col-4 push-8"><p>four, push eight</p></div>
      <div class="col col-8 pull-4"><p>eight, pull four</p></div>
  </section>

  <section>
      <div class="col col-9 push-3"><p>nine, push three</p></div>
      <div class="col col-3 pull-9"><p>three, pull nine</p></div>
  </section>

</div>
```

### Nesting

  <div class="cols-12">

      <section>
          <div class="col col-6">
              <p>six</p>
              <section>
                  <div class="col col-4"><p>four</p></div>
                  <div class="col col-4"><p>four</p></div>
                  <div class="col col-4"><p>four</p></div>
              </section>
          </div>
          <div class="col col-6">
              <p>six</p>
              <section>
                  <div class="col col-4"><p>four</p></div>
                  <div class="col col-4"><p>four</p></div>
                  <div class="col col-4"><p>four</p></div>
              </section>
          </div>
      </section>

      <section>
          <div class="col col-3">
              <p>three</p>
              <section>
                  <div class="col col-6"><p>six</p></div>
                  <div class="col col-6"><p>six</p></div>
              </section>
          </div>
          <div class="col col-6">
              <p>six</p>
              <section>
                  <div class="col col-4"><p>four</p></div>
                  <div class="col col-4"><p>four</p></div>
                  <div class="col col-4"><p>four</p></div>
              </section>
          </div>
          <div class="col col-3">
              <p>three</p>
              <section>
                  <div class="col col-3"><p>three</p></div>
                  <div class="col col-3"><p>three</p></div>
                  <div class="col col-3"><p>three</p></div>
                  <div class="col col-3"><p>three</p></div>
              </section>
          </div>
      </section>

  </div>

```
<div class="cols-12">

    <section>
        <div class="col col-6">
            <p>six</p>
            <section>
                <div class="col col-4"><p>four</p></div>
                <div class="col col-4"><p>four</p></div>
                <div class="col col-4"><p>four</p></div>
            </section>
        </div>
        <div class="col col-6">
            <p>six</p>
            <section>
                <div class="col col-4"><p>four</p></div>
                <div class="col col-4"><p>four</p></div>
                <div class="col col-4"><p>four</p></div>
            </section>
        </div>
    </section>

    <section>
        <div class="col col-3">
            <p>three</p>
            <section>
                <div class="col col-6"><p>six</p></div>
                <div class="col col-6"><p>six</p></div>
            </section>
        </div>
        <div class="col col-6">
            <p>six</p>
            <section>
                <div class="col col-4"><p>four</p></div>
                <div class="col col-4"><p>four</p></div>
                <div class="col col-4"><p>four</p></div>
            </section>
        </div>
        <div class="col col-3">
            <p>three</p>
            <section>
                <div class="col col-3"><p>three</p></div>
                <div class="col col-3"><p>three</p></div>
                <div class="col col-3"><p>three</p></div>
                <div class="col col-3"><p>three</p></div>
            </section>
        </div>
    </section>

</div>
````
