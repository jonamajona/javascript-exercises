const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arrayToSum) {
	return arrayToSum.reduce(
    (previousValue, currentValue) => previousValue + currentValue, 0)
};

const multiply = function(arrayToMultiply) {
  return arrayToMultiply.reduce(
    (previousValue, currentValue) => previousValue * currentValue, 1)
};

const power = function(num, power) {
  return Math.pow(num, power);
};

const factorial = function(num) {
  let factorial = 1;
  for (let i = num; i > 0; i--)
  {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
