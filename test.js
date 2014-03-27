'use strict';

var assert = require('assert');
var splitWith = require('./');
var is = require('is-predicate');

function gtEq3(val) {
  return is.greaterEq(3, val);
}

describe('splitWith', function() {
  it('should ', function() {
    var arr = [1, 2, 3, 4, 5];
    var expected = [[1, 2, 3], [4, 5]];

    assert.deepEqual(splitWith(arr, gtEq3), expected);
  });
});
