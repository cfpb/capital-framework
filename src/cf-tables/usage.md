## CF Tables

### Table base style, with small screen base style "stacked"

- Uses '.table__stack-on-small' class to add small screen styles
- Note: Tables are not responsive without adding one of the small
  screen classes
- The use of the '.table__right-align' class on a TD aligns the text
    right - see the third column above
- The 'data-label' attribute is used to label each entry. Always
  include the 'data-label' attribute for each cell!

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

````
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
````

### Table with small screen variation - "stacked with entry header"

- "Uses '.table__entry-header-on-small' class in addition to
  '.table__stack-on-small' class to style the first column as an
  entry header. Note that this requires both classes be added."
- "Note: Tables are not responsive without adding one of the small
  screen classes"
- "The 'data-label' attribute is used to label each entry. Always
  include the 'data-label' attribute for each cell!"

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

````
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
````

### Table with small screen variation - "Comparative with horizontal scroll"

- "Must be wrapped in an element (DIV, in most cases) with the
  'table-wrapper__scrolling' class"
- The TABLE element does not need additional markup in this case
- "'Comparative with horizontal scroll' also adds striped rows to
  the table contained within, and remains striped on small screens
  (unlike the 'table__striped' class, below)."

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

````
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
````

### Standard table, with stripes

- Uses '.table__striped' class
- Striping is not visible by default on small screens

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

````
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
````

### Sortable Table

- Uses '.table__sortable' class to invoke sorting functions on the table
- "Columns which should be sortable have that column's THEAD TH content wrapped
  with a BUTTON, and the BUTTON has the .sortable class. (The use of a BUTTON
  tag here addresses certain accessibility concerns.)""
- "Note: The class '.sorted-up' refers to a sort from smallest to greatest
  (first to last), and '.sorted-down' refers to a sort from greatest to smallest
  (last to first)."
- "Please note the importance of defining a THEAD and TBODY to preserve
  the table's header through sorting operations"
- "Any BUTTON with the '.sortable' class can also be given the 'data-sort_type'
  attribute"
- "In the table example above, Distance is sorted by Number value. See below for
  the 'data-sort_type' modifier."
- "In the table example above, Distance is sorted low-to-high on page load by using
  the 'sortable__start-up' class in the BUTTON. See the 'sortable__start-up' and
  'sortable__start-down' modifiers below."

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

````
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
````

### data-sort_type (modifier)

- "By setting the 'data-sort_type' attribute to 'number', the column is sorted by
  Number value"
- "By default, columns will be sorted as strings."

    <table class="table__sortable">
      ...
        <th>
          <button class="sortable" data-sort_type="number">Column Name</button>
        </th>
      ...
    </table>

<table class="table__sortable">
  ...
    <th>
      <button class="sortable" data-sort_type="number">Column Name</button>
    </th>
  ...
</table>

### .sortable__start-up, .sortable__start-down (modifiers)

"To sort the table on page load, use the '.sortable__start-up' and '.sortable__start-down'
          classes."

    <table class="table__sortable">
      ...
        <th>
          <button class="sortable sortable__start-up">Column Name</button>
        </th>
      ...
    </table>

<table class="table__sortable">
  ...
    <th>
      <button class="sortable sortable__start-up">Column Name</button>
    </th>
  ...
</table>
