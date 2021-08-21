const flatten = (arr) => arr.reduce((addStrings, nextFunc) => addStrings.concat(nextFunc), []);

console.log(flatten([1, 2, [3, 4], 5, [6]]));