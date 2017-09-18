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
- [Recommended modal patterns](#recommended-modal-patterns)
  - [Dialog modal](#dialog-modal)
  - [Alert modal](#alert-modal)
  - [Visible modifier](#visible-modifier)

## Variables

Theme variables for setting the color and sizes throughout the project.
Overwrite them in your own project by duplicating the variable `@key: value`.

### Color variables

```
@modal-backdrop:   @black;
@modal-body:       @white;
@modal-footer:     @gray-5;
@modal-border-top: @green;
```


## Recommended modal patterns

### Dialog modal

A regular dialog modal does not contain a call to action for the user and
can simply be closed without further interaction.

<div class="o-modal"
     aria-hidden="true"
     role="dialog"
     aria-labelledby="example-modal-1-title"
     aria-describedby="example-modal-1-desc">
    <div class="o-modal_backdrop"></div>
    <div class="o-modal_container">
        <div class="o-modal_content">
            <div class="o-modal_body">
                <button class="o-modal_close a-btn a-btn__link">
                    Close
                    <span class="cf-icon cf-icon-delete-round"></span>
                </button>
                <h1 id="example-modal-title-1">Lorem ipsum</h1>
                <div id="example-modal-1-desc">
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    </p>
                    <p>
                        Quis nostrum exercitationem ullam corporis suscipit laboriosam,
                        nisi ut aliquid ex ea commodi consequatur?
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

```
<div class="o-modal"
     aria-hidden="true"
     role="dialog"
     aria-labelledby="example-modal-1-title"
     aria-describedby="example-modal-1-desc">
    <div class="o-modal_backdrop"></div>
    <div class="o-modal_container">
        <div class="o-modal_content">
            <div class="o-modal_body">
                <button class="o-modal_close a-btn a-btn__link">
                    Close
                    <span class="cf-icon cf-icon-delete-round"></span>
                </button>
                <h1 id="example-modal-title-1">Lorem ipsum</h1>
                <div id="example-modal-1-desc">
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    </p>
                    <p>
                        Quis nostrum exercitationem ullam corporis suscipit laboriosam,
                        nisi ut aliquid ex ea commodi consequatur?
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
```

### Alert modal

This version of a modal uses a form for the `o-modal_content` and includes
a footer that allows the user to perform an action, such as saving
entered content. Unlike a dialog model, the first content a user should
interact with is focused, which may be the first occurance of an `<input>`,
`<submit>`, `<button>` or the close button designated by
the `o-modal_close` class.

<div class="o-modal"
     aria-hidden="true"
     role="alertdialog"
     aria-labelledby="example-modal-2-title"
     aria-describedby="example-modal-2-desc">
    <div class="o-modal_backdrop"></div>
    <div class="o-modal_container">
        <form class="o-modal_content">
            <div class="o-modal_body">
                <button class="o-modal_close a-btn a-btn__link">
                    Close
                    <span class="cf-icon cf-icon-delete-round"></span>
                </button>
                <h1 id="example-modal-2-title">Lorem ipsum</h1>
                <p id="example-modal-2-desc">
                    <label class="a-label" for="textinput-example">A text input</label>
                    <input class="a-text-input"
                           type="text"
                           id="textinput-example"
                           value="Lorem ipsum">
                </p>
            </div>
            <div class="o-modal_footer m-btn-group">
                <submit class="a-btn">Save</submit>
                <button class="a-btn a-btn__link a-btn__warning">Cancel</button>
            </div>
        </form>
    </div>
</div>

```
<div class="o-modal"
     aria-hidden="true"
     role="alertdialog"
     aria-labelledby="example-modal-2-title"
     aria-describedby="example-modal-2-desc">
    <div class="o-modal_backdrop"></div>
    <div class="o-modal_container">
        <form class="o-modal_content">
            <div class="o-modal_body">
                <button class="o-modal_close a-btn a-btn__link">
                    Close
                    <span class="cf-icon cf-icon-delete-round"></span>
                </button>
                <h1 id="example-modal-2-title">Lorem ipsum</h1>
                <p id="example-modal-2-desc">
                    <label class="a-label" for="textinput-example">A text input</label>
                    <input class="a-text-input"
                           type="text"
                           id="textinput-example"
                           value="Lorem ipsum">
                </p>
            </div>
            <div class="o-modal_footer m-btn-group">
                <submit class="a-btn">Save</submit>
                <button class="a-btn a-btn__link a-btn__warning">Cancel</button>
            </div>
        </form>
    </div>
</div>
```

### Visible modifier

Adding the `o-modal__visible` modifier on the base element displays the modal.
