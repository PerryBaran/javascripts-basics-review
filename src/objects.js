const createPerson = (name, age) => {
  const person = {name:name, age:age};
  return person;
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  const keys = Object.keys(object);
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === property.toString()) {
      return true;
    }
  }
  return false;
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  const ages = [];
  for (let i = 0; i < people.length; i++) {
    ages.push(people[i].age);
  }
  return ages;
};

const findByName = (name, people) => {
  let match;
  for (let i = 0; i < people.length; i++) {
    if (people[i].name === name) {
      match = people[i];
      break;
    }
  }
  return match;
};

const findHondas = cars => {
  const listOfHondas = cars.filter(car => car.manufacturer === 'Honda');
  return listOfHondas;
};

const averageAge = people => {
  // your code here
};

const createTalkingPerson = (name, age) => {
  // your code here
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
