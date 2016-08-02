- [Default button](#default)
- [Secondary button](#secondary)
- [Destructive action button](#destructive)
- [Disabled button](#disabled)
- [Super button](#super)

> NOTE: If you use `cf-buttons.less` directly,
  be sure to run the file through
  [Autoprefixer](https://github.com/postcss/autoprefixer),
  or your compiled Capital Framework CSS will
  not work perfectly in older browsers.

## Variables

### Color variables

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


## <a name="default"></a>Default button

### Default state

<a href="#" class="btn" title="Test button">Anchor Tag</a>
<button class="btn" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="btn">

```
<a href="#" class="btn" title="Test button">Anchor Tag</a>
<button class="btn" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="btn">
```

### Hovered state

<a href="#" class="btn hover" title="Test button">Anchor Tag</a>
<button class="btn hover" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="btn hover">

```
<a href="#" class="btn hover" title="Test button">Anchor Tag</a>
<button class="btn hover" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="btn hover">
```

### Focused state

<a href="#" class="btn focus" title="Test button">Anchor Tag</a>
<button class="btn focus" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="btn focus">

```
<a href="#" class="btn focus" title="Test button">Anchor Tag</a>
<button class="btn focus" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="btn focus">
```

### Active state

<a href="#" class="btn active" title="Test button">Anchor Tag</a>
<button class="btn active" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="btn active">

```
<a href="#" class="btn active" title="Test button">Anchor Tag</a>
<button class="btn active" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="btn active">
```

## <a name="secondary"></a>Secondary button

### Default state

<a href="#" class="btn btn__secondary">Anchor Tag</a>
<button class="btn btn__secondary" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="btn btn__secondary">

```
<a href="#" class="btn btn__secondary">Anchor Tag</a>
<button class="btn btn__secondary" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="btn btn__secondary">
```

### Hovered state

<a href="#" class="btn btn__secondary hover">Anchor Tag</a>
<button class="btn btn__secondary hover" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="btn btn__secondary hover">

```
<a href="#" class="btn btn__secondary hover">Anchor Tag</a>
<button class="btn btn__secondary hover" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="btn btn__secondary hover">
```

### Focused state

<a href="#" class="btn btn__secondary focus">Anchor Tag</a>
<button class="btn btn__secondary focus" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="btn btn__secondary focus">

```
<a href="#" class="btn btn__secondary focus">Anchor Tag</a>
<button class="btn btn__secondary focus" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="btn btn__secondary focus">
```

### Active state

<a href="#" class="btn btn__secondary active">Anchor Tag</a>
<button class="btn btn__secondary active" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="btn btn__secondary active">

```
<a href="#" class="btn btn__secondary active">Anchor Tag</a>
<button class="btn btn__secondary active" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="btn btn__secondary active">
```

## <a name="destructive"></a>Destructive action button

### Default state

<a href="#" class="btn btn__warning">Anchor Tag</a>
<button class="btn btn__warning" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="btn btn__warning">

```
<a href="#" class="btn btn__warning">Anchor Tag</a>
<button class="btn btn__warning" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="btn btn__warning">
```

### Hovered state

<a href="#" class="btn btn__warning hover">Anchor Tag</a>
<button class="btn btn__warning hover" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="btn btn__warning hover">

```
<a href="#" class="btn btn__warning hover">Anchor Tag</a>
<button class="btn btn__warning hover" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="btn btn__warning hover">
```

### Focused state

<a href="#" class="btn btn__warning focus">Anchor Tag</a>
<button class="btn btn__warning focus" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="btn btn__warning focus">

```
<a href="#" class="btn btn__warning focus">Anchor Tag</a>
<button class="btn btn__warning focus" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="btn btn__warning focus">
```

### Active state

<a href="#" class="btn btn__warning active">Anchor Tag</a>
<button class="btn btn__warning active" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="btn btn__warning active">

```
<a href="#" class="btn btn__warning active">Anchor Tag</a>
<button class="btn btn__warning active" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="btn btn__warning active">
```

## <a name="disabled"></a>Disabled button

### Default/hovered/active state

<a href="#" class="btn btn__disabled">Anchor Tag</a>
<button class="btn btn__disabled" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="btn btn__disabled">
<button class="btn" disabled title="Test button">Button Tag w/ disabled attr</button>

```
<a href="#" class="btn btn__disabled">Anchor Tag</a>
<button class="btn btn__disabled" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="btn btn__disabled">
<button class="btn" disabled title="Test button">Button Tag w/ disabled attr</button>
```

### Focused state

<a href="#" class="btn btn__disabled focus">Anchor Tag</a>
<button class="btn btn__disabled focus" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="btn btn__disabled focus">
<button class="btn focus" disabled title="Test button">Button Tag w/ disabled attr</button>

```
<a href="#" class="btn btn__disabled focus">Anchor Tag</a>
<button class="btn btn__disabled focus" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="btn btn__disabled focus">
<button class="btn focus" disabled title="Test button">Button Tag w/ disabled attr</button>
```

## <a name="super"></a>Super button

### Default state

<a href="#" class="btn btn__super">Anchor Tag</a>
<button class="btn btn__super" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="btn btn__super">

```
<a href="#" class="btn btn__super">Anchor Tag</a>
<button class="btn btn__super" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="btn btn__super">
```

### Hovered state

<a href="#" class="btn btn__super hover">Anchor Tag</a>
<button class="btn btn__super hover" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="btn btn__super hover">

```
<a href="#" class="btn btn__super hover">Anchor Tag</a>
<button class="btn btn__super hover" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="btn btn__super hover">
```

### Focused state

<a href="#" class="btn btn__super focus">Anchor Tag</a>
<button class="btn btn__super focus" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="btn btn__super focus">

```
<a href="#" class="btn btn__super focus">Anchor Tag</a>
<button class="btn btn__super focus" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="btn btn__super focus">
```

### Active state

<a href="#" class="btn btn__super active">Anchor Tag</a>
<button class="btn btn__super active" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="btn btn__super active">

```
<a href="#" class="btn btn__super active">Anchor Tag</a>
<button class="btn btn__super active" title="Test button">Button Tag</button>
<input type="submit" value="Input Tag" class="btn btn__super active">
```
