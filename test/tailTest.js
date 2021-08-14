const assert = require('chai').assert;
const _ = require('../index');

describe("#tail", () => {

  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(_.tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns ['New', 'Lighthouse', 'Labs'] for ['Hello', 'New', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(_.tail(["Hello", "New", "Lighthouse", "Labs"]), ["New", "Lighthouse", "Labs"]);
  });

});