const Calculator = () => {
  let result = 0;
  return {
    add: function add(number) {
      if (typeof number === 'number') {
        result += number;
      }
      return add;
    },
    subtract: function subtract(num) {
      if (typeof num === 'number') {
        result -= num;
      }
      return subtract;
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
const calculator = Calculator();
module.exports = calculator;
