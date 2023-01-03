import{_ as sr}from"./iframe-5d2685e8.js";import{w as W,_ as fr,f as hr,a as cr,t as lr,i as vr}from"./window-975e1a61.js";import"../sb-preview/runtime.mjs";import"./_commonjsHelpers-48992372.js";var pr={exports:{}};(function(v){var f=function(o){var c=Object.prototype,s=c.hasOwnProperty,l=Object.defineProperty||function(e,r,t){e[r]=t.value},a,y=typeof Symbol=="function"?Symbol:{},p=y.iterator||"@@iterator",_=y.asyncIterator||"@@asyncIterator",R=y.toStringTag||"@@toStringTag";function w(e,r,t){return Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}),e[r]}try{w({},"")}catch{w=function(r,t,i){return r[t]=i}}function D(e,r,t,i){var n=r&&r.prototype instanceof M?r:M,u=Object.create(n.prototype),d=new B(i||[]);return l(u,"_invoke",{value:or(e,t,d)}),u}o.wrap=D;function h(e,r,t){try{return{type:"normal",arg:e.call(r,t)}}catch(i){return{type:"throw",arg:i}}}var k="suspendedStart",ir="suspendedYield",X="executing",j="completed",E={};function M(){}function A(){}function O(){}var $={};w($,p,function(){return this});var C=Object.getPrototypeOf,H=C&&C(C(q([])));H&&H!==c&&s.call(H,p)&&($=H);var b=O.prototype=M.prototype=Object.create($);A.prototype=O,l(b,"constructor",{value:O,configurable:!0}),l(O,"constructor",{value:A,configurable:!0}),A.displayName=w(O,R,"GeneratorFunction");function Z(e){["next","throw","return"].forEach(function(r){w(e,r,function(t){return this._invoke(r,t)})})}o.isGeneratorFunction=function(e){var r=typeof e=="function"&&e.constructor;return r?r===A||(r.displayName||r.name)==="GeneratorFunction":!1},o.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,O):(e.__proto__=O,w(e,R,"GeneratorFunction")),e.prototype=Object.create(b),e},o.awrap=function(e){return{__await:e}};function P(e,r){function t(u,d,m,S){var g=h(e[u],e,d);if(g.type==="throw")S(g.arg);else{var K=g.arg,N=K.value;return N&&typeof N=="object"&&s.call(N,"__await")?r.resolve(N.__await).then(function(L){t("next",L,m,S)},function(L){t("throw",L,m,S)}):r.resolve(N).then(function(L){K.value=L,m(K)},function(L){return t("throw",L,m,S)})}}var i;function n(u,d){function m(){return new r(function(S,g){t(u,d,S,g)})}return i=i?i.then(m,m):m()}l(this,"_invoke",{value:n})}Z(P.prototype),w(P.prototype,_,function(){return this}),o.AsyncIterator=P,o.async=function(e,r,t,i,n){n===void 0&&(n=Promise);var u=new P(D(e,r,t,i),n);return o.isGeneratorFunction(r)?u:u.next().then(function(d){return d.done?d.value:u.next()})};function or(e,r,t){var i=k;return function(u,d){if(i===X)throw new Error("Generator is already running");if(i===j){if(u==="throw")throw d;return x()}for(t.method=u,t.arg=d;;){var m=t.delegate;if(m){var S=F(m,t);if(S){if(S===E)continue;return S}}if(t.method==="next")t.sent=t._sent=t.arg;else if(t.method==="throw"){if(i===k)throw i=j,t.arg;t.dispatchException(t.arg)}else t.method==="return"&&t.abrupt("return",t.arg);i=X;var g=h(e,r,t);if(g.type==="normal"){if(i=t.done?j:ir,g.arg===E)continue;return{value:g.arg,done:t.done}}else g.type==="throw"&&(i=j,t.method="throw",t.arg=g.arg)}}}function F(e,r){var t=r.method,i=e.iterator[t];if(i===a)return r.delegate=null,t==="throw"&&e.iterator.return&&(r.method="return",r.arg=a,F(e,r),r.method==="throw")||t!=="return"&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+t+"' method")),E;var n=h(i,e.iterator,r.arg);if(n.type==="throw")return r.method="throw",r.arg=n.arg,r.delegate=null,E;var u=n.arg;if(!u)return r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,E;if(u.done)r[e.resultName]=u.value,r.next=e.nextLoc,r.method!=="return"&&(r.method="next",r.arg=a);else return u;return r.delegate=null,E}Z(b),w(b,R,"Generator"),w(b,p,function(){return this}),w(b,"toString",function(){return"[object Generator]"});function ur(e){var r={tryLoc:e[0]};1 in e&&(r.catchLoc=e[1]),2 in e&&(r.finallyLoc=e[2],r.afterLoc=e[3]),this.tryEntries.push(r)}function Y(e){var r=e.completion||{};r.type="normal",delete r.arg,e.completion=r}function B(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(ur,this),this.reset(!0)}o.keys=function(e){var r=Object(e),t=[];for(var i in r)t.push(i);return t.reverse(),function n(){for(;t.length;){var u=t.pop();if(u in r)return n.value=u,n.done=!1,n}return n.done=!0,n}};function q(e){if(e){var r=e[p];if(r)return r.call(e);if(typeof e.next=="function")return e;if(!isNaN(e.length)){var t=-1,i=function n(){for(;++t<e.length;)if(s.call(e,t))return n.value=e[t],n.done=!1,n;return n.value=a,n.done=!0,n};return i.next=i}}return{next:x}}o.values=q;function x(){return{value:a,done:!0}}return B.prototype={constructor:B,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=a,this.done=!1,this.delegate=null,this.method="next",this.arg=a,this.tryEntries.forEach(Y),!e)for(var r in this)r.charAt(0)==="t"&&s.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=a)},stop:function(){this.done=!0;var e=this.tryEntries[0],r=e.completion;if(r.type==="throw")throw r.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function t(S,g){return u.type="throw",u.arg=e,r.next=S,g&&(r.method="next",r.arg=a),!!g}for(var i=this.tryEntries.length-1;i>=0;--i){var n=this.tryEntries[i],u=n.completion;if(n.tryLoc==="root")return t("end");if(n.tryLoc<=this.prev){var d=s.call(n,"catchLoc"),m=s.call(n,"finallyLoc");if(d&&m){if(this.prev<n.catchLoc)return t(n.catchLoc,!0);if(this.prev<n.finallyLoc)return t(n.finallyLoc)}else if(d){if(this.prev<n.catchLoc)return t(n.catchLoc,!0)}else if(m){if(this.prev<n.finallyLoc)return t(n.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(e,r){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.tryLoc<=this.prev&&s.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var n=i;break}}n&&(e==="break"||e==="continue")&&n.tryLoc<=r&&r<=n.finallyLoc&&(n=null);var u=n?n.completion:{};return u.type=e,u.arg=r,n?(this.method="next",this.next=n.finallyLoc,E):this.complete(u)},complete:function(e,r){if(e.type==="throw")throw e.arg;return e.type==="break"||e.type==="continue"?this.next=e.arg:e.type==="return"?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):e.type==="normal"&&r&&(this.next=r),E},finish:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),Y(t),E}},catch:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var t=this.tryEntries[r];if(t.tryLoc===e){var i=t.completion;if(i.type==="throw"){var n=i.arg;Y(t)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,t){return this.delegate={iterator:q(e),resultName:r,nextLoc:t},this.method==="next"&&(this.arg=a),E}},o}(v.exports);try{regeneratorRuntime=f}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=f:Function("r","regeneratorRuntime = r")(f)}})(pr);var G="storybook/a11y",er="a11yHighlight",dr="".concat(G,"/result"),mr="".concat(G,"/request"),gr="".concat(G,"/running"),yr="".concat(G,"/error"),wr="".concat(G,"/manual"),Sr="".concat(G,"/highlight"),T={RESULT:dr,REQUEST:mr,RUNNING:gr,ERROR:yr,MANUAL:wr,HIGHLIGHT:Sr};function rr(v,f,o,c,s,l,a){try{var y=v[l](a),p=y.value}catch(_){o(_);return}y.done?f(p):Promise.resolve(p).then(c,s)}function J(v){return function(){var f=this,o=arguments;return new Promise(function(c,s){var l=v.apply(f,o);function a(p){rr(l,c,s,a,y,"next",p)}function y(p){rr(l,c,s,a,y,"throw",p)}a(void 0)})}}var Er=W.document,Or=W.window;module&&module.hot&&module.hot.decline&&module.hot.decline();var I=__STORYBOOK_MODULE_ADDONS__.addons.getChannel(),U=!1,Q,Lr=function(){var v=J(regeneratorRuntime.mark(function f(o){var c,s;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,tr(o);case 2:if(c=a.sent,s=c.manual,s){a.next=7;break}return a.next=7,z(o);case 7:case"end":return a.stop()}},f)}));return function(o){return v.apply(this,arguments)}}(),z=function(){var v=J(regeneratorRuntime.mark(function f(o){var c,s,l,a,y,p,_,R,w;return regeneratorRuntime.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return Q=o,h.prev=1,h.next=4,tr(o);case 4:if(c=h.sent,U){h.next=19;break}return U=!0,I.emit(T.RUNNING),h.next=10,sr(()=>import("./axe-0b96db14.js").then(k=>k.a),["./axe-0b96db14.js","./_commonjsHelpers-48992372.js"],import.meta.url);case 10:return s=h.sent.default,l=c.element,a=l===void 0?"#root":l,y=c.config,p=c.options,_=p===void 0?{}:p,R=Er.querySelector(a),s.reset(),y&&s.configure(y),h.next=17,s.run(R,_);case 17:w=h.sent,Q===o?I.emit(T.RESULT,w):(U=!1,z(Q));case 19:h.next=24;break;case 21:h.prev=21,h.t0=h.catch(1),I.emit(T.ERROR,h.t0);case 24:return h.prev=24,U=!1,h.finish(24);case 27:case"end":return h.stop()}},f,null,[[1,21,24,27]])}));return function(o){return v.apply(this,arguments)}}(),tr=function(){var v=J(regeneratorRuntime.mark(function f(o){var c,s;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Or.__STORYBOOK_STORY_STORE__.loadStory({storyId:o});case 2:if(a.t0=a.sent,a.t0){a.next=5;break}a.t0={};case 5:return c=a.t0,s=c.parameters,a.abrupt("return",s.a11y||{config:{},options:{restoreScroll:!0}});case 8:case"end":return a.stop()}},f)}));return function(o){return v.apply(this,arguments)}}();I.on(T.REQUEST,Lr);I.on(T.MANUAL,z);var _r=fr,Rr=hr,br=vr,Tr=lr,Gr=cr,Nr=Rr([].join),Ir=br!=Object,kr=Gr("join",",");_r({target:"Array",proto:!0,forced:Ir||!kr},{join:function(f){return Nr(Tr(this),f===void 0?",":f)}});var jr=function(f){return`
  outline: 2px dashed `.concat(f,`;
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);
`)},V=W.document;module&&module.hot&&module.hot.decline&&module.hot.decline();var nr=__STORYBOOK_MODULE_ADDONS__.addons.getChannel(),Ar=function(f){var o=er;ar();var c=Array.from(new Set(f.elements)),s=V.createElement("style");s.setAttribute("id",o),s.innerHTML=c.map(function(l){return"".concat(l,`{
          `).concat(jr(f.color),`
         }`)}).join(" "),V.head.appendChild(s)},ar=function(){var f=er,o=V.getElementById(f);o&&o.parentNode.removeChild(o)};nr.on(__STORYBOOK_MODULE_CORE_EVENTS__.STORY_CHANGED,ar);nr.on(T.HIGHLIGHT,Ar);
//# sourceMappingURL=preview-6fdb3d27.js.map
