[![Build Status](https://travis-ci.org/landau/split-with.svg)](https://travis-ci.org/landau/split-with)

split-with
==========

Returns an array of [takeWhile(coll, pred), dropWhile(coll, pred)]

```js
function splitWith(coll, pred, ctx) { }
```

## Install

`npm i -S split-with`

## Usage

```js
var assert = require('assert');
var splitWith = require('split-with');
var is = require('is-predicate');

function gtEq3(val) {
  return is.greaterEq(3, val);
}

var arr = [1, 2, 3, 4, 5];
var expected = [[1, 2, 3], [4, 5]];

assert.deepEqual(splitWith(arr, gtEq3), expected); // true
```

