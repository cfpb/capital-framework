# Capital Framework [![Travis](https://img.shields.io/travis/cfpb/capital-framework.svg?style=flat-square)](https://travis-ci.org/cfpb/capital-framework) [![npm](https://img.shields.io/npm/v/capital-framework.svg?style=flat-square)](https://www.npmjs.com/package/capital-framework)

The Consumer Financial Protection Bureau's user interface framework.

```sh
npm install capital-framework
```

Components can also be installed individually:

```sh
npm install cf-buttons
npm install cf-expandables
```

Want some boilerplate?

```sh
npm install -g yo generator-cf
mkdir my-new-project && cd $_
yo cf
```

| buttons | core | expandables | forms | grid | icons | layout | pagination | typography |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| [![npm](https://img.shields.io/npm/v/cf-buttons.svg?style=flat-square)](https://www.npmjs.com/package/cf-buttons)  | [![npm](https://img.shields.io/npm/v/cf-core.svg?style=flat-square)](https://www.npmjs.com/package/cf-core)  | [![npm](https://img.shields.io/npm/v/cf-expandables.svg?style=flat-square)](https://www.npmjs.com/package/cf-expandables)  | [![npm](https://img.shields.io/npm/v/cf-forms.svg?style=flat-square)](https://www.npmjs.com/package/cf-forms)  | [![npm](https://img.shields.io/npm/v/cf-grid.svg?style=flat-square)](https://www.npmjs.com/package/cf-grid)  | [![npm](https://img.shields.io/npm/v/cf-icons.svg?style=flat-square)](https://www.npmjs.com/package/cf-icons)  | [![npm](https://img.shields.io/npm/v/cf-layout.svg?style=flat-square)](https://www.npmjs.com/package/cf-layout)  | [![npm](https://img.shields.io/npm/v/cf-pagination.svg?style=flat-square)](https://www.npmjs.com/package/cf-pagination)  | [![npm](https://img.shields.io/npm/v/cf-typography.svg?style=flat-square)](https://www.npmjs.com/package/cf-typography)  |

## Contributing

### Building components locally

```sh
git clone git@github.com:cfpb/capital-framework.git
cd capital-framework
npm install
npm run build
```

This will build every component (compiling Less, bundling JS, processing markdown docs) to `tmp/` in the project's root.

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

### Publishing your changes

After you've edited components' code in `src/` and you're ready to open a PR with your changes:

1. Create a new branch with your changes.
1. Increment the version number(s) of whatever components you changed.
1. Describe your changes in the "Unreleased" section of `CHANGELOG.md`.
1. Go to https://github.com/cfpb/capital-framework and open a pull request to merge your branch into canary.

Check out [example workflows](https://github.com/cfpb/capital-framework/issues/248) of the above process.

## Open source licensing info
1. [TERMS](TERMS.md)
2. [LICENSE](LICENSE)
3. [CFPB Source Code Policy](https://github.com/cfpb/source-code-policy/)
