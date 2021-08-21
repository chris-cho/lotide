const flatten = require("./flatten");

const without = (source, itemsToRemove) => flatten(source).filter(x => !itemsToRemove.includes(x));

console.log(without([1, 2, 3], [1])); // => [2, 3];
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]