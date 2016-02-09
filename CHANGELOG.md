All notable changes to this project will be documented in this file.
We follow the [Semantic Versioning 2.0.0](http://semver.org/) format.

## Unreleased

### Fixed
- [PATCH] **cf-core:** Fix improper usage of `:not` to target non-nav `li` elements.
- [PATCH] **cf-core:** Remove `margin-bottom` from last-child `li` elements.
- [PATCH] **cf-layout** - Fixed a bug where columns nested 2 levels deep in a
  large-gutter modifier gain the extra wide gutters.
- [PATCH] **cf-layout:** Remove `block` borders when `__flush` modifiers are also applied.

### Changed
- [PATCH] **cf-layout:** Hero updates:
  - Use new breakpoint variables
  - Subheading should not be medium on smaller screens
  - CTA links should match size and weight of subheading
  - Margin between subheading and CTA is 30px


## 3.1.1 - 2016-01-04

### Changed
- **capital-framework:** Improved contributing docs in readme.


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
