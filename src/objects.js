const createPerson = (name, age) => {
return {
  name: name,
  age: age,

};
};

const getName = object => {
return object.name;
};

const getProperty = (property, object) => {
return object[property];
};

const hasProperty = (property, object) => {
return object.hasOwnProperty;
};

const isOver65 = person => {
if (person.age > 65) {
  return true;
} else {
  return false;
}
};

const getAges = people => {
const arrayAges = people.map(person => person.age);
return arrayAges;
};

const findByName = (name, people) => {
const person = people.find(person => person.name === name);
return person;
};

const findHondas = cars => {
const hondas = cars.filter(car => car.manufacturer === 'Honda');
return hondas;
};

const averageAge = people => {
let totalAge = 0;
for (i=0; i < people.length; i++) {
  totalAge += people[i].age;

return totalAge/people.length;
}
};

const createTalkingPerson = (name, age) => {
function introduce(name) {
return 'Hi ${name}, my name is ${name} and I am ${age}!';
}
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
