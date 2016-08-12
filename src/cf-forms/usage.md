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
- [Inputs](#inputs)
    - [Super input](#super-input)
    - [Input states](#input-states)
    - [Input icons](#input-icons)
- [Groups](#groups)
    - [Form group block](#form-group-block)
    - [Real world example](#real-world-example)
- [Buttons](#buttons)
    - [Default input and button](#default-input-and-button)
    - [Super input and button](#super-input-and-button)
    - [Button inside input](#button-inside-input)
    - [Super button inside of a super input](#super-button-inside-of-a-super-input)

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

### Sizing variables

```
// .input__super
@input__super-font-size:        18px;
```

## Labels

### Label header

<label class="form-label-header">
    Form label header
</label>

```
<label class="form-label-header">
    Form label header
</label>
```

## Inputs

### Super input

An input that matches the height of a super button.

<input class="input__super" type="text" value="Super input" title="Test input">
<button class="btn btn__super">Super</button>

```
<input class="input__super" type="text" value="Super input" title="Test input"></input>
<button class="btn btn__super">Super</button>
```

### Input states

See the 'Form icons' section below for guidance on adding icons to states.

#### Error state

<input class="error" type="text" value="Invalid input" title="Test input">

```
<input class="error" type="text" value="Invalid input" title="Test input">
```

#### Warning state

<input class="warning" type="text" value="Invalid input" title="Test input">

```
<input class="warning" type="text" value="Invalid input" title="Test input">
```

#### Success state

<input class="success" type="text" value="Validated input" title="Test input">

```
<input class="success" type="text" value="Validated input" title="Test input">
```

#### Disabled state

<input class="disabled" disabled="true" autocomplete="off" type="text" value="Validated input" title="Test input">

```
<input class="disabled" disabled="true" autocomplete="off" type="text" value="Validated input" title="Test input">
```

### Input icons

Form input icons add small positioning tweaks to Capital Framework icons.

<input type="text" value="" title="Test input">
<span class="cf-form_input-icon cf-icon cf-icon-email"></span>

```
<input type="text" value="" title="Test input">
<span class="cf-form_input-icon cf-icon cf-icon-email"></span>
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

## Groups

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

## Buttons

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

### Button inside input

#### Default button inside of an default input

<div class="btn-inside-input">
    <input type="text"
           value="This is some really long text to make sure that the button doesn't overlap the content in such a way that this input becomes unusable." title="Test input">
    <button class="btn btn__link">
        Clear
        <span class="cf-icon cf-icon-delete"></span>
    </button>
</div>

```
<div class="btn-inside-input">
    <input type="text"
           value="This is some really long text to make sure that the button doesn't overlap the content in such a way that this input becomes unusable." title="Test input">
    <button class="btn btn__link">
        Clear
        <span class="cf-icon cf-icon-delete"></span>
    </button>
</div>
```

#### Super button inside of a super input

<div class="btn-inside-input">
    <input class="input__super"
           type="text"
           value="This is some really long text to make sure that the button doesn't overlap the content in such a way that this input becomes unusable." title="Test input">
    <button class="btn btn__super btn__link btn__secondary">
        Clear
        <span class="cf-icon cf-icon-delete"></span>
    </button>
</div>

```
<div class="btn-inside-input">
    <input class="input__super"
           type="text"
           value="This is some really long text to make sure that the button doesn't overlap the content in such a way that this input becomes unusable." title="Test input">
    <button class="btn btn__super btn__link btn__secondary">
        Clear
        <span class="cf-icon cf-icon-delete"></span>
    </button>
</div>
```
