const assert = require('chai').assert;
const _ = require('../index');

describe("#middle", () => {

  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(_.middle([1, 2, 3]),[2]);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(_.middle([1, 2, 3, 4, 5, 6]),[3,4]);
  });

  it("returns [] for []", () => {
    assert.deepEqual(_.middle([]),[]);
  });

  it("returns [0,1] for [0,1]", () => {
    assert.deepEqual(_.middle([0,1]),[0,1]);
  });

  it("returns [0] for [0]", () => {
    assert.deepEqual(_.middle([0]),[0]);
  });


});