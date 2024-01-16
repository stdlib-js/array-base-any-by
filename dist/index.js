"use strict";var c=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=c(function(h,u){
var f=require('@stdlib/array-base-arraylike2object/dist');function i(r,e){return typeof r[e]=="function"}function l(r,e,n){var t;for(t=0;t<r.length;t++)if(e.call(n,r[t],t,r))return!0;return!1}function v(r,e,n){var t,o,a;for(t=r.data,o=r.accessors[0],a=0;a<t.length;a++)if(e.call(n,o(t,a),a,t))return!0;return!1}function y(r,e,n){var t;return i(r,"some")?r.some(e,n):(t=f(r),t.accessorProtocol?v(t,e,n):l(r,e,n))}u.exports=y
});var m=s();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
