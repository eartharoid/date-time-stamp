# dtstamp

![npm](https://img.shields.io/npm/v/dtstamp?style=flat-square)   [![GitHub issues](https://img.shields.io/github/issues/eartharoid/dtstamp?style=flat-square)](https://github.com/eartharoid/dtstamp/issues)    [![GitHub stars](https://img.shields.io/github/stars/eartharoid/dtstamp?style=flat-square)](https://github.com/eartharoid/dtstamp/stargazers)    [![GitHub forks](https://img.shields.io/github/forks/eartharoid/dtstamp?style=flat-square)](https://github.com/eartharoid/dtstamp/network)    [![GitHub license](https://img.shields.io/github/license/eartharoid/dtstamp?style=flat-square)](https://github.com/eartharoid/dtstamp/blob/master/LICENSE)    [![Codacy Badge](https://api.codacy.com/project/badge/Grade/15dc38c312c3430d8ed02c58edb2e8bd)](https://www.codacy.com/manual/Eartharoid/dtstamp?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=eartharoid/dtstamp&amp;utm_campaign=Badge_Grade)


 A simple date and time formatter with placeholder support.
 
 > If you are viewing this on NPM or Yarn, please go to [GitHub](https://github.com/eartharoid/dtstamp) for the most up-to-date documentation.
 
## Features
- Converts strings containing placeholders to timestamps
- Option to format a custom date (in the past or future)
- NEW: Format in your preferred language/locale (default is `en-GB`)
- NEW: Browser support **(can be used server or client side)**
- A range of placeholders and formatting functions
- Extremely lightweight (excluding unnecessary files such as tests and license, it is less than 5KB, or 2KB minified)


This was originally made for my [leekslazylogger](https://www.npmjs.com/package/leekslazylogger) [(github)](https://github.com/eartharoid/leekslazylogger) project to provide easy file naming and timestamp formatting.


## Install
### Node
Download with `npm i dtstamp`or `yarn add dtstamp`.
Then require the module:

```js
const dtstamp = require('dtstamp');
...
// console.log(dtstamp())
```

Run `npm test` or `node test` to see example outputs.

### Browser
For use in the browser, you can use a CDN:

- https://bundle.run/dtstamp
- https://cdn.jsdelivr.net/npm/dtstamp@latest/index.min.js
- https://unpkg.com/dtstamp/index.min.js

```html
<script src="A CDN URL FROM ABOVE"></script>
<script>
  let dtf = dtstamp; // optionally rename
  ...
  // console.log(dtf())
  // console.log(dtstamp())
</script>
```

## How to use
**If you want to see examples in use, look at [test.js](https://github.com/eartharoid/dtstamp/blob/master/test.js).**


### Functions
#### Paramaters
**All parameters are optional**

- f: string - string with placeholders to format
- d: date - date object to use
- l: string - locale
- n: number - nth number
- p: string - length of preset

> See [**Flexibility**](#flexibility) and [**Caveats**](#caveats) below for more information about function parameters.

**Functions using parameters shown above:**

- `(f, d, l)`: returns a formatted string (a timestamp)
- `.ampm(d, l)`: returns `AM` or `PM`
- `.AMPM(d, l)`: returns `AM` or `PM`
- `.nth(n)`: returns `n` with `st, nd, rd, th` (Example: `.nth(5)` -> `5th`)
- `.time(p, d, l)`: Formats time using a preset style
  - P: `full`, `long`, `medium`, or `short` (default is `medium`)
- `.date(p, d, l)`: Formats date using a preset style
  - p: `full`, `long`, `medium`, or `short` (default is `short`)


### Placeholders
All of the accepted placeholders are listed below. These can be used within strings passed to the main `dtstamp()` formatting function.

`PLACEHOLDER`: description, **example** *(in case you couldn't figure it out)*

`YYYY`: full year, **2020**

`YY`: short year, **20**

`MMMM`: full month name, **February**

`MMM`: short month name, **Feb**

`MM`: month number, **02**

`M`: single month number, **2** *(obviously would be the same as `MM` after 9)*

`DDDD`: full day name, **Saturday**

`DDD`: short day name, **Sat**

`DD`: day number, **01**

`D`: single day number, **1**

`HH`: 24h hour, **20**

`hh`: 12h hour, **08** 

`h`: single 12h hour, **8**

`ampm`: AM/PM, **PM**

`AMPM`: AM/PM, **PM**

`mm`: minute, **05**

`m`: single minute, **5**

`ss`: seconds, **20**

`s`: seconds, **20**

`ii`: milliseconds, **123**

*The following return the number with the text appended, not just the text*

`n_YY`: year of the century, **21st**

`n_M`: month of the year, **2nd**

`n_D`: day of the month, **2nd**

`n_HH`: hour of the day, **20th**

`n_h`: hour of the morning/afternoon, **8th**

`n_m`: minute of the hour, **5th**

`n_s`: second of the minute, **20th**


### Formatting a string using placeholders
The `dtstamp()` function has 3 optional arguments: `formatString, dateObject, localeString`


Examples:

```js
let time = dtstamp("HH:mm:ss DD/MM/YY") // 20:05:20 01/02/20
```

```js
let time = dtstamp("HH:mm:ss on DD/MM/YYYY (DDD, n_D MMMM YYYY)") // 20:05:20 on 01/02/2020 (Sat, 1st February 2020)
```

```js
let time = dtstamp("h ampm on DDDD") // 8 PM on Saturday
console.log(time) // -> 8 PM on Saturday
```

### Formatting a specific date / time
By default, all functions format the given string using the current time. If you want to format a time in the past or future, you can pass your own `Date` object with any of the functions:

```js
dtstamp('hh:mm ampm', futureDate); // string with date
dtstamp(new Date(1)); // only date, will use default string

dtstamp.date("full", pastDate); // full
dtstamp.time(pastDate); // will use default preset length
dtstamp.ampm(pastDate);
```

> See [**Flexibility**](#flexibility) and [**Caveats**](#caveats) below for more information.

### Formatting in your locale
The default locale used by the `()`, `.time()`, `date()` functions is `en-GB`.
The `.nth()` function, `.ampm()`/`.AMPM()` functions, and the `ampm`/`AMPM` placeholders do not support locales.

> *Note that numbers are not affected by the locale option, only words (names of days and months). See **Caveats** below for more information*

```js
dtstamp('DDD n_D MMMM YYYY', 'en-US'); // custom locale with string
dtstamp('DDDD n_D MMMM YYYY', new Date(1), 'fr-FR'); // custom locale and string and date

dtstamp.date('short', new Date(), 'en-US'); // custom locale, preset length, and date
dtstamp.date('short', 'en-US'); // custom locale and preset length
dtstamp.date('de-DE'); // only custom locale, default preset length
```

> See [**Flexibility**](#flexibility) and [**Caveats**](#caveats) below for more information.

## Flexibility
With the exception of `.nth()`, all of the parameters for all of the functions are **optional**, and you can include some (such as locale) whilst omitting others that should come before (like date).

All of the following are valid:

```js
console.log(dtstamp('DDD n_D MMMM YYYY', 'en-US'))
console.log(dtstamp('DDDD n_D MMMM YYYY', new Date(), 'fr-FR'))

console.log(dtstamp.date())
console.log(dtstamp.date('short'))
console.log(dtstamp.date(new Date()))
console.log(dtstamp.date('de-DE'))

console.log(dtstamp.date('long', new Date()))
console.log(dtstamp.date('short', new Date(), 'en-US'))
console.log(dtstamp.date('short', 'en-US'))
```

## Caveats
1: To use a custom locale with the main function (`dtstamp()`) you must also pass `f` (string) or `d` (date object), or both. Examples:

```js
dtstamp() // valid
dtstamp('hh:mm') // valid
dtstamp(new Date()) // valid
dtstamp('hh:mm', new Date()) // valid
dtstamp('hh:mm', new Date(), 'fr-FR') // valid
dtstamp('hh:mm', 'fr-FR') // valid
dtstamp(new Date(), 'fr-FR') // valid

dtstamp('de-DE') // invalid - will just return "de-DE"
```

2: When using `.date()` or `.time()`, you cannot pass `d` (date object) and `l` (locale) together without also passing a custom preset length (`p`/`f`). Examples:

```js
dtstamp.date() // valid
dtstamp.date('long') // valid
dtstamp.date(new Date()) // valid
dtstamp.date('full', new Date()) // valid
dtstamp.date('full', new Date(), 'de-DE') // valid
dtstamp.date('short', 'en-US') // valid


dtstamp.date(new Date(), 'fr-FR') // invalid - locale wil have no affect (will be "en-GB" default)

```

3: This module was designed to be lightweight and for basic use for timestamps and does not fully support timezones and locales. For advanced usage of timezones or locales refer to [Number.toLocaleString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString) and [Date.toLocaleString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString).



## Support
If you need help using this module (everything you need should be either here or in `test.js`), you can ask for help on my Discord server. If you believe there is a problem with my code, or you want to request a new feature, feel free to create a new issue (but for basic help I will respond faster on Discord).

[![Discord](https://discordapp.com/api/guilds/451745464480432129/widget.png?style=banner4)](https://discord.gg/pXc9vyC)

#### Credits
- [Wessel](https://github.com/passthewessel) - helped with RegEx
