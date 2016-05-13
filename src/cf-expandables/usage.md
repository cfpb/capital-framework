# Expandables

CF-Expandables are components that have additional content that can be
opened (expanded) and closed (collapsed). They can appear on their own
or can appear in groups.

## Dependencies

- CF-Core
- CF-Icons

## Vars

Theme variables for setting the color and sizes.
Overwrite them in your own project by duplicating the variable `@key: value`.

Ex. to set your base font size,
add `@expandable_link-font-size: 17px;` to your project.

### Sizing variables

```
@expandable_link-font-size: 14px;
```

### Color variables

`$color-` variables are from 18F's [US Web Design Standards](https://github.com/18F/web-design-standards/blob/18f-pages/assets/_scss/core/_variables.scss)

```
// Single expandable
@expandable-focus:             #046b99; // $color-primary-alt-darkest
@expandable_label-text:        #046b99; // $color-primary-alt-darkest
@expandable_link-text:         #046b99; // $color-primary-alt-darkest

// Padded expandable modifier
@expandable__padded-bg:        #e1f3f8; // $color-primary-alt-lightest
@expandable__padded-bg-hover:  lighten(@expandable__padded-bg, 3%);
@expandable__padded-divider:   darken(@expandable__padded-bg, 5%);

// Expandable group
@expandable-group_header-text: @text;
@expandable-group_header-bg:   #d6d7d9; // $color-gray-lighter
@expandable-group-bg:          #fff;
@expandable-group-divider:     #046b99; // $color-primary-alt-darkest
```

## Recommended expandable pattern

### Default state

<div class="expandable expandable__padded">
    <button class="expandable_header expandable_target" title="Expand content">
        <span class="expandable_header-left expandable_label">
            Expandable Header
        </span>
        <span class="expandable_header-right expandable_link">
            <span class="expandable_cue-open">
                Show
                <span class="cf-icon cf-icon-plus-round"></span>
            </span>
            <span class="expandable_cue-close">
                Hide
                <span class="cf-icon cf-icon-minus-round"></span>
            </span>
        </span>
    </button>
    <div class="expandable_content">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Neque ipsa voluptatibus soluta nobis unde quisquam
            temporibus magnam debitis quidem. Ducimus ratione
            corporis nesciunt earum vel est quaerat blanditiis
            dolore ipsa?
        </p>
    </div>
</div>

```
<div class="expandable expandable__padded">
    <button class="expandable_header expandable_target" title="Expand content">
        <span class="expandable_header-left expandable_label">
            Expandable Header
        </span>
        <span class="expandable_header-right expandable_link">
            <span class="expandable_cue-open">
                Show
                <span class="cf-icon cf-icon-plus-round"></span>
            </span>
            <span class="expandable_cue-close">
                Hide
                <span class="cf-icon cf-icon-minus-round"></span>
            </span>
        </span>
    </button>
    <div class="expandable_content">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Neque ipsa voluptatibus soluta nobis unde quisquam
            temporibus magnam debitis quidem. Ducimus ratione
            corporis nesciunt earum vel est quaerat blanditiis
            dolore ipsa?
        </p>
    </div>
</div>
```

### Barebones expandable

<div class="expandable">
    <button class="expandable_target" title="Expand content">
        <span class="expandable_cue-open">
            Show
        </span>
        <span class="expandable_cue-close">
            Hide
        </span>
    </button>
    <div class="expandable_content">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Neque ipsa voluptatibus soluta nobis unde quisquam
            temporibus magnam debitis quidem. Ducimus ratione
            corporis nesciunt earum vel est quaerat blanditiis
            dolore ipsa?
        </p>
    </div>
</div>

```
<div class="expandable">
    <button class="expandable_target" title="Expand content">
        <span class="expandable_cue-open">
            Show
        </span>
        <span class="expandable_cue-close">
            Hide
        </span>
    </button>
    <div class="expandable_content">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Neque ipsa voluptatibus soluta nobis unde quisquam
            temporibus magnam debitis quidem. Ducimus ratione
            corporis nesciunt earum vel est quaerat blanditiis
            dolore ipsa?
        </p>
    </div>
</div>
```

### Animated cues

<div class="expandable">
    <button class="expandable_target" title="Expand content">
        <span class="expandable_cue-open expandable_cue-open__animated">
            <span class="cf-icon cf-icon-down"></span>
        </span>
        <span class="expandable_cue-close expandable_cue-close__animated">
            <span class="cf-icon cf-icon-up"></span>
        </span>
    </button>
    <div class="expandable_content">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Neque ipsa voluptatibus soluta nobis unde quisquam
            temporibus magnam debitis quidem. Ducimus ratione
            corporis nesciunt earum vel est quaerat blanditiis
            dolore ipsa?
        </p>
    </div>
</div>
<div class="expandable expandable__expanded">
    <button class="expandable_target" title="Expand content">
        <span class="expandable_cue-open expandable_cue-open__animated">
            <span class="cf-icon cf-icon-down"></span>
        </span>
        <span class="expandable_cue-close expandable_cue-close__animated">
            <span class="cf-icon cf-icon-up"></span>
        </span>
    </button>
    <div class="expandable_content">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Neque ipsa voluptatibus soluta nobis unde quisquam
            temporibus magnam debitis quidem. Ducimus ratione
            corporis nesciunt earum vel est quaerat blanditiis
            dolore ipsa?
        </p>
    </div>
</div>

```
<div class="expandable">
    <button class="expandable_target" title="Expand content">
        <span class="expandable_cue-open expandable_cue-open__animated">
            <span class="cf-icon cf-icon-down"></span>
        </span>
        <span class="expandable_cue-close expandable_cue-close__animated">
            <span class="cf-icon cf-icon-up"></span>
        </span>
    </button>
    <div class="expandable_content">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Neque ipsa voluptatibus soluta nobis unde quisquam
            temporibus magnam debitis quidem. Ducimus ratione
            corporis nesciunt earum vel est quaerat blanditiis
            dolore ipsa?
        </p>
    </div>
</div>
<div class="expandable expandable__expanded">
    <button class="expandable_target" title="Expand content">
        <span class="expandable_cue-open expandable_cue-open__animated">
            <span class="cf-icon cf-icon-down"></span>
        </span>
        <span class="expandable_cue-close expandable_cue-close__animated">
            <span class="cf-icon cf-icon-up"></span>
        </span>
    </button>
    <div class="expandable_content">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Neque ipsa voluptatibus soluta nobis unde quisquam
            temporibus magnam debitis quidem. Ducimus ratione
            corporis nesciunt earum vel est quaerat blanditiis
            dolore ipsa?
        </p>
    </div>
</div>
```

### Expandable groups

<div class="expandable-group">
    <div class="expandable-group_header">Expandable group header</div>
    <div class="expandable expandable__padded">
        <button class="expandable_header expandable_target" title="Expand content">
            <span class="expandable_header-left expandable_label">
                Expandable Header 1
            </span>
            <span class="expandable_header-right expandable_link">
                <span class="expandable_cue-open">
                    Show
                    <span class="cf-icon cf-icon-plus-round"></span>
                </span>
                <span class="expandable_cue-close">
                    Hide
                    <span class="cf-icon cf-icon-minus-round"></span>
                </span>
            </span>
        </button>
        <div class="expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
    <div class="expandable expandable__padded">
        <button class="expandable_header expandable_target" title="Expand content">
            <span class="expandable_header-left expandable_label">
                Expandable Header 2
            </span>
            <span class="expandable_header-right expandable_link">
                <span class="expandable_cue-open">
                    Show
                    <span class="cf-icon cf-icon-plus-round"></span>
                </span>
                <span class="expandable_cue-close">
                    Hide
                    <span class="cf-icon cf-icon-minus-round"></span>
                </span>
            </span>
        </button>
        <div class="expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
    <div class="expandable expandable__padded">
        <button class="expandable_header expandable_target" title="Expand content">
            <span class="expandable_header-left expandable_label">
                Expandable Header 3
            </span>
            <span class="expandable_header-right expandable_link">
                <span class="expandable_cue-open">
                    Show
                    <span class="cf-icon cf-icon-plus-round"></span>
                </span>
                <span class="expandable_cue-close">
                    Hide
                    <span class="cf-icon cf-icon-minus-round"></span>
                </span>
            </span>
        </button>
        <div class="expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
</div>

```
<div class="expandable-group">
    <div class="expandable-group_header">Expandable group header</div>
    <div class="expandable expandable__padded">
        <button class="expandable_header expandable_target" title="Expand content">
            <span class="expandable_header-left expandable_label">
                Expandable Header 1
            </span>
            <span class="expandable_header-right expandable_link">
                <span class="expandable_cue-open">
                    Show
                    <span class="cf-icon cf-icon-plus-round"></span>
                </span>
                <span class="expandable_cue-close">
                    Hide
                    <span class="cf-icon cf-icon-minus-round"></span>
                </span>
            </span>
        </button>
        <div class="expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
    <div class="expandable expandable__padded">
        <button class="expandable_header expandable_target" title="Expand content">
            <span class="expandable_header-left expandable_label">
                Expandable Header 2
            </span>
            <span class="expandable_header-right expandable_link">
                <span class="expandable_cue-open">
                    Show
                    <span class="cf-icon cf-icon-plus-round"></span>
                </span>
                <span class="expandable_cue-close">
                    Hide
                    <span class="cf-icon cf-icon-minus-round"></span>
                </span>
            </span>
        </button>
        <div class="expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
    <div class="expandable expandable__padded">
        <button class="expandable_header expandable_target" title="Expand content">
            <span class="expandable_header-left expandable_label">
                Expandable Header 3
            </span>
            <span class="expandable_header-right expandable_link">
                <span class="expandable_cue-open">
                    Show
                    <span class="cf-icon cf-icon-plus-round"></span>
                </span>
                <span class="expandable_cue-close">
                    Hide
                    <span class="cf-icon cf-icon-minus-round"></span>
                </span>
            </span>
        </button>
        <div class="expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
</div>
```

### Accordion-style group

<div class="expandable-group" data-accordion="true">
    <div class="expandable-group_header">Expandable group header</div>
    <div class="expandable expandable__padded">
        <button class="expandable_header expandable_target" title="Expand content">
            <span class="expandable_header-left expandable_label">
                Expandable Header 1
            </span>
            <span class="expandable_header-right expandable_link">
                <span class="expandable_cue-open">
                    Show
                    <span class="cf-icon cf-icon-plus-round"></span>
                </span>
                <span class="expandable_cue-close">
                    Hide
                    <span class="cf-icon cf-icon-minus-round"></span>
                </span>
            </span>
        </button>
        <div class="expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
    <div class="expandable expandable__padded">
        <button class="expandable_header expandable_target" title="Expand content">
            <span class="expandable_header-left expandable_label">
                Expandable Header 2
            </span>
            <span class="expandable_header-right expandable_link">
                <span class="expandable_cue-open">
                    Show
                    <span class="cf-icon cf-icon-plus-round"></span>
                </span>
                <span class="expandable_cue-close">
                    Hide
                    <span class="cf-icon cf-icon-minus-round"></span>
                </span>
            </span>
        </button>
        <div class="expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
    <div class="expandable expandable__padded">
        <button class="expandable_header expandable_target" title="Expand content">
            <span class="expandable_header-left expandable_label">
                Expandable Header 3
            </span>
            <span class="expandable_header-right expandable_link">
                <span class="expandable_cue-open">
                    Show
                    <span class="cf-icon cf-icon-plus-round"></span>
                </span>
                <span class="expandable_cue-close">
                    Hide
                    <span class="cf-icon cf-icon-minus-round"></span>
                </span>
            </span>
        </button>
        <div class="expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
</div>

```
<div class="expandable-group" data-accordion="true">
    <div class="expandable-group_header">Expandable group header</div>
    <div class="expandable expandable__padded">
        <button class="expandable_header expandable_target" title="Expand content">
            <span class="expandable_header-left expandable_label">
                Expandable Header 1
            </span>
            <span class="expandable_header-right expandable_link">
                <span class="expandable_cue-open">
                    Show
                    <span class="cf-icon cf-icon-plus-round"></span>
                </span>
                <span class="expandable_cue-close">
                    Hide
                    <span class="cf-icon cf-icon-minus-round"></span>
                </span>
            </span>
        </button>
        <div class="expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
    <div class="expandable expandable__padded">
        <button class="expandable_header expandable_target" title="Expand content">
            <span class="expandable_header-left expandable_label">
                Expandable Header 2
            </span>
            <span class="expandable_header-right expandable_link">
                <span class="expandable_cue-open">
                    Show
                    <span class="cf-icon cf-icon-plus-round"></span>
                </span>
                <span class="expandable_cue-close">
                    Hide
                    <span class="cf-icon cf-icon-minus-round"></span>
                </span>
            </span>
        </button>
        <div class="expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
    <div class="expandable expandable__padded">
        <button class="expandable_header expandable_target" title="Expand content">
            <span class="expandable_header-left expandable_label">
                Expandable Header 3
            </span>
            <span class="expandable_header-right expandable_link">
                <span class="expandable_cue-open">
                    Show
                    <span class="cf-icon cf-icon-plus-round"></span>
                </span>
                <span class="expandable_cue-close">
                    Hide
                    <span class="cf-icon cf-icon-minus-round"></span>
                </span>
            </span>
        </button>
        <div class="expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
</div>
```


## JS functions

There are a number of available functions that you can call on .expandable elements.

### Expands the expandable.
```
.expand( duration )
```

Settings:
```
duration
Type: number
The animation duration.
Not required.
Defaults to `$.fn.expandable.calculateExpandDuration` or
`$.fn.expandable.calculateCollapseDuration` if excluded.
```

### Collapses the expandable.
```
.collapse( duration )
```

Settings:
```
duration
Type: number
The animation duration.
Not required.
Defaults to `$.fn.expandable.calculateExpandDuration` or
`$.fn.expandable.calculateCollapseDuration` if excluded.
```

### Toggles the expandable.
```
.toggle()
```

### Example usage
```
// HTML
<div class="expandable" id="my-expandable">...</div>
```
```js
// JS
// (use .get(0) to get the HTML element, that's what the functions
// are bound to)
$('#my-expandable').get(0).expand(); // Opens the expandable
$('#my-expandable').get(0).collapse(); // Closes the expandable
$('#my-expandable').get(0).toggle(); // Toggles the expandable
```
