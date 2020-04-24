var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function c(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t){return null==t?"":t}function s(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function f(){return d(" ")}function h(){return d("")}function p(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function m(t){return function(e){return e.preventDefault(),t.call(this,e)}}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e){e=""+e,t.data!==e&&(t.data=e)}function b(t,e){(null!=e||t.value)&&(t.value=e)}function y(t,e,n){t.classList[n?"add":"remove"](e)}let w;function $(t){w=t}function x(){if(!w)throw new Error("Function called outside component initialization");return w}function k(){const t=x();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const c=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);o.slice().forEach(e=>{e.call(t,c)})}}}const _=[],A=[],E=[],S=[],W=Promise.resolve();let T=!1;function O(t){E.push(t)}function P(t){S.push(t)}let C=!1;const L=new Set;function U(){if(!C){C=!0;do{for(let t=0;t<_.length;t+=1){const e=_[t];$(e),q(e.$$)}for(_.length=0;A.length;)A.pop()();for(let t=0;t<E.length;t+=1){const e=E[t];L.has(e)||(L.add(e),e())}E.length=0}while(_.length);for(;S.length;)S.pop()();T=!1,C=!1,L.clear()}}function q(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const M=new Set;let N,j;function B(){N={r:0,c:[],p:N}}function D(){N.r||o(N.c),N=N.p}function R(t,e){t&&t.i&&(M.delete(t),t.i(e))}function F(t,e,n,o){if(t&&t.o){if(M.has(t))return;M.add(t),N.c.push(()=>{M.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function z(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}function K(t){t&&t.c()}function G(t,n,r){const{fragment:i,on_mount:s,on_destroy:a,after_update:l}=t.$$;i&&i.m(n,r),O(()=>{const n=s.map(e).filter(c);a?a.push(...n):o(n),t.$$.on_mount=[]}),l.forEach(O)}function H(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function I(t,e){-1===t.$$.dirty[0]&&(_.push(t),T||(T=!0,W.then(U)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Z(e,c,r,i,s,a,u=[-1]){const d=w;$(e);const f=c.props||{},h=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:u};let p=!1;if(h.ctx=r?r(e,f,(t,n,...o)=>{const c=o.length?o[0]:n;return h.ctx&&s(h.ctx[t],h.ctx[t]=c)&&(h.bound[t]&&h.bound[t](c),p&&I(e,t)),n}):[],h.update(),p=!0,o(h.before_update),h.fragment=!!i&&i(h.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);h.fragment&&h.fragment.l(t),t.forEach(l)}else h.fragment&&h.fragment.c();c.intro&&R(e.$$.fragment),G(e,c.target,c.anchor),U()}$(d)}class Y{$destroy(){H(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}class X{constructor(t="keyval-store",e="keyval"){this.storeName=e,this._dbp=new Promise((n,o)=>{const c=indexedDB.open(t,1);c.onerror=()=>o(c.error),c.onsuccess=()=>n(c.result),c.onupgradeneeded=()=>{c.result.createObjectStore(e)}})}_withIDBStore(t,e){return this._dbp.then(n=>new Promise((o,c)=>{const r=n.transaction(this.storeName,t);r.oncomplete=()=>o(),r.onabort=r.onerror=()=>c(r.error),e(r.objectStore(this.storeName))}))}}function J(){return j||(j=new X),j}const Q=["#","S-","T-","K-","P-","W-","H-","R-","A","O","*","E","U","-F","-R","-P","-B","-L","-G","-T","-S","-D","-Z"],V={0:"O-",1:"S-",2:"T-",3:"P-",4:"H-",5:"A-",6:"-F",7:"-P",8:"-L",9:"-T"};function tt(t){let e=0,n=1;for(const o of Q)t.includes(o)&&(e|=n),n<<=1;return e}function et(t){let e="",n=!0;for(const o of Q)1&t&&("-"==o[0]&&n&&(e+="-",n=!1),e+=o.replace("-",""),o.includes("-")||"#"==o||(n=!1)),t>>=1;return e}function nt(t){let e=[];for(let n=0;n<t.length;n+=3){let o=t[n]|t[n+1]<<8|t[n+2]<<16;e.push(et(o))}return e.join("/")}function ot(t){if(t<0)throw RangeError("File size must be larger than 0!");let e=Math.log10(t)/3;e+=Math.log10(1e3/995)/3,e+=1/3,e=Math.floor(e);const n=Math.round(t/1e3**e*10)/10,o=["","k","M","G","T","P","E"];return e<o.length?n+" "+o[e]+"B":n+"e"+3*e+" B"}let ct,rt=new TextDecoder("utf-8"),it=new TextEncoder("utf-8");async function st(t){let e="./helpers.wasm";if(ct||(ct=WebAssembly.compileStreaming?WebAssembly.compileStreaming(fetch(e)).catch(t=>{throw`Oh no, there was a problem with loading the WebAssembly module. This is not good, since we can't do anything without that. (${t})`}):fetch(e).catch(t=>{throw`Couldn't load the wasm file for some reason. Sorry, this shouldn't happen. (${t})`}).then(t=>t.arrayBuffer()).then(t=>WebAssembly.compile(t)).catch(t=>{throw t instanceof TypeError?`Sorry, it seems like your browser does not support WebAssembly. We need this to make your queries fast while using as little of your precious RAM as possible. WebAssembly should be supported in the newest versions of all major browsers, except for Internet Explorer. (${t})`:t})),t){return lt(await at(ct),t)}}async function at(t){let e,n,o=[];let c=await WebAssembly.instantiate(await t,{env:{logErr:function(t,o,c){if(e){const r=new Uint8Array(e.buffer,t,o);console.log("WebAssembly module panicked with '"+rt.decode(r)+"' on line "+c+"\nraw buffer: "+r),n=rt.decode(r)}else console.log("Warning: logErr got called, but memory was not initialized??")},yield_result:function(t,n,c,r){let i=rt.decode(new Uint8Array(e.buffer,t,n)),s=new Uint8Array(e.buffer,c,r);o.push([nt(s),i])}}});return e=c.exports.memory,{instance:c,results:o,get_last_error:function(){return n}}}function lt(t,e){let n=e.length;const o=n+100,c=Math.ceil(o/65536);let r=t.instance,i=t.results;const s=65536*r.exports.memory.grow(c),a=s+n;let l=new Uint8Array(r.exports.memory.buffer,s,n);l.set(e);let u=s;return{lookup:function(e){const n=performance.now(),o=it.encode(e).subarray(0,100);new Uint8Array(r.exports.memory.buffer,a,o.length).set(o),i.splice(0,i.length);try{r.exports.query(a,o.length,u,0)}catch(e){let n=t.get_last_error();throw n?`Error in WebAssembly module: ${n} (${e})`:`Error in WebAssembly module: ${e} (this probably shouldn't have happened)`}return console.log(`query took ${performance.now()-n}ms`),i.slice()},find_stroke:function(e){i.splice(0,i.length);const n=performance.now();try{r.exports.query(e,0,u,1)}catch(e){let n=t.get_last_error();throw n?`Error in WebAssembly module: ${n} (${e})`:`Error in WebAssembly module: ${e} (this probably shouldn't have happened)`}return console.log(`query took ${performance.now()-n}ms`),i.slice()},data:l}}function ut(t){let e,n,o,c,r,i,h,m=t[0].name+"";return{c(){e=u("div"),n=u("p"),o=d("Current file: "),c=d(m),r=f(),i=u("button"),i.textContent="Remove",v(n,"class","svelte-1naghfu"),v(i,"class","svelte-1naghfu"),v(e,"id","loaded"),v(e,"class","svelte-1naghfu")},m(l,u,d){a(l,e,u),s(e,n),s(n,o),s(n,c),s(e,r),s(e,i),d&&h(),h=p(i,"click",t[5])},p(t,e){1&e&&m!==(m=t[0].name+"")&&g(c,m)},d(t){t&&l(e),h()}}}function dt(t){let e,n,o,c;function r(t,e){return"choosefile"==t[1]?ht:"error"==t[1]||"reading"==t[1]?ft:void 0}let i=r(t),s=i&&i(t);return{c(){e=u("input"),n=f(),s&&s.c(),o=h(),v(e,"type","file"),v(e,"class","svelte-1naghfu")},m(r,i,l){a(r,e,i),a(r,n,i),s&&s.m(r,i),a(r,o,i),l&&c(),c=p(e,"change",t[11])},p(t,e){i===(i=r(t))&&s?s.p(t,e):(s&&s.d(1),s=i&&i(t),s&&(s.c(),s.m(o.parentNode,o)))},d(t){t&&l(e),t&&l(n),s&&s.d(t),t&&l(o),c()}}}function ft(t){let e,n;return{c(){e=u("p"),n=d(t[3]),v(e,"class","svelte-1naghfu")},m(t,o){a(t,e,o),s(e,n)},p(t,e){8&e&&g(n,t[3])},d(t){t&&l(e)}}}function ht(e){let n;return{c(){n=u("p"),n.textContent="Please choose a dictionary from your device.",v(n,"class","svelte-1naghfu")},m(t,e){a(t,n,e)},p:t,d(t){t&&l(n)}}}function pt(t){let e,n,o,c,r,i,h=(t[2].date_checked?t[6].format(t[2].date_checked):"(unknown)")+"";return{c(){e=u("p"),n=d("Last checked: "),o=d(h),c=f(),r=u("button"),r.textContent="Check",v(e,"class","svelte-1naghfu"),v(r,"class","svelte-1naghfu")},m(l,u,d){a(l,e,u),s(e,n),s(e,o),a(l,c,u),a(l,r,u),d&&i(),i=p(r,"click",t[13])},p(t,e){4&e&&h!==(h=(t[2].date_checked?t[6].format(t[2].date_checked):"(unknown)")+"")&&g(o,h)},d(t){t&&l(e),t&&l(c),t&&l(r),i()}}}function mt(t){let e,n,o,c,r,i,h,m=ot(t[2].update_size)+"";return{c(){e=u("p"),n=d("Update available ("),o=d(m),c=d(")"),r=f(),i=u("button"),i.textContent="Update!",v(e,"class","svelte-1naghfu"),v(i,"class","svelte-1naghfu")},m(l,u,d){a(l,e,u),s(e,n),s(e,o),s(e,c),a(l,r,u),a(l,i,u),d&&h(),h=p(i,"click",t[12])},p(t,e){4&e&&m!==(m=ot(t[2].update_size)+"")&&g(o,m)},d(t){t&&l(e),t&&l(r),t&&l(i),h()}}}function vt(t){let e,n,o=t[2].serviceworker_info+"";return{c(){e=u("p"),n=d(o),v(e,"id","update-info"),v(e,"class","svelte-1naghfu")},m(t,o){a(t,e,o),s(e,n)},p(t,e){4&e&&o!==(o=t[2].serviceworker_info+"")&&g(n,o)},d(t){t&&l(e)}}}function gt(e){let n,o,c,r,i,s;function d(t,e){return null===t[0]?dt:ut}let p=d(e),m=p(e);function g(t,e){return t[2].update_available?mt:pt}let b=g(e),y=b(e),w=e[2].serviceworker_info&&vt(e);return{c(){m.c(),n=f(),o=u("h2"),o.textContent="Updates",c=f(),r=u("div"),y.c(),i=f(),w&&w.c(),s=h(),v(o,"class","svelte-1naghfu"),v(r,"id","updates"),v(r,"class","svelte-1naghfu")},m(t,e){m.m(t,e),a(t,n,e),a(t,o,e),a(t,c,e),a(t,r,e),y.m(r,null),a(t,i,e),w&&w.m(t,e),a(t,s,e)},p(t,[e]){p===(p=d(t))&&m?m.p(t,e):(m.d(1),m=p(t),m&&(m.c(),m.m(n.parentNode,n))),b===(b=g(t))&&y?y.p(t,e):(y.d(1),y=b(t),y&&(y.c(),y.m(r,null))),t[2].serviceworker_info?w?w.p(t,e):(w=vt(t),w.c(),w.m(s.parentNode,s)):w&&(w.d(1),w=null)},i:t,o:t,d(t){m.d(t),t&&l(n),t&&l(o),t&&l(c),t&&l(r),y.d(),t&&l(i),w&&w.d(t),t&&l(s)}}}function bt(t,e,n){const o=k();let{dictionary:c}=e,{status:r}=e,{update_info:i}=e,s="",a=[];var l;function u(t){if(t.length>0){let e=t[0];if(e.size>10485760)n(1,r="error"),n(3,s="Sorry, we only accept files up to 10MB currently.");else if("application/json"!=e.type)n(1,r="error"),n(3,s="Sorry, right now we can only read plover json dictionaries.");else{n(1,r="reading"),n(3,s="Loading... 0%");let t=new FileReader;t.addEventListener("load",e=>d(t)),t.addEventListener("progress",t=>{readprogress=Math.floor(t.loaded/t.total*100),n(3,s=`Loading... ${readprogress}%`)}),t.addEventListener("abort",t=>{n(1,r="error"),n(3,s="Aborted.")}),t.addEventListener("error",t=>{n(1,r="error"),n(3,s="Your browser failed to load the file. Please try again.")}),t.readAsText(e)}}}async function d(t){n(3,s="Organizing data...");try{n(0,c=await async function(t){st();const e=await at(ct),n=e.instance,o=it.encode(t),c=Math.ceil(o.length/65536),r=n.exports.memory.grow(c),i=65536*r;console.log("number of base pages: "+r),new Uint8Array(n.exports.memory.buffer).subarray(i,i+o.length).set(o),console.log("before wasm");const s=performance.now();let a;try{a=n.exports.load_json(i,o.length)}catch(t){let n=e.get_last_error();throw n?`Error in WebAssembly module: ${n} (${t})`:`Error in WebAssembly module: ${t} (this probably shouldn't have happened)`}console.log(`after wasm (took ${performance.now()-s}ms)`);const l=new Uint32Array(n.exports.memory.buffer,a,5)[4];console.log(`data length: ${l}`);const u=new Uint8Array(n.exports.memory.buffer,a,l).slice();return lt(await at(ct),u)}(t.result))}catch(t){return console.log(t),n(1,r="error"),void n(3,s=`An error occured while trying to load your dictionary: ${t}`)}n(0,c.name=a[0].name,c),await function(t,e,n=J()){return n._withIDBStore("readwrite",n=>{n.put(e,t)})}("dictionary",{name:c.name,data:c.data}),n(1,r="loaded"),n(3,s=""),f()}function f(){o("message",{status:"done"})}l=async()=>{if("initializing"==r){let t=await function(t,e=J()){let n;return e._withIDBStore("readonly",e=>{n=e.get(t)}).then(()=>n.result)}("dictionary");if(t){try{n(0,c=await st(t.data))}catch(t){return n(1,r="error"),void n(3,s=`Error occured while trying to load stored dictionary: ${t}`)}n(0,c.name=t.name,c),n(1,r="loaded"),f()}else n(1,r="choosefile")}},x().$$.on_mount.push(l);const h=new Intl.DateTimeFormat(void 0,{month:"long",day:"numeric",hour:"numeric",minute:"numeric"});return t.$set=t=>{"dictionary"in t&&n(0,c=t.dictionary),"status"in t&&n(1,r=t.status),"update_info"in t&&n(2,i=t.update_info)},t.$$.update=()=>{16&t.$$.dirty&&u(a)},[c,r,i,s,a,async function(t){n(0,c=null),await function(t,e=J()){return e._withIDBStore("readwrite",e=>{e.delete(t)})}("dictionary"),n(1,r="choosefile")},h,o,u,d,f,function(){a=this.files,n(4,a)},t=>navigator.serviceWorker.controller.postMessage("do-update"),t=>navigator.serviceWorker.controller.postMessage("check-for-updates")]}class yt extends Y{constructor(t){super(),Z(this,t,bt,gt,r,{dictionary:0,status:1,update_info:2})}}function wt(t,e,n){const o=t.slice();return o[1]=e[n][0],o[2]=e[n][1],o}function $t(t){let e,n,o,c,r,i=t[1]+"",f=t[2]+"";return{c(){e=u("tr"),n=u("td"),o=d(i),c=u("td"),r=d(f),v(n,"class","strokes svelte-8j6iim"),v(c,"class","svelte-8j6iim"),v(e,"class","svelte-8j6iim")},m(t,i){a(t,e,i),s(e,n),s(n,o),s(e,c),s(c,r)},p(t,e){1&e&&i!==(i=t[1]+"")&&g(o,i),1&e&&f!==(f=t[2]+"")&&g(r,f)},d(t){t&&l(e)}}}function xt(e){let n,o=e[0],c=[];for(let t=0;t<o.length;t+=1)c[t]=$t(wt(e,o,t));return{c(){n=u("table");for(let t=0;t<c.length;t+=1)c[t].c();v(n,"class","svelte-8j6iim")},m(t,e){a(t,n,e);for(let t=0;t<c.length;t+=1)c[t].m(n,null)},p(t,[e]){if(1&e){let r;for(o=t[0],r=0;r<o.length;r+=1){const i=wt(t,o,r);c[r]?c[r].p(i,e):(c[r]=$t(i),c[r].c(),c[r].m(n,null))}for(;r<c.length;r+=1)c[r].d(1);c.length=o.length}},i:t,o:t,d(t){t&&l(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(c,t)}}}function kt(t,e,n){let{results:o=[]}=e;return t.$set=t=>{"results"in t&&n(0,o=t.results)},[o]}class _t extends Y{constructor(t){super(),Z(this,t,kt,xt,r,{results:0})}}function At(e){let n;return{c(){n=u("p"),n.textContent="query running...",v(n,"class","svelte-unsio3")},m(t,e){a(t,n,e)},p:t,i:t,o:t,d(t){t&&l(n)}}}function Et(e){let n,o;return{c(){n=u("p"),o=d(e[2]),v(n,"class","svelte-unsio3")},m(t,e){a(t,n,e),s(n,o)},p(t,e){4&e&&g(o,t[2])},i:t,o:t,d(t){t&&l(n)}}}function St(t){let e;const n=new _t({props:{results:t[1]}});return{c(){K(n.$$.fragment)},m(t,o){G(n,t,o),e=!0},p(t,e){const o={};2&e&&(o.results=t[1]),n.$set(o)},i(t){e||(R(n.$$.fragment,t),e=!0)},o(t){F(n.$$.fragment,t),e=!1},d(t){H(n,t)}}}function Wt(t){let e,n,o,c,r,i,s;const d=[St,Et,At],m=[];function g(t,e){return t[1]?0:t[2]?1:2}return o=g(t),c=m[o]=d[o](t),{c(){e=u("input"),n=f(),c.c(),r=h(),v(e,"type","text"),v(e,"class","svelte-unsio3")},m(c,l,u){a(c,e,l),b(e,t[0]),a(c,n,l),m[o].m(c,l),a(c,r,l),i=!0,u&&s(),s=p(e,"input",t[5])},p(t,[n]){1&n&&e.value!==t[0]&&b(e,t[0]);let i=o;o=g(t),o===i?m[o].p(t,n):(B(),F(m[i],1,1,()=>{m[i]=null}),D(),c=m[o],c||(c=m[o]=d[o](t),c.c()),R(c,1),c.m(r.parentNode,r))},i(t){i||(R(c),i=!0)},o(t){F(c),i=!1},d(t){t&&l(e),t&&l(n),m[o].d(t),t&&l(r),s()}}}function Tt(t,e,n){let o,c,{dictionary:r}=e,i="";function s(t){n(2,c=void 0);try{n(1,o=r.lookup(t))}catch(t){n(1,o=void 0),n(2,c=t)}}return t.$set=t=>{"dictionary"in t&&n(3,r=t.dictionary)},t.$$.update=()=>{1&t.$$.dirty&&s(i)},[i,o,c,r,s,function(){i=this.value,n(0,i)}]}class Ot extends Y{constructor(t){super(),Z(this,t,Tt,Wt,r,{dictionary:3})}}function Pt(e){let n,c,r,i,d,h,g,b,w,$,x,k,_,A,E,S,W,T,O,P,C,L,U,q,M,N,j,B,D,R,F,z,K,G,H,I,Z,Y,X,J,Q,V,tt,et,nt,ot,ct,rt,it,st,at;return{c(){n=u("div"),c=u("button"),r=f(),i=u("button"),d=f(),h=u("button"),g=f(),b=u("button"),w=f(),$=u("button"),x=f(),k=u("button"),_=f(),A=u("button"),E=f(),S=u("button"),W=f(),T=u("div"),O=u("button"),P=f(),C=u("div"),L=u("button"),U=f(),q=u("button"),M=f(),N=u("div"),j=u("button"),B=f(),D=u("div"),R=u("button"),F=f(),z=u("button"),K=f(),G=u("button"),H=f(),I=u("button"),Z=f(),Y=u("button"),X=f(),J=u("button"),Q=f(),V=u("button"),tt=f(),et=u("button"),nt=f(),ot=u("button"),ct=f(),rt=u("button"),it=f(),st=u("button"),v(c,"id","number"),v(c,"tabindex","-1"),v(c,"class","svelte-12in4xd"),y(c,"active",e[0]["#"]),v(i,"id","S-"),v(i,"class","long-key svelte-12in4xd"),v(i,"tabindex","-1"),y(i,"active",e[0]["S-"]),v(h,"id","T-"),v(h,"class","top-row svelte-12in4xd"),v(h,"tabindex","-1"),y(h,"active",e[0]["T-"]),v(b,"id","K-"),v(b,"class","bottom-row svelte-12in4xd"),v(b,"tabindex","-1"),y(b,"active",e[0]["K-"]),v($,"id","P-"),v($,"class","top-row svelte-12in4xd"),v($,"tabindex","-1"),y($,"active",e[0]["P-"]),v(k,"id","W-"),v(k,"class","bottom-row svelte-12in4xd"),v(k,"tabindex","-1"),y(k,"active",e[0]["W-"]),v(A,"id","H-"),v(A,"class","top-row svelte-12in4xd"),v(A,"tabindex","-1"),y(A,"active",e[0]["H-"]),v(S,"id","R-"),v(S,"class","bottom-row svelte-12in4xd"),v(S,"tabindex","-1"),y(S,"active",e[0]["R-"]),v(O,"id","A"),v(O,"class","left-vowel svelte-12in4xd"),v(O,"tabindex","-1"),y(O,"active",e[0].A),v(T,"id","A-"),v(T,"class","vowel-container svelte-12in4xd"),v(L,"id","O"),v(L,"class","left-vowel svelte-12in4xd"),v(L,"tabindex","-1"),y(L,"active",e[0].O),v(C,"id","O-"),v(C,"class","vowel-container svelte-12in4xd"),v(q,"id","star"),v(q,"class","long-key svelte-12in4xd"),v(q,"tabindex","-1"),y(q,"active",e[0]["*"]),v(j,"id","E"),v(j,"class","right-vowel svelte-12in4xd"),v(j,"tabindex","-1"),y(j,"active",e[0].E),v(N,"id","-E"),v(N,"class","vowel-container svelte-12in4xd"),v(R,"id","U"),v(R,"class","right-vowel svelte-12in4xd"),v(R,"tabindex","-1"),y(R,"active",e[0].U),v(D,"id","-U"),v(D,"class","vowel-container svelte-12in4xd"),v(z,"id","-F"),v(z,"class","top-row svelte-12in4xd"),v(z,"tabindex","-1"),y(z,"active",e[0]["-F"]),v(G,"id","-R"),v(G,"class","bottom-row svelte-12in4xd"),v(G,"tabindex","-1"),y(G,"active",e[0]["-R"]),v(I,"id","-P"),v(I,"class","top-row svelte-12in4xd"),v(I,"tabindex","-1"),y(I,"active",e[0]["-P"]),v(Y,"id","-B"),v(Y,"class","bottom-row svelte-12in4xd"),v(Y,"tabindex","-1"),y(Y,"active",e[0]["-B"]),v(J,"id","-L"),v(J,"class","top-row svelte-12in4xd"),v(J,"tabindex","-1"),y(J,"active",e[0]["-L"]),v(V,"id","-G"),v(V,"class","bottom-row svelte-12in4xd"),v(V,"tabindex","-1"),y(V,"active",e[0]["-G"]),v(et,"id","-T"),v(et,"class","top-row svelte-12in4xd"),v(et,"tabindex","-1"),y(et,"active",e[0]["-T"]),v(ot,"id","-S"),v(ot,"class","bottom-row svelte-12in4xd"),v(ot,"tabindex","-1"),y(ot,"active",e[0]["-S"]),v(rt,"id","-D"),v(rt,"class","top-row svelte-12in4xd"),v(rt,"tabindex","-1"),y(rt,"active",e[0]["-D"]),v(st,"id","-Z"),v(st,"class","bottom-row svelte-12in4xd"),v(st,"tabindex","-1"),y(st,"active",e[0]["-Z"]),v(n,"id","steno-keyboard"),v(n,"aria-hidden","true"),v(n,"class","svelte-12in4xd")},m(t,l,u){a(t,n,l),s(n,c),s(n,r),s(n,i),s(n,d),s(n,h),s(n,g),s(n,b),s(n,w),s(n,$),s(n,x),s(n,k),s(n,_),s(n,A),s(n,E),s(n,S),s(n,W),s(n,T),s(T,O),s(n,P),s(n,C),s(C,L),s(n,U),s(n,q),s(n,M),s(n,N),s(N,j),s(n,B),s(n,D),s(D,R),s(n,F),s(n,z),s(n,K),s(n,G),s(n,H),s(n,I),s(n,Z),s(n,Y),s(n,X),s(n,J),s(n,Q),s(n,V),s(n,tt),s(n,et),s(n,nt),s(n,ot),s(n,ct),s(n,rt),s(n,it),s(n,st),u&&o(at),at=[p(c,"click",e[4]),p(c,"touchstart",m(e[1])),p(c,"touchmove",e[2]),p(c,"touchend",e[3]),p(c,"touchcancel",e[3]),p(i,"click",e[4]),p(i,"touchstart",m(e[1])),p(i,"touchmove",e[2]),p(i,"touchend",e[3]),p(i,"touchcancel",e[3]),p(h,"click",e[4]),p(h,"touchstart",m(e[1])),p(h,"touchmove",e[2]),p(h,"touchend",e[3]),p(h,"touchcancel",e[3]),p(b,"click",e[4]),p(b,"touchstart",m(e[1])),p(b,"touchmove",e[2]),p(b,"touchend",e[3]),p(b,"touchcancel",e[3]),p($,"click",e[4]),p($,"touchstart",m(e[1])),p($,"touchmove",e[2]),p($,"touchend",e[3]),p($,"touchcancel",e[3]),p(k,"click",e[4]),p(k,"touchstart",m(e[1])),p(k,"touchmove",e[2]),p(k,"touchend",e[3]),p(k,"touchcancel",e[3]),p(A,"click",e[4]),p(A,"touchstart",m(e[1])),p(A,"touchmove",e[2]),p(A,"touchend",e[3]),p(A,"touchcancel",e[3]),p(S,"click",e[4]),p(S,"touchstart",m(e[1])),p(S,"touchmove",e[2]),p(S,"touchend",e[3]),p(S,"touchcancel",e[3]),p(O,"click",e[4]),p(O,"touchstart",m(e[1])),p(O,"touchmove",e[2]),p(O,"touchend",e[3]),p(O,"touchcancel",e[3]),p(L,"click",e[4]),p(L,"touchstart",m(e[1])),p(L,"touchmove",e[2]),p(L,"touchend",e[3]),p(L,"touchcancel",e[3]),p(q,"click",e[4]),p(q,"touchstart",m(e[1])),p(q,"touchmove",e[2]),p(q,"touchend",e[3]),p(q,"touchcancel",e[3]),p(j,"click",e[4]),p(j,"touchstart",m(e[1])),p(j,"touchmove",e[2]),p(j,"touchend",e[3]),p(j,"touchcancel",e[3]),p(R,"click",e[4]),p(R,"touchstart",m(e[1])),p(R,"touchmove",e[2]),p(R,"touchend",e[3]),p(R,"touchcancel",e[3]),p(z,"click",e[4]),p(z,"touchstart",m(e[1])),p(z,"touchmove",e[2]),p(z,"touchend",e[3]),p(z,"touchcancel",e[3]),p(G,"click",e[4]),p(G,"touchstart",m(e[1])),p(G,"touchmove",e[2]),p(G,"touchend",e[3]),p(G,"touchcancel",e[3]),p(I,"click",e[4]),p(I,"touchstart",m(e[1])),p(I,"touchmove",e[2]),p(I,"touchend",e[3]),p(I,"touchcancel",e[3]),p(Y,"click",e[4]),p(Y,"touchstart",m(e[1])),p(Y,"touchmove",e[2]),p(Y,"touchend",e[3]),p(Y,"touchcancel",e[3]),p(J,"click",e[4]),p(J,"touchstart",m(e[1])),p(J,"touchmove",e[2]),p(J,"touchend",e[3]),p(J,"touchcancel",e[3]),p(V,"click",e[4]),p(V,"touchstart",m(e[1])),p(V,"touchmove",e[2]),p(V,"touchend",e[3]),p(V,"touchcancel",e[3]),p(et,"click",e[4]),p(et,"touchstart",m(e[1])),p(et,"touchmove",e[2]),p(et,"touchend",e[3]),p(et,"touchcancel",e[3]),p(ot,"click",e[4]),p(ot,"touchstart",m(e[1])),p(ot,"touchmove",e[2]),p(ot,"touchend",e[3]),p(ot,"touchcancel",e[3]),p(rt,"click",e[4]),p(rt,"touchstart",m(e[1])),p(rt,"touchmove",e[2]),p(rt,"touchend",e[3]),p(rt,"touchcancel",e[3]),p(st,"click",e[4]),p(st,"touchstart",m(e[1])),p(st,"touchmove",e[2]),p(st,"touchend",e[3]),p(st,"touchcancel",e[3])]},p(t,[e]){1&e&&y(c,"active",t[0]["#"]),1&e&&y(i,"active",t[0]["S-"]),1&e&&y(h,"active",t[0]["T-"]),1&e&&y(b,"active",t[0]["K-"]),1&e&&y($,"active",t[0]["P-"]),1&e&&y(k,"active",t[0]["W-"]),1&e&&y(A,"active",t[0]["H-"]),1&e&&y(S,"active",t[0]["R-"]),1&e&&y(O,"active",t[0].A),1&e&&y(L,"active",t[0].O),1&e&&y(q,"active",t[0]["*"]),1&e&&y(j,"active",t[0].E),1&e&&y(R,"active",t[0].U),1&e&&y(z,"active",t[0]["-F"]),1&e&&y(G,"active",t[0]["-R"]),1&e&&y(I,"active",t[0]["-P"]),1&e&&y(Y,"active",t[0]["-B"]),1&e&&y(J,"active",t[0]["-L"]),1&e&&y(V,"active",t[0]["-G"]),1&e&&y(et,"active",t[0]["-T"]),1&e&&y(ot,"active",t[0]["-S"]),1&e&&y(rt,"active",t[0]["-D"]),1&e&&y(st,"active",t[0]["-Z"])},i:t,o:t,d(t){t&&l(n),o(at)}}}function Ct(t,e,n){const o=["#","S-","T-","K-","P-","W-","H-","R-","A","O","*","E","U","-F","-R","-P","-B","-L","-G","-T","-S","-D","-Z"],c={number:"#",star:"*"};let r={};for(const t of o)r[t]=!1;let{stroke:i=0}=e;const s=k();function a(){s("strokeChanged",{stroke:tt(Object.entries(r).filter(([t,e])=>e).map(([t,e])=>t))})}let l={};return t.$set=t=>{"stroke"in t&&n(5,i=t.stroke)},t.$$.update=()=>{32&t.$$.dirty&&n(0,r=function(t){let e={};for(const n of Q)e[n]=1&t,t>>=1;return e}(i))},[r,function(t){t.touches;for(let e=0;e<t.touches.length;e++){let o=t.touches[e];if(!l.hasOwnProperty(o.identifier)){let e=c[t.target.id]||t.target.id;n(0,r[e]^=!0,r);let i=r[e];console.log(`new touch with mode ${i}`),l[o.identifier]={x:o.clientX,y:o.clientY,mode:i}}}a()},function(t){let e=t.changedTouches,o=!1;for(let t=0;t<e.length;t++){let i=e[t],s=l[i.identifier];if(!s)continue;let a=window.innerWidth/20,u=i.clientX-s.x,d=i.clientY-s.y,f=Math.sqrt(u**2+d**2),h=u/f*a,p=d/f*a;for(;f>0;){let t=s.x+u,e=s.y+d;f-=a,u-=h,d-=p;let i=document.elementFromPoint(t,e),l=c[i.id]||i.id;r.hasOwnProperty(l)&&r[l]!=s.mode&&(n(0,r[l]=s.mode,r),o=!0)}s.x=i.clientX,s.y=i.clientY}o&&a()},function(t){let e=t.changedTouches;for(let t=0;t<e.length;t++)delete l[e[t].identifier]},function(t){const e=c[t.target.id]||t.target.id;n(0,r[e]^=!0,r),a()},i]}class Lt extends Y{constructor(t){super(),Z(this,t,Ct,Pt,r,{stroke:5})}}function Ut(e){let n,o;return{c(){n=u("p"),o=d(e[3])},m(t,e){a(t,n,e),s(n,o)},p(t,e){8&e&&g(o,t[3])},i:t,o:t,d(t){t&&l(n)}}}function qt(t){let e;const n=new _t({props:{results:t[2]}});return{c(){K(n.$$.fragment)},m(t,o){G(n,t,o),e=!0},p(t,e){const o={};4&e&&(o.results=t[2]),n.$set(o)},i(t){e||(R(n.$$.fragment,t),e=!0)},o(t){F(n.$$.fragment,t),e=!1},d(t){H(n,t)}}}function Mt(t){let e,n,o,c,r,i,s,d,m;function g(e){t[9].call(null,e)}let b={};void 0!==t[0]&&(b.stroke=t[0]);const y=new Lt({props:b});A.push(()=>z(y,"stroke",g)),y.$on("strokeChanged",t[5]);const w=[qt,Ut],$=[];function x(t,e){return t[2]?0:t[3]?1:-1}return~(r=x(t))&&(i=$[r]=w[r](t)),{c(){K(y.$$.fragment),n=f(),o=u("input"),c=f(),i&&i.c(),s=h(),v(o,"type","text"),v(o,"class","svelte-1tq738s")},m(e,i,l){G(y,e,i),a(e,n,i),a(e,o,i),t[10](o),a(e,c,i),~r&&$[r].m(e,i),a(e,s,i),d=!0,l&&m(),m=p(o,"input",t[4])},p(t,[n]){const o={};!e&&1&n&&(e=!0,o.stroke=t[0],P(()=>e=!1)),y.$set(o);let c=r;r=x(t),r===c?~r&&$[r].p(t,n):(i&&(B(),F($[c],1,1,()=>{$[c]=null}),D()),~r?(i=$[r],i||(i=$[r]=w[r](t),i.c()),R(i,1),i.m(s.parentNode,s)):i=null)},i(t){d||(R(y.$$.fragment,t),R(i),d=!0)},o(t){F(y.$$.fragment,t),F(i),d=!1},d(e){H(y,e),e&&l(n),e&&l(o),t[10](null),e&&l(c),~r&&$[r].d(e),e&&l(s),m()}}}function Nt(t,e,n){let o,c,r,{dictionary:i}=e,s=0,a="";async function l(){n(3,r=void 0);try{n(2,c=i.find_stroke(s))}catch(t){n(2,c=void 0),n(3,r=t)}}return t.$set=t=>{"dictionary"in t&&n(6,i=t.dictionary)},[s,o,c,r,function(t){const e=t.target.value;e!=a&&(a=e,n(0,s=function(t){let e=!1,n=0;for(const o of t){if("-"==o){e=!0;continue}let t=Q.indexOf(o);if(0==t);else if(t>0)e=!0;else if(t=e?Q.indexOf("-"+o):Q.indexOf(o+"-"),t<0){const e=V[o];if(!e){console.log("invalid key!");continue}n|=1,t=Q.indexOf(e)}n|=1<<t}return n}(a.toUpperCase())),l())},function(t){n(0,s=t.detail.stroke),a=et(s),n(1,o.value=a,o),l()},i,a,l,function(t){s=t,n(0,s)},function(t){A[t?"unshift":"push"](()=>{n(1,o=t)})}]}class jt extends Y{constructor(t){super(),Z(this,t,Nt,Mt,r,{dictionary:6})}}function Bt(t){let e,n;return{c(){e=u("img"),e.src!==(n="abc-icon.svg")&&v(e,"src","abc-icon.svg"),v(e,"alt","lookup"),v(e,"class","svelte-15nssnf")},m(t,n){a(t,e,n)},d(t){t&&l(e)}}}function Dt(t){let e,n;return{c(){e=u("img"),e.src!==(n="STK-icon.svg")&&v(e,"src","STK-icon.svg"),v(e,"alt","find stroke"),v(e,"class","svelte-15nssnf")},m(t,n){a(t,e,n)},d(t){t&&l(e)}}}function Rt(t){let e,n,o,c;const r=[Gt,Kt],i=[];function s(t,e){return null===t[4]?0:1}return e=s(t),n=i[e]=r[e](t),{c(){n.c(),o=h()},m(t,n){i[e].m(t,n),a(t,o,n),c=!0},p(t,c){let a=e;e=s(t),e===a?i[e].p(t,c):(B(),F(i[a],1,1,()=>{i[a]=null}),D(),n=i[e],n||(n=i[e]=r[e](t),n.c()),R(n,1),n.m(o.parentNode,o))},i(t){c||(R(n),c=!0)},o(t){F(n),c=!1},d(t){i[e].d(t),t&&l(o)}}}function Ft(t){let e,n,o,c;const r=[It,Ht],i=[];function s(t,e){return null===t[4]?0:1}return e=s(t),n=i[e]=r[e](t),{c(){n.c(),o=h()},m(t,n){i[e].m(t,n),a(t,o,n),c=!0},p(t,c){let a=e;e=s(t),e===a?i[e].p(t,c):(B(),F(i[a],1,1,()=>{i[a]=null}),D(),n=i[e],n||(n=i[e]=r[e](t),n.c()),R(n,1),n.m(o.parentNode,o))},i(t){c||(R(n),c=!0)},o(t){F(n),c=!1},d(t){i[e].d(t),t&&l(o)}}}function zt(t){let e,n,o,c;function r(e){t[8].call(null,e)}function i(e){t[9].call(null,e)}function s(e){t[10].call(null,e)}let a={};void 0!==t[4]&&(a.dictionary=t[4]),void 0!==t[3]&&(a.update_info=t[3]),void 0!==t[2]&&(a.status=t[2]);const l=new yt({props:a});return A.push(()=>z(l,"dictionary",r)),A.push(()=>z(l,"update_info",i)),A.push(()=>z(l,"status",s)),l.$on("message",t[11]),{c(){K(l.$$.fragment)},m(t,e){G(l,t,e),c=!0},p(t,c){const r={};!e&&16&c&&(e=!0,r.dictionary=t[4],P(()=>e=!1)),!n&&8&c&&(n=!0,r.update_info=t[3],P(()=>n=!1)),!o&&4&c&&(o=!0,r.status=t[2],P(()=>o=!1)),l.$set(r)},i(t){c||(R(l.$$.fragment,t),c=!0)},o(t){F(l.$$.fragment,t),c=!1},d(t){H(l,t)}}}function Kt(t){let e,n;function o(e){t[13].call(null,e)}let c={};void 0!==t[4]&&(c.dictionary=t[4]);const r=new jt({props:c});return A.push(()=>z(r,"dictionary",o)),{c(){K(r.$$.fragment)},m(t,e){G(r,t,e),n=!0},p(t,n){const o={};!e&&16&n&&(e=!0,o.dictionary=t[4],P(()=>e=!1)),r.$set(o)},i(t){n||(R(r.$$.fragment,t),n=!0)},o(t){F(r.$$.fragment,t),n=!1},d(t){H(r,t)}}}function Gt(e){let n,o;return{c(){n=d("// TODO: un-duplicate this code\n        "),o=u("p"),o.textContent="No dictionary loaded.",v(o,"id","nodict"),v(o,"class","svelte-15nssnf")},m(t,e){a(t,n,e),a(t,o,e)},p:t,i:t,o:t,d(t){t&&l(n),t&&l(o)}}}function Ht(t){let e,n;function o(e){t[12].call(null,e)}let c={};void 0!==t[4]&&(c.dictionary=t[4]);const r=new Ot({props:c});return A.push(()=>z(r,"dictionary",o)),{c(){K(r.$$.fragment)},m(t,e){G(r,t,e),n=!0},p(t,n){const o={};!e&&16&n&&(e=!0,o.dictionary=t[4],P(()=>e=!1)),r.$set(o)},i(t){n||(R(r.$$.fragment,t),n=!0)},o(t){F(r.$$.fragment,t),n=!1},d(t){H(r,t)}}}function It(e){let n;return{c(){n=u("p"),n.textContent="No dictionary loaded.",v(n,"id","nodict"),v(n,"class","svelte-15nssnf")},m(t,e){a(t,n,e)},p:t,i:t,o:t,d(t){t&&l(n)}}}function Zt(t){let e,n,c,r,h,m,b,y,w,$,x,k,_,A,E,S,W,T,O,P,C,L,U,q,M,N,j,z,K=t[5][t[1]]+"";function G(t,e){return"query"==t[1]?Dt:Bt}let H=G(t),I=H(t);const Z=[zt,Ft,Rt],Y=[];function X(t,e){return"load-dict"==t[1]?0:"query"==t[1]?1:"find-stroke"==t[1]?2:-1}return~(S=X(t))&&(W=Y[S]=Z[S](t)),{c(){e=u("div"),n=u("header"),c=u("h1"),r=d(K),h=f(),m=u("button"),I.c(),y=f(),w=u("button"),$=u("img"),A=f(),E=u("main"),W&&W.c(),T=f(),O=u("p"),P=d("App version: 0.0.12"),C=u("br"),L=d("Service worker version: "),U=d(t[0]),q=u("br"),M=d("File a bug or contribute to development on "),N=u("a"),N.textContent="github",v(c,"class","svelte-15nssnf"),v(m,"id","switch"),m.disabled=b=null==t[4],v(m,"class","svelte-15nssnf"),$.src!==(x="load-icon.svg")&&v($,"src","load-icon.svg"),v($,"alt","load"),v($,"class","svelte-15nssnf"),v(w,"id","load"),v(w,"class",k=i("load-dict"==t[1]?"selected":"")+" svelte-15nssnf"),w.disabled=_=null==t[4],v(n,"class","svelte-15nssnf"),v(N,"href","https://github.com/antoniusf/steno-lookup"),v(N,"target","_blank"),v(O,"id","version-info"),v(O,"class","svelte-15nssnf"),v(e,"id","container"),v(e,"class","svelte-15nssnf")},m(i,l,u){a(i,e,l),s(e,n),s(n,c),s(c,r),s(n,h),s(n,m),I.m(m,null),s(n,y),s(n,w),s(w,$),s(e,A),s(e,E),~S&&Y[S].m(E,null),s(e,T),s(e,O),s(O,P),s(O,C),s(O,L),s(O,U),s(O,q),s(O,M),s(O,N),j=!0,u&&o(z),z=[p(m,"click",t[7]),p(w,"click",t[6])]},p(t,[e]){(!j||2&e)&&K!==(K=t[5][t[1]]+"")&&g(r,K),H!==(H=G(t))&&(I.d(1),I=H(t),I&&(I.c(),I.m(m,null))),(!j||16&e&&b!==(b=null==t[4]))&&(m.disabled=b),(!j||2&e&&k!==(k=i("load-dict"==t[1]?"selected":"")+" svelte-15nssnf"))&&v(w,"class",k),(!j||16&e&&_!==(_=null==t[4]))&&(w.disabled=_);let n=S;S=X(t),S===n?~S&&Y[S].p(t,e):(W&&(B(),F(Y[n],1,1,()=>{Y[n]=null}),D()),~S?(W=Y[S],W||(W=Y[S]=Z[S](t),W.c()),R(W,1),W.m(E,null)):W=null),(!j||1&e)&&g(U,t[0])},i(t){j||(R(W),j=!0)},o(t){F(W),j=!1},d(t){t&&l(e),I.d(),~S&&Y[S].d(),o(z)}}}function Yt(t,e,n){let o="(unknown)";"serviceWorker"in navigator&&(navigator.serviceWorker.register("serviceworker.js").then(t=>{console.log("Service worker registration successful.")}).catch(t=>{console.log("Service worker registration failed: "+t)}),navigator.serviceWorker.addEventListener("message",t=>{"version-info"==t.data.type?n(0,o=t.data.serviceworker_version):"update-info"==t.data.type?("up-to-date"==t.data.status?n(3,i.update_available=!1,i):"available"==t.data.status?n(3,i.update_available=!0,i):"installed"==t.data.status&&(n(3,i.update_available=!1,i),window.location.reload()),n(3,i.date_checked=t.data.date_checked,i),n(3,i.update_size=t.data.update_size,i),console.log(JSON.stringify(i,null,2))):"serviceworker-info"==t.data.type&&(n(3,i.serviceworker_info=t.data.text,i),console.log(i.serviceworker_info))}),navigator.serviceWorker.controller&&(navigator.serviceWorker.controller.postMessage("get-version"),navigator.serviceWorker.controller.postMessage("get-update-info"),navigator.serviceWorker.controller.postMessage("check-for-updates")));let c="load-dict",r="initializing",i={},s=null;return[o,c,r,i,s,{"load-dict":"Load",query:"Lookup","find-stroke":"Find Stroke"},function(t){"load-dict"==c?n(1,c="query"):"query"!=c&&"find-stroke"!=c||n(1,c="load-dict")},t=>{n(1,c="query"==c?"find-stroke":"query")},function(t){s=t,n(4,s)},function(t){i=t,n(3,i)},function(t){r=t,n(2,r)},t=>n(1,c="query"),function(t){s=t,n(4,s)},function(t){s=t,n(4,s)}]}return new class extends Y{constructor(t){super(),Z(this,t,Yt,Zt,r,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map