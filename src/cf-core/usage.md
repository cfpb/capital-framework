## Type hierarchy

### Default body type

<p>Lorem ipsum dolor sit amet, <em>consectetur adipisicing elit</em>, sed do eiusmod <strong>tempor incididunt</strong> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

```
<p>Lorem ipsum dolor sit amet, <em>consectetur adipisicing elit</em>, sed do eiusmod <strong>tempor incididunt</strong> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
```


## Margins

### Consistent vertical margins

<p>Paragraph margin example</p>
<p>Paragraph margin example</p>

```
<p>Paragraph margin example</p>
<p>Paragraph margin example</p>
```


## Default link

### Default state

<a href="#">Default link style</a>

```
<a href="#">Default link style</a>
```

## Media queries

### Respond to dpi mixin

This mixin allows us to easily write styles
that target high-resolution screens,
such as Apple retina screens

```less
// The following LESS...
.example {
    background: url(regular-resolution-image.png);
    .respond-to-dpi(2, {
        background-image: url(retina-image.png);
    });
}

// ...Exports to
.example {
    background: url(regular-resolution-image.png);
}
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    .example {
        background-image: url(retina-image.png);
    }
}
```

### Respond to print mixin

This mixin allows us to easily write styles that target both
`@media print` and `.print`.

```less
// The following LESS...
.example {
    color: @gray;
    .respond-to-print({
        color: @black;
    });
}

// ...Exports to
.example {
    color: #75787B;
}
@media print {
    .example {
        color: #101820;
    }
}
.print .example {
    color: #101820;
}
```
