'use strict';

var takeWhile = require('take-while');
var dropWhile = require('drop-while');

/**
 * Returns an array of [takeWhile(coll, pred), dropWhile(coll, pred)]
 *
 * @param {Array} coll
 * @param {Function} pred
 * @param {Object} [ctx]
 *
 * @return {Array}
 */
module.exports = function splitWith(coll, pred, ctx) {
  return [takeWhile(coll, pred, ctx), dropWhile(coll, pred, ctx)];
};
