# cf-docs
##Project-wide documentation for Capital Framework.

**Description**: The static documentation site for the Capital Framework. Includes examples, code snippets, getting started and contribution instructions, etc.

**Technology stack**:
- Ruby - For installing Jekyll.
- Jekyll - Static site server.
- Node - For managing front-end dependencies.

**Screenshot**:

![](https://raw.githubusercontent.com/cfpb/capital-framework/gh-pages/screenshot.png)

## Installation

We use [homebrew](http://brew.sh/) on Mac OSX to manage installation of software. To install the project dependencies using homebrew, navigate to this project's root directory and enter the following:

```shell
$ brew install ruby
$ brew install node
$ gem install jekyll
$ npm install
```

To launch the site, enter:

```shell
$ jekyll serve
```

The site should now be live at `http://localhost:4000/capital-framework/`.

## Troubleshooting

**CSS compilation errors.** If you encounter issues of CSS not compiling, try running:

```shell
$ grunt vendor
```

**Deny/Allow connections.** If you encounter the following message:

> Do you want the application “node” to accept incoming network connections?

Hit `Deny` to close the dialog box.

## Getting help

If you encounter issues with the Capital Framework components shown in the documentation site, please post an issue in the Capital Framework [issue tracker](https://github.com/cfpb/capital-framework/issues/).

**Example**

A live demo can be viewed [here](http://cfpb.github.io/capital-framework).
For local installation, the local live is at `http://localhost:4000/capital-framework/` (see installation instructions).

## Getting involved

We welcome contributions to the Capital Framework or the documentation site itself. If interested, please read through our [contributing page](http://cfpb.github.io/capital-framework/contributing/) on the demo site.

----

## Open source licensing info
1. [TERMS](TERMS.md)
2. [LICENSE](LICENSE)
3. [CFPB Source Code Policy](https://github.com/cfpb/source-code-policy/)
