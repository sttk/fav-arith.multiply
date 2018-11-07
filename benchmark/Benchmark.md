## Benchmark test of @fav/arith.multiply

> Comparing with [fraction.js](https://www.npmjs.com/package/fraction.js)

### v0.1.0

|             | @fav/arith.multiply(0.1.0) | fraction.js(4.0.10) |
|:------------|---------------------------:|--------------------:|
| Zeros       |         18,281,050 ops/sec |   6,105,611 ops/sec |
| Integers    |         16,125,886 ops/sec |   5,045,633 ops/sec |
| Decimals    |         18,252,602 ops/sec |   5,573,535 ops/sec |
| Fractions   |         31,668,129 ops/sec |  11,821,048 ops/sec |
| Fractions   |         40,910,997 ops/sec |  11,461,203 ops/sec |
| Big Numbers |          5,909,542 ops/sec |  11,069,419 ops/sec |

- Platform: Node.js 10.8.0 on Darwin 64-bit
- Machine: Intel(R) Core(TM) i7-2620M CPU @ 2.70GHz, 16GB

