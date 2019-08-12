"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const GlobalRule="GLOBAL_RULE",assumeGlobal=e=>"boolean"==typeof e||void 0===e||"function"==typeof e&&""===e.name;class Acl{constructor({strict:e=!1}={}){this.strict=e,this.rules=new Map,this.policies=new Map,this.registry=new WeakMap}rule(e,t,r=!0){assumeGlobal(t)&&(r=void 0===t||t,t=GlobalRule);const s=this.subjectMapper(t);return(Array.isArray(e)?e:[e]).forEach(e=>{const t=this.rules.get(s)||{};t[e]=r,this.rules.set(s,t)}),this}policy(e,t){const r="function"==typeof e?new e:e,s=this.subjectMapper(t);return this.policies.set(s,r),this}register(e,t){return this.registry.set(e,t),this}can(e,t,r,...s){r=void 0===r?GlobalRule:r;const i=this.subjectMapper(r),o=this.policies.get(i),n=o||this.rules.get(i);if(void 0===n){if(this.strict)throw new Error(`Unknown subject "${i}"`);return!1}if(o&&"function"==typeof o.beforeAll){const n=o.beforeAll(t,e,r,i,...s);if(void 0!==n)return n}if("function"==typeof n[t])return Boolean(n[t](e,r,i,...s));if(this.strict&&void 0===n[t])throw new Error(`Unknown verb "${t}"`);return Boolean(n[t])}some(e,t,r,...s){return r.some(r=>this.can(e,t,r,...s))}every(e,t,r,...s){return r.every(r=>this.can(e,t,r,...s))}mixin(e){const t=this;return e.prototype.can=function(){return t.can(this,...arguments)},e.prototype.can.every=function(){return t.every(this,...arguments)},e.prototype.can.some=function(){return t.some(this,...arguments)},this}subjectMapper(e){if("string"==typeof e)return e;const t="function"==typeof e;return t&&this.registry.has(e)?this.registry.get(e):!t&&this.registry.has(e.constructor)?this.registry.get(e.constructor):t?e.name:e.constructor.name}reset(){return this.rules=new Map,this.policies=new Map,this.registry=new WeakMap,this}removeRules(e,t=null){const r=this.subjectMapper(e);if(this.rules.has(r)){if(t){return delete this.rules.get(r)[t],this}this.rules.delete(r)}return this}removePolicy(e){const t=this.subjectMapper(e);return this.policies.delete(t),this}removeAll(e){return this.removeRules(e),this.removePolicy(e),this}}exports.GlobalRule=GlobalRule,exports.default=Acl;
//# sourceMappingURL=browser-acl.common.js.map