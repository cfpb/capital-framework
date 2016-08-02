The cf-icon component provides the custom icon font for Capital Framework.
This component can be used by itself, but is designed to work with Capital Framework.

> NOTE: If you use `cf-icons.less` directly,
  be sure to run the file through
  [Autoprefixer](https://github.com/postcss/autoprefixer),
  or your compiled Capital Framework CSS will
  not work perfectly in older browsers.

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

#### IE7 Support

IE7 support is added by using dynamic properties (CSS expressions).

To turn off IE7 support for performance reasons,
simply set @cf-icon-ie7-support to false.


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


## Helper classes for icon sizes

### Large icon size

<span class="cf-icon cf-icon-money cf-icon__lg"></span>

```
<span class="cf-icon cf-icon-money cf-icon__lg"></span>
```

### 2x icon size

<span class="cf-icon cf-icon-money cf-icon__2x"></span>

```
<span class="cf-icon cf-icon-money cf-icon__2x"></span>
```

### 3x icon size

<span class="cf-icon cf-icon-money cf-icon__3x"></span>

```
<span class="cf-icon cf-icon-money cf-icon__3x"></span>
```

### 4x icon size

<span class="cf-icon cf-icon-money cf-icon__4x"></span>

```
<span class="cf-icon cf-icon-money cf-icon__4x"></span>
```

### 5x icon size

<span class="cf-icon cf-icon-money cf-icon__5x"></span>

```
<span class="cf-icon cf-icon-money cf-icon__5x"></span>
```

## Mixin classes

MIT Licensed by Font Awesome

### Icon rotation mixin

```
.@{cf-icon-prefix}__rotate-90  { .cf-icon__rotate(90deg, 1);  }
```

First parameter is @degrees.
Second parameter is @rotation

### Icon flip mixin

```
.@{cf-icon-prefix}__flip-horizontal { .cf-icon__flip(-1, 1, 0); }
.@{cf-icon-prefix}__flip-vertical   { .cf-icon__flip(1, -1, 2); }
```

First parameter is for number of horizontal flips
Second parameter is for number of vertical flips
Third parameter is for rotation

## Helper classes for modified icons

MIT Licensed by Font Awesome

### Bordered icons

<span class="cf-icon cf-icon-update cf-icon__border"></span>

```
<span class="cf-icon cf-icon-update cf-icon__border"></span>
```

Border color set by @cf-icon-border-color

### Rotated icons

<span class="cf-icon cf-icon-update cf-icon__rotate-90"></span>
<span class="cf-icon cf-icon-update cf-icon__rotate-180"></span>
<span class="cf-icon cf-icon-update cf-icon__rotate-270"></span>

```
<span class="cf-icon cf-icon-update cf-icon__rotate-90"></span>
<span class="cf-icon cf-icon-update cf-icon__rotate-180"></span>
<span class="cf-icon cf-icon-update cf-icon__rotate-270"></span>
```

### Flipped icons

<span class="cf-icon cf-icon-update cf-icon__flip-horizontal"></span>
<span class="cf-icon cf-icon-update cf-icon__flip-vertical"></span>

```
<span class="cf-icon cf-icon-update cf-icon__flip-horizontal"></span>
<span class="cf-icon cf-icon-update cf-icon__flip-vertical"></span>
```

## Helper classes for animated icons

MIT Licensed by Font Awesome
### Spinning icons

<span class="cf-icon cf-icon-update cf-icon__spin"></span>

```
<span class="cf-icon cf-icon-update cf-icon__spin"></span>
```

### Pulsing icons
<span class="cf-icon cf-icon-update cf-icon__pulse"></span>

```
<span class="cf-icon cf-icon-update cf-icon__pulse"></span>
```

### Flipped icons

<span class="cf-icon cf-icon-phone cf-icon__flip-horizontal"></span>
<span class="cf-icon cf-icon-phone cf-icon__flip-vertical"></span>

```
<span class="cf-icon cf-icon-phone cf-icon__flip-horizontal"></span>
<span class="cf-icon cf-icon-phone cf-icon__flip-vertical"></span>
```

## Navigation Icons

### left

<span class="cf-icon cf-icon-left"></span>
<span class="cf-icon cf-icon-left-round"></span>

```
<span class="cf-icon cf-icon-left"></span>
<span class="cf-icon cf-icon-left-round"></span>
```

### right
<span class="cf-icon cf-icon-right"></span>
<span class="cf-icon cf-icon-right-round"></span>


```
<span class="cf-icon cf-icon-right"></span>
<span class="cf-icon cf-icon-right-round"></span>
```

### up

<span class="cf-icon cf-icon-up"></span>
<span class="cf-icon cf-icon-up-round"></span>

```
<span class="cf-icon cf-icon-up"></span>
<span class="cf-icon cf-icon-up-round"></span>
```

### down

<span class="cf-icon cf-icon-down"></span>
<span class="cf-icon cf-icon-down-round"></span>

```
<span class="cf-icon cf-icon-down"></span>
<span class="cf-icon cf-icon-down-round"></span>
```

### arrow-left

<span class="cf-icon cf-icon-arrow-left"></span>
<span class="cf-icon cf-icon-arrow-left-round"></span>

```
<span class="cf-icon cf-icon-arrow-left"></span>
<span class="cf-icon cf-icon-arrow-left-round"></span>
```

### arrow-right

<span class="cf-icon cf-icon-arrow-right"></span>
<span class="cf-icon cf-icon-arrow-right-round"></span>

```
<span class="cf-icon cf-icon-arrow-right"></span>
<span class="cf-icon cf-icon-arrow-right-round"></span>
```

### arrow-up

<span class="cf-icon cf-icon-arrow-up"></span>
<span class="cf-icon cf-icon-arrow-up-round"></span>

```
<span class="cf-icon cf-icon-arrow-up"></span>
<span class="cf-icon cf-icon-arrow-up-round"></span>
```

### arrow-down

<span class="cf-icon cf-icon-arrow-down"></span>
<span class="cf-icon cf-icon-arrow-down-round"></span>

```
<span class="cf-icon cf-icon-arrow-down"></span>
<span class="cf-icon cf-icon-arrow-down-round"></span>
```

## Status Icon

### approved

<span class="cf-icon cf-icon-approved"></span>
<span class="cf-icon cf-icon-approved-round"></span>

```
<span class="cf-icon cf-icon-approved"></span>
<span class="cf-icon cf-icon-approved-round"></span>
```

### error

<span class="cf-icon cf-icon-error"></span>
<span class="cf-icon cf-icon-error-round"></span>

```
<span class="cf-icon cf-icon-error"></span>
<span class="cf-icon cf-icon-error-round"></span>
```

### help

<span class="cf-icon cf-icon-help"></span>
<span class="cf-icon cf-icon-help-round"></span>

```
<span class="cf-icon cf-icon-help"></span>
<span class="cf-icon cf-icon-help-round"></span>
```

### delete

<span class="cf-icon cf-icon-delete"></span>
<span class="cf-icon cf-icon-delete-round"></span>

```
<span class="cf-icon cf-icon-delete"></span>
<span class="cf-icon cf-icon-delete-round"></span>
```

### plus

<span class="cf-icon cf-icon-plus"></span>
<span class="cf-icon cf-icon-plus-round"></span>

```
<span class="cf-icon cf-icon-plus"></span>
<span class="cf-icon cf-icon-plus-round"></span>
```

### minus

<span class="cf-icon cf-icon-minus"></span>
<span class="cf-icon cf-icon-minus-round"></span>

```
<span class="cf-icon cf-icon-minus"></span>
<span class="cf-icon cf-icon-minus-round"></span>
```

### update

<span class="cf-icon cf-icon-update"></span>
<span class="cf-icon cf-icon-update-round"></span>

```
<span class="cf-icon cf-icon-update"></span>
<span class="cf-icon cf-icon-update-round"></span>
```
## Social Icons

### youtube

<span class="cf-icon cf-icon-youtube"></span>
<span class="cf-icon cf-icon-youtube-square"></span>

```
<span class="cf-icon cf-icon-youtube"></span>
<span class="cf-icon cf-icon-youtube-square"></span>
```

### linkedin

<span class="cf-icon cf-icon-linkedin"></span>
<span class="cf-icon cf-icon-linkedin-square"></span>

```
<span class="cf-icon cf-icon-linkedin"></span>
<span class="cf-icon cf-icon-linkedin-square"></span>
```

### facebook

<span class="cf-icon cf-icon-facebook"></span>
<span class="cf-icon cf-icon-facebook-square"></span>

```
<span class="cf-icon cf-icon-facebook"></span>
<span class="cf-icon cf-icon-facebook-square"></span>
```

### flickr

<span class="cf-icon cf-icon-flickr"></span>
<span class="cf-icon cf-icon-flickr-square"></span>

```
<span class="cf-icon cf-icon-flickr"></span>
<span class="cf-icon cf-icon-flickr-square"></span>
```

### plus

<span class="cf-icon cf-icon-twitter"></span>
<span class="cf-icon cf-icon-twitter-square"></span>

```
<span class="cf-icon cf-icon-twitter"></span>
<span class="cf-icon cf-icon-twitter-square"></span>
```

### github

<span class="cf-icon cf-icon-github"></span>
<span class="cf-icon cf-icon-github-square"></span>

```
<span class="cf-icon cf-icon-github"></span>
<span class="cf-icon cf-icon-github-square"></span>
```

### email-social

<span class="cf-icon cf-icon-email-social"></span>
<span class="cf-icon cf-icon-email-social-square"></span>

```
<span class="cf-icon cf-icon-email-social"></span>
<span class="cf-icon cf-icon-email-social-square"></span>
```

## Document icons

### document

<span class="cf-icon cf-icon-document"></span>
<span class="cf-icon cf-icon-document-round"></span>

```
<span class="cf-icon cf-icon-document"></span>
<span class="cf-icon cf-icon-document-round"></span>
```

### pdf

<span class="cf-icon cf-icon-pdf"></span>
<span class="cf-icon cf-icon-pdf-round"></span>
```
<span class="cf-icon cf-icon-pdf"></span>
<span class="cf-icon cf-icon-pdf-round"></span>
```

### upload

<span class="cf-icon cf-icon-upload"></span>
<span class="cf-icon cf-icon-upload-round"></span>

```
<span class="cf-icon cf-icon-upload"></span>
<span class="cf-icon cf-icon-upload-round"></span>
```

### download

<span class="cf-icon cf-icon-download"></span>
<span class="cf-icon cf-icon-download-round"></span>

```
<span class="cf-icon cf-icon-download"></span>
<span class="cf-icon cf-icon-download-round"></span>
```

### copy

<span class="cf-icon cf-icon-copy"></span>
<span class="cf-icon cf-icon-copy-round"></span>

```
<span class="cf-icon cf-icon-copy"></span>
<span class="cf-icon cf-icon-copy-round"></span>
```

### edit

<span class="cf-icon cf-icon-edit"></span>
<span class="cf-icon cf-icon-edit-round"></span>

```
<span class="cf-icon cf-icon-edit"></span>
<span class="cf-icon cf-icon-edit-round"></span>
```

### attach

<span class="cf-icon cf-icon-attach"></span>
<span class="cf-icon cf-icon-attach-round"></span>

```
<span class="cf-icon cf-icon-attach"></span>
<span class="cf-icon cf-icon-attach-round"></span>
```

###print

<span class="cf-icon cf-icon-print"></span>
<span class="cf-icon cf-icon-print-round"></span>

```
<span class="cf-icon cf-icon-print"></span>
<span class="cf-icon cf-icon-print-round"></span>
```

### save

<span class="cf-icon cf-icon-save"></span>
<span class="cf-icon cf-icon-save-round"></span>

```
<span class="cf-icon cf-icon-save"></span>
<span class="cf-icon cf-icon-save-round"></span>
```

### appendix

<span class="cf-icon cf-icon-appendix"></span>
<span class="cf-icon cf-icon-appendix-round"></span>

```
<span class="cf-icon cf-icon-appendix"></span>
<span class="cf-icon cf-icon-appendix-round"></span>
```

### supplement

<span class="cf-icon cf-icon-supplement"></span>
<span class="cf-icon cf-icon-supplement-round"></span>

```
<span class="cf-icon cf-icon-supplement"></span>
<span class="cf-icon cf-icon-supplement-round"></span>
```

### rss

<span class="cf-icon cf-icon-rss"></span>
<span class="cf-icon cf-icon-rss-round"></span>

```
<span class="cf-icon cf-icon-rss"></span>
<span class="cf-icon cf-icon-rss-round"></span>
```

## Financial product icons

### bank-account

<span class="cf-icon cf-icon-bank-account"></span>
<span class="cf-icon cf-icon-bank-account-round"></span>

```
<span class="cf-icon cf-icon-bank-account"></span>
<span class="cf-icon cf-icon-bank-account-round"></span>
```

### credit-card

<span class="cf-icon cf-icon-credit-card"></span>
<span class="cf-icon cf-icon-credit-card-round"></span>

```
<span class="cf-icon cf-icon-credit-card"></span>
<span class="cf-icon cf-icon-credit-card-round"></span>
```

### loan

<span class="cf-icon cf-icon-loan"></span>
<span class="cf-icon cf-icon-loan-round"></span>

```
<span class="cf-icon cf-icon-loan"></span>
<span class="cf-icon cf-icon-loan-round"></span>
```

### money-transfer

<span class="cf-icon cf-icon-money-transfer"></span>
<span class="cf-icon cf-icon-money-transfer-round"></span>

```
<span class="cf-icon cf-icon-money-transfer"></span>
<span class="cf-icon cf-icon-money-transfer-round"></span>
```

### mortgage

<span class="cf-icon cf-icon-mortgage"></span>
<span class="cf-icon cf-icon-mortgage-round"></span>

```
<span class="cf-icon cf-icon-mortgage"></span>
<span class="cf-icon cf-icon-mortgage-round"></span>
```

### debt-collection

<span class="cf-icon cf-icon-debt-collection"></span>
<span class="cf-icon cf-icon-debt-collection-round"></span>

```
<span class="cf-icon cf-icon-debt-collection"></span>
<span class="cf-icon cf-icon-debt-collection-round"></span>
```

### credit-report

<span class="cf-icon cf-icon-credit-report"></span>
<span class="cf-icon cf-icon-credit-report-round"></span>

```
<span class="cf-icon cf-icon-credit-report"></span>
<span class="cf-icon cf-icon-credit-report-round"></span>
```

### money

<span class="cf-icon cf-icon-money"></span>
<span class="cf-icon cf-icon-money-round"></span>

```
<span class="cf-icon cf-icon-money"></span>
<span class="cf-icon cf-icon-money-round"></span>
```

### quick-cash

<span class="cf-icon cf-icon-quick-cash"></span>
<span class="cf-icon cf-icon-quick-cash-round"></span>

```
<span class="cf-icon cf-icon-quick-cash"></span>
<span class="cf-icon cf-icon-quick-cash-round"></span>
```

### contract

<span class="cf-icon cf-icon-contract"></span>
<span class="cf-icon cf-icon-contract-round"></span>

```
<span class="cf-icon cf-icon-contract"></span>
<span class="cf-icon cf-icon-contract-round"></span>
```

### complaint

<span class="cf-icon cf-icon-complaint"></span>
<span class="cf-icon cf-icon-complaint-round"></span>

```
<span class="cf-icon cf-icon-complaint"></span>
<span class="cf-icon cf-icon-complaint-round"></span>
```

### getting-credit-card

<span class="cf-icon cf-icon-getting-credit-card"></span>
<span class="cf-icon cf-icon-getting-credit-card-round"></span>

```
<span class="cf-icon cf-icon-getting-credit-card"></span>
<span class="cf-icon cf-icon-getting-credit-card-round"></span>
```

### buying-car

<span class="cf-icon cf-icon-buying-car"></span>
<span class="cf-icon cf-icon-buying-car-round"></span>

```
<span class="cf-icon cf-icon-buying-car"></span>
<span class="cf-icon cf-icon-buying-car-round"></span>
```

### paying-college

<span class="cf-icon cf-icon-paying-college"></span>
<span class="cf-icon cf-icon-paying-college-round"></span>

```
<span class="cf-icon cf-icon-paying-college"></span>
<span class="cf-icon cf-icon-paying-college-round"></span>
```

### owning-home

<span class="cf-icon cf-icon-owning-home"></span>
<span class="cf-icon cf-icon-owning-home-round"></span>

```
<span class="cf-icon cf-icon-owning-home"></span>
<span class="cf-icon cf-icon-owning-home-round"></span>
```

### debt

<span class="cf-icon cf-icon-debt"></span>
<span class="cf-icon cf-icon-debt-round"></span>

```
<span class="cf-icon cf-icon-debt"></span>
<span class="cf-icon cf-icon-debt-round"></span>
```

### building-credit

<span class="cf-icon cf-icon-building-credit"></span>
<span class="cf-icon cf-icon-building-credit-round"></span>

```
<span class="cf-icon cf-icon-building-credit"></span>
<span class="cf-icon cf-icon-building-credit-round"></span>
```

### prepaid-cards

<span class="cf-icon cf-icon-prepaid-cards"></span>
<span class="cf-icon cf-icon-prepaid-cards-round"></span>

```
<span class="cf-icon cf-icon-prepaid-cards"></span>
<span class="cf-icon cf-icon-prepaid-cards-round"></span>
```

### payday-loan

<span class="cf-icon cf-icon-payday-loan"></span>
<span class="cf-icon cf-icon-payday-loan-round"></span>

```
<span class="cf-icon cf-icon-payday-loan"></span>
<span class="cf-icon cf-icon-payday-loan-round"></span>
```

### retirement

<span class="cf-icon cf-icon-retirement"></span>
<span class="cf-icon cf-icon-retirement-round"></span>

```
<span class="cf-icon cf-icon-retirement"></span>
<span class="cf-icon cf-icon-retirement-round"></span>
```


## Web icons

### user

<span class="cf-icon cf-icon-user"></span>
<span class="cf-icon cf-icon-user-round"></span>

```
<span class="cf-icon cf-icon-user"></span>
<span class="cf-icon cf-icon-user-round"></span>
```

### wifi

<span class="cf-icon cf-icon-wifi"></span>
<span class="cf-icon cf-icon-wifi-round"></span>

```
<span class="cf-icon cf-icon-wifi"></span>
<span class="cf-icon cf-icon-wifi-round"></span>
```

### search

<span class="cf-icon cf-icon-search"></span>
<span class="cf-icon cf-icon-search-round"></span>

```
<span class="cf-icon cf-icon-search"></span>
<span class="cf-icon cf-icon-search-round"></span>
```

### share

<span class="cf-icon cf-icon-share"></span>
<span class="cf-icon cf-icon-share-round"></span>

```
<span class="cf-icon cf-icon-share"></span>
<span class="cf-icon cf-icon-share-round"></span>
```

### link

<span class="cf-icon cf-icon-link"></span>
<span class="cf-icon cf-icon-link-round"></span>

```
<span class="cf-icon cf-icon-link"></span>
<span class="cf-icon cf-icon-link-round"></span>
```

### external-link

<span class="cf-icon cf-icon-external-link"></span>
<span class="cf-icon cf-icon-external-link-round"></span>

```
<span class="cf-icon cf-icon-external-link"></span>
<span class="cf-icon cf-icon-external-link-round"></span>
```

### audio-mute

<span class="cf-icon cf-icon-audio-mute"></span>
<span class="cf-icon cf-icon-audio-mute-round"></span>

```
<span class="cf-icon cf-icon-audio-mute"></span>
<span class="cf-icon cf-icon-audio-mute-round"></span>
```

### audio-low

<span class="cf-icon cf-icon-audio-low"></span>
<span class="cf-icon cf-icon-audio-low-round"></span>

```
<span class="cf-icon cf-icon-audio-low"></span>
<span class="cf-icon cf-icon-audio-low-round"></span>
```

### audio-medium

<span class="cf-icon cf-icon-audio-medium"></span>
<span class="cf-icon cf-icon-audio-medium-round"></span>

```
<span class="cf-icon cf-icon-audio-medium"></span>
<span class="cf-icon cf-icon-audio-medium-round"></span>
```

### audio-max

<span class="cf-icon cf-icon-audio-max"></span>
<span class="cf-icon cf-icon-audio-max-round"></span>

```
<span class="cf-icon cf-icon-audio-max"></span>
<span class="cf-icon cf-icon-audio-max-round"></span>
```

### favorite

<span class="cf-icon cf-icon-favorite"></span>
<span class="cf-icon cf-icon-favorite-round"></span>

```
<span class="cf-icon cf-icon-favorite"></span>
<span class="cf-icon cf-icon-favorite-round"></span>
```

### unfavorite

<span class="cf-icon cf-icon-unfavorite"></span>
<span class="cf-icon cf-icon-unfavorite-round"></span>

```
<span class="cf-icon cf-icon-unfavorite"></span>
<span class="cf-icon cf-icon-unfavorite-round"></span>
```

### bookmark

<span class="cf-icon cf-icon-bookmark"></span>
<span class="cf-icon cf-icon-bookmark-round"></span>

```
<span class="cf-icon cf-icon-bookmark"></span>
<span class="cf-icon cf-icon-bookmark-round"></span>
```

### unbookmark

<span class="cf-icon cf-icon-unbookmark"></span>
<span class="cf-icon cf-icon-unbookmark-round"></span>

```
<span class="cf-icon cf-icon-unbookmark"></span>
<span class="cf-icon cf-icon-unbookmark-round"></span>
```

### settings

<span class="cf-icon cf-icon-settings"></span>
<span class="cf-icon cf-icon-settings-round"></span>

```
<span class="cf-icon cf-icon-settings"></span>
<span class="cf-icon cf-icon-settings-round"></span>
```

### menu

<span class="cf-icon cf-icon-menu"></span>
<span class="cf-icon cf-icon-menu-round"></span>

```
<span class="cf-icon cf-icon-menu"></span>
<span class="cf-icon cf-icon-menu-round"></span>
```

### lock

<span class="cf-icon cf-icon-lock"></span>
<span class="cf-icon cf-icon-lock-round"></span>

```
<span class="cf-icon cf-icon-lock"></span>
<span class="cf-icon cf-icon-lock-round"></span>
```

### unlock

<span class="cf-icon cf-icon-unlock"></span>
<span class="cf-icon cf-icon-unlock-round"></span>

```
<span class="cf-icon cf-icon-unlock"></span>
<span class="cf-icon cf-icon-unlock-round"></span>
```

### clock

<span class="cf-icon cf-icon-clock"></span>
<span class="cf-icon cf-icon-clock-round"></span>

```
<span class="cf-icon cf-icon-clock"></span>
<span class="cf-icon cf-icon-clock-round"></span>
```

### chart

<span class="cf-icon cf-icon-chart"></span>
<span class="cf-icon cf-icon-chart-round"></span>

```
<span class="cf-icon cf-icon-chart"></span>
<span class="cf-icon cf-icon-chart-round"></span>
```

### play

<span class="cf-icon cf-icon-play"></span>
<span class="cf-icon cf-icon-play-round"></span>

```
<span class="cf-icon cf-icon-play"></span>
<span class="cf-icon cf-icon-play-round"></span>
```

### history

<span class="cf-icon cf-icon-history"></span>
<span class="cf-icon cf-icon-history-round"></span>

```
<span class="cf-icon cf-icon-history"></span>
<span class="cf-icon cf-icon-history-round"></span>
```

### table of contents

<span class="cf-icon cf-icon-table-of-contents"></span>
<span class="cf-icon cf-icon-table-of-contents-round"></span>

```
<span class="cf-icon cf-icon-table-of-contents"></span>
<span class="cf-icon cf-icon-table-of-contents-round"></span>
```

### newspaper

<span class="cf-icon cf-icon-newspaper"></span>
<span class="cf-icon cf-icon-newspaper-round"></span>

```
<span class="cf-icon cf-icon-newspaper"></span>
<span class="cf-icon cf-icon-newspaper-round"></span>
```

### microphone

<span class="cf-icon cf-icon-microphone"></span>
<span class="cf-icon cf-icon-microphone-round"></span>

```
<span class="cf-icon cf-icon-microphone"></span>
<span class="cf-icon cf-icon-microphone-round"></span>
```

### bullhorn

<span class="cf-icon cf-icon-bullhorn"></span>
<span class="cf-icon cf-icon-bullhorn-round"></span>

```
<span class="cf-icon cf-icon-bullhorn"></span>
<span class="cf-icon cf-icon-bullhorn-round"></span>
```

### double-quote

<span class="cf-icon cf-icon-double-quote"></span>
<span class="cf-icon cf-icon-double-quote-round"></span>

```
<span class="cf-icon cf-icon-double-quote"></span>
<span class="cf-icon cf-icon-double-quote-round"></span>
```

### speech-bubble

<span class="cf-icon cf-icon-speech-bubble"></span>
<span class="cf-icon cf-icon-speech-bubble-round"></span>

```
<span class="cf-icon cf-icon-speech-bubble"></span>
<span class="cf-icon cf-icon-speech-bubble-round"></span>
```

### information

<span class="cf-icon cf-icon-information"></span>
<span class="cf-icon cf-icon-information-round"></span>

```
<span class="cf-icon cf-icon-information"></span>
<span class="cf-icon cf-icon-information-round"></span>
```

### lightbulb

<span class="cf-icon cf-icon-lightbulb"></span>
<span class="cf-icon cf-icon-lightbulb-round"></span>

```
<span class="cf-icon cf-icon-lightbulb"></span>
<span class="cf-icon cf-icon-lightbulb-round"></span>
```

### dialogue

<span class="cf-icon cf-icon-dialogue"></span>
<span class="cf-icon cf-icon-dialogue-round"></span>

```
<span class="cf-icon cf-icon-dialogue"></span>
<span class="cf-icon cf-icon-dialogue-round"></span>
```

### date

<span class="cf-icon cf-icon-date"></span>
<span class="cf-icon cf-icon-date-round"></span>

```
<span class="cf-icon cf-icon-date"></span>
<span class="cf-icon cf-icon-date-round"></span>
```

### closing-quote

<span class="cf-icon cf-icon-closing-quote"></span>
<span class="cf-icon cf-icon-closing-quote-round"></span>

```
<span class="cf-icon cf-icon-closing-quote"></span>
<span class="cf-icon cf-icon-closing-quote-round"></span>
```

### livestream

<span class="cf-icon cf-icon-livestream"></span>
<span class="cf-icon cf-icon-livestream-round"></span>

```
<span class="cf-icon cf-icon-livestream"></span>
<span class="cf-icon cf-icon-livestream-round"></span>
```

### parents

<span class="cf-icon cf-icon-parents"></span>
<span class="cf-icon cf-icon-parents-round"></span>

```
<span class="cf-icon cf-icon-parents"></span>
<span class="cf-icon cf-icon-parents-round"></span>
```

### servicemembers

<span class="cf-icon cf-icon-servicemembers"></span>
<span class="cf-icon cf-icon-servicemembers-round"></span>

```
<span class="cf-icon cf-icon-servicemembers"></span>
<span class="cf-icon cf-icon-servicemembers-round"></span>
```


## Icon character variables

Inspired by Font Awesome, we've added LESS variables for adding icons in
LESS files.

```
.download-icon:after {
     .cf-icon();
     display: inline-block;
     content: @cf-icon-download;
     width: 1em;
     text-align: right;
}
```
