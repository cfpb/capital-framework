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
1. `git checkout -b doing-something-with-buttons canary`
1. Edit file(s) in `/src/cf-buttons/` however you want.
1. `npm run build` This will build every component (compiling Less, bundling JS, processing markdown docs) to `tmp/` in the project's root.
1. Inspect and test your modified `cf-buttons` component in `tmp/`. See _Testing components locally_ below.
1. Describe the changes in the "Unreleased" section of `/CHANGELOG.md`.
Prepend the component's name to the described changes.
1. `git commit -am "Describe your commit"`
1. `git push upstream doing-something-with-buttons`
1. Go to https://github.com/cfpb/capital-framework and open a pull request to merge `doing-something-with-buttons` into `canary`.


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

1. Go to wherever cf is cloned locally: `cd capital-framework`
1. Ensure you're on canary: `git checkout canary`
1. Ensure you're up-to-date: `git pull upstream canary`
1. Open `/CHANGELOG.md` and check the "Unreleased" section. For each component
that's been modified, open its `/src/COMPONENT/package.json` and increment its
version. Follow [SemVer](http://semver.org/) and increment either its major, minor,
or patch version dependent upon the changes that were made to the component.
1. Don't touch CF's primary `/package.json`. Travis will automatically increment its version.
1. Delete any empty sections ("Added", "Changed", "Removed") from the changelog.
1. `git commit -am "Preparing release"`
1. `git push upstream canary`
1. Go to https://github.com/cfpb/capital-framework and open a pull request to merge `canary` into `master`.
