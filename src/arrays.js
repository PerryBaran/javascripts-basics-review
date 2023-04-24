const getNthElement = (index, array) => {
  let myIndex = index % array.length;
  return array[myIndex];
};

const arrayToCSVString = array => {
  let text = array.join();
  return text;
};

const csvStringToArray = string => {
  let text = string.split(',');
  return text;
};

const addToArray = (element, array) => {
  array.push(element);
//  return array; - I got stuck here, discussed with Jasmin 24/04 and the test is expecting undefined :)
};

const addToArray2 = (element, array) => {
  let newArray = [...array, element]; // ... = spread operator
  return newArray;
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
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
  // your code here
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
