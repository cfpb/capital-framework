# Guidance on how to contribute

> All contributions to this project will be released under the CC0 public domain
> dedication. By submitting a pull request or filing a bug, issue, or
> feature request, you are agreeing to comply with this waiver of copyright interest.
> Details can be found in our [TERMS](TERMS.md) and [LICENCE](LICENSE).


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
1. `npm install`
1. `git checkout -b button-fix canary`
1. Edit file(s) in `/src/cf-buttons/` however you want.
1. `npm run build` This will build every component (compiling Less, bundling JS, processing markdown docs) to `tmp/` in the project's root.
1. Inspect and test your modified `cf-buttons` component in `tmp/`. See _Testing components locally_ below.
1. When you're done hacking, open `/CHANGELOG.md` and add a line item describing your changes in the "Unreleased" section.
Use the format: `- **cf-component-name:** [MAJOR|MINOR|PATCH] Description of change`.
[Here's an example](https://github.com/cfpb/capital-framework/pull/291/files#diff-4ac32a78649ca5bdd8e0ba38b7006a1eR12).
  - If the change affects *all* components, put `**all components:**` as the name.
  - If the change affects CF and not any components (e.g. if you're just updating [README.md](README.md)), put `**capital-framework**`.
  - **Note:** Don't bump components' versions in their `package.json` files. CFPBot will take care of that.
1. `git commit -am "Fix button border radius"`
1. `git push origin button-fix`
1. Go to https://github.com/cfpb/capital-framework and open a pull request to merge `button-fix` into `canary`.


### Testing components locally

If you're hacking on a component and want to test it in a local project, use `npm link`. For example:

```sh
cd ~/Projects/capital-framework/ # wherever you cloned this repo
npm run build
cd tmp/cf-buttons
npm link
cd ~/Projects/owning-a-home
npm link cf-buttons
```

Now `~/Projects/owning-a-home/node_modules/cf-buttons` will be a symlink pointing to the `~/Projects/capital-framework/tmp/cf-buttons` directory. Whenever you rebuild (`npm run build`, see above) the CF components, your local owning-a-home project will reference your local `tmp/` version of cf-buttons.


## Release management

After changes have been made to components, nothing will be published to npm until
those changes enter the `master` branch.
Release management is now handled by [CFPB's chat bot](https://github.com/cfpb/CFPBot) via [hubot-capital-framework](https://github.com/cfpb/hubot-capital-framework).

1. In the FEWD channel say "cfpbot capital framework prepare release"
1. It will do a bunch of stuff and create a release PR. Visit the PR and merge it.
