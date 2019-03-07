/*!
 * celia.js v3.0.0-beta.5
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";function append(r,n){if(r)return r[r.length]=n}function iteratorCallback(r,n){return n?r.bind(n):r}function forEach(r,n,e){for(var t=iteratorCallback(n,e),i=0,a=r.length,o=void 0;!1!==o&&i<a;i++)o=t(r[i],i,r)}function forEach$1(r,n,e){return r&&forEach(r,n,e)}function grep(r,n,e){var t=[];if(r){var i=0,a=r.length;for(e=!!e;i<a;i++)!n(r[i],i)===e&&(t[t.length]=r[i])}return t}function inArray(r,n,e){if(n){if(n.indexOf)return n.indexOf(r,e);for(var t=n.length,i=e?e<0?Math.max(0,t+e):e:0;i<t;i++)if(i in n&&n[i]===r)return i}return-1}function includes(r,n){return-1!==inArray(n,r)}function join(r,n){for(var e=+n.length,t=r.length,i=0;i<e;i++)r[t++]=n[i];return r.length=t,r}function isNil(r){return null==r}function isFunction(r){return"function"==typeof r}function isNumber(r){return"number"==typeof r}function isArrayLike(r){return!isNil(r)&&isNumber(r.length)&&!isFunction(r)}function isString(r){return"string"==typeof r}var ref=Array.prototype,push=ref.push;function makeArray(r,n){var e=n||[];return r&&(isArrayLike(Object(r))?join(e,isString(r)?[r]:r):e.push?e.push(r):push.call(e,r)),e}function forIn(r,n,e){var t=iteratorCallback(n,e);for(var i in r)if(!1===t(r[i],i,r))break}function forNumber(r,n,e){for(var t=iteratorCallback(n,e),i=0,a=void 0;!1!==a&&i<r;i++)a=t(i,i,i)}function each(r,n,e){r&&(isArrayLike(r)?forEach(r,n,e):isNumber(r)?forNumber(r,n,e):forIn(r,n,e))}function append$1(r,n){r[r.length]=n}function map(r,n,e){var t=[],i=iteratorCallback(n,e);return each(r,function(r){isNil(r=i(r))||append$1(t,r)}),t}function removeAt(r,n){return r.splice(n,1),n}function remove(r,n){var e=inArray(n,r);return 0<=e?(removeAt(r,e),n):null}function toArray(r){return r&&[].concat(r)}var array={append:append,forEach:forEach$1,grep:grep,inArray:inArray,includes:includes,join:join,makeArray:makeArray,map:map,remove:remove,removeAt:removeAt,toArray:toArray};module.exports=array;
