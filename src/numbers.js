const add = (a, b) => {
  return a + b;
};

const subtract = (b, a) => {
  return b - a;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

const power = (a, b) => {
  return a ** b;
};

const round = (a, b, c) => {
  return Math.round(a, b, c);
}

const roundUp = (a, b, c) => {
  return Math.ceil(a, b, c);
}

function roundDown (a) {
  // your code here
}

function absolute (a) {
  // your code here
}

function quotient (a, b) {
  // your code here
}

const remainder = (a, b) => {
  return a % b;
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder
}
