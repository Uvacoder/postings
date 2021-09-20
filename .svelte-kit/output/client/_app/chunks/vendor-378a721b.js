function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function r(t){return t()}function i(){return Object.create(null)}function s(t){t.forEach(r)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let c;function u(t,e){return c||(c=document.createElement("a")),c.href=e,t===c.href}function l(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function h(t,e,n,r){if(t){const i=d(t,e,n,r);return t[0](i)}}function d(t,e,r,i){return t[1]&&i?n(r.ctx.slice(),t[1](i(e))):r.ctx}function f(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(void 0===e.dirty)return i;if("object"==typeof i){const t=[],n=Math.max(e.dirty.length,i.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|i[r];return t}return e.dirty|i}return e.dirty}function p(t,e,n,r,i,s){if(i){const o=d(e,n,r,s);t.p(o,i)}}function g(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function m(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function y(t,e,n){return t.set(n),e}const v="undefined"!=typeof window;let w=v?()=>window.performance.now():()=>Date.now(),_=v?t=>requestAnimationFrame(t):t;const b=new Set;function T(t){b.forEach((e=>{e.c(t)||(b.delete(e),e.f())})),0!==b.size&&_(T)}function E(t){let e;return 0===b.size&&_(T),{promise:new Promise((n=>{b.add(e={c:t,f:n})})),abort(){b.delete(e)}}}let I=!1;function S(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function k(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function A(t){const e=O("style");return function(t,e){!function(t,e){t.appendChild(e)}(t.head||t,e)}(k(t),e),e}function N(t,e){if(I){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const r=e[n];void 0!==r.claim_order&&t.push(r)}e=t}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let c=0;c<e.length;c++){const t=e[c].claim_order,s=(i>0&&e[n[i]].claim_order<=t?i+1:S(1,i,(t=>e[n[t]].claim_order),t))-1;r[c]=n[s]+1;const o=s+1;n[o]=c,i=Math.max(o,i)}const s=[],o=[];let a=e.length-1;for(let c=n[i]+1;0!=c;c=r[c-1]){for(s.push(e[c-1]);a>=c;a--)o.push(e[a]);a--}for(;a>=0;a--)o.push(e[a]);s.reverse(),o.sort(((t,e)=>t.claim_order-e.claim_order));for(let c=0,u=0;c<o.length;c++){for(;u<s.length&&o[c].claim_order>=s[u].claim_order;)u++;const e=u<s.length?s[u]:null;t.insertBefore(o[c],e)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode===t&&null===e.nextSibling||t.appendChild(e)}function C(t,e,n){I&&!n?N(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function R(t){t.parentNode.removeChild(t)}function D(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function O(t){return document.createElement(t)}function x(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function L(t){return document.createTextNode(t)}function P(){return L(" ")}function M(){return L("")}function U(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function F(t){return function(e){return e.preventDefault(),t.call(this,e)}}function V(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t,e){for(const n in e)V(t,n,e[n])}function j(t){return Array.from(t.childNodes)}function B(t,e,n,r,i=!1){!function(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}(t);const s=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const s=t[r];if(e(s)){const e=n(s);return void 0===e?t.splice(r,1):t[r]=e,i||(t.claim_info.last_index=r),s}}for(let r=t.claim_info.last_index-1;r>=0;r--){const s=t[r];if(e(s)){const e=n(s);return void 0===e?t.splice(r,1):t[r]=e,i?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=r,s}}return r()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function q(t,e,n,r){return B(t,(t=>t.nodeName===e),(t=>{const e=[];for(let r=0;r<t.attributes.length;r++){const i=t.attributes[r];n[i.name]||e.push(i.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>r(e)))}function z(t,e,n){return q(t,e,n,O)}function H(t,e,n){return q(t,e,n,x)}function K(t,e){return B(t,(t=>3===t.nodeType),(t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n}),(()=>L(e)),!0)}function G(t){return K(t," ")}function W(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function X(t,e){t.value=null==e?"":e}function Q(t,e){for(let n=0;n<t.options.length;n+=1){const r=t.options[n];if(r.__value===e)return void(r.selected=!0)}t.selectedIndex=-1}function Y(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function J(t,e,n){t.classList[n?"add":"remove"](e)}const Z=new Set;let tt,et=0;function nt(t,e,n,r,i,s,o,a=0){const c=16.666/r;let u="{\n";for(let m=0;m<=1;m+=c){const t=e+(n-e)*s(m);u+=100*m+`%{${o(t,1-t)}}\n`}const l=u+`100% {${o(n,1-n)}}\n}`,h=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(l)}_${a}`,d=k(t);Z.add(d);const f=d.__svelte_stylesheet||(d.__svelte_stylesheet=A(t).sheet),p=d.__svelte_rules||(d.__svelte_rules={});p[h]||(p[h]=!0,f.insertRule(`@keyframes ${h} ${l}`,f.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${h} ${r}ms linear ${i}ms 1 both`,et+=1,h}function rt(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),i=n.length-r.length;i&&(t.style.animation=r.join(", "),et-=i,et||_((()=>{et||(Z.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),Z.clear())})))}function it(t){tt=t}function st(){if(!tt)throw new Error("Function called outside component initialization");return tt}function ot(t){st().$$.on_mount.push(t)}function at(t){st().$$.after_update.push(t)}function ct(t,e){st().$$.context.set(t,e)}function ut(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const lt=[],ht=[],dt=[],ft=[],pt=Promise.resolve();let gt=!1;function mt(t){dt.push(t)}function yt(t){ft.push(t)}let vt=!1;const wt=new Set;function _t(){if(!vt){vt=!0;do{for(let t=0;t<lt.length;t+=1){const e=lt[t];it(e),bt(e.$$)}for(it(null),lt.length=0;ht.length;)ht.pop()();for(let t=0;t<dt.length;t+=1){const e=dt[t];wt.has(e)||(wt.add(e),e())}dt.length=0}while(lt.length);for(;ft.length;)ft.pop()();gt=!1,vt=!1,wt.clear()}}function bt(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(mt)}}let Tt;function Et(){return Tt||(Tt=Promise.resolve(),Tt.then((()=>{Tt=null}))),Tt}function It(t,e,n){t.dispatchEvent(function(t,e,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,!1,e),r}(`${e?"intro":"outro"}${n}`))}const St=new Set;let kt;function At(){kt={r:0,c:[],p:kt}}function Nt(){kt.r||s(kt.c),kt=kt.p}function Ct(t,e){t&&t.i&&(St.delete(t),t.i(e))}function Rt(t,e,n,r){if(t&&t.o){if(St.has(t))return;St.add(t),kt.c.push((()=>{St.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}const Dt={duration:0};function Ot(n,r,i){let s,a,c=r(n,i),u=!1,l=0;function h(){s&&rt(n,s)}function d(){const{delay:r=0,duration:i=300,easing:o=e,tick:d=t,css:f}=c||Dt;f&&(s=nt(n,0,1,i,r,o,f,l++)),d(0,1);const p=w()+r,g=p+i;a&&a.abort(),u=!0,mt((()=>It(n,!0,"start"))),a=E((t=>{if(u){if(t>=g)return d(1,0),It(n,!0,"end"),h(),u=!1;if(t>=p){const e=o((t-p)/i);d(e,1-e)}}return u}))}let f=!1;return{start(){f||(f=!0,rt(n),o(c)?(c=c(),Et().then(d)):d())},invalidate(){f=!1},end(){u&&(h(),u=!1)}}}function xt(n,r,i,a){let c=r(n,i),u=a?0:1,l=null,h=null,d=null;function f(){d&&rt(n,d)}function p(t,e){const n=t.b-u;return e*=Math.abs(n),{a:u,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function g(r){const{delay:i=0,duration:o=300,easing:a=e,tick:g=t,css:m}=c||Dt,y={start:w()+i,b:r};r||(y.group=kt,kt.r+=1),l||h?h=y:(m&&(f(),d=nt(n,u,r,o,i,a,m)),r&&g(0,1),l=p(y,o),mt((()=>It(n,r,"start"))),E((t=>{if(h&&t>h.start&&(l=p(h,o),h=null,It(n,l.b,"start"),m&&(f(),d=nt(n,u,l.b,l.duration,0,a,c.css))),l)if(t>=l.end)g(u=l.b,1-u),It(n,l.b,"end"),h||(l.b?f():--l.group.r||s(l.group.c)),l=null;else if(t>=l.start){const e=t-l.start;u=l.a+l.d*a(e/l.duration),g(u,1-u)}return!(!l&&!h)})))}return{run(t){o(c)?Et().then((()=>{c=c(),g(t)})):g(t)},end(){f(),l=h=null}}}function Lt(t,e){const n={},r={},i={$$scope:1};let s=t.length;for(;s--;){const o=t[s],a=e[s];if(a){for(const t in o)t in a||(r[t]=1);for(const t in a)i[t]||(n[t]=a[t],i[t]=1);t[s]=a}else for(const t in o)i[t]=1}for(const o in r)o in n||(n[o]=void 0);return n}function Pt(t){return"object"==typeof t&&null!==t?t:{}}function Mt(t,e,n){const r=t.$$.props[e];void 0!==r&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function Ut(t){t&&t.c()}function Ft(t,e){t&&t.l(e)}function Vt(t,e,n,i){const{fragment:a,on_mount:c,on_destroy:u,after_update:l}=t.$$;a&&a.m(e,n),i||mt((()=>{const e=c.map(r).filter(o);u?u.push(...e):s(e),t.$$.on_mount=[]})),l.forEach(mt)}function $t(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function jt(t,e){-1===t.$$.dirty[0]&&(lt.push(t),gt||(gt=!0,pt.then(_t)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Bt(e,n,r,o,a,c,u,l=[-1]){const h=tt;it(e);const d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:i(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:n.context||[]),callbacks:i(),dirty:l,skip_bound:!1,root:n.target||h.$$.root};u&&u(d.root);let f=!1;if(d.ctx=r?r(e,n.props||{},((t,n,...r)=>{const i=r.length?r[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=i)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](i),f&&jt(e,t)),n})):[],d.update(),f=!0,s(d.before_update),d.fragment=!!o&&o(d.ctx),n.target){if(n.hydrate){I=!0;const t=j(n.target);d.fragment&&d.fragment.l(t),t.forEach(R)}else d.fragment&&d.fragment.c();n.intro&&Ct(e.$$.fragment),Vt(e,n.target,n.anchor,n.customElement),I=!1,_t()}it(h)}class qt{$destroy(){$t(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const zt=[];function Ht(e,n=t){let r;const i=new Set;function s(t){if(a(e,t)&&(e=t,r)){const t=!zt.length;for(const n of i)n[1](),zt.push(n,e);if(t){for(let t=0;t<zt.length;t+=2)zt[t][0](zt[t+1]);zt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(o,a=t){const c=[o,a];return i.add(c),1===i.size&&(r=n(s)||t),o(e),()=>{i.delete(c),0===i.size&&(r(),r=null)}}}}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Kt=function(t,e){return(Kt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)};function Gt(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}function Wt(t,e,n,r){return new(n||(n=Promise))((function(i,s){function o(t){try{c(r.next(t))}catch(e){s(e)}}function a(t){try{c(r.throw(t))}catch(e){s(e)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}c((r=r.apply(t,e||[])).next())}))}function Xt(t,e){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=e.call(t,o)}catch(a){s=[6,a],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}function Qt(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Yt(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,s=n.call(t),o=[];try{for(;(void 0===e||e-- >0)&&!(r=s.next()).done;)o.push(r.value)}catch(a){i={error:a}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(i)throw i.error}}return o}function Jt(t,e,n){if(n||2===arguments.length)for(var r,i=0,s=e.length;i<s;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))}
/**
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
 */var Zt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<t.length;i+=3){var s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=s>>2,h=(3&s)<<4|a>>4,d=(15&a)<<2|u>>6,f=63&u;c||(f=64,o||(d=64)),r.push(n[l],n[h],n[d],n[f])}return r.join("")},encodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(function(t){for(var e=[],n=0,r=0;r<t.length;r++){var i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e}(t),e)},decodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){for(var e=[],n=0,r=0;n<t.length;){var i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){var s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){var o=((7&i)<<18|(63&(s=t[n++]))<<12|(63&(a=t[n++]))<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(o>>10)),e[r++]=String.fromCharCode(56320+(1023&o))}else{s=t[n++];var a=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray:function(t,e){this.init_();for(var n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<t.length;){var s=n[t.charAt(i++)],o=i<t.length?n[t.charAt(i)]:0,a=++i<t.length?n[t.charAt(i)]:64,c=++i<t.length?n[t.charAt(i)]:64;if(++i,null==s||null==o||null==a||null==c)throw Error();var u=s<<2|o>>4;if(r.push(u),64!==a){var l=o<<4&240|a>>2;if(r.push(l),64!==c){var h=a<<6&192|c;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},te=function(){function t(){var t=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n}))}return t.prototype.wrapCallback=function(t){var e=this;return function(n,r){n?e.reject(n):e.resolve(r),"function"==typeof t&&(e.promise.catch((function(){})),1===t.length?t(n):t(n,r))}},t}();
/**
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
 */
function ee(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function ne(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ee())}function re(){var t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function ie(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function se(){var t=ee();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}
/**
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
 */
var oe=function(t){function e(n,r,i){var s=t.call(this,r)||this;return s.code=n,s.customData=i,s.name="FirebaseError",Object.setPrototypeOf(s,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(s,ae.prototype.create),s}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}Kt(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e}(Error),ae=function(){function t(t,e,n){this.service=t,this.serviceName=e,this.errors=n}return t.prototype.create=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=e[0]||{},i=this.service+"/"+t,s=this.errors[t],o=s?ce(s,r):"Error",a=this.serviceName+": "+o+" ("+i+").",c=new oe(i,a,r);return c},t}();function ce(t,e){return t.replace(ue,(function(t,n){var r=e[n];return null!=r?String(r):"<"+n+"?>"}))}var ue=/\{\$([^}]+)}/g;function le(t,e){if(t===e)return!0;for(var n=Object.keys(t),r=Object.keys(e),i=0,s=n;i<s.length;i++){var o=s[i];if(!r.includes(o))return!1;var a=t[o],c=e[o];if(he(a)&&he(c)){if(!le(a,c))return!1}else if(a!==c)return!1}for(var u=0,l=r;u<l.length;u++){o=l[u];if(!n.includes(o))return!1}return!0}function he(t){return null!==t&&"object"==typeof t}
/**
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
 */function de(t){for(var e=[],n=function(t,n){Array.isArray(n)?n.forEach((function(n){e.push(encodeURIComponent(t)+"="+encodeURIComponent(n))})):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n))},r=0,i=Object.entries(t);r<i.length;r++){var s=i[r];n(s[0],s[1])}return e.length?"&"+e.join("&"):""}var fe=function(){function t(t,e){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((function(){t(n)})).catch((function(t){n.error(t)}))}return t.prototype.next=function(t){this.forEachObserver((function(e){e.next(t)}))},t.prototype.error=function(t){this.forEachObserver((function(e){e.error(t)})),this.close(t)},t.prototype.complete=function(){this.forEachObserver((function(t){t.complete()})),this.close()},t.prototype.subscribe=function(t,e,n){var r,i=this;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(t,e){if("object"!=typeof t||null===t)return!1;for(var n=0,r=e;n<r.length;n++){var i=r[n];if(i in t&&"function"==typeof t[i])return!0}return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n}).next&&(r.next=pe),void 0===r.error&&(r.error=pe),void 0===r.complete&&(r.complete=pe);var s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(t){}})),this.observers.push(r),s},t.prototype.unsubscribeOne=function(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},t.prototype.forEachObserver=function(t){if(!this.finalized)for(var e=0;e<this.observers.length;e++)this.sendOne(e,t)},t.prototype.sendOne=function(t,e){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[t])try{e(n.observers[t])}catch(r){"undefined"!=typeof console&&console.error&&console.error(r)}}))},t.prototype.close=function(t){var e=this;this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((function(){e.observers=void 0,e.onNoObservers=void 0})))},t}();function pe(){}
/**
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
 */function ge(t){return t&&t._delegate?t._delegate:t}var me=function(){function t(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},t.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},t.prototype.setServiceProps=function(t){return this.serviceProps=t,this},t.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},t}(),ye=function(){function t(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(t){var e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){var n=new te;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:e});r&&n.resolve(r)}catch(i){}}return this.instancesDeferred.get(e).promise},t.prototype.getImmediate=function(t){var e,n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),r=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(t){var e,n;if(t.name!==this.name)throw Error("Mismatching Component "+t.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(l){}try{for(var r=Qt(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var s=Yt(i.value,2),o=s[0],a=s[1],c=this.normalizeInstanceIdentifier(o);try{var u=this.getOrInitializeService({instanceIdentifier:c});a.resolve(u)}catch(l){}}}catch(h){e={error:h}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}}},t.prototype.clearInstance=function(t){void 0===t&&(t="[DEFAULT]"),this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)},t.prototype.delete=function(){return Wt(this,void 0,void 0,(function(){var t;return Xt(this,(function(e){switch(e.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(Jt(Jt([],Yt(t.filter((function(t){return"INTERNAL"in t})).map((function(t){return t.INTERNAL.delete()})))),Yt(t.filter((function(t){return"_delete"in t})).map((function(t){return t._delete()})))))];case 1:return e.sent(),[2]}}))}))},t.prototype.isComponentSet=function(){return null!=this.component},t.prototype.isInitialized=function(t){return void 0===t&&(t="[DEFAULT]"),this.instances.has(t)},t.prototype.getOptions=function(t){return void 0===t&&(t="[DEFAULT]"),this.instancesOptions.get(t)||{}},t.prototype.initialize=function(t){var e,n;void 0===t&&(t={});var r=t.options,i=void 0===r?{}:r,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var o=this.getOrInitializeService({instanceIdentifier:s,options:i});try{for(var a=Qt(this.instancesDeferred.entries()),c=a.next();!c.done;c=a.next()){var u=Yt(c.value,2),l=u[0],h=u[1];s===this.normalizeInstanceIdentifier(l)&&h.resolve(o)}}catch(d){e={error:d}}finally{try{c&&!c.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}return o},t.prototype.onInit=function(t,e){var n,r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);var s=this.instances.get(r);return s&&t(s,r),function(){i.delete(t)}},t.prototype.invokeOnInitCallbacks=function(t,e){var n,r,i=this.onInitCallbacks.get(e);if(i)try{for(var s=Qt(i),o=s.next();!o.done;o=s.next()){var a=o.value;try{a(t,e)}catch(c){}}}catch(u){n={error:u}}finally{try{o&&!o.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}},t.prototype.getOrInitializeService=function(t){var e,n=t.instanceIdentifier,r=t.options,i=void 0===r?{}:r,s=this.instances.get(n);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:(e=n,"[DEFAULT]"===e?void 0:e),options:i}),this.instances.set(n,s),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(s,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch(o){}return s||null},t.prototype.normalizeInstanceIdentifier=function(t){return void 0===t&&(t="[DEFAULT]"),this.component?this.component.multipleInstances?t:"[DEFAULT]":t},t.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},t}();
/**
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
 */var ve,we,_e,be=function(){function t(t){this.name=t,this.providers=new Map}return t.prototype.addComponent=function(t){var e=this.getProvider(t.name);if(e.isComponentSet())throw new Error("Component "+t.name+" has already been registered with "+this.name);e.setComponent(t)},t.prototype.addOrOverwriteComponent=function(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},t.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var e=new ye(t,this);return this.providers.set(t,e),e},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function Te(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var s=arguments[e],o=0,a=s.length;o<a;o++,i++)r[i]=s[o];return r}
/**
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
 */(_e=we||(we={}))[_e.DEBUG=0]="DEBUG",_e[_e.VERBOSE=1]="VERBOSE",_e[_e.INFO=2]="INFO",_e[_e.WARN=3]="WARN",_e[_e.ERROR=4]="ERROR",_e[_e.SILENT=5]="SILENT";var Ee={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},Ie=we.INFO,Se=((ve={})[we.DEBUG]="log",ve[we.VERBOSE]="log",ve[we.INFO]="info",ve[we.WARN]="warn",ve[we.ERROR]="error",ve),ke=function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(e<t.logLevel)){var i=(new Date).toISOString(),s=Se[e];if(!s)throw new Error("Attempted to log a message with an invalid logType (value: "+e+")");console[s].apply(console,Te(["["+i+"]  "+t.name+":"],n))}},Ae=function(){function t(t){this.name=t,this._logLevel=Ie,this._logHandler=ke,this._userLogHandler=null}return Object.defineProperty(t.prototype,"logLevel",{get:function(){return this._logLevel},set:function(t){if(!(t in we))throw new TypeError('Invalid value "'+t+'" assigned to `logLevel`');this._logLevel=t},enumerable:!1,configurable:!0}),t.prototype.setLogLevel=function(t){this._logLevel="string"==typeof t?Ee[t]:t},Object.defineProperty(t.prototype,"logHandler",{get:function(){return this._logHandler},set:function(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(t){this._userLogHandler=t},enumerable:!1,configurable:!0}),t.prototype.debug=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,Te([this,we.DEBUG],t)),this._logHandler.apply(this,Te([this,we.DEBUG],t))},t.prototype.log=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,Te([this,we.VERBOSE],t)),this._logHandler.apply(this,Te([this,we.VERBOSE],t))},t.prototype.info=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,Te([this,we.INFO],t)),this._logHandler.apply(this,Te([this,we.INFO],t))},t.prototype.warn=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,Te([this,we.WARN],t)),this._logHandler.apply(this,Te([this,we.WARN],t))},t.prototype.error=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,Te([this,we.ERROR],t)),this._logHandler.apply(this,Te([this,we.ERROR],t))},t}();
/**
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
 */
class Ne{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const Ce=new Ae("@firebase/app"),Re={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},De=new Map,Oe=new Map;function xe(t,e){try{t.container.addComponent(e)}catch(n){Ce.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Le(t){const e=t.name;if(Oe.has(e))return Ce.debug(`There were multiple attempts to register component ${e}.`),!1;Oe.set(e,t);for(const n of De.values())xe(n,t);return!0}function Pe(t,e){return t.container.getProvider(e)}
/**
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
 */const Me=new ae("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
/**
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
 */
class Ue{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new me("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Me.create("app-deleted",{appName:this._name})}}
/**
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
 */function Fe(t,e={}){if("object"!=typeof e){e={name:e}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},e),r=n.name;if("string"!=typeof r||!r)throw Me.create("bad-app-name",{appName:String(r)});const i=De.get(r);if(i){if(le(t,i.options)&&le(n,i.config))return i;throw Me.create("duplicate-app",{appName:r})}const s=new be(r);for(const a of Oe.values())s.addComponent(a);const o=new Ue(t,n,s);return De.set(r,o),o}function Ve(t="[DEFAULT]"){const e=De.get(t);if(!e)throw Me.create("no-app",{appName:t});return e}function $e(t,e,n){var r;let i=null!==(r=Re[t])&&void 0!==r?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${i}" with version "${e}":`];return s&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Ce.warn(t.join(" "))}Le(new me(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
/**
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
 */var je;Le(new me("platform-logger",(t=>new Ne(t)),"PRIVATE")),$e("@firebase/app","0.7.0",je),$e("fire-js","");const Be=new ae("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),qe=new Ae("@firebase/auth");
/**
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
 */function ze(t,...e){qe.logLevel<=we.ERROR&&qe.error(`Auth (9.0.0): ${t}`,...e)}
/**
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
 */function He(t,...e){throw Ge(t,...e)}function Ke(t,...e){return Ge(t,...e)}function Ge(t,...e){if("string"!=typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Be.create(t,...e)}function We(t,e,...n){if(!t)throw Ge(e,...n)}function Xe(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ze(e),new Error(e)}function Qe(t,e){t||Xe(e)}
/**
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
 */const Ye=new Map;function Je(t){Qe(t instanceof Function,"Expected a class definition");let e=Ye.get(t);return e?(Qe(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ye.set(t,e),e)}
/**
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
 */
/**
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
 */
function Ze(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function tn(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
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
 */function en(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==tn()&&"https:"!==tn()&&!re()&&!("connection"in navigator)||navigator.onLine}
/**
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
 */
class nn{constructor(t,e){this.shortDelay=t,this.longDelay=e,Qe(e>t,"Short delay should be less than long delay!"),this.isMobile=ne()||ie()}get(){return en()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
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
 */function rn(t,e){Qe(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
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
 */class sn{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Xe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Xe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Xe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const on={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded"},an=new nn(3e4,6e4);
/**
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
 */async function cn(t,e,n,r,i={}){return un(t,i,(()=>{let i={},s={};r&&("GET"===e?s=r:i={body:JSON.stringify(r)});const o=de(Object.assign({key:t.config.apiKey},s)).slice(1),a=new(sn.headers());return a.set("Content-Type","application/json"),a.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&a.set("X-Firebase-Locale",t.languageCode),sn.fetch()(ln(t,t.config.apiHost,n,o),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))}))}async function un(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},on),e);try{const e=new hn(t),i=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw dn(t,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const e=(i.ok?s.errorMessage:s.error.message).split(" : ")[0];if("FEDERATED_USER_ID_ALREADY_LINKED"===e)throw dn(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===e)throw dn(t,"email-already-in-use",s);He(t,r[e]||e.toLowerCase().replace(/[_\s]+/g,"-"))}}catch(i){if(i instanceof oe)throw i;He(t,"network-request-failed")}}function ln(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?rn(t.config,i):`${t.config.apiScheme}://${i}`}class hn{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(Ke(this.auth,"timeout"))),an.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function dn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ke(t,e,r);return i.customData._tokenResponse=n,i}
/**
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
 */
/**
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
 */
function fn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}function pn(t){return 1e3*Number(t)}function gn(t){const[e,n,r]=t.split(".");if(void 0===e||void 0===n||void 0===r)return ze("JWT malformed, contained fewer than 3 sections"),null;try{const t=function(t){try{return Zt.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null}(n);return t?JSON.parse(t):(ze("Failed to decode base64 JWT payload"),null)}catch(i){return ze("Caught error parsing JWT payload as JSON",i),null}}
/**
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
 */
async function mn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof oe&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
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
 */(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}class yn{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
/**
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
 */class vn{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=fn(this.lastLoginAt),this.creationTime=fn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
 */async function wn(t){var e;const n=t.auth,r=await t.getIdToken(),i=await mn(t,async function(t,e){return cn(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:r}));We(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?s.providerUserInfo.map((t=>{var{providerId:e}=t,n=Gt(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=t.providerData,u=o,[...c.filter((t=>!u.some((e=>e.providerId===t.providerId)))),...u]);var c,u;const l=t.isAnonymous,h=!(t.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!l&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new vn(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}
/**
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
 */
class _n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){We(t.idToken,"internal-error"),We(void 0!==t.idToken,"internal-error"),We(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=gn(t);return We(e,"internal-error"),We(void 0!==e.exp,"internal-error"),We(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return We(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
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
 */
async function(t,e){const n=await un(t,{},(()=>{const n=de({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,s=ln(t,r,"/v1/token",`key=${i}`);return sn.fetch()(s,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,s=new _n;return n&&(We("string"==typeof n,"internal-error",{appName:t}),s.refreshToken=n),r&&(We("string"==typeof r,"internal-error",{appName:t}),s.accessToken=r),i&&(We("number"==typeof i,"internal-error",{appName:t}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new _n,this.toJSON())}_performRefresh(){return Xe("not implemented")}}
/**
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
 */function bn(t,e){We("string"==typeof t||void 0===t,"internal-error",{appName:e})}class Tn{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=Gt(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new yn(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.metadata=new vn(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await mn(this,this.stsTokenManager.getToken(this.auth,t));return We(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=ge(t),r=await n.getIdToken(e),i=gn(r);We(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:fn(pn(i.auth_time)),issuedAtTime:fn(pn(i.iat)),expirationTime:fn(pn(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=ge(t);await wn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(We(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new Tn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){We(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await wn(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await mn(this,async function(t,e){return cn(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,s,o,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,d=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:_,providerData:b,stsTokenManager:T}=e;We(v&&T,t,"internal-error");const E=_n.fromJSON(this.name,T);We("string"==typeof v,t,"internal-error"),bn(l,t.name),bn(h,t.name),We("boolean"==typeof w,t,"internal-error"),We("boolean"==typeof _,t,"internal-error"),bn(d,t.name),bn(f,t.name),bn(p,t.name),bn(g,t.name),bn(m,t.name),bn(y,t.name);const I=new Tn({uid:v,auth:t,email:h,emailVerified:w,displayName:l,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:m,lastLoginAt:y});return b&&Array.isArray(b)&&(I.providerData=b.map((t=>Object.assign({},t)))),g&&(I._redirectEventId=g),I}static async _fromIdTokenResponse(t,e,n=!1){const r=new _n;r.updateFromServerResponse(e);const i=new Tn({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await wn(i),i}}
/**
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
 */class En{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}En.type="NONE";const In=En;
/**
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
 */function Sn(t,e,n){return`firebase:${t}:${e}:${n}`}class kn{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Sn(this.userKey,r.apiKey,i),this.fullPersistenceKey=Sn("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Tn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new kn(Je(In),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=r[0]||Je(In);const s=Sn(n,t.config.apiKey,t.name);let o=null;for(const u of e)try{const e=await u._get(s);if(e){const n=Tn._fromJSON(t,e);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(s)}catch(c){}}))),new kn(i,t,n)):new kn(i,t,n)}}
/**
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
 */function An(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Dn(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Nn(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xn(e))return"Blackberry";if(Ln(e))return"Webos";if(Cn(e))return"Safari";if((e.includes("chrome/")||Rn(e))&&!e.includes("edge/"))return"Chrome";if(On(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Nn(t=ee()){return/firefox\//i.test(t)}function Cn(t=ee()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Rn(t=ee()){return/crios\//i.test(t)}function Dn(t=ee()){return/iemobile/i.test(t)}function On(t=ee()){return/android/i.test(t)}function xn(t=ee()){return/blackberry/i.test(t)}function Ln(t=ee()){return/webos/i.test(t)}function Pn(t=ee()){return/iphone|ipad|ipod/i.test(t)}function Mn(t=ee()){return Pn(t)||On(t)||Ln(t)||xn(t)||/windows phone/i.test(t)||Dn(t)}
/**
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
 */
function Un(t,e=[]){let n;switch(t){case"Browser":n=An(ee());break;case"Worker":n=`${An(ee())}-${t}`;break;default:n=t}return`${n}/JsCore/9.0.0/${e.length?e.join(","):"FirebaseCore-web"}`}
/**
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
 */class Fn{constructor(t,e){this.app=t,this.config=e,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $n(this),this.idTokenSubscription=new $n(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Be,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=e.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Je(e)),this._initializationPromise=this.queue((async()=>{var n;this._deleted||(this.persistenceManager=await kn.create(this,t),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(e),this._deleted||(this._isInitialized=!0)))})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(t)):void 0}async initializeCurrentUser(t){var e;let n=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,i=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(t);r&&r!==i||!(null==s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(We(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await wn(t)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?ge(t):null;return e&&We(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&We(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Je(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new ae("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Je(t)||this._popupRedirectResolver;We(e,this,"argument-error"),this.redirectPersistenceManager=await kn.create(this,[Je(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"==typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return We(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return We(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Un(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Vn(t){return ge(t)}class $n{constructor(t){var e,n;this.auth=t,this.observer=null,this.addObserver=(n=new fe((t=>this.observer=t),e)).subscribe.bind(n)}get next(){return We(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
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
 */class jn{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return Xe("not implemented")}_getIdTokenResponse(t){return Xe("not implemented")}_linkToIdToken(t,e){return Xe("not implemented")}_getReauthenticationResolver(t){return Xe("not implemented")}}
/**
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
 */async function Bn(t,e){return async function(t,e,n,r,i={}){const s=await cn(t,e,n,r,i);return"mfaPendingCredential"in s&&He(t,"multi-factor-auth-required",{serverResponse:s}),s}(t,"POST","/v1/accounts:signInWithIdp",function(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}(t,e))}
/**
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
 */class qn extends jn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new qn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):He("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=Gt(e,["providerId","signInMethod"]);if(!n||!r)return null;const s=new qn(n,r);return Object.assign(s,i),s}_getIdTokenResponse(t){return Bn(t,this.buildRequest())}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Bn(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Bn(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=de(e)}return t}}
/**
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
 */class zn{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
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
 */class Hn extends zn{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
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
 */class Kn extends Hn{constructor(){super("facebook.com")}static credential(t){return qn._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Kn.credentialFromTaggedObject(t)}static credentialFromError(t){return Kn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Kn.credential(t.oauthAccessToken)}catch(e){return null}}}Kn.FACEBOOK_SIGN_IN_METHOD="facebook.com",Kn.PROVIDER_ID="facebook.com";
/**
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
 */
class Gn extends Hn{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return qn._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Gn.credentialFromTaggedObject(t)}static credentialFromError(t){return Gn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Gn.credential(e,n)}catch(r){return null}}}Gn.GOOGLE_SIGN_IN_METHOD="google.com",Gn.PROVIDER_ID="google.com";
/**
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
 */
class Wn extends Hn{constructor(){super("github.com")}static credential(t){return qn._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Wn.credentialFromTaggedObject(t)}static credentialFromError(t){return Wn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Wn.credential(t.oauthAccessToken)}catch(e){return null}}}Wn.GITHUB_SIGN_IN_METHOD="github.com",Wn.PROVIDER_ID="github.com";
/**
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
 */
class Xn extends Hn{constructor(){super("twitter.com")}static credential(t,e){return qn._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Xn.credentialFromTaggedObject(t)}static credentialFromError(t){return Xn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Xn.credential(e,n)}catch(r){return null}}}Xn.TWITTER_SIGN_IN_METHOD="twitter.com",Xn.PROVIDER_ID="twitter.com";
/**
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
 */
class Qn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await Tn._fromIdTokenResponse(t,n,r),s=Yn(n);return new Qn({user:i,providerId:s,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=Yn(n);return new Qn({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function Yn(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
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
 */class Jn extends oe{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,Jn.prototype),this.appName=t.name,this.code=e.code,this.tenantId=null!==(i=t.tenantId)&&void 0!==i?i:void 0,this.serverResponse=e.customData.serverResponse}static _fromErrorAndOperation(t,e,n,r){return new Jn(t,e,n,r)}}function Zn(t,e,n,r){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Jn._fromErrorAndOperation(t,n,e,r);throw n}))}function tr(t,e,n,r){return ge(t).onAuthStateChanged(e,n,r)}function er(t){return ge(t).signOut()}
/**
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
 */
class nr{constructor(t,e){this.storage=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}}
/**
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
 */class rr extends nr{constructor(){super(window.localStorage,"LOCAL"),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=ee();return Cn(t)||Pn(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=Mn(),this._shouldAllowMigration=!0,this.boundEventHandler=this.onStorageEvent.bind(this)}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);se()&&10===document.documentMode&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,10):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}rr.type="LOCAL";const ir=rr;
/**
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
 */class sr extends nr{constructor(){super(window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}sr.type="SESSION";const or=sr;
/**
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
 */
/**
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
 */
class ar{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new ar(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async t=>t(e.origin,i))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
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
 */
function cr(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
/**
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
 */ar.receivers=[];class ur{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=cr("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
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
 */function lr(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */
function hr(){return void 0!==lr().WorkerGlobalScope&&"function"==typeof lr().importScripts}
/**
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
 */
const dr="firebaseLocalStorageDb";class fr{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function pr(t,e){return t.transaction(["firebaseLocalStorage"],e?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function gr(){const t=indexedDB.open(dr,1);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(r){n(r)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains("firebaseLocalStorage")?e(n):(n.close(),await function(){const t=indexedDB.deleteDatabase(dr);return new fr(t).toPromise()}(),e(await gr()))}))}))}async function mr(t,e,n){const r=pr(t,!0).put({fbase_key:e,value:n});return new fr(r).toPromise()}function yr(t,e){const n=pr(t,!0).delete(e);return new fr(n).toPromise()}class vr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await gr()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>3)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ar._getInstance(hr()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new ur(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var e;if(this.sender&&this.activeServiceWorker&&((null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await gr();return await mr(t,"__sak","1"),await yr(t,"__sak"),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>mr(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const n=pr(t,!1).get(e),r=await new fr(n).toPromise();return void 0===r?null:r.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>yr(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=pr(t,!1).getAll();return new fr(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}vr.type="LOCAL";const wr=vr;
/**
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
 */function _r(t){return new Promise(((e,n)=>{const r=document.createElement("script");var i,s;r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=Ke("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}
/**
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
 */
function br(t,e){return e?Je(e):(We(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
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
 */new nn(3e4,6e4);class Tr extends jn{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Bn(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Bn(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Bn(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Er(t){
/**
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
 */
return async function(t,e,n=!1){const r="signIn",i=await Zn(t,r,e),s=await Qn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}(t.auth,new Tr(t),t.bypassAuthState)}function Ir(t){const{auth:e,user:n}=t;return We(n,e,"internal-error"),
/**
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
 */
async function(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await mn(t,Zn(r,i,e,t),n);We(s.idToken,r,"internal-error");const o=gn(s.idToken);We(o,r,"internal-error");const{sub:a}=o;return We(t.uid===a,r,"user-mismatch"),Qn._forOperation(t,i,s)}catch(s){throw"auth/user-not-found"===(null==s?void 0:s.code)&&He(r,"user-mismatch"),s}}(n,new Tr(t),t.bypassAuthState)}async function Sr(t){const{auth:e,user:n}=t;return We(n,e,"internal-error"),async function(t,e,n=!1){const r=await mn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qn._forOperation(t,"link",r)}(n,new Tr(t),t.bypassAuthState)}
/**
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
 */class kr{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Er;case"linkViaPopup":case"linkViaRedirect":return Sr;case"reauthViaPopup":case"reauthViaRedirect":return Ir;default:He(this.auth,"internal-error")}}resolve(t){Qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
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
 */const Ar=new nn(2e3,1e4);class Nr extends kr{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Nr.currentPopupAction&&Nr.currentPopupAction.cancel(),Nr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return We(t,this.auth,"internal-error"),t}async onExecution(){Qe(1===this.filter.length,"Popup operations only handle one event");const t=cr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(Ke(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(Ke(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Ke(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,Ar.get())};t()}}Nr.currentPopupAction=null;
/**
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
 */
const Cr=new Map;class Rr extends kr{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=Cr.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=Or(e),r="true"===await Dr(t)._get(n);return await Dr(t)._remove(n),r}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}Cr.set(this.auth._key(),t)}return t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Dr(t){return Je(t._redirectPersistence)}function Or(t){return Sn("pendingRedirect",t.config.apiKey,t.name)}
/**
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
 */function xr(t,e,n){return async function(t,e,n){const r=Vn(t);We(e instanceof zn,t,"argument-error");const i=br(r,n);return await async function(t,e){return Dr(t)._set(Or(e),"true")}(i,r),i._openRedirect(r,e,"signInViaRedirect")}(t,e,n)}async function Lr(t,e,n=!1){const r=Vn(t),i=br(r,e),s=new Rr(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}
/**
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
 */class Pr{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ur(t);default:return!1}}
/**
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
 */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Ur(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(Ke(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mr(t))}saveEventToCache(t){this.cachedEventUids.add(Mr(t)),this.lastProcessedEventTime=Date.now()}}function Mr(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function Ur({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
/**
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
 */
const Fr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Vr=/^https?/;async function $r(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return cn(t,"GET","/v1/projects",e)}(t);for(const r of e)try{if(jr(r))return}catch(n){}He(t,"unauthorized-domain")}function jr(t){const e=Ze(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Vr.test(n))return!1;if(Fr.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Br=new nn(3e4,6e4);function qr(){const t=lr().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function zr(t){return new Promise(((e,n)=>{var r,i,s;function o(){qr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qr(),n(Ke(t,"network-request-failed"))},timeout:Br.get()})}if(null===(i=null===(r=lr().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=lr().gapi)||void 0===s?void 0:s.load)){const e=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return lr()[e]=()=>{gapi.load?o():n(Ke(t,"network-request-failed"))},_r(`https://apis.google.com/js/api.js?onload=${e}`)}o()}})).catch((t=>{throw Hr=null,t}))}let Hr=null;
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */
const Kr=new nn(5e3,15e3),Gr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},Wr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Xr(t){const e=t.config;We(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?rn(e,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,r={apiKey:e.apiKey,appName:t.name,v:"9.0.0"},i=Wr.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${de(r).slice(1)}`}async function Qr(t){const e=await function(t){return Hr=Hr||zr(t),Hr}(t),n=lr().gapi;return We(n,t,"internal-error"),e.open({where:document.body,url:Xr(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Gr,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=Ke(t,"network-request-failed"),s=lr().setTimeout((()=>{r(i)}),Kr.get());function o(){lr().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Yr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Jr{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Zr(t,e,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Yr),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ee().toLowerCase();n&&(a=Rn(u)?"_blank":n),Nn(u)&&(e=e||"http://localhost",c.scrollbars="yes");const l=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(function(t=ee()){var e;return Pn(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(u)&&"_self"!==a)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
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
 */(e||"",a),new Jr(null);const h=window.open(e||"",a,l);We(h,t,"popup-blocked");try{h.focus()}catch(d){}return new Jr(h)}function ti(t,e,n,r,i,s){We(t.config.authDomain,t,"auth-domain-config-required"),We(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:"9.0.0",eventId:i};if(e instanceof zn){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",function(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(s||{}))o[t]=e}if(e instanceof Hn){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(o.scopes=t.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))void 0===a[c]&&delete a[c];return`${function({config:t}){if(!t.emulator)return`https://${t.authDomain}/__/auth/handler`;return rn(t,"emulator/auth/handler")}
/**
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
 */(t)}?${de(a).slice(1)}`}const ei=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=or,this._completeRedirectFn=Lr}async _openPopup(t,e,n,r){var i;Qe(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Zr(t,ti(t,e,n,Ze(),r),cr())}async _openRedirect(t,e,n,r){var i;return await this._originValidation(t),i=ti(t,e,n,Ze(),r),lr().location.href=i,new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(Qe(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n}async initAndGetManager(t){const e=await Qr(t),n=new Pr(t);return e.register("authEvent",(e=>{We(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&e(!!i),He(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=$r(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Mn()||Cn()||Pn()}};var ni;
/**
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
 */
class ri{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){We(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
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
 */
/**
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
 */
function ii(t=Ve()){const e=Pe(t,"auth");return e.isInitialized()?e.getImmediate():function(t,e){const n=Pe(t,"auth");if(n.isInitialized()){const t=n.getImmediate();if(le(n.getOptions(),null!=e?e:{}))return t;He(t,"already-initialized")}return n.initialize({options:e})}(t,{popupRedirectResolver:ei,persistence:[wr,ir,or]})}ni="Browser",Le(new me("auth",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),{apiKey:r,authDomain:i}=n.options;return(t=>{We(r&&!r.includes(":"),"invalid-api-key",{appName:t.name}),We(!(null==i?void 0:i.includes(":")),"argument-error",{appName:t.name});const n={apiKey:r,authDomain:i,clientPlatform:ni,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Un(ni)},s=new Fn(t,n);return function(t,e){const n=(null==e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Je);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null==e?void 0:e.popupRedirectResolver)}(s,e),s})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider("auth-internal").initialize()}))),Le(new me("auth-internal",(t=>{const e=Vn(t.getProvider("auth").getImmediate());return new ri(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),$e("@firebase/auth","0.17.1",function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(ni));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var si=function(t,e){return(si=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)};function oi(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}var ai,ci="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},ui=ui||{},li=ci||self;function hi(){}function di(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function fi(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var pi="closure_uid_"+(1e9*Math.random()>>>0),gi=0;function mi(t,e,n){return t.call.apply(t.bind,arguments)}function yi(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function vi(t,e,n){return(vi=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?mi:yi).apply(null,arguments)}function wi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function _i(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function bi(){this.s=this.s,this.o=this.o}var Ti={};bi.prototype.s=!1,bi.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,pi)&&t[pi]||(t[pi]=++gi)}(this);delete Ti[t]}},bi.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var Ei=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(var n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Ii=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){for(var r=t.length,i="string"==typeof t?t.split(""):t,s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function Si(t){return Array.prototype.concat.apply([],arguments)}function ki(t){var e=t.length;if(0<e){for(var n=Array(e),r=0;r<e;r++)n[r]=t[r];return n}return[]}function Ai(t){return/^[\s\xa0]*$/.test(t)}var Ni,Ci=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ri(t,e){return-1!=t.indexOf(e)}function Di(t,e){return t<e?-1:t>e?1:0}t:{var Oi=li.navigator;if(Oi){var xi=Oi.userAgent;if(xi){Ni=xi;break t}}Ni=""}function Li(t,e,n){for(var r in t)e.call(n,t[r],r,t)}function Pi(t){var e={};for(var n in t)e[n]=t[n];return e}var Mi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ui(t,e){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i])t[n]=r[n];for(var s=0;s<Mi.length;s++)n=Mi[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Fi(t){return Fi[" "](t),t}Fi[" "]=hi;var Vi,$i,ji=Ri(Ni,"Opera"),Bi=Ri(Ni,"Trident")||Ri(Ni,"MSIE"),qi=Ri(Ni,"Edge"),zi=qi||Bi,Hi=Ri(Ni,"Gecko")&&!(Ri(Ni.toLowerCase(),"webkit")&&!Ri(Ni,"Edge"))&&!(Ri(Ni,"Trident")||Ri(Ni,"MSIE"))&&!Ri(Ni,"Edge"),Ki=Ri(Ni.toLowerCase(),"webkit")&&!Ri(Ni,"Edge");function Gi(){var t=li.document;return t?t.documentMode:void 0}t:{var Wi="",Xi=($i=Ni,Hi?/rv:([^\);]+)(\)|;)/.exec($i):qi?/Edge\/([\d\.]+)/.exec($i):Bi?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec($i):Ki?/WebKit\/(\S+)/.exec($i):ji?/(?:Version)[ \/]?(\S+)/.exec($i):void 0);if(Xi&&(Wi=Xi?Xi[1]:""),Bi){var Qi=Gi();if(null!=Qi&&Qi>parseFloat(Wi)){Vi=String(Qi);break t}}Vi=Wi}var Yi,Ji={};function Zi(){return function(t){var e=Ji;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){for(var t=0,e=Ci(String(Vi)).split("."),n=Ci("9").split("."),r=Math.max(e.length,n.length),i=0;0==t&&i<r;i++){var s=e[i]||"",o=n[i]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==s[0].length&&0==o[0].length)break;t=Di(0==s[1].length?0:parseInt(s[1],10),0==o[1].length?0:parseInt(o[1],10))||Di(0==s[2].length,0==o[2].length)||Di(s[2],o[2]),s=s[3],o=o[3]}while(0==t)}return 0<=t}))}if(li.document&&Bi){var ts=Gi();Yi=ts||(parseInt(Vi,10)||void 0)}else Yi=void 0;var es=Yi,ns=function(){if(!li.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{li.addEventListener("test",hi,e),li.removeEventListener("test",hi,e)}catch(n){}return t}();function rs(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function is(t,e){if(rs.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Hi){t:{try{Fi(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:ss[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&is.Z.h.call(this)}}rs.prototype.h=function(){this.defaultPrevented=!0},_i(is,rs);var ss={2:"touch",3:"pen",4:"mouse"};is.prototype.h=function(){is.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var os="closure_listenable_"+(1e6*Math.random()|0),as=0;function cs(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++as,this.ca=this.fa=!1}function us(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ls(t){this.src=t,this.g={},this.h=0}function hs(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=Ei(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(us(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ds(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}ls.prototype.add=function(t,e,n,r,i){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=ds(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new cs(e,this.src,s,!!r,i)).fa=n,t.push(e)),e};var fs="closure_lm_"+(1e6*Math.random()|0),ps={};function gs(t,e,n,r,i){if(r&&r.once)return ys(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)gs(t,e[s],n,r,i);return null}return n=Is(n),t&&t[os]?t.N(e,n,fi(r)?!!r.capture:!!r,i):ms(t,e,n,!1,r,i)}function ms(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=fi(i)?!!i.capture:!!i,a=Ts(t);if(a||(t[fs]=a=new ls(t)),(n=a.add(e,n,r,o,s)).proxy)return n;if(r=function(){function t(n){return e.call(t.src,t.listener,n)}var e=bs;return t}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)ns||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(_s(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function ys(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)ys(t,e[s],n,r,i);return null}return n=Is(n),t&&t[os]?t.O(e,n,fi(r)?!!r.capture:!!r,i):ms(t,e,n,!0,r,i)}function vs(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)vs(t,e[s],n,r,i);else r=fi(r)?!!r.capture:!!r,n=Is(n),t&&t[os]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=ds(s=t.g[e],n,r,i))&&(us(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=Ts(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ds(e,n,r,i)),(n=-1<t?e[t]:null)&&ws(n))}function ws(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[os])hs(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(_s(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ts(e))?(hs(n,t),0==n.h&&(n.src=null,e[fs]=null)):us(t)}}}function _s(t){return t in ps?ps[t]:ps[t]="on"+t}function bs(t,e){if(t.ca)t=!0;else{e=new is(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&ws(t),t=n.call(r,e)}return t}function Ts(t){return(t=t[fs])instanceof ls?t:null}var Es="__closure_events_fn_"+(1e9*Math.random()>>>0);function Is(t){return"function"==typeof t?t:(t[Es]||(t[Es]=function(e){return t.handleEvent(e)}),t[Es])}function Ss(){bi.call(this),this.i=new ls(this),this.P=this,this.I=null}function ks(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"==typeof e)e=new rs(e,t);else if(e instanceof rs)e.target=e.target||t;else{var i=e;Ui(e=new rs(r,t),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=As(o,r,!0,e)&&i}if(i=As(o=e.g=t,r,!0,e)&&i,i=As(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)i=As(o=e.g=n[s],r,!1,e)&&i}function As(t,e,n,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&hs(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}_i(Ss,bi),Ss.prototype[os]=!0,Ss.prototype.removeEventListener=function(t,e,n,r){vs(this,t,e,n,r)},Ss.prototype.M=function(){if(Ss.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)us(n[r]);delete e.g[t],e.h--}}this.I=null},Ss.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},Ss.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Ns=li.JSON.stringify;function Cs(){var t=Us,e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Rs,Ds=function(){function t(){this.h=this.g=null}return t.prototype.add=function(t,e){var n=Os.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n},t}(),Os=new(function(){function t(t,e){this.i=t,this.j=e,this.h=0,this.g=null}return t.prototype.get=function(){var t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t},t}())((function(){return new xs}),(function(t){return t.reset()})),xs=function(){function t(){this.next=this.g=this.h=null}return t.prototype.set=function(t,e){this.h=t,this.g=e,this.next=null},t.prototype.reset=function(){this.next=this.g=this.h=null},t}();function Ls(t){li.setTimeout((function(){throw t}),0)}function Ps(t,e){Rs||function(){var t=li.Promise.resolve(void 0);Rs=function(){t.then(Fs)}}(),Ms||(Rs(),Ms=!0),Us.add(t,e)}var Ms=!1,Us=new Ds;function Fs(){for(var t;t=Cs();){try{t.h.call(t.g)}catch(n){Ls(n)}var e=Os;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ms=!1}function Vs(t,e){Ss.call(this),this.h=t||1,this.g=e||li,this.j=vi(this.kb,this),this.l=Date.now()}function $s(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function js(t,e,n){if("function"==typeof t)n&&(t=vi(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=vi(t.handleEvent,t)}return 2147483647<Number(e)?-1:li.setTimeout(t,e||0)}function Bs(t){t.g=js((function(){t.g=null,t.i&&(t.i=!1,Bs(t))}),t.j);var e=t.h;t.h=null,t.m.apply(null,e)}_i(Vs,Ss),(ai=Vs.prototype).da=!1,ai.S=null,ai.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),ks(this,"tick"),this.da&&($s(this),this.start()))}},ai.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},ai.M=function(){Vs.Z.M.call(this),$s(this),delete this.g};var qs=function(t){function e(e,n){var r=t.call(this)||this;return r.m=e,r.j=n,r.h=null,r.i=!1,r.g=null,r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}si(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e.prototype.l=function(t){this.h=arguments,this.g?this.i=!0:Bs(this)},e.prototype.M=function(){t.prototype.M.call(this),this.g&&(li.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)},e}(bi);function zs(t){bi.call(this),this.h=t,this.g={}}_i(zs,bi);var Hs=[];function Ks(t,e,n,r){Array.isArray(n)||(n&&(Hs[0]=n.toString()),n=Hs);for(var i=0;i<n.length;i++){var s=gs(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Gs(t){Li(t.g,(function(t,e){this.g.hasOwnProperty(e)&&ws(t)}),t),t.g={}}function Ws(){this.g=!0}function Xs(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Ns(n)}catch(a){return e}}(t,n)+(r?" "+r:"")}))}zs.prototype.M=function(){zs.Z.M.call(this),Gs(this)},zs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ws.prototype.Aa=function(){this.g=!1},Ws.prototype.info=function(){};var Qs={},Ys=null;function Js(){return Ys=Ys||new Ss}function Zs(t){rs.call(this,Qs.Ma,t)}function to(t){var e=Js();ks(e,new Zs(e,t))}function eo(t,e){rs.call(this,Qs.STAT_EVENT,t),this.stat=e}function no(t){var e=Js();ks(e,new eo(e,t))}function ro(t,e){rs.call(this,Qs.Na,t),this.size=e}function io(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return li.setTimeout((function(){t()}),e)}Qs.Ma="serverreachability",_i(Zs,rs),Qs.STAT_EVENT="statevent",_i(eo,rs),Qs.Na="timingevent",_i(ro,rs);var so={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},oo={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ao(){}function co(t){return t.h||(t.h=t.i())}function uo(){}ao.prototype.h=null;var lo,ho={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function fo(){rs.call(this,"d")}function po(){rs.call(this,"c")}function go(){}function mo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new zs(this),this.P=vo,t=zi?125:void 0,this.W=new Vs(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new yo}function yo(){this.i=null,this.g="",this.h=!1}_i(fo,rs),_i(po,rs),_i(go,ao),go.prototype.g=function(){return new XMLHttpRequest},go.prototype.i=function(){return{}},lo=new go;var vo=45e3,wo={},_o={};function bo(t,e,n){t.K=1,t.v=zo(Fo(e)),t.s=n,t.U=!0,To(t,null)}function To(t,e){t.F=Date.now(),ko(t),t.A=Fo(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),ra(n.h,"t",r),t.C=0,n=t.l.H,t.h=new yo,t.g=ic(t.l,n?e:null,!t.s),0<t.O&&(t.L=new qs(vi(t.Ia,t,t.g),t.O)),Ks(t.V,t.g,"readystatechange",t.gb),e=t.H?Pi(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),to(1),function(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function Eo(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Io(t,e,n){for(var r,i=!0;!t.I&&t.C<n.length;){if((r=So(t,n))==_o){4==e&&(t.o=4,no(14),i=!1),Xs(t.j,t.m,null,"[Incomplete Response]");break}if(r==wo){t.o=4,no(15),Xs(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Xs(t.j,t.m,r,null),Do(t,r)}Eo(t)&&r!=_o&&r!=wo&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,no(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Qa(e),e.L=!0,no(11))):(Xs(t.j,t.m,n,"[Invalid Chunked Response]"),Ro(t),Co(t))}function So(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?_o:(n=Number(e.substring(n,r)),isNaN(n)?wo:(r+=1)+n>e.length?_o:(e=e.substr(r,n),t.C=r+n,e))}function ko(t){t.Y=Date.now()+t.P,Ao(t,t.P)}function Ao(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=io(vi(t.eb,t),e)}function No(t){t.B&&(li.clearTimeout(t.B),t.B=null)}function Co(t){0==t.l.G||t.I||Za(t.l,t)}function Ro(t){No(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,$s(t.W),Gs(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Do(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||la(n.i,t)))if(n.I=t.N,!t.J&&la(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(m){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Ja(n),ja(n)}Xa(n),no(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=io(vi(n.ab,n),6e3));if(1>=ua(n.i)&&n.ka){try{n.ka()}catch(m){}n.ka=void 0}}else ec(n,11)}else if((t.J||n.g==t)&&Ja(n),!Ai(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){var s=i[e];if(n.U=s[0],s=s[1],2==n.G)if("c"==s[0]){n.J=s[1],n.la=s[2];var o=s[3];null!=o&&(n.ma=o,n.h.info("VER="+n.ma));var a=s[4];null!=a&&(n.za=a,n.h.info("SVER="+n.za));var c=s[5];null!=c&&"number"==typeof c&&0<c&&(r=1.5*c,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;var u=t.g;if(u){var l=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(l){var h=r.i;!h.g&&(Ri(l,"spdy")||Ri(l,"quic")||Ri(l,"h2"))&&(h.j=h.l,h.g=new Set,h.h&&(ha(h,h.h),h.h=null))}if(r.D){var d=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;d&&(r.sa=d,qo(r.F,r.D,d))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var f=t;if((r=n).oa=rc(r,r.H?r.la:null,r.W),f.J){da(r.i,f);var p=f,g=r.K;g&&p.setTimeout(g),p.B&&(No(p),ko(p)),r.g=f}else Wa(r);0<n.l.length&&za(n)}else"stop"!=s[0]&&"close"!=s[0]||ec(n,7);else 3==n.G&&("stop"==s[0]||"close"==s[0]?"stop"==s[0]?ec(n,7):$a(n):"noop"!=s[0]&&n.j&&n.j.wa(s),n.A=0)}to(4)}catch(m){}}function Oo(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(di(t)||"string"==typeof t)Ii(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(di(t)||"string"==typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;i=(r=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(di(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t)).length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function xo(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof xo)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function Lo(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Po(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)Po(i,r=t.g[e])||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}function Po(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(ai=mo.prototype).setTimeout=function(t){this.P=t},ai.gb=function(t){t=t.target;var e=this.L;e&&3==Pa(t)?e.l():this.Ia(t)},ai.Ia=function(t){try{if(t==this.g)t:{var e=Pa(this.g),n=this.g.Da(),r=this.g.ba();if(!(3>e)&&(3!=e||zi||this.g&&(this.h.h||this.g.ga()||Ma(this.g)))){this.I||4!=e||7==n||to(8==n||0>=r?3:2),No(this);var i=this.g.ba();this.N=i;e:if(Eo(this)){var s=Ma(this.g);t="";var o=s.length,a=4==Pa(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Ro(this),Co(this);var c="";break e}this.h.i=new li.TextDecoder}for(n=0;n<o;n++)this.h.h=!0,t+=this.h.i.decode(s[n],{stream:a&&n==o-1});s.splice(0,o),this.h.g+=t,this.C=0,c=this.h.g}else c=this.g.ga();if(this.i=200==i,function(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.X,e,i),this.i){if(this.$&&!this.J){e:{if(this.g){var u,l=this.g;if((u=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ai(u)){var h=u;break e}}h=null}if(!(i=h)){this.i=!1,this.o=3,no(12),Ro(this),Co(this);break t}Xs(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Do(this,i)}this.U?(Io(this,e,c),zi&&this.i&&3==e&&(Ks(this.V,this.W,"tick",this.fb),this.W.start())):(Xs(this.j,this.m,c,null),Do(this,c)),4==e&&Ro(this),this.i&&!this.I&&(4==e?Za(this.l,this):(this.i=!1,ko(this)))}else 400==i&&0<c.indexOf("Unknown SID")?(this.o=3,no(12)):(this.o=0,no(13)),Ro(this),Co(this)}}}catch(d){}},ai.fb=function(){if(this.g){var t=Pa(this.g),e=this.g.ga();this.C<e.length&&(No(this),Io(this,t,e),this.i&&4!=t&&ko(this))}},ai.cancel=function(){this.I=!0,Ro(this)},ai.eb=function(){this.B=null;var t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(to(3),no(17)),Ro(this),this.o=2,Co(this)):Ao(this,this.Y-t)},(ai=xo.prototype).R=function(){Lo(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},ai.T=function(){return Lo(this),this.g.concat()},ai.get=function(t,e){return Po(this.h,t)?this.h[t]:e},ai.set=function(t,e){Po(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},ai.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};var Mo=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Uo(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Uo){this.g=void 0!==e?e:t.g,Vo(this,t.j),this.s=t.s,$o(this,t.i),jo(this,t.m),this.l=t.l,e=t.h;var n=new Zo;n.i=e.i,e.g&&(n.g=new xo(e.g),n.h=e.h),Bo(this,n),this.o=t.o}else t&&(n=String(t).match(Mo))?(this.g=!!e,Vo(this,n[1]||"",!0),this.s=Ho(n[2]||""),$o(this,n[3]||"",!0),jo(this,n[4]),this.l=Ho(n[5]||"",!0),Bo(this,n[6]||"",!0),this.o=Ho(n[7]||"")):(this.g=!!e,this.h=new Zo(null,this.g))}function Fo(t){return new Uo(t)}function Vo(t,e,n){t.j=n?Ho(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function $o(t,e,n){t.i=n?Ho(e,!0):e}function jo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Bo(t,e,n){e instanceof Zo?(t.h=e,function(t,e){e&&!t.j&&(ta(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(ea(this,e),ra(this,n,t))}),t)),t.j=e}(t.h,t.g)):(n||(e=Ko(e,Yo)),t.h=new Zo(e,t.g))}function qo(t,e,n){t.h.set(e,n)}function zo(t){return qo(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ho(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ko(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Go),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Go(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Uo.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ko(e,Wo,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Ko(e,Wo,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(Ko(n,"/"==n.charAt(0)?Qo:Xo,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ko(n,Jo)),t.join("")};var Wo=/[#\/\?@]/g,Xo=/[#\?:]/g,Qo=/[#\?]/g,Yo=/[#\?@]/g,Jo=/#/g;function Zo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ta(t){t.g||(t.g=new xo,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function ea(t,e){ta(t),e=ia(t,e),Po(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,Po((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Lo(t)))}function na(t,e){return ta(t),e=ia(t,e),Po(t.g.h,e)}function ra(t,e,n){ea(t,e),0<n.length&&(t.i=null,t.g.set(ia(t,e),ki(n)),t.h+=n.length)}function ia(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(ai=Zo.prototype).add=function(t,e){ta(this),this.i=null,t=ia(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},ai.forEach=function(t,e){ta(this),this.g.forEach((function(n,r){Ii(n,(function(n){t.call(e,n,r,this)}),this)}),this)},ai.T=function(){ta(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n},ai.R=function(t){ta(this);var e=[];if("string"==typeof t)na(this,t)&&(e=Si(e,this.g.get(ia(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Si(e,t[n])}return e},ai.set=function(t,e){return ta(this),this.i=null,na(this,t=ia(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},ai.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},ai.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};var sa=function(t,e){this.h=t,this.g=e};function oa(t){this.l=t||aa,li.PerformanceNavigationTiming?t=0<(t=li.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(li.g&&li.g.Ea&&li.g.Ea()&&li.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var aa=10;function ca(t){return!!t.h||!!t.g&&t.g.size>=t.j}function ua(t){return t.h?1:t.g?t.g.size:0}function la(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function ha(t,e){t.g?t.g.add(e):t.h=e}function da(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function fa(t){var e,n;if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){var r=t.i;try{for(var i=oi(t.g.values()),s=i.next();!s.done;s=i.next()){var o=s.value;r=r.concat(o.D)}}catch(a){e={error:a}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}return r}return ki(t.i)}function pa(){}function ga(){this.g=new pa}function ma(t,e,n){var r=n||"";try{Oo(t,(function(t,n){var i=t;fi(t)&&(i=Ns(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function ya(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(s){}}function va(t){this.l=t.$b||null,this.j=t.ib||!1}function wa(t,e){Ss.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=_a,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}oa.prototype.cancel=function(){var t,e;if(this.i=fa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){try{for(var n=oi(this.g.values()),r=n.next();!r.done;r=n.next()){r.value.cancel()}}catch(i){t={error:i}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}this.g.clear()}},pa.prototype.stringify=function(t){return li.JSON.stringify(t,void 0)},pa.prototype.parse=function(t){return li.JSON.parse(t,void 0)},_i(va,ao),va.prototype.g=function(){return new wa(this.l,this.j)},va.prototype.i=function(t){return function(){return t}}({}),_i(wa,Ss);var _a=0;function ba(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Ta(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ea(t)}function Ea(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(ai=wa.prototype).open=function(t,e){if(this.readyState!=_a)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ea(this)},ai.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;var e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||li).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},ai.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Ta(this)),this.readyState=_a},ai.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ea(this)),this.g&&(this.readyState=3,Ea(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==li.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ba(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},ai.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ta(this):Ea(this),3==this.readyState&&ba(this)}},ai.Ua=function(t){this.g&&(this.response=this.responseText=t,Ta(this))},ai.Ta=function(t){this.g&&(this.response=t,Ta(this))},ai.ha=function(){this.g&&Ta(this)},ai.setRequestHeader=function(t,e){this.v.append(t,e)},ai.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},ai.getAllResponseHeaders=function(){if(!this.h)return"";for(var t=[],e=this.h.entries(),n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(wa.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Ia=li.JSON.parse;function Sa(t){Ss.call(this),this.headers=new xo,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ka,this.K=this.L=!1}_i(Sa,Ss);var ka="",Aa=/^https?$/i,Na=["POST","PUT"];function Ca(t){return"content-type"==t.toLowerCase()}function Ra(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Da(t),xa(t)}function Da(t){t.D||(t.D=!0,ks(t,"complete"),ks(t,"error"))}function Oa(t){if(t.h&&void 0!==ui&&(!t.C[1]||4!=Pa(t)||2!=t.ba()))if(t.v&&4==Pa(t))js(t.Fa,0,t);else if(ks(t,"readystatechange"),4==Pa(t)){t.h=!1;try{var e,n=t.ba();t:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break t;default:r=!1}if(!(e=r)){var i;if(i=0===n){var s=String(t.H).match(Mo)[1]||null;if(!s&&li.self&&li.self.location){var o=li.self.location.protocol;s=o.substr(0,o.length-1)}i=!Aa.test(s?s.toLowerCase():"")}e=i}if(e)ks(t,"complete"),ks(t,"success");else{t.m=6;try{var a=2<Pa(t)?t.g.statusText:""}catch(c){a=""}t.j=a+" ["+t.ba()+"]",Da(t)}}finally{xa(t)}}}function xa(t,e){if(t.g){La(t);var n=t.g,r=t.C[0]?hi:null;t.g=null,t.C=null,e||ks(t,"ready");try{n.onreadystatechange=r}catch(i){}}}function La(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(li.clearTimeout(t.A),t.A=null)}function Pa(t){return t.g?t.g.readyState:0}function Ma(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case ka:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Ua(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=function(t){var e="";return Li(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):qo(t,e,n))}function Fa(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Va(t){this.za=0,this.l=[],this.h=new Ws,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Fa("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Fa("baseRetryDelayMs",5e3,t),this.$a=Fa("retryDelaySeedMs",1e4,t),this.Ya=Fa("forwardChannelMaxRetries",2,t),this.ra=Fa("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new oa(t&&t.concurrentRequestLimit),this.Ca=new ga,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function $a(t){if(Ba(t),3==t.G){var e=t.V++,n=Fo(t.F);qo(n,"SID",t.J),qo(n,"RID",e),qo(n,"TYPE","terminate"),Ka(t,n),(e=new mo(t,t.h,e,void 0)).K=2,e.v=zo(Fo(n)),n=!1,li.navigator&&li.navigator.sendBeacon&&(n=li.navigator.sendBeacon(e.v.toString(),"")),!n&&li.Image&&((new Image).src=e.v,n=!0),n||(e.g=ic(e.l,null),e.g.ea(e.v)),e.F=Date.now(),ko(e)}nc(t)}function ja(t){t.g&&(Qa(t),t.g.cancel(),t.g=null)}function Ba(t){ja(t),t.u&&(li.clearTimeout(t.u),t.u=null),Ja(t),t.i.cancel(),t.m&&("number"==typeof t.m&&li.clearTimeout(t.m),t.m=null)}function qa(t,e){t.l.push(new sa(t.Za++,e)),3==t.G&&za(t)}function za(t){ca(t.i)||t.m||(t.m=!0,Ps(t.Ha,t),t.C=0)}function Ha(t,e){var n;n=e?e.m:t.V++;var r=Fo(t.F);qo(r,"SID",t.J),qo(r,"RID",n),qo(r,"AID",t.U),Ka(t,r),t.o&&t.s&&Ua(r,t.o,t.s),n=new mo(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Ga(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),ha(t.i,n),bo(n,r,e)}function Ka(t,e){t.j&&Oo({},(function(t,n){qo(e,n,t)}))}function Ga(t,e,n){n=Math.min(t.l.length,n);var r=t.j?vi(t.j.Oa,t.j,t):null;t:for(var i=t.l,s=-1;;){var o=["count="+n];-1==s?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);for(var a=!0,c=0;c<n;c++){var u=i[c].h,l=i[c].g;if(0>(u-=s))s=Math.max(0,i[c].h-100),a=!1;else try{ma(l,o,"req"+u+"_")}catch(h){r&&r(l)}}if(a){r=o.join("&");break t}}return t=t.l.splice(0,n),e.D=t,r}function Wa(t){t.g||t.u||(t.Y=1,Ps(t.Ga,t),t.A=0)}function Xa(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=io(vi(t.Ga,t),tc(t,t.A)),t.A++,!0)}function Qa(t){null!=t.B&&(li.clearTimeout(t.B),t.B=null)}function Ya(t){t.g=new mo(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Fo(t.oa);qo(e,"RID","rpc"),qo(e,"SID",t.J),qo(e,"CI",t.N?"0":"1"),qo(e,"AID",t.U),Ka(t,e),qo(e,"TYPE","xmlhttp"),t.o&&t.s&&Ua(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=zo(Fo(e)),n.s=null,n.U=!0,To(n,t)}function Ja(t){null!=t.v&&(li.clearTimeout(t.v),t.v=null)}function Za(t,e){var n=null;if(t.g==e){Ja(t),Qa(t),t.g=null;var r=2}else{if(!la(t.i,e))return;n=e.D,da(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;ks(r=Js(),new ro(r,n,e,i)),za(t)}else Wa(t);else if(3==(i=e.o)||0==i&&0<t.I||!(1==r&&function(t,e){return!(ua(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=io(vi(t.Ha,t,e),tc(t,t.C)),t.C++,0)))}(t,e)||2==r&&Xa(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:ec(t,5);break;case 4:ec(t,10);break;case 3:ec(t,6);break;default:ec(t,2)}}function tc(t,e){var n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function ec(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=vi(t.jb,t);n||(n=new Uo("//www.google.com/images/cleardot.gif"),li.location&&"http"==li.location.protocol||Vo(n,"https"),zo(n)),function(t,e){var n=new Ws;if(li.Image){var r=new Image;r.onload=wi(ya,n,r,"TestLoadImage: loaded",!0,e),r.onerror=wi(ya,n,r,"TestLoadImage: error",!1,e),r.onabort=wi(ya,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=wi(ya,n,r,"TestLoadImage: timeout",!1,e),li.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}(n.toString(),r)}else no(2);t.G=0,t.j&&t.j.va(e),nc(t),Ba(t)}function nc(t){t.G=0,t.I=-1,t.j&&(0==fa(t.i).length&&0==t.l.length||(t.i.i.length=0,ki(t.l),t.l.length=0),t.j.ua())}function rc(t,e,n){var r=function(t){return t instanceof Uo?Fo(t):new Uo(t,void 0)}(n);if(""!=r.i)e&&$o(r,e+"."+r.i),jo(r,r.m);else{var i=li.location;r=function(t,e,n,r){var i=new Uo(null,void 0);return t&&Vo(i,t),e&&$o(i,e),n&&jo(i,n),r&&(i.l=r),i}(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&Li(t.aa,(function(t,e){qo(r,e,t)})),e=t.D,n=t.sa,e&&n&&qo(r,e,n),qo(r,"VER",t.ma),Ka(t,r),r}function ic(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new Sa(new va({ib:!0})):new Sa(t.qa)).L=t.H,e}function sc(){}function oc(){if(Bi&&!(10<=Number(es)))throw Error("Environmental error: no available transport.")}function ac(t,e){Ss.call(this),this.g=new Va(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Ai(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ai(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new lc(this)}function cc(t){fo.call(this);var e=t.__sm__;if(e){t:{for(var n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function uc(){po.call(this),this.status=1}function lc(t){this.g=t}(ai=Sa.prototype).ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():lo.g(),this.C=this.u?co(this.u):co(lo),this.g.onreadystatechange=vi(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){return void Ra(this,s)}t=n||"";var i=new xo(this.headers);r&&Oo(r,(function(t,e){i.set(e,t)})),r=function(t){t:{for(var e=Ca,n=t.length,r="string"==typeof t?t.split(""):t,i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(i.T()),n=li.FormData&&t instanceof li.FormData,!(0<=Ei(Na,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{La(this),0<this.B&&((this.K=function(t){return Bi&&Zi()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=vi(this.pa,this)):this.A=js(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Ra(this,s)}},ai.pa=function(){void 0!==ui&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ks(this,"timeout"),this.abort(8))},ai.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ks(this,"complete"),ks(this,"abort"),xa(this))},ai.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),xa(this,!0)),Sa.Z.M.call(this)},ai.Fa=function(){this.s||(this.F||this.v||this.l?Oa(this):this.cb())},ai.cb=function(){Oa(this)},ai.ba=function(){try{return 2<Pa(this)?this.g.status:-1}catch($i){return-1}},ai.ga=function(){try{return this.g?this.g.responseText:""}catch($i){return""}},ai.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Ia(e)}},ai.Da=function(){return this.m},ai.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(ai=Va.prototype).ma=8,ai.G=1,ai.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},ai.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;var e=new mo(this,this.h,t,void 0),n=this.s;if(this.P&&(n?Ui(n=Pi(n),this.P):n=this.P),null===this.o&&(e.H=n),this.ja)t:{for(var r=0,i=0;i<this.l.length;i++){var s=this.l[i];if(void 0===(s="__data__"in s.g&&"string"==typeof(s=s.g.__data__)?s.length:void 0))break;if(4096<(r+=s)){r=i;break t}if(4096===r||i===this.l.length-1){r=i+1;break t}}r=1e3}else r=1e3;r=Ga(this,e,r),qo(i=Fo(this.F),"RID",t),qo(i,"CVER",22),this.D&&qo(i,"X-HTTP-Session-Id",this.D),Ka(this,i),this.o&&n&&Ua(i,this.o,n),ha(this.i,e),this.Ra&&qo(i,"TYPE","init"),this.ja?(qo(i,"$req",r),qo(i,"SID","null"),e.$=!0,bo(e,i,null)):bo(e,i,r),this.G=2}}else 3==this.G&&(t?Ha(this,t):0==this.l.length||ca(this.i)||Ha(this))},ai.Ga=function(){if(this.u=null,Ya(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=io(vi(this.bb,this),t)}},ai.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,no(10),ja(this),Ya(this))},ai.ab=function(){null!=this.v&&(this.v=null,ja(this),Xa(this),no(19))},ai.jb=function(t){t?(this.h.info("Successfully pinged google.com"),no(2)):(this.h.info("Failed to ping google.com"),no(1))},(ai=sc.prototype).xa=function(){},ai.wa=function(){},ai.va=function(){},ai.ua=function(){},ai.Oa=function(){},oc.prototype.g=function(t,e){return new ac(t,e)},_i(ac,Ss),ac.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Ps(vi(t.hb,t,e))),no(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=rc(t,null,t.W),za(t)},ac.prototype.close=function(){$a(this.g)},ac.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,qa(this.g,e)}else this.v?((e={}).__data__=Ns(t),qa(this.g,e)):qa(this.g,t)},ac.prototype.M=function(){this.g.j=null,delete this.j,$a(this.g),delete this.g,ac.Z.M.call(this)},_i(cc,fo),_i(uc,po),_i(lc,sc),lc.prototype.xa=function(){ks(this.g,"a")},lc.prototype.wa=function(t){ks(this.g,new cc(t))},lc.prototype.va=function(t){ks(this.g,new uc(t))},lc.prototype.ua=function(){ks(this.g,"b")},oc.prototype.createWebChannel=oc.prototype.g,ac.prototype.send=ac.prototype.u,ac.prototype.open=ac.prototype.m,ac.prototype.close=ac.prototype.close,so.NO_ERROR=0,so.TIMEOUT=8,so.HTTP_ERROR=6,oo.COMPLETE="complete",uo.EventType=ho,ho.OPEN="a",ho.CLOSE="b",ho.ERROR="c",ho.MESSAGE="d",Ss.prototype.listen=Ss.prototype.N,Sa.prototype.listenOnce=Sa.prototype.O,Sa.prototype.getLastError=Sa.prototype.La,Sa.prototype.getLastErrorCode=Sa.prototype.Da,Sa.prototype.getStatus=Sa.prototype.ba,Sa.prototype.getResponseJson=Sa.prototype.Qa,Sa.prototype.getResponseText=Sa.prototype.ga,Sa.prototype.send=Sa.prototype.ea;var hc=so,dc=oo,fc=Qs,pc=10,gc=11,mc=va,yc=uo,vc=Sa;
/**
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
 */
class wc{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}wc.UNAUTHENTICATED=new wc(null),wc.GOOGLE_CREDENTIALS=new wc("google-credentials-uid"),wc.FIRST_PARTY=new wc("first-party-uid"),wc.MOCK_USER=new wc("mock-user");
/**
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
 */
let _c="9.0.1";
/**
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
 */const bc=new Ae("@firebase/firestore");function Tc(){return bc.logLevel}function Ec(t,...e){if(bc.logLevel<=we.DEBUG){const n=e.map(kc);bc.debug(`Firestore (${_c}): ${t}`,...n)}}function Ic(t,...e){if(bc.logLevel<=we.ERROR){const n=e.map(kc);bc.error(`Firestore (${_c}): ${t}`,...n)}}function Sc(t,...e){if(bc.logLevel<=we.WARN){const n=e.map(kc);bc.warn(`Firestore (${_c}): ${t}`,...n)}}function kc(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(n){return t}
/**
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
  */var e}
/**
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
 */function Ac(t="Unexpected state"){const e=`FIRESTORE (${_c}) INTERNAL ASSERTION FAILED: `+t;throw Ic(e),new Error(e)}function Nc(t,e){t||Ac()}function Cc(t,e){return t}
/**
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
 */const Rc={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Dc extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class Oc{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
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
 */class xc{constructor(t,e){this.user=e,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${t}`}}class Lc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(wc.UNAUTHENTICATED)))}shutdown(){}}class Pc{constructor(t){this.t=t,this.currentUser=wc.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new Oc;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Oc,t.enqueueRetryable((()=>r(this.currentUser)))};const s=e=>{t.enqueueRetryable((async()=>{Ec("FirebaseCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),await i.promise,await r(this.currentUser)}))};this.t.onInit((t=>s(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?s(t):(Ec("FirebaseCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Oc)}}),0),t.enqueueRetryable((async()=>{0===this.i&&(await i.promise,await r(this.currentUser))}))}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Ec("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Nc("string"==typeof e.accessToken),new xc(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Nc(null===t||"string"==typeof t),new wc(t)}}class Mc{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=wc.FIRST_PARTY}get authHeaders(){const t={"X-Goog-AuthUser":this.l},e=this.h.auth.getAuthHeaderValueForFirstParty([]);return e&&(t.Authorization=e),this.m&&(t["X-Goog-Iam-Authorization-Token"]=this.m),t}}class Uc{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new Mc(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(wc.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Fc{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.g(t),this.p=t=>e.writeSequenceNumber(t))}g(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.p&&this.p(t),t}}
/**
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
 */function Vc(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
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
 */Fc.T=-1;class $c{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=Vc(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function jc(t,e){return t<e?-1:t>e?1:0}function Bc(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
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
 */class qc{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Dc(Rc.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Dc(Rc.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Dc(Rc.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Dc(Rc.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return qc.fromMillis(Date.now())}static fromDate(t){return qc.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new qc(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?jc(this.nanoseconds,t.nanoseconds):jc(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
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
 */class zc{constructor(t){this.timestamp=t}static fromTimestamp(t){return new zc(t)}static min(){return new zc(new qc(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
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
 */function Hc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Kc(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Gc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
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
 */class Wc{constructor(t,e,n){void 0===e?e=0:e>t.length&&Ac(),void 0===n?n=t.length-e:n>t.length-e&&Ac(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Wc.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Wc?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Xc extends Wc{construct(t,e,n){return new Xc(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Dc(Rc.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Xc(e)}static emptyPath(){return new Xc([])}}const Qc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Yc extends Wc{construct(t,e,n){return new Yc(t,e,n)}static isValidIdentifier(t){return Qc.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Yc.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Yc(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Dc(Rc.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new Dc(Rc.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Dc(Rc.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new Dc(Rc.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Yc(e)}static emptyPath(){return new Yc([])}}
/**
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
 */class Jc{constructor(t){this.fields=t,t.sort(Yc.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Bc(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
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
 */class Zc{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Zc(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Zc(e)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return jc(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Zc.EMPTY_BYTE_STRING=new Zc("");const tu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function eu(t){if(Nc(!!t),"string"==typeof t){let e=0;const n=tu.exec(t);if(Nc(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:nu(t.seconds),nanos:nu(t.nanos)}}function nu(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function ru(t){return"string"==typeof t?Zc.fromBase64String(t):Zc.fromUint8Array(t)}
/**
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
 */function iu(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function su(t){const e=t.mapValue.fields.__previous_value__;return iu(e)?su(e):e}function ou(t){const e=eu(t.mapValue.fields.__local_write_time__.timestampValue);return new qc(e.seconds,e.nanos)}
/**
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
 */function au(t){return null==t}function cu(t){return 0===t&&1/t==-1/0}
/**
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
 */
class uu{constructor(t){this.path=t}static fromPath(t){return new uu(Xc.fromString(t))}static fromName(t){return new uu(Xc.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===Xc.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Xc.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new uu(new Xc(t.slice()))}}
/**
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
 */function lu(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?iu(t)?4:10:Ac()}function hu(t,e){const n=lu(t);if(n!==lu(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ou(t).isEqual(ou(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=eu(t.timestampValue),r=eu(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return r=e,ru(t.bytesValue).isEqual(ru(r.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return nu(t.geoPointValue.latitude)===nu(e.geoPointValue.latitude)&&nu(t.geoPointValue.longitude)===nu(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return nu(t.integerValue)===nu(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=nu(t.doubleValue),r=nu(e.doubleValue);return n===r?cu(n)===cu(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return Bc(t.arrayValue.values||[],e.arrayValue.values||[],hu);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(Hc(n)!==Hc(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!hu(n[i],r[i])))return!1;return!0}(t,e);default:return Ac()}var r}function du(t,e){return void 0!==(t.values||[]).find((t=>hu(t,e)))}function fu(t,e){const n=lu(t),r=lu(e);if(n!==r)return jc(n,r);switch(n){case 0:return 0;case 1:return jc(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=nu(t.integerValue||t.doubleValue),r=nu(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return pu(t.timestampValue,e.timestampValue);case 4:return pu(ou(t),ou(e));case 5:return jc(t.stringValue,e.stringValue);case 6:return function(t,e){const n=ru(t),r=ru(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=jc(n[i],r[i]);if(0!==t)return t}return jc(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=jc(nu(t.latitude),nu(e.latitude));return 0!==n?n:jc(nu(t.longitude),nu(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=fu(n[i],r[i]);if(t)return t}return jc(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=jc(r[o],s[o]);if(0!==t)return t;const e=fu(n[r[o]],i[s[o]]);if(0!==e)return e}return jc(r.length,s.length)}(t.mapValue,e.mapValue);default:throw Ac()}}function pu(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return jc(t,e);const n=eu(t),r=eu(e),i=jc(n.seconds,r.seconds);return 0!==i?i:jc(n.nanos,r.nanos)}function gu(t){return mu(t)}function mu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=eu(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ru(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,uu.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=mu(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${mu(t.fields[i])}`;return n+"}"}(t.mapValue):Ac();var e,n}function yu(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function vu(t){return!!t&&"integerValue"in t}function wu(t){return!!t&&"arrayValue"in t}function _u(t){return!!t&&"nullValue"in t}function bu(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Tu(t){return!!t&&"mapValue"in t}function Eu(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Kc(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Eu(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Eu(t.arrayValue.values[n]);return e}return Object.assign({},t)}
/**
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
 */class Iu{constructor(t){this.value=t}static empty(){return new Iu({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Tu(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Eu(e)}setAll(t){let e=Yc.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=Eu(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());Tu(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return hu(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Tu(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){Kc(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new Iu(Eu(this.value))}}function Su(t){const e=[];return Kc(t.fields,((t,n)=>{const r=new Yc([t]);if(Tu(n)){const t=Su(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new Jc(e)
/**
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
 */}class ku{constructor(t,e,n,r,i){this.key=t,this.documentType=e,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(t){return new ku(t,0,zc.min(),Iu.empty(),0)}static newFoundDocument(t,e,n){return new ku(t,1,e,n,0)}static newNoDocument(t,e){return new ku(t,2,e,Iu.empty(),0)}static newUnknownDocument(t,e){return new ku(t,3,e,Iu.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Iu.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Iu.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof ku&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new ku(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
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
 */class Au{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.A=null}}function Nu(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Au(t,e,n,r,i,s,o)}function Cu(t){const e=Cc(t);if(null===e.A){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>function(t){return t.field.canonicalString()+t.op.toString()+gu(t.value)}(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>{return(e=t).field.canonicalString()+e.dir;var e})).join(","),au(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=Bu(e.startAt)),e.endAt&&(t+="|ub:",t+=Bu(e.endAt)),e.A=t}return e.A}function Ru(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!zu(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!hu(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ku(t.startAt,e.startAt)&&Ku(t.endAt,e.endAt)}function Du(t){return uu.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class Ou extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.R(t,e,n):new xu(t,e,n):"array-contains"===e?new Uu(t,n):"in"===e?new Fu(t,n):"not-in"===e?new Vu(t,n):"array-contains-any"===e?new $u(t,n):new Ou(t,e,n)}static R(t,e,n){return"in"===e?new Lu(t,n):new Pu(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.P(fu(e,this.value)):null!==e&&lu(this.value)===lu(e)&&this.P(fu(e,this.value))}P(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Ac()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class xu extends Ou{constructor(t,e,n){super(t,e,n),this.key=uu.fromName(n.referenceValue)}matches(t){const e=uu.comparator(t.key,this.key);return this.P(e)}}class Lu extends Ou{constructor(t,e){super(t,"in",e),this.keys=Mu("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Pu extends Ou{constructor(t,e){super(t,"not-in",e),this.keys=Mu("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Mu(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>uu.fromName(t.referenceValue)))}class Uu extends Ou{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return wu(e)&&du(e.arrayValue,this.value)}}class Fu extends Ou{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&du(this.value.arrayValue,e)}}class Vu extends Ou{constructor(t,e){super(t,"not-in",e)}matches(t){if(du(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!du(this.value.arrayValue,e)}}class $u extends Ou{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!wu(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>du(this.value.arrayValue,t)))}}class ju{constructor(t,e){this.position=t,this.before=e}}function Bu(t){return`${t.before?"b":"a"}:${t.position.map((t=>gu(t))).join(",")}`}class qu{constructor(t,e="asc"){this.field=t,this.dir=e}}function zu(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Hu(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?uu.comparator(uu.fromName(o.referenceValue),n.key):fu(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return t.before?r<=0:r<0}function Ku(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!hu(t.position[n],e.position[n]))return!1;return!0}
/**
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
 */class Gu{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.V=null,this.S=null,this.startAt,this.endAt}}function Wu(t){return new Gu(t)}function Xu(t){return!au(t.limit)&&"F"===t.limitType}function Qu(t){return!au(t.limit)&&"L"===t.limitType}function Yu(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ju(t){for(const e of t.filters)if(e.v())return e.field;return null}function Zu(t){return null!==t.collectionGroup}function tl(t){const e=Cc(t);if(null===e.V){e.V=[];const t=Ju(e),n=Yu(e);if(null!==t&&null===n)t.isKeyField()||e.V.push(new qu(t)),e.V.push(new qu(Yc.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.V.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new qu(Yc.keyField(),t))}}}return e.V}function el(t){const e=Cc(t);if(!e.S)if("F"===e.limitType)e.S=Nu(e.path,e.collectionGroup,tl(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of tl(e)){const e="desc"===i.dir?"asc":"desc";t.push(new qu(i.field,e))}const n=e.endAt?new ju(e.endAt.position,!e.endAt.before):null,r=e.startAt?new ju(e.startAt.position,!e.startAt.before):null;e.S=Nu(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.S}function nl(t,e){return Ru(el(t),el(e))&&t.limitType===e.limitType}function rl(t){return`${Cu(el(t))}|lt:${t.limitType}`}function il(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${gu(e.value)}`;var e})).join(", ")}]`),au(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e})).join(", ")}]`),t.startAt&&(e+=", startAt: "+Bu(t.startAt)),t.endAt&&(e+=", endAt: "+Bu(t.endAt)),`Target(${e})`}(el(t))}; limitType=${t.limitType})`}function sl(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):uu.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(r=e,!((n=t).startAt&&!Hu(n.startAt,tl(n),r)||n.endAt&&Hu(n.endAt,tl(n),r)));var n,r}function ol(t){return(e,n)=>{let r=!1;for(const i of tl(t)){const t=al(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function al(t,e,n){const r=t.field.isKeyField()?uu.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?fu(r,i):Ac()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Ac()}}
/**
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
 */function cl(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cu(e)?"-0":e}}function ul(t){return{integerValue:""+t}}function ll(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!cu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?ul(e):cl(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */class hl{constructor(){this._=void 0}}function dl(t,e,n){return t instanceof gl?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof ml?yl(t,e):t instanceof vl?wl(t,e):function(t,e){const n=pl(t,e),r=bl(n)+bl(t.C);return vu(n)&&vu(t.C)?ul(r):cl(t.N,r)}(t,e)}function fl(t,e,n){return t instanceof ml?yl(t,e):t instanceof vl?wl(t,e):n}function pl(t,e){return t instanceof _l?vu(r=e)||(n=r)&&"doubleValue"in n?e:{integerValue:0}:null;var n,r}class gl extends hl{}class ml extends hl{constructor(t){super(),this.elements=t}}function yl(t,e){const n=Tl(e);for(const r of t.elements)n.some((t=>hu(t,r)))||n.push(r);return{arrayValue:{values:n}}}class vl extends hl{constructor(t){super(),this.elements=t}}function wl(t,e){let n=Tl(e);for(const r of t.elements)n=n.filter((t=>!hu(t,r)));return{arrayValue:{values:n}}}class _l extends hl{constructor(t,e){super(),this.N=t,this.C=e}}function bl(t){return nu(t.integerValue||t.doubleValue)}function Tl(t){return wu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
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
 */class El{constructor(t,e){this.field=t,this.transform=e}}class Il{constructor(t,e){this.version=t,this.transformResults=e}}class Sl{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Sl}static exists(t){return new Sl(void 0,t)}static updateTime(t){return new Sl(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function kl(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Al{}function Nl(t,e,n){var r;t instanceof xl?function(t,e,n){const r=t.value.clone(),i=Ml(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Ll?function(t,e,n){if(!kl(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Ml(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Pl(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):(r=n,e.convertToNoDocument(r.version).setHasCommittedMutations())}function Cl(t,e,n){var r;t instanceof xl?function(t,e,n){if(!kl(t.precondition,e))return;const r=t.value.clone(),i=Ul(t.fieldTransforms,n,e);r.setAll(i),e.convertToFoundDocument(Ol(e),r).setHasLocalMutations()}(t,e,n):t instanceof Ll?function(t,e,n){if(!kl(t.precondition,e))return;const r=Ul(t.fieldTransforms,n,e),i=e.data;i.setAll(Pl(t)),i.setAll(r),e.convertToFoundDocument(Ol(e),i).setHasLocalMutations()}(t,e,n):(r=e,kl(t.precondition,r)&&r.convertToNoDocument(zc.min()))}function Rl(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=pl(r.transform,t||null);null!=i&&(null==n&&(n=Iu.empty()),n.set(r.field,i))}return n||null}function Dl(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,r=e.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&Bc(n,r,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,r=e.transform,n instanceof ml&&r instanceof ml||n instanceof vl&&r instanceof vl?Bc(n.elements,r.elements,hu):n instanceof _l&&r instanceof _l?hu(n.C,r.C):n instanceof gl&&r instanceof gl);var n,r}(t,e))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask)));var n,r}function Ol(t){return t.isFoundDocument()?t.version:zc.min()}class xl extends Al{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Ll extends Al{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Pl(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Ml(t,e,n){const r=new Map;Nc(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,fl(o,a,n[i]))}return r}function Ul(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,dl(t,s,e))}return r}class Fl extends Al{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Vl extends Al{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
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
 */class $l{constructor(t){this.count=t}}
/**
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
 */var jl,Bl;function ql(t){if(void 0===t)return Ic("GRPC error has no .code"),Rc.UNKNOWN;switch(t){case jl.OK:return Rc.OK;case jl.CANCELLED:return Rc.CANCELLED;case jl.UNKNOWN:return Rc.UNKNOWN;case jl.DEADLINE_EXCEEDED:return Rc.DEADLINE_EXCEEDED;case jl.RESOURCE_EXHAUSTED:return Rc.RESOURCE_EXHAUSTED;case jl.INTERNAL:return Rc.INTERNAL;case jl.UNAVAILABLE:return Rc.UNAVAILABLE;case jl.UNAUTHENTICATED:return Rc.UNAUTHENTICATED;case jl.INVALID_ARGUMENT:return Rc.INVALID_ARGUMENT;case jl.NOT_FOUND:return Rc.NOT_FOUND;case jl.ALREADY_EXISTS:return Rc.ALREADY_EXISTS;case jl.PERMISSION_DENIED:return Rc.PERMISSION_DENIED;case jl.FAILED_PRECONDITION:return Rc.FAILED_PRECONDITION;case jl.ABORTED:return Rc.ABORTED;case jl.OUT_OF_RANGE:return Rc.OUT_OF_RANGE;case jl.UNIMPLEMENTED:return Rc.UNIMPLEMENTED;case jl.DATA_LOSS:return Rc.DATA_LOSS;default:return Ac()}}(Bl=jl||(jl={}))[Bl.OK=0]="OK",Bl[Bl.CANCELLED=1]="CANCELLED",Bl[Bl.UNKNOWN=2]="UNKNOWN",Bl[Bl.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Bl[Bl.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Bl[Bl.NOT_FOUND=5]="NOT_FOUND",Bl[Bl.ALREADY_EXISTS=6]="ALREADY_EXISTS",Bl[Bl.PERMISSION_DENIED=7]="PERMISSION_DENIED",Bl[Bl.UNAUTHENTICATED=16]="UNAUTHENTICATED",Bl[Bl.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Bl[Bl.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Bl[Bl.ABORTED=10]="ABORTED",Bl[Bl.OUT_OF_RANGE=11]="OUT_OF_RANGE",Bl[Bl.UNIMPLEMENTED=12]="UNIMPLEMENTED",Bl[Bl.INTERNAL=13]="INTERNAL",Bl[Bl.UNAVAILABLE=14]="UNAVAILABLE",Bl[Bl.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
class zl{constructor(t,e){this.comparator=t,this.root=e||Kl.EMPTY}insert(t,e){return new zl(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Kl.BLACK,null,null))}remove(t){return new zl(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Kl.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Hl(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Hl(this.root,t,this.comparator,!1)}getReverseIterator(){return new Hl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Hl(this.root,t,this.comparator,!0)}}class Hl{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Kl{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Kl.RED,this.left=null!=r?r:Kl.EMPTY,this.right=null!=i?i:Kl.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Kl(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Kl.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Kl.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Kl.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Kl.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ac();if(this.right.isRed())throw Ac();const t=this.left.check();if(t!==this.right.check())throw Ac();return t+(this.isRed()?0:1)}}Kl.EMPTY=null,Kl.RED=!0,Kl.BLACK=!1,Kl.EMPTY=new class{constructor(){this.size=0}get key(){throw Ac()}get value(){throw Ac()}get color(){throw Ac()}get left(){throw Ac()}get right(){throw Ac()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Kl(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class Gl{constructor(t){this.comparator=t,this.data=new zl(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Wl(this.data.getIterator())}getIteratorFrom(t){return new Wl(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Gl))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Gl(this.comparator);return e.data=t,e}}class Wl{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
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
 */const Xl=new zl(uu.comparator);function Ql(){return Xl}const Yl=new zl(uu.comparator);function Jl(){return Yl}const Zl=new zl(uu.comparator);const th=new Gl(uu.comparator);function eh(...t){let e=th;for(const n of t)e=e.add(n);return e}const nh=new Gl(jc);function rh(){return nh}
/**
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
 */class ih{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,sh.createSynthesizedTargetChangeForCurrentChange(t,e)),new ih(zc.min(),n,rh(),Ql(),eh())}}class sh{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new sh(Zc.EMPTY_BYTE_STRING,e,eh(),eh(),eh())}}
/**
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
 */class oh{constructor(t,e,n,r){this.k=t,this.removedTargetIds=e,this.key=n,this.$=r}}class ah{constructor(t,e){this.targetId=t,this.O=e}}class ch{constructor(t,e,n=Zc.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class uh{constructor(){this.F=0,this.M=dh(),this.L=Zc.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return 0!==this.F}get K(){return this.U}j(t){t.approximateByteSize()>0&&(this.U=!0,this.L=t)}W(){let t=eh(),e=eh(),n=eh();return this.M.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:Ac()}})),new sh(this.L,this.B,t,e,n)}G(){this.U=!1,this.M=dh()}H(t,e){this.U=!0,this.M=this.M.insert(t,e)}J(t){this.U=!0,this.M=this.M.remove(t)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class lh{constructor(t){this.tt=t,this.et=new Map,this.nt=Ql(),this.st=hh(),this.it=new Gl(jc)}rt(t){for(const e of t.k)t.$&&t.$.isFoundDocument()?this.ot(e,t.$):this.at(e,t.key,t.$);for(const e of t.removedTargetIds)this.at(e,t.key,t.$)}ct(t){this.forEachTarget(t,(e=>{const n=this.ut(e);switch(t.state){case 0:this.ht(e)&&n.j(t.resumeToken);break;case 1:n.X(),n.q||n.G(),n.j(t.resumeToken);break;case 2:n.X(),n.q||this.removeTarget(e);break;case 3:this.ht(e)&&(n.Z(),n.j(t.resumeToken));break;case 4:this.ht(e)&&(this.lt(e),n.j(t.resumeToken));break;default:Ac()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.et.forEach(((t,n)=>{this.ht(n)&&e(n)}))}ft(t){const e=t.targetId,n=t.O.count,r=this.dt(e);if(r){const t=r.target;if(Du(t))if(0===n){const n=new uu(t.path);this.at(e,n,ku.newNoDocument(n,zc.min()))}else Nc(1===n);else this.wt(e)!==n&&(this.lt(e),this.it=this.it.add(e))}}_t(t){const e=new Map;this.et.forEach(((n,r)=>{const i=this.dt(r);if(i){if(n.current&&Du(i.target)){const e=new uu(i.target.path);null!==this.nt.get(e)||this.gt(r,e)||this.at(r,e,ku.newNoDocument(e,t))}n.K&&(e.set(r,n.W()),n.G())}}));let n=eh();this.st.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.dt(t);return!e||2===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))}));const r=new ih(t,e,this.it,this.nt,n);return this.nt=Ql(),this.st=hh(),this.it=new Gl(jc),r}ot(t,e){if(!this.ht(t))return;const n=this.gt(t,e.key)?2:0;this.ut(t).H(e.key,n),this.nt=this.nt.insert(e.key,e),this.st=this.st.insert(e.key,this.yt(e.key).add(t))}at(t,e,n){if(!this.ht(t))return;const r=this.ut(t);this.gt(t,e)?r.H(e,1):r.J(e),this.st=this.st.insert(e,this.yt(e).delete(t)),n&&(this.nt=this.nt.insert(e,n))}removeTarget(t){this.et.delete(t)}wt(t){const e=this.ut(t).W();return this.tt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Y(t){this.ut(t).Y()}ut(t){let e=this.et.get(t);return e||(e=new uh,this.et.set(t,e)),e}yt(t){let e=this.st.get(t);return e||(e=new Gl(jc),this.st=this.st.insert(t,e)),e}ht(t){const e=null!==this.dt(t);return e||Ec("WatchChangeAggregator","Detected inactive target",t),e}dt(t){const e=this.et.get(t);return e&&e.q?null:this.tt.Et(t)}lt(t){this.et.set(t,new uh),this.tt.getRemoteKeysForTarget(t).forEach((e=>{this.at(t,e,null)}))}gt(t,e){return this.tt.getRemoteKeysForTarget(t).has(e)}}function hh(){return new zl(uu.comparator)}function dh(){return new zl(uu.comparator)}
/**
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
 */const fh={asc:"ASCENDING",desc:"DESCENDING"},ph={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class gh{constructor(t,e){this.databaseId=t,this.D=e}}function mh(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yh(t,e){return t.D?e.toBase64():e.toUint8Array()}function vh(t,e){return mh(t,e.toTimestamp())}function wh(t){return Nc(!!t),zc.fromTimestamp(function(t){const e=eu(t);return new qc(e.seconds,e.nanos)}(t))}function _h(t,e){return(n=t,new Xc(["projects",n.projectId,"databases",n.database])).child("documents").child(e).canonicalString();var n}function bh(t){const e=Xc.fromString(t);return Nc(jh(e)),e}function Th(t,e){return _h(t.databaseId,e.path)}function Eh(t,e){const n=bh(e);if(n.get(1)!==t.databaseId.projectId)throw new Dc(Rc.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Dc(Rc.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new uu(kh(n))}function Ih(t,e){return _h(t.databaseId,e)}function Sh(t){return new Xc(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function kh(t){return Nc(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Ah(t,e,n){return{name:Th(t,e),fields:n.value.mapValue.fields}}function Nh(t,e){return{documents:[Ih(t,e.path)]}}function Ch(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=Ih(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ih(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(bu(t.value))return{unaryFilter:{field:Mh(t.field),op:"IS_NAN"}};if(_u(t.value))return{unaryFilter:{field:Mh(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(bu(t.value))return{unaryFilter:{field:Mh(t.field),op:"IS_NOT_NAN"}};if(_u(t.value))return{unaryFilter:{field:Mh(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mh(t.field),op:Ph(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map((t=>{return{field:Mh((e=t).field),direction:Lh(e.dir)};var e}))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=(a=t,c=e.limit,a.D||au(c)?c:{value:c});var a,c;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=Oh(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Oh(e.endAt)),n}function Rh(t){let e=function(t){const e=bh(t);return 4===e.length?Xc.emptyPath():kh(e)}(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Nc(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=Dh(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>{return new qu(Uh((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,au(e)?null:e}(n.limit));let c=null;n.startAt&&(c=xh(n.startAt));let u=null;return n.endAt&&(u=xh(n.endAt)),function(t,e,n,r,i,s,o,a){return new Gu(t,e,n,r,i,s,o,a)}(e,i,o,s,a,"F",c,u)}function Dh(t){return t?void 0!==t.unaryFilter?[Vh(t)]:void 0!==t.fieldFilter?[Fh(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Dh(t))).reduce(((t,e)=>t.concat(e))):Ac():[]}function Oh(t){return{before:t.before,values:t.position}}function xh(t){const e=!!t.before,n=t.values||[];return new ju(n,e)}function Lh(t){return fh[t]}function Ph(t){return ph[t]}function Mh(t){return{fieldPath:t.canonicalString()}}function Uh(t){return Yc.fromServerFormat(t.fieldPath)}function Fh(t){return Ou.create(Uh(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":default:return Ac()}}(t.fieldFilter.op),t.fieldFilter.value)}function Vh(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Uh(t.unaryFilter.field);return Ou.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Uh(t.unaryFilter.field);return Ou.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Uh(t.unaryFilter.field);return Ou.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Uh(t.unaryFilter.field);return Ou.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":default:return Ac()}}function $h(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function jh(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
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
 */
class Bh{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Ac(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Bh(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Bh?e:Bh.resolve(e)}catch(e){return Bh.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Bh.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Bh.reject(e)}static resolve(t){return new Bh(((e,n)=>{e(t)}))}static reject(t){return new Bh(((e,n)=>{n(t)}))}static waitFor(t){return new Bh(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=Bh.resolve(!1);for(const n of t)e=e.next((t=>t?Bh.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}}function qh(t){return"IndexedDbTransactionError"===t.name}
/**
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
 */class zh{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Nl(e,t,n[r])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&Cl(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&Cl(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const n=t.get(e.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(zc.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),eh())}isEqual(t){return this.batchId===t.batchId&&Bc(this.mutations,t.mutations,((t,e)=>Dl(t,e)))&&Bc(this.baseMutations,t.baseMutations,((t,e)=>Dl(t,e)))}}class Hh{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){Nc(t.mutations.length===n.length);let r=Zl;const i=t.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Hh(t,e,n,r)}}
/**
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
 */class Kh{constructor(t,e,n,r,i=zc.min(),s=zc.min(),o=Zc.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new Kh(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Kh(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Kh(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
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
 */class Gh{constructor(t){this.Wt=t}}function Wh(t){const e=Rh({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?function(t,e,n){return new Gu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}(e,e.limit,"L"):e}
/**
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
 */class Xh{constructor(){this.Gt=new Qh}addToCollectionParentIndex(t,e){return this.Gt.add(e),Bh.resolve()}getCollectionParents(t,e){return Bh.resolve(this.Gt.getEntries(e))}}class Qh{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Gl(Xc.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Gl(Xc.comparator)).toArray()}}
/**
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
 */class Yh{constructor(t){this.ne=t}next(){return this.ne+=2,this.ne}static se(){return new Yh(0)}static ie(){return new Yh(-1)}}
/**
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
 */async function Jh(t){if(t.code!==Rc.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;Ec("LocalStore","Unexpectedly lost primary lease")}
/**
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
 */class Zh{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),!0;return!1}forEach(t){Kc(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return Gc(this.inner)}}
/**
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
 */
/**
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
 */
class td{constructor(t,e,n){this.He=t,this.In=e,this.Ht=n}An(t,e){return this.In.getAllMutationBatchesAffectingDocumentKey(t,e).next((n=>this.Rn(t,e,n)))}Rn(t,e,n){return this.He.getEntry(t,e).next((t=>{for(const e of n)e.applyToLocalView(t);return t}))}Pn(t,e){t.forEach(((t,n)=>{for(const r of e)r.applyToLocalView(n)}))}bn(t,e){return this.He.getEntries(t,e).next((e=>this.vn(t,e).next((()=>e))))}vn(t,e){return this.In.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.Pn(e,t)))}getDocumentsMatchingQuery(t,e,n){return r=e,uu.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.Vn(t,e.path):Zu(e)?this.Sn(t,e,n):this.Dn(t,e,n);var r}Vn(t,e){return this.An(t,new uu(e)).next((t=>{let e=Jl();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}Sn(t,e,n){const r=e.collectionGroup;let i=Jl();return this.Ht.getCollectionParents(t,r).next((s=>Bh.forEach(s,(s=>{const o=(a=e,c=s.child(r),new Gu(c,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,c;return this.Dn(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}Dn(t,e,n){let r,i;return this.He.getDocumentsMatchingQuery(t,e,n).next((n=>(r=n,this.In.getAllMutationBatchesAffectingQuery(t,e)))).next((e=>(i=e,this.Cn(t,i,r).next((t=>{r=t;for(const e of i)for(const t of e.mutations){const n=t.key;let i=r.get(n);null==i&&(i=ku.newInvalidDocument(n),r=r.insert(n,i)),Cl(t,i,e.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))))).next((()=>(r.forEach(((t,n)=>{sl(e,n)||(r=r.remove(t))})),r)))}Cn(t,e,n){let r=eh();for(const s of e)for(const t of s.mutations)t instanceof Ll&&null===n.get(t.key)&&(r=r.add(t.key));let i=n;return this.He.getEntries(t,r).next((t=>(t.forEach(((t,e)=>{e.isFoundDocument()&&(i=i.insert(t,e))})),i)))}}
/**
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
 */class ed{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Nn=n,this.xn=r}static kn(t,e){let n=eh(),r=eh();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new ed(t,e.fromCache,n,r)}}
/**
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
 */class nd{$n(t){this.On=t}getDocumentsMatchingQuery(t,e,n,r){return 0===(i=e).filters.length&&null===i.limit&&null==i.startAt&&null==i.endAt&&(0===i.explicitOrderBy.length||1===i.explicitOrderBy.length&&i.explicitOrderBy[0].field.isKeyField())||n.isEqual(zc.min())?this.Fn(t,e):this.On.bn(t,r).next((i=>{const s=this.Mn(e,i);return(Xu(e)||Qu(e))&&this.Ln(e.limitType,s,r,n)?this.Fn(t,e):(Tc()<=we.DEBUG&&Ec("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),il(e)),this.On.getDocumentsMatchingQuery(t,e,n).next((t=>(s.forEach((e=>{t=t.insert(e.key,e)})),t))))}));var i}Mn(t,e){let n=new Gl(ol(t));return e.forEach(((e,r)=>{sl(t,r)&&(n=n.add(r))})),n}Ln(t,e,n,r){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fn(t,e){return Tc()<=we.DEBUG&&Ec("QueryEngine","Using full collection scan to execute query:",il(e)),this.On.getDocumentsMatchingQuery(t,e,zc.min())}}
/**
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
 */class rd{constructor(t,e,n,r){this.persistence=t,this.Bn=e,this.N=r,this.Un=new zl(jc),this.qn=new Zh((t=>Cu(t)),Ru),this.Kn=zc.min(),this.In=t.getMutationQueue(n),this.jn=t.getRemoteDocumentCache(),this.ze=t.getTargetCache(),this.Qn=new td(this.jn,this.In,this.persistence.getIndexManager()),this.Je=t.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Un)))}}async function id(t,e){const n=Cc(t);let r=n.In,i=n.Qn;const s=await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.In.getAllMutationBatches(t).next((o=>(s=o,r=n.persistence.getMutationQueue(e),i=new td(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(t)))).next((e=>{const n=[],r=[];let o=eh();for(const t of s){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return i.bn(t,o).next((t=>({Wn:t,removedBatchIds:n,addedBatchIds:r})))}))}));return n.In=r,n.Qn=i,n.Bn.$n(n.Qn),s}function sd(t){const e=Cc(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.ze.getLastRemoteSnapshotVersion(t)))}function od(t,e){const n=Cc(t),r=e.snapshotVersion;let i=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.jn.newChangeBuffer({trackRemovals:!0});i=n.Un;const o=[];e.targetChanges.forEach(((e,s)=>{const a=i.get(s);if(!a)return;o.push(n.ze.removeMatchingKeys(t,e.removedDocuments,s).next((()=>n.ze.addMatchingKeys(t,e.addedDocuments,s))));const c=e.resumeToken;if(c.approximateByteSize()>0){const d=a.withResumeToken(c,r).withSequenceNumber(t.currentSequenceNumber);i=i.insert(s,d),u=a,h=e,Nc((l=d).resumeToken.approximateByteSize()>0),(0===u.resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||h.addedDocuments.size+h.modifiedDocuments.size+h.removedDocuments.size>0)&&o.push(n.ze.updateTargetData(t,d))}var u,l,h}));let a=Ql();if(e.documentUpdates.forEach(((r,i)=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(function(t,e,n,r,i){let s=eh();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=Ql();return n.forEach(((n,o)=>{const a=t.get(n),c=(null==i?void 0:i.get(n))||r;o.isNoDocument()&&o.version.isEqual(zc.min())?(e.removeEntry(n,c),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,c),s=s.insert(n,o)):Ec("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)})),s}))}(t,s,e.documentUpdates,r,void 0).next((t=>{a=t}))),!r.isEqual(zc.min())){const e=n.ze.getLastRemoteSnapshotVersion(t).next((e=>n.ze.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return Bh.waitFor(o).next((()=>s.apply(t))).next((()=>n.Qn.vn(t,a))).next((()=>a))})).then((t=>(n.Un=i,t)))}function ad(t,e){const n=Cc(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.In.getNextMutationBatchAfterBatchId(t,e))))}async function cd(t,e,n){const r=Cc(t),i=r.Un.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(o){if(!qh(o))throw o;Ec("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Un=r.Un.remove(e),r.qn.delete(i.target)}function ud(t,e,n){const r=Cc(t);let i=zc.min(),s=eh();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=Cc(t),i=r.qn.get(n);return void 0!==i?Bh.resolve(r.Un.get(i)):r.ze.getTargetData(e,n)}(r,t,el(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.Bn.getDocumentsMatchingQuery(t,e,n?i:zc.min(),n?s:eh()))).next((t=>({documents:t,Gn:s})))))}
/**
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
 */class ld{constructor(t){this.N=t,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(t,e){return Bh.resolve(this.Yn.get(e))}saveBundleMetadata(t,e){var n;return this.Yn.set(e.id,{id:(n=e).id,version:n.version,createTime:wh(n.createTime)}),Bh.resolve()}getNamedQuery(t,e){return Bh.resolve(this.Xn.get(e))}saveNamedQuery(t,e){return this.Xn.set(e.name,{name:(n=e).name,query:Wh(n.bundledQuery),readTime:wh(n.readTime)}),Bh.resolve();var n}}
/**
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
 */class hd{constructor(){this.Zn=new Gl(dd.ts),this.es=new Gl(dd.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new dd(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.rs(new dd(t,e))}os(t,e){t.forEach((t=>this.removeReference(t,e)))}cs(t){const e=new uu(new Xc([])),n=new dd(e,t),r=new dd(e,t+1),i=[];return this.es.forEachInRange([n,r],(t=>{this.rs(t),i.push(t.key)})),i}us(){this.Zn.forEach((t=>this.rs(t)))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new uu(new Xc([])),n=new dd(e,t),r=new dd(e,t+1);let i=eh();return this.es.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new dd(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class dd{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return uu.comparator(t.key,e.key)||jc(t.ls,e.ls)}static ns(t,e){return jc(t.ls,e.ls)||uu.comparator(t.key,e.key)}}
/**
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
 */class fd{constructor(t,e){this.Ht=t,this.referenceDelegate=e,this.In=[],this.fs=1,this.ds=new Gl(dd.ts)}checkEmpty(t){return Bh.resolve(0===this.In.length)}addMutationBatch(t,e,n,r){const i=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const s=new zh(i,e,n,r);this.In.push(s);for(const o of r)this.ds=this.ds.add(new dd(o.key,i)),this.Ht.addToCollectionParentIndex(t,o.key.path.popLast());return Bh.resolve(s)}lookupMutationBatch(t,e){return Bh.resolve(this.ws(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this._s(n),i=r<0?0:r;return Bh.resolve(this.In.length>i?this.In[i]:null)}getHighestUnacknowledgedBatchId(){return Bh.resolve(0===this.In.length?-1:this.fs-1)}getAllMutationBatches(t){return Bh.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new dd(e,0),r=new dd(e,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([n,r],(t=>{const e=this.ws(t.ls);i.push(e)})),Bh.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Gl(jc);return e.forEach((t=>{const e=new dd(t,0),r=new dd(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,r],(t=>{n=n.add(t.ls)}))})),Bh.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;uu.isDocumentKey(i)||(i=i.child(""));const s=new dd(new uu(i),0);let o=new Gl(jc);return this.ds.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.ls)),!0)}),s),Bh.resolve(this.gs(o))}gs(t){const e=[];return t.forEach((t=>{const n=this.ws(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Nc(0===this.ys(e.batchId,"removed")),this.In.shift();let n=this.ds;return Bh.forEach(e.mutations,(r=>{const i=new dd(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.ds=n}))}te(t){}containsKey(t,e){const n=new dd(e,0),r=this.ds.firstAfterOrEqual(n);return Bh.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.In.length,Bh.resolve()}ys(t,e){return this._s(t)}_s(t){return 0===this.In.length?0:t-this.In[0].batchId}ws(t){const e=this._s(t);return e<0||e>=this.In.length?null:this.In[e]}}
/**
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
 */class pd{constructor(t,e){this.Ht=t,this.ps=e,this.docs=new zl(uu.comparator),this.size=0}addEntry(t,e,n){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.ps(e);return this.docs=this.docs.insert(r,{document:e.clone(),size:o,readTime:n}),this.size+=o-s,this.Ht.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Bh.resolve(n?n.document.clone():ku.newInvalidDocument(e))}getEntries(t,e){let n=Ql();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.clone():ku.newInvalidDocument(t))})),Bh.resolve(n)}getDocumentsMatchingQuery(t,e,n){let r=Ql();const i=new uu(e.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:t,value:{document:i,readTime:o}}=s.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||sl(e,i)&&(r=r.insert(i.key,i.clone()))}return Bh.resolve(r)}Es(t,e){return Bh.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new gd(this)}getSize(t){return Bh.resolve(this.size)}}class gd extends class{constructor(){this.changes=new Zh((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:zc.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:ku.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Bh.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}{constructor(t){super(),this.Se=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.document.isValidDocument()?e.push(this.Se.addEntry(t,r.document,this.getReadTime(n))):this.Se.removeEntry(n)})),Bh.waitFor(e)}getFromCache(t,e){return this.Se.getEntry(t,e)}getAllFromCache(t,e){return this.Se.getEntries(t,e)}}
/**
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
 */class md{constructor(t){this.persistence=t,this.Ts=new Zh((t=>Cu(t)),Ru),this.lastRemoteSnapshotVersion=zc.min(),this.highestTargetId=0,this.Is=0,this.As=new hd,this.targetCount=0,this.Rs=Yh.se()}forEachTarget(t,e){return this.Ts.forEach(((t,n)=>e(n))),Bh.resolve()}getLastRemoteSnapshotVersion(t){return Bh.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Bh.resolve(this.Is)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),Bh.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Is&&(this.Is=e),Bh.resolve()}ae(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new Yh(e),this.highestTargetId=e),t.sequenceNumber>this.Is&&(this.Is=t.sequenceNumber)}addTargetData(t,e){return this.ae(e),this.targetCount+=1,Bh.resolve()}updateTargetData(t,e){return this.ae(e),Bh.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.cs(e.targetId),this.targetCount-=1,Bh.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Ts.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Ts.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),Bh.waitFor(i).next((()=>r))}getTargetCount(t){return Bh.resolve(this.targetCount)}getTargetData(t,e){const n=this.Ts.get(e)||null;return Bh.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),Bh.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),Bh.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.As.cs(e),Bh.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return Bh.resolve(n)}containsKey(t,e){return Bh.resolve(this.As.containsKey(e))}}
/**
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
 */class yd{constructor(t,e){var n;this.Ps={},this.Le=new Fc(0),this.Be=!1,this.Be=!0,this.referenceDelegate=t(this),this.ze=new md(this),this.Ht=new Xh,this.He=(n=this.Ht,new pd(n,(t=>this.referenceDelegate.bs(t)))),this.N=new Gh(e),this.Je=new ld(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(t){let e=this.Ps[t.toKey()];return e||(e=new fd(this.Ht,this.referenceDelegate),this.Ps[t.toKey()]=e),e}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(t,e,n){Ec("MemoryPersistence","Starting transaction:",t);const r=new vd(this.Le.next());return this.referenceDelegate.vs(),n(r).next((t=>this.referenceDelegate.Vs(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Ss(t,e){return Bh.or(Object.values(this.Ps).map((n=>()=>n.containsKey(t,e))))}}class vd extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}{constructor(t){super(),this.currentSequenceNumber=t}}class wd{constructor(t){this.persistence=t,this.Ds=new hd,this.Cs=null}static Ns(t){return new wd(t)}get xs(){if(this.Cs)return this.Cs;throw Ac()}addReference(t,e,n){return this.Ds.addReference(n,e),this.xs.delete(n.toString()),Bh.resolve()}removeReference(t,e,n){return this.Ds.removeReference(n,e),this.xs.add(n.toString()),Bh.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),Bh.resolve()}removeTarget(t,e){this.Ds.cs(e.targetId).forEach((t=>this.xs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.xs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}vs(){this.Cs=new Set}Vs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Bh.forEach(this.xs,(n=>{const r=uu.fromPath(n);return this.ks(t,r).next((t=>{t||e.removeEntry(r)}))})).next((()=>(this.Cs=null,e.apply(t))))}updateLimboDocument(t,e){return this.ks(t,e).next((t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())}))}bs(t){return 0}ks(t,e){return Bh.or([()=>Bh.resolve(this.Ds.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ss(t,e)])}}class _d{constructor(){this.activeTargetIds=rh()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ms(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class bd{constructor(){this.yi=new _d,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.yi.Fs(t),this.pi[t]||"not-current"}updateQueryState(t,e,n){this.pi[t]=e}removeLocalQueryTarget(t){this.yi.Ms(t)}isLocalQueryTarget(t){return this.yi.activeTargetIds.has(t)}clearQueryState(t){delete this.pi[t]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(t){return this.yi.activeTargetIds.has(t)}start(){return this.yi=new _d,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
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
 */class Td{Ei(t){}shutdown(){}}
/**
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
 */class Ed{constructor(){this.Ti=()=>this.Ii(),this.Ai=()=>this.Ri(),this.Pi=[],this.bi()}Ei(t){this.Pi.push(t)}shutdown(){window.removeEventListener("online",this.Ti),window.removeEventListener("offline",this.Ai)}bi(){window.addEventListener("online",this.Ti),window.addEventListener("offline",this.Ai)}Ii(){Ec("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Pi)t(0)}Ri(){Ec("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Pi)t(1)}static Pt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
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
 */const Id={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
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
 */class Sd{constructor(t){this.vi=t.vi,this.Vi=t.Vi}Si(t){this.Di=t}Ci(t){this.Ni=t}onMessage(t){this.xi=t}close(){this.Vi()}send(t){this.vi(t)}ki(){this.Di()}$i(t){this.Ni(t)}Oi(t){this.xi(t)}}
/**
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
 */class kd extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Fi=e+"://"+t.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(t,e,n,r){const i=this.Bi(t,e);Ec("RestConnection","Sending: ",i,n);const s={};return this.Ui(s,r),this.qi(t,i,s,n).then((t=>(Ec("RestConnection","Received: ",t),t)),(e=>{throw Sc("RestConnection",`${t} failed with error: `,e,"url: ",i,"request:",n),e}))}Ki(t,e,n,r){return this.Li(t,e,n,r)}Ui(t,e){if(t["X-Goog-Api-Client"]="gl-js/ fire/"+_c,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e)for(const n in e.authHeaders)e.authHeaders.hasOwnProperty(n)&&(t[n]=e.authHeaders[n])}Bi(t,e){const n=Id[t];return`${this.Fi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}qi(t,e,n,r){return new Promise(((i,s)=>{const o=new vc;o.listenOnce(dc.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case hc.NO_ERROR:const e=o.getResponseJson();Ec("Connection","XHR received:",JSON.stringify(e)),i(e);break;case hc.TIMEOUT:Ec("Connection",'RPC "'+t+'" timed out'),s(new Dc(Rc.DEADLINE_EXCEEDED,"Request time out"));break;case hc.HTTP_ERROR:const n=o.getStatus();if(Ec("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Rc).indexOf(e)>=0?e:Rc.UNKNOWN}(t.status);s(new Dc(e,t.message))}else s(new Dc(Rc.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new Dc(Rc.UNAVAILABLE,"Connection failed."));break;default:Ac()}}finally{Ec("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(r);o.send(e,"POST",a,n,15)}))}ji(t,e){const n=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=new oc,i=Js(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(s.xmlHttpFactory=new mc({})),this.Ui(s.initMessageHeaders,e),ne()||ie()||ee().indexOf("Electron/")>=0||se()||ee().indexOf("MSAppHost/")>=0||re()||(s.httpHeadersOverwriteParam="$httpHeaders");const o=n.join("");Ec("Connection","Creating WebChannel: "+o,s);const a=r.createWebChannel(o,s);let c=!1,u=!1;const l=new Sd({vi:t=>{u?Ec("Connection","Not sending because WebChannel is closed:",t):(c||(Ec("Connection","Opening WebChannel transport."),a.open(),c=!0),Ec("Connection","WebChannel sending:",t),a.send(t))},Vi:()=>a.close()}),h=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(e){setTimeout((()=>{throw e}),0)}}))};return h(a,yc.EventType.OPEN,(()=>{u||Ec("Connection","WebChannel transport opened.")})),h(a,yc.EventType.CLOSE,(()=>{u||(u=!0,Ec("Connection","WebChannel transport closed"),l.$i())})),h(a,yc.EventType.ERROR,(t=>{u||(u=!0,Sc("Connection","WebChannel transport errored:",t),l.$i(new Dc(Rc.UNAVAILABLE,"The operation could not be completed")))})),h(a,yc.EventType.MESSAGE,(t=>{var e;if(!u){const n=t.data[0];Nc(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){Ec("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=jl[t];if(void 0!==e)return ql(e)}(t),n=i.message;void 0===e&&(e=Rc.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),u=!0,l.$i(new Dc(e,n)),a.close()}else Ec("Connection","WebChannel received:",n),l.Oi(n)}})),h(i,fc.STAT_EVENT,(t=>{t.stat===pc?Ec("Connection","Detected buffering proxy"):t.stat===gc&&Ec("Connection","Detected no buffering proxy")})),setTimeout((()=>{l.ki()}),0),l}}function Ad(){return"undefined"!=typeof document?document:null}
/**
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
 */function Nd(t){return new gh(t,!0)}class Cd{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Oe=t,this.timerId=e,this.Qi=n,this.Wi=r,this.Gi=i,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(t){this.cancel();const e=Math.floor(this.zi+this.Zi()),n=Math.max(0,Date.now()-this.Ji),r=Math.max(0,e-n);r>0&&Ec("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.zi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,r,(()=>(this.Ji=Date.now(),t()))),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}
/**
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
 */class Rd{constructor(t,e,n,r,i,s){this.Oe=t,this.er=n,this.nr=r,this.credentialsProvider=i,this.listener=s,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new Cd(t,e)}ar(){return 1===this.state||2===this.state||4===this.state}cr(){return 2===this.state}start(){3!==this.state?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&null===this.ir&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,(()=>this.dr())))}wr(t){this._r(),this.stream.send(t)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(t,e){this._r(),this.rr.cancel(),this.sr++,3!==t?this.rr.reset():e&&e.code===Rc.RESOURCE_EXHAUSTED?(Ic(e.toString()),Ic("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):e&&e.code===Rc.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.mr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ci(e)}mr(){}auth(){this.state=1;const t=this.gr(this.sr),e=this.sr;this.credentialsProvider.getToken().then((t=>{this.sr===e&&this.yr(t)}),(e=>{t((()=>{const t=new Dc(Rc.UNKNOWN,"Fetching auth token failed: "+e.message);return this.pr(t)}))}))}yr(t){const e=this.gr(this.sr);this.stream=this.Er(t),this.stream.Si((()=>{e((()=>(this.state=2,this.listener.Si())))})),this.stream.Ci((t=>{e((()=>this.pr(t)))})),this.stream.onMessage((t=>{e((()=>this.onMessage(t)))}))}ur(){this.state=4,this.rr.Xi((async()=>{this.state=0,this.start()}))}pr(t){return Ec("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(3,t)}gr(t){return e=>{this.Oe.enqueueAndForget((()=>this.sr===t?e():(Ec("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Dd extends Rd{constructor(t,e,n,r,i){super(t,"listen_stream_connection_backoff","listen_stream_idle",e,n,i),this.N=r}Er(t){return this.nr.ji("Listen",t)}onMessage(t){this.rr.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const i="NO_CHANGE"===(r=e.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:Ac(),s=e.targetChange.targetIds||[],o=function(t,e){return t.D?(Nc(void 0===e||"string"==typeof e),Zc.fromBase64String(e||"")):(Nc(void 0===e||e instanceof Uint8Array),Zc.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(t){const e=void 0===t.code?Rc.UNKNOWN:ql(t.code);return new Dc(e,t.message||"")}(a);n=new ch(i,s,o,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Eh(t,r.document.name),s=wh(r.document.updateTime),o=new Iu({mapValue:{fields:r.document.fields}}),a=ku.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new oh(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Eh(t,r.document),s=r.readTime?wh(r.readTime):zc.min(),o=ku.newNoDocument(i,s),a=r.removedTargetIds||[];n=new oh([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Eh(t,r.document),s=r.removedTargetIds||[];n=new oh([],s,i,null)}else{if(!("filter"in e))return Ac();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new $l(r),s=t.targetId;n=new ah(s,i)}}var r;return n}(this.N,t),n=function(t){if(!("targetChange"in t))return zc.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?zc.min():e.readTime?wh(e.readTime):zc.min()}(t);return this.listener.Tr(e,n)}Ir(t){const e={};e.database=Sh(this.N),e.addTarget=function(t,e){let n;const r=e.target;return n=Du(r)?{documents:Nh(t,r)}:{query:Ch(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=yh(t,e.resumeToken):e.snapshotVersion.compareTo(zc.min())>0&&(n.readTime=mh(t,e.snapshotVersion.toTimestamp())),n}(this.N,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Ac()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.N,t);n&&(e.labels=n),this.wr(e)}Ar(t){const e={};e.database=Sh(this.N),e.removeTarget=t,this.wr(e)}}class Od extends Rd{constructor(t,e,n,r,i){super(t,"write_stream_connection_backoff","write_stream_idle",e,n,i),this.N=r,this.Rr=!1}get Pr(){return this.Rr}start(){this.Rr=!1,this.lastStreamToken=void 0,super.start()}mr(){this.Rr&&this.br([])}Er(t){return this.nr.ji("Write",t)}onMessage(t){if(Nc(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Rr){this.rr.reset();const e=function(t,e){return t&&t.length>0?(Nc(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?wh(t.updateTime):wh(e);return n.isEqual(zc.min())&&(n=wh(e)),new Il(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=wh(t.commitTime);return this.listener.vr(n,e)}return Nc(!t.writeResults||0===t.writeResults.length),this.Rr=!0,this.listener.Vr()}Sr(){const t={};t.database=Sh(this.N),this.wr(t)}br(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>function(t,e){let n;if(e instanceof xl)n={update:Ah(t,e.key,e.value)};else if(e instanceof Fl)n={delete:Th(t,e.key)};else if(e instanceof Ll)n={update:Ah(t,e.key,e.data),updateMask:$h(e.fieldMask)};else{if(!(e instanceof Vl))return Ac();n={verify:Th(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof gl)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ml)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof vl)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof _l)return{fieldPath:e.field.canonicalString(),increment:n.C};throw Ac()}(0,t)))),e.precondition.isNone||(n.currentDocument=(r=t,void 0!==(i=e.precondition).updateTime?{updateTime:vh(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:Ac())),n;var r,i}(this.N,t)))};this.wr(e)}}
/**
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
 */class xd extends class{}{constructor(t,e,n){super(),this.credentials=t,this.nr=e,this.N=n,this.Dr=!1}Cr(){if(this.Dr)throw new Dc(Rc.FAILED_PRECONDITION,"The client has already been terminated.")}Li(t,e,n){return this.Cr(),this.credentials.getToken().then((r=>this.nr.Li(t,e,n,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Rc.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new Dc(Rc.UNKNOWN,t.toString())}))}Ki(t,e,n){return this.Cr(),this.credentials.getToken().then((r=>this.nr.Ki(t,e,n,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Rc.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new Dc(Rc.UNKNOWN,t.toString())}))}terminate(){this.Dr=!0}}class Ld{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){0===this.Nr&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve()))))}Lr(t){"Online"===this.state?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.Fr("Offline")))}set(t){this.Br(),this.Nr=0,"Online"===t&&(this.$r=!1),this.Fr(t)}Fr(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Mr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.$r?(Ic(e),this.$r=!1):Ec("OnlineStateTracker",e)}Br(){null!==this.kr&&(this.kr.cancel(),this.kr=null)}}
/**
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
 */class Pd{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=i,this.Qr.Ei((t=>{n.enqueueAndForget((async()=>{zd(this)&&(Ec("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Cc(t);e.Kr.add(4),await Ud(e),e.Wr.set("Unknown"),e.Kr.delete(4),await Md(e)}(this))}))})),this.Wr=new Ld(n,r)}}async function Md(t){if(zd(t))for(const e of t.jr)await e(!0)}async function Ud(t){for(const e of t.jr)await e(!1)}function Fd(t,e){const n=Cc(t);n.qr.has(e.targetId)||(n.qr.set(e.targetId,e),qd(n)?Bd(n):af(n).cr()&&$d(n,e))}function Vd(t,e){const n=Cc(t),r=af(n);n.qr.delete(e),r.cr()&&jd(n,e),0===n.qr.size&&(r.cr()?r.lr():zd(n)&&n.Wr.set("Unknown"))}function $d(t,e){t.Gr.Y(e.targetId),af(t).Ir(e)}function jd(t,e){t.Gr.Y(e),af(t).Ar(e)}function Bd(t){t.Gr=new lh({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.qr.get(e)||null}),af(t).start(),t.Wr.Or()}function qd(t){return zd(t)&&!af(t).ar()&&t.qr.size>0}function zd(t){return 0===Cc(t).Kr.size}function Hd(t){t.Gr=void 0}async function Kd(t){t.qr.forEach(((e,n)=>{$d(t,e)}))}async function Gd(t,e){Hd(t),qd(t)?(t.Wr.Lr(e),Bd(t)):t.Wr.set("Unknown")}async function Wd(t,e,n){if(t.Wr.set("Online"),e instanceof ch&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.qr.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.qr.delete(r),t.Gr.removeTarget(r))}(t,e)}catch(r){Ec("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Xd(t,r)}else if(e instanceof oh?t.Gr.rt(e):e instanceof ah?t.Gr.ft(e):t.Gr.ct(e),!n.isEqual(zc.min()))try{const e=await sd(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Gr._t(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.qr.get(r);i&&t.qr.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.qr.get(e);if(!n)return;t.qr.set(e,n.withResumeToken(Zc.EMPTY_BYTE_STRING,n.snapshotVersion)),jd(t,e);const r=new Kh(n.target,e,1,n.sequenceNumber);$d(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(i){Ec("RemoteStore","Failed to raise snapshot:",i),await Xd(t,i)}}async function Xd(t,e,n){if(!qh(e))throw e;t.Kr.add(1),await Ud(t),t.Wr.set("Offline"),n||(n=()=>sd(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Ec("RemoteStore","Retrying IndexedDB access"),await n(),t.Kr.delete(1),await Md(t)}))}function Qd(t,e){return e().catch((n=>Xd(t,n,e)))}async function Yd(t){const e=Cc(t),n=cf(e);let r=e.Ur.length>0?e.Ur[e.Ur.length-1].batchId:-1;for(;Jd(e);)try{const t=await ad(e.localStore,r);if(null===t){0===e.Ur.length&&n.lr();break}r=t.batchId,Zd(e,t)}catch(i){await Xd(e,i)}tf(e)&&ef(e)}function Jd(t){return zd(t)&&t.Ur.length<10}function Zd(t,e){t.Ur.push(e);const n=cf(t);n.cr()&&n.Pr&&n.br(e.mutations)}function tf(t){return zd(t)&&!cf(t).ar()&&t.Ur.length>0}function ef(t){cf(t).start()}async function nf(t){cf(t).Sr()}async function rf(t){const e=cf(t);for(const n of t.Ur)e.br(n.mutations)}async function sf(t,e,n){const r=t.Ur.shift(),i=Hh.from(r,e,n);await Qd(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await Yd(t)}async function of(t,e){e&&cf(t).Pr&&await async function(t,e){if(function(t){switch(t){case Rc.OK:return Ac();case Rc.CANCELLED:case Rc.UNKNOWN:case Rc.DEADLINE_EXCEEDED:case Rc.RESOURCE_EXHAUSTED:case Rc.INTERNAL:case Rc.UNAVAILABLE:case Rc.UNAUTHENTICATED:return!1;case Rc.INVALID_ARGUMENT:case Rc.NOT_FOUND:case Rc.ALREADY_EXISTS:case Rc.PERMISSION_DENIED:case Rc.FAILED_PRECONDITION:case Rc.ABORTED:case Rc.OUT_OF_RANGE:case Rc.UNIMPLEMENTED:case Rc.DATA_LOSS:return!0;default:return Ac()}}(n=e.code)&&n!==Rc.ABORTED){const n=t.Ur.shift();cf(t).hr(),await Qd(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Yd(t)}var n}(t,e),tf(t)&&ef(t)}function af(t){return t.zr||(t.zr=function(t,e,n){const r=Cc(t);return r.Cr(),new Dd(e,r.nr,r.credentials,r.N,n)}(t.datastore,t.asyncQueue,{Si:Kd.bind(null,t),Ci:Gd.bind(null,t),Tr:Wd.bind(null,t)}),t.jr.push((async e=>{e?(t.zr.hr(),qd(t)?Bd(t):t.Wr.set("Unknown")):(await t.zr.stop(),Hd(t))}))),t.zr}function cf(t){return t.Hr||(t.Hr=function(t,e,n){const r=Cc(t);return r.Cr(),new Od(e,r.nr,r.credentials,r.N,n)}(t.datastore,t.asyncQueue,{Si:nf.bind(null,t),Ci:of.bind(null,t),Vr:rf.bind(null,t),vr:sf.bind(null,t)}),t.jr.push((async e=>{e?(t.Hr.hr(),await Yd(t)):(await t.Hr.stop(),t.Ur.length>0&&(Ec("RemoteStore",`Stopping write stream with ${t.Ur.length} pending writes`),t.Ur=[]))}))),t.Hr
/**
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
 */}class uf{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Oc,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new uf(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Dc(Rc.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lf(t,e){if(Ic("AsyncQueue",`${e}: ${t}`),qh(t))return new Dc(Rc.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
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
 */class hf{constructor(t){this.comparator=t?(e,n)=>t(e,n)||uu.comparator(e.key,n.key):(t,e)=>uu.comparator(t.key,e.key),this.keyedMap=Jl(),this.sortedSet=new zl(this.comparator)}static emptySet(t){return new hf(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof hf))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new hf;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
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
 */class df{constructor(){this.Jr=new zl(uu.comparator)}track(t){const e=t.doc.key,n=this.Jr.get(e);n?0!==t.type&&3===n.type?this.Jr=this.Jr.insert(e,t):3===t.type&&1!==n.type?this.Jr=this.Jr.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Jr=this.Jr.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Jr=this.Jr.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Jr=this.Jr.remove(e):1===t.type&&2===n.type?this.Jr=this.Jr.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Jr=this.Jr.insert(e,{type:2,doc:t.doc}):Ac():this.Jr=this.Jr.insert(e,t)}Yr(){const t=[];return this.Jr.inorderTraversal(((e,n)=>{t.push(n)})),t}}class ff{constructor(t,e,n,r,i,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new ff(t,e,hf.emptySet(e),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&nl(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
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
 */class pf{constructor(){this.Xr=void 0,this.listeners=[]}}class gf{constructor(){this.queries=new Zh((t=>rl(t)),nl),this.onlineState="Unknown",this.Zr=new Set}}function mf(t,e){const n=Cc(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.no(i)&&(r=!0);e.Xr=i}}r&&vf(n)}function yf(t,e,n){const r=Cc(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function vf(t){t.Zr.forEach((t=>{t.next()}))}class wf{constructor(t,e,n){this.query=t,this.so=e,this.io=!1,this.ro=null,this.onlineState="Unknown",this.options=n||{}}no(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new ff(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.io?this.oo(t)&&(this.so.next(t),e=!0):this.ao(t,this.onlineState)&&(this.co(t),e=!0),this.ro=t,e}onError(t){this.so.error(t)}eo(t){this.onlineState=t;let e=!1;return this.ro&&!this.io&&this.ao(this.ro,t)&&(this.co(this.ro),e=!0),e}ao(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return!(this.options.uo&&n||t.docs.isEmpty()&&"Offline"!==e)}oo(t){if(t.docChanges.length>0)return!0;const e=this.ro&&this.ro.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}co(t){t=ff.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.io=!0,this.so.next(t)}}
/**
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
 */class _f{constructor(t){this.key=t}}class bf{constructor(t){this.key=t}}class Tf{constructor(t,e){this.query=t,this._o=e,this.mo=null,this.current=!1,this.yo=eh(),this.mutatedKeys=eh(),this.po=ol(t),this.Eo=new hf(this.po)}get To(){return this._o}Io(t,e){const n=e?e.Ao:new df,r=e?e.Eo:this.Eo;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=Xu(this.query)&&r.size===this.query.limit?r.last():null,c=Qu(this.query)&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=sl(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Ro(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.po(l,a)>0||c&&this.po(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),Xu(this.query)||Qu(this.query))for(;s.size>this.query.limit;){const t=Xu(this.query)?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Eo:s,Ao:n,Ln:o,mutatedKeys:i}}Ro(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Eo;this.Eo=t.Eo,this.mutatedKeys=t.mutatedKeys;const i=t.Ao.Yr();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ac()}};return n(t)-n(e)}(t.type,e.type)||this.po(t.doc,e.doc))),this.Po(n);const s=e?this.bo():[],o=0===this.yo.size&&this.current?1:0,a=o!==this.mo;return this.mo=o,0!==i.length||a?{snapshot:new ff(this.query,t.Eo,r,i,t.mutatedKeys,0===o,a,!1),vo:s}:{vo:s}}eo(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Eo:this.Eo,Ao:new df,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{vo:[]}}Vo(t){return!this._o.has(t)&&!!this.Eo.has(t)&&!this.Eo.get(t).hasLocalMutations}Po(t){t&&(t.addedDocuments.forEach((t=>this._o=this._o.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this._o=this._o.delete(t))),this.current=t.current)}bo(){if(!this.current)return[];const t=this.yo;this.yo=eh(),this.Eo.forEach((t=>{this.Vo(t.key)&&(this.yo=this.yo.add(t.key))}));const e=[];return t.forEach((t=>{this.yo.has(t)||e.push(new bf(t))})),this.yo.forEach((n=>{t.has(n)||e.push(new _f(n))})),e}So(t){this._o=t.Gn,this.yo=eh();const e=this.Io(t.documents);return this.applyChanges(e,!0)}Do(){return ff.fromInitialDocuments(this.query,this.Eo,this.mutatedKeys,0===this.mo)}}class Ef{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class If{constructor(t){this.key=t,this.Co=!1}}class Sf{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.No={},this.xo=new Zh((t=>rl(t)),nl),this.ko=new Map,this.$o=new Set,this.Oo=new zl(uu.comparator),this.Fo=new Map,this.Mo=new hd,this.Lo={},this.Bo=new Map,this.Uo=Yh.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return!0===this.qo}}async function kf(t,e){const n=function(t){const e=Cc(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Cf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qf.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Df.bind(null,e),e.No.Tr=mf.bind(null,e.eventManager),e.No.jo=yf.bind(null,e.eventManager),e}(t);let r,i;const s=n.xo.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Do();else{const t=await function(t,e){const n=Cc(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.ze.getTargetData(t,e).next((i=>i?(r=i,Bh.resolve(r)):n.ze.allocateTargetId(t).next((i=>(r=new Kh(e,i,0,t.currentSequenceNumber),n.ze.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.Un.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Un=n.Un.insert(t.targetId,t),n.qn.set(e,t.targetId)),t}))}(n.localStore,el(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await async function(t,e,n,r){t.Ko=(e,n,r)=>async function(t,e,n,r){let i=e.view.Io(n);i.Ln&&(i=await ud(t.localStore,e.query,!1).then((({documents:t})=>e.view.Io(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return Ff(t,e.targetId,o.vo),o.snapshot}(t,e,n,r);const i=await ud(t.localStore,e,!0),s=new Tf(e,i.Gn),o=s.Io(i.documents),a=sh.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=s.applyChanges(o,t.isPrimaryClient,a);Ff(t,n,c.vo);const u=new Ef(e,n,s);return t.xo.set(e,u),t.ko.has(n)?t.ko.get(n).push(e):t.ko.set(n,[e]),c.snapshot}(n,e,r,"current"===s),n.isPrimaryClient&&Fd(n.remoteStore,t)}return i}async function Af(t,e){const n=Cc(t),r=n.xo.get(e),i=n.ko.get(r.targetId);if(i.length>1)return n.ko.set(r.targetId,i.filter((t=>!nl(t,e)))),void n.xo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await cd(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Vd(n.remoteStore,r.targetId),Mf(n,r.targetId)})).catch(Jh)):(Mf(n,r.targetId),await cd(n.localStore,r.targetId,!0))}async function Nf(t,e,n){const r=function(t){const e=Cc(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Of.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=xf.bind(null,e),e}(t);try{const t=await function(t,e){const n=Cc(t),r=qc.now(),i=e.reduce(((t,e)=>t.add(e.key)),eh());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>n.Qn.bn(t,i).next((i=>{s=i;const o=[];for(const t of e){const e=Rl(t,s.get(t.key));null!=e&&o.push(new Ll(t.key,e,Su(e.value.mapValue),Sl.exists(!0)))}return n.In.addMutationBatch(t,r,o,e)})))).then((t=>(t.applyToLocalDocumentSet(s),{batchId:t.batchId,changes:s})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Lo[t.currentUser.toKey()];r||(r=new zl(jc)),r=r.insert(e,n),t.Lo[t.currentUser.toKey()]=r}(r,t.batchId,n),await jf(r,t.changes),await Yd(r.remoteStore)}catch(i){const t=lf(i,"Failed to persist write");n.reject(t)}}async function Cf(t,e){const n=Cc(t);try{const t=await od(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.Fo.get(e);r&&(Nc(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Co=!0:t.modifiedDocuments.size>0?Nc(r.Co):t.removedDocuments.size>0&&(Nc(r.Co),r.Co=!1))})),await jf(n,t,e)}catch(r){await Jh(r)}}function Rf(t,e,n){const r=Cc(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.xo.forEach(((n,r)=>{const i=r.view.eo(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=Cc(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.eo(e)&&(r=!0)})),r&&vf(n)}(r.eventManager,e),t.length&&r.No.Tr(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Df(t,e,n){const r=Cc(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fo.get(e),s=i&&i.key;if(s){let t=new zl(uu.comparator);t=t.insert(s,ku.newNoDocument(s,zc.min()));const n=eh().add(s),i=new ih(zc.min(),new Map,new Gl(jc),t,n);await Cf(r,i),r.Oo=r.Oo.remove(s),r.Fo.delete(e),$f(r)}else await cd(r.localStore,e,!1).then((()=>Mf(r,e,n))).catch(Jh)}async function Of(t,e){const n=Cc(t),r=e.batch.batchId;try{const t=await function(t,e){const n=Cc(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.jn.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=Bh.resolve();return s.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);Nc(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&r.addEntry(e,n.commitVersion))}))})),o.next((()=>t.In.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.In.performConsistencyCheck(t))).next((()=>n.Qn.bn(t,r)))}))}(n.localStore,e);Pf(n,r,null),Lf(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await jf(n,t)}catch(i){await Jh(i)}}async function xf(t,e,n){const r=Cc(t);try{const t=await function(t,e){const n=Cc(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.In.lookupMutationBatch(t,e).next((e=>(Nc(null!==e),r=e.keys(),n.In.removeMutationBatch(t,e)))).next((()=>n.In.performConsistencyCheck(t))).next((()=>n.Qn.bn(t,r)))}))}(r.localStore,e);Pf(r,e,n),Lf(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await jf(r,t)}catch(i){await Jh(i)}}function Lf(t,e){(t.Bo.get(e)||[]).forEach((t=>{t.resolve()})),t.Bo.delete(e)}function Pf(t,e,n){const r=Cc(t);let i=r.Lo[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.Lo[r.currentUser.toKey()]=i}}function Mf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ko.get(e))t.xo.delete(r),n&&t.No.jo(r,n);t.ko.delete(e),t.isPrimaryClient&&t.Mo.cs(e).forEach((e=>{t.Mo.containsKey(e)||Uf(t,e)}))}function Uf(t,e){t.$o.delete(e.path.canonicalString());const n=t.Oo.get(e);null!==n&&(Vd(t.remoteStore,n),t.Oo=t.Oo.remove(e),t.Fo.delete(n),$f(t))}function Ff(t,e,n){for(const r of n)r instanceof _f?(t.Mo.addReference(r.key,e),Vf(t,r)):r instanceof bf?(Ec("SyncEngine","Document no longer in limbo: "+r.key),t.Mo.removeReference(r.key,e),t.Mo.containsKey(r.key)||Uf(t,r.key)):Ac()}function Vf(t,e){const n=e.key,r=n.path.canonicalString();t.Oo.get(n)||t.$o.has(r)||(Ec("SyncEngine","New document in limbo: "+n),t.$o.add(r),$f(t))}function $f(t){for(;t.$o.size>0&&t.Oo.size<t.maxConcurrentLimboResolutions;){const e=t.$o.values().next().value;t.$o.delete(e);const n=new uu(Xc.fromString(e)),r=t.Uo.next();t.Fo.set(r,new If(n)),t.Oo=t.Oo.insert(n,r),Fd(t.remoteStore,new Kh(el(Wu(n.path)),r,2,Fc.T))}}async function jf(t,e,n){const r=Cc(t),i=[],s=[],o=[];r.xo.isEmpty()||(r.xo.forEach(((t,a)=>{o.push(r.Ko(a,e,n).then((t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=ed.kn(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.No.Tr(i),await async function(t,e){const n=Cc(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Bh.forEach(e,(e=>Bh.forEach(e.Nn,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>Bh.forEach(e.xn,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(r){if(!qh(r))throw r;Ec("LocalStore","Failed to update sequence numbers: "+r)}for(const i of e){const t=i.targetId;if(!i.fromCache){const e=n.Un.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Un=n.Un.insert(t,i)}}}(r.localStore,s))}async function Bf(t,e){const n=Cc(t);if(!n.currentUser.isEqual(e)){Ec("SyncEngine","User change. New user:",e.toKey());const t=await id(n.localStore,e);n.currentUser=e,(r=n).Bo.forEach((t=>{t.forEach((t=>{t.reject(new Dc(Rc.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),r.Bo.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await jf(n,t.Wn)}var r}function qf(t,e){const n=Cc(t),r=n.Fo.get(e);if(r&&r.Co)return eh().add(r.key);{let t=eh();const r=n.ko.get(e);if(!r)return t;for(const e of r){const r=n.xo.get(e);t=t.unionWith(r.view.To)}return t}}class zf{constructor(){this.synchronizeTabs=!1}async initialize(t){this.N=Nd(t.databaseInfo.databaseId),this.sharedClientState=this.Wo(t),this.persistence=this.Go(t),await this.persistence.start(),this.gcScheduler=this.zo(t),this.localStore=this.Ho(t)}zo(t){return null}Ho(t){return function(t,e,n,r){return new rd(t,e,n,r)}(this.persistence,new nd,t.initialUser,this.N)}Go(t){return new yd(wd.Ns,this.N)}Wo(t){return new bd}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Hf{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Rf(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Bf.bind(null,this.syncEngine),await async function(t,e){const n=Cc(t);e?(n.Kr.delete(2),await Md(n)):e||(n.Kr.add(2),await Ud(n),n.Wr.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new gf}createDatastore(t){const e=Nd(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new kd(r));var r,i;return i=t.credentials,new xd(i,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>Rf(this.syncEngine,t,0),s=Ed.Pt()?new Ed:new Td,new Pd(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new Sf(t,e,n,r,i,s);return o&&(a.qo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Cc(t);Ec("RemoteStore","RemoteStore shutting down."),e.Kr.add(5),await Ud(e),e.Qr.shutdown(),e.Wr.set("Unknown")}(this.remoteStore)}}
/**
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
 */
/**
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
 */class Kf{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Yo(this.observer.next,t)}error(t){this.observer.error?this.Yo(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Xo(){this.muted=!0}Yo(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
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
 */class Gf{constructor(t,e,n){this.credentials=t,this.asyncQueue=e,this.databaseInfo=n,this.user=wc.UNAUTHENTICATED,this.clientId=$c.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(e,(async t=>{Ec("FirestoreClient","Received user=",t.uid),await this.credentialListener(t),this.user=t}))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.credentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Dc(Rc.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Oc;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),t.resolve()}catch(e){const n=lf(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Wf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){return t.offlineComponents||(Ec("FirestoreClient","Using default OfflineComponentProvider"),await async function(t,e){t.asyncQueue.verifyOperationInProgress(),Ec("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await id(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}(t,new zf)),t.offlineComponents}(t);Ec("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>async function(t,e){const n=Cc(t);n.asyncQueue.verifyOperationInProgress(),Ec("RemoteStore","RemoteStore received new credentials");const r=zd(n);n.Kr.add(3),await Ud(n),r&&n.Wr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Kr.delete(3),await Md(n)}(e.remoteStore,t))),t.onlineComponents=e}async function Xf(t){return t.onlineComponents||(Ec("FirestoreClient","Using default OnlineComponentProvider"),await Wf(t,new Hf)),t.onlineComponents}async function Qf(t){const e=await Xf(t),n=e.eventManager;return n.onListen=kf.bind(null,e.syncEngine),n.onUnlisten=Af.bind(null,e.syncEngine),n}class Yf{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Jf{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Jf&&t.projectId===this.projectId&&t.database===this.database}}
/**
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
 */const Zf=new Map;
/**
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
 */function tp(t,e,n){if(!n)throw new Dc(Rc.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ep(t){if(!uu.isDocumentKey(t))throw new Dc(Rc.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function np(t){if(uu.isDocumentKey(t))throw new Dc(Rc.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function rp(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){if(t.constructor){const e=/function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());if(e&&e.length>1)return e[1]}return null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Ac()}function ip(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Dc(Rc.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=rp(t);throw new Dc(Rc.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
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
 */class sp{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Dc(Rc.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Dc(Rc.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,r){if(!0===e&&!0===r)throw new Dc(Rc.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
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
 */class op{constructor(t,e){this._credentials=e,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sp({}),this._settingsFrozen=!1,t instanceof Jf?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Dc(Rc.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Jf(t.options.projectId)}(t))}get app(){if(!this._app)throw new Dc(Rc.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Dc(Rc.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sp(t),void 0!==t.credentials&&(this._credentials=function(t){if(!t)return new Lc;switch(t.type){case"gapi":const e=t.client;return Nc(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new Uc(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new Dc(Rc.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Zf.get(t);e&&(Ec("ComponentProvider","Removing Datastore"),Zf.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
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
 */class ap{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new up(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ap(this.firestore,t,this._key)}}class cp{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new cp(this.firestore,t,this._query)}}class up extends cp{constructor(t,e,n){super(t,e,Wu(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ap(this.firestore,null,new uu(t))}withConverter(t){return new up(this.firestore,t,this._path)}}function lp(t,e,...n){if(t=ge(t),tp("collection","path",e),t instanceof op){const r=Xc.fromString(e,...n);return np(r),new up(t,null,r)}{if(!(t instanceof ap||t instanceof up))throw new Dc(Rc.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=Xc.fromString(t.path,...n).child(Xc.fromString(e));return np(r),new up(t.firestore,null,r)}}function hp(t,e,...n){if(t=ge(t),1===arguments.length&&(e=$c.I()),tp("doc","path",e),t instanceof op){const r=Xc.fromString(e,...n);return ep(r),new ap(t,null,new uu(r))}{if(!(t instanceof ap||t instanceof up))throw new Dc(Rc.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Xc.fromString(e,...n));return ep(r),new ap(t.firestore,t instanceof up?t.converter:null,new uu(r))}}
/**
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
 */class dp{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new Cd(this,"async_queue_retry"),this.Ea=()=>{const t=Ad();t&&Ec("AsyncQueue","Visibility state changed to "+t.visibilityState),this.rr.tr()};const t=Ad();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ea)}get isShuttingDown(){return this.wa}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ta(),this.Ia(t)}enterRestrictedMode(t){if(!this.wa){this.wa=!0,this.ya=t||!1;const e=Ad();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Ea)}}enqueue(t){if(this.Ta(),this.wa)return new Promise((()=>{}));const e=new Oc;return this.Ia((()=>this.wa&&this.ya?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.da.push(t),this.Aa())))}async Aa(){if(0!==this.da.length){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(t){if(!qh(t))throw t;Ec("AsyncQueue","Operation failed with retryable error: "+t)}this.da.length>0&&this.rr.Xi((()=>this.Aa()))}}Ia(t){const e=this.fa.then((()=>(this.ga=!0,t().catch((t=>{throw this.ma=t,this.ga=!1,Ic("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.ga=!1,t))))));return this.fa=e,e}enqueueAfterDelay(t,e,n){this.Ta(),this.pa.indexOf(t)>-1&&(e=0);const r=uf.createAndSchedule(this,t,e,n,(t=>this.Ra(t)));return this._a.push(r),r}Ta(){this.ma&&Ac()}verifyOperationInProgress(){}async Pa(){let t;do{t=this.fa,await t}while(t!==this.fa)}ba(t){for(const e of this._a)if(e.timerId===t)return!0;return!1}va(t){return this.Pa().then((()=>{this._a.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this._a)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Pa()}))}Va(t){this.pa.push(t)}Ra(t){const e=this._a.indexOf(t);this._a.splice(e,1)}}function fp(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const r of["next","error","complete"])if(r in n&&"function"==typeof n[r])return!0;return!1}(t)}class pp extends op{constructor(t,e){super(t,e),this.type="firestore",this._queue=new dp,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||yp(this),this._firestoreClient.terminate()}}function gp(t=Ve()){return Pe(t,"firestore").getImmediate()}function mp(t){return t._firestoreClient||yp(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function yp(t){var e;const n=t._freezeSettings(),r=(i=t._databaseId,s=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",o=t._persistenceKey,new Yf(i,s,o,(a=n).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));var i,s,o,a;t._firestoreClient=new Gf(t._credentials,t._queue,r)}
/**
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
 */
/**
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
 */class vp{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Dc(Rc.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Yc(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
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
 */class wp{constructor(t){this._byteString=t}static fromBase64String(t){try{return new wp(Zc.fromBase64String(t))}catch(e){throw new Dc(Rc.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new wp(Zc.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
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
 */class _p{constructor(t){this._methodName=t}}
/**
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
 */class bp{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Dc(Rc.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Dc(Rc.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return jc(this._lat,t._lat)||jc(this._long,t._long)}}
/**
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
 */const Tp=/^__.*__$/;class Ep{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Ll(t,this.data,this.fieldMask,e,this.fieldTransforms):new xl(t,this.data,e,this.fieldTransforms)}}class Ip{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Ll(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Sp(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ac()}}class kp{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.N=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Sa(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Da(){return this.settings.Da}Ca(t){return new kp(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Na(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Ca({path:n,xa:!1});return r.ka(t),r}$a(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Ca({path:n,xa:!1});return r.Sa(),r}Oa(t){return this.Ca({path:void 0,xa:!0})}Fa(t){return Vp(t,this.settings.methodName,this.settings.Ma||!1,this.path,this.settings.La)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Sa(){if(this.path)for(let t=0;t<this.path.length;t++)this.ka(this.path.get(t))}ka(t){if(0===t.length)throw this.Fa("Document fields must not be empty");if(Sp(this.Da)&&Tp.test(t))throw this.Fa('Document fields cannot begin and end with "__"')}}class Ap{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.N=n||Nd(t)}Ba(t,e,n,r=!1){return new kp({Da:t,methodName:e,La:n,path:Yc.emptyPath(),xa:!1,Ma:r},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function Np(t){const e=t._freezeSettings(),n=Nd(t._databaseId);return new Ap(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Cp(t,e,n,r,i,s={}){const o=t.Ba(s.merge||s.mergeFields?2:0,e,n,i);Pp("Data must be an object, but it was:",o,r);const a=xp(r,o);let c,u;if(s.merge)c=new Jc(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=Mp(e,r,n);if(!o.contains(i))throw new Dc(Rc.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);$p(t,i)||t.push(i)}c=new Jc(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new Ep(new Iu(a),c,u)}class Rp extends _p{_toFieldTransform(t){if(2!==t.Da)throw 1===t.Da?t.Fa(`${this._methodName}() can only appear at the top level of your update data`):t.Fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Rp}}class Dp extends _p{_toFieldTransform(t){return new El(t.path,new gl)}isEqual(t){return t instanceof Dp}}function Op(t,e){if(Lp(t=ge(t)))return Pp("Unsupported field value:",e,t),xp(t,e);if(t instanceof _p)return function(t,e){if(!Sp(e.Da))throw e.Fa(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.Fa(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xa&&4!==e.Da)throw e.Fa("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Op(i,e.Oa(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=ge(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return ll(e.N,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=qc.fromDate(t);return{timestampValue:mh(e.N,n)}}if(t instanceof qc){const n=new qc(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:mh(e.N,n)}}if(t instanceof bp)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof wp)return{bytesValue:yh(e.N,t._byteString)};if(t instanceof ap){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.Fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:_h(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Fa(`Unsupported field value: ${rp(t)}`)}(t,e)}function xp(t,e){const n={};return Gc(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Kc(t,((t,r)=>{const i=Op(r,e.Na(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function Lp(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof qc||t instanceof bp||t instanceof wp||t instanceof ap||t instanceof _p)}function Pp(t,e,n){if(!Lp(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=rp(n);throw"an object"===r?e.Fa(t+" a custom object"):e.Fa(t+" "+r)}var r}function Mp(t,e,n){if((e=ge(e))instanceof vp)return e._internalPath;if("string"==typeof e)return Fp(t,e);throw Vp("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const Up=new RegExp("[~\\*/\\[\\]]");function Fp(t,e,n){if(e.search(Up)>=0)throw Vp(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new vp(...e.split("."))._internalPath}catch(r){throw Vp(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Vp(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new Dc(Rc.INVALID_ARGUMENT,a+t+c)}function $p(t,e){return t.some((t=>t.isEqual(e)))}
/**
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
 */class jp{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ap(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Bp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(qp("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Bp extends jp{data(){return super.data()}}function qp(t,e){return"string"==typeof e?Fp(t,e):e instanceof vp?e._internalPath:e._delegate._internalPath}
/**
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
 */class zp{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Hp extends jp{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Kp(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(qp("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Kp extends Hp{data(t={}){return super.data(t)}}class Gp{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new zp(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Kp(this._firestore,this._userDataWriter,n.key,n,new zp(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Dc(Rc.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new Kp(t._firestore,t._userDataWriter,n.doc.key,n.doc,new zp(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new Kp(t._firestore,t._userDataWriter,e.doc.key,e.doc,new zp(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:Wp(e.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Wp(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ac()}}
/**
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
 */function Xp(t,...e){for(const n of e)t=n._apply(t);return t}class Qp extends class{}{constructor(t,e,n){super(),this.Ka=t,this.ja=e,this.Qa=n,this.type="where"}_apply(t){const e=Np(t.firestore),n=function(t,e,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new Dc(Rc.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on FieldPath.documentId().`);if("in"===s||"not-in"===s){Zp(o,s);const e=[];for(const n of o)e.push(Jp(r,t,n));a={arrayValue:{values:e}}}else a=Jp(r,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Zp(o,s),a=function(t,e,n,r=!1){return Op(n,t.Ba(r?4:3,e))}(n,"where",o,"in"===s||"not-in"===s);const c=Ou.create(i,s,a);return function(t,e){if(e.v()){const n=Ju(t);if(null!==n&&!n.isEqual(e.field))throw new Dc(Rc.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const r=Yu(t);null!==r&&function(t,e,n){if(!n.isEqual(e))throw new Dc(Rc.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
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
 */(0,e.field,r)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new Dc(Rc.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Dc(Rc.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,0,e,t.firestore._databaseId,this.Ka,this.ja,this.Qa);return new cp(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new Gu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function Yp(t,e,n){const r=e,i=qp("where",t);return new Qp(i,r,n)}function Jp(t,e,n){if("string"==typeof(n=ge(n))){if(""===n)throw new Dc(Rc.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!Zu(e)&&-1!==n.indexOf("/"))throw new Dc(Rc.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Xc.fromString(n));if(!uu.isDocumentKey(r))throw new Dc(Rc.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return yu(t,new uu(r))}if(n instanceof ap)return yu(t,n._key);throw new Dc(Rc.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${rp(n)}.`)}function Zp(t,e){if(!Array.isArray(t)||0===t.length)throw new Dc(Rc.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new Dc(Rc.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}
/**
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
 */
function tg(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class eg extends class{convertValue(t,e="none"){switch(lu(t)){case 0:return null;case 1:return t.booleanValue;case 2:return nu(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ru(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Ac()}}convertObject(t,e){const n={};return Kc(t.fields,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new bp(nu(t.latitude),nu(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=su(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(ou(t));default:return null}}convertTimestamp(t){const e=eu(t);return new qc(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Xc.fromString(t);Nc(jh(n));const r=new Jf(n.get(1),n.get(3)),i=new uu(n.popFirst(5));return r.isEqual(e)||Ic(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}{constructor(t){super(),this.firestore=t}convertBytes(t){return new wp(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ap(this.firestore,null,e)}}function ng(t,e,n){t=ip(t,ap);const r=ip(t.firestore,pp),i=tg(t.converter,e,n);return ag(r,[Cp(Np(r),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,Sl.none())])}function rg(t,e,n,...r){t=ip(t,ap);const i=ip(t.firestore,pp),s=Np(i);let o;return o="string"==typeof(e=ge(e))||e instanceof vp?function(t,e,n,r,i,s){const o=t.Ba(1,e,n),a=[Mp(e,r,n)],c=[i];if(s.length%2!=0)throw new Dc(Rc.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Mp(e,s[d])),c.push(s[d+1]);const u=[],l=Iu.empty();for(let d=a.length-1;d>=0;--d)if(!$p(u,a[d])){const t=a[d];let e=c[d];e=ge(e);const n=o.$a(t);if(e instanceof Rp)u.push(t);else{const r=Op(e,n);null!=r&&(u.push(t),l.set(t,r))}}const h=new Jc(u);return new Ip(l,h,o.fieldTransforms)}(s,"updateDoc",t._key,e,n,r):function(t,e,n,r){const i=t.Ba(1,e,n);Pp("Data must be an object, but it was:",i,r);const s=[],o=Iu.empty();Kc(r,((t,r)=>{const a=Fp(e,t,n);r=ge(r);const c=i.$a(a);if(r instanceof Rp)s.push(a);else{const t=Op(r,c);null!=t&&(s.push(a),o.set(a,t))}}));const a=new Jc(s);return new Ip(o,a,i.fieldTransforms)}(s,"updateDoc",t._key,e),ag(i,[o.toMutation(t._key,Sl.exists(!0))])}function ig(t){return ag(ip(t.firestore,pp),[new Fl(t._key,Sl.none())])}function sg(t,e){const n=ip(t.firestore,pp),r=hp(t),i=tg(t.converter,e);return ag(n,[Cp(Np(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,Sl.exists(!1))]).then((()=>r))}function og(t,...e){var n,r,i;t=ge(t);let s={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||fp(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(fp(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[o+2]=null===(i=t.complete)||void 0===i?void 0:i.bind(t)}let c,u,l;if(t instanceof ap)u=ip(t.firestore,pp),l=Wu(t._key.path),c={next:n=>{e[o]&&e[o](function(t,e,n){const r=n.docs.get(e._key),i=new eg(t);return new Hp(t,i,e._key,r,new zp(n.hasPendingWrites,n.fromCache),e.converter)}(u,t,n))},error:e[o+1],complete:e[o+2]};else{const n=ip(t,cp);u=ip(n.firestore,pp),l=n._query;const r=new eg(u);c={next:t=>{e[o]&&e[o](new Gp(u,r,n,t))},error:e[o+1],complete:e[o+2]},function(t){if(Qu(t)&&0===t.explicitOrderBy.length)throw new Dc(Rc.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(t._query)}return function(t,e,n,r){const i=new Kf(r),s=new wf(e,i,n);return t.asyncQueue.enqueueAndForget((async()=>async function(e,n){const r=Cc(e),i=n.query;let s=!1,o=r.queries.get(i);if(o||(s=!0,o=new pf),s)try{o.Xr=await r.onListen(i)}catch(t){const r=lf(t,`Initialization of query '${il(n.query)}' failed`);return void n.onError(r)}r.queries.set(i,o),o.listeners.push(n),n.eo(r.onlineState),o.Xr&&n.no(o.Xr)&&vf(r)}(await Qf(t),s))),()=>{i.Xo(),t.asyncQueue.enqueueAndForget((async()=>async function(t,e){const n=Cc(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}(await Qf(t),s)))}}(mp(u),l,a,c)}function ag(t,e){return function(t,e){const n=new Oc;return t.asyncQueue.enqueueAndForget((async()=>Nf(await function(t){return Xf(t).then((t=>t.syncEngine))}(t),e,n))),n.promise}(mp(t),e)}function cg(){return new Dp("serverTimestamp")}var ug,lg;_c="9.0.0",Le(new me("firestore",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=new pp(n,new Pc(t.getProvider("auth-internal")));return e=Object.assign({useFetchStreams:!0},e),r._setSettings(e),r}),"PUBLIC")),$e("@firebase/firestore","3.0.1",undefined),(lg=ug||(ug={}))[lg.NO_ERROR=0]="NO_ERROR",lg[lg.NETWORK_ERROR=1]="NETWORK_ERROR",lg[lg.ABORT=2]="ABORT";class hg extends oe{constructor(t,e){super(dg(t),`Firebase Storage: ${e} (${dg(t)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,hg.prototype)}_codeEquals(t){return dg(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function dg(t){return"storage/"+t}function fg(){return new hg("unknown","An unknown error occurred, please check the error payload for server response.")}function pg(t){return new hg("invalid-argument",t)}function gg(){return new hg("app-deleted","The Firebase app was deleted.")}function mg(t,e){return new hg("invalid-format","String does not match format '"+t+"': "+e)}function yg(t){throw new hg("internal-error","Internal error: "+t)}
/**
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
 */class vg{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=ug.NO_ERROR,this.sendPromise_=new Promise((t=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=ug.ABORT,t()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=ug.NETWORK_ERROR,t()})),this.xhr_.addEventListener("load",(()=>{t()}))}))}send(t,e,n,r){if(this.sent_)throw yg("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==r)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw yg("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw yg("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponseText(){if(!this.sent_)throw yg("cannot .getResponseText() before sending");return this.xhr_.responseText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}
/**
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
 */
class wg{createConnection(){return new vg}}
/**
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
 */class _g{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=_g.makeFromUrl(t,e)}catch(r){return new _g(t,"")}if(""===n.path)return n;throw new hg("invalid-default-bucket","Invalid default bucket '"+t+"'.")}static makeFromUrl(t,e){let n=null;const r="([A-Za-z0-9.\\-_]+)";const i=new RegExp("^gs://"+r+"(/(.*))?$","i");function s(t){t.path_=decodeURIComponent(t.path)}const o=e.replace(/[.]/g,"\\."),a=[{regex:i,indices:{bucket:1,path:3},postModify:function(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:s},{regex:new RegExp(`^https?://${"firebasestorage.googleapis.com"===e?"(?:storage.googleapis.com|storage.cloud.google.com)":e}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:s}];for(let c=0;c<a.length;c++){const e=a[c],r=e.regex.exec(t);if(r){const t=r[e.indices.bucket];let i=r[e.indices.path];i||(i=""),n=new _g(t,i),e.postModify(n);break}}if(null==n)throw function(t){return new hg("invalid-url","Invalid URL '"+t+"'.")}(t);return n}}class bg{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
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
 */function Tg(t){return"string"==typeof t||t instanceof String}function Eg(t){return Ig()&&t instanceof Blob}function Ig(){return"undefined"!=typeof Blob}function Sg(t,e,n,r){if(r<e)throw pg(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw pg(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
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
 */function kg(t,e){const n=e.match(/^(\w+):\/\/.+/);let r=e;return null==(null==n?void 0:n[1])&&(r=`https://${e}`),`${r}/v0${t}`}function Ag(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){n=n+(e(r)+"="+e(t[r]))+"&"}return n=n.slice(0,-1),n}
/**
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
 */class Ng{constructor(t,e,n,r,i,s,o,a,c,u,l){this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=t,this.method_=e,this.headers_=n,this.body_=r,this.successCodes_=i.slice(),this.additionalRetryCodes_=s.slice(),this.callback_=o,this.errorCallback_=a,this.progressCallback_=u,this.timeout_=c,this.pool_=l,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=this;function e(e,n){const r=t.resolve_,i=t.reject_,s=n.connection;if(n.wasSuccessCode)try{const e=t.callback_(s,s.getResponseText());void 0!==e?r(e):r()}catch(o){i(o)}else if(null!==s){const e=fg();e.serverResponse=s.getResponseText(),t.errorCallback_?i(t.errorCallback_(s,e)):i(e)}else if(n.canceled){i(t.appDelete_?gg():new hg("canceled","User canceled the upload/download."))}else{i(new hg("retry-limit-exceeded","Max retry time for operation exceeded, please try again."))}}this.canceled_?e(0,new Cg(!1,null,!0)):this.backoffId_=function(t,e,n){let r=1,i=null,s=!1,o=0;function a(){return 2===o}let c=!1;function u(...t){c||(c=!0,e.apply(null,t))}function l(e){i=setTimeout((()=>{i=null,t(h,a())}),e)}function h(t,...e){if(c)return;if(t)return void u.call(null,t,...e);if(a()||s)return void u.call(null,t,...e);let n;r<64&&(r*=2),1===o?(o=2,n=0):n=1e3*(r+Math.random()),l(n)}let d=!1;function f(t){d||(d=!0,c||(null!==i?(t||(o=2),clearTimeout(i),l(0)):t||(o=1)))}return l(0),setTimeout((()=>{s=!0,f(!0)}),n),f}((function(e,n){if(n)return void e(!1,new Cg(!1,null,!0));const r=t.pool_.createConnection();function i(e){const n=e.loaded,r=e.lengthComputable?e.total:-1;null!==t.progressCallback_&&t.progressCallback_(n,r)}t.pendingConnection_=r,null!==t.progressCallback_&&r.addUploadProgressListener(i),r.send(t.url_,t.method_,t.body_,t.headers_).then((()=>{null!==t.progressCallback_&&r.removeUploadProgressListener(i),t.pendingConnection_=null;const n=r.getErrorCode()===ug.NO_ERROR,s=r.getStatus();if(!n||t.isRetryStatusCode_(s)){const t=r.getErrorCode()===ug.ABORT;return void e(!1,new Cg(!1,null,t))}const o=-1!==t.successCodes_.indexOf(s);e(!0,new Cg(o,r))}))}),e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(t){const e=t>=500&&t<600,n=-1!==[408,429].indexOf(t),r=-1!==this.additionalRetryCodes_.indexOf(t);return e||n||r}}class Cg{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function Rg(...t){const e="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==e){const n=new e;for(let e=0;e<t.length;e++)n.append(t[e]);return n.getBlob()}if(Ig())return new Blob(t);throw new hg("unsupported-environment","This browser doesn't seem to support creating Blobs")}
/**
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
 */
const Dg="raw",Og="base64",xg="base64url",Lg="data_url";class Pg{constructor(t,e){this.data=t,this.contentType=e||null}}function Mg(t,e){switch(t){case Dg:return new Pg(Ug(e));case Og:case xg:return new Pg(Fg(t,e));case Lg:return new Pg(function(t){const e=new Vg(t);return e.base64?Fg(Og,e.rest):function(t){let e;try{e=decodeURIComponent(t)}catch(n){throw mg(Lg,"Malformed data URL.")}return Ug(e)}(e.rest)}(e),new Vg(e).contentType)}throw fg()}function Ug(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|63&r);else if(55296==(64512&r)){if(n<t.length-1&&56320==(64512&t.charCodeAt(n+1))){r=65536|(1023&r)<<10|1023&t.charCodeAt(++n),e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else e.push(239,191,189)}else 56320==(64512&r)?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(e)}function Fg(t,e){switch(t){case Og:{const n=-1!==e.indexOf("-"),r=-1!==e.indexOf("_");if(n||r){throw mg(t,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case xg:{const n=-1!==e.indexOf("+"),r=-1!==e.indexOf("/");if(n||r){throw mg(t,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=atob(e)}catch(i){throw mg(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Vg{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw mg(Lg,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=e[1]||null;null!=n&&(this.base64=function(t,e){if(!(t.length>=e.length))return!1;return t.substring(t.length-e.length)===e}
/**
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
 */(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=t.substring(t.indexOf(",")+1)}}class $g{constructor(t,e){let n=0,r="";Eg(t)?(this.data_=t,n=t.size,r=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,e){if(Eg(this.data_)){const s=this.data_,o=(r=t,i=e,(n=s).webkitSlice?n.webkitSlice(r,i):n.mozSlice?n.mozSlice(r,i):n.slice?n.slice(r,i):null);return null===o?null:new $g(o)}{const n=new Uint8Array(this.data_.buffer,t,e-t);return new $g(n,!0)}var n,r,i;
/**
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
 */}static getBlob(...t){if(Ig()){const e=t.map((t=>t instanceof $g?t.data_:t));return new $g(Rg.apply(null,e))}{const e=t.map((t=>Tg(t)?Mg(Dg,t).data:t.data_));let n=0;e.forEach((t=>{n+=t.byteLength}));const r=new Uint8Array(n);let i=0;return e.forEach((t=>{for(let e=0;e<t.length;e++)r[i++]=t[e]})),new $g(r,!0)}}uploadData(){return this.data_}}
/**
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
 */function jg(t){let e;try{e=JSON.parse(t)}catch(r){return null}return"object"!=typeof(n=e)||Array.isArray(n)?null:e;var n}
/**
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
 */function Bg(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
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
 */function qg(t,e){return e}class zg{constructor(t,e,n,r){this.server=t,this.local=e||t,this.writable=!!n,this.xform=r||qg}}let Hg=null;function Kg(){if(Hg)return Hg;const t=[];t.push(new zg("bucket")),t.push(new zg("generation")),t.push(new zg("metageneration")),t.push(new zg("name","fullPath",!0));const e=new zg("name");e.xform=function(t,e){return function(t){return!Tg(t)||t.length<2?t:Bg(t)}(e)},t.push(e);const n=new zg("size");return n.xform=function(t,e){return void 0!==e?Number(e):e},t.push(n),t.push(new zg("timeCreated")),t.push(new zg("updated")),t.push(new zg("md5Hash",null,!0)),t.push(new zg("cacheControl",null,!0)),t.push(new zg("contentDisposition",null,!0)),t.push(new zg("contentEncoding",null,!0)),t.push(new zg("contentLanguage",null,!0)),t.push(new zg("contentType",null,!0)),t.push(new zg("metadata","customMetadata",!0)),Hg=t,Hg}function Gg(t,e,n){const r={type:"file"},i=n.length;for(let s=0;s<i;s++){const t=n[s];r[t.local]=t.xform(r,e[t.server])}return function(t,e){Object.defineProperty(t,"ref",{get:function(){const n=t.bucket,r=t.fullPath,i=new _g(n,r);return e._makeStorageReference(i)}})}(r,t),r}function Wg(t,e,n){const r=jg(e);if(null===r)return null;return Gg(t,r,n)}class Xg{constructor(t,e,n,r){this.url=t,this.method=e,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
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
 */function Qg(t){if(!t)throw fg()}function Yg(t,e){return function(n,r){const i=Wg(t,r,e);return Qg(null!==i),function(t,e,n){const r=jg(e);if(null===r)return null;if(!Tg(r.downloadTokens))return null;const i=r.downloadTokens;if(0===i.length)return null;const s=encodeURIComponent;return i.split(",").map((e=>{const r=t.bucket,i=t.fullPath;return kg("/b/"+s(r)+"/o/"+s(i),n)+Ag({alt:"media",token:e})}))[0]}(i,r,t.host)}}function Jg(t){return function(e,n){let r;var i,s;return 401===e.getStatus()?r=e.getResponseText().includes("Firebase App Check token is invalid")?new hg("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new hg("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===e.getStatus()?(s=t.bucket,r=new hg("quota-exceeded","Quota for bucket '"+s+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===e.getStatus()?(i=t.path,r=new hg("unauthorized","User does not have permission to access '"+i+"'.")):r=n,r.serverResponse=n.serverResponse,r}}function Zg(t){const e=Jg(t);return function(n,r){let i=e(n,r);var s;return 404===n.getStatus()&&(s=t.path,i=new hg("object-not-found","Object '"+s+"' does not exist.")),i.serverResponse=r.serverResponse,i}}function tm(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};const a=function(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}();o["Content-Type"]="multipart/related; boundary="+a;const c=function(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=function(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}(null,e)),r}(e,r,i),u="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+function(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}(c,n)+"\r\n--"+a+"\r\nContent-Type: "+c.contentType+"\r\n\r\n",l="\r\n--"+a+"--",h=$g.getBlob(u,r,l);if(null===h)throw new hg("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.");const d={name:c.fullPath},f=kg(s,t.host),p=t.maxUploadRetryTime,g=new Xg(f,"POST",function(t,e){return function(n,r){const i=Wg(t,r,e);return Qg(null!==i),i}}(t,n),p);return g.urlParams=d,g.headers=o,g.body=h.uploadData(),g.errorHandler=Jg(e),g}
/**
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
 */class em{constructor(t,e){this._service=t,this._location=e instanceof _g?e:_g.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new em(t,e)}get root(){const t=new _g(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Bg(this._location.path)}get storage(){return this._service}get parent(){const t=function(t){if(0===t.length)return null;const e=t.lastIndexOf("/");return-1===e?"":t.slice(0,e)}(this._location.path);if(null===t)return null;const e=new _g(this._location.bucket,t);return new em(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw function(t){return new hg("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(t)}}async function nm(t){t._throwIfRoot("getDownloadURL");const e=function(t,e,n){const r=kg(e.fullServerUrl(),t.host),i=t.maxOperationRetryTime,s=new Xg(r,"GET",Yg(t,n),i);return s.errorHandler=Zg(e),s}(t.storage,t._location,Kg());return(await t.storage.makeRequestWithTokens(e)).getPromise().then((t=>{if(null===t)throw new hg("no-download-url","The given file does not have any download URLs.");return t}))}function rm(t,e){if(t instanceof om){const n=t;if(null==n._bucket)throw new hg("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");const r=new em(n,n._bucket);return null!=e?rm(r,e):r}return void 0!==e?function(t,e){const n=function(t,e){const n=e.split("/").filter((t=>t.length>0)).join("/");return 0===t.length?n:t+"/"+n}(t._location.path,e),r=new _g(t._location.bucket,n);return new em(t.storage,r)}
/**
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
 */(t,e):t}function im(t,e){if(e&&/^[A-Za-z]+:\/\//.test(e)){if(t instanceof om)return new em(t,e);throw pg("To use ref(service, url), the first argument must be a Storage instance.")}return rm(t,e)}function sm(t,e){const n=null==e?void 0:e.storageBucket;return null==n?null:_g.makeFromBucketSpec(n,t)}class om{constructor(t,e,n,r,i,s){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._pool=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host="firebasestorage.googleapis.com",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=i?_g.makeFromBucketSpec(i,this._host):sm(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=_g.makeFromBucketSpec(this._url,t):this._bucket=sm(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Sg("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Sg("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){return(await t.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new em(this,t)}_makeRequest(t,e,n){if(this._deleted)return new bg(gg());{const r=function(t,e,n,r,i,s){const o=Ag(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return function(t,e){e&&(t["X-Firebase-GMPID"]=e)}(c,e),function(t,e){null!==e&&e.length>0&&(t.Authorization="Firebase "+e)}(c,n),function(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!=e?e:"AppManager")}(c,s),function(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}(c,r),new Ng(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}
/**
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
 */(t,this._appId,e,n,this._pool,this._firebaseVersion);return this._requests.add(r),r.getPromise().then((()=>this._requests.delete(r)),(()=>this._requests.delete(r))),r}}async makeRequestWithTokens(t){const[e,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n)}}
/**
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
 */
function am(t,e,n){return function(t,e,n){t._throwIfRoot("uploadBytes");const r=tm(t.storage,t._location,Kg(),new $g(e,!0),n);return t.storage.makeRequestWithTokens(r).then((t=>t.getPromise())).then((e=>({metadata:e,ref:t})))}(t=ge(t),e,n)}function cm(t){return nm(t=ge(t))}function um(t,e){return im(t=ge(t),e)}function lm(t=Ve(),e){return Pe(t=ge(t),"storage").getImmediate({identifier:e})}function hm(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new om(n,r,i,new wg,e,"9.0.0")}function dm(t){const e=t-1;return e*e*e+1}function fm(t,{delay:e=0,duration:n=400,easing:r=dm,x:i=0,y:s=0,opacity:o=0}={}){const a=getComputedStyle(t),c=+a.opacity,u="none"===a.transform?"":a.transform,l=c*(1-o);return{delay:e,duration:n,easing:r,css:(t,e)=>`\n\t\t\ttransform: ${u} translate(${(1-t)*i}px, ${(1-t)*s}px);\n\t\t\topacity: ${c-l*e}`}}function pm(t,{delay:e=0,duration:n=400,easing:r=dm}={}){const i=getComputedStyle(t),s=+i.opacity,o=parseFloat(i.height),a=parseFloat(i.paddingTop),c=parseFloat(i.paddingBottom),u=parseFloat(i.marginTop),l=parseFloat(i.marginBottom),h=parseFloat(i.borderTopWidth),d=parseFloat(i.borderBottomWidth);return{delay:e,duration:n,easing:r,css:t=>`overflow: hidden;opacity: ${Math.min(20*t,1)*s};height: ${t*o}px;padding-top: ${t*a}px;padding-bottom: ${t*c}px;margin-top: ${t*u}px;margin-bottom: ${t*l}px;border-top-width: ${t*h}px;border-bottom-width: ${t*d}px;`}}function gm(t,{delay:e=0,duration:n=400,easing:r=dm,start:i=0,opacity:s=0}={}){const o=getComputedStyle(t),a=+o.opacity,c="none"===o.transform?"":o.transform,u=1-i,l=a*(1-s);return{delay:e,duration:n,easing:r,css:(t,e)=>`\n\t\t\ttransform: ${c} scale(${1-u*e});\n\t\t\topacity: ${a-l*e}\n\t\t`}}function mm(t){let e,n;return{c(){e=x("title"),n=L(t[2])},l(r){e=H(r,"title",{});var i=j(e);n=K(i,t[2]),i.forEach(R)},m(t,r){C(t,e,r),N(e,n)},p(t,e){4&e&&W(n,t[2])},d(t){t&&R(e)}}}function ym(t){let e,r,i,o,a;const c=t[11].default,u=h(c,t,t[10],null),l=u||function(t){let e,n=t[2]&&mm(t);return{c(){n&&n.c(),e=M()},l(t){n&&n.l(t),e=M()},m(t,r){n&&n.m(t,r),C(t,e,r)},p(t,r){t[2]?n?n.p(t,r):(n=mm(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(t){n&&n.d(t),t&&R(e)}}}(t);let d=[{"data-carbon-icon":"CloudOffline16"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{width:"16"},{height:"16"},{class:t[0]},{preserveAspectRatio:"xMidYMid meet"},{style:t[3]},{id:t[1]},t[4]],m={};for(let s=0;s<d.length;s+=1)m=n(m,d[s]);return{c(){e=x("svg"),r=x("path"),l&&l.c(),this.h()},l(t){e=H(t,"svg",{"data-carbon-icon":!0,xmlns:!0,viewBox:!0,fill:!0,width:!0,height:!0,class:!0,preserveAspectRatio:!0,style:!0,id:!0});var n=j(e);r=H(n,"path",{d:!0}),j(r).forEach(R),l&&l.l(n),n.forEach(R),this.h()},h(){V(r,"d","M24.8008 12.1362a8.8694 8.8694 0 00-.9795-2.5434L30 3.4142 28.5872 2 2 28.5872 3.4142 30l5-5H23.5a6.4974 6.4974 0 001.3008-12.8638zM23.5 23H10.4141L22.3418 11.0723a6.9049 6.9049 0 01.6006 2.0708l.0986.812.8154.0639A4.4975 4.4975 0 0123.5 23zM4.2964 23.4487l1.4313-1.4311A4.4774 4.4774 0 018.144 14.019l.8155-.0639.0991-.812a6.9867 6.9867 0 0110.63-5.0865l1.4431-1.4428A8.9859 8.9859 0 007.2 12.1362 6.4891 6.4891 0 004.2964 23.4487z"),$(e,m)},m(n,s){C(n,e,s),N(e,r),l&&l.m(e,null),i=!0,o||(a=[U(e,"click",t[12]),U(e,"mouseover",t[13]),U(e,"mouseenter",t[14]),U(e,"mouseleave",t[15]),U(e,"keyup",t[16]),U(e,"keydown",t[17])],o=!0)},p(t,[n]){u?u.p&&(!i||1024&n)&&p(u,c,t,t[10],i?f(c,t[10],n,null):g(t[10]),null):l&&l.p&&(!i||4&n)&&l.p(t,i?n:-1),$(e,m=Lt(d,[{"data-carbon-icon":"CloudOffline16"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{width:"16"},{height:"16"},(!i||1&n)&&{class:t[0]},{preserveAspectRatio:"xMidYMid meet"},(!i||8&n)&&{style:t[3]},(!i||2&n)&&{id:t[1]},16&n&&t[4]]))},i(t){i||(Ct(l,t),i=!0)},o(t){Rt(l,t),i=!1},d(t){t&&R(e),l&&l.d(t),o=!1,s(a)}}}function vm(t,e,r){let i,s,o,a,{$$slots:c={},$$scope:u}=e,{class:l}=e,{id:h}=e,{tabindex:d}=e,{focusable:f=!1}=e,{title:p}=e,{style:g}=e;return t.$$set=t=>{r(18,e=n(n({},e),m(t))),"class"in t&&r(0,l=t.class),"id"in t&&r(1,h=t.id),"tabindex"in t&&r(5,d=t.tabindex),"focusable"in t&&r(6,f=t.focusable),"title"in t&&r(2,p=t.title),"style"in t&&r(3,g=t.style),"$$scope"in t&&r(10,u=t.$$scope)},t.$$.update=()=>{r(9,i=e["aria-label"]),r(8,s=e["aria-labelledby"]),772&t.$$.dirty&&r(7,o=i||s||p),992&t.$$.dirty&&r(4,a={"aria-label":i,"aria-labelledby":s,"aria-hidden":!o||void 0,role:o?"img":void 0,focusable:"0"===d||f,tabindex:d})},e=m(e),[l,h,p,g,a,d,f,o,s,i,u,c,function(e){ut.call(this,t,e)},function(e){ut.call(this,t,e)},function(e){ut.call(this,t,e)},function(e){ut.call(this,t,e)},function(e){ut.call(this,t,e)},function(e){ut.call(this,t,e)}]}Le(new me("storage",hm,"PUBLIC").setMultipleInstances(!0)),$e("@firebase/storage","0.8.1");var wm=class extends qt{constructor(t){super(),Bt(this,t,vm,ym,a,{class:0,id:1,tabindex:5,focusable:6,title:2,style:3})}};function _m(t){let e,n;return{c(){e=x("title"),n=L(t[2])},l(r){e=H(r,"title",{});var i=j(e);n=K(i,t[2]),i.forEach(R)},m(t,r){C(t,e,r),N(e,n)},p(t,e){4&e&&W(n,t[2])},d(t){t&&R(e)}}}function bm(t){let e,r,i,o,a,c;const u=t[11].default,l=h(u,t,t[10],null),d=l||function(t){let e,n=t[2]&&_m(t);return{c(){n&&n.c(),e=M()},l(t){n&&n.l(t),e=M()},m(t,r){n&&n.m(t,r),C(t,e,r)},p(t,r){t[2]?n?n.p(t,r):(n=_m(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(t){n&&n.d(t),t&&R(e)}}}(t);let m=[{"data-carbon-icon":"Login16"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{width:"16"},{height:"16"},{class:t[0]},{preserveAspectRatio:"xMidYMid meet"},{style:t[3]},{id:t[1]},t[4]],y={};for(let s=0;s<m.length;s+=1)y=n(y,m[s]);return{c(){e=x("svg"),r=x("path"),i=x("path"),d&&d.c(),this.h()},l(t){e=H(t,"svg",{"data-carbon-icon":!0,xmlns:!0,viewBox:!0,fill:!0,width:!0,height:!0,class:!0,preserveAspectRatio:!0,style:!0,id:!0});var n=j(e);r=H(n,"path",{d:!0}),j(r).forEach(R),i=H(n,"path",{d:!0}),j(i).forEach(R),d&&d.l(n),n.forEach(R),this.h()},h(){V(r,"d","M26,30H14a2,2,0,0,1-2-2V25h2v3H26V4H14V7H12V4a2,2,0,0,1,2-2H26a2,2,0,0,1,2,2V28A2,2,0,0,1,26,30Z"),V(i,"d","M14.59 20.59L18.17 17 4 17 4 15 18.17 15 14.59 11.41 16 10 22 16 16 22 14.59 20.59z"),$(e,y)},m(n,s){C(n,e,s),N(e,r),N(e,i),d&&d.m(e,null),o=!0,a||(c=[U(e,"click",t[12]),U(e,"mouseover",t[13]),U(e,"mouseenter",t[14]),U(e,"mouseleave",t[15]),U(e,"keyup",t[16]),U(e,"keydown",t[17])],a=!0)},p(t,[n]){l?l.p&&(!o||1024&n)&&p(l,u,t,t[10],o?f(u,t[10],n,null):g(t[10]),null):d&&d.p&&(!o||4&n)&&d.p(t,o?n:-1),$(e,y=Lt(m,[{"data-carbon-icon":"Login16"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{width:"16"},{height:"16"},(!o||1&n)&&{class:t[0]},{preserveAspectRatio:"xMidYMid meet"},(!o||8&n)&&{style:t[3]},(!o||2&n)&&{id:t[1]},16&n&&t[4]]))},i(t){o||(Ct(d,t),o=!0)},o(t){Rt(d,t),o=!1},d(t){t&&R(e),d&&d.d(t),a=!1,s(c)}}}function Tm(t,e,r){let i,s,o,a,{$$slots:c={},$$scope:u}=e,{class:l}=e,{id:h}=e,{tabindex:d}=e,{focusable:f=!1}=e,{title:p}=e,{style:g}=e;return t.$$set=t=>{r(18,e=n(n({},e),m(t))),"class"in t&&r(0,l=t.class),"id"in t&&r(1,h=t.id),"tabindex"in t&&r(5,d=t.tabindex),"focusable"in t&&r(6,f=t.focusable),"title"in t&&r(2,p=t.title),"style"in t&&r(3,g=t.style),"$$scope"in t&&r(10,u=t.$$scope)},t.$$.update=()=>{r(9,i=e["aria-label"]),r(8,s=e["aria-labelledby"]),772&t.$$.dirty&&r(7,o=i||s||p),992&t.$$.dirty&&r(4,a={"aria-label":i,"aria-labelledby":s,"aria-hidden":!o||void 0,role:o?"img":void 0,focusable:"0"===d||f,tabindex:d})},e=m(e),[l,h,p,g,a,d,f,o,s,i,u,c,function(e){ut.call(this,t,e)},function(e){ut.call(this,t,e)},function(e){ut.call(this,t,e)},function(e){ut.call(this,t,e)},function(e){ut.call(this,t,e)},function(e){ut.call(this,t,e)}]}var Em=class extends qt{constructor(t){super(),Bt(this,t,Tm,bm,a,{class:0,id:1,tabindex:5,focusable:6,title:2,style:3})}};function Im(t){let e,n;return{c(){e=x("title"),n=L(t[2])},l(r){e=H(r,"title",{});var i=j(e);n=K(i,t[2]),i.forEach(R)},m(t,r){C(t,e,r),N(e,n)},p(t,e){4&e&&W(n,t[2])},d(t){t&&R(e)}}}function Sm(t){let e,r,i,o,a,c;const u=t[11].default,l=h(u,t,t[10],null),d=l||function(t){let e,n=t[2]&&Im(t);return{c(){n&&n.c(),e=M()},l(t){n&&n.l(t),e=M()},m(t,r){n&&n.m(t,r),C(t,e,r)},p(t,r){t[2]?n?n.p(t,r):(n=Im(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(t){n&&n.d(t),t&&R(e)}}}(t);let m=[{"data-carbon-icon":"Logout16"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{width:"16"},{height:"16"},{class:t[0]},{preserveAspectRatio:"xMidYMid meet"},{style:t[3]},{id:t[1]},t[4]],y={};for(let s=0;s<m.length;s+=1)y=n(y,m[s]);return{c(){e=x("svg"),r=x("path"),i=x("path"),d&&d.c(),this.h()},l(t){e=H(t,"svg",{"data-carbon-icon":!0,xmlns:!0,viewBox:!0,fill:!0,width:!0,height:!0,class:!0,preserveAspectRatio:!0,style:!0,id:!0});var n=j(e);r=H(n,"path",{d:!0}),j(r).forEach(R),i=H(n,"path",{d:!0}),j(i).forEach(R),d&&d.l(n),n.forEach(R),this.h()},h(){V(r,"d","M6,30H18a2.0023,2.0023,0,0,0,2-2V25H18v3H6V4H18V7h2V4a2.0023,2.0023,0,0,0-2-2H6A2.0023,2.0023,0,0,0,4,4V28A2.0023,2.0023,0,0,0,6,30Z"),V(i,"d","M20.586 20.586L24.172 17 10 17 10 15 24.172 15 20.586 11.414 22 10 28 16 22 22 20.586 20.586z"),$(e,y)},m(n,s){C(n,e,s),N(e,r),N(e,i),d&&d.m(e,null),o=!0,a||(c=[U(e,"click",t[12]),U(e,"mouseover",t[13]),U(e,"mouseenter",t[14]),U(e,"mouseleave",t[15]),U(e,"keyup",t[16]),U(e,"keydown",t[17])],a=!0)},p(t,[n]){l?l.p&&(!o||1024&n)&&p(l,u,t,t[10],o?f(u,t[10],n,null):g(t[10]),null):d&&d.p&&(!o||4&n)&&d.p(t,o?n:-1),$(e,y=Lt(m,[{"data-carbon-icon":"Logout16"},{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{width:"16"},{height:"16"},(!o||1&n)&&{class:t[0]},{preserveAspectRatio:"xMidYMid meet"},(!o||8&n)&&{style:t[3]},(!o||2&n)&&{id:t[1]},16&n&&t[4]]))},i(t){o||(Ct(d,t),o=!0)},o(t){Rt(d,t),o=!1},d(t){t&&R(e),d&&d.d(t),a=!1,s(c)}}}function km(t,e,r){let i,s,o,a,{$$slots:c={},$$scope:u}=e,{class:l}=e,{id:h}=e,{tabindex:d}=e,{focusable:f=!1}=e,{title:p}=e,{style:g}=e;return t.$$set=t=>{r(18,e=n(n({},e),m(t))),"class"in t&&r(0,l=t.class),"id"in t&&r(1,h=t.id),"tabindex"in t&&r(5,d=t.tabindex),"focusable"in t&&r(6,f=t.focusable),"title"in t&&r(2,p=t.title),"style"in t&&r(3,g=t.style),"$$scope"in t&&r(10,u=t.$$scope)},t.$$.update=()=>{r(9,i=e["aria-label"]),r(8,s=e["aria-labelledby"]),772&t.$$.dirty&&r(7,o=i||s||p),992&t.$$.dirty&&r(4,a={"aria-label":i,"aria-labelledby":s,"aria-hidden":!o||void 0,role:o?"img":void 0,focusable:"0"===d||f,tabindex:d})},e=m(e),[l,h,p,g,a,d,f,o,s,i,u,c,function(e){ut.call(this,t,e)},function(e){ut.call(this,t,e)},function(e){ut.call(this,t,e)},function(e){ut.call(this,t,e)},function(e){ut.call(this,t,e)},function(e){ut.call(this,t,e)}]}var Am=class extends qt{constructor(t){super(),Bt(this,t,km,Sm,a,{class:0,id:1,tabindex:5,focusable:6,title:2,style:3})}};export{gp as $,ot as A,n as B,Ht as C,Fe as D,ii as E,lm as F,h as G,p as H,g as I,f as J,l as K,y as L,N as M,t as N,wm as O,mt as P,xt as Q,pm as R,qt as S,xr as T,Gn as U,er as V,u as W,U as X,Am as Y,Em as Z,X as _,j as a,F as a0,s as a1,sg as a2,lp as a3,cg as a4,Q as a5,Y as a6,Ot as a7,gm as a8,D as a9,ig as aa,hp as ab,J as ac,fm as ad,um as ae,am as af,rg as ag,cm as ah,tr as ai,ht as aj,Mt as ak,yt as al,og as am,Xp as an,Yp as ao,ng as ap,V as b,z as c,R as d,O as e,C as f,K as g,W as h,Bt as i,Ut as j,P as k,M as l,Ft as m,G as n,Vt as o,Lt as p,Pt as q,At as r,a as s,L as t,Rt as u,$t as v,Nt as w,Ct as x,ct as y,at as z};
