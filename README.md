# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @chris-cho/lotide`

**Require it:**

`const _ = require('@chris-cho/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `const middle = function(array) {
  if (Number.isInteger((array.length / 2) % 2)) {
    return [array[(array.length / 2) - 1],array[array.length / 2]];
  } else {
    return [array[Math.floor((array.length / 2))]];
  }
};` : the function middle gets the median or middle value
* `const tail = function(someArray) {
  return someArray.slice(1);
};` : the function tail gets all values from the array except for the first value
* `const head = function(array) {
  return array[0];
};` : the function head gets the first value of an array