const express = require('express');
const { sayHello } = require('./strings');
const { uppercase } = require('./strings');
const { lowercase } = require('./strings');
const { firstCharacters } = require('./strings');
const { add } = require('./numbers');
const { subtract } = require('./numbers');
const { multiply } = require('./numbers');
const { divide } = require('./numbers');
const { remainder } = require('./numbers');
const { negate } = require('./booleans');
const { truthiness } = require('./booleans');
const { isOdd } = require('./booleans');
const { startsWith } = require('./booleans');
const { getNthElement } = require('./arrays');
const { arrayToCSVString } = require('./arrays.js');
const { addToArray2 } = require('./arrays.js');
const { elementsStartingWithAVowel } = require('./arrays');
const { removeNthElement2 } = require('./arrays');

const app = express();

//
// strings
//

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  res.json({ result: firstCharacters(req.params.string, req.query.length || 1) });
});

//
// numbers
//

app.get('/numbers/add/:numberone/and/:numbertwo', (req, res) => {
  const numberOne = parseInt(req.params.numberone);
  const numberTwo = parseInt(req.params.numbertwo);
  if (!Number.isNaN(numberOne)) {
    res.status(200).json({ result: add(numberOne, numberTwo) });
  }
  res.status(400).json({ error: 'Parameters must be valid numbers.' });
});

app.get('/numbers/subtract/:firstnumber/from/:secondnumber', (req, res) => {
  const numberOne = parseInt(req.params.firstnumber);
  const numberTwo = parseInt(req.params.secondnumber);
  if (!Number.isNaN(numberTwo)) {
    res.status(200).json({ result: subtract(numberTwo, numberOne) });
  }
  res.status(400).json({ error: 'Parameters must be valid numbers.' });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/numbers/multiply', (req, res) => {
  if (req.body.a === undefined || req.body.b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(parseInt(req.body.a)) || Number.isNaN(parseInt(req.body.b))) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  res.status(200).json({ result: multiply(req.body.a, req.body.b) });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/numbers/divide', (req, res) => {
  if (req.body.a == undefined || req.body.b == undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (req.body.b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (Number.isNaN(parseInt(req.body.a)) || Number.isNaN(parseInt(req.body.b))) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  res.status(200).json({ result: divide(req.body.a, req.body.b) });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/numbers/remainder', (req, res) => {
  if (req.body.a === undefined || req.body.b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (req.body.b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (Number.isNaN(parseInt(req.body.a)) || Number.isNaN(parseInt(req.body.b))) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
  res.status(200).json({ result: remainder(req.body.a, req.body.b) });
});

//
// booleans
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/booleans/negate', (req, res) => {
  res.status(200).json({ result: negate(req.body.value) });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/booleans/truthiness', (req, res) => {
  res.status(200).json({ result: truthiness(req.body.value) });
});

app.get('/booleans/is-odd/:number', (req, res) => {
  if (isNaN(req.params.number)) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  }
  res.status(200).json({ result: isOdd(req.params.number) });
});

app.get('/booleans/:string/starts-with/:character', (req, res) => {
  if (req.params.character.length >= 2) {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  }
  res.status(200).json({ result: startsWith(req.params.character, req.params.string) });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/arrays/element-at-index/:number', (req, res) => {
  res.status(200).json({ result: getNthElement(req.params.number, req.body.array) });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/arrays/to-string', (req, res) => {
  res.status(200).json({ result: arrayToCSVString(req.body.array) });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/arrays/append', (req, res) => {
  res.status(200).json({ result: addToArray2(req.body.value, req.body.array) });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/arrays/starts-with-vowel', (req, res) => {
  res.status(200).json({ result: elementsStartingWithAVowel(req.body.array) });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/arrays/remove-element', (req, res) => {
  if (req.query.index == undefined) {
    res.status(200).json({ result: removeNthElement2(0, req.body.array) });
  }
  res.status(200).json({ result: removeNthElement2(parseInt(req.query.index), req.body.array) });
});

module.exports = app;
