"use strict";

const assert = require("assert");
const splitWith = require(".");

function ltEq3(val) {
  return val <= 3;
}

const arr = [1, 2, 3, 4, 5];
const expected = [
  [1, 2, 3],
  [4, 5],
];

assert.deepEqual(
  splitWith(arr, ltEq3),
  expected,
  "Splits the array in half at 3"
);
