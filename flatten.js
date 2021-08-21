const flatten = (arr) => arr.reduce((addStrings, nextFunc) => addStrings.concat(nextFunc), []);

module.exports = flatten;