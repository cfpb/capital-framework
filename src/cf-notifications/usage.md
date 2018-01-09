# cf-notifications

The cf-notifications component provides notification boxes
for Capital Framework.

[`cf-core`](../cf-core) and
[`cf-icons`](../cf-icons) components are dependencies of this component.

**NOTE: If you use `cf-notifications.less` directly,
  be sure to run the file through
  [Autoprefixer](https://github.com/postcss/autoprefixer),
  or your compiled Capital Framework CSS will
  not work perfectly in older browsers.**


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

```less
@notification-bg:             #d2d3d5;
@notification-bg-success:     #e2efd8;
@notification-bg-warning:     #fff0dd;
@notification-bg-error:       #f7e0d9;

@notification-border:         #5a5d61;
@notification-border-success: #20aa3f;
@notification-border-warning: #ff9e1b;
@notification-border-error:   #d14124;

@notification-icon:           #5a5d61;
@notification-icon-success:   #20aa3f;
@notification-icon-warning:   #ff9e1b;
@notification-icon-error:     #d14124;
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
    <div class="m-notification_content">
        <div class="h4 m-notification_message">The page is loading…</div>
    </div>
</div>

```
<div class="m-notification
            m-notification__visible">
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
        <div class="h4 m-notification_message">11 results</div>
    </div>
</div>

```
<div class="m-notification
            m-notification__visible
            m-notification__success">
    <span class="m-notification_icon cf-icon"></span>
    <div class="m-notification_content">
        <div class="h4 m-notification_message">11 results</div>
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
