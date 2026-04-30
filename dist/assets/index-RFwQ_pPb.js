(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const g of m.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&c(g)}).observe(document,{childList:!0,subtree:!0});function s(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function c(d){if(d.ep)return;d.ep=!0;const m=s(d);fetch(d.href,m)}})();var qo={exports:{}},Dr={},Zo={exports:{}},b={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uc;function Vd(){if(uc)return b;uc=1;var o=Symbol.for("react.element"),u=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),g=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),C=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),A=Symbol.iterator;function j(v){return v===null||typeof v!="object"?null:(v=A&&v[A]||v["@@iterator"],typeof v=="function"?v:null)}var Q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,T={};function F(v,N,J){this.props=v,this.context=N,this.refs=T,this.updater=J||Q}F.prototype.isReactComponent={},F.prototype.setState=function(v,N){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,N,"setState")},F.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function O(){}O.prototype=F.prototype;function Z(v,N,J){this.props=v,this.context=N,this.refs=T,this.updater=J||Q}var G=Z.prototype=new O;G.constructor=Z,V(G,F.prototype),G.isPureReactComponent=!0;var ne=Array.isArray,oe=Object.prototype.hasOwnProperty,ue={current:null},ve={key:!0,ref:!0,__self:!0,__source:!0};function Ce(v,N,J){var ee,re={},le=null,ce=null;if(N!=null)for(ee in N.ref!==void 0&&(ce=N.ref),N.key!==void 0&&(le=""+N.key),N)oe.call(N,ee)&&!ve.hasOwnProperty(ee)&&(re[ee]=N[ee]);var ae=arguments.length-2;if(ae===1)re.children=J;else if(1<ae){for(var me=Array(ae),Ge=0;Ge<ae;Ge++)me[Ge]=arguments[Ge+2];re.children=me}if(v&&v.defaultProps)for(ee in ae=v.defaultProps,ae)re[ee]===void 0&&(re[ee]=ae[ee]);return{$$typeof:o,type:v,key:le,ref:ce,props:re,_owner:ue.current}}function $e(v,N){return{$$typeof:o,type:v.type,key:N,ref:v.ref,props:v.props,_owner:v._owner}}function Ze(v){return typeof v=="object"&&v!==null&&v.$$typeof===o}function Pt(v){var N={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(J){return N[J]})}var nt=/\/+/g;function je(v,N){return typeof v=="object"&&v!==null&&v.key!=null?Pt(""+v.key):N.toString(36)}function He(v,N,J,ee,re){var le=typeof v;(le==="undefined"||le==="boolean")&&(v=null);var ce=!1;if(v===null)ce=!0;else switch(le){case"string":case"number":ce=!0;break;case"object":switch(v.$$typeof){case o:case u:ce=!0}}if(ce)return ce=v,re=re(ce),v=ee===""?"."+je(ce,0):ee,ne(re)?(J="",v!=null&&(J=v.replace(nt,"$&/")+"/"),He(re,N,J,"",function(Ge){return Ge})):re!=null&&(Ze(re)&&(re=$e(re,J+(!re.key||ce&&ce.key===re.key?"":(""+re.key).replace(nt,"$&/")+"/")+v)),N.push(re)),1;if(ce=0,ee=ee===""?".":ee+":",ne(v))for(var ae=0;ae<v.length;ae++){le=v[ae];var me=ee+je(le,ae);ce+=He(le,N,J,me,re)}else if(me=j(v),typeof me=="function")for(v=me.call(v),ae=0;!(le=v.next()).done;)le=le.value,me=ee+je(le,ae++),ce+=He(le,N,J,me,re);else if(le==="object")throw N=String(v),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return ce}function Ae(v,N,J){if(v==null)return v;var ee=[],re=0;return He(v,ee,"","",function(le){return N.call(J,le,re++)}),ee}function We(v){if(v._status===-1){var N=v._result;N=N(),N.then(function(J){(v._status===0||v._status===-1)&&(v._status=1,v._result=J)},function(J){(v._status===0||v._status===-1)&&(v._status=2,v._result=J)}),v._status===-1&&(v._status=0,v._result=N)}if(v._status===1)return v._result.default;throw v._result}var we={current:null},z={transition:null},X={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:z,ReactCurrentOwner:ue};function U(){throw Error("act(...) is not supported in production builds of React.")}return b.Children={map:Ae,forEach:function(v,N,J){Ae(v,function(){N.apply(this,arguments)},J)},count:function(v){var N=0;return Ae(v,function(){N++}),N},toArray:function(v){return Ae(v,function(N){return N})||[]},only:function(v){if(!Ze(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},b.Component=F,b.Fragment=s,b.Profiler=d,b.PureComponent=Z,b.StrictMode=c,b.Suspense=_,b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X,b.act=U,b.cloneElement=function(v,N,J){if(v==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+v+".");var ee=V({},v.props),re=v.key,le=v.ref,ce=v._owner;if(N!=null){if(N.ref!==void 0&&(le=N.ref,ce=ue.current),N.key!==void 0&&(re=""+N.key),v.type&&v.type.defaultProps)var ae=v.type.defaultProps;for(me in N)oe.call(N,me)&&!ve.hasOwnProperty(me)&&(ee[me]=N[me]===void 0&&ae!==void 0?ae[me]:N[me])}var me=arguments.length-2;if(me===1)ee.children=J;else if(1<me){ae=Array(me);for(var Ge=0;Ge<me;Ge++)ae[Ge]=arguments[Ge+2];ee.children=ae}return{$$typeof:o,type:v.type,key:re,ref:le,props:ee,_owner:ce}},b.createContext=function(v){return v={$$typeof:g,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},v.Provider={$$typeof:m,_context:v},v.Consumer=v},b.createElement=Ce,b.createFactory=function(v){var N=Ce.bind(null,v);return N.type=v,N},b.createRef=function(){return{current:null}},b.forwardRef=function(v){return{$$typeof:E,render:v}},b.isValidElement=Ze,b.lazy=function(v){return{$$typeof:P,_payload:{_status:-1,_result:v},_init:We}},b.memo=function(v,N){return{$$typeof:C,type:v,compare:N===void 0?null:N}},b.startTransition=function(v){var N=z.transition;z.transition={};try{v()}finally{z.transition=N}},b.unstable_act=U,b.useCallback=function(v,N){return we.current.useCallback(v,N)},b.useContext=function(v){return we.current.useContext(v)},b.useDebugValue=function(){},b.useDeferredValue=function(v){return we.current.useDeferredValue(v)},b.useEffect=function(v,N){return we.current.useEffect(v,N)},b.useId=function(){return we.current.useId()},b.useImperativeHandle=function(v,N,J){return we.current.useImperativeHandle(v,N,J)},b.useInsertionEffect=function(v,N){return we.current.useInsertionEffect(v,N)},b.useLayoutEffect=function(v,N){return we.current.useLayoutEffect(v,N)},b.useMemo=function(v,N){return we.current.useMemo(v,N)},b.useReducer=function(v,N,J){return we.current.useReducer(v,N,J)},b.useRef=function(v){return we.current.useRef(v)},b.useState=function(v){return we.current.useState(v)},b.useSyncExternalStore=function(v,N,J){return we.current.useSyncExternalStore(v,N,J)},b.useTransition=function(){return we.current.useTransition()},b.version="18.3.1",b}var cc;function oa(){return cc||(cc=1,Zo.exports=Vd()),Zo.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pc;function Kd(){if(pc)return Dr;pc=1;var o=oa(),u=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function g(E,_,C){var P,A={},j=null,Q=null;C!==void 0&&(j=""+C),_.key!==void 0&&(j=""+_.key),_.ref!==void 0&&(Q=_.ref);for(P in _)c.call(_,P)&&!m.hasOwnProperty(P)&&(A[P]=_[P]);if(E&&E.defaultProps)for(P in _=E.defaultProps,_)A[P]===void 0&&(A[P]=_[P]);return{$$typeof:u,type:E,key:j,ref:Q,props:A,_owner:d.current}}return Dr.Fragment=s,Dr.jsx=g,Dr.jsxs=g,Dr}var dc;function Yd(){return dc||(dc=1,qo.exports=Kd()),qo.exports}var S=Yd(),k=oa(),Kl={},Go={exports:{}},qe={},Jo={exports:{}},bo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fc;function Xd(){return fc||(fc=1,(function(o){function u(z,X){var U=z.length;z.push(X);e:for(;0<U;){var v=U-1>>>1,N=z[v];if(0<d(N,X))z[v]=X,z[U]=N,U=v;else break e}}function s(z){return z.length===0?null:z[0]}function c(z){if(z.length===0)return null;var X=z[0],U=z.pop();if(U!==X){z[0]=U;e:for(var v=0,N=z.length,J=N>>>1;v<J;){var ee=2*(v+1)-1,re=z[ee],le=ee+1,ce=z[le];if(0>d(re,U))le<N&&0>d(ce,re)?(z[v]=ce,z[le]=U,v=le):(z[v]=re,z[ee]=U,v=ee);else if(le<N&&0>d(ce,U))z[v]=ce,z[le]=U,v=le;else break e}}return X}function d(z,X){var U=z.sortIndex-X.sortIndex;return U!==0?U:z.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var m=performance;o.unstable_now=function(){return m.now()}}else{var g=Date,E=g.now();o.unstable_now=function(){return g.now()-E}}var _=[],C=[],P=1,A=null,j=3,Q=!1,V=!1,T=!1,F=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(z){for(var X=s(C);X!==null;){if(X.callback===null)c(C);else if(X.startTime<=z)c(C),X.sortIndex=X.expirationTime,u(_,X);else break;X=s(C)}}function ne(z){if(T=!1,G(z),!V)if(s(_)!==null)V=!0,We(oe);else{var X=s(C);X!==null&&we(ne,X.startTime-z)}}function oe(z,X){V=!1,T&&(T=!1,O(Ce),Ce=-1),Q=!0;var U=j;try{for(G(X),A=s(_);A!==null&&(!(A.expirationTime>X)||z&&!Pt());){var v=A.callback;if(typeof v=="function"){A.callback=null,j=A.priorityLevel;var N=v(A.expirationTime<=X);X=o.unstable_now(),typeof N=="function"?A.callback=N:A===s(_)&&c(_),G(X)}else c(_);A=s(_)}if(A!==null)var J=!0;else{var ee=s(C);ee!==null&&we(ne,ee.startTime-X),J=!1}return J}finally{A=null,j=U,Q=!1}}var ue=!1,ve=null,Ce=-1,$e=5,Ze=-1;function Pt(){return!(o.unstable_now()-Ze<$e)}function nt(){if(ve!==null){var z=o.unstable_now();Ze=z;var X=!0;try{X=ve(!0,z)}finally{X?je():(ue=!1,ve=null)}}else ue=!1}var je;if(typeof Z=="function")je=function(){Z(nt)};else if(typeof MessageChannel<"u"){var He=new MessageChannel,Ae=He.port2;He.port1.onmessage=nt,je=function(){Ae.postMessage(null)}}else je=function(){F(nt,0)};function We(z){ve=z,ue||(ue=!0,je())}function we(z,X){Ce=F(function(){z(o.unstable_now())},X)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_continueExecution=function(){V||Q||(V=!0,We(oe))},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$e=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return j},o.unstable_getFirstCallbackNode=function(){return s(_)},o.unstable_next=function(z){switch(j){case 1:case 2:case 3:var X=3;break;default:X=j}var U=j;j=X;try{return z()}finally{j=U}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(z,X){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var U=j;j=z;try{return X()}finally{j=U}},o.unstable_scheduleCallback=function(z,X,U){var v=o.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?v+U:v):U=v,z){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=U+N,z={id:P++,callback:X,priorityLevel:z,startTime:U,expirationTime:N,sortIndex:-1},U>v?(z.sortIndex=U,u(C,z),s(_)===null&&z===s(C)&&(T?(O(Ce),Ce=-1):T=!0,we(ne,U-v))):(z.sortIndex=N,u(_,z),V||Q||(V=!0,We(oe))),z},o.unstable_shouldYield=Pt,o.unstable_wrapCallback=function(z){var X=j;return function(){var U=j;j=X;try{return z.apply(this,arguments)}finally{j=U}}}})(bo)),bo}var mc;function qd(){return mc||(mc=1,Jo.exports=Xd()),Jo.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hc;function Zd(){if(hc)return qe;hc=1;var o=oa(),u=qd();function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=new Set,d={};function m(e,t){g(e,t),g(e+"Capture",t)}function g(e,t){for(d[e]=t,e=0;e<t.length;e++)c.add(t[e])}var E=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_=Object.prototype.hasOwnProperty,C=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,P={},A={};function j(e){return _.call(A,e)?!0:_.call(P,e)?!1:C.test(e)?A[e]=!0:(P[e]=!0,!1)}function Q(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function V(e,t,n,r){if(t===null||typeof t>"u"||Q(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function T(e,t,n,r,l,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var F={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){F[e]=new T(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];F[t]=new T(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){F[e]=new T(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){F[e]=new T(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){F[e]=new T(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){F[e]=new T(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){F[e]=new T(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){F[e]=new T(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){F[e]=new T(e,5,!1,e.toLowerCase(),null,!1,!1)});var O=/[\-:]([a-z])/g;function Z(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(O,Z);F[t]=new T(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(O,Z);F[t]=new T(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(O,Z);F[t]=new T(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){F[e]=new T(e,1,!1,e.toLowerCase(),null,!1,!1)}),F.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){F[e]=new T(e,1,!1,e.toLowerCase(),null,!0,!0)});function G(e,t,n,r){var l=F.hasOwnProperty(t)?F[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(V(t,n,l,r)&&(n=null),r||l===null?j(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ne=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oe=Symbol.for("react.element"),ue=Symbol.for("react.portal"),ve=Symbol.for("react.fragment"),Ce=Symbol.for("react.strict_mode"),$e=Symbol.for("react.profiler"),Ze=Symbol.for("react.provider"),Pt=Symbol.for("react.context"),nt=Symbol.for("react.forward_ref"),je=Symbol.for("react.suspense"),He=Symbol.for("react.suspense_list"),Ae=Symbol.for("react.memo"),We=Symbol.for("react.lazy"),we=Symbol.for("react.offscreen"),z=Symbol.iterator;function X(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var U=Object.assign,v;function N(e){if(v===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);v=t&&t[1]||""}return`
`+v+e}var J=!1;function ee(e,t){if(!e||J)return"";J=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(w){var r=w}Reflect.construct(e,[],t)}else{try{t.call()}catch(w){r=w}e.call(t.prototype)}else{try{throw Error()}catch(w){r=w}e()}}catch(w){if(w&&r&&typeof w.stack=="string"){for(var l=w.stack.split(`
`),i=r.stack.split(`
`),a=l.length-1,p=i.length-1;1<=a&&0<=p&&l[a]!==i[p];)p--;for(;1<=a&&0<=p;a--,p--)if(l[a]!==i[p]){if(a!==1||p!==1)do if(a--,p--,0>p||l[a]!==i[p]){var f=`
`+l[a].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=a&&0<=p);break}}}finally{J=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?N(e):""}function re(e){switch(e.tag){case 5:return N(e.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return e=ee(e.type,!1),e;case 11:return e=ee(e.type.render,!1),e;case 1:return e=ee(e.type,!0),e;default:return""}}function le(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ve:return"Fragment";case ue:return"Portal";case $e:return"Profiler";case Ce:return"StrictMode";case je:return"Suspense";case He:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Pt:return(e.displayName||"Context")+".Consumer";case Ze:return(e._context.displayName||"Context")+".Provider";case nt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ae:return t=e.displayName||null,t!==null?t:le(e.type)||"Memo";case We:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}function ce(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return le(t);case 8:return t===Ce?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ae(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function me(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ge(e){var t=me(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zr(e){e._valueTracker||(e._valueTracker=Ge(e))}function ha(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=me(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Mr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ti(e,t){var n=t.checked;return U({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function va(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ae(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ya(e,t){t=t.checked,t!=null&&G(e,"checked",t,!1)}function ni(e,t){ya(e,t);var n=ae(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ri(e,t.type,n):t.hasOwnProperty("defaultValue")&&ri(e,t.type,ae(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ga(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ri(e,t,n){(t!=="number"||Mr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Vn=Array.isArray;function yn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ae(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function li(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(s(91));return U({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(s(92));if(Vn(n)){if(1<n.length)throw Error(s(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ae(n)}}function wa(e,t){var n=ae(t.value),r=ae(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function _a(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ea(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ii(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ea(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ir,ka=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ir=Ir||document.createElement("div"),Ir.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ir.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Kn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Yn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qc=["Webkit","ms","Moz","O"];Object.keys(Yn).forEach(function(e){qc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Yn[t]=Yn[e]})});function Sa(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Yn.hasOwnProperty(e)&&Yn[e]?(""+t).trim():t+"px"}function Ca(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Sa(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Zc=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oi(e,t){if(t){if(Zc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(s(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(t.style!=null&&typeof t.style!="object")throw Error(s(62))}}function ai(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var si=null;function ui(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ci=null,gn=null,xn=null;function Aa(e){if(e=hr(e)){if(typeof ci!="function")throw Error(s(280));var t=e.stateNode;t&&(t=al(t),ci(e.stateNode,e.type,t))}}function Pa(e){gn?xn?xn.push(e):xn=[e]:gn=e}function Ra(){if(gn){var e=gn,t=xn;if(xn=gn=null,Aa(e),t)for(e=0;e<t.length;e++)Aa(t[e])}}function Na(e,t){return e(t)}function Da(){}var pi=!1;function La(e,t,n){if(pi)return e(t,n);pi=!0;try{return Na(e,t,n)}finally{pi=!1,(gn!==null||xn!==null)&&(Da(),Ra())}}function Xn(e,t){var n=e.stateNode;if(n===null)return null;var r=al(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var di=!1;if(E)try{var qn={};Object.defineProperty(qn,"passive",{get:function(){di=!0}}),window.addEventListener("test",qn,qn),window.removeEventListener("test",qn,qn)}catch{di=!1}function Gc(e,t,n,r,l,i,a,p,f){var w=Array.prototype.slice.call(arguments,3);try{t.apply(n,w)}catch(D){this.onError(D)}}var Zn=!1,Or=null,Ur=!1,fi=null,Jc={onError:function(e){Zn=!0,Or=e}};function bc(e,t,n,r,l,i,a,p,f){Zn=!1,Or=null,Gc.apply(Jc,arguments)}function ep(e,t,n,r,l,i,a,p,f){if(bc.apply(this,arguments),Zn){if(Zn){var w=Or;Zn=!1,Or=null}else throw Error(s(198));Ur||(Ur=!0,fi=w)}}function rn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ba(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fa(e){if(rn(e)!==e)throw Error(s(188))}function tp(e){var t=e.alternate;if(!t){if(t=rn(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Fa(l),e;if(i===r)return Fa(l),t;i=i.sibling}throw Error(s(188))}if(n.return!==r.return)n=l,r=i;else{for(var a=!1,p=l.child;p;){if(p===n){a=!0,n=l,r=i;break}if(p===r){a=!0,r=l,n=i;break}p=p.sibling}if(!a){for(p=i.child;p;){if(p===n){a=!0,n=i,r=l;break}if(p===r){a=!0,r=i,n=l;break}p=p.sibling}if(!a)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function ja(e){return e=tp(e),e!==null?Ta(e):null}function Ta(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ta(e);if(t!==null)return t;e=e.sibling}return null}var za=u.unstable_scheduleCallback,Ma=u.unstable_cancelCallback,np=u.unstable_shouldYield,rp=u.unstable_requestPaint,Ee=u.unstable_now,lp=u.unstable_getCurrentPriorityLevel,mi=u.unstable_ImmediatePriority,Ia=u.unstable_UserBlockingPriority,$r=u.unstable_NormalPriority,ip=u.unstable_LowPriority,Oa=u.unstable_IdlePriority,Hr=null,yt=null;function op(e){if(yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(Hr,e,void 0,(e.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:up,ap=Math.log,sp=Math.LN2;function up(e){return e>>>=0,e===0?32:31-(ap(e)/sp|0)|0}var Wr=64,Qr=4194304;function Gn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Vr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var p=a&~l;p!==0?r=Gn(p):(i&=a,i!==0&&(r=Gn(i)))}else a=n&~l,a!==0?r=Gn(a):i!==0&&(r=Gn(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&l)===0&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ct(t),l=1<<n,r|=e[n],t&=~l;return r}function cp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-ct(i),p=1<<a,f=l[a];f===-1?((p&n)===0||(p&r)!==0)&&(l[a]=cp(p,t)):f<=t&&(e.expiredLanes|=p),i&=~p}}function hi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ua(){var e=Wr;return Wr<<=1,(Wr&4194240)===0&&(Wr=64),e}function vi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Jn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ct(t),e[t]=n}function dp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-ct(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function yi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ct(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var se=0;function $a(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ha,gi,Wa,Qa,Va,xi=!1,Kr=[],Mt=null,It=null,Ot=null,bn=new Map,er=new Map,Ut=[],fp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ka(e,t){switch(e){case"focusin":case"focusout":Mt=null;break;case"dragenter":case"dragleave":It=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":er.delete(t.pointerId)}}function tr(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=hr(t),t!==null&&gi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function mp(e,t,n,r,l){switch(t){case"focusin":return Mt=tr(Mt,e,t,n,r,l),!0;case"dragenter":return It=tr(It,e,t,n,r,l),!0;case"mouseover":return Ot=tr(Ot,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return bn.set(i,tr(bn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,er.set(i,tr(er.get(i)||null,e,t,n,r,l)),!0}return!1}function Ya(e){var t=ln(e.target);if(t!==null){var n=rn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ba(n),t!==null){e.blockedOn=t,Va(e.priority,function(){Wa(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_i(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);si=r,n.target.dispatchEvent(r),si=null}else return t=hr(n),t!==null&&gi(t),e.blockedOn=n,!1;t.shift()}return!0}function Xa(e,t,n){Yr(e)&&n.delete(t)}function hp(){xi=!1,Mt!==null&&Yr(Mt)&&(Mt=null),It!==null&&Yr(It)&&(It=null),Ot!==null&&Yr(Ot)&&(Ot=null),bn.forEach(Xa),er.forEach(Xa)}function nr(e,t){e.blockedOn===t&&(e.blockedOn=null,xi||(xi=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,hp)))}function rr(e){function t(l){return nr(l,e)}if(0<Kr.length){nr(Kr[0],e);for(var n=1;n<Kr.length;n++){var r=Kr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Mt!==null&&nr(Mt,e),It!==null&&nr(It,e),Ot!==null&&nr(Ot,e),bn.forEach(t),er.forEach(t),n=0;n<Ut.length;n++)r=Ut[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ut.length&&(n=Ut[0],n.blockedOn===null);)Ya(n),n.blockedOn===null&&Ut.shift()}var wn=ne.ReactCurrentBatchConfig,Xr=!0;function vp(e,t,n,r){var l=se,i=wn.transition;wn.transition=null;try{se=1,wi(e,t,n,r)}finally{se=l,wn.transition=i}}function yp(e,t,n,r){var l=se,i=wn.transition;wn.transition=null;try{se=4,wi(e,t,n,r)}finally{se=l,wn.transition=i}}function wi(e,t,n,r){if(Xr){var l=_i(e,t,n,r);if(l===null)Ii(e,t,r,qr,n),Ka(e,r);else if(mp(l,e,t,n,r))r.stopPropagation();else if(Ka(e,r),t&4&&-1<fp.indexOf(e)){for(;l!==null;){var i=hr(l);if(i!==null&&Ha(i),i=_i(e,t,n,r),i===null&&Ii(e,t,r,qr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Ii(e,t,r,null,n)}}var qr=null;function _i(e,t,n,r){if(qr=null,e=ui(r),e=ln(e),e!==null)if(t=rn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ba(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qr=e,null}function qa(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lp()){case mi:return 1;case Ia:return 4;case $r:case ip:return 16;case Oa:return 536870912;default:return 16}default:return 16}}var $t=null,Ei=null,Zr=null;function Za(){if(Zr)return Zr;var e,t=Ei,n=t.length,r,l="value"in $t?$t.value:$t.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===l[i-r];r++);return Zr=l.slice(e,1<r?1-r:void 0)}function Gr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Jr(){return!0}function Ga(){return!1}function Je(e){function t(n,r,l,i,a){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(n=e[p],this[p]=n?n(i):i[p]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Jr:Ga,this.isPropagationStopped=Ga,this}return U(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Jr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Jr)},persist:function(){},isPersistent:Jr}),t}var _n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ki=Je(_n),lr=U({},_n,{view:0,detail:0}),gp=Je(lr),Si,Ci,ir,br=U({},lr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ir&&(ir&&e.type==="mousemove"?(Si=e.screenX-ir.screenX,Ci=e.screenY-ir.screenY):Ci=Si=0,ir=e),Si)},movementY:function(e){return"movementY"in e?e.movementY:Ci}}),Ja=Je(br),xp=U({},br,{dataTransfer:0}),wp=Je(xp),_p=U({},lr,{relatedTarget:0}),Ai=Je(_p),Ep=U({},_n,{animationName:0,elapsedTime:0,pseudoElement:0}),kp=Je(Ep),Sp=U({},_n,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cp=Je(Sp),Ap=U({},_n,{data:0}),ba=Je(Ap),Pp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Np={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Np[e])?!!t[e]:!1}function Pi(){return Dp}var Lp=U({},lr,{key:function(e){if(e.key){var t=Pp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Gr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pi,charCode:function(e){return e.type==="keypress"?Gr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bp=Je(Lp),Fp=U({},br,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),es=Je(Fp),jp=U({},lr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pi}),Tp=Je(jp),zp=U({},_n,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mp=Je(zp),Ip=U({},br,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Op=Je(Ip),Up=[9,13,27,32],Ri=E&&"CompositionEvent"in window,or=null;E&&"documentMode"in document&&(or=document.documentMode);var $p=E&&"TextEvent"in window&&!or,ts=E&&(!Ri||or&&8<or&&11>=or),ns=" ",rs=!1;function ls(e,t){switch(e){case"keyup":return Up.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function is(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var En=!1;function Hp(e,t){switch(e){case"compositionend":return is(t);case"keypress":return t.which!==32?null:(rs=!0,ns);case"textInput":return e=t.data,e===ns&&rs?null:e;default:return null}}function Wp(e,t){if(En)return e==="compositionend"||!Ri&&ls(e,t)?(e=Za(),Zr=Ei=$t=null,En=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ts&&t.locale!=="ko"?null:t.data;default:return null}}var Qp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function os(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qp[e.type]:t==="textarea"}function as(e,t,n,r){Pa(r),t=ll(t,"onChange"),0<t.length&&(n=new ki("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ar=null,sr=null;function Vp(e){Cs(e,0)}function el(e){var t=Pn(e);if(ha(t))return e}function Kp(e,t){if(e==="change")return t}var ss=!1;if(E){var Ni;if(E){var Di="oninput"in document;if(!Di){var us=document.createElement("div");us.setAttribute("oninput","return;"),Di=typeof us.oninput=="function"}Ni=Di}else Ni=!1;ss=Ni&&(!document.documentMode||9<document.documentMode)}function cs(){ar&&(ar.detachEvent("onpropertychange",ps),sr=ar=null)}function ps(e){if(e.propertyName==="value"&&el(sr)){var t=[];as(t,sr,e,ui(e)),La(Vp,t)}}function Yp(e,t,n){e==="focusin"?(cs(),ar=t,sr=n,ar.attachEvent("onpropertychange",ps)):e==="focusout"&&cs()}function Xp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return el(sr)}function qp(e,t){if(e==="click")return el(t)}function Zp(e,t){if(e==="input"||e==="change")return el(t)}function Gp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pt=typeof Object.is=="function"?Object.is:Gp;function ur(e,t){if(pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!_.call(t,l)||!pt(e[l],t[l]))return!1}return!0}function ds(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fs(e,t){var n=ds(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ds(n)}}function ms(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ms(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hs(){for(var e=window,t=Mr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Mr(e.document)}return t}function Li(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Jp(e){var t=hs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ms(n.ownerDocument.documentElement,n)){if(r!==null&&Li(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=fs(n,i);var a=fs(n,r);l&&a&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var bp=E&&"documentMode"in document&&11>=document.documentMode,kn=null,Bi=null,cr=null,Fi=!1;function vs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fi||kn==null||kn!==Mr(r)||(r=kn,"selectionStart"in r&&Li(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),cr&&ur(cr,r)||(cr=r,r=ll(Bi,"onSelect"),0<r.length&&(t=new ki("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=kn)))}function tl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sn={animationend:tl("Animation","AnimationEnd"),animationiteration:tl("Animation","AnimationIteration"),animationstart:tl("Animation","AnimationStart"),transitionend:tl("Transition","TransitionEnd")},ji={},ys={};E&&(ys=document.createElement("div").style,"AnimationEvent"in window||(delete Sn.animationend.animation,delete Sn.animationiteration.animation,delete Sn.animationstart.animation),"TransitionEvent"in window||delete Sn.transitionend.transition);function nl(e){if(ji[e])return ji[e];if(!Sn[e])return e;var t=Sn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ys)return ji[e]=t[n];return e}var gs=nl("animationend"),xs=nl("animationiteration"),ws=nl("animationstart"),_s=nl("transitionend"),Es=new Map,ks="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ht(e,t){Es.set(e,t),m(t,[e])}for(var Ti=0;Ti<ks.length;Ti++){var zi=ks[Ti],ed=zi.toLowerCase(),td=zi[0].toUpperCase()+zi.slice(1);Ht(ed,"on"+td)}Ht(gs,"onAnimationEnd"),Ht(xs,"onAnimationIteration"),Ht(ws,"onAnimationStart"),Ht("dblclick","onDoubleClick"),Ht("focusin","onFocus"),Ht("focusout","onBlur"),Ht(_s,"onTransitionEnd"),g("onMouseEnter",["mouseout","mouseover"]),g("onMouseLeave",["mouseout","mouseover"]),g("onPointerEnter",["pointerout","pointerover"]),g("onPointerLeave",["pointerout","pointerover"]),m("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),m("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),m("onBeforeInput",["compositionend","keypress","textInput","paste"]),m("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nd=new Set("cancel close invalid load scroll toggle".split(" ").concat(pr));function Ss(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ep(r,t,void 0,e),e.currentTarget=null}function Cs(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var p=r[a],f=p.instance,w=p.currentTarget;if(p=p.listener,f!==i&&l.isPropagationStopped())break e;Ss(l,p,w),i=f}else for(a=0;a<r.length;a++){if(p=r[a],f=p.instance,w=p.currentTarget,p=p.listener,f!==i&&l.isPropagationStopped())break e;Ss(l,p,w),i=f}}}if(Ur)throw e=fi,Ur=!1,fi=null,e}function de(e,t){var n=t[Qi];n===void 0&&(n=t[Qi]=new Set);var r=e+"__bubble";n.has(r)||(As(t,e,2,!1),n.add(r))}function Mi(e,t,n){var r=0;t&&(r|=4),As(n,e,r,t)}var rl="_reactListening"+Math.random().toString(36).slice(2);function dr(e){if(!e[rl]){e[rl]=!0,c.forEach(function(n){n!=="selectionchange"&&(nd.has(n)||Mi(n,!1,e),Mi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[rl]||(t[rl]=!0,Mi("selectionchange",!1,t))}}function As(e,t,n,r){switch(qa(t)){case 1:var l=vp;break;case 4:l=yp;break;default:l=wi}n=l.bind(null,t,n,e),l=void 0,!di||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ii(e,t,n,r,l){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var p=r.stateNode.containerInfo;if(p===l||p.nodeType===8&&p.parentNode===l)break;if(a===4)for(a=r.return;a!==null;){var f=a.tag;if((f===3||f===4)&&(f=a.stateNode.containerInfo,f===l||f.nodeType===8&&f.parentNode===l))return;a=a.return}for(;p!==null;){if(a=ln(p),a===null)return;if(f=a.tag,f===5||f===6){r=i=a;continue e}p=p.parentNode}}r=r.return}La(function(){var w=i,D=ui(n),L=[];e:{var R=Es.get(e);if(R!==void 0){var M=ki,$=e;switch(e){case"keypress":if(Gr(n)===0)break e;case"keydown":case"keyup":M=Bp;break;case"focusin":$="focus",M=Ai;break;case"focusout":$="blur",M=Ai;break;case"beforeblur":case"afterblur":M=Ai;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=Ja;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=wp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=Tp;break;case gs:case xs:case ws:M=kp;break;case _s:M=Mp;break;case"scroll":M=gp;break;case"wheel":M=Op;break;case"copy":case"cut":case"paste":M=Cp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=es}var H=(t&4)!==0,ke=!H&&e==="scroll",y=H?R!==null?R+"Capture":null:R;H=[];for(var h=w,x;h!==null;){x=h;var B=x.stateNode;if(x.tag===5&&B!==null&&(x=B,y!==null&&(B=Xn(h,y),B!=null&&H.push(fr(h,B,x)))),ke)break;h=h.return}0<H.length&&(R=new M(R,$,null,n,D),L.push({event:R,listeners:H}))}}if((t&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",R&&n!==si&&($=n.relatedTarget||n.fromElement)&&(ln($)||$[Rt]))break e;if((M||R)&&(R=D.window===D?D:(R=D.ownerDocument)?R.defaultView||R.parentWindow:window,M?($=n.relatedTarget||n.toElement,M=w,$=$?ln($):null,$!==null&&(ke=rn($),$!==ke||$.tag!==5&&$.tag!==6)&&($=null)):(M=null,$=w),M!==$)){if(H=Ja,B="onMouseLeave",y="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(H=es,B="onPointerLeave",y="onPointerEnter",h="pointer"),ke=M==null?R:Pn(M),x=$==null?R:Pn($),R=new H(B,h+"leave",M,n,D),R.target=ke,R.relatedTarget=x,B=null,ln(D)===w&&(H=new H(y,h+"enter",$,n,D),H.target=x,H.relatedTarget=ke,B=H),ke=B,M&&$)t:{for(H=M,y=$,h=0,x=H;x;x=Cn(x))h++;for(x=0,B=y;B;B=Cn(B))x++;for(;0<h-x;)H=Cn(H),h--;for(;0<x-h;)y=Cn(y),x--;for(;h--;){if(H===y||y!==null&&H===y.alternate)break t;H=Cn(H),y=Cn(y)}H=null}else H=null;M!==null&&Ps(L,R,M,H,!1),$!==null&&ke!==null&&Ps(L,ke,$,H,!0)}}e:{if(R=w?Pn(w):window,M=R.nodeName&&R.nodeName.toLowerCase(),M==="select"||M==="input"&&R.type==="file")var W=Kp;else if(os(R))if(ss)W=Zp;else{W=Xp;var K=Yp}else(M=R.nodeName)&&M.toLowerCase()==="input"&&(R.type==="checkbox"||R.type==="radio")&&(W=qp);if(W&&(W=W(e,w))){as(L,W,n,D);break e}K&&K(e,R,w),e==="focusout"&&(K=R._wrapperState)&&K.controlled&&R.type==="number"&&ri(R,"number",R.value)}switch(K=w?Pn(w):window,e){case"focusin":(os(K)||K.contentEditable==="true")&&(kn=K,Bi=w,cr=null);break;case"focusout":cr=Bi=kn=null;break;case"mousedown":Fi=!0;break;case"contextmenu":case"mouseup":case"dragend":Fi=!1,vs(L,n,D);break;case"selectionchange":if(bp)break;case"keydown":case"keyup":vs(L,n,D)}var Y;if(Ri)e:{switch(e){case"compositionstart":var q="onCompositionStart";break e;case"compositionend":q="onCompositionEnd";break e;case"compositionupdate":q="onCompositionUpdate";break e}q=void 0}else En?ls(e,n)&&(q="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(q="onCompositionStart");q&&(ts&&n.locale!=="ko"&&(En||q!=="onCompositionStart"?q==="onCompositionEnd"&&En&&(Y=Za()):($t=D,Ei="value"in $t?$t.value:$t.textContent,En=!0)),K=ll(w,q),0<K.length&&(q=new ba(q,e,null,n,D),L.push({event:q,listeners:K}),Y?q.data=Y:(Y=is(n),Y!==null&&(q.data=Y)))),(Y=$p?Hp(e,n):Wp(e,n))&&(w=ll(w,"onBeforeInput"),0<w.length&&(D=new ba("onBeforeInput","beforeinput",null,n,D),L.push({event:D,listeners:w}),D.data=Y))}Cs(L,t)})}function fr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ll(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Xn(e,n),i!=null&&r.unshift(fr(e,i,l)),i=Xn(e,t),i!=null&&r.push(fr(e,i,l))),e=e.return}return r}function Cn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ps(e,t,n,r,l){for(var i=t._reactName,a=[];n!==null&&n!==r;){var p=n,f=p.alternate,w=p.stateNode;if(f!==null&&f===r)break;p.tag===5&&w!==null&&(p=w,l?(f=Xn(n,i),f!=null&&a.unshift(fr(n,f,p))):l||(f=Xn(n,i),f!=null&&a.push(fr(n,f,p)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var rd=/\r\n?/g,ld=/\u0000|\uFFFD/g;function Rs(e){return(typeof e=="string"?e:""+e).replace(rd,`
`).replace(ld,"")}function il(e,t,n){if(t=Rs(t),Rs(e)!==t&&n)throw Error(s(425))}function ol(){}var Oi=null,Ui=null;function $i(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hi=typeof setTimeout=="function"?setTimeout:void 0,id=typeof clearTimeout=="function"?clearTimeout:void 0,Ns=typeof Promise=="function"?Promise:void 0,od=typeof queueMicrotask=="function"?queueMicrotask:typeof Ns<"u"?function(e){return Ns.resolve(null).then(e).catch(ad)}:Hi;function ad(e){setTimeout(function(){throw e})}function Wi(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),rr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);rr(t)}function Wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ds(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var An=Math.random().toString(36).slice(2),gt="__reactFiber$"+An,mr="__reactProps$"+An,Rt="__reactContainer$"+An,Qi="__reactEvents$"+An,sd="__reactListeners$"+An,ud="__reactHandles$"+An;function ln(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Rt]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ds(e);e!==null;){if(n=e[gt])return n;e=Ds(e)}return t}e=n,n=e.parentNode}return null}function hr(e){return e=e[gt]||e[Rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Pn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function al(e){return e[mr]||null}var Vi=[],Rn=-1;function Qt(e){return{current:e}}function fe(e){0>Rn||(e.current=Vi[Rn],Vi[Rn]=null,Rn--)}function pe(e,t){Rn++,Vi[Rn]=e.current,e.current=t}var Vt={},Te=Qt(Vt),Qe=Qt(!1),on=Vt;function Nn(e,t){var n=e.type.contextTypes;if(!n)return Vt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Ve(e){return e=e.childContextTypes,e!=null}function sl(){fe(Qe),fe(Te)}function Ls(e,t,n){if(Te.current!==Vt)throw Error(s(168));pe(Te,t),pe(Qe,n)}function Bs(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(s(108,ce(e)||"Unknown",l));return U({},n,r)}function ul(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vt,on=Te.current,pe(Te,e),pe(Qe,Qe.current),!0}function Fs(e,t,n){var r=e.stateNode;if(!r)throw Error(s(169));n?(e=Bs(e,t,on),r.__reactInternalMemoizedMergedChildContext=e,fe(Qe),fe(Te),pe(Te,e)):fe(Qe),pe(Qe,n)}var Nt=null,cl=!1,Ki=!1;function js(e){Nt===null?Nt=[e]:Nt.push(e)}function cd(e){cl=!0,js(e)}function Kt(){if(!Ki&&Nt!==null){Ki=!0;var e=0,t=se;try{var n=Nt;for(se=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Nt=null,cl=!1}catch(l){throw Nt!==null&&(Nt=Nt.slice(e+1)),za(mi,Kt),l}finally{se=t,Ki=!1}}return null}var Dn=[],Ln=0,pl=null,dl=0,rt=[],lt=0,an=null,Dt=1,Lt="";function sn(e,t){Dn[Ln++]=dl,Dn[Ln++]=pl,pl=e,dl=t}function Ts(e,t,n){rt[lt++]=Dt,rt[lt++]=Lt,rt[lt++]=an,an=e;var r=Dt;e=Lt;var l=32-ct(r)-1;r&=~(1<<l),n+=1;var i=32-ct(t)+l;if(30<i){var a=l-l%5;i=(r&(1<<a)-1).toString(32),r>>=a,l-=a,Dt=1<<32-ct(t)+l|n<<l|r,Lt=i+e}else Dt=1<<i|n<<l|r,Lt=e}function Yi(e){e.return!==null&&(sn(e,1),Ts(e,1,0))}function Xi(e){for(;e===pl;)pl=Dn[--Ln],Dn[Ln]=null,dl=Dn[--Ln],Dn[Ln]=null;for(;e===an;)an=rt[--lt],rt[lt]=null,Lt=rt[--lt],rt[lt]=null,Dt=rt[--lt],rt[lt]=null}var be=null,et=null,he=!1,dt=null;function zs(e,t){var n=st(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ms(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,be=e,et=Wt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,be=e,et=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=an!==null?{id:Dt,overflow:Lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=st(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,be=e,et=null,!0):!1;default:return!1}}function qi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Zi(e){if(he){var t=et;if(t){var n=t;if(!Ms(e,t)){if(qi(e))throw Error(s(418));t=Wt(n.nextSibling);var r=be;t&&Ms(e,t)?zs(r,n):(e.flags=e.flags&-4097|2,he=!1,be=e)}}else{if(qi(e))throw Error(s(418));e.flags=e.flags&-4097|2,he=!1,be=e}}}function Is(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;be=e}function fl(e){if(e!==be)return!1;if(!he)return Is(e),he=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!$i(e.type,e.memoizedProps)),t&&(t=et)){if(qi(e))throw Os(),Error(s(418));for(;t;)zs(e,t),t=Wt(t.nextSibling)}if(Is(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){et=Wt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}et=null}}else et=be?Wt(e.stateNode.nextSibling):null;return!0}function Os(){for(var e=et;e;)e=Wt(e.nextSibling)}function Bn(){et=be=null,he=!1}function Gi(e){dt===null?dt=[e]:dt.push(e)}var pd=ne.ReactCurrentBatchConfig;function vr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(s(309));var r=n.stateNode}if(!r)throw Error(s(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var p=l.refs;a===null?delete p[i]:p[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(s(284));if(!n._owner)throw Error(s(290,e))}return e}function ml(e,t){throw e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Us(e){var t=e._init;return t(e._payload)}function $s(e){function t(y,h){if(e){var x=y.deletions;x===null?(y.deletions=[h],y.flags|=16):x.push(h)}}function n(y,h){if(!e)return null;for(;h!==null;)t(y,h),h=h.sibling;return null}function r(y,h){for(y=new Map;h!==null;)h.key!==null?y.set(h.key,h):y.set(h.index,h),h=h.sibling;return y}function l(y,h){return y=en(y,h),y.index=0,y.sibling=null,y}function i(y,h,x){return y.index=x,e?(x=y.alternate,x!==null?(x=x.index,x<h?(y.flags|=2,h):x):(y.flags|=2,h)):(y.flags|=1048576,h)}function a(y){return e&&y.alternate===null&&(y.flags|=2),y}function p(y,h,x,B){return h===null||h.tag!==6?(h=Wo(x,y.mode,B),h.return=y,h):(h=l(h,x),h.return=y,h)}function f(y,h,x,B){var W=x.type;return W===ve?D(y,h,x.props.children,B,x.key):h!==null&&(h.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===We&&Us(W)===h.type)?(B=l(h,x.props),B.ref=vr(y,h,x),B.return=y,B):(B=Il(x.type,x.key,x.props,null,y.mode,B),B.ref=vr(y,h,x),B.return=y,B)}function w(y,h,x,B){return h===null||h.tag!==4||h.stateNode.containerInfo!==x.containerInfo||h.stateNode.implementation!==x.implementation?(h=Qo(x,y.mode,B),h.return=y,h):(h=l(h,x.children||[]),h.return=y,h)}function D(y,h,x,B,W){return h===null||h.tag!==7?(h=vn(x,y.mode,B,W),h.return=y,h):(h=l(h,x),h.return=y,h)}function L(y,h,x){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Wo(""+h,y.mode,x),h.return=y,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case oe:return x=Il(h.type,h.key,h.props,null,y.mode,x),x.ref=vr(y,null,h),x.return=y,x;case ue:return h=Qo(h,y.mode,x),h.return=y,h;case We:var B=h._init;return L(y,B(h._payload),x)}if(Vn(h)||X(h))return h=vn(h,y.mode,x,null),h.return=y,h;ml(y,h)}return null}function R(y,h,x,B){var W=h!==null?h.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return W!==null?null:p(y,h,""+x,B);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case oe:return x.key===W?f(y,h,x,B):null;case ue:return x.key===W?w(y,h,x,B):null;case We:return W=x._init,R(y,h,W(x._payload),B)}if(Vn(x)||X(x))return W!==null?null:D(y,h,x,B,null);ml(y,x)}return null}function M(y,h,x,B,W){if(typeof B=="string"&&B!==""||typeof B=="number")return y=y.get(x)||null,p(h,y,""+B,W);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case oe:return y=y.get(B.key===null?x:B.key)||null,f(h,y,B,W);case ue:return y=y.get(B.key===null?x:B.key)||null,w(h,y,B,W);case We:var K=B._init;return M(y,h,x,K(B._payload),W)}if(Vn(B)||X(B))return y=y.get(x)||null,D(h,y,B,W,null);ml(h,B)}return null}function $(y,h,x,B){for(var W=null,K=null,Y=h,q=h=0,Le=null;Y!==null&&q<x.length;q++){Y.index>q?(Le=Y,Y=null):Le=Y.sibling;var ie=R(y,Y,x[q],B);if(ie===null){Y===null&&(Y=Le);break}e&&Y&&ie.alternate===null&&t(y,Y),h=i(ie,h,q),K===null?W=ie:K.sibling=ie,K=ie,Y=Le}if(q===x.length)return n(y,Y),he&&sn(y,q),W;if(Y===null){for(;q<x.length;q++)Y=L(y,x[q],B),Y!==null&&(h=i(Y,h,q),K===null?W=Y:K.sibling=Y,K=Y);return he&&sn(y,q),W}for(Y=r(y,Y);q<x.length;q++)Le=M(Y,y,q,x[q],B),Le!==null&&(e&&Le.alternate!==null&&Y.delete(Le.key===null?q:Le.key),h=i(Le,h,q),K===null?W=Le:K.sibling=Le,K=Le);return e&&Y.forEach(function(tn){return t(y,tn)}),he&&sn(y,q),W}function H(y,h,x,B){var W=X(x);if(typeof W!="function")throw Error(s(150));if(x=W.call(x),x==null)throw Error(s(151));for(var K=W=null,Y=h,q=h=0,Le=null,ie=x.next();Y!==null&&!ie.done;q++,ie=x.next()){Y.index>q?(Le=Y,Y=null):Le=Y.sibling;var tn=R(y,Y,ie.value,B);if(tn===null){Y===null&&(Y=Le);break}e&&Y&&tn.alternate===null&&t(y,Y),h=i(tn,h,q),K===null?W=tn:K.sibling=tn,K=tn,Y=Le}if(ie.done)return n(y,Y),he&&sn(y,q),W;if(Y===null){for(;!ie.done;q++,ie=x.next())ie=L(y,ie.value,B),ie!==null&&(h=i(ie,h,q),K===null?W=ie:K.sibling=ie,K=ie);return he&&sn(y,q),W}for(Y=r(y,Y);!ie.done;q++,ie=x.next())ie=M(Y,y,q,ie.value,B),ie!==null&&(e&&ie.alternate!==null&&Y.delete(ie.key===null?q:ie.key),h=i(ie,h,q),K===null?W=ie:K.sibling=ie,K=ie);return e&&Y.forEach(function(Qd){return t(y,Qd)}),he&&sn(y,q),W}function ke(y,h,x,B){if(typeof x=="object"&&x!==null&&x.type===ve&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case oe:e:{for(var W=x.key,K=h;K!==null;){if(K.key===W){if(W=x.type,W===ve){if(K.tag===7){n(y,K.sibling),h=l(K,x.props.children),h.return=y,y=h;break e}}else if(K.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===We&&Us(W)===K.type){n(y,K.sibling),h=l(K,x.props),h.ref=vr(y,K,x),h.return=y,y=h;break e}n(y,K);break}else t(y,K);K=K.sibling}x.type===ve?(h=vn(x.props.children,y.mode,B,x.key),h.return=y,y=h):(B=Il(x.type,x.key,x.props,null,y.mode,B),B.ref=vr(y,h,x),B.return=y,y=B)}return a(y);case ue:e:{for(K=x.key;h!==null;){if(h.key===K)if(h.tag===4&&h.stateNode.containerInfo===x.containerInfo&&h.stateNode.implementation===x.implementation){n(y,h.sibling),h=l(h,x.children||[]),h.return=y,y=h;break e}else{n(y,h);break}else t(y,h);h=h.sibling}h=Qo(x,y.mode,B),h.return=y,y=h}return a(y);case We:return K=x._init,ke(y,h,K(x._payload),B)}if(Vn(x))return $(y,h,x,B);if(X(x))return H(y,h,x,B);ml(y,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,h!==null&&h.tag===6?(n(y,h.sibling),h=l(h,x),h.return=y,y=h):(n(y,h),h=Wo(x,y.mode,B),h.return=y,y=h),a(y)):n(y,h)}return ke}var Fn=$s(!0),Hs=$s(!1),hl=Qt(null),vl=null,jn=null,Ji=null;function bi(){Ji=jn=vl=null}function eo(e){var t=hl.current;fe(hl),e._currentValue=t}function to(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Tn(e,t){vl=e,Ji=jn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ke=!0),e.firstContext=null)}function it(e){var t=e._currentValue;if(Ji!==e)if(e={context:e,memoizedValue:t,next:null},jn===null){if(vl===null)throw Error(s(308));jn=e,vl.dependencies={lanes:0,firstContext:e}}else jn=jn.next=e;return t}var un=null;function no(e){un===null?un=[e]:un.push(e)}function Ws(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,no(t)):(n.next=l.next,l.next=n),t.interleaved=n,Bt(e,r)}function Bt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Yt=!1;function ro(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ft(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Xt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(te&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Bt(e,n)}return l=r.interleaved,l===null?(t.next=t,no(r)):(t.next=l.next,l.next=t),r.interleaved=t,Bt(e,n)}function yl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yi(e,n)}}function Vs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function gl(e,t,n,r){var l=e.updateQueue;Yt=!1;var i=l.firstBaseUpdate,a=l.lastBaseUpdate,p=l.shared.pending;if(p!==null){l.shared.pending=null;var f=p,w=f.next;f.next=null,a===null?i=w:a.next=w,a=f;var D=e.alternate;D!==null&&(D=D.updateQueue,p=D.lastBaseUpdate,p!==a&&(p===null?D.firstBaseUpdate=w:p.next=w,D.lastBaseUpdate=f))}if(i!==null){var L=l.baseState;a=0,D=w=f=null,p=i;do{var R=p.lane,M=p.eventTime;if((r&R)===R){D!==null&&(D=D.next={eventTime:M,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var $=e,H=p;switch(R=t,M=n,H.tag){case 1:if($=H.payload,typeof $=="function"){L=$.call(M,L,R);break e}L=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=H.payload,R=typeof $=="function"?$.call(M,L,R):$,R==null)break e;L=U({},L,R);break e;case 2:Yt=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,R=l.effects,R===null?l.effects=[p]:R.push(p))}else M={eventTime:M,lane:R,tag:p.tag,payload:p.payload,callback:p.callback,next:null},D===null?(w=D=M,f=L):D=D.next=M,a|=R;if(p=p.next,p===null){if(p=l.shared.pending,p===null)break;R=p,p=R.next,R.next=null,l.lastBaseUpdate=R,l.shared.pending=null}}while(!0);if(D===null&&(f=L),l.baseState=f,l.firstBaseUpdate=w,l.lastBaseUpdate=D,t=l.shared.interleaved,t!==null){l=t;do a|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);dn|=a,e.lanes=a,e.memoizedState=L}}function Ks(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(s(191,l));l.call(r)}}}var yr={},xt=Qt(yr),gr=Qt(yr),xr=Qt(yr);function cn(e){if(e===yr)throw Error(s(174));return e}function lo(e,t){switch(pe(xr,t),pe(gr,e),pe(xt,yr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ii(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ii(t,e)}fe(xt),pe(xt,t)}function zn(){fe(xt),fe(gr),fe(xr)}function Ys(e){cn(xr.current);var t=cn(xt.current),n=ii(t,e.type);t!==n&&(pe(gr,e),pe(xt,n))}function io(e){gr.current===e&&(fe(xt),fe(gr))}var ye=Qt(0);function xl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var oo=[];function ao(){for(var e=0;e<oo.length;e++)oo[e]._workInProgressVersionPrimary=null;oo.length=0}var wl=ne.ReactCurrentDispatcher,so=ne.ReactCurrentBatchConfig,pn=0,ge=null,Pe=null,Ne=null,_l=!1,wr=!1,_r=0,dd=0;function ze(){throw Error(s(321))}function uo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!pt(e[n],t[n]))return!1;return!0}function co(e,t,n,r,l,i){if(pn=i,ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,wl.current=e===null||e.memoizedState===null?vd:yd,e=n(r,l),wr){i=0;do{if(wr=!1,_r=0,25<=i)throw Error(s(301));i+=1,Ne=Pe=null,t.updateQueue=null,wl.current=gd,e=n(r,l)}while(wr)}if(wl.current=Sl,t=Pe!==null&&Pe.next!==null,pn=0,Ne=Pe=ge=null,_l=!1,t)throw Error(s(300));return e}function po(){var e=_r!==0;return _r=0,e}function wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?ge.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function ot(){if(Pe===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var t=Ne===null?ge.memoizedState:Ne.next;if(t!==null)Ne=t,Pe=e;else{if(e===null)throw Error(s(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},Ne===null?ge.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}function Er(e,t){return typeof t=="function"?t(e):t}function fo(e){var t=ot(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=Pe,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var a=l.next;l.next=i.next,i.next=a}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var p=a=null,f=null,w=i;do{var D=w.lane;if((pn&D)===D)f!==null&&(f=f.next={lane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),r=w.hasEagerState?w.eagerState:e(r,w.action);else{var L={lane:D,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null};f===null?(p=f=L,a=r):f=f.next=L,ge.lanes|=D,dn|=D}w=w.next}while(w!==null&&w!==i);f===null?a=r:f.next=p,pt(r,t.memoizedState)||(Ke=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=f,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,ge.lanes|=i,dn|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function mo(e){var t=ot(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var a=l=l.next;do i=e(i,a.action),a=a.next;while(a!==l);pt(i,t.memoizedState)||(Ke=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Xs(){}function qs(e,t){var n=ge,r=ot(),l=t(),i=!pt(r.memoizedState,l);if(i&&(r.memoizedState=l,Ke=!0),r=r.queue,ho(Js.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Ne!==null&&Ne.memoizedState.tag&1){if(n.flags|=2048,kr(9,Gs.bind(null,n,r,l,t),void 0,null),De===null)throw Error(s(349));(pn&30)!==0||Zs(n,t,l)}return l}function Zs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Gs(e,t,n,r){t.value=n,t.getSnapshot=r,bs(t)&&eu(e)}function Js(e,t,n){return n(function(){bs(t)&&eu(e)})}function bs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!pt(e,n)}catch{return!0}}function eu(e){var t=Bt(e,1);t!==null&&vt(t,e,1,-1)}function tu(e){var t=wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Er,lastRenderedState:e},t.queue=e,e=e.dispatch=hd.bind(null,ge,e),[t.memoizedState,e]}function kr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function nu(){return ot().memoizedState}function El(e,t,n,r){var l=wt();ge.flags|=e,l.memoizedState=kr(1|t,n,void 0,r===void 0?null:r)}function kl(e,t,n,r){var l=ot();r=r===void 0?null:r;var i=void 0;if(Pe!==null){var a=Pe.memoizedState;if(i=a.destroy,r!==null&&uo(r,a.deps)){l.memoizedState=kr(t,n,i,r);return}}ge.flags|=e,l.memoizedState=kr(1|t,n,i,r)}function ru(e,t){return El(8390656,8,e,t)}function ho(e,t){return kl(2048,8,e,t)}function lu(e,t){return kl(4,2,e,t)}function iu(e,t){return kl(4,4,e,t)}function ou(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function au(e,t,n){return n=n!=null?n.concat([e]):null,kl(4,4,ou.bind(null,t,e),n)}function vo(){}function su(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&uo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function uu(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&uo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function cu(e,t,n){return(pn&21)===0?(e.baseState&&(e.baseState=!1,Ke=!0),e.memoizedState=n):(pt(n,t)||(n=Ua(),ge.lanes|=n,dn|=n,e.baseState=!0),t)}function fd(e,t){var n=se;se=n!==0&&4>n?n:4,e(!0);var r=so.transition;so.transition={};try{e(!1),t()}finally{se=n,so.transition=r}}function pu(){return ot().memoizedState}function md(e,t,n){var r=Jt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},du(e))fu(t,n);else if(n=Ws(e,t,n,r),n!==null){var l=Ue();vt(n,e,r,l),mu(n,t,r)}}function hd(e,t,n){var r=Jt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(du(e))fu(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,p=i(a,n);if(l.hasEagerState=!0,l.eagerState=p,pt(p,a)){var f=t.interleaved;f===null?(l.next=l,no(t)):(l.next=f.next,f.next=l),t.interleaved=l;return}}catch{}finally{}n=Ws(e,t,l,r),n!==null&&(l=Ue(),vt(n,e,r,l),mu(n,t,r))}}function du(e){var t=e.alternate;return e===ge||t!==null&&t===ge}function fu(e,t){wr=_l=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function mu(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yi(e,n)}}var Sl={readContext:it,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},vd={readContext:it,useCallback:function(e,t){return wt().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:ru,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,El(4194308,4,ou.bind(null,t,e),n)},useLayoutEffect:function(e,t){return El(4194308,4,e,t)},useInsertionEffect:function(e,t){return El(4,2,e,t)},useMemo:function(e,t){var n=wt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=wt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=md.bind(null,ge,e),[r.memoizedState,e]},useRef:function(e){var t=wt();return e={current:e},t.memoizedState=e},useState:tu,useDebugValue:vo,useDeferredValue:function(e){return wt().memoizedState=e},useTransition:function(){var e=tu(!1),t=e[0];return e=fd.bind(null,e[1]),wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ge,l=wt();if(he){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),De===null)throw Error(s(349));(pn&30)!==0||Zs(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,ru(Js.bind(null,r,i,e),[e]),r.flags|=2048,kr(9,Gs.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=wt(),t=De.identifierPrefix;if(he){var n=Lt,r=Dt;n=(r&~(1<<32-ct(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=_r++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=dd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},yd={readContext:it,useCallback:su,useContext:it,useEffect:ho,useImperativeHandle:au,useInsertionEffect:lu,useLayoutEffect:iu,useMemo:uu,useReducer:fo,useRef:nu,useState:function(){return fo(Er)},useDebugValue:vo,useDeferredValue:function(e){var t=ot();return cu(t,Pe.memoizedState,e)},useTransition:function(){var e=fo(Er)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Xs,useSyncExternalStore:qs,useId:pu,unstable_isNewReconciler:!1},gd={readContext:it,useCallback:su,useContext:it,useEffect:ho,useImperativeHandle:au,useInsertionEffect:lu,useLayoutEffect:iu,useMemo:uu,useReducer:mo,useRef:nu,useState:function(){return mo(Er)},useDebugValue:vo,useDeferredValue:function(e){var t=ot();return Pe===null?t.memoizedState=e:cu(t,Pe.memoizedState,e)},useTransition:function(){var e=mo(Er)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Xs,useSyncExternalStore:qs,useId:pu,unstable_isNewReconciler:!1};function ft(e,t){if(e&&e.defaultProps){t=U({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function yo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:U({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Cl={isMounted:function(e){return(e=e._reactInternals)?rn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ue(),l=Jt(e),i=Ft(r,l);i.payload=t,n!=null&&(i.callback=n),t=Xt(e,i,l),t!==null&&(vt(t,e,l,r),yl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ue(),l=Jt(e),i=Ft(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Xt(e,i,l),t!==null&&(vt(t,e,l,r),yl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ue(),r=Jt(e),l=Ft(n,r);l.tag=2,t!=null&&(l.callback=t),t=Xt(e,l,r),t!==null&&(vt(t,e,r,n),yl(t,e,r))}};function hu(e,t,n,r,l,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!ur(n,r)||!ur(l,i):!0}function vu(e,t,n){var r=!1,l=Vt,i=t.contextType;return typeof i=="object"&&i!==null?i=it(i):(l=Ve(t)?on:Te.current,r=t.contextTypes,i=(r=r!=null)?Nn(e,l):Vt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Cl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function yu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Cl.enqueueReplaceState(t,t.state,null)}function go(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},ro(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=it(i):(i=Ve(t)?on:Te.current,l.context=Nn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(yo(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Cl.enqueueReplaceState(l,l.state,null),gl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Mn(e,t){try{var n="",r=t;do n+=re(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function xo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function wo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var xd=typeof WeakMap=="function"?WeakMap:Map;function gu(e,t,n){n=Ft(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Bl||(Bl=!0,To=r),wo(e,t)},n}function xu(e,t,n){n=Ft(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){wo(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){wo(e,t),typeof r!="function"&&(Zt===null?Zt=new Set([this]):Zt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function wu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new xd;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Fd.bind(null,e,t,n),t.then(e,e))}function _u(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Eu(e,t,n,r,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ft(-1,1),t.tag=2,Xt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var wd=ne.ReactCurrentOwner,Ke=!1;function Oe(e,t,n,r){t.child=e===null?Hs(t,null,n,r):Fn(t,e.child,n,r)}function ku(e,t,n,r,l){n=n.render;var i=t.ref;return Tn(t,l),r=co(e,t,n,r,i,l),n=po(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,jt(e,t,l)):(he&&n&&Yi(t),t.flags|=1,Oe(e,t,r,l),t.child)}function Su(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Ho(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Cu(e,t,i,r,l)):(e=Il(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&l)===0){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:ur,n(a,r)&&e.ref===t.ref)return jt(e,t,l)}return t.flags|=1,e=en(i,r),e.ref=t.ref,e.return=t,t.child=e}function Cu(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(ur(i,r)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=r=i,(e.lanes&l)!==0)(e.flags&131072)!==0&&(Ke=!0);else return t.lanes=e.lanes,jt(e,t,l)}return _o(e,t,n,r,l)}function Au(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(On,tt),tt|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,pe(On,tt),tt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,pe(On,tt),tt|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,pe(On,tt),tt|=r;return Oe(e,t,l,n),t.child}function Pu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _o(e,t,n,r,l){var i=Ve(n)?on:Te.current;return i=Nn(t,i),Tn(t,l),n=co(e,t,n,r,i,l),r=po(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,jt(e,t,l)):(he&&r&&Yi(t),t.flags|=1,Oe(e,t,n,l),t.child)}function Ru(e,t,n,r,l){if(Ve(n)){var i=!0;ul(t)}else i=!1;if(Tn(t,l),t.stateNode===null)Pl(e,t),vu(t,n,r),go(t,n,r,l),r=!0;else if(e===null){var a=t.stateNode,p=t.memoizedProps;a.props=p;var f=a.context,w=n.contextType;typeof w=="object"&&w!==null?w=it(w):(w=Ve(n)?on:Te.current,w=Nn(t,w));var D=n.getDerivedStateFromProps,L=typeof D=="function"||typeof a.getSnapshotBeforeUpdate=="function";L||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(p!==r||f!==w)&&yu(t,a,r,w),Yt=!1;var R=t.memoizedState;a.state=R,gl(t,r,a,l),f=t.memoizedState,p!==r||R!==f||Qe.current||Yt?(typeof D=="function"&&(yo(t,n,D,r),f=t.memoizedState),(p=Yt||hu(t,n,p,r,R,f,w))?(L||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=f),a.props=r,a.state=f,a.context=w,r=p):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Qs(e,t),p=t.memoizedProps,w=t.type===t.elementType?p:ft(t.type,p),a.props=w,L=t.pendingProps,R=a.context,f=n.contextType,typeof f=="object"&&f!==null?f=it(f):(f=Ve(n)?on:Te.current,f=Nn(t,f));var M=n.getDerivedStateFromProps;(D=typeof M=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(p!==L||R!==f)&&yu(t,a,r,f),Yt=!1,R=t.memoizedState,a.state=R,gl(t,r,a,l);var $=t.memoizedState;p!==L||R!==$||Qe.current||Yt?(typeof M=="function"&&(yo(t,n,M,r),$=t.memoizedState),(w=Yt||hu(t,n,w,r,R,$,f)||!1)?(D||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,$,f),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,$,f)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=$),a.props=r,a.state=$,a.context=f,r=w):(typeof a.componentDidUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),r=!1)}return Eo(e,t,n,r,i,l)}function Eo(e,t,n,r,l,i){Pu(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return l&&Fs(t,n,!1),jt(e,t,i);r=t.stateNode,wd.current=t;var p=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Fn(t,e.child,null,i),t.child=Fn(t,null,p,i)):Oe(e,t,p,i),t.memoizedState=r.state,l&&Fs(t,n,!0),t.child}function Nu(e){var t=e.stateNode;t.pendingContext?Ls(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ls(e,t.context,!1),lo(e,t.containerInfo)}function Du(e,t,n,r,l){return Bn(),Gi(l),t.flags|=256,Oe(e,t,n,r),t.child}var ko={dehydrated:null,treeContext:null,retryLane:0};function So(e){return{baseLanes:e,cachePool:null,transitions:null}}function Lu(e,t,n){var r=t.pendingProps,l=ye.current,i=!1,a=(t.flags&128)!==0,p;if((p=a)||(p=e!==null&&e.memoizedState===null?!1:(l&2)!==0),p?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),pe(ye,l&1),e===null)return Zi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Ol(a,r,0,null),e=vn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=So(n),t.memoizedState=ko,e):Co(t,a));if(l=e.memoizedState,l!==null&&(p=l.dehydrated,p!==null))return _d(e,t,a,r,p,l,n);if(i){i=r.fallback,a=t.mode,l=e.child,p=l.sibling;var f={mode:"hidden",children:r.children};return(a&1)===0&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=f,t.deletions=null):(r=en(l,f),r.subtreeFlags=l.subtreeFlags&14680064),p!==null?i=en(p,i):(i=vn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?So(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=ko,r}return i=e.child,e=i.sibling,r=en(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Co(e,t){return t=Ol({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Al(e,t,n,r){return r!==null&&Gi(r),Fn(t,e.child,null,n),e=Co(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _d(e,t,n,r,l,i,a){if(n)return t.flags&256?(t.flags&=-257,r=xo(Error(s(422))),Al(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=Ol({mode:"visible",children:r.children},l,0,null),i=vn(i,l,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&Fn(t,e.child,null,a),t.child.memoizedState=So(a),t.memoizedState=ko,i);if((t.mode&1)===0)return Al(e,t,a,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var p=r.dgst;return r=p,i=Error(s(419)),r=xo(i,r,void 0),Al(e,t,a,r)}if(p=(a&e.childLanes)!==0,Ke||p){if(r=De,r!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|a))!==0?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Bt(e,l),vt(r,e,l,-1))}return $o(),r=xo(Error(s(421))),Al(e,t,a,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=jd.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,et=Wt(l.nextSibling),be=t,he=!0,dt=null,e!==null&&(rt[lt++]=Dt,rt[lt++]=Lt,rt[lt++]=an,Dt=e.id,Lt=e.overflow,an=t),t=Co(t,r.children),t.flags|=4096,t)}function Bu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),to(e.return,t,n)}function Ao(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Fu(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(Oe(e,t,r.children,n),r=ye.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bu(e,n,t);else if(e.tag===19)Bu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(pe(ye,r),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&xl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Ao(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&xl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Ao(t,!0,n,null,i);break;case"together":Ao(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Pl(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function jt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),dn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=en(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=en(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ed(e,t,n){switch(t.tag){case 3:Nu(t),Bn();break;case 5:Ys(t);break;case 1:Ve(t.type)&&ul(t);break;case 4:lo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;pe(hl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(pe(ye,ye.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Lu(e,t,n):(pe(ye,ye.current&1),e=jt(e,t,n),e!==null?e.sibling:null);pe(ye,ye.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Fu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),pe(ye,ye.current),r)break;return null;case 22:case 23:return t.lanes=0,Au(e,t,n)}return jt(e,t,n)}var ju,Po,Tu,zu;ju=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Po=function(){},Tu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,cn(xt.current);var i=null;switch(n){case"input":l=ti(e,l),r=ti(e,r),i=[];break;case"select":l=U({},l,{value:void 0}),r=U({},r,{value:void 0}),i=[];break;case"textarea":l=li(e,l),r=li(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ol)}oi(n,r);var a;n=null;for(w in l)if(!r.hasOwnProperty(w)&&l.hasOwnProperty(w)&&l[w]!=null)if(w==="style"){var p=l[w];for(a in p)p.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else w!=="dangerouslySetInnerHTML"&&w!=="children"&&w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&w!=="autoFocus"&&(d.hasOwnProperty(w)?i||(i=[]):(i=i||[]).push(w,null));for(w in r){var f=r[w];if(p=l!=null?l[w]:void 0,r.hasOwnProperty(w)&&f!==p&&(f!=null||p!=null))if(w==="style")if(p){for(a in p)!p.hasOwnProperty(a)||f&&f.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in f)f.hasOwnProperty(a)&&p[a]!==f[a]&&(n||(n={}),n[a]=f[a])}else n||(i||(i=[]),i.push(w,n)),n=f;else w==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,p=p?p.__html:void 0,f!=null&&p!==f&&(i=i||[]).push(w,f)):w==="children"?typeof f!="string"&&typeof f!="number"||(i=i||[]).push(w,""+f):w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&(d.hasOwnProperty(w)?(f!=null&&w==="onScroll"&&de("scroll",e),i||p===f||(i=[])):(i=i||[]).push(w,f))}n&&(i=i||[]).push("style",n);var w=i;(t.updateQueue=w)&&(t.flags|=4)}},zu=function(e,t,n,r){n!==r&&(t.flags|=4)};function Sr(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function kd(e,t,n){var r=t.pendingProps;switch(Xi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Ve(t.type)&&sl(),Me(t),null;case 3:return r=t.stateNode,zn(),fe(Qe),fe(Te),ao(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,dt!==null&&(Io(dt),dt=null))),Po(e,t),Me(t),null;case 5:io(t);var l=cn(xr.current);if(n=t.type,e!==null&&t.stateNode!=null)Tu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(s(166));return Me(t),null}if(e=cn(xt.current),fl(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[gt]=t,r[mr]=i,e=(t.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(l=0;l<pr.length;l++)de(pr[l],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":va(r,i),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},de("invalid",r);break;case"textarea":xa(r,i),de("invalid",r)}oi(n,i),l=null;for(var a in i)if(i.hasOwnProperty(a)){var p=i[a];a==="children"?typeof p=="string"?r.textContent!==p&&(i.suppressHydrationWarning!==!0&&il(r.textContent,p,e),l=["children",p]):typeof p=="number"&&r.textContent!==""+p&&(i.suppressHydrationWarning!==!0&&il(r.textContent,p,e),l=["children",""+p]):d.hasOwnProperty(a)&&p!=null&&a==="onScroll"&&de("scroll",r)}switch(n){case"input":zr(r),ga(r,i,!0);break;case"textarea":zr(r),_a(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ol)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ea(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[gt]=t,e[mr]=r,ju(e,t,!1,!1),t.stateNode=e;e:{switch(a=ai(n,r),n){case"dialog":de("cancel",e),de("close",e),l=r;break;case"iframe":case"object":case"embed":de("load",e),l=r;break;case"video":case"audio":for(l=0;l<pr.length;l++)de(pr[l],e);l=r;break;case"source":de("error",e),l=r;break;case"img":case"image":case"link":de("error",e),de("load",e),l=r;break;case"details":de("toggle",e),l=r;break;case"input":va(e,r),l=ti(e,r),de("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=U({},r,{value:void 0}),de("invalid",e);break;case"textarea":xa(e,r),l=li(e,r),de("invalid",e);break;default:l=r}oi(n,l),p=l;for(i in p)if(p.hasOwnProperty(i)){var f=p[i];i==="style"?Ca(e,f):i==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&ka(e,f)):i==="children"?typeof f=="string"?(n!=="textarea"||f!=="")&&Kn(e,f):typeof f=="number"&&Kn(e,""+f):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(d.hasOwnProperty(i)?f!=null&&i==="onScroll"&&de("scroll",e):f!=null&&G(e,i,f,a))}switch(n){case"input":zr(e),ga(e,r,!1);break;case"textarea":zr(e),_a(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ae(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?yn(e,!!r.multiple,i,!1):r.defaultValue!=null&&yn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=ol)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Me(t),null;case 6:if(e&&t.stateNode!=null)zu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(s(166));if(n=cn(xr.current),cn(xt.current),fl(t)){if(r=t.stateNode,n=t.memoizedProps,r[gt]=t,(i=r.nodeValue!==n)&&(e=be,e!==null))switch(e.tag){case 3:il(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&il(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gt]=t,t.stateNode=r}return Me(t),null;case 13:if(fe(ye),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(he&&et!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Os(),Bn(),t.flags|=98560,i=!1;else if(i=fl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));i[gt]=t}else Bn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Me(t),i=!1}else dt!==null&&(Io(dt),dt=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ye.current&1)!==0?Re===0&&(Re=3):$o())),t.updateQueue!==null&&(t.flags|=4),Me(t),null);case 4:return zn(),Po(e,t),e===null&&dr(t.stateNode.containerInfo),Me(t),null;case 10:return eo(t.type._context),Me(t),null;case 17:return Ve(t.type)&&sl(),Me(t),null;case 19:if(fe(ye),i=t.memoizedState,i===null)return Me(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Sr(i,!1);else{if(Re!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=xl(e),a!==null){for(t.flags|=128,Sr(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return pe(ye,ye.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ee()>Un&&(t.flags|=128,r=!0,Sr(i,!1),t.lanes=4194304)}else{if(!r)if(e=xl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Sr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!he)return Me(t),null}else 2*Ee()-i.renderingStartTime>Un&&n!==1073741824&&(t.flags|=128,r=!0,Sr(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ee(),t.sibling=null,n=ye.current,pe(ye,r?n&1|2:n&1),t):(Me(t),null);case 22:case 23:return Uo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(tt&1073741824)!==0&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),null;case 24:return null;case 25:return null}throw Error(s(156,t.tag))}function Sd(e,t){switch(Xi(t),t.tag){case 1:return Ve(t.type)&&sl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zn(),fe(Qe),fe(Te),ao(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return io(t),null;case 13:if(fe(ye),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Bn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(ye),null;case 4:return zn(),null;case 10:return eo(t.type._context),null;case 22:case 23:return Uo(),null;case 24:return null;default:return null}}var Rl=!1,Ie=!1,Cd=typeof WeakSet=="function"?WeakSet:Set,I=null;function In(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){_e(e,t,r)}else n.current=null}function Ro(e,t,n){try{n()}catch(r){_e(e,t,r)}}var Mu=!1;function Ad(e,t){if(Oi=Xr,e=hs(),Li(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,p=-1,f=-1,w=0,D=0,L=e,R=null;t:for(;;){for(var M;L!==n||l!==0&&L.nodeType!==3||(p=a+l),L!==i||r!==0&&L.nodeType!==3||(f=a+r),L.nodeType===3&&(a+=L.nodeValue.length),(M=L.firstChild)!==null;)R=L,L=M;for(;;){if(L===e)break t;if(R===n&&++w===l&&(p=a),R===i&&++D===r&&(f=a),(M=L.nextSibling)!==null)break;L=R,R=L.parentNode}L=M}n=p===-1||f===-1?null:{start:p,end:f}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ui={focusedElem:e,selectionRange:n},Xr=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var $=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if($!==null){var H=$.memoizedProps,ke=$.memoizedState,y=t.stateNode,h=y.getSnapshotBeforeUpdate(t.elementType===t.type?H:ft(t.type,H),ke);y.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(B){_e(t,t.return,B)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return $=Mu,Mu=!1,$}function Cr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Ro(t,n,i)}l=l.next}while(l!==r)}}function Nl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function No(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Iu(e){var t=e.alternate;t!==null&&(e.alternate=null,Iu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[gt],delete t[mr],delete t[Qi],delete t[sd],delete t[ud])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ou(e){return e.tag===5||e.tag===3||e.tag===4}function Uu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ou(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Do(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ol));else if(r!==4&&(e=e.child,e!==null))for(Do(e,t,n),e=e.sibling;e!==null;)Do(e,t,n),e=e.sibling}function Lo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Lo(e,t,n),e=e.sibling;e!==null;)Lo(e,t,n),e=e.sibling}var Be=null,mt=!1;function qt(e,t,n){for(n=n.child;n!==null;)$u(e,t,n),n=n.sibling}function $u(e,t,n){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(Hr,n)}catch{}switch(n.tag){case 5:Ie||In(n,t);case 6:var r=Be,l=mt;Be=null,qt(e,t,n),Be=r,mt=l,Be!==null&&(mt?(e=Be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(mt?(e=Be,n=n.stateNode,e.nodeType===8?Wi(e.parentNode,n):e.nodeType===1&&Wi(e,n),rr(e)):Wi(Be,n.stateNode));break;case 4:r=Be,l=mt,Be=n.stateNode.containerInfo,mt=!0,qt(e,t,n),Be=r,mt=l;break;case 0:case 11:case 14:case 15:if(!Ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,a=i.destroy;i=i.tag,a!==void 0&&((i&2)!==0||(i&4)!==0)&&Ro(n,t,a),l=l.next}while(l!==r)}qt(e,t,n);break;case 1:if(!Ie&&(In(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(p){_e(n,t,p)}qt(e,t,n);break;case 21:qt(e,t,n);break;case 22:n.mode&1?(Ie=(r=Ie)||n.memoizedState!==null,qt(e,t,n),Ie=r):qt(e,t,n);break;default:qt(e,t,n)}}function Hu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Cd),t.forEach(function(r){var l=Td.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function ht(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,a=t,p=a;e:for(;p!==null;){switch(p.tag){case 5:Be=p.stateNode,mt=!1;break e;case 3:Be=p.stateNode.containerInfo,mt=!0;break e;case 4:Be=p.stateNode.containerInfo,mt=!0;break e}p=p.return}if(Be===null)throw Error(s(160));$u(i,a,l),Be=null,mt=!1;var f=l.alternate;f!==null&&(f.return=null),l.return=null}catch(w){_e(l,t,w)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wu(t,e),t=t.sibling}function Wu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ht(t,e),_t(e),r&4){try{Cr(3,e,e.return),Nl(3,e)}catch(H){_e(e,e.return,H)}try{Cr(5,e,e.return)}catch(H){_e(e,e.return,H)}}break;case 1:ht(t,e),_t(e),r&512&&n!==null&&In(n,n.return);break;case 5:if(ht(t,e),_t(e),r&512&&n!==null&&In(n,n.return),e.flags&32){var l=e.stateNode;try{Kn(l,"")}catch(H){_e(e,e.return,H)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,p=e.type,f=e.updateQueue;if(e.updateQueue=null,f!==null)try{p==="input"&&i.type==="radio"&&i.name!=null&&ya(l,i),ai(p,a);var w=ai(p,i);for(a=0;a<f.length;a+=2){var D=f[a],L=f[a+1];D==="style"?Ca(l,L):D==="dangerouslySetInnerHTML"?ka(l,L):D==="children"?Kn(l,L):G(l,D,L,w)}switch(p){case"input":ni(l,i);break;case"textarea":wa(l,i);break;case"select":var R=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var M=i.value;M!=null?yn(l,!!i.multiple,M,!1):R!==!!i.multiple&&(i.defaultValue!=null?yn(l,!!i.multiple,i.defaultValue,!0):yn(l,!!i.multiple,i.multiple?[]:"",!1))}l[mr]=i}catch(H){_e(e,e.return,H)}}break;case 6:if(ht(t,e),_t(e),r&4){if(e.stateNode===null)throw Error(s(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(H){_e(e,e.return,H)}}break;case 3:if(ht(t,e),_t(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{rr(t.containerInfo)}catch(H){_e(e,e.return,H)}break;case 4:ht(t,e),_t(e);break;case 13:ht(t,e),_t(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(jo=Ee())),r&4&&Hu(e);break;case 22:if(D=n!==null&&n.memoizedState!==null,e.mode&1?(Ie=(w=Ie)||D,ht(t,e),Ie=w):ht(t,e),_t(e),r&8192){if(w=e.memoizedState!==null,(e.stateNode.isHidden=w)&&!D&&(e.mode&1)!==0)for(I=e,D=e.child;D!==null;){for(L=I=D;I!==null;){switch(R=I,M=R.child,R.tag){case 0:case 11:case 14:case 15:Cr(4,R,R.return);break;case 1:In(R,R.return);var $=R.stateNode;if(typeof $.componentWillUnmount=="function"){r=R,n=R.return;try{t=r,$.props=t.memoizedProps,$.state=t.memoizedState,$.componentWillUnmount()}catch(H){_e(r,n,H)}}break;case 5:In(R,R.return);break;case 22:if(R.memoizedState!==null){Ku(L);continue}}M!==null?(M.return=R,I=M):Ku(L)}D=D.sibling}e:for(D=null,L=e;;){if(L.tag===5){if(D===null){D=L;try{l=L.stateNode,w?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(p=L.stateNode,f=L.memoizedProps.style,a=f!=null&&f.hasOwnProperty("display")?f.display:null,p.style.display=Sa("display",a))}catch(H){_e(e,e.return,H)}}}else if(L.tag===6){if(D===null)try{L.stateNode.nodeValue=w?"":L.memoizedProps}catch(H){_e(e,e.return,H)}}else if((L.tag!==22&&L.tag!==23||L.memoizedState===null||L===e)&&L.child!==null){L.child.return=L,L=L.child;continue}if(L===e)break e;for(;L.sibling===null;){if(L.return===null||L.return===e)break e;D===L&&(D=null),L=L.return}D===L&&(D=null),L.sibling.return=L.return,L=L.sibling}}break;case 19:ht(t,e),_t(e),r&4&&Hu(e);break;case 21:break;default:ht(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ou(n)){var r=n;break e}n=n.return}throw Error(s(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Kn(l,""),r.flags&=-33);var i=Uu(e);Lo(e,i,l);break;case 3:case 4:var a=r.stateNode.containerInfo,p=Uu(e);Do(e,p,a);break;default:throw Error(s(161))}}catch(f){_e(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Pd(e,t,n){I=e,Qu(e)}function Qu(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var l=I,i=l.child;if(l.tag===22&&r){var a=l.memoizedState!==null||Rl;if(!a){var p=l.alternate,f=p!==null&&p.memoizedState!==null||Ie;p=Rl;var w=Ie;if(Rl=a,(Ie=f)&&!w)for(I=l;I!==null;)a=I,f=a.child,a.tag===22&&a.memoizedState!==null?Yu(l):f!==null?(f.return=a,I=f):Yu(l);for(;i!==null;)I=i,Qu(i),i=i.sibling;I=l,Rl=p,Ie=w}Vu(e)}else(l.subtreeFlags&8772)!==0&&i!==null?(i.return=l,I=i):Vu(e)}}function Vu(e){for(;I!==null;){var t=I;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ie||Nl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ie)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:ft(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ks(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ks(t,a,n)}break;case 5:var p=t.stateNode;if(n===null&&t.flags&4){n=p;var f=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&n.focus();break;case"img":f.src&&(n.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var w=t.alternate;if(w!==null){var D=w.memoizedState;if(D!==null){var L=D.dehydrated;L!==null&&rr(L)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}Ie||t.flags&512&&No(t)}catch(R){_e(t,t.return,R)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function Ku(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function Yu(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Nl(4,t)}catch(f){_e(t,n,f)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(f){_e(t,l,f)}}var i=t.return;try{No(t)}catch(f){_e(t,i,f)}break;case 5:var a=t.return;try{No(t)}catch(f){_e(t,a,f)}}}catch(f){_e(t,t.return,f)}if(t===e){I=null;break}var p=t.sibling;if(p!==null){p.return=t.return,I=p;break}I=t.return}}var Rd=Math.ceil,Dl=ne.ReactCurrentDispatcher,Bo=ne.ReactCurrentOwner,at=ne.ReactCurrentBatchConfig,te=0,De=null,Se=null,Fe=0,tt=0,On=Qt(0),Re=0,Ar=null,dn=0,Ll=0,Fo=0,Pr=null,Ye=null,jo=0,Un=1/0,Tt=null,Bl=!1,To=null,Zt=null,Fl=!1,Gt=null,jl=0,Rr=0,zo=null,Tl=-1,zl=0;function Ue(){return(te&6)!==0?Ee():Tl!==-1?Tl:Tl=Ee()}function Jt(e){return(e.mode&1)===0?1:(te&2)!==0&&Fe!==0?Fe&-Fe:pd.transition!==null?(zl===0&&(zl=Ua()),zl):(e=se,e!==0||(e=window.event,e=e===void 0?16:qa(e.type)),e)}function vt(e,t,n,r){if(50<Rr)throw Rr=0,zo=null,Error(s(185));Jn(e,n,r),((te&2)===0||e!==De)&&(e===De&&((te&2)===0&&(Ll|=n),Re===4&&bt(e,Fe)),Xe(e,r),n===1&&te===0&&(t.mode&1)===0&&(Un=Ee()+500,cl&&Kt()))}function Xe(e,t){var n=e.callbackNode;pp(e,t);var r=Vr(e,e===De?Fe:0);if(r===0)n!==null&&Ma(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ma(n),t===1)e.tag===0?cd(qu.bind(null,e)):js(qu.bind(null,e)),od(function(){(te&6)===0&&Kt()}),n=null;else{switch($a(r)){case 1:n=mi;break;case 4:n=Ia;break;case 16:n=$r;break;case 536870912:n=Oa;break;default:n=$r}n=rc(n,Xu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Xu(e,t){if(Tl=-1,zl=0,(te&6)!==0)throw Error(s(327));var n=e.callbackNode;if($n()&&e.callbackNode!==n)return null;var r=Vr(e,e===De?Fe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Ml(e,r);else{t=r;var l=te;te|=2;var i=Gu();(De!==e||Fe!==t)&&(Tt=null,Un=Ee()+500,mn(e,t));do try{Ld();break}catch(p){Zu(e,p)}while(!0);bi(),Dl.current=i,te=l,Se!==null?t=0:(De=null,Fe=0,t=Re)}if(t!==0){if(t===2&&(l=hi(e),l!==0&&(r=l,t=Mo(e,l))),t===1)throw n=Ar,mn(e,0),bt(e,r),Xe(e,Ee()),n;if(t===6)bt(e,r);else{if(l=e.current.alternate,(r&30)===0&&!Nd(l)&&(t=Ml(e,r),t===2&&(i=hi(e),i!==0&&(r=i,t=Mo(e,i))),t===1))throw n=Ar,mn(e,0),bt(e,r),Xe(e,Ee()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(s(345));case 2:hn(e,Ye,Tt);break;case 3:if(bt(e,r),(r&130023424)===r&&(t=jo+500-Ee(),10<t)){if(Vr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Ue(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Hi(hn.bind(null,e,Ye,Tt),t);break}hn(e,Ye,Tt);break;case 4:if(bt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var a=31-ct(r);i=1<<a,a=t[a],a>l&&(l=a),r&=~i}if(r=l,r=Ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rd(r/1960))-r,10<r){e.timeoutHandle=Hi(hn.bind(null,e,Ye,Tt),r);break}hn(e,Ye,Tt);break;case 5:hn(e,Ye,Tt);break;default:throw Error(s(329))}}}return Xe(e,Ee()),e.callbackNode===n?Xu.bind(null,e):null}function Mo(e,t){var n=Pr;return e.current.memoizedState.isDehydrated&&(mn(e,t).flags|=256),e=Ml(e,t),e!==2&&(t=Ye,Ye=n,t!==null&&Io(t)),e}function Io(e){Ye===null?Ye=e:Ye.push.apply(Ye,e)}function Nd(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!pt(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bt(e,t){for(t&=~Fo,t&=~Ll,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ct(t),r=1<<n;e[n]=-1,t&=~r}}function qu(e){if((te&6)!==0)throw Error(s(327));$n();var t=Vr(e,0);if((t&1)===0)return Xe(e,Ee()),null;var n=Ml(e,t);if(e.tag!==0&&n===2){var r=hi(e);r!==0&&(t=r,n=Mo(e,r))}if(n===1)throw n=Ar,mn(e,0),bt(e,t),Xe(e,Ee()),n;if(n===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,hn(e,Ye,Tt),Xe(e,Ee()),null}function Oo(e,t){var n=te;te|=1;try{return e(t)}finally{te=n,te===0&&(Un=Ee()+500,cl&&Kt())}}function fn(e){Gt!==null&&Gt.tag===0&&(te&6)===0&&$n();var t=te;te|=1;var n=at.transition,r=se;try{if(at.transition=null,se=1,e)return e()}finally{se=r,at.transition=n,te=t,(te&6)===0&&Kt()}}function Uo(){tt=On.current,fe(On)}function mn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,id(n)),Se!==null)for(n=Se.return;n!==null;){var r=n;switch(Xi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&sl();break;case 3:zn(),fe(Qe),fe(Te),ao();break;case 5:io(r);break;case 4:zn();break;case 13:fe(ye);break;case 19:fe(ye);break;case 10:eo(r.type._context);break;case 22:case 23:Uo()}n=n.return}if(De=e,Se=e=en(e.current,null),Fe=tt=t,Re=0,Ar=null,Fo=Ll=dn=0,Ye=Pr=null,un!==null){for(t=0;t<un.length;t++)if(n=un[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=l,r.next=a}n.pending=r}un=null}return e}function Zu(e,t){do{var n=Se;try{if(bi(),wl.current=Sl,_l){for(var r=ge.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}_l=!1}if(pn=0,Ne=Pe=ge=null,wr=!1,_r=0,Bo.current=null,n===null||n.return===null){Re=1,Ar=t,Se=null;break}e:{var i=e,a=n.return,p=n,f=t;if(t=Fe,p.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var w=f,D=p,L=D.tag;if((D.mode&1)===0&&(L===0||L===11||L===15)){var R=D.alternate;R?(D.updateQueue=R.updateQueue,D.memoizedState=R.memoizedState,D.lanes=R.lanes):(D.updateQueue=null,D.memoizedState=null)}var M=_u(a);if(M!==null){M.flags&=-257,Eu(M,a,p,i,t),M.mode&1&&wu(i,w,t),t=M,f=w;var $=t.updateQueue;if($===null){var H=new Set;H.add(f),t.updateQueue=H}else $.add(f);break e}else{if((t&1)===0){wu(i,w,t),$o();break e}f=Error(s(426))}}else if(he&&p.mode&1){var ke=_u(a);if(ke!==null){(ke.flags&65536)===0&&(ke.flags|=256),Eu(ke,a,p,i,t),Gi(Mn(f,p));break e}}i=f=Mn(f,p),Re!==4&&(Re=2),Pr===null?Pr=[i]:Pr.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var y=gu(i,f,t);Vs(i,y);break e;case 1:p=f;var h=i.type,x=i.stateNode;if((i.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Zt===null||!Zt.has(x)))){i.flags|=65536,t&=-t,i.lanes|=t;var B=xu(i,p,t);Vs(i,B);break e}}i=i.return}while(i!==null)}bu(n)}catch(W){t=W,Se===n&&n!==null&&(Se=n=n.return);continue}break}while(!0)}function Gu(){var e=Dl.current;return Dl.current=Sl,e===null?Sl:e}function $o(){(Re===0||Re===3||Re===2)&&(Re=4),De===null||(dn&268435455)===0&&(Ll&268435455)===0||bt(De,Fe)}function Ml(e,t){var n=te;te|=2;var r=Gu();(De!==e||Fe!==t)&&(Tt=null,mn(e,t));do try{Dd();break}catch(l){Zu(e,l)}while(!0);if(bi(),te=n,Dl.current=r,Se!==null)throw Error(s(261));return De=null,Fe=0,Re}function Dd(){for(;Se!==null;)Ju(Se)}function Ld(){for(;Se!==null&&!np();)Ju(Se)}function Ju(e){var t=nc(e.alternate,e,tt);e.memoizedProps=e.pendingProps,t===null?bu(e):Se=t,Bo.current=null}function bu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=kd(n,t,tt),n!==null){Se=n;return}}else{if(n=Sd(n,t),n!==null){n.flags&=32767,Se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Re=6,Se=null;return}}if(t=t.sibling,t!==null){Se=t;return}Se=t=e}while(t!==null);Re===0&&(Re=5)}function hn(e,t,n){var r=se,l=at.transition;try{at.transition=null,se=1,Bd(e,t,n,r)}finally{at.transition=l,se=r}return null}function Bd(e,t,n,r){do $n();while(Gt!==null);if((te&6)!==0)throw Error(s(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(dp(e,i),e===De&&(Se=De=null,Fe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Fl||(Fl=!0,rc($r,function(){return $n(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=at.transition,at.transition=null;var a=se;se=1;var p=te;te|=4,Bo.current=null,Ad(e,n),Wu(n,e),Jp(Ui),Xr=!!Oi,Ui=Oi=null,e.current=n,Pd(n),rp(),te=p,se=a,at.transition=i}else e.current=n;if(Fl&&(Fl=!1,Gt=e,jl=l),i=e.pendingLanes,i===0&&(Zt=null),op(n.stateNode),Xe(e,Ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Bl)throw Bl=!1,e=To,To=null,e;return(jl&1)!==0&&e.tag!==0&&$n(),i=e.pendingLanes,(i&1)!==0?e===zo?Rr++:(Rr=0,zo=e):Rr=0,Kt(),null}function $n(){if(Gt!==null){var e=$a(jl),t=at.transition,n=se;try{if(at.transition=null,se=16>e?16:e,Gt===null)var r=!1;else{if(e=Gt,Gt=null,jl=0,(te&6)!==0)throw Error(s(331));var l=te;for(te|=4,I=e.current;I!==null;){var i=I,a=i.child;if((I.flags&16)!==0){var p=i.deletions;if(p!==null){for(var f=0;f<p.length;f++){var w=p[f];for(I=w;I!==null;){var D=I;switch(D.tag){case 0:case 11:case 15:Cr(8,D,i)}var L=D.child;if(L!==null)L.return=D,I=L;else for(;I!==null;){D=I;var R=D.sibling,M=D.return;if(Iu(D),D===w){I=null;break}if(R!==null){R.return=M,I=R;break}I=M}}}var $=i.alternate;if($!==null){var H=$.child;if(H!==null){$.child=null;do{var ke=H.sibling;H.sibling=null,H=ke}while(H!==null)}}I=i}}if((i.subtreeFlags&2064)!==0&&a!==null)a.return=i,I=a;else e:for(;I!==null;){if(i=I,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Cr(9,i,i.return)}var y=i.sibling;if(y!==null){y.return=i.return,I=y;break e}I=i.return}}var h=e.current;for(I=h;I!==null;){a=I;var x=a.child;if((a.subtreeFlags&2064)!==0&&x!==null)x.return=a,I=x;else e:for(a=h;I!==null;){if(p=I,(p.flags&2048)!==0)try{switch(p.tag){case 0:case 11:case 15:Nl(9,p)}}catch(W){_e(p,p.return,W)}if(p===a){I=null;break e}var B=p.sibling;if(B!==null){B.return=p.return,I=B;break e}I=p.return}}if(te=l,Kt(),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(Hr,e)}catch{}r=!0}return r}finally{se=n,at.transition=t}}return!1}function ec(e,t,n){t=Mn(n,t),t=gu(e,t,1),e=Xt(e,t,1),t=Ue(),e!==null&&(Jn(e,1,t),Xe(e,t))}function _e(e,t,n){if(e.tag===3)ec(e,e,n);else for(;t!==null;){if(t.tag===3){ec(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zt===null||!Zt.has(r))){e=Mn(n,e),e=xu(t,e,1),t=Xt(t,e,1),e=Ue(),t!==null&&(Jn(t,1,e),Xe(t,e));break}}t=t.return}}function Fd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ue(),e.pingedLanes|=e.suspendedLanes&n,De===e&&(Fe&n)===n&&(Re===4||Re===3&&(Fe&130023424)===Fe&&500>Ee()-jo?mn(e,0):Fo|=n),Xe(e,t)}function tc(e,t){t===0&&((e.mode&1)===0?t=1:(t=Qr,Qr<<=1,(Qr&130023424)===0&&(Qr=4194304)));var n=Ue();e=Bt(e,t),e!==null&&(Jn(e,t,n),Xe(e,n))}function jd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),tc(e,n)}function Td(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(s(314))}r!==null&&r.delete(t),tc(e,n)}var nc;nc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Qe.current)Ke=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ke=!1,Ed(e,t,n);Ke=(e.flags&131072)!==0}else Ke=!1,he&&(t.flags&1048576)!==0&&Ts(t,dl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Pl(e,t),e=t.pendingProps;var l=Nn(t,Te.current);Tn(t,n),l=co(null,t,r,e,l,n);var i=po();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ve(r)?(i=!0,ul(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,ro(t),l.updater=Cl,t.stateNode=l,l._reactInternals=t,go(t,r,e,n),t=Eo(null,t,r,!0,i,n)):(t.tag=0,he&&i&&Yi(t),Oe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Pl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Md(r),e=ft(r,e),l){case 0:t=_o(null,t,r,e,n);break e;case 1:t=Ru(null,t,r,e,n);break e;case 11:t=ku(null,t,r,e,n);break e;case 14:t=Su(null,t,r,ft(r.type,e),n);break e}throw Error(s(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ft(r,l),_o(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ft(r,l),Ru(e,t,r,l,n);case 3:e:{if(Nu(t),e===null)throw Error(s(387));r=t.pendingProps,i=t.memoizedState,l=i.element,Qs(e,t),gl(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=Mn(Error(s(423)),t),t=Du(e,t,r,n,l);break e}else if(r!==l){l=Mn(Error(s(424)),t),t=Du(e,t,r,n,l);break e}else for(et=Wt(t.stateNode.containerInfo.firstChild),be=t,he=!0,dt=null,n=Hs(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bn(),r===l){t=jt(e,t,n);break e}Oe(e,t,r,n)}t=t.child}return t;case 5:return Ys(t),e===null&&Zi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,a=l.children,$i(r,l)?a=null:i!==null&&$i(r,i)&&(t.flags|=32),Pu(e,t),Oe(e,t,a,n),t.child;case 6:return e===null&&Zi(t),null;case 13:return Lu(e,t,n);case 4:return lo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Fn(t,null,r,n):Oe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ft(r,l),ku(e,t,r,l,n);case 7:return Oe(e,t,t.pendingProps,n),t.child;case 8:return Oe(e,t,t.pendingProps.children,n),t.child;case 12:return Oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,a=l.value,pe(hl,r._currentValue),r._currentValue=a,i!==null)if(pt(i.value,a)){if(i.children===l.children&&!Qe.current){t=jt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var p=i.dependencies;if(p!==null){a=i.child;for(var f=p.firstContext;f!==null;){if(f.context===r){if(i.tag===1){f=Ft(-1,n&-n),f.tag=2;var w=i.updateQueue;if(w!==null){w=w.shared;var D=w.pending;D===null?f.next=f:(f.next=D.next,D.next=f),w.pending=f}}i.lanes|=n,f=i.alternate,f!==null&&(f.lanes|=n),to(i.return,n,t),p.lanes|=n;break}f=f.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(s(341));a.lanes|=n,p=a.alternate,p!==null&&(p.lanes|=n),to(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Oe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Tn(t,n),l=it(l),r=r(l),t.flags|=1,Oe(e,t,r,n),t.child;case 14:return r=t.type,l=ft(r,t.pendingProps),l=ft(r.type,l),Su(e,t,r,l,n);case 15:return Cu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ft(r,l),Pl(e,t),t.tag=1,Ve(r)?(e=!0,ul(t)):e=!1,Tn(t,n),vu(t,r,l),go(t,r,l,n),Eo(null,t,r,!0,e,n);case 19:return Fu(e,t,n);case 22:return Au(e,t,n)}throw Error(s(156,t.tag))};function rc(e,t){return za(e,t)}function zd(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(e,t,n,r){return new zd(e,t,n,r)}function Ho(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Md(e){if(typeof e=="function")return Ho(e)?1:0;if(e!=null){if(e=e.$$typeof,e===nt)return 11;if(e===Ae)return 14}return 2}function en(e,t){var n=e.alternate;return n===null?(n=st(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Il(e,t,n,r,l,i){var a=2;if(r=e,typeof e=="function")Ho(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case ve:return vn(n.children,l,i,t);case Ce:a=8,l|=8;break;case $e:return e=st(12,n,t,l|2),e.elementType=$e,e.lanes=i,e;case je:return e=st(13,n,t,l),e.elementType=je,e.lanes=i,e;case He:return e=st(19,n,t,l),e.elementType=He,e.lanes=i,e;case we:return Ol(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ze:a=10;break e;case Pt:a=9;break e;case nt:a=11;break e;case Ae:a=14;break e;case We:a=16,r=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return t=st(a,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function vn(e,t,n,r){return e=st(7,e,r,t),e.lanes=n,e}function Ol(e,t,n,r){return e=st(22,e,r,t),e.elementType=we,e.lanes=n,e.stateNode={isHidden:!1},e}function Wo(e,t,n){return e=st(6,e,null,t),e.lanes=n,e}function Qo(e,t,n){return t=st(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Id(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vi(0),this.expirationTimes=vi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vi(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Vo(e,t,n,r,l,i,a,p,f){return e=new Id(e,t,n,p,f),t===1?(t=1,i===!0&&(t|=8)):t=0,i=st(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ro(i),e}function Od(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ue,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function lc(e){if(!e)return Vt;e=e._reactInternals;e:{if(rn(e)!==e||e.tag!==1)throw Error(s(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(s(171))}if(e.tag===1){var n=e.type;if(Ve(n))return Bs(e,n,t)}return t}function ic(e,t,n,r,l,i,a,p,f){return e=Vo(n,r,!0,e,l,i,a,p,f),e.context=lc(null),n=e.current,r=Ue(),l=Jt(n),i=Ft(r,l),i.callback=t??null,Xt(n,i,l),e.current.lanes=l,Jn(e,l,r),Xe(e,r),e}function Ul(e,t,n,r){var l=t.current,i=Ue(),a=Jt(l);return n=lc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ft(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Xt(l,t,a),e!==null&&(vt(e,l,a,i),yl(e,l,a)),a}function $l(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function oc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ko(e,t){oc(e,t),(e=e.alternate)&&oc(e,t)}function Ud(){return null}var ac=typeof reportError=="function"?reportError:function(e){console.error(e)};function Yo(e){this._internalRoot=e}Hl.prototype.render=Yo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));Ul(e,t,null,null)},Hl.prototype.unmount=Yo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fn(function(){Ul(null,e,null,null)}),t[Rt]=null}};function Hl(e){this._internalRoot=e}Hl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qa();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ut.length&&t!==0&&t<Ut[n].priority;n++);Ut.splice(n,0,e),n===0&&Ya(e)}};function Xo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function sc(){}function $d(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var w=$l(a);i.call(w)}}var a=ic(t,r,e,0,null,!1,!1,"",sc);return e._reactRootContainer=a,e[Rt]=a.current,dr(e.nodeType===8?e.parentNode:e),fn(),a}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var p=r;r=function(){var w=$l(f);p.call(w)}}var f=Vo(e,0,!1,null,null,!1,!1,"",sc);return e._reactRootContainer=f,e[Rt]=f.current,dr(e.nodeType===8?e.parentNode:e),fn(function(){Ul(t,f,n,r)}),f}function Ql(e,t,n,r,l){var i=n._reactRootContainer;if(i){var a=i;if(typeof l=="function"){var p=l;l=function(){var f=$l(a);p.call(f)}}Ul(t,a,e,l)}else a=$d(n,t,e,l,r);return $l(a)}Ha=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Gn(t.pendingLanes);n!==0&&(yi(t,n|1),Xe(t,Ee()),(te&6)===0&&(Un=Ee()+500,Kt()))}break;case 13:fn(function(){var r=Bt(e,1);if(r!==null){var l=Ue();vt(r,e,1,l)}}),Ko(e,1)}},gi=function(e){if(e.tag===13){var t=Bt(e,134217728);if(t!==null){var n=Ue();vt(t,e,134217728,n)}Ko(e,134217728)}},Wa=function(e){if(e.tag===13){var t=Jt(e),n=Bt(e,t);if(n!==null){var r=Ue();vt(n,e,t,r)}Ko(e,t)}},Qa=function(){return se},Va=function(e,t){var n=se;try{return se=e,t()}finally{se=n}},ci=function(e,t,n){switch(t){case"input":if(ni(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=al(r);if(!l)throw Error(s(90));ha(r),ni(r,l)}}}break;case"textarea":wa(e,n);break;case"select":t=n.value,t!=null&&yn(e,!!n.multiple,t,!1)}},Na=Oo,Da=fn;var Hd={usingClientEntryPoint:!1,Events:[hr,Pn,al,Pa,Ra,Oo]},Nr={findFiberByHostInstance:ln,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Wd={bundleType:Nr.bundleType,version:Nr.version,rendererPackageName:Nr.rendererPackageName,rendererConfig:Nr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ne.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ja(e),e===null?null:e.stateNode},findFiberByHostInstance:Nr.findFiberByHostInstance||Ud,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vl.isDisabled&&Vl.supportsFiber)try{Hr=Vl.inject(Wd),yt=Vl}catch{}}return qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hd,qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xo(t))throw Error(s(200));return Od(e,t,null,n)},qe.createRoot=function(e,t){if(!Xo(e))throw Error(s(299));var n=!1,r="",l=ac;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Vo(e,1,!1,null,null,n,!1,r,l),e[Rt]=t.current,dr(e.nodeType===8?e.parentNode:e),new Yo(t)},qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=ja(t),e=e===null?null:e.stateNode,e},qe.flushSync=function(e){return fn(e)},qe.hydrate=function(e,t,n){if(!Wl(t))throw Error(s(200));return Ql(null,e,t,!0,n)},qe.hydrateRoot=function(e,t,n){if(!Xo(e))throw Error(s(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",a=ac;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=ic(t,null,e,1,n??null,l,!1,i,a),e[Rt]=t.current,dr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Hl(t)},qe.render=function(e,t,n){if(!Wl(t))throw Error(s(200));return Ql(null,e,t,!1,n)},qe.unmountComponentAtNode=function(e){if(!Wl(e))throw Error(s(40));return e._reactRootContainer?(fn(function(){Ql(null,null,e,!1,function(){e._reactRootContainer=null,e[Rt]=null})}),!0):!1},qe.unstable_batchedUpdates=Oo,qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Wl(n))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return Ql(e,t,n,!1,r)},qe.version="18.3.1-next-f1338f8080-20240426",qe}var vc;function Gd(){if(vc)return Go.exports;vc=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(u){console.error(u)}}return o(),Go.exports=Zd(),Go.exports}var yc;function Jd(){if(yc)return Kl;yc=1;var o=Gd();return Kl.createRoot=o.createRoot,Kl.hydrateRoot=o.hydrateRoot,Kl}var bd=Jd();/**
 * react-router v7.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var gc="popstate";function xc(o){return typeof o=="object"&&o!=null&&"pathname"in o&&"search"in o&&"hash"in o&&"state"in o&&"key"in o}function ef(o={}){function u(c,d){var C;let m=(C=d.state)==null?void 0:C.masked,{pathname:g,search:E,hash:_}=m||c.location;return ra("",{pathname:g,search:E,hash:_},d.state&&d.state.usr||null,d.state&&d.state.key||"default",m?{pathname:c.location.pathname,search:c.location.search,hash:c.location.hash}:void 0)}function s(c,d){return typeof d=="string"?d:Br(d)}return nf(u,s,null,o)}function xe(o,u){if(o===!1||o===null||typeof o>"u")throw new Error(u)}function St(o,u){if(!o){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function tf(){return Math.random().toString(36).substring(2,10)}function wc(o,u){return{usr:o.state,key:o.key,idx:u,masked:o.unstable_mask?{pathname:o.pathname,search:o.search,hash:o.hash}:void 0}}function ra(o,u,s=null,c,d){return{pathname:typeof o=="string"?o:o.pathname,search:"",hash:"",...typeof u=="string"?Wn(u):u,state:s,key:u&&u.key||c||tf(),unstable_mask:d}}function Br({pathname:o="/",search:u="",hash:s=""}){return u&&u!=="?"&&(o+=u.charAt(0)==="?"?u:"?"+u),s&&s!=="#"&&(o+=s.charAt(0)==="#"?s:"#"+s),o}function Wn(o){let u={};if(o){let s=o.indexOf("#");s>=0&&(u.hash=o.substring(s),o=o.substring(0,s));let c=o.indexOf("?");c>=0&&(u.search=o.substring(c),o=o.substring(0,c)),o&&(u.pathname=o)}return u}function nf(o,u,s,c={}){let{window:d=document.defaultView,v5Compat:m=!1}=c,g=d.history,E="POP",_=null,C=P();C==null&&(C=0,g.replaceState({...g.state,idx:C},""));function P(){return(g.state||{idx:null}).idx}function A(){E="POP";let F=P(),O=F==null?null:F-C;C=F,_&&_({action:E,location:T.location,delta:O})}function j(F,O){E="PUSH";let Z=xc(F)?F:ra(T.location,F,O);C=P()+1;let G=wc(Z,C),ne=T.createHref(Z.unstable_mask||Z);try{g.pushState(G,"",ne)}catch(oe){if(oe instanceof DOMException&&oe.name==="DataCloneError")throw oe;d.location.assign(ne)}m&&_&&_({action:E,location:T.location,delta:1})}function Q(F,O){E="REPLACE";let Z=xc(F)?F:ra(T.location,F,O);C=P();let G=wc(Z,C),ne=T.createHref(Z.unstable_mask||Z);g.replaceState(G,"",ne),m&&_&&_({action:E,location:T.location,delta:0})}function V(F){return rf(F)}let T={get action(){return E},get location(){return o(d,g)},listen(F){if(_)throw new Error("A history only accepts one active listener");return d.addEventListener(gc,A),_=F,()=>{d.removeEventListener(gc,A),_=null}},createHref(F){return u(d,F)},createURL:V,encodeLocation(F){let O=V(F);return{pathname:O.pathname,search:O.search,hash:O.hash}},push:j,replace:Q,go(F){return g.go(F)}};return T}function rf(o,u=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),xe(s,"No window.location.(origin|href) available to create URL");let c=typeof o=="string"?o:Br(o);return c=c.replace(/ $/,"%20"),!u&&c.startsWith("//")&&(c=s+c),new URL(c,s)}function Dc(o,u,s="/"){return lf(o,u,s,!1)}function lf(o,u,s,c){let d=typeof u=="string"?Wn(u):u,m=zt(d.pathname||"/",s);if(m==null)return null;let g=Lc(o);of(g);let E=null;for(let _=0;E==null&&_<g.length;++_){let C=yf(m);E=hf(g[_],C,c)}return E}function Lc(o,u=[],s=[],c="",d=!1){let m=(g,E,_=d,C)=>{let P={relativePath:C===void 0?g.path||"":C,caseSensitive:g.caseSensitive===!0,childrenIndex:E,route:g};if(P.relativePath.startsWith("/")){if(!P.relativePath.startsWith(c)&&_)return;xe(P.relativePath.startsWith(c),`Absolute route path "${P.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),P.relativePath=P.relativePath.slice(c.length)}let A=kt([c,P.relativePath]),j=s.concat(P);g.children&&g.children.length>0&&(xe(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${A}".`),Lc(g.children,u,j,A,_)),!(g.path==null&&!g.index)&&u.push({path:A,score:ff(A,g.index),routesMeta:j})};return o.forEach((g,E)=>{var _;if(g.path===""||!((_=g.path)!=null&&_.includes("?")))m(g,E);else for(let C of Bc(g.path))m(g,E,!0,C)}),u}function Bc(o){let u=o.split("/");if(u.length===0)return[];let[s,...c]=u,d=s.endsWith("?"),m=s.replace(/\?$/,"");if(c.length===0)return d?[m,""]:[m];let g=Bc(c.join("/")),E=[];return E.push(...g.map(_=>_===""?m:[m,_].join("/"))),d&&E.push(...g),E.map(_=>o.startsWith("/")&&_===""?"/":_)}function of(o){o.sort((u,s)=>u.score!==s.score?s.score-u.score:mf(u.routesMeta.map(c=>c.childrenIndex),s.routesMeta.map(c=>c.childrenIndex)))}var af=/^:[\w-]+$/,sf=3,uf=2,cf=1,pf=10,df=-2,_c=o=>o==="*";function ff(o,u){let s=o.split("/"),c=s.length;return s.some(_c)&&(c+=df),u&&(c+=uf),s.filter(d=>!_c(d)).reduce((d,m)=>d+(af.test(m)?sf:m===""?cf:pf),c)}function mf(o,u){return o.length===u.length&&o.slice(0,-1).every((c,d)=>c===u[d])?o[o.length-1]-u[u.length-1]:0}function hf(o,u,s=!1){let{routesMeta:c}=o,d={},m="/",g=[];for(let E=0;E<c.length;++E){let _=c[E],C=E===c.length-1,P=m==="/"?u:u.slice(m.length)||"/",A=Gl({path:_.relativePath,caseSensitive:_.caseSensitive,end:C},P),j=_.route;if(!A&&C&&s&&!c[c.length-1].route.index&&(A=Gl({path:_.relativePath,caseSensitive:_.caseSensitive,end:!1},P)),!A)return null;Object.assign(d,A.params),g.push({params:d,pathname:kt([m,A.pathname]),pathnameBase:_f(kt([m,A.pathnameBase])),route:j}),A.pathnameBase!=="/"&&(m=kt([m,A.pathnameBase]))}return g}function Gl(o,u){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[s,c]=vf(o.path,o.caseSensitive,o.end),d=u.match(s);if(!d)return null;let m=d[0],g=m.replace(/(.)\/+$/,"$1"),E=d.slice(1);return{params:c.reduce((C,{paramName:P,isOptional:A},j)=>{if(P==="*"){let V=E[j]||"";g=m.slice(0,m.length-V.length).replace(/(.)\/+$/,"$1")}const Q=E[j];return A&&!Q?C[P]=void 0:C[P]=(Q||"").replace(/%2F/g,"/"),C},{}),pathname:m,pathnameBase:g,pattern:o}}function vf(o,u=!1,s=!0){St(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let c=[],d="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,E,_,C,P)=>{if(c.push({paramName:E,isOptional:_!=null}),_){let A=P.charAt(C+g.length);return A&&A!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return o.endsWith("*")?(c.push({paramName:"*"}),d+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?d+="\\/*$":o!==""&&o!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,u?void 0:"i"),c]}function yf(o){try{return o.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return St(!1,`The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),o}}function zt(o,u){if(u==="/")return o;if(!o.toLowerCase().startsWith(u.toLowerCase()))return null;let s=u.endsWith("/")?u.length-1:u.length,c=o.charAt(s);return c&&c!=="/"?null:o.slice(s)||"/"}var gf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function xf(o,u="/"){let{pathname:s,search:c="",hash:d=""}=typeof o=="string"?Wn(o):o,m;return s?(s=s.replace(/\/\/+/g,"/"),s.startsWith("/")?m=Ec(s.substring(1),"/"):m=Ec(s,u)):m=u,{pathname:m,search:Ef(c),hash:kf(d)}}function Ec(o,u){let s=u.replace(/\/+$/,"").split("/");return o.split("/").forEach(d=>{d===".."?s.length>1&&s.pop():d!=="."&&s.push(d)}),s.length>1?s.join("/"):"/"}function ea(o,u,s,c){return`Cannot include a '${o}' character in a manually specified \`to.${u}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function wf(o){return o.filter((u,s)=>s===0||u.route.path&&u.route.path.length>0)}function Fc(o){let u=wf(o);return u.map((s,c)=>c===u.length-1?s.pathname:s.pathnameBase)}function aa(o,u,s,c=!1){let d;typeof o=="string"?d=Wn(o):(d={...o},xe(!d.pathname||!d.pathname.includes("?"),ea("?","pathname","search",d)),xe(!d.pathname||!d.pathname.includes("#"),ea("#","pathname","hash",d)),xe(!d.search||!d.search.includes("#"),ea("#","search","hash",d)));let m=o===""||d.pathname==="",g=m?"/":d.pathname,E;if(g==null)E=s;else{let A=u.length-1;if(!c&&g.startsWith("..")){let j=g.split("/");for(;j[0]==="..";)j.shift(),A-=1;d.pathname=j.join("/")}E=A>=0?u[A]:"/"}let _=xf(d,E),C=g&&g!=="/"&&g.endsWith("/"),P=(m||g===".")&&s.endsWith("/");return!_.pathname.endsWith("/")&&(C||P)&&(_.pathname+="/"),_}var kt=o=>o.join("/").replace(/\/\/+/g,"/"),_f=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),Ef=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,kf=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o,Sf=class{constructor(o,u,s,c=!1){this.status=o,this.statusText=u||"",this.internal=c,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}};function Cf(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}function Af(o){return o.map(u=>u.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var jc=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Tc(o,u){let s=o;if(typeof s!="string"||!gf.test(s))return{absoluteURL:void 0,isExternal:!1,to:s};let c=s,d=!1;if(jc)try{let m=new URL(window.location.href),g=s.startsWith("//")?new URL(m.protocol+s):new URL(s),E=zt(g.pathname,u);g.origin===m.origin&&E!=null?s=E+g.search+g.hash:d=!0}catch{St(!1,`<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:d,to:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var zc=["POST","PUT","PATCH","DELETE"];new Set(zc);var Pf=["GET",...zc];new Set(Pf);var Qn=k.createContext(null);Qn.displayName="DataRouter";var bl=k.createContext(null);bl.displayName="DataRouterState";var Mc=k.createContext(!1);function Rf(){return k.useContext(Mc)}var Ic=k.createContext({isTransitioning:!1});Ic.displayName="ViewTransition";var Nf=k.createContext(new Map);Nf.displayName="Fetchers";var Df=k.createContext(null);Df.displayName="Await";var ut=k.createContext(null);ut.displayName="Navigation";var Fr=k.createContext(null);Fr.displayName="Location";var Ct=k.createContext({outlet:null,matches:[],isDataRoute:!1});Ct.displayName="Route";var sa=k.createContext(null);sa.displayName="RouteError";var Oc="REACT_ROUTER_ERROR",Lf="REDIRECT",Bf="ROUTE_ERROR_RESPONSE";function Ff(o){if(o.startsWith(`${Oc}:${Lf}:{`))try{let u=JSON.parse(o.slice(28));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.location=="string"&&typeof u.reloadDocument=="boolean"&&typeof u.replace=="boolean")return u}catch{}}function jf(o){if(o.startsWith(`${Oc}:${Bf}:{`))try{let u=JSON.parse(o.slice(40));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string")return new Sf(u.status,u.statusText,u.data)}catch{}}function Tf(o,{relative:u}={}){xe(jr(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:c}=k.useContext(ut),{hash:d,pathname:m,search:g}=Tr(o,{relative:u}),E=m;return s!=="/"&&(E=m==="/"?s:kt([s,m])),c.createHref({pathname:E,search:g,hash:d})}function jr(){return k.useContext(Fr)!=null}function At(){return xe(jr(),"useLocation() may be used only in the context of a <Router> component."),k.useContext(Fr).location}var Uc="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function $c(o){k.useContext(ut).static||k.useLayoutEffect(o)}function zf(){let{isDataRoute:o}=k.useContext(Ct);return o?Zf():Mf()}function Mf(){xe(jr(),"useNavigate() may be used only in the context of a <Router> component.");let o=k.useContext(Qn),{basename:u,navigator:s}=k.useContext(ut),{matches:c}=k.useContext(Ct),{pathname:d}=At(),m=JSON.stringify(Fc(c)),g=k.useRef(!1);return $c(()=>{g.current=!0}),k.useCallback((_,C={})=>{if(St(g.current,Uc),!g.current)return;if(typeof _=="number"){s.go(_);return}let P=aa(_,JSON.parse(m),d,C.relative==="path");o==null&&u!=="/"&&(P.pathname=P.pathname==="/"?u:kt([u,P.pathname])),(C.replace?s.replace:s.push)(P,C.state,C)},[u,s,m,d,o])}k.createContext(null);function If(){let{matches:o}=k.useContext(Ct),u=o[o.length-1];return u?u.params:{}}function Tr(o,{relative:u}={}){let{matches:s}=k.useContext(Ct),{pathname:c}=At(),d=JSON.stringify(Fc(s));return k.useMemo(()=>aa(o,JSON.parse(d),c,u==="path"),[o,d,c,u])}function Of(o,u){return Hc(o,u)}function Hc(o,u,s){var F;xe(jr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=k.useContext(ut),{matches:d}=k.useContext(Ct),m=d[d.length-1],g=m?m.params:{},E=m?m.pathname:"/",_=m?m.pathnameBase:"/",C=m&&m.route;{let O=C&&C.path||"";Qc(E,!C||O.endsWith("*")||O.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${E}" (under <Route path="${O}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${O}"> to <Route path="${O==="/"?"*":`${O}/*`}">.`)}let P=At(),A;if(u){let O=typeof u=="string"?Wn(u):u;xe(_==="/"||((F=O.pathname)==null?void 0:F.startsWith(_)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${O.pathname}" was given in the \`location\` prop.`),A=O}else A=P;let j=A.pathname||"/",Q=j;if(_!=="/"){let O=_.replace(/^\//,"").split("/");Q="/"+j.replace(/^\//,"").split("/").slice(O.length).join("/")}let V=Dc(o,{pathname:Q});St(C||V!=null,`No routes matched location "${A.pathname}${A.search}${A.hash}" `),St(V==null||V[V.length-1].route.element!==void 0||V[V.length-1].route.Component!==void 0||V[V.length-1].route.lazy!==void 0,`Matched leaf route at location "${A.pathname}${A.search}${A.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let T=Qf(V&&V.map(O=>Object.assign({},O,{params:Object.assign({},g,O.params),pathname:kt([_,c.encodeLocation?c.encodeLocation(O.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:O.pathname]),pathnameBase:O.pathnameBase==="/"?_:kt([_,c.encodeLocation?c.encodeLocation(O.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:O.pathnameBase])})),d,s);return u&&T?k.createElement(Fr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...A},navigationType:"POP"}},T):T}function Uf(){let o=qf(),u=Cf(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),s=o instanceof Error?o.stack:null,c="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:c},m={padding:"2px 4px",backgroundColor:c},g=null;return console.error("Error handled by React Router default ErrorBoundary:",o),g=k.createElement(k.Fragment,null,k.createElement("p",null,"💿 Hey developer 👋"),k.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",k.createElement("code",{style:m},"ErrorBoundary")," or"," ",k.createElement("code",{style:m},"errorElement")," prop on your route.")),k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},u),s?k.createElement("pre",{style:d},s):null,g)}var $f=k.createElement(Uf,null),Wc=class extends k.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,u){return u.location!==o.location||u.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:u.error,location:u.location,revalidation:o.revalidation||u.revalidation}}componentDidCatch(o,u){this.props.onError?this.props.onError(o,u):console.error("React Router caught the following error during render",o)}render(){let o=this.state.error;if(this.context&&typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){const s=jf(o.digest);s&&(o=s)}let u=o!==void 0?k.createElement(Ct.Provider,{value:this.props.routeContext},k.createElement(sa.Provider,{value:o,children:this.props.component})):this.props.children;return this.context?k.createElement(Hf,{error:o},u):u}};Wc.contextType=Mc;var ta=new WeakMap;function Hf({children:o,error:u}){let{basename:s}=k.useContext(ut);if(typeof u=="object"&&u&&"digest"in u&&typeof u.digest=="string"){let c=Ff(u.digest);if(c){let d=ta.get(u);if(d)throw d;let m=Tc(c.location,s);if(jc&&!ta.get(u))if(m.isExternal||c.reloadDocument)window.location.href=m.absoluteURL||m.to;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:c.replace}));throw ta.set(u,g),g}return k.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m.absoluteURL||m.to}`})}}return o}function Wf({routeContext:o,match:u,children:s}){let c=k.useContext(Qn);return c&&c.static&&c.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=u.route.id),k.createElement(Ct.Provider,{value:o},s)}function Qf(o,u=[],s){let c=s==null?void 0:s.state;if(o==null){if(!c)return null;if(c.errors)o=c.matches;else if(u.length===0&&!c.initialized&&c.matches.length>0)o=c.matches;else return null}let d=o,m=c==null?void 0:c.errors;if(m!=null){let P=d.findIndex(A=>A.route.id&&(m==null?void 0:m[A.route.id])!==void 0);xe(P>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),d=d.slice(0,Math.min(d.length,P+1))}let g=!1,E=-1;if(s&&c){g=c.renderFallback;for(let P=0;P<d.length;P++){let A=d[P];if((A.route.HydrateFallback||A.route.hydrateFallbackElement)&&(E=P),A.route.id){let{loaderData:j,errors:Q}=c,V=A.route.loader&&!j.hasOwnProperty(A.route.id)&&(!Q||Q[A.route.id]===void 0);if(A.route.lazy||V){s.isStatic&&(g=!0),E>=0?d=d.slice(0,E+1):d=[d[0]];break}}}}let _=s==null?void 0:s.onError,C=c&&_?(P,A)=>{var j,Q;_(P,{location:c.location,params:((Q=(j=c.matches)==null?void 0:j[0])==null?void 0:Q.params)??{},unstable_pattern:Af(c.matches),errorInfo:A})}:void 0;return d.reduceRight((P,A,j)=>{let Q,V=!1,T=null,F=null;c&&(Q=m&&A.route.id?m[A.route.id]:void 0,T=A.route.errorElement||$f,g&&(E<0&&j===0?(Qc("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),V=!0,F=null):E===j&&(V=!0,F=A.route.hydrateFallbackElement||null)));let O=u.concat(d.slice(0,j+1)),Z=()=>{let G;return Q?G=T:V?G=F:A.route.Component?G=k.createElement(A.route.Component,null):A.route.element?G=A.route.element:G=P,k.createElement(Wf,{match:A,routeContext:{outlet:P,matches:O,isDataRoute:c!=null},children:G})};return c&&(A.route.ErrorBoundary||A.route.errorElement||j===0)?k.createElement(Wc,{location:c.location,revalidation:c.revalidation,component:T,error:Q,children:Z(),routeContext:{outlet:null,matches:O,isDataRoute:!0},onError:C}):Z()},null)}function ua(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Vf(o){let u=k.useContext(Qn);return xe(u,ua(o)),u}function Kf(o){let u=k.useContext(bl);return xe(u,ua(o)),u}function Yf(o){let u=k.useContext(Ct);return xe(u,ua(o)),u}function ca(o){let u=Yf(o),s=u.matches[u.matches.length-1];return xe(s.route.id,`${o} can only be used on routes that contain a unique "id"`),s.route.id}function Xf(){return ca("useRouteId")}function qf(){var c;let o=k.useContext(sa),u=Kf("useRouteError"),s=ca("useRouteError");return o!==void 0?o:(c=u.errors)==null?void 0:c[s]}function Zf(){let{router:o}=Vf("useNavigate"),u=ca("useNavigate"),s=k.useRef(!1);return $c(()=>{s.current=!0}),k.useCallback(async(d,m={})=>{St(s.current,Uc),s.current&&(typeof d=="number"?await o.navigate(d):await o.navigate(d,{fromRouteId:u,...m}))},[o,u])}var kc={};function Qc(o,u,s){!u&&!kc[o]&&(kc[o]=!0,St(!1,s))}k.memo(Gf);function Gf({routes:o,future:u,state:s,isStatic:c,onError:d}){return Hc(o,void 0,{state:s,isStatic:c,onError:d})}function Xl(o){xe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Jf({basename:o="/",children:u=null,location:s,navigationType:c="POP",navigator:d,static:m=!1,unstable_useTransitions:g}){xe(!jr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let E=o.replace(/^\/*/,"/"),_=k.useMemo(()=>({basename:E,navigator:d,static:m,unstable_useTransitions:g,future:{}}),[E,d,m,g]);typeof s=="string"&&(s=Wn(s));let{pathname:C="/",search:P="",hash:A="",state:j=null,key:Q="default",unstable_mask:V}=s,T=k.useMemo(()=>{let F=zt(C,E);return F==null?null:{location:{pathname:F,search:P,hash:A,state:j,key:Q,unstable_mask:V},navigationType:c}},[E,C,P,A,j,Q,c,V]);return St(T!=null,`<Router basename="${E}"> is not able to match the URL "${C}${P}${A}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:k.createElement(ut.Provider,{value:_},k.createElement(Fr.Provider,{children:u,value:T}))}function bf({children:o,location:u}){return Of(la(o),u)}function la(o,u=[]){let s=[];return k.Children.forEach(o,(c,d)=>{if(!k.isValidElement(c))return;let m=[...u,d];if(c.type===k.Fragment){s.push.apply(s,la(c.props.children,m));return}xe(c.type===Xl,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),xe(!c.props.index||!c.props.children,"An index route cannot have child routes.");let g={id:c.props.id||m.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(g.children=la(c.props.children,m)),s.push(g)}),s}var ql="get",Zl="application/x-www-form-urlencoded";function ei(o){return typeof HTMLElement<"u"&&o instanceof HTMLElement}function em(o){return ei(o)&&o.tagName.toLowerCase()==="button"}function tm(o){return ei(o)&&o.tagName.toLowerCase()==="form"}function nm(o){return ei(o)&&o.tagName.toLowerCase()==="input"}function rm(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function lm(o,u){return o.button===0&&(!u||u==="_self")&&!rm(o)}var Yl=null;function im(){if(Yl===null)try{new FormData(document.createElement("form"),0),Yl=!1}catch{Yl=!0}return Yl}var om=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function na(o){return o!=null&&!om.has(o)?(St(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Zl}"`),null):o}function am(o,u){let s,c,d,m,g;if(tm(o)){let E=o.getAttribute("action");c=E?zt(E,u):null,s=o.getAttribute("method")||ql,d=na(o.getAttribute("enctype"))||Zl,m=new FormData(o)}else if(em(o)||nm(o)&&(o.type==="submit"||o.type==="image")){let E=o.form;if(E==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let _=o.getAttribute("formaction")||E.getAttribute("action");if(c=_?zt(_,u):null,s=o.getAttribute("formmethod")||E.getAttribute("method")||ql,d=na(o.getAttribute("formenctype"))||na(E.getAttribute("enctype"))||Zl,m=new FormData(E,o),!im()){let{name:C,type:P,value:A}=o;if(P==="image"){let j=C?`${C}.`:"";m.append(`${j}x`,"0"),m.append(`${j}y`,"0")}else C&&m.append(C,A)}}else{if(ei(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=ql,c=null,d=Zl,g=o}return m&&d==="text/plain"&&(g=m,m=void 0),{action:c,method:s.toLowerCase(),encType:d,formData:m,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function pa(o,u){if(o===!1||o===null||typeof o>"u")throw new Error(u)}function Vc(o,u,s,c){let d=typeof o=="string"?new URL(o,typeof window>"u"?"server://singlefetch/":window.location.origin):o;return s?d.pathname.endsWith("/")?d.pathname=`${d.pathname}_.${c}`:d.pathname=`${d.pathname}.${c}`:d.pathname==="/"?d.pathname=`_root.${c}`:u&&zt(d.pathname,u)==="/"?d.pathname=`${u.replace(/\/$/,"")}/_root.${c}`:d.pathname=`${d.pathname.replace(/\/$/,"")}.${c}`,d}async function sm(o,u){if(o.id in u)return u[o.id];try{let s=await import(o.module);return u[o.id]=s,s}catch(s){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function um(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}async function cm(o,u,s){let c=await Promise.all(o.map(async d=>{let m=u.routes[d.route.id];if(m){let g=await sm(m,s);return g.links?g.links():[]}return[]}));return mm(c.flat(1).filter(um).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function Sc(o,u,s,c,d,m){let g=(_,C)=>s[C]?_.route.id!==s[C].route.id:!0,E=(_,C)=>{var P;return s[C].pathname!==_.pathname||((P=s[C].route.path)==null?void 0:P.endsWith("*"))&&s[C].params["*"]!==_.params["*"]};return m==="assets"?u.filter((_,C)=>g(_,C)||E(_,C)):m==="data"?u.filter((_,C)=>{var A;let P=c.routes[_.route.id];if(!P||!P.hasLoader)return!1;if(g(_,C)||E(_,C))return!0;if(_.route.shouldRevalidate){let j=_.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:((A=s[0])==null?void 0:A.params)||{},nextUrl:new URL(o,window.origin),nextParams:_.params,defaultShouldRevalidate:!0});if(typeof j=="boolean")return j}return!0}):[]}function pm(o,u,{includeHydrateFallback:s}={}){return dm(o.map(c=>{let d=u.routes[c.route.id];if(!d)return[];let m=[d.module];return d.clientActionModule&&(m=m.concat(d.clientActionModule)),d.clientLoaderModule&&(m=m.concat(d.clientLoaderModule)),s&&d.hydrateFallbackModule&&(m=m.concat(d.hydrateFallbackModule)),d.imports&&(m=m.concat(d.imports)),m}).flat(1))}function dm(o){return[...new Set(o)]}function fm(o){let u={},s=Object.keys(o).sort();for(let c of s)u[c]=o[c];return u}function mm(o,u){let s=new Set;return new Set(u),o.reduce((c,d)=>{let m=JSON.stringify(fm(d));return s.has(m)||(s.add(m),c.push({key:m,link:d})),c},[])}function da(){let o=k.useContext(Qn);return pa(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function hm(){let o=k.useContext(bl);return pa(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var fa=k.createContext(void 0);fa.displayName="FrameworkContext";function ma(){let o=k.useContext(fa);return pa(o,"You must render this element inside a <HydratedRouter> element"),o}function vm(o,u){let s=k.useContext(fa),[c,d]=k.useState(!1),[m,g]=k.useState(!1),{onFocus:E,onBlur:_,onMouseEnter:C,onMouseLeave:P,onTouchStart:A}=u,j=k.useRef(null);k.useEffect(()=>{if(o==="render"&&g(!0),o==="viewport"){let T=O=>{O.forEach(Z=>{g(Z.isIntersecting)})},F=new IntersectionObserver(T,{threshold:.5});return j.current&&F.observe(j.current),()=>{F.disconnect()}}},[o]),k.useEffect(()=>{if(c){let T=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(T)}}},[c]);let Q=()=>{d(!0)},V=()=>{d(!1),g(!1)};return s?o!=="intent"?[m,j,{}]:[m,j,{onFocus:Lr(E,Q),onBlur:Lr(_,V),onMouseEnter:Lr(C,Q),onMouseLeave:Lr(P,V),onTouchStart:Lr(A,Q)}]:[!1,j,{}]}function Lr(o,u){return s=>{o&&o(s),s.defaultPrevented||u(s)}}function ym({page:o,...u}){let s=Rf(),{router:c}=da(),d=k.useMemo(()=>Dc(c.routes,o,c.basename),[c.routes,o,c.basename]);return d?s?k.createElement(xm,{page:o,matches:d,...u}):k.createElement(wm,{page:o,matches:d,...u}):null}function gm(o){let{manifest:u,routeModules:s}=ma(),[c,d]=k.useState([]);return k.useEffect(()=>{let m=!1;return cm(o,u,s).then(g=>{m||d(g)}),()=>{m=!0}},[o,u,s]),c}function xm({page:o,matches:u,...s}){let c=At(),{future:d}=ma(),{basename:m}=da(),g=k.useMemo(()=>{if(o===c.pathname+c.search+c.hash)return[];let E=Vc(o,m,d.unstable_trailingSlashAwareDataRequests,"rsc"),_=!1,C=[];for(let P of u)typeof P.route.shouldRevalidate=="function"?_=!0:C.push(P.route.id);return _&&C.length>0&&E.searchParams.set("_routes",C.join(",")),[E.pathname+E.search]},[m,d.unstable_trailingSlashAwareDataRequests,o,c,u]);return k.createElement(k.Fragment,null,g.map(E=>k.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...s})))}function wm({page:o,matches:u,...s}){let c=At(),{future:d,manifest:m,routeModules:g}=ma(),{basename:E}=da(),{loaderData:_,matches:C}=hm(),P=k.useMemo(()=>Sc(o,u,C,m,c,"data"),[o,u,C,m,c]),A=k.useMemo(()=>Sc(o,u,C,m,c,"assets"),[o,u,C,m,c]),j=k.useMemo(()=>{if(o===c.pathname+c.search+c.hash)return[];let T=new Set,F=!1;if(u.forEach(Z=>{var ne;let G=m.routes[Z.route.id];!G||!G.hasLoader||(!P.some(oe=>oe.route.id===Z.route.id)&&Z.route.id in _&&((ne=g[Z.route.id])!=null&&ne.shouldRevalidate)||G.hasClientLoader?F=!0:T.add(Z.route.id))}),T.size===0)return[];let O=Vc(o,E,d.unstable_trailingSlashAwareDataRequests,"data");return F&&T.size>0&&O.searchParams.set("_routes",u.filter(Z=>T.has(Z.route.id)).map(Z=>Z.route.id).join(",")),[O.pathname+O.search]},[E,d.unstable_trailingSlashAwareDataRequests,_,c,m,P,u,o,g]),Q=k.useMemo(()=>pm(A,m),[A,m]),V=gm(A);return k.createElement(k.Fragment,null,j.map(T=>k.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...s})),Q.map(T=>k.createElement("link",{key:T,rel:"modulepreload",href:T,...s})),V.map(({key:T,link:F})=>k.createElement("link",{key:T,nonce:s.nonce,...F,crossOrigin:F.crossOrigin??s.crossOrigin})))}function _m(...o){return u=>{o.forEach(s=>{typeof s=="function"?s(u):s!=null&&(s.current=u)})}}var Em=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Em&&(window.__reactRouterVersion="7.14.0")}catch{}function km({basename:o,children:u,unstable_useTransitions:s,window:c}){let d=k.useRef();d.current==null&&(d.current=ef({window:c,v5Compat:!0}));let m=d.current,[g,E]=k.useState({action:m.action,location:m.location}),_=k.useCallback(C=>{s===!1?E(C):k.startTransition(()=>E(C))},[s]);return k.useLayoutEffect(()=>m.listen(_),[m,_]),k.createElement(Jf,{basename:o,children:u,location:g.location,navigationType:g.action,navigator:m,unstable_useTransitions:s})}var Kc=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Et=k.forwardRef(function({onClick:u,discover:s="render",prefetch:c="none",relative:d,reloadDocument:m,replace:g,unstable_mask:E,state:_,target:C,to:P,preventScrollReset:A,viewTransition:j,unstable_defaultShouldRevalidate:Q,...V},T){let{basename:F,navigator:O,unstable_useTransitions:Z}=k.useContext(ut),G=typeof P=="string"&&Kc.test(P),ne=Tc(P,F);P=ne.to;let oe=Tf(P,{relative:d}),ue=At(),ve=null;if(E){let Ae=aa(E,[],ue.unstable_mask?ue.unstable_mask.pathname:"/",!0);F!=="/"&&(Ae.pathname=Ae.pathname==="/"?F:kt([F,Ae.pathname])),ve=O.createHref(Ae)}let[Ce,$e,Ze]=vm(c,V),Pt=Pm(P,{replace:g,unstable_mask:E,state:_,target:C,preventScrollReset:A,relative:d,viewTransition:j,unstable_defaultShouldRevalidate:Q,unstable_useTransitions:Z});function nt(Ae){u&&u(Ae),Ae.defaultPrevented||Pt(Ae)}let je=!(ne.isExternal||m),He=k.createElement("a",{...V,...Ze,href:(je?ve:void 0)||ne.absoluteURL||oe,onClick:je?nt:u,ref:_m(T,$e),target:C,"data-discover":!G&&s==="render"?"true":void 0});return Ce&&!G?k.createElement(k.Fragment,null,He,k.createElement(ym,{page:oe})):He});Et.displayName="Link";var Sm=k.forwardRef(function({"aria-current":u="page",caseSensitive:s=!1,className:c="",end:d=!1,style:m,to:g,viewTransition:E,children:_,...C},P){let A=Tr(g,{relative:C.relative}),j=At(),Q=k.useContext(bl),{navigator:V,basename:T}=k.useContext(ut),F=Q!=null&&Bm(A)&&E===!0,O=V.encodeLocation?V.encodeLocation(A).pathname:A.pathname,Z=j.pathname,G=Q&&Q.navigation&&Q.navigation.location?Q.navigation.location.pathname:null;s||(Z=Z.toLowerCase(),G=G?G.toLowerCase():null,O=O.toLowerCase()),G&&T&&(G=zt(G,T)||G);const ne=O!=="/"&&O.endsWith("/")?O.length-1:O.length;let oe=Z===O||!d&&Z.startsWith(O)&&Z.charAt(ne)==="/",ue=G!=null&&(G===O||!d&&G.startsWith(O)&&G.charAt(O.length)==="/"),ve={isActive:oe,isPending:ue,isTransitioning:F},Ce=oe?u:void 0,$e;typeof c=="function"?$e=c(ve):$e=[c,oe?"active":null,ue?"pending":null,F?"transitioning":null].filter(Boolean).join(" ");let Ze=typeof m=="function"?m(ve):m;return k.createElement(Et,{...C,"aria-current":Ce,className:$e,ref:P,style:Ze,to:g,viewTransition:E},typeof _=="function"?_(ve):_)});Sm.displayName="NavLink";var Cm=k.forwardRef(({discover:o="render",fetcherKey:u,navigate:s,reloadDocument:c,replace:d,state:m,method:g=ql,action:E,onSubmit:_,relative:C,preventScrollReset:P,viewTransition:A,unstable_defaultShouldRevalidate:j,...Q},V)=>{let{unstable_useTransitions:T}=k.useContext(ut),F=Dm(),O=Lm(E,{relative:C}),Z=g.toLowerCase()==="get"?"get":"post",G=typeof E=="string"&&Kc.test(E),ne=oe=>{if(_&&_(oe),oe.defaultPrevented)return;oe.preventDefault();let ue=oe.nativeEvent.submitter,ve=(ue==null?void 0:ue.getAttribute("formmethod"))||g,Ce=()=>F(ue||oe.currentTarget,{fetcherKey:u,method:ve,navigate:s,replace:d,state:m,relative:C,preventScrollReset:P,viewTransition:A,unstable_defaultShouldRevalidate:j});T&&s!==!1?k.startTransition(()=>Ce()):Ce()};return k.createElement("form",{ref:V,method:Z,action:O,onSubmit:c?_:ne,...Q,"data-discover":!G&&o==="render"?"true":void 0})});Cm.displayName="Form";function Am(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Yc(o){let u=k.useContext(Qn);return xe(u,Am(o)),u}function Pm(o,{target:u,replace:s,unstable_mask:c,state:d,preventScrollReset:m,relative:g,viewTransition:E,unstable_defaultShouldRevalidate:_,unstable_useTransitions:C}={}){let P=zf(),A=At(),j=Tr(o,{relative:g});return k.useCallback(Q=>{if(lm(Q,u)){Q.preventDefault();let V=s!==void 0?s:Br(A)===Br(j),T=()=>P(o,{replace:V,unstable_mask:c,state:d,preventScrollReset:m,relative:g,viewTransition:E,unstable_defaultShouldRevalidate:_});C?k.startTransition(()=>T()):T()}},[A,P,j,s,c,d,u,o,m,g,E,_,C])}var Rm=0,Nm=()=>`__${String(++Rm)}__`;function Dm(){let{router:o}=Yc("useSubmit"),{basename:u}=k.useContext(ut),s=Xf(),c=o.fetch,d=o.navigate;return k.useCallback(async(m,g={})=>{let{action:E,method:_,encType:C,formData:P,body:A}=am(m,u);if(g.navigate===!1){let j=g.fetcherKey||Nm();await c(j,s,g.action||E,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:P,body:A,formMethod:g.method||_,formEncType:g.encType||C,flushSync:g.flushSync})}else await d(g.action||E,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:P,body:A,formMethod:g.method||_,formEncType:g.encType||C,replace:g.replace,state:g.state,fromRouteId:s,flushSync:g.flushSync,viewTransition:g.viewTransition})},[c,d,u,s])}function Lm(o,{relative:u}={}){let{basename:s}=k.useContext(ut),c=k.useContext(Ct);xe(c,"useFormAction must be used inside a RouteContext");let[d]=c.matches.slice(-1),m={...Tr(o||".",{relative:u})},g=At();if(o==null){m.search=g.search;let E=new URLSearchParams(m.search),_=E.getAll("index");if(_.some(P=>P==="")){E.delete("index"),_.filter(A=>A).forEach(A=>E.append("index",A));let P=E.toString();m.search=P?`?${P}`:""}}return(!o||o===".")&&d.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(m.pathname=m.pathname==="/"?s:kt([s,m.pathname])),Br(m)}function Bm(o,{relative:u}={}){let s=k.useContext(Ic);xe(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=Yc("useViewTransitionState"),d=Tr(o,{relative:u});if(!s.isTransitioning)return!1;let m=zt(s.currentLocation.pathname,c)||s.currentLocation.pathname,g=zt(s.nextLocation.pathname,c)||s.nextLocation.pathname;return Gl(d.pathname,g)!=null||Gl(d.pathname,m)!=null}/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),jm=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(u,s,c)=>c?c.toUpperCase():s.toLowerCase()),Cc=o=>{const u=jm(o);return u.charAt(0).toUpperCase()+u.slice(1)},Xc=(...o)=>o.filter((u,s,c)=>!!u&&u.trim()!==""&&c.indexOf(u)===s).join(" ").trim(),Tm=o=>{for(const u in o)if(u.startsWith("aria-")||u==="role"||u==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var zm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=k.forwardRef(({color:o="currentColor",size:u=24,strokeWidth:s=2,absoluteStrokeWidth:c,className:d="",children:m,iconNode:g,...E},_)=>k.createElement("svg",{ref:_,...zm,width:u,height:u,stroke:o,strokeWidth:c?Number(s)*24/Number(u):s,className:Xc("lucide",d),...!m&&!Tm(E)&&{"aria-hidden":"true"},...E},[...g.map(([C,P])=>k.createElement(C,P)),...Array.isArray(m)?m:[m]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=(o,u)=>{const s=k.forwardRef(({className:c,...d},m)=>k.createElement(Mm,{ref:m,iconNode:u,className:Xc(`lucide-${Fm(Cc(o))}`,`lucide-${o}`,c),...d}));return s.displayName=Cc(o),s};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Jl=nn("book-open",Im);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Ac=nn("chevron-left",Om);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],$m=nn("chevron-right",Um);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Pc=nn("circle-check-big",Hm);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]],Qm=nn("circle-play",Wm);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],ia=nn("code",Vm);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],Ym=nn("house",Km);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Rc=nn("trending-up",Xm),qm=({children:o})=>{const u=At();return S.jsxs("div",{"trae-inspector-start-line":"13","trae-inspector-start-column":"4","trae-inspector-end-line":"58","trae-inspector-end-column":"10","trae-inspector-file-path":"src/components/layout/Layout.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"min-h-screen flex flex-col bg-gray-50",children:[S.jsx("header",{"trae-inspector-start-line":"15","trae-inspector-start-column":"6","trae-inspector-end-line":"37","trae-inspector-end-column":"15","trae-inspector-file-path":"src/components/layout/Layout.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-md",children:S.jsxs("div",{"trae-inspector-start-line":"16","trae-inspector-start-column":"8","trae-inspector-end-line":"36","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/layout/Layout.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"container mx-auto px-4 py-4 flex justify-between items-center",children:[S.jsxs(Et,{to:"/",className:"flex items-center space-x-2",children:[S.jsx(Jl,{className:"h-7 w-7"}),S.jsx("h1",{"trae-inspector-start-line":"19","trae-inspector-start-column":"12","trae-inspector-end-line":"19","trae-inspector-end-column":"55","trae-inspector-file-path":"src/components/layout/Layout.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%95%B0%E6%8D%AE%E5%AD%A6%E4%B9%A0%22%2C%22textStartLine%22%3A%2219%22%2C%22textStartColumn%22%3A%2246%22%2C%22textEndLine%22%3A%2219%22%2C%22textEndColumn%22%3A%2250%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xl font-bold",children:"数据学习"})]}),S.jsx("nav",{"trae-inspector-start-line":"23","trae-inspector-start-column":"10","trae-inspector-end-line":"35","trae-inspector-end-column":"16","trae-inspector-file-path":"src/components/layout/Layout.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"hidden md:flex items-center space-x-6",children:S.jsxs(Et,{to:"/",className:`flex items-center space-x-2 ${u.pathname==="/"||u.pathname.startsWith("/projects")?"font-bold text-white":"text-indigo-100 hover:text-white"}`,children:[S.jsx(Ym,{className:"h-5 w-5"}),S.jsx("span",{"trae-inspector-start-line":"33","trae-inspector-start-column":"14","trae-inspector-end-line":"33","trae-inspector-end-column":"29","trae-inspector-file-path":"src/components/layout/Layout.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E9%A6%96%E9%A1%B5%22%2C%22textStartLine%22%3A%2233%22%2C%22textStartColumn%22%3A%2220%22%2C%22textEndLine%22%3A%2233%22%2C%22textEndColumn%22%3A%2222%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",children:"首页"})]})})]})}),S.jsx("main",{"trae-inspector-start-line":"40","trae-inspector-start-column":"6","trae-inspector-end-line":"42","trae-inspector-end-column":"13","trae-inspector-file-path":"src/components/layout/Layout.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex-1 container mx-auto px-4 py-6",children:o}),S.jsx("footer",{"trae-inspector-start-line":"45","trae-inspector-start-column":"6","trae-inspector-end-line":"57","trae-inspector-end-column":"15","trae-inspector-file-path":"src/components/layout/Layout.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-gray-800 text-white py-6",children:S.jsx("div",{"trae-inspector-start-line":"46","trae-inspector-start-column":"8","trae-inspector-end-line":"56","trae-inspector-end-column":"14","trae-inspector-file-path":"src/components/layout/Layout.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"container mx-auto px-4",children:S.jsxs("div",{"trae-inspector-start-line":"47","trae-inspector-start-column":"10","trae-inspector-end-line":"55","trae-inspector-end-column":"16","trae-inspector-file-path":"src/components/layout/Layout.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex flex-col md:flex-row justify-between items-center",children:[S.jsxs("div",{"trae-inspector-start-line":"48","trae-inspector-start-column":"12","trae-inspector-end-line":"51","trae-inspector-end-column":"18","trae-inspector-file-path":"src/components/layout/Layout.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center space-x-2 mb-4 md:mb-0",children:[S.jsx(Jl,{className:"h-6 w-6"}),S.jsx("h2",{"trae-inspector-start-line":"50","trae-inspector-start-column":"14","trae-inspector-end-line":"50","trae-inspector-end-column":"57","trae-inspector-file-path":"src/components/layout/Layout.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%95%B0%E6%8D%AE%E5%AD%A6%E4%B9%A0%22%2C%22textStartLine%22%3A%2250%22%2C%22textStartColumn%22%3A%2248%22%2C%22textEndLine%22%3A%2250%22%2C%22textEndColumn%22%3A%2252%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-lg font-bold",children:"数据学习"})]}),S.jsx("div",{"trae-inspector-start-line":"52","trae-inspector-start-column":"12","trae-inspector-end-line":"54","trae-inspector-end-column":"18","trae-inspector-file-path":"src/components/layout/Layout.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22Python%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90%E5%AD%A6%E4%B9%A0%E5%B9%B3%E5%8F%B0%20%7C%20%E5%95%86%E5%8A%A1%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90%E4%B8%8E%E5%BA%94%E7%94%A8%E4%B8%93%E4%B8%9A%E8%AF%BE%E7%A8%8B%20%7C%20v1.0%22%2C%22textStartLine%22%3A%2252%22%2C%22textStartColumn%22%3A%2251%22%2C%22textEndLine%22%3A%2254%22%2C%22textEndColumn%22%3A%2212%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-gray-400",children:"Python数据分析学习平台 | 商务数据分析与应用专业课程 | v1.0"})]})})})]})},Hn=[{id:"1",title:"数据清洗实践",description:"学习如何使用pandas进行数据清洗，处理缺失值、重复值和异常值",difficulty:"beginner",category:"数据预处理",order:1,theory:[{title:"什么是数据清洗",content:"数据清洗是数据分析的第一步，目的是处理数据中的问题，如缺失值、重复值、异常值等，确保数据质量。"},{title:"常见数据清洗方法",content:`1. 处理缺失值：使用fillna()、dropna()
2. 处理重复值：使用duplicated()、drop_duplicates()
3. 处理异常值：使用统计方法识别和处理`}],starterCode:`import pandas as pd
import numpy as np

# 创建示例数据
data = {
    'name': ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Bob', np.nan],
    'age': [25, 30, 35, np.nan, 40, 30, 28],
    'salary': [50000, 60000, 70000, 80000, 90000, 60000, 1000000]
}

df = pd.DataFrame(data)
print("原始数据：")
print(df)

# 请在此处编写数据清洗代码
`,datasetCode:`import pandas as pd
import numpy as np

# 创建示例数据
data = {
    'name': ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Bob', np.nan],
    'age': [25, 30, 35, np.nan, 40, 30, 28],
    'salary': [50000, 60000, 70000, 80000, 90000, 60000, 1000000]
}

df = pd.DataFrame(data)
print("原始数据：")
print(df)
`,answerCode:`import pandas as pd
import numpy as np

# 创建示例数据
data = {
    'name': ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Bob', np.nan],
    'age': [25, 30, 35, np.nan, 40, 30, 28],
    'salary': [50000, 60000, 70000, 80000, 90000, 60000, 1000000]
}

df = pd.DataFrame(data)
print("原始数据：")
print(df)
print()

# 1. 删除重复值
df = df.drop_duplicates()
print("删除重复值后：")
print(df)
print()

# 2. 处理缺失值
# 删除name为空的行
df = df.dropna(subset=['name'])
# 用均值填充age的缺失值
df['age'] = df['age'].fillna(df['age'].mean())
print("处理缺失值后：")
print(df)
print()

# 3. 处理异常值
# 使用IQR方法检测异常值
Q1 = df['salary'].quantile(0.25)
Q3 = df['salary'].quantile(0.75)
IQR = Q3 - Q1
lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR

df = df[(df['salary'] >= lower_bound) & (df['salary'] <= upper_bound)]
print("处理异常值后：")
print(df)
`,tasks:[{id:"1",title:"删除重复值",description:"找出并删除数据中的重复记录"},{id:"2",title:"处理缺失值",description:"处理name列的缺失值，填充age列的缺失值"},{id:"3",title:"处理异常值",description:"识别并处理salary列中的异常值"}]},{id:"2",title:"数据可视化基础",description:"学习使用matplotlib和seaborn创建基础的统计图表",difficulty:"beginner",category:"数据可视化",order:2,theory:[{title:"为什么需要数据可视化",content:"数据可视化可以帮助我们更直观地理解数据，发现数据中的模式和趋势，是数据分析不可或缺的工具。"},{title:"常用图表类型",content:`1. 折线图：展示趋势
2. 柱状图：比较类别
3. 散点图：展示关系
4. 直方图：展示分布`}],starterCode:`import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd
import numpy as np

# 创建示例数据
data = {
    'month': ['一月', '二月', '三月', '四月', '五月', '六月'],
    'sales': [1000, 1200, 1500, 1300, 1800, 2000],
    'profit': [200, 240, 300, 260, 360, 400]
}

df = pd.DataFrame(data)

# 请在此处编写可视化代码
`,datasetCode:`import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd
import numpy as np

# 创建示例数据
data = {
    'month': ['一月', '二月', '三月', '四月', '五月', '六月'],
    'sales': [1000, 1200, 1500, 1300, 1800, 2000],
    'profit': [200, 240, 300, 260, 360, 400]
}

df = pd.DataFrame(data)
print("数据：")
print(df)
`,answerCode:`import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd
import numpy as np

# 设置中文字体
plt.rcParams['font.sans-serif'] = ['SimHei', 'WenQuanYi Micro Hei']
plt.rcParams['axes.unicode_minus'] = False

# 创建示例数据
data = {
    'month': ['一月', '二月', '三月', '四月', '五月', '六月'],
    'sales': [1000, 1200, 1500, 1300, 1800, 2000],
    'profit': [200, 240, 300, 260, 360, 400]
}

df = pd.DataFrame(data)

# 创建子图
fig, axes = plt.subplots(2, 2, figsize=(12, 10))

# 1. 折线图 - 销售趋势
axes[0, 0].plot(df['month'], df['sales'], marker='o', linewidth=2)
axes[0, 0].set_title('销售趋势图')
axes[0, 0].set_xlabel('月份')
axes[0, 0].set_ylabel('销售额')
axes[0, 0].grid(True, alpha=0.3)

# 2. 柱状图 - 销售额对比
axes[0, 1].bar(df['month'], df['sales'], color='skyblue', alpha=0.7)
axes[0, 1].set_title('各月销售额对比')
axes[0, 1].set_xlabel('月份')
axes[0, 1].set_ylabel('销售额')

# 3. 散点图 - 销售额和利润关系
axes[1, 0].scatter(df['sales'], df['profit'], color='green', s=100, alpha=0.6)
axes[1, 0].set_title('销售额与利润关系')
axes[1, 0].set_xlabel('销售额')
axes[1, 0].set_ylabel('利润')
axes[1, 0].grid(True, alpha=0.3)

# 4. 直方图 - 销售分布
axes[1, 1].hist(df['sales'], bins=3, color='orange', alpha=0.7, edgecolor='black')
axes[1, 1].set_title('销售额分布')
axes[1, 1].set_xlabel('销售额区间')
axes[1, 1].set_ylabel('频数')

plt.tight_layout()
plt.show()
`,tasks:[{id:"1",title:"创建折线图",description:"展示销售趋势"},{id:"2",title:"创建柱状图",description:"对比各月销售额"},{id:"3",title:"创建散点图",description:"展示销售额和利润的关系"}]},{id:"3",title:"统计分析入门",description:"学习使用Python进行基础统计分析，如描述性统计、相关性分析",difficulty:"beginner",category:"统计分析",order:3,theory:[{title:"描述性统计",content:"描述性统计用于总结数据的基本特征，包括均值、中位数、标准差、最小值、最大值等。"},{title:"相关性分析",content:"相关性分析用于衡量两个变量之间的关系强度，常用皮尔逊相关系数。"}],starterCode:`import pandas as pd
import numpy as np
import scipy.stats as stats

# 创建示例数据
np.random.seed(42)
data = {
    'math': np.random.normal(75, 10, 50),
    'english': np.random.normal(70, 8, 50),
    'physics': np.random.normal(72, 12, 50),
    'chemistry': np.random.normal(68, 9, 50)
}

df = pd.DataFrame(data)

# 请在此处编写统计分析代码
`,datasetCode:`import pandas as pd
import numpy as np

# 创建示例数据
np.random.seed(42)
data = {
    'math': np.random.normal(75, 10, 50),
    'english': np.random.normal(70, 8, 50),
    'physics': np.random.normal(72, 12, 50),
    'chemistry': np.random.normal(68, 9, 50)
}

df = pd.DataFrame(data)
print("数据前5行：")
print(df.head())
`,answerCode:`import pandas as pd
import numpy as np
import scipy.stats as stats

# 创建示例数据
np.random.seed(42)
data = {
    'math': np.random.normal(75, 10, 50),
    'english': np.random.normal(70, 8, 50),
    'physics': np.random.normal(72, 12, 50),
    'chemistry': np.random.normal(68, 9, 50)
}

df = pd.DataFrame(data)

print("=" * 60)
print("描述性统计分析")
print("=" * 60)

# 1. 基本描述性统计
print("\\n1. 基本描述性统计：")
print(df.describe())

# 2. 中位数
print("\\n2. 中位数：")
print(df.median())

# 3. 众数
print("\\n3. 众数：")
print(df.mode().iloc[0])

# 4. 方差和标准差
print("\\n4. 方差：")
print(df.var())

print("\\n5. 标准差：")
print(df.std())

print("\\n" + "=" * 60)
print("相关性分析")
print("=" * 60)

# 5. 相关性矩阵
print("\\n6. 相关性矩阵：")
print(df.corr())

# 6. 特定两个变量的相关性
print("\\n7. 数学和物理的相关性：")
corr = df['math'].corr(df['physics'])
print(f"相关系数: {corr:.4f}")

# 7. 相关性显著性检验
print("\\n8. 相关性显著性检验（数学和物理）：")
corr_result = stats.pearsonr(df['math'], df['physics'])
print(f"相关系数: {corr_result[0]:.4f}, p值: {corr_result[1]:.4f}")
`,tasks:[{id:"1",title:"描述性统计",description:"计算各科目的基本统计量"},{id:"2",title:"相关性矩阵",description:"计算各科目之间的相关性"},{id:"3",title:"显著性检验",description:"检验相关性的统计显著性"}]},{id:"4",title:"购物篮分析",description:"使用Apriori算法进行关联规则挖掘，发现商品之间的关联关系",difficulty:"intermediate",category:"数据挖掘",order:4,theory:[{title:"什么是购物篮分析",content:"购物篮分析用于发现顾客购买商品之间的关联关系，帮助商家进行商品推荐和陈列优化。"},{title:"关键概念",content:`1. 支持度(Support)：商品组合出现的频率
2. 置信度(Confidence)：购买A后购买B的概率
3. 提升度(Lift)：A对B销售的提升程度`}],starterCode:`import pandas as pd
from mlxtend.preprocessing import TransactionEncoder
from mlxtend.frequent_patterns import apriori, association_rules

# 创建示例购物篮数据
transactions = [
    ['牛奶', '面包', '鸡蛋'],
    ['面包', '鸡蛋', '饼干'],
    ['牛奶', '面包', '饼干'],
    ['牛奶', '面包', '鸡蛋', '饼干'],
    ['牛奶', '鸡蛋'],
    ['面包', '鸡蛋'],
    ['牛奶', '面包'],
    ['牛奶', '饼干'],
    ['面包', '饼干'],
    ['鸡蛋', '饼干']
]

# 请在此处编写购物篮分析代码
`,datasetCode:`import pandas as pd

# 创建示例购物篮数据
transactions = [
    ['牛奶', '面包', '鸡蛋'],
    ['面包', '鸡蛋', '饼干'],
    ['牛奶', '面包', '饼干'],
    ['牛奶', '面包', '鸡蛋', '饼干'],
    ['牛奶', '鸡蛋'],
    ['面包', '鸡蛋'],
    ['牛奶', '面包'],
    ['牛奶', '饼干'],
    ['面包', '饼干'],
    ['鸡蛋', '饼干']
]

print("购物篮数据：")
for i, basket in enumerate(transactions, 1):
    print(f"{i}. {basket}")
`,answerCode:`import pandas as pd
from mlxtend.preprocessing import TransactionEncoder
from mlxtend.frequent_patterns import apriori, association_rules

# 创建示例购物篮数据
transactions = [
    ['牛奶', '面包', '鸡蛋'],
    ['面包', '鸡蛋', '饼干'],
    ['牛奶', '面包', '饼干'],
    ['牛奶', '面包', '鸡蛋', '饼干'],
    ['牛奶', '鸡蛋'],
    ['面包', '鸡蛋'],
    ['牛奶', '面包'],
    ['牛奶', '饼干'],
    ['面包', '饼干'],
    ['鸡蛋', '饼干']
]

print("=" * 60)
print("购物篮分析 - Apriori算法")
print("=" * 60)

# 1. 数据编码
print("\\n1. 数据编码：")
te = TransactionEncoder()
te_ary = te.fit(transactions).transform(transactions)
df = pd.DataFrame(te_ary, columns=te.columns_)
print(df)

# 2. 查找频繁项集
print("\\n" + "=" * 60)
print("2. 频繁项集 (min_support=0.3)：")
print("=" * 60)
frequent_itemsets = apriori(df, min_support=0.3, use_colnames=True)
frequent_itemsets['itemsets_count'] = frequent_itemsets['itemsets'].apply(lambda x: len(x))
print(frequent_itemsets)

# 3. 生成关联规则
print("\\n" + "=" * 60)
print("3. 关联规则 (min_threshold=0.7)：")
print("=" * 60)
rules = association_rules(frequent_itemsets, metric="confidence", min_threshold=0.7)

# 选择重要列显示
important_columns = ['antecedents', 'consequents', 'support', 'confidence', 'lift']
print(rules[important_columns])

# 4. 筛选高提升度的规则
print("\\n" + "=" * 60)
print("4. 高提升度规则 (lift > 1.2)：")
print("=" * 60)
high_lift_rules = rules[rules['lift'] > 1.2].sort_values('lift', ascending=False)
print(high_lift_rules[important_columns])

print("\\n" + "=" * 60)
print("分析结论：")
print("=" * 60)
if len(high_lift_rules) > 0:
    for idx, rule in high_lift_rules.iterrows():
        ant = ', '.join(rule['antecedents'])
        cons = ', '.join(rule['consequents'])
        print(f"购买{ant}的顾客，很可能购买{cons}")
        print(f"  支持度: {rule['support']:.2%}, 置信度: {rule['confidence']:.2%}, 提升度: {rule['lift']:.2f}")
`,tasks:[{id:"1",title:"数据编码",description:"将购物篮数据转换为适合分析的格式"},{id:"2",title:"查找频繁项集",description:"找出经常一起出现的商品组合"},{id:"3",title:"生成关联规则",description:"发现商品之间的关联关系"}]},{id:"5",title:"时间序列分析",description:"学习使用pandas和statsmodels进行时间序列分析和预测",difficulty:"intermediate",category:"时间序列",order:5,theory:[{title:"什么是时间序列",content:"时间序列是按时间顺序排列的数据点序列，常见于销售数据、股票价格、天气数据等。"},{title:"时间序列分析方法",content:`1. 趋势分析：识别长期趋势
2. 季节性分析：识别周期性变化
3. 预测：预测未来值`}],starterCode:`import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# 创建示例时间序列数据
np.random.seed(42)
dates = pd.date_range(start='2023-01-01', periods=12, freq='M')
trend = np.linspace(100, 200, 12)
seasonal = 20 * np.sin(np.linspace(0, 3*np.pi, 12))
noise = np.random.normal(0, 5, 12)
sales = trend + seasonal + noise

df = pd.DataFrame({
    'date': dates,
    'sales': sales
})

# 请在此处编写时间序列分析代码
`,datasetCode:`import pandas as pd
import numpy as np

# 创建示例时间序列数据
np.random.seed(42)
dates = pd.date_range(start='2023-01-01', periods=12, freq='M')
trend = np.linspace(100, 200, 12)
seasonal = 20 * np.sin(np.linspace(0, 3*np.pi, 12))
noise = np.random.normal(0, 5, 12)
sales = trend + seasonal + noise

df = pd.DataFrame({
    'date': dates,
    'sales': sales
})

print("时间序列数据：")
print(df)
`,answerCode:`import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# 设置中文字体
plt.rcParams['font.sans-serif'] = ['SimHei', 'WenQuanYi Micro Hei']
plt.rcParams['axes.unicode_minus'] = False

# 创建示例时间序列数据
np.random.seed(42)
dates = pd.date_range(start='2023-01-01', periods=12, freq='M')
trend = np.linspace(100, 200, 12)
seasonal = 20 * np.sin(np.linspace(0, 3*np.pi, 12))
noise = np.random.normal(0, 5, 12)
sales = trend + seasonal + noise

df = pd.DataFrame({
    'date': dates,
    'sales': sales
})

print("=" * 60)
print("时间序列分析")
print("=" * 60)

# 1. 基本时间序列图
print("\\n1. 绘制时间序列图")
fig, axes = plt.subplots(2, 2, figsize=(14, 10))

# 原始数据
axes[0, 0].plot(df['date'], df['sales'], marker='o', linewidth=2, color='blue')
axes[0, 0].set_title('销售时间序列')
axes[0, 0].set_xlabel('日期')
axes[0, 0].set_ylabel('销售额')
axes[0, 0].grid(True, alpha=0.3)
plt.setp(axes[0, 0].xaxis.get_majorticklabels(), rotation=45)

# 2. 移动平均
print("\\n2. 移动平均分析")
df['MA3'] = df['sales'].rolling(window=3).mean()
df['MA6'] = df['sales'].rolling(window=6).mean()

axes[0, 1].plot(df['date'], df['sales'], marker='o', linewidth=1, label='原始数据', color='blue')
axes[0, 1].plot(df['date'], df['MA3'], linewidth=2, label='3个月移动平均', color='red')
axes[0, 1].plot(df['date'], df['MA6'], linewidth=2, label='6个月移动平均', color='green')
axes[0, 1].set_title('移动平均分析')
axes[0, 1].set_xlabel('日期')
axes[0, 1].set_ylabel('销售额')
axes[0, 1].legend()
axes[0, 1].grid(True, alpha=0.3)
plt.setp(axes[0, 1].xaxis.get_majorticklabels(), rotation=45)

# 3. 分解时间序列
print("\\n3. 时间序列分解")
# 简单分解：趋势、季节性、残差
df['trend'] = trend
df['seasonal'] = seasonal
df['residual'] = noise

axes[1, 0].plot(df['date'], df['trend'], linewidth=2, color='red')
axes[1, 0].set_title('趋势成分')
axes[1, 0].set_xlabel('日期')
axes[1, 0].set_ylabel('趋势值')
axes[1, 0].grid(True, alpha=0.3)
plt.setp(axes[1, 0].xaxis.get_majorticklabels(), rotation=45)

axes[1, 1].plot(df['date'], df['seasonal'], linewidth=2, color='green')
axes[1, 1].set_title('季节性成分')
axes[1, 1].set_xlabel('日期')
axes[1, 1].set_ylabel('季节值')
axes[1, 1].grid(True, alpha=0.3)
plt.setp(axes[1, 1].xaxis.get_majorticklabels(), rotation=45)

plt.tight_layout()
plt.show()

# 4. 统计指标
print("\\n" + "=" * 60)
print("4. 时间序列统计指标：")
print("=" * 60)
print(f"均值: {df['sales'].mean():.2f}")
print(f"标准差: {df['sales'].std():.2f}")
print(f"最小值: {df['sales'].min():.2f}")
print(f"最大值: {df['sales'].max():.2f}")
print(f"增长率: {(df['sales'].iloc[-1] - df['sales'].iloc[0]) / df['sales'].iloc[0] * 100:.2f}%")
`,tasks:[{id:"1",title:"绘制时间序列图",description:"可视化时间序列数据"},{id:"2",title:"移动平均分析",description:"平滑数据，识别趋势"},{id:"3",title:"分解时间序列",description:"分离趋势、季节性和残差"}]},{id:"6",title:"客户细分分析",description:"使用K-Means聚类算法对客户进行细分分析",difficulty:"intermediate",category:"机器学习",order:6,theory:[{title:"什么是客户细分",content:"客户细分是根据客户特征将客户分组的过程，帮助企业更好地理解客户并制定针对性的营销策略。"},{title:"K-Means聚类",content:"K-Means是一种无监督学习算法，将数据点分成K个簇，使得每个簇内的数据点尽可能相似。"}],starterCode:`import pandas as pd
import numpy as np
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
import matplotlib.pyplot as plt

# 创建示例客户数据
np.random.seed(42)
data = {
    'frequency': np.random.randint(1, 50, 100),
    'monetary': np.random.randint(100, 10000, 100),
    'recency': np.random.randint(1, 365, 100)
}

df = pd.DataFrame(data)

# 请在此处编写客户细分分析代码
`,datasetCode:`import pandas as pd
import numpy as np

# 创建示例客户数据
np.random.seed(42)
data = {
    'frequency': np.random.randint(1, 50, 100),
    'monetary': np.random.randint(100, 10000, 100),
    'recency': np.random.randint(1, 365, 100)
}

df = pd.DataFrame(data)
print("客户数据前5行：")
print(df.head())
`,answerCode:`import pandas as pd
import numpy as np
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
import matplotlib.pyplot as plt

# 设置中文字体
plt.rcParams['font.sans-serif'] = ['SimHei', 'WenQuanYi Micro Hei']
plt.rcParams['axes.unicode_minus'] = False

# 创建示例客户数据
np.random.seed(42)
data = {
    'frequency': np.random.randint(1, 50, 100),
    'monetary': np.random.randint(100, 10000, 100),
    'recency': np.random.randint(1, 365, 100)
}

df = pd.DataFrame(data)

print("=" * 60)
print("客户细分分析 - K-Means聚类")
print("=" * 60)

# 1. 数据标准化
print("\\n1. 数据标准化：")
scaler = StandardScaler()
scaled_data = scaler.fit_transform(df)
print("标准化完成")

# 2. 选择最佳K值（肘部法则）
print("\\n2. 选择最佳K值：")
inertias = []
k_range = range(1, 10)
for k in k_range:
    kmeans = KMeans(n_clusters=k, random_state=42, n_init=10)
    kmeans.fit(scaled_data)
    inertias.append(kmeans.inertia_)

# 绘制肘部法则图
fig, axes = plt.subplots(1, 2, figsize=(14, 5))
axes[0].plot(k_range, inertias, 'bo-')
axes[0].set_xlabel('簇数 (K)')
axes[0].set_ylabel('惯性')
axes[0].set_title('肘部法则 - 选择最佳K值')
axes[0].grid(True, alpha=0.3)

# 3. 使用K=3进行聚类
print("\\n3. 使用K=3进行聚类：")
kmeans = KMeans(n_clusters=3, random_state=42, n_init=10)
df['cluster'] = kmeans.fit_predict(scaled_data)

# 4. 分析每个簇的特征
print("\\n4. 各簇客户特征：")
print("=" * 60)
cluster_stats = df.groupby('cluster').agg({
    'frequency': ['mean', 'min', 'max'],
    'monetary': ['mean', 'min', 'max'],
    'recency': ['mean', 'min', 'max']
})
print(cluster_stats)

# 5. 可视化聚类结果
axes[1].scatter(df['frequency'], df['monetary'], c=df['cluster'], cmap='viridis', s=100, alpha=0.6)
axes[1].scatter(kmeans.cluster_centers_[:, 0], kmeans.cluster_centers_[:, 1], 
                c='red', marker='X', s=200, linewidths=2)
axes[1].set_xlabel('购买频率')
axes[1].set_ylabel('消费金额')
axes[1].set_title('客户细分结果')
axes[1].grid(True, alpha=0.3)

plt.tight_layout()
plt.show()

# 6. 客户细分命名
print("\\n" + "=" * 60)
print("5. 客户细分命名：")
print("=" * 60)
cluster_names = {
    0: '高价值客户 - 购买频率高，消费金额大',
    1: '沉睡客户 - 最近未购买',
    2: '新客户 - 购买频率低'
}

df['cluster_name'] = df['cluster'].map(cluster_names)

# 统计每个簇的客户数
print("\\n客户分布：")
cluster_counts = df['cluster_name'].value_counts()
for name, count in cluster_counts.items():
    print(f"{name}: {count}人 ({count/len(df)*100:.1f}%)")
`,tasks:[{id:"1",title:"数据标准化",description:"标准化数据以进行聚类"},{id:"2",title:"选择K值",description:"使用肘部法则选择最佳簇数"},{id:"3",title:"聚类分析",description:"执行K-Means聚类并分析结果"}]},{id:"7",title:"回归分析预测",description:"使用线性回归进行销售预测和趋势分析",difficulty:"intermediate",category:"机器学习",order:7,theory:[{title:"什么是回归分析",content:"回归分析是一种预测建模技术，研究因变量和自变量之间的关系，用于预测连续值。"},{title:"线性回归",content:"线性回归假设因变量和自变量之间存在线性关系，通过拟合最佳直线来进行预测。"}],starterCode:`import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score
import matplotlib.pyplot as plt

# 创建示例数据
np.random.seed(42)
advertising = np.random.randint(1000, 5000, 50)
price = np.random.randint(50, 200, 50)
competitor_price = np.random.randint(60, 180, 50)
sales = 5000 + 2 * advertising - 10 * price + 8 * competitor_price + np.random.normal(0, 200, 50)

df = pd.DataFrame({
    'advertising': advertising,
    'price': price,
    'competitor_price': competitor_price,
    'sales': sales
})

# 请在此处编写回归分析代码
`,datasetCode:`import pandas as pd
import numpy as np

# 创建示例数据
np.random.seed(42)
advertising = np.random.randint(1000, 5000, 50)
price = np.random.randint(50, 200, 50)
competitor_price = np.random.randint(60, 180, 50)
sales = 5000 + 2 * advertising - 10 * price + 8 * competitor_price + np.random.normal(0, 200, 50)

df = pd.DataFrame({
    'advertising': advertising,
    'price': price,
    'competitor_price': competitor_price,
    'sales': sales
})

print("数据前5行：")
print(df.head())
`,answerCode:`import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score
import matplotlib.pyplot as plt

# 设置中文字体
plt.rcParams['font.sans-serif'] = ['SimHei', 'WenQuanYi Micro Hei']
plt.rcParams['axes.unicode_minus'] = False

# 创建示例数据
np.random.seed(42)
advertising = np.random.randint(1000, 5000, 50)
price = np.random.randint(50, 200, 50)
competitor_price = np.random.randint(60, 180, 50)
sales = 5000 + 2 * advertising - 10 * price + 8 * competitor_price + np.random.normal(0, 200, 50)

df = pd.DataFrame({
    'advertising': advertising,
    'price': price,
    'competitor_price': competitor_price,
    'sales': sales
})

print("=" * 60)
print("线性回归分析 - 销售预测")
print("=" * 60)

# 1. 准备数据
print("\\n1. 数据准备：")
X = df[['advertising', 'price', 'competitor_price']]
y = df['sales']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
print(f"训练集大小: {len(X_train)}, 测试集大小: {len(X_test)}")

# 2. 训练模型
print("\\n2. 训练线性回归模型：")
model = LinearRegression()
model.fit(X_train, y_train)
print("模型训练完成")

# 3. 模型系数
print("\\n" + "=" * 60)
print("3. 模型系数：")
print("=" * 60)
print(f"截距: {model.intercept_:.2f}")
for i, feature in enumerate(X.columns):
    print(f"{feature}: {model.coef_[i]:.4f}")

# 4. 预测
print("\\n4. 预测：")
y_pred = model.predict(X_test)

# 5. 模型评估
print("\\n" + "=" * 60)
print("5. 模型评估：")
print("=" * 60)
mse = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)
r2 = r2_score(y_test, y_pred)
print(f"均方误差 (MSE): {mse:.2f}")
print(f"均方根误差 (RMSE): {rmse:.2f}")
print(f"R² 分数: {r2:.4f}")

# 6. 可视化结果
print("\\n6. 可视化结果：")
fig, axes = plt.subplots(1, 2, figsize=(14, 5))

# 真实值 vs 预测值
axes[0].scatter(y_test, y_pred, alpha=0.6, s=100)
axes[0].plot([y.min(), y.max()], [y.min(), y.max()], 'r--', linewidth=2)
axes[0].set_xlabel('真实销售额')
axes[0].set_ylabel('预测销售额')
axes[0].set_title('真实值 vs 预测值')
axes[0].grid(True, alpha=0.3)

# 残差图
residuals = y_test - y_pred
axes[1].scatter(y_pred, residuals, alpha=0.6, s=100)
axes[1].axhline(y=0, color='r', linestyle='--', linewidth=2)
axes[1].set_xlabel('预测销售额')
axes[1].set_ylabel('残差')
axes[1].set_title('残差图')
axes[1].grid(True, alpha=0.3)

plt.tight_layout()
plt.show()

# 7. 特征重要性
print("\\n" + "=" * 60)
print("7. 特征重要性：")
print("=" * 60)
feature_importance = pd.DataFrame({
    'feature': X.columns,
    'coefficient': model.coef_,
    'absolute_coefficient': np.abs(model.coef_)
}).sort_values('absolute_coefficient', ascending=False)
print(feature_importance)

# 8. 预测示例
print("\\n" + "=" * 60)
print("8. 预测示例：")
print("=" * 60)
new_data = pd.DataFrame({
    'advertising': [3000, 4000, 2500],
    'price': [100, 90, 120],
    'competitor_price': [95, 85, 110]
})

predictions = model.predict(new_data)
for i in range(len(new_data)):
    print(f"场景 {i+1}:")
    print(f"  广告投入: {new_data['advertising'].iloc[i]}, 价格: {new_data['price'].iloc[i]}, 竞品价格: {new_data['competitor_price'].iloc[i]}")
    print(f"  预测销售额: {predictions[i]:.2f}")
`,tasks:[{id:"1",title:"训练模型",description:"训练线性回归模型"},{id:"2",title:"评估模型",description:"评估模型预测性能"},{id:"3",title:"预测分析",description:"使用模型进行预测"}]},{id:"8",title:"异常值检测",description:"学习使用多种方法检测和处理数据中的异常值",difficulty:"advanced",category:"高级分析",order:8,theory:[{title:"什么是异常值",content:"异常值是指与其他数据点显著不同的数据点，可能由测量错误、数据录入错误或真实变异引起。"},{title:"异常值检测方法",content:`1. 统计方法：Z-score、IQR
2. 机器学习方法：Isolation Forest、One-Class SVM`}],starterCode:`import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.ensemble import IsolationForest
from sklearn.neighbors import LocalOutlierFactor

# 创建包含异常值的数据
np.random.seed(42)
normal_data = np.random.normal(100, 10, 200)
outliers = np.array([50, 150, 160, 170, 40, 30])
data = np.concatenate([normal_data, outliers])

df = pd.DataFrame({
    'value': data
})

# 请在此处编写异常值检测代码
`,datasetCode:`import pandas as pd
import numpy as np

# 创建包含异常值的数据
np.random.seed(42)
normal_data = np.random.normal(100, 10, 200)
outliers = np.array([50, 150, 160, 170, 40, 30])
data = np.concatenate([normal_data, outliers])

df = pd.DataFrame({
    'value': data
})

print("数据统计：")
print(df.describe())
`,answerCode:`import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.ensemble import IsolationForest
from sklearn.neighbors import LocalOutlierFactor

# 设置中文字体
plt.rcParams['font.sans-serif'] = ['SimHei', 'WenQuanYi Micro Hei']
plt.rcParams['axes.unicode_minus'] = False

# 创建包含异常值的数据
np.random.seed(42)
normal_data = np.random.normal(100, 10, 200)
outliers = np.array([50, 150, 160, 170, 40, 30])
data = np.concatenate([normal_data, outliers])

df = pd.DataFrame({
    'value': data
})

print("=" * 60)
print("异常值检测")
print("=" * 60)

# 创建子图
fig, axes = plt.subplots(2, 2, figsize=(14, 10))

# 1. 箱线图
print("\\n1. 箱线图 (IQR方法)：")
axes[0, 0].boxplot(df['value'])
axes[0, 0].set_title('箱线图')
axes[0, 0].set_ylabel('值')
axes[0, 0].grid(True, alpha=0.3)

# IQR方法检测异常值
Q1 = df['value'].quantile(0.25)
Q3 = df['value'].quantile(0.75)
IQR = Q3 - Q1
lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR
iqr_outliers = df[(df['value'] < lower_bound) | (df['value'] > upper_bound)]
print(f"IQR方法检测到 {len(iqr_outliers)} 个异常值:")
print(iqr_outliers)

# 2. Z-score方法
print("\\n2. Z-score方法：")
z_scores = np.abs((df['value'] - df['value'].mean()) / df['value'].std())
z_outliers = df[z_scores > 3]
print(f"Z-score方法检测到 {len(z_outliers)} 个异常值:")
print(z_outliers)

# 绘制Z-score分布图
axes[0, 1].scatter(range(len(df)), df['value'], c=z_scores > 3, cmap='coolwarm', s=60)
axes[0, 1].axhline(y=df['value'].mean(), color='green', linestyle='--', label='均值')
axes[0, 1].axhline(y=lower_bound, color='red', linestyle='--', label='下界')
axes[0, 1].axhline(y=upper_bound, color='red', linestyle='--', label='上界')
axes[0, 1].set_title('Z-score异常值检测')
axes[0, 1].set_xlabel('索引')
axes[0, 1].set_ylabel('值')
axes[0, 1].legend()
axes[0, 1].grid(True, alpha=0.3)

# 3. Isolation Forest
print("\\n3. Isolation Forest方法：")
iso_forest = IsolationForest(contamination=0.1, random_state=42)
iso_outliers = iso_forest.fit_predict(df[['value']])
df['iso_outlier'] = iso_outliers == -1
print(f"Isolation Forest检测到 {df['iso_outlier'].sum()} 个异常值")

axes[1, 0].scatter(range(len(df)), df['value'], c=df['iso_outlier'], cmap='coolwarm', s=60)
axes[1, 0].set_title('Isolation Forest异常值检测')
axes[1, 0].set_xlabel('索引')
axes[1, 0].set_ylabel('值')
axes[1, 0].grid(True, alpha=0.3)

# 4. 直方图对比
print("\\n4. 异常值处理前后对比：")
df_clean = df[~df['iso_outlier']].copy()

axes[1, 1].hist(df['value'], alpha=0.5, label='原始数据', bins=20, density=True)
axes[1, 1].hist(df_clean['value'], alpha=0.5, label='清理后数据', bins=20, density=True)
axes[1, 1].set_title('数据分布对比')
axes[1, 1].set_xlabel('值')
axes[1, 1].set_ylabel('密度')
axes[1, 1].legend()
axes[1, 1].grid(True, alpha=0.3)

plt.tight_layout()
plt.show()

# 5. 对比统计
print("\\n" + "=" * 60)
print("5. 异常值处理前后统计对比：")
print("=" * 60)
comparison = pd.DataFrame({
    '原始数据': df['value'].describe(),
    '清理后数据': df_clean['value'].describe()
})
print(comparison)

# 6. 总结
print("\\n" + "=" * 60)
print("6. 总结：")
print("=" * 60)
print("方法对比：")
print(f"- IQR方法: {len(iqr_outliers)} 个异常值")
print(f"- Z-score方法: {len(z_outliers)} 个异常值")
print(f"- Isolation Forest: {df['iso_outlier'].sum()} 个异常值")
print("\\n建议：根据业务场景选择合适的方法，异常值不一定是错误的，可能是真实的数据！")
`,tasks:[{id:"1",title:"IQR方法",description:"使用箱线图和IQR检测异常值"},{id:"2",title:"Z-score方法",description:"使用统计方法检测异常值"},{id:"3",title:"Isolation Forest",description:"使用机器学习方法检测异常值"}]},{id:"9",title:"文本情感分析",description:"使用NLP技术进行文本情感分析，分析客户评论",difficulty:"advanced",category:"文本分析",order:9,theory:[{title:"什么是情感分析",content:"情感分析是识别文本中情感倾向的技术，常用于分析客户评论、社交媒体反馈等。"},{title:"情感分析方法",content:`1. 基于词典的方法：使用情感词典
2. 机器学习方法：使用分类算法`}],starterCode:`import pandas as pd
import numpy as np
import re
from collections import Counter

# 创建示例评论数据
reviews = [
    "这个产品真的很好用，质量很棒！",
    "不推荐，完全浪费钱，太差了。",
    "还可以，一般般吧，没什么特别的。",
    "太棒了！非常满意，强烈推荐！",
    "不好用，客服态度也很差。",
    "性价比很高，值得购买。",
    "一般，能用但不算好。",
    "非常好，下次还会买！",
    "很糟糕，后悔买了。",
    "还不错，比预期的好。"
]

labels = ['positive', 'negative', 'neutral', 'positive', 'negative', 
          'positive', 'neutral', 'positive', 'negative', 'positive']

df = pd.DataFrame({
    'review': reviews,
    'label': labels
})

# 请在此处编写情感分析代码
`,datasetCode:`import pandas as pd

# 创建示例评论数据
reviews = [
    "这个产品真的很好用，质量很棒！",
    "不推荐，完全浪费钱，太差了。",
    "还可以，一般般吧，没什么特别的。",
    "太棒了！非常满意，强烈推荐！",
    "不好用，客服态度也很差。",
    "性价比很高，值得购买。",
    "一般，能用但不算好。",
    "非常好，下次还会买！",
    "很糟糕，后悔买了。",
    "还不错，比预期的好。"
]

labels = ['positive', 'negative', 'neutral', 'positive', 'negative', 
          'positive', 'neutral', 'positive', 'negative', 'positive']

df = pd.DataFrame({
    'review': reviews,
    'label': labels
})

print("评论数据：")
print(df)
`,answerCode:`import pandas as pd
import numpy as np
import re
from collections import Counter

# 设置中文字体
import matplotlib.pyplot as plt
plt.rcParams['font.sans-serif'] = ['SimHei', 'WenQuanYi Micro Hei']
plt.rcParams['axes.unicode_minus'] = False

# 创建示例评论数据
reviews = [
    "这个产品真的很好用，质量很棒！",
    "不推荐，完全浪费钱，太差了。",
    "还可以，一般般吧，没什么特别的。",
    "太棒了！非常满意，强烈推荐！",
    "不好用，客服态度也很差。",
    "性价比很高，值得购买。",
    "一般，能用但不算好。",
    "非常好，下次还会买！",
    "很糟糕，后悔买了。",
    "还不错，比预期的好。"
]

labels = ['positive', 'negative', 'neutral', 'positive', 'negative', 
          'positive', 'neutral', 'positive', 'negative', 'positive']

df = pd.DataFrame({
    'review': reviews,
    'label': labels
})

print("=" * 60)
print("文本情感分析")
print("=" * 60)

# 1. 构建情感词典
print("\\n1. 构建情感词典：")
positive_words = ['好', '棒', '优秀', '推荐', '满意', '值得', '太棒', '很好', '不错', '喜欢', '超值', '完美']
negative_words = ['差', '烂', '糟糕', '浪费', '后悔', '不推荐', '不好', '太差', '很烂', '失望', '恶心', '差劲']
neutral_words = ['一般', '普通', '还行', '中等', '可以', '还好', '普通', '一般般', '不算', '还行吧']

print(f"正面词: {len(positive_words)} 个")
print(f"负面词: {len(negative_words)} 个")
print(f"中性词: {len(neutral_words)} 个")

# 2. 文本预处理
def preprocess_text(text):
    # 移除标点符号
    text = re.sub(r'[^ws]', '', text)
    return text

df['cleaned_review'] = df['review'].apply(preprocess_text)

# 3. 基于词典的情感分析
print("\\n2. 基于词典的情感分析：")
def analyze_sentiment(text):
    positive_count = sum(1 for word in positive_words if word in text)
    negative_count = sum(1 for word in negative_words if word in text)
    neutral_count = sum(1 for word in neutral_words if word in text)
    
    if positive_count > negative_count and positive_count > neutral_count:
        return 'positive'
    elif negative_count > positive_count and negative_count > neutral_count:
        return 'negative'
    else:
        return 'neutral'

df['predicted_label'] = df['cleaned_review'].apply(analyze_sentiment)

# 4. 计算情感分数
def calculate_sentiment_score(text):
    positive_count = sum(1 for word in positive_words if word in text)
    negative_count = sum(1 for word in negative_words if word in text)
    return positive_count - negative_count

df['sentiment_score'] = df['cleaned_review'].apply(calculate_sentiment_score)

print("\\n分析结果：")
print(df[['review', 'label', 'predicted_label', 'sentiment_score']])

# 5. 评估准确率
accuracy = (df['label'] == df['predicted_label']).mean()
print(f"\\n准确率: {accuracy:.2%}")

# 6. 可视化结果
fig, axes = plt.subplots(2, 2, figsize=(14, 10))

# 真实标签分布
label_counts = df['label'].value_counts()
colors = ['green', 'red', 'blue']
axes[0, 0].pie(label_counts.values, labels=label_counts.index, autopct='%1.1f%%', 
                colors=colors, startangle=90)
axes[0, 0].set_title('真实情感分布')

# 预测标签分布
pred_counts = df['predicted_label'].value_counts()
axes[0, 1].pie(pred_counts.values, labels=pred_counts.index, autopct='%1.1f%%', 
                colors=colors, startangle=90)
axes[0, 1].set_title('预测情感分布')

# 情感分数分布
axes[1, 0].bar(range(len(df)), df['sentiment_score'], 
               color=['green' if x > 0 else 'red' if x < 0 else 'blue' for x in df['sentiment_score']])
axes[1, 0].set_xlabel('评论索引')
axes[1, 0].set_ylabel('情感分数')
axes[1, 0].set_title('情感分数分布')
axes[1, 0].axhline(y=0, color='black', linestyle='-', linewidth=0.5)
axes[1, 0].grid(True, alpha=0.3)

# 词频分析
all_words = ' '.join(df['cleaned_review'])
word_counts = Counter(list(all_words))

axes[1, 1].bar(range(10), list(word_counts.values())[:10])
axes[1, 1].set_xticks(range(10))
axes[1, 1].set_xticklabels(list(word_counts.keys())[:10])
axes[1, 1].set_xlabel('字')
axes[1, 1].set_ylabel('频次')
axes[1, 1].set_title('高频字分布')
axes[1, 1].tick_params(axis='x', rotation=45)

plt.tight_layout()
plt.show()

# 7. 总结
print("\\n" + "=" * 60)
print("4. 总结：")
print("=" * 60)
print(f"正面评论: {sum(df['predicted_label'] == 'positive')} 条")
print(f"负面评论: {sum(df['predicted_label'] == 'negative')} 条")
print(f"中性评论: {sum(df['predicted_label'] == 'neutral')} 条")
print(f"平均情感分数: {df['sentiment_score'].mean():.2f}")
print("\\n建议：")
print("- 正面评论：可以用作产品推荐案例")
print("- 负面评论：需要重点关注，及时改进")
print("- 中性评论：可以进一步了解客户需求")
`,tasks:[{id:"1",title:"构建情感词典",description:"创建正面、负面、中性情感词库"},{id:"2",title:"文本预处理",description:"清理和处理文本数据"},{id:"3",title:"情感分类",description:"使用词典方法进行情感分析"}]},{id:"10",title:"A/B测试分析",description:"学习设计和分析A/B测试，评估产品改进效果",difficulty:"advanced",category:"实验设计",order:10,theory:[{title:"什么是A/B测试",content:"A/B测试是将用户随机分成两组，分别体验不同版本的产品，通过统计分析比较哪个版本效果更好。"},{title:"A/B测试关键指标",content:`1. 转化率
2. 统计显著性
3. p值`}],starterCode:`import pandas as pd
import numpy as np
from scipy import stats
import matplotlib.pyplot as plt

# 创建示例A/B测试数据
np.random.seed(42)
group_a_converted = np.random.binomial(1, 0.1, 1000)  # A组，10%转化率
group_b_converted = np.random.binomial(1, 0.12, 1000)  # B组，12%转化率

df = pd.DataFrame({
    'group': ['A'] * 1000 + ['B'] * 1000,
    'converted': np.concatenate([group_a_converted, group_b_converted])
})

# 请在此处编写A/B测试分析代码
`,datasetCode:`import pandas as pd
import numpy as np

# 创建示例A/B测试数据
np.random.seed(42)
group_a_converted = np.random.binomial(1, 0.1, 1000)
group_b_converted = np.random.binomial(1, 0.12, 1000)

df = pd.DataFrame({
    'group': ['A'] * 1000 + ['B'] * 1000,
    'converted': np.concatenate([group_a_converted, group_b_converted])
})

print("数据前5行：")
print(df.head())
print(f"\\n数据总数: {len(df)}")
`,answerCode:`import pandas as pd
import numpy as np
from scipy import stats
import matplotlib.pyplot as plt

# 设置中文字体
plt.rcParams['font.sans-serif'] = ['SimHei', 'WenQuanYi Micro Hei']
plt.rcParams['axes.unicode-minus'] = False

# 创建示例A/B测试数据
np.random.seed(42)
group_a_converted = np.random.binomial(1, 0.1, 1000)  # A组，10%转化率
group_b_converted = np.random.binomial(1, 0.12, 1000)  # B组，12%转化率

df = pd.DataFrame({
    'group': ['A'] * 1000 + ['B'] * 1000,
    'converted': np.concatenate([group_a_converted, group_b_converted])
})

print("=" * 60)
print("A/B测试分析")
print("=" * 60)

# 1. 计算基本统计指标
print("\\n1. 基本统计指标：")
print("=" * 60)

group_stats = df.groupby('group').agg({
    'converted': ['sum', 'mean', 'count']
}).round(4)
group_stats.columns = ['转化数', '转化率', '样本数']
print(group_stats)

# 2. 可视化结果
fig, axes = plt.subplots(2, 2, figsize=(14, 10))

# 转化率对比
conversion_rates = df.groupby('group')['converted'].mean()
colors = ['blue', 'green']
axes[0, 0].bar(conversion_rates.index, conversion_rates.values, color=colors, alpha=0.7)
axes[0, 0].set_title('A/B组转化率对比')
axes[0, 0].set_xlabel('组别')
axes[0, 0].set_ylabel('转化率')
axes[0, 0].set_ylim([0, max(conversion_rates.values) * 1.2])
for i, v in enumerate(conversion_rates.values):
    axes[0, 0].text(i, v + 0.005, f'{v:.2%}', ha='center')

# 转化人数对比
converted_counts = df.groupby('group')['converted'].sum()
axes[0, 1].bar(converted_counts.index, converted_counts.values, color=colors, alpha=0.7)
axes[0, 1].set_title('A/B组转化人数对比')
axes[0, 1].set_xlabel('组别')
axes[0, 1].set_ylabel('转化人数')
for i, v in enumerate(converted_counts.values):
    axes[0, 1].text(i, v + 2, str(v), ha='center')

# 3. 假设检验
print("\\n2. 假设检验：")
print("=" * 60)

# 提取数据
group_a = df[df['group'] == 'A']['converted']
group_b = df[df['group'] == 'B']['converted']

# 计算转化率
cr_a = group_a.mean()
cr_b = group_b.mean()
n_a = len(group_a)
n_b = len(group_b)
print(f"A组转化率: {cr_a:.2%}, 样本数: {n_a}")
print(f"B组转化率: {cr_b:.2%}, 样本数: {n_b}")

# 计算提升度
lift = (cr_b - cr_a) / cr_a
print(f"相对提升度: {lift:.2%}")

# 双样本Z检验
print("\\n3. 双样本Z检验：")
print("=" * 60)

# 计算池化比例
p_pool = (group_a.sum() + group_b.sum()) / (n_a + n_b)
se_pool = np.sqrt(p_pool * (1 - p_pool) * (1/n_a + 1/n_b))

# 计算Z统计量
z_score = (cr_b - cr_a) / se_pool

# 计算p值（双尾检验）
p_value = 2 * (1 - stats.norm.cdf(abs(z_score)))

print(f"Z统计量: {z_score:.4f}")
print(f"p值: {p_value:.4f}")

# 显著性判断
alpha = 0.05
if p_value < alpha:
    print(f"结论: p值 ({p_value:.4f}) < 0.05，结果具有统计显著性！")
    print("B组效果显著优于A组！")
else:
    print(f"结论: p值 ({p_value:.4f}) >= 0.05，结果不具有统计显著性")
    print("无法判断哪个版本更好")

# 4. 置信区间
print("\\n4. 置信区间分析：")
print("=" * 60)

# A组置信区间
se_a = np.sqrt(cr_a * (1 - cr_a) / n_a)
ci_a = stats.norm.interval(0.95, loc=cr_a, scale=se_a)
print(f"A组转化率95%置信区间: [{ci_a[0]:.2%}, {ci_a[1]:.2%}]")

# B组置信区间
se_b = np.sqrt(cr_b * (1 - cr_b) / n_b)
ci_b = stats.norm.interval(0.95, loc=cr_b, scale=se_b)
print(f"B组转化率95%置信区间: [{ci_b[0]:.2%}, {ci_b[1]:.2%}]")

# 可视化置信区间
groups = ['A', 'B']
means = [cr_a, cr_b]
cis = [ci_a, ci_b]

axes[1, 0].errorbar(groups, means, yerr=[[m - ci[0] for m, ci in zip(means, cis)], 
                                         [ci[1] - m for m, ci in zip(means, cis)]],
                    fmt='o', capsize=10, elinewidth=2, capthick=2, 
                    color='black', markersize=10)
axes[1, 0].set_title('转化率95%置信区间')
axes[1, 0].set_xlabel('组别')
axes[1, 0].set_ylabel('转化率')
axes[1, 0].set_ylim([0, max(ci_b[1], ci_a[1]) * 1.1])
axes[1, 0].grid(True, alpha=0.3)

# 5. 样本量分析
print("\\n5. 样本量分析：")
print("=" * 60)

# 简化版：基于提升度的样本量估算
baseline_cr = 0.1  # 基准转化率
min_effect = 0.2  # 最小检测效应（20%提升）
alpha = 0.05  # 显著性水平
power = 0.8  # 统计功效

# 简化公式计算所需样本量
from scipy.stats import norm
p1 = baseline_cr
p2 = p1 * (1 + min_effect)
p_pool = (p1 + p2) / 2
delta = abs(p2 - p1)
n_per_group = int((norm.ppf(1-alpha/2) + norm.ppf(power))**2 * 
                  2 * p_pool * (1 - p_pool) / (delta)**2)

print(f"检测20%提升所需样本量（每组）: {n_per_group}")
print(f"当前A组样本量: {n_a}")
print(f"当前B组样本量: {n_b}")

# 结论
plt.tight_layout()
plt.show()

print("\\n" + "=" * 60)
print("6. 总结")
print("=" * 60)
if p_value < alpha:
    print("✓ A/B测试成功！")
    print(f"B组转化率显著高于A组 ({lift:.1%}提升)")
    print("建议：部署B组版本")
else:
    print("✗ A/B测试无显著结论")
    print("当前数据无法证明B组优于A组")
    print("建议：收集更多数据或优化测试策略")
`,tasks:[{id:"1",title:"统计指标",description:"计算A/B两组的转化率和样本数"},{id:"2",title:"假设检验",description:"使用Z检验判断结果显著性"},{id:"3",title:"结果解读",description:"分析测试结果并给出建议"}]}],Nc=()=>S.jsxs("div",{"trae-inspector-start-line":"8","trae-inspector-start-column":"4","trae-inspector-end-line":"71","trae-inspector-end-column":"10","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"max-w-6xl mx-auto px-4 py-12",children:[S.jsxs("div",{"trae-inspector-start-line":"10","trae-inspector-start-column":"6","trae-inspector-end-line":"19","trae-inspector-end-column":"12","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-center mb-16",children:[S.jsx("h1",{"trae-inspector-start-line":"11","trae-inspector-start-column":"8","trae-inspector-end-line":"11","trae-inspector-end-column":"81","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22Python%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90%E5%AD%A6%E4%B9%A0%E5%B9%B3%E5%8F%B0%22%2C%22textStartLine%22%3A%2211%22%2C%22textStartColumn%22%3A%2262%22%2C%22textEndLine%22%3A%2211%22%2C%22textEndColumn%22%3A%2276%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-4xl font-bold text-gray-900 mb-4",children:"Python数据分析学习平台"}),S.jsx("p",{"trae-inspector-start-line":"12","trae-inspector-start-column":"8","trae-inspector-end-line":"14","trae-inspector-end-column":"12","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%95%86%E5%8A%A1%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90%E4%B8%8E%E5%BA%94%E7%94%A8%E4%B8%93%E4%B8%9A%E8%AF%BE%E7%A8%8B%EF%BC%8C%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E5%88%B0%E9%AB%98%E7%BA%A7%E5%BA%94%E7%94%A8%22%2C%22textStartLine%22%3A%2212%22%2C%22textStartColumn%22%3A%2268%22%2C%22textEndLine%22%3A%2214%22%2C%22textEndColumn%22%3A%228%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xl text-gray-600 max-w-3xl mx-auto mb-8",children:"商务数据分析与应用专业课程，从零开始到高级应用"}),S.jsxs(Et,{to:"/projects",className:"inline-flex items-center bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition",children:["开始学习",S.jsx(Rc,{className:"ml-2"})]})]}),S.jsxs("div",{"trae-inspector-start-line":"22","trae-inspector-start-column":"6","trae-inspector-end-line":"38","trae-inspector-end-column":"12","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"grid md:grid-cols-3 gap-8 mb-16",children:[S.jsxs("div",{"trae-inspector-start-line":"23","trae-inspector-start-column":"8","trae-inspector-end-line":"27","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white p-6 rounded-lg shadow-md",children:[S.jsx(Jl,{className:"w-12 h-12 text-indigo-600 mb-4"}),S.jsx("h3",{"trae-inspector-start-line":"25","trae-inspector-start-column":"10","trae-inspector-end-line":"25","trae-inspector-end-column":"64","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%AE%8C%E6%95%B4%E8%AF%BE%E7%A8%8B%E4%BD%93%E7%B3%BB%22%2C%22textStartLine%22%3A%2225%22%2C%22textStartColumn%22%3A%2253%22%2C%22textEndLine%22%3A%2225%22%2C%22textEndColumn%22%3A%2259%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-lg font-semibold mb-2",children:"完整课程体系"}),S.jsx("p",{"trae-inspector-start-line":"26","trae-inspector-start-column":"10","trae-inspector-end-line":"26","trae-inspector-end-column":"64","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E4%BB%8E%E5%9F%BA%E7%A1%80%E5%85%A5%E9%97%A8%E5%88%B0%E9%AB%98%E7%BA%A7%E5%BA%94%E7%94%A8%EF%BC%8C10%E4%B8%AA%E7%B2%BE%E5%BF%83%E8%AE%BE%E8%AE%A1%E7%9A%84%E9%A1%B9%E7%9B%AE%22%2C%22textStartLine%22%3A%2226%22%2C%22textStartColumn%22%3A%2239%22%2C%22textEndLine%22%3A%2226%22%2C%22textEndColumn%22%3A%2260%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-gray-600",children:"从基础入门到高级应用，10个精心设计的项目"})]}),S.jsxs("div",{"trae-inspector-start-line":"28","trae-inspector-start-column":"8","trae-inspector-end-line":"32","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white p-6 rounded-lg shadow-md",children:[S.jsx(ia,{className:"w-12 h-12 text-indigo-600 mb-4"}),S.jsx("h3",{"trae-inspector-start-line":"30","trae-inspector-start-column":"10","trae-inspector-end-line":"30","trae-inspector-end-column":"62","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E4%BA%92%E5%8A%A8%E5%AD%A6%E4%B9%A0%22%2C%22textStartLine%22%3A%2230%22%2C%22textStartColumn%22%3A%2253%22%2C%22textEndLine%22%3A%2230%22%2C%22textEndColumn%22%3A%2257%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-lg font-semibold mb-2",children:"互动学习"}),S.jsx("p",{"trae-inspector-start-line":"31","trae-inspector-start-column":"10","trae-inspector-end-line":"31","trae-inspector-end-column":"57","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%AE%9E%E8%B7%B5%E9%A9%B1%E5%8A%A8%E7%9A%84%E5%AD%A6%E4%B9%A0%E6%96%B9%E5%BC%8F%EF%BC%8C%E8%BE%B9%E5%AD%A6%E8%BE%B9%E5%81%9A%22%2C%22textStartLine%22%3A%2231%22%2C%22textStartColumn%22%3A%2239%22%2C%22textEndLine%22%3A%2231%22%2C%22textEndColumn%22%3A%2253%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-gray-600",children:"实践驱动的学习方式，边学边做"})]}),S.jsxs("div",{"trae-inspector-start-line":"33","trae-inspector-start-column":"8","trae-inspector-end-line":"37","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white p-6 rounded-lg shadow-md",children:[S.jsx(Rc,{className:"w-12 h-12 text-indigo-600 mb-4"}),S.jsx("h3",{"trae-inspector-start-line":"35","trae-inspector-start-column":"10","trae-inspector-end-line":"35","trae-inspector-end-column":"64","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90%E6%8A%80%E8%83%BD%22%2C%22textStartLine%22%3A%2235%22%2C%22textStartColumn%22%3A%2253%22%2C%22textEndLine%22%3A%2235%22%2C%22textEndColumn%22%3A%2259%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-lg font-semibold mb-2",children:"数据分析技能"}),S.jsx("p",{"trae-inspector-start-line":"36","trae-inspector-start-column":"10","trae-inspector-end-line":"36","trae-inspector-end-column":"61","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%B6%B5%E7%9B%96%E4%BB%8E%E6%95%B0%E6%8D%AE%E6%B8%85%E6%B4%97%E5%88%B0%E9%AB%98%E7%BA%A7%E5%BB%BA%E6%A8%A1%E7%9A%84%E5%AE%8C%E6%95%B4%E6%8A%80%E8%83%BD%E6%A0%88%22%2C%22textStartLine%22%3A%2236%22%2C%22textStartColumn%22%3A%2239%22%2C%22textEndLine%22%3A%2236%22%2C%22textEndColumn%22%3A%2257%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-gray-600",children:"涵盖从数据清洗到高级建模的完整技能栈"})]})]}),S.jsxs("div",{"trae-inspector-start-line":"41","trae-inspector-start-column":"6","trae-inspector-end-line":"70","trae-inspector-end-column":"12","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:[S.jsx("h2",{"trae-inspector-start-line":"42","trae-inspector-start-column":"8","trae-inspector-end-line":"42","trae-inspector-end-column":"70","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%AD%A6%E4%B9%A0%E9%A1%B9%E7%9B%AE%22%2C%22textStartLine%22%3A%2242%22%2C%22textStartColumn%22%3A%2261%22%2C%22textEndLine%22%3A%2242%22%2C%22textEndColumn%22%3A%2265%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-3xl font-bold text-center mb-10",children:"学习项目"}),S.jsx("div",{"trae-inspector-start-line":"43","trae-inspector-start-column":"8","trae-inspector-end-line":"69","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:Hn.map(o=>S.jsxs(Et,{to:`/projects/${o.id}`,className:"bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow",children:[S.jsxs("div",{"trae-inspector-start-line":"50","trae-inspector-start-column":"14","trae-inspector-end-line":"61","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center justify-between mb-2",children:[S.jsx("span",{"trae-inspector-start-line":"51","trae-inspector-start-column":"16","trae-inspector-end-line":"59","trae-inspector-end-column":"23","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:`px-3 py-1 rounded-full text-xs font-medium ${o.difficulty==="beginner"?"bg-green-100 text-green-800":o.difficulty==="intermediate"?"bg-yellow-100 text-yellow-800":"bg-red-100 text-red-800"}`,children:o.difficulty==="beginner"?"初级":o.difficulty==="intermediate"?"中级":"高级"}),S.jsxs("span",{"trae-inspector-start-line":"60","trae-inspector-start-column":"16","trae-inspector-end-line":"60","trae-inspector-end-column":"81","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-gray-500",children:["项目 ",o.order]})]}),S.jsx("h3",{"trae-inspector-start-line":"62","trae-inspector-start-column":"14","trae-inspector-end-line":"62","trae-inspector-end-column":"77","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-lg font-semibold mb-2",children:o.title}),S.jsx("p",{"trae-inspector-start-line":"63","trae-inspector-start-column":"14","trae-inspector-end-line":"63","trae-inspector-end-column":"81","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-gray-600 text-sm mb-3",children:o.description}),S.jsx("div",{"trae-inspector-start-line":"64","trae-inspector-start-column":"14","trae-inspector-end-line":"66","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/Home.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xs text-gray-500",children:o.category})]},o.id))})]})]}),Zm=()=>{const{id:o}=If(),u=Hn.find(C=>C.id===o),[s,c]=k.useState("theory"),[d,m]=k.useState(!1);if(!u)return S.jsxs("div",{"trae-inspector-start-line":"15","trae-inspector-start-column":"6","trae-inspector-end-line":"20","trae-inspector-end-column":"12","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"max-w-4xl mx-auto px-4 py-12 text-center",children:[S.jsx("h2",{"trae-inspector-start-line":"16","trae-inspector-start-column":"8","trae-inspector-end-line":"16","trae-inspector-end-column":"58","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E9%A1%B9%E7%9B%AE%E6%9C%AA%E6%89%BE%E5%88%B0%22%2C%22textStartLine%22%3A%2216%22%2C%22textStartColumn%22%3A%2248%22%2C%22textEndLine%22%3A%2216%22%2C%22textEndColumn%22%3A%2253%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-2xl font-bold mb-4",children:"项目未找到"}),S.jsx(Et,{to:"/",className:"text-indigo-600 hover:underline",children:"返回首页"})]});const g=Hn.findIndex(C=>C.id===o),E=g>0?Hn[g-1]:null,_=g<Hn.length-1?Hn[g+1]:null;return S.jsxs("div",{"trae-inspector-start-line":"29","trae-inspector-start-column":"4","trae-inspector-end-line":"208","trae-inspector-end-column":"10","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"max-w-6xl mx-auto px-4 py-8",children:[S.jsxs("div",{"trae-inspector-start-line":"31","trae-inspector-start-column":"6","trae-inspector-end-line":"60","trae-inspector-end-column":"12","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center justify-between mb-8",children:[S.jsxs("div",{"trae-inspector-start-line":"32","trae-inspector-start-column":"8","trae-inspector-end-line":"39","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:[S.jsxs(Et,{to:"/",className:"text-indigo-600 hover:underline inline-flex items-center mb-2",children:[S.jsx(Ac,{className:"w-4 h-4 mr-1"}),"返回项目列表"]}),S.jsx("h1",{"trae-inspector-start-line":"37","trae-inspector-start-column":"10","trae-inspector-end-line":"37","trae-inspector-end-column":"65","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-3xl font-bold",children:u.title}),S.jsx("p",{"trae-inspector-start-line":"38","trae-inspector-start-column":"10","trae-inspector-end-line":"38","trae-inspector-end-column":"69","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-gray-600 mt-2",children:u.description})]}),S.jsxs("div",{"trae-inspector-start-line":"40","trae-inspector-start-column":"8","trae-inspector-end-line":"59","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center space-x-4",children:[E&&S.jsxs(Et,{to:`/projects/${E.id}`,className:"flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50",children:[S.jsx(Ac,{className:"w-4 h-4 mr-1"}),"上一个项目"]}),_&&S.jsxs(Et,{to:`/projects/${_.id}`,className:"flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700",children:["下一个项目",S.jsx($m,{className:"w-4 h-4 ml-1"})]})]})]}),S.jsxs("div",{"trae-inspector-start-line":"63","trae-inspector-start-column":"6","trae-inspector-end-line":"93","trae-inspector-end-column":"12","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-lg shadow-md p-6 mb-8",children:[S.jsxs("div",{"trae-inspector-start-line":"64","trae-inspector-start-column":"8","trae-inspector-end-line":"76","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex flex-wrap items-center gap-4",children:[S.jsx("span",{"trae-inspector-start-line":"65","trae-inspector-start-column":"10","trae-inspector-end-line":"73","trae-inspector-end-column":"17","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:`px-4 py-2 rounded-full text-sm font-medium ${u.difficulty==="beginner"?"bg-green-100 text-green-800":u.difficulty==="intermediate"?"bg-yellow-100 text-yellow-800":"bg-red-100 text-red-800"}`,children:u.difficulty==="beginner"?"初级":u.difficulty==="intermediate"?"中级":"高级"}),S.jsx("span",{"trae-inspector-start-line":"74","trae-inspector-start-column":"10","trae-inspector-end-line":"74","trae-inspector-end-column":"67","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-gray-600",children:u.category}),S.jsxs("span",{"trae-inspector-start-line":"75","trae-inspector-start-column":"10","trae-inspector-end-line":"75","trae-inspector-end-column":"70","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-gray-500",children:["项目 ",u.order,"/10"]})]}),S.jsxs("div",{"trae-inspector-start-line":"79","trae-inspector-start-column":"8","trae-inspector-end-line":"92","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"mt-6",children:[S.jsx("h3",{"trae-inspector-start-line":"80","trae-inspector-start-column":"10","trae-inspector-end-line":"80","trae-inspector-end-column":"54","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%AD%A6%E4%B9%A0%E4%BB%BB%E5%8A%A1%22%2C%22textStartLine%22%3A%2280%22%2C%22textStartColumn%22%3A%2245%22%2C%22textEndLine%22%3A%2280%22%2C%22textEndColumn%22%3A%2249%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"font-semibold mb-3",children:"学习任务"}),S.jsx("div",{"trae-inspector-start-line":"81","trae-inspector-start-column":"10","trae-inspector-end-line":"91","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"space-y-2",children:u.tasks.map((C,P)=>S.jsxs("div",{"trae-inspector-start-line":"83","trae-inspector-start-column":"14","trae-inspector-end-line":"89","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-start space-x-3",children:[S.jsx(Pc,{className:"w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"}),S.jsxs("div",{"trae-inspector-start-line":"85","trae-inspector-start-column":"16","trae-inspector-end-line":"88","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",children:[S.jsx("span",{"trae-inspector-start-line":"86","trae-inspector-start-column":"18","trae-inspector-end-line":"86","trae-inspector-end-column":"67","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"font-medium",children:C.title}),S.jsx("p",{"trae-inspector-start-line":"87","trae-inspector-start-column":"18","trae-inspector-end-line":"87","trae-inspector-end-column":"77","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm text-gray-600",children:C.description})]})]},C.id))})]})]}),S.jsxs("div",{"trae-inspector-start-line":"96","trae-inspector-start-column":"6","trae-inspector-end-line":"136","trae-inspector-end-column":"12","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex space-x-1 border-b border-gray-200 mb-8",children:[S.jsx("button",{"trae-inspector-start-line":"97","trae-inspector-start-column":"8","trae-inspector-end-line":"109","trae-inspector-end-column":"17","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>c("theory"),className:`px-6 py-3 font-medium border-b-2 -mb-px ${s==="theory"?"border-indigo-600 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700"}`,children:S.jsxs("div",{"trae-inspector-start-line":"105","trae-inspector-start-column":"10","trae-inspector-end-line":"108","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center space-x-2",children:[S.jsx(Jl,{className:"w-4 h-4"}),"概念理论"]})}),S.jsx("button",{"trae-inspector-start-line":"110","trae-inspector-start-column":"8","trae-inspector-end-line":"122","trae-inspector-end-column":"17","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>c("code"),className:`px-6 py-3 font-medium border-b-2 -mb-px ${s==="code"?"border-indigo-600 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700"}`,children:S.jsxs("div",{"trae-inspector-start-line":"118","trae-inspector-start-column":"10","trae-inspector-end-line":"121","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center space-x-2",children:[S.jsx(ia,{className:"w-4 h-4"}),"代码实践"]})}),S.jsx("button",{"trae-inspector-start-line":"123","trae-inspector-start-column":"8","trae-inspector-end-line":"135","trae-inspector-end-column":"17","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>c("answer"),className:`px-6 py-3 font-medium border-b-2 -mb-px ${s==="answer"?"border-indigo-600 text-indigo-600":"border-transparent text-gray-500 hover:text-gray-700"}`,children:S.jsxs("div",{"trae-inspector-start-line":"131","trae-inspector-start-column":"10","trae-inspector-end-line":"134","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"flex items-center space-x-2",children:[S.jsx(Pc,{className:"w-4 h-4"}),"参考答案"]})})]}),S.jsxs("div",{"trae-inspector-start-line":"139","trae-inspector-start-column":"6","trae-inspector-end-line":"197","trae-inspector-end-column":"12","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"mb-8",children:[s==="theory"&&S.jsxs("div",{"trae-inspector-start-line":"141","trae-inspector-start-column":"10","trae-inspector-end-line":"153","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-lg shadow-md p-8",children:[S.jsx("h2",{"trae-inspector-start-line":"142","trae-inspector-start-column":"12","trae-inspector-end-line":"142","trae-inspector-end-column":"61","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E6%A6%82%E5%BF%B5%E7%90%86%E8%AE%BA%22%2C%22textStartLine%22%3A%22142%22%2C%22textStartColumn%22%3A%2252%22%2C%22textEndLine%22%3A%22142%22%2C%22textEndColumn%22%3A%2256%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-2xl font-bold mb-6",children:"概念理论"}),S.jsx("div",{"trae-inspector-start-line":"143","trae-inspector-start-column":"12","trae-inspector-end-line":"152","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"space-y-6",children:u.theory.map((C,P)=>S.jsxs("div",{"trae-inspector-start-line":"145","trae-inspector-start-column":"16","trae-inspector-end-line":"150","trae-inspector-end-column":"22","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"border-l-4 border-indigo-600 pl-6",children:[S.jsx("h3",{"trae-inspector-start-line":"146","trae-inspector-start-column":"18","trae-inspector-end-line":"146","trae-inspector-end-column":"78","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xl font-semibold mb-3",children:C.title}),S.jsx("div",{"trae-inspector-start-line":"147","trae-inspector-start-column":"18","trae-inspector-end-line":"149","trae-inspector-end-column":"24","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-gray-700 whitespace-pre-line",children:C.content})]},P))})]}),s==="code"&&S.jsxs("div",{"trae-inspector-start-line":"157","trae-inspector-start-column":"10","trae-inspector-end-line":"186","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"space-y-6",children:[S.jsxs("div",{"trae-inspector-start-line":"158","trae-inspector-start-column":"12","trae-inspector-end-line":"166","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-lg shadow-md p-6",children:[S.jsxs("h3",{"trae-inspector-start-line":"159","trae-inspector-start-column":"14","trae-inspector-end-line":"162","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xl font-semibold mb-4 flex items-center",children:[S.jsx(Qm,{className:"w-5 h-5 mr-2 text-green-600"}),"数据集代码"]}),S.jsx("div",{"trae-inspector-start-line":"163","trae-inspector-start-column":"14","trae-inspector-end-line":"165","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-gray-900 text-green-400 rounded-md p-4 overflow-x-auto",children:S.jsx("pre",{"trae-inspector-start-line":"164","trae-inspector-start-column":"16","trae-inspector-end-line":"164","trae-inspector-end-column":"78","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm font-mono",children:u.datasetCode})})]}),S.jsxs("div",{"trae-inspector-start-line":"168","trae-inspector-start-column":"12","trae-inspector-end-line":"176","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-lg shadow-md p-6",children:[S.jsxs("h3",{"trae-inspector-start-line":"169","trae-inspector-start-column":"14","trae-inspector-end-line":"172","trae-inspector-end-column":"19","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xl font-semibold mb-4 flex items-center",children:[S.jsx(ia,{className:"w-5 h-5 mr-2 text-indigo-600"}),"练习代码"]}),S.jsx("div",{"trae-inspector-start-line":"173","trae-inspector-start-column":"14","trae-inspector-end-line":"175","trae-inspector-end-column":"20","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-gray-900 text-gray-100 rounded-md p-4 overflow-x-auto",children:S.jsx("pre",{"trae-inspector-start-line":"174","trae-inspector-start-column":"16","trae-inspector-end-line":"174","trae-inspector-end-column":"78","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm font-mono",children:u.starterCode})})]}),S.jsx("div",{"trae-inspector-start-line":"178","trae-inspector-start-column":"12","trae-inspector-end-line":"185","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-center",children:S.jsx("button",{"trae-inspector-start-line":"179","trae-inspector-start-column":"14","trae-inspector-end-line":"184","trae-inspector-end-column":"23","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",onClick:()=>m(!d),className:"px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700",children:d?"隐藏参考答案":"查看参考答案"})})]}),s==="answer"&&S.jsxs("div",{"trae-inspector-start-line":"190","trae-inspector-start-column":"10","trae-inspector-end-line":"195","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-lg shadow-md p-8",children:[S.jsx("h2",{"trae-inspector-start-line":"191","trae-inspector-start-column":"12","trae-inspector-end-line":"191","trae-inspector-end-column":"61","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%22%2C%22textStartLine%22%3A%22191%22%2C%22textStartColumn%22%3A%2252%22%2C%22textEndLine%22%3A%22191%22%2C%22textEndColumn%22%3A%2256%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-2xl font-bold mb-6",children:"参考答案"}),S.jsx("div",{"trae-inspector-start-line":"192","trae-inspector-start-column":"12","trae-inspector-end-line":"194","trae-inspector-end-column":"18","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-gray-900 text-green-400 rounded-md p-6 overflow-x-auto",children:S.jsx("pre",{"trae-inspector-start-line":"193","trae-inspector-start-column":"14","trae-inspector-end-line":"193","trae-inspector-end-column":"75","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm font-mono",children:u.answerCode})})]})]}),s==="code"&&d&&S.jsxs("div",{"trae-inspector-start-line":"201","trae-inspector-start-column":"8","trae-inspector-end-line":"206","trae-inspector-end-column":"14","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-white rounded-lg shadow-md p-8 animate-fadeIn",children:[S.jsx("h3",{"trae-inspector-start-line":"202","trae-inspector-start-column":"10","trae-inspector-end-line":"202","trae-inspector-end-column":"62","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22text%22%3A%22%E5%8F%82%E8%80%83%E7%AD%94%E6%A1%88%22%2C%22textStartLine%22%3A%22202%22%2C%22textStartColumn%22%3A%2253%22%2C%22textEndLine%22%3A%22202%22%2C%22textEndColumn%22%3A%2257%22%2C%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-xl font-semibold mb-6",children:"参考答案"}),S.jsx("div",{"trae-inspector-start-line":"203","trae-inspector-start-column":"10","trae-inspector-end-line":"205","trae-inspector-end-column":"16","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"bg-gray-900 text-green-400 rounded-md p-6 overflow-x-auto",children:S.jsx("pre",{"trae-inspector-start-line":"204","trae-inspector-start-column":"12","trae-inspector-end-line":"204","trae-inspector-end-column":"73","trae-inspector-file-path":"src/pages/ProjectDetail.tsx","trae-inspector-static-props":"%7B%22cwd%22%3A%22%2Fworkspace%22%7D",className:"text-sm font-mono",children:u.answerCode})})]})]})};function Gm(){return S.jsx(km,{children:S.jsx(qm,{children:S.jsxs(bf,{children:[S.jsx(Xl,{path:"/",element:S.jsx(Nc,{})}),S.jsx(Xl,{path:"/projects",element:S.jsx(Nc,{})}),S.jsx(Xl,{path:"/projects/:id",element:S.jsx(Zm,{})})]})})})}bd.createRoot(document.getElementById("root")).render(S.jsx(k.StrictMode,{children:S.jsx(Gm,{})}));
