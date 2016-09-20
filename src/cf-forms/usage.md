The cf-forms component provides extensions to the basic form styles for Capital Framework.

[`cf-core`](../cf-core), [`cf-buttons`](../cf-buttons), and [`cf-icons`](../cf-icons) components are all dependencies of this component."

> NOTE: If you use `cf-forms.less` directly,
  be sure to run the file through
  [Autoprefixer](https://github.com/postcss/autoprefixer),
  or your compiled Capital Framework CSS will
  not work perfectly in older browsers.

## Table of contents

- [Variables](#variables)
    - [Color variables](#color-variables)
    - [Sizing variables](#sizing-variables)
- [Labels](#labels)
    - [Label header](#label-header)
- [Basic Form Elements](#basic-form-elements)
- [Inputs](#inputs)
    - [Input states](#input-states)
    - [Input icons](#input-icons)
- [Groups](#groups)
    - [Form group block](#form-group-block)
    - [Real world example](#real-world-example)
- [Buttons](#buttons)
    - [Default input and button](#default-input-and-button)
    - [Button inside input](#button-inside-input)

## Variables

Theme variables for setting the color and sizes throughout the project. Overwrite them in your own project by duplicating the variable `@key: value`.

### Color variables

`$color-` variables are from 18F's [US Web Design Standards](https://github.com/18F/web-design-standards/blob/18f-pages/assets/_scss/core/_variables.scss)

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


## Labels

### Basic label

<label class="a-label">
    A basic label
</label>

```
<label class="a-label">
    A basic label
</label>
```

### Label heading

<label class="a-label a-label__heading">
    A label heading
</label>

```
<label class="a-label a-label__heading">
    A label heading
</label>
```


## Inputs

Inputs should always be paired with a label for accessibility reasons.

### Basic text inputs

<label class="a-label" for="text-input-example"></label>
<input class="a-text-input" type="text" id="text-input example" value="Lorem ipsum">

<label class="a-label a-label__heading" for="textarea-example"></label>
<textarea class="a-text-input" id="textarea-example">Lorem Ipsum</textarea>

```
<label class="a-label" for="text-input-example"></label>
<input class="a-text-input" type="text" id="text-input example" value="Lorem ipsum">

<label class="a-label a-label__heading" for="textarea-example"></label>
<textarea class="a-text-input" id="textarea-example">Lorem Ipsum</textarea>
```

### Input states

See the 'Form icons' section below for guidance on adding icons to states.

#### Disabled state

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

### Inline Form Validation

<div class="m-field m-field__error">
    <label class="a-label__heading" for="form-input-error">Label</label>
    <input class="a-text-input a-text-input__error"
           type="text"
           value="Invalid input"
           id="form-input-error"
           aria-describedby="form-input-error_message">
    <div class="a-error-message" id="form-input-error_message" role="alert">
        <span class="cf-icon cf-icon-delete-round" aria-hidden="true"></span>
        This is a required question, please answer.
    </div>
</div>

```
<div class="m-field m-field__error">
    <label class="a-label__heading" for="form-input-error">Label</label>
    <input class="a-text-input a-text-input__error"
           type="text"
           value="Invalid input"
           id="form-input-error"
           aria-describedby="form-input-error_message">
    <div class="a-error-message" id="form-input-error_message" role="alert">
        <span class="cf-icon cf-icon-delete-round" aria-hidden="true"></span>
        This is a required question, please answer.
    </div>
</div>
```

#### Error icon

- The icon must be placed directly after the form input in the markup and the input must use the 'error' class.
- For invalid fields only use the alert role to call attention to fields that need immediate attention: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_alert_role

<input class="error" type="text" value="Invalid input" title="Test input">
<span class="cf-form_input-icon cf-icon cf-icon-delete-round" role="alert"></span>

```
<input class="error" type="text" value="Invalid input" title="Test input">
<span class="cf-form_input-icon cf-icon cf-icon-delete-round" role="alert"></span>
```

#### Warning icon

<input class="warning" type="text" value="Invalid input" title="Test input">
<span class="cf-form_input-icon cf-icon cf-icon-error-round" role="alert"></span>

```
<input class="warning" type="text" value="Invalid input" title="Test input">
<span class="cf-form_input-icon cf-icon cf-icon-error-round" role="alert"></span>
```

#### Success icon

<input class="success" type="text" value="Validated input" title="Test input">
<span class="cf-form_input-icon cf-icon cf-icon-approved-round"></span>

```
<input class="success" type="text" value="Validated input" title="Test input">
<span class="cf-form_input-icon cf-icon cf-icon-approved-round"></span>
```

## Buttons

### Default input and button

<div class="o-form__input-w-btn">
    <div class="o-form__input-w-btn_input-container">
        <input type="text" title="Test input">
    </div>
    <div class="o-form__input-w-btn_btn-container">
        <button class="a-btn">Search</button>
    </div>
</div>

```
<div class="o-form__input-w-btn">
    <div class="o-form__input-w-btn_input-container">
        <input type="text" title="Test input">
    </div>
    <div class="o-form__input-w-btn_btn-container">
        <button class="a-btn">Search</button>
    </div>
</div>
```

### Button inside input

#### Default button inside of an default input


<div class="m-btn-inside-input">
    <div class="m-btn-inside-input_input-container">
      <input type="text"
          value="This is some really long text to make sure that the button doesn't overlap the content in such a way that this input becomes unusable."
          title="Test input"
          class="a-text-input">
    </div>
    <div class="m-btn-inside-input_btn-container">
      <button class="a-btn a-btn__link">
          Clear
          <span class="cf-icon cf-icon-delete"></span>
      </button>
    </div>
</div>

#### Default button inside of a default input with button

<div class="o-form__input-w-btn">
    <div class="m-btn-inside-input o-form__input-w-btn_input-container">
        <div class="m-btn-inside-input_input-container">
          <input type="text"
              value="This is some really long text to make sure that the button doesn't overlap the content in such a way that this input becomes unusable."
              title="Test input"
              class="a-text-input">
        </div>
        <div class="m-btn-inside-input_btn-container">
          <button class="a-btn a-btn__link">
              Clear
              <span class="cf-icon cf-icon-delete"></span>
          </button>
        </div>
    </div>
    <div class="o-form__input-w-btn_btn-container">
        <button class="a-btn">Search</button>
    </div>
</div>




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
           for="select_example__disabled">
            Disabled select example
    </label>
    <div class="m-select">
        <select id="select_example__disabled" disabled>
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
           for="select_example__disabled">
            Disabled select example
    </label>
    <div class="m-select">
        <select id="select_example__disabled" disabled>
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
           for="select_example__optional">
            Optional select example
            <span class="micro-copy">&nbsp;(Optional)</span>
    </label>
    <div class="m-select">
        <select id="select_example__optional">
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
           for="select_example__optional">
            Optional select example
            <span class="micro-copy">&nbsp;(Optional)</span>
    </label>
    <div class="m-select">
        <select id="select_example__optional">
            <option value="" disabled selected>Please select</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
        </select>
    </div>
</div>
```
