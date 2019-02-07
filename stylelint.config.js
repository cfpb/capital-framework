/* NOTES:
font-family-no-missing-generic-family-keyword -
  Turned off because there isn't a generic font for the CFPB icons.

function-parentheses-space-inside -
  Custom setting that differs from stylelint-config-standard.

rule-empty-line-before -
  Custom setting that differs from stylelint-config-standard.

max-empty-lines -
  Set to 2 since we have existing two line breaks in place. Could be removed.

no-descending-specificity -
  Turned off, but probably shouldn't be.
  TODO: Turn on this rule and see if issues can be fixed.

selector-list-comma-newline-after -
  Turned off because it wraps arguments less mixin declarations.
*/
module.exports = {
  extends: 'stylelint-config-standard',
  syntax: 'less',
  rules: {
    'font-family-no-missing-generic-family-keyword': null,
    'function-parentheses-space-inside': 'always',
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: 'first-nested',
        ignore: [ 'after-comment', 'inside-block' ]
      }
    ],
    'indentation': [ 4 ],
    'max-empty-lines': 2,
    'no-descending-specificity': null,
    'selector-list-comma-newline-after': null
  }
}
