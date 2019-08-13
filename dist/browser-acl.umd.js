!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).BrowserAcl={})}(this,function(e){"use strict";function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r=function(e){return"boolean"==typeof e||void 0===e||"function"==typeof e&&""===e.name},n=function(){function e(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).strict,r=void 0!==t&&t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.strict=r,this.rules=new Map,this.policies=new Map,this.registry=new WeakMap}var n,i,o;return n=e,(i=[{key:"rule",value:function(e,t){var n=this,i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];r(t)&&(i=void 0===t||t,t="GLOBAL_RULE");var o=this.subjectMapper(t),s=Array.isArray(e)?e:[e];return s.forEach(function(e){var t=n.rules.get(o)||{};t[e]=i,n.rules.set(o,t)}),this}},{key:"policy",value:function(e,t){var r="function"==typeof e?new e:e,n=this.subjectMapper(t);return this.policies.set(n,r),this}},{key:"register",value:function(e,t){return this.registry.set(e,t),this}},{key:"can",value:function(e,t,r){r=void 0===r?"GLOBAL_RULE":r;var n=this.subjectMapper(r),i=this.policies.get(n),o=i||this.rules.get(n);if(void 0===o){if(this.strict)throw new Error('Unknown subject "'.concat(n,'"'));return!1}for(var s=arguments.length,a=new Array(s>3?s-3:0),u=3;u<s;u++)a[u-3]=arguments[u];if(i&&"function"==typeof i.beforeAll){var c=i.beforeAll.apply(i,[t,e,r,n].concat(a));if(void 0!==c)return c}if("function"==typeof o[t])return Boolean(o[t].apply(o,[e,r,n].concat(a)));if(this.strict&&void 0===o[t])throw new Error('Unknown verb "'.concat(t,'"'));return Boolean(o[t])}},{key:"some",value:function(e,t,r){for(var n=this,i=arguments.length,o=new Array(i>3?i-3:0),s=3;s<i;s++)o[s-3]=arguments[s];return r.some(function(r){return n.can.apply(n,[e,t,r].concat(o))})}},{key:"every",value:function(e,t,r){for(var n=this,i=arguments.length,o=new Array(i>3?i-3:0),s=3;s<i;s++)o[s-3]=arguments[s];return r.every(function(r){return n.can.apply(n,[e,t,r].concat(o))})}},{key:"mixin",value:function(e){var t=this;return e.prototype.can=function(){return t.can.apply(t,[this].concat(Array.prototype.slice.call(arguments)))},e.prototype.can.every=function(){return t.every.apply(t,[this].concat(Array.prototype.slice.call(arguments)))},e.prototype.can.some=function(){return t.some.apply(t,[this].concat(Array.prototype.slice.call(arguments)))},this}},{key:"subjectMapper",value:function(e){if("string"==typeof e)return e;var t="function"==typeof e;return t&&this.registry.has(e)?this.registry.get(e):!t&&this.registry.has(e.constructor)?this.registry.get(e.constructor):t?e.name:e.constructor.name}},{key:"reset",value:function(){return this.rules=new Map,this.policies=new Map,this.registry=new WeakMap,this}},{key:"removeRules",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=this.subjectMapper(e);if(this.rules.has(r)){if(t){var n=this.rules.get(r);return delete n[t],this}this.rules.delete(r)}return this}},{key:"removePolicy",value:function(e){var t=this.subjectMapper(e);return this.policies.delete(t),this}},{key:"removeAll",value:function(e){return this.removeRules(e),this.removePolicy(e),this}}])&&t(n.prototype,i),o&&t(n,o),e}();e.GlobalRule="GLOBAL_RULE",e.default=n,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=browser-acl.umd.js.map
