const Calculator = () => {
  let result = 0;
  return {
    add: function add(number) {
      if (typeof number === 'number') {
        result += number;
      }
      return add;
    },
    substract: function substract(num) {
      if (typeof num === 'number') {
        result -= num;
      }
      return substract;
    },
    divide: function divide(num) {
      if (typeof num === 'number') {
        result /= num;
      }
      return divide;
    },
    multiply: function multiply(num) {
      if (typeof num === 'number') {
        result *= num;
      }
      return multiply;
    },
    getResult: function getResult() {
      return result;
    },
    reset: function reset() {
      result = 0;
      return result;
    },
  };
};
const calculator = Calculator;
module.exports = calculator;
