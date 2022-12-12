const createPerson = (name, age) => {
  return {
    name: name,
    age: age
  }

};

const getName = object => {
  return object.name;

};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  if (person.age > 65) {
    return true;
  } else {
    return false
  }
};

const getAges = people => {
  let peopleAges = [];
  people.forEach(item => peopleAges.push(item.age));
  return peopleAges;
};

const findByName = (name, people) => {
  const result = people.find(item => item.name === name);
  return result;

};

const findHondas = cars => {
  const result = cars.filter(item => item.manufacturer === 'Honda');
  return result;

};

const averageAge = people => {
  let sum = 0;
  people.forEach(item => (sum += item.age));

  const average = sum / people.length;
  return average;

};

const createTalkingPerson = (name, age) => {
return {
  name: name,
  age: age,
  introduce: (personName)=> `Hi ${personName}, my name is ${name} and I am ${age}!`
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
