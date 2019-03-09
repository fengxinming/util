/*!
 * celia.js v2.1.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-7ad506f8.js");var __chunk_6=require("./chunk-cf5dc476.js"),__chunk_13=require("./chunk-13089cd6.js"),__chunk_16=require("./chunk-f2d48995.js"),__chunk_20=require("./chunk-a836d813.js");function inArray(e,n,r){if(n){if(n.indexOf)return n.indexOf(e,r);for(var t=n.length,u=r?r<0?Math.max(0,t+r):r:0;u<t;u++)if(u in n&&n[u]===e)return u}return-1}function removeAt(e,n){return e.splice(n,1),n}function remove(e,n){var r=inArray(n,e);return 0<=r?(removeAt(e,r),n):null}var removeEventListenerFn=window.removeEventListener?function(e,n,r){e.removeEventListener(n,r,!1)}:function(e,n,r){e.detachEvent("on"+n,r)};function off(e,n,u){return __chunk_6.checkDom(e,function(r){var t=__chunk_16.expandoStore(r,"events");__chunk_16.expandoStore(r,"handle")&&(__chunk_13.isUndefined(n)?__chunk_20.forEach(t,function(e,n){removeEventListenerFn(r,n,e),delete t[n]}):__chunk_20.forEach(n.split(" "),function(e){__chunk_13.isUndefined(u)?(removeEventListenerFn(r,e,t[e]),delete t[e]):remove(t[e],u)}))}),e}module.exports=off;
