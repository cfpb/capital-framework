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

If you are not a current contributor to Capital Framework, continue using forks
by first clicking the fork button on top of the repository and cloning your fork in step 1. In the final step, go to https://github.com/cfpb/capital-framework and file a pull request by clicking the link to compare changes across forks.

### Testing components locally

#### Testing in the documentation site

If you're hacking on a component and want to test it in the documentation site follow the following steps.

In this repo:
- check out a working branch
- run `npm run cf-link`

In a second local clone of this repo in a different folder:

- make sure you're on the gh-pages branch
- run `npm run cf-link`
- run `npm run build`
- run `npm start`
- open a browser at http://localhost:3000/ and navigate to the component you've changed

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


### Updating Documentation

Documentation is maintained in each component's folder's `usage.md` file.
Changes to documentation are made on the `canary` branch using the workflow above
and pulled in the `gh-pages` branch using a manual process detailed below.
The `usage.md` files are then rendered as separated pages on Capital Framework's website [(See this example from cf-core)](https://cfpb.github.io/capital-framework/components/cf-core/).

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
