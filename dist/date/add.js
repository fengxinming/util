/*!
 * celia.js v2.1.1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var __chunk_1=require("./chunk-1975bbb1.js"),__chunk_2=require("./chunk-27959177.js"),__chunk_3=require("./chunk-d2dca2a0.js");function isObject(e){return!__chunk_1.isNil(e)&&"object"==typeof e}function forIn(e,n,t){var r=__chunk_2.iteratorCallback(n,t);for(var i in e)if(!1===r(e[i],i,e))break}var indexOfUnits={Y:0,M:1,d:2,h:3,m:4,s:5,ms:6};function getIndex(e){return e=__chunk_3.normalizeUnit(e,"ms"),indexOfUnits[e]}function add(e,n,t){var r=[e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()];if(isObject(n))forIn(n,function(e,n){var t=getIndex(n);r[t]+=e});else{var i=getIndex(t);r[i]+=n}return e.setTime(+__chunk_1.parseArray(r)),e}module.exports=add;
