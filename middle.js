const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed : ${actual} !== ${expected}`);
  }
};

const assertArraysEqual = function(arrayOne, arrayTwo) {
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      console.log(`${arrayOne} and ${arrayTwo} are not equal`);
      return false;
    }
  }
  console.log(`${arrayOne} and ${arrayTwo} are equal`);
  return true;
};

const middle = function(array) {
  if (Number.isInteger((array.length / 2) % 2)) {
    return [array[(array.length / 2) - 1],array[array.length / 2]];
  } else {
    return [array[Math.floor((array.length / 2))]];
  }
};

assertArraysEqual(middle([1, 2, 3]),[2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]),[2,3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]); // => [3, 4]
