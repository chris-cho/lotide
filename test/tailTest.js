/* const assertEqual = require('../assertEqual');
const tail = require('../tail');

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail! */

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {

  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns ['New', 'Lighthouse', 'Labs'] for ['Hello', 'New', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "New", "Lighthouse", "Labs"]), ["New", "Lighthouse", "Labs"]);
  });

});