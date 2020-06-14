const sayHello = string => {
  return `Hello, ${string}!`;
};

const uppercase = string => {
  return string.toUpperCase();
  /* 
 const letter = string;
 const up =  letter.toUpperCase();
 return up; */
};

const lowercase = string => {
  return string.toLowerCase();
  /* const littleletters = string;
  const minis = littleletters.toLowerCase();
  return minis; */
};

const countCharacters = string => {
  return string.length;
  /*
  const howlong = string;
  const howlongexactly = howlong.length;
  return howlongexactly; */
};

const firstCharacter = string => {
  return string.charAt(0);
};

const firstCharacters = (string, n) => {
  return string.substring(0, n);
  /*
  const theString = string;
  const theNumber = n; 
  return theString.substring(0, theNumber); */
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
};
