const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const assertArraysEqual = function(arrayOne, arrayTwo) {
  let temp;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      console.log(`${arrayOne} and ${arrayTwo} are not equal`);
      return false;
    }
  }
  console.log(`${arrayOne} and ${arrayTwo} are equal`);
  return true;
};


const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);