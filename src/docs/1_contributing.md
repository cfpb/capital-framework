# Contributing

## Building components locally

```bash
git clone git@github.com:cfpb/capital-framework.git
cd capital-framework
npm install
npm run build
```

This will build every component (compiling Less, bundling JS, processing markdown docs) to `tmp/` in the project's root.


## Testing components locally

If you're hacking on a component and want to test it in a local project, use `npm link`.
For example:

```bash
cd ~/Projects/capital-framework/ # wherever you cloned this repo
npm run build
cd tmp/cf-buttons
npm link
cd ~/Projects/owning-a-home # whatever project you want to test the component in
npm link cf-buttons
```

Now `~/Projects/owning-a-home/node_modules/cf-buttons` will be a symlink pointing
to the `~/Projects/capital-framework/tmp/cf-buttons` directory.
Whenever you rebuild (`npm run build`, see above) the CF components, your local
owning-a-home project will reference your local `tmp/` version of cf-buttons.


### Browser testing

Components should be cross browser tested. When contributing code please publicly track the tests you have run using the testing checklist in the pull request description.


### JavaScript testing

JavaScript tests can be run with the `npm test` command. Before making a pull
request please publicly track that all tests have passed using the testing
checklist in the pull request description.

New unit tests should be written using [QUnit](https://qunitjs.com/) for any functionality added.


### Accessibility testing

Components should conform to [Section 508](http://www.section508.gov/)
and [WCAG 2.0 level AA](http://www.w3.org/TR/WCAG20/) guidelines. Accessibility
tests are run as part of `npm test`.


## Publishing your changes

After you've edited components' code in `src/` and you're ready to open a PR with your changes:

1. Create a new branch with your changes.
1. Increment the version number(s) of whatever components you changed.
1. Describe your changes in the "Unreleased" section of `CHANGELOG.md`.
1. Go to https://github.com/cfpb/capital-framework and open a pull request to merge your branch into canary.

Check out [example workflows](https://github.com/cfpb/capital-framework/issues/248) of the above process.


## Coding style

In lieu of a formal style guide, take care to maintain the existing coding style.


### Adhere to any linting errors or warnings

Linting tasks that are set up within component build processes are there to
promote consistency.
When contributing code please publicly track that there are no linting errors
or warnings using the testing checklist in the pull request description.


### Follow our CSS naming conventions

**We are using a customized BEM format**

```css
.block-name
.block-name_element-name
.block-name__block-modifier
.block-name_element-name__element-modifier
```

**Avoid creating elements of modifiers**

Appending an element name to a modifier class can result in a confusing class
name like `.list__space_item`.
Avoid this in favor of using a descendant, like this: `.list__spaced .list_item`.


### Shoot for mobile first declarations

In most cases styles should be declared mobile first,
then enhanced with `min-width` media queries. By doing this we create a base
experience that all devices can use and one that does not require media query support.


### Automatically create an alternate stylesheet for older IE

Use [grunt-legacssy](https://github.com/robinpokorny/grunt-legacssy) to
automatically create an alternate version of your stylesheet.
The alternate version will be stripped of media query rules matching your
specified criteria while leaving the contents of those rules intact.

Use conditional comments to serve this alternate stylesheet to older versions
of Internet Explorer.

Our recommended configuration for grunt-legacssy:

```js
legacssy: {
  demo: {
    options: {
      legacyWidth: 960
    },
    files: {
      'main.lt-ie9.css': 'main.css'
    }
  }
}
```

## Updating documentation

For components, docs are stored in the `usage.md` files in each component
directory in the project root's `/src` directory. They are symlinked into
the `/docs` directory.

Other documentation appears in `/src/docs`, which are also symlinked into
the `/docs` directory. After making updates run `gulp docs:generate`
to re-build the docs, and `gulp docs:start` to view them locally.
