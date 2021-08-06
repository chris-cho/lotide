// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let temp = true;
  if (Object.keys(actual).length !== Object.keys(expected).length) {
    temp = false;
  }
  for (const element in actual) {
    if (Array.isArray(actual[element])) {
      if (actual[element].length !== expected[element].length) {
        temp = false;
      }
      for (let j = 0; j < element.length; j++){
        if (actual[element][j] != expected[element][j]){
          temp = false;
        }
      }
    }
    else {
      if (actual[element] != expected[element]){
        temp = false;
      }
    }
  }
  if (temp === true) {
    console.log(`✅✅✅ Assertion Passed : ${inspect(actual)} === ${inspect(expected)}`);
  }
  else {
    console.log(`🛑🛑🛑 Assertion Failed : ${inspect(actual)} !== ${inspect(expected)}`);
  }
  return temp;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);// => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false