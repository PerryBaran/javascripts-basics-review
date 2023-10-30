const getNthElement = (index, array) => {
  const adjustIndex = index % array.length;
  return array[adjustIndex];
};

const arrayToCSVString = array => {
  return array.join(',');
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  const newArray = array.concat(element);
  return newArray;
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

const numbersToStrings = numbers => {
  const newString = numbers.map(numbers => numbers.toString());
  return newString;
};

const uppercaseWordsInArray = strings => {
  return strings.map(word => word.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(word =>
    word
      .split('')
      .reverse()
      .join('')
  );
};

const onlyEven = numbers => {
  return numbers.filter(number => number % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  return array.filter((_, i) => i !== index);
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(word =>
    ['a', 'e', 'i', 'o', 'u'].includes(word[0].toLowerCase())
  );
};

const removeSpaces = string => {
  const newStringArray = string.split(' ');
  return newStringArray.join('');
};

const sumNumbers = numbers => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

const sortByLastLetter = strings => {
  return strings.sort((a, b) => {
    const lastLetterA = a.charAt(a.length - 1).toLowerCase();
    const lastLetterB = b.charAt(b.length - 1).toLowerCase();
    return lastLetterA.localeCompare(lastLetterB);
  });
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
