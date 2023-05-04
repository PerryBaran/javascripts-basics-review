function negate(a) {
  return !a;
}

function both(a, b) {
  return a && b;
}

function either(a, b) {
  return a || b;
}

function none(a, b) {
  return !a && !b;
}

function one(a, b) {
  return a !== b;
}

function truthiness(a) {
  return a ? true : false;
}

function isEqual(a, b) {
  return a === b;
}

function isGreaterThan(a, b) {
  return a > b;
}

function isLessThanOrEqualTo(a, b) {
  return a <= b;
}

function isOdd(a) {
  const oddNum = a % 2;
  if(oddNum !== 0) {
    return true;
  } else {
    return false;
  }
}

function isEven(a) {
  const eveNum = a % 2;
  if(eveNum === 0) {
    return true;
  } else {
    return false;
  }
}

function isSquare(a) {
  if(Math.sqrt(a) % 1 === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWith(char, string) {
  return string.charAt(0) === char;
}

// eslint-disable-next-line consistent-return
function containsVowels(string) {
  // regular expression to test whether the string contains any vowels (a, e, i, o, or u). The /i modifier makes the search case-insensitive, so it will match both lowercase and uppercase vowels
  return /[aeiou]/i.test(string);
}

function isLowerCase(string) {
  // this will return true;
  return string === string.toLowerCase();
}

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
