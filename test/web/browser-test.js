(function(){
'use strict';


var expect = chai.expect;




var ArithNumber = fav.arith.number;
var multiply = fav.arith.multiply;

describe('fav.arith.multiply', function() {

  describe('Multiply zeros', function() {
    it('Should return zero ArithNumber object (1)', function() {
      var a1 = new ArithNumber(0, 1, 0);
      var a2 = new ArithNumber(0, 1, 0);
      var a3 = multiply(a1, a2);
      expect(a3.numerator).to.equal(0);
      expect(a3.denominator).to.equal(1);
      expect(a3.exponent).to.equal(0);
      expect(a3.toApproximateString()).to.equal('0');
    });

    it('Should return zero ArithNumber object (2)', function() {
      var a1 = new ArithNumber(0, 100, 0);
      var a2 = new ArithNumber(0, 1, 200);
      var a3 = multiply(a1, a2);
      expect(a3.numerator).to.equal(0);
      expect(a3.denominator).to.equal(1);
      expect(a3.exponent).to.equal(0);
      expect(a3.toApproximateString()).to.equal('0');
    });
  });

  describe('Multiply integers', function() {
    it('Should return an accurate product of two numbers (1)', function() {
      var a1 = new ArithNumber(1, 1, 0);
      var a2 = new ArithNumber(3, 1, 0);
      var a3 = multiply(a1, a2);
      expect(a3.numerator).to.equal(3);
      expect(a3.denominator).to.equal(1);
      expect(a3.exponent).to.equal(0);
      expect(a3.toApproximateString()).to.equal('3');
    });

    it('Should return an accurate product of two numbers (2)', function() {
      var a1 = new ArithNumber(123, 1, -1);
      var a2 = new ArithNumber(456, 1, -1);
      var a3 = multiply(a1, a2);
      expect(a3.numerator).to.equal(56088);
      expect(a3.denominator).to.equal(1);
      expect(a3.exponent).to.equal(-2);
      expect(a3.toApproximateString()).to.equal('560.88');
    });

    it('Should return an accurate product of two numbers (3)', function() {
      var a1 = new ArithNumber(3, 1, -3);
      var a2 = new ArithNumber(4, 1, -2);
      var a3 = multiply(a1, a2);
      expect(a3.numerator).to.equal(12);
      expect(a3.denominator).to.equal(1);
      expect(a3.exponent).to.equal(-5);
      expect(a3.toApproximateString()).to.equal('0.00012');
    });

    it('Should return an accurate product of two numbers (4)', function() {
      var a1 = ArithNumber.of(99);
      var a2 = ArithNumber.of(111);
      var a3 = multiply(a1, a2);
      expect(a3.numerator).to.equal(10989);
      expect(a3.denominator).to.equal(1);
      expect(a3.exponent).to.equal(0);
      expect(a3.toApproximateString()).to.equal('10989');
    });

    it('Should return an accurate product of two numbers (5)', function() {
      var a1 = ArithNumber.of('99');
      var a2 = ArithNumber.of('111');
      var a3 = multiply(a1, a2);
      expect(a3.numerator).to.equal(10989);
      expect(a3.denominator).to.equal(1);
      expect(a3.exponent).to.equal(0);
      expect(a3.toApproximateString()).to.equal('10989');
    });
  });

  describe('Multiply decimals', function() {
    it('Should return an accurate product of two numbers (1)', function() {
      var a1 = ArithNumber.of('1.23');
      var a2 = ArithNumber.of('4.56');
      var a3 = multiply(a1, a2);
      expect(a3.numerator).to.equal(56088);
      expect(a3.denominator).to.equal(1);
      expect(a3.exponent).to.equal(-4);
      expect(a3.toApproximateString()).to.equal('5.6088');
    });

    it('Should return an accurate product of two numbers (2)', function() {
      var a1 = ArithNumber.of(-0.2);
      var a2 = ArithNumber.of('3.33e-1');
      var a3 = multiply(a1, a2);
      expect(a3.numerator).to.equal(-666);
      expect(a3.denominator).to.equal(1);
      expect(a3.exponent).to.equal(-4);
      expect(a3.toApproximateString()).to.equal('-0.0666');
    });
  });

  describe('Muliply fractions', function() {
    it('Should return an accurate product of two numbers (1)', function() {
      var a1 = new ArithNumber(123, 45, 2);
      var a2 = new ArithNumber(99, 12, -1);
      var a3 = multiply(a1, a2);
      expect(a3.numerator).to.equal(12177);
      expect(a3.denominator).to.equal(540);
      expect(a3.exponent).to.equal(1);
      expect(a3.toApproximateString()).to.equal('225.5');
    });

    it('Should return an accurate product of two numbers (2)', function() {
      var a1 = new ArithNumber(1, 3, -1);
      var a2 = new ArithNumber(1, 7, 1);
      var a3 = multiply(a1, a2);
      expect(a3.numerator).to.equal(1);
      expect(a3.denominator).to.equal(21);
      expect(a3.exponent).to.equal(0);
      expect(a3.toApproximateString()).to.equal('0.04761904761904761904');
    });
  });

  describe('Multiply large numbers', function() {
    it('Should return an inaccurate number', function() {
      var a1 = ArithNumber.of(Math.pow(2, 53) - 1);
      var a2 = ArithNumber.of(1.1);
      var a3 = multiply(a1, a2);
      expect(a3.isAccurate()).to.equal(false);
    });

    it('Should return an accurate product of two numbers when reducable (1)',
    function() {
      var a1 = new ArithNumber(9007199254740960, 560, 1);
      var a2 = new ArithNumber(2, 3, 1);
      var a3 = multiply(a1, a2);
      expect(a3.numerator).to.equal(32168568766932);
      expect(a3.denominator).to.equal(3);
      expect(a3.exponent).to.equal(2);
      expect(a3.toApproximateString()).to.equal('1072285625564400');
    });

    it('Should return an accurate product of two numbers when reducable (2)',
    function() {
      var a1 = new ArithNumber(9007199254740960, 19, 1);
      var a2 = new ArithNumber(16, 56, 4);
      var a3 = multiply(a1, a2);
      expect(a3.numerator).to.equal(2573485501354560);
      expect(a3.denominator).to.equal(19);
      expect(a3.exponent).to.equal(5);
      expect(a3.toApproximateString()).to.equal(
        '13544660533445052631.57894736842105263157');
    });

    it('Should return an accurate product of two numbers when reducable (3)',
    function() {
      var a1 = new ArithNumber(9007199254740960, 3, 1);
      var a2 = new ArithNumber(2, 56, 4);
      var a3 = multiply(a1, a2);
      expect(a3.numerator).to.equal(1072285625564400);
      expect(a3.denominator).to.equal(1);
      expect(a3.exponent).to.equal(4);
      expect(a3.toApproximateString()).to.equal('10722856255644000000');
    });
  });

  describe('Attach the multiply function to ArithNumber.prototype',
  function() {
    it('Should multiply a number of which data type is number', function() {
      var a1 = new ArithNumber(123, 1, -2);
      var a2 = a1.multiply(4.567);
      expect(a2.numerator).to.equal(561741);
      expect(a2.denominator).to.equal(1);
      expect(a2.exponent).to.equal(-5);
      expect(a2.toApproximateString()).to.equal('5.61741');
    });

    it('Should multiply a number of which data type is string', function() {
      var a1 = new ArithNumber(123, 1, -2);
      var a2 = a1.multiply('4.567');
      expect(a2.numerator).to.equal(561741);
      expect(a2.denominator).to.equal(1);
      expect(a2.exponent).to.equal(-5);
      expect(a2.toApproximateString()).to.equal('5.61741');
    });

    it('Should multiply a number of which data type is ArithNumber',
    function() {
      var a1 = new ArithNumber(123, 1, -2);
      var a2 = a1.multiply(new ArithNumber(4567, 1, -3));
      expect(a2.numerator).to.equal(561741);
      expect(a2.denominator).to.equal(1);
      expect(a2.exponent).to.equal(-5);
      expect(a2.toApproximateString()).to.equal('5.61741');
    });
  });
});

})();
