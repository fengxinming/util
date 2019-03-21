/*!
 * celia.js v3.0.7
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";function o(e,n){e[e.length]=n}function c(e,n){return n?e.bind(n):e}function i(e,n,t,r,u){for(var i=c(r,u),a=n,o=void 0;!1!==o&&a<t;a++)o=i(e[a],a,e)}function a(e,n,t){i(e,0,e.length,n,t)}function s(e,n,t){return e&&a(e,n,t)}function r(e,n,t){if(n){if(n.indexOf)return n.indexOf(e,t);for(var r=n.length,u=t?t<0?Math.max(0,r+t):t:0;u<r;u++)if(u in n&&n[u]===e)return u}return-1}function u(n,e){var t=n.length;return s(e,function(e){n[t++]=e}),n.length=t,n}function d(e){return null==e}function f(e){return"function"==typeof e}function l(e){return"number"==typeof e}function m(e){return!d(e)&&l(e.length)&&!f(e)}function h(e){return"string"==typeof e}var g=Array.prototype.push;function v(e,n,t){var r=c(n,t);for(var u in e)if(!1===r(e[u],u,e))break}function p(e,n,t){for(var r=c(n,t),u=0,i=void 0;!1!==i&&u<e;u++)i=r(u,u,u)}function M(e,n,t){e&&(m(e)?a(e,n,t):l(e)?p(e,n,t):v(e,n,t))}function e(e,n,t){var r=[],u=c(n,t);return M(e,function(e){d(e=u(e))||o(r,e)}),r}function Y(e,n){return e.splice(n,1),n}var n={append:function(e,n){if(e)return o(e,n),n},forEach:s,grep:function(e,t,r){var u=[];return r=!!r,s(e,function(e,n){!t(e,n)===r&&o(u,e)}),u},inArray:r,includes:function(e,n){return-1!==r(n,e)},join:u,makeArray:function(e,n){var t=n||[];return e&&(m(Object(e))?u(t,h(e)?[e]:e):t.push?t.push(e):g.call(t,e)),t},map:e,remove:function(e,n){var t=r(n,e);return 0<=t?(Y(e,t),n):null},removeAt:Y,toArray:function(e){return e&&[].concat(e)}},t=/-([a-z])/g;function S(e){return!d(e)&&"object"==typeof e}function y(e,n){return n?new Date(Date.UTC(e[0],e[1]||0,d(e[2])?1:e[2],e[3]||0,e[4]||0,e[5]||0,e[6]||0)):new Date(e[0],e[1]||0,d(e[2])?1:e[2],e[3]||0,e[4]||0,e[5]||0,e[6]||0)}var D=Date.prototype;D.setDay||(D.setDay=function(e){var n=this.getDay();e!==n&&this.setTime(+this+864e5*(e-n))});var b={},H={};function w(e,n){return b[e]||n}function A(e,n,t){var r=e.slice(0,-1);b[n]=b[e]=b[r]=n,H[n]=function(e,n){return d(n)?e["get"+t]():(e["set"+t](n),e)}}A("years","Y","FullYear"),A("months","M","Month"),A("dates","D","Date"),A("days","d","Day"),A("hours","h","Hours"),A("minutes","m","Minutes"),A("seconds","s","Seconds"),A("milliseconds","ms","Milliseconds"),A("times","t","Time");var k={Y:0,M:1,d:2,h:3,m:4,s:5,ms:6};function O(e){return e=w(e,"ms"),k[e]}function x(e,n,t){var r=[e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()];if(S(n))v(n,function(e,n){var t=O(n);r[t]+=e});else{var u=O(t);r[u]+=n}return e.setTime(+y(r)),e}function T(e){return new Date(+e)}function j(e){var n=e.getFullYear();return n%4==0&&n%100!=0||n%400==0}var C=[31,28,31,30,31,30,31,31,30,31,30,31],F=[31,29,31,30,31,30,31,31,30,31,30,31];function I(e){return j(e)?F:C}function Z(e){return void 0===e}var U=/^\/?Date\((-?\d+)/i,E=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)\s*([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,N=[["YYYY-MM-DD",/(\d{4})-(\d\d)-(\d\d)/],["YYYY-MM",/(\d{4})-(\d\d)/,!1],["YYYYMMDD",/(\d{4})(\d\d)(\d\d)/],["YYYYMM",/(\d{4})(\d\d)/,!1],["YYYY",/\d{4}/,!1]],B=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)\s*([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,z=/\[.*?\]|Y{2,4}|y{2,4}|M{1,2}|D{1,2}|d{1,2}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|SSS|Z{1,2}/g,L=[["HH:mm:ss.SSSS",/(\d\d):(\d\d):(\d\d)\.(\d+)/],["HH:mm:ss,SSSS",/(\d\d):(\d\d):(\d\d),(\d+)/],["HH:mm:ss",/(\d\d):(\d\d):(\d\d)/],["HH:mm",/(\d\d):(\d\d)/],["HHmmss.SSSS",/(\d\d)(\d\d)(\d\d)\.(\d+)/],["HHmmss,SSSS",/(\d\d)(\d\d)(\d\d),(\d+)/],["HHmmss",/(\d\d)(\d\d)(\d\d)/],["HHmm",/(\d\d)(\d\d)/],["HH",/\d\d/]],R=/(Z)|[+-](\d\d)(?::?(\d\d))?/,W=(new Date).getTimezoneOffset(),P=Object.prototype.toString;function $(e){return P.call(e)}function V(e){return"[object Date]"===$(e)}function q(e,n,t){if(!h(e))return y(e,!0===n);if(h(n))return y(function(t,r){var e,n=r.length,u=[],i=!1;if(p(n,function(e){var n=t.charAt(e);switch(r.charAt(e)){case"Y":case"y":u[0]=(u[0]||"")+n;break;case"M":u[1]=(u[1]||"")+n;break;case"D":case"d":u[2]=(u[2]||"")+n;break;case"H":case"h":u[3]=(u[3]||"")+n;break;case"m":u[4]=(u[4]||"")+n;break;case"s":u[5]=(u[5]||"")+n;break;case"S":u[6]=(u[6]||"")+n;break;case"Z":i=!0}}),u=u.map(function(e){return parseInt(e,10)}),i)if(e=R.exec(t.slice(-1<r.indexOf("ZZ")?-5:-6))){var a=W;if(!e[1]){var o="+"===e[0].charAt(0)?1:-1;u[3]-=e[2]*o,u[4]-=(e[3]||0)*o}u[4]-=a}else u.isUTC=i&-1<t.indexOf("Z");return d(u[1])||(u[1]-=1),u}(e,n),t);var r=function(e){var t,r,u=[],i=B.exec(e)||E.exec(e);if(i){if(a(N,function(e,n){if(r=e[1].exec(i[1]))return p(3,function(e){u[e]=parseInt(r[e+1]||1,10)}),u[1]-=1,t=!1!==e[2],!1}),e.indexOf(u[0]))return e;if(r=null,i[3]&&a(L,function(e){if(r=e[1].exec(i[3]))return u=u.concat(r.slice(1).map(function(e){return parseInt(e,10)})),!1}),!t&&r)return u;if(r=null,i[4]){r=R.exec(i[4]);var n=W;r[1]||(u[3]-=r[2],u[4]-=r[3]||0),u[4]-=n}return u}return 4===e.length&&N[4][1].test(e)?((u=[parseInt(e,10),0,1]).isUTC=!0,u):e}(e);if(r!==e)return y(r,r.isUTC||!0===n);var u=U.exec(e);return new Date(null!==u?+u[1]:e)}function _(e,n,t){return e=d(e)?new Date:e.length?q(e,n,t):l(e)?new Date(e):V(e)?new Date(+e):e._i&&e.isValid()?new Date(+e):new Date}function G(e,n){var t=12*(n.getFullYear()-e.getFullYear())+(n.getMonth()-e.getMonth()),r=x(T(e),t,"months");return-(t+(n<r?(n-r)/(r-x(T(e),t-1,"months")):(n-r)/(x(T(e),t+1,"months")-r)))||0}function J(e,n){switch(n=w(n)){case"Y":e.setMonth(0);case"M":e.setDate(1);case"D":case"d":e.setHours(0);case"h":e.setMinutes(0);case"m":e.setSeconds(0);case"s":e.setMilliseconds(0)}return e}function K(e,n){return"ms"===(n=w(n,"ms"))||(J(e,n),x(e,1,n),x(e,-1,"ms")),e}function Q(e,n){return void 0===n&&(n=2),("000000"+e).slice(-n)}function X(e,n){var t;return e<0?(t="+",e=Math.abs(e)):t="-",""+t+Q(Math.floor(e/60))+(n?"":":")+Q(Math.floor(e%60))}function ee(e){return 12<(e=e||24)?e-12:e}function ne(e,n,t,r){if(n=_(n),"ms"===(t=w(t,"ms")))switch(r){case"before":return+e<+n;case"after":return+n<+e;default:return+e==+n}else{var u=+n;switch(r){case"before":return+K(T(e),t)<u;case"after":return+J(T(e),t)>u;default:return+J(T(e),t)<=u&&u<=+K(T(e),t)}}}function te(e,n,t){return ne(e,n,t,"after")}function re(e,n,t){return ne(e,n,t,"before")}var ue={add:x,clone:T,dayOfYear:function(e,n){var t=I(e),r=e.getMonth(),u=0;return p(r,function(e){u+=t[e]}),u+=e.getDate(),Z(n)?u:(e.setTime(+e+864e5*(n-u)),e)},daysInMonth:function(e){return I(e)[e.getMonth()]},diff:function(e,n,t,r){var u,i;switch(n=_(n),t=w(t)){case"Y":u=G(e,n)/12;break;case"M":u=G(e,n);break;case"s":u=(e-n)/1e3;break;case"m":u=(e-n)/6e4;break;case"h":u=(e-n)/36e5;break;case"d":u=(e-n)/864e5;break;default:u=e-n}return r?u:(i=u)<0?Math.ceil(i)||0:Math.floor(i)},endOf:K,format:function(n,e){return e&&"UTC"!==e?e.replace(z,function(e){switch(e){case"YY":return String(n.getFullYear()).slice(-2);case"YYYY":case"yyyy":return n.getFullYear();case"M":return n.getMonth()+1;case"MM":return Q(n.getMonth()+1);case"D":case"d":return n.getDate();case"DD":case"dd":return Q(n.getDate());case"H":return n.getHours();case"HH":return Q(n.getHours());case"h":return ee(n.getHours());case"hh":return Q(ee(n.getHours()));case"m":return n.getMinutes();case"mm":return Q(n.getMinutes());case"s":return n.getSeconds();case"ss":return Q(n.getSeconds());case"SSS":return Q(n.getMilliseconds(),3);case"Z":return X(W);case"ZZ":return X(W,!0);default:return e}}):n.toISOString()},get:function(e,n){return n=w(n,"t"),H[n](e)},isAfter:te,isBefore:re,isBetween:function(e,n,t,r,u){return("("===(u=u||"()").charAt(0)?te(e,n,r):!re(e,n,r))&&(")"===u.charAt(1)?re(e,t,r):!te(e,t,r))},isLeapYear:j,isSame:function(e,n,t){return ne(e,n,t)},isSameOrAfter:function(e,n,t){return!re(e,n,t)},isSameOrBefore:function(e,n,t){return!te(e,n,t)},isValid:function(e){return"Invalid Date"!==e.toString()},parse:_,set:function(e,n,t){return(n=w(n))&&H[n](e,t),e},startOf:J,subtract:function(e,n,t){return x(e,-n,t)}};function ie(e,n,t){return S(e)&&function(e,n,t){var r=c(n,t);for(var u in e)if(e.hasOwnProperty(u)&&!1===r(e[u],u,e))break}(e,n,t)}function ae(e){return decodeURIComponent(e.replace(/\+/g," "))}var oe=Array.isArray;var ce={parse:function(e,n,i){void 0===n&&(n="&"),void 0===i&&(i="=");var a={};return h(e)&&e.split(n).forEach(function(e){var n=e.split(i),t=n[0],r=n[1],u=a[t];Z(u)?a[t]=ae(r):oe(u)?o(u,ae(r)):a[t]=[u,ae(r)]}),a},prepend:function(e,n){return n=h(n)?n:"",e?n+e:e},stringify:function(e,n,t){void 0===n&&(n="&"),void 0===t&&(t="=");var r=[];return ie(e,function(e,n){e||!d(e)&&!isNaN(e)||(e=""),o(r,encodeURIComponent(n)+t+encodeURIComponent(e))}),r.length?r.join(n):""}};var se={};"Boolean,Number,String,Function,Array,Date,RegExp,Object,Error,Symbol".split(",").forEach(function(e){se["[object "+e+"]"]=e.toLowerCase()});var de={isAbsolute:function(e){return/^([a-z][a-z0-9+\-.]*:)?\/\//i.test(e)},join:function(e){var n=arguments,t=n.length;d(e)?1<t&&(e=""):e=e.replace(/\/+$/,"");var r="";return i(n,1,t,function(e){r+="/",r+=e||""}),r&&(e+=r.replace(/\/+/g,"/")),e}},fe={array:n,camelCase:function(e){return e.replace(t,function(e,n){return n.toUpperCase()})},date:ue,each:M,forEach:s,forIn:function(e,n,t){return S(e)&&v(e,n,t)},forNumber:function(e,n,t){return e&&p(e,n,t)},forOwn:ie,forSlice:function(e,n,t,r,u){e&&(f(t)&&(u=r,r=t,t=e.length),i(e,n,t||e.length,r,u))},isArrayLike:m,isAsyncFunction:function(e){return"[object AsyncFunction]"===$(e)},isBoolean:function(e){return"boolean"==typeof e},isDate:V,isFunction:f,isNil:d,isNumber:l,isObject:S,isPromiseLike:function(e){return!!e&&f(e.then)},isString:h,isUndefined:Z,map:e,qs:ce,sleep:function(n){return new Promise(function(e){setTimeout(e,n)})},type:function(e){return d(e)?e+"":S(e)||f(e)?se[$(e)]||"object":typeof e},url:de};module.exports=fe;
