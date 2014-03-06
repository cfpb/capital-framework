# Making contributions

If you'd like to contribute to Capital Framework, please use the fork-and-pull
model:

1. Fork this repository to your personal account.
2. Create a branch and make your changes.
3. Test the changes locally/in your personal fork.
4. Submit a pull request to open a discussion about your proposed changes.
5. We'll talk about it and decide to merge or request additional changes.


# Governance notes

- Currently there are two project shepherds with the responsibility of
  maintaining the framework and shepherding the change process.
- Anyone can make a pull request to update the framework.
- Bug fixes should have a low barrier to entry requiring only one of the
  project shepherds to review and accept.
- New features or big changes require discussion during the CFPB weekly
  front end developer meetings to raise any potential red flags
  (for example if it needs to be run by the Digital Product Guide).
  Presuming none:
  - Make sure code is reviewed by at least one other front end developer
    (hopefully not a maintainer)
  - The request for change can then be accepted by one of the two project shepherds.
- All submitted code should be run through a linting tool to catch simple errors.
  - We will provide guidance on how to do this, with CFPB code style-specific rules.
- Criteria for vetting third party components for inclusion:
  - Browser compatibility
  - Accessibility
  - Adoption/activity/maturity
  - Ease of applying our styling


# Style guide

In lieu of a formal styleguide, take care to maintain the existing coding style.

A few notes on this...

**Don't go crazy with Less** 
Leverage basic features of Less to take advantage of the efficiency and
maintainability that a CSS preprocessor offers, while hopefully avoiding the
pitfalls of taking it too far and decreasing maintainability.

**Shoot for mobile first declarations**  
In most cases styles should be declared mobile first,
then enhanced with `min-width` media queries.
By doing this we create a base experience that all devices can use
and one that does not require media query support.
(Note that this does not prevent you from creating your desktop styles first
as long as you end up with a stylesheet that is mobile first in the end).


# Licensing

The project is in the public domain within the United States, and
copyright and related rights in the work worldwide are waived through
the [CC0 1.0 Universal public domain dedication][CC0].

All contributions to this project will be released under the CC0
dedication. By submitting a pull request, you are agreeing to comply
with this waiver of copyright interest.

[CC0]: http://creativecommons.org/publicdomain/zero/1.0/
