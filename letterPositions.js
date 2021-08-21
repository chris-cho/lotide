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
  for (letter in sentence) {
    if (!results[sentence[letter]]) {
      results[sentence[letter]]  = [];
      results[sentence[letter]].push(Number(letter));
    } else {
      results[sentence[letter]].push(Number(letter));
    }
  }
  console.log(results);
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
