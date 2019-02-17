/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
'use strict';

var ASP_NET_JSON_REGEX = /^\/?Date\((-?\d+)/i;

var BASIC_ISO_REGEX = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)\s*([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

var DATES_REGEX = [
  ['YYYY-MM-DD', /(\d{4})-(\d\d)-(\d\d)/],
  ['YYYY-MM', /(\d{4})-(\d\d)/, false],
  // ['MM/DD/YYYY', /(\d\d)\/(\d\d)\/(\d{4})/],
  ['YYYYMMDD', /(\d{4})(\d\d)(\d\d)/],
  ['YYYYMM', /(\d{4})(\d\d)/, false],
  ['YYYY', /\d{4}/, false]
];

var EXTENDED_ISO_REGEX = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)\s*([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

// export const COMPAT_NON_ISO_REGEX = /^\s*((?:\d\d[-/]\d\d|W\d\d[-/]\d|W\d\d|\d\d\d|\d\d)[-/](?:\d{6}|\d{4}))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)\s*([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

var FORMAT_REGEX = /\[.*?\]|Y{2,4}|y{2,4}|M{1,2}|D{1,2}|d{1,2}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|SSS|Z{1,2}/g;

var TIMES_REGEX = [
  ['HH:mm:ss.SSSS', /(\d\d):(\d\d):(\d\d)\.(\d+)/],
  ['HH:mm:ss,SSSS', /(\d\d):(\d\d):(\d\d),(\d+)/],
  ['HH:mm:ss', /(\d\d):(\d\d):(\d\d)/],
  ['HH:mm', /(\d\d):(\d\d)/],
  ['HHmmss.SSSS', /(\d\d)(\d\d)(\d\d)\.(\d+)/],
  ['HHmmss,SSSS', /(\d\d)(\d\d)(\d\d),(\d+)/],
  ['HHmmss', /(\d\d)(\d\d)(\d\d)/],
  ['HHmm', /(\d\d)(\d\d)/],
  ['HH', /\d\d/]
];

var TZ_REGEX = /(Z)|[+-](\d\d)(?::?(\d\d))?/;

var DASH_ALPHA_REGEX = /-([a-z])/g;

exports.DASH_ALPHA_REGEX = DASH_ALPHA_REGEX;
exports.ASP_NET_JSON_REGEX = ASP_NET_JSON_REGEX;
exports.EXTENDED_ISO_REGEX = EXTENDED_ISO_REGEX;
exports.BASIC_ISO_REGEX = BASIC_ISO_REGEX;
exports.DATES_REGEX = DATES_REGEX;
exports.TIMES_REGEX = TIMES_REGEX;
exports.TZ_REGEX = TZ_REGEX;
exports.FORMAT_REGEX = FORMAT_REGEX;