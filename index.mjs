// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@v0.1.0-esm/index.mjs";function t(t,e,n){var o;return function(r,t){return"function"==typeof r[t]}(t,"some")?t.some(e,n):(o=r(t)).accessorProtocol?function(r,t,e){var n,o,a;for(n=r.data,o=r.accessors[0],a=0;a<n.length;a++)if(t.call(e,o(n,a),a,n))return!0;return!1}(o,e,n):function(r,t,e){var n;for(n=0;n<r.length;n++)if(t.call(e,r[n],n,r))return!0;return!1}(t,e,n)}export{t as default};
//# sourceMappingURL=index.mjs.map
