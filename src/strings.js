const sayHello = (string) => {
let greeting = 'Hello, ';
  return (greeting + string + "!")
};

const uppercase = (string) => {
  return string.toUpperCase();
};

const lowercase = (string) => {
  return string.toLowerCase();
};

const countCharacters = (string) => {
  return string.length;
};

const firstCharacter = (string) => {
  return string[0];
};

const firstCharacters = (string, n) => {
  if (string.length >4) {
  return string.slice(0,4);
} else {
  return string.slice(0,2);
}
}

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
