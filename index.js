'use strict';

var ArithNumber = require('@fav/arith.number');
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
