The cf-icon component provides the custom icon font for Capital Framework.
This component can be used by itself, but is designed to work with Capital
Framework.

> NOTE: If you use `cf-icons.less` directly,
  be sure to run the file through
  [Autoprefixer](https://github.com/postcss/autoprefixer),
  or your compiled Capital Framework CSS will
  not work perfectly in older browsers.


## Table of contents

- [Variables](#variables)
    - [Color variables](#color-variables)
    - [Icon generation variables](#icon-generation-variables)
- [The basics](#the-basics)
- [Helpers](#helpers)
    - [Icon sizes](#icon-sizes)
    - [Mixins](#mixins)
    - [Modified icons](#modified-icons)
    - [Animated icons](#animated-icons)
- [Icons](#icons)
    - [Navigation icons](#navigation-icons)
    - [Status icons](#status-icons)
    - [Social icons](#social-icons)
    - [Document icons](#document-icons)
    - [Financial product icons](#financial-product-icons)
    - [Web icons](#web-icons)
- [Icon character variables](#icon-character-variables)


## Variables

Theme variables for setting the color and sizes throughout the project.
Overwrite them in your own project by duplicating the variable `@key: value`.

### Color variables

Color variables referenced in comments are from [cf-core cf-brand-colors.less](https://github.com/cfpb/capital-framework/blob/master/src/cf-core/src/cf-brand-colors.less).


```
@cf-icon-border-color:          @gray;
```

## Icon generation variables

```
@cf-icon-prefix:                cf-icon;
@cf-icon-path:                  'fonts';
```

## The basics

The class defined by the @cf-icon-prefix variable applies all shared icon
styles including the font family. By default, this class will be named
`cf-icon` but it can be changed in the settings. All icons must use three
classes, one for the base class, one to select the desired icon, and one
for the chosen pseudo-element. For example:

```
<span class="cf-icon
             cf-icon-money
             cf-icon__before"></span>
```

It's preferred to combine the icon classes with an existing element, but if
it's necessary to use an empty element, please use the `span` element instead
of the `i` element. This avoids font family cascading conflicts when using an
italic webfont on `i` elements and then another font for the icons.
_Note that this issue only pops up in older versions of Internet Explorer._


## Helpers

### Icon sizes


#### Large icon size

<span class="cf-icon
             cf-icon-money
             cf-icon__before
             cf-icon__lg"></span>

```
<span class="cf-icon
             cf-icon-money
             cf-icon__before
             cf-icon__lg"></span>
```

#### 2x icon size

<span class="cf-icon
             cf-icon-money
             cf-icon__before
             cf-icon__2x"></span>

```
<span class="cf-icon
             cf-icon-money
             cf-icon__before
             cf-icon__2x"></span>
```

#### 3x icon size

<span class="cf-icon
             cf-icon-money
             cf-icon__before
             cf-icon__3x"></span>

```
<span class="cf-icon
             cf-icon-money
             cf-icon__before
             cf-icon__3x"></span>
```

#### 4x icon size

<span class="cf-icon
             cf-icon-money
             cf-icon__before
             cf-icon__4x"></span>

```
<span class="cf-icon
             cf-icon-money
             cf-icon__before
             cf-icon__4x"></span>
```

#### 5x icon size

<span class="cf-icon
             cf-icon-money
             cf-icon__before
             cf-icon__5x"></span>

```
<span class="cf-icon
             cf-icon-money
             cf-icon__before
             cf-icon__5x"></span>
```

### Mixins

MIT Licensed by Font Awesome

#### Icon rotation mixin

```
.@{cf-icon-prefix}__rotate-90  { .cf-icon__rotate(90deg, 1);  }
```

- First parameter is `@degrees`.
- Second parameter is `@rotation`.

#### Icon flip mixin

```
.@{cf-icon-prefix}__flip-horizontal { .cf-icon__flip(-1, 1, 0); }
.@{cf-icon-prefix}__flip-vertical   { .cf-icon__flip(1, -1, 2); }
```

- First parameter is for number of horizontal flips.
- Second parameter is for number of vertical flips.
- Third parameter is for rotation.

### Modified icons

MIT Licensed by Font Awesome

#### Bordered icons

<span class="cf-icon
             cf-icon-update
             cf-icon__before
             cf-icon__border"></span>
```
<span class="cf-icon
             cf-icon-update
             cf-icon__before
             cf-icon__border"></span>
```

Border color set by `@cf-icon-border-color`

#### Rotated icons

<span class="cf-icon
             cf-icon-update
             cf-icon__before
             cf-icon__rotate-90"></span>
<span class="cf-icon
             cf-icon-update
             cf-icon__before
             cf-icon__rotate-180"></span>
<span class="cf-icon
             cf-icon-update
             cf-icon__before
             cf-icon__rotate-270"></span>
```
<span class="cf-icon
             cf-icon-update
             cf-icon__before
             cf-icon__rotate-90"></span>
<span class="cf-icon
             cf-icon-update
             cf-icon__before
             cf-icon__rotate-180"></span>
<span class="cf-icon
             cf-icon-update
             cf-icon__before
             cf-icon__rotate-270"></span>
```

#### Flipped icons

<span class="cf-icon
             cf-icon-update
             cf-icon__before
             cf-icon__flip-horizontal"></span>
<span class="cf-icon
             cf-icon-update
             cf-icon__before
             cf-icon__flip-vertical"></span>

```
<span class="cf-icon
             cf-icon-update
             cf-icon__before
             cf-icon__flip-horizontal"></span>
<span class="cf-icon
             cf-icon-update
             cf-icon__before
             cf-icon__flip-vertical"></span>
```

### Animated icons

MIT Licensed by Font Awesome

#### Spinning icons

<span class="cf-icon
             cf-icon-update
             cf-icon__before
             cf-icon__spin"></span>


```
<span class="cf-icon
             cf-icon-update
             cf-icon__before
             cf-icon__spin"></span>

```

#### Pulsing icons

<span class="cf-icon
             cf-icon-update
             cf-icon__before
             cf-icon__pulse"></span>

```
<span class="cf-icon
             cf-icon-update
             cf-icon__before
             cf-icon__pulse"></span>
```


## Icons

### Navigation icons

#### Left

<span class="cf-icon
             cf-icon-left
             cf-icon__before"></span><br>
<span class="cf-icon
             cf-icon-left-round
             cf-icon__before"></span><br>

```
<span class="cf-icon
             cf-icon-left
             cf-icon__before"></span><br>
<span class="cf-icon
             cf-icon-left-round
             cf-icon__before"></span><br>
```

#### Right

<span class="cf-icon
             cf-icon-right
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-right-round
             cf-icon__before"></span>


```
<span class="cf-icon
             cf-icon-right
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-right-round
             cf-icon__before"></span>
```

#### Up

<span class="cf-icon
             cf-icon-up
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-up-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-up
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-up-round
             cf-icon__before"></span>
```

#### Down

<span class="cf-icon
             cf-icon-down
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-down-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-down
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-down-round
             cf-icon__before"></span>
```

#### Arrow left

<span class="cf-icon
             cf-icon-arrow-left
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-arrow-left-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-arrow-left
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-arrow-left-round
             cf-icon__before"></span>
```

#### Arrow right

<span class="cf-icon
             cf-icon-arrow-right
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-arrow-right-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-arrow-right
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-arrow-right-round
             cf-icon__before"></span>
```

#### Arrow up

<span class="cf-icon
             cf-icon-arrow-up
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-arrow-up-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-arrow-up
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-arrow-up-round
             cf-icon__before"></span>
```

#### Arrow down

<span class="cf-icon
             cf-icon-arrow-down
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-arrow-down-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-arrow-down
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-arrow-down-round
             cf-icon__before"></span>
```

### Status icons

#### Approved

<span class="cf-icon
             cf-icon-approved
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-approved-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-approved
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-approved-round
             cf-icon__before"></span>
```

#### Error

<span class="cf-icon
             cf-icon-error
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-error-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-error
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-error-round
             cf-icon__before"></span>
```

#### Help

<span class="cf-icon
             cf-icon-help
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-help-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-help
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-help-round
             cf-icon__before"></span>
```

#### Delete

<span class="cf-icon
             cf-icon-delete
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-delete-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-delete
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-delete-round
             cf-icon__before"></span>
```

#### Plus

<span class="cf-icon
             cf-icon-plus
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-plus-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-plus
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-plus-round
             cf-icon__before"></span>
```

#### Minus

<span class="cf-icon
             cf-icon-minus
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-minus-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-minus
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-minus-round
             cf-icon__before"></span>
```

#### Update

<span class="cf-icon
             cf-icon-update
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-update-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-update
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-update-round
             cf-icon__before"></span>
```

### Social icons

#### YouTube

<span class="cf-icon
             cf-icon-youtube
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-youtube-square
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-youtube
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-youtube-square
             cf-icon__before"></span>
```

#### Linkedin

<span class="cf-icon
             cf-icon-linkedin
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-linkedin-square
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-linkedin
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-linkedin-square
             cf-icon__before"></span>
```

#### Facebook

<span class="cf-icon
             cf-icon-facebook
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-facebook-square
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-facebook
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-facebook-square
             cf-icon__before"></span>
```

#### Flickr

<span class="cf-icon
             cf-icon-flickr
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-flickr-square
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-flickr
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-flickr-square
             cf-icon__before"></span>
```

#### Twitter

<span class="cf-icon
             cf-icon-twitter
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-twitter-square
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-twitter
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-twitter-square
             cf-icon__before"></span>
```

#### GitHub

<span class="cf-icon
             cf-icon-github
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-github-square
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-github
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-github-square
             cf-icon__before"></span>
```

#### Email

<span class="cf-icon
             cf-icon-email-social
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-email-social-square
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-email-social
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-email-social-square
             cf-icon__before"></span>
```

### Document icons

#### Document

<span class="cf-icon
             cf-icon-document
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-document-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-document
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-document-round
             cf-icon__before"></span>
```

#### PDF

<span class="cf-icon
             cf-icon-pdf
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-pdf-round
             cf-icon__before"></span>
```
<span class="cf-icon
             cf-icon-pdf
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-pdf-round
             cf-icon__before"></span>
```

#### Upload

<span class="cf-icon
             cf-icon-upload
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-upload-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-upload
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-upload-round
             cf-icon__before"></span>
```

#### Download

<span class="cf-icon
             cf-icon-download
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-download-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-download
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-download-round
             cf-icon__before"></span>
```

#### Copy

<span class="cf-icon
             cf-icon-copy
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-copy-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-copy
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-copy-round
             cf-icon__before"></span>
```

#### Edit

<span class="cf-icon
             cf-icon-edit
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-edit-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-edit
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-edit-round
             cf-icon__before"></span>
```

#### Attach

<span class="cf-icon
             cf-icon-attach
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-attach-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-attach
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-attach-round
             cf-icon__before"></span>
```

#### Print

<span class="cf-icon
             cf-icon-print
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-print-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-print
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-print-round
             cf-icon__before"></span>
```

#### Save

<span class="cf-icon
             cf-icon-save
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-save-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-save
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-save-round
             cf-icon__before"></span>
```

#### Appendix

<span class="cf-icon
             cf-icon-appendix
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-appendix-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-appendix
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-appendix-round
             cf-icon__before"></span>
```

#### Supplement

<span class="cf-icon
             cf-icon-supplement
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-supplement-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-supplement
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-supplement-round
             cf-icon__before"></span>
```

#### RSS

<span class="cf-icon
             cf-icon-rss
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-rss-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-rss
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-rss-round
             cf-icon__before"></span>
```

### Financial product icons

#### Bank account

<span class="cf-icon
             cf-icon-bank-account
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-bank-account-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-bank-account
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-bank-account-round
             cf-icon__before"></span>
```

#### Credit card

<span class="cf-icon
             cf-icon-credit-card
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-credit-card-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-credit-card
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-credit-card-round
             cf-icon__before"></span>
```

#### Loan

<span class="cf-icon
             cf-icon-loan
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-loan-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-loan
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-loan-round
             cf-icon__before"></span>
```

#### Money transfer

<span class="cf-icon
             cf-icon-money-transfer
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-money-transfer-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-money-transfer
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-money-transfer-round
             cf-icon__before"></span>
```

#### Mortgage

<span class="cf-icon
             cf-icon-mortgage
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-mortgage-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-mortgage
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-mortgage-round
             cf-icon__before"></span>
```

#### Debt collection

<span class="cf-icon
             cf-icon-debt-collection
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-debt-collection-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-debt-collection
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-debt-collection-round
             cf-icon__before"></span>
```

#### Credit report

<span class="cf-icon
             cf-icon-credit-report
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-credit-report-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-credit-report
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-credit-report-round
             cf-icon__before"></span>
```

#### Money

<span class="cf-icon
             cf-icon-money
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-money-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-money
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-money-round
             cf-icon__before"></span>
```

#### Quick cash

<span class="cf-icon
             cf-icon-quick-cash
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-quick-cash-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-quick-cash
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-quick-cash-round
             cf-icon__before"></span>
```

#### Contract

<span class="cf-icon
             cf-icon-contract
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-contract-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-contract
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-contract-round
             cf-icon__before"></span>
```

#### Complaint

<span class="cf-icon
             cf-icon-complaint
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-complaint-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-complaint
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-complaint-round
             cf-icon__before"></span>
```

#### Getting a credit card

<span class="cf-icon
             cf-icon-getting-credit-card
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-getting-credit-card-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-getting-credit-card
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-getting-credit-card-round
             cf-icon__before"></span>
```

#### Buying a car

<span class="cf-icon
             cf-icon-buying-car
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-buying-car-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-buying-car
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-buying-car-round
             cf-icon__before"></span>
```

#### Paying for college

<span class="cf-icon
             cf-icon-paying-college
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-paying-college-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-paying-college
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-paying-college-round
             cf-icon__before"></span>
```

#### Owning a home

<span class="cf-icon
             cf-icon-owning-home
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-owning-home-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-owning-home
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-owning-home-round
             cf-icon__before"></span>
```

#### Debt

<span class="cf-icon
             cf-icon-debt
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-debt-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-debt
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-debt-round
             cf-icon__before"></span>
```

#### Building credit

<span class="cf-icon
             cf-icon-building-credit
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-building-credit-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-building-credit
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-building-credit-round
             cf-icon__before"></span>
```

#### Prepaid cards

<span class="cf-icon
             cf-icon-prepaid-cards
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-prepaid-cards-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-prepaid-cards
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-prepaid-cards-round
             cf-icon__before"></span>
```

#### Payday loan

<span class="cf-icon
             cf-icon-payday-loan
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-payday-loan-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-payday-loan
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-payday-loan-round
             cf-icon__before"></span>
```

#### Retirement

<span class="cf-icon
             cf-icon-retirement
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-retirement-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-retirement
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-retirement-round
             cf-icon__before"></span>
```


### Web icons

#### User

<span class="cf-icon
             cf-icon-user
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-user-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-user
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-user-round
             cf-icon__before"></span>
```

#### WiFi

<span class="cf-icon
             cf-icon-wifi
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-wifi-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-wifi
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-wifi-round
             cf-icon__before"></span>
```

#### Search

<span class="cf-icon
             cf-icon-search
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-search-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-search
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-search-round
             cf-icon__before"></span>
```

#### Share

<span class="cf-icon
             cf-icon-share
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-share-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-share
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-share-round
             cf-icon__before"></span>
```

#### Link

<span class="cf-icon
             cf-icon-link
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-link-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-link
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-link-round
             cf-icon__before"></span>
```

#### External link

<span class="cf-icon
             cf-icon-external-link
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-external-link-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-external-link
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-external-link-round
             cf-icon__before"></span>
```

#### Audio mute

<span class="cf-icon
             cf-icon-audio-mute
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-audio-mute-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-audio-mute
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-audio-mute-round
             cf-icon__before"></span>
```

#### Audio low

<span class="cf-icon
             cf-icon-audio-low
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-audio-low-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-audio-low
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-audio-low-round
             cf-icon__before"></span>
```

#### Audio medium

<span class="cf-icon
             cf-icon-audio-medium
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-audio-medium-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-audio-medium
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-audio-medium-round
             cf-icon__before"></span>
```

#### Audio max

<span class="cf-icon
             cf-icon-audio-max
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-audio-max-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-audio-max
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-audio-max-round
             cf-icon__before"></span>
```

#### Favorite

<span class="cf-icon
             cf-icon-favorite
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-favorite-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-favorite
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-favorite-round
             cf-icon__before"></span>
```

#### Unfavorite

<span class="cf-icon
             cf-icon-unfavorite
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-unfavorite-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-unfavorite
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-unfavorite-round
             cf-icon__before"></span>
```

#### Bookmark

<span class="cf-icon
             cf-icon-bookmark
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-bookmark-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-bookmark
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-bookmark-round
             cf-icon__before"></span>
```

#### Unbookmark

<span class="cf-icon
             cf-icon-unbookmark
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-unbookmark-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-unbookmark
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-unbookmark-round
             cf-icon__before"></span>
```

#### Settings

<span class="cf-icon
             cf-icon-settings
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-settings-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-settings
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-settings-round
             cf-icon__before"></span>
```

#### Menu

<span class="cf-icon
             cf-icon-menu
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-menu-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-menu
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-menu-round
             cf-icon__before"></span>
```

#### Lock

<span class="cf-icon
             cf-icon-lock
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-lock-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-lock
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-lock-round
             cf-icon__before"></span>
```

#### Unlock

<span class="cf-icon
             cf-icon-unlock
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-unlock-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-unlock
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-unlock-round
             cf-icon__before"></span>
```

#### Clock

<span class="cf-icon
             cf-icon-clock
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-clock-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-clock
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-clock-round
             cf-icon__before"></span>
```

#### Chart

<span class="cf-icon
             cf-icon-chart
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-chart-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-chart
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-chart-round
             cf-icon__before"></span>
```

#### Play

<span class="cf-icon
             cf-icon-play
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-play-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-play
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-play-round
             cf-icon__before"></span>
```

#### History

<span class="cf-icon
             cf-icon-history
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-history-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-history
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-history-round
             cf-icon__before"></span>
```

#### Table of contents

<span class="cf-icon
             cf-icon-table-of-contents
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-table-of-contents-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-table-of-contents
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-table-of-contents-round
             cf-icon__before"></span>
```

#### Newspaper

<span class="cf-icon
             cf-icon-newspaper
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-newspaper-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-newspaper
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-newspaper-round
             cf-icon__before"></span>
```

#### Microphone

<span class="cf-icon
             cf-icon-microphone
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-microphone-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-microphone
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-microphone-round
             cf-icon__before"></span>
```

#### Bullhorn

<span class="cf-icon
             cf-icon-bullhorn
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-bullhorn-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-bullhorn
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-bullhorn-round
             cf-icon__before"></span>
```

#### Double quote

<span class="cf-icon
             cf-icon-double-quote
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-double-quote-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-double-quote
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-double-quote-round
             cf-icon__before"></span>
```

#### Speech bubble

<span class="cf-icon
             cf-icon-speech-bubble
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-speech-bubble-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-speech-bubble
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-speech-bubble-round
             cf-icon__before"></span>
```

#### Information

<span class="cf-icon
             cf-icon-information
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-information-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-information
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-information-round
             cf-icon__before"></span>
```

#### Lightbulb

<span class="cf-icon
             cf-icon-lightbulb
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-lightbulb-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-lightbulb
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-lightbulb-round
             cf-icon__before"></span>
```

#### Dialogue

<span class="cf-icon
             cf-icon-dialogue
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-dialogue-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-dialogue
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-dialogue-round
             cf-icon__before"></span>
```

#### Date

<span class="cf-icon
             cf-icon-date
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-date-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-date
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-date-round
             cf-icon__before"></span>
```

#### Closing quote

<span class="cf-icon
             cf-icon-closing-quote
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-closing-quote-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-closing-quote
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-closing-quote-round
             cf-icon__before"></span>
```

#### Livestream

<span class="cf-icon
             cf-icon-livestream
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-livestream-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-livestream
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-livestream-round
             cf-icon__before"></span>
```

#### Parents

<span class="cf-icon
             cf-icon-parents
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-parents-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-parents
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-parents-round
             cf-icon__before"></span>
```

#### Servicemembers

<span class="cf-icon
             cf-icon-servicemembers
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-servicemembers-round
             cf-icon__before"></span>

```
<span class="cf-icon
             cf-icon-servicemembers
             cf-icon__before"></span>
<span class="cf-icon
             cf-icon-servicemembers-round
             cf-icon__before"></span>
```


## Icon character variables

Inspired by Font Awesome, we've added LESS variables for adding icons in
LESS files.

```less
.download-icon:after {
     .cf-icon();
     display: inline-block;
     content: @cf-icon-download;
     width: 1em;
     text-align: right;
}
```
