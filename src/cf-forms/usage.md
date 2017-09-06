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
- [Legends](#legends)
- [Labels](#labels)
    - [Basic label](#basic-label)
    - [Label heading](#label-heading)
    - [Label helper text](#label-helper-text)
- [Inputs](#inputs)
    - [Basic Text Inputs](#basic-text-inputs)
    - [Full-width inputs](#full-width-inputs)
    - [Basic checkboxes](#basic-checkboxes)
    - [Basic radio buttons](#basic-radio-buttons)
    - [Large target area checkboxes](#large-target-area-checkboxes)
    - [Large target area radio buttons](#large-target-area-radio-buttons)
    - [Input states](#input-states)
- [Buttons](#buttons)
    - [Simple input with a button](#simple-input-with-a-button)
    - [Button inside an input](#button-inside-an-input)
    - [Button inside an input with a button](#button-inside-an-input-with-a-button)
- [Select dropdown](#select-dropdown)
    - [Basic select](#basic-select)
    - [Disabled select](#disabled-select)
- [Basic multiselect](#basic-multiselect)
- [Form fieldsets](#form-fieldsets)


## Variables

Theme variables for setting the color and sizes throughout the project.
Overwrite them in your own project by duplicating the variable `@key: value`.

### Color variables

Color variables referenced in comments are from [cf-core cf-brand-colors.less](https://github.com/cfpb/capital-framework/blob/master/src/cf-core/src/cf-brand-colors.less).

```
// .a-text-input borders
@input-border:                  @gray-60;
@input-border__hover:           @pacific;
@input-border__focused:         @pacific;
@input-border__active:          @pacific;
@input-border__error:           @red;
@input-border__warning:         @gold;
@input-border__success:         @green;
@input-border__selected:        @pacific;

// .a-text-input backgrounds
@input-bg:                      @white;
@input-bg__selected:            @pacific;
@input-bg__disabled:            @gray-10;

// .a-text-input text
@input-text__disabled:          @gray;
@input-text__placeholder:       @gray;

// .a-text-input icons
@input-icon__error:             @red;

// .a-select
@select-border:                 @input-border;
@select-icon:                   @gray-80;
@select-icon-bg:                @gray-10;
@select-text__disabled:         @input-text__disabled;

// .m-form-field__lg-target
@input-lg-target:               @gray-10;
@input-lg-target__selected:     @pacific-20;
@input-lg-target__disabled:     @input-lg-target;

// .a-label_helper
@label-helper:                  @gray;
```

### Sizing variables

```
// .a-select
@select-height:                  30px;
```

## Legends

<legend class="a-legend">
    A basic legend
</legend>

```
<legend class="a-legend">
    A basic legend
</legend>
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

### Label helper text

Used for designating an input as optional for user input.

<label class="a-label a-label__heading">
    A label <small class="a-label_helper">(optional)</small>
</label>

```
<label class="a-label a-label__heading">
    A label <small class="a-label_helper">(optional)</small>
</label>
```

## Inputs

Inputs should always be paired with a `label` for accessibility reasons.

### Basic text inputs

<label class="a-label" for="textinput-example">A text input</label>
<input class="a-text-input"
       type="text"
       id="textinput-example"
       value="Lorem ipsum">

<label class="a-label" for="full-textarea-example">A textarea input</label>
<textarea class="a-text-input" id="full-textarea-example">Lorem Ipsum</textarea>

```
<label class="a-label" for="textinput-example">A text input</label>
<input class="a-text-input"
       type="text"
       id="textinput-example"
       value="Lorem ipsum">

<label class="a-label" for="textarea-example">A textarea input</label>
<textarea class="a-text-input" id="textarea-example">Lorem Ipsum</textarea>
```

### Full-width inputs

<div class="m-form-field">
    <label class="a-label" for="full-textinput-example">A full-width text input</label>
    <input class="a-text-input a-text-input__full"
           type="text"
           id="full-textinput-example"
           value="Lorem ipsum">
    <br><br>
    <label class="a-label" for="full-textarea-example">A full-width textarea input</label>
    <textarea class="a-text-input a-text-input__full"
              id="full-textarea-example">Lorem Ipsum</textarea>
</div>

```
<div class="m-form-field">
    <label class="a-label" for="full-textinput-example">A text input</label>
    <input class="a-text-input a-text-input__full"
           type="text"
           id="full-textinput-example"
           value="Lorem ipsum">

    <label class="a-label" for="full-textarea-example">A textarea input</label>
    <textarea class="a-text-input a-text-input__full"
              id="full-textarea-example">Lorem Ipsum</textarea>
</div>
```

### Basic checkboxes

<div class="m-form-field m-form-field__checkbox">
    <input class="a-checkbox" type="checkbox" id="test_checkbox">
    <label class="a-label" for="test_checkbox">Label</label>
</div>

```
<div class="m-form-field m-form-field__checkbox">
    <input class="a-checkbox" type="checkbox" id="test_checkbox">
    <label class="a-label" for="test_checkbox">Label</label>
</div>
```

### Basic radio buttons

<div class="m-form-field m-form-field__radio">
    <input class="a-radio" type="radio" id="test_radio">
    <label class="a-label" for="test_radio">Label</label>
</div>

```
<div class="m-form-field m-form-field__radio">
    <input class="a-radio" type="radio" id="test_radio">
    <label class="a-label" for="test_radio">Label</label>
</div>
```

### Large target area checkboxes

<div class="m-form-field m-form-field__checkbox m-form-field__lg-target">
    <input class="a-checkbox" type="checkbox" id="test_checkbox_lg">
    <label class="a-label" for="test_checkbox_lg">Label</label>
</div>

```
<div class="m-form-field m-form-field__checkbox m-form-field__lg-target">
    <input class="a-checkbox" type="checkbox" id="test_checkbox_lg">
    <label class="a-label" for="test_checkbox_lg">Label</label>
</div>
```


### Large target area radio buttons

<div class="m-form-field m-form-field__radio m-form-field__lg-target">
    <input class="a-radio" type="radio" id="test_radio_lg">
    <label class="a-label" for="test_radio_lg">Label</label>
</div>

```
<div class="m-form-field m-form-field__radio m-form-field__lg-target">
    <input class="a-radio" type="radio" id="test_radio_lg">
    <label class="a-label" for="test_radio_lg">Label</label>
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

## Buttons

### Simple input with a button

These are used for simple forms where a full filter isn't necessary.

<div class="o-form__input-w-btn">
    <div class="o-form__input-w-btn_input-container">
        <input class="a-text-input" type="text" title="Test input">
    </div>
    <div class="o-form__input-w-btn_btn-container">
        <button class="a-btn">Search</button>
    </div>
</div>

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

### Button inside an input

These offer the user an action to take related to the input,
typically to clear the input.

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

```
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
```

### Button inside an input with a button

This example combines both of the previous patterns,
creating a typical site search form.

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

```
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
```


## Select dropdown

### Basic select

<div class="m-form-field m-form-field__select">
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
<div class="m-form-field m-form-field__select">
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

<div class="m-form-field m-form-field__select">
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
<div class="m-form-field m-form-field__select">
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

## Basic multiselect

<div class="m-form-field m-form-field__select">
    <label class="a-label" for="test_select__multiple">Label</label>
    <select class="a-multiselect" id="test_select__multiple" multiple>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option4">Option 4</option>
        <option value="option1">Option 5</option>
        <option value="option2">Option 6</option>
        <option value="option3">Option 7</option>
        <option value="option4">Option 8</option>
    </select>
</div>

```
<div class="m-form-field m-form-field__select">
    <label class="a-label" for="test_select__multiple">Label</label>
    <select class="a-multiselect" id="test_select__multiple" multiple>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option4">Option 4</option>
        <option value="option1">Option 5</option>
        <option value="option2">Option 6</option>
        <option value="option3">Option 7</option>
        <option value="option4">Option 8</option>
    </select>
</div>
```

### Form fieldsets

<form class="o-form">
    <div class="o-form_group">
        <fieldset class="o-form_fieldset">
            <div class="m-form-field m-form-field__checkbox">
                <input class="a-checkbox" type="checkbox" id="test_checkbox_1" name="test_checkbox">
                <label class="a-label" for="test_checkbox_1">Label</label>
            </div>
            <div class="m-form-field m-form-field__checkbox">
                <input class="a-checkbox" type="checkbox" id="test_checkbox_2" name="test_checkbox">
                <label class="a-label" for="test_checkbox_2">Label</label>
            </div>
        </fieldset>
    </div>
    <div class="o-form_group">
        <fieldset class="o-form_fieldset">
            <div class="m-form-field m-form-field__radio">
                <input class="a-radio" type="radio" id="test_radio_1" name="test_radio">
                <label class="a-label" for="test_radio_1">Label</label>
            </div>
            <div class="m-form-field m-form-field__radio">
                <input class="a-radio" type="radio" id="test_radio_2" name="test_radio">
                <label class="a-label" for="test_radio_2">Label</label>
            </div>
        </fieldset>
    </div>
</form>

```
<form class="o-form">
    <div class="o-form_group">
        <fieldset class="o-form_fieldset">
            <div class="m-form-field m-form-field__checkbox">
                <input class="a-checkbox" type="checkbox" id="test_checkbox_1" name="test_checkbox">
                <label class="a-label" for="test_checkbox_1">Label</label>
            </div>
            <div class="m-form-field m-form-field__checkbox">
                <input class="a-checkbox" type="checkbox" id="test_checkbox_2" name="test_checkbox">
                <label class="a-label" for="test_checkbox_2">Label</label>
            </div>
        </fieldset>
    </div>
    <div class="o-form_group">
        <fieldset class="o-form_fieldset">
            <div class="m-form-field m-form-field__radio">
                <input class="a-radio" type="radio" id="test_radio_1" name="test_radio">
                <label class="a-label" for="test_radio_1">Label</label>
            </div>
            <div class="m-form-field m-form-field__radio">
                <input class="a-radio" type="radio" id="test_radio_2" name="test_radio">
                <label class="a-label" for="test_radio_2">Label</label>
            </div>
        </fieldset>
    </div>
</form>
```
