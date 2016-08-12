The cf-icon component provides the custom icon font for Capital Framework.
This component can be used by itself, but is designed to work with Capital Framework.

> NOTE: If you use `cf-icons.less` directly,
  be sure to run the file through
  [Autoprefixer](https://github.com/postcss/autoprefixer),
  or your compiled Capital Framework CSS will
  not work perfectly in older browsers.

## Table of contents

- [Variables](#variables)
    - [Settings](#settings)
- [The basics](#the-basics)
- [Helper classes](#helper-classes)
    - [Icon sizes](#Icon-sizes)
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

Theme variables for setting the color of sizes throughout the projects.
Overwrite them in your own project by duplicating the variable `@key: value`.

### Settings

```
@cf-icon-prefix:                cf-icon;
@cf-icon-path:                  'fonts';
@cf-icon-ie7-support:           true;
@cf-icon-border-color:          #eee;
```

#### IE7 support

IE7 support is added by using dynamic properties (CSS expressions).

To turn off IE7 support for performance reasons,
simply set

```
@cf-icon-ie7-support: false;
```


## The basics

The cf-icon-prefix class applies all shared icon styles including the font family.
By default, this class will be named `cf-icon` but it can be changed in the settings.
All icons must use two classes, one for this base class and another to set the font character. For example:

```
<span class='cf-icon cf-icon-left'></span>
```

Please use the span element instead of the i element.
This avoids font family cascading conflicts when using an italic webfont
on i elements and then another font for the icons.
Note that this issue only pops up in older versions of Internet Explorer.


## Helpers

### Icon sizes

#### Large icon size

<span class="cf-icon cf-icon-money cf-icon__lg"></span>

```
<span class="cf-icon cf-icon-money cf-icon__lg"></span>
```

#### 2x icon size

<span class="cf-icon cf-icon-money cf-icon__2x"></span>

```
<span class="cf-icon cf-icon-money cf-icon__2x"></span>
```

#### 3x icon size

<span class="cf-icon cf-icon-money cf-icon__3x"></span>

```
<span class="cf-icon cf-icon-money cf-icon__3x"></span>
```

#### 4x icon size

<span class="cf-icon cf-icon-money cf-icon__4x"></span>

```
<span class="cf-icon cf-icon-money cf-icon__4x"></span>
```

#### 5x icon size

<span class="cf-icon cf-icon-money cf-icon__5x"></span>

```
<span class="cf-icon cf-icon-money cf-icon__5x"></span>
```

### Mixins

MIT Licensed by Font Awesome

#### Icon rotation mixin

```
.@{cf-icon-prefix}__rotate-90  { .cf-icon__rotate(90deg, 1);  }
```

First parameter is `@degrees`.
Second parameter is `@rotation`.

#### Icon flip mixin

```
.@{cf-icon-prefix}__flip-horizontal { .cf-icon__flip(-1, 1, 0); }
.@{cf-icon-prefix}__flip-vertical   { .cf-icon__flip(1, -1, 2); }
```

First parameter is for number of horizontal flips
Second parameter is for number of vertical flips
Third parameter is for rotation

### Modified icons

MIT Licensed by Font Awesome

#### Bordered icons

<span class="cf-icon cf-icon-update cf-icon__border"></span>

```
<span class="cf-icon cf-icon-update cf-icon__border"></span>
```

Border color set by `@cf-icon-border-color`

#### Rotated icons

<span class="cf-icon cf-icon-update cf-icon__rotate-90"></span>
<span class="cf-icon cf-icon-update cf-icon__rotate-180"></span>
<span class="cf-icon cf-icon-update cf-icon__rotate-270"></span>

```
<span class="cf-icon cf-icon-update cf-icon__rotate-90"></span>
<span class="cf-icon cf-icon-update cf-icon__rotate-180"></span>
<span class="cf-icon cf-icon-update cf-icon__rotate-270"></span>
```

#### Flipped icons

<span class="cf-icon cf-icon-update cf-icon__flip-horizontal"></span>
<span class="cf-icon cf-icon-update cf-icon__flip-vertical"></span>

```
<span class="cf-icon cf-icon-update cf-icon__flip-horizontal"></span>
<span class="cf-icon cf-icon-update cf-icon__flip-vertical"></span>
```

### Animated icons

MIT Licensed by Font Awesome

#### Spinning icons

<span class="cf-icon cf-icon-update cf-icon__spin"></span>

```
<span class="cf-icon cf-icon-update cf-icon__spin"></span>
```

#### Pulsing icons

<span class="cf-icon cf-icon-update cf-icon__pulse"></span>

```
<span class="cf-icon cf-icon-update cf-icon__pulse"></span>
```

#### Flipped icons

<span class="cf-icon cf-icon-phone cf-icon__flip-horizontal"></span>
<span class="cf-icon cf-icon-phone cf-icon__flip-vertical"></span>

```
<span class="cf-icon cf-icon-phone cf-icon__flip-horizontal"></span>
<span class="cf-icon cf-icon-phone cf-icon__flip-vertical"></span>
```

## Icons

### Navigation icons

#### Left

<span class="cf-icon cf-icon-left"></span>
<span class="cf-icon cf-icon-left-round"></span>

```
<span class="cf-icon cf-icon-left"></span>
<span class="cf-icon cf-icon-left-round"></span>
```

#### Right

<span class="cf-icon cf-icon-right"></span>
<span class="cf-icon cf-icon-right-round"></span>


```
<span class="cf-icon cf-icon-right"></span>
<span class="cf-icon cf-icon-right-round"></span>
```

#### Up

<span class="cf-icon cf-icon-up"></span>
<span class="cf-icon cf-icon-up-round"></span>

```
<span class="cf-icon cf-icon-up"></span>
<span class="cf-icon cf-icon-up-round"></span>
```

#### Down

<span class="cf-icon cf-icon-down"></span>
<span class="cf-icon cf-icon-down-round"></span>

```
<span class="cf-icon cf-icon-down"></span>
<span class="cf-icon cf-icon-down-round"></span>
```

#### Arrow left

<span class="cf-icon cf-icon-arrow-left"></span>
<span class="cf-icon cf-icon-arrow-left-round"></span>

```
<span class="cf-icon cf-icon-arrow-left"></span>
<span class="cf-icon cf-icon-arrow-left-round"></span>
```

#### Arrow right

<span class="cf-icon cf-icon-arrow-right"></span>
<span class="cf-icon cf-icon-arrow-right-round"></span>

```
<span class="cf-icon cf-icon-arrow-right"></span>
<span class="cf-icon cf-icon-arrow-right-round"></span>
```

#### Arrow up

<span class="cf-icon cf-icon-arrow-up"></span>
<span class="cf-icon cf-icon-arrow-up-round"></span>

```
<span class="cf-icon cf-icon-arrow-up"></span>
<span class="cf-icon cf-icon-arrow-up-round"></span>
```

#### Arrow down

<span class="cf-icon cf-icon-arrow-down"></span>
<span class="cf-icon cf-icon-arrow-down-round"></span>

```
<span class="cf-icon cf-icon-arrow-down"></span>
<span class="cf-icon cf-icon-arrow-down-round"></span>
```

### Status icons

#### Approved

<span class="cf-icon cf-icon-approved"></span>
<span class="cf-icon cf-icon-approved-round"></span>

```
<span class="cf-icon cf-icon-approved"></span>
<span class="cf-icon cf-icon-approved-round"></span>
```

#### Error

<span class="cf-icon cf-icon-error"></span>
<span class="cf-icon cf-icon-error-round"></span>

```
<span class="cf-icon cf-icon-error"></span>
<span class="cf-icon cf-icon-error-round"></span>
```

#### Help

<span class="cf-icon cf-icon-help"></span>
<span class="cf-icon cf-icon-help-round"></span>

```
<span class="cf-icon cf-icon-help"></span>
<span class="cf-icon cf-icon-help-round"></span>
```

#### Delete

<span class="cf-icon cf-icon-delete"></span>
<span class="cf-icon cf-icon-delete-round"></span>

```
<span class="cf-icon cf-icon-delete"></span>
<span class="cf-icon cf-icon-delete-round"></span>
```

#### Plus

<span class="cf-icon cf-icon-plus"></span>
<span class="cf-icon cf-icon-plus-round"></span>

```
<span class="cf-icon cf-icon-plus"></span>
<span class="cf-icon cf-icon-plus-round"></span>
```

#### Minus

<span class="cf-icon cf-icon-minus"></span>
<span class="cf-icon cf-icon-minus-round"></span>

```
<span class="cf-icon cf-icon-minus"></span>
<span class="cf-icon cf-icon-minus-round"></span>
```

#### Update

<span class="cf-icon cf-icon-update"></span>
<span class="cf-icon cf-icon-update-round"></span>

```
<span class="cf-icon cf-icon-update"></span>
<span class="cf-icon cf-icon-update-round"></span>
```

### Social icons

#### YouTube

<span class="cf-icon cf-icon-youtube"></span>
<span class="cf-icon cf-icon-youtube-square"></span>

```
<span class="cf-icon cf-icon-youtube"></span>
<span class="cf-icon cf-icon-youtube-square"></span>
```

#### Linkedin

<span class="cf-icon cf-icon-linkedin"></span>
<span class="cf-icon cf-icon-linkedin-square"></span>

```
<span class="cf-icon cf-icon-linkedin"></span>
<span class="cf-icon cf-icon-linkedin-square"></span>
```

#### Facebook

<span class="cf-icon cf-icon-facebook"></span>
<span class="cf-icon cf-icon-facebook-square"></span>

```
<span class="cf-icon cf-icon-facebook"></span>
<span class="cf-icon cf-icon-facebook-square"></span>
```

#### Flickr

<span class="cf-icon cf-icon-flickr"></span>
<span class="cf-icon cf-icon-flickr-square"></span>

```
<span class="cf-icon cf-icon-flickr"></span>
<span class="cf-icon cf-icon-flickr-square"></span>
```

#### Twitter

<span class="cf-icon cf-icon-twitter"></span>
<span class="cf-icon cf-icon-twitter-square"></span>

```
<span class="cf-icon cf-icon-twitter"></span>
<span class="cf-icon cf-icon-twitter-square"></span>
```

#### GitHub

<span class="cf-icon cf-icon-github"></span>
<span class="cf-icon cf-icon-github-square"></span>

```
<span class="cf-icon cf-icon-github"></span>
<span class="cf-icon cf-icon-github-square"></span>
```

#### Email

<span class="cf-icon cf-icon-email-social"></span>
<span class="cf-icon cf-icon-email-social-square"></span>

```
<span class="cf-icon cf-icon-email-social"></span>
<span class="cf-icon cf-icon-email-social-square"></span>
```

### Document icons

#### Document

<span class="cf-icon cf-icon-document"></span>
<span class="cf-icon cf-icon-document-round"></span>

```
<span class="cf-icon cf-icon-document"></span>
<span class="cf-icon cf-icon-document-round"></span>
```

#### PDF

<span class="cf-icon cf-icon-pdf"></span>
<span class="cf-icon cf-icon-pdf-round"></span>
```
<span class="cf-icon cf-icon-pdf"></span>
<span class="cf-icon cf-icon-pdf-round"></span>
```

#### Upload

<span class="cf-icon cf-icon-upload"></span>
<span class="cf-icon cf-icon-upload-round"></span>

```
<span class="cf-icon cf-icon-upload"></span>
<span class="cf-icon cf-icon-upload-round"></span>
```

#### Download

<span class="cf-icon cf-icon-download"></span>
<span class="cf-icon cf-icon-download-round"></span>

```
<span class="cf-icon cf-icon-download"></span>
<span class="cf-icon cf-icon-download-round"></span>
```

#### Copy

<span class="cf-icon cf-icon-copy"></span>
<span class="cf-icon cf-icon-copy-round"></span>

```
<span class="cf-icon cf-icon-copy"></span>
<span class="cf-icon cf-icon-copy-round"></span>
```

#### Edit

<span class="cf-icon cf-icon-edit"></span>
<span class="cf-icon cf-icon-edit-round"></span>

```
<span class="cf-icon cf-icon-edit"></span>
<span class="cf-icon cf-icon-edit-round"></span>
```

#### Attach

<span class="cf-icon cf-icon-attach"></span>
<span class="cf-icon cf-icon-attach-round"></span>

```
<span class="cf-icon cf-icon-attach"></span>
<span class="cf-icon cf-icon-attach-round"></span>
```

#### Print

<span class="cf-icon cf-icon-print"></span>
<span class="cf-icon cf-icon-print-round"></span>

```
<span class="cf-icon cf-icon-print"></span>
<span class="cf-icon cf-icon-print-round"></span>
```

#### Save

<span class="cf-icon cf-icon-save"></span>
<span class="cf-icon cf-icon-save-round"></span>

```
<span class="cf-icon cf-icon-save"></span>
<span class="cf-icon cf-icon-save-round"></span>
```

#### Appendix

<span class="cf-icon cf-icon-appendix"></span>
<span class="cf-icon cf-icon-appendix-round"></span>

```
<span class="cf-icon cf-icon-appendix"></span>
<span class="cf-icon cf-icon-appendix-round"></span>
```

#### Supplement

<span class="cf-icon cf-icon-supplement"></span>
<span class="cf-icon cf-icon-supplement-round"></span>

```
<span class="cf-icon cf-icon-supplement"></span>
<span class="cf-icon cf-icon-supplement-round"></span>
```

#### RSS

<span class="cf-icon cf-icon-rss"></span>
<span class="cf-icon cf-icon-rss-round"></span>

```
<span class="cf-icon cf-icon-rss"></span>
<span class="cf-icon cf-icon-rss-round"></span>
```

### Financial product icons

#### Bank account

<span class="cf-icon cf-icon-bank-account"></span>
<span class="cf-icon cf-icon-bank-account-round"></span>

```
<span class="cf-icon cf-icon-bank-account"></span>
<span class="cf-icon cf-icon-bank-account-round"></span>
```

#### Credit card

<span class="cf-icon cf-icon-credit-card"></span>
<span class="cf-icon cf-icon-credit-card-round"></span>

```
<span class="cf-icon cf-icon-credit-card"></span>
<span class="cf-icon cf-icon-credit-card-round"></span>
```

#### Loan

<span class="cf-icon cf-icon-loan"></span>
<span class="cf-icon cf-icon-loan-round"></span>

```
<span class="cf-icon cf-icon-loan"></span>
<span class="cf-icon cf-icon-loan-round"></span>
```

#### Money transfer

<span class="cf-icon cf-icon-money-transfer"></span>
<span class="cf-icon cf-icon-money-transfer-round"></span>

```
<span class="cf-icon cf-icon-money-transfer"></span>
<span class="cf-icon cf-icon-money-transfer-round"></span>
```

#### Mortgage

<span class="cf-icon cf-icon-mortgage"></span>
<span class="cf-icon cf-icon-mortgage-round"></span>

```
<span class="cf-icon cf-icon-mortgage"></span>
<span class="cf-icon cf-icon-mortgage-round"></span>
```

#### Debt collection

<span class="cf-icon cf-icon-debt-collection"></span>
<span class="cf-icon cf-icon-debt-collection-round"></span>

```
<span class="cf-icon cf-icon-debt-collection"></span>
<span class="cf-icon cf-icon-debt-collection-round"></span>
```

#### Credit report

<span class="cf-icon cf-icon-credit-report"></span>
<span class="cf-icon cf-icon-credit-report-round"></span>

```
<span class="cf-icon cf-icon-credit-report"></span>
<span class="cf-icon cf-icon-credit-report-round"></span>
```

#### Money

<span class="cf-icon cf-icon-money"></span>
<span class="cf-icon cf-icon-money-round"></span>

```
<span class="cf-icon cf-icon-money"></span>
<span class="cf-icon cf-icon-money-round"></span>
```

#### Quick cash

<span class="cf-icon cf-icon-quick-cash"></span>
<span class="cf-icon cf-icon-quick-cash-round"></span>

```
<span class="cf-icon cf-icon-quick-cash"></span>
<span class="cf-icon cf-icon-quick-cash-round"></span>
```

#### Contract

<span class="cf-icon cf-icon-contract"></span>
<span class="cf-icon cf-icon-contract-round"></span>

```
<span class="cf-icon cf-icon-contract"></span>
<span class="cf-icon cf-icon-contract-round"></span>
```

#### Complaint

<span class="cf-icon cf-icon-complaint"></span>
<span class="cf-icon cf-icon-complaint-round"></span>

```
<span class="cf-icon cf-icon-complaint"></span>
<span class="cf-icon cf-icon-complaint-round"></span>
```

#### Getting a credit card

<span class="cf-icon cf-icon-getting-credit-card"></span>
<span class="cf-icon cf-icon-getting-credit-card-round"></span>

```
<span class="cf-icon cf-icon-getting-credit-card"></span>
<span class="cf-icon cf-icon-getting-credit-card-round"></span>
```

#### Buying a car

<span class="cf-icon cf-icon-buying-car"></span>
<span class="cf-icon cf-icon-buying-car-round"></span>

```
<span class="cf-icon cf-icon-buying-car"></span>
<span class="cf-icon cf-icon-buying-car-round"></span>
```

#### Paying for college

<span class="cf-icon cf-icon-paying-college"></span>
<span class="cf-icon cf-icon-paying-college-round"></span>

```
<span class="cf-icon cf-icon-paying-college"></span>
<span class="cf-icon cf-icon-paying-college-round"></span>
```

#### Owning a home

<span class="cf-icon cf-icon-owning-home"></span>
<span class="cf-icon cf-icon-owning-home-round"></span>

```
<span class="cf-icon cf-icon-owning-home"></span>
<span class="cf-icon cf-icon-owning-home-round"></span>
```

#### Debt

<span class="cf-icon cf-icon-debt"></span>
<span class="cf-icon cf-icon-debt-round"></span>

```
<span class="cf-icon cf-icon-debt"></span>
<span class="cf-icon cf-icon-debt-round"></span>
```

#### Building credit

<span class="cf-icon cf-icon-building-credit"></span>
<span class="cf-icon cf-icon-building-credit-round"></span>

```
<span class="cf-icon cf-icon-building-credit"></span>
<span class="cf-icon cf-icon-building-credit-round"></span>
```

#### Prepaid cards

<span class="cf-icon cf-icon-prepaid-cards"></span>
<span class="cf-icon cf-icon-prepaid-cards-round"></span>

```
<span class="cf-icon cf-icon-prepaid-cards"></span>
<span class="cf-icon cf-icon-prepaid-cards-round"></span>
```

#### Payday loan

<span class="cf-icon cf-icon-payday-loan"></span>
<span class="cf-icon cf-icon-payday-loan-round"></span>

```
<span class="cf-icon cf-icon-payday-loan"></span>
<span class="cf-icon cf-icon-payday-loan-round"></span>
```

#### Retirement

<span class="cf-icon cf-icon-retirement"></span>
<span class="cf-icon cf-icon-retirement-round"></span>

```
<span class="cf-icon cf-icon-retirement"></span>
<span class="cf-icon cf-icon-retirement-round"></span>
```


### Web icons

#### User

<span class="cf-icon cf-icon-user"></span>
<span class="cf-icon cf-icon-user-round"></span>

```
<span class="cf-icon cf-icon-user"></span>
<span class="cf-icon cf-icon-user-round"></span>
```

#### WiFi

<span class="cf-icon cf-icon-wifi"></span>
<span class="cf-icon cf-icon-wifi-round"></span>

```
<span class="cf-icon cf-icon-wifi"></span>
<span class="cf-icon cf-icon-wifi-round"></span>
```

#### Search

<span class="cf-icon cf-icon-search"></span>
<span class="cf-icon cf-icon-search-round"></span>

```
<span class="cf-icon cf-icon-search"></span>
<span class="cf-icon cf-icon-search-round"></span>
```

#### Share

<span class="cf-icon cf-icon-share"></span>
<span class="cf-icon cf-icon-share-round"></span>

```
<span class="cf-icon cf-icon-share"></span>
<span class="cf-icon cf-icon-share-round"></span>
```

#### Link

<span class="cf-icon cf-icon-link"></span>
<span class="cf-icon cf-icon-link-round"></span>

```
<span class="cf-icon cf-icon-link"></span>
<span class="cf-icon cf-icon-link-round"></span>
```

#### External link

<span class="cf-icon cf-icon-external-link"></span>
<span class="cf-icon cf-icon-external-link-round"></span>

```
<span class="cf-icon cf-icon-external-link"></span>
<span class="cf-icon cf-icon-external-link-round"></span>
```

#### Audio mute

<span class="cf-icon cf-icon-audio-mute"></span>
<span class="cf-icon cf-icon-audio-mute-round"></span>

```
<span class="cf-icon cf-icon-audio-mute"></span>
<span class="cf-icon cf-icon-audio-mute-round"></span>
```

#### Audio low

<span class="cf-icon cf-icon-audio-low"></span>
<span class="cf-icon cf-icon-audio-low-round"></span>

```
<span class="cf-icon cf-icon-audio-low"></span>
<span class="cf-icon cf-icon-audio-low-round"></span>
```

#### Audio medium

<span class="cf-icon cf-icon-audio-medium"></span>
<span class="cf-icon cf-icon-audio-medium-round"></span>

```
<span class="cf-icon cf-icon-audio-medium"></span>
<span class="cf-icon cf-icon-audio-medium-round"></span>
```

#### Audio max

<span class="cf-icon cf-icon-audio-max"></span>
<span class="cf-icon cf-icon-audio-max-round"></span>

```
<span class="cf-icon cf-icon-audio-max"></span>
<span class="cf-icon cf-icon-audio-max-round"></span>
```

#### Favorite

<span class="cf-icon cf-icon-favorite"></span>
<span class="cf-icon cf-icon-favorite-round"></span>

```
<span class="cf-icon cf-icon-favorite"></span>
<span class="cf-icon cf-icon-favorite-round"></span>
```

#### Unfavorite

<span class="cf-icon cf-icon-unfavorite"></span>
<span class="cf-icon cf-icon-unfavorite-round"></span>

```
<span class="cf-icon cf-icon-unfavorite"></span>
<span class="cf-icon cf-icon-unfavorite-round"></span>
```

#### Bookmark

<span class="cf-icon cf-icon-bookmark"></span>
<span class="cf-icon cf-icon-bookmark-round"></span>

```
<span class="cf-icon cf-icon-bookmark"></span>
<span class="cf-icon cf-icon-bookmark-round"></span>
```

#### Unbookmark

<span class="cf-icon cf-icon-unbookmark"></span>
<span class="cf-icon cf-icon-unbookmark-round"></span>

```
<span class="cf-icon cf-icon-unbookmark"></span>
<span class="cf-icon cf-icon-unbookmark-round"></span>
```

#### Settings

<span class="cf-icon cf-icon-settings"></span>
<span class="cf-icon cf-icon-settings-round"></span>

```
<span class="cf-icon cf-icon-settings"></span>
<span class="cf-icon cf-icon-settings-round"></span>
```

#### Menu

<span class="cf-icon cf-icon-menu"></span>
<span class="cf-icon cf-icon-menu-round"></span>

```
<span class="cf-icon cf-icon-menu"></span>
<span class="cf-icon cf-icon-menu-round"></span>
```

#### Lock

<span class="cf-icon cf-icon-lock"></span>
<span class="cf-icon cf-icon-lock-round"></span>

```
<span class="cf-icon cf-icon-lock"></span>
<span class="cf-icon cf-icon-lock-round"></span>
```

#### Unlock

<span class="cf-icon cf-icon-unlock"></span>
<span class="cf-icon cf-icon-unlock-round"></span>

```
<span class="cf-icon cf-icon-unlock"></span>
<span class="cf-icon cf-icon-unlock-round"></span>
```

#### Clock

<span class="cf-icon cf-icon-clock"></span>
<span class="cf-icon cf-icon-clock-round"></span>

```
<span class="cf-icon cf-icon-clock"></span>
<span class="cf-icon cf-icon-clock-round"></span>
```

#### Chart

<span class="cf-icon cf-icon-chart"></span>
<span class="cf-icon cf-icon-chart-round"></span>

```
<span class="cf-icon cf-icon-chart"></span>
<span class="cf-icon cf-icon-chart-round"></span>
```

#### Play

<span class="cf-icon cf-icon-play"></span>
<span class="cf-icon cf-icon-play-round"></span>

```
<span class="cf-icon cf-icon-play"></span>
<span class="cf-icon cf-icon-play-round"></span>
```

#### History

<span class="cf-icon cf-icon-history"></span>
<span class="cf-icon cf-icon-history-round"></span>

```
<span class="cf-icon cf-icon-history"></span>
<span class="cf-icon cf-icon-history-round"></span>
```

#### Table of contents

<span class="cf-icon cf-icon-table-of-contents"></span>
<span class="cf-icon cf-icon-table-of-contents-round"></span>

```
<span class="cf-icon cf-icon-table-of-contents"></span>
<span class="cf-icon cf-icon-table-of-contents-round"></span>
```

#### Newspaper

<span class="cf-icon cf-icon-newspaper"></span>
<span class="cf-icon cf-icon-newspaper-round"></span>

```
<span class="cf-icon cf-icon-newspaper"></span>
<span class="cf-icon cf-icon-newspaper-round"></span>
```

#### Microphone

<span class="cf-icon cf-icon-microphone"></span>
<span class="cf-icon cf-icon-microphone-round"></span>

```
<span class="cf-icon cf-icon-microphone"></span>
<span class="cf-icon cf-icon-microphone-round"></span>
```

#### Bullhorn

<span class="cf-icon cf-icon-bullhorn"></span>
<span class="cf-icon cf-icon-bullhorn-round"></span>

```
<span class="cf-icon cf-icon-bullhorn"></span>
<span class="cf-icon cf-icon-bullhorn-round"></span>
```

#### Double quote

<span class="cf-icon cf-icon-double-quote"></span>
<span class="cf-icon cf-icon-double-quote-round"></span>

```
<span class="cf-icon cf-icon-double-quote"></span>
<span class="cf-icon cf-icon-double-quote-round"></span>
```

#### Speech bubble

<span class="cf-icon cf-icon-speech-bubble"></span>
<span class="cf-icon cf-icon-speech-bubble-round"></span>

```
<span class="cf-icon cf-icon-speech-bubble"></span>
<span class="cf-icon cf-icon-speech-bubble-round"></span>
```

#### Information

<span class="cf-icon cf-icon-information"></span>
<span class="cf-icon cf-icon-information-round"></span>

```
<span class="cf-icon cf-icon-information"></span>
<span class="cf-icon cf-icon-information-round"></span>
```

#### Lightbulb

<span class="cf-icon cf-icon-lightbulb"></span>
<span class="cf-icon cf-icon-lightbulb-round"></span>

```
<span class="cf-icon cf-icon-lightbulb"></span>
<span class="cf-icon cf-icon-lightbulb-round"></span>
```

#### Dialogue

<span class="cf-icon cf-icon-dialogue"></span>
<span class="cf-icon cf-icon-dialogue-round"></span>

```
<span class="cf-icon cf-icon-dialogue"></span>
<span class="cf-icon cf-icon-dialogue-round"></span>
```

#### Date

<span class="cf-icon cf-icon-date"></span>
<span class="cf-icon cf-icon-date-round"></span>

```
<span class="cf-icon cf-icon-date"></span>
<span class="cf-icon cf-icon-date-round"></span>
```

#### Closing quote

<span class="cf-icon cf-icon-closing-quote"></span>
<span class="cf-icon cf-icon-closing-quote-round"></span>

```
<span class="cf-icon cf-icon-closing-quote"></span>
<span class="cf-icon cf-icon-closing-quote-round"></span>
```

#### Livestream

<span class="cf-icon cf-icon-livestream"></span>
<span class="cf-icon cf-icon-livestream-round"></span>

```
<span class="cf-icon cf-icon-livestream"></span>
<span class="cf-icon cf-icon-livestream-round"></span>
```

#### Parents

<span class="cf-icon cf-icon-parents"></span>
<span class="cf-icon cf-icon-parents-round"></span>

```
<span class="cf-icon cf-icon-parents"></span>
<span class="cf-icon cf-icon-parents-round"></span>
```

#### Servicemembers

<span class="cf-icon cf-icon-servicemembers"></span>
<span class="cf-icon cf-icon-servicemembers-round"></span>

```
<span class="cf-icon cf-icon-servicemembers"></span>
<span class="cf-icon cf-icon-servicemembers-round"></span>
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
