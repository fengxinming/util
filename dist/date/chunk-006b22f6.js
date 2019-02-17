/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

function isNil (value) {
  /* eslint eqeqeq: 0 */
  return value == null;
}

/**
 * 将数组解析成date
 * @param {Array} arr
 * @param {Boolean|undefined} isUTC
 */
function parseArray (arr, isUTC) {
  var date = isUTC ?
    new Date(Date.UTC(
      arr[0],
      arr[1] || 0,
      isNil(arr[2]) ? 1 : arr[2],
      arr[3] || 0,
      arr[4] || 0,
      arr[5] || 0,
      arr[6] || 0
    )) : new Date(
      arr[0],
      arr[1] || 0,
      isNil(arr[2]) ? 1 : arr[2],
      arr[3] || 0,
      arr[4] || 0,
      arr[5] || 0,
      arr[6] || 0
    );
  return date;
}

exports.isNil = isNil;
exports.parseArray = parseArray;