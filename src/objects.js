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
  return cars.filter(car => car.manufacturer === 'Honda');
};

const averageAge = people => {
  if (people.length === 0) {
    return 0;
  }
  const avgAge = people.reduce((acc, person) => acc + person.age, 0);
  return avgAge / people.length;
};

const createTalkingPerson = (name, age) => {
  return {
    'name': name,
    'age': age,
    'introduce': otherPerson => {
      return `Hi ${otherPerson}, my name is ${name} and I am ${age}!`;
    }
    }
}

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
