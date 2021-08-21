const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed : ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed : ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (const index in object) {
    if (callback(object[index]) === true) {
        return index;
    }
  }
  return undefined;
};

assertEqual(findKey( {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
  }, x => x.stars === 2), "noma");

//only gets the first result of the callback. 2 only returns noma, not ora