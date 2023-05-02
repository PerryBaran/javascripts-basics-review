const getNthElement = (index, array) => {
  const newIndex = index % array.length;
  //  findIndex()- takes a callback function that is called with each element in the array and its index. In this case, we use the callback function to find the index that matches our calculated index
  const elementIndex = array.findIndex((_, i) => i === newIndex);
  return array[elementIndex];
};

const arrayToCSVString = array => {
  return array.join();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  // splice mutates the original array(second parameter is n of items to remove)
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  // map numbers array using String object
  return numbers.map(String);
};

const uppercaseWordsInArray = strings => {
  return strings.map(s => s.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(s =>s.split('').reverse().join(''));
};

const onlyEven = numbers => {
  return numbers.filter(number => number % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  return array.filter(item => item !== array[index]);
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(string => {
    return string[0].toLowerCase() === 'a' || string[0].toLowerCase() === 'e' || string[0].toLowerCase() === 'i' || string[0].toLowerCase() === 'o' || string[0].toLowerCase() === 'u';
  });
};

const removeSpaces = string => {
  return string.split(' ').join('');
};

const sumNumbers = numbers => {
  return numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
};

const sortByLastLetter = strings => {
  // sort() method is called on the strings array, and a comparison function is passed as an argument to determine the sorting order
  const newArr = strings.sort((a, b) => {
    // This  comparison function takes two arguments, a and b, which represent two
    // elements being compared. Inside the function, it compares the last letter of each
    // string using the charAt() method and the length property of the strings
    if (a.charAt(a.length - 1) > b.charAt(b.length - 1)) {
      return 1;
    } else {
      return -1;
    }
  });
  return newArr;
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
