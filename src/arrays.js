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
  const addArray = array.concat(element);
  return addArray;
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(num => String(num));
};

const uppercaseWordsInArray = strings => {
  return strings.map(text => text.toUpperCase());
}
const reverseWordsInArray = strings => {
  return strings.map(text => text .split('') .reverse('') .join(''));
};

const onlyEven = numbers => {
  return numbers.filter(number => number % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  return array.filter((_, i) => i !== index);
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(word =>
    ['a', 'e', 'i', 'o,', 'u'].includes(word[0].toLowerCase())
  );
}

const removeSpaces = string => {
  return string.split(' ').join('');
};

const sumNumbers = numbers => {
  return numbers.reduce((total, num) => {
    return total + num;
  }, 0);
};

const sortByLastLetter = strings => {
  return strings.sort((a,b)=>a.charCodeAt(a.length-1)-b.charCodeAt(b.length-1));
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
