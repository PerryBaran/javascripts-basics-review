const getNthElement = (index, array) => {
  
  if (index >= array.length){
    return array[index-array.length];
  }
  return array[index];
};

const arrayToCSVString = array => {
const csv = array.toString();
return(csv);
};

const csvStringToArray = string => {
const array = string.split(',');
return(array);
};

const addToArray = (element, array) => {
array.push(element);
};

const addToArray2 = (element, array) => {
return array.concat(element);
};

const removeNthElement = (index, array) => {
array.splice(index, 1);
};

const numbersToStrings = numbers => {
return numbers.map(String);
};

const uppercaseWordsInArray = strings => {

};

const reverseWordsInArray = strings => {

};

const onlyEven = numbers => {
  const even = numbers.filter((num) => num % 2 === 0);
  return even;
};

const removeNthElement2 = (index, array) => {
return array.splice(index, 2,0);
};

const elementsStartingWithAVowel = strings => {
const vowels = ['a', 'e', 'i', 'o', 'u'];
const elementsWithVowel = strings.filter((string) => string.startsWith(vowels/i));
return elementsWithVowel;
};

const removeSpaces = string => {
const allSpacesRemoved = string.replaceAll(' ', '');
return allSpacesRemoved;
};

const sumNumbers = numbers => {
const sum = numbers.reduce((accumulator, current) => (accumulator + current))
return sum;
};

const sortByLastLetter = strings => {
  return strings.sort((a, b, c, d) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))

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
