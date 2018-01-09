# cf-buttons

The cf-buttons component provides extensions to the basic button styles for
Capital Framework.

[`cf-core`](../cf-core) and [`cf-icons`](../cf-icons) components are all
dependencies of this component.

> NOTE: If you use `cf-buttons.less` directly,
  be sure to run the file through
  [Autoprefixer](https://github.com/postcss/autoprefixer),
  or your compiled Capital Framework CSS will
  not work perfectly in older browsers.

## Table of contents

- [Variables](#variables)
    - [Color variables](#color-variables)
    - [Sizing variables](#sizing-variables)
- [Atoms](#atoms)
    - [Default button](#default-button)
    - [Secondary button](#secondary-button)
    - [Destructive action button](#destructive-action-button)
    - [Disabled button](#disabled-button)
    - [Super button](#super-button)
    - [Full-width buttons on x-small screens](#full-width-buttons-on-x-small-screens)
    - [Button links](#button-links)
    - [Icon buttons](#icon-buttons)
- [Molecules](#molecules)
    - [Button group](#button-group)

## Variables

Theme variables for setting the color and sizes throughout the project.
Overwrite them in your own project by duplicating the variable `@key: value`.

### Color variables

Color variables referenced in comments are from [cf-core cf-brand-colors.less](https://github.com/cfpb/capital-framework/blob/master/src/cf-core/src/cf-brand-colors.less).

```less
// .btn
@btn-text:                      @white;
@btn-bg:                        @pacific;
@btn-bg-hover:                  @pacific-80;
@btn-bg-active:                 @navy-80;

// .btn__secondary
@btn__secondary-text:           @white;
@btn__secondary-bg:             @gray;
@btn__secondary-bg-hover:       @gray-80;
@btn__secondary-bg-active:      @dark-gray;

// .btn__warning
@btn__warning-text:             @white;
@btn__warning-bg:               @red;
@btn__warning-bg-hover:         @red-80;
@btn__warning-bg-active:        @dark-red;

// .btn__disabled
@btn__disabled-text:            @gray;
@btn__disabled-bg:              @gray-20;
@btn__disabled-outline:         @gray-20;
```

### Sizing variables

```less
// .btn
@btn-font-size:                 @base-font-size-px;
@btn-border-radius-size:        4px;
@btn-v-padding:                 8px;
@btn-h-padding:                 14px;
@btn-v-padding-modifier-ie:     0.8;

// .btn__super
@btn__super-font-size:          18px;
```

## Atoms

### Default Button

The default button is an atom in our atomic design standards.
You can apply the `a-btn` class to a link, button and submit input field
to receive the atomic button styles.

For accessibility reasons, use the semantic `<button>` instead of a link when possible.

#### Default state

<p>
    <a href="#" class="a-btn" title="Test button">Anchor Tag</a>
    <button class="a-btn" title="Test button">Button Tag</button>
    <input type="submit" value="Input Tag" class="a-btn">
</p>

```
<a href="#" class="a-btn" title="Test button">Anchor Tag</a>
<button class="a-btn" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn">
```

#### Hovered state

<p>
    <a href="#" class="a-btn hover" title="Test button">Anchor Tag</a>
    <button class="a-btn hover" title="Test button">Button Tag</button>
    <input type="submit" value="Input Tag" class="a-btn hover">
</p>

```
<a href="#" class="a-btn hover" title="Test button">Anchor Tag</a>
<button class="a-btn hover" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn hover">
```

#### Focused state

<p>
    <a href="#" class="a-btn focus" title="Test button">Anchor Tag</a>
    <button class="a-btn focus" title="Test button">Button Tag</button>
    <input type="submit" value="Input Tag" class="a-btn focus">
</p>

```
<a href="#" class="a-btn focus" title="Test button">Anchor Tag</a>
<button class="a-btn focus" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn focus">
```

#### Active state

<p>
    <a href="#" class="a-btn active" title="Test button">Anchor Tag</a>
    <button class="a-btn active" title="Test button">Button Tag</button>
    <input type="submit" value="Input Tag" class="a-btn active">
</p>

```
<a href="#" class="a-btn active" title="Test button">Anchor Tag</a>
<button class="a-btn active" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn active">
```

### Secondary button

#### Default state

<p>
    <a href="#" class="a-btn a-btn__secondary">Anchor Tag</a>
    <button class="a-btn a-btn__secondary" title="Test button">Button Tag</button>
    <input type="submit" value="Input Tag" class="a-btn a-btn__secondary">
</p>

```
<a href="#" class="a-btn a-btn__secondary">Anchor Tag</a>
<button class="a-btn a-btn__secondary" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__secondary">
```

#### Hovered state

<p>
    <a href="#" class="a-btn a-btn__secondary hover">Anchor Tag</a>
    <button class="a-btn a-btn__secondary hover" title="Test button">
        Button Tag
    </button>
    <input type="submit" value="Input Tag" class="a-btn a-btn__secondary hover">
</p>

```
<a href="#" class="a-btn a-btn__secondary hover">Anchor Tag</a>
<button class="a-btn a-btn__secondary hover" title="Test button">
    Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__secondary hover">
```

#### Focused state

<p>
    <a href="#" class="a-btn a-btn__secondary focus">Anchor Tag</a>
    <button class="a-btn a-btn__secondary focus" title="Test button">
        Button Tag
    </button>
    <input type="submit" value="Input Tag" class="a-btn a-btn__secondary focus">
</p>

```
<a href="#" class="a-btn a-btn__secondary focus">Anchor Tag</a>
<button class="a-btn a-btn__secondary focus" title="Test button">
    Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__secondary focus">
```

#### Active state

<p>
    <a href="#" class="a-btn a-btn__secondary active">Anchor Tag</a>
    <button class="a-btn a-btn__secondary active" title="Test button">
        Button Tag
    </button>
    <input type="submit" value="Input Tag" class="a-btn a-btn__secondary active">
</p>

```
<a href="#" class="a-btn a-btn__secondary active">Anchor Tag</a>
<button class="a-btn a-btn__secondary active" title="Test button">
    Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__secondary active">
```

### Destructive action button

#### Default state

<p>
    <a href="#" class="a-btn a-btn__warning">Anchor Tag</a>
    <button class="a-btn a-btn__warning" title="Test button">
        Button Tag
    </button>
    <input type="submit" value="Input Tag" class="a-btn a-btn__warning">
</p>

```
<a href="#" class="a-btn a-btn__warning">Anchor Tag</a>
<button class="a-btn a-btn__warning" title="Test button">
    Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__warning">
```

#### Hovered state

<p>
    <a href="#" class="a-btn a-btn__warning hover">Anchor Tag</a>
    <button class="a-btn a-btn__warning hover" title="Test button">
        Button Tag
    </button>
    <input type="submit" value="Input Tag" class="a-btn a-btn__warning hover">
</p>

```
<a href="#" class="a-btn a-btn__warning hover">Anchor Tag</a>
<button class="a-btn a-btn__warning hover" title="Test button">
    Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__warning hover">
```

#### Focused state

<p>
    <a href="#" class="a-btn a-btn__warning focus">Anchor Tag</a>
    <button class="a-btn a-btn__warning focus" title="Test button">
        Button Tag
    </button>
    <input type="submit" value="Input Tag" class="a-btn a-btn__warning focus">
</p>

```
<a href="#" class="a-btn a-btn__warning focus">Anchor Tag</a>
<button class="a-btn a-btn__warning focus" title="Test button">
    Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__warning focus">
```

#### Active state

<p>
    <a href="#" class="a-btn a-btn__warning active">Anchor Tag</a>
    <button class="a-btn a-btn__warning active" title="Test button">
        Button Tag
    </button>
    <input type="submit" value="Input Tag" class="a-btn a-btn__warning active">
</p>

```
<a href="#" class="a-btn a-btn__warning active">Anchor Tag</a>
<button class="a-btn a-btn__warning active" title="Test button">
    Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__warning active">
```

### Disabled button

#### Default/hovered/active state

<p>
    <a href="#" class="a-btn a-btn__disabled">Anchor Tag</a>
    <button class="a-btn a-btn__disabled" title="Test button">Button Tag</button>
    <input type="submit" value="Input Tag" class="a-btn a-btn__disabled">
    <button class="a-btn" disabled title="Test button">
        Button Tag w/ disabled attr
    </button>
</p>

```
<a href="#" class="a-btn a-btn__disabled">Anchor Tag</a>
<button class="a-btn a-btn__disabled" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__disabled">
<button class="a-btn" disabled title="Test button">
    Button Tag w/ disabled attr
</button>
```

#### Focused state

<p>
    <a href="#" class="a-btn a-btn__disabled focus">Anchor Tag</a>
    <button class="a-btn a-btn__disabled focus" title="Test button">Button Tag</button>
    <input type="submit" value="Input Tag" class="a-btn a-btn__disabled focus">
    <button class="a-btn focus" disabled title="Test button">
        Button Tag w/ disabled attr
    </button>
</p>

```
<a href="#" class="a-btn a-btn__disabled focus">Anchor Tag</a>
<button class="a-btn a-btn__disabled focus" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__disabled focus">
<button class="a-btn focus" disabled title="Test button">
    Button Tag w/ disabled attr
</button>
```

### Super button

#### Default state

<p>
    <a href="#" class="a-btn a-btn__super">Anchor Tag</a>
    <button class="a-btn a-btn__super" title="Test button">Button Tag</button>
    <input type="submit" value="Input Tag" class="a-btn a-btn__super">
</p>

```
<a href="#" class="a-btn a-btn__super">Anchor Tag</a>
<button class="a-btn a-btn__super" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__super">
```

#### Hovered state

<p>
    <a href="#" class="a-btn a-btn__super hover">Anchor Tag</a>
    <button class="a-btn a-btn__super hover" title="Test button">
        Button Tag
    </button>
    <input type="submit" value="Input Tag" class="a-btn a-btn__super hover">
</p>

```
<a href="#" class="a-btn a-btn__super hover">Anchor Tag</a>
<button class="a-btn a-btn__super hover" title="Test button">
    Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__super hover">
```

#### Focused state

<p>
    <a href="#" class="a-btn a-btn__super focus">Anchor Tag</a>
    <button class="a-btn a-btn__super focus" title="Test button">
        Button Tag
    </button>
    <input type="submit" value="Input Tag" class="a-btn a-btn__super focus">
</p>

```
<a href="#" class="a-btn a-btn__super focus">Anchor Tag</a>
<button class="a-btn a-btn__super focus" title="Test button">
    Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__super focus">
```

#### Active state

<p>
    <a href="#" class="a-btn a-btn__super active">Anchor Tag</a>
    <button class="a-btn a-btn__super active" title="Test button">
        Button Tag
    </button>
    <input type="submit" value="Input Tag" class="a-btn a-btn__super active">
</p>

```
<a href="#" class="a-btn a-btn__super active">Anchor Tag</a>
<button class="a-btn a-btn__super active" title="Test button">
    Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__super active">
```

### Full-width buttons on x-small screens

_Reduce screen size to see these in action_

<p>
    <a href="#" class="a-btn a-btn__full-on-xs">Anchor Tag</a>
</p>

<p>
    <button class="a-btn a-btn__full-on-xs" title="Test button">
        Button Tag
    </button>
</p>

<p>
    <input type="submit" value="Input Tag" class="a-btn a-btn__full-on-xs">
</p>

```
<a href="#" class="a-btn a-btn__full-on-xs">Anchor Tag</a>
<button class="a-btn a-btn__full-on-xs" title="Test button">
    Button Tag
</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__full-on-xs">
```

### Button links

#### Default state

<p>
    <button href="#" class="a-btn a-btn__link">Button Link</button>
</p>

<p>
    <button href="#" class="a-btn a-btn__link a-btn__secondary">
        Secondary Button Link
    </button>
</p>

<p>
    <button href="#" class="a-btn a-btn__link a-btn__warning">
        Warning Button Link
    </button>
</p>

```
<button href="#" class="a-btn a-btn__link">Button Link</button>
<button href="#" class="a-btn a-btn__link a-btn__secondary">
    Secondary Button Link
</button>
<button href="#" class="a-btn a-btn__link a-btn__warning">Warning Button Link</button>
```

#### Hovered state

<p>
    <button href="#" class="a-btn a-btn__link hover">Button Link</button>
</p>

<p>
    <button href="#" class="a-btn a-btn__link a-btn__secondary hover">
        Secondary Button Link
    </button>
</p>

<p>
    <button href="#" class="a-btn a-btn__link a-btn__warning hover">
        Warning Button Link
    </button>
</p>

```
<button href="#" class="a-btn a-btn__link hover">Button Link</button>
<button href="#" class="a-btn a-btn__link a-btn__secondary hover">
    Secondary Button Link
</button>
<button href="#" class="a-btn a-btn__link a-btn__warning hover">Warning Button Link</button>
```

#### Focus state

<p>
    <button href="#" class="a-btn a-btn__link focus">Button Link</button>
</p>

<p>
    <button href="#" class="a-btn a-btn__link a-btn__secondary focus">
        Secondary Button Link
    </button>
</p>

<p>
    <button href="#" class="a-btn a-btn__link a-btn__warning focus">
        Warning Button Link
    </button>
</p>

```
<button href="#" class="a-btn a-btn__link focus">Button Link</button>
<button href="#" class="a-btn a-btn__link a-btn__secondary focus">
    Secondary Button Link
</button>
<button href="#" class="a-btn a-btn__link a-btn__warning focus">Warning Button Link</button>
```

#### Active state

<p>
    <button href="#" class="a-btn a-btn__link active">Button Link</button>
</p>

<p>
    <button href="#" class="a-btn a-btn__link a-btn__secondary active">
        Secondary Button Link
    </button>
</p>

<p>
    <button href="#" class="a-btn a-btn__link a-btn__warning active">
        Warning Button Link
    </button>
</p>

```
<button href="#" class="a-btn a-btn__link active">Button Link</button>
<button href="#" class="a-btn a-btn__link a-btn__secondary active">
    Secondary Button Link
</button>
<button href="#" class="a-btn a-btn__link a-btn__warning active">Warning Button Link</button>
```

### Icon buttons

#### Button with icon on the left

<p>
    <button class="a-btn">
        <span class="a-btn_icon
                     a-btn_icon__on-left
                     cf-icon
                     cf-icon__before
                     cf-icon-delete"></span>
        Close
    </button>
</p>

<p>
    <button class="a-btn a-btn__secondary">
        <span class="a-btn_icon
                     a-btn_icon__on-left
                     cf-icon
                     cf-icon__before
                     cf-icon-delete"></span>
        Close
    </button> - Secondary button
</p>

<p>
    <button class="a-btn a-btn__warning">
        <span class="a-btn_icon
                     a-btn_icon__on-left
                     cf-icon
                     cf-icon__before
                     cf-icon-delete"></span>
        Close
    </button> - Warning button
</p>

<p>
    <button class="a-btn a-btn__disabled">
        <span class="a-btn_icon
                     a-btn_icon__on-left
                     cf-icon
                     cf-icon__before
                     cf-icon-delete"></span>
        Close
    </button> - Disabled button
</p>

```
<button class="a-btn">
    <span class="a-btn_icon
                 a-btn_icon__on-left
                 cf-icon
                 cf-icon__before
                 cf-icon-delete"></span>
    Close
</button>

<button class="a-btn a-btn__secondary">
    <span class="a-btn_icon
                 a-btn_icon__on-left
                 cf-icon
                 cf-icon__before
                 cf-icon-delete"></span>
    Close
</button> - Secondary button

<button class="a-btn a-btn__warning">
    <span class="a-btn_icon
                 a-btn_icon__on-left
                 cf-icon
                 cf-icon__before
                 cf-icon-delete"></span>
    Close
</button> - Warning button

<button class="a-btn a-btn__disabled">
    <span class="a-btn_icon
                 a-btn_icon__on-left
                 cf-icon
                 cf-icon__before
                 cf-icon-delete"></span>
    Close
</button> - Disabled button
```

#### Button with icon on the right

<p>
    <button class="a-btn">
        Close
        <span class="a-btn_icon
                     a-btn_icon__on-right
                     cf-icon
                     cf-icon__after
                     cf-icon-delete"></span>
    </button>
</p>

<p>
    <button class="a-btn a-btn__secondary">
        Close
        <span class="a-btn_icon
                     a-btn_icon__on-right
                     cf-icon
                     cf-icon__after
                     cf-icon-delete"></span>
    </button> - Secondary button
</p>

<p>
    <button class="a-btn a-btn__warning">
        Close
        <span class="a-btn_icon
                     a-btn_icon__on-right
                     cf-icon
                     cf-icon__after
                     cf-icon-delete"></span>
    </button> - Warning button
</p>

<p>
    <button class="a-btn a-btn__disabled">
        Close
        <span class="a-btn_icon
                     a-btn_icon__on-right
                     cf-icon
                     cf-icon__after
                     cf-icon-delete"></span>
    </button> - Disabled button
</p>

```
<button class="a-btn">
    Close
    <span class="a-btn_icon
                 a-btn_icon__on-right
                 cf-icon
                 cf-icon__after
                 cf-icon-delete"></span>
</button>

<button class="a-btn a-btn__secondary">
    Close
    <span class="a-btn_icon
                 a-btn_icon__on-right
                 cf-icon
                 cf-icon__after
                 cf-icon-delete"></span>
</button> - Secondary button

<button class="a-btn a-btn__warning">
    Close
    <span class="a-btn_icon
                 a-btn_icon__on-right
                 cf-icon
                 cf-icon__after
                 cf-icon-delete"></span>
</button> - Warning button

<button class="a-btn a-btn__disabled">
    Close
    <span class="a-btn_icon
                 a-btn_icon__on-right
                 cf-icon
                 cf-icon__after
                 cf-icon-delete"></span>
</button> - Disabled button
```

#### Button with an animated icon

<p>
    <button class="a-btn a-btn__disabled">
        Submit your complaint
        <span class="a-btn_icon
                     a-btn_icon__on-right
                     cf-icon
                     cf-icon__after
                     cf-icon-update
                     cf-icon__spin"></span>
    </button>
</p>

```
<button class="a-btn">
    Submit your complaint
    <span class="a-btn_icon
                 a-btn_icon__on-right
                 cf-icon
                 cf-icon__after
                 cf-icon-update
                 cf-icon__spin"></span>
</button>
```

## Molecules

### Button group

#### With default buttons

<p>
    <div class="m-btn-group">
        <button class="a-btn">Yes</button>
        <button class="a-btn">No</button>
        <button class="a-btn">Maybe So</button>
    </div>
</p>

```
<div class="m-btn-group">
    <button class="a-btn">Yes</button>
    <button class="a-btn">No</button>
    <button class="a-btn">Maybe So</button>
</div>
```

#### With super buttons

<p>
    <div class="m-btn-group">
        <button class="a-btn a-btn__super">Yes</button>
        <button class="a-btn a-btn__super">No</button>
        <button class="a-btn a-btn__super">Maybe So</button>
    </div>
</p>

```
<div class="m-btn-group">
    <button class="a-btn a-btn__super">Yes</button>
    <button class="a-btn a-btn__super">No</button>
    <button class="a-btn a-btn__super">Maybe So</button>
</div>
```
