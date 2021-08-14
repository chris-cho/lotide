const assertEqual = require('./assertEqual');

const eqArrays = function(arrayOne, arrayTwo) {
  let index = 0;
  if (arrayOne.length >= arrayTwo.length) {
    index = arrayOne.length;
  }
  else {
    index = arrayTwo.length;
  }
  for (let i = 0; i < index; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;