const getNthElement = (index, array) => array[index % array.length];

const arrayToCSVString = array => array.toString();

const csvStringToArray = string => string.split(',');

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => array.concat(element);

const removeNthElement = (index, array) => array.splice(index, 1);

const numbersToStrings = numbers => {
  return numbers.map(element => element.toString());
};

const uppercaseWordsInArray = strings => {
  // your code here
};

const reverseWordsInArray = strings => {
  // your code here
};

const onlyEven = numbers => {
  Array.map();

  function isOdd(a) {
    return Math.abs(a % 2) == 1;
  }

  function isEven(a) {
    return a % 2 == 0;
  }
};

const removeNthElement2 = (index, array) => {
  // your code here
};

const elementsStartingWithAVowel = strings => {
  // your code here
};

const removeSpaces = string => {
  // your code here
};

const sumNumbers = numbers => {
  // your code here
};

const sortByLastLetter = strings => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
