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

assertArraysEqual([1, 2, 3], [1, 2, 3]);