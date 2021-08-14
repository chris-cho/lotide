const assertEqual = require('./assertEqual');

//starts here!
const tail = function(someArray) {
  return someArray.slice(1);
};

module.exports = tail;