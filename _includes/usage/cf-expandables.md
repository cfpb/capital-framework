Expandables are components that have additional content that can be
opened (expanded) and closed (collapsed). They can appear on their own
or in groups.

[`cf-core`](../cf-core) and [`cf-icons`](../cf-icons) components are
dependencies of this component.

> NOTE: If you use `cf-expandables.less` directly,
  be sure to run the file through
  [Autoprefixer](https://github.com/postcss/autoprefixer),
  or your compiled Capital Framework CSS will
  not work perfectly in older browsers.


## Table of contents

- [Variables](#variables)
  - [Color variables](#color-variables)
  - [Sizing variables](#sizing-variables)
  - [Timing variables](#timing-variables)
- [Modifiers](#modifiers)
  - [Expanded](#expanded)
  - [Padded](#padded)
  - [Spaced header](#spaced-header)
- [Elements](#elements)
    - [Text elements](#text-elements)
    - [Header elements](#header-elements)
- [Recommended expandable pattern](#recommended-expandable-pattern)
  - [Default state](#default-state)
  - [Default state - open on load](#default-state-open-on-load)
  - [Barebones example](#barebones-expandable)
- [Expandable groups](#expandable-groups)
  - [Accordion style group](#accordion-style-group)


## Variables

Theme variables for setting the color and sizes throughout the project.
Overwrite them in your own project by duplicating the variable `@key: value`.

### Color variables

`$color-` variables referenced in comments are from 18F's
[U.S. Web Design Standards](https://github.com/18F/web-design-standards/blob/staging/src/stylesheets/core/_variables.scss)

```
// Single expandable
@expandable-focus:             #046b99; // $color-primary-alt-darkest
@expandable_label-text:        #046b99; // $color-primary-alt-darkest
@expandable_link-text:         #046b99; // $color-primary-alt-darkest

// Padded expandable modifier
@expandable__padded-bg:        #e1f3f8; // $color-primary-alt-lightest
@expandable__padded-bg-hover:  lighten( @expandable__padded-bg, 3% );
@expandable__padded-divider:   darken( @expandable__padded-bg, 5% );

// Expandable group
@expandable-group_header-text: @text;
@expandable-group_header-bg:   #d6d7d9; // $color-gray-lighter
@expandable-group-bg:          #fff;
@expandable-group-divider:     #046b99; // $color-primary-alt-darkest
```

### Sizing variables

```
@expandable_link-font-size: 14px;
```

### Timing variables
```
// Transition timing
@expandable__transition-speed:  0.25s;
```


## Modifiers

### Expanded

Sometimes you may want the expandable to be open by default.
This is as easy as adding the `.o-expandable_content__onload-open` modifier
to the `.o-expandable_content` block.

```
.o-expandable_content__onload-open
```

### Padded

Adds `padding` and a `background` color to `.o-expandable_header` and
`.o-expandable_content`.

In addition to using the `.o-expandable__padded` modifier you also need to make
sure you are using `.o-expandable_header`.

```
.o-expandable__padded
```

### Spaced header

Allows you to add space between `.o-expandable_header` and `.o-expandable_content`.

```
.o-expandable_header__spaced
```

## Elements

### Text elements

#### Label

Allows you to add some styled text.

<span class="o-expandable_label">
    Lorem ipsum
</span>

```
<span class="o-expandable_label">
    Lorem ipsum
</span>
```

#### Link

Allows you to add some styled text to look like a link.

_Note: only use this in the expandable header_

<span class="o-expandable_link">
    Lorem ipsum
</span>

```
<span class="o-expandable_link">
    Lorem ipsum
</span>
```

### Header elements

These additional elements are useful for more complicated expandables that need
to convey more information than just 'Show/Hide' before the user expands it.

#### Header

Creates a full-width container to house information that is always visible.

Combine `.o-expandable_header` with `.o-expandable_target` for a full-width
trigger.

```
.o-expandable_header
```

#### Header left/right

Allows you to float information left and right.

```
.o-expandable_header-left
.o-expandable_header-right
```


## Recommended expandable pattern

Expandables can be built by combining the basic barebones structure described
in the next section along with more specialized expandable elements
and modifiers described throughout.

### Default state

The following combination is our recommended go-to expandable pattern.

<div class="o-expandable o-expandable__padded">
    <button class="o-expandable_header o-expandable_target"
            title="Expand content">
        <span class="o-expandable_header-left o-expandable_label">
            Expandable Header
        </span>
        <span class="o-expandable_header-right o-expandable_link">
            <span class="o-expandable_cue o-expandable_cue-open">
                Show
                <span class="cf-icon cf-icon-plus-round"></span>
            </span>
            <span class="o-expandable_cue o-expandable_cue-close">
                Hide
                <span class="cf-icon cf-icon-minus-round"></span>
            </span>
        </span>
    </button>
    <div class="o-expandable_content">
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
<div class="o-expandable o-expandable__padded">
    <button class="o-expandable_header o-expandable_target"
            title="Expand content">
        <span class="o-expandable_header-left o-expandable_label">
            Expandable Header
        </span>
        <span class="o-expandable_header-right o-expandable_link">
            <span class="o-expandable_cue o-expandable_cue-open">
                Show
                <span class="cf-icon cf-icon-plus-round"></span>
            </span>
            <span class="o-expandable_cue o-expandable_cue-close">
                Hide
                <span class="cf-icon cf-icon-minus-round"></span>
            </span>
        </span>
    </button>
    <div class="o-expandable_content">
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

### Default state (open on load)

<div class="o-expandable o-expandable__padded">
    <button class="o-expandable_header o-expandable_target"
            title="Expand content">
        <span class="o-expandable_header-left o-expandable_label">
            Expandable Header
        </span>
        <span class="o-expandable_header-right o-expandable_link">
            <span class="o-expandable_cue o-expandable_cue-open">
                Show
                <span class="cf-icon cf-icon-plus-round"></span>
            </span>
            <span class="o-expandable_cue o-expandable_cue-close">
                Hide
                <span class="cf-icon cf-icon-minus-round"></span>
            </span>
        </span>
    </button>
    <div class="o-expandable_content o-expandable_content__onload-open">
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
<div class="o-expandable o-expandable__padded">
    <button class="o-expandable_header o-expandable_target"
            title="Expand content">
        <span class="o-expandable_header-left o-expandable_label">
            Expandable Header
        </span>
        <span class="o-expandable_header-right o-expandable_link">
            <span class="o-expandable_cue o-expandable_cue-open">
                Show
                <span class="cf-icon cf-icon-plus-round"></span>
            </span>
            <span class="o-expandable_cue o-expandable_cue-close">
                Hide
                <span class="cf-icon cf-icon-minus-round"></span>
            </span>
        </span>
    </button>
    <div class="o-expandable_content o-expandable_content__onload-open">
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

This is the barebones structure for expandables that can be used (along with
other expanable elements and modifiers) to create custom expandable patterns.

In this barebones example there are no visual styles.

<div class="o-expandable">
    <button class="o-expandable_target" title="Expand content">
        <span class="o-expandable_cue o-expandable_cue-open">
            Show
        </span>
        <span class="o-expandable_cue o-expandable_cue-close">
            Hide
        </span>
    </button>
    <div class="o-expandable_content">
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
<div class="o-expandable">
    <button class="o-expandable_target" title="Expand content">
        <span class="o-expandable_cue o-expandable_cue-open">
            Show
        </span>
        <span class="o-expandable_cue o-expandable_cue-close">
            Hide
        </span>
    </button>
    <div class="o-expandable_content">
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


## Expandable groups

<div class="o-expandable-group">
    <div class="o-expandable o-expandable__padded">
        <button class="o-expandable_header o-expandable_target"
                title="Expand content">
            <span class="o-expandable_header-left o-expandable_label">
                Expandable Header 1
            </span>
            <span class="o-expandable_header-right o-expandable_link">
                <span class="o-expandable_cue o-expandable_cue-open">
                    Show
                    <span class="cf-icon cf-icon-plus-round"></span>
                </span>
                <span class="o-expandable_cue o-expandable_cue-close">
                    Hide
                    <span class="cf-icon cf-icon-minus-round"></span>
                </span>
            </span>
        </button>
        <div class="o-expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
    <div class="o-expandable o-expandable__padded">
        <button class="o-expandable_header o-expandable_target"
                title="Expand content">
            <span class="o-expandable_header-left o-expandable_label">
                Expandable Header 2
            </span>
            <span class="o-expandable_header-right o-expandable_link">
                <span class="o-expandable_cue o-expandable_cue-open">
                    Show
                    <span class="cf-icon cf-icon-plus-round"></span>
                </span>
                <span class="o-expandable_cue o-expandable_cue-close">
                    Hide
                    <span class="cf-icon cf-icon-minus-round"></span>
                </span>
            </span>
        </button>
        <div class="o-expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
    <div class="o-expandable o-expandable__padded">
        <button class="o-expandable_header o-expandable_target"
                title="Expand content">
            <span class="o-expandable_header-left o-expandable_label">
                Expandable Header 3
            </span>
            <span class="o-expandable_header-right o-expandable_link">
                <span class="o-expandable_cue o-expandable_cue-open">
                    Show
                    <span class="cf-icon cf-icon-plus-round"></span>
                </span>
                <span class="o-expandable_cue o-expandable_cue-close">
                    Hide
                    <span class="cf-icon cf-icon-minus-round"></span>
                </span>
            </span>
        </button>
        <div class="o-expandable_content">
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
<div class="o-expandable-group">
    <div class="o-expandable o-expandable__padded">
        <button class="o-expandable_header o-expandable_target"
                title="Expand content">
            <span class="o-expandable_header-left o-expandable_label">
                Expandable Header 1
            </span>
            <span class="o-expandable_header-right o-expandable_link">
                <span class="o-expandable_cue o-expandable_cue-open">
                    Show
                    <span class="cf-icon cf-icon-plus-round"></span>
                </span>
                <span class="o-expandable_cue o-expandable_cue-close">
                    Hide
                    <span class="cf-icon cf-icon-minus-round"></span>
                </span>
            </span>
        </button>
        <div class="o-expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
    <div class="o-expandable o-expandable__padded">
        <button class="o-expandable_header o-expandable_target"
                title="Expand content">
            <span class="o-expandable_header-left o-expandable_label">
                Expandable Header 2
            </span>
            <span class="o-expandable_header-right o-expandable_link">
                <span class="o-expandable_cue o-expandable_cue-open">
                    Show
                    <span class="cf-icon cf-icon-plus-round"></span>
                </span>
                <span class="o-expandable_cue o-expandable_cue-close">
                    Hide
                    <span class="cf-icon cf-icon-minus-round"></span>
                </span>
            </span>
        </button>
        <div class="o-expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
    <div class="o-expandable o-expandable__padded">
        <button class="o-expandable_header o-expandable_target"
                title="Expand content">
            <span class="o-expandable_header-left o-expandable_label">
                Expandable Header 3
            </span>
            <span class="o-expandable_header-right o-expandable_link">
                <span class="o-expandable_cue o-expandable_cue-open">
                    Show
                    <span class="cf-icon cf-icon-plus-round"></span>
                </span>
                <span class="o-expandable_cue o-expandable_cue-close">
                    Hide
                    <span class="cf-icon cf-icon-minus-round"></span>
                </span>
            </span>
        </button>
        <div class="o-expandable_content">
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

Accordions can only show one open expandable at a time.
Add the `data-accordion="true"` attribute to the expandable group to activate
the accordion mode.

<div class="o-expandable-group o-expandable-group__accordion" >
    <div class="o-expandable o-expandable__padded">
        <button class="o-expandable_header o-expandable_target"
                title="Expand content">
            <span class="o-expandable_header-left o-expandable_label">
                Expandable Header 1
            </span>
            <span class="o-expandable_header-right o-expandable_link">
                <span class="o-expandable_cue o-expandable_cue-open">
                    Show
                    <span class="cf-icon cf-icon-plus-round"></span>
                </span>
                <span class="o-expandable_cue o-expandable_cue-close">
                    Hide
                    <span class="cf-icon cf-icon-minus-round"></span>
                </span>
            </span>
        </button>
        <div class="o-expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
    <div class="o-expandable o-expandable__padded">
        <button class="o-expandable_header o-expandable_target"
                title="Expand content">
            <span class="o-expandable_header-left o-expandable_label">
                Expandable Header 2
            </span>
            <span class="o-expandable_header-right o-expandable_link">
                <span class="o-expandable_cue o-expandable_cue-open">
                    Show
                    <span class="cf-icon cf-icon-plus-round"></span>
                </span>
                <span class="o-expandable_cue o-expandable_cue-close">
                    Hide
                    <span class="cf-icon cf-icon-minus-round"></span>
                </span>
            </span>
        </button>
        <div class="o-expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
    <div class="o-expandable o-expandable__padded">
        <button class="o-expandable_header o-expandable_target"
                title="Expand content">
            <span class="o-expandable_header-left o-expandable_label">
                Expandable Header 3
            </span>
            <span class="o-expandable_header-right o-expandable_link">
                <span class="o-expandable_cue o-expandable_cue-open">
                    Show
                    <span class="cf-icon cf-icon-plus-round"></span>
                </span>
                <span class="o-expandable_cue o-expandable_cue-close">
                    Hide
                    <span class="cf-icon cf-icon-minus-round"></span>
                </span>
            </span>
        </button>
        <div class="o-expandable_content">
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
<div class="o-expandable-group o-expandable-group__accordion" >
    <div class="o-expandable o-expandable__padded">
        <button class="o-expandable_header o-expandable_target"
                title="Expand content">
            <span class="o-expandable_header-left o-expandable_label">
                Expandable Header 1
            </span>
            <span class="o-expandable_header-right o-expandable_link">
                <span class="o-expandable_cue o-expandable_cue-open">
                    Show
                    <span class="cf-icon cf-icon-plus-round"></span>
                </span>
                <span class="o-expandable_cue o-expandable_cue-close">
                    Hide
                    <span class="cf-icon cf-icon-minus-round"></span>
                </span>
            </span>
        </button>
        <div class="o-expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
    <div class="o-expandable o-expandable__padded">
        <button class="o-expandable_header o-expandable_target"
                title="Expand content">
            <span class="o-expandable_header-left o-expandable_label">
                Expandable Header 2
            </span>
            <span class="o-expandable_header-right o-expandable_link">
                <span class="o-expandable_cue o-expandable_cue-open">
                    Show
                    <span class="cf-icon cf-icon-plus-round"></span>
                </span>
                <span class="o-expandable_cue o-expandable_cue-close">
                    Hide
                    <span class="cf-icon cf-icon-minus-round"></span>
                </span>
            </span>
        </button>
        <div class="o-expandable_content">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Neque ipsa voluptatibus soluta nobis unde quisquam
                temporibus magnam debitis quidem. Ducimus ratione
                corporis nesciunt earum vel est quaerat blanditiis
                dolore ipsa?
            </p>
        </div>
    </div>
    <div class="o-expandable o-expandable__padded">
        <button class="o-expandable_header o-expandable_target"
                title="Expand content">
            <span class="o-expandable_header-left o-expandable_label">
                Expandable Header 3
            </span>
            <span class="o-expandable_header-right o-expandable_link">
                <span class="o-expandable_cue o-expandable_cue-open">
                    Show
                    <span class="cf-icon cf-icon-plus-round"></span>
                </span>
                <span class="o-expandable_cue o-expandable_cue-close">
                    Hide
                    <span class="cf-icon cf-icon-minus-round"></span>
                </span>
            </span>
        </button>
        <div class="o-expandable_content">
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

