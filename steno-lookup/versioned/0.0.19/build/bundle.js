var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function o(e){e.forEach(t)}function r(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function a(e,t){e.appendChild(t)}function i(e,t,n){e.insertBefore(t,n||null)}function c(e){e.parentNode.removeChild(e)}function l(e){return document.createElement(e)}function u(e){return document.createTextNode(e)}function d(){return u(" ")}function h(){return u("")}function f(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function p(e){return function(t){return t.preventDefault(),e.call(this,t)}}function v(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function m(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function g(e,t){e.value=null==t?"":t}let b;function w(e){b=e}function y(){if(!b)throw new Error("Function called outside component initialization");return b}function k(){const e=y();return(t,n)=>{const o=e.$$.callbacks[t];if(o){const r=function(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(t,n);o.slice().forEach(t=>{t.call(e,r)})}}}const _=[],$=[],x=[],j=[],A=Promise.resolve();let S=!1;function E(e){x.push(e)}function T(e){j.push(e)}let W=!1;const z=new Set;function O(){if(!W){W=!0;do{for(let e=0;e<_.length;e+=1){const t=_[e];w(t),P(t.$$)}for(w(null),_.length=0;$.length;)$.pop()();for(let e=0;e<x.length;e+=1){const t=x[e];z.has(t)||(z.add(t),t())}x.length=0}while(_.length);for(;j.length;)j.pop()();S=!1,W=!1,z.clear()}}function P(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(E)}}const U=new Set;let q,C;function N(){q={r:0,c:[],p:q}}function L(){q.r||o(q.c),q=q.p}function M(e,t){e&&e.i&&(U.delete(e),e.i(t))}function B(e,t,n,o){if(e&&e.o){if(U.has(e))return;U.add(e),q.c.push(()=>{U.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}}function R(e,t,n){const o=e.$$.props[t];void 0!==o&&(e.$$.bound[o]=n,n(e.$$.ctx[o]))}function D(e){e&&e.c()}function F(e,n,s){const{fragment:a,on_mount:i,on_destroy:c,after_update:l}=e.$$;a&&a.m(n,s),E(()=>{const n=i.map(t).filter(r);c?c.push(...n):o(n),e.$$.on_mount=[]}),l.forEach(E)}function K(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function G(e,t){-1===e.$$.dirty[0]&&(_.push(e),S||(S=!0,A.then(O)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function H(t,r,s,a,i,l,u=[-1]){const d=b;w(t);const h=r.props||{},f=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:i,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:u,skip_bound:!1};let p=!1;if(f.ctx=s?s(t,h,(e,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&i(f.ctx[e],f.ctx[e]=r)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](r),p&&G(t,e)),n}):[],f.update(),p=!0,o(f.before_update),f.fragment=!!a&&a(f.ctx),r.target){if(r.hydrate){const e=function(e){return Array.from(e.childNodes)}(r.target);f.fragment&&f.fragment.l(e),e.forEach(c)}else f.fragment&&f.fragment.c();r.intro&&M(t.$$.fragment),F(t,r.target,r.anchor),O()}w(d)}class I{$destroy(){K(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}class Y{constructor(e="keyval-store",t="keyval"){this.storeName=t,this._dbp=new Promise((n,o)=>{const r=indexedDB.open(e,1);r.onerror=()=>o(r.error),r.onsuccess=()=>n(r.result),r.onupgradeneeded=()=>{r.result.createObjectStore(t)}})}_withIDBStore(e,t){return this._dbp.then(n=>new Promise((o,r)=>{const s=n.transaction(this.storeName,e);s.oncomplete=()=>o(),s.onabort=s.onerror=()=>r(s.error),t(s.objectStore(this.storeName))}))}}function X(){return C||(C=new Y),C}function Z(e,t=X()){let n;return t._withIDBStore("readonly",t=>{n=t.get(e)}).then(()=>n.result)}function J(e,t,n=X()){return n._withIDBStore("readwrite",n=>{n.put(t,e)})}const Q=["#","S-","T-","K-","P-","W-","H-","R-","A","O","*","E","U","-F","-R","-P","-B","-L","-G","-T","-S","-D","-Z"],V={0:"O-",1:"S-",2:"T-",3:"P-",4:"H-",5:"A-",6:"-F",7:"-P",8:"-L",9:"-T"};function ee(e){let t=0,n=1;for(const o of Q)e.includes(o)&&(t|=n),n<<=1;return t}function te(e){let t="",n=!0;for(const o of Q)1&e&&("-"==o[0]&&n&&(t+="-",n=!1),t+=o.replace("-",""),o.includes("-")||"#"==o||(n=!1)),e>>=1;return t}function ne(e){let t=[];for(let n=0;n<e.length;n+=3){let o=e[n]|e[n+1]<<8|e[n+2]<<16;t.push(te(o))}return t.join("/")}function oe(e){if(e<0)throw RangeError("File size must be larger than 0!");let t=Math.log10(e)/3;t+=Math.log10(1e3/995)/3,t+=1/3,t=Math.floor(t);const n=Math.round(e/1e3**t*10)/10,o=["","k","M","G","T","P","E"];return t<o.length?n+" "+o[t]+"B":n+"e"+3*t+" B"}let re,se=new TextDecoder("utf-8"),ae=new TextEncoder("utf-8");async function ie(e){let t="./helpers.wasm";if(re||(re=WebAssembly.compileStreaming?WebAssembly.compileStreaming(fetch(t)).catch(e=>{throw`Oh no, there was a problem with loading the WebAssembly module. This is not good, since we can't do anything without that. (${e})`}):fetch(t).catch(e=>{throw`Couldn't load the wasm file for some reason. Sorry, this shouldn't happen. (${e})`}).then(e=>e.arrayBuffer()).then(e=>WebAssembly.compile(e)).catch(e=>{throw e instanceof TypeError?`Sorry, it seems like your browser does not support WebAssembly. We need this to make your queries fast while using as little of your precious RAM as possible. WebAssembly should be supported in the newest versions of all major browsers, except for Internet Explorer. (${e})`:e})),e){return le(await ce(re),e)}}async function ce(e){let t,n,o=[];let r=await WebAssembly.instantiate(await e,{env:{logErr:function(e,o,r,s,a){if(t){const i=new Uint8Array(t.buffer,e,o),c=new Uint8Array(t.buffer,r,s),l=se.decode(i),u=se.decode(c);console.log(`WebAssembly module panicked with '${l} (${u})' on line ${a}`),n={message:l,details:u}}else console.log("Warning: logErr got called, but memory was not initialized??")},yield_result:function(e,n,r,s){let a=se.decode(new Uint8Array(t.buffer,e,n)),i=new Uint8Array(t.buffer,r,s);o.push([ne(i),a])}}});return t=r.exports.memory,{instance:r,results:o,get_last_error:function(){return n}}}function le(e,t){let n=t.length;const o=n+100,r=Math.ceil(o/65536);let s=e.instance,a=e.results;const i=65536*s.exports.memory.grow(r),c=i+n;let l=new Uint8Array(s.exports.memory.buffer,i,n);l.set(t);let u=i;return{lookup:function(t){const n=performance.now(),o=ae.encode(t).subarray(0,100);new Uint8Array(s.exports.memory.buffer,c,o.length).set(o),a.splice(0,a.length);try{s.exports.query(c,o.length,u,0)}catch(t){let n=e.get_last_error();throw n||`Error in WebAssembly module: ${t} (this probably shouldn't have happened)`}return console.log(`query took ${performance.now()-n}ms`),a.slice()},find_stroke:function(t){a.splice(0,a.length);const n=performance.now();try{s.exports.query(t,0,u,1)}catch(t){let n=e.get_last_error();throw n||`Error in WebAssembly module: ${t} (this probably shouldn't have happened)`}return console.log(`query took ${performance.now()-n}ms`),a.slice()},data:l}}function ue(e){let t,n,o,r,s,h,p,g,b=e[0].name+"";return{c(){t=l("div"),n=l("p"),o=u("Current file: "),r=u(b),s=d(),h=l("button"),h.textContent="Remove",v(n,"class","svelte-uaenwa"),v(h,"class","svelte-uaenwa"),v(t,"id","loaded"),v(t,"class","svelte-uaenwa")},m(c,l){i(c,t,l),a(t,n),a(n,o),a(n,r),a(t,s),a(t,h),p||(g=f(h,"click",e[6]),p=!0)},p(e,t){1&t&&b!==(b=e[0].name+"")&&m(r,b)},d(e){e&&c(t),p=!1,g()}}}function de(e){let t,n,o,r,s;function a(e,t){return"choosefile"==e[1]?fe:"error"==e[1]||"reading"==e[1]?he:void 0}let u=a(e),p=u&&u(e);return{c(){t=l("input"),n=d(),p&&p.c(),o=h(),v(t,"type","file"),v(t,"class","svelte-uaenwa")},m(a,c){i(a,t,c),i(a,n,c),p&&p.m(a,c),i(a,o,c),r||(s=f(t,"change",e[9]),r=!0)},p(e,t){u===(u=a(e))&&p?p.p(e,t):(p&&p.d(1),p=u&&u(e),p&&(p.c(),p.m(o.parentNode,o)))},d(e){e&&c(t),e&&c(n),p&&p.d(e),e&&c(o),r=!1,s()}}}function he(e){let t,n,o,r,s=e[4]&&pe(e);return{c(){t=l("p"),n=u(e[3]),o=d(),s&&s.c(),r=h(),v(t,"class","svelte-uaenwa")},m(e,c){i(e,t,c),a(t,n),i(e,o,c),s&&s.m(e,c),i(e,r,c)},p(e,t){8&t&&m(n,e[3]),e[4]?s?s.p(e,t):(s=pe(e),s.c(),s.m(r.parentNode,r)):s&&(s.d(1),s=null)},d(e){e&&c(t),e&&c(o),s&&s.d(e),e&&c(r)}}}function fe(t){let n,o,r;return{c(){n=l("p"),n.textContent="Please choose a dictionary from your device.",o=d(),r=l("p"),r.textContent="The dictionary will be stored inside of your browser, so you can access it when you load this page the next time. It will stay on your device only, and will not be sent anywhere else.",v(n,"class","svelte-uaenwa"),v(r,"id","smallstatus"),v(r,"class","svelte-uaenwa")},m(e,t){i(e,n,t),i(e,o,t),i(e,r,t)},p:e,d(e){e&&c(n),e&&c(o),e&&c(r)}}}function pe(e){let t,n;return{c(){t=l("p"),n=u(e[4]),v(t,"id","smallstatus"),v(t,"class","svelte-uaenwa")},m(e,o){i(e,t,o),a(t,n)},p(e,t){16&t&&m(n,e[4])},d(e){e&&c(t)}}}function ve(e){let t,n,o,r,s,h,p,g=(e[2].date_checked?e[7].format(e[2].date_checked):"(unknown)")+"";return{c(){t=l("p"),n=u("Last checked: "),o=u(g),r=d(),s=l("button"),s.textContent="Check",v(t,"class","svelte-uaenwa"),v(s,"class","svelte-uaenwa")},m(c,l){i(c,t,l),a(t,n),a(t,o),i(c,r,l),i(c,s,l),h||(p=f(s,"click",e[11]),h=!0)},p(e,t){4&t&&g!==(g=(e[2].date_checked?e[7].format(e[2].date_checked):"(unknown)")+"")&&m(o,g)},d(e){e&&c(t),e&&c(r),e&&c(s),h=!1,p()}}}function me(e){let t,n,o,r,s,h,p,g,b=oe(e[2].update_size)+"";return{c(){t=l("p"),n=u("Update available ("),o=u(b),r=u(")"),s=d(),h=l("button"),h.textContent="Update!",v(t,"class","svelte-uaenwa"),v(h,"class","svelte-uaenwa")},m(c,l){i(c,t,l),a(t,n),a(t,o),a(t,r),i(c,s,l),i(c,h,l),p||(g=f(h,"click",e[10]),p=!0)},p(e,t){4&t&&b!==(b=oe(e[2].update_size)+"")&&m(o,b)},d(e){e&&c(t),e&&c(s),e&&c(h),p=!1,g()}}}function ge(e){let t,n,o=e[2].serviceworker_info+"";return{c(){t=l("p"),n=u(o),v(t,"id","update-info"),v(t,"class","svelte-uaenwa")},m(e,o){i(e,t,o),a(t,n)},p(e,t){4&t&&o!==(o=e[2].serviceworker_info+"")&&m(n,o)},d(e){e&&c(t)}}}function be(t){let n,o,r,s,a,u;function f(e,t){return null===e[0]?de:ue}let p=f(t),m=p(t);function g(e,t){return e[2].update_available?me:ve}let b=g(t),w=b(t),y=t[2].serviceworker_info&&ge(t);return{c(){m.c(),n=d(),o=l("h2"),o.textContent="Updates",r=d(),s=l("div"),w.c(),a=d(),y&&y.c(),u=h(),v(o,"class","svelte-uaenwa"),v(s,"id","updates"),v(s,"class","svelte-uaenwa")},m(e,t){m.m(e,t),i(e,n,t),i(e,o,t),i(e,r,t),i(e,s,t),w.m(s,null),i(e,a,t),y&&y.m(e,t),i(e,u,t)},p(e,[t]){p===(p=f(e))&&m?m.p(e,t):(m.d(1),m=p(e),m&&(m.c(),m.m(n.parentNode,n))),b===(b=g(e))&&w?w.p(e,t):(w.d(1),w=b(e),w&&(w.c(),w.m(s,null))),e[2].serviceworker_info?y?y.p(e,t):(y=ge(e),y.c(),y.m(u.parentNode,u)):y&&(y.d(1),y=null)},i:e,o:e,d(e){m.d(e),e&&c(n),e&&c(o),e&&c(r),e&&c(s),w.d(),e&&c(a),y&&y.d(e),e&&c(u)}}}function we(e,t,n){let{dictionary:o}=t,{status:r}=t,{app_status:s}=t,{update_info:a}=t,i="",c="",l=[];var u;async function d(e){n(3,i="Organizing data..."),n(4,c="");try{n(0,o=await async function(e){ie();const t=await ce(re),n=t.instance,o=ae.encode(e),r=Math.ceil(o.length/65536),s=n.exports.memory.grow(r),a=65536*s;console.log("number of base pages: "+s),new Uint8Array(n.exports.memory.buffer).subarray(a,a+o.length).set(o),console.log("before wasm");const i=performance.now();let c;try{c=n.exports.load_json(a,o.length)}catch(e){let n=t.get_last_error();throw n||`Error in WebAssembly module: ${e} (this probably shouldn't have happened)`}console.log(`after wasm (took ${performance.now()-i}ms)`);const l=new Uint32Array(n.exports.memory.buffer,c,5)[4];console.log("data length: "+l);const u=new Uint8Array(n.exports.memory.buffer,c,l).slice();return le(await ce(re),u)}(e.result))}catch(e){return console.log(e),n(1,r="error"),e.message||(e={message:"An error occured while trying to load your dictionary.",details:""+e}),n(3,i=e.message),void n(4,c=e.details)}n(0,o.name=l[0].name,o),await J("dictionary",{name:o.name,data:o.data}),n(1,r="loaded"),n(8,s="query"),n(3,i=""),n(4,c="")}u=async()=>{if("initializing"==r){let e=await Z("dictionary");if(e){try{n(0,o=await ie(e.data))}catch(e){return n(1,r="error"),n(3,i="Error occured while trying to load stored dictionary."),void n(4,c=""+e)}n(0,o.name=e.name,o),n(1,r="loaded"),n(8,s="query")}else n(1,r="choosefile")}},y().$$.on_mount.push(u);const h=new Intl.DateTimeFormat(void 0,{month:"long",day:"numeric",hour:"numeric",minute:"numeric"});return e.$$set=e=>{"dictionary"in e&&n(0,o=e.dictionary),"status"in e&&n(1,r=e.status),"app_status"in e&&n(8,s=e.app_status),"update_info"in e&&n(2,a=e.update_info)},e.$$.update=()=>{32&e.$$.dirty&&function(e){if(e.length>0){let t=e[0];if(t.size>10485760)n(1,r="error"),n(3,i="Sorry, we only accept files up to 10MB currently."),n(4,c="");else if("application/json"!=t.type)n(1,r="error"),n(3,i="Sorry, right now we can only read plover json dictionaries."),n(4,c="");else{n(1,r="reading"),n(3,i="Loading... 0%"),n(4,c="");let e=new FileReader;e.addEventListener("load",t=>d(e)),e.addEventListener("progress",e=>{let t=Math.floor(e.loaded/e.total*100);n(3,i=`Loading... ${t}%`)}),e.addEventListener("abort",e=>{n(1,r="error"),n(3,i="Aborted."),n(4,c="")}),e.addEventListener("error",e=>{n(1,r="error"),n(3,i="Your browser failed to load the file. Please try again."),n(4,c="")}),e.readAsText(t)}}}(l)},[o,r,a,i,c,l,async function(e){n(0,o=null),await function(e,t=X()){return t._withIDBStore("readwrite",t=>{t.delete(e)})}("dictionary"),n(1,r="choosefile")},h,s,function(){l=this.files,n(5,l)},e=>navigator.serviceWorker.controller.postMessage("do-update"),e=>navigator.serviceWorker.controller.postMessage("check-for-updates")]}class ye extends I{constructor(e){super(),H(this,e,we,be,s,{dictionary:0,status:1,app_status:8,update_info:2})}}function ke(e,t,n){const o=e.slice();return o[1]=t[n][0],o[2]=t[n][1],o}function _e(e){let t,n=e[0],o=[];for(let t=0;t<n.length;t+=1)o[t]=xe(ke(e,n,t));return{c(){t=l("table");for(let e=0;e<o.length;e+=1)o[e].c();v(t,"class","svelte-1tqx9ii")},m(e,n){i(e,t,n);for(let e=0;e<o.length;e+=1)o[e].m(t,null)},p(e,r){if(1&r){let s;for(n=e[0],s=0;s<n.length;s+=1){const a=ke(e,n,s);o[s]?o[s].p(a,r):(o[s]=xe(a),o[s].c(),o[s].m(t,null))}for(;s<o.length;s+=1)o[s].d(1);o.length=n.length}},d(e){e&&c(t),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(o,e)}}}function $e(t){let n;return{c(){n=l("p"),n.textContent="(no results)",v(n,"class","svelte-1tqx9ii")},m(e,t){i(e,n,t)},p:e,d(e){e&&c(n)}}}function xe(e){let t,n,o,r,s,d=e[1]+"",h=e[2]+"";return{c(){t=l("tr"),n=l("td"),o=u(d),r=l("td"),s=u(h),v(n,"class","strokes svelte-1tqx9ii"),v(r,"class","svelte-1tqx9ii"),v(t,"class","svelte-1tqx9ii")},m(e,c){i(e,t,c),a(t,n),a(n,o),a(t,r),a(r,s)},p(e,t){1&t&&d!==(d=e[1]+"")&&m(o,d),1&t&&h!==(h=e[2]+"")&&m(s,h)},d(e){e&&c(t)}}}function je(t){let n;function o(e,t){return 0==e[0].length?$e:_e}let r=o(t),s=r(t);return{c(){s.c(),n=h()},m(e,t){s.m(e,t),i(e,n,t)},p(e,[t]){r===(r=o(e))&&s?s.p(e,t):(s.d(1),s=r(e),s&&(s.c(),s.m(n.parentNode,n)))},i:e,o:e,d(e){s.d(e),e&&c(n)}}}function Ae(e,t,n){let{results:o=[]}=t;return e.$$set=e=>{"results"in e&&n(0,o=e.results)},[o]}class Se extends I{constructor(e){super(),H(this,e,Ae,je,s,{results:0})}}function Ee(t){let n,o,r,s,f=t[2].message+"",p=t[2].details&&We(t);return{c(){n=l("p"),o=u(f),r=d(),p&&p.c(),s=h(),v(n,"id","bigerror"),v(n,"class","svelte-asd7nl")},m(e,t){i(e,n,t),a(n,o),i(e,r,t),p&&p.m(e,t),i(e,s,t)},p(e,t){4&t&&f!==(f=e[2].message+"")&&m(o,f),e[2].details?p?p.p(e,t):(p=We(e),p.c(),p.m(s.parentNode,s)):p&&(p.d(1),p=null)},i:e,o:e,d(e){e&&c(n),e&&c(r),p&&p.d(e),e&&c(s)}}}function Te(e){let t,n;return t=new Se({props:{results:e[1]}}),{c(){D(t.$$.fragment)},m(e,o){F(t,e,o),n=!0},p(e,n){const o={};2&n&&(o.results=e[1]),t.$set(o)},i(e){n||(M(t.$$.fragment,e),n=!0)},o(e){B(t.$$.fragment,e),n=!1},d(e){K(t,e)}}}function We(e){let t,n,o=e[2].details+"";return{c(){t=l("p"),n=u(o),v(t,"id","smallerror"),v(t,"class","svelte-asd7nl")},m(e,o){i(e,t,o),a(t,n)},p(e,t){4&t&&o!==(o=e[2].details+"")&&m(n,o)},d(e){e&&c(t)}}}function ze(e){let t,n,o,r,s,a,u,p;const m=[Te,Ee],b=[];function w(e,t){return void 0!==e[1]?0:e[2]?1:-1}return~(o=w(e))&&(r=b[o]=m[o](e)),{c(){t=l("input"),n=d(),r&&r.c(),s=h(),v(t,"id","query-input"),v(t,"type","text"),v(t,"aria-labelledby","mode-label"),v(t,"class","svelte-asd7nl")},m(r,c){i(r,t,c),g(t,e[0]),i(r,n,c),~o&&b[o].m(r,c),i(r,s,c),a=!0,u||(p=f(t,"input",e[4]),u=!0)},p(e,[n]){1&n&&t.value!==e[0]&&g(t,e[0]);let a=o;o=w(e),o===a?~o&&b[o].p(e,n):(r&&(N(),B(b[a],1,1,()=>{b[a]=null}),L()),~o?(r=b[o],r||(r=b[o]=m[o](e),r.c()),M(r,1),r.m(s.parentNode,s)):r=null)},i(e){a||(M(r),a=!0)},o(e){B(r),a=!1},d(e){e&&c(t),e&&c(n),~o&&b[o].d(e),e&&c(s),u=!1,p()}}}function Oe(e,t,n){let o,{dictionary:r}=t,s="",a=[];return e.$$set=e=>{"dictionary"in e&&n(3,r=e.dictionary)},e.$$.update=()=>{1&e.$$.dirty&&function(e){n(2,o=void 0),n(1,a=void 0);try{n(1,a=r.lookup(e)),console.log("asdf "+a)}catch(e){n(1,a=void 0),e.message?n(2,o=e):n(2,o={message:e.toString()})}}(s)},[s,a,o,r,function(){s=this.value,n(0,s)}]}class Pe extends I{constructor(e){super(),H(this,e,Oe,ze,s,{dictionary:3})}}function Ue(t){let n,r,s,h,g,b,w,y,k,_,$,x,j,A,S,E,T,W,z,O,P,U,q,C,N,L,M,B,R,D,F,K,G,H,I,Y,X,Z,J,Q,V,ee,te,ne,oe,re,se,ae,ie,ce,le,ue,de,he,fe,pe,ve,me,ge,be,we,ye,ke,_e,$e,xe,je,Ae,Se,Ee,Te,We,ze,Oe,Pe,Ue,qe,Ce,Ne,Le,Me,Be,Re,De=t[0]?"hide steno keyboard":"show steno keyboard";return{c(){n=l("button"),r=l("img"),h=d(),g=l("span"),b=u(De),w=d(),y=l("div"),k=l("button"),$=d(),x=l("button"),A=d(),S=l("button"),T=d(),W=l("button"),O=d(),P=l("button"),q=d(),C=l("button"),L=d(),M=l("button"),R=d(),D=l("button"),K=d(),G=l("div"),H=l("button"),Y=d(),X=l("div"),Z=l("button"),Q=d(),V=l("button"),te=d(),ne=l("div"),oe=l("button"),se=d(),ae=l("div"),ie=l("button"),le=d(),ue=l("button"),he=d(),fe=l("button"),ve=d(),me=l("button"),be=d(),we=l("button"),ke=d(),_e=l("button"),xe=d(),je=l("button"),Se=d(),Ee=l("button"),We=d(),ze=l("button"),Pe=d(),Ue=l("button"),Ce=d(),Ne=l("button"),r.src!==(s=t[0]?"collapse-icon.svg":"expand-icon.svg")&&v(r,"src",s),v(r,"alt",""),v(r,"class","svelte-jrhhve"),v(g,"class","svelte-jrhhve"),v(n,"class","keyboard-toggle svelte-jrhhve"),v(n,"aria-expanded",t[0]),v(k,"id","number"),v(k,"aria-label","number bar"),v(k,"aria-pressed",_=!!t[1]["#"]),v(k,"class","steno svelte-jrhhve"),v(x,"id","S-"),v(x,"aria-label","left S"),v(x,"aria-pressed",j=!!t[1]["S-"]),v(x,"class","steno long-key svelte-jrhhve"),v(S,"id","T-"),v(S,"aria-label","left T"),v(S,"aria-pressed",E=!!t[1]["T-"]),v(S,"class","steno top-row svelte-jrhhve"),v(W,"id","K-"),v(W,"aria-label","left K"),v(W,"aria-pressed",z=!!t[1]["K-"]),v(W,"class","steno bottom-row svelte-jrhhve"),v(P,"id","P-"),v(P,"aria-label","left P"),v(P,"aria-pressed",U=!!t[1]["P-"]),v(P,"class","steno top-row svelte-jrhhve"),v(C,"id","W-"),v(C,"aria-label","left W"),v(C,"aria-pressed",N=!!t[1]["W-"]),v(C,"class","steno bottom-row svelte-jrhhve"),v(M,"id","H-"),v(M,"aria-label","left H"),v(M,"aria-pressed",B=!!t[1]["H-"]),v(M,"class","steno top-row svelte-jrhhve"),v(D,"id","R-"),v(D,"aria-label","left R"),v(D,"aria-pressed",F=!!t[1]["R-"]),v(D,"class","steno bottom-row svelte-jrhhve"),v(H,"id","A"),v(H,"aria-label","A"),v(H,"aria-pressed",I=!!t[1].A),v(H,"class","steno left-vowel svelte-jrhhve"),v(G,"id","A-"),v(G,"class","vowel-container svelte-jrhhve"),v(Z,"id","O"),v(Z,"aria-label","O"),v(Z,"aria-pressed",J=!!t[1].O),v(Z,"class","steno left-vowel svelte-jrhhve"),v(X,"id","O-"),v(X,"class","vowel-container svelte-jrhhve"),v(V,"id","star"),v(V,"aria-label","asterisk"),v(V,"aria-pressed",ee=!!t[1]["*"]),v(V,"class","steno long-key svelte-jrhhve"),v(oe,"id","E"),v(oe,"aria-label","E"),v(oe,"aria-pressed",re=!!t[1].E),v(oe,"class","steno right-vowel svelte-jrhhve"),v(ne,"id","-E"),v(ne,"class","vowel-container svelte-jrhhve"),v(ie,"id","U"),v(ie,"aria-label","U"),v(ie,"aria-pressed",ce=!!t[1].U),v(ie,"class","steno right-vowel svelte-jrhhve"),v(ae,"id","-U"),v(ae,"class","vowel-container svelte-jrhhve"),v(ue,"id","-F"),v(ue,"aria-label","right F"),v(ue,"aria-pressed",de=!!t[1]["-F"]),v(ue,"class","steno top-row svelte-jrhhve"),v(fe,"id","-R"),v(fe,"aria-label","right R"),v(fe,"aria-pressed",pe=!!t[1]["-R"]),v(fe,"class","steno bottom-row svelte-jrhhve"),v(me,"id","-P"),v(me,"aria-label","right P"),v(me,"aria-pressed",ge=!!t[1]["-P"]),v(me,"class","steno top-row svelte-jrhhve"),v(we,"id","-B"),v(we,"aria-label","right B"),v(we,"aria-pressed",ye=!!t[1]["-B"]),v(we,"class","steno bottom-row svelte-jrhhve"),v(_e,"id","-L"),v(_e,"aria-label","right L"),v(_e,"aria-pressed",$e=!!t[1]["-L"]),v(_e,"class","steno top-row svelte-jrhhve"),v(je,"id","-G"),v(je,"aria-label","right G"),v(je,"aria-pressed",Ae=!!t[1]["-G"]),v(je,"class","steno bottom-row svelte-jrhhve"),v(Ee,"id","-T"),v(Ee,"aria-label","right T"),v(Ee,"aria-pressed",Te=!!t[1]["-T"]),v(Ee,"class","steno top-row svelte-jrhhve"),v(ze,"id","-S"),v(ze,"aria-label","right S"),v(ze,"aria-pressed",Oe=!!t[1]["-S"]),v(ze,"class","steno bottom-row svelte-jrhhve"),v(Ue,"id","-D"),v(Ue,"aria-label","right D"),v(Ue,"aria-pressed",qe=!!t[1]["-D"]),v(Ue,"class","steno top-row svelte-jrhhve"),v(Ne,"id","-Z"),v(Ne,"aria-label","right Z"),v(Ne,"aria-pressed",Le=!!t[1]["-Z"]),v(Ne,"class","steno bottom-row svelte-jrhhve"),v(y,"id","steno-keyboard"),y.hidden=Me=!t[0],v(y,"role","group"),v(y,"aria-label","steno keyboard"),v(y,"class","svelte-jrhhve")},m(e,o){i(e,n,o),a(n,r),a(n,h),a(n,g),a(g,b),i(e,w,o),i(e,y,o),a(y,k),a(y,$),a(y,x),a(y,A),a(y,S),a(y,T),a(y,W),a(y,O),a(y,P),a(y,q),a(y,C),a(y,L),a(y,M),a(y,R),a(y,D),a(y,K),a(y,G),a(G,H),a(y,Y),a(y,X),a(X,Z),a(y,Q),a(y,V),a(y,te),a(y,ne),a(ne,oe),a(y,se),a(y,ae),a(ae,ie),a(y,le),a(y,ue),a(y,he),a(y,fe),a(y,ve),a(y,me),a(y,be),a(y,we),a(y,ke),a(y,_e),a(y,xe),a(y,je),a(y,Se),a(y,Ee),a(y,We),a(y,ze),a(y,Pe),a(y,Ue),a(y,Ce),a(y,Ne),Be||(Re=[f(n,"click",t[7]),f(k,"click",t[5]),f(k,"touchstart",p(t[2])),f(k,"touchmove",t[3]),f(k,"touchend",t[4]),f(k,"touchcancel",t[4]),f(x,"click",t[5]),f(x,"touchstart",p(t[2])),f(x,"touchmove",t[3]),f(x,"touchend",t[4]),f(x,"touchcancel",t[4]),f(S,"click",t[5]),f(S,"touchstart",p(t[2])),f(S,"touchmove",t[3]),f(S,"touchend",t[4]),f(S,"touchcancel",t[4]),f(W,"click",t[5]),f(W,"touchstart",p(t[2])),f(W,"touchmove",t[3]),f(W,"touchend",t[4]),f(W,"touchcancel",t[4]),f(P,"click",t[5]),f(P,"touchstart",p(t[2])),f(P,"touchmove",t[3]),f(P,"touchend",t[4]),f(P,"touchcancel",t[4]),f(C,"click",t[5]),f(C,"touchstart",p(t[2])),f(C,"touchmove",t[3]),f(C,"touchend",t[4]),f(C,"touchcancel",t[4]),f(M,"click",t[5]),f(M,"touchstart",p(t[2])),f(M,"touchmove",t[3]),f(M,"touchend",t[4]),f(M,"touchcancel",t[4]),f(D,"click",t[5]),f(D,"touchstart",p(t[2])),f(D,"touchmove",t[3]),f(D,"touchend",t[4]),f(D,"touchcancel",t[4]),f(H,"click",t[5]),f(H,"touchstart",p(t[2])),f(H,"touchmove",t[3]),f(H,"touchend",t[4]),f(H,"touchcancel",t[4]),f(Z,"click",t[5]),f(Z,"touchstart",p(t[2])),f(Z,"touchmove",t[3]),f(Z,"touchend",t[4]),f(Z,"touchcancel",t[4]),f(V,"click",t[5]),f(V,"touchstart",p(t[2])),f(V,"touchmove",t[3]),f(V,"touchend",t[4]),f(V,"touchcancel",t[4]),f(oe,"click",t[5]),f(oe,"touchstart",p(t[2])),f(oe,"touchmove",t[3]),f(oe,"touchend",t[4]),f(oe,"touchcancel",t[4]),f(ie,"click",t[5]),f(ie,"touchstart",p(t[2])),f(ie,"touchmove",t[3]),f(ie,"touchend",t[4]),f(ie,"touchcancel",t[4]),f(ue,"click",t[5]),f(ue,"touchstart",p(t[2])),f(ue,"touchmove",t[3]),f(ue,"touchend",t[4]),f(ue,"touchcancel",t[4]),f(fe,"click",t[5]),f(fe,"touchstart",p(t[2])),f(fe,"touchmove",t[3]),f(fe,"touchend",t[4]),f(fe,"touchcancel",t[4]),f(me,"click",t[5]),f(me,"touchstart",p(t[2])),f(me,"touchmove",t[3]),f(me,"touchend",t[4]),f(me,"touchcancel",t[4]),f(we,"click",t[5]),f(we,"touchstart",p(t[2])),f(we,"touchmove",t[3]),f(we,"touchend",t[4]),f(we,"touchcancel",t[4]),f(_e,"click",t[5]),f(_e,"touchstart",p(t[2])),f(_e,"touchmove",t[3]),f(_e,"touchend",t[4]),f(_e,"touchcancel",t[4]),f(je,"click",t[5]),f(je,"touchstart",p(t[2])),f(je,"touchmove",t[3]),f(je,"touchend",t[4]),f(je,"touchcancel",t[4]),f(Ee,"click",t[5]),f(Ee,"touchstart",p(t[2])),f(Ee,"touchmove",t[3]),f(Ee,"touchend",t[4]),f(Ee,"touchcancel",t[4]),f(ze,"click",t[5]),f(ze,"touchstart",p(t[2])),f(ze,"touchmove",t[3]),f(ze,"touchend",t[4]),f(ze,"touchcancel",t[4]),f(Ue,"click",t[5]),f(Ue,"touchstart",p(t[2])),f(Ue,"touchmove",t[3]),f(Ue,"touchend",t[4]),f(Ue,"touchcancel",t[4]),f(Ne,"click",t[5]),f(Ne,"touchstart",p(t[2])),f(Ne,"touchmove",t[3]),f(Ne,"touchend",t[4]),f(Ne,"touchcancel",t[4])],Be=!0)},p(e,[t]){1&t&&r.src!==(s=e[0]?"collapse-icon.svg":"expand-icon.svg")&&v(r,"src",s),1&t&&De!==(De=e[0]?"hide steno keyboard":"show steno keyboard")&&m(b,De),1&t&&v(n,"aria-expanded",e[0]),2&t&&_!==(_=!!e[1]["#"])&&v(k,"aria-pressed",_),2&t&&j!==(j=!!e[1]["S-"])&&v(x,"aria-pressed",j),2&t&&E!==(E=!!e[1]["T-"])&&v(S,"aria-pressed",E),2&t&&z!==(z=!!e[1]["K-"])&&v(W,"aria-pressed",z),2&t&&U!==(U=!!e[1]["P-"])&&v(P,"aria-pressed",U),2&t&&N!==(N=!!e[1]["W-"])&&v(C,"aria-pressed",N),2&t&&B!==(B=!!e[1]["H-"])&&v(M,"aria-pressed",B),2&t&&F!==(F=!!e[1]["R-"])&&v(D,"aria-pressed",F),2&t&&I!==(I=!!e[1].A)&&v(H,"aria-pressed",I),2&t&&J!==(J=!!e[1].O)&&v(Z,"aria-pressed",J),2&t&&ee!==(ee=!!e[1]["*"])&&v(V,"aria-pressed",ee),2&t&&re!==(re=!!e[1].E)&&v(oe,"aria-pressed",re),2&t&&ce!==(ce=!!e[1].U)&&v(ie,"aria-pressed",ce),2&t&&de!==(de=!!e[1]["-F"])&&v(ue,"aria-pressed",de),2&t&&pe!==(pe=!!e[1]["-R"])&&v(fe,"aria-pressed",pe),2&t&&ge!==(ge=!!e[1]["-P"])&&v(me,"aria-pressed",ge),2&t&&ye!==(ye=!!e[1]["-B"])&&v(we,"aria-pressed",ye),2&t&&$e!==($e=!!e[1]["-L"])&&v(_e,"aria-pressed",$e),2&t&&Ae!==(Ae=!!e[1]["-G"])&&v(je,"aria-pressed",Ae),2&t&&Te!==(Te=!!e[1]["-T"])&&v(Ee,"aria-pressed",Te),2&t&&Oe!==(Oe=!!e[1]["-S"])&&v(ze,"aria-pressed",Oe),2&t&&qe!==(qe=!!e[1]["-D"])&&v(Ue,"aria-pressed",qe),2&t&&Le!==(Le=!!e[1]["-Z"])&&v(Ne,"aria-pressed",Le),1&t&&Me!==(Me=!e[0])&&(y.hidden=Me)},i:e,o:e,d(e){e&&c(n),e&&c(w),e&&c(y),Be=!1,o(Re)}}}function qe(e,t,n){const o=["#","S-","T-","K-","P-","W-","H-","R-","A","O","*","E","U","-F","-R","-P","-B","-L","-G","-T","-S","-D","-Z"],r={number:"#",star:"*"};let s=!0,a={};for(const e of o)a[e]=!1;let{stroke:i=0}=t;const c=k();function l(){c("strokeChanged",{stroke:ee(Object.entries(a).filter(([e,t])=>t).map(([e,t])=>e))})}let u={},d=null;return e.$$set=e=>{"stroke"in e&&n(6,i=e.stroke)},e.$$.update=()=>{64&e.$$.dirty&&n(1,a=function(e){let t={};for(const n of Q)t[n]=1&e,e>>=1;return t}(i))},[s,a,function(e){e.touches;for(let t=0;t<e.touches.length;t++){let o=e.touches[t];if(!u.hasOwnProperty(o.identifier)){let t=r[e.target.id]||e.target.id;n(1,a[t]^=!0,a);let s=a[t];console.log("new touch with mode "+s),u[o.identifier]={x:o.clientX,y:o.clientY,mode:s}}}l()},function(e){let t=e.changedTouches,o=!1;for(let e=0;e<t.length;e++){let s=t[e],i=u[s.identifier];if(!i)continue;let c=window.innerWidth/20,l=s.clientX-i.x,d=s.clientY-i.y,h=Math.sqrt(l**2+d**2),f=l/h*c,p=d/h*c;for(;h>0;){let e=i.x+l,t=i.y+d;h-=c,l-=f,d-=p;let s=document.elementFromPoint(e,t),u=r[s.id]||s.id;a.hasOwnProperty(u)&&a[u]!=i.mode&&(n(1,a[u]=i.mode,a),o=!0)}i.x=s.clientX,i.y=s.clientY}o&&l()},function(e){let t=e.changedTouches;for(let e=0;e<t.length;e++)delete u[t[e].identifier];d={x:t[t.length-1].clientX,y:t[t.length-1].clientY,target:t[t.length-1].target},console.log(d)},function(e){if(console.log(`x: ${e.clientX}, y: ${e.clientY}`),null!==d){if(e.target==d.target&&d.x==e.clientX&&d.y==e.clientY)return void(d=null);d=null}const t=r[e.target.id]||e.target.id;n(1,a[t]^=!0,a),l()},i,e=>{n(0,s=!s)}]}class Ce extends I{constructor(e){super(),H(this,e,qe,Ue,s,{stroke:6})}}function Ne(t){let n,o,r,s,f=t[3].message+"",p=t[3].details&&Me(t);return{c(){n=l("p"),o=u(f),r=d(),p&&p.c(),s=h(),v(n,"id","bigerror")},m(e,t){i(e,n,t),a(n,o),i(e,r,t),p&&p.m(e,t),i(e,s,t)},p(e,t){8&t&&f!==(f=e[3].message+"")&&m(o,f),e[3].details?p?p.p(e,t):(p=Me(e),p.c(),p.m(s.parentNode,s)):p&&(p.d(1),p=null)},i:e,o:e,d(e){e&&c(n),e&&c(r),p&&p.d(e),e&&c(s)}}}function Le(e){let t,n;return t=new Se({props:{results:e[2]}}),{c(){D(t.$$.fragment)},m(e,o){F(t,e,o),n=!0},p(e,n){const o={};4&n&&(o.results=e[2]),t.$set(o)},i(e){n||(M(t.$$.fragment,e),n=!0)},o(e){B(t.$$.fragment,e),n=!1},d(e){K(t,e)}}}function Me(e){let t,n,o=e[3].details+"";return{c(){t=l("p"),n=u(o),v(t,"id","smallerror"),v(t,"class","svelte-y68lui")},m(e,o){i(e,t,o),a(t,n)},p(e,t){8&t&&o!==(o=e[3].details+"")&&m(n,o)},d(e){e&&c(t)}}}function Be(e){let t,n,o,r,s,a,u,p,m,g,b;function w(t){e[7].call(null,t)}let y={};void 0!==e[0]&&(y.stroke=e[0]),t=new Ce({props:y}),$.push(()=>R(t,"stroke",w)),t.$on("strokeChanged",e[5]);const k=[Le,Ne],_=[];function x(e,t){return void 0!==e[2]?0:e[3]?1:-1}return~(a=x(e))&&(u=_[a]=k[a](e)),{c(){D(t.$$.fragment),o=d(),r=l("input"),s=d(),u&&u.c(),p=h(),v(r,"type","text"),v(r,"aria-labelledby","mode-label"),v(r,"class","svelte-y68lui")},m(n,c){F(t,n,c),i(n,o,c),i(n,r,c),e[8](r),i(n,s,c),~a&&_[a].m(n,c),i(n,p,c),m=!0,g||(b=f(r,"input",e[4]),g=!0)},p(e,[o]){const r={};!n&&1&o&&(n=!0,r.stroke=e[0],T(()=>n=!1)),t.$set(r);let s=a;a=x(e),a===s?~a&&_[a].p(e,o):(u&&(N(),B(_[s],1,1,()=>{_[s]=null}),L()),~a?(u=_[a],u||(u=_[a]=k[a](e),u.c()),M(u,1),u.m(p.parentNode,p)):u=null)},i(e){m||(M(t.$$.fragment,e),M(u),m=!0)},o(e){B(t.$$.fragment,e),B(u),m=!1},d(n){K(t,n),n&&c(o),n&&c(r),e[8](null),n&&c(s),~a&&_[a].d(n),n&&c(p),g=!1,b()}}}function Re(e,t,n){let o,r,{dictionary:s}=t,a=0,i="",c=[];async function l(){n(3,r=void 0),n(2,c=void 0);try{n(2,c=s.find_stroke(a))}catch(e){n(2,c=void 0),e.message?n(3,r=e):n(3,r={message:e.toString()})}}return e.$$set=e=>{"dictionary"in e&&n(6,s=e.dictionary)},[a,o,c,r,function(e){const t=e.target.value;t!=i&&(i=t,n(0,a=function(e){let t=!1,n=0;for(const o of e){if("-"==o){t=!0;continue}let e=Q.indexOf(o);if(0==e);else if(e>0)t=!0;else if(e=t?Q.indexOf("-"+o):Q.indexOf(o+"-"),e<0){const t=V[o];if(!t){console.log("invalid key!");continue}n|=1,e=Q.indexOf(t)}n|=1<<e}return n}(i.toUpperCase())),l())},function(e){n(0,a=e.detail.stroke),i=te(a),n(1,o.value=i,o),l()},s,function(e){a=e,n(0,a)},function(e){$[e?"unshift":"push"](()=>{o=e,n(1,o)})}]}class De extends I{constructor(e){super(),H(this,e,Re,Be,s,{dictionary:6})}}function Fe(e){let t;return{c(){t=l("div"),v(t,"id","notification-marker"),v(t,"class","svelte-zn3s74")},m(e,n){i(e,t,n)},d(e){e&&c(t)}}}function Ke(e){let t,n,o,r;const s=[Ye,Ie],a=[];function l(e,t){return null===e[4]?0:1}return t=l(e),n=a[t]=s[t](e),{c(){n.c(),o=h()},m(e,n){a[t].m(e,n),i(e,o,n),r=!0},p(e,r){let i=t;t=l(e),t===i?a[t].p(e,r):(N(),B(a[i],1,1,()=>{a[i]=null}),L(),n=a[t],n||(n=a[t]=s[t](e),n.c()),M(n,1),n.m(o.parentNode,o))},i(e){r||(M(n),r=!0)},o(e){B(n),r=!1},d(e){a[t].d(e),e&&c(o)}}}function Ge(e){let t,n,o,r;const s=[Ze,Xe],a=[];function l(e,t){return null===e[4]?0:1}return t=l(e),n=a[t]=s[t](e),{c(){n.c(),o=h()},m(e,n){a[t].m(e,n),i(e,o,n),r=!0},p(e,r){let i=t;t=l(e),t===i?a[t].p(e,r):(N(),B(a[i],1,1,()=>{a[i]=null}),L(),n=a[t],n||(n=a[t]=s[t](e),n.c()),M(n,1),n.m(o.parentNode,o))},i(e){r||(M(n),r=!0)},o(e){B(n),r=!1},d(e){a[t].d(e),e&&c(o)}}}function He(e){let t,n,o,r,s,a;function i(t){e[9].call(null,t)}function c(t){e[10].call(null,t)}function l(t){e[11].call(null,t)}function u(t){e[12].call(null,t)}let d={};return void 0!==e[4]&&(d.dictionary=e[4]),void 0!==e[2]&&(d.update_info=e[2]),void 0!==e[1]&&(d.status=e[1]),void 0!==e[0]&&(d.app_status=e[0]),t=new ye({props:d}),$.push(()=>R(t,"dictionary",i)),$.push(()=>R(t,"update_info",c)),$.push(()=>R(t,"status",l)),$.push(()=>R(t,"app_status",u)),{c(){D(t.$$.fragment)},m(e,n){F(t,e,n),a=!0},p(e,a){const i={};!n&&16&a&&(n=!0,i.dictionary=e[4],T(()=>n=!1)),!o&&4&a&&(o=!0,i.update_info=e[2],T(()=>o=!1)),!r&&2&a&&(r=!0,i.status=e[1],T(()=>r=!1)),!s&&1&a&&(s=!0,i.app_status=e[0],T(()=>s=!1)),t.$set(i)},i(e){a||(M(t.$$.fragment,e),a=!0)},o(e){B(t.$$.fragment,e),a=!1},d(e){K(t,e)}}}function Ie(e){let t,n,o;function r(t){e[14].call(null,t)}let s={};return void 0!==e[4]&&(s.dictionary=e[4]),t=new De({props:s}),$.push(()=>R(t,"dictionary",r)),{c(){D(t.$$.fragment)},m(e,n){F(t,e,n),o=!0},p(e,o){const r={};!n&&16&o&&(n=!0,r.dictionary=e[4],T(()=>n=!1)),t.$set(r)},i(e){o||(M(t.$$.fragment,e),o=!0)},o(e){B(t.$$.fragment,e),o=!1},d(e){K(t,e)}}}function Ye(t){let n,o;return{c(){n=u("// TODO: un-duplicate this code\n        "),o=l("p"),o.textContent="No dictionary loaded.",v(o,"id","nodict"),v(o,"class","svelte-zn3s74")},m(e,t){i(e,n,t),i(e,o,t)},p:e,i:e,o:e,d(e){e&&c(n),e&&c(o)}}}function Xe(e){let t,n,o;function r(t){e[13].call(null,t)}let s={};return void 0!==e[4]&&(s.dictionary=e[4]),t=new Pe({props:s}),$.push(()=>R(t,"dictionary",r)),{c(){D(t.$$.fragment)},m(e,n){F(t,e,n),o=!0},p(e,o){const r={};!n&&16&o&&(n=!0,r.dictionary=e[4],T(()=>n=!1)),t.$set(r)},i(e){o||(M(t.$$.fragment,e),o=!0)},o(e){B(t.$$.fragment,e),o=!1},d(e){K(t,e)}}}function Ze(t){let n;return{c(){n=l("p"),n.textContent="No dictionary loaded.",v(n,"id","nodict"),v(n,"class","svelte-zn3s74")},m(e,t){i(e,n,t)},p:e,i:e,o:e,d(e){e&&c(n)}}}function Je(e){let t,n,r,s,h,p,g,b,w,y,k,_,$,x,j,A,S,E,T,W,z,O,P,U,q,C,R,D,F,K,G,H,I,Y,X,Z,J,Q,V,ee,te=e[5][e[0]]+"",ne=e[2].new_version&&"unknown"!=e[2].user_knows_about_this_version&&e[2].user_knows_about_this_version!=e[2].new_version&&Fe();const oe=[He,Ge,Ke],re=[];function se(e,t){return"load-dict"==e[0]?0:"query"==e[0]?1:"find-stroke"==e[0]?2:-1}return~(R=se(e))&&(D=re[R]=oe[R](e)),{c(){t=l("div"),n=l("header"),r=l("h1"),s=u(te),h=d(),p=l("nav"),g=l("button"),b=l("img"),_=d(),$=l("button"),x=l("img"),E=d(),T=l("button"),W=l("img"),O=d(),ne&&ne.c(),q=d(),C=l("main"),D&&D.c(),F=d(),K=l("p"),G=u("App version: 0.0.19"),H=l("br"),I=u("Updater version: "),Y=u(e[3]),X=l("br"),Z=u("File a bug or contribute to development on "),J=l("a"),J.textContent="github",v(r,"id","mode-label"),v(r,"aria-live","polite"),v(r,"class","svelte-zn3s74"),b.src!==(w="abc-icon.svg")&&v(b,"src","abc-icon.svg"),v(b,"alt","lookup"),v(b,"class","svelte-zn3s74"),v(g,"aria-current",y="query"==e[0]),g.disabled=k=null==e[4],v(g,"class","svelte-zn3s74"),x.src!==(j="STK-icon.svg")&&v(x,"src","STK-icon.svg"),v(x,"alt","find stroke"),v(x,"class","svelte-zn3s74"),v($,"aria-current",A="find-stroke"==e[0]),$.disabled=S=null==e[4],v($,"class","svelte-zn3s74"),W.src!==(z="load-icon.svg")&&v(W,"src","load-icon.svg"),v(W,"alt","load"),v(W,"class","svelte-zn3s74"),v(T,"id","load"),v(T,"aria-current",P="load-dict"==e[0]),T.disabled=U=null==e[4],v(T,"class","svelte-zn3s74"),v(p,"class","svelte-zn3s74"),v(n,"class","svelte-zn3s74"),v(J,"href","https://github.com/antoniusf/steno-lookup"),v(J,"target","_blank"),v(K,"id","version-info"),v(K,"class","svelte-zn3s74"),v(t,"id","container"),v(t,"class","svelte-zn3s74")},m(o,c){i(o,t,c),a(t,n),a(n,r),a(r,s),a(n,h),a(n,p),a(p,g),a(g,b),a(p,_),a(p,$),a($,x),a(p,E),a(p,T),a(T,W),a(T,O),ne&&ne.m(T,null),a(t,q),a(t,C),~R&&re[R].m(C,null),a(t,F),a(t,K),a(K,G),a(K,H),a(K,I),a(K,Y),a(K,X),a(K,Z),a(K,J),Q=!0,V||(ee=[f(g,"click",e[7]),f($,"click",e[8]),f(T,"click",e[6])],V=!0)},p(e,[t]){(!Q||1&t)&&te!==(te=e[5][e[0]]+"")&&m(s,te),(!Q||1&t&&y!==(y="query"==e[0]))&&v(g,"aria-current",y),(!Q||16&t&&k!==(k=null==e[4]))&&(g.disabled=k),(!Q||1&t&&A!==(A="find-stroke"==e[0]))&&v($,"aria-current",A),(!Q||16&t&&S!==(S=null==e[4]))&&($.disabled=S),e[2].new_version&&"unknown"!=e[2].user_knows_about_this_version&&e[2].user_knows_about_this_version!=e[2].new_version?ne||(ne=Fe(),ne.c(),ne.m(T,null)):ne&&(ne.d(1),ne=null),(!Q||1&t&&P!==(P="load-dict"==e[0]))&&v(T,"aria-current",P),(!Q||16&t&&U!==(U=null==e[4]))&&(T.disabled=U);let n=R;R=se(e),R===n?~R&&re[R].p(e,t):(D&&(N(),B(re[n],1,1,()=>{re[n]=null}),L()),~R?(D=re[R],D||(D=re[R]=oe[R](e),D.c()),M(D,1),D.m(C,null)):D=null),(!Q||8&t)&&m(Y,e[3])},i(e){Q||(M(D),Q=!0)},o(e){B(D),Q=!1},d(e){e&&c(t),ne&&ne.d(),~R&&re[R].d(),V=!1,o(ee)}}}function Qe(e,t,n){let o="load-dict",r="initializing",s={},a="(unknown)",i=null;const c=Symbol("version_unknown");Z("user-knows-about-this-version").then(e=>{n(2,s.user_knows_about_this_version=e||c,s)}),"serviceWorker"in navigator&&(navigator.serviceWorker.register("serviceworker.js").then(e=>{console.log("Service worker registration successful.")}).catch(e=>{console.log("Service worker registration failed: "+e)}),navigator.serviceWorker.addEventListener("message",e=>{"version-info"==e.data.type?n(3,a=e.data.serviceworker_version):"update-info"==e.data.type?(s.user_knows_about_this_version==c&&(n(2,s.user_knows_about_this_version=e.data.current_version,s),J("user-knows-about-this-version",e.data.current_version)),"up-to-date"==e.data.status?n(2,s.update_available=!1,s):"available"==e.data.status?(n(2,s.update_available=!0,s),n(2,s.new_version=e.data.new_version,s),"load-dict"==o&&"initializing"!=r&&"reading"!=r&&(n(2,s.user_knows_about_this_version=e.data.new_version,s),J("user-knows-about-this-version",e.data.new_version))):"installed"==e.data.status&&(n(2,s.update_available=!1,s),n(2,s.user_knows_about_this_version=e.data.version,s),J("user-knows-about-this-version",e.data.version),window.location.reload()),n(2,s.date_checked=e.data.date_checked,s),n(2,s.update_size=e.data.update_size,s),n(2,s.new_version=e.data.new_version,s),console.log(JSON.stringify(s,null,2))):"serviceworker-info"==e.data.type&&(n(2,s.serviceworker_info=e.data.text,s),console.log(s.serviceworker_info))}),navigator.serviceWorker.controller&&(navigator.serviceWorker.controller.postMessage("get-version"),navigator.serviceWorker.controller.postMessage("get-update-info"),navigator.serviceWorker.controller.postMessage("check-for-updates")));return[o,r,s,a,i,{"load-dict":"Load",query:"Lookup","find-stroke":"Find Stroke"},async function(e){"load-dict"!=o&&(n(0,o="load-dict"),s.new_version&&s.user_knows_about_this_version!=s.new_version&&(n(2,s.user_knows_about_this_version=s.new_version,s),await J("user-knows-about-this-version",s.new_version)))},e=>{n(0,o="query")},e=>{n(0,o="find-stroke")},function(e){i=e,n(4,i)},function(e){s=e,n(2,s)},function(e){r=e,n(1,r)},function(e){o=e,n(0,o)},function(e){i=e,n(4,i)},function(e){i=e,n(4,i)}]}return new class extends I{constructor(e){super(),H(this,e,Qe,Je,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map