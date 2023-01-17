import{e as Oe,u as $e,i as $,b as it,s as qe}from"./string_decoder-7aba5dbb.js";import{b as Ae,a as q}from"./shim-03580cdb.js";import{c as Xe}from"./_commonjsHelpers-87174ba5.js";var ce,Ce;function ze(){return Ce||(Ce=1,ce=Oe.EventEmitter),ce}var be,Ie;function nt(){if(Ie)return be;Ie=1;function w(o,h){var u=Object.keys(o);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(o);h&&(b=b.filter(function(R){return Object.getOwnPropertyDescriptor(o,R).enumerable})),u.push.apply(u,b)}return u}function m(o){for(var h=1;h<arguments.length;h++){var u=arguments[h]!=null?arguments[h]:{};h%2?w(Object(u),!0).forEach(function(b){_(o,b,u[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(u)):w(Object(u)).forEach(function(b){Object.defineProperty(o,b,Object.getOwnPropertyDescriptor(u,b))})}return o}function _(o,h,u){return h in o?Object.defineProperty(o,h,{value:u,enumerable:!0,configurable:!0,writable:!0}):o[h]=u,o}function O(o,h){if(!(o instanceof h))throw new TypeError("Cannot call a class as a function")}function M(o,h){for(var u=0;u<h.length;u++){var b=h[u];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(o,b.key,b)}}function s(o,h,u){return h&&M(o.prototype,h),u&&M(o,u),o}var p=Ae,a=p.Buffer,n=$e,l=n.inspect,c=l&&l.custom||"inspect";function v(o,h,u){a.prototype.copy.call(o,h,u)}return be=function(){function o(){O(this,o),this.head=null,this.tail=null,this.length=0}return s(o,[{key:"push",value:function(u){var b={data:u,next:null};this.length>0?this.tail.next=b:this.head=b,this.tail=b,++this.length}},{key:"unshift",value:function(u){var b={data:u,next:this.head};this.length===0&&(this.tail=b),this.head=b,++this.length}},{key:"shift",value:function(){if(this.length!==0){var u=this.head.data;return this.length===1?this.head=this.tail=null:this.head=this.head.next,--this.length,u}}},{key:"clear",value:function(){this.head=this.tail=null,this.length=0}},{key:"join",value:function(u){if(this.length===0)return"";for(var b=this.head,R=""+b.data;b=b.next;)R+=u+b.data;return R}},{key:"concat",value:function(u){if(this.length===0)return a.alloc(0);for(var b=a.allocUnsafe(u>>>0),R=this.head,T=0;R;)v(R.data,b,T),T+=R.data.length,R=R.next;return b}},{key:"consume",value:function(u,b){var R;return u<this.head.data.length?(R=this.head.data.slice(0,u),this.head.data=this.head.data.slice(u)):u===this.head.data.length?R=this.shift():R=b?this._getString(u):this._getBuffer(u),R}},{key:"first",value:function(){return this.head.data}},{key:"_getString",value:function(u){var b=this.head,R=1,T=b.data;for(u-=T.length;b=b.next;){var y=b.data,E=u>y.length?y.length:u;if(E===y.length?T+=y:T+=y.slice(0,u),u-=E,u===0){E===y.length?(++R,b.next?this.head=b.next:this.head=this.tail=null):(this.head=b,b.data=y.slice(E));break}++R}return this.length-=R,T}},{key:"_getBuffer",value:function(u){var b=a.allocUnsafe(u),R=this.head,T=1;for(R.data.copy(b),u-=R.data.length;R=R.next;){var y=R.data,E=u>y.length?y.length:u;if(y.copy(b,b.length-u,0,E),u-=E,u===0){E===y.length?(++T,R.next?this.head=R.next:this.head=this.tail=null):(this.head=R,R.data=y.slice(E));break}++T}return this.length-=T,b}},{key:c,value:function(u,b){return l(this,m({},b,{depth:0,customInspect:!1}))}}]),o}(),be}var pe,je;function Je(){if(je)return pe;je=1;function w(p,a){var n=this,l=this._readableState&&this._readableState.destroyed,c=this._writableState&&this._writableState.destroyed;return l||c?(a?a(p):p&&(this._writableState?this._writableState.errorEmitted||(this._writableState.errorEmitted=!0,q.nextTick(M,this,p)):q.nextTick(M,this,p)),this):(this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(p||null,function(v){!a&&v?n._writableState?n._writableState.errorEmitted?q.nextTick(_,n):(n._writableState.errorEmitted=!0,q.nextTick(m,n,v)):q.nextTick(m,n,v):a?(q.nextTick(_,n),a(v)):q.nextTick(_,n)}),this)}function m(p,a){M(p,a),_(p)}function _(p){p._writableState&&!p._writableState.emitClose||p._readableState&&!p._readableState.emitClose||p.emit("close")}function O(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finalCalled=!1,this._writableState.prefinished=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1)}function M(p,a){p.emit("error",a)}function s(p,a){var n=p._readableState,l=p._writableState;n&&n.autoDestroy||l&&l.autoDestroy?p.destroy(a):p.emit("error",a)}return pe={destroy:w,undestroy:O,errorOrDestroy:s},pe}var _e={},ke;function X(){if(ke)return _e;ke=1;function w(a,n){a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.__proto__=n}var m={};function _(a,n,l){l||(l=Error);function c(o,h,u){return typeof n=="string"?n:n(o,h,u)}var v=function(o){w(h,o);function h(u,b,R){return o.call(this,c(u,b,R))||this}return h}(l);v.prototype.name=l.name,v.prototype.code=a,m[a]=v}function O(a,n){if(Array.isArray(a)){var l=a.length;return a=a.map(function(c){return String(c)}),l>2?"one of ".concat(n," ").concat(a.slice(0,l-1).join(", "),", or ")+a[l-1]:l===2?"one of ".concat(n," ").concat(a[0]," or ").concat(a[1]):"of ".concat(n," ").concat(a[0])}else return"of ".concat(n," ").concat(String(a))}function M(a,n,l){return a.substr(!l||l<0?0:+l,n.length)===n}function s(a,n,l){return(l===void 0||l>a.length)&&(l=a.length),a.substring(l-n.length,l)===n}function p(a,n,l){return typeof l!="number"&&(l=0),l+n.length>a.length?!1:a.indexOf(n,l)!==-1}return _("ERR_INVALID_OPT_VALUE",function(a,n){return'The value "'+n+'" is invalid for option "'+a+'"'},TypeError),_("ERR_INVALID_ARG_TYPE",function(a,n,l){var c;typeof n=="string"&&M(n,"not ")?(c="must not be",n=n.replace(/^not /,"")):c="must be";var v;if(s(a," argument"))v="The ".concat(a," ").concat(c," ").concat(O(n,"type"));else{var o=p(a,".")?"property":"argument";v='The "'.concat(a,'" ').concat(o," ").concat(c," ").concat(O(n,"type"))}return v+=". Received type ".concat(typeof l),v},TypeError),_("ERR_STREAM_PUSH_AFTER_EOF","stream.push() after EOF"),_("ERR_METHOD_NOT_IMPLEMENTED",function(a){return"The "+a+" method is not implemented"}),_("ERR_STREAM_PREMATURE_CLOSE","Premature close"),_("ERR_STREAM_DESTROYED",function(a){return"Cannot call "+a+" after a stream was destroyed"}),_("ERR_MULTIPLE_CALLBACK","Callback called multiple times"),_("ERR_STREAM_CANNOT_PIPE","Cannot pipe, not readable"),_("ERR_STREAM_WRITE_AFTER_END","write after end"),_("ERR_STREAM_NULL_VALUES","May not write null values to stream",TypeError),_("ERR_UNKNOWN_ENCODING",function(a){return"Unknown encoding: "+a},TypeError),_("ERR_STREAM_UNSHIFT_AFTER_END_EVENT","stream.unshift() after end event"),_e.codes=m,_e}var ge,We;function Qe(){if(We)return ge;We=1;var w=X().codes.ERR_INVALID_OPT_VALUE;function m(O,M,s){return O.highWaterMark!=null?O.highWaterMark:M?O[s]:null}function _(O,M,s,p){var a=m(M,p,s);if(a!=null){if(!(isFinite(a)&&Math.floor(a)===a)||a<0){var n=p?s:"highWaterMark";throw new w(n,a)}return Math.floor(a)}return O.objectMode?16:16*1024}return ge={getHighWaterMark:_},ge}var ve,xe;function Ze(){if(xe)return ve;xe=1,ve=N;function w(i){var r=this;this.next=null,this.entry=null,this.finish=function(){ue(r,i)}}var m;N.WritableState=k;var _={deprecate:it},O=ze(),M=Ae.Buffer,s=Xe.Uint8Array||function(){};function p(i){return M.from(i)}function a(i){return M.isBuffer(i)||i instanceof s}var n=Je(),l=Qe(),c=l.getHighWaterMark,v=X().codes,o=v.ERR_INVALID_ARG_TYPE,h=v.ERR_METHOD_NOT_IMPLEMENTED,u=v.ERR_MULTIPLE_CALLBACK,b=v.ERR_STREAM_CANNOT_PIPE,R=v.ERR_STREAM_DESTROYED,T=v.ERR_STREAM_NULL_VALUES,y=v.ERR_STREAM_WRITE_AFTER_END,E=v.ERR_UNKNOWN_ENCODING,A=n.errorOrDestroy;$(N,O);function I(){}function k(i,r,d){m=m||K(),i=i||{},typeof d!="boolean"&&(d=r instanceof m),this.objectMode=!!i.objectMode,d&&(this.objectMode=this.objectMode||!!i.writableObjectMode),this.highWaterMark=c(this,i,"writableHighWaterMark",d),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;var S=i.decodeStrings===!1;this.decodeStrings=!S,this.defaultEncoding=i.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(P){fe(r,P)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.emitClose=i.emitClose!==!1,this.autoDestroy=!!i.autoDestroy,this.bufferedRequestCount=0,this.corkedRequestsFree=new w(this)}k.prototype.getBuffer=function(){for(var r=this.bufferedRequest,d=[];r;)d.push(r),r=r.next;return d},function(){try{Object.defineProperty(k.prototype,"buffer",{get:_.deprecate(function(){return this.getBuffer()},"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch{}}();var W;typeof Symbol=="function"&&Symbol.hasInstance&&typeof Function.prototype[Symbol.hasInstance]=="function"?(W=Function.prototype[Symbol.hasInstance],Object.defineProperty(N,Symbol.hasInstance,{value:function(r){return W.call(this,r)?!0:this!==N?!1:r&&r._writableState instanceof k}})):W=function(r){return r instanceof this};function N(i){m=m||K();var r=this instanceof m;if(!r&&!W.call(N,this))return new N(i);this._writableState=new k(i,this,r),this.writable=!0,i&&(typeof i.write=="function"&&(this._write=i.write),typeof i.writev=="function"&&(this._writev=i.writev),typeof i.destroy=="function"&&(this._destroy=i.destroy),typeof i.final=="function"&&(this._final=i.final)),O.call(this)}N.prototype.pipe=function(){A(this,new b)};function D(i,r){var d=new y;A(i,d),q.nextTick(r,d)}function Q(i,r,d,S){var P;return d===null?P=new T:typeof d!="string"&&!r.objectMode&&(P=new o("chunk",["string","Buffer"],d)),P?(A(i,P),q.nextTick(S,P),!1):!0}N.prototype.write=function(i,r,d){var S=this._writableState,P=!1,e=!S.objectMode&&a(i);return e&&!M.isBuffer(i)&&(i=p(i)),typeof r=="function"&&(d=r,r=null),e?r="buffer":r||(r=S.defaultEncoding),typeof d!="function"&&(d=I),S.ending?D(this,d):(e||Q(this,S,i,d))&&(S.pendingcb++,P=ne(this,S,e,i,r,d)),P},N.prototype.cork=function(){this._writableState.corked++},N.prototype.uncork=function(){var i=this._writableState;i.corked&&(i.corked--,!i.writing&&!i.corked&&!i.bufferProcessing&&i.bufferedRequest&&H(this,i))},N.prototype.setDefaultEncoding=function(r){if(typeof r=="string"&&(r=r.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((r+"").toLowerCase())>-1))throw new E(r);return this._writableState.defaultEncoding=r,this},Object.defineProperty(N.prototype,"writableBuffer",{enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}});function z(i,r,d){return!i.objectMode&&i.decodeStrings!==!1&&typeof r=="string"&&(r=M.from(r,d)),r}Object.defineProperty(N.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}});function ne(i,r,d,S,P,e){if(!d){var t=z(r,S,P);S!==t&&(d=!0,P="buffer",S=t)}var f=r.objectMode?1:S.length;r.length+=f;var g=r.length<r.highWaterMark;if(g||(r.needDrain=!0),r.writing||r.corked){var j=r.lastBufferedRequest;r.lastBufferedRequest={chunk:S,encoding:P,isBuf:d,callback:e,next:null},j?j.next=r.lastBufferedRequest:r.bufferedRequest=r.lastBufferedRequest,r.bufferedRequestCount+=1}else F(i,r,!1,f,S,P,e);return g}function F(i,r,d,S,P,e,t){r.writelen=S,r.writecb=t,r.writing=!0,r.sync=!0,r.destroyed?r.onwrite(new R("write")):d?i._writev(P,r.onwrite):i._write(P,e,r.onwrite),r.sync=!1}function ae(i,r,d,S,P){--r.pendingcb,d?(q.nextTick(P,S),q.nextTick(U,i,r),i._writableState.errorEmitted=!0,A(i,S)):(P(S),i._writableState.errorEmitted=!0,A(i,S),U(i,r))}function Z(i){i.writing=!1,i.writecb=null,i.length-=i.writelen,i.writelen=0}function fe(i,r){var d=i._writableState,S=d.sync,P=d.writecb;if(typeof P!="function")throw new u;if(Z(d),r)ae(i,d,S,r,P);else{var e=te(d)||i.destroyed;!e&&!d.corked&&!d.bufferProcessing&&d.bufferedRequest&&H(i,d),S?q.nextTick(B,i,d,e,P):B(i,d,e,P)}}function B(i,r,d,S){d||ee(i,r),r.pendingcb--,S(),U(i,r)}function ee(i,r){r.length===0&&r.needDrain&&(r.needDrain=!1,i.emit("drain"))}function H(i,r){r.bufferProcessing=!0;var d=r.bufferedRequest;if(i._writev&&d&&d.next){var S=r.bufferedRequestCount,P=new Array(S),e=r.corkedRequestsFree;e.entry=d;for(var t=0,f=!0;d;)P[t]=d,d.isBuf||(f=!1),d=d.next,t+=1;P.allBuffers=f,F(i,r,!0,r.length,P,"",e.finish),r.pendingcb++,r.lastBufferedRequest=null,e.next?(r.corkedRequestsFree=e.next,e.next=null):r.corkedRequestsFree=new w(r),r.bufferedRequestCount=0}else{for(;d;){var g=d.chunk,j=d.encoding,L=d.callback,C=r.objectMode?1:g.length;if(F(i,r,!1,C,g,j,L),d=d.next,r.bufferedRequestCount--,r.writing)break}d===null&&(r.lastBufferedRequest=null)}r.bufferedRequest=d,r.bufferProcessing=!1}N.prototype._write=function(i,r,d){d(new h("_write()"))},N.prototype._writev=null,N.prototype.end=function(i,r,d){var S=this._writableState;return typeof i=="function"?(d=i,i=null,r=null):typeof r=="function"&&(d=r,r=null),i!=null&&this.write(i,r),S.corked&&(S.corked=1,this.uncork()),S.ending||le(this,S,d),this},Object.defineProperty(N.prototype,"writableLength",{enumerable:!1,get:function(){return this._writableState.length}});function te(i){return i.ending&&i.length===0&&i.bufferedRequest===null&&!i.finished&&!i.writing}function oe(i,r){i._final(function(d){r.pendingcb--,d&&A(i,d),r.prefinished=!0,i.emit("prefinish"),U(i,r)})}function re(i,r){!r.prefinished&&!r.finalCalled&&(typeof i._final=="function"&&!r.destroyed?(r.pendingcb++,r.finalCalled=!0,q.nextTick(oe,i,r)):(r.prefinished=!0,i.emit("prefinish")))}function U(i,r){var d=te(r);if(d&&(re(i,r),r.pendingcb===0&&(r.finished=!0,i.emit("finish"),r.autoDestroy))){var S=i._readableState;(!S||S.autoDestroy&&S.endEmitted)&&i.destroy()}return d}function le(i,r,d){r.ending=!0,U(i,r),d&&(r.finished?q.nextTick(d):i.once("finish",d)),r.ended=!0,i.writable=!1}function ue(i,r,d){var S=i.entry;for(i.entry=null;S;){var P=S.callback;r.pendingcb--,P(d),S=S.next}r.corkedRequestsFree.next=i}return Object.defineProperty(N.prototype,"destroyed",{enumerable:!1,get:function(){return this._writableState===void 0?!1:this._writableState.destroyed},set:function(r){this._writableState&&(this._writableState.destroyed=r)}}),N.prototype.destroy=n.destroy,N.prototype._undestroy=n.undestroy,N.prototype._destroy=function(i,r){r(i)},ve}var ye,Be;function K(){if(Be)return ye;Be=1;var w=Object.keys||function(l){var c=[];for(var v in l)c.push(v);return c};ye=p;var m=et(),_=Ze();$(p,m);for(var O=w(_.prototype),M=0;M<O.length;M++){var s=O[M];p.prototype[s]||(p.prototype[s]=_.prototype[s])}function p(l){if(!(this instanceof p))return new p(l);m.call(this,l),_.call(this,l),this.allowHalfOpen=!0,l&&(l.readable===!1&&(this.readable=!1),l.writable===!1&&(this.writable=!1),l.allowHalfOpen===!1&&(this.allowHalfOpen=!1,this.once("end",a)))}Object.defineProperty(p.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),Object.defineProperty(p.prototype,"writableBuffer",{enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}}),Object.defineProperty(p.prototype,"writableLength",{enumerable:!1,get:function(){return this._writableState.length}});function a(){this._writableState.ended||q.nextTick(n,this)}function n(l){l.end()}return Object.defineProperty(p.prototype,"destroyed",{enumerable:!1,get:function(){return this._readableState===void 0||this._writableState===void 0?!1:this._readableState.destroyed&&this._writableState.destroyed},set:function(c){this._readableState===void 0||this._writableState===void 0||(this._readableState.destroyed=c,this._writableState.destroyed=c)}}),ye}var we,Ue;function Le(){if(Ue)return we;Ue=1;var w=X().codes.ERR_STREAM_PREMATURE_CLOSE;function m(s){var p=!1;return function(){if(!p){p=!0;for(var a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];s.apply(this,n)}}}function _(){}function O(s){return s.setHeader&&typeof s.abort=="function"}function M(s,p,a){if(typeof p=="function")return M(s,null,p);p||(p={}),a=m(a||_);var n=p.readable||p.readable!==!1&&s.readable,l=p.writable||p.writable!==!1&&s.writable,c=function(){s.writable||o()},v=s._writableState&&s._writableState.finished,o=function(){l=!1,v=!0,n||a.call(s)},h=s._readableState&&s._readableState.endEmitted,u=function(){n=!1,h=!0,l||a.call(s)},b=function(E){a.call(s,E)},R=function(){var E;if(n&&!h)return(!s._readableState||!s._readableState.ended)&&(E=new w),a.call(s,E);if(l&&!v)return(!s._writableState||!s._writableState.ended)&&(E=new w),a.call(s,E)},T=function(){s.req.on("finish",o)};return O(s)?(s.on("complete",o),s.on("abort",R),s.req?T():s.on("request",T)):l&&!s._writableState&&(s.on("end",c),s.on("close",c)),s.on("end",u),s.on("finish",o),p.error!==!1&&s.on("error",b),s.on("close",R),function(){s.removeListener("complete",o),s.removeListener("abort",R),s.removeListener("request",T),s.req&&s.req.removeListener("finish",o),s.removeListener("end",c),s.removeListener("close",c),s.removeListener("finish",o),s.removeListener("end",u),s.removeListener("error",b),s.removeListener("close",R)}}return we=M,we}var Re,Fe;function at(){if(Fe)return Re;Fe=1;var w;function m(T,y,E){return y in T?Object.defineProperty(T,y,{value:E,enumerable:!0,configurable:!0,writable:!0}):T[y]=E,T}var _=Le(),O=Symbol("lastResolve"),M=Symbol("lastReject"),s=Symbol("error"),p=Symbol("ended"),a=Symbol("lastPromise"),n=Symbol("handlePromise"),l=Symbol("stream");function c(T,y){return{value:T,done:y}}function v(T){var y=T[O];if(y!==null){var E=T[l].read();E!==null&&(T[a]=null,T[O]=null,T[M]=null,y(c(E,!1)))}}function o(T){q.nextTick(v,T)}function h(T,y){return function(E,A){T.then(function(){if(y[p]){E(c(void 0,!0));return}y[n](E,A)},A)}}var u=Object.getPrototypeOf(function(){}),b=Object.setPrototypeOf((w={get stream(){return this[l]},next:function(){var y=this,E=this[s];if(E!==null)return Promise.reject(E);if(this[p])return Promise.resolve(c(void 0,!0));if(this[l].destroyed)return new Promise(function(W,N){q.nextTick(function(){y[s]?N(y[s]):W(c(void 0,!0))})});var A=this[a],I;if(A)I=new Promise(h(A,this));else{var k=this[l].read();if(k!==null)return Promise.resolve(c(k,!1));I=new Promise(this[n])}return this[a]=I,I}},m(w,Symbol.asyncIterator,function(){return this}),m(w,"return",function(){var y=this;return new Promise(function(E,A){y[l].destroy(null,function(I){if(I){A(I);return}E(c(void 0,!0))})})}),w),u),R=function(y){var E,A=Object.create(b,(E={},m(E,l,{value:y,writable:!0}),m(E,O,{value:null,writable:!0}),m(E,M,{value:null,writable:!0}),m(E,s,{value:null,writable:!0}),m(E,p,{value:y._readableState.endEmitted,writable:!0}),m(E,n,{value:function(k,W){var N=A[l].read();N?(A[a]=null,A[O]=null,A[M]=null,k(c(N,!1))):(A[O]=k,A[M]=W)},writable:!0}),E));return A[a]=null,_(y,function(I){if(I&&I.code!=="ERR_STREAM_PREMATURE_CLOSE"){var k=A[M];k!==null&&(A[a]=null,A[O]=null,A[M]=null,k(I)),A[s]=I;return}var W=A[O];W!==null&&(A[a]=null,A[O]=null,A[M]=null,W(c(void 0,!0))),A[p]=!0}),y.on("readable",o.bind(null,A)),A};return Re=R,Re}var Ee,He;function ft(){return He||(He=1,Ee=function(){throw new Error("Readable.from is not available in the browser")}),Ee}var Se,Ge;function et(){if(Ge)return Se;Ge=1,Se=D;var w;D.ReadableState=N,Oe.EventEmitter;var m=function(t,f){return t.listeners(f).length},_=ze(),O=Ae.Buffer,M=Xe.Uint8Array||function(){};function s(e){return O.from(e)}function p(e){return O.isBuffer(e)||e instanceof M}var a=$e,n;a&&a.debuglog?n=a.debuglog("stream"):n=function(){};var l=nt(),c=Je(),v=Qe(),o=v.getHighWaterMark,h=X().codes,u=h.ERR_INVALID_ARG_TYPE,b=h.ERR_STREAM_PUSH_AFTER_EOF,R=h.ERR_METHOD_NOT_IMPLEMENTED,T=h.ERR_STREAM_UNSHIFT_AFTER_END_EVENT,y,E,A;$(D,_);var I=c.errorOrDestroy,k=["error","close","destroy","pause","resume"];function W(e,t,f){if(typeof e.prependListener=="function")return e.prependListener(t,f);!e._events||!e._events[t]?e.on(t,f):Array.isArray(e._events[t])?e._events[t].unshift(f):e._events[t]=[f,e._events[t]]}function N(e,t,f){w=w||K(),e=e||{},typeof f!="boolean"&&(f=t instanceof w),this.objectMode=!!e.objectMode,f&&(this.objectMode=this.objectMode||!!e.readableObjectMode),this.highWaterMark=o(this,e,"readableHighWaterMark",f),this.buffer=new l,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.paused=!0,this.emitClose=e.emitClose!==!1,this.autoDestroy=!!e.autoDestroy,this.destroyed=!1,this.defaultEncoding=e.defaultEncoding||"utf8",this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,e.encoding&&(y||(y=qe.StringDecoder),this.decoder=new y(e.encoding),this.encoding=e.encoding)}function D(e){if(w=w||K(),!(this instanceof D))return new D(e);var t=this instanceof w;this._readableState=new N(e,this,t),this.readable=!0,e&&(typeof e.read=="function"&&(this._read=e.read),typeof e.destroy=="function"&&(this._destroy=e.destroy)),_.call(this)}Object.defineProperty(D.prototype,"destroyed",{enumerable:!1,get:function(){return this._readableState===void 0?!1:this._readableState.destroyed},set:function(t){this._readableState&&(this._readableState.destroyed=t)}}),D.prototype.destroy=c.destroy,D.prototype._undestroy=c.undestroy,D.prototype._destroy=function(e,t){t(e)},D.prototype.push=function(e,t){var f=this._readableState,g;return f.objectMode?g=!0:typeof e=="string"&&(t=t||f.defaultEncoding,t!==f.encoding&&(e=O.from(e,t),t=""),g=!0),Q(this,e,t,!1,g)},D.prototype.unshift=function(e){return Q(this,e,null,!0,!1)};function Q(e,t,f,g,j){n("readableAddChunk",t);var L=e._readableState;if(t===null)L.reading=!1,fe(e,L);else{var C;if(j||(C=ne(L,t)),C)I(e,C);else if(L.objectMode||t&&t.length>0)if(typeof t!="string"&&!L.objectMode&&Object.getPrototypeOf(t)!==O.prototype&&(t=s(t)),g)L.endEmitted?I(e,new T):z(e,L,t,!0);else if(L.ended)I(e,new b);else{if(L.destroyed)return!1;L.reading=!1,L.decoder&&!f?(t=L.decoder.write(t),L.objectMode||t.length!==0?z(e,L,t,!1):H(e,L)):z(e,L,t,!1)}else g||(L.reading=!1,H(e,L))}return!L.ended&&(L.length<L.highWaterMark||L.length===0)}function z(e,t,f,g){t.flowing&&t.length===0&&!t.sync?(t.awaitDrain=0,e.emit("data",f)):(t.length+=t.objectMode?1:f.length,g?t.buffer.unshift(f):t.buffer.push(f),t.needReadable&&B(e)),H(e,t)}function ne(e,t){var f;return!p(t)&&typeof t!="string"&&t!==void 0&&!e.objectMode&&(f=new u("chunk",["string","Buffer","Uint8Array"],t)),f}D.prototype.isPaused=function(){return this._readableState.flowing===!1},D.prototype.setEncoding=function(e){y||(y=qe.StringDecoder);var t=new y(e);this._readableState.decoder=t,this._readableState.encoding=this._readableState.decoder.encoding;for(var f=this._readableState.buffer.head,g="";f!==null;)g+=t.write(f.data),f=f.next;return this._readableState.buffer.clear(),g!==""&&this._readableState.buffer.push(g),this._readableState.length=g.length,this};var F=1073741824;function ae(e){return e>=F?e=F:(e--,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,e|=e>>>16,e++),e}function Z(e,t){return e<=0||t.length===0&&t.ended?0:t.objectMode?1:e!==e?t.flowing&&t.length?t.buffer.head.data.length:t.length:(e>t.highWaterMark&&(t.highWaterMark=ae(e)),e<=t.length?e:t.ended?t.length:(t.needReadable=!0,0))}D.prototype.read=function(e){n("read",e),e=parseInt(e,10);var t=this._readableState,f=e;if(e!==0&&(t.emittedReadable=!1),e===0&&t.needReadable&&((t.highWaterMark!==0?t.length>=t.highWaterMark:t.length>0)||t.ended))return n("read: emitReadable",t.length,t.ended),t.length===0&&t.ended?d(this):B(this),null;if(e=Z(e,t),e===0&&t.ended)return t.length===0&&d(this),null;var g=t.needReadable;n("need readable",g),(t.length===0||t.length-e<t.highWaterMark)&&(g=!0,n("length less than watermark",g)),t.ended||t.reading?(g=!1,n("reading or ended",g)):g&&(n("do read"),t.reading=!0,t.sync=!0,t.length===0&&(t.needReadable=!0),this._read(t.highWaterMark),t.sync=!1,t.reading||(e=Z(f,t)));var j;return e>0?j=r(e,t):j=null,j===null?(t.needReadable=t.length<=t.highWaterMark,e=0):(t.length-=e,t.awaitDrain=0),t.length===0&&(t.ended||(t.needReadable=!0),f!==e&&t.ended&&d(this)),j!==null&&this.emit("data",j),j};function fe(e,t){if(n("onEofChunk"),!t.ended){if(t.decoder){var f=t.decoder.end();f&&f.length&&(t.buffer.push(f),t.length+=t.objectMode?1:f.length)}t.ended=!0,t.sync?B(e):(t.needReadable=!1,t.emittedReadable||(t.emittedReadable=!0,ee(e)))}}function B(e){var t=e._readableState;n("emitReadable",t.needReadable,t.emittedReadable),t.needReadable=!1,t.emittedReadable||(n("emitReadable",t.flowing),t.emittedReadable=!0,q.nextTick(ee,e))}function ee(e){var t=e._readableState;n("emitReadable_",t.destroyed,t.length,t.ended),!t.destroyed&&(t.length||t.ended)&&(e.emit("readable"),t.emittedReadable=!1),t.needReadable=!t.flowing&&!t.ended&&t.length<=t.highWaterMark,i(e)}function H(e,t){t.readingMore||(t.readingMore=!0,q.nextTick(te,e,t))}function te(e,t){for(;!t.reading&&!t.ended&&(t.length<t.highWaterMark||t.flowing&&t.length===0);){var f=t.length;if(n("maybeReadMore read 0"),e.read(0),f===t.length)break}t.readingMore=!1}D.prototype._read=function(e){I(this,new R("_read()"))},D.prototype.pipe=function(e,t){var f=this,g=this._readableState;switch(g.pipesCount){case 0:g.pipes=e;break;case 1:g.pipes=[g.pipes,e];break;default:g.pipes.push(e);break}g.pipesCount+=1,n("pipe count=%d opts=%j",g.pipesCount,t);var j=(!t||t.end!==!1)&&e!==q.stdout&&e!==q.stderr,L=j?G:J;g.endEmitted?q.nextTick(L):f.once("end",L),e.on("unpipe",C);function C(V,Y){n("onunpipe"),V===f&&Y&&Y.hasUnpiped===!1&&(Y.hasUnpiped=!0,rt())}function G(){n("onend"),e.end()}var ie=oe(f);e.on("drain",ie);var Pe=!1;function rt(){n("cleanup"),e.removeListener("close",de),e.removeListener("finish",he),e.removeListener("drain",ie),e.removeListener("error",se),e.removeListener("unpipe",C),f.removeListener("end",G),f.removeListener("end",J),f.removeListener("data",Ne),Pe=!0,g.awaitDrain&&(!e._writableState||e._writableState.needDrain)&&ie()}f.on("data",Ne);function Ne(V){n("ondata");var Y=e.write(V);n("dest.write",Y),Y===!1&&((g.pipesCount===1&&g.pipes===e||g.pipesCount>1&&P(g.pipes,e)!==-1)&&!Pe&&(n("false write response, pause",g.awaitDrain),g.awaitDrain++),f.pause())}function se(V){n("onerror",V),J(),e.removeListener("error",se),m(e,"error")===0&&I(e,V)}W(e,"error",se);function de(){e.removeListener("finish",he),J()}e.once("close",de);function he(){n("onfinish"),e.removeListener("close",de),J()}e.once("finish",he);function J(){n("unpipe"),f.unpipe(e)}return e.emit("pipe",f),g.flowing||(n("pipe resume"),f.resume()),e};function oe(e){return function(){var f=e._readableState;n("pipeOnDrain",f.awaitDrain),f.awaitDrain&&f.awaitDrain--,f.awaitDrain===0&&m(e,"data")&&(f.flowing=!0,i(e))}}D.prototype.unpipe=function(e){var t=this._readableState,f={hasUnpiped:!1};if(t.pipesCount===0)return this;if(t.pipesCount===1)return e&&e!==t.pipes?this:(e||(e=t.pipes),t.pipes=null,t.pipesCount=0,t.flowing=!1,e&&e.emit("unpipe",this,f),this);if(!e){var g=t.pipes,j=t.pipesCount;t.pipes=null,t.pipesCount=0,t.flowing=!1;for(var L=0;L<j;L++)g[L].emit("unpipe",this,{hasUnpiped:!1});return this}var C=P(t.pipes,e);return C===-1?this:(t.pipes.splice(C,1),t.pipesCount-=1,t.pipesCount===1&&(t.pipes=t.pipes[0]),e.emit("unpipe",this,f),this)},D.prototype.on=function(e,t){var f=_.prototype.on.call(this,e,t),g=this._readableState;return e==="data"?(g.readableListening=this.listenerCount("readable")>0,g.flowing!==!1&&this.resume()):e==="readable"&&!g.endEmitted&&!g.readableListening&&(g.readableListening=g.needReadable=!0,g.flowing=!1,g.emittedReadable=!1,n("on readable",g.length,g.reading),g.length?B(this):g.reading||q.nextTick(U,this)),f},D.prototype.addListener=D.prototype.on,D.prototype.removeListener=function(e,t){var f=_.prototype.removeListener.call(this,e,t);return e==="readable"&&q.nextTick(re,this),f},D.prototype.removeAllListeners=function(e){var t=_.prototype.removeAllListeners.apply(this,arguments);return(e==="readable"||e===void 0)&&q.nextTick(re,this),t};function re(e){var t=e._readableState;t.readableListening=e.listenerCount("readable")>0,t.resumeScheduled&&!t.paused?t.flowing=!0:e.listenerCount("data")>0&&e.resume()}function U(e){n("readable nexttick read 0"),e.read(0)}D.prototype.resume=function(){var e=this._readableState;return e.flowing||(n("resume"),e.flowing=!e.readableListening,le(this,e)),e.paused=!1,this};function le(e,t){t.resumeScheduled||(t.resumeScheduled=!0,q.nextTick(ue,e,t))}function ue(e,t){n("resume",t.reading),t.reading||e.read(0),t.resumeScheduled=!1,e.emit("resume"),i(e),t.flowing&&!t.reading&&e.read(0)}D.prototype.pause=function(){return n("call pause flowing=%j",this._readableState.flowing),this._readableState.flowing!==!1&&(n("pause"),this._readableState.flowing=!1,this.emit("pause")),this._readableState.paused=!0,this};function i(e){var t=e._readableState;for(n("flow",t.flowing);t.flowing&&e.read()!==null;);}D.prototype.wrap=function(e){var t=this,f=this._readableState,g=!1;e.on("end",function(){if(n("wrapped end"),f.decoder&&!f.ended){var C=f.decoder.end();C&&C.length&&t.push(C)}t.push(null)}),e.on("data",function(C){if(n("wrapped data"),f.decoder&&(C=f.decoder.write(C)),!(f.objectMode&&C==null)&&!(!f.objectMode&&(!C||!C.length))){var G=t.push(C);G||(g=!0,e.pause())}});for(var j in e)this[j]===void 0&&typeof e[j]=="function"&&(this[j]=function(G){return function(){return e[G].apply(e,arguments)}}(j));for(var L=0;L<k.length;L++)e.on(k[L],this.emit.bind(this,k[L]));return this._read=function(C){n("wrapped _read",C),g&&(g=!1,e.resume())},this},typeof Symbol=="function"&&(D.prototype[Symbol.asyncIterator]=function(){return E===void 0&&(E=at()),E(this)}),Object.defineProperty(D.prototype,"readableHighWaterMark",{enumerable:!1,get:function(){return this._readableState.highWaterMark}}),Object.defineProperty(D.prototype,"readableBuffer",{enumerable:!1,get:function(){return this._readableState&&this._readableState.buffer}}),Object.defineProperty(D.prototype,"readableFlowing",{enumerable:!1,get:function(){return this._readableState.flowing},set:function(t){this._readableState&&(this._readableState.flowing=t)}}),D._fromList=r,Object.defineProperty(D.prototype,"readableLength",{enumerable:!1,get:function(){return this._readableState.length}});function r(e,t){if(t.length===0)return null;var f;return t.objectMode?f=t.buffer.shift():!e||e>=t.length?(t.decoder?f=t.buffer.join(""):t.buffer.length===1?f=t.buffer.first():f=t.buffer.concat(t.length),t.buffer.clear()):f=t.buffer.consume(e,t.decoder),f}function d(e){var t=e._readableState;n("endReadable",t.endEmitted),t.endEmitted||(t.ended=!0,q.nextTick(S,t,e))}function S(e,t){if(n("endReadableNT",e.endEmitted,e.length),!e.endEmitted&&e.length===0&&(e.endEmitted=!0,t.readable=!1,t.emit("end"),e.autoDestroy)){var f=t._writableState;(!f||f.autoDestroy&&f.finished)&&t.destroy()}}typeof Symbol=="function"&&(D.from=function(e,t){return A===void 0&&(A=ft()),A(D,e,t)});function P(e,t){for(var f=0,g=e.length;f<g;f++)if(e[f]===t)return f;return-1}return Se}var me,Ve;function tt(){if(Ve)return me;Ve=1,me=a;var w=X().codes,m=w.ERR_METHOD_NOT_IMPLEMENTED,_=w.ERR_MULTIPLE_CALLBACK,O=w.ERR_TRANSFORM_ALREADY_TRANSFORMING,M=w.ERR_TRANSFORM_WITH_LENGTH_0,s=K();$(a,s);function p(c,v){var o=this._transformState;o.transforming=!1;var h=o.writecb;if(h===null)return this.emit("error",new _);o.writechunk=null,o.writecb=null,v!=null&&this.push(v),h(c);var u=this._readableState;u.reading=!1,(u.needReadable||u.length<u.highWaterMark)&&this._read(u.highWaterMark)}function a(c){if(!(this instanceof a))return new a(c);s.call(this,c),this._transformState={afterTransform:p.bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:null},this._readableState.needReadable=!0,this._readableState.sync=!1,c&&(typeof c.transform=="function"&&(this._transform=c.transform),typeof c.flush=="function"&&(this._flush=c.flush)),this.on("prefinish",n)}function n(){var c=this;typeof this._flush=="function"&&!this._readableState.destroyed?this._flush(function(v,o){l(c,v,o)}):l(this,null,null)}a.prototype.push=function(c,v){return this._transformState.needTransform=!1,s.prototype.push.call(this,c,v)},a.prototype._transform=function(c,v,o){o(new m("_transform()"))},a.prototype._write=function(c,v,o){var h=this._transformState;if(h.writecb=o,h.writechunk=c,h.writeencoding=v,!h.transforming){var u=this._readableState;(h.needTransform||u.needReadable||u.length<u.highWaterMark)&&this._read(u.highWaterMark)}},a.prototype._read=function(c){var v=this._transformState;v.writechunk!==null&&!v.transforming?(v.transforming=!0,this._transform(v.writechunk,v.writeencoding,v.afterTransform)):v.needTransform=!0},a.prototype._destroy=function(c,v){s.prototype._destroy.call(this,c,function(o){v(o)})};function l(c,v,o){if(v)return c.emit("error",v);if(o!=null&&c.push(o),c._writableState.length)throw new M;if(c._transformState.transforming)throw new O;return c.push(null)}return me}var Te,Ye;function ot(){if(Ye)return Te;Ye=1,Te=m;var w=tt();$(m,w);function m(_){if(!(this instanceof m))return new m(_);w.call(this,_)}return m.prototype._transform=function(_,O,M){M(null,_)},Te}var Me,Ke;function lt(){if(Ke)return Me;Ke=1;var w;function m(o){var h=!1;return function(){h||(h=!0,o.apply(void 0,arguments))}}var _=X().codes,O=_.ERR_MISSING_ARGS,M=_.ERR_STREAM_DESTROYED;function s(o){if(o)throw o}function p(o){return o.setHeader&&typeof o.abort=="function"}function a(o,h,u,b){b=m(b);var R=!1;o.on("close",function(){R=!0}),w===void 0&&(w=Le()),w(o,{readable:h,writable:u},function(y){if(y)return b(y);R=!0,b()});var T=!1;return function(y){if(!R&&!T){if(T=!0,p(o))return o.abort();if(typeof o.destroy=="function")return o.destroy();b(y||new M("pipe"))}}}function n(o){o()}function l(o,h){return o.pipe(h)}function c(o){return!o.length||typeof o[o.length-1]!="function"?s:o.pop()}function v(){for(var o=arguments.length,h=new Array(o),u=0;u<o;u++)h[u]=arguments[u];var b=c(h);if(Array.isArray(h[0])&&(h=h[0]),h.length<2)throw new O("streams");var R,T=h.map(function(y,E){var A=E<h.length-1,I=E>0;return a(y,A,I,function(k){R||(R=k),k&&T.forEach(n),!A&&(T.forEach(n),b(R))})});return h.reduce(l)}return Me=v,Me}var ct=x,De=Oe.EventEmitter,ut=$;ut(x,De);x.Readable=et();x.Writable=Ze();x.Duplex=K();x.Transform=tt();x.PassThrough=ot();x.finished=Le();x.pipeline=lt();x.Stream=x;function x(){De.call(this)}x.prototype.pipe=function(w,m){var _=this;function O(c){w.writable&&w.write(c)===!1&&_.pause&&_.pause()}_.on("data",O);function M(){_.readable&&_.resume&&_.resume()}w.on("drain",M),!w._isStdio&&(!m||m.end!==!1)&&(_.on("end",p),_.on("close",a));var s=!1;function p(){s||(s=!0,w.end())}function a(){s||(s=!0,typeof w.destroy=="function"&&w.destroy())}function n(c){if(l(),De.listenerCount(this,"error")===0)throw c}_.on("error",n),w.on("error",n);function l(){_.removeListener("data",O),w.removeListener("drain",M),_.removeListener("end",p),_.removeListener("close",a),_.removeListener("error",n),w.removeListener("error",n),_.removeListener("end",l),_.removeListener("close",l),w.removeListener("close",l)}return _.on("end",l),_.on("close",l),w.on("close",l),w.emit("pipe",_),w};export{Ze as a,K as b,tt as c,ot as d,Le as e,lt as f,et as r,ct as s};
