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
    - [Basic text inputs](#basic-text-inputs)
        - [Full-width modifier](#full-width-modifier)
    - [Basic checkboxes](#basic-checkboxes)
    - [Basic radio buttons](#basic-radio-buttons)
    - [Large target area checkboxes](#large-target-area-checkboxes)
    - [Large target area radio buttons](#large-target-area-radio-buttons)
    - [Inputs helper text](#inputs-helper-text)
    - [Inline Form Validation](#inline-form-validation)
- [Buttons](#buttons)
    - [Simple input with a button](#simple-input-with-a-button)
    - [Button inside an input](#button-inside-an-input)
    - [Button inside an input with a button](#button-inside-an-input-with-a-button)
- [Select dropdown](#select-dropdown)
- [Basic multiselect](#basic-multiselect)
- [Fieldsets](#form-fieldsets)


## Variables

Theme variables for setting the color and sizes throughout the project.
Overwrite them in your own project by duplicating the variable `@key: value`.

### Color variables

Color variables referenced in comments are from [cf-core cf-brand-colors.less](https://github.com/cfpb/capital-framework/blob/master/src/cf-core/src/cf-brand-colors.less).

```less
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
@input-text:                    @black;
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

```less
// .a-select
@select-height:                  30px;
```


## Legends

<legend class="a-legend">
    A basic legend
</legend>

```html
<legend class="a-legend">
    A basic legend
</legend>
```


## Labels

### Basic label

<label class="a-label">
    A basic label
</label>

```html
<label class="a-label">
    A basic label
</label>
```

### Label heading

<label class="a-label a-label__heading">
    A label heading
</label>

```html
<label class="a-label a-label__heading">
    A label heading
</label>
```

### Label helper text

#### Inline helper text

Appears with label headings.
Used for designating an input as optional for user input.

<label class="a-label a-label__heading">
    A label heading <small class="a-label_helper">(optional)</small>
</label>

```html
<label class="a-label a-label__heading">
    A label heading <small class="a-label_helper">(optional)</small>
</label>
```

#### Block helper text

Appears with labels and label headings.

<label class="a-label a-label__heading">
    A label heading
    <small class="a-label_helper a-label_helper__block">Helper text</small>
</label>

```html
<label class="a-label a-label__heading">
    A label heading
    <small class="a-label_helper a-label_helper__block">Helper text</small>
</label>
```


## Inputs

Inputs should always be paired with a `label` for accessibility reasons.

### Basic text inputs

The default section below demonstrates how a text input would normally
appear in code.

#### Default state

<label class="a-label a-label__heading" for="textinput-example-default">
    A text input
</label>
<input class="a-text-input"
       type="text"
       id="textinput-example-default"
       placeholder="Enter text…"
       value="Lorem ipsum">

<label class="a-label a-label__heading" for="textarea-example-default">
    A textarea input
</label>
<textarea class="a-text-input"
          id="textarea-example-default"
          placeholder="Enter text…">Lorem Ipsum</textarea>

```html
<label class="a-label a-label__heading" for="textinput-example-default">
    A text input
</label>
<input class="a-text-input"
       type="text"
       id="textinput-example-default"
       placeholder="Enter text…"
       value="Lorem ipsum">

<label class="a-label a-label__heading" for="textarea-example-default">
    A textarea input
</label>
<textarea class="a-text-input"
          id="textarea-example-default"
          placeholder="Enter text…">Lorem Ipsum</textarea>
```

The following sections demonstrate how a particular state of a text input
could be forced to be shown.
Generally this is only useful for documentation purposes.

#### Hover state

<label class="a-label a-label__heading" for="textinput-example-hover">
    A text input
</label>
<input class="a-text-input hover"
       type="text"
       id="textinput-example-hover"
       placeholder="Enter text…"
       value="Lorem ipsum">

<label class="a-label a-label__heading" for="textarea-example-hover">
    A textarea input
</label>
<textarea class="a-text-input hover"
          id="textarea-example-hover"
          placeholder="Enter text…">Lorem Ipsum</textarea>
```html
<label class="a-label a-label__heading" for="textinput-example-hover">
    A text input
</label>
<input class="a-text-input hover"
       type="text"
       id="textinput-example-hover"
       placeholder="Enter text…"
       value="Lorem ipsum">

<label class="a-label a-label__heading" for="textarea-example-hover">
    A textarea input
</label>
<textarea class="a-text-input hover"
          id="textarea-example-hover"
          placeholder="Enter text…">Lorem Ipsum</textarea>
```

#### Focus state

<label class="a-label a-label__heading" for="textinput-example-focus">
    A text input
</label>
<input class="a-text-input focus"
       type="text"
       id="textinput-example-focus"
       placeholder="Enter text…"
       value="Lorem ipsum">

<label class="a-label a-label__heading" for="textarea-example-focus">
    A textarea input
</label>
<textarea class="a-text-input focus"
          id="textarea-example-focus"
          placeholder="Enter text…">Lorem Ipsum</textarea>
```html
<label class="a-label a-label__heading" for="textinput-example-focus">
    A text input
</label>
<input class="a-text-input focus"
       type="text"
       id="textinput-example-focus"
       placeholder="Enter text…"
       value="Lorem ipsum">

<label class="a-label a-label__heading" for="textarea-example-focus">
    A textarea input
</label>
<textarea class="a-text-input focus"
          id="textarea-example-focus"
          placeholder="Enter text…">Lorem Ipsum</textarea>
```

#### Disabled state

<label class="a-label a-label__heading" for="textinput-example-disabled">
    A text input
</label>
<input class="a-text-input"
       type="text"
       id="textinput-example-focus"
       placeholder="Enter text…"
       value="Lorem ipsum"
       disabled>

<label class="a-label a-label__heading" for="textarea-example-disabled">
    A textarea input
</label>
<textarea class="a-text-input"
          id="textarea-example-focus"
          placeholder="Enter text…"
          disabled>Lorem Ipsum</textarea>
```html
<label class="a-label a-label__heading" for="textinput-example-disabled">
    A text input
</label>
<input class="a-text-input"
       type="text"
       id="textinput-example-focus"
       placeholder="Enter text…"
       value="Lorem ipsum"
       disabled>

<label class="a-label a-label__heading" for="textarea-example-disabled">
    A textarea input
</label>
<textarea class="a-text-input"
          id="textarea-example-focus"
          placeholder="Enter text…"
          disabled>Lorem Ipsum</textarea>
```

### Full-width modifier

<div class="m-form-field">
    <label class="a-label a-label__heading" for="full-textinput-example">
        A full-width text input
    </label>
    <input class="a-text-input a-text-input__full"
           type="text"
           id="full-textinput-example"
           value="Lorem ipsum">
</div>

```html
<div class="m-form-field">
    <label class="a-label a-label__heading" for="full-textinput-example">
        A full-width text input
    </label>
    <input class="a-text-input a-text-input__full"
           type="text"
           id="full-textinput-example"
           value="Lorem ipsum">
</div>
```

<div class="m-form-field">
    <label class="a-label a-label__heading" for="full-textarea-example">
        A full-width textarea input
    </label>
    <textarea class="a-text-input a-text-input__full"
              id="full-textarea-example">Lorem Ipsum</textarea>
</div>

```html
<div class="m-form-field">
    <label class="a-label a-label__heading" for="full-textarea-example">
        A full-width textarea input
    </label>
    <textarea class="a-text-input a-text-input__full"
              id="full-textarea-example">Lorem Ipsum</textarea>
</div>
```


### Basic checkboxes

The default section below demonstrates how a checkbox would normally
appear in code.

#### Default state

<div class="m-form-field m-form-field__checkbox">
    <input class="a-checkbox" type="checkbox" id="test_checkbox_basic_default">
    <label class="a-label" for="test_checkbox_basic_default">Label</label>
</div>

```html
<div class="m-form-field m-form-field__checkbox">
    <input class="a-checkbox" type="checkbox" id="test_checkbox">
    <label class="a-label" for="test_checkbox">Label</label>
</div>
```

The following sections demonstrate how a particular state of a checkbox
could be forced to be shown.
Generally this is only useful for documentation purposes.

#### Hover state

<div class="m-form-field m-form-field__checkbox">
    <input class="a-checkbox hover" type="checkbox" id="test_checkbox_basic_hover">
    <label class="a-label" for="test_checkbox_basic_hover">Label</label>
</div>

```html
<div class="m-form-field m-form-field__checkbox">
    <input class="a-checkbox hover" type="checkbox" id="test_checkbox_basic_hover">
    <label class="a-label" for="test_checkbox_basic_hover">Label</label>
</div>
```

#### Focus state

<div class="m-form-field m-form-field__checkbox">
    <input class="a-checkbox focus" type="checkbox" id="test_checkbox_basic_focus">
    <label class="a-label" for="test_checkbox_basic_focus">Label</label>
</div>

```html
<div class="m-form-field m-form-field__checkbox">
    <input class="a-checkbox focus" type="checkbox" id="test_checkbox_basic_focus">
    <label class="a-label" for="test_checkbox_basic_focus">Label</label>
</div>
```

#### Selected state

<div class="m-form-field m-form-field__checkbox">
    <input class="a-checkbox" type="checkbox" id="test_checkbox_basic_checked" checked>
    <label class="a-label" for="test_checkbox_basic_checked">Label</label>
</div>

```html
<div class="m-form-field m-form-field__checkbox">
    <input class="a-checkbox" type="checkbox" id="test_checkbox_basic_checked" checked>
    <label class="a-label" for="test_checkbox_basic_checked">Label</label>
</div>
```

#### Disabled state

<div class="m-form-field m-form-field__checkbox">
    <input class="a-checkbox" type="checkbox" id="test_checkbox_basic_disabled" disabled>
    <label class="a-label" for="test_checkbox_basic_disabled">Label</label>
</div>

```html
<div class="m-form-field m-form-field__checkbox">
    <input class="a-checkbox" type="checkbox" id="test_checkbox_basic_disabled" disabled>
    <label class="a-label" for="test_checkbox_basic_disabled">Label</label>
</div>
```


### Basic radio buttons

The default section below demonstrates how a radio button would normally
appear in code.

#### Default state

<div class="m-form-field m-form-field__radio">
    <input class="a-radio" type="radio" id="test_radio_basic_default">
    <label class="a-label" for="test_radio_basic_default">Label</label>
</div>

```html
<div class="m-form-field m-form-field__radio">
    <input class="a-radio" type="radio" id="test_radio_basic_default">
    <label class="a-label" for="test_radio_basic_default">Label</label>
</div>
```

The following sections demonstrate how a particular state of a radio button
could be forced to be shown.
Generally this is only useful for documentation purposes.

#### Hover state

<div class="m-form-field m-form-field__radio">
    <input class="a-radio hover" type="radio" id="test_radio_basic_hover">
    <label class="a-label" for="test_radio_basic_hover">Label</label>
</div>

```html
<div class="m-form-field m-form-field__radio">
    <input class="a-radio hover" type="radio" id="test_radio_basic_hover">
    <label class="a-label" for="test_radio_basic_hover">Label</label>
</div>
```

#### Focus state

<div class="m-form-field m-form-field__radio">
    <input class="a-radio focus" type="radio" id="test_radio_basic_focus">
    <label class="a-label" for="test_radio_basic_focus">Label</label>
</div>

```html
<div class="m-form-field m-form-field__radio">
    <input class="a-radio focus" type="radio" id="test_radio_basic_focus">
    <label class="a-label" for="test_radio_basic_focus">Label</label>
</div>
```

#### Selected state

<div class="m-form-field m-form-field__radio">
    <input class="a-radio" type="radio" id="test_radio_basic_checked" checked>
    <label class="a-label" for="test_radio_basic_checked">Label</label>
</div>

```html
<div class="m-form-field m-form-field__radio">
    <input class="a-radio" type="radio" id="test_radio_basic_checked" checked>
    <label class="a-label" for="test_radio_basic_checked">Label</label>
</div>
```

#### Disabled state

<div class="m-form-field m-form-field__radio">
    <input class="a-radio" type="radio" id="test_radio_basic_disabled" disabled>
    <label class="a-label" for="test_radio_basic_disabled">Label</label>
</div>

```html
<div class="m-form-field m-form-field__radio">
    <input class="a-radio" type="radio" id="test_radio_basic_disabled" disabled>
    <label class="a-label" for="test_radio_basic_disabled">Label</label>
</div>
```


### Large target area checkboxes

The default section below demonstrates how a checkbox would normally
appear in code.

#### Default state

<div class="m-form-field m-form-field__checkbox m-form-field__lg-target">
    <input class="a-checkbox" type="checkbox" id="test_checkbox_lg_default">
    <label class="a-label" for="test_checkbox_lg_default">Label</label>
</div>

```html
<div class="m-form-field m-form-field__checkbox m-form-field__lg-target">
    <input class="a-checkbox" type="checkbox" id="test_checkbox_lg_default">
    <label class="a-label" for="test_checkbox_lg_default">Label</label>
</div>
```

The following sections demonstrate how a particular state of a checkbox
could be forced to be shown.
Generally this is only useful for documentation purposes.

#### Hover state

<div class="m-form-field m-form-field__checkbox m-form-field__lg-target">
    <input class="a-checkbox hover" type="checkbox" id="test_checkbox_lg_hover">
    <label class="a-label" for="test_checkbox_lg_hover">Label</label>
</div>

```html
<div class="m-form-field m-form-field__checkbox m-form-field__lg-target">
    <input class="a-checkbox hover" type="checkbox" id="test_checkbox_lg_hover">
    <label class="a-label" for="test_checkbox_lg_hover">Label</label>
</div>
```

#### Focus state

<div class="m-form-field m-form-field__checkbox m-form-field__lg-target">
    <input class="a-checkbox focus" type="checkbox" id="test_checkbox_lg_focus">
    <label class="a-label" for="test_checkbox_lg_focus">Label</label>
</div>

```html
<div class="m-form-field m-form-field__checkbox m-form-field__lg-target">
    <input class="a-checkbox focus" type="checkbox" id="test_checkbox_lg_focus">
    <label class="a-label" for="test_checkbox_lg_focus">Label</label>
</div>
```

#### Selected state

<div class="m-form-field m-form-field__checkbox m-form-field__lg-target">
    <input class="a-checkbox" type="checkbox" id="test_checkbox_lg_checked" checked>
    <label class="a-label" for="test_checkbox_lg_checked">Label</label>
</div>

```html
<div class="m-form-field m-form-field__checkbox m-form-field__lg-target">
    <input class="a-checkbox" type="checkbox" id="test_checkbox_lg_checked" checked>
    <label class="a-label" for="test_checkbox_lg_checked">Label</label>
</div>
```

#### Disabled state

<div class="m-form-field m-form-field__checkbox m-form-field__lg-target">
    <input class="a-checkbox" type="checkbox" id="test_checkbox_lg_disabled" disabled>
    <label class="a-label" for="test_checkbox_lg_disabled">Label</label>
</div>

```html
<div class="m-form-field m-form-field__checkbox m-form-field__lg-target">
    <input class="a-checkbox" type="checkbox" id="test_checkbox_lg_disabled" disabled>
    <label class="a-label" for="test_checkbox_lg_disabled">Label</label>
</div>
```


### Large target area radio buttons

The default section below demonstrates how a radio button would normally
appear in code.

#### Default state

<div class="m-form-field m-form-field__radio m-form-field__lg-target">
    <input class="a-radio" type="radio" id="test_radio_lg_default">
    <label class="a-label" for="test_radio_lg_default">Label</label>
</div>

```html
<div class="m-form-field m-form-field__radio m-form-field__lg-target">
    <input class="a-radio" type="radio" id="test_radio_lg_default">
    <label class="a-label" for="test_radio_lg_default">Label</label>
</div>
```

The following sections demonstrate how a particular state of a radio button
could be forced to be shown.
Generally this is only useful for documentation purposes.

#### Hover state

<div class="m-form-field m-form-field__radio m-form-field__lg-target">
    <input class="a-radio hover" type="radio" id="test_radio_lg_hover">
    <label class="a-label" for="test_radio_lg_hover">Label</label>
</div>

```html
<div class="m-form-field m-form-field__radio m-form-field__lg-target">
    <input class="a-radio hover" type="radio" id="test_radio_lg_hover">
    <label class="a-label" for="test_radio_lg_hover">Label</label>
</div>
```

#### Focus state

<div class="m-form-field m-form-field__radio m-form-field__lg-target">
    <input class="a-radio focus" type="radio" id="test_radio_lg_focus">
    <label class="a-label" for="test_radio_lg_focus">Label</label>
</div>

```html
<div class="m-form-field m-form-field__radio m-form-field__lg-target">
    <input class="a-radio focus" type="radio" id="test_radio_lg_focus">
    <label class="a-label" for="test_radio_lg_focus">Label</label>
</div>
```

#### Selected state

<div class="m-form-field m-form-field__radio m-form-field__lg-target">
    <input class="a-radio" type="radio" id="test_radio_lg_checked" checked>
    <label class="a-label" for="test_radio_lg_checked">Label</label>
</div>

```html
<div class="m-form-field m-form-field__radio m-form-field__lg-target">
    <input class="a-radio" type="radio" id="test_radio_lg_checked" checked>
    <label class="a-label" for="test_radio_lg_checked">Label</label>
</div>
```

#### Disabled state

<div class="m-form-field m-form-field__radio m-form-field__lg-target">
    <input class="a-radio" type="radio" id="test_radio_lg_disabled" disabled>
    <label class="a-label" for="test_radio_lg_disabled">Label</label>
</div>

```html
<div class="m-form-field m-form-field__radio m-form-field__lg-target">
    <input class="a-radio" type="radio" id="test_radio_lg_disabled" disabled>
    <label class="a-label" for="test_radio_lg_disabled">Label</label>
</div>
```


### Inputs helper text

Checkboxes and radio button inputs can have labels that span multiple lines and
have helper text that appears below the main label text.

#### Basic checkbox/radio button helper text

<div class="m-form-field m-form-field__checkbox">
    <input class="a-checkbox" type="checkbox" id="test_checkbox_helper">
    <label class="a-label" for="test_checkbox_helper">
        This is a very long label that wraps to a second line.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <small class="a-label_helper">
            (This is helper text)
        </small>
    </label>
</div>

```html
<div class="m-form-field m-form-field__checkbox">
    <input class="a-checkbox" type="checkbox" id="test_checkbox_helper">
    <label class="a-label" for="test_checkbox_helper">
        This is a very long label that wraps to a second line.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <small class="a-label_helper">
            (This is helper text)
        </small>
    </label>
</div>
```

#### Large target checkbox/radio button helper text

<div class="m-form-field m-form-field__checkbox m-form-field__lg-target">
    <input class="a-checkbox" type="checkbox" id="test_checkbox_lg_helper">
    <label class="a-label" for="test_checkbox_lg_helper">
        This is a very long label that wraps to a second line.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <small class="a-label_helper">
            (This is helper text)
        </small>
    </label>
</div>

```html
<div class="m-form-field m-form-field__checkbox m-form-field__lg-target">
    <input class="a-checkbox" type="checkbox" id="test_checkbox_lg_helper">
    <label class="a-label" for="test_checkbox_lg_helper">
        This is a very long label that wraps to a second line.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <small class="a-label_helper">
            (This is helper text)
        </small>
    </label>
</div>
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
        {% include icons/error-round.svg %}
        <span class="a-error-message_text">
            This is a required question, please answer.
        </span>
    </div>
</div>

```html
<div class="m-form-field m-form-field__error">
    <label class="a-label__heading" for="form-input-error">Label</label>
    <input class="a-text-input a-text-input__error"
           type="text"
           value="Invalid input"
           id="form-input-error"
           aria-describedby="form-input-error_message">
    <div class="a-error-message" id="form-input-error_message" role="alert">
        {% raw %}{% include icons/error-round.svg %}{% endraw %}
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

```html
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
        value="This is some really long text to make sure that the button doesn't overlap the content in such a way that this input becomes unusable."
        title="Test input"
        class="a-text-input">
    <button class="a-btn a-btn__link">
        {% include icons/error.svg %}
        <span class="u-visually-hidden">Clear</span>
    </button>
</div>

```html
<div class="m-btn-inside-input">
    <input type="text"
        value="This is some really long text to make sure that the button doesn't overlap the content in such a way that this input becomes unusable."
        title="Test input"
        class="a-text-input">
    <button class="a-btn a-btn__link">
        {% raw %}{% include icons/error.svg %}{% endraw %}
        <span class="u-visually-hidden">Clear</span>
    </button>
</div>
```


### Button inside an input with another button

This example combines both of the previous patterns,
creating a typical site search form.

<div class="o-form__input-w-btn">
    <div class="o-form__input-w-btn_input-container">
        <div class="m-btn-inside-input">
            <input type="text"
                value="This is some really long text to make sure that the button doesn't overlap the content in such a way that this input becomes unusable."
                title="Test input"
                class="a-text-input">
            <button class="a-btn a-btn__link">
                {% include icons/error.svg %}
                <span class="u-visually-hidden">Clear</span>
            </button>
        </div>
    </div>
    <div class="o-form__input-w-btn_btn-container">
        <button class="a-btn">Search</button>
    </div>
</div>

```html
<div class="o-form__input-w-btn">
    <div class="o-form__input-w-btn_input-container">
        <div class="m-btn-inside-input">
            <input type="text"
                value="This is some really long text to make sure that the button doesn't overlap the content in such a way that this input becomes unusable."
                title="Test input"
                class="a-text-input">
            <button class="a-btn a-btn__link">
                {% raw %}{% include icons/error.svg %}{% endraw %}
                <span class="u-visually-hidden">Clear</span>
            </button>
        </div>
    </div>
    <div class="o-form__input-w-btn_btn-container">
        <button class="a-btn">Search</button>
    </div>
</div>
```


## Select dropdown

The default section below demonstrates how a dropdown would normally
appear in code.

### Default state

<div class="m-form-field m-form-field__select">
    <label class="a-label a-label__heading" for="test_select_default">
        Label
    </label>
    <div class="a-select">
        <select id="test_select_default">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
        </select>
    </div>
</div>

```html
<div class="m-form-field m-form-field__select">
    <label class="a-label a-label__heading" for="test_select_default">
        Label
    </label>
    <div class="a-select">
        <select id="test_select_default">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
        </select>
    </div>
</div>
```

The following sections demonstrate how a particular state of a dropdown
could be forced to be shown.
Generally this is only useful for documentation purposes.

### Hover state

<div class="m-form-field m-form-field__select">
    <label class="a-label a-label__heading" for="test_select__hover">
        Label
    </label>
    <div class="a-select">
        <select id="test_select__hover" class="hover">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
        </select>
    </div>
</div>

```html
<div class="m-form-field m-form-field__select">
    <label class="a-label a-label__heading" for="test_select__hover">
        Label
    </label>
    <div class="a-select">
        <select id="test_select__hover" class="hover">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
        </select>
    </div>
</div>
```

### Focus state

<div class="m-form-field m-form-field__select">
    <label class="a-label a-label__heading" for="test_select__focus">
        Label
    </label>
    <div class="a-select">
        <select id="test_select__focus" class="focus">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
        </select>
    </div>
</div>

```html
<div class="m-form-field m-form-field__select">
    <label class="a-label a-label__heading" for="test_select__focus">
        Label
    </label>
    <div class="a-select">
        <select id="test_select__focus" class="focus">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
        </select>
    </div>
</div>
```

### Disabled state

<div class="m-form-field m-form-field__select">
    <label class="a-label a-label__heading" for="test_select__disabled">Label</label>
    <div class="a-select">
        <select id="test_select__disabled" disabled>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
        </select>
    </div>
</div>

```html
<div class="m-form-field m-form-field__select">
    <label class="a-label a-label__heading" for="test_select__disabled">Label</label>
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
    <label class="a-label a-label__heading" for="test_select__multiple">
        Label
    </label>
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

```html
<div class="m-form-field m-form-field__select">
    <label class="a-label a-label__heading" for="test_select__multiple">
        Label
    </label>
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

## Fieldsets

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

```html
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
