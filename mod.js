// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r={float64:function(r,e){return r[e]},float32:function(r,e){return r[e]},int32:function(r,e){return r[e]},int16:function(r,e){return r[e]},int8:function(r,e){return r[e]},uint32:function(r,e){return r[e]},uint16:function(r,e){return r[e]},uint8:function(r,e){return r[e]},uint8c:function(r,e){return r[e]},generic:function(r,e){return r[e]},default:function(r,e){return r[e]}};function e(e){var t=r[e];return"function"==typeof t?t:r.default}var t={float64:function(r,e,t){r[e]=t},float32:function(r,e,t){r[e]=t},int32:function(r,e,t){r[e]=t},int16:function(r,e,t){r[e]=t},int8:function(r,e,t){r[e]=t},uint32:function(r,e,t){r[e]=t},uint16:function(r,e,t){r[e]=t},uint8:function(r,e,t){r[e]=t},uint8c:function(r,e,t){r[e]=t},generic:function(r,e,t){r[e]=t},default:function(r,e,t){r[e]=t}};function n(r){var e=t[r];return"function"==typeof e?e:t.default}var i={complex128:function(r,e){return r.get(e)},complex64:function(r,e){return r.get(e)},default:function(r,e){return r.get(e)}};function o(r){var e=i[r];return"function"==typeof e?e:i.default}var a={complex128:function(r,e,t){r.set(t,e)},complex64:function(r,e,t){r.set(t,e)},default:function(r,e,t){r.set(t,e)}};function u(r){var e=a[r];return"function"==typeof e?e:a.default}var f="function"==typeof Object.defineProperty?Object.defineProperty:null;var l=Object.defineProperty;function c(r){return"number"==typeof r}function s(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function y(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+s(i):s(i)+r,n&&(r="-"+r)),r}var p=String.prototype.toLowerCase,h=String.prototype.toUpperCase;function g(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!c(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=y(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=y(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===h.call(r.specifier)?h.call(t):p.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function m(r){return"string"==typeof r}var w=Math.abs,b=String.prototype.toLowerCase,v=String.prototype.toUpperCase,d=String.prototype.replace,E=/e\+(\d)$/,A=/e-(\d)$/,T=/^(\d+)$/,_=/^(\d+)e/,x=/\.0$/,j=/\.0*e/,k=/(\..*[^0])0*e/;function V(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!c(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":w(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=d.call(t,k,"$1e"),t=d.call(t,j,"e"),t=d.call(t,x,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=d.call(t,E,"e+0$1"),t=d.call(t,A,"e-0$1"),r.alternate&&(t=d.call(t,T,"$1."),t=d.call(t,_,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===v.call(r.specifier)?v.call(t):b.call(t)}function S(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function L(r,e,t){var n=e-r.length;return n<0?r:r=t?r+S(n):S(n)+r}var R=String.fromCharCode,B=isNaN,I=Array.isArray;function O(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function C(r){var e,t,n,i,o,a,u,f,l;if(!I(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,f=0;f<r.length;f++)if(m(n=r[f]))a+=n;else{if(e=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,B(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,B(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=g(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!B(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=B(o)?String(n.arg):R(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=V(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=y(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=L(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function M(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function P(r){var e,t,n,i;for(t=[],i=0,n=F.exec(r);n;)(e=r.slice(i,F.lastIndex-n[0].length)).length&&t.push(e),t.push(M(n)),i=F.lastIndex,n=F.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function U(r){return"string"==typeof r}function N(r){var e,t,n;if(!U(r))throw new TypeError(N("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=P(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return C.apply(null,t)}var Y,W=Object.prototype,$=W.toString,G=W.__defineGetter__,Z=W.__defineSetter__,X=W.__lookupGetter__,J=W.__lookupSetter__;Y=function(){try{return f({},"x",{}),!0}catch(r){return!1}}()?l:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError(N("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(N("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(X.call(r,e)||J.call(r,e)?(n=r.__proto__,r.__proto__=W,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&G&&G.call(r,e,t.get),a&&Z&&Z.call(r,e,t.set),r};var z=Y;function q(r,e,t){z(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var D="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function H(){return D&&"symbol"==typeof Symbol.toStringTag}var K=Object.prototype.toString;var Q=Object.prototype.hasOwnProperty;function rr(r,e){return null!=r&&Q.call(r,e)}var er="function"==typeof Symbol?Symbol:void 0,tr="function"==typeof er?er.toStringTag:"";var nr=H()?function(r){var e,t,n;if(null==r)return K.call(r);t=r[tr],e=rr(r,tr);try{r[tr]=void 0}catch(e){return K.call(r)}return n=K.call(r),e?r[tr]=t:delete r[tr],n}:function(r){return K.call(r)};var ir=Array.isArray?Array.isArray:function(r){return"[object Array]"===nr(r)};function or(r){return null!==r&&"object"==typeof r}function ar(r){return or(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function ur(){return/^\s*function\s*([^(]*)/i}q(or,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(N("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!ir(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(or));var fr=/^\s*function\s*([^(]*)/i;function lr(r){var e,t,n;if(("Object"===(t=nr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=fr.exec(n.toString()))return e[1]}return ar(r)?"Buffer":t}q(ur,"REGEXP",fr);var cr={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},sr=Object.prototype.toString;var yr=Object.prototype.hasOwnProperty;var pr="function"==typeof er?er.toStringTag:"";var hr=H()?function(r){var e,t,n,i,o;if(null==r)return sr.call(r);t=r[pr],o=pr,e=null!=(i=r)&&yr.call(i,o);try{r[pr]=void 0}catch(e){return sr.call(r)}return n=sr.call(r),e?r[pr]=t:delete r[pr],n}:function(r){return sr.call(r)},gr="function"==typeof Float64Array;var mr="function"==typeof Float64Array?Float64Array:null;var wr="function"==typeof Float64Array?Float64Array:void 0;var br=function(){var r,e,t;if("function"!=typeof mr)return!1;try{e=new mr([1,3.14,-3.14,NaN]),t=e,r=(gr&&t instanceof Float64Array||"[object Float64Array]"===hr(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?wr:function(){throw new Error("not implemented")},vr="function"==typeof Float32Array;var dr=Number.POSITIVE_INFINITY,Er="function"==typeof Float32Array?Float32Array:null;var Ar="function"==typeof Float32Array?Float32Array:void 0;var Tr=function(){var r,e,t;if("function"!=typeof Er)return!1;try{e=new Er([1,3.14,-3.14,5e40]),t=e,r=(vr&&t instanceof Float32Array||"[object Float32Array]"===nr(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===dr}catch(e){r=!1}return r}()?Ar:function(){throw new Error("not implemented")},_r="function"==typeof Uint32Array;var xr="function"==typeof Uint32Array?Uint32Array:null;var jr="function"==typeof Uint32Array?Uint32Array:void 0;var kr=function(){var r,e,t;if("function"!=typeof xr)return!1;try{e=new xr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(_r&&t instanceof Uint32Array||"[object Uint32Array]"===nr(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?jr:function(){throw new Error("not implemented")},Vr="function"==typeof Int32Array;var Sr="function"==typeof Int32Array?Int32Array:null;var Lr="function"==typeof Int32Array?Int32Array:void 0;var Rr=function(){var r,e,t;if("function"!=typeof Sr)return!1;try{e=new Sr([1,3.14,-3.14,2147483648]),t=e,r=(Vr&&t instanceof Int32Array||"[object Int32Array]"===nr(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?Lr:function(){throw new Error("not implemented")},Br="function"==typeof Uint16Array;var Ir="function"==typeof Uint16Array?Uint16Array:null;var Or="function"==typeof Uint16Array?Uint16Array:void 0;var Cr=function(){var r,e,t;if("function"!=typeof Ir)return!1;try{e=new Ir(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Br&&t instanceof Uint16Array||"[object Uint16Array]"===nr(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Or:function(){throw new Error("not implemented")},Fr="function"==typeof Int16Array;var Mr="function"==typeof Int16Array?Int16Array:null;var Pr="function"==typeof Int16Array?Int16Array:void 0;var Ur=function(){var r,e,t;if("function"!=typeof Mr)return!1;try{e=new Mr([1,3.14,-3.14,32768]),t=e,r=(Fr&&t instanceof Int16Array||"[object Int16Array]"===nr(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?Pr:function(){throw new Error("not implemented")},Nr="function"==typeof Uint8Array;var Yr="function"==typeof Uint8Array?Uint8Array:null;var Wr="function"==typeof Uint8Array?Uint8Array:void 0;var $r=function(){var r,e,t;if("function"!=typeof Yr)return!1;try{e=new Yr(e=[1,3.14,-3.14,256,257]),t=e,r=(Nr&&t instanceof Uint8Array||"[object Uint8Array]"===nr(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Wr:function(){throw new Error("not implemented")},Gr="function"==typeof Uint8ClampedArray;var Zr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Xr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var Jr=function(){var r,e,t;if("function"!=typeof Zr)return!1;try{e=new Zr([-1,0,1,3.14,4.99,255,256]),t=e,r=(Gr&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===nr(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?Xr:function(){throw new Error("not implemented")},zr="function"==typeof Int8Array;var qr="function"==typeof Int8Array?Int8Array:null;var Dr="function"==typeof Int8Array?Int8Array:void 0;var Hr=function(){var r,e,t;if("function"!=typeof qr)return!1;try{e=new qr([1,3.14,-3.14,128]),t=e,r=(zr&&t instanceof Int8Array||"[object Int8Array]"===nr(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?Dr:function(){throw new Error("not implemented")};function Kr(r){return"number"==typeof r}var Qr=Number,re=Qr.prototype.toString;var ee=H();function te(r){return"object"==typeof r&&(r instanceof Qr||(ee?function(r){try{return re.call(r),!0}catch(r){return!1}}(r):"[object Number]"===nr(r)))}function ne(r){return Kr(r)||te(r)}q(ne,"isPrimitive",Kr),q(ne,"isObject",te);var ie=Qr.NEGATIVE_INFINITY,oe=Math.floor;function ae(r){return oe(r)===r}function ue(r){return r<dr&&r>ie&&ae(r)}function fe(r){return Kr(r)&&ue(r)}function le(r){return te(r)&&ue(r.valueOf())}function ce(r){return fe(r)||le(r)}function se(r){return fe(r)&&r>=0}function ye(r){return le(r)&&r.valueOf()>=0}function pe(r){return se(r)||ye(r)}q(ce,"isPrimitive",fe),q(ce,"isObject",le),q(pe,"isPrimitive",se),q(pe,"isObject",ye);function he(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&ae(r.length)&&r.length>=0&&r.length<=4294967295}var ge=Math.floor;function me(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&(e=r.length,ge(e)===e)&&r.length>=0&&r.length<=9007199254740991;var e}var we="function"==typeof ArrayBuffer;function be(r){return we&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===nr(r)}function ve(r){return"object"==typeof r&&null!==r&&!ir(r)}var de=/./;function Ee(r){return"boolean"==typeof r}var Ae=Object.prototype.toString;var Te=Object.prototype.hasOwnProperty;var _e="function"==typeof er?er.toStringTag:"";var xe=H()?function(r){var e,t,n,i,o;if(null==r)return Ae.call(r);t=r[_e],o=_e,e=null!=(i=r)&&Te.call(i,o);try{r[_e]=void 0}catch(e){return Ae.call(r)}return n=Ae.call(r),e?r[_e]=t:delete r[_e],n}:function(r){return Ae.call(r)},je=Boolean,ke=Boolean.prototype.toString;var Ve=H();function Se(r){return"object"==typeof r&&(r instanceof je||(Ve?function(r){try{return ke.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===xe(r)))}function Le(r){return Ee(r)||Se(r)}function Re(){return new Function("return this;")()}q(Le,"isPrimitive",Ee),q(Le,"isObject",Se);var Be="object"==typeof self?self:null,Ie="object"==typeof window?window:null,Oe="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Ce="object"==typeof Oe?Oe:null,Fe="object"==typeof globalThis?globalThis:null;var Me=function(r){if(arguments.length){if(!Ee(r))throw new TypeError(N("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Re()}if(Fe)return Fe;if(Be)return Be;if(Ie)return Ie;if(Ce)return Ce;throw new Error("unexpected error. Unable to resolve global object.")}(),Pe=Me.document&&Me.document.childNodes,Ue=Int8Array;var Ne="function"==typeof de||"object"==typeof Ue||"function"==typeof Pe?function(r){return lr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?lr(r).toLowerCase():e};function Ye(r){return"function"===Ne(r)}function We(r,e){if(!(this instanceof We))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Kr(r))throw new TypeError(N("invalid argument. Real component must be a number. Value: `%s`.",r));if(!Kr(e))throw new TypeError(N("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return z(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),z(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}q(We,"BYTES_PER_ELEMENT",8),q(We.prototype,"BYTES_PER_ELEMENT",8),q(We.prototype,"byteLength",16),q(We.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),q(We.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var $e="function"==typeof Math.fround?Math.fround:null,Ge=new Tr(1);var Ze="function"==typeof $e?$e:function(r){return Ge[0]=r,Ge[0]};function Xe(r,e){if(!(this instanceof Xe))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Kr(r))throw new TypeError(N("invalid argument. Real component must be a number. Value: `%s`.",r));if(!Kr(e))throw new TypeError(N("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return z(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Ze(r)}),z(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Ze(e)}),this}function Je(r){return r instanceof We||r instanceof Xe||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function ze(r){return ae(r/2)}function qe(){return"function"==typeof er&&"symbol"==typeof er("foo")&&rr(er,"iterator")&&"symbol"==typeof er.iterator}q(Xe,"BYTES_PER_ELEMENT",4),q(Xe.prototype,"BYTES_PER_ELEMENT",4),q(Xe.prototype,"byteLength",8),q(Xe.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),q(Xe.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var De=qe()?Symbol.iterator:null;function He(r,e,t){z(r,e,{configurable:!1,enumerable:!1,get:t})}function Ke(r){return r.re}function Qe(r){return r.im}function rt(r,e){return new Tr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function et(r,e){return new br(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function tt(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(he(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Je(n))return new TypeError(N("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(Ke(n),Qe(n))}return e}function nt(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,he(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Je(o))return new TypeError(N("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Ke(o),Qe(o))}return n}function it(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Je(n=e[i]))return null;r[o]=Ke(n),r[o+1]=Qe(n),o+=2}return r}var ot=2*Tr.BYTES_PER_ELEMENT,at=qe();function ut(r){return r instanceof st||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function ft(r){return r===st||"Complex128Array"===r.name}function lt(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===ot}function ct(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===2*ot}function st(){var r,e,t,n;if(e=arguments.length,!(this instanceof st))return 0===e?new st:1===e?new st(arguments[0]):2===e?new st(arguments[0],arguments[1]):new st(arguments[0],arguments[1],arguments[2]);if(0===e)t=new Tr(0);else if(1===e)if(se(arguments[0]))t=new Tr(2*arguments[0]);else if(me(arguments[0]))if((n=(t=arguments[0]).length)&&ir(t)&&Je(t[0])){if(null===(t=it(new Tr(2*n),t))){if(!ze(n))throw new RangeError(N("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new Tr(arguments[0])}}else{if(lt(t))t=rt(t,0);else if(ct(t))t=et(t,0);else if(!ze(n))throw new RangeError(N("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new Tr(t)}else if(be(arguments[0])){if(!ae((t=arguments[0]).byteLength/ot))throw new RangeError(N("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",ot,t.byteLength));t=new Tr(t)}else{if(!ve(arguments[0]))throw new TypeError(N("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===at)throw new TypeError(N("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Ye(t[De]))throw new TypeError(N("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Ye((t=t[De]()).next))throw new TypeError(N("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=tt(t))instanceof Error)throw t;t=new Tr(t)}else{if(!be(t=arguments[0]))throw new TypeError(N("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!se(r=arguments[1]))throw new TypeError(N("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!ae(r/ot))throw new RangeError(N("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",ot,r));if(2===e){if(!ae((n=t.byteLength-r)/ot))throw new RangeError(N("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",ot,n));t=new Tr(t,r)}else{if(!se(n=arguments[2]))throw new TypeError(N("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*ot>t.byteLength-r)throw new RangeError(N("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*ot));t=new Tr(t,r,2*n)}}return q(this,"_buffer",t),q(this,"_length",t.length/2),this}function yt(r){return r.re}function pt(r){return r.im}function ht(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(he(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Je(n))return new TypeError(N("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(yt(n),pt(n))}return e}function gt(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,he(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Je(o))return new TypeError(N("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(yt(o),pt(o))}return n}function mt(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Je(n=e[i]))return null;r[o]=yt(n),r[o+1]=pt(n),o+=2}return r}q(st,"BYTES_PER_ELEMENT",ot),q(st,"name","Complex64Array"),q(st,"from",(function(r){var t,n,i,a,u,f,l,c,s,y,p,h;if(!Ye(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ft(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((n=arguments.length)>1){if(!Ye(i=arguments[1]))throw new TypeError(N("invalid argument. Second argument must be a function. Value: `%s`.",i));n>2&&(t=arguments[2])}if(ut(r)){if(c=r.length,i){for(u=(a=new this(c))._buffer,h=0,p=0;p<c;p++){if(Je(y=i.call(t,r.get(p),p)))u[h]=Ke(y),u[h+1]=Qe(y);else{if(!(he(y)&&y.length>=2))throw new TypeError(N("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",y));u[h]=y[0],u[h+1]=y[1]}h+=2}return a}return new this(r)}if(me(r)){if(i){for(c=r.length,l=r.get&&r.set?o("default"):e("default"),p=0;p<c;p++)if(!Je(l(r,p))){s=!0;break}if(s){if(!ze(c))throw new RangeError(N("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,c));for(u=(a=new this(c/2))._buffer,p=0;p<c;p++)u[p]=i.call(t,l(r,p),p);return a}for(u=(a=new this(c))._buffer,h=0,p=0;p<c;p++){if(Je(y=i.call(t,l(r,p),p)))u[h]=Ke(y),u[h+1]=Qe(y);else{if(!(he(y)&&y.length>=2))throw new TypeError(N("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",y));u[h]=y[0],u[h+1]=y[1]}h+=2}return a}return new this(r)}if(ve(r)&&at&&Ye(r[De])){if(!Ye((u=r[De]()).next))throw new TypeError(N("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((f=i?nt(u,i,t):tt(u))instanceof Error)throw f;for(u=(a=new this(c=f.length/2))._buffer,p=0;p<c;p++)u[p]=f[p];return a}throw new TypeError(N("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),q(st,"of",(function(){var r,e;if(!Ye(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ft(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),He(st.prototype,"buffer",(function(){return this._buffer.buffer})),He(st.prototype,"byteLength",(function(){return this._buffer.byteLength})),He(st.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),q(st.prototype,"BYTES_PER_ELEMENT",st.BYTES_PER_ELEMENT),q(st.prototype,"copyWithin",(function(r,e){if(!ut(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),q(st.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!ut(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,q(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Xe(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),q(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),De&&q(t,De,(function(){return e.entries()})),t})),q(st.prototype,"get",(function(r){var e;if(!ut(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!se(r))throw new TypeError(N("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new Xe((e=this._buffer)[r*=2],e[r+1])})),He(st.prototype,"length",(function(){return this._length})),q(st.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!ut(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!se(t=arguments[1]))throw new TypeError(N("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Je(r)){if(t>=this._length)throw new RangeError(N("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Ke(r),void(n[t+1]=Qe(r))}if(ut(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*ot,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new Tr(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!me(r))throw new TypeError(N("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!Je(r[f])){o=!0;break}if(o){if(!ze(a))throw new RangeError(N("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*ot,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new Tr(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=Ke(u),n[t+1]=Qe(u),t+=2}}));var wt=2*br.BYTES_PER_ELEMENT,bt=qe();function vt(r){return r instanceof Tt||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function dt(r){return r===Tt||"Complex64Array"===r.name}function Et(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===wt/2}function At(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===wt}function Tt(){var r,e,t,n;if(e=arguments.length,!(this instanceof Tt))return 0===e?new Tt:1===e?new Tt(arguments[0]):2===e?new Tt(arguments[0],arguments[1]):new Tt(arguments[0],arguments[1],arguments[2]);if(0===e)t=new br(0);else if(1===e)if(se(arguments[0]))t=new br(2*arguments[0]);else if(me(arguments[0]))if((n=(t=arguments[0]).length)&&ir(t)&&Je(t[0])){if(null===(t=mt(new br(2*n),t))){if(!ze(n))throw new RangeError(N("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new br(arguments[0])}}else{if(Et(t))t=rt(t,0);else if(At(t))t=et(t,0);else if(!ze(n))throw new RangeError(N("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new br(t)}else if(be(arguments[0])){if(!ae((t=arguments[0]).byteLength/wt))throw new RangeError(N("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",wt,t.byteLength));t=new br(t)}else{if(!ve(arguments[0]))throw new TypeError(N("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===bt)throw new TypeError(N("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Ye(t[De]))throw new TypeError(N("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Ye((t=t[De]()).next))throw new TypeError(N("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=ht(t))instanceof Error)throw t;t=new br(t)}else{if(!be(t=arguments[0]))throw new TypeError(N("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!se(r=arguments[1]))throw new TypeError(N("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!ae(r/wt))throw new RangeError(N("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",wt,r));if(2===e){if(!ae((n=t.byteLength-r)/wt))throw new RangeError(N("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",wt,n));t=new br(t,r)}else{if(!se(n=arguments[2]))throw new TypeError(N("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*wt>t.byteLength-r)throw new RangeError(N("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*wt));t=new br(t,r,2*n)}}return q(this,"_buffer",t),q(this,"_length",t.length/2),this}q(Tt,"BYTES_PER_ELEMENT",wt),q(Tt,"name","Complex128Array"),q(Tt,"from",(function(r){var t,n,i,a,u,f,l,c,s,y,p,h;if(!Ye(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!dt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((n=arguments.length)>1){if(!Ye(i=arguments[1]))throw new TypeError(N("invalid argument. Second argument must be a function. Value: `%s`.",i));n>2&&(t=arguments[2])}if(vt(r)){if(c=r.length,i){for(u=(a=new this(c))._buffer,h=0,p=0;p<c;p++){if(Je(y=i.call(t,r.get(p),p)))u[h]=yt(y),u[h+1]=pt(y);else{if(!(he(y)&&y.length>=2))throw new TypeError(N("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",y));u[h]=y[0],u[h+1]=y[1]}h+=2}return a}return new this(r)}if(me(r)){if(i){for(c=r.length,l=r.get&&r.set?o("default"):e("default"),p=0;p<c;p++)if(!Je(l(r,p))){s=!0;break}if(s){if(!ze(c))throw new RangeError(N("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",c));for(u=(a=new this(c/2))._buffer,p=0;p<c;p++)u[p]=i.call(t,l(r,p),p);return a}for(u=(a=new this(c))._buffer,h=0,p=0;p<c;p++){if(Je(y=i.call(t,l(r,p),p)))u[h]=yt(y),u[h+1]=pt(y);else{if(!(he(y)&&y.length>=2))throw new TypeError(N("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",y));u[h]=y[0],u[h+1]=y[1]}h+=2}return a}return new this(r)}if(ve(r)&&bt&&Ye(r[De])){if(!Ye((u=r[De]()).next))throw new TypeError(N("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((f=i?gt(u,i,t):ht(u))instanceof Error)throw f;for(u=(a=new this(c=f.length/2))._buffer,p=0;p<c;p++)u[p]=f[p];return a}throw new TypeError(N("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),q(Tt,"of",(function(){var r,e;if(!Ye(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!dt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),He(Tt.prototype,"buffer",(function(){return this._buffer.buffer})),He(Tt.prototype,"byteLength",(function(){return this._buffer.byteLength})),He(Tt.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),q(Tt.prototype,"BYTES_PER_ELEMENT",Tt.BYTES_PER_ELEMENT),q(Tt.prototype,"copyWithin",(function(r,e){if(!vt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),q(Tt.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!vt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,q(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new We(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),q(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),De&&q(t,De,(function(){return e.entries()})),t})),q(Tt.prototype,"get",(function(r){var e;if(!vt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!se(r))throw new TypeError(N("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new We((e=this._buffer)[r*=2],e[r+1])})),He(Tt.prototype,"length",(function(){return this._length})),q(Tt.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!vt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!se(t=arguments[1]))throw new TypeError(N("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Je(r)){if(t>=this._length)throw new RangeError(N("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=yt(r),void(n[t+1]=pt(r))}if(vt(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*wt,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new br(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!me(r))throw new TypeError(N("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!Je(r[f])){o=!0;break}if(o){if(!ze(a))throw new RangeError(N("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*wt,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new br(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=yt(u),n[t+1]=pt(u),t+=2}}));var _t=[br,Tr,Rr,kr,Ur,Cr,Hr,$r,Jr,st,Tt],xt=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],jt=xt.length;function kt(r){var t,i=function(r){var e;if(ir(r))return"generic";if(ar(r))return null;for(e=0;e<jt;e++)if(r instanceof _t[e])return xt[e];return cr[lr(r)]||null}(r);return"function"==typeof(t=r).get&&"function"==typeof t.set?{accessorProtocol:!0,accessors:[o(i),u(i)]}:{accessorProtocol:!1,accessors:[e(i),n(i)]}}function Vt(r,e,t){var n;return function(r,e){return"function"==typeof r[e]}(r,"some")?r.some(e,t):(n=function(r){var e=kt(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}(r),n.accessorProtocol?function(r,e,t){var n,i,o;for(n=r.data,i=r.accessors[0],o=0;o<n.length;o++)if(e.call(t,i(n,o),o,n))return!0;return!1}(n,e,t):function(r,e,t){var n;for(n=0;n<r.length;n++)if(e.call(t,r[n],n,r))return!0;return!1}(r,e,t))}export{Vt as default};
//# sourceMappingURL=mod.js.map
