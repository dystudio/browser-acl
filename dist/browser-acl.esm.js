const t="GLOBAL_RULE",e=t=>"boolean"==typeof t||void 0===t||"function"==typeof t&&""===t.name;export default class{constructor({strict:t=!1}={}){this.strict=t,this.rules=new Map,this.policies=new Map,this.registry=new WeakMap}rule(r,s,i=!0){e(s)&&(i=void 0===s||s,s=t);const n=this.subjectMapper(s);return(Array.isArray(r)?r:[r]).forEach(t=>{const e=this.rules.get(n)||{};e[t]=i,this.rules.set(n,e)}),this}policy(t,e){const r="function"==typeof t?new t:t,s=this.subjectMapper(e);return this.policies.set(s,r),this}register(t,e){return this.registry.set(t,e),this}can(e,r,s,...i){s=void 0===s?t:s;const n=this.subjectMapper(s),o=this.policies.get(n),c=o||this.rules.get(n);if(void 0===c){if(this.strict)throw new Error(`Unknown subject "${n}"`);return!1}if(o&&"function"==typeof o.beforeAll){const t=o.beforeAll(r,e,s,n,...i);if(void 0!==t)return t}if("function"==typeof c[r])return Boolean(c[r](e,s,n,...i));if(this.strict&&void 0===c[r])throw new Error(`Unknown verb "${r}"`);return Boolean(c[r])}some(t,e,r,...s){return r.some(r=>this.can(t,e,r,...s))}every(t,e,r,...s){return r.every(r=>this.can(t,e,r,...s))}mixin(t){const e=this;return t.prototype.can=function(){return e.can(this,...arguments)},t.prototype.can.every=function(){return e.every(this,...arguments)},t.prototype.can.some=function(){return e.some(this,...arguments)},this}subjectMapper(t){if("string"==typeof t)return t;const e="function"==typeof t;return e&&this.registry.has(t)?this.registry.get(t):!e&&this.registry.has(t.constructor)?this.registry.get(t.constructor):e?t.name:t.constructor.name}reset(){return this.rules=new Map,this.policies=new Map,this.registry=new WeakMap,this}removeRules(t,e=null){const r=this.subjectMapper(t);if(this.rules.has(r)){if(e){return delete this.rules.get(r)[e],this}this.rules.delete(r)}return this}removePolicy(t){const e=this.subjectMapper(t);return this.policies.delete(e),this}removeAll(t){return this.removeRules(t),this.removePolicy(t),this}}export{t as GlobalRule};
//# sourceMappingURL=browser-acl.esm.js.map