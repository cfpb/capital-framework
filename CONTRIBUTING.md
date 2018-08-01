# Guidance on how to contribute

> All contributions to this project will be released under the CC0 public domain
> dedication. By submitting a pull request or filing a bug, issue, or
> feature request, you are agreeing to comply with this waiver of copyright interest.
> Details can be found in our [TERMS](TERMS.md) and [LICENSE](LICENSE).


There are two primary ways to help:
 - Using the issue tracker, and
 - Changing the code-base.


## Using the issue tracker

Use the issue tracker to suggest feature requests, report bugs, and ask questions.
This is also a great way to connect with the developers of the project as well
as others who are interested in this solution.

Use the issue tracker to find ways to contribute. Find a bug or a feature, mention in
the issue that you will take on that effort, then follow the _Changing the codebase_
guidance below.


## Changing the codebase

We are no longer forking and pulling. Instead, we are working off feature branches.
After you've edited a component, open a PR to merge your feature branch back into `canary`.

For example, if you wanted to change `cf-buttons`, here's what you'd do:

1. `git clone git@github.com:cfpb/capital-framework.git`
1. `cd capital-framework`
1. `npm install && npm run cf-link`
1. `git checkout -b button-fix canary`
1. Edit file(s) in `/src/cf-buttons/` however you want.
1. `npm run build` This will build every component (compiling Less, bundling JavaScript, processing markdown docs) to `tmp/` in the project's root.
1. Inspect and test your modified `cf-buttons` component in `tmp/`. See _Testing components locally_ below.
1. When you're done hacking, open `/CHANGELOG.md` and add a line item describing your changes in the "Unreleased" section.
Use the format: `- **cf-component-name:** [MAJOR|MINOR|PATCH] Description of change`.
[Here's an example](https://github.com/cfpb/capital-framework/pull/840/files#diff-4ac32a78649ca5bdd8e0ba38b7006a1eR12).
  - If the change affects *all* components, put `**all components:**` as the name.
  - If the change affects CF and not any components (e.g. if you're just updating [README.md](README.md)), put `**capital-framework**`.
  - **Note:** Don't bump components' versions in their `package.json` files. CFPBot will take care of that.
1. `git commit -am "Fix button border radius"`
1. `git push origin button-fix`
1. Go to https://github.com/cfpb/capital-framework and open a pull request to merge `button-fix` into `canary`.

If you are not a current contributor to Capital Framework, continue using forks
by first clicking the fork button on top of the repository and cloning your fork in step 1. In the final step, go to https://github.com/cfpb/capital-framework and file a pull request by clicking the link to compare changes across forks.

### Testing components locally

#### Automated tests

Automated tests can be run with the command `gulp test`.

#### Testing in the documentation site

If you're hacking on a component and want to test it in the documentation site follow the following steps.

In this repo:
- check out a working branch
- run `npm run cf-link`

In a second local clone of this repo in a different folder:

- make sure you're on the gh-pages branch
- [run all the install steps for the project](https://github.com/cfpb/capital-framework/tree/gh-pages#installation)
- run `npm run cf-link`
- run `npm run build`
- run `npm start`
- open a browser at http://localhost:3000/ and navigate to the component you've changed
- when you've finished testing run `npm run cf-unlink` to reset your components to the published releases

#### Testing in an outside project

If you're hacking on a component and want to test it in a local project, use npm linking. For example:

```sh
cd ~/Projects/capital-framework/ 	# wherever you cloned this repo
npm run cf-link 					# this makes all the components linkable
git checkout [branch] 				# make your edits on a branch

cd ~/Projects/owning-a-home
npm link cf-buttons 				# or whatever component you're working on
gulp build 							# or whatever build process your project uses
```

Now `~/Projects/owning-a-home/node_modules/cf-buttons` will be a symlink pointing to the `~/Projects/capital-framework/src/cf-buttons` directory. Whenever you make changes in the Capital Framework repo run the build task in your project to see your changes.


### Browser support

We configure [Autoprefixer](#autoprefixer) and [Babel](#babel) to support the following list of browsers.

- Latest 2 releases of all browsers including:
    - Chrome
    - Firefox
    - Safari
    - Internet Explorer
    - Edge
    - Opera
    - iOS Safari
    - Opera Mini
    - Android Browser
    - BlackBerry Browser
    - Opera Mobile
    - Chrome for Android
    - Firefox for Android
    - Samsung Internet
- Internet Explorer 9

http://browserl.ist/?q=last+2+versions%2C+Explorer+%3E%3D+9

As well as additional Autoprefixer support for:

- Internet Explorer 8

http://browserl.ist/?q=last+2+versions%2C+Explorer+%3E%3D+8

What this means to the end-user is we've added a level of backward
compatability for modern features as much as possible. This doesn't
necessarily mean feature parity. Where it's impossible or impractical to
implement a modern feature, we fallback to standard practices for that browser.
For example, we do not deliver interactive scripting for Internet Explorer 8,
but we do ensure that default browser features continue to work so users
that can't or don't want to upgrade continue to have access to the site and
our content.

#### Browser Testing

We have automated tests that use a headless version of Chrome to ensure
the majority of the site is working as expected. For manual testing, we
realistically test this project locally or in a virtual environment with the
following list of browsers:

- Chrome
- Firefox
- Safari
- Internet Explorer 8, 9, 10, and 11
- Edge
- iOS Safari
- Chrome for Android

#### Autoprefixer

Autoprefixer parses our CSS and adds vendor prefixes to rules where necessary
using reported feature support by [Can I Use](https://caniuse.com/). For more
information visit the [Autoprefixer documentation site]
(https://autoprefixer.github.io/).

#### Babel

Babel compiles our [ES6](http://es6-features.org/) JavaScript where necessary
for the browsers that either don't support or have limited support of ES6
features. For more information visit the [Babel documentation site]
(https://babeljs.io/).

#### Known feature differences

- JavaScript: We do not serve interactive scripting to IE 8 but we do deliver
  analytics via JavaScript.
- Icons: We currently use icon fonts to deliver scalable icons. Browsers that
  do not support icon fonts unfortunately do not receive backups but we try to
  always pair icons with text.

#### Resources

- https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/
- https://saucelabs.com/beta/dashboard/tests
- http://developer.samsung.com/remotetestlab/rtlDeviceList.action#

#### Notes

The CSS and JavaScript files that are generated during the build task are only
used for testing. Because this project doesn't necessarily produce a final
product it is up to the projects that use it to generate and maintain their own
browser support config. An example of this is
[consumerfinance.gov](https://github.com/cfpb/cfgov-refresh), which generates
specific IE 8 and 9 stylesheets, whereas the Capital Framework build task
bundles those with the main stylesheet. Despite the differences in delivery,
the output and support are the same.

### Updating Documentation

Documentation is maintained in each component's folder's `usage.md` file.
Changes to documentation are made on the `canary` branch using the workflow above
and pulled in the `gh-pages` branch using a manual process detailed below.
The `usage.md` files are then rendered as separated pages on Capital Framework's website
[(See this example from cf-core)](https://cfpb.github.io/capital-framework/components/cf-core/).

After a release with documentation changes, you can checkout the `gh-pages` branch,
and `npm install` any new dependencies in Capital Framework.
After installing your new dependencies run `npm run build` to build the documentation site.

Run `npm start` to check your work and push it up to a new branch to merge into `gh-pages`.

```sh
git checkout gh-pages
git pull
npm install
npm run build
git checkout -b gh-pages-updates
git push origin gh-pages-updates
```

Once you've completed these steps, file a pull request against `gh-pages`.


## Release management

After changes have been made to components, nothing will be published to npm until
those changes enter the `master` branch.
Release management is now handled by [CFPB's chat bot](https://github.com/cfpb/CFPBot) via [hubot-capital-framework](https://github.com/cfpb/hubot-capital-framework).

1. In the FEWD channel say "cfpbot capital framework prepare release"
1. It will do a bunch of stuff and create a release PR. Visit the PR and merge it.

After the PR is merged [Travis](https://travis-ci.org/cfpb/capital-framework) will run `npm run release`.
To simulate a Travis release locally, run `npm run release -- --dryrun`.
