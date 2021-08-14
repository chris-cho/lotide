const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)){
    console.log(`${arrayOne} and ${arrayTwo} are equal`);
  } else if (!eqArrays(arrayOne, arrayTwo)){
    console.log(`${arrayOne} and ${arrayTwo} are not equal`);
  }
};

module.exports = assertArraysEqual;