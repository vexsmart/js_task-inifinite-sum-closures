'use strict';

/***
 * @return {function}
 */
function makeAdder() {
  let sum = 0;

  function adder(num) {
    if (num.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    }
    sum += num;

    return adder;
  }

  return adder;
}

module.exports = makeAdder;
