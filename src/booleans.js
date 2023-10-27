const negate =(a) => {
return !a
};

const both = (a, b) => {
  if (a && b) {
    return true;
  } else {
    return false;
  }
};

const either = (a, b) => {
  if (a || b) {
    return true;
  } else {
    return false;
  }
};

const none = (a, b) => {
  if (a || b) {
    return false;
  } else {
    return true;
  }
};

function one (a, b) {
  if ((a && b) && (!a && !b)) {
    return false;
  } else {
    return true;
  }
};

function truthiness (a) {
const falsy = [false, undefined, 0, null, undefined, NaN];
  if (a = falsy) {
    return false; 
  } else {
    return true;
  }
};

const isEqual = (a, b) => {
  if (a === b) {
    return true;
  } else {
    return false;
  }
};

function isGreaterThan(a, b) {
  if (a > b) {
    return true;
  } else {
    return false;
  }
};

function isLessThanOrEqualTo(a, b) {
  if (a <= b) {
    return true;
  } else {
    return false;
  }
};

function isOdd(a) {
if (a%2 == 1) {
  return true;
} else {
  return false;
}

};

function isEven(a) {
  if (a%2 === 0) {
    return true;
  } else {
    return false;
  }
};

const isSquare = (a) => {
const num = Math.sqrt(a);
return a.isInteger(a);
};

function startsWith(char, string) {
 if (char === string[0]){
  return true;
 } else {
  return false;
 }
};

const containsVowels = (string) => {
  let lowerCase = string.toLowerCase();
  const vowelRegex = /[aeiou]/i;
  return vowelRegex.test(string);

};

function isLowerCase(string) {
  return /^[a-z0-9]+$/.test(string);
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
