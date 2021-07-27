//from assertEqual.js
const assertEqual = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      console.log(`🛑🛑🛑 Assertion Failed : ${actual} !== ${expected}`);
    }
  }
  console.log(`✅✅✅ Assertion Passed : ${actual} === ${expected}`);
};

//starts here!
const tail = function(someArray) {
  return someArray.slice(1);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
