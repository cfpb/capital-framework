The cf-forms component provides extensions to the basic form styles for
Capital Framework.

[`cf-core`](../cf-core), [`cf-buttons`](../cf-buttons), and
[`cf-icons`](../cf-icons) components are all dependencies of this component.

> NOTE: If you use `cf-forms.less` directly,
  be sure to run the file through
  [Autoprefixer](https://github.com/postcss/autoprefixer),
  or your compiled Capital Framework CSS will
  not work perfectly in older browsers.


## Table of contents

- [Variables](#variables)
    - [Color variables](#color-variables)
- [Labels](#labels)
    - [Basic label](#basic-label)
    - [Label heading](#label-heading)
- [Inputs](#inputs)
    - [Basic Text Inputs](#basic-text-inputs)
    - [Basic checkboxes](#basic-checkboxes)
    - [Basic radio buttons](#basic-radio-buttons)
    - [Input states](#input-states)
- [Buttons](#buttons)
    - [Input and button](#input-and-button)
    - [Button inside input](#button-inside-input)
- [Select dropdown](#select-dropdown)
    - [Basic select](#basic-select)
    - [Disabled select](#disabled-select)


## Variables

Theme variables for setting the color and sizes throughout the project.
Overwrite them in your own project by duplicating the variable `@key: value`.

### Color variables

`$color-` variables referenced in comments are from 18F's
[U.S. Web Design Standards](https://github.com/18F/web-design-standards/blob/staging/src/stylesheets/core/_variables.scss)

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

Inputs should always be paired with a `label` for accessibility reasons.

### Basic text inputs

<label class="a-label" for="text-input-example">A text input</label>
<input class="a-text-input"
       type="text"
       id="text-input example"
       value="Lorem ipsum">

<label class="a-label" for="textarea-example">A textarea input</label>
<textarea class="a-text-input" id="textarea-example">Lorem Ipsum</textarea>

```
<label class="a-label" for="text-input-example">A text input</label>
<input class="a-text-input"
       type="text"
       id="text-input example"
       value="Lorem ipsum">

<label class="a-label" for="textarea-example">A textarea input</label>
<textarea class="a-text-input" id="textarea-example">Lorem Ipsum</textarea>
```

### Basic checkboxes

<div class="m-form-field__checkbox">
    <input class="a-checkbox" type="checkbox" id="test_checkbox">
    <label class="a-label" for="test_checkbox">Label</label>
</div>

```
<div class="m-form-field__checkbox">
    <input class="a-checkbox" type="checkbox" id="test_checkbox">
    <label class="a-label" for="test_checkbox">Label</label>
</div>
```

### Basic radio buttons

<div class="m-form-field__radio">
    <input class="a-radio" type="radio" id="test_radio">
    <label class="a-label" for="test_radio">Label</label>
</div>

```
<div class="m-form-field__radio">
    <input class="a-radio" type="radio" id="test_radio">
    <label class="a-label" for="test_radio">Label</label>
</div>
```

### Input states

See the 'Form icons' section below for guidance on adding icons to states.

#### Disabled state

<input class="a-text-input disabled"
       disabled="true"
       autocomplete="off"
       type="text"
       value="Disabled input">

```
<input class="a-text-input disabled"
       disabled="true"
       autocomplete="off"
       type="text"
       value="Disabled input">
```

### Inline Form Validation

<div class="m-form-field m-form-field__error">
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

## Buttons

### Input and button

<div class="o-form__input-w-btn">
    <div class="o-form__input-w-btn_input-container">
        <input class="a-text-input" type="text" title="Test input">
    </div>
    <div class="o-form__input-w-btn_btn-container">
        <button class="a-btn">Search</button>
    </div>
</div>

##NOTE: Fix the button text size


```
<div class="o-form__input-w-btn">
    <div class="o-form__input-w-btn_input-container">
        <input class="a-text-input" type="text" title="Test input">
    </div>
    <div class="o-form__input-w-btn_btn-container">
        <button class="a-btn">Search</button>
    </div>
</div>
```

### Button inside input

#### Default button inside of an default input

<div class="m-btn-inside-input">
    <input type="text"
        value="This is some really long text to make sure that the button
               doesn't overlap the content in such a way that this input
               becomes unusable."
        title="Test input"
        class="a-text-input">
    <button class="a-btn a-btn__link">
        Clear
        <span class="cf-icon cf-icon-delete"></span>
    </button>
</div>

#### Button inside input and button

<div class="o-form__input-w-btn">
    <div class="o-form__input-w-btn_input-container">
        <div class="m-btn-inside-input">
            <input type="text"
                value="This is some really long text to make sure that the
                       button doesn't overlap the content in such a way
                       that this input becomes unusable."
                title="Test input"
                class="a-text-input">
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

### Basic select

<div class="m-form-field__select">
    <label class="a-label" for="test_select">Label</label>
    <div class="a-select">
        <select id="test_select">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
        </select>
    </div>
</div>

```
<div class="m-form-field__select">
    <label class="a-label" for="test_select">Label</label>
    <div class="a-select">
        <select id="test_select">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
        </select>
    </div>
</div>
```

### Disabled select

<div class="m-form-field__select">
    <label class="a-label" for="test_select__disabled">Label</label>
    <div class="a-select">
        <select id="test_select__disabled" disabled>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
        </select>
    </div>
</div>

```
<div class="m-form-field__select">
    <label class="a-label" for="test_select__disabled">Label</label>
    <div class="a-select">
        <select id="test_select__disabled" disabled>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
        </select>
    </div>
</div>
```
