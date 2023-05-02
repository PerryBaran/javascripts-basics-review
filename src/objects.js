const createPerson = (name, age) => {
  return {
    name, // same as name:name
    age
  };
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property) === true;
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  return people.map(person => person.age);
};

const findByName = (name, people) => {
  return people.find(person => person.name === name);
};

const findHondas = cars => {
  return cars.filter(car => car.manufacturer === 'Honda');
};

const averageAge = people => {
  const totalAge = people.reduce((acc, currVal) => {
    return acc + currVal.age;
  }, 0);
  const avgAge = totalAge / people.length;
  return avgAge;
};

const createTalkingPerson = (name, age) => {
  const newPerson = {
    name: name,
    age: age,
    introduce: function(guest) {
      return `Hi ${guest}, my name is ${this.name} and I am ${this.age}!`;
    }
  };
  return newPerson;
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
