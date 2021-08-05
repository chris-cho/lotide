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

const eqArrays = function(arrayOne, arrayTwo) {
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (letter of sentence) {
    if (results[letter]) {
      results[letter] ++;
    }
    else {
    results[letter] = 1;
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
