/*!
 * celia.js v3.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";function append(e,r){if(e)return e[e.length]=r}function iteratorCallback(e,r){return r?e.bind(r):e}function forEach(e,r,t){for(var n=iteratorCallback(r,t),a=0,i=e.length,s=void 0;!1!==s&&a<i;a++)s=n(e[a],a,e)}function forEach$1(e,r,t){return e&&forEach(e,r,t)}function grep(e,r,t){var n=[];if(e){var a=0,i=e.length;for(t=!!t;a<i;a++)!r(e[a],a)===t&&(n[n.length]=e[a])}return n}function inArray(e,r,t){if(r){if(r.indexOf)return r.indexOf(e,t);for(var n=r.length,a=t?t<0?Math.max(0,n+t):t:0;a<n;a++)if(a in r&&r[a]===e)return a}return-1}function includes(e,r){return-1!==inArray(r,e)}function join(e,r){for(var t=+r.length,n=e.length,a=0;a<t;a++)e[n++]=r[a];return e.length=n,e}function isNil(e){return null==e}function isFunction(e){return"function"==typeof e}function isNumber(e){return"number"==typeof e}function isArrayLike(e){return!isNil(e)&&isNumber(e.length)&&!isFunction(e)}function isString(e){return"string"==typeof e}var ref=Array.prototype,push=ref.push;function makeArray(e,r){var t=r||[];return e&&(isArrayLike(Object(e))?join(t,isString(e)?[e]:e):t.push?t.push(e):push.call(t,e)),t}function forIn(e,r,t){var n=iteratorCallback(r,t);for(var a in e)if(!1===n(e[a],a,e))break}function forNumber(e,r,t){for(var n=iteratorCallback(r,t),a=0,i=void 0;!1!==i&&a<e;a++)i=n(a,a,a)}function each(e,r,t){e&&(isArrayLike(e)?forEach(e,r,t):isNumber(e)?forNumber(e,r,t):forIn(e,r,t))}function append$1(e,r){e[e.length]=r}function map(e,r,t){var n=[],a=iteratorCallback(r,t);return each(e,function(e){isNil(e=a(e))||append$1(n,e)}),n}function removeAt(e,r){return e.splice(r,1),r}function remove(e,r){var t=inArray(r,e);return 0<=t?(removeAt(e,t),r):null}function toArray(e){return e&&[].concat(e)}var array={append:append,forEach:forEach$1,grep:grep,inArray:inArray,includes:includes,join:join,makeArray:makeArray,map:map,remove:remove,removeAt:removeAt,toArray:toArray},DASH_ALPHA_REGEX=/-([a-z])/g;function camelCase(e){return e.replace(DASH_ALPHA_REGEX,function(e,r){return r.toUpperCase()})}function isObject(e){return!isNil(e)&&"object"==typeof e}function parseArray(e,r){return r?new Date(Date.UTC(e[0],e[1]||0,isNil(e[2])?1:e[2],e[3]||0,e[4]||0,e[5]||0,e[6]||0)):new Date(e[0],e[1]||0,isNil(e[2])?1:e[2],e[3]||0,e[4]||0,e[5]||0,e[6]||0)}var UNITS={},setter=function(e,r){UNITS[e]=UNITS[e.slice(0,-1)]=UNITS[r]=r};function normalizeUnit(e,r){return UNITS[e]||r}setter("years","Y"),setter("months","M"),setter("dates","D"),setter("days","d"),setter("hours","h"),setter("minutes","m"),setter("seconds","s"),setter("milliseconds","ms");var indexOfUnits={Y:0,M:1,d:2,h:3,m:4,s:5,ms:6};function getIndex(e){return e=normalizeUnit(e,"ms"),indexOfUnits[e]}function add(e,r,t){var n=[e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()];if(isObject(r))forIn(r,function(e,r){var t=getIndex(r);n[t]+=e});else{var a=getIndex(t);n[a]+=r}return e.setTime(+parseArray(n)),e}function clone(e){return new Date(+e)}function isLeapYear(e){var r=e.getFullYear();return r%4==0&&r%100!=0||r%400==0}var arr=[31,28,31,30,31,30,31,31,30,31,30,31],arr2=[31,29,31,30,31,30,31,31,30,31,30,31];function daysInYear(e){return isLeapYear(e)?arr2:arr}function isUndefined(e){return void 0===e}function dayOfYear(e,r){var t=daysInYear(e),n=e.getMonth(),a=0;return forNumber(n,function(e){a+=t[e]}),a+=e.getDate(),isUndefined(r)?a:(e.setTime(+e+864e5*(r-a)),e)}function daysInMonth(e){return daysInYear(e)[e.getMonth()]}var ASP_NET_JSON_REGEX=/^\/?Date\((-?\d+)/i,BASIC_ISO_REGEX=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)\s*([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,DATES_REGEX=[["YYYY-MM-DD",/(\d{4})-(\d\d)-(\d\d)/],["YYYY-MM",/(\d{4})-(\d\d)/,!1],["YYYYMMDD",/(\d{4})(\d\d)(\d\d)/],["YYYYMM",/(\d{4})(\d\d)/,!1],["YYYY",/\d{4}/,!1]],EXTENDED_ISO_REGEX=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)\s*([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,FORMAT_REGEX=/\[.*?\]|Y{2,4}|y{2,4}|M{1,2}|D{1,2}|d{1,2}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|SSS|Z{1,2}/g,TIMES_REGEX=[["HH:mm:ss.SSSS",/(\d\d):(\d\d):(\d\d)\.(\d+)/],["HH:mm:ss,SSSS",/(\d\d):(\d\d):(\d\d),(\d+)/],["HH:mm:ss",/(\d\d):(\d\d):(\d\d)/],["HH:mm",/(\d\d):(\d\d)/],["HHmmss.SSSS",/(\d\d)(\d\d)(\d\d)\.(\d+)/],["HHmmss,SSSS",/(\d\d)(\d\d)(\d\d),(\d+)/],["HHmmss",/(\d\d)(\d\d)(\d\d)/],["HHmm",/(\d\d)(\d\d)/],["HH",/\d\d/]],TZ_REGEX=/(Z)|[+-](\d\d)(?::?(\d\d))?/,TIMEZONE_OFFSET=(new Date).getTimezoneOffset(),toString=Object.prototype.toString;function toString$1(e){return toString.call(e)}function isDate(e){return"[object Date]"===toString$1(e)}function extractFrom(e){var t,n,a=[],i=EXTENDED_ISO_REGEX.exec(e)||BASIC_ISO_REGEX.exec(e);if(i){if(forEach(DATES_REGEX,function(e,r){if(n=e[1].exec(i[1]))return forNumber(3,function(e){a[e]=parseInt(n[e+1]||1,10)}),a[1]-=1,t=!1!==e[2],!1}),e.indexOf(a[0]))return e;if(n=null,i[3]&&forEach(TIMES_REGEX,function(e){if(n=e[1].exec(i[3]))return a=a.concat(n.slice(1).map(function(e){return parseInt(e,10)})),!1}),!t&&n)return a;if(n=null,i[4]){n=TZ_REGEX.exec(i[4]);var r=TIMEZONE_OFFSET;n[1]||(a[3]-=n[2],a[4]-=n[3]||0),a[4]-=r}return a}return 4===e.length&&DATES_REGEX[4][1].test(e)?((a=[parseInt(e,10),0,1]).isUTC=!0,a):e}function parseFromFormat(t,n){var e,r=n.length,a=[],i=!1;if(forNumber(r,function(e){var r=t.charAt(e);switch(n.charAt(e)){case"Y":case"y":a[0]=(a[0]||"")+r;break;case"M":a[1]=(a[1]||"")+r;break;case"D":case"d":a[2]=(a[2]||"")+r;break;case"H":case"h":a[3]=(a[3]||"")+r;break;case"m":a[4]=(a[4]||"")+r;break;case"s":a[5]=(a[5]||"")+r;break;case"S":a[6]=(a[6]||"")+r;break;case"Z":i=!0}}),a=a.map(function(e){return parseInt(e,10)}),i)if(e=TZ_REGEX.exec(t.slice(-1<n.indexOf("ZZ")?-5:-6))){var s=TIMEZONE_OFFSET;if(!e[1]){var o="+"===e[0].charAt(0)?1:-1;a[3]-=e[2]*o,a[4]-=(e[3]||0)*o}a[4]-=s}else a.isUTC=i&-1<t.indexOf("Z");return isNil(a[1])||(a[1]-=1),a}function parseStringOrArray(e,r,t){if(!isString(e))return parseArray(e,!0===r);if(isString(r))return parseArray(parseFromFormat(e,r),t);var n=extractFrom(e);if(n!==e)return parseArray(n,n.isUTC||!0===r);var a=ASP_NET_JSON_REGEX.exec(e);return new Date(null!==a?+a[1]:e)}function parse(e,r,t){return e=isNil(e)?new Date:e.length?parseStringOrArray(e,r,t):isNumber(e)?new Date(e):isDate(e)?new Date(+e):e._i&&e.isValid()?new Date(+e):new Date}function monthDiff(e,r){var t=12*(r.getFullYear()-e.getFullYear())+(r.getMonth()-e.getMonth()),n=add(clone(e),t,"months");return-(t+(r<n?(r-n)/(n-add(clone(e),t-1,"months")):(r-n)/(add(clone(e),t+1,"months")-n)))||0}function absFloor(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function diff(e,r,t,n){var a;switch(r=parse(r),t=normalizeUnit(t)){case"Y":a=monthDiff(e,r)/12;break;case"M":a=monthDiff(e,r);break;case"s":a=(e-r)/1e3;break;case"m":a=(e-r)/6e4;break;case"h":a=(e-r)/36e5;break;case"d":a=(e-r)/864e5;break;default:a=e-r}return n?a:absFloor(a)}function startOf(e,r){switch(r=normalizeUnit(r)){case"Y":e.setMonth(0);case"M":e.setDate(1);case"D":case"d":e.setHours(0);case"h":e.setMinutes(0);case"m":e.setSeconds(0);case"s":e.setMilliseconds(0)}return e}function endOf(e,r){return"ms"===(r=normalizeUnit(r,"ms"))||(startOf(e,r),add(e,1,r),add(e,-1,"ms")),e}function padLeft(e,r){return void 0===r&&(r=2),("000000"+e).slice(-r)}function timezone(e,r){var t;return e<0?(t="+",e=Math.abs(e)):t="-",""+t+padLeft(Math.floor(e/60))+(r?"":":")+padLeft(Math.floor(e%60))}function h12(e){return 12<(e=e||24)?e-12:e}function format(r,e){return e&&"UTC"!==e?e.replace(FORMAT_REGEX,function(e){switch(e){case"YY":return String(r.getFullYear()).slice(-2);case"YYYY":case"yyyy":return r.getFullYear();case"M":return r.getMonth()+1;case"MM":return padLeft(r.getMonth()+1);case"D":case"d":return r.getDate();case"DD":case"dd":return padLeft(r.getDate());case"H":return r.getHours();case"HH":return padLeft(r.getHours());case"h":return h12(r.getHours());case"hh":return padLeft(h12(r.getHours()));case"m":return r.getMinutes();case"mm":return padLeft(r.getMinutes());case"s":return r.getSeconds();case"ss":return padLeft(r.getSeconds());case"SSS":return padLeft(r.getMilliseconds(),3);case"Z":return timezone(TIMEZONE_OFFSET);case"ZZ":return timezone(TIMEZONE_OFFSET,!0);default:return e}}):r.toISOString()}function compare(e,r,t,n){if(r=parse(r),"ms"===(t=normalizeUnit(t,"ms")))switch(n){case"before":return+e<+r;case"after":return+r<+e;default:return+e==+r}else{var a=+r;switch(n){case"before":return+endOf(clone(e),t)<a;case"after":return+startOf(clone(e),t)>a;default:return+startOf(clone(e),t)<=a&&a<=+endOf(clone(e),t)}}}function isAfter(e,r,t){return compare(e,r,t,"after")}function isBefore(e,r,t){return compare(e,r,t,"before")}function isBetween(e,r,t,n,a){return("("===(a=a||"()").charAt(0)?isAfter(e,r,n):!isBefore(e,r,n))&&(")"===a.charAt(1)?isBefore(e,t,n):!isAfter(e,t,n))}function isSame(e,r,t){return compare(e,r,t)}function isSameOrAfter(e,r,t){return!isBefore(e,r,t)}function isSameOrBefore(e,r,t){return!isAfter(e,r,t)}function isValid(e){return"Invalid Date"!==e.toString()}function subtract(e,r,t){return add(e,-r,t)}var date={add:add,clone:clone,dayOfYear:dayOfYear,daysInMonth:daysInMonth,diff:diff,endOf:endOf,format:format,isAfter:isAfter,isBefore:isBefore,isBetween:isBetween,isLeapYear:isLeapYear,isSame:isSame,isSameOrAfter:isSameOrAfter,isSameOrBefore:isSameOrBefore,isValid:isValid,parse:parse,startOf:startOf,subtract:subtract};function forIn$1(e,r,t){return e&&forIn(e,r,t)}function forNumber$1(e,r,t){return e&&forNumber(e,r,t)}function isAsyncFunction(e){return"[object AsyncFunction]"===toString$1(e)}function isBoolean(e){return"boolean"==typeof e}function isPromiseLike(e){return!!e&&isFunction(e.then)}function sleep(r){return new Promise(function(e){setTimeout(e,r)})}var RAW_DATA_TYPES={};function type(e){return isNil(e)?e+"":isObject(e)||isFunction(e)?RAW_DATA_TYPES[toString$1(e)]||"object":typeof e}"Boolean,Number,String,Function,Array,Date,RegExp,Object,Error,Symbol".split(",").forEach(function(e){RAW_DATA_TYPES["[object "+e+"]"]=e.toLowerCase()});var index={array:array,camelCase:camelCase,date:date,each:each,forEach:forEach$1,forIn:forIn$1,forNumber:forNumber$1,isArrayLike:isArrayLike,isAsyncFunction:isAsyncFunction,isBoolean:isBoolean,isDate:isDate,isFunction:isFunction,isNil:isNil,isNumber:isNumber,isObject:isObject,isPromiseLike:isPromiseLike,isString:isString,isUndefined:isUndefined,sleep:sleep,type:type};module.exports=index;
