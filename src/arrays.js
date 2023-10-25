const getNthElement = (index, array) => {
  while (index >= array.length) {
    index -= array.length;
  }
  return array[index];
};

const arrayToCSVString = array => {
  // let newString = `${array[0]},`;
  // for (let i = 1; i < array.length; i++) {
  //   i !== array.length - 1
  //     ? (newString += `${array[i]},`)
  //     : (newString += `${array[i]}`);
  // }
  // return newString;
  ///////////////////////////////////////////
  // let newString = '';
  // for (let i = 0; i < array.length; i++) {
  //   i !== array.length - 1
  //     ? (newString += `${array[i]},`)
  //     : (newString += `${array[i]}`);
  // }
  // return newString;
  return array.toString();
};

const csvStringToArray = string => {
  // const array = [string[0]];
  // for (let i = 1; i < string.length; i++) {
  //   if (i % 2 === 0) array.push(string[i]);
  // }
  // return array;

  /////////////////////////////////////////////
  // const array = [];
  // for (let i = 0; i < string.length; i++) {
  //   if (i % 2 === 0) array.push(string[i]);
  // }
  // return array;

  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  // const newArray = [];
  // for (let i = 0; i < array.length; i++) {
  //   newArray.push(array[i]);
  // }
  // newArray.push(element);
  // return newArray;

  ////////////////////////////////////////
  // const newArray = [];
  // array.forEach(item => newArray.push(item));
  // newArray.push(element);
  // return newArray;

  const newArray = array.map(item => item);
  newArray.push(element);
  return newArray;
};

const removeNthElement = (index, array) => {
  // for (let i = 0; i < array.length; i++) {
  //   if (i === index) array.splice(i, 1);
  // }

  array.splice(index, 1);
};

const numbersToStrings = numbers => {
  // const newArray = [];
  // numbers.forEach(num => {
  //   newArray.push(String(num));
  // });
  // return newArray;

  return numbers.map(num => String(num));
};

const uppercaseWordsInArray = strings => {
  // const newArray = [];
  // strings.forEach(string => {
  //   newArray.push(string.toUpperCase());
  // });
  // return newArray;

  return strings.map(string => string.toUpperCase());
};

const reverseWordsInArray = strings => {
  const newArray = [];
  for (let i = 0; i < strings.length; i++) {
    let newString = '';
    for (let j = strings[i].length - 1; j >= 0; j--) {
      newString += strings[i][j];
    }
    newArray.push(newString);
  }
  return newArray;
};

const onlyEven = numbers => {
  // const newArray = [];
  // numbers.forEach(num => {
  //   if (num % 2 === 0) newArray.push(num);
  // });
  // return newArray;

  return numbers.filter(num => num % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  // const newArray = [];
  // for (let i = 0; i < array.length; i++) {
  //   if (i !== index) newArray.push(array[i]);
  // }
  // return newArray;

  return array.filter((item, i) => i !== index);
};

const elementsStartingWithAVowel = strings => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return strings.filter(item => vowels.includes(item[0].toLowerCase()));
};

const removeSpaces = string => {
  //return string.replace(/ /gi, '');
  // return string.split(' ').join('');
  ////// Try with reduce method //////
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
