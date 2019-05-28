'use strict';

const takeWhile = require('take-while');
const dropWhile = require('drop-while');

/**
 * Returns an array of [takeWhile(coll, pred), dropWhile(coll, pred)]
 *
 * @param {Array} coll -
 * @param {Function} pred -
 * @param {Object} [ctx] -
 *
 * @returns {Array} -
 */
module.exports = function splitWith(coll, pred, ctx) {
  return [takeWhile(coll, pred, ctx), dropWhile(coll, pred, ctx)];
};
