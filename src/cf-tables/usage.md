The cf-tables component formats tables, and provides an easy way to make tables sortable.

<<<<<<< b6939a2f8eb00274fc8c71d8c555ae808ec48a9f
> NOTE: If you use `cf-tables.less` directly,
  be sure to run the file through
  [Autoprefixer](https://github.com/postcss/autoprefixer),
  or your compiled Capital Framework CSS will
  not work perfectly in older browsers.

## Vars
=======
## Tables of contents
>>>>>>> Standardize documentation for cf-tables

- [Variables](#variables)
- [Striped table](#striped-table)
- [Right-aligned cells](#right-aligned-cells)
- [Sortable tables](#sortable-tables)
- [Responsive tables](#responsive-tables)

## Variables

Theme variables for setting the color and sizes.
Default color variables are from 18F's [US Web Design Standards](https://github.com/18F/web-design-standards/blob/18f-pages-staging/src/stylesheets/core/_variables.scss).
Overwrite them in your own project by duplicating the variable `@key: value`.

Ex. to set your table cell's background color, add `@table-cell-bg: #fefefe;` to your project.

```
@table-cell-bg:              #ffffff; // $color-white
@table-cell-bg_alt:          #f1f1f1; // $color-gray-lightest
@table-scrolling-border:     #e4e2e0; // $color-gray-warm-light
```


## Striped tables

The `.table__striped` class adds stripes to the table rows.
This striping is not visible on small screens.

<table class="table__striped">
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
      <th>Column 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Column 1">Row A</td>
      <td data-label="Column 2">Cell A2</td>
      <td data-label="Column 3">Cell A3</td>
    </tr>
    <tr>
      <td data-label="Column 1">Row B</td>
      <td data-label="Column 2">Cell B2</td>
      <td data-label="Column 3">Cell B3</td>
    </tr>
    <tr>
      <td data-label="Column 1">Row C</td>
      <td data-label="Column 2">Cell C2</td>
      <td data-label="Column 3">Cell C3</td>
    </tr>
    <tr>
      <td data-label="Column 1">Row D</td>
      <td data-label="Column 2">Cell D2</td>
      <td data-label="Column 3">Cell D3</td>
    </tr>
  </tbody>
</table>

```
<table class="table__striped">
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
      <th>Column 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Column 1">Row A</td>
      <td data-label="Column 2">Cell A2</td>
      <td data-label="Column 3">Cell A3</td>
    </tr>
    <tr>
      <td data-label="Column 1">Row B</td>
      <td data-label="Column 2">Cell B2</td>
      <td data-label="Column 3">Cell B3</td>
    </tr>
    <tr>
      <td data-label="Column 1">Row C</td>
      <td data-label="Column 2">Cell C2</td>
      <td data-label="Column 3">Cell C3</td>
    </tr>
    <tr>
      <td data-label="Column 1">Row D</td>
      <td data-label="Column 2">Cell D2</td>
      <td data-label="Column 3">Cell D3</td>
    </tr>
  </tbody>
</table>
```


## Right-aligned cells.

The use of the `.table_cell__right-align` class on a TD aligns the text right -
see the third column above.

<table class="table__stack-on-small">
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
      <th>Column 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Column 1">Row A</td>
      <td data-label="Column 2">Cell A2</td>
      <td data-label="Column 3" class="table_cell__right-align">Cell A3</td>
    </tr>
    <tr>
      <td data-label="Column 1">Row B</td>
      <td data-label="Column 2">Cell B2</td>
      <td data-label="Column 3" class="table_cell__right-align">Cell B3</td>
    </tr>
  </tbody>
</table>

```
<table class="table__stack-on-small">
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
      <th>Column 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Column 1">Row A</td>
      <td data-label="Column 2">Cell A2</td>
      <td data-label="Column 3" class="table_cell__right-align">Cell A3</td>
    </tr>
    <tr>
      <td data-label="Column 1">Row B</td>
      <td data-label="Column 2">Cell B2</td>
      <td data-label="Column 3" class="table_cell__right-align">Cell B3</td>
    </tr>
  </tbody>
</table>
```

## Sortable Tables

The cf-tables module also includes a sortable table utility.

### Making a table sortable

By adding the `.table__sortable` class to a table, the table becomes sortable.
To allow the table to be sorted by a column, add a button to the `th` of the
column like so:

```
<button class="sortable">
  Column Name
</button>
```

The use of a button helps address certain accessibility concerns.

### Sorting type

To sort properly, the type of the data can be specified.
By default, the column's values will be sorted as string values.
However, the column can be specifically sorted by number values
(in which case, the cell's contents are stripped of non-numeric characters,
then sorted by the resulting number).
To see an example, the sample table later in this document sorts the "Distance"
column by number value.

To sort by number value, add the `data-sort_type="number"` attribute
to the sorting button:

```
<table class="table__sortable">
  ...
    <th>
      <button class="sortable" data-sort_type="number">Column Name</button>
    </th>
  ...
</table>
```

### Sorting table on page load

To sort the table on page load, use the `.sortable__start-up` and
`.sortable__start-down` classes:

```
<table class="table__sortable">
  ...
    <th>
      <button class="sortable sortable__start-up">Column Name</button>
    </th>
  ...
</table>
```

- `.sortable__start-up` starts with the column sorted smallest to largest (or
lowest to highest)

- `.sortable__start-down` starts with the column sorted largest to smallest (or
highest to lowest)

### Sample Sortable Table

<table class="table__sortable">
  <thead>
      <tr>
          <th>
              Agency
          </th>
          <th>
            <button class="sortable">
              Languages
            </button>
          </th>
          <th>
            <button class="sortable sortable__start-up" data-sort_type="number">
              Distance
            </button>
          </th>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>
              Alpha
          </td>
          <td data-label="Languages">
              English
          </td>
          <td data-label="Distance">
              2.6 mi
          </td>
      </tr>
      <tr>
          <td>
              Beta
          </td>
          <td data-label="Languages">
              English, Spanish
          </td>
          <td data-label="Distance">
              1.4 mi
          </td>
      </tr>
      <tr>
          <td>
              Gamma
          </td>
          <td data-label="Languages">
              English, French, Spanish
          </td>
          <td data-label="Distance">
              1.4 mi
          </td>
      </tr>
      <tr>
          <td>
              Delta
          </td>
          <td data-label="Languages">
              English, Spanish
          </td>
          <td data-label="Distance">
              3.2 mi
          </td>
      </tr>
      <tr>
          <td>
              Epsilon
          </td>
          <td data-label="Languages">
              English
          </td>
          <td data-label="Distance">
              1.6 mi
          </td>
      </tr>
      <tr>
          <td>
            Zeta
          </td>
          <td data-label="Languages">
            English, Spanish
          </td>
          <td data-label="Distance">
            1.2 mi
          </td>
      </tr>
      <tr>
          <td>
              Eta
          </td>
          <td data-label="Languages">
              English
          </td>
          <td data-label="Distance">
              11.1 mi
          </td>
      </tr>
  </tbody>
</table>

```
<table class="table__sortable">
  <thead>
      <tr>
          <th>
              Agency
          </th>
          <th>
            <button class="sortable">
              Languages
            </button>
          </th>
          <th>
            <button class="sortable sortable__start-up" data-sort_type="number">
              Distance
            </button>
          </th>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>
              Alpha
          </td>
          <td data-label="Languages">
              English
          </td>
          <td data-label="Distance">
              2.6 mi
          </td>
      </tr>
      <tr>
          <td>
              Beta
          </td>
          <td data-label="Languages">
              English, Spanish
          </td>
          <td data-label="Distance">
              1.4 mi
          </td>
      </tr>
      <tr>
          <td>
              Gamma
          </td>
          <td data-label="Languages">
              English, French, Spanish
          </td>
          <td data-label="Distance">
              1.4 mi
          </td>
      </tr>
      <tr>
          <td>
              Delta
          </td>
          <td data-label="Languages">
              English, Spanish
          </td>
          <td data-label="Distance">
              3.2 mi
          </td>
      </tr>
      <tr>
          <td>
              Epsilon
          </td>
          <td data-label="Languages">
              English
          </td>
          <td data-label="Distance">
              1.6 mi
          </td>
      </tr>
      <tr>
          <td>
            Zeta
          </td>
          <td data-label="Languages">
            English, Spanish
          </td>
          <td data-label="Distance">
            1.2 mi
          </td>
      </tr>
      <tr>
          <td>
              Eta
          </td>
          <td data-label="Languages">
              English
          </td>
          <td data-label="Distance">
              11.1 mi
          </td>
      </tr>
  </tbody>
</table>
```

### Important Notes about sortable tables

- The class `.sorted-up` refers to a sort from smallest to greatest
  (first to last), and `.sorted-down` refers to a sort from greatest to smallest
  (last to first). These classes are added to the TH when sorting occurs.
- Please note the importance of defining a THEAD and TBODY to preserve
  the table's header through sorting operations.


## Responsive tables

**Important notes:**
- Tables are not responsive without adding one of the small screen classes below.
- The `data-label` attribute is used to label each entry in a table for small screen responsive views. Always include the `data-label` attribute for each cell.

### Responsive stacked table

The `.table__stack-on-small` class adds the "stacked" table style for small screens.
Please note that tables are not responsive without adding one of the small screen classes.
Also note that the `data-label` attribute is used to label each entry in a table
for small screen responsive views.
Always include the `data-label` attribute for each cell.

<table class="table__stack-on-small">
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
      <th>Column 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Column 1">Row A</td>
      <td data-label="Column 2">Cell A2</td>
      <td data-label="Column 3">Cell A3</td>
    </tr>
    <tr>
      <td data-label="Column 1">Row B</td>
      <td data-label="Column 2">Cell B2</td>
      <td data-label="Column 3">Cell B3</td>
    </tr>
    <tr>
      <td data-label="Column 1">Row C</td>
      <td data-label="Column 2">Cell C2</td>
      <td data-label="Column 3">Cell C3</td>
    </tr>
    <tr>
      <td data-label="Column 1">Row D</td>
      <td data-label="Column 2">Cell D2</td>
      <td data-label="Column 3">Cell D3</td>
    </tr>
  </tbody>
</table>

```
<table class="table__stack-on-small">
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
      <th>Column 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Column 1">Row A</td>
      <td data-label="Column 2">Cell A2</td>
      <td data-label="Column 3">Cell A3</td>
    </tr>
    <tr>
      <td data-label="Column 1">Row B</td>
      <td data-label="Column 2">Cell B2</td>
      <td data-label="Column 3">Cell B3</td>
    </tr>
    <tr>
      <td data-label="Column 1">Row C</td>
      <td data-label="Column 2">Cell C2</td>
      <td data-label="Column 3">Cell C3</td>
    </tr>
    <tr>
      <td data-label="Column 1">Row D</td>
      <td data-label="Column 2">Cell D2</td>
      <td data-label="Column 3">Cell D3</td>
    </tr>
  </tbody>
</table>
```

### Responsive stacked table with header

The `.table__entry-header-on-small` class in addition to `.table__stack-on-small` class
changes the first column to be styled as an entry header.
This style requires both classes be added.
Note that tables are not responsive without adding one of the small screen classes.
Also note that the `data-label` attribute is used to label each entry.
Always include the `data-label` attribute for each cell.

<table class="table__stack-on-small table__entry-header-on-small">
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
      <th>Column 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Column 1">Row A</td>
      <td data-label="Column 2">Cell A2</td>
      <td data-label="Column 3">Cell A3</td>
    </tr>
    <tr>
      <td data-label="Column 1">Row B</td>
      <td data-label="Column 2">Cell B2</td>
      <td data-label="Column 3">Cell B3</td>
    </tr>
    <tr>
      <td data-label="Column 1">Row C</td>
      <td data-label="Column 2">Cell C2</td>
      <td data-label="Column 3">Cell C3</td>
    </tr>
    <tr>
      <td data-label="Column 1">Row D</td>
      <td data-label="Column 2">Cell D2</td>
      <td data-label="Column 3">Cell D3</td>
    </tr>
  </tbody>
</table>

```
<table class="table__stack-on-small table__entry-header-on-small">
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
      <th>Column 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Column 1">Row A</td>
      <td data-label="Column 2">Cell A2</td>
      <td data-label="Column 3">Cell A3</td>
    </tr>
    <tr>
      <td data-label="Column 1">Row B</td>
      <td data-label="Column 2">Cell B2</td>
      <td data-label="Column 3">Cell B3</td>
    </tr>
    <tr>
      <td data-label="Column 1">Row C</td>
      <td data-label="Column 2">Cell C2</td>
      <td data-label="Column 3">Cell C3</td>
    </tr>
    <tr>
      <td data-label="Column 1">Row D</td>
      <td data-label="Column 2">Cell D2</td>
      <td data-label="Column 3">Cell D3</td>
    </tr>
  </tbody>
</table>
```

### Responsive table - Horizontal scroll variation

The `.table-wrapper__scrolling` class must be added to the parent element of
the table (by adding a wrapping `<div>`, in most cases).
The `<table>` element does not need additional markup in this case.
The "Comparative with horizontal scroll" style also adds striped rows
to the table contained within, and
remains striped on small screens (unlike the `table__striped `class, below).

<div class="table-wrapper__scrolling">
  <table>
    <thead>
      <tr>
        <th>Column 1</th>
        <th>Column 2</th>
        <th>Column 3</th>
        <th>Column 4</th>
        <th>Column 5</th>
        <th>Column 6</th>
        <th>Column 7</th>
        <th>Column 8</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Column 1">Row A</td>
        <td data-label="Column 2">Cell A2</td>
        <td data-label="Column 3">Cell A3</td>
        <td data-label="Column 4">Cell A4</td>
        <td data-label="Column 5">Cell A5</td>
        <td data-label="Column 6">Cell A6</td>
        <td data-label="Column 7">Cell A7</td>
        <td data-label="Column 8">Cell A8</td>
      </tr>
      <tr>
        <td data-label="Column 1">Row B</td>
        <td data-label="Column 2">Cell B2</td>
        <td data-label="Column 3">Cell B3</td>
        <td data-label="Column 4">Cell B4</td>
        <td data-label="Column 5">Cell B5</td>
        <td data-label="Column 6">Cell B6</td>
        <td data-label="Column 7">Cell B7</td>
        <td data-label="Column 8">Cell B8</td>
      </tr>
      <tr>
        <td data-label="Column 1">Row C</td>
        <td data-label="Column 2">Cell C2</td>
        <td data-label="Column 3">Cell C3</td>
        <td data-label="Column 4">Cell C4</td>
        <td data-label="Column 5">Cell C5</td>
        <td data-label="Column 6">Cell C6</td>
        <td data-label="Column 7">Cell C7</td>
        <td data-label="Column 8">Cell C8</td>
      </tr>
      <tr>
        <td data-label="Column 1">Row D</td>
        <td data-label="Column 2">Cell D2</td>
        <td data-label="Column 3">Cell D3</td>
        <td data-label="Column 4">Cell D4</td>
        <td data-label="Column 5">Cell D5</td>
        <td data-label="Column 6">Cell D6</td>
        <td data-label="Column 7">Cell D7</td>
        <td data-label="Column 8">Cell D8</td>
      </tr>
    </tbody>
  </table>
</div>

```
<div class="table-wrapper__scrolling">
  <table>
    <thead>
      <tr>
        <th>Column 1</th>
        <th>Column 2</th>
        <th>Column 3</th>
        <th>Column 4</th>
        <th>Column 5</th>
        <th>Column 6</th>
        <th>Column 7</th>
        <th>Column 8</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Column 1">Row A</td>
        <td data-label="Column 2">Cell A2</td>
        <td data-label="Column 3">Cell A3</td>
        <td data-label="Column 4">Cell A4</td>
        <td data-label="Column 5">Cell A5</td>
        <td data-label="Column 6">Cell A6</td>
        <td data-label="Column 7">Cell A7</td>
        <td data-label="Column 8">Cell A8</td>
      </tr>
      <tr>
        <td data-label="Column 1">Row B</td>
        <td data-label="Column 2">Cell B2</td>
        <td data-label="Column 3">Cell B3</td>
        <td data-label="Column 4">Cell B4</td>
        <td data-label="Column 5">Cell B5</td>
        <td data-label="Column 6">Cell B6</td>
        <td data-label="Column 7">Cell B7</td>
        <td data-label="Column 8">Cell B8</td>
      </tr>
      <tr>
        <td data-label="Column 1">Row C</td>
        <td data-label="Column 2">Cell C2</td>
        <td data-label="Column 3">Cell C3</td>
        <td data-label="Column 4">Cell C4</td>
        <td data-label="Column 5">Cell C5</td>
        <td data-label="Column 6">Cell C6</td>
        <td data-label="Column 7">Cell C7</td>
        <td data-label="Column 8">Cell C8</td>
      </tr>
      <tr>
        <td data-label="Column 1">Row D</td>
        <td data-label="Column 2">Cell D2</td>
        <td data-label="Column 3">Cell D3</td>
        <td data-label="Column 4">Cell D4</td>
        <td data-label="Column 5">Cell D5</td>
        <td data-label="Column 6">Cell D6</td>
        <td data-label="Column 7">Cell D7</td>
        <td data-label="Column 8">Cell D8</td>
      </tr>
    </tbody>
  </table>
</div>
```
