const getNthElement = (index, array) => {
  if (index > array.length) {
    index = 0;
    console.log(index);
  } else {
    return array[index];
  }
};
// array = ["cat", "dog", "elephant", "fox"];
// getNthElement(3, array);

const arrayToCSVString = array => {
  // your code here
};

const csvStringToArray = string => {
  // your code here
};

const addToArray = (element, array) => {
  // your code here
};

const addToArray2 = (element, array) => {
  // your code here
};

const removeNthElement = (index, array) => {
  // your code here
};

const numbersToStrings = numbers => {
  // your code here
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
