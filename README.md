# [@fav/arith.multiply][repo-url] [![NPM][npm-img]][npm-url] [![MIT License][mit-img]][mit-url] [![Build Status][travis-img]][travis-url] [![Build Status][appveyor-img]][appveyor-url] [![Coverage status][coverage-img]][coverage-url]

Calculates an accurate product of two numbers.

> "fav" is an abbreviation of "favorite" and also the acronym of "for all versions".
> This package is intended to support all Node.js versions and many browsers as possible.
> At least, this package supports Node.js >= v0.10 and major Web browsers: Chrome, Firefox, IE11, Edge, Vivaldi and Safari.


## Install

To install from npm:

```sh
$ npm install --save @fav/arith.number @fav/arith.multiply
```

***NOTE:*** *npm < 2.7.0 does not support scoped package, but old version Node.js supports it. So when you use such older npm, you should download this package from [github.com][repo-url], and move it in `node_modules/@fav/arith.multiply/` directory manually.*


## Usage

For Node.js:

```js
var ArithNumber = require('@fav/arith.number');
var multiply = require('@fav/arith.multiply');

var num1 = ArithNumber.of(1.23) // => { numerator: 123, denominator: 1, exponent: -2 }

var num2 = ArithNumber.of('4.567') // => { numerator: 4567, denominator: 1, exponent: -3 }

1.23 * 4.567 // => 5.6174100000000005

var num3 = multiply(num1, num2) // => { numerator: 561741, denominator: 1, exponent: -6 }
num3.toApproximateString() // => '5.61741'
```

For Web browsers:

```html
<script src="fav.arith.number.min.js"></script>
<script>
var ArithNumber = fav.arith.number;

var num1 = ArithNumber.of(1.23) // => { numerator: 123, denominator: 1, exponent: -2 }

var num2 = ArithNumber.of('4.567') // => { numerator: 4567, denominator: 1, exponent: -3 }

1.23 * 4.567 // => 5.6174100000000005

var num3 = multiply(num1, num2) // => { numerator: 561741, denominator: 1, exponent: -6 }
num3.toApproximateString() // => '5.61741'
</script>
```


## API

### <u>multiply(arithNum1, arithNum2) : ArithNumber</u>

Adds *arithNum1* and *arithNum2* and creates a new ArithNumber object which has the product of these two numbers.

#### Parameters:

| Parameter    |  Type       | Description                             |
|:-------------|:-----------:|:----------------------------------------|
| *arithNum1*  | ArithNumber | An ArithNumber object to be multiplied. |
| *arithNum2*  | ArithNumber | An ArithNumber object to be multiplied. |

#### Returns:

The product of two values of ArithNumber objects. 

**Type:** ArithNumber

## Checked                                                                      

### Node.js (4〜)

| Platform  |   4    |   5    |   6    |   7    |   8    |   9    |   10   |
|:---------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### io.js (1〜3)

| Platform  |   1    |   2    |   3    |
|:---------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|

### Node.js (〜0.12)

| Platform  |  0.8   |  0.9   |  0.10  |  0.11  |  0.12  |
|:---------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### Web browsers

| Platform  | Chrome | Firefox | Vivaldi | Safari |  Edge  | IE11   |
|:---------:|:------:|:-------:|:-------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef; |&#x25ef; |&#x25ef;|   --   |   --   |
| Windows10 |&#x25ef;|&#x25ef; |&#x25ef; |   --   |&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef; |&#x25ef; |   --   |   --   |   --   |


## License

Copyright (C) 2018 Takayuki Sato

This program is free software under [MIT][mit-url] License.
See the file LICENSE in this distribution for more details.

[repo-url]: https://github.com/sttk/fav-arith.multiply/
[npm-img]: https://img.shields.io/badge/npm-v0.1.0-blue.svg
[npm-url]: https://www.npmjs.com/package/@fav/arith.multiply
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT
[travis-img]: https://travis-ci.org/sttk/fav-arith.multiply.svg?branch=master
[travis-url]: https://travis-ci.org/sttk/fav-arith.multiply
[appveyor-img]: https://ci.appveyor.com/api/projects/status/github/sttk/fav-arith.multiply?branch=master&svg=true
[appveyor-url]: https://ci.appveyor.com/project/sttk/fav-arith-multiply
[coverage-img]: https://coveralls.io/repos/github/sttk/fav-arith.multiply/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/sttk/fav-arith.multiply?branch=master

