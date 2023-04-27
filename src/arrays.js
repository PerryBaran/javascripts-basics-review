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
  // test states we need to return new array
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i]);
  }
  newArray.push(element);
  return newArray;
};

const removeNthElement = (index, array) => {
  array.splice(index, 1); // removes 1 element from array, splice is modifying the original array so no need to use return. The "1" is the number of elements to remove
};

const numbersToStrings = numbers => {
  // this converts every number in an array to a string using arrow function (=>)
  // .map creates a new array
  // toString() method returns a string representing the object. 
  return numbers.map(number => number.toString());
};

const uppercaseWordsInArray = strings => {
  // does the same as the above, only this time adding uppercase. The toUpperCase() method returns the value of the string converted to uppercase
  return strings.map(letter => letter.toString().toUpperCase());
};

const reverseWordsInArray = strings => {
  // using a for loop instead of .map - i = iterator 
  const reversedArray = [];
  for (let i = 0; i < strings.length; i++) {
    const reversedString = strings[i].split('').reverse().join('');
    reversedArray.push(reversedString);
  }
  return reversedArray;
};

const onlyEven = numbers => {
  const evenNumbers = numbers.filter(num => num % 2 === 0);
  return evenNumbers;
};

const removeNthElement2 = (index, array) => {
  if (index < 0 || index >= array.length) {
    return array;
  }
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== index) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

const elementsStartingWithAVowel = strings => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const vowelStrings = strings.filter(string => {
    const firstChar = string[0]?.toLowerCase();
    return vowels.includes(firstChar);
  });
  return vowelStrings;
};

const removeSpaces = string => {
  return string.split(' ').join('');
};

const sumNumbers = numbers => {
  let s = 0;
  for (let i = 0; i < numbers.length; i++) {
    s += numbers[i]
  }
  return s;
};

const sortByLastLetter = strings => {
  // your code here
}

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
