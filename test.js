'use strict';

const assert = require('assert');
const predicate = require('predicate');
const { describe, it } = require('mocha');
const splitWith = require('./');

function gtEq3(val) {
  return predicate.greaterEq(3, val);
}

describe('splitWith', () => {
  it('should ', () => {
    const arr = [1, 2, 3, 4, 5];
    const expected = [
      [1, 2, 3],
      [4, 5]
    ];

    assert.deepEqual(splitWith(arr, gtEq3), expected);
  });
});
