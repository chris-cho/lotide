const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  if (Number.isInteger((array.length / 2) % 2)) {
    return [array[(array.length / 2) - 1],array[array.length / 2]];
  } else {
    return [array[Math.floor((array.length / 2))]];
  }
};

module.exports = middle;