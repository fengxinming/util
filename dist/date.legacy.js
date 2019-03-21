/*!
 * celia.js v3.0.7
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";function c(e){return null==e}function i(e,t){return t?e.bind(t):e}function d(e,t){return t?new Date(Date.UTC(e[0],e[1]||0,c(e[2])?1:e[2],e[3]||0,e[4]||0,e[5]||0,e[6]||0)):new Date(e[0],e[1]||0,c(e[2])?1:e[2],e[3]||0,e[4]||0,e[5]||0,e[6]||0)}var e=Date.prototype;e.setDay||(e.setDay=function(e){var t=this.getDay();e!==t&&this.setTime(+this+864e5*(e-t))});var s={},a={};function u(e,t){return s[e]||t}function t(e,t,n){var r=e.slice(0,-1);s[t]=s[e]=s[r]=t,a[t]=function(e,t){return c(t)?e["get"+n]():(e["set"+n](t),e)}}t("years","Y","FullYear"),t("months","M","Month"),t("dates","D","Date"),t("days","d","Day"),t("hours","h","Hours"),t("minutes","m","Minutes"),t("seconds","s","Seconds"),t("milliseconds","ms","Milliseconds"),t("times","t","Time");var n={Y:0,M:1,d:2,h:3,m:4,s:5,ms:6};function o(e){return e=u(e,"ms"),n[e]}function f(e,t,n){var r,s=[e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()];if(c(r=t)||"object"!=typeof r){var a=o(n);s[a]+=t}else!function(e,t,n){var r=i(t,n);for(var s in e)if(!1===r(e[s],s,e))break}(t,function(e,t){var n=o(t);s[n]+=e});return e.setTime(+d(s)),e}function l(e){return new Date(+e)}function r(e){var t=e.getFullYear();return t%4==0&&t%100!=0||t%400==0}var m=[31,28,31,30,31,30,31,31,30,31,30,31],h=[31,29,31,30,31,30,31,31,30,31,30,31];function g(e){return r(e)?h:m}function M(e,t,n){for(var r=i(t,n),s=0,a=void 0;!1!==a&&s<e;s++)a=r(s,s,s)}var Y=/^\/?Date\((-?\d+)/i,v=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)\s*([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,D=[["YYYY-MM-DD",/(\d{4})-(\d\d)-(\d\d)/],["YYYY-MM",/(\d{4})-(\d\d)/,!1],["YYYYMMDD",/(\d{4})(\d\d)(\d\d)/],["YYYYMM",/(\d{4})(\d\d)/,!1],["YYYY",/\d{4}/,!1]],S=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)\s*([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,H=/\[.*?\]|Y{2,4}|y{2,4}|M{1,2}|D{1,2}|d{1,2}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|SSS|Z{1,2}/g,b=[["HH:mm:ss.SSSS",/(\d\d):(\d\d):(\d\d)\.(\d+)/],["HH:mm:ss,SSSS",/(\d\d):(\d\d):(\d\d),(\d+)/],["HH:mm:ss",/(\d\d):(\d\d):(\d\d)/],["HH:mm",/(\d\d):(\d\d)/],["HHmmss.SSSS",/(\d\d)(\d\d)(\d\d)\.(\d+)/],["HHmmss,SSSS",/(\d\d)(\d\d)(\d\d),(\d+)/],["HHmmss",/(\d\d)(\d\d)(\d\d)/],["HHmm",/(\d\d)(\d\d)/],["HH",/\d\d/]],y=/(Z)|[+-](\d\d)(?::?(\d\d))?/,p=(new Date).getTimezoneOffset();function w(e){return"string"==typeof e}function k(e,t,n){!function(e,t,n,r,s){for(var a=i(r,s),d=t,u=void 0;!1!==u&&d<n;d++)u=a(e[d],d,e)}(e,0,e.length,t,n)}var T=Object.prototype.toString;function x(e){return"[object Date]"===(t=e,T.call(t));var t}function O(e,t,n){if(!w(e))return d(e,!0===t);if(w(t))return d(function(n,r){var e,t=r.length,s=[],a=!1;if(M(t,function(e){var t=n.charAt(e);switch(r.charAt(e)){case"Y":case"y":s[0]=(s[0]||"")+t;break;case"M":s[1]=(s[1]||"")+t;break;case"D":case"d":s[2]=(s[2]||"")+t;break;case"H":case"h":s[3]=(s[3]||"")+t;break;case"m":s[4]=(s[4]||"")+t;break;case"s":s[5]=(s[5]||"")+t;break;case"S":s[6]=(s[6]||"")+t;break;case"Z":a=!0}}),s=s.map(function(e){return parseInt(e,10)}),a)if(e=y.exec(n.slice(-1<r.indexOf("ZZ")?-5:-6))){var d=p;if(!e[1]){var u="+"===e[0].charAt(0)?1:-1;s[3]-=e[2]*u,s[4]-=(e[3]||0)*u}s[4]-=d}else s.isUTC=a&-1<n.indexOf("Z");return c(s[1])||(s[1]-=1),s}(e,t),n);var r=function(e){var n,r,s=[],a=S.exec(e)||v.exec(e);if(a){if(k(D,function(e,t){if(r=e[1].exec(a[1]))return M(3,function(e){s[e]=parseInt(r[e+1]||1,10)}),s[1]-=1,n=!1!==e[2],!1}),e.indexOf(s[0]))return e;if(r=null,a[3]&&k(b,function(e){if(r=e[1].exec(a[3]))return s=s.concat(r.slice(1).map(function(e){return parseInt(e,10)})),!1}),!n&&r)return s;if(r=null,a[4]){r=y.exec(a[4]);var t=p;r[1]||(s[3]-=r[2],s[4]-=r[3]||0),s[4]-=t}return s}return 4===e.length&&D[4][1].test(e)?((s=[parseInt(e,10),0,1]).isUTC=!0,s):e}(e);if(r!==e)return d(r,r.isUTC||!0===t);var s=Y.exec(e);return new Date(null!==s?+s[1]:e)}function Z(e,t,n){return e=c(e)?new Date:e.length?O(e,t,n):"number"==typeof e?new Date(e):x(e)?new Date(+e):e._i&&e.isValid()?new Date(+e):new Date}function A(e,t){var n=12*(t.getFullYear()-e.getFullYear())+(t.getMonth()-e.getMonth()),r=f(l(e),n,"months");return-(n+(t<r?(t-r)/(r-f(l(e),n-1,"months")):(t-r)/(f(l(e),n+1,"months")-r)))||0}function F(e,t){switch(t=u(t)){case"Y":e.setMonth(0);case"M":e.setDate(1);case"D":case"d":e.setHours(0);case"h":e.setMinutes(0);case"m":e.setSeconds(0);case"s":e.setMilliseconds(0)}return e}function I(e,t){return"ms"===(t=u(t,"ms"))||(F(e,t),f(e,1,t),f(e,-1,"ms")),e}function C(e,t){return void 0===t&&(t=2),("000000"+e).slice(-t)}function U(e,t){var n;return e<0?(n="+",e=Math.abs(e)):n="-",""+n+C(Math.floor(e/60))+(t?"":":")+C(Math.floor(e%60))}function W(e){return 12<(e=e||24)?e-12:e}function j(e,t,n,r){if(t=Z(t),"ms"===(n=u(n,"ms")))switch(r){case"before":return+e<+t;case"after":return+t<+e;default:return+e==+t}else{var s=+t;switch(r){case"before":return+I(l(e),n)<s;case"after":return+F(l(e),n)>s;default:return+F(l(e),n)<=s&&s<=+I(l(e),n)}}}function B(e,t,n){return j(e,t,n,"after")}function V(e,t,n){return j(e,t,n,"before")}var $={add:f,clone:l,dayOfYear:function(e,t){var n=g(e),r=e.getMonth(),s=0;return M(r,function(e){s+=n[e]}),s+=e.getDate(),void 0===t?s:(e.setTime(+e+864e5*(t-s)),e)},daysInMonth:function(e){return g(e)[e.getMonth()]},diff:function(e,t,n,r){var s,a;switch(t=Z(t),n=u(n)){case"Y":s=A(e,t)/12;break;case"M":s=A(e,t);break;case"s":s=(e-t)/1e3;break;case"m":s=(e-t)/6e4;break;case"h":s=(e-t)/36e5;break;case"d":s=(e-t)/864e5;break;default:s=e-t}return r?s:(a=s)<0?Math.ceil(a)||0:Math.floor(a)},endOf:I,format:function(t,e){return e&&"UTC"!==e?e.replace(H,function(e){switch(e){case"YY":return String(t.getFullYear()).slice(-2);case"YYYY":case"yyyy":return t.getFullYear();case"M":return t.getMonth()+1;case"MM":return C(t.getMonth()+1);case"D":case"d":return t.getDate();case"DD":case"dd":return C(t.getDate());case"H":return t.getHours();case"HH":return C(t.getHours());case"h":return W(t.getHours());case"hh":return C(W(t.getHours()));case"m":return t.getMinutes();case"mm":return C(t.getMinutes());case"s":return t.getSeconds();case"ss":return C(t.getSeconds());case"SSS":return C(t.getMilliseconds(),3);case"Z":return U(p);case"ZZ":return U(p,!0);default:return e}}):t.toISOString()},get:function(e,t){return t=u(t,"t"),a[t](e)},isAfter:B,isBefore:V,isBetween:function(e,t,n,r,s){return("("===(s=s||"()").charAt(0)?B(e,t,r):!V(e,t,r))&&(")"===s.charAt(1)?V(e,n,r):!B(e,n,r))},isLeapYear:r,isSame:function(e,t,n){return j(e,t,n)},isSameOrAfter:function(e,t,n){return!V(e,t,n)},isSameOrBefore:function(e,t,n){return!B(e,t,n)},isValid:function(e){return"Invalid Date"!==e.toString()},parse:Z,set:function(e,t,n){return(t=u(t))&&a[t](e,n),e},startOf:F,subtract:function(e,t,n){return f(e,-t,n)}};module.exports=$;
