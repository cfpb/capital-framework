
- [Variables](#variables)
    - [Color variables](#color-variables)
    - [Sizing variables](#sizing-variables)
- [Atoms](#atoms)
    - [Default button](#default-button)
    - [Secondary button](#secondary-button)
    - [Destructive action button](#destructive-action-button)
    - [Disabled button](#disabled-button)
    - [Super button](#super-button)
    - [Button links](#button-links)
    - [Icon buttons](#icon-buttons)
- [Molecules](#molecules)
    - [Button group](#button-group)

> NOTE: If you use `cf-buttons.less` directly,
  be sure to run the file through
  [Autoprefixer](https://github.com/postcss/autoprefixer),
  or your compiled Capital Framework CSS will
  not work perfectly in older browsers.


## Variables

Theme variables for setting the color and sizes throughout the project. Overwrite them in your own project by duplicating the variable `@key: value`.

### Color variables

`$color-` variables are from 18F's [US Web Design Standards](https://github.com/18F/web-design-standards/blob/18f-pages/assets/_scss/core/_variables.scss)

```
@btn-text
@btn-bg
@btn-bg-hover
@btn-bg-active
@btn__secondary-text
@btn__secondary-bg
@btn__secondary-bg-hover
@btn__secondary-bg-active
@btn__warning-text
@btn__warning-bg
@btn__warning-bg-hover
@btn__warning-bg-active
@btn__disabled-text
@btn__disabled-bg
@btn__disabled-outline
```

### Sizing variables

```
@btn-font-size
@btn-v-padding
@btn-v-padding-modifier-ie
@super-btn-font-size
```


## Atoms

### Default Button

The default button is an atom in our atomic design standards.
You can apply the a-btn class to a link, button and submit input field
to receive the atomic button styles.

For accessibility reasons, use the semantic `<button>` instead of a link when possible.

#### Default state

<a href="#" class="a-btn" title="Test button">Anchor Tag</a>
<button class="a-btn" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn">

```
<a href="#" class="a-btn" title="Test button">Anchor Tag</a>
<button class="a-btn" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn">
```

#### Hovered state

<a href="#" class="a-btn hover" title="Test button">Anchor Tag</a>
<button class="a-btn hover" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn hover">

```
<a href="#" class="a-btn hover" title="Test button">Anchor Tag</a>
<button class="a-btn hover" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn hover">
```

#### Focused state

<a href="#" class="a-btn focus" title="Test button">Anchor Tag</a>
<button class="a-btn focus" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn focus">

```
<a href="#" class="a-btn focus" title="Test button">Anchor Tag</a>
<button class="a-btn focus" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn focus">
```

#### Active state

<a href="#" class="a-btn active" title="Test button">Anchor Tag</a>
<button class="a-btn active" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn active">

```
<a href="#" class="a-btn active" title="Test button">Anchor Tag</a>
<button class="a-btn active" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn active">
```

### Secondary button

#### Default state

<a href="#" class="a-btn a-btn__secondary">Anchor Tag</a>
<button class="a-btn a-btn__secondary" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__secondary">

```
<a href="#" class="a-btn a-btn__secondary">Anchor Tag</a>
<button class="a-btn a-btn__secondary" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__secondary">
```

#### Hovered state

<a href="#" class="a-btn a-btn__secondary hover">Anchor Tag</a>
<button class="a-btn a-btn__secondary hover" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__secondary hover">

```
<a href="#" class="a-btn a-btn__secondary hover">Anchor Tag</a>
<button class="a-btn a-btn__secondary hover" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__secondary hover">
```

#### Focused state

<a href="#" class="a-btn a-btn__secondary focus">Anchor Tag</a>
<button class="a-btn a-btn__secondary focus" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__secondary focus">

```
<a href="#" class="a-btn a-btn__secondary focus">Anchor Tag</a>
<button class="a-btn a-btn__secondary focus" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__secondary focus">
```

#### Active state

<a href="#" class="a-btn a-btn__secondary active">Anchor Tag</a>
<button class="a-btn a-btn__secondary active" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__secondary active">

```
<a href="#" class="a-btn a-btn__secondary active">Anchor Tag</a>
<button class="a-btn a-btn__secondary active" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__secondary active">
```

### Destructive action button

#### Default state

<a href="#" class="a-btn a-btn__warning">Anchor Tag</a>
<button class="a-btn a-btn__warning" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__warning">

```
<a href="#" class="a-btn a-btn__warning">Anchor Tag</a>
<button class="a-btn a-btn__warning" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__warning">
```

#### Hovered state

<a href="#" class="a-btn a-btn__warning hover">Anchor Tag</a>
<button class="a-btn a-btn__warning hover" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__warning hover">

```
<a href="#" class="a-btn a-btn__warning hover">Anchor Tag</a>
<button class="a-btn a-btn__warning hover" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__warning hover">
```

#### Focused state

<a href="#" class="a-btn a-btn__warning focus">Anchor Tag</a>
<button class="a-btn a-btn__warning focus" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__warning focus">

```
<a href="#" class="a-btn a-btn__warning focus">Anchor Tag</a>
<button class="a-btn a-btn__warning focus" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__warning focus">
```

#### Active state

<a href="#" class="a-btn a-btn__warning active">Anchor Tag</a>
<button class="a-btn a-btn__warning active" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__warning active">

```
<a href="#" class="a-btn a-btn__warning active">Anchor Tag</a>
<button class="a-btn a-btn__warning active" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__warning active">
```

### Disabled button

#### Default/hovered/active state

<a href="#" class="a-btn a-btn__disabled">Anchor Tag</a>
<button class="a-btn a-btn__disabled" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__disabled">
<button class="a-btn" disabled title="Test button">Button Tag w/ disabled attr</button>

```
<a href="#" class="a-btn a-btn__disabled">Anchor Tag</a>
<button class="a-btn a-btn__disabled" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__disabled">
<button class="a-btn" disabled title="Test button">Button Tag w/ disabled attr</button>
```

#### Focused state

<a href="#" class="a-btn a-btn__disabled focus">Anchor Tag</a>
<button class="a-btn a-btn__disabled focus" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__disabled focus">
<button class="a-btn focus" disabled title="Test button">Button Tag w/ disabled attr</button>

```
<a href="#" class="a-btn a-btn__disabled focus">Anchor Tag</a>
<button class="a-btn a-btn__disabled focus" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__disabled focus">
<button class="a-btn focus" disabled title="Test button">Button Tag w/ disabled attr</button>
```

### Super button

#### Default state

<a href="#" class="a-btn a-btn__super">Anchor Tag</a>
<button class="a-btn a-btn__super" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__super">

```
<a href="#" class="a-btn a-btn__super">Anchor Tag</a>
<button class="a-btn a-btn__super" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__super">
```

#### Hovered state

<a href="#" class="a-btn a-btn__super hover">Anchor Tag</a>
<button class="a-btn a-btn__super hover" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__super hover">

```
<a href="#" class="a-btn a-btn__super hover">Anchor Tag</a>
<button class="a-btn a-btn__super hover" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__super hover">
```

#### Focused state

<a href="#" class="a-btn a-btn__super focus">Anchor Tag</a>
<button class="a-btn a-btn__super focus" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__super focus">

```
<a href="#" class="a-btn a-btn__super focus">Anchor Tag</a>
<button class="a-btn a-btn__super focus" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__super focus">
```

#### Active state

<a href="#" class="a-btn a-btn__super active">Anchor Tag</a>
<button class="a-btn a-btn__super active" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__super active">

```
<a href="#" class="a-btn a-btn__super active">Anchor Tag</a>
<button class="a-btn a-btn__super active" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="a-btn a-btn__super active">
```

### Button links

#### Default state

<a href="#" class="a-btn a-btn__link">Button Link</a>
<a href="#" class="a-btn a-btn__link a-btn__secondary">Secondary Button Link</a>
<a href="#" class="a-btn a-btn__link a-btn__warning">Warning Button Link</a>

```
<a href="#" class="a-btn a-btn__link">Button Link</a>
<a href="#" class="a-btn a-btn__link a-btn__secondary">Secondary Button Link</a>
<a href="#" class="a-btn a-btn__link a-btn__warning">Warning Button Link</a>
```

#### Hovered state

<a href="#" class="a-btn a-btn__link hover">Button Link</a>
<a href="#" class="a-btn a-btn__link a-btn__secondary hover">Secondary Button Link</a>
<a href="#" class="a-btn a-btn__link a-btn__warning hover">Warning Button Link</a>

```
<a href="#" class="a-btn a-btn__link hover">Button Link</a>
<a href="#" class="a-btn a-btn__link a-btn__secondary hover">Secondary Button Link</a>
<a href="#" class="a-btn a-btn__link a-btn__warning hover">Warning Button Link</a>
```

#### Focus state

<a href="#" class="a-btn a-btn__link focus">Button Link</a>
<a href="#" class="a-btn a-btn__link a-btn__secondary focus">Secondary Button Link</a>
<a href="#" class="a-btn a-btn__link a-btn__warning focus">Warning Button Link</a>

```
<a href="#" class="a-btn a-btn__link focus">Button Link</a>
<a href="#" class="a-btn a-btn__link a-btn__secondary focus">Secondary Button Link</a>
<a href="#" class="a-btn a-btn__link a-btn__warning focus">Warning Button Link</a>
```

#### Active state

<a href="#" class="a-btn a-btn__link active">Button Link</a>
<a href="#" class="a-btn a-btn__link a-btn__secondary active">Secondary Button Link</a>
<a href="#" class="a-btn a-btn__link a-btn__warning active">Warning Button Link</a>

```
<a href="#" class="a-btn a-btn__link active">Button Link</a>
<a href="#" class="a-btn a-btn__link a-btn__secondary active">Secondary Button Link</a>
<a href="#" class="a-btn a-btn__link a-btn__warning active">Warning Button Link</a>
```

### Icon buttons

#### Button with icon on the left

<button class="a-btn
               a-btn__icon-on-left
               cf-icon
               cf-icon__before
               cf-icon-delete">
  Close
</button>

<button class="a-btn
               a-btn__icon-on-left
               a-btn__secondary
               cf-icon
               cf-icon__before
               cf-icon-delete">
  Close
</button> - Secondary button

<button class="a-btn
               a-btn__icon-on-left
               a-btn__warning
               cf-icon
               cf-icon__before
               cf-icon-delete">
  Close
</button> - Warning button

<button class="a-btn
               a-btn__icon-on-left
               a-btn__disabled
               cf-icon
               cf-icon__before
               cf-icon-delete">
  Close
</button> - Disabled button

```
<button class="a-btn
               a-btn__icon-on-left
               cf-icon
               cf-icon__before
               cf-icon-delete">
  Close
</button>

<button class="a-btn
               a-btn__icon-on-left
               a-btn__secondary
               cf-icon
               cf-icon__before
               cf-icon-delete">
  Close
</button> - Secondary button

<button class="a-btn
               a-btn__icon-on-left
               a-btn__warning
               cf-icon
               cf-icon__before
               cf-icon-delete">
  Close
</button> - Warning button

<button class="a-btn
               a-btn__icon-on-left
               a-btn__disabled
               cf-icon
               cf-icon__before
               cf-icon-delete">
  Close
</button> - Disabled button
```

#### Button with icon on the right

<button class="a-btn
               a-btn__icon-on-right
               cf-icon
               cf-icon__after
               cf-icon-delete">
  Close
</button>

<button class="a-btn
               a-btn__icon-on-right
               a-btn__secondary
               cf-icon
               cf-icon__after
               cf-icon-delete">
  Close
</button> - Secondary button

<button class="a-btn
               a-btn__icon-on-right
               a-btn__warning
               cf-icon
               cf-icon__after
               cf-icon-delete">
  Close
</button> - Warning button

<button class="a-btn
               a-btn__icon-on-right
               a-btn__disabled
               cf-icon
               cf-icon__after
               cf-icon-delete">
  Close
</button> - Disabled button

```
<button class="a-btn
               a-btn__icon-on-right
               cf-icon
               cf-icon__after
               cf-icon-delete">
  Close
</button>

<button class="a-btn
               a-btn__icon-on-right
               a-btn__secondary
               cf-icon
               cf-icon__after
               cf-icon-delete">
  Close
</button> - Secondary button

<button class="a-btn
               a-btn__icon-on-right
               a-btn__warning
               cf-icon
               cf-icon__after
               cf-icon-delete">
  Close
</button> - Warning button

<button class="a-btn
               a-btn__icon-on-right
               a-btn__disabled
               cf-icon
               cf-icon__after
               cf-icon-delete">
  Close
</button> - Disabled button
```

## Molecules

### Button group

#### With default buttons

<div class="m-btn-group">
    <button class="a-btn">Yes</button>
    <button class="a-btn">No</button>
    <button class="a-btn">Maybe So</button>
</div>

```
<div class="m-btn-group">
    <button class="a-btn">Yes</button>
    <button class="a-btn">No</button>
    <button class="a-btn">Maybe So</button>
</div>
```

#### With super buttons

<div class="m-btn-group">
    <button class="a-btn a-btn__super">Yes</button>
    <button class="a-btn a-btn__super">No</button>
    <button class="a-btn a-btn__super">Maybe So</button>
</div>

```
<div class="m-btn-group">
    <button class="a-btn a-btn__super">Yes</button>
    <button class="a-btn a-btn__super">No</button>
    <button class="a-btn a-btn__super">Maybe So</button>
</div>
```
