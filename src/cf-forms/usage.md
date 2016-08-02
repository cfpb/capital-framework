# Forms

## Vars

Theme variables for setting the color and sizes throughout the project. Overwrite them in your own project by duplicating the variable `@key: value`.

### Color variables

```
// .error
@input-error:                   #ea130b;

// warning
@input-warning:                 #ffb108;

// .success
@input-success:                 #009d38;

// .disabled
@input-disabled:                #cdb5cd;
```

### Sizing variables

```
// .input__super
@input__super-font-size:        18px;
```

## Form labels

### Label header

<label class="form-label-header">
    Form label header
</label>

```
<label class="form-label-header">
    Form label header
</label>
```

## Super input

An input that matches the height of a super button.

<input class="input__super" type="text" value="Super input" title="Test input"></input>
<button class="btn btn__super">Super</button>

```
<input class="input__super" type="text" value="Super input" title="Test input"></input>
<button class="btn btn__super">Super</button>
```

## Input states

See the 'Form icons' section below for guidance on adding icons to states.

### Error state

<input class="error" type="text" value="Invalid input" title="Test input">

```
<input class="error" type="text" value="Invalid input" title="Test input">
```

### Warning state

<input class="warning" type="text" value="Invalid input" title="Test input">

```
<input class="warning" type="text" value="Invalid input" title="Test input">
```

### Success state

<input class="success" type="text" value="Validated input" title="Test input">

```
<input class="success" type="text" value="Validated input" title="Test input">
```

### Disabled state

<input class="disabled"
       disabled="true"
       autocomplete="off"
       type="text"
       value="Validated input"
       title="Test input">

```
<input class="disabled"
       disabled="true"
       autocomplete="off"
       type="text"
       value="Validated input"
       title="Test input">
```

## Form icons

Form input icons add small positioning tweaks to Capital Framework icons.

### Form input icons

<input type="text" value="" title="Test input">
<span class="cf-form_input-icon cf-icon cf-icon-email"></span>

```
<input type="text" value="" title="Test input">
<span class="cf-form_input-icon cf-icon cf-icon-email"></span>
```

### Form input error icon

- The icon must be placed directly after the form input in the markup and the input must use the 'error' class.
- For invalid fields only use the alert role to call attention to fields that need immediate attention: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_alert_role

<input class="error" type="text" value="Invalid input" title="Test input">
<span class="cf-form_input-icon cf-icon cf-icon-delete-round" role="alert"></span>

```
<input class="error" type="text" value="Invalid input" title="Test input">
<span class="cf-form_input-icon cf-icon cf-icon-delete-round" role="alert"></span>
```

### Form input warning icon

<input class="warning" type="text" value="Invalid input" title="Test input">
<span class="cf-form_input-icon cf-icon cf-icon-error-round" role="alert"></span>

```
<input class="warning" type="text" value="Invalid input" title="Test input">
<span class="cf-form_input-icon cf-icon cf-icon-error-round" role="alert"></span>
```

### Form input success icon

<input class="success" type="text" value="Validated input" title="Test input">
<span class="cf-form_input-icon cf-icon cf-icon-approved-round"></span>

```
<input class="success" type="text" value="Validated input" title="Test input">
<span class="cf-form_input-icon cf-icon cf-icon-approved-round"></span>
```

## Form group

A form group is recommended when you need to provide spacing between form elements and between groups of form elements.

### Form group block

Provides sizeable margins between groups of form elements.

<div class="form-group">
    <div class="form-group_item">
        <input type="text" title="Test input">
    </div>
    <div class="form-group_item">
        <input type="text" title="Test input">
    </div>
</div>
<div class="form-group">
    <div class="form-group_item">
        <input type="text" title="Test input">
    </div>
    <div class="form-group_item">
        <input type="text" title="Test input">
    </div>
</div>
<div class="form-group">
    <div class="form-group_item">
        <input type="text" title="Test input">
    </div>
    <div class="form-group_item">
        <input type="text" title="Test input">
    </div>
</div>

```
<div class="form-group">
    <div class="form-group_item">
        <input type="text" title="Test input">
    </div>
    <div class="form-group_item">
        <input type="text" title="Test input">
    </div>
</div>
<div class="form-group">
    <div class="form-group_item">
        <input type="text" title="Test input">
    </div>
    <div class="form-group_item">
        <input type="text" title="Test input">
    </div>
</div>
<div class="form-group">
    <div class="form-group_item">
        <input type="text" title="Test input">
    </div>
    <div class="form-group_item">
        <input type="text" title="Test input">
    </div>
</div>
```

### Real world example

<div class="form-group">
    <label class="form-label-header">Form group</label>
    <div class="form-group_item">
        <input type="text" value="Form group item" title="Test input">
    </div>
    <div class="form-group_item">
        <input type="text" value="Form group item" title="Test input">
    </div>
</div>
<div class="form-group">
    <label class="form-label-header">Form group</label>
    <div class="form-group_item">
        <input type="text" value="Form group item" title="Test input">
    </div>
    <div class="form-group_item">
        <input type="text" value="Form group item" title="Test input">
    </div>
</div>

```
<div class="form-group">
    <label class="form-label-header">Form group</label>
    <div class="form-group_item">
        <input type="text" value="Form group item" title="Test input">
    </div>
    <div class="form-group_item">
        <input type="text" value="Form group item" title="Test input">
    </div>
</div>
<div class="form-group">
    <label class="form-label-header">Form group</label>
    <div class="form-group_item">
        <input type="text" value="Form group item" title="Test input">
    </div>
    <div class="form-group_item">
        <input type="text" value="Form group item" title="Test input">
    </div>
</div>
```

## Input with button

### Default input and button

<div class="input-with-btn">
    <div class="input-with-btn_input">
        <input type="text" title="Test input">
    </div>
    <div class="input-with-btn_btn">
        <button class="btn">Search</button>
    </div>
</div>

```
<div class="input-with-btn">
    <div class="input-with-btn_input">
        <input type="text" title="Test input">
    </div>
    <div class="input-with-btn_btn">
        <button class="btn">Search</button>
    </div>
</div>
```

### Super input and button

<div class="input-with-btn">
    <div class="input-with-btn_input">
        <input class="input__super" type="text" title="Test input">
    </div>
    <div class="input-with-btn_btn">
        <button class="btn btn__super">Search</button>
    </div>
</div>

```
<div class="input-with-btn">
    <div class="input-with-btn_input">
        <input class="input__super" type="text" title="Test input">
    </div>
    <div class="input-with-btn_btn">
        <button class="btn btn__super">Search</button>
    </div>
</div>
```

## Button inside input

### Default button inside of an default input

<div class="btn-inside-input">
    <input type="text"
           value="This is some really long text to make sure that the button doesn't overlap the content in such a way that this input becomes unusable."
           title="Test input">
    <button class="btn btn__link">
        Clear
        <span class="cf-icon cf-icon-delete"></span>
    </button>
</div>

```
<div class="btn-inside-input">
    <input type="text"
           value="This is some really long text to make sure that the button doesn't overlap the content in such a way that this input becomes unusable."
           title="Test input">
    <button class="btn btn__link">
        Clear
        <span class="cf-icon cf-icon-delete"></span>
    </button>
</div>
```

### Super button inside of a super input

<div class="btn-inside-input">
    <input class="input__super"
           type="text"
           value="This is some really long text to make sure that the button doesn't overlap the content in such a way that this input becomes unusable."
           title="Test input">
    <button class="btn btn__super btn__link btn__secondary">
        Clear
        <span class="cf-icon cf-icon-delete"></span>
    </button>
</div>

```
<div class="btn-inside-input">
    <input class="input__super"
           type="text"
           value="This is some really long text to make sure that the button doesn't overlap the content in such a way that this input becomes unusable."
           title="Test input">
    <button class="btn btn__super btn__link btn__secondary">
        Clear
        <span class="cf-icon cf-icon-delete"></span>
    </button>
</div>
```

### Checkboxes with large target areas

<fieldset class="u-reset">
    <div class="form-l_col
                form-l_col-1">
        <legend class="form-label-header">
            Pets you own
        </legend>
    </div>
    <div class="form-l_col
                form-l_col-1-2
                form-l-col__inset">
        <div class="form-l-inset_container">
            <input class="cf-input"
                   type="checkbox"
                   name="form_id"
                   id="input_id_cats">
            <label class="cf-input_label"
                   for="input_id_cats">
                Cats
            </label>
        </div>
    </div>
    <div class="form-l_col
                form-l_col-1-2
                form-l-inset">
        <div class="form-l-inset_container">
            <input class="cf-input"
                   type="checkbox"
                   name="form_id"
                   id="input_id_dogs">
            <label class="cf-input_label"
                   for="input_id_dogs">
                Dogs
            </label>
        </div>
    </div>
</fieldset>

```
<fieldset class="u-reset">
    <div class="form-l_col
                form-l_col-1">
        <legend class="form-label-header">
            Pets you own
        </legend>
    </div>
    <div class="form-l_col
                form-l_col-1-2
                form-l-col__inset">
        <div class="form-l-inset_container">
            <input class="cf-input"
                   type="checkbox"
                   name="form_id"
                   id="input_id_cats">
            <label class="cf-input_label"
                   for="input_id_cats">
                Cats
            </label>
        </div>
    </div>
    <div class="form-l_col
                form-l_col-1-2
                form-l-inset">
        <div class="form-l-inset_container">
            <input class="cf-input"
                   type="checkbox"
                   name="form_id"
                   id="input_id_dogs">
            <label class="cf-input_label"
                   for="input_id_dogs">
                Dogs
            </label>
        </div>
    </div>
</fieldset>
```

### Radio buttons with large target areas

<fieldset class="u-reset">
    <div class="form-l_col
                form-l_col-1">
        <legend class="form-label-header">
            Pick an option
        </legend>
    </div>
    <div class="form-l_col
                form-l_col-1-2
                form-l-inset">
        <div class="form-l-inset_container">
            <input class="cf-input"
                   type="radio"
                   name="form_id"
                   id="input_id_1">
            <label class="cf-input_label"
                   for="input_id_1">
                Yes
            </label>
        </div>
    </div>
    <div class="form-l_col
                form-l_col-1-2
                form-l-inset">
        <div class="form-l-inset_container">
            <input class="cf-input"
                   type="radio"
                   name="form_id"
                   id="input_id_2">
            <label class="cf-input_label"
                   for="input_id_2">
                No
            </label>
        </div>
    </div>
</fieldset>

```
<fieldset class="u-reset">
    <div class="form-l_col
                form-l_col-1">
        <legend class="form-label-header">
            Pick an option
        </legend>
    </div>
    <div class="form-l_col
                form-l_col-1-2
                form-l-inset">
        <div class="form-l-inset_container">
            <input class="cf-input"
                   type="radio"
                   name="form_id"
                   id="input_id_1">
            <label class="cf-input_label"
                   for="input_id_1">
                Yes
            </label>
        </div>
    </div>
    <div class="form-l_col
                form-l_col-1-2
                form-l-inset">
        <div class="form-l-inset_container">
            <input class="cf-input"
                   type="radio"
                   name="form_id"
                   id="input_id_2">
            <label class="cf-input_label"
                   for="input_id_2">
                No
            </label>
        </div>
    </div>
</fieldset>
```

## Select dropdown

### Required select

<div class="form-l_col form-l_col-1">
    <label class="form-label-header"
           for="select_example">
            Required select example
    </label>
    <div class="m-select">
        <select id="select_example" required>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
        </select>
    </div>
</div>

```
<div class="form-l_col form-l_col-1">
    <label class="form-label-header"
           for="select_example">
            Required select example
    </label>
    <div class="m-select">
        <select id="select_example" required>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
        </select>
    </div>
</div>
```


### Disabled select

<div class="form-l_col form-l_col-1">
    <label class="form-label-header"
           for="select_example">
            Disabled select example
    </label>
    <div class="m-select">
        <select id="select_example" disabled>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
        </select>
    </div>
</div>

```
<div class="form-l_col form-l_col-1">
    <label class="form-label-header"
           for="select_example">
            Disabled select example
    </label>
    <div class="m-select">
        <select id="select_example" disabled>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
        </select>
    </div>
</div>
```


### Optional select

<div class="form-l_col form-l_col-1">
    <label class="form-label-header"
           for="select_example">
            Optional select example
            <span class="micro-copy">&nbsp;(Optional)</span>
    </label>
    <div class="m-select">
        <select id="select_example">
            <option value="" disabled selected>Please select</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
        </select>
    </div>
</div>

```
<div class="form-l_col form-l_col-1">
    <label class="form-label-header"
           for="select_example">
            Optional select example
            <span class="micro-copy">&nbsp;(Optional)</span>
    </label>
    <div class="m-select">
        <select id="select_example">
            <option value="" disabled selected>Please select</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
        </select>
    </div>
</div>
```