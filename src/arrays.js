const getNthElement = (index, array) => {
  return array[index % 4];
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(/[ ,]+/);
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  const newThing = [];
  newThing.push(element);
  const newArray = array.concat(newThing);
  return newArray;
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(String);
};

const uppercaseWordsInArray = strings => {
  return strings.map(x => x.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(x =>
    x
      .split('')
      .reverse()
      .join(''),
  );
};

const onlyEven = numbers => {
  const newArray = numbers.filter(number => number % 2 === 0);
  return newArray;
};

const removeNthElement2 = (index, array) => {
  return array.filter((x, elementPos) => elementPos !== index);
};

const elementsStartingWithAVowel = strings => {
  const regex = /[aeuioAEUIO]/i;
  return strings.filter(string => string.charAt(0) == string.match(regex));
};

const removeSpaces = strings => {
  return strings.replace(/ /g, '');
};

const sumNumbers = numbers => {
  const sum = numbers.reduce((acc, value) => acc + value);
  return sum;
};

const sortByLastLetter = strings => {
  return strings.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
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
  sortByLastLetter,
};
