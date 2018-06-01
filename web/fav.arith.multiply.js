(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g=(g.fav||(g.fav = {}));g=(g.arith||(g.arith = {}));g.multiply = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
'use strict';

var ArithNumber = (typeof window !== "undefined" ? window['fav']['arith']['number'] : typeof global !== "undefined" ? global['fav']['arith']['number'] : null);
var reduce = require('@fav/arith.reduce');

function multiply(a1, a2) {
  var n1 = a1.numerator;
  var d1 = a1.denominator;
  var e1 = a1.exponent;

  var n2 = a2.numerator;
  var d2 = a2.denominator;
  var e2 = a2.exponent;

  return new ArithNumber(n1 * n2, d1 * d2, e1 + e2);;
}

function multiplyConsideringLargeNumbers(a1, a2) {
  var a3 = multiply(a1, a2);
  if (a3.numerator === a3.numerator) {
    return a3;
  }

  a1 = reduce(a1);
  a2 = reduce(a2);
  a3 = multiply(a1, a2);
  if (a3.numerator === a3.numerator) {
    return a3;
  }

  a3 = new ArithNumber(a1.numerator, a2.denominator, a1.exponent);
  a2 = new ArithNumber(a2.numerator, a1.denominator, a2.exponent);

  a1 = reduce(a3);
  a2 = reduce(a2);
  a3 = multiply(a1, a2);
  if (a3.numerator === a3.numerator) {
    return a3;
  }

  a1 = movePlace(a1);
  a2 = movePlace(a2);
  return multiply(a1, a2);
}

function movePlace(a) {
  var n = a.numerator;
  var d = a.denominator;
  var e = a.exponent;

  while (n % 10 === 0) {
    n /= 10;
    e += 1;
  }

  return new ArithNumber(n, d, e);
}

ArithNumber.prototype.multiply = function(num) {
  if (num instanceof ArithNumber) {
    return multiply(this, num);
  } else {
    return multiply(this, ArithNumber.of(num));
  }
};

module.exports = multiplyConsideringLargeNumbers;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"@fav/arith.reduce":2}],2:[function(require,module,exports){
(function (global){
'use strict';

var ArithNumber = (typeof window !== "undefined" ? window['fav']['arith']['number'] : typeof global !== "undefined" ? global['fav']['arith']['number'] : null);
var gcd = require('@fav/math.gcd');

function reduce(arithNum) {
  if (!arithNum.isAccurate()) {
    return new ArithNumber(NaN, NaN, NaN);
  }

  if (arithNum.numerator === 0) {
    return new ArithNumber(0, 1, 0);
  }

  var n = Math.abs(arithNum.numerator);
  var d = arithNum.denominator;
  var e = arithNum.exponent;

  var g = gcd(n, d);
  n = n / g;
  d = d / g;

  var n10;
  while (((n10 = n * 10) <= ArithNumber.MAX_SAFE_NUMERATOR) &&
         (g = gcd(d, 10)) !== 1) {
    n = n10 / g;
    d = d / g;
    e -= 1;
  }

  if (arithNum.numerator < 0) {
    n = -n;
  }

  return new ArithNumber(n, d, e);
}

ArithNumber.prototype.reduce = function() {
  return reduce(this);
};

module.exports = reduce;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"@fav/math.gcd":3}],3:[function(require,module,exports){
'use strict';

function gcd(x, y) {
  if (!x || !y) {
    return 1;
  }

  var m;
  while (y !== 0) {
    m = x % y;
    x = y;
    y = m;
  }

  return Math.abs(x);
}

module.exports = gcd;

},{}]},{},[1])(1)
});
