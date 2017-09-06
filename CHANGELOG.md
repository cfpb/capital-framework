All notable changes to this project will be documented in this file.
We follow the [Semantic Versioning 2.0.0](http://semver.org/) format.

## Unreleased

### Added
- **cf-modals:** [MAJOR] 1.0 added.

### Changed
-

### Removed
-


## 4.12.1 - 2017-10-04

### Changed
- **cf-forms:** [PATCH] Change font size in block helper text.


## 4.12.0 - 2017-10-04

### Added
- **cf-core:** [MINOR] Add `u-hidden` utility class.
- **cf-forms:** [MINOR] Add block modifier to label helper text.

### Changed
- **cf-forms:** [PATCH] Change font size in helper text to use variable.

## 4.11.1 - 2017-09-21

### Changed
- **capital-framework:** Update atomic-component dependency in main package.json.
- **cf-expandables:** Update atomic-component dependency to 1.4.0.
- **cf-tables:** Update atomic-component dependency to 1.4.0.


## 4.11.0 - 2017-09-21

### Added
- **cf-forms:** Add color variable for text input.
- **cf-forms:** Add sidecar `.hover` classes to text input.
- **cf-forms:** Add sidecar `.focus` classes to inputs.
- **cf-forms:** Add focus state CSS to inputs.

### Changed
- **cf-forms:** Changes label helper text to Avenir Regular.
- **cf-forms:** Lets autoprefixer handle placeholder pseudoselector.
- **cf-forms:** Lighten disabled input gray.
- **cf-forms:** Convert `a-text-input__focus` to `.focus` class.
- **cf-tables:** Separate Table class from initialization code.

### Removed
- **cf-forms:** Remove `a-text-input__disabled`.


## 4.10.0 - 2017-09-19

### Added
- **cf-typography:** Add Avenir web fonts to override default Arial fonts from cf-core.


## 4.9.3 - 2017-09-15

### Added
- **cf-forms:** Add sidecar `.hover` classes to basic inputs
  and drop-down for manually triggering hover/focus state.
- **cf-forms:** Update disabled state appearance for checkboxes/radio.
- **cf-core:** Add purple to color variables.

### Changed
- **cf-forms:** Adds CSS to target disabled option color in drop-downs.


## 4.9.2 - 2017-09-07

### Changed
- **cf-notifications:** Renamed from `cf-notification`
  to `cf-notifications`.


## 4.9.1 - 2017-09-07

### Added
- **capital-framework:** Add atomic-component dependency to main package.json.

### Changed
- **cf-expandables:** Update atomic-component dependency to 1.3.2.
- **cf-tables:** Update atomic-component dependency to 1.3.2.

### Removed
- **all components:** All individual component lockfiles.


## 4.9.0 - 2017-09-06

### Added
- **cf-notification:** 1.0 added.
- **cf-forms:** Add `a-label_helper` class.

### Changed
- **cf-forms:** Convert fixed pixel units to ems.
- **cf-layout:** Fix the background size of overlay hero images
- **cf-layout:** Update outdated jump link references in docs.
- **cf-forms:** Add full width modifier to text inputs
- **cf-forms:** Fix the spacing and alignment of radio and checkbox inputs
- **cf-forms:** Update color for `@input-border` to gray 60.
- **cf-core:** Add brand palette variables to cf-core for other components to use and update default colors to use brand colors.
- **cf-forms:** Update default color variables to use brand colors.
- **cf-buttons:** Update default color variables to use brand colors.
- **cf-expandables:** Update default color variables to use brand colors.
- **cf-icons:** Update default color variables to use brand colors.
- **cf-tables:** Fix linting errors.
- **cf-expandables:** Fix linting errors.
- **cf-layout:** Update default color variables to use brand colors.
- **cf-pagination:** Update default color variables to use brand colors.
- **cf-tables:** Update default color variables to use brand colors.
- **cf-typography:** Update default color variables to use brand colors.

### Removed
- **cf-tables:** Removed unused init method from `cf-table-row-links.js`.
- **capital-framework:** Removed un-minified generated JS/CSS.
- **cf-expandables:** Removed unused `bind`, `config`, and `group` vars.


## 4.8.5 - 2017-07-24

### Changed
- **cf-buttons:** Change button links in docs to actual buttons.


## 4.8.4 - 2017-07-24

### Changed
- **capital-framework**: Clean up Travis CI publishing steps.


## 4.8.3 - 2017-07-24

### Changed
- **cf-forms:** Convert fixed pixel units to ems.
- **cf-layout:** Fix the background size of overlay hero images


## 4.8.2 - 2017-07-03

### Added
- **all components:** Added lockfile to the component
- **capital-framework:** Added lockfile to the project

### Changed
- **capital-framework:** Imports gulp plugins directly instead of
through `gulp-load-plugins`.
- **capital-framework:** Updates some gulp task parts to ES6 syntax.
- **capital-framework:** Drops IE7 support setting in autoprefixer task.
- **cf-typography:** Updates `category-slug` to `a-heading` in docs.
- **cf-layout:** Updates `category-slug` to `a-heading` in docs.

### Removed
- **capital-framework:** Removes `gulp-load-plugins`, and unused
`gulp-debug`, `gulp-if`, `gulp-tap`, `gulp-template`.
- **capital-framework:** Updates `gulp-autoprefixer` to `4.0.0`.
- **capital-framework:** Updates `gulp-uglify` to `3.0.0`.


## 4.8.1 - 2017-06-27

### Added
- **capital-framework:** Re-add changelog that inadvertently disappeared.


## 4.8.0 - 2017-06-27

### Added
- **cf-typography:** Automatically add em dash to pull quote citation.

### Changed
- **cf-forms:** Fixed checkbox/radio borders on hover
- **cf-pagination:** Fixed outdated `a-btn__icon-on-left`
and `a-btn__icon-on-right` classes referenced in docs to correct
`a-btn_icon__on-left` and `a-btn_icon__on-right` classes.
- **cf-forms:** Changed label heading from 5 to 4, per design manual.
- **cf-typography:** Remove bottom margin from `m-slug-header`.

### Removed
- **cf-core:** Remove IE7 and below support.
- **cf-buttons:** Remove IE7 and below support.
- **cf-grid:** Remove IE7 and below support.
- **cf-layout:** Remove IE7 and below support.
- **cf-typography:** Remove unused a-heading__padded variables and docs.


## 4.7.1 - 2017-06-09

### Added
- **capital-framework:** Add dry run option to make testing releases easier


## 4.7.0 - 2017-06-07

### Added
- **cf-forms:** Added base styling for legend elements

### Changed
- **cf-layout:** Simplified the Featured Content Module styles


## 4.6.1 - 2017-06-07

### Changed
- **cf-grid:** Fix for nested grid doc examples


## 4.6.0 - 2017-05-23

### Added
- **cf-forms:** Added base styling for multiselect element


## 4.5.0 - 2017-05-18

### Added
- **cf-core:** Added base styling for inline and fenced code blocks

### Changed
- **cf-forms:** Improved the form buttons documentation


## 4.4.0 - 2017-05-16

### Added
- **cf-buttons:** Added full width button utility for x-small screens


## 4.3.2 - 2017-05-01

### Changed
- **cf-forms:** Fixed the documentation for form fields


## 4.3.1 - 2017-04-28

### Changed
- **cf-expandables:** Replaced the missing top border for expandable groups
- **cf-buttons:** Fix default font-size for super buttons


## 4.3.0 - 2017-04-26

### Changed
- **cf-layout:** Updated Heroes to match latest spec from the Design Manual


## 4.2.1 - 2017-04-24

### Changed
- **cf-expandables:** Fixed bottom spacing of the expandable content


## 4.2.0 - 2017-04-21

### Added
- **cf-tables:** Added rule to .o-table__stack-on-small so that TD and TH elements
are 100% width when stacked on small screens

### Changed
- **capital-framework:** Updated Travis script to print which components are published to npm
- **cf-buttons:** Fixed a bug when animating icons within a button. Changes button icon markup,
  see usage doc for details


## 4.1.2 - 2017-03-31

### Changed
- **cf-pagination:** Cleaned up styling

### Removed
- **cf-pagination:** Unneeded variables


## 4.1.1 - 2017-03-03

### Changed
- **cf-core:** Fixed line breaks before code fences


## 4.1.0 - 2017-03-02

### Changed
- **all components:** Corrected the variables correct names, locations, and organization
- **all components:** Standardized all the usage docs for v4
- **cf-core:** Updated the base list styles to match latest DM Spec
- **cf-core:** Updated the body copy elements to remove margin from the `last-child`

### Removed
- **all components:** Deprecated code
  - Deprecated webfont mixins
  - Extra select element


## 4.0.1 - 2017-01-26

### Changed
- **capital-framework:** Bumped all components' internal CF dependencies.

## 4.0.0 - 2017-01-26

### Changed
- **cf-buttons:** Update for atomic design overhaul
- **cf-core:** Update for atomic design overhaul
- **cf-expandables:** Update for atomic design overhaul
- **cf-forms:** Update for atomic design overhaul
- **cf-grid:** Update for atomic design overhaul
- **cf-icons:** Update for atomic design overhaul
- **cf-layout:** Update for atomic design overhaul
- **cf-pagination:** Update for atomic design overhaul
- **cf-tables:** Update for atomic design overhaul
- **cf-typography:** Update for atomic design overhaul

### Added
- **capital-framework:** Added cf-link script to automate installing component dependencies and npm linking

### Removed
- **cf-core:** Removed deprecated items:
  - `@mobile-max`
  - `@tablet-min`
  - `.subheader`
  - `.superheader`
  - `.figure__bordered`
  - `.u-link-child__hover`
- **cf-forms**: Removed deprecated items:
  - `.form-group` and `.form-group_item`
  - `.input__super`
  - `.form-l` classes, in favor of content-l classes in cf-layout
  - `@cf-forms_input-icon-class`
  - `@input-icon__warning`
  - `@input-icon__success`
- **cf-typography**: Removed unused items:
  - custom bullet mixin
  - fancy slug
  - short desc
  - padded heading
  - icon lists (for the time being to be addressed later when we can look at existing implementations).
  - duplicate icon code
- **cf-buttons**: Removed unused items:
  - duplicate icon code


## 3.6.1 - 2016-08-12

### Changed
- **cf-icons:** Standardized the usage doc.
- **cf-pagination:** Standardized the usage doc.
- **cf-forms:** Standardized the usage doc.

### Removed
- **capital-framework:** Remove post install script to allow shrinkwrapping.


## 3.6.0 - 2016-08-02

### Added
- **capital-framework:** Added CSS autoprefixer to build pipeline.

### Changed
- **cf-typography:** Many documentation fixes and standardization.
- **cf-core:** Standardized the usage doc.
- **cf-tables:** Fix documentation order and details.

### Removed
- **cf-typography:** Removed remaining Less from branded bullets
- **cf-buttons:** Removed vendor prefixes handled by autoprefixer.
- **cf-core:** Removed vendor prefixes handled by autoprefixer.
- **cf-grid:** Removed vendor prefixes handled by autoprefixer.
- **cf-icons:** Removed vendor prefixes handled by autoprefixer.


## 3.5.2 - 2016-07-06

### Changed
- **capital-framework:** Improve contributing docs in readme for outside contributors and documentation fixes.


## 3.5.1 - 2016-07-05

### Changed
- **cf-layout:** Add negative side margin to FCMs so they don't double
  up the border when against a sidebar.
- **cf-layout:** Update recommended FCM markup to use `category-slug`.
- **cf-forms:** Fix markup in documentation.
- **cf-typography:** Fix markup in documentation.

## 3.5.0 - 2016-05-26

### Added
- **cf-core:** Add respond-to-dpi mixin and respond-to-print mixin

### Changed
- **all components:** Improve components' usage documentation
- **capital-framework:** Add note about bumping versions in contribution documentation
- **cf-buttons:** Update default colors to 18F colors in Web Design Standards
- **cf-core:** Update default colors to 18F colors in Web Design Standards
- **cf-expandables:** Update default colors to 18F colors in Web Design Standards
- **cf-forms:** Update default colors to 18F colors in Web Design Standards
- **cf-icons:** Update default colors to 18F colors in Web Design Standards
- **cf-pagination:** Update default colors to 18F colors in Web Design Standards
- **cf-tables:** Update link to 18F Web Design Standards
- **cf-typography:** Update link to 18F Web Design Standards


## 3.4.1 - 2016-05-13

### Changed
- **capital-framework:** Update contributing documentation.


## 3.4.0 - 2016-05-09

### Changed
- **cf-layout:** Updated main content spacing


## 3.3.0 - 2016-04-06

### Added
- **cf-layout:** Add `overlay` and `white-text` modifiers to the hero

### Changed
- **capital-framework:** Move Travis CI from Node v4 to v5.
- **cf-core:** Fix padding in `<th>`s to be 10px.
- **cf-tables:** Match sortable `<th>` styles to non-sortable `<th>` styles.
- **cf-tables:** Harmonize variables with those found in cf-core.
- **cf-layout:** Updated the Hero styles to properly match the content layout and simplified the rules.

## 3.2.1 - 2016-03-10

### Changed
- **All components:** Normalize markdown formatting across usage.md files.


## 3.2.0 - 2016-02-26

### Added
- **cf-tables:** Add new component.
- **cf-core:** Add font-size vars.


## 3.1.4 - 2016-02-23

### Changed
- Include `usage.md` in built components.


## 3.1.3 - 2016-02-23

### Changed

- Update build process to include `usage.md` with built components.


## 3.1.2 - 2016-02-10

### Fixed
- **cf-core:** Fix improper usage of `:not` to target non-nav `li` elements.
- **cf-core:** Remove `margin-bottom` from last-child `li` elements.
- **cf-layout:** Fix a bug where columns nested 2 levels deep in a
  large-gutter modifier gain the extra wide gutters.
- **cf-layout:** Remove `block` borders when `__flush` modifiers are also applied.
- **capital-framework:** Added `CONTRIBUTING.md` with contribution docs.

### Changed
- **cf-layout:** Hero updates:
  - Use new breakpoint variables
  - Subheading should not be medium on smaller screens
  - CTA links should match size and weight of subheading
  - Margin between subheading and CTA is 30px


## 3.1.1 - 2016-01-04

### Changed
- **capital-framework:** Improve contributing docs in readme.


## 3.1.0 - 2016-01-04

### Changed
- **capital-framework:** Edit Gulp styles task to use Less' `paths` option instead of npm import plugin.
- **cf-core:** Update `normalize.css` `@import` paths to play nicer with Less `paths` option.
- **cf-grid:** Update `normalize.css` `@import` paths to play nicer with Less `paths` option.
- **cf-icons:** Replace icon fonts to fix "Failed to decode downloaded font" error.


## 3.0.8 - 2015-12-22

### Added
- Ability to publish CF from local machine (instead of only Travis).


## 3.0.7 - 2015-12-22

### Removed
- Topdoc comments from component source files.


## 3.0.6 - 2015-12-18

### Added
- Initial WCAG accessibility tests.


## 3.0.5 - 2015-12-18

### Changed
- Individual components' readme template.


## 3.0.3 - 2015-12-18

### Added
- Add automatic changelog updating to Travis CI release script.


## 3.0.0 - 2015-12-17

### Changed
- Voltrazord refactor. All components now live in this repo.
