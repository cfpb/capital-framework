The cf-notification component provides a notification box for Capital Framework.

[`cf-core`](../cf-core) and
[`cf-icons`](../cf-icons) components are dependencies of this component.

> NOTE: If you use `cf-notification.less` directly,
  be sure to run the file through
  [Autoprefixer](https://github.com/postcss/autoprefixer),
  or your compiled Capital Framework CSS will
  not work perfectly in older browsers.


## Table of contents

- [Variables](#variables)
    - [Color variables](#color-variables)
    - [Sizing variables](#sizing-variables)
- [Recommended notification patterns](#recommended-notification-pattern)
    - [Action notification](#action-notification)
    - [Error notification](#error-notification)
    - [Warning notification](#warning-notification)
    - [Success notification](#success-notification)
- [Modifiers](#recommended-notification-pattern)
    - [Visibility](#visibility)
    - [Explanation](#explanation)
    - [Custom icons](#custom-icons)


## Variables

Theme variables for setting the color and sizes throughout the project.
Overwrite them in your own project by duplicating the variable `@key: value`.

### Color variables

`$color-` variables referenced in comments are from 18F's
[U.S. Web Design Standards](https://github.com/18F/web-design-standards/blob/staging/src/stylesheets/core/_variables.scss)

```
@notification-bg:             #323a45; // @gray-20
@notification-bg-success:     #323a45; // @green-20
@notification-bg-warning:     #323a45; // @gold-20
@notification-bg-error:       #323a45; // @red-20

@notification-border:         #323a45; // @gray
@notification-border-success: #323a45; // @green
@notification-border-warning: #323a45; // @gold
@notification-border-error:   #323a45; // @red

@notification-icon:           #323a45; // @green
@notification-icon-success:   #323a45; // @green
@notification-icon-warning:   #323a45; // @gold
@notification-icon-error:     #323a45; // @red
```

### Sizing variables

```
@notification-padding__px: 15px;
```

## Recommended notification patterns

### Action notification

The action notification is for displaying when something
is happening on the page,
such as a page loading notification.
This is the default notification appearance without additional CSS modifiers.

<div class="m-notification
            m-notification__visible">
    <span class="m-notification_icon
                 cf-icon
                 cf-icon-update
                 cf-icon__spin"></span>
    <div class="m-notification_content">
        <div class="h4 m-notification_message">The page is loading…</div>
    </div>
</div>

```
<div class="m-notification
            m-notification__visible">
    <span class="m-notification_icon
                 cf-icon
                 cf-icon-update
                 cf-icon__spin"></span>
    <div class="m-notification_content">
        <div class="h4 m-notification_message">The page is loading…</div>
    </div>
</div>
```

### Success notification

The success notification is for displaying when an operation has run as
expected, such as returning the number of results in a search.

<div class="m-notification
            m-notification__visible
            m-notification__success">
    <span class="m-notification_icon cf-icon"></span>
    <div class="m-notification_content">
        <div class="h4 m-notification_message">11 results.</div>
    </div>
</div>

```
<div class="m-notification
            m-notification__visible
            m-notification__success">
    <span class="m-notification_icon cf-icon"></span>
    <div class="m-notification_content">
        <div class="h4 m-notification_message">11 results.</div>
    </div>
</div>
```

### Warning notification

The warning notification is for displaying when an operation has run as
expected, but doesn't have the expected results,
such as a search that returned no results.

<div class="m-notification
            m-notification__visible
            m-notification__warning">
    <span class="m-notification_icon cf-icon"></span>
    <div class="m-notification_content">
        <div class="h4 m-notification_message">No results found.</div>
    </div>
</div>

```
<div class="m-notification
            m-notification__visible
            m-notification__warning">
    <span class="m-notification_icon cf-icon"></span>
    <div class="m-notification_content">
        <div class="h4 m-notification_message">No results found.</div>
    </div>
</div>
```

### Error notification

The error notification is for displaying when an operation has not run as
expected and encountered an error.

<div class="m-notification
            m-notification__visible
            m-notification__error">
    <span class="m-notification_icon cf-icon"></span>
    <div class="m-notification_content">
        <div class="h4 m-notification_message">Page not found.</div>
    </div>
</div>

```
<div class="m-notification
            m-notification__visible
            m-notification__error">
    <span class="m-notification_icon cf-icon"></span>
    <div class="m-notification_content">
        <div class="h4 m-notification_message">Page not found.</div>
    </div>
</div>
```

## Modifiers

### Visibility

You can show and hide a notification
by adding or removing the `m-notification__visible` class to the base element.

### Explanation

<div class="m-notification
            m-notification__visible
            m-notification__error">
    <span class="m-notification_icon cf-icon"></span>
    <div class="m-notification_content">
        <div class="h4 m-notification_message">Page not found.</div>
        <p class="h4 m-notification_explanation">
          Please check the URL and try again.
        </p>
    </div>
</div>

```
<div class="m-notification
            m-notification__visible
            m-notification__error">
    <span class="m-notification_icon cf-icon"></span>
    <div class="m-notification_content">
        <div class="h4 m-notification_message">message</div>
        <p class="h4 m-notification_explanation">
          Please check the URL and try again.
        </p>
    </div>
</div>
```

### Custom icons

Custom icons can be added to the action notification by supplying any icons
from the cf-icons package.

<div class="m-notification
            m-notification__visible">
    <span class="m-notification_icon
                 cf-icon
                 cf-icon-arrow-right"></span>
    <div class="m-notification_content">
        <div class="h4 m-notification_message">Press the next button.</div>
    </div>
</div>

```
<div class="m-notification
            m-notification__visible">
    <span class="m-notification_icon
                 cf-icon
                 cf-icon-arrow-right"></span>
    <div class="m-notification_content">
        <div class="h4 m-notification_message">Press the next button.</div>
    </div>
</div>
```
