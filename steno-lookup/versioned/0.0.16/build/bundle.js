var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t){return null==t?"":t}function c(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function f(){return d(" ")}function h(){return d("")}function v(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function p(t){return function(e){return e.preventDefault(),t.call(this,e)}}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e){e=""+e,t.data!==e&&(t.data=e)}function w(t,e){(null!=e||t.value)&&(t.value=e)}function b(t,e,n){t.classList[n?"add":"remove"](e)}let y;function _(t){y=t}function k(){if(!y)throw new Error("Function called outside component initialization");return y}function $(){const t=k();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);o.slice().forEach(e=>{e.call(t,r)})}}}const x=[],A=[],E=[],S=[],W=Promise.resolve();let T=!1;function O(t){E.push(t)}function q(t){S.push(t)}let P=!1;const C=new Set;function N(){if(!P){P=!0;do{for(let t=0;t<x.length;t+=1){const e=x[t];_(e),U(e.$$)}for(x.length=0;A.length;)A.pop()();for(let t=0;t<E.length;t+=1){const e=E[t];C.has(e)||(C.add(e),e())}E.length=0}while(x.length);for(;S.length;)S.pop()();T=!1,P=!1,C.clear()}}function U(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const L=new Set;let M,B;function D(){M={r:0,c:[],p:M}}function R(){M.r||o(M.c),M=M.p}function F(t,e){t&&t.i&&(L.delete(t),t.i(e))}function z(t,e,n,o){if(t&&t.o){if(L.has(t))return;L.add(t),M.c.push(()=>{L.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function j(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}function I(t){t&&t.c()}function K(t,n,i){const{fragment:s,on_mount:c,on_destroy:a,after_update:l}=t.$$;s&&s.m(n,i),O(()=>{const n=c.map(e).filter(r);a?a.push(...n):o(n),t.$$.on_mount=[]}),l.forEach(O)}function G(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function H(t,e){-1===t.$$.dirty[0]&&(x.push(t),T||(T=!0,W.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Z(e,r,i,s,c,a,u=[-1]){const d=y;_(e);const f=r.props||{},h=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:u};let v=!1;if(h.ctx=i?i(e,f,(t,n,...o)=>{const r=o.length?o[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=r)&&(h.bound[t]&&h.bound[t](r),v&&H(e,t)),n}):[],h.update(),v=!0,o(h.before_update),h.fragment=!!s&&s(h.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);h.fragment&&h.fragment.l(t),t.forEach(l)}else h.fragment&&h.fragment.c();r.intro&&F(e.$$.fragment),K(e,r.target,r.anchor),N()}_(d)}class Y{$destroy(){G(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}class X{constructor(t="keyval-store",e="keyval"){this.storeName=e,this._dbp=new Promise((n,o)=>{const r=indexedDB.open(t,1);r.onerror=()=>o(r.error),r.onsuccess=()=>n(r.result),r.onupgradeneeded=()=>{r.result.createObjectStore(e)}})}_withIDBStore(t,e){return this._dbp.then(n=>new Promise((o,r)=>{const i=n.transaction(this.storeName,t);i.oncomplete=()=>o(),i.onabort=i.onerror=()=>r(i.error),e(i.objectStore(this.storeName))}))}}function J(){return B||(B=new X),B}function Q(t,e=J()){let n;return e._withIDBStore("readonly",e=>{n=e.get(t)}).then(()=>n.result)}function V(t,e,n=J()){return n._withIDBStore("readwrite",n=>{n.put(e,t)})}const tt=["#","S-","T-","K-","P-","W-","H-","R-","A","O","*","E","U","-F","-R","-P","-B","-L","-G","-T","-S","-D","-Z"],et={0:"O-",1:"S-",2:"T-",3:"P-",4:"H-",5:"A-",6:"-F",7:"-P",8:"-L",9:"-T"};function nt(t){let e=0,n=1;for(const o of tt)t.includes(o)&&(e|=n),n<<=1;return e}function ot(t){let e="",n=!0;for(const o of tt)1&t&&("-"==o[0]&&n&&(e+="-",n=!1),e+=o.replace("-",""),o.includes("-")||"#"==o||(n=!1)),t>>=1;return e}function rt(t){let e=[];for(let n=0;n<t.length;n+=3){let o=t[n]|t[n+1]<<8|t[n+2]<<16;e.push(ot(o))}return e.join("/")}function it(t){if(t<0)throw RangeError("File size must be larger than 0!");let e=Math.log10(t)/3;e+=Math.log10(1e3/995)/3,e+=1/3,e=Math.floor(e);const n=Math.round(t/1e3**e*10)/10,o=["","k","M","G","T","P","E"];return e<o.length?n+" "+o[e]+"B":n+"e"+3*e+" B"}let st,ct=new TextDecoder("utf-8"),at=new TextEncoder("utf-8");async function lt(t){let e="./helpers.wasm";if(st||(st=WebAssembly.compileStreaming?WebAssembly.compileStreaming(fetch(e)).catch(t=>{throw`Oh no, there was a problem with loading the WebAssembly module. This is not good, since we can't do anything without that. (${t})`}):fetch(e).catch(t=>{throw`Couldn't load the wasm file for some reason. Sorry, this shouldn't happen. (${t})`}).then(t=>t.arrayBuffer()).then(t=>WebAssembly.compile(t)).catch(t=>{throw t instanceof TypeError?`Sorry, it seems like your browser does not support WebAssembly. We need this to make your queries fast while using as little of your precious RAM as possible. WebAssembly should be supported in the newest versions of all major browsers, except for Internet Explorer. (${t})`:t})),t){return dt(await ut(st),t)}}async function ut(t){let e,n,o=[];let r=await WebAssembly.instantiate(await t,{env:{logErr:function(t,o,r,i,s){if(e){const c=new Uint8Array(e.buffer,t,o),a=new Uint8Array(e.buffer,r,i),l=ct.decode(c),u=ct.decode(a);console.log(`WebAssembly module panicked with '${l} (${u})' on line ${s}`),n={message:l,details:u}}else console.log("Warning: logErr got called, but memory was not initialized??")},yield_result:function(t,n,r,i){let s=ct.decode(new Uint8Array(e.buffer,t,n)),c=new Uint8Array(e.buffer,r,i);o.push([rt(c),s])}}});return e=r.exports.memory,{instance:r,results:o,get_last_error:function(){return n}}}function dt(t,e){let n=e.length;const o=n+100,r=Math.ceil(o/65536);let i=t.instance,s=t.results;const c=65536*i.exports.memory.grow(r),a=c+n;let l=new Uint8Array(i.exports.memory.buffer,c,n);l.set(e);let u=c;return{lookup:function(e){const n=performance.now(),o=at.encode(e).subarray(0,100);new Uint8Array(i.exports.memory.buffer,a,o.length).set(o),s.splice(0,s.length);try{i.exports.query(a,o.length,u,0)}catch(e){let n=t.get_last_error();throw n||`Error in WebAssembly module: ${e} (this probably shouldn't have happened)`}return console.log(`query took ${performance.now()-n}ms`),s.slice()},find_stroke:function(e){s.splice(0,s.length);const n=performance.now();try{i.exports.query(e,0,u,1)}catch(e){let n=t.get_last_error();throw n||`Error in WebAssembly module: ${e} (this probably shouldn't have happened)`}return console.log(`query took ${performance.now()-n}ms`),s.slice()},data:l}}function ft(t){let e,n,o,r,i,s,h,p=t[0].name+"";return{c(){e=u("div"),n=u("p"),o=d("Current file: "),r=d(p),i=f(),s=u("button"),s.textContent="Remove",m(n,"class","svelte-3s7iwy"),m(s,"class","svelte-3s7iwy"),m(e,"id","loaded"),m(e,"class","svelte-3s7iwy")},m(l,u,d){a(l,e,u),c(e,n),c(n,o),c(n,r),c(e,i),c(e,s),d&&h(),h=v(s,"click",t[6])},p(t,e){1&e&&p!==(p=t[0].name+"")&&g(r,p)},d(t){t&&l(e),h()}}}function ht(t){let e,n,o,r;function i(t,e){return"choosefile"==t[1]?pt:"error"==t[1]||"reading"==t[1]?vt:void 0}let s=i(t),c=s&&s(t);return{c(){e=u("input"),n=f(),c&&c.c(),o=h(),m(e,"type","file"),m(e,"class","svelte-3s7iwy")},m(i,s,l){a(i,e,s),a(i,n,s),c&&c.m(i,s),a(i,o,s),l&&r(),r=v(e,"change",t[11])},p(t,e){s===(s=i(t))&&c?c.p(t,e):(c&&c.d(1),c=s&&s(t),c&&(c.c(),c.m(o.parentNode,o)))},d(t){t&&l(e),t&&l(n),c&&c.d(t),t&&l(o),r()}}}function vt(t){let e,n,o,r,i=t[4]&&mt(t);return{c(){e=u("p"),n=d(t[3]),o=f(),i&&i.c(),r=h(),m(e,"class","svelte-3s7iwy")},m(t,s){a(t,e,s),c(e,n),a(t,o,s),i&&i.m(t,s),a(t,r,s)},p(t,e){8&e&&g(n,t[3]),t[4]?i?i.p(t,e):(i=mt(t),i.c(),i.m(r.parentNode,r)):i&&(i.d(1),i=null)},d(t){t&&l(e),t&&l(o),i&&i.d(t),t&&l(r)}}}function pt(e){let n,o,r;return{c(){n=u("p"),n.textContent="Please choose a dictionary from your device.",o=f(),r=u("p"),r.textContent="The dictionary will be stored inside of your browser, so you can access it when you load this page the next time. It will stay on your device only, and will not be sent anywhere else.",m(n,"class","svelte-3s7iwy"),m(r,"id","smallstatus"),m(r,"class","svelte-3s7iwy")},m(t,e){a(t,n,e),a(t,o,e),a(t,r,e)},p:t,d(t){t&&l(n),t&&l(o),t&&l(r)}}}function mt(t){let e,n;return{c(){e=u("p"),n=d(t[4]),m(e,"id","smallstatus"),m(e,"class","svelte-3s7iwy")},m(t,o){a(t,e,o),c(e,n)},p(t,e){16&e&&g(n,t[4])},d(t){t&&l(e)}}}function gt(t){let e,n,o,r,i,s,h=(t[2].date_checked?t[7].format(t[2].date_checked):"(unknown)")+"";return{c(){e=u("p"),n=d("Last checked: "),o=d(h),r=f(),i=u("button"),i.textContent="Check",m(e,"class","svelte-3s7iwy"),m(i,"class","svelte-3s7iwy")},m(l,u,d){a(l,e,u),c(e,n),c(e,o),a(l,r,u),a(l,i,u),d&&s(),s=v(i,"click",t[13])},p(t,e){4&e&&h!==(h=(t[2].date_checked?t[7].format(t[2].date_checked):"(unknown)")+"")&&g(o,h)},d(t){t&&l(e),t&&l(r),t&&l(i),s()}}}function wt(t){let e,n,o,r,i,s,h,p=it(t[2].update_size)+"";return{c(){e=u("p"),n=d("Update available ("),o=d(p),r=d(")"),i=f(),s=u("button"),s.textContent="Update!",m(e,"class","svelte-3s7iwy"),m(s,"class","svelte-3s7iwy")},m(l,u,d){a(l,e,u),c(e,n),c(e,o),c(e,r),a(l,i,u),a(l,s,u),d&&h(),h=v(s,"click",t[12])},p(t,e){4&e&&p!==(p=it(t[2].update_size)+"")&&g(o,p)},d(t){t&&l(e),t&&l(i),t&&l(s),h()}}}function bt(t){let e,n,o=t[2].serviceworker_info+"";return{c(){e=u("p"),n=d(o),m(e,"id","update-info"),m(e,"class","svelte-3s7iwy")},m(t,o){a(t,e,o),c(e,n)},p(t,e){4&e&&o!==(o=t[2].serviceworker_info+"")&&g(n,o)},d(t){t&&l(e)}}}function yt(e){let n,o,r,i,s,c;function d(t,e){return null===t[0]?ht:ft}let v=d(e),p=v(e);function g(t,e){return t[2].update_available?wt:gt}let w=g(e),b=w(e),y=e[2].serviceworker_info&&bt(e);return{c(){p.c(),n=f(),o=u("h2"),o.textContent="Updates",r=f(),i=u("div"),b.c(),s=f(),y&&y.c(),c=h(),m(o,"class","svelte-3s7iwy"),m(i,"id","updates"),m(i,"class","svelte-3s7iwy")},m(t,e){p.m(t,e),a(t,n,e),a(t,o,e),a(t,r,e),a(t,i,e),b.m(i,null),a(t,s,e),y&&y.m(t,e),a(t,c,e)},p(t,[e]){v===(v=d(t))&&p?p.p(t,e):(p.d(1),p=v(t),p&&(p.c(),p.m(n.parentNode,n))),w===(w=g(t))&&b?b.p(t,e):(b.d(1),b=w(t),b&&(b.c(),b.m(i,null))),t[2].serviceworker_info?y?y.p(t,e):(y=bt(t),y.c(),y.m(c.parentNode,c)):y&&(y.d(1),y=null)},i:t,o:t,d(t){p.d(t),t&&l(n),t&&l(o),t&&l(r),t&&l(i),b.d(),t&&l(s),y&&y.d(t),t&&l(c)}}}function _t(t,e,n){let{dictionary:o}=e,{status:r}=e,{app_status:i}=e,{update_info:s}=e,c="",a="",l=[];var u;function d(t){if(t.length>0){let e=t[0];if(e.size>10485760)n(1,r="error"),n(3,c="Sorry, we only accept files up to 10MB currently."),n(4,a="");else if("application/json"!=e.type)n(1,r="error"),n(3,c="Sorry, right now we can only read plover json dictionaries."),n(4,a="");else{n(1,r="reading"),n(3,c="Loading... 0%"),n(4,a="");let t=new FileReader;t.addEventListener("load",e=>f(t)),t.addEventListener("progress",t=>{let e=Math.floor(t.loaded/t.total*100);n(3,c=`Loading... ${e}%`)}),t.addEventListener("abort",t=>{n(1,r="error"),n(3,c="Aborted."),n(4,a="")}),t.addEventListener("error",t=>{n(1,r="error"),n(3,c="Your browser failed to load the file. Please try again."),n(4,a="")}),t.readAsText(e)}}}async function f(t){n(3,c="Organizing data..."),n(4,a="");try{n(0,o=await async function(t){lt();const e=await ut(st),n=e.instance,o=at.encode(t),r=Math.ceil(o.length/65536),i=n.exports.memory.grow(r),s=65536*i;console.log("number of base pages: "+i),new Uint8Array(n.exports.memory.buffer).subarray(s,s+o.length).set(o),console.log("before wasm");const c=performance.now();let a;try{a=n.exports.load_json(s,o.length)}catch(t){let n=e.get_last_error();throw n||`Error in WebAssembly module: ${t} (this probably shouldn't have happened)`}console.log(`after wasm (took ${performance.now()-c}ms)`);const l=new Uint32Array(n.exports.memory.buffer,a,5)[4];console.log(`data length: ${l}`);const u=new Uint8Array(n.exports.memory.buffer,a,l).slice();return dt(await ut(st),u)}(t.result))}catch(t){return console.log(t),n(1,r="error"),t.message||(t={message:"An error occured while trying to load your dictionary.",details:`${t}`}),n(3,c=t.message),void n(4,a=t.details)}n(0,o.name=l[0].name,o),await V("dictionary",{name:o.name,data:o.data}),n(1,r="loaded"),n(8,i="query"),n(3,c=""),n(4,a="")}u=async()=>{if("initializing"==r){let t=await Q("dictionary");if(t){try{n(0,o=await lt(t.data))}catch(t){return n(1,r="error"),n(3,c="Error occured while trying to load stored dictionary."),void n(4,a=`${t}`)}n(0,o.name=t.name,o),n(1,r="loaded"),n(8,i="query")}else n(1,r="choosefile")}},k().$$.on_mount.push(u);const h=new Intl.DateTimeFormat(void 0,{month:"long",day:"numeric",hour:"numeric",minute:"numeric"});return t.$set=t=>{"dictionary"in t&&n(0,o=t.dictionary),"status"in t&&n(1,r=t.status),"app_status"in t&&n(8,i=t.app_status),"update_info"in t&&n(2,s=t.update_info)},t.$$.update=()=>{32&t.$$.dirty&&d(l)},[o,r,s,c,a,l,async function(t){n(0,o=null),await function(t,e=J()){return e._withIDBStore("readwrite",e=>{e.delete(t)})}("dictionary"),n(1,r="choosefile")},h,i,d,f,function(){l=this.files,n(5,l)},t=>navigator.serviceWorker.controller.postMessage("do-update"),t=>navigator.serviceWorker.controller.postMessage("check-for-updates")]}class kt extends Y{constructor(t){super(),Z(this,t,_t,yt,i,{dictionary:0,status:1,app_status:8,update_info:2})}}function $t(t,e,n){const o=t.slice();return o[1]=e[n][0],o[2]=e[n][1],o}function xt(t){let e,n=t[0],o=[];for(let e=0;e<n.length;e+=1)o[e]=Et($t(t,n,e));return{c(){e=u("table");for(let t=0;t<o.length;t+=1)o[t].c();m(e,"class","svelte-1tqx9ii")},m(t,n){a(t,e,n);for(let t=0;t<o.length;t+=1)o[t].m(e,null)},p(t,r){if(1&r){let i;for(n=t[0],i=0;i<n.length;i+=1){const s=$t(t,n,i);o[i]?o[i].p(s,r):(o[i]=Et(s),o[i].c(),o[i].m(e,null))}for(;i<o.length;i+=1)o[i].d(1);o.length=n.length}},d(t){t&&l(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(o,t)}}}function At(e){let n;return{c(){n=u("p"),n.textContent="(no results)",m(n,"class","svelte-1tqx9ii")},m(t,e){a(t,n,e)},p:t,d(t){t&&l(n)}}}function Et(t){let e,n,o,r,i,s=t[1]+"",f=t[2]+"";return{c(){e=u("tr"),n=u("td"),o=d(s),r=u("td"),i=d(f),m(n,"class","strokes svelte-1tqx9ii"),m(r,"class","svelte-1tqx9ii"),m(e,"class","svelte-1tqx9ii")},m(t,s){a(t,e,s),c(e,n),c(n,o),c(e,r),c(r,i)},p(t,e){1&e&&s!==(s=t[1]+"")&&g(o,s),1&e&&f!==(f=t[2]+"")&&g(i,f)},d(t){t&&l(e)}}}function St(e){let n;function o(t,e){return 0==t[0].length?At:xt}let r=o(e),i=r(e);return{c(){i.c(),n=h()},m(t,e){i.m(t,e),a(t,n,e)},p(t,[e]){r===(r=o(t))&&i?i.p(t,e):(i.d(1),i=r(t),i&&(i.c(),i.m(n.parentNode,n)))},i:t,o:t,d(t){i.d(t),t&&l(n)}}}function Wt(t,e,n){let{results:o=[]}=e;return t.$set=t=>{"results"in t&&n(0,o=t.results)},[o]}class Tt extends Y{constructor(t){super(),Z(this,t,Wt,St,i,{results:0})}}function Ot(e){let n,o,r,i,s=e[2].message+"",v=e[2].details&&Pt(e);return{c(){n=u("p"),o=d(s),r=f(),v&&v.c(),i=h(),m(n,"id","bigerror"),m(n,"class","svelte-asd7nl")},m(t,e){a(t,n,e),c(n,o),a(t,r,e),v&&v.m(t,e),a(t,i,e)},p(t,e){4&e&&s!==(s=t[2].message+"")&&g(o,s),t[2].details?v?v.p(t,e):(v=Pt(t),v.c(),v.m(i.parentNode,i)):v&&(v.d(1),v=null)},i:t,o:t,d(t){t&&l(n),t&&l(r),v&&v.d(t),t&&l(i)}}}function qt(t){let e;const n=new Tt({props:{results:t[1]}});return{c(){I(n.$$.fragment)},m(t,o){K(n,t,o),e=!0},p(t,e){const o={};2&e&&(o.results=t[1]),n.$set(o)},i(t){e||(F(n.$$.fragment,t),e=!0)},o(t){z(n.$$.fragment,t),e=!1},d(t){G(n,t)}}}function Pt(t){let e,n,o=t[2].details+"";return{c(){e=u("p"),n=d(o),m(e,"id","smallerror"),m(e,"class","svelte-asd7nl")},m(t,o){a(t,e,o),c(e,n)},p(t,e){4&e&&o!==(o=t[2].details+"")&&g(n,o)},d(t){t&&l(e)}}}function Ct(t){let e,n,o,r,i,s,c;const d=[qt,Ot],p=[];function g(t,e){return void 0!==t[1]?0:t[2]?1:-1}return~(o=g(t))&&(r=p[o]=d[o](t)),{c(){e=u("input"),n=f(),r&&r.c(),i=h(),m(e,"type","text"),m(e,"class","svelte-asd7nl")},m(r,l,u){a(r,e,l),w(e,t[0]),a(r,n,l),~o&&p[o].m(r,l),a(r,i,l),s=!0,u&&c(),c=v(e,"input",t[5])},p(t,[n]){1&n&&e.value!==t[0]&&w(e,t[0]);let s=o;o=g(t),o===s?~o&&p[o].p(t,n):(r&&(D(),z(p[s],1,1,()=>{p[s]=null}),R()),~o?(r=p[o],r||(r=p[o]=d[o](t),r.c()),F(r,1),r.m(i.parentNode,i)):r=null)},i(t){s||(F(r),s=!0)},o(t){z(r),s=!1},d(t){t&&l(e),t&&l(n),~o&&p[o].d(t),t&&l(i),c()}}}function Nt(t,e,n){let o,{dictionary:r}=e,i="",s=[];function c(t){n(2,o=void 0),n(1,s=void 0);try{n(1,s=r.lookup(t)),console.log("asdf "+s)}catch(t){n(1,s=void 0),t.message?n(2,o=t):n(2,o={message:t.toString()})}}return t.$set=t=>{"dictionary"in t&&n(3,r=t.dictionary)},t.$$.update=()=>{1&t.$$.dirty&&c(i)},[i,s,o,r,c,function(){i=this.value,n(0,i)}]}class Ut extends Y{constructor(t){super(),Z(this,t,Nt,Ct,i,{dictionary:3})}}function Lt(e){let n,r,i,s,d,h,g,w,y,_,k,$,x,A,E,S,W,T,O,q,P,C,N,U,L,M,B,D,R,F,z,j,I,K,G,H,Z,Y,X,J,Q,V,tt,et,nt,ot,rt,it,st,ct,at;return{c(){n=u("div"),r=u("button"),i=f(),s=u("button"),d=f(),h=u("button"),g=f(),w=u("button"),y=f(),_=u("button"),k=f(),$=u("button"),x=f(),A=u("button"),E=f(),S=u("button"),W=f(),T=u("div"),O=u("button"),q=f(),P=u("div"),C=u("button"),N=f(),U=u("button"),L=f(),M=u("div"),B=u("button"),D=f(),R=u("div"),F=u("button"),z=f(),j=u("button"),I=f(),K=u("button"),G=f(),H=u("button"),Z=f(),Y=u("button"),X=f(),J=u("button"),Q=f(),V=u("button"),tt=f(),et=u("button"),nt=f(),ot=u("button"),rt=f(),it=u("button"),st=f(),ct=u("button"),m(r,"id","number"),m(r,"tabindex","-1"),m(r,"class","svelte-12in4xd"),b(r,"active",e[0]["#"]),m(s,"id","S-"),m(s,"class","long-key svelte-12in4xd"),m(s,"tabindex","-1"),b(s,"active",e[0]["S-"]),m(h,"id","T-"),m(h,"class","top-row svelte-12in4xd"),m(h,"tabindex","-1"),b(h,"active",e[0]["T-"]),m(w,"id","K-"),m(w,"class","bottom-row svelte-12in4xd"),m(w,"tabindex","-1"),b(w,"active",e[0]["K-"]),m(_,"id","P-"),m(_,"class","top-row svelte-12in4xd"),m(_,"tabindex","-1"),b(_,"active",e[0]["P-"]),m($,"id","W-"),m($,"class","bottom-row svelte-12in4xd"),m($,"tabindex","-1"),b($,"active",e[0]["W-"]),m(A,"id","H-"),m(A,"class","top-row svelte-12in4xd"),m(A,"tabindex","-1"),b(A,"active",e[0]["H-"]),m(S,"id","R-"),m(S,"class","bottom-row svelte-12in4xd"),m(S,"tabindex","-1"),b(S,"active",e[0]["R-"]),m(O,"id","A"),m(O,"class","left-vowel svelte-12in4xd"),m(O,"tabindex","-1"),b(O,"active",e[0].A),m(T,"id","A-"),m(T,"class","vowel-container svelte-12in4xd"),m(C,"id","O"),m(C,"class","left-vowel svelte-12in4xd"),m(C,"tabindex","-1"),b(C,"active",e[0].O),m(P,"id","O-"),m(P,"class","vowel-container svelte-12in4xd"),m(U,"id","star"),m(U,"class","long-key svelte-12in4xd"),m(U,"tabindex","-1"),b(U,"active",e[0]["*"]),m(B,"id","E"),m(B,"class","right-vowel svelte-12in4xd"),m(B,"tabindex","-1"),b(B,"active",e[0].E),m(M,"id","-E"),m(M,"class","vowel-container svelte-12in4xd"),m(F,"id","U"),m(F,"class","right-vowel svelte-12in4xd"),m(F,"tabindex","-1"),b(F,"active",e[0].U),m(R,"id","-U"),m(R,"class","vowel-container svelte-12in4xd"),m(j,"id","-F"),m(j,"class","top-row svelte-12in4xd"),m(j,"tabindex","-1"),b(j,"active",e[0]["-F"]),m(K,"id","-R"),m(K,"class","bottom-row svelte-12in4xd"),m(K,"tabindex","-1"),b(K,"active",e[0]["-R"]),m(H,"id","-P"),m(H,"class","top-row svelte-12in4xd"),m(H,"tabindex","-1"),b(H,"active",e[0]["-P"]),m(Y,"id","-B"),m(Y,"class","bottom-row svelte-12in4xd"),m(Y,"tabindex","-1"),b(Y,"active",e[0]["-B"]),m(J,"id","-L"),m(J,"class","top-row svelte-12in4xd"),m(J,"tabindex","-1"),b(J,"active",e[0]["-L"]),m(V,"id","-G"),m(V,"class","bottom-row svelte-12in4xd"),m(V,"tabindex","-1"),b(V,"active",e[0]["-G"]),m(et,"id","-T"),m(et,"class","top-row svelte-12in4xd"),m(et,"tabindex","-1"),b(et,"active",e[0]["-T"]),m(ot,"id","-S"),m(ot,"class","bottom-row svelte-12in4xd"),m(ot,"tabindex","-1"),b(ot,"active",e[0]["-S"]),m(it,"id","-D"),m(it,"class","top-row svelte-12in4xd"),m(it,"tabindex","-1"),b(it,"active",e[0]["-D"]),m(ct,"id","-Z"),m(ct,"class","bottom-row svelte-12in4xd"),m(ct,"tabindex","-1"),b(ct,"active",e[0]["-Z"]),m(n,"id","steno-keyboard"),m(n,"aria-hidden","true"),m(n,"class","svelte-12in4xd")},m(t,l,u){a(t,n,l),c(n,r),c(n,i),c(n,s),c(n,d),c(n,h),c(n,g),c(n,w),c(n,y),c(n,_),c(n,k),c(n,$),c(n,x),c(n,A),c(n,E),c(n,S),c(n,W),c(n,T),c(T,O),c(n,q),c(n,P),c(P,C),c(n,N),c(n,U),c(n,L),c(n,M),c(M,B),c(n,D),c(n,R),c(R,F),c(n,z),c(n,j),c(n,I),c(n,K),c(n,G),c(n,H),c(n,Z),c(n,Y),c(n,X),c(n,J),c(n,Q),c(n,V),c(n,tt),c(n,et),c(n,nt),c(n,ot),c(n,rt),c(n,it),c(n,st),c(n,ct),u&&o(at),at=[v(r,"click",e[4]),v(r,"touchstart",p(e[1])),v(r,"touchmove",e[2]),v(r,"touchend",e[3]),v(r,"touchcancel",e[3]),v(s,"click",e[4]),v(s,"touchstart",p(e[1])),v(s,"touchmove",e[2]),v(s,"touchend",e[3]),v(s,"touchcancel",e[3]),v(h,"click",e[4]),v(h,"touchstart",p(e[1])),v(h,"touchmove",e[2]),v(h,"touchend",e[3]),v(h,"touchcancel",e[3]),v(w,"click",e[4]),v(w,"touchstart",p(e[1])),v(w,"touchmove",e[2]),v(w,"touchend",e[3]),v(w,"touchcancel",e[3]),v(_,"click",e[4]),v(_,"touchstart",p(e[1])),v(_,"touchmove",e[2]),v(_,"touchend",e[3]),v(_,"touchcancel",e[3]),v($,"click",e[4]),v($,"touchstart",p(e[1])),v($,"touchmove",e[2]),v($,"touchend",e[3]),v($,"touchcancel",e[3]),v(A,"click",e[4]),v(A,"touchstart",p(e[1])),v(A,"touchmove",e[2]),v(A,"touchend",e[3]),v(A,"touchcancel",e[3]),v(S,"click",e[4]),v(S,"touchstart",p(e[1])),v(S,"touchmove",e[2]),v(S,"touchend",e[3]),v(S,"touchcancel",e[3]),v(O,"click",e[4]),v(O,"touchstart",p(e[1])),v(O,"touchmove",e[2]),v(O,"touchend",e[3]),v(O,"touchcancel",e[3]),v(C,"click",e[4]),v(C,"touchstart",p(e[1])),v(C,"touchmove",e[2]),v(C,"touchend",e[3]),v(C,"touchcancel",e[3]),v(U,"click",e[4]),v(U,"touchstart",p(e[1])),v(U,"touchmove",e[2]),v(U,"touchend",e[3]),v(U,"touchcancel",e[3]),v(B,"click",e[4]),v(B,"touchstart",p(e[1])),v(B,"touchmove",e[2]),v(B,"touchend",e[3]),v(B,"touchcancel",e[3]),v(F,"click",e[4]),v(F,"touchstart",p(e[1])),v(F,"touchmove",e[2]),v(F,"touchend",e[3]),v(F,"touchcancel",e[3]),v(j,"click",e[4]),v(j,"touchstart",p(e[1])),v(j,"touchmove",e[2]),v(j,"touchend",e[3]),v(j,"touchcancel",e[3]),v(K,"click",e[4]),v(K,"touchstart",p(e[1])),v(K,"touchmove",e[2]),v(K,"touchend",e[3]),v(K,"touchcancel",e[3]),v(H,"click",e[4]),v(H,"touchstart",p(e[1])),v(H,"touchmove",e[2]),v(H,"touchend",e[3]),v(H,"touchcancel",e[3]),v(Y,"click",e[4]),v(Y,"touchstart",p(e[1])),v(Y,"touchmove",e[2]),v(Y,"touchend",e[3]),v(Y,"touchcancel",e[3]),v(J,"click",e[4]),v(J,"touchstart",p(e[1])),v(J,"touchmove",e[2]),v(J,"touchend",e[3]),v(J,"touchcancel",e[3]),v(V,"click",e[4]),v(V,"touchstart",p(e[1])),v(V,"touchmove",e[2]),v(V,"touchend",e[3]),v(V,"touchcancel",e[3]),v(et,"click",e[4]),v(et,"touchstart",p(e[1])),v(et,"touchmove",e[2]),v(et,"touchend",e[3]),v(et,"touchcancel",e[3]),v(ot,"click",e[4]),v(ot,"touchstart",p(e[1])),v(ot,"touchmove",e[2]),v(ot,"touchend",e[3]),v(ot,"touchcancel",e[3]),v(it,"click",e[4]),v(it,"touchstart",p(e[1])),v(it,"touchmove",e[2]),v(it,"touchend",e[3]),v(it,"touchcancel",e[3]),v(ct,"click",e[4]),v(ct,"touchstart",p(e[1])),v(ct,"touchmove",e[2]),v(ct,"touchend",e[3]),v(ct,"touchcancel",e[3])]},p(t,[e]){1&e&&b(r,"active",t[0]["#"]),1&e&&b(s,"active",t[0]["S-"]),1&e&&b(h,"active",t[0]["T-"]),1&e&&b(w,"active",t[0]["K-"]),1&e&&b(_,"active",t[0]["P-"]),1&e&&b($,"active",t[0]["W-"]),1&e&&b(A,"active",t[0]["H-"]),1&e&&b(S,"active",t[0]["R-"]),1&e&&b(O,"active",t[0].A),1&e&&b(C,"active",t[0].O),1&e&&b(U,"active",t[0]["*"]),1&e&&b(B,"active",t[0].E),1&e&&b(F,"active",t[0].U),1&e&&b(j,"active",t[0]["-F"]),1&e&&b(K,"active",t[0]["-R"]),1&e&&b(H,"active",t[0]["-P"]),1&e&&b(Y,"active",t[0]["-B"]),1&e&&b(J,"active",t[0]["-L"]),1&e&&b(V,"active",t[0]["-G"]),1&e&&b(et,"active",t[0]["-T"]),1&e&&b(ot,"active",t[0]["-S"]),1&e&&b(it,"active",t[0]["-D"]),1&e&&b(ct,"active",t[0]["-Z"])},i:t,o:t,d(t){t&&l(n),o(at)}}}function Mt(t,e,n){const o=["#","S-","T-","K-","P-","W-","H-","R-","A","O","*","E","U","-F","-R","-P","-B","-L","-G","-T","-S","-D","-Z"],r={number:"#",star:"*"};let i={};for(const t of o)i[t]=!1;let{stroke:s=0}=e;const c=$();function a(){c("strokeChanged",{stroke:nt(Object.entries(i).filter(([t,e])=>e).map(([t,e])=>t))})}let l={};return t.$set=t=>{"stroke"in t&&n(5,s=t.stroke)},t.$$.update=()=>{32&t.$$.dirty&&n(0,i=function(t){let e={};for(const n of tt)e[n]=1&t,t>>=1;return e}(s))},[i,function(t){t.touches;for(let e=0;e<t.touches.length;e++){let o=t.touches[e];if(!l.hasOwnProperty(o.identifier)){let e=r[t.target.id]||t.target.id;n(0,i[e]^=!0,i);let s=i[e];console.log(`new touch with mode ${s}`),l[o.identifier]={x:o.clientX,y:o.clientY,mode:s}}}a()},function(t){let e=t.changedTouches,o=!1;for(let t=0;t<e.length;t++){let s=e[t],c=l[s.identifier];if(!c)continue;let a=window.innerWidth/20,u=s.clientX-c.x,d=s.clientY-c.y,f=Math.sqrt(u**2+d**2),h=u/f*a,v=d/f*a;for(;f>0;){let t=c.x+u,e=c.y+d;f-=a,u-=h,d-=v;let s=document.elementFromPoint(t,e),l=r[s.id]||s.id;i.hasOwnProperty(l)&&i[l]!=c.mode&&(n(0,i[l]=c.mode,i),o=!0)}c.x=s.clientX,c.y=s.clientY}o&&a()},function(t){let e=t.changedTouches;for(let t=0;t<e.length;t++)delete l[e[t].identifier]},function(t){const e=r[t.target.id]||t.target.id;n(0,i[e]^=!0,i),a()},s]}class Bt extends Y{constructor(t){super(),Z(this,t,Mt,Lt,i,{stroke:5})}}function Dt(e){let n,o,r,i,s=e[3].message+"",v=e[3].details&&Ft(e);return{c(){n=u("p"),o=d(s),r=f(),v&&v.c(),i=h(),m(n,"id","bigerror")},m(t,e){a(t,n,e),c(n,o),a(t,r,e),v&&v.m(t,e),a(t,i,e)},p(t,e){8&e&&s!==(s=t[3].message+"")&&g(o,s),t[3].details?v?v.p(t,e):(v=Ft(t),v.c(),v.m(i.parentNode,i)):v&&(v.d(1),v=null)},i:t,o:t,d(t){t&&l(n),t&&l(r),v&&v.d(t),t&&l(i)}}}function Rt(t){let e;const n=new Tt({props:{results:t[2]}});return{c(){I(n.$$.fragment)},m(t,o){K(n,t,o),e=!0},p(t,e){const o={};4&e&&(o.results=t[2]),n.$set(o)},i(t){e||(F(n.$$.fragment,t),e=!0)},o(t){z(n.$$.fragment,t),e=!1},d(t){G(n,t)}}}function Ft(t){let e,n,o=t[3].details+"";return{c(){e=u("p"),n=d(o),m(e,"id","smallerror"),m(e,"class","svelte-y68lui")},m(t,o){a(t,e,o),c(e,n)},p(t,e){8&e&&o!==(o=t[3].details+"")&&g(n,o)},d(t){t&&l(e)}}}function zt(t){let e,n,o,r,i,s,c,d,p;function g(e){t[9].call(null,e)}let w={};void 0!==t[0]&&(w.stroke=t[0]);const b=new Bt({props:w});A.push(()=>j(b,"stroke",g)),b.$on("strokeChanged",t[5]);const y=[Rt,Dt],_=[];function k(t,e){return void 0!==t[2]?0:t[3]?1:-1}return~(i=k(t))&&(s=_[i]=y[i](t)),{c(){I(b.$$.fragment),n=f(),o=u("input"),r=f(),s&&s.c(),c=h(),m(o,"type","text"),m(o,"class","svelte-y68lui")},m(e,s,l){K(b,e,s),a(e,n,s),a(e,o,s),t[10](o),a(e,r,s),~i&&_[i].m(e,s),a(e,c,s),d=!0,l&&p(),p=v(o,"input",t[4])},p(t,[n]){const o={};!e&&1&n&&(e=!0,o.stroke=t[0],q(()=>e=!1)),b.$set(o);let r=i;i=k(t),i===r?~i&&_[i].p(t,n):(s&&(D(),z(_[r],1,1,()=>{_[r]=null}),R()),~i?(s=_[i],s||(s=_[i]=y[i](t),s.c()),F(s,1),s.m(c.parentNode,c)):s=null)},i(t){d||(F(b.$$.fragment,t),F(s),d=!0)},o(t){z(b.$$.fragment,t),z(s),d=!1},d(e){G(b,e),e&&l(n),e&&l(o),t[10](null),e&&l(r),~i&&_[i].d(e),e&&l(c),p()}}}function jt(t,e,n){let o,r,{dictionary:i}=e,s=0,c="",a=[];async function l(){n(3,r=void 0),n(2,a=void 0);try{n(2,a=i.find_stroke(s))}catch(t){n(2,a=void 0),t.message?n(3,r=t):n(3,r={message:t.toString()})}}return t.$set=t=>{"dictionary"in t&&n(6,i=t.dictionary)},[s,o,a,r,function(t){const e=t.target.value;e!=c&&(c=e,n(0,s=function(t){let e=!1,n=0;for(const o of t){if("-"==o){e=!0;continue}let t=tt.indexOf(o);if(0==t);else if(t>0)e=!0;else if(t=e?tt.indexOf("-"+o):tt.indexOf(o+"-"),t<0){const e=et[o];if(!e){console.log("invalid key!");continue}n|=1,t=tt.indexOf(e)}n|=1<<t}return n}(c.toUpperCase())),l())},function(t){n(0,s=t.detail.stroke),c=ot(s),n(1,o.value=c,o),l()},i,c,l,function(t){s=t,n(0,s)},function(t){A[t?"unshift":"push"](()=>{n(1,o=t)})}]}class It extends Y{constructor(t){super(),Z(this,t,jt,zt,i,{dictionary:6})}}function Kt(t){let e,n;return{c(){e=u("img"),e.src!==(n="abc-icon.svg")&&m(e,"src","abc-icon.svg"),m(e,"alt","lookup"),m(e,"class","svelte-1sfhune")},m(t,n){a(t,e,n)},d(t){t&&l(e)}}}function Gt(t){let e,n;return{c(){e=u("img"),e.src!==(n="STK-icon.svg")&&m(e,"src","STK-icon.svg"),m(e,"alt","find stroke"),m(e,"class","svelte-1sfhune")},m(t,n){a(t,e,n)},d(t){t&&l(e)}}}function Ht(t){let e;return{c(){e=u("div"),m(e,"id","notification-marker"),m(e,"class","svelte-1sfhune")},m(t,n){a(t,e,n)},d(t){t&&l(e)}}}function Zt(t){let e,n,o,r;const i=[Qt,Jt],s=[];function c(t,e){return null===t[4]?0:1}return e=c(t),n=s[e]=i[e](t),{c(){n.c(),o=h()},m(t,n){s[e].m(t,n),a(t,o,n),r=!0},p(t,r){let a=e;e=c(t),e===a?s[e].p(t,r):(D(),z(s[a],1,1,()=>{s[a]=null}),R(),n=s[e],n||(n=s[e]=i[e](t),n.c()),F(n,1),n.m(o.parentNode,o))},i(t){r||(F(n),r=!0)},o(t){z(n),r=!1},d(t){s[e].d(t),t&&l(o)}}}function Yt(t){let e,n,o,r;const i=[te,Vt],s=[];function c(t,e){return null===t[4]?0:1}return e=c(t),n=s[e]=i[e](t),{c(){n.c(),o=h()},m(t,n){s[e].m(t,n),a(t,o,n),r=!0},p(t,r){let a=e;e=c(t),e===a?s[e].p(t,r):(D(),z(s[a],1,1,()=>{s[a]=null}),R(),n=s[e],n||(n=s[e]=i[e](t),n.c()),F(n,1),n.m(o.parentNode,o))},i(t){r||(F(n),r=!0)},o(t){z(n),r=!1},d(t){s[e].d(t),t&&l(o)}}}function Xt(t){let e,n,o,r,i;function s(e){t[9].call(null,e)}function c(e){t[10].call(null,e)}function a(e){t[11].call(null,e)}function l(e){t[12].call(null,e)}let u={};void 0!==t[4]&&(u.dictionary=t[4]),void 0!==t[2]&&(u.update_info=t[2]),void 0!==t[1]&&(u.status=t[1]),void 0!==t[0]&&(u.app_status=t[0]);const d=new kt({props:u});return A.push(()=>j(d,"dictionary",s)),A.push(()=>j(d,"update_info",c)),A.push(()=>j(d,"status",a)),A.push(()=>j(d,"app_status",l)),{c(){I(d.$$.fragment)},m(t,e){K(d,t,e),i=!0},p(t,i){const s={};!e&&16&i&&(e=!0,s.dictionary=t[4],q(()=>e=!1)),!n&&4&i&&(n=!0,s.update_info=t[2],q(()=>n=!1)),!o&&2&i&&(o=!0,s.status=t[1],q(()=>o=!1)),!r&&1&i&&(r=!0,s.app_status=t[0],q(()=>r=!1)),d.$set(s)},i(t){i||(F(d.$$.fragment,t),i=!0)},o(t){z(d.$$.fragment,t),i=!1},d(t){G(d,t)}}}function Jt(t){let e,n;function o(e){t[14].call(null,e)}let r={};void 0!==t[4]&&(r.dictionary=t[4]);const i=new It({props:r});return A.push(()=>j(i,"dictionary",o)),{c(){I(i.$$.fragment)},m(t,e){K(i,t,e),n=!0},p(t,n){const o={};!e&&16&n&&(e=!0,o.dictionary=t[4],q(()=>e=!1)),i.$set(o)},i(t){n||(F(i.$$.fragment,t),n=!0)},o(t){z(i.$$.fragment,t),n=!1},d(t){G(i,t)}}}function Qt(e){let n,o;return{c(){n=d("// TODO: un-duplicate this code\n        "),o=u("p"),o.textContent="No dictionary loaded.",m(o,"id","nodict"),m(o,"class","svelte-1sfhune")},m(t,e){a(t,n,e),a(t,o,e)},p:t,i:t,o:t,d(t){t&&l(n),t&&l(o)}}}function Vt(t){let e,n;function o(e){t[13].call(null,e)}let r={};void 0!==t[4]&&(r.dictionary=t[4]);const i=new Ut({props:r});return A.push(()=>j(i,"dictionary",o)),{c(){I(i.$$.fragment)},m(t,e){K(i,t,e),n=!0},p(t,n){const o={};!e&&16&n&&(e=!0,o.dictionary=t[4],q(()=>e=!1)),i.$set(o)},i(t){n||(F(i.$$.fragment,t),n=!0)},o(t){z(i.$$.fragment,t),n=!1},d(t){G(i,t)}}}function te(e){let n;return{c(){n=u("p"),n.textContent="No dictionary loaded.",m(n,"id","nodict"),m(n,"class","svelte-1sfhune")},m(t,e){a(t,n,e)},p:t,i:t,o:t,d(t){t&&l(n)}}}function ee(t){let e,n,r,i,h,p,w,b,y,_,k,$,x,A,E,S,W,T,O,q,P,C,N,U,L,M,B,j,I,K=t[5][t[0]]+"";function G(t,e){return"query"==t[0]?Gt:Kt}let H=G(t),Z=H(t),Y=t[2].new_version&&"unknown"!=t[2].user_knows_about_this_version&&t[2].user_knows_about_this_version!=t[2].new_version&&Ht();const X=[Xt,Yt,Zt],J=[];function Q(t,e){return"load-dict"==t[0]?0:"query"==t[0]?1:"find-stroke"==t[0]?2:-1}return~(W=Q(t))&&(T=J[W]=X[W](t)),{c(){e=u("div"),n=u("header"),r=u("h1"),i=d(K),h=f(),p=u("button"),Z.c(),b=f(),y=u("button"),_=u("img"),$=f(),Y&&Y.c(),E=f(),S=u("main"),T&&T.c(),O=f(),q=u("p"),P=d("App version: 0.0.16"),C=u("br"),N=d("Updater version: "),U=d(t[3]),L=u("br"),M=d("File a bug or contribute to development on "),B=u("a"),B.textContent="github",m(r,"class","svelte-1sfhune"),m(p,"id","switch"),p.disabled=w=null==t[4],m(p,"class","svelte-1sfhune"),_.src!==(k="load-icon.svg")&&m(_,"src","load-icon.svg"),m(_,"alt","load"),m(_,"class","svelte-1sfhune"),m(y,"id","load"),m(y,"class",x=s("load-dict"==t[0]?"selected":"")+" svelte-1sfhune"),y.disabled=A=null==t[4],m(n,"class","svelte-1sfhune"),m(B,"href","https://github.com/antoniusf/steno-lookup"),m(B,"target","_blank"),m(q,"id","version-info"),m(q,"class","svelte-1sfhune"),m(e,"id","container"),m(e,"class","svelte-1sfhune")},m(s,l,u){a(s,e,l),c(e,n),c(n,r),c(r,i),c(n,h),c(n,p),Z.m(p,null),c(n,b),c(n,y),c(y,_),c(y,$),Y&&Y.m(y,null),c(e,E),c(e,S),~W&&J[W].m(S,null),c(e,O),c(e,q),c(q,P),c(q,C),c(q,N),c(q,U),c(q,L),c(q,M),c(q,B),j=!0,u&&o(I),I=[v(p,"click",t[8]),v(y,"click",t[6])]},p(t,[e]){(!j||1&e)&&K!==(K=t[5][t[0]]+"")&&g(i,K),H!==(H=G(t))&&(Z.d(1),Z=H(t),Z&&(Z.c(),Z.m(p,null))),(!j||16&e&&w!==(w=null==t[4]))&&(p.disabled=w),t[2].new_version&&"unknown"!=t[2].user_knows_about_this_version&&t[2].user_knows_about_this_version!=t[2].new_version?Y||(Y=Ht(),Y.c(),Y.m(y,null)):Y&&(Y.d(1),Y=null),(!j||1&e&&x!==(x=s("load-dict"==t[0]?"selected":"")+" svelte-1sfhune"))&&m(y,"class",x),(!j||16&e&&A!==(A=null==t[4]))&&(y.disabled=A);let n=W;W=Q(t),W===n?~W&&J[W].p(t,e):(T&&(D(),z(J[n],1,1,()=>{J[n]=null}),R()),~W?(T=J[W],T||(T=J[W]=X[W](t),T.c()),F(T,1),T.m(S,null)):T=null),(!j||8&e)&&g(U,t[3])},i(t){j||(F(T),j=!0)},o(t){z(T),j=!1},d(t){t&&l(e),Z.d(),Y&&Y.d(),~W&&J[W].d(),o(I)}}}function ne(t,e,n){let o="load-dict",r="initializing",i={},s="(unknown)",c=null;const a=Symbol("version_unknown");Q("user-knows-about-this-version").then(t=>{n(2,i.user_knows_about_this_version=t||a,i)}),"serviceWorker"in navigator&&(navigator.serviceWorker.register("serviceworker.js").then(t=>{console.log("Service worker registration successful.")}).catch(t=>{console.log("Service worker registration failed: "+t)}),navigator.serviceWorker.addEventListener("message",t=>{"version-info"==t.data.type?n(3,s=t.data.serviceworker_version):"update-info"==t.data.type?(i.user_knows_about_this_version==a&&(n(2,i.user_knows_about_this_version=t.data.current_version,i),V("user-knows-about-this-version",t.data.current_version)),"up-to-date"==t.data.status?n(2,i.update_available=!1,i):"available"==t.data.status?(n(2,i.update_available=!0,i),n(2,i.new_version=t.data.new_version,i),"load-dict"==o&&"initializing"!=r&&"reading"!=r&&(n(2,i.user_knows_about_this_version=t.data.new_version,i),V("user-knows-about-this-version",t.data.new_version))):"installed"==t.data.status&&(n(2,i.update_available=!1,i),n(2,i.user_knows_about_this_version=t.data.version,i),V("user-knows-about-this-version",t.data.version),window.location.reload()),n(2,i.date_checked=t.data.date_checked,i),n(2,i.update_size=t.data.update_size,i),n(2,i.new_version=t.data.new_version,i),console.log(JSON.stringify(i,null,2))):"serviceworker-info"==t.data.type&&(n(2,i.serviceworker_info=t.data.text,i),console.log(i.serviceworker_info))}),navigator.serviceWorker.controller&&(navigator.serviceWorker.controller.postMessage("get-version"),navigator.serviceWorker.controller.postMessage("get-update-info"),navigator.serviceWorker.controller.postMessage("check-for-updates")));return[o,r,i,s,c,{"load-dict":"Load",query:"Lookup","find-stroke":"Find Stroke"},async function(t){"load-dict"==o?n(0,o="query"):"query"!=o&&"find-stroke"!=o||(n(0,o="load-dict"),i.new_version&&i.user_knows_about_this_version!=i.new_version&&(n(2,i.user_knows_about_this_version=i.new_version,i),await V("user-knows-about-this-version",i.new_version)))},a,t=>{n(0,o="query"==o?"find-stroke":"query")},function(t){c=t,n(4,c)},function(t){i=t,n(2,i)},function(t){r=t,n(1,r)},function(t){o=t,n(0,o)},function(t){c=t,n(4,c)},function(t){c=t,n(4,c)}]}return new class extends Y{constructor(t){super(),Z(this,t,ne,ee,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
