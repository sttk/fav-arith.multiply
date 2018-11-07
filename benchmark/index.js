'use strict';

var BenchmarkTester = require('benchmark-tester');
var assert = require('assert');
var ArithNumber = require('@fav/arith.number');

new BenchmarkTester()
  .addTest('@fav/arith.multiply', function(module, data) {
    return data[0].multiply(data[1]);
  })
  .setConverter('@fav/arith.multiply', function(data) {
    return [
      new ArithNumber(data[0][0], data[0][1], 0),
      new ArithNumber(data[1][0], data[1][1], 0),
    ];
  })
  .verifyTest('@fav/arith.multiply', function(test, multiply) {
    var a = test(multiply, [
      new ArithNumber(12, 4, 0),
      new ArithNumber(56, 7, 0),
    ]);
    assert.strictEqual(a.numerator, 672);
    assert.strictEqual(a.denominator, 28);
    assert.strictEqual(a.exponent, 0);
  })

  .addTest('fraction.js', function(module, data) {
    return data[0].mul(data[1]);
  })
  .configPackage('fraction.js', function(Fraction) {
    Fraction.REDUCE = false;
  })
  .setConverter('fraction.js', function(data, Fraction) {
    return [
      new Fraction(data[0][0], data[0][1]),
      new Fraction(data[0][1], data[1][1]),
    ];
  })
  .verifyTest('fraction.js', function(test, Fraction) {
    var f = test(Fraction, [
      new Fraction(12, 4),
      new Fraction(56, 7),
    ]);
    assert.strictEqual(f.s, 1);
    assert.strictEqual(f.n, 672);
    assert.strictEqual(f.d, 28);
  })

  .runTest('Zeros', [[0, 1], [0, 1]])
  .runTest('Integers', [[123, 1], [456, 1]])
  .runTest('Decimals', [[123, 1000], [456, 10000]])
  .runTest('Fractions', [[123, 45], [678, 90]])
  .runTest('Fractions', [[12, 456789], [98, 7654321]])
  .runTest('Big Numbers', [[9007199254740990, 90], [20, 9007199254740]])
  .print();


