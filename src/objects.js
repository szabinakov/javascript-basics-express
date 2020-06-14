const createPerson = (name, age) => {
  const myObject = {
    name,
    age
  };
  return myObject;
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object.age;
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
}; 

const isOver65 = person => {
  if (person.age > 65) {
    return true;
  } else {
    return false;
  }
};

const getAges = people => {
  /*
  people.map(x => {
    return x.age;
  });*/
};

const findByName = (name, people) => {
  return people.find(object => name === object.name );
};

const findHondas = cars => {
  return cars.filter(object => object.manufacturer === "Honda" )
};

const averageAge = people => {
  const theAge = people.map(person => person.age);

  function getAvg(theAge) {
    const total = theAge.reduce((acc, c) => acc + c, 0);
    return total / theAge.length;
  }
  const theAvr = getAvg(theAge);
  return theAvr;
};

const createTalkingPerson = (name, age) => {
  return object
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
