import"./chunks/Base.astro_astro_type_script_index_0_lang.dfc20b88.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Q=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const a=t[n++];e[s++]=String.fromCharCode((r&31)<<6|a&63)}else if(r>239&&r<365){const a=t[n++],i=t[n++],o=t[n++],h=((r&7)<<18|(a&63)<<12|(i&63)<<6|o&63)-65536;e[s++]=String.fromCharCode(55296+(h>>10)),e[s++]=String.fromCharCode(56320+(h&1023))}else{const a=t[n++],i=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(a&63)<<6|i&63)}}return e.join("")},z={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const a=t[r],i=r+1<t.length,o=i?t[r+1]:0,h=r+2<t.length,l=h?t[r+2]:0,R=a>>2,m=(a&3)<<4|o>>4;let E=(o&15)<<2|l>>6,_=l&63;h||(_=64,i||(E=64)),s.push(n[R],n[m],n[E],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(V(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Q(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const a=n[t.charAt(r++)],o=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const m=r<t.length?n[t.charAt(r)]:64;if(++r,a==null||o==null||l==null||m==null)throw Error();const E=a<<2|o>>4;if(s.push(E),l!==64){const _=o<<4&240|l>>2;if(s.push(_),m!==64){const Z=l<<6&192|m;s.push(Z)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},q=function(t){const e=V(t);return z.encodeByteArray(e,!0)},W=function(t){return q(t).replace(/\./g,"")},ee=function(t){try{return z.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function te(){try{return typeof indexedDB=="object"}catch{return!1}}function ne(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var a;e(((a=r.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){e(n)}})}function re(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se=()=>re().__FIREBASE_DEFAULTS__,ae=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ie=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ee(t[1]);return e&&JSON.parse(e)},oe=()=>{try{return se()||ae()||ie()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ce=()=>{var t;return(t=oe())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le="FirebaseError";class b extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=le,Object.setPrototypeOf(this,b.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,G.prototype.create)}}class G{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,a=this.errors[e],i=a?de(a,s):"Error",o=`${this.serviceName}: ${i} (${r}).`;return new b(r,o,s)}}function de(t,e){return t.replace(fe,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const fe=/\{\$([^}]+)}/g;function v(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const a=t[r],i=e[r];if(L(a)&&L(i)){if(!v(a,i))return!1}else if(a!==i)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function L(t){return t!==null&&typeof t=="object"}class I{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new he;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e?.identifier),r=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(a){if(r)return null;throw a}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(me(e))try{this.getOrInitializeService({instanceIdentifier:f})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:r});s.resolve(a)}catch{}}}}clearInstance(e=f){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=f){return this.instances.has(e)}getOptions(e=f){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[a,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(a);s===o&&i.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),a=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;a.add(e),this.onInitCallbacks.set(r,a);const i=this.instances.get(r);return i&&e(i,r),()=>{a.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:pe(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=f){return this.component?this.component.multipleInstances?e:f:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pe(t){return t===f?void 0:t}function me(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ue(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var c;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(c||(c={}));const be={debug:c.DEBUG,verbose:c.VERBOSE,info:c.INFO,warn:c.WARN,error:c.ERROR,silent:c.SILENT},Ee=c.INFO,_e={[c.DEBUG]:"log",[c.VERBOSE]:"log",[c.INFO]:"info",[c.WARN]:"warn",[c.ERROR]:"error"},ye=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=_e[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ie{constructor(e){this.name=e,this._logLevel=Ee,this._logHandler=ye,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in c))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?be[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,c.DEBUG,...e),this._logHandler(this,c.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,c.VERBOSE,...e),this._logHandler(this,c.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,c.INFO,...e),this._logHandler(this,c.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,c.WARN,...e),this._logHandler(this,c.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,c.ERROR,...e),this._logHandler(this,c.ERROR,...e)}}const De=(t,e)=>e.some(n=>t instanceof n);let H,x;function Se(){return H||(H=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ce(){return x||(x=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const K=new WeakMap,A=new WeakMap,J=new WeakMap,D=new WeakMap,N=new WeakMap;function we(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",a),t.removeEventListener("error",i)},a=()=>{n(d(t.result)),r()},i=()=>{s(t.error),r()};t.addEventListener("success",a),t.addEventListener("error",i)});return e.then(n=>{n instanceof IDBCursor&&K.set(n,t)}).catch(()=>{}),N.set(e,t),e}function ve(t){if(A.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",i),t.removeEventListener("abort",i)},a=()=>{n(),r()},i=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",a),t.addEventListener("error",i),t.addEventListener("abort",i)});A.set(t,e)}let B={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return A.get(t);if(e==="objectStoreNames")return t.objectStoreNames||J.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return d(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ae(t){B=t(B)}function Be(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(S(this),e,...n);return J.set(s,e.sort?e.sort():[e]),d(s)}:Ce().includes(t)?function(...e){return t.apply(S(this),e),d(K.get(this))}:function(...e){return d(t.apply(S(this),e))}}function Oe(t){return typeof t=="function"?Be(t):(t instanceof IDBTransaction&&ve(t),De(t,Se())?new Proxy(t,B):t)}function d(t){if(t instanceof IDBRequest)return we(t);if(D.has(t))return D.get(t);const e=Oe(t);return e!==t&&(D.set(t,e),N.set(e,t)),e}const S=t=>N.get(t);function Te(t,e,{blocked:n,upgrade:s,blocking:r,terminated:a}={}){const i=indexedDB.open(t,e),o=d(i);return s&&i.addEventListener("upgradeneeded",h=>{s(d(i.result),h.oldVersion,h.newVersion,d(i.transaction))}),n&&i.addEventListener("blocked",()=>n()),o.then(h=>{a&&h.addEventListener("close",()=>a()),r&&h.addEventListener("versionchange",()=>r())}).catch(()=>{}),o}const Me=["get","getKey","getAll","getAllKeys","count"],$e=["put","add","delete","clear"],C=new Map;function P(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(C.get(e))return C.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=$e.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Me.includes(n)))return;const a=async function(i,...o){const h=this.transaction(i,r?"readwrite":"readonly");let l=h.store;return s&&(l=l.index(o.shift())),(await Promise.all([l[n](...o),r&&h.done]))[0]};return C.set(e,a),a}Ae(t=>({...t,get:(e,n,s)=>P(e,n)||t.get(e,n,s),has:(e,n)=>!!P(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Re(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Re(t){const e=t.getComponent();return e?.type==="VERSION"}const O="@firebase/app",F="0.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=new Ie("@firebase/app"),Le="@firebase/app-compat",He="@firebase/analytics-compat",xe="@firebase/analytics",Pe="@firebase/app-check-compat",Fe="@firebase/app-check",je="@firebase/auth",ke="@firebase/auth-compat",Ue="@firebase/database",Ve="@firebase/database-compat",ze="@firebase/functions",We="@firebase/functions-compat",Ge="@firebase/installations",Ke="@firebase/installations-compat",Je="@firebase/messaging",Ye="@firebase/messaging-compat",Xe="@firebase/performance",Ze="@firebase/performance-compat",Qe="@firebase/remote-config",qe="@firebase/remote-config-compat",et="@firebase/storage",tt="@firebase/storage-compat",nt="@firebase/firestore",rt="@firebase/firestore-compat",st="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="[DEFAULT]",it={[O]:"fire-core",[Le]:"fire-core-compat",[xe]:"fire-analytics",[He]:"fire-analytics-compat",[Fe]:"fire-app-check",[Pe]:"fire-app-check-compat",[je]:"fire-auth",[ke]:"fire-auth-compat",[Ue]:"fire-rtdb",[Ve]:"fire-rtdb-compat",[ze]:"fire-fn",[We]:"fire-fn-compat",[Ge]:"fire-iid",[Ke]:"fire-iid-compat",[Je]:"fire-fcm",[Ye]:"fire-fcm-compat",[Xe]:"fire-perf",[Ze]:"fire-perf-compat",[Qe]:"fire-rc",[qe]:"fire-rc-compat",[et]:"fire-gcs",[tt]:"fire-gcs-compat",[nt]:"fire-fst",[rt]:"fire-fst-compat","fire-js":"fire-js",[st]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=new Map,M=new Map;function ot(t,e){try{t.container.addComponent(e)}catch(n){p.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $(t){const e=t.name;if(M.has(e))return p.debug(`There were multiple attempts to register component ${e}.`),!1;M.set(e,t);for(const n of T.values())ot(n,t);return!0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},u=new G("app","Firebase",ct);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new I("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw u.create("app-deleted",{appName:this._name})}}function lt(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:at,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw u.create("bad-app-name",{appName:String(r)});if(n||(n=ce()),!n)throw u.create("no-options");const a=T.get(r);if(a){if(v(n,a.options)&&v(s,a.config))return a;throw u.create("duplicate-app",{appName:r})}const i=new ge(r);for(const h of M.values())i.addComponent(h);const o=new ht(n,s,i);return T.set(r,o),o}function y(t,e,n){var s;let r=(s=it[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const a=r.match(/\s|\//),i=e.match(/\s|\//);if(a||i){const o=[`Unable to register library "${r}" with version "${e}":`];a&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),a&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),p.warn(o.join(" "));return}$(new I(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt="firebase-heartbeat-database",ft=1,g="firebase-heartbeat-store";let w=null;function Y(){return w||(w=Te(dt,ft,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(g)}}}).catch(t=>{throw u.create("idb-open",{originalErrorMessage:t.message})})),w}async function ut(t){try{return(await Y()).transaction(g).objectStore(g).get(X(t))}catch(e){if(e instanceof b)p.warn(e.message);else{const n=u.create("idb-get",{originalErrorMessage:e?.message});p.warn(n.message)}}}async function j(t,e){try{const s=(await Y()).transaction(g,"readwrite");return await s.objectStore(g).put(e,X(t)),s.done}catch(n){if(n instanceof b)p.warn(n.message);else{const s=u.create("idb-set",{originalErrorMessage:n?.message});p.warn(s.message)}}}function X(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt=1024,mt=30*24*60*60*1e3;class gt{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Et(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=k();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const a=new Date(r.date).valueOf();return Date.now()-a<=mt}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=k(),{heartbeatsToSend:n,unsentEntries:s}=bt(this._heartbeatsCache.heartbeats),r=W(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function k(){return new Date().toISOString().substring(0,10)}function bt(t,e=pt){const n=[];let s=t.slice();for(const r of t){const a=n.find(i=>i.agent===r.agent);if(a){if(a.dates.push(r.date),U(n)>e){a.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),U(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Et{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return te()?ne().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ut(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return j(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return j(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function U(t){return W(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(t){$(new I("platform-logger",e=>new Ne(e),"PRIVATE")),$(new I("heartbeat",e=>new gt(e),"PRIVATE")),y(O,F,t),y(O,F,"esm2017"),y("fire-js","")}_t("");var yt="firebase",It="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */y(yt,It,"app");const Dt={apiKey:"",appId:"",authDomain:"",databaseURL:"",measurementId:"",messagingSenderId:"",projectId:"",storageBucket:""};lt(Dt);
