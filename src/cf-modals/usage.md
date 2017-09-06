Modals are components that can be shown and hidden as a popup overlay.

[`cf-core`](../cf-core) and [`cf-icons`](../cf-icons) components are
dependencies of this component.

> NOTE: If you use `cf-modals.less` directly,
  be sure to run the file through
  [Autoprefixer](https://github.com/postcss/autoprefixer),
  or your compiled Capital Framework CSS will
  not work perfectly in older browsers.


## Table of contents

- [Variables](#variables)
  - [Color variables](#color-variables)
- [Recommended expandable pattern](#recommended-expandable-pattern)
  - [Default state](#default-state)
  - [Visible state](#visible-state)

## Variables

Theme variables for setting the color and sizes throughout the project.
Overwrite them in your own project by duplicating the variable `@key: value`.

### Color variables

`$color-` variables referenced in comments are from 18F's
[U.S. Web Design Standards](https://github.com/18F/web-design-standards/blob/staging/src/stylesheets/core/_variables.scss)

```
@modal-bg-outer:              #000000; // @black;
@modal-bg-inner:              #ffffff; // @white;
@modal-action-bar:            #f7f8f9; // @gray-5;
@modal-border-top:            #20aa3f; // @green;
```


## Recommended modal pattern

### Default state

<div class="o-modal">
    <div class="o-modal_backdrop"></div>
    <div class="o-modal_container" aria-hidden="false" role="dialog">
        <div class="o-modal_offset">
            <div class="o-modal_content">
                <div class="o-modal_inner">
                    <p class="o-modal_close">
                        <button class="a-btn a-btn__link">
                            Close
                            <span class="cf-icon cf-icon-delete-round"></span>
                        </button>
                    </p>
                    <h3>Privacy Act statement</h3>
                    <p>
                        Any identifying information that you provide will only be used to allow the Bureau to respond to your question.
                        This information may be shared with contractors and other agents authorized by the Bureau to receive this information in the normal course of business.
                        Your submission of information is entirely voluntary.
                    </p>
                    <p>
                      This collection of information is authorized by 12 U.S.C. § 5492.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

```
<div class="o-modal">
    <div class="o-modal_backdrop"></div>
    <div class="o-modal_container" aria-hidden="false" role="dialog">
        <div class="o-modal_offset">
            <div class="o-modal_content">
                <div class="o-modal_inner">
                    <p class="o-modal_close">
                        <button class="a-btn a-btn__link">
                            Close
                            <span class="cf-icon cf-icon-delete-round"></span>
                        </button>
                    </p>
                    <h3>Privacy Act statement</h3>
                    <p>
                        Any identifying information that you provide will only be used to allow the Bureau to respond to your question.
                        This information may be shared with contractors and other agents authorized by the Bureau to receive this information in the normal course of business.
                        Your submission of information is entirely voluntary.
                    </p>
                    <p>
                      This collection of information is authorized by 12 U.S.C. § 5492.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
```

### Visible state

Having the `o-modal__visible` modifier on the base element displays the modal.
