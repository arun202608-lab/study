(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var xv={exports:{}},cu={},Cv={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yo=Symbol.for("react.element"),_T=Symbol.for("react.portal"),wT=Symbol.for("react.fragment"),ET=Symbol.for("react.strict_mode"),TT=Symbol.for("react.profiler"),IT=Symbol.for("react.provider"),ST=Symbol.for("react.context"),AT=Symbol.for("react.forward_ref"),xT=Symbol.for("react.suspense"),CT=Symbol.for("react.memo"),RT=Symbol.for("react.lazy"),ym=Symbol.iterator;function kT(t){return t===null||typeof t!="object"?null:(t=ym&&t[ym]||t["@@iterator"],typeof t=="function"?t:null)}var Rv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},kv=Object.assign,Pv={};function ls(t,e,n){this.props=t,this.context=e,this.refs=Pv,this.updater=n||Rv}ls.prototype.isReactComponent={};ls.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ls.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Nv(){}Nv.prototype=ls.prototype;function Id(t,e,n){this.props=t,this.context=e,this.refs=Pv,this.updater=n||Rv}var Sd=Id.prototype=new Nv;Sd.constructor=Id;kv(Sd,ls.prototype);Sd.isPureReactComponent=!0;var vm=Array.isArray,bv=Object.prototype.hasOwnProperty,Ad={current:null},Ov={key:!0,ref:!0,__self:!0,__source:!0};function Dv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)bv.call(e,r)&&!Ov.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Yo,type:t,key:s,ref:o,props:i,_owner:Ad.current}}function PT(t,e){return{$$typeof:Yo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function xd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Yo}function NT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var _m=/\/+/g;function pc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?NT(""+t.key):e.toString(36)}function Ka(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Yo:case _T:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+pc(o,0):r,vm(i)?(n="",t!=null&&(n=t.replace(_m,"$&/")+"/"),Ka(i,e,n,"",function(c){return c})):i!=null&&(xd(i)&&(i=PT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(_m,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",vm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+pc(s,l);o+=Ka(s,e,n,u,i)}else if(u=kT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+pc(s,l++),o+=Ka(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Sa(t,e,n){if(t==null)return t;var r=[],i=0;return Ka(t,r,"","",function(s){return e.call(n,s,i++)}),r}function bT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var lt={current:null},Qa={transition:null},OT={ReactCurrentDispatcher:lt,ReactCurrentBatchConfig:Qa,ReactCurrentOwner:Ad};function Lv(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:Sa,forEach:function(t,e,n){Sa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Sa(t,function(){e++}),e},toArray:function(t){return Sa(t,function(e){return e})||[]},only:function(t){if(!xd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=ls;ee.Fragment=wT;ee.Profiler=TT;ee.PureComponent=Id;ee.StrictMode=ET;ee.Suspense=xT;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OT;ee.act=Lv;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=kv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ad.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)bv.call(e,u)&&!Ov.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Yo,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:ST,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:IT,_context:t},t.Consumer=t};ee.createElement=Dv;ee.createFactory=function(t){var e=Dv.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:AT,render:t}};ee.isValidElement=xd;ee.lazy=function(t){return{$$typeof:RT,_payload:{_status:-1,_result:t},_init:bT}};ee.memo=function(t,e){return{$$typeof:CT,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=Qa.transition;Qa.transition={};try{t()}finally{Qa.transition=e}};ee.unstable_act=Lv;ee.useCallback=function(t,e){return lt.current.useCallback(t,e)};ee.useContext=function(t){return lt.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return lt.current.useDeferredValue(t)};ee.useEffect=function(t,e){return lt.current.useEffect(t,e)};ee.useId=function(){return lt.current.useId()};ee.useImperativeHandle=function(t,e,n){return lt.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return lt.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return lt.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return lt.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return lt.current.useReducer(t,e,n)};ee.useRef=function(t){return lt.current.useRef(t)};ee.useState=function(t){return lt.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return lt.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return lt.current.useTransition()};ee.version="18.3.1";Cv.exports=ee;var H=Cv.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DT=H,LT=Symbol.for("react.element"),VT=Symbol.for("react.fragment"),MT=Object.prototype.hasOwnProperty,jT=DT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,FT={key:!0,ref:!0,__self:!0,__source:!0};function Vv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)MT.call(e,r)&&!FT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:LT,type:t,key:s,ref:o,props:i,_owner:jT.current}}cu.Fragment=VT;cu.jsx=Vv;cu.jsxs=Vv;xv.exports=cu;var p=xv.exports,Mv={exports:{}},It={},jv={exports:{}},Fv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,Q){var X=z.length;z.push(Q);e:for(;0<X;){var me=X-1>>>1,Se=z[me];if(0<i(Se,Q))z[me]=Q,z[X]=Se,X=me;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Q=z[0],X=z.pop();if(X!==Q){z[0]=X;e:for(var me=0,Se=z.length,Pr=Se>>>1;me<Pr;){var At=2*(me+1)-1,Nr=z[At],Vt=At+1,Ln=z[Vt];if(0>i(Nr,X))Vt<Se&&0>i(Ln,Nr)?(z[me]=Ln,z[Vt]=X,me=Vt):(z[me]=Nr,z[At]=X,me=At);else if(Vt<Se&&0>i(Ln,X))z[me]=Ln,z[Vt]=X,me=Vt;else break e}}return Q}function i(z,Q){var X=z.sortIndex-Q.sortIndex;return X!==0?X:z.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,m=null,g=3,_=!1,R=!1,N=!1,D=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(z){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=z)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function O(z){if(N=!1,A(z),!R)if(n(u)!==null)R=!0,vs(j);else{var Q=n(c);Q!==null&&_s(O,Q.startTime-z)}}function j(z,Q){R=!1,N&&(N=!1,S(v),v=-1),_=!0;var X=g;try{for(A(Q),m=n(u);m!==null&&(!(m.expirationTime>Q)||z&&!C());){var me=m.callback;if(typeof me=="function"){m.callback=null,g=m.priorityLevel;var Se=me(m.expirationTime<=Q);Q=t.unstable_now(),typeof Se=="function"?m.callback=Se:m===n(u)&&r(u),A(Q)}else r(u);m=n(u)}if(m!==null)var Pr=!0;else{var At=n(c);At!==null&&_s(O,At.startTime-Q),Pr=!1}return Pr}finally{m=null,g=X,_=!1}}var F=!1,E=null,v=-1,T=5,x=-1;function C(){return!(t.unstable_now()-x<T)}function k(){if(E!==null){var z=t.unstable_now();x=z;var Q=!0;try{Q=E(!0,z)}finally{Q?I():(F=!1,E=null)}}else F=!1}var I;if(typeof w=="function")I=function(){w(k)};else if(typeof MessageChannel<"u"){var Ue=new MessageChannel,fn=Ue.port2;Ue.port1.onmessage=k,I=function(){fn.postMessage(null)}}else I=function(){D(k,0)};function vs(z){E=z,F||(F=!0,I())}function _s(z,Q){v=D(function(){z(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){R||_||(R=!0,vs(j))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(g){case 1:case 2:case 3:var Q=3;break;default:Q=g}var X=g;g=Q;try{return z()}finally{g=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var X=g;g=z;try{return Q()}finally{g=X}},t.unstable_scheduleCallback=function(z,Q,X){var me=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?me+X:me):X=me,z){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=X+Se,z={id:f++,callback:Q,priorityLevel:z,startTime:X,expirationTime:Se,sortIndex:-1},X>me?(z.sortIndex=X,e(c,z),n(u)===null&&z===n(c)&&(N?(S(v),v=-1):N=!0,_s(O,X-me))):(z.sortIndex=Se,e(u,z),R||_||(R=!0,vs(j))),z},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(z){var Q=g;return function(){var X=g;g=Q;try{return z.apply(this,arguments)}finally{g=X}}}})(Fv);jv.exports=Fv;var UT=jv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zT=H,Tt=UT;function M(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Uv=new Set,_o={};function oi(t,e){Qi(t,e),Qi(t+"Capture",e)}function Qi(t,e){for(_o[t]=e,t=0;t<e.length;t++)Uv.add(e[t])}var An=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rh=Object.prototype.hasOwnProperty,BT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wm={},Em={};function $T(t){return rh.call(Em,t)?!0:rh.call(wm,t)?!1:BT.test(t)?Em[t]=!0:(wm[t]=!0,!1)}function qT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function HT(t,e,n,r){if(e===null||typeof e>"u"||qT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ut(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var He={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){He[t]=new ut(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];He[e]=new ut(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){He[t]=new ut(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){He[t]=new ut(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){He[t]=new ut(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){He[t]=new ut(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){He[t]=new ut(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){He[t]=new ut(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){He[t]=new ut(t,5,!1,t.toLowerCase(),null,!1,!1)});var Cd=/[\-:]([a-z])/g;function Rd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Cd,Rd);He[e]=new ut(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Cd,Rd);He[e]=new ut(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Cd,Rd);He[e]=new ut(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){He[t]=new ut(t,1,!1,t.toLowerCase(),null,!1,!1)});He.xlinkHref=new ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){He[t]=new ut(t,1,!1,t.toLowerCase(),null,!0,!0)});function kd(t,e,n,r){var i=He.hasOwnProperty(e)?He[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(HT(e,n,i,r)&&(n=null),r||i===null?$T(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var On=zT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Aa=Symbol.for("react.element"),Si=Symbol.for("react.portal"),Ai=Symbol.for("react.fragment"),Pd=Symbol.for("react.strict_mode"),ih=Symbol.for("react.profiler"),zv=Symbol.for("react.provider"),Bv=Symbol.for("react.context"),Nd=Symbol.for("react.forward_ref"),sh=Symbol.for("react.suspense"),oh=Symbol.for("react.suspense_list"),bd=Symbol.for("react.memo"),qn=Symbol.for("react.lazy"),$v=Symbol.for("react.offscreen"),Tm=Symbol.iterator;function Vs(t){return t===null||typeof t!="object"?null:(t=Tm&&t[Tm]||t["@@iterator"],typeof t=="function"?t:null)}var we=Object.assign,mc;function qs(t){if(mc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);mc=e&&e[1]||""}return`
`+mc+t}var gc=!1;function yc(t,e){if(!t||gc)return"";gc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{gc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?qs(t):""}function WT(t){switch(t.tag){case 5:return qs(t.type);case 16:return qs("Lazy");case 13:return qs("Suspense");case 19:return qs("SuspenseList");case 0:case 2:case 15:return t=yc(t.type,!1),t;case 11:return t=yc(t.type.render,!1),t;case 1:return t=yc(t.type,!0),t;default:return""}}function ah(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ai:return"Fragment";case Si:return"Portal";case ih:return"Profiler";case Pd:return"StrictMode";case sh:return"Suspense";case oh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Bv:return(t.displayName||"Context")+".Consumer";case zv:return(t._context.displayName||"Context")+".Provider";case Nd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case bd:return e=t.displayName||null,e!==null?e:ah(t.type)||"Memo";case qn:e=t._payload,t=t._init;try{return ah(t(e))}catch{}}return null}function GT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ah(e);case 8:return e===Pd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function KT(t){var e=qv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function xa(t){t._valueTracker||(t._valueTracker=KT(t))}function Hv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=qv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function yl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function lh(t,e){var n=e.checked;return we({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Im(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Wv(t,e){e=e.checked,e!=null&&kd(t,"checked",e,!1)}function uh(t,e){Wv(t,e);var n=gr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ch(t,e.type,n):e.hasOwnProperty("defaultValue")&&ch(t,e.type,gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Sm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ch(t,e,n){(e!=="number"||yl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Hs=Array.isArray;function Mi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+gr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function hh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(M(91));return we({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Am(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(M(92));if(Hs(n)){if(1<n.length)throw Error(M(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gr(n)}}function Gv(t,e){var n=gr(e.value),r=gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function xm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Kv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Kv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ca,Qv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ca=Ca||document.createElement("div"),Ca.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ca.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function wo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var eo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},QT=["Webkit","ms","Moz","O"];Object.keys(eo).forEach(function(t){QT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),eo[e]=eo[t]})});function Yv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||eo.hasOwnProperty(t)&&eo[t]?(""+e).trim():e+"px"}function Jv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Yv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var YT=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fh(t,e){if(e){if(YT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(M(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(M(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(M(61))}if(e.style!=null&&typeof e.style!="object")throw Error(M(62))}}function ph(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mh=null;function Od(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gh=null,ji=null,Fi=null;function Cm(t){if(t=Zo(t)){if(typeof gh!="function")throw Error(M(280));var e=t.stateNode;e&&(e=mu(e),gh(t.stateNode,t.type,e))}}function Xv(t){ji?Fi?Fi.push(t):Fi=[t]:ji=t}function Zv(){if(ji){var t=ji,e=Fi;if(Fi=ji=null,Cm(t),e)for(t=0;t<e.length;t++)Cm(e[t])}}function e0(t,e){return t(e)}function t0(){}var vc=!1;function n0(t,e,n){if(vc)return t(e,n);vc=!0;try{return e0(t,e,n)}finally{vc=!1,(ji!==null||Fi!==null)&&(t0(),Zv())}}function Eo(t,e){var n=t.stateNode;if(n===null)return null;var r=mu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(M(231,e,typeof n));return n}var yh=!1;if(An)try{var Ms={};Object.defineProperty(Ms,"passive",{get:function(){yh=!0}}),window.addEventListener("test",Ms,Ms),window.removeEventListener("test",Ms,Ms)}catch{yh=!1}function JT(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var to=!1,vl=null,_l=!1,vh=null,XT={onError:function(t){to=!0,vl=t}};function ZT(t,e,n,r,i,s,o,l,u){to=!1,vl=null,JT.apply(XT,arguments)}function eI(t,e,n,r,i,s,o,l,u){if(ZT.apply(this,arguments),to){if(to){var c=vl;to=!1,vl=null}else throw Error(M(198));_l||(_l=!0,vh=c)}}function ai(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function r0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Rm(t){if(ai(t)!==t)throw Error(M(188))}function tI(t){var e=t.alternate;if(!e){if(e=ai(t),e===null)throw Error(M(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Rm(i),t;if(s===r)return Rm(i),e;s=s.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?t:e}function i0(t){return t=tI(t),t!==null?s0(t):null}function s0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=s0(t);if(e!==null)return e;t=t.sibling}return null}var o0=Tt.unstable_scheduleCallback,km=Tt.unstable_cancelCallback,nI=Tt.unstable_shouldYield,rI=Tt.unstable_requestPaint,xe=Tt.unstable_now,iI=Tt.unstable_getCurrentPriorityLevel,Dd=Tt.unstable_ImmediatePriority,a0=Tt.unstable_UserBlockingPriority,wl=Tt.unstable_NormalPriority,sI=Tt.unstable_LowPriority,l0=Tt.unstable_IdlePriority,hu=null,tn=null;function oI(t){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(hu,t,void 0,(t.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:uI,aI=Math.log,lI=Math.LN2;function uI(t){return t>>>=0,t===0?32:31-(aI(t)/lI|0)|0}var Ra=64,ka=4194304;function Ws(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function El(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ws(l):(s&=o,s!==0&&(r=Ws(s)))}else o=n&~i,o!==0?r=Ws(o):s!==0&&(r=Ws(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-$t(e),i=1<<n,r|=t[n],e&=~i;return r}function cI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-$t(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=cI(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function _h(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function u0(){var t=Ra;return Ra<<=1,!(Ra&4194240)&&(Ra=64),t}function _c(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Jo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$t(e),t[e]=n}function dI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-$t(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ld(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-$t(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ae=0;function c0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var h0,Vd,d0,f0,p0,wh=!1,Pa=[],rr=null,ir=null,sr=null,To=new Map,Io=new Map,Kn=[],fI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pm(t,e){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":To.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Io.delete(e.pointerId)}}function js(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Zo(e),e!==null&&Vd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function pI(t,e,n,r,i){switch(e){case"focusin":return rr=js(rr,t,e,n,r,i),!0;case"dragenter":return ir=js(ir,t,e,n,r,i),!0;case"mouseover":return sr=js(sr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return To.set(s,js(To.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Io.set(s,js(Io.get(s)||null,t,e,n,r,i)),!0}return!1}function m0(t){var e=Ur(t.target);if(e!==null){var n=ai(e);if(n!==null){if(e=n.tag,e===13){if(e=r0(n),e!==null){t.blockedOn=e,p0(t.priority,function(){d0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ya(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Eh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);mh=r,n.target.dispatchEvent(r),mh=null}else return e=Zo(n),e!==null&&Vd(e),t.blockedOn=n,!1;e.shift()}return!0}function Nm(t,e,n){Ya(t)&&n.delete(e)}function mI(){wh=!1,rr!==null&&Ya(rr)&&(rr=null),ir!==null&&Ya(ir)&&(ir=null),sr!==null&&Ya(sr)&&(sr=null),To.forEach(Nm),Io.forEach(Nm)}function Fs(t,e){t.blockedOn===e&&(t.blockedOn=null,wh||(wh=!0,Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority,mI)))}function So(t){function e(i){return Fs(i,t)}if(0<Pa.length){Fs(Pa[0],t);for(var n=1;n<Pa.length;n++){var r=Pa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(rr!==null&&Fs(rr,t),ir!==null&&Fs(ir,t),sr!==null&&Fs(sr,t),To.forEach(e),Io.forEach(e),n=0;n<Kn.length;n++)r=Kn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Kn.length&&(n=Kn[0],n.blockedOn===null);)m0(n),n.blockedOn===null&&Kn.shift()}var Ui=On.ReactCurrentBatchConfig,Tl=!0;function gI(t,e,n,r){var i=ae,s=Ui.transition;Ui.transition=null;try{ae=1,Md(t,e,n,r)}finally{ae=i,Ui.transition=s}}function yI(t,e,n,r){var i=ae,s=Ui.transition;Ui.transition=null;try{ae=4,Md(t,e,n,r)}finally{ae=i,Ui.transition=s}}function Md(t,e,n,r){if(Tl){var i=Eh(t,e,n,r);if(i===null)kc(t,e,r,Il,n),Pm(t,r);else if(pI(i,t,e,n,r))r.stopPropagation();else if(Pm(t,r),e&4&&-1<fI.indexOf(t)){for(;i!==null;){var s=Zo(i);if(s!==null&&h0(s),s=Eh(t,e,n,r),s===null&&kc(t,e,r,Il,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else kc(t,e,r,null,n)}}var Il=null;function Eh(t,e,n,r){if(Il=null,t=Od(r),t=Ur(t),t!==null)if(e=ai(t),e===null)t=null;else if(n=e.tag,n===13){if(t=r0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Il=t,null}function g0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(iI()){case Dd:return 1;case a0:return 4;case wl:case sI:return 16;case l0:return 536870912;default:return 16}default:return 16}}var er=null,jd=null,Ja=null;function y0(){if(Ja)return Ja;var t,e=jd,n=e.length,r,i="value"in er?er.value:er.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ja=i.slice(t,1<r?1-r:void 0)}function Xa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Na(){return!0}function bm(){return!1}function St(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Na:bm,this.isPropagationStopped=bm,this}return we(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Na)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Na)},persist:function(){},isPersistent:Na}),e}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fd=St(us),Xo=we({},us,{view:0,detail:0}),vI=St(Xo),wc,Ec,Us,du=we({},Xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ud,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Us&&(Us&&t.type==="mousemove"?(wc=t.screenX-Us.screenX,Ec=t.screenY-Us.screenY):Ec=wc=0,Us=t),wc)},movementY:function(t){return"movementY"in t?t.movementY:Ec}}),Om=St(du),_I=we({},du,{dataTransfer:0}),wI=St(_I),EI=we({},Xo,{relatedTarget:0}),Tc=St(EI),TI=we({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),II=St(TI),SI=we({},us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),AI=St(SI),xI=we({},us,{data:0}),Dm=St(xI),CI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},RI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function PI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=kI[t])?!!e[t]:!1}function Ud(){return PI}var NI=we({},Xo,{key:function(t){if(t.key){var e=CI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Xa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?RI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ud,charCode:function(t){return t.type==="keypress"?Xa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bI=St(NI),OI=we({},du,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lm=St(OI),DI=we({},Xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ud}),LI=St(DI),VI=we({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),MI=St(VI),jI=we({},du,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),FI=St(jI),UI=[9,13,27,32],zd=An&&"CompositionEvent"in window,no=null;An&&"documentMode"in document&&(no=document.documentMode);var zI=An&&"TextEvent"in window&&!no,v0=An&&(!zd||no&&8<no&&11>=no),Vm=" ",Mm=!1;function _0(t,e){switch(t){case"keyup":return UI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function w0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xi=!1;function BI(t,e){switch(t){case"compositionend":return w0(e);case"keypress":return e.which!==32?null:(Mm=!0,Vm);case"textInput":return t=e.data,t===Vm&&Mm?null:t;default:return null}}function $I(t,e){if(xi)return t==="compositionend"||!zd&&_0(t,e)?(t=y0(),Ja=jd=er=null,xi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return v0&&e.locale!=="ko"?null:e.data;default:return null}}var qI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!qI[t.type]:e==="textarea"}function E0(t,e,n,r){Xv(r),e=Sl(e,"onChange"),0<e.length&&(n=new Fd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ro=null,Ao=null;function HI(t){b0(t,0)}function fu(t){var e=ki(t);if(Hv(e))return t}function WI(t,e){if(t==="change")return e}var T0=!1;if(An){var Ic;if(An){var Sc="oninput"in document;if(!Sc){var Fm=document.createElement("div");Fm.setAttribute("oninput","return;"),Sc=typeof Fm.oninput=="function"}Ic=Sc}else Ic=!1;T0=Ic&&(!document.documentMode||9<document.documentMode)}function Um(){ro&&(ro.detachEvent("onpropertychange",I0),Ao=ro=null)}function I0(t){if(t.propertyName==="value"&&fu(Ao)){var e=[];E0(e,Ao,t,Od(t)),n0(HI,e)}}function GI(t,e,n){t==="focusin"?(Um(),ro=e,Ao=n,ro.attachEvent("onpropertychange",I0)):t==="focusout"&&Um()}function KI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fu(Ao)}function QI(t,e){if(t==="click")return fu(e)}function YI(t,e){if(t==="input"||t==="change")return fu(e)}function JI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ht=typeof Object.is=="function"?Object.is:JI;function xo(t,e){if(Ht(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!rh.call(e,i)||!Ht(t[i],e[i]))return!1}return!0}function zm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bm(t,e){var n=zm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zm(n)}}function S0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?S0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function A0(){for(var t=window,e=yl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=yl(t.document)}return e}function Bd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function XI(t){var e=A0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&S0(n.ownerDocument.documentElement,n)){if(r!==null&&Bd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Bm(n,s);var o=Bm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ZI=An&&"documentMode"in document&&11>=document.documentMode,Ci=null,Th=null,io=null,Ih=!1;function $m(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ih||Ci==null||Ci!==yl(r)||(r=Ci,"selectionStart"in r&&Bd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),io&&xo(io,r)||(io=r,r=Sl(Th,"onSelect"),0<r.length&&(e=new Fd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ci)))}function ba(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ri={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionend:ba("Transition","TransitionEnd")},Ac={},x0={};An&&(x0=document.createElement("div").style,"AnimationEvent"in window||(delete Ri.animationend.animation,delete Ri.animationiteration.animation,delete Ri.animationstart.animation),"TransitionEvent"in window||delete Ri.transitionend.transition);function pu(t){if(Ac[t])return Ac[t];if(!Ri[t])return t;var e=Ri[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in x0)return Ac[t]=e[n];return t}var C0=pu("animationend"),R0=pu("animationiteration"),k0=pu("animationstart"),P0=pu("transitionend"),N0=new Map,qm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(t,e){N0.set(t,e),oi(e,[t])}for(var xc=0;xc<qm.length;xc++){var Cc=qm[xc],eS=Cc.toLowerCase(),tS=Cc[0].toUpperCase()+Cc.slice(1);Ar(eS,"on"+tS)}Ar(C0,"onAnimationEnd");Ar(R0,"onAnimationIteration");Ar(k0,"onAnimationStart");Ar("dblclick","onDoubleClick");Ar("focusin","onFocus");Ar("focusout","onBlur");Ar(P0,"onTransitionEnd");Qi("onMouseEnter",["mouseout","mouseover"]);Qi("onMouseLeave",["mouseout","mouseover"]);Qi("onPointerEnter",["pointerout","pointerover"]);Qi("onPointerLeave",["pointerout","pointerover"]);oi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));oi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));oi("onBeforeInput",["compositionend","keypress","textInput","paste"]);oi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));oi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));oi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gs));function Hm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,eI(r,e,void 0,t),t.currentTarget=null}function b0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Hm(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Hm(i,l,c),s=u}}}if(_l)throw t=vh,_l=!1,vh=null,t}function de(t,e){var n=e[Rh];n===void 0&&(n=e[Rh]=new Set);var r=t+"__bubble";n.has(r)||(O0(e,t,2,!1),n.add(r))}function Rc(t,e,n){var r=0;e&&(r|=4),O0(n,t,r,e)}var Oa="_reactListening"+Math.random().toString(36).slice(2);function Co(t){if(!t[Oa]){t[Oa]=!0,Uv.forEach(function(n){n!=="selectionchange"&&(nS.has(n)||Rc(n,!1,t),Rc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Oa]||(e[Oa]=!0,Rc("selectionchange",!1,e))}}function O0(t,e,n,r){switch(g0(e)){case 1:var i=gI;break;case 4:i=yI;break;default:i=Md}n=i.bind(null,e,n,t),i=void 0,!yh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function kc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Ur(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}n0(function(){var c=s,f=Od(n),m=[];e:{var g=N0.get(t);if(g!==void 0){var _=Fd,R=t;switch(t){case"keypress":if(Xa(n)===0)break e;case"keydown":case"keyup":_=bI;break;case"focusin":R="focus",_=Tc;break;case"focusout":R="blur",_=Tc;break;case"beforeblur":case"afterblur":_=Tc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Om;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=wI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=LI;break;case C0:case R0:case k0:_=II;break;case P0:_=MI;break;case"scroll":_=vI;break;case"wheel":_=FI;break;case"copy":case"cut":case"paste":_=AI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Lm}var N=(e&4)!==0,D=!N&&t==="scroll",S=N?g!==null?g+"Capture":null:g;N=[];for(var w=c,A;w!==null;){A=w;var O=A.stateNode;if(A.tag===5&&O!==null&&(A=O,S!==null&&(O=Eo(w,S),O!=null&&N.push(Ro(w,O,A)))),D)break;w=w.return}0<N.length&&(g=new _(g,R,null,n,f),m.push({event:g,listeners:N}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",g&&n!==mh&&(R=n.relatedTarget||n.fromElement)&&(Ur(R)||R[xn]))break e;if((_||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,_?(R=n.relatedTarget||n.toElement,_=c,R=R?Ur(R):null,R!==null&&(D=ai(R),R!==D||R.tag!==5&&R.tag!==6)&&(R=null)):(_=null,R=c),_!==R)){if(N=Om,O="onMouseLeave",S="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(N=Lm,O="onPointerLeave",S="onPointerEnter",w="pointer"),D=_==null?g:ki(_),A=R==null?g:ki(R),g=new N(O,w+"leave",_,n,f),g.target=D,g.relatedTarget=A,O=null,Ur(f)===c&&(N=new N(S,w+"enter",R,n,f),N.target=A,N.relatedTarget=D,O=N),D=O,_&&R)t:{for(N=_,S=R,w=0,A=N;A;A=vi(A))w++;for(A=0,O=S;O;O=vi(O))A++;for(;0<w-A;)N=vi(N),w--;for(;0<A-w;)S=vi(S),A--;for(;w--;){if(N===S||S!==null&&N===S.alternate)break t;N=vi(N),S=vi(S)}N=null}else N=null;_!==null&&Wm(m,g,_,N,!1),R!==null&&D!==null&&Wm(m,D,R,N,!0)}}e:{if(g=c?ki(c):window,_=g.nodeName&&g.nodeName.toLowerCase(),_==="select"||_==="input"&&g.type==="file")var j=WI;else if(jm(g))if(T0)j=YI;else{j=KI;var F=GI}else(_=g.nodeName)&&_.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=QI);if(j&&(j=j(t,c))){E0(m,j,n,f);break e}F&&F(t,g,c),t==="focusout"&&(F=g._wrapperState)&&F.controlled&&g.type==="number"&&ch(g,"number",g.value)}switch(F=c?ki(c):window,t){case"focusin":(jm(F)||F.contentEditable==="true")&&(Ci=F,Th=c,io=null);break;case"focusout":io=Th=Ci=null;break;case"mousedown":Ih=!0;break;case"contextmenu":case"mouseup":case"dragend":Ih=!1,$m(m,n,f);break;case"selectionchange":if(ZI)break;case"keydown":case"keyup":$m(m,n,f)}var E;if(zd)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else xi?_0(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(v0&&n.locale!=="ko"&&(xi||v!=="onCompositionStart"?v==="onCompositionEnd"&&xi&&(E=y0()):(er=f,jd="value"in er?er.value:er.textContent,xi=!0)),F=Sl(c,v),0<F.length&&(v=new Dm(v,t,null,n,f),m.push({event:v,listeners:F}),E?v.data=E:(E=w0(n),E!==null&&(v.data=E)))),(E=zI?BI(t,n):$I(t,n))&&(c=Sl(c,"onBeforeInput"),0<c.length&&(f=new Dm("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:c}),f.data=E))}b0(m,e)})}function Ro(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Sl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Eo(t,n),s!=null&&r.unshift(Ro(t,s,i)),s=Eo(t,e),s!=null&&r.push(Ro(t,s,i))),t=t.return}return r}function vi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Wm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Eo(n,s),u!=null&&o.unshift(Ro(n,u,l))):i||(u=Eo(n,s),u!=null&&o.push(Ro(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var rS=/\r\n?/g,iS=/\u0000|\uFFFD/g;function Gm(t){return(typeof t=="string"?t:""+t).replace(rS,`
`).replace(iS,"")}function Da(t,e,n){if(e=Gm(e),Gm(t)!==e&&n)throw Error(M(425))}function Al(){}var Sh=null,Ah=null;function xh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ch=typeof setTimeout=="function"?setTimeout:void 0,sS=typeof clearTimeout=="function"?clearTimeout:void 0,Km=typeof Promise=="function"?Promise:void 0,oS=typeof queueMicrotask=="function"?queueMicrotask:typeof Km<"u"?function(t){return Km.resolve(null).then(t).catch(aS)}:Ch;function aS(t){setTimeout(function(){throw t})}function Pc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),So(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);So(e)}function or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Qm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var cs=Math.random().toString(36).slice(2),en="__reactFiber$"+cs,ko="__reactProps$"+cs,xn="__reactContainer$"+cs,Rh="__reactEvents$"+cs,lS="__reactListeners$"+cs,uS="__reactHandles$"+cs;function Ur(t){var e=t[en];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xn]||n[en]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Qm(t);t!==null;){if(n=t[en])return n;t=Qm(t)}return e}t=n,n=t.parentNode}return null}function Zo(t){return t=t[en]||t[xn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ki(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(M(33))}function mu(t){return t[ko]||null}var kh=[],Pi=-1;function xr(t){return{current:t}}function pe(t){0>Pi||(t.current=kh[Pi],kh[Pi]=null,Pi--)}function ce(t,e){Pi++,kh[Pi]=t.current,t.current=e}var yr={},tt=xr(yr),ft=xr(!1),Kr=yr;function Yi(t,e){var n=t.type.contextTypes;if(!n)return yr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function pt(t){return t=t.childContextTypes,t!=null}function xl(){pe(ft),pe(tt)}function Ym(t,e,n){if(tt.current!==yr)throw Error(M(168));ce(tt,e),ce(ft,n)}function D0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(M(108,GT(t)||"Unknown",i));return we({},n,r)}function Cl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||yr,Kr=tt.current,ce(tt,t),ce(ft,ft.current),!0}function Jm(t,e,n){var r=t.stateNode;if(!r)throw Error(M(169));n?(t=D0(t,e,Kr),r.__reactInternalMemoizedMergedChildContext=t,pe(ft),pe(tt),ce(tt,t)):pe(ft),ce(ft,n)}var gn=null,gu=!1,Nc=!1;function L0(t){gn===null?gn=[t]:gn.push(t)}function cS(t){gu=!0,L0(t)}function Cr(){if(!Nc&&gn!==null){Nc=!0;var t=0,e=ae;try{var n=gn;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}gn=null,gu=!1}catch(i){throw gn!==null&&(gn=gn.slice(t+1)),o0(Dd,Cr),i}finally{ae=e,Nc=!1}}return null}var Ni=[],bi=0,Rl=null,kl=0,xt=[],Ct=0,Qr=null,vn=1,_n="";function Mr(t,e){Ni[bi++]=kl,Ni[bi++]=Rl,Rl=t,kl=e}function V0(t,e,n){xt[Ct++]=vn,xt[Ct++]=_n,xt[Ct++]=Qr,Qr=t;var r=vn;t=_n;var i=32-$t(r)-1;r&=~(1<<i),n+=1;var s=32-$t(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,vn=1<<32-$t(e)+i|n<<i|r,_n=s+t}else vn=1<<s|n<<i|r,_n=t}function $d(t){t.return!==null&&(Mr(t,1),V0(t,1,0))}function qd(t){for(;t===Rl;)Rl=Ni[--bi],Ni[bi]=null,kl=Ni[--bi],Ni[bi]=null;for(;t===Qr;)Qr=xt[--Ct],xt[Ct]=null,_n=xt[--Ct],xt[Ct]=null,vn=xt[--Ct],xt[Ct]=null}var wt=null,_t=null,ge=!1,Ut=null;function M0(t,e){var n=Nt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Xm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wt=t,_t=or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wt=t,_t=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Qr!==null?{id:vn,overflow:_n}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wt=t,_t=null,!0):!1;default:return!1}}function Ph(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Nh(t){if(ge){var e=_t;if(e){var n=e;if(!Xm(t,e)){if(Ph(t))throw Error(M(418));e=or(n.nextSibling);var r=wt;e&&Xm(t,e)?M0(r,n):(t.flags=t.flags&-4097|2,ge=!1,wt=t)}}else{if(Ph(t))throw Error(M(418));t.flags=t.flags&-4097|2,ge=!1,wt=t}}}function Zm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wt=t}function La(t){if(t!==wt)return!1;if(!ge)return Zm(t),ge=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!xh(t.type,t.memoizedProps)),e&&(e=_t)){if(Ph(t))throw j0(),Error(M(418));for(;e;)M0(t,e),e=or(e.nextSibling)}if(Zm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_t=or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_t=null}}else _t=wt?or(t.stateNode.nextSibling):null;return!0}function j0(){for(var t=_t;t;)t=or(t.nextSibling)}function Ji(){_t=wt=null,ge=!1}function Hd(t){Ut===null?Ut=[t]:Ut.push(t)}var hS=On.ReactCurrentBatchConfig;function zs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,t))}return t}function Va(t,e){throw t=Object.prototype.toString.call(e),Error(M(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function eg(t){var e=t._init;return e(t._payload)}function F0(t){function e(S,w){if(t){var A=S.deletions;A===null?(S.deletions=[w],S.flags|=16):A.push(w)}}function n(S,w){if(!t)return null;for(;w!==null;)e(S,w),w=w.sibling;return null}function r(S,w){for(S=new Map;w!==null;)w.key!==null?S.set(w.key,w):S.set(w.index,w),w=w.sibling;return S}function i(S,w){return S=cr(S,w),S.index=0,S.sibling=null,S}function s(S,w,A){return S.index=A,t?(A=S.alternate,A!==null?(A=A.index,A<w?(S.flags|=2,w):A):(S.flags|=2,w)):(S.flags|=1048576,w)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,w,A,O){return w===null||w.tag!==6?(w=jc(A,S.mode,O),w.return=S,w):(w=i(w,A),w.return=S,w)}function u(S,w,A,O){var j=A.type;return j===Ai?f(S,w,A.props.children,O,A.key):w!==null&&(w.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===qn&&eg(j)===w.type)?(O=i(w,A.props),O.ref=zs(S,w,A),O.return=S,O):(O=sl(A.type,A.key,A.props,null,S.mode,O),O.ref=zs(S,w,A),O.return=S,O)}function c(S,w,A,O){return w===null||w.tag!==4||w.stateNode.containerInfo!==A.containerInfo||w.stateNode.implementation!==A.implementation?(w=Fc(A,S.mode,O),w.return=S,w):(w=i(w,A.children||[]),w.return=S,w)}function f(S,w,A,O,j){return w===null||w.tag!==7?(w=Wr(A,S.mode,O,j),w.return=S,w):(w=i(w,A),w.return=S,w)}function m(S,w,A){if(typeof w=="string"&&w!==""||typeof w=="number")return w=jc(""+w,S.mode,A),w.return=S,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Aa:return A=sl(w.type,w.key,w.props,null,S.mode,A),A.ref=zs(S,null,w),A.return=S,A;case Si:return w=Fc(w,S.mode,A),w.return=S,w;case qn:var O=w._init;return m(S,O(w._payload),A)}if(Hs(w)||Vs(w))return w=Wr(w,S.mode,A,null),w.return=S,w;Va(S,w)}return null}function g(S,w,A,O){var j=w!==null?w.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return j!==null?null:l(S,w,""+A,O);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Aa:return A.key===j?u(S,w,A,O):null;case Si:return A.key===j?c(S,w,A,O):null;case qn:return j=A._init,g(S,w,j(A._payload),O)}if(Hs(A)||Vs(A))return j!==null?null:f(S,w,A,O,null);Va(S,A)}return null}function _(S,w,A,O,j){if(typeof O=="string"&&O!==""||typeof O=="number")return S=S.get(A)||null,l(w,S,""+O,j);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Aa:return S=S.get(O.key===null?A:O.key)||null,u(w,S,O,j);case Si:return S=S.get(O.key===null?A:O.key)||null,c(w,S,O,j);case qn:var F=O._init;return _(S,w,A,F(O._payload),j)}if(Hs(O)||Vs(O))return S=S.get(A)||null,f(w,S,O,j,null);Va(w,O)}return null}function R(S,w,A,O){for(var j=null,F=null,E=w,v=w=0,T=null;E!==null&&v<A.length;v++){E.index>v?(T=E,E=null):T=E.sibling;var x=g(S,E,A[v],O);if(x===null){E===null&&(E=T);break}t&&E&&x.alternate===null&&e(S,E),w=s(x,w,v),F===null?j=x:F.sibling=x,F=x,E=T}if(v===A.length)return n(S,E),ge&&Mr(S,v),j;if(E===null){for(;v<A.length;v++)E=m(S,A[v],O),E!==null&&(w=s(E,w,v),F===null?j=E:F.sibling=E,F=E);return ge&&Mr(S,v),j}for(E=r(S,E);v<A.length;v++)T=_(E,S,v,A[v],O),T!==null&&(t&&T.alternate!==null&&E.delete(T.key===null?v:T.key),w=s(T,w,v),F===null?j=T:F.sibling=T,F=T);return t&&E.forEach(function(C){return e(S,C)}),ge&&Mr(S,v),j}function N(S,w,A,O){var j=Vs(A);if(typeof j!="function")throw Error(M(150));if(A=j.call(A),A==null)throw Error(M(151));for(var F=j=null,E=w,v=w=0,T=null,x=A.next();E!==null&&!x.done;v++,x=A.next()){E.index>v?(T=E,E=null):T=E.sibling;var C=g(S,E,x.value,O);if(C===null){E===null&&(E=T);break}t&&E&&C.alternate===null&&e(S,E),w=s(C,w,v),F===null?j=C:F.sibling=C,F=C,E=T}if(x.done)return n(S,E),ge&&Mr(S,v),j;if(E===null){for(;!x.done;v++,x=A.next())x=m(S,x.value,O),x!==null&&(w=s(x,w,v),F===null?j=x:F.sibling=x,F=x);return ge&&Mr(S,v),j}for(E=r(S,E);!x.done;v++,x=A.next())x=_(E,S,v,x.value,O),x!==null&&(t&&x.alternate!==null&&E.delete(x.key===null?v:x.key),w=s(x,w,v),F===null?j=x:F.sibling=x,F=x);return t&&E.forEach(function(k){return e(S,k)}),ge&&Mr(S,v),j}function D(S,w,A,O){if(typeof A=="object"&&A!==null&&A.type===Ai&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Aa:e:{for(var j=A.key,F=w;F!==null;){if(F.key===j){if(j=A.type,j===Ai){if(F.tag===7){n(S,F.sibling),w=i(F,A.props.children),w.return=S,S=w;break e}}else if(F.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===qn&&eg(j)===F.type){n(S,F.sibling),w=i(F,A.props),w.ref=zs(S,F,A),w.return=S,S=w;break e}n(S,F);break}else e(S,F);F=F.sibling}A.type===Ai?(w=Wr(A.props.children,S.mode,O,A.key),w.return=S,S=w):(O=sl(A.type,A.key,A.props,null,S.mode,O),O.ref=zs(S,w,A),O.return=S,S=O)}return o(S);case Si:e:{for(F=A.key;w!==null;){if(w.key===F)if(w.tag===4&&w.stateNode.containerInfo===A.containerInfo&&w.stateNode.implementation===A.implementation){n(S,w.sibling),w=i(w,A.children||[]),w.return=S,S=w;break e}else{n(S,w);break}else e(S,w);w=w.sibling}w=Fc(A,S.mode,O),w.return=S,S=w}return o(S);case qn:return F=A._init,D(S,w,F(A._payload),O)}if(Hs(A))return R(S,w,A,O);if(Vs(A))return N(S,w,A,O);Va(S,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,w!==null&&w.tag===6?(n(S,w.sibling),w=i(w,A),w.return=S,S=w):(n(S,w),w=jc(A,S.mode,O),w.return=S,S=w),o(S)):n(S,w)}return D}var Xi=F0(!0),U0=F0(!1),Pl=xr(null),Nl=null,Oi=null,Wd=null;function Gd(){Wd=Oi=Nl=null}function Kd(t){var e=Pl.current;pe(Pl),t._currentValue=e}function bh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function zi(t,e){Nl=t,Wd=Oi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(dt=!0),t.firstContext=null)}function Dt(t){var e=t._currentValue;if(Wd!==t)if(t={context:t,memoizedValue:e,next:null},Oi===null){if(Nl===null)throw Error(M(308));Oi=t,Nl.dependencies={lanes:0,firstContext:t}}else Oi=Oi.next=t;return e}var zr=null;function Qd(t){zr===null?zr=[t]:zr.push(t)}function z0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Qd(e)):(n.next=i.next,i.next=n),e.interleaved=n,Cn(t,r)}function Cn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Hn=!1;function Yd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function B0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Tn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ar(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Cn(t,n)}return i=r.interleaved,i===null?(e.next=e,Qd(r)):(e.next=i.next,i.next=e),r.interleaved=e,Cn(t,n)}function Za(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ld(t,n)}}function tg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function bl(t,e,n,r){var i=t.updateQueue;Hn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;o=0,f=c=u=null,l=s;do{var g=l.lane,_=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,N=l;switch(g=e,_=n,N.tag){case 1:if(R=N.payload,typeof R=="function"){m=R.call(_,m,g);break e}m=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=N.payload,g=typeof R=="function"?R.call(_,m,g):R,g==null)break e;m=we({},m,g);break e;case 2:Hn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else _={eventTime:_,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=_,u=m):f=f.next=_,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Jr|=o,t.lanes=o,t.memoizedState=m}}function ng(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var ea={},nn=xr(ea),Po=xr(ea),No=xr(ea);function Br(t){if(t===ea)throw Error(M(174));return t}function Jd(t,e){switch(ce(No,e),ce(Po,t),ce(nn,ea),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:dh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=dh(e,t)}pe(nn),ce(nn,e)}function Zi(){pe(nn),pe(Po),pe(No)}function $0(t){Br(No.current);var e=Br(nn.current),n=dh(e,t.type);e!==n&&(ce(Po,t),ce(nn,n))}function Xd(t){Po.current===t&&(pe(nn),pe(Po))}var ye=xr(0);function Ol(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bc=[];function Zd(){for(var t=0;t<bc.length;t++)bc[t]._workInProgressVersionPrimary=null;bc.length=0}var el=On.ReactCurrentDispatcher,Oc=On.ReactCurrentBatchConfig,Yr=0,_e=null,Ne=null,Me=null,Dl=!1,so=!1,bo=0,dS=0;function Ke(){throw Error(M(321))}function ef(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ht(t[n],e[n]))return!1;return!0}function tf(t,e,n,r,i,s){if(Yr=s,_e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,el.current=t===null||t.memoizedState===null?gS:yS,t=n(r,i),so){s=0;do{if(so=!1,bo=0,25<=s)throw Error(M(301));s+=1,Me=Ne=null,e.updateQueue=null,el.current=vS,t=n(r,i)}while(so)}if(el.current=Ll,e=Ne!==null&&Ne.next!==null,Yr=0,Me=Ne=_e=null,Dl=!1,e)throw Error(M(300));return t}function nf(){var t=bo!==0;return bo=0,t}function Xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?_e.memoizedState=Me=t:Me=Me.next=t,Me}function Lt(){if(Ne===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=Ne.next;var e=Me===null?_e.memoizedState:Me.next;if(e!==null)Me=e,Ne=t;else{if(t===null)throw Error(M(310));Ne=t,t={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Me===null?_e.memoizedState=Me=t:Me=Me.next=t}return Me}function Oo(t,e){return typeof e=="function"?e(t):e}function Dc(t){var e=Lt(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=Ne,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var f=c.lane;if((Yr&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var m={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,_e.lanes|=f,Jr|=f}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Ht(r,e.memoizedState)||(dt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,_e.lanes|=s,Jr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Lc(t){var e=Lt(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ht(s,e.memoizedState)||(dt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function q0(){}function H0(t,e){var n=_e,r=Lt(),i=e(),s=!Ht(r.memoizedState,i);if(s&&(r.memoizedState=i,dt=!0),r=r.queue,rf(K0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,Do(9,G0.bind(null,n,r,i,e),void 0,null),Fe===null)throw Error(M(349));Yr&30||W0(n,e,i)}return i}function W0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function G0(t,e,n,r){e.value=n,e.getSnapshot=r,Q0(e)&&Y0(t)}function K0(t,e,n){return n(function(){Q0(e)&&Y0(t)})}function Q0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ht(t,n)}catch{return!0}}function Y0(t){var e=Cn(t,1);e!==null&&qt(e,t,1,-1)}function rg(t){var e=Xt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oo,lastRenderedState:t},e.queue=t,t=t.dispatch=mS.bind(null,_e,t),[e.memoizedState,t]}function Do(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function J0(){return Lt().memoizedState}function tl(t,e,n,r){var i=Xt();_e.flags|=t,i.memoizedState=Do(1|e,n,void 0,r===void 0?null:r)}function yu(t,e,n,r){var i=Lt();r=r===void 0?null:r;var s=void 0;if(Ne!==null){var o=Ne.memoizedState;if(s=o.destroy,r!==null&&ef(r,o.deps)){i.memoizedState=Do(e,n,s,r);return}}_e.flags|=t,i.memoizedState=Do(1|e,n,s,r)}function ig(t,e){return tl(8390656,8,t,e)}function rf(t,e){return yu(2048,8,t,e)}function X0(t,e){return yu(4,2,t,e)}function Z0(t,e){return yu(4,4,t,e)}function e_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function t_(t,e,n){return n=n!=null?n.concat([t]):null,yu(4,4,e_.bind(null,e,t),n)}function sf(){}function n_(t,e){var n=Lt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ef(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function r_(t,e){var n=Lt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ef(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function i_(t,e,n){return Yr&21?(Ht(n,e)||(n=u0(),_e.lanes|=n,Jr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,dt=!0),t.memoizedState=n)}function fS(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=Oc.transition;Oc.transition={};try{t(!1),e()}finally{ae=n,Oc.transition=r}}function s_(){return Lt().memoizedState}function pS(t,e,n){var r=ur(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},o_(t))a_(e,n);else if(n=z0(t,e,n,r),n!==null){var i=ot();qt(n,t,r,i),l_(n,e,r)}}function mS(t,e,n){var r=ur(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(o_(t))a_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Ht(l,o)){var u=e.interleaved;u===null?(i.next=i,Qd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=z0(t,e,i,r),n!==null&&(i=ot(),qt(n,t,r,i),l_(n,e,r))}}function o_(t){var e=t.alternate;return t===_e||e!==null&&e===_e}function a_(t,e){so=Dl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function l_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ld(t,n)}}var Ll={readContext:Dt,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},gS={readContext:Dt,useCallback:function(t,e){return Xt().memoizedState=[t,e===void 0?null:e],t},useContext:Dt,useEffect:ig,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,tl(4194308,4,e_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return tl(4194308,4,t,e)},useInsertionEffect:function(t,e){return tl(4,2,t,e)},useMemo:function(t,e){var n=Xt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Xt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=pS.bind(null,_e,t),[r.memoizedState,t]},useRef:function(t){var e=Xt();return t={current:t},e.memoizedState=t},useState:rg,useDebugValue:sf,useDeferredValue:function(t){return Xt().memoizedState=t},useTransition:function(){var t=rg(!1),e=t[0];return t=fS.bind(null,t[1]),Xt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=_e,i=Xt();if(ge){if(n===void 0)throw Error(M(407));n=n()}else{if(n=e(),Fe===null)throw Error(M(349));Yr&30||W0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,ig(K0.bind(null,r,s,t),[t]),r.flags|=2048,Do(9,G0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Xt(),e=Fe.identifierPrefix;if(ge){var n=_n,r=vn;n=(r&~(1<<32-$t(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=bo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=dS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},yS={readContext:Dt,useCallback:n_,useContext:Dt,useEffect:rf,useImperativeHandle:t_,useInsertionEffect:X0,useLayoutEffect:Z0,useMemo:r_,useReducer:Dc,useRef:J0,useState:function(){return Dc(Oo)},useDebugValue:sf,useDeferredValue:function(t){var e=Lt();return i_(e,Ne.memoizedState,t)},useTransition:function(){var t=Dc(Oo)[0],e=Lt().memoizedState;return[t,e]},useMutableSource:q0,useSyncExternalStore:H0,useId:s_,unstable_isNewReconciler:!1},vS={readContext:Dt,useCallback:n_,useContext:Dt,useEffect:rf,useImperativeHandle:t_,useInsertionEffect:X0,useLayoutEffect:Z0,useMemo:r_,useReducer:Lc,useRef:J0,useState:function(){return Lc(Oo)},useDebugValue:sf,useDeferredValue:function(t){var e=Lt();return Ne===null?e.memoizedState=t:i_(e,Ne.memoizedState,t)},useTransition:function(){var t=Lc(Oo)[0],e=Lt().memoizedState;return[t,e]},useMutableSource:q0,useSyncExternalStore:H0,useId:s_,unstable_isNewReconciler:!1};function jt(t,e){if(t&&t.defaultProps){e=we({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Oh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:we({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var vu={isMounted:function(t){return(t=t._reactInternals)?ai(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ot(),i=ur(t),s=Tn(r,i);s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,i),e!==null&&(qt(e,t,i,r),Za(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ot(),i=ur(t),s=Tn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,i),e!==null&&(qt(e,t,i,r),Za(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ot(),r=ur(t),i=Tn(n,r);i.tag=2,e!=null&&(i.callback=e),e=ar(t,i,r),e!==null&&(qt(e,t,r,n),Za(e,t,r))}};function sg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!xo(n,r)||!xo(i,s):!0}function u_(t,e,n){var r=!1,i=yr,s=e.contextType;return typeof s=="object"&&s!==null?s=Dt(s):(i=pt(e)?Kr:tt.current,r=e.contextTypes,s=(r=r!=null)?Yi(t,i):yr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=vu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function og(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&vu.enqueueReplaceState(e,e.state,null)}function Dh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Yd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Dt(s):(s=pt(e)?Kr:tt.current,i.context=Yi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Oh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&vu.enqueueReplaceState(i,i.state,null),bl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function es(t,e){try{var n="",r=e;do n+=WT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Vc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Lh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var _S=typeof WeakMap=="function"?WeakMap:Map;function c_(t,e,n){n=Tn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ml||(Ml=!0,Hh=r),Lh(t,e)},n}function h_(t,e,n){n=Tn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Lh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Lh(t,e),typeof r!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ag(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new _S;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=OS.bind(null,t,e,n),e.then(t,t))}function lg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ug(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Tn(-1,1),e.tag=2,ar(n,e,1))),n.lanes|=1),t)}var wS=On.ReactCurrentOwner,dt=!1;function st(t,e,n,r){e.child=t===null?U0(e,null,n,r):Xi(e,t.child,n,r)}function cg(t,e,n,r,i){n=n.render;var s=e.ref;return zi(e,i),r=tf(t,e,n,r,s,i),n=nf(),t!==null&&!dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Rn(t,e,i)):(ge&&n&&$d(e),e.flags|=1,st(t,e,r,i),e.child)}function hg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ff(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,d_(t,e,s,r,i)):(t=sl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:xo,n(o,r)&&t.ref===e.ref)return Rn(t,e,i)}return e.flags|=1,t=cr(s,r),t.ref=e.ref,t.return=e,e.child=t}function d_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(xo(s,r)&&t.ref===e.ref)if(dt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(dt=!0);else return e.lanes=t.lanes,Rn(t,e,i)}return Vh(t,e,n,r,i)}function f_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(Li,vt),vt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(Li,vt),vt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(Li,vt),vt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(Li,vt),vt|=r;return st(t,e,i,n),e.child}function p_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Vh(t,e,n,r,i){var s=pt(n)?Kr:tt.current;return s=Yi(e,s),zi(e,i),n=tf(t,e,n,r,s,i),r=nf(),t!==null&&!dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Rn(t,e,i)):(ge&&r&&$d(e),e.flags|=1,st(t,e,n,i),e.child)}function dg(t,e,n,r,i){if(pt(n)){var s=!0;Cl(e)}else s=!1;if(zi(e,i),e.stateNode===null)nl(t,e),u_(e,n,r),Dh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Dt(c):(c=pt(n)?Kr:tt.current,c=Yi(e,c));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&og(e,o,r,c),Hn=!1;var g=e.memoizedState;o.state=g,bl(e,r,o,i),u=e.memoizedState,l!==r||g!==u||ft.current||Hn?(typeof f=="function"&&(Oh(e,n,f,r),u=e.memoizedState),(l=Hn||sg(e,n,l,r,g,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,B0(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:jt(e.type,l),o.props=c,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Dt(u):(u=pt(n)?Kr:tt.current,u=Yi(e,u));var _=n.getDerivedStateFromProps;(f=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&og(e,o,r,u),Hn=!1,g=e.memoizedState,o.state=g,bl(e,r,o,i);var R=e.memoizedState;l!==m||g!==R||ft.current||Hn?(typeof _=="function"&&(Oh(e,n,_,r),R=e.memoizedState),(c=Hn||sg(e,n,c,r,g,R,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Mh(t,e,n,r,s,i)}function Mh(t,e,n,r,i,s){p_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Jm(e,n,!1),Rn(t,e,s);r=e.stateNode,wS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Xi(e,t.child,null,s),e.child=Xi(e,null,l,s)):st(t,e,l,s),e.memoizedState=r.state,i&&Jm(e,n,!0),e.child}function m_(t){var e=t.stateNode;e.pendingContext?Ym(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ym(t,e.context,!1),Jd(t,e.containerInfo)}function fg(t,e,n,r,i){return Ji(),Hd(i),e.flags|=256,st(t,e,n,r),e.child}var jh={dehydrated:null,treeContext:null,retryLane:0};function Fh(t){return{baseLanes:t,cachePool:null,transitions:null}}function g_(t,e,n){var r=e.pendingProps,i=ye.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(ye,i&1),t===null)return Nh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Eu(o,r,0,null),t=Wr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Fh(n),e.memoizedState=jh,t):of(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return ES(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=cr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=cr(l,s):(s=Wr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Fh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=jh,r}return s=t.child,t=s.sibling,r=cr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function of(t,e){return e=Eu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ma(t,e,n,r){return r!==null&&Hd(r),Xi(e,t.child,null,n),t=of(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ES(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Vc(Error(M(422))),Ma(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Eu({mode:"visible",children:r.children},i,0,null),s=Wr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Xi(e,t.child,null,o),e.child.memoizedState=Fh(o),e.memoizedState=jh,s);if(!(e.mode&1))return Ma(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(M(419)),r=Vc(s,r,void 0),Ma(t,e,o,r)}if(l=(o&t.childLanes)!==0,dt||l){if(r=Fe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Cn(t,i),qt(r,t,i,-1))}return df(),r=Vc(Error(M(421))),Ma(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=DS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,_t=or(i.nextSibling),wt=e,ge=!0,Ut=null,t!==null&&(xt[Ct++]=vn,xt[Ct++]=_n,xt[Ct++]=Qr,vn=t.id,_n=t.overflow,Qr=e),e=of(e,r.children),e.flags|=4096,e)}function pg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),bh(t.return,e,n)}function Mc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function y_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(st(t,e,r.children,n),r=ye.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&pg(t,n,e);else if(t.tag===19)pg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(ye,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ol(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Mc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ol(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Mc(e,!0,n,null,s);break;case"together":Mc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function nl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Rn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Jr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(M(153));if(e.child!==null){for(t=e.child,n=cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function TS(t,e,n){switch(e.tag){case 3:m_(e),Ji();break;case 5:$0(e);break;case 1:pt(e.type)&&Cl(e);break;case 4:Jd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(Pl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(ye,ye.current&1),e.flags|=128,null):n&e.child.childLanes?g_(t,e,n):(ce(ye,ye.current&1),t=Rn(t,e,n),t!==null?t.sibling:null);ce(ye,ye.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return y_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(ye,ye.current),r)break;return null;case 22:case 23:return e.lanes=0,f_(t,e,n)}return Rn(t,e,n)}var v_,Uh,__,w_;v_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Uh=function(){};__=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Br(nn.current);var s=null;switch(n){case"input":i=lh(t,i),r=lh(t,r),s=[];break;case"select":i=we({},i,{value:void 0}),r=we({},r,{value:void 0}),s=[];break;case"textarea":i=hh(t,i),r=hh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Al)}fh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(_o.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(_o.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&de("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};w_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Bs(t,e){if(!ge)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Qe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function IS(t,e,n){var r=e.pendingProps;switch(qd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(e),null;case 1:return pt(e.type)&&xl(),Qe(e),null;case 3:return r=e.stateNode,Zi(),pe(ft),pe(tt),Zd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(La(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ut!==null&&(Kh(Ut),Ut=null))),Uh(t,e),Qe(e),null;case 5:Xd(e);var i=Br(No.current);if(n=e.type,t!==null&&e.stateNode!=null)__(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(M(166));return Qe(e),null}if(t=Br(nn.current),La(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[en]=e,r[ko]=s,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<Gs.length;i++)de(Gs[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":Im(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":Am(r,s),de("invalid",r)}fh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Da(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Da(r.textContent,l,t),i=["children",""+l]):_o.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":xa(r),Sm(r,s,!0);break;case"textarea":xa(r),xm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Al)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Kv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[en]=e,t[ko]=r,v_(t,e,!1,!1),e.stateNode=t;e:{switch(o=ph(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<Gs.length;i++)de(Gs[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":Im(t,r),i=lh(t,r),de("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=we({},r,{value:void 0}),de("invalid",t);break;case"textarea":Am(t,r),i=hh(t,r),de("invalid",t);break;default:i=r}fh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Jv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Qv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&wo(t,u):typeof u=="number"&&wo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(_o.hasOwnProperty(s)?u!=null&&s==="onScroll"&&de("scroll",t):u!=null&&kd(t,s,u,o))}switch(n){case"input":xa(t),Sm(t,r,!1);break;case"textarea":xa(t),xm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+gr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Mi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Mi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Al)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qe(e),null;case 6:if(t&&e.stateNode!=null)w_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(M(166));if(n=Br(No.current),Br(nn.current),La(e)){if(r=e.stateNode,n=e.memoizedProps,r[en]=e,(s=r.nodeValue!==n)&&(t=wt,t!==null))switch(t.tag){case 3:Da(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Da(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[en]=e,e.stateNode=r}return Qe(e),null;case 13:if(pe(ye),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ge&&_t!==null&&e.mode&1&&!(e.flags&128))j0(),Ji(),e.flags|=98560,s=!1;else if(s=La(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(M(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(M(317));s[en]=e}else Ji(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qe(e),s=!1}else Ut!==null&&(Kh(Ut),Ut=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ye.current&1?Oe===0&&(Oe=3):df())),e.updateQueue!==null&&(e.flags|=4),Qe(e),null);case 4:return Zi(),Uh(t,e),t===null&&Co(e.stateNode.containerInfo),Qe(e),null;case 10:return Kd(e.type._context),Qe(e),null;case 17:return pt(e.type)&&xl(),Qe(e),null;case 19:if(pe(ye),s=e.memoizedState,s===null)return Qe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Bs(s,!1);else{if(Oe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ol(t),o!==null){for(e.flags|=128,Bs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(ye,ye.current&1|2),e.child}t=t.sibling}s.tail!==null&&xe()>ts&&(e.flags|=128,r=!0,Bs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ol(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Bs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ge)return Qe(e),null}else 2*xe()-s.renderingStartTime>ts&&n!==1073741824&&(e.flags|=128,r=!0,Bs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xe(),e.sibling=null,n=ye.current,ce(ye,r?n&1|2:n&1),e):(Qe(e),null);case 22:case 23:return hf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?vt&1073741824&&(Qe(e),e.subtreeFlags&6&&(e.flags|=8192)):Qe(e),null;case 24:return null;case 25:return null}throw Error(M(156,e.tag))}function SS(t,e){switch(qd(e),e.tag){case 1:return pt(e.type)&&xl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Zi(),pe(ft),pe(tt),Zd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Xd(e),null;case 13:if(pe(ye),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(M(340));Ji()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(ye),null;case 4:return Zi(),null;case 10:return Kd(e.type._context),null;case 22:case 23:return hf(),null;case 24:return null;default:return null}}var ja=!1,Xe=!1,AS=typeof WeakSet=="function"?WeakSet:Set,$=null;function Di(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ie(t,e,r)}else n.current=null}function zh(t,e,n){try{n()}catch(r){Ie(t,e,r)}}var mg=!1;function xS(t,e){if(Sh=Tl,t=A0(),Bd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,m=t,g=null;t:for(;;){for(var _;m!==n||i!==0&&m.nodeType!==3||(l=o+i),m!==s||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(_=m.firstChild)!==null;)g=m,m=_;for(;;){if(m===t)break t;if(g===n&&++c===i&&(l=o),g===s&&++f===r&&(u=o),(_=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=_}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ah={focusedElem:t,selectionRange:n},Tl=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var N=R.memoizedProps,D=R.memoizedState,S=e.stateNode,w=S.getSnapshotBeforeUpdate(e.elementType===e.type?N:jt(e.type,N),D);S.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(O){Ie(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return R=mg,mg=!1,R}function oo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&zh(e,n,s)}i=i.next}while(i!==r)}}function _u(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Bh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function E_(t){var e=t.alternate;e!==null&&(t.alternate=null,E_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[en],delete e[ko],delete e[Rh],delete e[lS],delete e[uS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function T_(t){return t.tag===5||t.tag===3||t.tag===4}function gg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||T_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $h(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Al));else if(r!==4&&(t=t.child,t!==null))for($h(t,e,n),t=t.sibling;t!==null;)$h(t,e,n),t=t.sibling}function qh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(qh(t,e,n),t=t.sibling;t!==null;)qh(t,e,n),t=t.sibling}var ze=null,Ft=!1;function Bn(t,e,n){for(n=n.child;n!==null;)I_(t,e,n),n=n.sibling}function I_(t,e,n){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(hu,n)}catch{}switch(n.tag){case 5:Xe||Di(n,e);case 6:var r=ze,i=Ft;ze=null,Bn(t,e,n),ze=r,Ft=i,ze!==null&&(Ft?(t=ze,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ze.removeChild(n.stateNode));break;case 18:ze!==null&&(Ft?(t=ze,n=n.stateNode,t.nodeType===8?Pc(t.parentNode,n):t.nodeType===1&&Pc(t,n),So(t)):Pc(ze,n.stateNode));break;case 4:r=ze,i=Ft,ze=n.stateNode.containerInfo,Ft=!0,Bn(t,e,n),ze=r,Ft=i;break;case 0:case 11:case 14:case 15:if(!Xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&zh(n,e,o),i=i.next}while(i!==r)}Bn(t,e,n);break;case 1:if(!Xe&&(Di(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ie(n,e,l)}Bn(t,e,n);break;case 21:Bn(t,e,n);break;case 22:n.mode&1?(Xe=(r=Xe)||n.memoizedState!==null,Bn(t,e,n),Xe=r):Bn(t,e,n);break;default:Bn(t,e,n)}}function yg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new AS),e.forEach(function(r){var i=LS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Mt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ze=l.stateNode,Ft=!1;break e;case 3:ze=l.stateNode.containerInfo,Ft=!0;break e;case 4:ze=l.stateNode.containerInfo,Ft=!0;break e}l=l.return}if(ze===null)throw Error(M(160));I_(s,o,i),ze=null,Ft=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ie(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)S_(e,t),e=e.sibling}function S_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Mt(e,t),Jt(t),r&4){try{oo(3,t,t.return),_u(3,t)}catch(N){Ie(t,t.return,N)}try{oo(5,t,t.return)}catch(N){Ie(t,t.return,N)}}break;case 1:Mt(e,t),Jt(t),r&512&&n!==null&&Di(n,n.return);break;case 5:if(Mt(e,t),Jt(t),r&512&&n!==null&&Di(n,n.return),t.flags&32){var i=t.stateNode;try{wo(i,"")}catch(N){Ie(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Wv(i,s),ph(l,o);var c=ph(l,s);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?Jv(i,m):f==="dangerouslySetInnerHTML"?Qv(i,m):f==="children"?wo(i,m):kd(i,f,m,c)}switch(l){case"input":uh(i,s);break;case"textarea":Gv(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Mi(i,!!s.multiple,_,!1):g!==!!s.multiple&&(s.defaultValue!=null?Mi(i,!!s.multiple,s.defaultValue,!0):Mi(i,!!s.multiple,s.multiple?[]:"",!1))}i[ko]=s}catch(N){Ie(t,t.return,N)}}break;case 6:if(Mt(e,t),Jt(t),r&4){if(t.stateNode===null)throw Error(M(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){Ie(t,t.return,N)}}break;case 3:if(Mt(e,t),Jt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{So(e.containerInfo)}catch(N){Ie(t,t.return,N)}break;case 4:Mt(e,t),Jt(t);break;case 13:Mt(e,t),Jt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(uf=xe())),r&4&&yg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Xe=(c=Xe)||f,Mt(e,t),Xe=c):Mt(e,t),Jt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for($=t,f=t.child;f!==null;){for(m=$=f;$!==null;){switch(g=$,_=g.child,g.tag){case 0:case 11:case 14:case 15:oo(4,g,g.return);break;case 1:Di(g,g.return);var R=g.stateNode;if(typeof R.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(N){Ie(r,n,N)}}break;case 5:Di(g,g.return);break;case 22:if(g.memoizedState!==null){_g(m);continue}}_!==null?(_.return=g,$=_):_g(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Yv("display",o))}catch(N){Ie(t,t.return,N)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(N){Ie(t,t.return,N)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Mt(e,t),Jt(t),r&4&&yg(t);break;case 21:break;default:Mt(e,t),Jt(t)}}function Jt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(T_(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(wo(i,""),r.flags&=-33);var s=gg(t);qh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=gg(t);$h(t,l,o);break;default:throw Error(M(161))}}catch(u){Ie(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function CS(t,e,n){$=t,A_(t)}function A_(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ja;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Xe;l=ja;var c=Xe;if(ja=o,(Xe=u)&&!c)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?wg(i):u!==null?(u.return=o,$=u):wg(i);for(;s!==null;)$=s,A_(s),s=s.sibling;$=i,ja=l,Xe=c}vg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):vg(t)}}function vg(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xe||_u(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Xe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:jt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ng(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ng(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&So(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Xe||e.flags&512&&Bh(e)}catch(g){Ie(e,e.return,g)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function _g(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function wg(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{_u(4,e)}catch(u){Ie(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ie(e,i,u)}}var s=e.return;try{Bh(e)}catch(u){Ie(e,s,u)}break;case 5:var o=e.return;try{Bh(e)}catch(u){Ie(e,o,u)}}}catch(u){Ie(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var RS=Math.ceil,Vl=On.ReactCurrentDispatcher,af=On.ReactCurrentOwner,bt=On.ReactCurrentBatchConfig,se=0,Fe=null,Re=null,qe=0,vt=0,Li=xr(0),Oe=0,Lo=null,Jr=0,wu=0,lf=0,ao=null,ht=null,uf=0,ts=1/0,mn=null,Ml=!1,Hh=null,lr=null,Fa=!1,tr=null,jl=0,lo=0,Wh=null,rl=-1,il=0;function ot(){return se&6?xe():rl!==-1?rl:rl=xe()}function ur(t){return t.mode&1?se&2&&qe!==0?qe&-qe:hS.transition!==null?(il===0&&(il=u0()),il):(t=ae,t!==0||(t=window.event,t=t===void 0?16:g0(t.type)),t):1}function qt(t,e,n,r){if(50<lo)throw lo=0,Wh=null,Error(M(185));Jo(t,n,r),(!(se&2)||t!==Fe)&&(t===Fe&&(!(se&2)&&(wu|=n),Oe===4&&Qn(t,qe)),mt(t,r),n===1&&se===0&&!(e.mode&1)&&(ts=xe()+500,gu&&Cr()))}function mt(t,e){var n=t.callbackNode;hI(t,e);var r=El(t,t===Fe?qe:0);if(r===0)n!==null&&km(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&km(n),e===1)t.tag===0?cS(Eg.bind(null,t)):L0(Eg.bind(null,t)),oS(function(){!(se&6)&&Cr()}),n=null;else{switch(c0(r)){case 1:n=Dd;break;case 4:n=a0;break;case 16:n=wl;break;case 536870912:n=l0;break;default:n=wl}n=O_(n,x_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function x_(t,e){if(rl=-1,il=0,se&6)throw Error(M(327));var n=t.callbackNode;if(Bi()&&t.callbackNode!==n)return null;var r=El(t,t===Fe?qe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Fl(t,r);else{e=r;var i=se;se|=2;var s=R_();(Fe!==t||qe!==e)&&(mn=null,ts=xe()+500,Hr(t,e));do try{NS();break}catch(l){C_(t,l)}while(!0);Gd(),Vl.current=s,se=i,Re!==null?e=0:(Fe=null,qe=0,e=Oe)}if(e!==0){if(e===2&&(i=_h(t),i!==0&&(r=i,e=Gh(t,i))),e===1)throw n=Lo,Hr(t,0),Qn(t,r),mt(t,xe()),n;if(e===6)Qn(t,r);else{if(i=t.current.alternate,!(r&30)&&!kS(i)&&(e=Fl(t,r),e===2&&(s=_h(t),s!==0&&(r=s,e=Gh(t,s))),e===1))throw n=Lo,Hr(t,0),Qn(t,r),mt(t,xe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(M(345));case 2:jr(t,ht,mn);break;case 3:if(Qn(t,r),(r&130023424)===r&&(e=uf+500-xe(),10<e)){if(El(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ot(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ch(jr.bind(null,t,ht,mn),e);break}jr(t,ht,mn);break;case 4:if(Qn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-$t(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*RS(r/1960))-r,10<r){t.timeoutHandle=Ch(jr.bind(null,t,ht,mn),r);break}jr(t,ht,mn);break;case 5:jr(t,ht,mn);break;default:throw Error(M(329))}}}return mt(t,xe()),t.callbackNode===n?x_.bind(null,t):null}function Gh(t,e){var n=ao;return t.current.memoizedState.isDehydrated&&(Hr(t,e).flags|=256),t=Fl(t,e),t!==2&&(e=ht,ht=n,e!==null&&Kh(e)),t}function Kh(t){ht===null?ht=t:ht.push.apply(ht,t)}function kS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ht(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qn(t,e){for(e&=~lf,e&=~wu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$t(e),r=1<<n;t[n]=-1,e&=~r}}function Eg(t){if(se&6)throw Error(M(327));Bi();var e=El(t,0);if(!(e&1))return mt(t,xe()),null;var n=Fl(t,e);if(t.tag!==0&&n===2){var r=_h(t);r!==0&&(e=r,n=Gh(t,r))}if(n===1)throw n=Lo,Hr(t,0),Qn(t,e),mt(t,xe()),n;if(n===6)throw Error(M(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,jr(t,ht,mn),mt(t,xe()),null}function cf(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(ts=xe()+500,gu&&Cr())}}function Xr(t){tr!==null&&tr.tag===0&&!(se&6)&&Bi();var e=se;se|=1;var n=bt.transition,r=ae;try{if(bt.transition=null,ae=1,t)return t()}finally{ae=r,bt.transition=n,se=e,!(se&6)&&Cr()}}function hf(){vt=Li.current,pe(Li)}function Hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,sS(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(qd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xl();break;case 3:Zi(),pe(ft),pe(tt),Zd();break;case 5:Xd(r);break;case 4:Zi();break;case 13:pe(ye);break;case 19:pe(ye);break;case 10:Kd(r.type._context);break;case 22:case 23:hf()}n=n.return}if(Fe=t,Re=t=cr(t.current,null),qe=vt=e,Oe=0,Lo=null,lf=wu=Jr=0,ht=ao=null,zr!==null){for(e=0;e<zr.length;e++)if(n=zr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}zr=null}return t}function C_(t,e){do{var n=Re;try{if(Gd(),el.current=Ll,Dl){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Dl=!1}if(Yr=0,Me=Ne=_e=null,so=!1,bo=0,af.current=null,n===null||n.return===null){Oe=1,Lo=e,Re=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=qe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var _=lg(o);if(_!==null){_.flags&=-257,ug(_,o,l,s,e),_.mode&1&&ag(s,c,e),e=_,u=c;var R=e.updateQueue;if(R===null){var N=new Set;N.add(u),e.updateQueue=N}else R.add(u);break e}else{if(!(e&1)){ag(s,c,e),df();break e}u=Error(M(426))}}else if(ge&&l.mode&1){var D=lg(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),ug(D,o,l,s,e),Hd(es(u,l));break e}}s=u=es(u,l),Oe!==4&&(Oe=2),ao===null?ao=[s]:ao.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=c_(s,u,e);tg(s,S);break e;case 1:l=u;var w=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(lr===null||!lr.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=h_(s,l,e);tg(s,O);break e}}s=s.return}while(s!==null)}P_(n)}catch(j){e=j,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(!0)}function R_(){var t=Vl.current;return Vl.current=Ll,t===null?Ll:t}function df(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),Fe===null||!(Jr&268435455)&&!(wu&268435455)||Qn(Fe,qe)}function Fl(t,e){var n=se;se|=2;var r=R_();(Fe!==t||qe!==e)&&(mn=null,Hr(t,e));do try{PS();break}catch(i){C_(t,i)}while(!0);if(Gd(),se=n,Vl.current=r,Re!==null)throw Error(M(261));return Fe=null,qe=0,Oe}function PS(){for(;Re!==null;)k_(Re)}function NS(){for(;Re!==null&&!nI();)k_(Re)}function k_(t){var e=b_(t.alternate,t,vt);t.memoizedProps=t.pendingProps,e===null?P_(t):Re=e,af.current=null}function P_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=SS(n,e),n!==null){n.flags&=32767,Re=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Oe=6,Re=null;return}}else if(n=IS(n,e,vt),n!==null){Re=n;return}if(e=e.sibling,e!==null){Re=e;return}Re=e=t}while(e!==null);Oe===0&&(Oe=5)}function jr(t,e,n){var r=ae,i=bt.transition;try{bt.transition=null,ae=1,bS(t,e,n,r)}finally{bt.transition=i,ae=r}return null}function bS(t,e,n,r){do Bi();while(tr!==null);if(se&6)throw Error(M(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(M(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(dI(t,s),t===Fe&&(Re=Fe=null,qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fa||(Fa=!0,O_(wl,function(){return Bi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=bt.transition,bt.transition=null;var o=ae;ae=1;var l=se;se|=4,af.current=null,xS(t,n),S_(n,t),XI(Ah),Tl=!!Sh,Ah=Sh=null,t.current=n,CS(n),rI(),se=l,ae=o,bt.transition=s}else t.current=n;if(Fa&&(Fa=!1,tr=t,jl=i),s=t.pendingLanes,s===0&&(lr=null),oI(n.stateNode),mt(t,xe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ml)throw Ml=!1,t=Hh,Hh=null,t;return jl&1&&t.tag!==0&&Bi(),s=t.pendingLanes,s&1?t===Wh?lo++:(lo=0,Wh=t):lo=0,Cr(),null}function Bi(){if(tr!==null){var t=c0(jl),e=bt.transition,n=ae;try{if(bt.transition=null,ae=16>t?16:t,tr===null)var r=!1;else{if(t=tr,tr=null,jl=0,se&6)throw Error(M(331));var i=se;for(se|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for($=c;$!==null;){var f=$;switch(f.tag){case 0:case 11:case 15:oo(8,f,s)}var m=f.child;if(m!==null)m.return=f,$=m;else for(;$!==null;){f=$;var g=f.sibling,_=f.return;if(E_(f),f===c){$=null;break}if(g!==null){g.return=_,$=g;break}$=_}}}var R=s.alternate;if(R!==null){var N=R.child;if(N!==null){R.child=null;do{var D=N.sibling;N.sibling=null,N=D}while(N!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:oo(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,$=S;break e}$=s.return}}var w=t.current;for($=w;$!==null;){o=$;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,$=A;else e:for(o=w;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:_u(9,l)}}catch(j){Ie(l,l.return,j)}if(l===o){$=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,$=O;break e}$=l.return}}if(se=i,Cr(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(hu,t)}catch{}r=!0}return r}finally{ae=n,bt.transition=e}}return!1}function Tg(t,e,n){e=es(n,e),e=c_(t,e,1),t=ar(t,e,1),e=ot(),t!==null&&(Jo(t,1,e),mt(t,e))}function Ie(t,e,n){if(t.tag===3)Tg(t,t,n);else for(;e!==null;){if(e.tag===3){Tg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(lr===null||!lr.has(r))){t=es(n,t),t=h_(e,t,1),e=ar(e,t,1),t=ot(),e!==null&&(Jo(e,1,t),mt(e,t));break}}e=e.return}}function OS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ot(),t.pingedLanes|=t.suspendedLanes&n,Fe===t&&(qe&n)===n&&(Oe===4||Oe===3&&(qe&130023424)===qe&&500>xe()-uf?Hr(t,0):lf|=n),mt(t,e)}function N_(t,e){e===0&&(t.mode&1?(e=ka,ka<<=1,!(ka&130023424)&&(ka=4194304)):e=1);var n=ot();t=Cn(t,e),t!==null&&(Jo(t,e,n),mt(t,n))}function DS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),N_(t,n)}function LS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(e),N_(t,n)}var b_;b_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ft.current)dt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return dt=!1,TS(t,e,n);dt=!!(t.flags&131072)}else dt=!1,ge&&e.flags&1048576&&V0(e,kl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;nl(t,e),t=e.pendingProps;var i=Yi(e,tt.current);zi(e,n),i=tf(null,e,r,t,i,n);var s=nf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pt(r)?(s=!0,Cl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Yd(e),i.updater=vu,e.stateNode=i,i._reactInternals=e,Dh(e,r,t,n),e=Mh(null,e,r,!0,s,n)):(e.tag=0,ge&&s&&$d(e),st(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(nl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=MS(r),t=jt(r,t),i){case 0:e=Vh(null,e,r,t,n);break e;case 1:e=dg(null,e,r,t,n);break e;case 11:e=cg(null,e,r,t,n);break e;case 14:e=hg(null,e,r,jt(r.type,t),n);break e}throw Error(M(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),Vh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),dg(t,e,r,i,n);case 3:e:{if(m_(e),t===null)throw Error(M(387));r=e.pendingProps,s=e.memoizedState,i=s.element,B0(t,e),bl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=es(Error(M(423)),e),e=fg(t,e,r,n,i);break e}else if(r!==i){i=es(Error(M(424)),e),e=fg(t,e,r,n,i);break e}else for(_t=or(e.stateNode.containerInfo.firstChild),wt=e,ge=!0,Ut=null,n=U0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ji(),r===i){e=Rn(t,e,n);break e}st(t,e,r,n)}e=e.child}return e;case 5:return $0(e),t===null&&Nh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,xh(r,i)?o=null:s!==null&&xh(r,s)&&(e.flags|=32),p_(t,e),st(t,e,o,n),e.child;case 6:return t===null&&Nh(e),null;case 13:return g_(t,e,n);case 4:return Jd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Xi(e,null,r,n):st(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),cg(t,e,r,i,n);case 7:return st(t,e,e.pendingProps,n),e.child;case 8:return st(t,e,e.pendingProps.children,n),e.child;case 12:return st(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(Pl,r._currentValue),r._currentValue=o,s!==null)if(Ht(s.value,o)){if(s.children===i.children&&!ft.current){e=Rn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Tn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),bh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(M(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),bh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}st(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,zi(e,n),i=Dt(i),r=r(i),e.flags|=1,st(t,e,r,n),e.child;case 14:return r=e.type,i=jt(r,e.pendingProps),i=jt(r.type,i),hg(t,e,r,i,n);case 15:return d_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),nl(t,e),e.tag=1,pt(r)?(t=!0,Cl(e)):t=!1,zi(e,n),u_(e,r,i),Dh(e,r,i,n),Mh(null,e,r,!0,t,n);case 19:return y_(t,e,n);case 22:return f_(t,e,n)}throw Error(M(156,e.tag))};function O_(t,e){return o0(t,e)}function VS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(t,e,n,r){return new VS(t,e,n,r)}function ff(t){return t=t.prototype,!(!t||!t.isReactComponent)}function MS(t){if(typeof t=="function")return ff(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Nd)return 11;if(t===bd)return 14}return 2}function cr(t,e){var n=t.alternate;return n===null?(n=Nt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function sl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ff(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ai:return Wr(n.children,i,s,e);case Pd:o=8,i|=8;break;case ih:return t=Nt(12,n,e,i|2),t.elementType=ih,t.lanes=s,t;case sh:return t=Nt(13,n,e,i),t.elementType=sh,t.lanes=s,t;case oh:return t=Nt(19,n,e,i),t.elementType=oh,t.lanes=s,t;case $v:return Eu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case zv:o=10;break e;case Bv:o=9;break e;case Nd:o=11;break e;case bd:o=14;break e;case qn:o=16,r=null;break e}throw Error(M(130,t==null?t:typeof t,""))}return e=Nt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Wr(t,e,n,r){return t=Nt(7,t,r,e),t.lanes=n,t}function Eu(t,e,n,r){return t=Nt(22,t,r,e),t.elementType=$v,t.lanes=n,t.stateNode={isHidden:!1},t}function jc(t,e,n){return t=Nt(6,t,null,e),t.lanes=n,t}function Fc(t,e,n){return e=Nt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function jS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_c(0),this.expirationTimes=_c(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_c(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function pf(t,e,n,r,i,s,o,l,u){return t=new jS(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Nt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yd(s),t}function FS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Si,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function D_(t){if(!t)return yr;t=t._reactInternals;e:{if(ai(t)!==t||t.tag!==1)throw Error(M(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(pt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(M(171))}if(t.tag===1){var n=t.type;if(pt(n))return D0(t,n,e)}return e}function L_(t,e,n,r,i,s,o,l,u){return t=pf(n,r,!0,t,i,s,o,l,u),t.context=D_(null),n=t.current,r=ot(),i=ur(n),s=Tn(r,i),s.callback=e??null,ar(n,s,i),t.current.lanes=i,Jo(t,i,r),mt(t,r),t}function Tu(t,e,n,r){var i=e.current,s=ot(),o=ur(i);return n=D_(n),e.context===null?e.context=n:e.pendingContext=n,e=Tn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ar(i,e,o),t!==null&&(qt(t,i,o,s),Za(t,i,o)),o}function Ul(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ig(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function mf(t,e){Ig(t,e),(t=t.alternate)&&Ig(t,e)}function US(){return null}var V_=typeof reportError=="function"?reportError:function(t){console.error(t)};function gf(t){this._internalRoot=t}Iu.prototype.render=gf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(M(409));Tu(t,e,null,null)};Iu.prototype.unmount=gf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Xr(function(){Tu(null,t,null,null)}),e[xn]=null}};function Iu(t){this._internalRoot=t}Iu.prototype.unstable_scheduleHydration=function(t){if(t){var e=f0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Kn.length&&e!==0&&e<Kn[n].priority;n++);Kn.splice(n,0,t),n===0&&m0(t)}};function yf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Su(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Sg(){}function zS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Ul(o);s.call(c)}}var o=L_(e,r,t,0,null,!1,!1,"",Sg);return t._reactRootContainer=o,t[xn]=o.current,Co(t.nodeType===8?t.parentNode:t),Xr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Ul(u);l.call(c)}}var u=pf(t,0,!1,null,null,!1,!1,"",Sg);return t._reactRootContainer=u,t[xn]=u.current,Co(t.nodeType===8?t.parentNode:t),Xr(function(){Tu(e,u,n,r)}),u}function Au(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Ul(o);l.call(u)}}Tu(e,o,t,i)}else o=zS(n,e,t,i,r);return Ul(o)}h0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ws(e.pendingLanes);n!==0&&(Ld(e,n|1),mt(e,xe()),!(se&6)&&(ts=xe()+500,Cr()))}break;case 13:Xr(function(){var r=Cn(t,1);if(r!==null){var i=ot();qt(r,t,1,i)}}),mf(t,1)}};Vd=function(t){if(t.tag===13){var e=Cn(t,134217728);if(e!==null){var n=ot();qt(e,t,134217728,n)}mf(t,134217728)}};d0=function(t){if(t.tag===13){var e=ur(t),n=Cn(t,e);if(n!==null){var r=ot();qt(n,t,e,r)}mf(t,e)}};f0=function(){return ae};p0=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};gh=function(t,e,n){switch(e){case"input":if(uh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=mu(r);if(!i)throw Error(M(90));Hv(r),uh(r,i)}}}break;case"textarea":Gv(t,n);break;case"select":e=n.value,e!=null&&Mi(t,!!n.multiple,e,!1)}};e0=cf;t0=Xr;var BS={usingClientEntryPoint:!1,Events:[Zo,ki,mu,Xv,Zv,cf]},$s={findFiberByHostInstance:Ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$S={bundleType:$s.bundleType,version:$s.version,rendererPackageName:$s.rendererPackageName,rendererConfig:$s.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:On.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=i0(t),t===null?null:t.stateNode},findFiberByHostInstance:$s.findFiberByHostInstance||US,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ua=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ua.isDisabled&&Ua.supportsFiber)try{hu=Ua.inject($S),tn=Ua}catch{}}It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=BS;It.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yf(e))throw Error(M(200));return FS(t,e,null,n)};It.createRoot=function(t,e){if(!yf(t))throw Error(M(299));var n=!1,r="",i=V_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=pf(t,1,!1,null,null,n,!1,r,i),t[xn]=e.current,Co(t.nodeType===8?t.parentNode:t),new gf(e)};It.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(M(188)):(t=Object.keys(t).join(","),Error(M(268,t)));return t=i0(e),t=t===null?null:t.stateNode,t};It.flushSync=function(t){return Xr(t)};It.hydrate=function(t,e,n){if(!Su(e))throw Error(M(200));return Au(null,t,e,!0,n)};It.hydrateRoot=function(t,e,n){if(!yf(t))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=V_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=L_(e,null,t,1,n??null,i,!1,s,o),t[xn]=e.current,Co(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Iu(e)};It.render=function(t,e,n){if(!Su(e))throw Error(M(200));return Au(null,t,e,!1,n)};It.unmountComponentAtNode=function(t){if(!Su(t))throw Error(M(40));return t._reactRootContainer?(Xr(function(){Au(null,null,t,!1,function(){t._reactRootContainer=null,t[xn]=null})}),!0):!1};It.unstable_batchedUpdates=cf;It.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Su(n))throw Error(M(200));if(t==null||t._reactInternals===void 0)throw Error(M(38));return Au(t,e,n,!1,r)};It.version="18.3.1-next-f1338f8080-20240426";function M_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M_)}catch(t){console.error(t)}}M_(),Mv.exports=It;var qS=Mv.exports,j_,Ag=qS;j_=Ag.createRoot,Ag.hydrateRoot;const HS=()=>{};var xg={};/**
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
 */const F_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},WS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},U_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let g=(l&15)<<2|c>>6,_=c&63;u||(_=64,o||(g=64)),r.push(n[f],n[m],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(F_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):WS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||m==null)throw new GS;const g=s<<2|l>>4;if(r.push(g),c!==64){const _=l<<4&240|c>>2;if(r.push(_),m!==64){const R=c<<6&192|m;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class GS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const KS=function(t){const e=F_(t);return U_.encodeByteArray(e,!0)},zl=function(t){return KS(t).replace(/\./g,"")},z_=function(t){try{return U_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function QS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const YS=()=>QS().__FIREBASE_DEFAULTS__,JS=()=>{if(typeof process>"u"||typeof xg>"u")return;const t=xg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},XS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&z_(t[1]);return e&&JSON.parse(e)},xu=()=>{try{return HS()||YS()||JS()||XS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},B_=t=>{var e,n;return(n=(e=xu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},ZS=t=>{const e=B_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},$_=()=>{var t;return(t=xu())==null?void 0:t.config},q_=t=>{var e;return(e=xu())==null?void 0:e[`_${t}`]};/**
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
 */class eA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function hs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function H_(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function tA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[zl(JSON.stringify(n)),zl(JSON.stringify(o)),""].join(".")}const uo={};function nA(){const t={prod:[],emulator:[]};for(const e of Object.keys(uo))uo[e]?t.emulator.push(e):t.prod.push(e);return t}function rA(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Cg=!1;function W_(t,e){if(typeof window>"u"||typeof document>"u"||!hs(window.location.host)||uo[t]===e||uo[t]||Cg)return;uo[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",s=nA().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,_){g.setAttribute("width","24"),g.setAttribute("id",_),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function c(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Cg=!0,o()},g}function f(g,_){g.setAttribute("id",_),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function m(){const g=rA(r),_=n("text"),R=document.getElementById(_)||document.createElement("span"),N=n("learnmore"),D=document.getElementById(N)||document.createElement("a"),S=n("preprendIcon"),w=document.getElementById(S)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const A=g.element;l(A),f(D,N);const O=c();u(w,S),A.append(w,R,D,O),document.body.appendChild(A)}s?(R.innerText="Preview backend disconnected.",w.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(w.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
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
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function iA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function sA(){var e;const t=(e=xu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function oA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function vf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function aA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lA(){const t=nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function uA(){return!sA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _f(){try{return typeof indexedDB=="object"}catch{return!1}}function wf(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function G_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const cA="FirebaseError";class Kt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=cA,Object.setPrototypeOf(this,Kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,li.prototype.create)}}class li{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?hA(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Kt(i,l,r)}}function hA(t,e){return t.replace(dA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const dA=/\{\$([^}]+)}/g;function fA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function vr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Rg(s)&&Rg(o)){if(!vr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Rg(t){return t!==null&&typeof t=="object"}/**
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
 */function ta(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ks(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Qs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function pA(t,e){const n=new mA(t,e);return n.subscribe.bind(n)}class mA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");gA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Uc),i.error===void 0&&(i.error=Uc),i.complete===void 0&&(i.complete=Uc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Uc(){}/**
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
 */const yA=1e3,vA=2,_A=4*60*60*1e3,wA=.5;function kg(t,e=yA,n=vA){const r=e*Math.pow(n,t),i=Math.round(wA*r*(Math.random()-.5)*2);return Math.min(_A,r+i)}/**
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
 */function at(t){return t&&t._delegate?t._delegate:t}class Wt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Fr="[DEFAULT]";/**
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
 */class EA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new eA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(IA(e))try{this.getOrInitializeService({instanceIdentifier:Fr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Fr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fr){return this.instances.has(e)}getOptions(e=Fr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:TA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fr){return this.component?this.component.multipleInstances?e:Fr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function TA(t){return t===Fr?void 0:t}function IA(t){return t.instantiationMode==="EAGER"}/**
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
 */class SA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new EA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const AA={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},xA=te.INFO,CA={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},RA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=CA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cu{constructor(e){this.name=e,this._logLevel=xA,this._logHandler=RA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?AA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const kA=(t,e)=>e.some(n=>t instanceof n);let Pg,Ng;function PA(){return Pg||(Pg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function NA(){return Ng||(Ng=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const K_=new WeakMap,Qh=new WeakMap,Q_=new WeakMap,zc=new WeakMap,Ef=new WeakMap;function bA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(hr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&K_.set(n,t)}).catch(()=>{}),Ef.set(e,t),e}function OA(t){if(Qh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Qh.set(t,e)}let Yh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Q_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function DA(t){Yh=t(Yh)}function LA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Bc(this),e,...n);return Q_.set(r,e.sort?e.sort():[e]),hr(r)}:NA().includes(t)?function(...e){return t.apply(Bc(this),e),hr(K_.get(this))}:function(...e){return hr(t.apply(Bc(this),e))}}function VA(t){return typeof t=="function"?LA(t):(t instanceof IDBTransaction&&OA(t),kA(t,PA())?new Proxy(t,Yh):t)}function hr(t){if(t instanceof IDBRequest)return bA(t);if(zc.has(t))return zc.get(t);const e=VA(t);return e!==t&&(zc.set(t,e),Ef.set(e,t)),e}const Bc=t=>Ef.get(t);function Y_(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=hr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(hr(o.result),u.oldVersion,u.newVersion,hr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const MA=["get","getKey","getAll","getAllKeys","count"],jA=["put","add","delete","clear"],$c=new Map;function bg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($c.get(e))return $c.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=jA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||MA.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return $c.set(e,s),s}DA(t=>({...t,get:(e,n,r)=>bg(e,n)||t.get(e,n,r),has:(e,n)=>!!bg(e,n)||t.has(e,n)}));/**
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
 */class FA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(UA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function UA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Jh="@firebase/app",Og="0.14.3";/**
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
 */const kn=new Cu("@firebase/app"),zA="@firebase/app-compat",BA="@firebase/analytics-compat",$A="@firebase/analytics",qA="@firebase/app-check-compat",HA="@firebase/app-check",WA="@firebase/auth",GA="@firebase/auth-compat",KA="@firebase/database",QA="@firebase/data-connect",YA="@firebase/database-compat",JA="@firebase/functions",XA="@firebase/functions-compat",ZA="@firebase/installations",ex="@firebase/installations-compat",tx="@firebase/messaging",nx="@firebase/messaging-compat",rx="@firebase/performance",ix="@firebase/performance-compat",sx="@firebase/remote-config",ox="@firebase/remote-config-compat",ax="@firebase/storage",lx="@firebase/storage-compat",ux="@firebase/firestore",cx="@firebase/ai",hx="@firebase/firestore-compat",dx="firebase",fx="12.3.0";/**
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
 */const Xh="[DEFAULT]",px={[Jh]:"fire-core",[zA]:"fire-core-compat",[$A]:"fire-analytics",[BA]:"fire-analytics-compat",[HA]:"fire-app-check",[qA]:"fire-app-check-compat",[WA]:"fire-auth",[GA]:"fire-auth-compat",[KA]:"fire-rtdb",[QA]:"fire-data-connect",[YA]:"fire-rtdb-compat",[JA]:"fire-fn",[XA]:"fire-fn-compat",[ZA]:"fire-iid",[ex]:"fire-iid-compat",[tx]:"fire-fcm",[nx]:"fire-fcm-compat",[rx]:"fire-perf",[ix]:"fire-perf-compat",[sx]:"fire-rc",[ox]:"fire-rc-compat",[ax]:"fire-gcs",[lx]:"fire-gcs-compat",[ux]:"fire-fst",[hx]:"fire-fst-compat",[cx]:"fire-vertex","fire-js":"fire-js",[dx]:"fire-js-all"};/**
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
 */const Bl=new Map,mx=new Map,Zh=new Map;function Dg(t,e){try{t.container.addComponent(e)}catch(n){kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function cn(t){const e=t.name;if(Zh.has(e))return kn.debug(`There were multiple attempts to register component ${e}.`),!1;Zh.set(e,t);for(const n of Bl.values())Dg(n,t);for(const n of mx.values())Dg(n,t);return!0}function ui(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Rt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const gx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dr=new li("app","Firebase",gx);/**
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
 */class yx{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Wt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dr.create("app-deleted",{appName:this._name})}}/**
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
 */const ds=fx;function J_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Xh,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw dr.create("bad-app-name",{appName:String(i)});if(n||(n=$_()),!n)throw dr.create("no-options");const s=Bl.get(i);if(s){if(vr(n,s.options)&&vr(r,s.config))return s;throw dr.create("duplicate-app",{appName:i})}const o=new SA(i);for(const u of Zh.values())o.addComponent(u);const l=new yx(n,r,o);return Bl.set(i,l),l}function Tf(t=Xh){const e=Bl.get(t);if(!e&&t===Xh&&$_())return J_();if(!e)throw dr.create("no-app",{appName:t});return e}function Ot(t,e,n){let r=px[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kn.warn(o.join(" "));return}cn(new Wt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const vx="firebase-heartbeat-database",_x=1,Vo="firebase-heartbeat-store";let qc=null;function X_(){return qc||(qc=Y_(vx,_x,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Vo)}catch(n){console.warn(n)}}}}).catch(t=>{throw dr.create("idb-open",{originalErrorMessage:t.message})})),qc}async function wx(t){try{const n=(await X_()).transaction(Vo),r=await n.objectStore(Vo).get(Z_(t));return await n.done,r}catch(e){if(e instanceof Kt)kn.warn(e.message);else{const n=dr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kn.warn(n.message)}}}async function Lg(t,e){try{const r=(await X_()).transaction(Vo,"readwrite");await r.objectStore(Vo).put(e,Z_(t)),await r.done}catch(n){if(n instanceof Kt)kn.warn(n.message);else{const r=dr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});kn.warn(r.message)}}}function Z_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ex=1024,Tx=30;class Ix{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ax(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Vg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>Tx){const o=xx(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){kn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Vg(),{heartbeatsToSend:r,unsentEntries:i}=Sx(this._heartbeatsCache.heartbeats),s=zl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return kn.warn(n),""}}}function Vg(){return new Date().toISOString().substring(0,10)}function Sx(t,e=Ex){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Mg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Mg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ax{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _f()?wf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await wx(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Lg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Lg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Mg(t){return zl(JSON.stringify({version:2,heartbeats:t})).length}function xx(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function Cx(t){cn(new Wt("platform-logger",e=>new FA(e),"PRIVATE")),cn(new Wt("heartbeat",e=>new Ix(e),"PRIVATE")),Ot(Jh,Og,t),Ot(Jh,Og,"esm2020"),Ot("fire-js","")}Cx("");function ew(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Rx=ew,tw=new li("auth","Firebase",ew());/**
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
 */const $l=new Cu("@firebase/auth");function kx(t,...e){$l.logLevel<=te.WARN&&$l.warn(`Auth (${ds}): ${t}`,...e)}function ol(t,...e){$l.logLevel<=te.ERROR&&$l.error(`Auth (${ds}): ${t}`,...e)}/**
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
 */function Gt(t,...e){throw If(t,...e)}function rn(t,...e){return If(t,...e)}function nw(t,e,n){const r={...Rx(),[e]:n};return new li("auth","Firebase",r).create(e,{appName:t.name})}function In(t){return nw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function If(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return tw.create(t,...e)}function G(t,e,...n){if(!t)throw If(e,...n)}function wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ol(e),new Error(e)}function Pn(t,e){t||wn(e)}/**
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
 */function ed(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Px(){return jg()==="http:"||jg()==="https:"}function jg(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function Nx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Px()||vf()||"connection"in navigator)?navigator.onLine:!0}function bx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class na{constructor(e,n){this.shortDelay=e,this.longDelay=n,Pn(n>e,"Short delay should be less than long delay!"),this.isMobile=iA()||aA()}get(){return Nx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Sf(t,e){Pn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class rw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ox={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Dx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Lx=new na(3e4,6e4);function Rr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function kr(t,e,n,r,i={}){return iw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ta({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return oA()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&hs(t.emulatorConfig.host)&&(c.credentials="include"),rw.fetch()(await sw(t,t.config.apiHost,n,l),c)})}async function iw(t,e,n){t._canInitEmulator=!1;const r={...Ox,...e};try{const i=new Mx(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw za(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw za(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw za(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw za(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw nw(t,f,c);Gt(t,f)}}catch(i){if(i instanceof Kt)throw i;Gt(t,"network-request-failed",{message:String(i)})}}async function ra(t,e,n,r,i={}){const s=await kr(t,e,n,r,i);return"mfaPendingCredential"in s&&Gt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function sw(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Sf(t.config,i):`${t.config.apiScheme}://${i}`;return Dx.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function Vx(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Mx{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(rn(this.auth,"network-request-failed")),Lx.get())})}}function za(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=rn(t,e,r);return i.customData._tokenResponse=n,i}function Fg(t){return t!==void 0&&t.enterprise!==void 0}class jx{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Vx(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Fx(t,e){return kr(t,"GET","/v2/recaptchaConfig",Rr(t,e))}/**
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
 */async function Ux(t,e){return kr(t,"POST","/v1/accounts:delete",e)}async function ql(t,e){return kr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function co(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zx(t,e=!1){const n=at(t),r=await n.getIdToken(e),i=Af(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:co(Hc(i.auth_time)),issuedAtTime:co(Hc(i.iat)),expirationTime:co(Hc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Hc(t){return Number(t)*1e3}function Af(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ol("JWT malformed, contained fewer than 3 sections"),null;try{const i=z_(n);return i?JSON.parse(i):(ol("Failed to decode base64 JWT payload"),null)}catch(i){return ol("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ug(t){const e=Af(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Mo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Kt&&Bx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Bx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class $x{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class td{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=co(this.lastLoginAt),this.creationTime=co(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Hl(t){var m;const e=t.auth,n=await t.getIdToken(),r=await Mo(t,ql(e,{idToken:n}));G(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(m=i.providerUserInfo)!=null&&m.length?ow(i.providerUserInfo):[],o=Hx(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new td(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function qx(t){const e=at(t);await Hl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Hx(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ow(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function Wx(t,e){const n=await iw(t,{},async()=>{const r=ta({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await sw(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&hs(t.emulatorConfig.host)&&(u.credentials="include"),rw.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Gx(t,e){return kr(t,"POST","/v2/accounts:revokeToken",Rr(t,e))}/**
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
 */class $i{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ug(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=Ug(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Wx(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new $i;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $i,this.toJSON())}_performRefresh(){return wn("not implemented")}}/**
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
 */function $n(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class zt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new $x(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new td(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Mo(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return zx(this,e)}reload(){return qx(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new zt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Hl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Rt(this.auth.app))return Promise.reject(In(this.auth));const e=await this.getIdToken();return await Mo(this,Ux(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:_,providerData:R,stsTokenManager:N}=n;G(m&&N,e,"internal-error");const D=$i.fromJSON(this.name,N);G(typeof m=="string",e,"internal-error"),$n(r,e.name),$n(i,e.name),G(typeof g=="boolean",e,"internal-error"),G(typeof _=="boolean",e,"internal-error"),$n(s,e.name),$n(o,e.name),$n(l,e.name),$n(u,e.name),$n(c,e.name),$n(f,e.name);const S=new zt({uid:m,auth:e,email:i,emailVerified:g,displayName:r,isAnonymous:_,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:D,createdAt:c,lastLoginAt:f});return R&&Array.isArray(R)&&(S.providerData=R.map(w=>({...w}))),u&&(S._redirectEventId=u),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new $i;i.updateFromServerResponse(n);const s=new zt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Hl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?ow(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new $i;l.updateFromIdToken(r);const u=new zt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new td(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const zg=new Map;function En(t){Pn(t instanceof Function,"Expected a class definition");let e=zg.get(t);return e?(Pn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,zg.set(t,e),e)}/**
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
 */class aw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}aw.type="NONE";const Bg=aw;/**
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
 */function al(t,e,n){return`firebase:${t}:${e}:${n}`}class qi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=al(this.userKey,i.apiKey,s),this.fullPersistenceKey=al("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ql(this.auth,{idToken:e}).catch(()=>{});return n?zt._fromGetAccountInfoResponse(this.auth,n,e):null}return zt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new qi(En(Bg),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||En(Bg);const o=al(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){let m;if(typeof f=="string"){const g=await ql(e,{idToken:f}).catch(()=>{});if(!g)break;m=await zt._fromGetAccountInfoResponse(e,g,f)}else m=zt._fromJSON(e,f);c!==s&&(l=m),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new qi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new qi(s,e,r))}}/**
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
 */function $g(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(lw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fw(e))return"Blackberry";if(pw(e))return"Webos";if(uw(e))return"Safari";if((e.includes("chrome/")||cw(e))&&!e.includes("edge/"))return"Chrome";if(dw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function lw(t=nt()){return/firefox\//i.test(t)}function uw(t=nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cw(t=nt()){return/crios\//i.test(t)}function hw(t=nt()){return/iemobile/i.test(t)}function dw(t=nt()){return/android/i.test(t)}function fw(t=nt()){return/blackberry/i.test(t)}function pw(t=nt()){return/webos/i.test(t)}function xf(t=nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Kx(t=nt()){var e;return xf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function Qx(){return lA()&&document.documentMode===10}function mw(t=nt()){return xf(t)||dw(t)||pw(t)||fw(t)||/windows phone/i.test(t)||hw(t)}/**
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
 */function gw(t,e=[]){let n;switch(t){case"Browser":n=$g(nt());break;case"Worker":n=`${$g(nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ds}/${r}`}/**
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
 */class Yx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function Jx(t,e={}){return kr(t,"GET","/v2/passwordPolicy",Rr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const Xx=6;class Zx{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Xx,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class eC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qg(this),this.idTokenSubscription=new qg(this),this.beforeStateQueue=new Yx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=En(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await qi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ql(this,{idToken:e}),r=await zt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Rt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Hl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Rt(this.app))return Promise.reject(In(this));const n=e?at(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Rt(this.app)?Promise.reject(In(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Rt(this.app)?Promise.reject(In(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(En(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Jx(this),n=new Zx(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new li("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Gx(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&En(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await qi.create(this,[En(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Rt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&kx(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ci(t){return at(t)}class qg{constructor(e){this.auth=e,this.observer=null,this.addObserver=pA(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ru={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function tC(t){Ru=t}function yw(t){return Ru.loadJS(t)}function nC(){return Ru.recaptchaEnterpriseScript}function rC(){return Ru.gapiScript}function iC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class sC{constructor(){this.enterprise=new oC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class oC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const aC="recaptcha-enterprise",vw="NO_RECAPTCHA";class lC{constructor(e){this.type=aC,this.auth=ci(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{Fx(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new jx(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Fg(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(vw)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new sC().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Fg(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=nC();u.length!==0&&(u+=l),yw(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Hg(t,e,n,r=!1,i=!1){const s=new lC(t);let o;if(i)o=vw;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function nd(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Hg(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Hg(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function uC(t,e){const n=ui(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(vr(s,e??{}))return i;Gt(i,"already-initialized")}return n.initialize({options:e})}function cC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(En);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function hC(t,e,n){const r=ci(t);G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=_w(e),{host:o,port:l}=dC(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){G(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),G(vr(c,r.config.emulator)&&vr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,hs(o)?(H_(`${s}//${o}${u}`),W_("Auth",!0)):fC()}function _w(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function dC(t){const e=_w(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Wg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Wg(o)}}}function Wg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function fC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Cf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return wn("not implemented")}_getIdTokenResponse(e){return wn("not implemented")}_linkToIdToken(e,n){return wn("not implemented")}_getReauthenticationResolver(e){return wn("not implemented")}}async function pC(t,e){return kr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function mC(t,e){return ra(t,"POST","/v1/accounts:signInWithPassword",Rr(t,e))}/**
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
 */async function gC(t,e){return ra(t,"POST","/v1/accounts:signInWithEmailLink",Rr(t,e))}async function yC(t,e){return ra(t,"POST","/v1/accounts:signInWithEmailLink",Rr(t,e))}/**
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
 */class jo extends Cf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new jo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new jo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nd(e,n,"signInWithPassword",mC);case"emailLink":return gC(e,{email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nd(e,r,"signUpPassword",pC);case"emailLink":return yC(e,{idToken:n,email:this._email,oobCode:this._password});default:Gt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Hi(t,e){return ra(t,"POST","/v1/accounts:signInWithIdp",Rr(t,e))}/**
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
 */const vC="http://localhost";class Zr extends Cf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Zr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Gt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Zr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Hi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Hi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Hi(e,n)}buildRequest(){const e={requestUri:vC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ta(n)}return e}}/**
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
 */function _C(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function wC(t){const e=Ks(Qs(t)).link,n=e?Ks(Qs(e)).deep_link_id:null,r=Ks(Qs(t)).deep_link_id;return(r?Ks(Qs(r)).link:null)||r||n||e||t}class Rf{constructor(e){const n=Ks(Qs(e)),r=n.apiKey??null,i=n.oobCode??null,s=_C(n.mode??null);G(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=wC(e);try{return new Rf(n)}catch{return null}}}/**
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
 */class fs{constructor(){this.providerId=fs.PROVIDER_ID}static credential(e,n){return jo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Rf.parseLink(n);return G(r,"argument-error"),jo._fromEmailAndCode(e,r.code,r.tenantId)}}fs.PROVIDER_ID="password";fs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ww{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ia extends ww{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Yn extends ia{constructor(){super("facebook.com")}static credential(e){return Zr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yn.PROVIDER_ID="facebook.com";/**
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
 */class Jn extends ia{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Zr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.GOOGLE_SIGN_IN_METHOD="google.com";Jn.PROVIDER_ID="google.com";/**
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
 */class Xn extends ia{constructor(){super("github.com")}static credential(e){return Zr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch{return null}}}Xn.GITHUB_SIGN_IN_METHOD="github.com";Xn.PROVIDER_ID="github.com";/**
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
 */class Zn extends ia{constructor(){super("twitter.com")}static credential(e,n){return Zr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.TWITTER_SIGN_IN_METHOD="twitter.com";Zn.PROVIDER_ID="twitter.com";/**
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
 */async function EC(t,e){return ra(t,"POST","/v1/accounts:signUp",Rr(t,e))}/**
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
 */class ei{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await zt._fromIdTokenResponse(e,r,i),o=Gg(r);return new ei({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Gg(r);return new ei({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Gg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Wl extends Kt{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Wl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Wl(e,n,r,i)}}function Ew(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Wl._fromErrorAndOperation(t,s,e,r):s})}async function TC(t,e,n=!1){const r=await Mo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ei._forOperation(t,"link",r)}/**
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
 */async function IC(t,e,n=!1){const{auth:r}=t;if(Rt(r.app))return Promise.reject(In(r));const i="reauthenticate";try{const s=await Mo(t,Ew(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=Af(s.idToken);G(o,r,"internal-error");const{sub:l}=o;return G(t.uid===l,r,"user-mismatch"),ei._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Gt(r,"user-mismatch"),s}}/**
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
 */async function Tw(t,e,n=!1){if(Rt(t.app))return Promise.reject(In(t));const r="signIn",i=await Ew(t,r,e),s=await ei._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function SC(t,e){return Tw(ci(t),e)}/**
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
 */async function Iw(t){const e=ci(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function AC(t,e,n){if(Rt(t.app))return Promise.reject(In(t));const r=ci(t),o=await nd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",EC).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Iw(t),u}),l=await ei._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function xC(t,e,n){return Rt(t.app)?Promise.reject(In(t)):SC(at(t),fs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Iw(t),r})}function CC(t,e,n,r){return at(t).onIdTokenChanged(e,n,r)}function RC(t,e,n){return at(t).beforeAuthStateChanged(e,n)}function kC(t,e,n,r){return at(t).onAuthStateChanged(e,n,r)}function PC(t){return at(t).signOut()}const Gl="__sak";/**
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
 */class Sw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Gl,"1"),this.storage.removeItem(Gl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const NC=1e3,bC=10;class Aw extends Sw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=mw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Qx()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,bC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},NC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Aw.type="LOCAL";const OC=Aw;/**
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
 */class xw extends Sw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}xw.type="SESSION";const Cw=xw;/**
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
 */function DC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ku{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ku(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await DC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ku.receivers=[];/**
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
 */function kf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class LC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=kf("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const g=m;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function sn(){return window}function VC(t){sn().location.href=t}/**
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
 */function Rw(){return typeof sn().WorkerGlobalScope<"u"&&typeof sn().importScripts=="function"}async function MC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function FC(){return Rw()?self:null}/**
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
 */const kw="firebaseLocalStorageDb",UC=1,Kl="firebaseLocalStorage",Pw="fbase_key";class sa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Pu(t,e){return t.transaction([Kl],e?"readwrite":"readonly").objectStore(Kl)}function zC(){const t=indexedDB.deleteDatabase(kw);return new sa(t).toPromise()}function rd(){const t=indexedDB.open(kw,UC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Kl,{keyPath:Pw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Kl)?e(r):(r.close(),await zC(),e(await rd()))})})}async function Kg(t,e,n){const r=Pu(t,!0).put({[Pw]:e,value:n});return new sa(r).toPromise()}async function BC(t,e){const n=Pu(t,!1).get(e),r=await new sa(n).toPromise();return r===void 0?null:r.value}function Qg(t,e){const n=Pu(t,!0).delete(e);return new sa(n).toPromise()}const $C=800,qC=3;class Nw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>qC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Rw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ku._getInstance(FC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await MC(),!this.activeServiceWorker)return;this.sender=new LC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rd();return await Kg(e,Gl,"1"),await Qg(e,Gl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Kg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>BC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Pu(i,!1).getAll();return new sa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$C)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Nw.type="LOCAL";const HC=Nw;new na(3e4,6e4);/**
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
 */function WC(t,e){return e?En(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Pf extends Cf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Hi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Hi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function GC(t){return Tw(t.auth,new Pf(t),t.bypassAuthState)}function KC(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),IC(n,new Pf(t),t.bypassAuthState)}async function QC(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),TC(n,new Pf(t),t.bypassAuthState)}/**
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
 */class bw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return GC;case"linkViaPopup":case"linkViaRedirect":return QC;case"reauthViaPopup":case"reauthViaRedirect":return KC;default:Gt(this.auth,"internal-error")}}resolve(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const YC=new na(2e3,1e4);class Vi extends bw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Vi.currentPopupAction&&Vi.currentPopupAction.cancel(),Vi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Pn(this.filter.length===1,"Popup operations only handle one event");const e=kf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,YC.get())};e()}}Vi.currentPopupAction=null;/**
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
 */const JC="pendingRedirect",ll=new Map;class XC extends bw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ll.get(this.auth._key());if(!e){try{const r=await ZC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ll.set(this.auth._key(),e)}return this.bypassAuthState||ll.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ZC(t,e){const n=nR(e),r=tR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function eR(t,e){ll.set(t._key(),e)}function tR(t){return En(t._redirectPersistence)}function nR(t){return al(JC,t.config.apiKey,t.name)}async function rR(t,e,n=!1){if(Rt(t.app))return Promise.reject(In(t));const r=ci(t),i=WC(r,e),o=await new XC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const iR=10*60*1e3;class sR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!oR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ow(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(rn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=iR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yg(e))}saveEventToCache(e){this.cachedEventUids.add(Yg(e)),this.lastProcessedEventTime=Date.now()}}function Yg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ow({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function oR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ow(t);default:return!1}}/**
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
 */async function aR(t,e={}){return kr(t,"GET","/v1/projects",e)}/**
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
 */const lR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uR=/^https?/;async function cR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await aR(t);for(const n of e)try{if(hR(n))return}catch{}Gt(t,"unauthorized-domain")}function hR(t){const e=ed(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!uR.test(n))return!1;if(lR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const dR=new na(3e4,6e4);function Jg(){const t=sn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function fR(t){return new Promise((e,n)=>{var i,s,o;function r(){Jg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jg(),n(rn(t,"network-request-failed"))},timeout:dR.get()})}if((s=(i=sn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=sn().gapi)!=null&&o.load)r();else{const l=iC("iframefcb");return sn()[l]=()=>{gapi.load?r():n(rn(t,"network-request-failed"))},yw(`${rC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw ul=null,e})}let ul=null;function pR(t){return ul=ul||fR(t),ul}/**
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
 */const mR=new na(5e3,15e3),gR="__/auth/iframe",yR="emulator/auth/iframe",vR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_R=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wR(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Sf(e,yR):`https://${t.config.authDomain}/${gR}`,r={apiKey:e.apiKey,appName:t.name,v:ds},i=_R.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ta(r).slice(1)}`}async function ER(t){const e=await pR(t),n=sn().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:wR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=rn(t,"network-request-failed"),l=sn().setTimeout(()=>{s(o)},mR.get());function u(){sn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const TR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},IR=500,SR=600,AR="_blank",xR="http://localhost";class Xg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function CR(t,e,n,r=IR,i=SR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...TR,width:r.toString(),height:i.toString(),top:s,left:o},c=nt().toLowerCase();n&&(l=cw(c)?AR:n),lw(c)&&(e=e||xR,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[_,R])=>`${g}${_}=${R},`,"");if(Kx(c)&&l!=="_self")return RR(e||"",l),new Xg(null);const m=window.open(e||"",l,f);G(m,t,"popup-blocked");try{m.focus()}catch{}return new Xg(m)}function RR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const kR="__/auth/handler",PR="emulator/auth/handler",NR=encodeURIComponent("fac");async function Zg(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ds,eventId:i};if(e instanceof ww){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",fA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof ia){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${NR}=${encodeURIComponent(u)}`:"";return`${bR(t)}?${ta(l).slice(1)}${c}`}function bR({config:t}){return t.emulator?Sf(t,PR):`https://${t.authDomain}/${kR}`}/**
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
 */const Wc="webStorageSupport";class OR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cw,this._completeRedirectFn=rR,this._overrideRedirectResult=eR}async _openPopup(e,n,r,i){var o;Pn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Zg(e,n,r,ed(),i);return CR(e,s,kf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Zg(e,n,r,ed(),i);return VC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Pn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ER(e),r=new sR(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wc,{type:Wc},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Wc];s!==void 0&&n(!!s),Gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return mw()||uw()||xf()}}const DR=OR;var ey="@firebase/auth",ty="1.11.0";/**
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
 */class LR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function VR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function MR(t){cn(new Wt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gw(t)},c=new eC(r,i,s,u);return cC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),cn(new Wt("auth-internal",e=>{const n=ci(e.getProvider("auth").getImmediate());return(r=>new LR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(ey,ty,VR(t)),Ot(ey,ty,"esm2020")}/**
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
 */const jR=5*60,FR=q_("authIdTokenMaxAge")||jR;let ny=null;const UR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>FR)return;const i=n==null?void 0:n.token;ny!==i&&(ny=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function zR(t=Tf()){const e=ui(t,"auth");if(e.isInitialized())return e.getImmediate();const n=uC(t,{popupRedirectResolver:DR,persistence:[HC,OC,Cw]}),r=q_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=UR(s.toString());RC(n,o,()=>o(n.currentUser)),CC(n,l=>o(l))}}const i=B_("auth");return i&&hC(n,`http://${i}`),n}function BR(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}tC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=rn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",BR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});MR("Browser");var ry=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fr,Dw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,v){function T(){}T.prototype=v.prototype,E.F=v.prototype,E.prototype=new T,E.prototype.constructor=E,E.D=function(x,C,k){for(var I=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)I[Ue-2]=arguments[Ue];return v.prototype[C].apply(x,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,v,T){T||(T=0);const x=Array(16);if(typeof v=="string")for(var C=0;C<16;++C)x[C]=v.charCodeAt(T++)|v.charCodeAt(T++)<<8|v.charCodeAt(T++)<<16|v.charCodeAt(T++)<<24;else for(C=0;C<16;++C)x[C]=v[T++]|v[T++]<<8|v[T++]<<16|v[T++]<<24;v=E.g[0],T=E.g[1],C=E.g[2];let k=E.g[3],I;I=v+(k^T&(C^k))+x[0]+3614090360&4294967295,v=T+(I<<7&4294967295|I>>>25),I=k+(C^v&(T^C))+x[1]+3905402710&4294967295,k=v+(I<<12&4294967295|I>>>20),I=C+(T^k&(v^T))+x[2]+606105819&4294967295,C=k+(I<<17&4294967295|I>>>15),I=T+(v^C&(k^v))+x[3]+3250441966&4294967295,T=C+(I<<22&4294967295|I>>>10),I=v+(k^T&(C^k))+x[4]+4118548399&4294967295,v=T+(I<<7&4294967295|I>>>25),I=k+(C^v&(T^C))+x[5]+1200080426&4294967295,k=v+(I<<12&4294967295|I>>>20),I=C+(T^k&(v^T))+x[6]+2821735955&4294967295,C=k+(I<<17&4294967295|I>>>15),I=T+(v^C&(k^v))+x[7]+4249261313&4294967295,T=C+(I<<22&4294967295|I>>>10),I=v+(k^T&(C^k))+x[8]+1770035416&4294967295,v=T+(I<<7&4294967295|I>>>25),I=k+(C^v&(T^C))+x[9]+2336552879&4294967295,k=v+(I<<12&4294967295|I>>>20),I=C+(T^k&(v^T))+x[10]+4294925233&4294967295,C=k+(I<<17&4294967295|I>>>15),I=T+(v^C&(k^v))+x[11]+2304563134&4294967295,T=C+(I<<22&4294967295|I>>>10),I=v+(k^T&(C^k))+x[12]+1804603682&4294967295,v=T+(I<<7&4294967295|I>>>25),I=k+(C^v&(T^C))+x[13]+4254626195&4294967295,k=v+(I<<12&4294967295|I>>>20),I=C+(T^k&(v^T))+x[14]+2792965006&4294967295,C=k+(I<<17&4294967295|I>>>15),I=T+(v^C&(k^v))+x[15]+1236535329&4294967295,T=C+(I<<22&4294967295|I>>>10),I=v+(C^k&(T^C))+x[1]+4129170786&4294967295,v=T+(I<<5&4294967295|I>>>27),I=k+(T^C&(v^T))+x[6]+3225465664&4294967295,k=v+(I<<9&4294967295|I>>>23),I=C+(v^T&(k^v))+x[11]+643717713&4294967295,C=k+(I<<14&4294967295|I>>>18),I=T+(k^v&(C^k))+x[0]+3921069994&4294967295,T=C+(I<<20&4294967295|I>>>12),I=v+(C^k&(T^C))+x[5]+3593408605&4294967295,v=T+(I<<5&4294967295|I>>>27),I=k+(T^C&(v^T))+x[10]+38016083&4294967295,k=v+(I<<9&4294967295|I>>>23),I=C+(v^T&(k^v))+x[15]+3634488961&4294967295,C=k+(I<<14&4294967295|I>>>18),I=T+(k^v&(C^k))+x[4]+3889429448&4294967295,T=C+(I<<20&4294967295|I>>>12),I=v+(C^k&(T^C))+x[9]+568446438&4294967295,v=T+(I<<5&4294967295|I>>>27),I=k+(T^C&(v^T))+x[14]+3275163606&4294967295,k=v+(I<<9&4294967295|I>>>23),I=C+(v^T&(k^v))+x[3]+4107603335&4294967295,C=k+(I<<14&4294967295|I>>>18),I=T+(k^v&(C^k))+x[8]+1163531501&4294967295,T=C+(I<<20&4294967295|I>>>12),I=v+(C^k&(T^C))+x[13]+2850285829&4294967295,v=T+(I<<5&4294967295|I>>>27),I=k+(T^C&(v^T))+x[2]+4243563512&4294967295,k=v+(I<<9&4294967295|I>>>23),I=C+(v^T&(k^v))+x[7]+1735328473&4294967295,C=k+(I<<14&4294967295|I>>>18),I=T+(k^v&(C^k))+x[12]+2368359562&4294967295,T=C+(I<<20&4294967295|I>>>12),I=v+(T^C^k)+x[5]+4294588738&4294967295,v=T+(I<<4&4294967295|I>>>28),I=k+(v^T^C)+x[8]+2272392833&4294967295,k=v+(I<<11&4294967295|I>>>21),I=C+(k^v^T)+x[11]+1839030562&4294967295,C=k+(I<<16&4294967295|I>>>16),I=T+(C^k^v)+x[14]+4259657740&4294967295,T=C+(I<<23&4294967295|I>>>9),I=v+(T^C^k)+x[1]+2763975236&4294967295,v=T+(I<<4&4294967295|I>>>28),I=k+(v^T^C)+x[4]+1272893353&4294967295,k=v+(I<<11&4294967295|I>>>21),I=C+(k^v^T)+x[7]+4139469664&4294967295,C=k+(I<<16&4294967295|I>>>16),I=T+(C^k^v)+x[10]+3200236656&4294967295,T=C+(I<<23&4294967295|I>>>9),I=v+(T^C^k)+x[13]+681279174&4294967295,v=T+(I<<4&4294967295|I>>>28),I=k+(v^T^C)+x[0]+3936430074&4294967295,k=v+(I<<11&4294967295|I>>>21),I=C+(k^v^T)+x[3]+3572445317&4294967295,C=k+(I<<16&4294967295|I>>>16),I=T+(C^k^v)+x[6]+76029189&4294967295,T=C+(I<<23&4294967295|I>>>9),I=v+(T^C^k)+x[9]+3654602809&4294967295,v=T+(I<<4&4294967295|I>>>28),I=k+(v^T^C)+x[12]+3873151461&4294967295,k=v+(I<<11&4294967295|I>>>21),I=C+(k^v^T)+x[15]+530742520&4294967295,C=k+(I<<16&4294967295|I>>>16),I=T+(C^k^v)+x[2]+3299628645&4294967295,T=C+(I<<23&4294967295|I>>>9),I=v+(C^(T|~k))+x[0]+4096336452&4294967295,v=T+(I<<6&4294967295|I>>>26),I=k+(T^(v|~C))+x[7]+1126891415&4294967295,k=v+(I<<10&4294967295|I>>>22),I=C+(v^(k|~T))+x[14]+2878612391&4294967295,C=k+(I<<15&4294967295|I>>>17),I=T+(k^(C|~v))+x[5]+4237533241&4294967295,T=C+(I<<21&4294967295|I>>>11),I=v+(C^(T|~k))+x[12]+1700485571&4294967295,v=T+(I<<6&4294967295|I>>>26),I=k+(T^(v|~C))+x[3]+2399980690&4294967295,k=v+(I<<10&4294967295|I>>>22),I=C+(v^(k|~T))+x[10]+4293915773&4294967295,C=k+(I<<15&4294967295|I>>>17),I=T+(k^(C|~v))+x[1]+2240044497&4294967295,T=C+(I<<21&4294967295|I>>>11),I=v+(C^(T|~k))+x[8]+1873313359&4294967295,v=T+(I<<6&4294967295|I>>>26),I=k+(T^(v|~C))+x[15]+4264355552&4294967295,k=v+(I<<10&4294967295|I>>>22),I=C+(v^(k|~T))+x[6]+2734768916&4294967295,C=k+(I<<15&4294967295|I>>>17),I=T+(k^(C|~v))+x[13]+1309151649&4294967295,T=C+(I<<21&4294967295|I>>>11),I=v+(C^(T|~k))+x[4]+4149444226&4294967295,v=T+(I<<6&4294967295|I>>>26),I=k+(T^(v|~C))+x[11]+3174756917&4294967295,k=v+(I<<10&4294967295|I>>>22),I=C+(v^(k|~T))+x[2]+718787259&4294967295,C=k+(I<<15&4294967295|I>>>17),I=T+(k^(C|~v))+x[9]+3951481745&4294967295,E.g[0]=E.g[0]+v&4294967295,E.g[1]=E.g[1]+(C+(I<<21&4294967295|I>>>11))&4294967295,E.g[2]=E.g[2]+C&4294967295,E.g[3]=E.g[3]+k&4294967295}r.prototype.v=function(E,v){v===void 0&&(v=E.length);const T=v-this.blockSize,x=this.C;let C=this.h,k=0;for(;k<v;){if(C==0)for(;k<=T;)i(this,E,k),k+=this.blockSize;if(typeof E=="string"){for(;k<v;)if(x[C++]=E.charCodeAt(k++),C==this.blockSize){i(this,x),C=0;break}}else for(;k<v;)if(x[C++]=E[k++],C==this.blockSize){i(this,x),C=0;break}}this.h=C,this.o+=v},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var v=1;v<E.length-8;++v)E[v]=0;v=this.o*8;for(var T=E.length-8;T<E.length;++T)E[T]=v&255,v/=256;for(this.v(E),E=Array(16),v=0,T=0;T<4;++T)for(let x=0;x<32;x+=8)E[v++]=this.g[T]>>>x&255;return E};function s(E,v){var T=l;return Object.prototype.hasOwnProperty.call(T,E)?T[E]:T[E]=v(E)}function o(E,v){this.h=v;const T=[];let x=!0;for(let C=E.length-1;C>=0;C--){const k=E[C]|0;x&&k==v||(T[C]=k,x=!1)}this.g=T}var l={};function u(E){return-128<=E&&E<128?s(E,function(v){return new o([v|0],v<0?-1:0)}):new o([E|0],E<0?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return m;if(E<0)return D(c(-E));const v=[];let T=1;for(let x=0;E>=T;x++)v[x]=E/T|0,T*=4294967296;return new o(v,0)}function f(E,v){if(E.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(E.charAt(0)=="-")return D(f(E.substring(1),v));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=c(Math.pow(v,8));let x=m;for(let k=0;k<E.length;k+=8){var C=Math.min(8,E.length-k);const I=parseInt(E.substring(k,k+C),v);C<8?(C=c(Math.pow(v,C)),x=x.j(C).add(c(I))):(x=x.j(T),x=x.add(c(I)))}return x}var m=u(0),g=u(1),_=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-D(this).m();let E=0,v=1;for(let T=0;T<this.g.length;T++){const x=this.i(T);E+=(x>=0?x:4294967296+x)*v,v*=4294967296}return E},t.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(R(this))return"0";if(N(this))return"-"+D(this).toString(E);const v=c(Math.pow(E,6));var T=this;let x="";for(;;){const C=O(T,v).g;T=S(T,C.j(v));let k=((T.g.length>0?T.g[0]:T.h)>>>0).toString(E);if(T=C,R(T))return k+x;for(;k.length<6;)k="0"+k;x=k+x}},t.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function R(E){if(E.h!=0)return!1;for(let v=0;v<E.g.length;v++)if(E.g[v]!=0)return!1;return!0}function N(E){return E.h==-1}t.l=function(E){return E=S(this,E),N(E)?-1:R(E)?0:1};function D(E){const v=E.g.length,T=[];for(let x=0;x<v;x++)T[x]=~E.g[x];return new o(T,~E.h).add(g)}t.abs=function(){return N(this)?D(this):this},t.add=function(E){const v=Math.max(this.g.length,E.g.length),T=[];let x=0;for(let C=0;C<=v;C++){let k=x+(this.i(C)&65535)+(E.i(C)&65535),I=(k>>>16)+(this.i(C)>>>16)+(E.i(C)>>>16);x=I>>>16,k&=65535,I&=65535,T[C]=I<<16|k}return new o(T,T[T.length-1]&-2147483648?-1:0)};function S(E,v){return E.add(D(v))}t.j=function(E){if(R(this)||R(E))return m;if(N(this))return N(E)?D(this).j(D(E)):D(D(this).j(E));if(N(E))return D(this.j(D(E)));if(this.l(_)<0&&E.l(_)<0)return c(this.m()*E.m());const v=this.g.length+E.g.length,T=[];for(var x=0;x<2*v;x++)T[x]=0;for(x=0;x<this.g.length;x++)for(let C=0;C<E.g.length;C++){const k=this.i(x)>>>16,I=this.i(x)&65535,Ue=E.i(C)>>>16,fn=E.i(C)&65535;T[2*x+2*C]+=I*fn,w(T,2*x+2*C),T[2*x+2*C+1]+=k*fn,w(T,2*x+2*C+1),T[2*x+2*C+1]+=I*Ue,w(T,2*x+2*C+1),T[2*x+2*C+2]+=k*Ue,w(T,2*x+2*C+2)}for(E=0;E<v;E++)T[E]=T[2*E+1]<<16|T[2*E];for(E=v;E<2*v;E++)T[E]=0;return new o(T,0)};function w(E,v){for(;(E[v]&65535)!=E[v];)E[v+1]+=E[v]>>>16,E[v]&=65535,v++}function A(E,v){this.g=E,this.h=v}function O(E,v){if(R(v))throw Error("division by zero");if(R(E))return new A(m,m);if(N(E))return v=O(D(E),v),new A(D(v.g),D(v.h));if(N(v))return v=O(E,D(v)),new A(D(v.g),v.h);if(E.g.length>30){if(N(E)||N(v))throw Error("slowDivide_ only works with positive integers.");for(var T=g,x=v;x.l(E)<=0;)T=j(T),x=j(x);var C=F(T,1),k=F(x,1);for(x=F(x,2),T=F(T,2);!R(x);){var I=k.add(x);I.l(E)<=0&&(C=C.add(T),k=I),x=F(x,1),T=F(T,1)}return v=S(E,C.j(v)),new A(C,v)}for(C=m;E.l(v)>=0;){for(T=Math.max(1,Math.floor(E.m()/v.m())),x=Math.ceil(Math.log(T)/Math.LN2),x=x<=48?1:Math.pow(2,x-48),k=c(T),I=k.j(v);N(I)||I.l(E)>0;)T-=x,k=c(T),I=k.j(v);R(k)&&(k=g),C=C.add(k),E=S(E,I)}return new A(C,E)}t.B=function(E){return O(this,E).h},t.and=function(E){const v=Math.max(this.g.length,E.g.length),T=[];for(let x=0;x<v;x++)T[x]=this.i(x)&E.i(x);return new o(T,this.h&E.h)},t.or=function(E){const v=Math.max(this.g.length,E.g.length),T=[];for(let x=0;x<v;x++)T[x]=this.i(x)|E.i(x);return new o(T,this.h|E.h)},t.xor=function(E){const v=Math.max(this.g.length,E.g.length),T=[];for(let x=0;x<v;x++)T[x]=this.i(x)^E.i(x);return new o(T,this.h^E.h)};function j(E){const v=E.g.length+1,T=[];for(let x=0;x<v;x++)T[x]=E.i(x)<<1|E.i(x-1)>>>31;return new o(T,E.h)}function F(E,v){const T=v>>5;v%=32;const x=E.g.length-T,C=[];for(let k=0;k<x;k++)C[k]=v>0?E.i(k+T)>>>v|E.i(k+T+1)<<32-v:E.i(k+T);return new o(C,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Dw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,fr=o}).apply(typeof ry<"u"?ry:typeof self<"u"?self:typeof window<"u"?window:{});var Ba=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lw,Ys,Vw,cl,id,Mw,jw,Fw;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ba=="object"&&Ba];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var d=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var P=a[y];if(!(P in d))break e;d=d[P]}a=a[a.length-1],y=d[a],h=h(y),h!=y&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var d=[],y;for(y in h)Object.prototype.hasOwnProperty.call(h,y)&&d.push([y,h[y]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,d){return a.call.apply(a.bind,arguments)}function c(a,h,d){return c=u,c.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var y=d.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function m(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(y,P,b){for(var U=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)U[Z-2]=arguments[Z];return h.prototype[P].apply(y,U)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function _(a){const h=a.length;if(h>0){const d=Array(h);for(let y=0;y<h;y++)d[y]=a[y];return d}return[]}function R(a,h){for(let y=1;y<arguments.length;y++){const P=arguments[y];var d=typeof P;if(d=d!="object"?d:P?Array.isArray(P)?"array":d:"null",d=="array"||d=="object"&&typeof P.length=="number"){d=a.length||0;const b=P.length||0;a.length=d+b;for(let U=0;U<b;U++)a[d+U]=P[U]}else a.push(P)}}class N{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function D(a){o.setTimeout(()=>{throw a},0)}function S(){var a=E;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class w{constructor(){this.h=this.g=null}add(h,d){const y=A.get();y.set(h,d),this.h?this.h.next=y:this.g=y,this.h=y}}var A=new N(()=>new O,a=>a.reset());class O{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let j,F=!1,E=new w,v=()=>{const a=Promise.resolve(void 0);j=()=>{a.then(T)}};function T(){for(var a;a=S();){try{a.h.call(a.g)}catch(d){D(d)}var h=A;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}F=!1}function x(){this.u=this.u,this.C=this.C}x.prototype.u=!1,x.prototype.dispose=function(){this.u||(this.u=!0,this.N())},x.prototype[Symbol.dispose]=function(){this.dispose()},x.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function C(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a}();function I(a){return/^[\s\xa0]*$/.test(a)}function Ue(a,h){C.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}m(Ue,C),Ue.prototype.init=function(a,h){const d=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Ue.Z.h.call(this)},Ue.prototype.h=function(){Ue.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var fn="closure_listenable_"+(Math.random()*1e6|0),vs=0;function _s(a,h,d,y,P){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!y,this.ha=P,this.key=++vs,this.da=this.fa=!1}function z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Q(a,h,d){for(const y in a)h.call(d,a[y],y,a)}function X(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function me(a){const h={};for(const d in a)h[d]=a[d];return h}const Se="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Pr(a,h){let d,y;for(let P=1;P<arguments.length;P++){y=arguments[P];for(d in y)a[d]=y[d];for(let b=0;b<Se.length;b++)d=Se[b],Object.prototype.hasOwnProperty.call(y,d)&&(a[d]=y[d])}}function At(a){this.src=a,this.g={},this.h=0}At.prototype.add=function(a,h,d,y,P){const b=a.toString();a=this.g[b],a||(a=this.g[b]=[],this.h++);const U=Vt(a,h,y,P);return U>-1?(h=a[U],d||(h.fa=!1)):(h=new _s(h,this.src,b,!!y,P),h.fa=d,a.push(h)),h};function Nr(a,h){const d=h.type;if(d in a.g){var y=a.g[d],P=Array.prototype.indexOf.call(y,h,void 0),b;(b=P>=0)&&Array.prototype.splice.call(y,P,1),b&&(z(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Vt(a,h,d,y){for(let P=0;P<a.length;++P){const b=a[P];if(!b.da&&b.listener==h&&b.capture==!!d&&b.ha==y)return P}return-1}var Ln="closure_lm_"+(Math.random()*1e6|0),Gu={};function _p(a,h,d,y,P){if(Array.isArray(h)){for(let b=0;b<h.length;b++)_p(a,h[b],d,y,P);return null}return d=Tp(d),a&&a[fn]?a.J(h,d,l(y)?!!y.capture:!!y,P):q1(a,h,d,!1,y,P)}function q1(a,h,d,y,P,b){if(!h)throw Error("Invalid event type");const U=l(P)?!!P.capture:!!P;let Z=Qu(a);if(Z||(a[Ln]=Z=new At(a)),d=Z.add(h,d,y,U,b),d.proxy)return d;if(y=H1(),d.proxy=y,y.src=a,y.listener=d,a.addEventListener)k||(P=U),P===void 0&&(P=!1),a.addEventListener(h.toString(),y,P);else if(a.attachEvent)a.attachEvent(Ep(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return d}function H1(){function a(d){return h.call(a.src,a.listener,d)}const h=W1;return a}function wp(a,h,d,y,P){if(Array.isArray(h))for(var b=0;b<h.length;b++)wp(a,h[b],d,y,P);else y=l(y)?!!y.capture:!!y,d=Tp(d),a&&a[fn]?(a=a.i,b=String(h).toString(),b in a.g&&(h=a.g[b],d=Vt(h,d,y,P),d>-1&&(z(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[b],a.h--)))):a&&(a=Qu(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Vt(h,d,y,P)),(d=a>-1?h[a]:null)&&Ku(d))}function Ku(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[fn])Nr(h.i,a);else{var d=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(d,y,a.capture):h.detachEvent?h.detachEvent(Ep(d),y):h.addListener&&h.removeListener&&h.removeListener(y),(d=Qu(h))?(Nr(d,a),d.h==0&&(d.src=null,h[Ln]=null)):z(a)}}}function Ep(a){return a in Gu?Gu[a]:Gu[a]="on"+a}function W1(a,h){if(a.da)a=!0;else{h=new Ue(h,this);const d=a.listener,y=a.ha||a.src;a.fa&&Ku(a),a=d.call(y,h)}return a}function Qu(a){return a=a[Ln],a instanceof At?a:null}var Yu="__closure_events_fn_"+(Math.random()*1e9>>>0);function Tp(a){return typeof a=="function"?a:(a[Yu]||(a[Yu]=function(h){return a.handleEvent(h)}),a[Yu])}function Ge(){x.call(this),this.i=new At(this),this.M=this,this.G=null}m(Ge,x),Ge.prototype[fn]=!0,Ge.prototype.removeEventListener=function(a,h,d,y){wp(this,a,h,d,y)};function rt(a,h){var d,y=a.G;if(y)for(d=[];y;y=y.G)d.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new C(h,a);else if(h instanceof C)h.target=h.target||a;else{var P=h;h=new C(y,a),Pr(h,P)}P=!0;let b,U;if(d)for(U=d.length-1;U>=0;U--)b=h.g=d[U],P=da(b,y,!0,h)&&P;if(b=h.g=a,P=da(b,y,!0,h)&&P,P=da(b,y,!1,h)&&P,d)for(U=0;U<d.length;U++)b=h.g=d[U],P=da(b,y,!1,h)&&P}Ge.prototype.N=function(){if(Ge.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let y=0;y<d.length;y++)z(d[y]);delete a.g[h],a.h--}}this.G=null},Ge.prototype.J=function(a,h,d,y){return this.i.add(String(a),h,!1,d,y)},Ge.prototype.K=function(a,h,d,y){return this.i.add(String(a),h,!0,d,y)};function da(a,h,d,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let P=!0;for(let b=0;b<h.length;++b){const U=h[b];if(U&&!U.da&&U.capture==d){const Z=U.listener,Pe=U.ha||U.src;U.fa&&Nr(a.i,U),P=Z.call(Pe,y)!==!1&&P}}return P&&!y.defaultPrevented}function G1(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Ip(a){a.g=G1(()=>{a.g=null,a.i&&(a.i=!1,Ip(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class K1 extends x{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Ip(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ws(a){x.call(this),this.h=a,this.g={}}m(ws,x);var Sp=[];function Ap(a){Q(a.g,function(h,d){this.g.hasOwnProperty(d)&&Ku(h)},a),a.g={}}ws.prototype.N=function(){ws.Z.N.call(this),Ap(this)},ws.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ju=o.JSON.stringify,Q1=o.JSON.parse,Y1=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function xp(){}function Cp(){}var Es={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Xu(){C.call(this,"d")}m(Xu,C);function Zu(){C.call(this,"c")}m(Zu,C);var br={},Rp=null;function fa(){return Rp=Rp||new Ge}br.Ia="serverreachability";function kp(a){C.call(this,br.Ia,a)}m(kp,C);function Ts(a){const h=fa();rt(h,new kp(h))}br.STAT_EVENT="statevent";function Pp(a,h){C.call(this,br.STAT_EVENT,a),this.stat=h}m(Pp,C);function it(a){const h=fa();rt(h,new Pp(h,a))}br.Ja="timingevent";function Np(a,h){C.call(this,br.Ja,a),this.size=h}m(Np,C);function Is(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Ss(){this.g=!0}Ss.prototype.ua=function(){this.g=!1};function J1(a,h,d,y,P,b){a.info(function(){if(a.g)if(b){var U="",Z=b.split("&");for(let ue=0;ue<Z.length;ue++){var Pe=Z[ue].split("=");if(Pe.length>1){const Le=Pe[0];Pe=Pe[1];const Yt=Le.split("_");U=Yt.length>=2&&Yt[1]=="type"?U+(Le+"="+Pe+"&"):U+(Le+"=redacted&")}}}else U=null;else U=b;return"XMLHTTP REQ ("+y+") [attempt "+P+"]: "+h+`
`+d+`
`+U})}function X1(a,h,d,y,P,b,U){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+P+"]: "+h+`
`+d+`
`+b+" "+U})}function mi(a,h,d,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+eT(a,d)+(y?" "+y:"")})}function Z1(a,h){a.info(function(){return"TIMEOUT: "+h})}Ss.prototype.info=function(){};function eT(a,h){if(!a.g)return h;if(!h)return null;try{const b=JSON.parse(h);if(b){for(a=0;a<b.length;a++)if(Array.isArray(b[a])){var d=b[a];if(!(d.length<2)){var y=d[1];if(Array.isArray(y)&&!(y.length<1)){var P=y[0];if(P!="noop"&&P!="stop"&&P!="close")for(let U=1;U<y.length;U++)y[U]=""}}}}return Ju(b)}catch{return h}}var pa={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},bp={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Op;function ec(){}m(ec,xp),ec.prototype.g=function(){return new XMLHttpRequest},Op=new ec;function As(a){return encodeURIComponent(String(a))}function tT(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function Vn(a,h,d,y){this.j=a,this.i=h,this.l=d,this.S=y||1,this.V=new ws(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Dp}function Dp(){this.i=null,this.g="",this.h=!1}var Lp={},tc={};function nc(a,h,d){a.M=1,a.A=ga(Qt(h)),a.u=d,a.R=!0,Vp(a,null)}function Vp(a,h){a.F=Date.now(),ma(a),a.B=Qt(a.A);var d=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),Qp(d.i,"t",y),a.C=0,d=a.j.L,a.h=new Dp,a.g=fm(a.j,d?h:null,!a.u),a.P>0&&(a.O=new K1(c(a.Y,a,a.g),a.P)),h=a.V,d=a.g,y=a.ba;var P="readystatechange";Array.isArray(P)||(P&&(Sp[0]=P.toString()),P=Sp);for(let b=0;b<P.length;b++){const U=_p(d,P[b],y||h.handleEvent,!1,h.h||h);if(!U)break;h.g[U.key]=U}h=a.J?me(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Ts(),J1(a.i,a.v,a.B,a.l,a.S,a.u)}Vn.prototype.ba=function(a){a=a.target;const h=this.O;h&&Fn(a)==3?h.j():this.Y(a)},Vn.prototype.Y=function(a){try{if(a==this.g)e:{const Z=Fn(this.g),Pe=this.g.ya(),ue=this.g.ca();if(!(Z<3)&&(Z!=3||this.g&&(this.h.h||this.g.la()||nm(this.g)))){this.K||Z!=4||Pe==7||(Pe==8||ue<=0?Ts(3):Ts(2)),rc(this);var h=this.g.ca();this.X=h;var d=nT(this);if(this.o=h==200,X1(this.i,this.v,this.B,this.l,this.S,Z,h),this.o){if(this.U&&!this.L){t:{if(this.g){var y,P=this.g;if((y=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(y)){var b=y;break t}}b=null}if(a=b)mi(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ic(this,a);else{this.o=!1,this.m=3,it(12),Or(this),xs(this);break e}}if(this.R){a=!0;let Le;for(;!this.K&&this.C<d.length;)if(Le=rT(this,d),Le==tc){Z==4&&(this.m=4,it(14),a=!1),mi(this.i,this.l,null,"[Incomplete Response]");break}else if(Le==Lp){this.m=4,it(15),mi(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else mi(this.i,this.l,Le,null),ic(this,Le);if(Mp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Z!=4||d.length!=0||this.h.h||(this.m=1,it(16),a=!1),this.o=this.o&&a,!a)mi(this.i,this.l,d,"[Invalid Chunked Response]"),Or(this),xs(this);else if(d.length>0&&!this.W){this.W=!0;var U=this.j;U.g==this&&U.aa&&!U.P&&(U.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),dc(U),U.P=!0,it(11))}}else mi(this.i,this.l,d,null),ic(this,d);Z==4&&Or(this),this.o&&!this.K&&(Z==4?um(this.j,this):(this.o=!1,ma(this)))}else yT(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,it(12)):(this.m=0,it(13)),Or(this),xs(this)}}}catch{}finally{}};function nT(a){if(!Mp(a))return a.g.la();const h=nm(a.g);if(h==="")return"";let d="";const y=h.length,P=Fn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Or(a),xs(a),"";a.h.i=new o.TextDecoder}for(let b=0;b<y;b++)a.h.h=!0,d+=a.h.i.decode(h[b],{stream:!(P&&b==y-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function Mp(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function rT(a,h){var d=a.C,y=h.indexOf(`
`,d);return y==-1?tc:(d=Number(h.substring(d,y)),isNaN(d)?Lp:(y+=1,y+d>h.length?tc:(h=h.slice(y,y+d),a.C=y+d,h)))}Vn.prototype.cancel=function(){this.K=!0,Or(this)};function ma(a){a.T=Date.now()+a.H,jp(a,a.H)}function jp(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Is(c(a.aa,a),h)}function rc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Vn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Z1(this.i,this.B),this.M!=2&&(Ts(),it(17)),Or(this),this.m=2,xs(this)):jp(this,this.T-a)};function xs(a){a.j.I==0||a.K||um(a.j,a)}function Or(a){rc(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Ap(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function ic(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||sc(d.h,a))){if(!a.L&&sc(d.h,a)&&d.I==3){try{var y=d.Ba.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var P=y;if(P[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Ea(d),_a(d);else break e;hc(d),it(18)}}else d.xa=P[1],0<d.xa-d.K&&P[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Is(c(d.Va,d),6e3));zp(d.h)<=1&&d.ta&&(d.ta=void 0)}else Lr(d,11)}else if((a.L||d.g==a)&&Ea(d),!I(h))for(P=d.Ba.g.parse(h),h=0;h<P.length;h++){let ue=P[h];const Le=ue[0];if(!(Le<=d.K))if(d.K=Le,ue=ue[1],d.I==2)if(ue[0]=="c"){d.M=ue[1],d.ba=ue[2];const Yt=ue[3];Yt!=null&&(d.ka=Yt,d.j.info("VER="+d.ka));const Vr=ue[4];Vr!=null&&(d.za=Vr,d.j.info("SVER="+d.za));const Un=ue[5];Un!=null&&typeof Un=="number"&&Un>0&&(y=1.5*Un,d.O=y,d.j.info("backChannelRequestTimeoutMs_="+y)),y=d;const zn=a.g;if(zn){const Ia=zn.g?zn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ia){var b=y.h;b.g||Ia.indexOf("spdy")==-1&&Ia.indexOf("quic")==-1&&Ia.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(oc(b,b.h),b.h=null))}if(y.G){const fc=zn.g?zn.g.getResponseHeader("X-HTTP-Session-Id"):null;fc&&(y.wa=fc,he(y.J,y.G,fc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),y=d;var U=a;if(y.na=dm(y,y.L?y.ba:null,y.W),U.L){Bp(y.h,U);var Z=U,Pe=y.O;Pe&&(Z.H=Pe),Z.D&&(rc(Z),ma(Z)),y.g=U}else am(y);d.i.length>0&&wa(d)}else ue[0]!="stop"&&ue[0]!="close"||Lr(d,7);else d.I==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?Lr(d,7):cc(d):ue[0]!="noop"&&d.l&&d.l.qa(ue),d.A=0)}}Ts(4)}catch{}}var iT=class{constructor(a,h){this.g=a,this.map=h}};function Fp(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Up(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function zp(a){return a.h?1:a.g?a.g.size:0}function sc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function oc(a,h){a.g?a.g.add(h):a.h=h}function Bp(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Fp.prototype.cancel=function(){if(this.i=$p(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function $p(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return _(a.i)}var qp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sT(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const y=a[d].indexOf("=");let P,b=null;y>=0?(P=a[d].substring(0,y),b=a[d].substring(y+1)):P=a[d],h(P,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Mn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Mn?(this.l=a.l,Cs(this,a.j),this.o=a.o,this.g=a.g,Rs(this,a.u),this.h=a.h,ac(this,Yp(a.i)),this.m=a.m):a&&(h=String(a).match(qp))?(this.l=!1,Cs(this,h[1]||"",!0),this.o=ks(h[2]||""),this.g=ks(h[3]||"",!0),Rs(this,h[4]),this.h=ks(h[5]||"",!0),ac(this,h[6]||"",!0),this.m=ks(h[7]||"")):(this.l=!1,this.i=new Ns(null,this.l))}Mn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Ps(h,Hp,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ps(h,Hp,!0),"@"),a.push(As(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ps(d,d.charAt(0)=="/"?lT:aT,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ps(d,cT)),a.join("")},Mn.prototype.resolve=function(a){const h=Qt(this);let d=!!a.j;d?Cs(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var y=a.h;if(d)Rs(h,a.u);else if(d=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var P=h.h.lastIndexOf("/");P!=-1&&(y=h.h.slice(0,P+1)+y)}if(P=y,P==".."||P==".")y="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){y=P.lastIndexOf("/",0)==0,P=P.split("/");const b=[];for(let U=0;U<P.length;){const Z=P[U++];Z=="."?y&&U==P.length&&b.push(""):Z==".."?((b.length>1||b.length==1&&b[0]!="")&&b.pop(),y&&U==P.length&&b.push("")):(b.push(Z),y=!0)}y=b.join("/")}else y=P}return d?h.h=y:d=a.i.toString()!=="",d?ac(h,Yp(a.i)):d=!!a.m,d&&(h.m=a.m),h};function Qt(a){return new Mn(a)}function Cs(a,h,d){a.j=d?ks(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Rs(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function ac(a,h,d){h instanceof Ns?(a.i=h,hT(a.i,a.l)):(d||(h=Ps(h,uT)),a.i=new Ns(h,a.l))}function he(a,h,d){a.i.set(h,d)}function ga(a){return he(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function ks(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ps(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,oT),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function oT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Hp=/[#\/\?@]/g,aT=/[#\?:]/g,lT=/[#\?]/g,uT=/[#\?@]/g,cT=/#/g;function Ns(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Dr(a){a.g||(a.g=new Map,a.h=0,a.i&&sT(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Ns.prototype,t.add=function(a,h){Dr(this),this.i=null,a=gi(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Wp(a,h){Dr(a),h=gi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Gp(a,h){return Dr(a),h=gi(a,h),a.g.has(h)}t.forEach=function(a,h){Dr(this),this.g.forEach(function(d,y){d.forEach(function(P){a.call(h,P,y,this)},this)},this)};function Kp(a,h){Dr(a);let d=[];if(typeof h=="string")Gp(a,h)&&(d=d.concat(a.g.get(gi(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return Dr(this),this.i=null,a=gi(this,a),Gp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Kp(this,a),a.length>0?String(a[0]):h):h};function Qp(a,h,d){Wp(a,h),d.length>0&&(a.i=null,a.g.set(gi(a,h),_(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let y=0;y<h.length;y++){var d=h[y];const P=As(d);d=Kp(this,d);for(let b=0;b<d.length;b++){let U=P;d[b]!==""&&(U+="="+As(d[b])),a.push(U)}}return this.i=a.join("&")};function Yp(a){const h=new Ns;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function gi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function hT(a,h){h&&!a.j&&(Dr(a),a.i=null,a.g.forEach(function(d,y){const P=y.toLowerCase();y!=P&&(Wp(this,y),Qp(this,P,d))},a)),a.j=h}function dT(a,h){const d=new Ss;if(o.Image){const y=new Image;y.onload=f(jn,d,"TestLoadImage: loaded",!0,h,y),y.onerror=f(jn,d,"TestLoadImage: error",!1,h,y),y.onabort=f(jn,d,"TestLoadImage: abort",!1,h,y),y.ontimeout=f(jn,d,"TestLoadImage: timeout",!1,h,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function fT(a,h){const d=new Ss,y=new AbortController,P=setTimeout(()=>{y.abort(),jn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(b=>{clearTimeout(P),b.ok?jn(d,"TestPingServer: ok",!0,h):jn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(P),jn(d,"TestPingServer: error",!1,h)})}function jn(a,h,d,y,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),y(d)}catch{}}function pT(){this.g=new Y1}function lc(a){this.i=a.Sb||null,this.h=a.ab||!1}m(lc,xp),lc.prototype.g=function(){return new ya(this.i,this.h)};function ya(a,h){Ge.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(ya,Ge),t=ya.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Os(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,bs(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Os(this)),this.g&&(this.readyState=3,Os(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Jp(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Jp(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?bs(this):Os(this),this.readyState==3&&Jp(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,bs(this))},t.Na=function(a){this.g&&(this.response=a,bs(this))},t.ga=function(){this.g&&bs(this)};function bs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Os(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Os(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ya.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Xp(a){let h="";return Q(a,function(d,y){h+=y,h+=":",h+=d,h+=`\r
`}),h}function uc(a,h,d){e:{for(y in d){var y=!1;break e}y=!0}y||(d=Xp(d),typeof a=="string"?d!=null&&As(d):he(a,h,d))}function Te(a){Ge.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(Te,Ge);var mT=/^https?$/i,gT=["POST","PUT"];t=Te.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Op.g(),this.g.onreadystatechange=g(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(b){Zp(this,b);return}if(a=d||"",d=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var P in y)d.set(P,y[P]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const b of y.keys())d.set(b,y.get(b));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(d.keys()).find(b=>b.toLowerCase()=="content-type"),P=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(gT,h,void 0)>=0)||y||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,U]of d)this.g.setRequestHeader(b,U);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(b){Zp(this,b)}};function Zp(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,em(a),va(a)}function em(a){a.A||(a.A=!0,rt(a,"complete"),rt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,rt(this,"complete"),rt(this,"abort"),va(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),va(this,!0)),Te.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?tm(this):this.Xa())},t.Xa=function(){tm(this)};function tm(a){if(a.h&&typeof s<"u"){if(a.v&&Fn(a)==4)setTimeout(a.Ca.bind(a),0);else if(rt(a,"readystatechange"),Fn(a)==4){a.h=!1;try{const b=a.ca();e:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var y;if(y=b===0){let U=String(a.D).match(qp)[1]||null;!U&&o.self&&o.self.location&&(U=o.self.location.protocol.slice(0,-1)),y=!mT.test(U?U.toLowerCase():"")}d=y}if(d)rt(a,"complete"),rt(a,"success");else{a.o=6;try{var P=Fn(a)>2?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.ca()+"]",em(a)}}finally{va(a)}}}}function va(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||rt(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Fn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Fn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Q1(h)}};function nm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function yT(a){const h={};a=(a.g&&Fn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(I(a[y]))continue;var d=tT(a[y]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const b=h[P]||[];h[P]=b,b.push(d)}X(h,function(y){return y.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ds(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function rm(a){this.za=0,this.i=[],this.j=new Ss,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ds("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ds("baseRetryDelayMs",5e3,a),this.Za=Ds("retryDelaySeedMs",1e4,a),this.Ta=Ds("forwardChannelMaxRetries",2,a),this.va=Ds("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Fp(a&&a.concurrentRequestLimit),this.Ba=new pT,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=rm.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,y){it(0),this.W=a,this.H=h||{},d&&y!==void 0&&(this.H.OSID=d,this.H.OAID=y),this.F=this.X,this.J=dm(this,null,this.W),wa(this)};function cc(a){if(im(a),a.I==3){var h=a.V++,d=Qt(a.J);if(he(d,"SID",a.M),he(d,"RID",h),he(d,"TYPE","terminate"),Ls(a,d),h=new Vn(a,a.j,h),h.M=2,h.A=ga(Qt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=fm(h.j,null),h.g.ea(h.A)),h.F=Date.now(),ma(h)}hm(a)}function _a(a){a.g&&(dc(a),a.g.cancel(),a.g=null)}function im(a){_a(a),a.v&&(o.clearTimeout(a.v),a.v=null),Ea(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function wa(a){if(!Up(a.h)&&!a.m){a.m=!0;var h=a.Ea;j||v(),F||(j(),F=!0),E.add(h,a),a.D=0}}function vT(a,h){return zp(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Is(c(a.Ea,a,h),cm(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const P=new Vn(this,this.j,a);let b=this.o;if(this.U&&(b?(b=me(b),Pr(b,this.U)):b=this.U),this.u!==null||this.R||(P.J=b,b=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var y=this.i[d];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=om(this,P,h),d=Qt(this.J),he(d,"RID",a),he(d,"CVER",22),this.G&&he(d,"X-HTTP-Session-Id",this.G),Ls(this,d),b&&(this.R?h="headers="+As(Xp(b))+"&"+h:this.u&&uc(d,this.u,b)),oc(this.h,P),this.Ra&&he(d,"TYPE","init"),this.S?(he(d,"$req",h),he(d,"SID","null"),P.U=!0,nc(P,d,null)):nc(P,d,h),this.I=2}}else this.I==3&&(a?sm(this,a):this.i.length==0||Up(this.h)||sm(this))};function sm(a,h){var d;h?d=h.l:d=a.V++;const y=Qt(a.J);he(y,"SID",a.M),he(y,"RID",d),he(y,"AID",a.K),Ls(a,y),a.u&&a.o&&uc(y,a.u,a.o),d=new Vn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=om(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),oc(a.h,d),nc(d,y,h)}function Ls(a,h){a.H&&Q(a.H,function(d,y){he(h,y,d)}),a.l&&Q({},function(d,y){he(h,y,d)})}function om(a,h,d){d=Math.min(a.i.length,d);const y=a.l?c(a.l.Ka,a.l,a):null;e:{var P=a.i;let Z=-1;for(;;){const Pe=["count="+d];Z==-1?d>0?(Z=P[0].g,Pe.push("ofs="+Z)):Z=0:Pe.push("ofs="+Z);let ue=!0;for(let Le=0;Le<d;Le++){var b=P[Le].g;const Yt=P[Le].map;if(b-=Z,b<0)Z=Math.max(0,P[Le].g-100),ue=!1;else try{b="req"+b+"_"||"";try{var U=Yt instanceof Map?Yt:Object.entries(Yt);for(const[Vr,Un]of U){let zn=Un;l(Un)&&(zn=Ju(Un)),Pe.push(b+Vr+"="+encodeURIComponent(zn))}}catch(Vr){throw Pe.push(b+"type="+encodeURIComponent("_badmap")),Vr}}catch{y&&y(Yt)}}if(ue){U=Pe.join("&");break e}}U=void 0}return a=a.i.splice(0,d),h.G=a,U}function am(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;j||v(),F||(j(),F=!0),E.add(h,a),a.A=0}}function hc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Is(c(a.Da,a),cm(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,lm(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Is(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,it(10),_a(this),lm(this))};function dc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function lm(a){a.g=new Vn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Qt(a.na);he(h,"RID","rpc"),he(h,"SID",a.M),he(h,"AID",a.K),he(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&he(h,"TO",a.ia),he(h,"TYPE","xmlhttp"),Ls(a,h),a.u&&a.o&&uc(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=ga(Qt(h)),d.u=null,d.R=!0,Vp(d,a)}t.Va=function(){this.C!=null&&(this.C=null,_a(this),hc(this),it(19))};function Ea(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function um(a,h){var d=null;if(a.g==h){Ea(a),dc(a),a.g=null;var y=2}else if(sc(a.h,h))d=h.G,Bp(a.h,h),y=1;else return;if(a.I!=0){if(h.o)if(y==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var P=a.D;y=fa(),rt(y,new Np(y,d)),wa(a)}else am(a);else if(P=h.m,P==3||P==0&&h.X>0||!(y==1&&vT(a,h)||y==2&&hc(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),P){case 1:Lr(a,5);break;case 4:Lr(a,10);break;case 3:Lr(a,6);break;default:Lr(a,2)}}}function cm(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function Lr(a,h){if(a.j.info("Error code "+h),h==2){var d=c(a.bb,a),y=a.Ua;const P=!y;y=new Mn(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Cs(y,"https"),ga(y),P?dT(y.toString(),d):fT(y.toString(),d)}else it(2);a.I=0,a.l&&a.l.pa(h),hm(a),im(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function hm(a){if(a.I=0,a.ja=[],a.l){const h=$p(a.h);(h.length!=0||a.i.length!=0)&&(R(a.ja,h),R(a.ja,a.i),a.h.i.length=0,_(a.i),a.i.length=0),a.l.oa()}}function dm(a,h,d){var y=d instanceof Mn?Qt(d):new Mn(d);if(y.g!="")h&&(y.g=h+"."+y.g),Rs(y,y.u);else{var P=o.location;y=P.protocol,h=h?h+"."+P.hostname:P.hostname,P=+P.port;const b=new Mn(null);y&&Cs(b,y),h&&(b.g=h),P&&Rs(b,P),d&&(b.h=d),y=b}return d=a.G,h=a.wa,d&&h&&he(y,d,h),he(y,"VER",a.ka),Ls(a,y),y}function fm(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Te(new lc({ab:d})):new Te(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function pm(){}t=pm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Ta(){}Ta.prototype.g=function(a,h){return new yt(a,h)};function yt(a,h){Ge.call(this),this.g=new rm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!I(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!I(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new yi(this)}m(yt,Ge),yt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},yt.prototype.close=function(){cc(this.g)},yt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Ju(a),a=d);h.i.push(new iT(h.Ya++,a)),h.I==3&&wa(h)},yt.prototype.N=function(){this.g.l=null,delete this.j,cc(this.g),delete this.g,yt.Z.N.call(this)};function mm(a){Xu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}m(mm,Xu);function gm(){Zu.call(this),this.status=1}m(gm,Zu);function yi(a){this.g=a}m(yi,pm),yi.prototype.ra=function(){rt(this.g,"a")},yi.prototype.qa=function(a){rt(this.g,new mm(a))},yi.prototype.pa=function(a){rt(this.g,new gm)},yi.prototype.oa=function(){rt(this.g,"b")},Ta.prototype.createWebChannel=Ta.prototype.g,yt.prototype.send=yt.prototype.o,yt.prototype.open=yt.prototype.m,yt.prototype.close=yt.prototype.close,Fw=function(){return new Ta},jw=function(){return fa()},Mw=br,id={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},pa.NO_ERROR=0,pa.TIMEOUT=8,pa.HTTP_ERROR=6,cl=pa,bp.COMPLETE="complete",Vw=bp,Cp.EventType=Es,Es.OPEN="a",Es.CLOSE="b",Es.ERROR="c",Es.MESSAGE="d",Ge.prototype.listen=Ge.prototype.J,Ys=Cp,Te.prototype.listenOnce=Te.prototype.K,Te.prototype.getLastError=Te.prototype.Ha,Te.prototype.getLastErrorCode=Te.prototype.ya,Te.prototype.getStatus=Te.prototype.ca,Te.prototype.getResponseJson=Te.prototype.La,Te.prototype.getResponseText=Te.prototype.la,Te.prototype.send=Te.prototype.ea,Te.prototype.setWithCredentials=Te.prototype.Fa,Lw=Te}).apply(typeof Ba<"u"?Ba:typeof self<"u"?self:typeof window<"u"?window:{});const iy="@firebase/firestore",sy="4.9.2";/**
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
 */let Je=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Je.UNAUTHENTICATED=new Je(null),Je.GOOGLE_CREDENTIALS=new Je("google-credentials-uid"),Je.FIRST_PARTY=new Je("first-party-uid"),Je.MOCK_USER=new Je("mock-user");/**
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
 */let ps="12.3.0";/**
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
 */const ti=new Cu("@firebase/firestore");function wi(){return ti.logLevel}function B(t,...e){if(ti.logLevel<=te.DEBUG){const n=e.map(Nf);ti.debug(`Firestore (${ps}): ${t}`,...n)}}function Nn(t,...e){if(ti.logLevel<=te.ERROR){const n=e.map(Nf);ti.error(`Firestore (${ps}): ${t}`,...n)}}function ns(t,...e){if(ti.logLevel<=te.WARN){const n=e.map(Nf);ti.warn(`Firestore (${ps}): ${t}`,...n)}}function Nf(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function K(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Uw(t,r,n)}function Uw(t,e,n){let r=`FIRESTORE (${ps}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Nn(r),new Error(r)}function oe(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||Uw(e,i,r)}function J(t,e){return t}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Kt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class pr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class zw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $R{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Je.UNAUTHENTICATED))}shutdown(){}}class qR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class HR{constructor(e){this.t=e,this.currentUser=Je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){oe(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new pr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new pr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new pr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string",31837,{l:r}),new zw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string",2055,{h:e}),new Je(e)}}class WR{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Je.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class GR{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new WR(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class oy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class KR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Rt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){oe(this.o===void 0,3512);const r=s=>{s.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new oy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new oy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function QR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class bf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=QR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function sd(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return Gc(i)===Gc(s)?ne(i,s):Gc(i)?1:-1}return ne(t.length,e.length)}const YR=55296,JR=57343;function Gc(t){const e=t.charCodeAt(0);return e>=YR&&e<=JR}function rs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const ay="__name__";class Zt{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&K(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Zt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Zt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Zt.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ne(e.length,n.length)}static compareSegments(e,n){const r=Zt.isNumericId(e),i=Zt.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Zt.extractNumericId(e).compare(Zt.extractNumericId(n)):sd(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return fr.fromString(e.substring(4,e.length-2))}}class ve extends Zt{construct(e,n,r){return new ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ve(n)}static emptyPath(){return new ve([])}}const XR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends Zt{construct(e,n,r){return new $e(e,n,r)}static isValidIdentifier(e){return XR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ay}static keyField(){return new $e([ay])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new q(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new q(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $e(n)}static emptyPath(){return new $e([])}}/**
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
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(ve.fromString(e))}static fromName(e){return new W(ve.fromString(e).popFirst(5))}static empty(){return new W(ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new ve(e.slice()))}}/**
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
 */function ZR(t,e,n){if(!n)throw new q(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ek(t,e,n,r){if(e===!0&&r===!0)throw new q(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ly(t){if(!W.isDocumentKey(t))throw new q(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Bw(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Of(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K(12329,{type:typeof t})}function Fo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Of(t);throw new q(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function ke(t,e){const n={typeString:t};return e&&(n.value=e),n}function oa(t,e){if(!Bw(t))throw new q(V.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new q(V.INVALID_ARGUMENT,n);return!0}/**
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
 */const uy=-62135596800,cy=1e6;class fe{static now(){return fe.fromMillis(Date.now())}static fromDate(e){return fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*cy);return new fe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<uy)throw new q(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/cy}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:fe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(oa(e,fe._jsonSchema))return new fe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-uy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}fe._jsonSchemaVersion="firestore/timestamp/1.0",fe._jsonSchema={type:ke("string",fe._jsonSchemaVersion),seconds:ke("number"),nanoseconds:ke("number")};/**
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
 */class Y{static fromTimestamp(e){return new Y(e)}static min(){return new Y(new fe(0,0))}static max(){return new Y(new fe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Uo=-1;function tk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new fe(n+1,0):new fe(n,r));return new _r(i,W.empty(),e)}function nk(t){return new _r(t.readTime,t.key,Uo)}class _r{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new _r(Y.min(),W.empty(),Uo)}static max(){return new _r(Y.max(),W.empty(),Uo)}}function rk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
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
 */const ik="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ms(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==ik)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new L((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ok(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function gs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Nu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Nu.ce=-1;/**
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
 */const Df=-1;function bu(t){return t==null}function Ql(t){return t===0&&1/t==-1/0}function ak(t){return typeof t=="number"&&Number.isInteger(t)&&!Ql(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const $w="";function lk(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=hy(e)),e=uk(t.get(n),e);return hy(e)}function uk(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case $w:n+="";break;default:n+=s}}return n}function hy(t){return t+$w+""}/**
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
 */function dy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function hi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function qw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ee{constructor(e,n){this.comparator=e,this.root=n||Be.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $a(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $a(this.root,e,this.comparator,!1)}getReverseIterator(){return new $a(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $a(this.root,e,this.comparator,!0)}}class $a{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Be{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Be.RED,this.left=i??Be.EMPTY,this.right=s??Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Be(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Be.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw K(43730,{key:this.key,value:this.value});if(this.right.isRed())throw K(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw K(27949);return e+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw K(57766)}get value(){throw K(16141)}get color(){throw K(16727)}get left(){throw K(29726)}get right(){throw K(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new Be(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class De{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new fy(this.data.getIterator())}getIteratorFrom(e){return new fy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof De)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new De(this.comparator);return n.data=e,n}}class fy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Bt{constructor(e){this.fields=e,e.sort($e.comparator)}static empty(){return new Bt([])}unionWith(e){let n=new De($e.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return rs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Hw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class We{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Hw("Invalid base64 string: "+s):s}}(e);return new We(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new We(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}We.EMPTY_BYTE_STRING=new We("");const ck=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wr(t){if(oe(!!t,39018),typeof t=="string"){let e=0;const n=ck.exec(t);if(oe(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Er(t){return typeof t=="string"?We.fromBase64String(t):We.fromUint8Array(t)}/**
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
 */const Ww="server_timestamp",Gw="__type__",Kw="__previous_value__",Qw="__local_write_time__";function Lf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Gw])==null?void 0:r.stringValue)===Ww}function Ou(t){const e=t.mapValue.fields[Kw];return Lf(e)?Ou(e):e}function zo(t){const e=wr(t.mapValue.fields[Qw].timestampValue);return new fe(e.seconds,e.nanos)}/**
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
 */class hk{constructor(e,n,r,i,s,o,l,u,c,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=f}}const Yl="(default)";class Bo{constructor(e,n){this.projectId=e,this.database=n||Yl}static empty(){return new Bo("","")}get isDefaultDatabase(){return this.database===Yl}isEqual(e){return e instanceof Bo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Yw="__type__",Jw="__max__",qa={mapValue:{fields:{__type__:{stringValue:Jw}}}},Xw="__vector__",Jl="value";function Tr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Lf(t)?4:fk(t)?9007199254740991:dk(t)?10:11:K(28295,{value:t})}function hn(t,e){if(t===e)return!0;const n=Tr(t);if(n!==Tr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return zo(t).isEqual(zo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=wr(i.timestampValue),l=wr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Er(i.bytesValue).isEqual(Er(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ae(i.geoPointValue.latitude)===Ae(s.geoPointValue.latitude)&&Ae(i.geoPointValue.longitude)===Ae(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ae(i.integerValue)===Ae(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ae(i.doubleValue),l=Ae(s.doubleValue);return o===l?Ql(o)===Ql(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return rs(t.arrayValue.values||[],e.arrayValue.values||[],hn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(dy(o)!==dy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!hn(o[u],l[u])))return!1;return!0}(t,e);default:return K(52216,{left:t})}}function $o(t,e){return(t.values||[]).find(n=>hn(n,e))!==void 0}function is(t,e){if(t===e)return 0;const n=Tr(t),r=Tr(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ae(s.integerValue||s.doubleValue),u=Ae(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return py(t.timestampValue,e.timestampValue);case 4:return py(zo(t),zo(e));case 5:return sd(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Er(s),u=Er(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=ne(l[c],u[c]);if(f!==0)return f}return ne(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ne(Ae(s.latitude),Ae(o.latitude));return l!==0?l:ne(Ae(s.longitude),Ae(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return my(t.arrayValue,e.arrayValue);case 10:return function(s,o){var g,_,R,N;const l=s.fields||{},u=o.fields||{},c=(g=l[Jl])==null?void 0:g.arrayValue,f=(_=u[Jl])==null?void 0:_.arrayValue,m=ne(((R=c==null?void 0:c.values)==null?void 0:R.length)||0,((N=f==null?void 0:f.values)==null?void 0:N.length)||0);return m!==0?m:my(c,f)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===qa.mapValue&&o===qa.mapValue)return 0;if(s===qa.mapValue)return 1;if(o===qa.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=sd(u[m],f[m]);if(g!==0)return g;const _=is(l[u[m]],c[f[m]]);if(_!==0)return _}return ne(u.length,f.length)}(t.mapValue,e.mapValue);default:throw K(23264,{he:n})}}function py(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=wr(t),r=wr(e),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function my(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=is(n[i],r[i]);if(s)return s}return ne(n.length,r.length)}function ss(t){return od(t)}function od(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=wr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Er(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=od(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${od(n.fields[o])}`;return i+"}"}(t.mapValue):K(61005,{value:t})}function hl(t){switch(Tr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ou(t);return e?16+hl(e):16;case 5:return 2*t.stringValue.length;case 6:return Er(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+hl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return hi(r.fields,(s,o)=>{i+=s.length+hl(o)}),i}(t.mapValue);default:throw K(13486,{value:t})}}function ad(t){return!!t&&"integerValue"in t}function Vf(t){return!!t&&"arrayValue"in t}function gy(t){return!!t&&"nullValue"in t}function yy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function dl(t){return!!t&&"mapValue"in t}function dk(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Yw])==null?void 0:r.stringValue)===Xw}function ho(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return hi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ho(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ho(t.arrayValue.values[n]);return e}return{...t}}function fk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Jw}/**
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
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!dl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ho(n)}setAll(e){let n=$e.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=ho(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());dl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return hn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];dl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){hi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new kt(ho(this.value))}}function Zw(t){const e=[];return hi(t.fields,(n,r)=>{const i=new $e([n]);if(dl(r)){const s=Zw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Bt(e)}/**
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
 */class Ze{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ze(e,0,Y.min(),Y.min(),Y.min(),kt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ze(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new Ze(e,2,n,Y.min(),Y.min(),kt.empty(),0)}static newUnknownDocument(e,n){return new Ze(e,3,n,Y.min(),Y.min(),kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Xl{constructor(e,n){this.position=e,this.inclusive=n}}function vy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=is(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function _y(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!hn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Zl{constructor(e,n="asc"){this.field=e,this.dir=n}}function pk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class eE{}class be extends eE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new gk(e,n,r):n==="array-contains"?new _k(e,r):n==="in"?new wk(e,r):n==="not-in"?new Ek(e,r):n==="array-contains-any"?new Tk(e,r):new be(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new yk(e,r):new vk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(is(n,this.value)):n!==null&&Tr(this.value)===Tr(n)&&this.matchesComparison(is(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dn extends eE{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new dn(e,n)}matches(e){return tE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function tE(t){return t.op==="and"}function nE(t){return mk(t)&&tE(t)}function mk(t){for(const e of t.filters)if(e instanceof dn)return!1;return!0}function ld(t){if(t instanceof be)return t.field.canonicalString()+t.op.toString()+ss(t.value);if(nE(t))return t.filters.map(e=>ld(e)).join(",");{const e=t.filters.map(n=>ld(n)).join(",");return`${t.op}(${e})`}}function rE(t,e){return t instanceof be?function(r,i){return i instanceof be&&r.op===i.op&&r.field.isEqual(i.field)&&hn(r.value,i.value)}(t,e):t instanceof dn?function(r,i){return i instanceof dn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&rE(o,i.filters[l]),!0):!1}(t,e):void K(19439)}function iE(t){return t instanceof be?function(n){return`${n.field.canonicalString()} ${n.op} ${ss(n.value)}`}(t):t instanceof dn?function(n){return n.op.toString()+" {"+n.getFilters().map(iE).join(" ,")+"}"}(t):"Filter"}class gk extends be{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class yk extends be{constructor(e,n){super(e,"in",n),this.keys=sE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class vk extends be{constructor(e,n){super(e,"not-in",n),this.keys=sE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function sE(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class _k extends be{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Vf(n)&&$o(n.arrayValue,this.value)}}class wk extends be{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&$o(this.value.arrayValue,n)}}class Ek extends be{constructor(e,n){super(e,"not-in",n)}matches(e){if($o(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!$o(this.value.arrayValue,n)}}class Tk extends be{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Vf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>$o(this.value.arrayValue,r))}}/**
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
 */class Ik{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function wy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Ik(t,e,n,r,i,s,o)}function Mf(t){const e=J(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ld(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),bu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ss(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ss(r)).join(",")),e.Te=n}return e.Te}function jf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!pk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!rE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!_y(t.startAt,e.startAt)&&_y(t.endAt,e.endAt)}function ud(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Du{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Sk(t,e,n,r,i,s,o,l){return new Du(t,e,n,r,i,s,o,l)}function Ff(t){return new Du(t)}function Ey(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Ak(t){return t.collectionGroup!==null}function fo(t){const e=J(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new De($e.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new Zl(s,r))}),n.has($e.keyField().canonicalString())||e.Ie.push(new Zl($e.keyField(),r))}return e.Ie}function on(t){const e=J(t);return e.Ee||(e.Ee=xk(e,fo(t))),e.Ee}function xk(t,e){if(t.limitType==="F")return wy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Zl(i.field,s)});const n=t.endAt?new Xl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Xl(t.startAt.position,t.startAt.inclusive):null;return wy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function cd(t,e,n){return new Du(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Lu(t,e){return jf(on(t),on(e))&&t.limitType===e.limitType}function oE(t){return`${Mf(on(t))}|lt:${t.limitType}`}function Ei(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>iE(i)).join(", ")}]`),bu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ss(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ss(i)).join(",")),`Target(${r})`}(on(t))}; limitType=${t.limitType})`}function Vu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):W.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of fo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=vy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,fo(r),i)||r.endAt&&!function(o,l,u){const c=vy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,fo(r),i))}(t,e)}function Ck(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function aE(t){return(e,n)=>{let r=!1;for(const i of fo(t)){const s=Rk(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Rk(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?is(u,c):K(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K(19790,{direction:t.dir})}}/**
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
 */class di{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){hi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return qw(this.inner)}size(){return this.innerSize}}/**
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
 */const kk=new Ee(W.comparator);function bn(){return kk}const lE=new Ee(W.comparator);function Js(...t){let e=lE;for(const n of t)e=e.insert(n.key,n);return e}function uE(t){let e=lE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function $r(){return po()}function cE(){return po()}function po(){return new di(t=>t.toString(),(t,e)=>t.isEqual(e))}const Pk=new Ee(W.comparator),Nk=new De(W.comparator);function re(...t){let e=Nk;for(const n of t)e=e.add(n);return e}const bk=new De(ne);function Ok(){return bk}/**
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
 */function Uf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ql(e)?"-0":e}}function hE(t){return{integerValue:""+t}}function Dk(t,e){return ak(e)?hE(e):Uf(t,e)}/**
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
 */class Mu{constructor(){this._=void 0}}function Lk(t,e,n){return t instanceof eu?function(i,s){const o={fields:{[Gw]:{stringValue:Ww},[Qw]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Lf(s)&&(s=Ou(s)),s&&(o.fields[Kw]=s),{mapValue:o}}(n,e):t instanceof qo?fE(t,e):t instanceof Ho?pE(t,e):function(i,s){const o=dE(i,s),l=Ty(o)+Ty(i.Ae);return ad(o)&&ad(i.Ae)?hE(l):Uf(i.serializer,l)}(t,e)}function Vk(t,e,n){return t instanceof qo?fE(t,e):t instanceof Ho?pE(t,e):n}function dE(t,e){return t instanceof tu?function(r){return ad(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class eu extends Mu{}class qo extends Mu{constructor(e){super(),this.elements=e}}function fE(t,e){const n=mE(e);for(const r of t.elements)n.some(i=>hn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ho extends Mu{constructor(e){super(),this.elements=e}}function pE(t,e){let n=mE(e);for(const r of t.elements)n=n.filter(i=>!hn(i,r));return{arrayValue:{values:n}}}class tu extends Mu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Ty(t){return Ae(t.integerValue||t.doubleValue)}function mE(t){return Vf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Mk(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof qo&&i instanceof qo||r instanceof Ho&&i instanceof Ho?rs(r.elements,i.elements,hn):r instanceof tu&&i instanceof tu?hn(r.Ae,i.Ae):r instanceof eu&&i instanceof eu}(t.transform,e.transform)}class jk{constructor(e,n){this.version=e,this.transformResults=n}}class Sn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Sn}static exists(e){return new Sn(void 0,e)}static updateTime(e){return new Sn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ju{}function gE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new vE(t.key,Sn.none()):new aa(t.key,t.data,Sn.none());{const n=t.data,r=kt.empty();let i=new De($e.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new fi(t.key,r,new Bt(i.toArray()),Sn.none())}}function Fk(t,e,n){t instanceof aa?function(i,s,o){const l=i.value.clone(),u=Sy(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof fi?function(i,s,o){if(!fl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Sy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(yE(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function mo(t,e,n,r){return t instanceof aa?function(s,o,l,u){if(!fl(s.precondition,o))return l;const c=s.value.clone(),f=Ay(s.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof fi?function(s,o,l,u){if(!fl(s.precondition,o))return l;const c=Ay(s.fieldTransforms,u,o),f=o.data;return f.setAll(yE(s)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,o,l){return fl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Uk(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=dE(r.transform,i||null);s!=null&&(n===null&&(n=kt.empty()),n.set(r.field,s))}return n||null}function Iy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&rs(r,i,(s,o)=>Mk(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class aa extends ju{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class fi extends ju{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function yE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Sy(t,e,n){const r=new Map;oe(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,Vk(o,l,n[i]))}return r}function Ay(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Lk(s,o,e))}return r}class vE extends ju{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zk extends ju{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Bk{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Fk(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=mo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=mo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=cE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=gE(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&rs(this.mutations,e.mutations,(n,r)=>Iy(n,r))&&rs(this.baseMutations,e.baseMutations,(n,r)=>Iy(n,r))}}class zf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){oe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return Pk}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new zf(e,n,r,i)}}/**
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
 */class $k{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class qk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ce,ie;function Hk(t){switch(t){case V.OK:return K(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return K(15467,{code:t})}}function _E(t){if(t===void 0)return Nn("GRPC error has no .code"),V.UNKNOWN;switch(t){case Ce.OK:return V.OK;case Ce.CANCELLED:return V.CANCELLED;case Ce.UNKNOWN:return V.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return V.INTERNAL;case Ce.UNAVAILABLE:return V.UNAVAILABLE;case Ce.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Ce.NOT_FOUND:return V.NOT_FOUND;case Ce.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Ce.ABORTED:return V.ABORTED;case Ce.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Ce.DATA_LOSS:return V.DATA_LOSS;default:return K(39323,{code:t})}}(ie=Ce||(Ce={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Wk(){return new TextEncoder}/**
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
 */const Gk=new fr([4294967295,4294967295],0);function xy(t){const e=Wk().encode(t),n=new Dw;return n.update(e),new Uint8Array(n.digest())}function Cy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new fr([n,r],0),new fr([i,s],0)]}class Bf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Xs(`Invalid padding: ${n}`);if(r<0)throw new Xs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Xs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Xs(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=fr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(fr.fromNumber(r)));return i.compare(Gk)===1&&(i=new fr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=xy(e),[r,i]=Cy(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Bf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=xy(e),[r,i]=Cy(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Xs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Fu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,la.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Fu(Y.min(),i,new Ee(ne),bn(),re())}}class la{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new la(r,n,re(),re(),re())}}/**
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
 */class pl{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class wE{constructor(e,n){this.targetId=e,this.Ce=n}}class EE{constructor(e,n,r=We.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Ry{constructor(){this.ve=0,this.Fe=ky(),this.Me=We.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=re(),n=re(),r=re();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K(38017,{changeType:s})}}),new la(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=ky()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,oe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Kk{constructor(e){this.Ge=e,this.ze=new Map,this.je=bn(),this.Je=Ha(),this.He=Ha(),this.Ye=new Ee(ne)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:K(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(ud(s))if(r===0){const o=new W(s.path);this.et(n,o,Ze.newNoDocument(o,Y.min()))}else oe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Er(r).toUint8Array()}catch(u){if(u instanceof Hw)return ns("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Bf(o,i,s)}catch(u){return ns(u instanceof Xs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&ud(l.target)){const u=new W(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,Ze.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=re();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Fu(e,n,this.Ye,this.je,r);return this.je=bn(),this.Je=Ha(),this.He=Ha(),this.Ye=new Ee(ne),i}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Ry,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new De(ne),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new De(ne),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Ry),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Ha(){return new Ee(W.comparator)}function ky(){return new Ee(W.comparator)}const Qk={asc:"ASCENDING",desc:"DESCENDING"},Yk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Jk={and:"AND",or:"OR"};class Xk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function hd(t,e){return t.useProto3Json||bu(e)?e:{value:e}}function nu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function TE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Zk(t,e){return nu(t,e.toTimestamp())}function an(t){return oe(!!t,49232),Y.fromTimestamp(function(n){const r=wr(n);return new fe(r.seconds,r.nanos)}(t))}function $f(t,e){return dd(t,e).canonicalString()}function dd(t,e){const n=function(i){return new ve(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function IE(t){const e=ve.fromString(t);return oe(RE(e),10190,{key:e.toString()}),e}function fd(t,e){return $f(t.databaseId,e.path)}function Kc(t,e){const n=IE(e);if(n.get(1)!==t.databaseId.projectId)throw new q(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(AE(n))}function SE(t,e){return $f(t.databaseId,e)}function eP(t){const e=IE(t);return e.length===4?ve.emptyPath():AE(e)}function pd(t){return new ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function AE(t){return oe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Py(t,e,n){return{name:fd(t,e),fields:n.value.mapValue.fields}}function tP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(oe(f===void 0||typeof f=="string",58123),We.fromBase64String(f||"")):(oe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),We.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?V.UNKNOWN:_E(c.code);return new q(f,c.message||"")}(o);n=new EE(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Kc(t,r.document.name),s=an(r.document.updateTime),o=r.document.createTime?an(r.document.createTime):Y.min(),l=new kt({mapValue:{fields:r.document.fields}}),u=Ze.newFoundDocument(i,s,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new pl(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Kc(t,r.document),s=r.readTime?an(r.readTime):Y.min(),o=Ze.newNoDocument(i,s),l=r.removedTargetIds||[];n=new pl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Kc(t,r.document),s=r.removedTargetIds||[];n=new pl([],s,i,null)}else{if(!("filter"in e))return K(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new qk(i,s),l=r.targetId;n=new wE(l,o)}}return n}function nP(t,e){let n;if(e instanceof aa)n={update:Py(t,e.key,e.value)};else if(e instanceof vE)n={delete:fd(t,e.key)};else if(e instanceof fi)n={update:Py(t,e.key,e.data),updateMask:hP(e.fieldMask)};else{if(!(e instanceof zk))return K(16599,{Vt:e.type});n={verify:fd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof eu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof qo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ho)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof tu)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw K(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Zk(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K(27497)}(t,e.precondition)),n}function rP(t,e){return t&&t.length>0?(oe(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?an(i.updateTime):an(s);return o.isEqual(Y.min())&&(o=an(s)),new jk(o,i.transformResults||[])}(n,e))):[]}function iP(t,e){return{documents:[SE(t,e.path)]}}function sP(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=SE(t,i);const s=function(c){if(c.length!==0)return CE(dn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(f=>function(g){return{field:Ti(g.field),direction:lP(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=hd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function oP(t){let e=eP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){oe(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const g=xE(m);return g instanceof dn&&nE(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(R){return new Zl(Ii(R.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,bu(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,_=m.values||[];return new Xl(_,g)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const g=!m.before,_=m.values||[];return new Xl(_,g)}(n.endAt)),Sk(e,i,o,s,l,"F",u,c)}function aP(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function xE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ii(n.unaryFilter.field);return be.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ii(n.unaryFilter.field);return be.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ii(n.unaryFilter.field);return be.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ii(n.unaryFilter.field);return be.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return K(61313);default:return K(60726)}}(t):t.fieldFilter!==void 0?function(n){return be.create(Ii(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return K(58110);default:return K(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return dn.create(n.compositeFilter.filters.map(r=>xE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K(1026)}}(n.compositeFilter.op))}(t):K(30097,{filter:t})}function lP(t){return Qk[t]}function uP(t){return Yk[t]}function cP(t){return Jk[t]}function Ti(t){return{fieldPath:t.canonicalString()}}function Ii(t){return $e.fromServerFormat(t.fieldPath)}function CE(t){return t instanceof be?function(n){if(n.op==="=="){if(yy(n.value))return{unaryFilter:{field:Ti(n.field),op:"IS_NAN"}};if(gy(n.value))return{unaryFilter:{field:Ti(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(yy(n.value))return{unaryFilter:{field:Ti(n.field),op:"IS_NOT_NAN"}};if(gy(n.value))return{unaryFilter:{field:Ti(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ti(n.field),op:uP(n.op),value:n.value}}}(t):t instanceof dn?function(n){const r=n.getFilters().map(i=>CE(i));return r.length===1?r[0]:{compositeFilter:{op:cP(n.op),filters:r}}}(t):K(54877,{filter:t})}function hP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function RE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class nr{constructor(e,n,r,i,s=Y.min(),o=Y.min(),l=We.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new nr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class dP{constructor(e){this.yt=e}}function fP(t){const e=oP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?cd(e,e.limit,"L"):e}/**
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
 */class pP{constructor(){this.Cn=new mP}addToCollectionParentIndex(e,n){return this.Cn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(_r.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(_r.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class mP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new De(ve.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new De(ve.comparator)).toArray()}}/**
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
 */const Ny={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},kE=41943040;class ct{static withCacheSize(e){return new ct(e,ct.DEFAULT_COLLECTION_PERCENTILE,ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */ct.DEFAULT_COLLECTION_PERCENTILE=10,ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ct.DEFAULT=new ct(kE,ct.DEFAULT_COLLECTION_PERCENTILE,ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ct.DISABLED=new ct(-1,0,0);/**
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
 */class os{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new os(0)}static cr(){return new os(-1)}}/**
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
 */const by="LruGarbageCollector",gP=1048576;function Oy([t,e],[n,r]){const i=ne(t,n);return i===0?ne(e,r):i}class yP{constructor(e){this.Ir=e,this.buffer=new De(Oy),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Oy(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class vP{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){B(by,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){gs(n)?B(by,"Ignoring IndexedDB error during garbage collection: ",n):await ms(n)}await this.Vr(3e5)})}}class _P{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(Nu.ce);const r=new yP(n);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(Ny)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ny):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,i,s,o,l,u,c;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(r=m,l=Date.now(),this.removeTargets(e,r,n))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(c=Date.now(),wi()<=te.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(c-u)+`ms
Total Duration: ${c-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function wP(t,e){return new _P(t,e)}/**
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
 */class EP{constructor(){this.changes=new di(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class TP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class IP{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&mo(r.mutation,i,Bt.empty(),fe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=$r();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Js();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=$r();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=bn();const o=po(),l=function(){return po()}();return n.forEach((u,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof fi)?s=s.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),mo(f.mutation,c,f.mutation.getFieldMask(),fe.now())):o.set(c.key,Bt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>l.set(c,new TP(f,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=po();let i=new Ee((o,l)=>o-l),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||Bt.empty();f=l.applyToLocalView(c,f),r.set(u,f);const m=(i.get(l.batchId)||re()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,m=cE();f.forEach(g=>{if(!s.has(g)){const _=gE(n.get(g),r.get(g));_!==null&&m.set(g,_),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,m))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Ak(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):L.resolve($r());let l=Uo,u=s;return o.next(c=>L.forEach(c,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,re())).next(f=>({batchId:l,changes:uE(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let i=Js();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Js();return this.indexManager.getCollectionParents(e,s).next(l=>L.forEach(l,u=>{const c=function(m,g){return new Du(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,Ze.newInvalidDocument(f)))});let l=Js();return o.forEach((u,c)=>{const f=s.get(u);f!==void 0&&mo(f.mutation,c,Bt.empty(),fe.now()),Vu(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class SP{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return L.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:an(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(i){return{name:i.name,query:fP(i.bundledQuery),readTime:an(i.readTime)}}(n)),L.resolve()}}/**
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
 */class AP{constructor(){this.overlays=new Ee(W.comparator),this.qr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=$r();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=$r(),s=n.length+1,o=new W(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ee((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=s.get(c.largestBatchId);f===null&&(f=$r(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=$r(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=i)););return L.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new $k(n,r));let s=this.qr.get(n);s===void 0&&(s=re(),this.qr.set(n,s)),this.qr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class xP{constructor(){this.sessionToken=We.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
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
 */class qf{constructor(){this.Qr=new De(Ve.$r),this.Ur=new De(Ve.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Ve(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new Ve(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new W(new ve([])),r=new Ve(n,e),i=new Ve(n,e+1),s=[];return this.Ur.forEachInRange([r,i],o=>{this.Gr(o),s.push(o.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new W(new ve([])),r=new Ve(n,e),i=new Ve(n,e+1);let s=re();return this.Ur.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ve(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ve{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return W.comparator(e.key,n.key)||ne(e.Yr,n.Yr)}static Kr(e,n){return ne(e.Yr,n.Yr)||W.comparator(e.key,n.key)}}/**
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
 */class CP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new De(Ve.$r)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Bk(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new Ve(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ei(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?Df:this.tr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ve(n,0),i=new Ve(n,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],o=>{const l=this.Xr(o.Yr);s.push(l)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new De(ne);return n.forEach(i=>{const s=new Ve(i,0),o=new Ve(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],l=>{r=r.add(l.Yr)})}),L.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;W.isDocumentKey(s)||(s=s.child(""));const o=new Ve(new W(s),0);let l=new De(ne);return this.Zr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Yr)),!0)},o),L.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){oe(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return L.forEach(n.mutations,i=>{const s=new Ve(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new Ve(n,0),i=this.Zr.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class RP{constructor(e){this.ri=e,this.docs=function(){return new Ee(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():Ze.newInvalidDocument(n))}getEntries(e,n){let r=bn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ze.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=bn();const o=n.path,l=new W(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||rk(nk(f),r)<=0||(i.has(f.key)||Vu(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,i){K(9500)}ii(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new kP(this)}getSize(e){return L.resolve(this.size)}}class kP extends EP{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class PP{constructor(e){this.persistence=e,this.si=new di(n=>Mf(n),jf),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.oi=0,this._i=new qf,this.targetCount=0,this.ai=os.ur()}forEachTarget(e,n){return this.si.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),L.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new os(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Pr(n),L.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this._i.containsKey(n))}}/**
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
 */class PE{constructor(e,n){this.ui={},this.overlays={},this.ci=new Nu(0),this.li=!1,this.li=!0,this.hi=new xP,this.referenceDelegate=e(this),this.Pi=new PP(this),this.indexManager=new pP,this.remoteDocumentCache=function(i){return new RP(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new dP(n),this.Ii=new SP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new AP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new CP(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){B("MemoryPersistence","Starting transaction:",e);const i=new NP(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,n){return L.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class NP extends sk{constructor(e){super(),this.currentSequenceNumber=e}}class Hf{constructor(e){this.persistence=e,this.Ri=new qf,this.Vi=null}static mi(e){return new Hf(e)}get fi(){if(this.Vi)return this.Vi;throw K(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.fi,r=>{const i=W.fromPath(r);return this.gi(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return L.or([()=>L.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class ru{constructor(e,n){this.persistence=e,this.pi=new di(r=>lk(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=wP(this,n)}static mi(e,n){return new ru(e,n)}Ei(){}di(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return L.forEach(this.pi,(r,i)=>this.br(e,r,i).next(s=>s?L.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,s.removeEntry(o,Y.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),L.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=hl(e.data.value)),n}br(e,n,r){return L.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return L.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Wf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=i}static As(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Wf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class bP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class OP{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return uA()?8:ok(nt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ys(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ws(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new bP;return this.Ss(e,n,o).next(l=>{if(s.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>s.result)}bs(e,n,r,i){return r.documentReadCount<this.fs?(wi()<=te.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",Ei(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),L.resolve()):(wi()<=te.DEBUG&&B("QueryEngine","Query:",Ei(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(wi()<=te.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",Ei(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,on(n))):L.resolve())}ys(e,n){if(Ey(n))return L.resolve(null);let r=on(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=cd(n,null,"F"),r=on(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ds(n,l);return this.Cs(n,c,o,u.readTime)?this.ys(e,cd(n,null,"F")):this.vs(e,c,n,u)}))})))}ws(e,n,r,i){return Ey(n)||i.isEqual(Y.min())?L.resolve(null):this.ps.getDocuments(e,r).next(s=>{const o=this.Ds(n,s);return this.Cs(n,o,r,i)?L.resolve(null):(wi()<=te.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ei(n)),this.vs(e,o,n,tk(i,Uo)).next(l=>l))})}Ds(e,n){let r=new De(aE(e));return n.forEach((i,s)=>{Vu(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,n,r){return wi()<=te.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",Ei(n)),this.ps.getDocumentsMatchingQuery(e,n,_r.min(),r)}vs(e,n,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const Gf="LocalStore",DP=3e8;class LP{constructor(e,n,r,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new Ee(ne),this.xs=new di(s=>Mf(s),jf),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new IP(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function VP(t,e,n,r){return new LP(t,e,n,r)}async function NE(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=re();for(const c of i){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of s){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ls:c,removedBatchIds:o,addedBatchIds:l}))})})}function MP(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const m=c.batch,g=m.keys();let _=L.resolve();return g.forEach(R=>{_=_.next(()=>f.getEntry(u,R)).next(N=>{const D=c.docVersions.get(R);oe(D!==null,48541),N.version.compareTo(D)<0&&(m.applyToRemoteDocument(N,c),N.isValidDocument()&&(N.setReadTime(c.commitVersion),f.addEntry(N)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=re();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function bE(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function jP(t,e){const n=J(t),r=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const l=[];e.targetChanges.forEach((f,m)=>{const g=i.get(m);if(!g)return;l.push(n.Pi.removeMatchingKeys(s,f.removedDocuments,m).next(()=>n.Pi.addMatchingKeys(s,f.addedDocuments,m)));let _=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?_=_.withResumeToken(We.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),i=i.insert(m,_),function(N,D,S){return N.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=DP?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(g,_,f)&&l.push(n.Pi.updateTargetData(s,_))});let u=bn(),c=re();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(FP(s,o,e.documentUpdates).next(f=>{u=f.ks,c=f.qs})),!r.isEqual(Y.min())){const f=n.Pi.getLastRemoteSnapshotVersion(s).next(m=>n.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return L.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.Ms=i,s))}function FP(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=bn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):B(Gf,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{ks:o,qs:i}})}function UP(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Df),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function zP(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Pi.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):n.Pi.allocateTargetId(r).next(o=>(i=new nr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function md(t,e,n){const r=J(t),i=r.Ms.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!gs(o))throw o;B(Gf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function Dy(t,e,n){const r=J(t);let i=Y.min(),s=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const m=J(u),g=m.xs.get(f);return g!==void 0?L.resolve(m.Ms.get(g)):m.Pi.getTargetData(c,f)}(r,o,on(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:re())).next(l=>(BP(r,Ck(e),l),{documents:l,Qs:s})))}function BP(t,e,n){let r=t.Os.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Os.set(e,r)}class Ly{constructor(){this.activeTargetIds=Ok()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $P{constructor(){this.Mo=new Ly,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Ly,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class qP{Oo(e){}shutdown(){}}/**
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
 */const Vy="ConnectivityMonitor";class My{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){B(Vy,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){B(Vy,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Wa=null;function gd(){return Wa===null?Wa=function(){return 268435456+Math.round(2147483648*Math.random())}():Wa++,"0x"+Wa.toString(16)}/**
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
 */const Qc="RestConnection",HP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class WP{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===Yl?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,n,r,i,s){const o=gd(),l=this.zo(e,n.toUriEncodedString());B(Qc,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,i,s);const{host:c}=new URL(l),f=hs(c);return this.Jo(e,l,u,r,f).then(m=>(B(Qc,`Received RPC '${e}' ${o}: `,m),m),m=>{throw ns(Qc,`RPC '${e}' ${o} failed with error: `,m,"url: ",l,"request:",r),m})}Ho(e,n,r,i,s,o){return this.Go(e,n,r,i,s)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ps}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}zo(e,n){const r=HP[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class GP{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Ye="WebChannelConnection";class KP extends WP{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const o=gd();return new Promise((l,u)=>{const c=new Lw;c.setWithCredentials(!0),c.listenOnce(Vw.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case cl.NO_ERROR:const m=c.getResponseJson();B(Ye,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(m)),l(m);break;case cl.TIMEOUT:B(Ye,`RPC '${e}' ${o} timed out`),u(new q(V.DEADLINE_EXCEEDED,"Request time out"));break;case cl.HTTP_ERROR:const g=c.getStatus();if(B(Ye,`RPC '${e}' ${o} failed with status:`,g,"response text:",c.getResponseText()),g>0){let _=c.getResponseJson();Array.isArray(_)&&(_=_[0]);const R=_==null?void 0:_.error;if(R&&R.status&&R.message){const N=function(S){const w=S.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(w)>=0?w:V.UNKNOWN}(R.status);u(new q(N,R.message))}else u(new q(V.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new q(V.UNAVAILABLE,"Connection failed."));break;default:K(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{B(Ye,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);B(Ye,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",f,r,15)})}T_(e,n,r){const i=gd(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Fw(),l=jw(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");B(Ye,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=o.createWebChannel(f,u);this.I_(m);let g=!1,_=!1;const R=new GP({Yo:D=>{_?B(Ye,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(g||(B(Ye,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),B(Ye,`RPC '${e}' stream ${i} sending:`,D),m.send(D))},Zo:()=>m.close()}),N=(D,S,w)=>{D.listen(S,A=>{try{w(A)}catch(O){setTimeout(()=>{throw O},0)}})};return N(m,Ys.EventType.OPEN,()=>{_||(B(Ye,`RPC '${e}' stream ${i} transport opened.`),R.o_())}),N(m,Ys.EventType.CLOSE,()=>{_||(_=!0,B(Ye,`RPC '${e}' stream ${i} transport closed`),R.a_(),this.E_(m))}),N(m,Ys.EventType.ERROR,D=>{_||(_=!0,ns(Ye,`RPC '${e}' stream ${i} transport errored. Name:`,D.name,"Message:",D.message),R.a_(new q(V.UNAVAILABLE,"The operation could not be completed")))}),N(m,Ys.EventType.MESSAGE,D=>{var S;if(!_){const w=D.data[0];oe(!!w,16349);const A=w,O=(A==null?void 0:A.error)||((S=A[0])==null?void 0:S.error);if(O){B(Ye,`RPC '${e}' stream ${i} received error:`,O);const j=O.status;let F=function(T){const x=Ce[T];if(x!==void 0)return _E(x)}(j),E=O.message;F===void 0&&(F=V.INTERNAL,E="Unknown error status: "+j+" with message "+O.message),_=!0,R.a_(new q(F,E)),m.close()}else B(Ye,`RPC '${e}' stream ${i} received:`,w),R.u_(w)}}),N(l,Mw.STAT_EVENT,D=>{D.stat===id.PROXY?B(Ye,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===id.NOPROXY&&B(Ye,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.__()},0),R}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Yc(){return typeof document<"u"?document:null}/**
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
 */function Uu(t){return new Xk(t,!0)}/**
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
 */class OE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const jy="PersistentStream";class DE{constructor(e,n,r,i,s,o,l,u){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new OE(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Nn(n.toString()),Nn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new q(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return B(jy,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(B(jy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class QP extends DE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=tP(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?an(o.readTime):Y.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=pd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=ud(u)?{documents:iP(s,u)}:{query:sP(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=TE(s,o.resumeToken);const c=hd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=nu(s,o.snapshotVersion.toTimestamp());const c=hd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=aP(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=pd(this.serializer),n.removeTarget=e,this.q_(n)}}class YP extends DE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return oe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,oe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){oe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=rP(e.writeResults,e.commitTime),r=an(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=pd(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>nP(this.serializer,r))};this.q_(n)}}/**
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
 */class JP{}class XP extends JP{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new q(V.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Go(e,dd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(V.UNKNOWN,s.toString())})}Ho(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,dd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(V.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class ZP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Nn(n),this.aa=!1):B("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const ni="RemoteStore";class eN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{pi(this)&&(B(ni,"Restarting streams for network reachability change."),await async function(u){const c=J(u);c.Ea.add(4),await ua(c),c.Ra.set("Unknown"),c.Ea.delete(4),await zu(c)}(this))})}),this.Ra=new ZP(r,i)}}async function zu(t){if(pi(t))for(const e of t.da)await e(!0)}async function ua(t){for(const e of t.da)await e(!1)}function LE(t,e){const n=J(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Jf(n)?Yf(n):ys(n).O_()&&Qf(n,e))}function Kf(t,e){const n=J(t),r=ys(n);n.Ia.delete(e),r.O_()&&VE(n,e),n.Ia.size===0&&(r.O_()?r.L_():pi(n)&&n.Ra.set("Unknown"))}function Qf(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ys(t).Y_(e)}function VE(t,e){t.Va.Ue(e),ys(t).Z_(e)}function Yf(t){t.Va=new Kk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ys(t).start(),t.Ra.ua()}function Jf(t){return pi(t)&&!ys(t).x_()&&t.Ia.size>0}function pi(t){return J(t).Ea.size===0}function ME(t){t.Va=void 0}async function tN(t){t.Ra.set("Online")}async function nN(t){t.Ia.forEach((e,n)=>{Qf(t,e)})}async function rN(t,e){ME(t),Jf(t)?(t.Ra.ha(e),Yf(t)):t.Ra.set("Unknown")}async function iN(t,e,n){if(t.Ra.set("Online"),e instanceof EE&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))}(t,e)}catch(r){B(ni,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await iu(t,r)}else if(e instanceof pl?t.Va.Ze(e):e instanceof wE?t.Va.st(e):t.Va.tt(e),!n.isEqual(Y.min()))try{const r=await bE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Va.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ia.get(c);f&&s.Ia.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=s.Ia.get(u);if(!f)return;s.Ia.set(u,f.withResumeToken(We.EMPTY_BYTE_STRING,f.snapshotVersion)),VE(s,u);const m=new nr(f.target,u,c,f.sequenceNumber);Qf(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){B(ni,"Failed to raise snapshot:",r),await iu(t,r)}}async function iu(t,e,n){if(!gs(e))throw e;t.Ea.add(1),await ua(t),t.Ra.set("Offline"),n||(n=()=>bE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B(ni,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await zu(t)})}function jE(t,e){return e().catch(n=>iu(t,n,e))}async function Bu(t){const e=J(t),n=Ir(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Df;for(;sN(e);)try{const i=await UP(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,oN(e,i)}catch(i){await iu(e,i)}FE(e)&&UE(e)}function sN(t){return pi(t)&&t.Ta.length<10}function oN(t,e){t.Ta.push(e);const n=Ir(t);n.O_()&&n.X_&&n.ea(e.mutations)}function FE(t){return pi(t)&&!Ir(t).x_()&&t.Ta.length>0}function UE(t){Ir(t).start()}async function aN(t){Ir(t).ra()}async function lN(t){const e=Ir(t);for(const n of t.Ta)e.ea(n.mutations)}async function uN(t,e,n){const r=t.Ta.shift(),i=zf.from(r,e,n);await jE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Bu(t)}async function cN(t,e){e&&Ir(t).X_&&await async function(r,i){if(function(o){return Hk(o)&&o!==V.ABORTED}(i.code)){const s=r.Ta.shift();Ir(r).B_(),await jE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Bu(r)}}(t,e),FE(t)&&UE(t)}async function Fy(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),B(ni,"RemoteStore received new credentials");const r=pi(n);n.Ea.add(3),await ua(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await zu(n)}async function hN(t,e){const n=J(t);e?(n.Ea.delete(2),await zu(n)):e||(n.Ea.add(2),await ua(n),n.Ra.set("Unknown"))}function ys(t){return t.ma||(t.ma=function(n,r,i){const s=J(n);return s.sa(),new QP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:tN.bind(null,t),t_:nN.bind(null,t),r_:rN.bind(null,t),H_:iN.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Jf(t)?Yf(t):t.Ra.set("Unknown")):(await t.ma.stop(),ME(t))})),t.ma}function Ir(t){return t.fa||(t.fa=function(n,r,i){const s=J(n);return s.sa(),new YP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:aN.bind(null,t),r_:cN.bind(null,t),ta:lN.bind(null,t),na:uN.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await Bu(t)):(await t.fa.stop(),t.Ta.length>0&&(B(ni,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class Xf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Xf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zf(t,e){if(Nn("AsyncQueue",`${e}: ${t}`),gs(t))return new q(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Wi{static emptySet(e){return new Wi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=Js(),this.sortedSet=new Ee(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Wi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Wi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Uy{constructor(){this.ga=new Ee(W.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):K(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class as{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new as(e,n,Wi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Lu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class dN{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class fN{constructor(){this.queries=zy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=J(n),s=i.queries;i.queries=zy(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new q(V.ABORTED,"Firestore shutting down"))}}function zy(){return new di(t=>oE(t),Lu)}async function pN(t,e){const n=J(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new dN,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Zf(o,`Initialization of query '${Ei(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&ep(n)}async function mN(t,e){const n=J(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function gN(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&ep(n)}function yN(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function ep(t){t.Ca.forEach(e=>{e.next()})}var yd,By;(By=yd||(yd={})).Ma="default",By.Cache="cache";class vN{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new as(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=as.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==yd.Cache}}/**
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
 */class zE{constructor(e){this.key=e}}class BE{constructor(e){this.key=e}}class _N{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=re(),this.mutatedKeys=re(),this.eu=aE(e),this.tu=new Wi(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new Uy,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const g=i.get(f),_=Vu(this.query,m)?m:null,R=!!g&&this.mutatedKeys.has(g.key),N=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let D=!1;g&&_?g.data.isEqual(_.data)?R!==N&&(r.track({type:3,doc:_}),D=!0):this.su(g,_)||(r.track({type:2,doc:_}),D=!0,(u&&this.eu(_,u)>0||c&&this.eu(_,c)<0)&&(l=!0)):!g&&_?(r.track({type:0,doc:_}),D=!0):g&&!_&&(r.track({type:1,doc:g}),D=!0,(u||c)&&(l=!0)),D&&(_?(o=o.add(_),s=N?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,m)=>function(_,R){const N=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K(20277,{Rt:D})}};return N(_)-N(R)}(f.type,m.type)||this.eu(f.doc,m.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Xa.size===0&&this.current&&!i?1:0,c=u!==this.Za;return this.Za=u,o.length!==0||c?{snapshot:new as(this.query,e.tu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Uy,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=re(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new BE(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new zE(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=re();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return as.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const tp="SyncEngine";class wN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class EN{constructor(e){this.key=e,this.hu=!1}}class TN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new di(l=>oE(l),Lu),this.Iu=new Map,this.Eu=new Set,this.du=new Ee(W.comparator),this.Au=new Map,this.Ru=new qf,this.Vu={},this.mu=new Map,this.fu=os.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function IN(t,e,n=!0){const r=KE(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await $E(r,e,n,!0),i}async function SN(t,e){const n=KE(t);await $E(n,e,!0,!1)}async function $E(t,e,n,r){const i=await zP(t.localStore,on(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await AN(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&LE(t.remoteStore,i),l}async function AN(t,e,n,r,i){t.pu=(m,g,_)=>async function(N,D,S,w){let A=D.view.ru(S);A.Cs&&(A=await Dy(N.localStore,D.query,!1).then(({documents:E})=>D.view.ru(E,A)));const O=w&&w.targetChanges.get(D.targetId),j=w&&w.targetMismatches.get(D.targetId)!=null,F=D.view.applyChanges(A,N.isPrimaryClient,O,j);return qy(N,D.targetId,F.au),F.snapshot}(t,m,g,_);const s=await Dy(t.localStore,e,!0),o=new _N(e,s.Qs),l=o.ru(s.documents),u=la.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);qy(t,n,c.au);const f=new wN(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function xN(t,e,n){const r=J(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!Lu(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await md(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Kf(r.remoteStore,i.targetId),vd(r,i.targetId)}).catch(ms)):(vd(r,i.targetId),await md(r.localStore,i.targetId,!0))}async function CN(t,e){const n=J(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Kf(n.remoteStore,r.targetId))}async function RN(t,e,n){const r=LN(t);try{const i=await function(o,l){const u=J(o),c=fe.now(),f=l.reduce((_,R)=>_.add(R.key),re());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let R=bn(),N=re();return u.Ns.getEntries(_,f).next(D=>{R=D,R.forEach((S,w)=>{w.isValidDocument()||(N=N.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,R)).next(D=>{m=D;const S=[];for(const w of l){const A=Uk(w,m.get(w.key).overlayedDocument);A!=null&&S.push(new fi(w.key,A,Zw(A.value.mapValue),Sn.exists(!0)))}return u.mutationQueue.addMutationBatch(_,c,S,l)}).next(D=>{g=D;const S=D.applyToLocalDocumentSet(m,N);return u.documentOverlayCache.saveOverlays(_,D.batchId,S)})}).then(()=>({batchId:g.batchId,changes:uE(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Vu[o.currentUser.toKey()];c||(c=new Ee(ne)),c=c.insert(l,u),o.Vu[o.currentUser.toKey()]=c}(r,i.batchId,n),await ca(r,i.changes),await Bu(r.remoteStore)}catch(i){const s=Zf(i,"Failed to persist write");n.reject(s)}}async function qE(t,e){const n=J(t);try{const r=await jP(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(oe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?oe(o.hu,14607):i.removedDocuments.size>0&&(oe(o.hu,42227),o.hu=!1))}),await ca(n,r,e)}catch(r){await ms(r)}}function $y(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=J(o);u.onlineState=l;let c=!1;u.queries.forEach((f,m)=>{for(const g of m.Sa)g.va(l)&&(c=!0)}),c&&ep(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function kN(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Ee(W.comparator);o=o.insert(s,Ze.newNoDocument(s,Y.min()));const l=re().add(s),u=new Fu(Y.min(),new Map,new Ee(ne),o,l);await qE(r,u),r.du=r.du.remove(s),r.Au.delete(e),np(r)}else await md(r.localStore,e,!1).then(()=>vd(r,e,n)).catch(ms)}async function PN(t,e){const n=J(t),r=e.batch.batchId;try{const i=await MP(n.localStore,e);WE(n,r,null),HE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ca(n,i)}catch(i){await ms(i)}}async function NN(t,e,n){const r=J(t);try{const i=await function(o,l){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(oe(m!==null,37113),f=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);WE(r,e,n),HE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ca(r,i)}catch(i){await ms(i)}}function HE(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function WE(t,e,n){const r=J(t);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function vd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||GE(t,r)})}function GE(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Kf(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),np(t))}function qy(t,e,n){for(const r of n)r instanceof zE?(t.Ru.addReference(r.key,e),bN(t,r)):r instanceof BE?(B(tp,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||GE(t,r.key)):K(19791,{wu:r})}function bN(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(B(tp,"New document in limbo: "+n),t.Eu.add(r),np(t))}function np(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new W(ve.fromString(e)),r=t.fu.next();t.Au.set(r,new EN(n)),t.du=t.du.insert(n,r),LE(t.remoteStore,new nr(on(Ff(n.path)),r,"TargetPurposeLimboResolution",Nu.ce))}}async function ca(t,e,n){const r=J(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const m=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){i.push(c);const m=Wf.As(u.targetId,c);s.push(m)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,c){const f=J(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>L.forEach(c,g=>L.forEach(g.Es,_=>f.persistence.referenceDelegate.addReference(m,g.targetId,_)).next(()=>L.forEach(g.ds,_=>f.persistence.referenceDelegate.removeReference(m,g.targetId,_)))))}catch(m){if(!gs(m))throw m;B(Gf,"Failed to update sequence numbers: "+m)}for(const m of c){const g=m.targetId;if(!m.fromCache){const _=f.Ms.get(g),R=_.snapshotVersion,N=_.withLastLimboFreeSnapshotVersion(R);f.Ms=f.Ms.insert(g,N)}}}(r.localStore,s))}async function ON(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){B(tp,"User change. New user:",e.toKey());const r=await NE(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new q(V.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ca(n,r.Ls)}}function DN(t,e){const n=J(t),r=n.Au.get(e);if(r&&r.hu)return re().add(r.key);{let i=re();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function KE(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=qE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=DN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kN.bind(null,e),e.Pu.H_=gN.bind(null,e.eventManager),e.Pu.yu=yN.bind(null,e.eventManager),e}function LN(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=PN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=NN.bind(null,e),e}class su{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Uu(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return VP(this.persistence,new OP,e.initialUser,this.serializer)}Cu(e){return new PE(Hf.mi,this.serializer)}Du(e){return new $P}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}su.provider={build:()=>new su};class VN extends su{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){oe(this.persistence.referenceDelegate instanceof ru,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new vP(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?ct.withCacheSize(this.cacheSizeBytes):ct.DEFAULT;return new PE(r=>ru.mi(r,n),this.serializer)}}class _d{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$y(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ON.bind(null,this.syncEngine),await hN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new fN}()}createDatastore(e){const n=Uu(e.databaseInfo.databaseId),r=function(s){return new KP(s)}(e.databaseInfo);return function(s,o,l,u){return new XP(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new eN(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>$y(this.syncEngine,n,0),function(){return My.v()?new My:new qP}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,f){const m=new TN(i,s,o,l,u,c);return f&&(m.gu=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=J(i);B(ni,"RemoteStore shutting down."),s.Ea.add(5),await ua(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}_d.provider={build:()=>new _d};/**
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
 */class MN{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Nn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Sr="FirestoreClient";class jN{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Je.UNAUTHENTICATED,this.clientId=bf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{B(Sr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(B(Sr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Zf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Jc(t,e){t.asyncQueue.verifyOperationInProgress(),B(Sr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await NE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Hy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await FN(t);B(Sr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Fy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Fy(e.remoteStore,i)),t._onlineComponents=e}async function FN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B(Sr,"Using user provided OfflineComponentProvider");try{await Jc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ns("Error using user provided cache. Falling back to memory cache: "+n),await Jc(t,new su)}}else B(Sr,"Using default OfflineComponentProvider"),await Jc(t,new VN(void 0));return t._offlineComponents}async function QE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B(Sr,"Using user provided OnlineComponentProvider"),await Hy(t,t._uninitializedComponentsProvider._online)):(B(Sr,"Using default OnlineComponentProvider"),await Hy(t,new _d))),t._onlineComponents}function UN(t){return QE(t).then(e=>e.syncEngine)}async function zN(t){const e=await QE(t),n=e.eventManager;return n.onListen=IN.bind(null,e.syncEngine),n.onUnlisten=xN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=SN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=CN.bind(null,e.syncEngine),n}function BN(t,e,n={}){const r=new pr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const f=new MN({next:g=>{f.Nu(),o.enqueueAndForget(()=>mN(s,m));const _=g.docs.has(l);!_&&g.fromCache?c.reject(new q(V.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&g.fromCache&&u&&u.source==="server"?c.reject(new q(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new vN(Ff(l.path),f,{includeMetadataChanges:!0,qa:!0});return pN(s,m)}(await zN(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function YE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Wy=new Map;/**
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
 */const JE="firestore.googleapis.com",Gy=!0;class Ky{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new q(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=JE,this.ssl=Gy}else this.host=e.host,this.ssl=e.ssl??Gy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=kE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<gP)throw new q(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ek("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=YE(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class rp{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ky({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ky(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new $R;switch(r.type){case"firstParty":return new GR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Wy.get(n);r&&(B("ComponentProvider","Removing Datastore"),Wy.delete(n),r.terminate())}(this),Promise.resolve()}}function $N(t,e,n,r={}){var c;t=Fo(t,rp);const i=hs(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(H_(`https://${l}`),W_("Firestore",!0)),s.host!==JE&&s.host!==l&&ns("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!vr(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,m;if(typeof r.mockUserToken=="string")f=r.mockUserToken,m=Je.MOCK_USER;else{f=tA(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new q(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Je(g)}t._authCredentials=new qR(new zw(f,m))}}/**
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
 */class ip{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ip(this.firestore,e,this._query)}}class je{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wo(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new je(this.firestore,e,this._key)}toJSON(){return{type:je._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(oa(n,je._jsonSchema))return new je(e,r||null,new W(ve.fromString(n.referencePath)))}}je._jsonSchemaVersion="firestore/documentReference/1.0",je._jsonSchema={type:ke("string",je._jsonSchemaVersion),referencePath:ke("string")};class Wo extends ip{constructor(e,n,r){super(e,n,Ff(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new je(this.firestore,null,new W(e))}withConverter(e){return new Wo(this.firestore,e,this._path)}}function Gi(t,e,...n){if(t=at(t),arguments.length===1&&(e=bf.newId()),ZR("doc","path",e),t instanceof rp){const r=ve.fromString(e,...n);return ly(r),new je(t,null,new W(r))}{if(!(t instanceof je||t instanceof Wo))throw new q(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return ly(r),new je(t.firestore,t instanceof Wo?t.converter:null,new W(r))}}/**
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
 */const Qy="AsyncQueue";class Yy{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new OE(this,"async_queue_retry"),this._c=()=>{const r=Yc();r&&B(Qy,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Yc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Yc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new pr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!gs(e))throw e;B(Qy,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Nn("INTERNAL UNHANDLED ERROR: ",Jy(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=Xf.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&K(47125,{Pc:Jy(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Jy(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class sp extends rp{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Yy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Yy(e),this._firestoreClient=void 0,await e}}}function qN(t,e){const n=typeof t=="object"?t:Tf(),r=typeof t=="string"?t:Yl,i=ui(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=ZS("firestore");s&&$N(i,...s)}return i}function XE(t){if(t._terminated)throw new q(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||HN(t),t._firestoreClient}function HN(t){var r,i,s;const e=t._freezeSettings(),n=function(l,u,c,f){return new hk(l,u,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,YE(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((s=e.localCache)!=null&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new jN(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Pt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pt(We.fromBase64String(e))}catch(n){throw new q(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Pt(We.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Pt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(oa(e,Pt._jsonSchema))return Pt.fromBase64String(e.bytes)}}Pt._jsonSchemaVersion="firestore/bytes/1.0",Pt._jsonSchema={type:ke("string",Pt._jsonSchemaVersion),bytes:ke("string")};/**
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
 */class op{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ZE{constructor(e){this._methodName=e}}/**
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
 */class ln{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ln._jsonSchemaVersion}}static fromJSON(e){if(oa(e,ln._jsonSchema))return new ln(e.latitude,e.longitude)}}ln._jsonSchemaVersion="firestore/geoPoint/1.0",ln._jsonSchema={type:ke("string",ln._jsonSchemaVersion),latitude:ke("number"),longitude:ke("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class un{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:un._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(oa(e,un._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new un(e.vectorValues);throw new q(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}un._jsonSchemaVersion="firestore/vectorValue/1.0",un._jsonSchema={type:ke("string",un._jsonSchemaVersion),vectorValues:ke("object")};/**
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
 */const WN=/^__.*__$/;class GN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new fi(e,this.data,this.fieldMask,n,this.fieldTransforms):new aa(e,this.data,n,this.fieldTransforms)}}function e1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K(40011,{Ac:t})}}class ap{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new ap({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return ou(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(e1(this.Ac)&&WN.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class KN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Uu(e)}Cc(e,n,r,i=!1){return new ap({Ac:e,methodName:n,Dc:r,path:$e.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function QN(t){const e=t._freezeSettings(),n=Uu(t._databaseId);return new KN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function YN(t,e,n,r,i,s={}){const o=t.Cc(s.merge||s.mergeFields?2:0,e,n,i);i1("Data must be an object, but it was:",o,r);const l=n1(r,o);let u,c;if(s.merge)u=new Bt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const g=JN(e,m,n);if(!o.contains(g))throw new q(V.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);ZN(f,g)||f.push(g)}u=new Bt(f),c=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=o.fieldTransforms;return new GN(new kt(l),u,c)}function t1(t,e){if(r1(t=at(t)))return i1("Unsupported field value:",e,t),n1(t,e);if(t instanceof ZE)return function(r,i){if(!e1(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=t1(l,i.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=at(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Dk(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=fe.fromDate(r);return{timestampValue:nu(i.serializer,s)}}if(r instanceof fe){const s=new fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:nu(i.serializer,s)}}if(r instanceof ln)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Pt)return{bytesValue:TE(i.serializer,r._byteString)};if(r instanceof je){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:$f(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof un)return function(o,l){return{mapValue:{fields:{[Yw]:{stringValue:Xw},[Jl]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Sc("VectorValues must only contain numeric values.");return Uf(l.serializer,c)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${Of(r)}`)}(t,e)}function n1(t,e){const n={};return qw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hi(t,(r,i)=>{const s=t1(i,e.mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function r1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof fe||t instanceof ln||t instanceof Pt||t instanceof je||t instanceof ZE||t instanceof un)}function i1(t,e,n){if(!r1(n)||!Bw(n)){const r=Of(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function JN(t,e,n){if((e=at(e))instanceof op)return e._internalPath;if(typeof e=="string")return s1(t,e);throw ou("Field path arguments must be of type string or ",t,!1,void 0,n)}const XN=new RegExp("[~\\*/\\[\\]]");function s1(t,e,n){if(e.search(XN)>=0)throw ou(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new op(...e.split("."))._internalPath}catch{throw ou(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ou(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new q(V.INVALID_ARGUMENT,l+t+u)}function ZN(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class o1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new e2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(a1("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class e2 extends o1{data(){return super.data()}}function a1(t,e){return typeof e=="string"?s1(t,e):e instanceof op?e._internalPath:e._delegate._internalPath}class t2{convertValue(e,n="none"){switch(Tr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Er(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw K(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return hi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[Jl].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Ae(o.doubleValue));return new un(n)}convertGeoPoint(e){return new ln(Ae(e.latitude),Ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ou(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(zo(e));default:return null}}convertTimestamp(e){const n=wr(e);return new fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ve.fromString(e);oe(RE(r),9688,{name:e});const i=new Bo(r.get(1),r.get(3)),s=new W(r.popFirst(5));return i.isEqual(n)||Nn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function n2(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Zs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Gr extends o1{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ml(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(a1("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new q(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Gr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Gr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Gr._jsonSchema={type:ke("string",Gr._jsonSchemaVersion),bundleSource:ke("string","DocumentSnapshot"),bundleName:ke("string"),bundle:ke("string")};class ml extends Gr{data(e={}){return super.data(e)}}class go{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Zs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ml(this._firestore,this._userDataWriter,r.key,r,new Zs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new ml(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Zs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new ml(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Zs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:r2(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new q(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=go._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=bf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function r2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K(61501,{type:t})}}/**
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
 */function l1(t){t=Fo(t,je);const e=Fo(t.firestore,sp);return BN(XE(e),t._key).then(n=>o2(e,t,n))}go._jsonSchemaVersion="firestore/querySnapshot/1.0",go._jsonSchema={type:ke("string",go._jsonSchemaVersion),bundleSource:ke("string","QuerySnapshot"),bundleName:ke("string"),bundle:ke("string")};class i2 extends t2{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new je(this.firestore,null,n)}}function au(t,e,n){t=Fo(t,je);const r=Fo(t.firestore,sp),i=n2(t.converter,e,n);return s2(r,[YN(QN(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Sn.none())])}function s2(t,e){return function(r,i){const s=new pr;return r.asyncQueue.enqueueAndForget(async()=>RN(await UN(r),i,s)),s.promise}(XE(t),e)}function o2(t,e,n){const r=n.docs.get(e._key),i=new i2(t);return new Gr(t,i,e._key,r,new Zs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){ps=i})(ds),cn(new Wt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new sp(new HR(r.getProvider("auth-internal")),new KR(o,r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new q(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bo(c.options.projectId,f)}(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Ot(iy,sy,e),Ot(iy,sy,"esm2020")})();var a2="firebase",l2="12.3.0";/**
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
 */Ot(a2,l2,"app");const u1="@firebase/installations",lp="0.6.19";/**
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
 */const c1=1e4,h1=`w:${lp}`,d1="FIS_v2",u2="https://firebaseinstallations.googleapis.com/v1",c2=60*60*1e3,h2="installations",d2="Installations";/**
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
 */const f2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ri=new li(h2,d2,f2);function f1(t){return t instanceof Kt&&t.code.includes("request-failed")}/**
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
 */function p1({projectId:t}){return`${u2}/projects/${t}/installations`}function m1(t){return{token:t.token,requestStatus:2,expiresIn:m2(t.expiresIn),creationTime:Date.now()}}async function g1(t,e){const r=(await e.json()).error;return ri.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function y1({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function p2(t,{refreshToken:e}){const n=y1(t);return n.append("Authorization",g2(e)),n}async function v1(t){const e=await t();return e.status>=500&&e.status<600?t():e}function m2(t){return Number(t.replace("s","000"))}function g2(t){return`${d1} ${t}`}/**
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
 */async function y2({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=p1(t),i=y1(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:d1,appId:t.appId,sdkVersion:h1},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await v1(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:m1(c.authToken)}}else throw await g1("Create Installation",u)}/**
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
 */function _1(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function v2(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const _2=/^[cdef][\w-]{21}$/,wd="";function w2(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=E2(t);return _2.test(n)?n:wd}catch{return wd}}function E2(t){return v2(t).substr(0,22)}/**
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
 */function $u(t){return`${t.appName}!${t.appId}`}/**
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
 */const w1=new Map;function E1(t,e){const n=$u(t);T1(n,e),T2(n,e)}function T1(t,e){const n=w1.get(t);if(n)for(const r of n)r(e)}function T2(t,e){const n=I2();n&&n.postMessage({key:t,fid:e}),S2()}let qr=null;function I2(){return!qr&&"BroadcastChannel"in self&&(qr=new BroadcastChannel("[Firebase] FID Change"),qr.onmessage=t=>{T1(t.data.key,t.data.fid)}),qr}function S2(){w1.size===0&&qr&&(qr.close(),qr=null)}/**
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
 */const A2="firebase-installations-database",x2=1,ii="firebase-installations-store";let Xc=null;function up(){return Xc||(Xc=Y_(A2,x2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ii)}}})),Xc}async function lu(t,e){const n=$u(t),i=(await up()).transaction(ii,"readwrite"),s=i.objectStore(ii),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&E1(t,e.fid),e}async function I1(t){const e=$u(t),r=(await up()).transaction(ii,"readwrite");await r.objectStore(ii).delete(e),await r.done}async function qu(t,e){const n=$u(t),i=(await up()).transaction(ii,"readwrite"),s=i.objectStore(ii),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&E1(t,l.fid),l}/**
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
 */async function cp(t){let e;const n=await qu(t.appConfig,r=>{const i=C2(r),s=R2(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===wd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function C2(t){const e=t||{fid:w2(),registrationStatus:0};return S1(e)}function R2(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ri.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=k2(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:P2(t)}:{installationEntry:e}}async function k2(t,e){try{const n=await y2(t,e);return lu(t.appConfig,n)}catch(n){throw f1(n)&&n.customData.serverCode===409?await I1(t.appConfig):await lu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function P2(t){let e=await Xy(t.appConfig);for(;e.registrationStatus===1;)await _1(100),e=await Xy(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await cp(t);return r||n}return e}function Xy(t){return qu(t,e=>{if(!e)throw ri.create("installation-not-found");return S1(e)})}function S1(t){return N2(t)?{fid:t.fid,registrationStatus:0}:t}function N2(t){return t.registrationStatus===1&&t.registrationTime+c1<Date.now()}/**
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
 */async function b2({appConfig:t,heartbeatServiceProvider:e},n){const r=O2(t,n),i=p2(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:h1,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await v1(()=>fetch(r,l));if(u.ok){const c=await u.json();return m1(c)}else throw await g1("Generate Auth Token",u)}function O2(t,{fid:e}){return`${p1(t)}/${e}/authTokens:generate`}/**
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
 */async function hp(t,e=!1){let n;const r=await qu(t.appConfig,s=>{if(!A1(s))throw ri.create("not-registered");const o=s.authToken;if(!e&&V2(o))return s;if(o.requestStatus===1)return n=D2(t,e),s;{if(!navigator.onLine)throw ri.create("app-offline");const l=j2(s);return n=L2(t,l),l}});return n?await n:r.authToken}async function D2(t,e){let n=await Zy(t.appConfig);for(;n.authToken.requestStatus===1;)await _1(100),n=await Zy(t.appConfig);const r=n.authToken;return r.requestStatus===0?hp(t,e):r}function Zy(t){return qu(t,e=>{if(!A1(e))throw ri.create("not-registered");const n=e.authToken;return F2(n)?{...e,authToken:{requestStatus:0}}:e})}async function L2(t,e){try{const n=await b2(t,e),r={...e,authToken:n};return await lu(t.appConfig,r),n}catch(n){if(f1(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await I1(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await lu(t.appConfig,r)}throw n}}function A1(t){return t!==void 0&&t.registrationStatus===2}function V2(t){return t.requestStatus===2&&!M2(t)}function M2(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+c2}function j2(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function F2(t){return t.requestStatus===1&&t.requestTime+c1<Date.now()}/**
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
 */async function U2(t){const e=t,{installationEntry:n,registrationPromise:r}=await cp(e);return r?r.catch(console.error):hp(e).catch(console.error),n.fid}/**
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
 */async function z2(t,e=!1){const n=t;return await B2(n),(await hp(n,e)).token}async function B2(t){const{registrationPromise:e}=await cp(t);e&&await e}/**
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
 */function $2(t){if(!t||!t.options)throw Zc("App Configuration");if(!t.name)throw Zc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Zc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Zc(t){return ri.create("missing-app-config-values",{valueName:t})}/**
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
 */const x1="installations",q2="installations-internal",H2=t=>{const e=t.getProvider("app").getImmediate(),n=$2(e),r=ui(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},W2=t=>{const e=t.getProvider("app").getImmediate(),n=ui(e,x1).getImmediate();return{getId:()=>U2(n),getToken:i=>z2(n,i)}};function G2(){cn(new Wt(x1,H2,"PUBLIC")),cn(new Wt(q2,W2,"PRIVATE"))}G2();Ot(u1,lp);Ot(u1,lp,"esm2020");/**
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
 */const uu="analytics",K2="firebase_id",Q2="origin",Y2=60*1e3,J2="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",dp="https://www.googletagmanager.com/gtag/js";/**
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
 */const gt=new Cu("@firebase/analytics");/**
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
 */const X2={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Et=new li("analytics","Analytics",X2);/**
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
 */function Z2(t){if(!t.startsWith(dp)){const e=Et.create("invalid-gtag-resource",{gtagURL:t});return gt.warn(e.message),""}return t}function C1(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function eb(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function tb(t,e){const n=eb("firebase-js-sdk-policy",{createScriptURL:Z2}),r=document.createElement("script"),i=`${dp}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function nb(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function rb(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await C1(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(l){gt.error(l)}t("config",i,s)}async function ib(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await C1(n);for(const u of o){const c=l.find(m=>m.measurementId===u),f=c&&e[c.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){gt.error(s)}}function sb(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await ib(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await rb(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){gt.error(l)}}return i}function ob(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=sb(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function ab(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(dp)&&n.src.includes(t))return n;return null}/**
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
 */const lb=30,ub=1e3;class cb{constructor(e={},n=ub){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const R1=new cb;function hb(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function db(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:hb(n)},i=J2.replace("{app-id}",e),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let l="";try{const u=await s.json();(o=u.error)!=null&&o.message&&(l=u.error.message)}catch{}throw Et.create("config-fetch-failed",{httpStatus:s.status,responseMessage:l})}return s.json()}async function fb(t,e=R1,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Et.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Et.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new gb;return setTimeout(async()=>{l.abort()},Y2),k1({appId:r,apiKey:i,measurementId:s},o,l,e)}async function k1(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=R1){var l;const{appId:s,measurementId:o}=t;try{await pb(r,e)}catch(u){if(o)return gt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:o};throw u}try{const u=await db(t);return i.deleteThrottleMetadata(s),u}catch(u){const c=u;if(!mb(c)){if(i.deleteThrottleMetadata(s),o)return gt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:s,measurementId:o};throw u}const f=Number((l=c==null?void 0:c.customData)==null?void 0:l.httpStatus)===503?kg(n,i.intervalMillis,lb):kg(n,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(s,m),gt.debug(`Calling attemptFetch again in ${f} millis`),k1(t,m,r,i)}}function pb(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Et.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function mb(t){if(!(t instanceof Kt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class gb{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function yb(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o={...r,send_to:s};t("event",n,o)}}/**
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
 */async function vb(){if(_f())try{await wf()}catch(t){return gt.warn(Et.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return gt.warn(Et.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function _b(t,e,n,r,i,s,o){const l=fb(t);l.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&gt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>gt.error(g)),e.push(l);const u=vb().then(g=>{if(g)return r.getId()}),[c,f]=await Promise.all([l,u]);ab(s)||tb(s,c.measurementId),i("js",new Date);const m=(o==null?void 0:o.config)??{};return m[Q2]="firebase",m.update=!0,f!=null&&(m[K2]=f),i("config",c.measurementId,m),c.measurementId}/**
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
 */class wb{constructor(e){this.app=e}_delete(){return delete yo[this.app.options.appId],Promise.resolve()}}let yo={},ev=[];const tv={};let eh="dataLayer",Eb="gtag",nv,P1,rv=!1;function Tb(){const t=[];if(vf()&&t.push("This is a browser extension environment."),G_()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Et.create("invalid-analytics-context",{errorInfo:e});gt.warn(n.message)}}function Ib(t,e,n){Tb();const r=t.options.appId;if(!r)throw Et.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)gt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Et.create("no-api-key");if(yo[r]!=null)throw Et.create("already-exists",{id:r});if(!rv){nb(eh);const{wrappedGtag:s,gtagCore:o}=ob(yo,ev,tv,eh,Eb);P1=s,nv=o,rv=!0}return yo[r]=_b(t,ev,tv,e,nv,eh,n),new wb(t)}function Sb(t=Tf()){t=at(t);const e=ui(t,uu);return e.isInitialized()?e.getImmediate():Ab(t)}function Ab(t,e={}){const n=ui(t,uu);if(n.isInitialized()){const i=n.getImmediate();if(vr(e,n.getOptions()))return i;throw Et.create("already-initialized")}return n.initialize({options:e})}async function xb(){if(vf()||!G_()||!_f())return!1;try{return await wf()}catch{return!1}}function Cb(t,e,n,r){t=at(t),yb(P1,yo[t.app.options.appId],e,n,r).catch(i=>gt.error(i))}const iv="@firebase/analytics",sv="0.10.18";function Rb(){cn(new Wt(uu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return Ib(r,i,n)},"PUBLIC")),cn(new Wt("analytics-internal",t,"PRIVATE")),Ot(iv,sv),Ot(iv,sv,"esm2020");function t(e){try{const n=e.getProvider(uu).getImmediate();return{logEvent:(r,i,s)=>Cb(n,r,i,s)}}catch(n){throw Et.create("interop-component-reg-failed",{reason:n})}}}Rb();const kb={apiKey:"AIzaSyAHBZt2JvXE32rrZhHnBGPqe8HPjg5brzM",authDomain:"eduzy-ec691.firebaseapp.com",projectId:"eduzy-ec691",storageBucket:"eduzy-ec691.firebasestorage.app",messagingSenderId:"106528117894",appId:"1:106528117894:web:a5227b33e092416ed07",measurementId:"G-RZ0M3M4673"},fp=J_(kb);xb().then(t=>{t&&Sb(fp)});const Ga=zR(fp),Ki=qN(fp),Wn=[{id:"b1",question:'What is the correct syntax to output "Hello World" in Java?',options:['Console.WriteLine("Hello World");','print("Hello World");','System.out.println("Hello World");','echo("Hello World");'],correctAnswer:2,level:"beginner"},{id:"b2",question:"Which data type is used to create a variable that should store text?",options:["string","String","Txt","myString"],correctAnswer:1,level:"beginner"},{id:"b3",question:"Which of these is NOT a valid Java primitive data type?",options:["int","float","boolean","unsigned"],correctAnswer:3,level:"beginner"},{id:"b4",question:"What is the entry point of any Java application?",options:["public static void run()","public static void main(String[] args)","private void start()","public void init()"],correctAnswer:1,level:"beginner"},{id:"b5",question:"Which keyword is used to define a constant variable whose value cannot be changed?",options:["static","const","final","fixed"],correctAnswer:2,level:"beginner"},{id:"m1",question:"Which concept in OOP is about bundling data and methods into a single unit?",options:["Inheritance","Polymorphism","Abstraction","Encapsulation"],correctAnswer:3,level:"moderate"},{id:"m2",question:"What is method overloading?",options:["A class having two or more methods with the same name but different parameters.","A subclass providing a specific implementation of a parent class method.","A method that cannot be inherited.","A method that belongs to the class, not an object."],correctAnswer:0,level:"moderate"},{id:"m3",question:"Which block of code is always executed after a `try-catch` block?",options:["finally","execute","always","post"],correctAnswer:0,level:"moderate"},{id:"m4",question:"What is the purpose of the `super` keyword in Java?",options:["To refer to the current object instance.","To call a method in the superclass.","To create a static variable.","To define a final method."],correctAnswer:1,level:"moderate"},{id:"m5",question:"What does the `static` keyword mean when applied to a method?",options:["The method can only be called from within the same class.","The method belongs to the class itself, not to any specific object instance.","The value of the method's return cannot be changed.","The method is automatically executed when the program starts."],correctAnswer:1,level:"moderate"},{id:"a1",question:"`HashMap` allows `null` keys and values, while `Hashtable` does not. True or False?",options:["True","False"],correctAnswer:0,level:"advanced"},{id:"a2",question:'What is a "Singleton" in the context of design patterns?',options:["A design pattern that restricts the instantiation of a class to a single object.","A class that can only have one method.","A method that can only be called once.","An object that cannot be inherited."],correctAnswer:0,level:"advanced"},{id:"a3",question:"What is the main advantage of using Generics (`<T>`) in Java?",options:["It makes the code run faster.","It provides compile-time type safety and avoids the need for explicit casting.","It allows you to use primitive types in collections.","It automatically synchronizes collections."],correctAnswer:1,level:"advanced"},{id:"a4",question:"In multithreading, what is the purpose of the `synchronized` keyword?",options:["To ensure that a thread runs faster than others.","To ensure that only one thread can access a resource or method at a time.","To start a new thread automatically.","To merge two threads into one."],correctAnswer:1,level:"advanced"},{id:"a5",question:"What is the difference between `==` and the `.equals()` method when comparing objects?",options:["There is no difference; they are interchangeable.","`==` compares memory addresses, while `.equals()` compares values.","`.equals()` compares memory addresses, while `==` compares values.","`==` is only for primitives, `.equals()` is only for Strings."],correctAnswer:1,level:"advanced"}];function Pb(t){let e=0,n=0,r=0;Wn.forEach(o=>{t[o.id]===o.correctAnswer&&(o.level==="beginner"&&e++,o.level==="moderate"&&n++,o.level==="advanced"&&r++)});const i={beginner:1,moderate:1.5,advanced:2},s=e*i.beginner+n*i.moderate+r*i.advanced;return s>=12?"advanced":s>=6.5?"intermediate":"beginner"}const N1=H.createContext(void 0),Dn=()=>{const t=H.useContext(N1);if(t===void 0)throw new Error("useAuth must be used within an AuthProvider");return t},Nb=({children:t})=>{const[e,n]=H.useState(null),[r,i]=H.useState(null),[s,o]=H.useState(!0),l=N=>{const D=Pb(N);let S=0,w=0,A=0;return Wn.forEach(O=>{N[O.id]===O.correctAnswer&&(O.level==="beginner"&&S++,O.level==="moderate"&&w++,O.level==="advanced"&&A++)}),{beginnerScore:S,moderateScore:w,advancedScore:A,skillLevel:D}},u=async(N,D,S)=>{const{user:w}=await AC(Ga,N,D),A={...S,uid:w.uid};await au(Gi(Ki,"users",w.uid),A),i(A)},c=async(N,D)=>{await xC(Ga,N,D)},f=async()=>{await PC(Ga),i(null)},m=async N=>{if(!e)return;const D={...r,...N};await au(Gi(Ki,"users",e.uid),D,{merge:!0}),i(D)},g=async N=>{await m({skillLevel:N})},_=async N=>{const D=await l1(Gi(Ki,"users",N));D.exists()&&i(D.data())};H.useEffect(()=>kC(Ga,D=>{n(D),D?_(D.uid).finally(()=>o(!1)):(i(null),o(!1))}),[]);const R={currentUser:e,userData:r,login:c,signup:u,logout:f,updateUserData:m,processAssessmentResults:l,setSkillLevel:g,loading:s};return p.jsx(N1.Provider,{value:R,children:t})},b1=H.createContext(void 0),Hu=()=>{const t=H.useContext(b1);if(t===void 0)throw new Error("useProgress must be used within a ProgressProvider");return t},bb=({children:t})=>{const{currentUser:e,userData:n}=Dn(),[r,i]=H.useState(null),[s,o]=H.useState(!0),l=async g=>{if(!e||!r)return;const _={...r,...g};await au(Gi(Ki,"progress",e.uid),_,{merge:!0}),i(_)},u=async g=>{if(!r)return;const _=[...r.completedModules];_.includes(g)||_.push(g),await l({completedModules:_,lastActiveModule:g})},c=async(g,_)=>{if(!r)return;const R={...r.quizScores,[g]:_};await l({quizScores:R}),_>=70&&await u(g)},f=async()=>{if(!e||!n)return;const g=await l1(Gi(Ki,"progress",e.uid));if(g.exists())i(g.data());else{const _={userId:e.uid,courseId:n.selectedCourse,completedModules:[],quizScores:{},currentModule:"java-beginner-1",lastActiveModule:"",totalTimeSpent:0,lastCheerUpTime:Date.now()};await au(Gi(Ki,"progress",e.uid),_),i(_)}o(!1)};H.useEffect(()=>{e&&n?(o(!1),f()):o(!1)},[e,n]);const m={progress:r,updateProgress:l,completeModule:u,submitQuiz:c,loading:s};return p.jsx(b1.Provider,{value:m,children:t})};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ob={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Db=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),le=(t,e)=>{const n=H.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:l="",children:u,...c},f)=>H.createElement("svg",{ref:f,...Ob,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${Db(t)}`,l].join(" "),...c},[...e.map(([m,g])=>H.createElement(m,g)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=le("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=le("BarChart2",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=le("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=le("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=le("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=le("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=le("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=le("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=le("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=le("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=le("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=le("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=le("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=le("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=le("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=le("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=le("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=le("Minimize2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=le("PlayCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=le("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=le("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=le("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=le("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=le("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=le("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=le("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=le("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=le("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=le("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),Yb=({onToggleMode:t})=>{const[e,n]=H.useState(""),[r,i]=H.useState(""),[s,o]=H.useState(!1),[l,u]=H.useState(!1),[c,f]=H.useState(""),{login:m}=Dn(),g=async _=>{_.preventDefault(),u(!0),f("");try{await m(e,r)}catch(R){f(R.message)}finally{u(!1)}};return p.jsxs("div",{className:"w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gray-100",children:[p.jsxs("div",{className:"text-center mb-8",children:[p.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4",children:p.jsx(zb,{className:"w-8 h-8 text-white"})}),p.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-2",children:"Welcome Back!"}),p.jsx("p",{className:"text-gray-600",children:"Sign in to continue your learning journey"})]}),c&&p.jsx("div",{className:"mb-6 p-4 bg-red-50 border border-red-200 rounded-lg",children:p.jsx("p",{className:"text-red-600 text-sm",children:c})}),p.jsxs("form",{onSubmit:g,className:"space-y-6",children:[p.jsxs("div",{children:[p.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address"}),p.jsxs("div",{className:"relative",children:[p.jsx(V1,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"}),p.jsx("input",{id:"email",type:"email",value:e,onChange:_=>n(_.target.value),className:"w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200",placeholder:"Enter your email",required:!0})]})]}),p.jsxs("div",{children:[p.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700 mb-2",children:"Password"}),p.jsxs("div",{className:"relative",children:[p.jsx(Go,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"}),p.jsx("input",{id:"password",type:s?"text":"password",value:r,onChange:_=>i(_.target.value),className:"w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200",placeholder:"Enter your password",required:!0}),p.jsx("button",{type:"button",onClick:()=>o(!s),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors",children:s?p.jsx(D1,{className:"w-5 h-5"}):p.jsx(L1,{className:"w-5 h-5"})})]})]}),p.jsx("button",{type:"submit",disabled:l,className:"w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-blue-600 hover:to-purple-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",children:l?"Signing In...":"Sign In"})]}),p.jsx("div",{className:"mt-6 text-center",children:p.jsxs("p",{className:"text-gray-600",children:["Don't have an account?"," ",p.jsx("button",{onClick:t,className:"text-blue-600 font-semibold hover:text-blue-700 transition-colors",children:"Sign Up"})]})})]})},Jb=({onToggleMode:t})=>{const[e,n]=H.useState({name:"",email:"",password:"",confirmPassword:""}),[r,i]=H.useState(!1),[s,o]=H.useState(!1),[l,u]=H.useState(""),{signup:c}=Dn(),f=async g=>{if(g.preventDefault(),o(!0),u(""),e.password!==e.confirmPassword){u("Passwords do not match"),o(!1);return}try{await c(e.email,e.password,{email:e.email,displayName:e.name,selectedCourse:"",skillLevel:null,createdAt:new Date})}catch(_){u(_.message)}finally{o(!1)}},m=g=>{n(_=>({..._,[g.target.name]:g.target.value}))};return p.jsxs("div",{className:"w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gray-100",children:[p.jsxs("div",{className:"text-center mb-8",children:[p.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mb-4",children:p.jsx(Gb,{className:"w-8 h-8 text-white"})}),p.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-2",children:"Join Eduzy!"}),p.jsx("p",{className:"text-gray-600",children:"Create your account and start learning"})]}),l&&p.jsx("div",{className:"mb-6 p-4 bg-red-50 border border-red-200 rounded-lg",children:p.jsx("p",{className:"text-red-600 text-sm",children:l})}),p.jsxs("form",{onSubmit:f,className:"space-y-6",children:[p.jsxs("div",{children:[p.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-2",children:"Full Name"}),p.jsxs("div",{className:"relative",children:[p.jsx(mp,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"}),p.jsx("input",{id:"name",name:"name",type:"text",value:e.name,onChange:m,className:"w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200",placeholder:"Enter your full name",required:!0})]})]}),p.jsxs("div",{children:[p.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address"}),p.jsxs("div",{className:"relative",children:[p.jsx(V1,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"}),p.jsx("input",{id:"email",name:"email",type:"email",value:e.email,onChange:m,className:"w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200",placeholder:"Enter your email",required:!0})]})]}),p.jsxs("div",{children:[p.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700 mb-2",children:"Password"}),p.jsxs("div",{className:"relative",children:[p.jsx(Go,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"}),p.jsx("input",{id:"password",name:"password",type:r?"text":"password",value:e.password,onChange:m,className:"w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200",placeholder:"Create a password",required:!0,minLength:6}),p.jsx("button",{type:"button",onClick:()=>i(!r),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors",children:r?p.jsx(D1,{className:"w-5 h-5"}):p.jsx(L1,{className:"w-5 h-5"})})]})]}),p.jsxs("div",{children:[p.jsx("label",{htmlFor:"confirmPassword",className:"block text-sm font-medium text-gray-700 mb-2",children:"Confirm Password"}),p.jsxs("div",{className:"relative",children:[p.jsx(Go,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"}),p.jsx("input",{id:"confirmPassword",name:"confirmPassword",type:"password",value:e.confirmPassword,onChange:m,className:"w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200",placeholder:"Confirm your password",required:!0})]})]}),p.jsx("button",{type:"submit",disabled:s,className:"w-full bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-green-600 hover:to-blue-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",children:s?"Creating Account...":"Create Account"})]}),p.jsx("div",{className:"mt-6 text-center",children:p.jsxs("p",{className:"text-gray-600",children:["Already have an account?"," ",p.jsx("button",{onClick:t,className:"text-blue-600 font-semibold hover:text-blue-700 transition-colors",children:"Sign In"})]})})]})},Xb=()=>{const[t,e]=H.useState(!0);return p.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center relative overflow-hidden",children:[p.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[p.jsx("div",{className:"absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"}),p.jsx("div",{className:"absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-pink-400 to-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"}),p.jsx("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"})]}),p.jsx("div",{className:"container mx-auto px-4 z-10 relative",children:p.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 items-center",children:[p.jsxs("div",{className:"text-center lg:text-left",children:[p.jsxs("div",{className:"flex items-center justify-center lg:justify-start space-x-3 mb-8",children:[p.jsx("div",{className:"w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center",children:p.jsx(Ed,{className:"w-8 h-8 text-white"})}),p.jsx("h1",{className:"text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",children:"Eduzy"})]}),p.jsxs("h2",{className:"text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight",children:["Master Programming with",p.jsx("span",{className:"bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",children:" AI-Powered"}),p.jsx("br",{}),"Learning"]}),p.jsx("p",{className:"text-xl text-gray-600 mb-8 leading-relaxed",children:"Personalized learning paths, interactive quizzes, and AI assistance to help you become a programming expert at your own pace."}),p.jsxs("div",{className:"grid grid-cols-2 gap-6 mb-8",children:[p.jsxs("div",{className:"flex items-center space-x-3",children:[p.jsx("div",{className:"w-12 h-12 bg-green-100 rounded-full flex items-center justify-center",children:p.jsx(Kb,{className:"w-6 h-6 text-green-600"})}),p.jsxs("div",{children:[p.jsx("h3",{className:"font-semibold text-gray-900",children:"Personalized Learning"}),p.jsx("p",{className:"text-sm text-gray-600",children:"Adapted to your skill level"})]})]}),p.jsxs("div",{className:"flex items-center space-x-3",children:[p.jsx("div",{className:"w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center",children:p.jsx(Wu,{className:"w-6 h-6 text-blue-600"})}),p.jsxs("div",{children:[p.jsx("h3",{className:"font-semibold text-gray-900",children:"Progress Tracking"}),p.jsx("p",{className:"text-sm text-gray-600",children:"Monitor your growth"})]})]}),p.jsxs("div",{className:"flex items-center space-x-3",children:[p.jsx("div",{className:"w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center",children:p.jsx(yp,{className:"w-6 h-6 text-purple-600"})}),p.jsxs("div",{children:[p.jsx("h3",{className:"font-semibold text-gray-900",children:"AI Assistant"}),p.jsx("p",{className:"text-sm text-gray-600",children:"Get help 24/7"})]})]}),p.jsxs("div",{className:"flex items-center space-x-3",children:[p.jsx("div",{className:"w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center",children:p.jsx(Ed,{className:"w-6 h-6 text-orange-600"})}),p.jsxs("div",{children:[p.jsx("h3",{className:"font-semibold text-gray-900",children:"Interactive Content"}),p.jsx("p",{className:"text-sm text-gray-600",children:"Engaging video lessons"})]})]})]})]}),p.jsx("div",{className:"w-full max-w-md mx-auto",children:t?p.jsx(Yb,{onToggleMode:()=>e(!1)}):p.jsx(Jb,{onToggleMode:()=>e(!0)})})]})})]})},Zb=()=>{const[t,e]=H.useState(""),[n,r]=H.useState(!1),{updateUserData:i}=Dn(),s=[{id:"java",title:"Java Programming",description:"Master object-oriented programming with Java",icon:Fb,color:"from-orange-500 to-red-600"}],o=async()=>{if(t){r(!0);try{await i({selectedCourse:t})}catch(l){console.error("Error updating course selection:",l)}finally{r(!1)}}};return p.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center p-4",children:p.jsxs("div",{className:"w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8",children:[p.jsxs("div",{className:"text-center mb-8",children:[p.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Choose Your Course"}),p.jsx("p",{className:"text-xl text-gray-600",children:"Select the programming language you'd like to master"})]}),p.jsx("div",{className:"space-y-4 mb-8",children:s.map(l=>{const u=l.icon;return p.jsx("div",{onClick:()=>e(l.id),className:`relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${t===l.id?"border-blue-500 bg-blue-50 shadow-lg scale-105":"border-gray-200 hover:border-gray-300 hover:shadow-md"}`,children:p.jsxs("div",{className:"flex items-center space-x-4",children:[p.jsx("div",{className:`w-16 h-16 rounded-full bg-gradient-to-r ${l.color} flex items-center justify-center`,children:p.jsx(u,{className:"w-8 h-8 text-white"})}),p.jsxs("div",{className:"flex-1",children:[p.jsx("h3",{className:"text-xl font-semibold text-gray-900",children:l.title}),p.jsx("p",{className:"text-gray-600 mt-1",children:l.description})]}),t===l.id&&p.jsx("div",{className:"w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center",children:p.jsx("div",{className:"w-3 h-3 bg-white rounded-full"})})]})},l.id)})}),p.jsxs("button",{onClick:o,disabled:!t||n,className:"w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2",children:[p.jsx("span",{children:n?"Setting up...":"Continue"}),!n&&p.jsx(O1,{className:"w-5 h-5"})]})]})})},eO=()=>{const[t,e]=H.useState(0),[n,r]=H.useState({}),[i,s]=H.useState(!1),[o,l]=H.useState(!1),[u,c]=H.useState(null),{processAssessmentResults:f,setSkillLevel:m}=Dn(),g=(w,A)=>{r(O=>({...O,[w]:A}))},_=()=>{t<Wn.length-1?e(t+1):R()},R=async()=>{s(!0);try{const w=await f(n);c(w),l(!0)}catch(w){console.error("Failed to get assessment results:",w)}finally{s(!1)}},N=async()=>{if(u!=null&&u.skillLevel){s(!0);try{await m(u.skillLevel)}catch(w){console.error("Error setting skill level:",w)}finally{s(!1)}}};if(o&&u){const A={beginner:{icon:ov,color:"text-green-500",bgColor:"bg-green-100",title:"Beginner"},intermediate:{icon:Wu,color:"text-blue-500",bgColor:"bg-blue-100",title:"Intermediate"},advanced:{icon:yp,color:"text-purple-500",bgColor:"bg-purple-100",title:"Advanced"},null:{icon:ov,color:"text-gray-500",bgColor:"bg-gray-100",title:"Not Set"}}[u.skillLevel||"null"],O=A.icon;return p.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center p-4",children:p.jsxs("div",{className:"w-full max-w-lg mx-auto bg-white rounded-2xl shadow-xl p-8 text-center",children:[p.jsx("div",{className:`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 ${A.bgColor}`,children:p.jsx(O,{className:`w-10 h-10 ${A.color}`})}),p.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-2",children:"Assessment Complete!"}),p.jsx("p",{className:"text-lg text-gray-600 mb-6",children:"Here is a breakdown of your results."}),p.jsxs("div",{className:"bg-gray-50 rounded-lg p-6 mb-8 text-left space-y-4",children:[p.jsxs("h2",{className:"text-lg font-semibold text-gray-800 flex items-center mb-4",children:[p.jsx(Vb,{className:"w-5 h-5 mr-2 text-gray-500"}),"Score Summary"]}),p.jsxs("div",{className:"flex justify-between items-center",children:[p.jsx("span",{className:"font-medium text-gray-700",children:"Beginner Questions:"}),p.jsxs("span",{className:"font-bold text-lg text-green-600",children:[u.beginnerScore," / 5"]})]}),p.jsxs("div",{className:"flex justify-between items-center",children:[p.jsx("span",{className:"font-medium text-gray-700",children:"Moderate Questions:"}),p.jsxs("span",{className:"font-bold text-lg text-blue-600",children:[u.moderateScore," / 5"]})]}),p.jsxs("div",{className:"flex justify-between items-center",children:[p.jsx("span",{className:"font-medium text-gray-700",children:"Advanced Questions:"}),p.jsxs("span",{className:"font-bold text-lg text-purple-600",children:[u.advancedScore," / 5"]})]})]}),p.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 mb-8 text-left",children:[p.jsxs("h3",{className:"text-lg font-bold text-blue-800",children:["Your Assigned Level is: ",A.title]}),p.jsxs("p",{className:"text-blue-700 mt-1",children:["Your learning path will be tailored for a ",A.title," level."]})]}),p.jsxs("button",{onClick:N,disabled:i,className:"w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 flex items-center justify-center space-x-2",children:[p.jsx("span",{children:i?"Setting up your path...":"Start Learning"}),!i&&p.jsx(Lb,{className:"w-5 h-5"})]})]})})}const D=Wn[t],S=n[D.id];return p.jsx("div",{className:"min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 flex items-center justify-center p-4",children:p.jsxs("div",{className:"w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8",children:[p.jsxs("div",{className:"text-center mb-8",children:[p.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Skill Assessment Quiz"}),p.jsxs("p",{className:"text-xl text-gray-600",children:["Question ",t+1," of ",Wn.length]})]}),p.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2 mb-8",children:p.jsx("div",{className:"bg-blue-600 h-2 rounded-full transition-all duration-300",style:{width:`${(t+1)/Wn.length*100}%`}})}),p.jsxs("div",{children:[p.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-6",children:D.question}),p.jsx("div",{className:"space-y-3 mb-8",children:D.options.map((w,A)=>p.jsx("button",{onClick:()=>g(D.id,A),className:`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${S===A?"border-blue-500 bg-blue-50 shadow-md":"border-gray-200 hover:border-gray-300 hover:bg-gray-50"}`,children:p.jsxs("div",{className:"flex items-center space-x-3",children:[p.jsx("div",{className:`w-6 h-6 rounded-full border-2 flex items-center justify-center ${S===A?"border-blue-500 bg-blue-500":"border-gray-300"}`,children:S===A&&p.jsx("div",{className:"w-3 h-3 bg-white rounded-full"})}),p.jsx("span",{className:"font-medium text-gray-900",children:w})]})},A))})]}),p.jsxs("button",{onClick:_,disabled:S===void 0||i,className:"w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2",children:[p.jsx("span",{children:i?"Calculating your skill level...":t===Wn.length-1?"Finish & View Results":"Next Question"}),!i&&(t===Wn.length-1?p.jsx(Mb,{}):p.jsx(O1,{}))]})]})})};function pn(t){switch(t){case"Java Fundamentals":return[{id:"q1",question:"What is the correct file extension for Java source files?",options:[".java",".jav",".class",".js"],correctAnswer:0,explanation:"Java source files use the .java extension."},{id:"q2",question:"Which method is the entry point of a Java program?",options:["start()","main()","run()","init()"],correctAnswer:1,explanation:"The main() method is the entry point."},{id:"q3",question:"Which keyword is used to define a class in Java?",options:["define","class","struct","object"],correctAnswer:1,explanation:"The class keyword is used."},{id:"q4",question:"Which of these is NOT a Java primitive type?",options:["int","boolean","String","double"],correctAnswer:2,explanation:"String is a class, not a primitive type."},{id:"q5",question:"What does JVM stand for?",options:["Java Variable Method","Java Virtual Machine","Java Visual Model","Java Version Manager"],correctAnswer:1,explanation:"JVM stands for Java Virtual Machine."}];case"Variables and Data Types":return[{id:"q1",question:"Which of the following is a valid variable declaration in Java?",options:["int 1x=10;","int x=10;","float x=10.0;",'string x="hello";'],correctAnswer:1,explanation:"int x=10; is valid. Variable names cannot start with a digit."},{id:"q2",question:"Which data type is used to store true/false values?",options:["int","boolean","char","float"],correctAnswer:1,explanation:"boolean is used for true/false."},{id:"q3",question:"What is the default value of a local variable in Java?",options:["0","null","Depends on type","No default value"],correctAnswer:3,explanation:"Local variables must be initialized before use."},{id:"q4",question:"Which of these is a floating point data type?",options:["int","float","char","boolean"],correctAnswer:1,explanation:"float is a floating point type."},{id:"q5",question:"Which keyword is used to declare a constant in Java?",options:["const","final","static","constant"],correctAnswer:1,explanation:"final is used to declare constants."}];case"Control Structures":return[{id:"q1",question:"Which statement is used for decision making in Java?",options:["for","if","while","switch"],correctAnswer:1,explanation:"if is used for decision making."},{id:"q2",question:"Which loop is guaranteed to execute at least once?",options:["for","while","do-while","foreach"],correctAnswer:2,explanation:"do-while executes at least once."},{id:"q3",question:'What is the output of: int x=5; if(x>3) System.out.print("Hi"); else System.out.print("Bye");',options:["Hi","Bye","HiBye","Error"],correctAnswer:0,explanation:'x>3 is true, so "Hi" is printed.'},{id:"q4",question:"Which keyword is used to exit a loop in Java?",options:["exit","stop","break","return"],correctAnswer:2,explanation:"break exits a loop."},{id:"q5",question:"Which of these is not a valid loop in Java?",options:["for","while","repeat-until","do-while"],correctAnswer:2,explanation:"repeat-until is not a Java loop."}];case"Object-Oriented Programming":return[{id:"q1",question:"Which concept allows using the same method name with different implementations?",options:["Inheritance","Polymorphism","Encapsulation","Abstraction"],correctAnswer:1,explanation:"Polymorphism allows this."},{id:"q2",question:"Which keyword is used to inherit a class in Java?",options:["inherits","extends","implements","instanceof"],correctAnswer:1,explanation:"extends is used for inheritance."},{id:"q3",question:"What is data hiding in OOP called?",options:["Polymorphism","Abstraction","Encapsulation","Overloading"],correctAnswer:2,explanation:"Encapsulation is data hiding."},{id:"q4",question:"Which of these is not a pillar of OOP?",options:["Inheritance","Polymorphism","Compilation","Abstraction"],correctAnswer:2,explanation:"Compilation is not a pillar of OOP."},{id:"q5",question:"Which keyword is used to create an object in Java?",options:["new","create","object","make"],correctAnswer:0,explanation:"new is used to create objects."}];case"Exception Handling":return[{id:"q1",question:"Which keyword is used to handle exceptions in Java?",options:["try","catch","throw","final"],correctAnswer:1,explanation:"catch handles exceptions."},{id:"q2",question:"Which block is always executed whether an exception is handled or not?",options:["try","catch","finally","throw"],correctAnswer:2,explanation:"finally always executes."},{id:"q3",question:"Which exception is thrown when dividing by zero?",options:["NullPointerException","ArithmeticException","IOException","ClassNotFoundException"],correctAnswer:1,explanation:"ArithmeticException is thrown."},{id:"q4",question:"How do you throw a custom exception?",options:["throw new Exception();","raise Exception();","error Exception();","throw Exception;"],correctAnswer:0,explanation:"throw new Exception(); is correct."},{id:"q5",question:"Which keyword is used to manually throw an exception?",options:["catch","throw","throws","final"],correctAnswer:1,explanation:"throw is used to manually throw exceptions."}];case"Collections Framework":return[{id:"q1",question:"Which interface is the root of the Java Collections Framework?",options:["List","Set","Collection","Map"],correctAnswer:2,explanation:"Collection is the root interface."},{id:"q2",question:"Which class implements a dynamic array in Java?",options:["Array","ArrayList","LinkedList","HashSet"],correctAnswer:1,explanation:"ArrayList implements a dynamic array."},{id:"q3",question:"Which collection does not allow duplicate elements?",options:["List","Set","Map","Queue"],correctAnswer:1,explanation:"Set does not allow duplicates."},{id:"q4",question:"Which method is used to add an element to a list?",options:["insert()","add()","append()","push()"],correctAnswer:1,explanation:"add() is used to add elements."},{id:"q5",question:"Which class is used to store key-value pairs?",options:["List","Set","Map","Queue"],correctAnswer:2,explanation:"Map stores key-value pairs."}];case"Multithreading and Concurrency":return[{id:"q1",question:"Which keyword is used to create a thread in Java?",options:["thread","run","start","extends"],correctAnswer:2,explanation:"start() is used to begin a thread."},{id:"q2",question:"Which interface must be implemented to create a thread?",options:["Runnable","Threadable","Callable","Executor"],correctAnswer:0,explanation:"Runnable must be implemented."},{id:"q3",question:"Which method is used to pause a thread?",options:["wait()","sleep()","pause()","stop()"],correctAnswer:1,explanation:"sleep() pauses a thread."},{id:"q4",question:"Which keyword is used to prevent thread interference?",options:["static","final","synchronized","volatile"],correctAnswer:2,explanation:"synchronized prevents interference."},{id:"q5",question:"Which class is used for thread-safe collections?",options:["ArrayList","Vector","HashMap","LinkedList"],correctAnswer:1,explanation:"Vector is thread-safe."}];case"Design Patterns":return[{id:"q1",question:"Which pattern ensures only one instance of a class exists?",options:["Factory","Singleton","Builder","Adapter"],correctAnswer:1,explanation:"Singleton ensures a single instance."},{id:"q2",question:"Which pattern provides a simplified interface to a complex system?",options:["Adapter","Facade","Observer","Decorator"],correctAnswer:1,explanation:"Facade provides a simplified interface."},{id:"q3",question:"Which pattern allows objects to be notified of changes in other objects?",options:["Observer","Strategy","Command","Prototype"],correctAnswer:0,explanation:"Observer notifies objects of changes."},{id:"q4",question:"Which pattern is used to build complex objects step by step?",options:["Builder","Factory","Adapter","Proxy"],correctAnswer:0,explanation:"Builder builds objects step by step."},{id:"q5",question:"Which pattern converts the interface of a class into another interface?",options:["Adapter","Decorator","Facade","Singleton"],correctAnswer:0,explanation:"Adapter converts interfaces."}];case"Performance Optimization":return[{id:"q1",question:"Which tool is commonly used for Java performance profiling?",options:["JProfiler","JConsole","JVisualVM","All of the above"],correctAnswer:3,explanation:"All listed tools are used for profiling."},{id:"q2",question:"Which collection is best for fast lookup by key?",options:["ArrayList","LinkedList","HashMap","TreeSet"],correctAnswer:2,explanation:"HashMap is best for fast key lookup."},{id:"q3",question:"Which keyword is used to prevent method inlining by the compiler?",options:["final","static","synchronized","native"],correctAnswer:2,explanation:"synchronized can prevent inlining."},{id:"q4",question:"What is the main benefit of using StringBuilder over String concatenation?",options:["Faster performance","Less memory","Easier syntax","No benefit"],correctAnswer:0,explanation:"StringBuilder is faster for repeated concatenation."},{id:"q5",question:"Which JVM option enables garbage collection logging?",options:["-Xlog:gc","-Xmx","-Xms","-Xss"],correctAnswer:0,explanation:"-Xlog:gc enables GC logging."}];default:return[]}}const yn=[{id:"java-beginner-1",title:"Java Fundamentals",description:"Learn the basics of Java programming language",videoUrl:"https://www.youtube.com/embed/grEKMHGYyns",skillLevel:"beginner",order:1,duration:45,isLocked:!1,quiz:{id:"quiz-beginner-1",moduleId:"java-beginner-1",passingScore:70,questions:pn("Java Fundamentals")}},{id:"java-beginner-2",title:"Variables and Data Types",description:"Understanding Java variables and primitive data types",videoUrl:"https://www.youtube.com/embed/2Y2bXfEk0tA",skillLevel:"beginner",order:2,duration:40,isLocked:!0,quiz:{id:"quiz-beginner-2",moduleId:"java-beginner-2",passingScore:70,questions:pn("Variables and Data Types")}},{id:"java-beginner-3",title:"Control Structures",description:"Learn about loops and conditional statements",videoUrl:"https://www.youtube.com/embed/ldYLYRNaucM",skillLevel:"beginner",order:3,duration:50,isLocked:!0,quiz:{id:"quiz-beginner-3",moduleId:"java-beginner-3",passingScore:70,questions:pn("Control Structures")}},{id:"java-intermediate-1",title:"Object-Oriented Programming",description:"Deep dive into OOP concepts in Java",videoUrl:"https://www.youtube.com/embed/6T_HgnjoYwM",skillLevel:"intermediate",order:4,duration:60,isLocked:!0,quiz:{id:"quiz-intermediate-1",moduleId:"java-intermediate-1",passingScore:75,questions:pn("Object-Oriented Programming")}},{id:"java-intermediate-2",title:"Exception Handling",description:"Learn to handle errors gracefully in Java",videoUrl:"https://www.youtube.com/embed/1XAfapkBQjk",skillLevel:"intermediate",order:5,duration:45,isLocked:!0,quiz:{id:"quiz-intermediate-2",moduleId:"java-intermediate-2",passingScore:75,questions:pn("Exception Handling")}},{id:"java-intermediate-3",title:"Collections Framework",description:"Master Java Collections and data structures",videoUrl:"https://www.youtube.com/embed/rzA7UJ-hQn4",skillLevel:"intermediate",order:6,duration:55,isLocked:!0,quiz:{id:"quiz-intermediate-3",moduleId:"java-intermediate-3",passingScore:75,questions:pn("Collections Framework")}},{id:"java-advanced-1",title:"Multithreading and Concurrency",description:"Advanced threading concepts and concurrent programming",videoUrl:"https://www.youtube.com/embed/r_MbozD32eo",skillLevel:"advanced",order:7,duration:70,isLocked:!0,quiz:{id:"quiz-advanced-1",moduleId:"java-advanced-1",passingScore:80,questions:pn("Multithreading and Concurrency")}},{id:"java-advanced-2",title:"Design Patterns",description:"Learn common design patterns in Java",videoUrl:"https://www.youtube.com/embed/v9ejT8FO-7I",skillLevel:"advanced",order:8,duration:65,isLocked:!0,quiz:{id:"quiz-advanced-2",moduleId:"java-advanced-2",passingScore:80,questions:pn("Design Patterns")}},{id:"java-advanced-3",title:"Performance Optimization",description:"Advanced techniques for optimizing Java applications",videoUrl:"https://www.youtube.com/embed/ftcvNRNmVfY",skillLevel:"advanced",order:9,duration:75,isLocked:!0,quiz:{id:"quiz-advanced-3",moduleId:"java-advanced-3",passingScore:80,questions:pn("Performance Optimization")}}],av=[{id:"cheer-1",type:"motivational",title:"Quick Energy Boost! ⚡",content:`You're doing amazing! Remember: "The expert in anything was once a beginner." Keep coding and keep growing! 🚀`},{id:"cheer-2",type:"quiz",title:"Quick Brain Teaser! 🧠",content:'What does "Java" originally refer to?',options:["A coffee type","An island","A programming language","All of the above"],correctAnswer:3},{id:"cheer-3",type:"motivational",title:"Success Mindset 💪",content:"Every line of code you write is a step forward! Developers aren't born, they're built through practice. You've got this! 🎯"},{id:"cheer-4",type:"game",title:"Code Word Scramble! 🎮",content:"Unscramble this Java keyword: CILUPB",options:["BUCKET","PUBLIC","PICNIC","CLUB"],correctAnswer:1}],tO=({currentModule:t,onModuleSelect:e})=>{const{userData:n,logout:r}=Dn(),{progress:i}=Hu(),o=(()=>{if(!n)return[];const u=n.skillLevel;return u==="beginner"?yn:u==="intermediate"?yn.filter(c=>c.skillLevel==="intermediate"||c.skillLevel==="advanced"):u==="advanced"?yn.filter(c=>c.skillLevel==="advanced"):[]})(),l=u=>{var m;if(!i)return!1;const c=o.findIndex(g=>g.id===u);if(c===0)return!0;const f=(m=o[c-1])==null?void 0:m.id;return i.completedModules.includes(f)};return p.jsxs("div",{className:"w-80 bg-white border-r border-gray-200 h-screen flex flex-col",children:[p.jsxs("div",{className:"p-6 border-b border-gray-200 flex-shrink-0",children:[p.jsxs("div",{className:"flex items-center space-x-3 mb-4",children:[p.jsx("div",{className:"w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center",children:p.jsx(Ed,{className:"w-5 h-5 text-white"})}),p.jsxs("div",{children:[p.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Eduzy"}),(n==null?void 0:n.displayName)&&p.jsxs("p",{className:"text-sm text-gray-700 mt-1",children:["Hello, ",n.displayName," 👋"]})]})]}),p.jsxs("div",{className:"flex items-center space-x-3",children:[p.jsx("div",{className:"w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center",children:p.jsx(mp,{className:"w-4 h-4 text-gray-600"})}),p.jsxs("div",{children:[p.jsx("p",{className:"font-medium text-gray-900",children:n==null?void 0:n.displayName}),p.jsxs("p",{className:"text-xs text-gray-500 capitalize",children:[n==null?void 0:n.skillLevel," Level"]})]})]})]}),p.jsxs("div",{className:"flex-1 overflow-y-auto p-4",children:[p.jsx("h2",{className:"text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4",children:"Java Course Modules"}),p.jsx("div",{className:"space-y-2",children:o.map(u=>{const c=l(u.id),f=i==null?void 0:i.completedModules.includes(u.id),m=t===u.id;return p.jsxs("div",{onClick:()=>c&&e(u.id),className:`relative p-4 rounded-lg border transition-all duration-200 cursor-pointer group ${m?"bg-blue-50 border-blue-200 shadow-md":c?"border-gray-200 hover:border-gray-300 hover:shadow-sm":"border-gray-100 bg-gray-50 cursor-not-allowed opacity-60"}`,children:[p.jsxs("div",{className:"flex items-center space-x-3",children:[p.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center ${f?"bg-green-100":m?"bg-blue-100":c?"bg-gray-100":"bg-gray-50"}`,children:f?p.jsx(pp,{className:"w-5 h-5 text-green-600"}):c?p.jsx(Hb,{className:`w-5 h-5 ${m?"text-blue-600":"text-gray-600"}`}):p.jsx(Go,{className:"w-5 h-5 text-gray-400"})}),p.jsxs("div",{className:"flex-1 min-w-0",children:[p.jsx("h3",{className:`font-medium truncate ${m?"text-blue-900":c?"text-gray-900":"text-gray-400"}`,children:u.title}),p.jsxs("p",{className:`text-sm truncate ${m?"text-blue-600":c?"text-gray-500":"text-gray-400"}`,children:[u.duration," minutes"]})]}),p.jsx("div",{className:`text-xs px-2 py-1 rounded-full ${u.skillLevel==="beginner"?"bg-green-100 text-green-700":u.skillLevel==="intermediate"?"bg-blue-100 text-blue-700":"bg-purple-100 text-purple-700"}`,children:u.skillLevel})]}),!c&&p.jsx("div",{className:"absolute inset-0 bg-gray-50 bg-opacity-75 rounded-lg flex items-center justify-center",children:p.jsxs("div",{className:"text-center",children:[p.jsx(Go,{className:"w-6 h-6 text-gray-400 mx-auto mb-1"}),p.jsx("p",{className:"text-xs text-gray-500",children:"Complete previous module"})]})})]},u.id)})})]}),p.jsx("div",{className:"p-4 border-t border-gray-200 flex-shrink-0",children:p.jsxs("button",{onClick:r,className:"w-full flex items-center justify-center space-x-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors",children:[p.jsx(Bb,{className:"w-4 h-4"}),p.jsx("span",{children:"Sign Out"})]})})]})},M1=({module:t,onClose:e,onComplete:n})=>{const[r,i]=H.useState(0),[s,o]=H.useState([]),[l,u]=H.useState(!1),[c,f]=H.useState(0),{submitQuiz:m}=Hu(),g=t.quiz.questions,_=O=>{const j=[...s];j[r]=O,o(j)},R=()=>{r<g.length-1?i(r+1):D()},N=()=>{r>0&&i(r-1)},D=async()=>{const O=s.reduce((F,E,v)=>E===g[v].correctAnswer?F+1:F,0),j=Math.round(O/g.length*100);f(j),u(!0),await m(t.id,j)},S=()=>{n(c)};if(l){const O=c>=t.quiz.passingScore;return p.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",children:p.jsxs("div",{className:"bg-white rounded-2xl max-w-md w-full p-8 text-center",children:[p.jsx("div",{className:`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 ${O?"bg-green-100":"bg-red-100"}`,children:O?p.jsx(Wu,{className:"w-10 h-10 text-green-600"}):p.jsx(Qb,{className:"w-10 h-10 text-red-600"})}),p.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-4",children:O?"Congratulations!":"Keep Learning!"}),p.jsxs("div",{className:"mb-6",children:[p.jsxs("div",{className:"text-4xl font-bold text-gray-900 mb-2",children:[c,"%"]}),p.jsx("p",{className:"text-gray-600",children:O?"You passed! Next module unlocked.":`You need ${t.quiz.passingScore}% to pass. Try again!`})]}),p.jsxs("div",{className:"space-y-4",children:[p.jsx("div",{className:"bg-gray-50 rounded-lg p-4",children:p.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[p.jsxs("div",{children:[p.jsx("span",{className:"text-gray-500",children:"Correct Answers"}),p.jsxs("div",{className:"font-semibold text-green-600",children:[s.filter((j,F)=>j===g[F].correctAnswer).length,"/",g.length]})]}),p.jsxs("div",{children:[p.jsx("span",{className:"text-gray-500",children:"Passing Score"}),p.jsxs("div",{className:"font-semibold text-blue-600",children:[t.quiz.passingScore,"%"]})]})]})}),p.jsx("button",{onClick:S,className:`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${O?"bg-green-600 text-white hover:bg-green-700":"bg-blue-600 text-white hover:bg-blue-700"}`,children:O?"Continue Learning":"Try Again"})]})]})})}const w=g[r],A=s[r];return p.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",children:p.jsxs("div",{className:"bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",children:[p.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200",children:[p.jsxs("div",{children:[p.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"Module Quiz"}),p.jsxs("p",{className:"text-gray-600 mt-1",children:["Question ",r+1," of ",g.length]})]}),p.jsx("button",{onClick:e,className:"w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",children:p.jsx(gp,{className:"w-6 h-6"})})]}),p.jsx("div",{className:"px-6 pt-4",children:p.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:p.jsx("div",{className:"bg-blue-600 h-2 rounded-full transition-all duration-300",style:{width:`${(r+1)/g.length*100}%`}})})}),p.jsxs("div",{className:"p-6",children:[p.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-6",children:w.question}),p.jsx("div",{className:"space-y-3 mb-8",children:w.options.map((O,j)=>p.jsx("button",{onClick:()=>_(j),className:`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${A===j?"border-blue-500 bg-blue-50 shadow-md":"border-gray-200 hover:border-gray-300 hover:bg-gray-50"}`,children:p.jsxs("div",{className:"flex items-center space-x-3",children:[p.jsx("div",{className:`w-6 h-6 rounded-full border-2 flex items-center justify-center ${A===j?"border-blue-500 bg-blue-500":"border-gray-300"}`,children:A===j&&p.jsx("div",{className:"w-3 h-3 bg-white rounded-full"})}),p.jsx("span",{className:"font-medium text-gray-900",children:O})]})},j))}),p.jsxs("div",{className:"flex justify-between",children:[p.jsx("button",{onClick:N,disabled:r===0,className:"px-6 py-2 text-gray-600 font-medium hover:text-gray-800 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors",children:"Previous"}),p.jsx("button",{onClick:R,disabled:A===void 0,className:"px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",children:r===g.length-1?"Finish Quiz":"Next"})]})]})]})})},nO=({moduleId:t})=>{var _;const{progress:e}=Hu(),[n,r]=H.useState(!1),[i,s]=H.useState(!1);H.useEffect(()=>{s(!1)},[t]);const o=yn.find(R=>R.id===t);if(!o)return p.jsx("div",{className:"flex-1 flex items-center justify-center bg-gray-50",children:p.jsxs("div",{className:"text-center",children:[p.jsx("div",{className:"w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4",children:p.jsx(Td,{className:"w-8 h-8 text-gray-400"})}),p.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:"Module not found"}),p.jsx("p",{className:"text-gray-600",children:"Please select a module from the sidebar"})]})});const l=(e==null?void 0:e.completedModules.includes(t))||!1,u=(e==null?void 0:e.quizScores[t])||0,f=(((_=o.quiz)==null?void 0:_.questions)||[]).length===5,m=()=>{r(!0)},g=()=>{r(!1)};return p.jsxs("div",{className:"flex-1 bg-gray-50 overflow-y-auto",children:[p.jsxs("div",{className:"max-w-4xl mx-auto p-6",children:[p.jsx("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6",children:p.jsx("div",{className:"flex items-start justify-between",children:p.jsxs("div",{className:"flex-1",children:[p.jsxs("div",{className:"flex items-center space-x-3 mb-4",children:[p.jsx("div",{className:`px-3 py-1 rounded-full text-sm font-medium ${o.skillLevel==="beginner"?"bg-green-100 text-green-700":o.skillLevel==="intermediate"?"bg-blue-100 text-blue-700":"bg-purple-100 text-purple-700"}`,children:o.skillLevel.charAt(0).toUpperCase()+o.skillLevel.slice(1)}),l&&p.jsxs("div",{className:"flex items-center space-x-1 text-green-600",children:[p.jsx(pp,{className:"w-4 h-4"}),p.jsx("span",{className:"text-sm font-medium",children:"Completed"})]})]}),p.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-3",children:o.title}),p.jsx("p",{className:"text-lg text-gray-600 mb-4",children:o.description}),p.jsxs("div",{className:"flex items-center space-x-4 text-sm text-gray-500",children:[p.jsxs("div",{className:"flex items-center space-x-1",children:[p.jsx(jb,{className:"w-4 h-4"}),p.jsxs("span",{children:[o.duration," minutes"]})]}),u>0&&p.jsx("div",{className:"flex items-center space-x-1",children:p.jsxs("span",{children:["Quiz Score: ",u,"%"]})})]})]})})}),p.jsx("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 mb-6 overflow-hidden",children:p.jsx("div",{className:"aspect-video",children:p.jsx("iframe",{src:o.videoUrl,title:o.title,className:"w-full h-full",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,onLoad:()=>{setTimeout(()=>s(!0),3e3)}})})}),i&&p.jsx("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-6",children:p.jsxs("div",{className:"text-center",children:[p.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:l?"Quiz Completed!":"Attend Quiz to unlock next module"}),!f&&p.jsx("div",{className:"mb-4 text-red-600 font-semibold",children:"This module's quiz does not have 5 questions. Please add 5 questions for a complete quiz."}),p.jsxs("div",{className:"space-y-4",children:[p.jsx("p",{className:"text-gray-600",children:l?`You scored ${u}%. You can retake the quiz to improve your score.`:`Attend the quiz (5 questions) to unlock the next module. You need ${o.quiz.passingScore}% or higher to pass.`}),p.jsxs("button",{onClick:m,className:"inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg",disabled:!f,children:[p.jsx(Td,{className:"w-5 h-5"}),p.jsx("span",{children:l?"Retake Quiz":"Attend Quiz"})]})]})]})})]}),n&&p.jsx(M1,{module:o,onClose:()=>r(!1),onComplete:g})]})};var lv;(function(t){t.STRING="string",t.NUMBER="number",t.INTEGER="integer",t.BOOLEAN="boolean",t.ARRAY="array",t.OBJECT="object"})(lv||(lv={}));/**
 * @license
 * Copyright 2024 Google LLC
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
 */var uv;(function(t){t.LANGUAGE_UNSPECIFIED="language_unspecified",t.PYTHON="python"})(uv||(uv={}));var cv;(function(t){t.OUTCOME_UNSPECIFIED="outcome_unspecified",t.OUTCOME_OK="outcome_ok",t.OUTCOME_FAILED="outcome_failed",t.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(cv||(cv={}));/**
 * @license
 * Copyright 2024 Google LLC
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
 */const hv=["user","model","function","system"];var dv;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",t.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY"})(dv||(dv={}));var fv;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})(fv||(fv={}));var pv;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(pv||(pv={}));var mv;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"})(mv||(mv={}));var vo;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.LANGUAGE="LANGUAGE",t.BLOCKLIST="BLOCKLIST",t.PROHIBITED_CONTENT="PROHIBITED_CONTENT",t.SPII="SPII",t.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",t.OTHER="OTHER"})(vo||(vo={}));var gv;(function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"})(gv||(gv={}));var yv;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE"})(yv||(yv={}));var vv;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.MODE_DYNAMIC="MODE_DYNAMIC"})(vv||(vv={}));/**
 * @license
 * Copyright 2024 Google LLC
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
 */class et extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class _i extends et{constructor(e,n){super(e),this.response=n}}class j1 extends et{constructor(e,n,r,i){super(e),this.status=n,this.statusText=r,this.errorDetails=i}}class mr extends et{}class F1 extends et{}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const rO="https://generativelanguage.googleapis.com",iO="v1beta",sO="0.24.1",oO="genai-js";var si;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"})(si||(si={}));class aO{constructor(e,n,r,i,s){this.model=e,this.task=n,this.apiKey=r,this.stream=i,this.requestOptions=s}toString(){var e,n;const r=((e=this.requestOptions)===null||e===void 0?void 0:e.apiVersion)||iO;let s=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||rO}/${r}/${this.model}:${this.task}`;return this.stream&&(s+="?alt=sse"),s}}function lO(t){const e=[];return t!=null&&t.apiClient&&e.push(t.apiClient),e.push(`${oO}/${sO}`),e.join(" ")}async function uO(t){var e;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",lO(t.requestOptions)),n.append("x-goog-api-key",t.apiKey);let r=(e=t.requestOptions)===null||e===void 0?void 0:e.customHeaders;if(r){if(!(r instanceof Headers))try{r=new Headers(r)}catch(i){throw new mr(`unable to convert customHeaders value ${JSON.stringify(r)} to Headers: ${i.message}`)}for(const[i,s]of r.entries()){if(i==="x-goog-api-key")throw new mr(`Cannot set reserved header name ${i}`);if(i==="x-goog-api-client")throw new mr(`Header name ${i} can only be set using the apiClient field`);n.append(i,s)}}return n}async function cO(t,e,n,r,i,s){const o=new aO(t,e,n,r,s);return{url:o.toString(),fetchOptions:Object.assign(Object.assign({},pO(s)),{method:"POST",headers:await uO(o),body:i})}}async function ha(t,e,n,r,i,s={},o=fetch){const{url:l,fetchOptions:u}=await cO(t,e,n,r,i,s);return hO(l,u,o)}async function hO(t,e,n=fetch){let r;try{r=await n(t,e)}catch(i){dO(i,t)}return r.ok||await fO(r,t),r}function dO(t,e){let n=t;throw n.name==="AbortError"?(n=new F1(`Request aborted when fetching ${e.toString()}: ${t.message}`),n.stack=t.stack):t instanceof j1||t instanceof mr||(n=new et(`Error fetching from ${e.toString()}: ${t.message}`),n.stack=t.stack),n}async function fO(t,e){let n="",r;try{const i=await t.json();n=i.error.message,i.error.details&&(n+=` ${JSON.stringify(i.error.details)}`,r=i.error.details)}catch{}throw new j1(`Error fetching from ${e.toString()}: [${t.status} ${t.statusText}] ${n}`,t.status,t.statusText,r)}function pO(t){const e={};if((t==null?void 0:t.signal)!==void 0||(t==null?void 0:t.timeout)>=0){const n=new AbortController;(t==null?void 0:t.timeout)>=0&&setTimeout(()=>n.abort(),t.timeout),t!=null&&t.signal&&t.signal.addEventListener("abort",()=>{n.abort()}),e.signal=n.signal}return e}/**
 * @license
 * Copyright 2024 Google LLC
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
 */function vp(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),gl(t.candidates[0]))throw new _i(`${Gn(t)}`,t);return mO(t)}else if(t.promptFeedback)throw new _i(`Text not available. ${Gn(t)}`,t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),gl(t.candidates[0]))throw new _i(`${Gn(t)}`,t);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),_v(t)[0]}else if(t.promptFeedback)throw new _i(`Function call not available. ${Gn(t)}`,t)},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),gl(t.candidates[0]))throw new _i(`${Gn(t)}`,t);return _v(t)}else if(t.promptFeedback)throw new _i(`Function call not available. ${Gn(t)}`,t)},t}function mO(t){var e,n,r,i;const s=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const o of(i=(r=t.candidates)===null||r===void 0?void 0:r[0].content)===null||i===void 0?void 0:i.parts)o.text&&s.push(o.text),o.executableCode&&s.push("\n```"+o.executableCode.language+`
`+o.executableCode.code+"\n```\n"),o.codeExecutionResult&&s.push("\n```\n"+o.codeExecutionResult.output+"\n```\n");return s.length>0?s.join(""):""}function _v(t){var e,n,r,i;const s=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const o of(i=(r=t.candidates)===null||r===void 0?void 0:r[0].content)===null||i===void 0?void 0:i.parts)o.functionCall&&s.push(o.functionCall);if(s.length>0)return s}const gO=[vo.RECITATION,vo.SAFETY,vo.LANGUAGE];function gl(t){return!!t.finishReason&&gO.includes(t.finishReason)}function Gn(t){var e,n,r;let i="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)i+="Response was blocked",!((e=t.promptFeedback)===null||e===void 0)&&e.blockReason&&(i+=` due to ${t.promptFeedback.blockReason}`),!((n=t.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(i+=`: ${t.promptFeedback.blockReasonMessage}`);else if(!((r=t.candidates)===null||r===void 0)&&r[0]){const s=t.candidates[0];gl(s)&&(i+=`Candidate was blocked due to ${s.finishReason}`,s.finishMessage&&(i+=`: ${s.finishMessage}`))}return i}function Ko(t){return this instanceof Ko?(this.v=t,this):new Ko(t)}function yO(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),i,s=[];return i={},o("next"),o("throw"),o("return"),i[Symbol.asyncIterator]=function(){return this},i;function o(g){r[g]&&(i[g]=function(_){return new Promise(function(R,N){s.push([g,_,R,N])>1||l(g,_)})})}function l(g,_){try{u(r[g](_))}catch(R){m(s[0][3],R)}}function u(g){g.value instanceof Ko?Promise.resolve(g.value.v).then(c,f):m(s[0][2],g)}function c(g){l("next",g)}function f(g){l("throw",g)}function m(g,_){g(_),s.shift(),s.length&&l(s[0][0],s[0][1])}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const wv=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function vO(t){const e=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=EO(e),[r,i]=n.tee();return{stream:wO(r),response:_O(i)}}async function _O(t){const e=[],n=t.getReader();for(;;){const{done:r,value:i}=await n.read();if(r)return vp(TO(e));e.push(i)}}function wO(t){return yO(this,arguments,function*(){const n=t.getReader();for(;;){const{value:r,done:i}=yield Ko(n.read());if(i)break;yield yield Ko(vp(r))}})}function EO(t){const e=t.getReader();return new ReadableStream({start(r){let i="";return s();function s(){return e.read().then(({value:o,done:l})=>{if(l){if(i.trim()){r.error(new et("Failed to parse stream"));return}r.close();return}i+=o;let u=i.match(wv),c;for(;u;){try{c=JSON.parse(u[1])}catch{r.error(new et(`Error parsing JSON response: "${u[1]}"`));return}r.enqueue(c),i=i.substring(u[0].length),u=i.match(wv)}return s()}).catch(o=>{let l=o;throw l.stack=o.stack,l.name==="AbortError"?l=new F1("Request aborted when reading from the stream"):l=new et("Error reading from the stream"),l})}}})}function TO(t){const e=t[t.length-1],n={promptFeedback:e==null?void 0:e.promptFeedback};for(const r of t){if(r.candidates){let i=0;for(const s of r.candidates)if(n.candidates||(n.candidates=[]),n.candidates[i]||(n.candidates[i]={index:i}),n.candidates[i].citationMetadata=s.citationMetadata,n.candidates[i].groundingMetadata=s.groundingMetadata,n.candidates[i].finishReason=s.finishReason,n.candidates[i].finishMessage=s.finishMessage,n.candidates[i].safetyRatings=s.safetyRatings,s.content&&s.content.parts){n.candidates[i].content||(n.candidates[i].content={role:s.content.role||"user",parts:[]});const o={};for(const l of s.content.parts)l.text&&(o.text=l.text),l.functionCall&&(o.functionCall=l.functionCall),l.executableCode&&(o.executableCode=l.executableCode),l.codeExecutionResult&&(o.codeExecutionResult=l.codeExecutionResult),Object.keys(o).length===0&&(o.text=""),n.candidates[i].content.parts.push(o)}i++}r.usageMetadata&&(n.usageMetadata=r.usageMetadata)}return n}/**
 * @license
 * Copyright 2024 Google LLC
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
 */async function U1(t,e,n,r){const i=await ha(e,si.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(n),r);return vO(i)}async function z1(t,e,n,r){const s=await(await ha(e,si.GENERATE_CONTENT,t,!1,JSON.stringify(n),r)).json();return{response:vp(s)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */function B1(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function Qo(t){let e=[];if(typeof t=="string")e=[{text:t}];else for(const n of t)typeof n=="string"?e.push({text:n}):e.push(n);return IO(e)}function IO(t){const e={role:"user",parts:[]},n={role:"function",parts:[]};let r=!1,i=!1;for(const s of t)"functionResponse"in s?(n.parts.push(s),i=!0):(e.parts.push(s),r=!0);if(r&&i)throw new et("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!r&&!i)throw new et("No content is provided for sending chat message.");return r?e:n}function SO(t,e){var n;let r={model:e==null?void 0:e.model,generationConfig:e==null?void 0:e.generationConfig,safetySettings:e==null?void 0:e.safetySettings,tools:e==null?void 0:e.tools,toolConfig:e==null?void 0:e.toolConfig,systemInstruction:e==null?void 0:e.systemInstruction,cachedContent:(n=e==null?void 0:e.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const i=t.generateContentRequest!=null;if(t.contents){if(i)throw new mr("CountTokensRequest must have one of contents or generateContentRequest, not both.");r.contents=t.contents}else if(i)r=Object.assign(Object.assign({},r),t.generateContentRequest);else{const s=Qo(t);r.contents=[s]}return{generateContentRequest:r}}function Ev(t){let e;return t.contents?e=t:e={contents:[Qo(t)]},t.systemInstruction&&(e.systemInstruction=B1(t.systemInstruction)),e}function AO(t){return typeof t=="string"||Array.isArray(t)?{content:Qo(t)}:t}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const Tv=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],xO={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function CO(t){let e=!1;for(const n of t){const{role:r,parts:i}=n;if(!e&&r!=="user")throw new et(`First content should be with role 'user', got ${r}`);if(!hv.includes(r))throw new et(`Each item should include role field. Got ${r} but valid roles are: ${JSON.stringify(hv)}`);if(!Array.isArray(i))throw new et("Content should have 'parts' property with an array of Parts");if(i.length===0)throw new et("Each Content should have at least one part");const s={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const l of i)for(const u of Tv)u in l&&(s[u]+=1);const o=xO[r];for(const l of Tv)if(!o.includes(l)&&s[l]>0)throw new et(`Content with role '${r}' can't contain '${l}' part`);e=!0}}function Iv(t){var e;if(t.candidates===void 0||t.candidates.length===0)return!1;const n=(e=t.candidates[0])===null||e===void 0?void 0:e.content;if(n===void 0||n.parts===void 0||n.parts.length===0)return!1;for(const r of n.parts)if(r===void 0||Object.keys(r).length===0||r.text!==void 0&&r.text==="")return!1;return!0}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const Sv="SILENT_ERROR";class RO{constructor(e,n,r,i={}){this.model=n,this.params=r,this._requestOptions=i,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,r!=null&&r.history&&(CO(r.history),this._history=r.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,n={}){var r,i,s,o,l,u;await this._sendPromise;const c=Qo(e),f={safetySettings:(r=this.params)===null||r===void 0?void 0:r.safetySettings,generationConfig:(i=this.params)===null||i===void 0?void 0:i.generationConfig,tools:(s=this.params)===null||s===void 0?void 0:s.tools,toolConfig:(o=this.params)===null||o===void 0?void 0:o.toolConfig,systemInstruction:(l=this.params)===null||l===void 0?void 0:l.systemInstruction,cachedContent:(u=this.params)===null||u===void 0?void 0:u.cachedContent,contents:[...this._history,c]},m=Object.assign(Object.assign({},this._requestOptions),n);let g;return this._sendPromise=this._sendPromise.then(()=>z1(this._apiKey,this.model,f,m)).then(_=>{var R;if(Iv(_.response)){this._history.push(c);const N=Object.assign({parts:[],role:"model"},(R=_.response.candidates)===null||R===void 0?void 0:R[0].content);this._history.push(N)}else{const N=Gn(_.response);N&&console.warn(`sendMessage() was unsuccessful. ${N}. Inspect response object for details.`)}g=_}).catch(_=>{throw this._sendPromise=Promise.resolve(),_}),await this._sendPromise,g}async sendMessageStream(e,n={}){var r,i,s,o,l,u;await this._sendPromise;const c=Qo(e),f={safetySettings:(r=this.params)===null||r===void 0?void 0:r.safetySettings,generationConfig:(i=this.params)===null||i===void 0?void 0:i.generationConfig,tools:(s=this.params)===null||s===void 0?void 0:s.tools,toolConfig:(o=this.params)===null||o===void 0?void 0:o.toolConfig,systemInstruction:(l=this.params)===null||l===void 0?void 0:l.systemInstruction,cachedContent:(u=this.params)===null||u===void 0?void 0:u.cachedContent,contents:[...this._history,c]},m=Object.assign(Object.assign({},this._requestOptions),n),g=U1(this._apiKey,this.model,f,m);return this._sendPromise=this._sendPromise.then(()=>g).catch(_=>{throw new Error(Sv)}).then(_=>_.response).then(_=>{if(Iv(_)){this._history.push(c);const R=Object.assign({},_.candidates[0].content);R.role||(R.role="model"),this._history.push(R)}else{const R=Gn(_);R&&console.warn(`sendMessageStream() was unsuccessful. ${R}. Inspect response object for details.`)}}).catch(_=>{_.message!==Sv&&console.error(_)}),g}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */async function kO(t,e,n,r){return(await ha(e,si.COUNT_TOKENS,t,!1,JSON.stringify(n),r)).json()}/**
 * @license
 * Copyright 2024 Google LLC
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
 */async function PO(t,e,n,r){return(await ha(e,si.EMBED_CONTENT,t,!1,JSON.stringify(n),r)).json()}async function NO(t,e,n,r){const i=n.requests.map(o=>Object.assign(Object.assign({},o),{model:e}));return(await ha(e,si.BATCH_EMBED_CONTENTS,t,!1,JSON.stringify({requests:i}),r)).json()}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Av{constructor(e,n,r={}){this.apiKey=e,this._requestOptions=r,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=B1(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(e,n={}){var r;const i=Ev(e),s=Object.assign(Object.assign({},this._requestOptions),n);return z1(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(r=this.cachedContent)===null||r===void 0?void 0:r.name},i),s)}async generateContentStream(e,n={}){var r;const i=Ev(e),s=Object.assign(Object.assign({},this._requestOptions),n);return U1(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(r=this.cachedContent)===null||r===void 0?void 0:r.name},i),s)}startChat(e){var n;return new RO(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},e),this._requestOptions)}async countTokens(e,n={}){const r=SO(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),i=Object.assign(Object.assign({},this._requestOptions),n);return kO(this.apiKey,this.model,r,i)}async embedContent(e,n={}){const r=AO(e),i=Object.assign(Object.assign({},this._requestOptions),n);return PO(this.apiKey,this.model,r,i)}async batchEmbedContents(e,n={}){const r=Object.assign(Object.assign({},this._requestOptions),n);return NO(this.apiKey,this.model,e,r)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class bO{constructor(e){this.apiKey=e}getGenerativeModel(e,n){if(!e.model)throw new et("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new Av(this.apiKey,e,n)}getGenerativeModelFromCachedContent(e,n,r){if(!e.name)throw new mr("Cached content must contain a `name` field.");if(!e.model)throw new mr("Cached content must contain a `model` field.");const i=["model","systemInstruction"];for(const o of i)if(n!=null&&n[o]&&e[o]&&(n==null?void 0:n[o])!==e[o]){if(o==="model"){const l=n.model.startsWith("models/")?n.model.replace("models/",""):n.model,u=e.model.startsWith("models/")?e.model.replace("models/",""):e.model;if(l===u)continue}throw new mr(`Different value for "${o}" specified in modelParams (${n[o]}) and cachedContent (${e[o]})`)}const s=Object.assign(Object.assign({},n),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new Av(this.apiKey,s,r)}}const OO="AIzaSyCTssa6kACvGcB23s6hombG6LmvHLuyMGk",DO=new bO(OO),nh=DO.getGenerativeModel({model:"gemini-2.0-flash-exp"}),LO=async(t,e="",n)=>{var r,i,s,o,l;try{const u=`You are Eduzy Assistant, an AI learning companion for the Eduzy e-learning platform. 
    Context: ${e}
    
    User question: ${t}
    
    Please provide a helpful, encouraging, and course-relevant response. Keep it concise but informative.`;if(nh.generateContentStream){const c=await nh.generateContentStream({contents:[{role:"user",parts:[{text:u}]}]});for await(const f of c.stream){const m=(l=(o=(s=(i=(r=f==null?void 0:f.candidates)==null?void 0:r[0])==null?void 0:i.content)==null?void 0:s.parts)==null?void 0:o[0])==null?void 0:l.text;m&&n(m)}}else{const f=await(await nh.generateContent(u)).response;n(f.text())}}catch(u){console.error("Gemini API Error:",u),n("I'm sorry, I'm having trouble connecting right now. Please try again in a moment!")}},VO=()=>{const[t,e]=H.useState(!1),[n,r]=H.useState([{id:"1",content:"Hi! I'm Eduzy Assistant 🤖 I'm here to help you with your Java learning journey. Ask me anything about the course content, programming concepts, or need some motivation!",isUser:!1,timestamp:new Date}]),[i,s]=H.useState(""),[o,l]=H.useState(!1),u=H.useRef(null),{userData:c}=Dn(),f=()=>{var _;(_=u.current)==null||_.scrollIntoView({behavior:"smooth"})};H.useEffect(()=>{f()},[n]);const m=async()=>{if(!i.trim()||o)return;const _={id:Date.now().toString(),content:i,isUser:!0,timestamp:new Date};r(D=>[...D,_]),s(""),l(!0);const R=(Date.now()+1).toString();let N="";r(D=>[...D,{id:R,content:"",isUser:!1,timestamp:new Date}]);try{const D=`User is learning Java at ${c==null?void 0:c.skillLevel} level. They are using the Eduzy e-learning platform.`;await LO(i,D,S=>{N+=S,r(w=>w.map(A=>A.id===R?{...A,content:N}:A))})}catch(D){console.error("Chatbot error:",D),r(S=>S.map(w=>w.id===R?{...w,content:"Sorry, I encountered an error. Please try again!"}:w))}finally{l(!1)}},g=_=>{_.key==="Enter"&&!_.shiftKey&&(_.preventDefault(),m())};return t?p.jsxs("div",{className:"fixed bottom-6 right-6 w-96 h-[32rem] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-40",children:[p.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-2xl",children:[p.jsxs("div",{className:"flex items-center space-x-3",children:[p.jsx("div",{className:"w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center",children:p.jsx(th,{className:"w-5 h-5"})}),p.jsxs("div",{children:[p.jsx("h3",{className:"font-semibold",children:"Eduzy Assistant"}),p.jsx("p",{className:"text-xs opacity-90",children:"Online • Ready to help"})]})]}),p.jsxs("div",{className:"flex items-center space-x-2",children:[p.jsx("button",{onClick:()=>e(!1),className:"w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors",children:p.jsx(qb,{className:"w-4 h-4"})}),p.jsx("button",{onClick:()=>e(!1),className:"w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors",children:p.jsx(gp,{className:"w-4 h-4"})})]})]}),p.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4",children:[n.map(_=>p.jsx("div",{className:`flex ${_.isUser?"justify-end":"justify-start"}`,children:p.jsx("div",{className:`max-w-[80%] p-3 rounded-2xl ${_.isUser?"bg-blue-500 text-white ml-4":"bg-gray-100 text-gray-800 mr-4"}`,children:p.jsxs("div",{className:"flex items-start space-x-2",children:[!_.isUser&&p.jsx(th,{className:"w-4 h-4 mt-1 text-blue-500 flex-shrink-0"}),p.jsxs("div",{children:[p.jsx("p",{className:"text-sm whitespace-pre-wrap",children:_.content}),p.jsx("p",{className:`text-xs mt-1 ${_.isUser?"text-blue-200":"text-gray-500"}`,children:_.timestamp.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]}),_.isUser&&p.jsx(mp,{className:"w-4 h-4 mt-1 text-blue-200 flex-shrink-0"})]})})},_.id)),o&&p.jsx("div",{className:"flex justify-start",children:p.jsx("div",{className:"bg-gray-100 text-gray-800 p-3 rounded-2xl mr-4",children:p.jsxs("div",{className:"flex items-center space-x-2",children:[p.jsx(th,{className:"w-4 h-4 text-blue-500"}),p.jsxs("div",{className:"flex space-x-1",children:[p.jsx("div",{className:"w-2 h-2 bg-gray-400 rounded-full animate-bounce"}),p.jsx("div",{className:"w-2 h-2 bg-gray-400 rounded-full animate-bounce",style:{animationDelay:"0.1s"}}),p.jsx("div",{className:"w-2 h-2 bg-gray-400 rounded-full animate-bounce",style:{animationDelay:"0.2s"}})]})]})})}),p.jsx("div",{ref:u})]}),p.jsx("div",{className:"p-4 border-t border-gray-200",children:p.jsxs("div",{className:"flex items-center space-x-2",children:[p.jsx("textarea",{value:i,onChange:_=>s(_.target.value),onKeyPress:g,placeholder:"Ask me anything about Java or your learning...",className:"flex-1 resize-none border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent",rows:2,disabled:o}),p.jsx("button",{onClick:m,disabled:!i.trim()||o,className:"w-10 h-10 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center",children:p.jsx(Wb,{className:"w-4 h-4"})})]})})]}):p.jsx("button",{onClick:()=>e(!0),className:"fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center z-40",children:p.jsx($b,{className:"w-8 h-8"})})},MO=({activity:t,onClose:e})=>{const[n,r]=H.useState(null),[i,s]=H.useState(!1),o=()=>{t.type==="quiz"||t.type==="game"?s(!0):e()},l=n===t.correctAnswer;return p.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",children:p.jsxs("div",{className:"bg-white rounded-2xl max-w-md w-full p-8 text-center",children:[p.jsx("div",{className:"w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-orange-400 to-pink-500 flex items-center justify-center mb-6",children:t.type==="motivational"?p.jsx(Ub,{className:"w-10 h-10 text-white"}):t.type==="quiz"?p.jsx(Wu,{className:"w-10 h-10 text-white"}):p.jsx(yp,{className:"w-10 h-10 text-white"})}),p.jsx("button",{onClick:e,className:"absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors",children:p.jsx(gp,{className:"w-5 h-5"})}),p.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:t.title}),i?p.jsxs("div",{className:"space-y-6",children:[p.jsx("div",{className:`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${l?"bg-green-100":"bg-blue-100"}`,children:p.jsx(pp,{className:`w-8 h-8 ${l?"text-green-600":"text-blue-600"}`})}),p.jsxs("div",{children:[p.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-2",children:l?"Excellent!":"Good try!"}),p.jsx("p",{className:"text-gray-600",children:l?"You got it right! Keep up the great work!":`The correct answer was: ${t.options[t.correctAnswer]}`})]}),p.jsx("div",{className:"bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4",children:p.jsx("p",{className:"text-sm text-gray-700 font-medium",children:"💡 Remember: Every challenge makes you stronger. Keep coding and keep learning!"})}),p.jsx("button",{onClick:e,className:"w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105",children:"Continue Learning"})]}):p.jsxs(p.Fragment,{children:[p.jsx("p",{className:"text-gray-600 mb-6 leading-relaxed",children:t.content}),t.options&&p.jsx("div",{className:"space-y-3 mb-6",children:t.options.map((u,c)=>p.jsx("button",{onClick:()=>r(c),className:`w-full text-left p-3 rounded-lg border-2 transition-all duration-200 ${n===c?"border-orange-500 bg-orange-50 shadow-md":"border-gray-200 hover:border-gray-300 hover:bg-gray-50"}`,children:p.jsxs("div",{className:"flex items-center space-x-3",children:[p.jsx("div",{className:`w-5 h-5 rounded-full border-2 flex items-center justify-center ${n===c?"border-orange-500 bg-orange-500":"border-gray-300"}`,children:n===c&&p.jsx("div",{className:"w-2 h-2 bg-white rounded-full"})}),p.jsx("span",{className:"text-gray-800",children:u})]})},c))}),p.jsx("button",{onClick:o,disabled:t.options&&n===null,className:"w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-orange-600 hover:to-pink-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105",children:t.type==="motivational"?"Thanks!":"Submit"})]})]})})},$1=({size:t="md",message:e})=>{const n={sm:"w-4 h-4",md:"w-8 h-8",lg:"w-12 h-12"};return p.jsxs("div",{className:"flex flex-col items-center justify-center p-8",children:[p.jsx("div",{className:`animate-spin rounded-full border-4 border-blue-200 border-t-blue-600 ${n[t]}`}),e&&p.jsx("p",{className:"mt-4 text-gray-600 animate-pulse",children:e})]})},jO=()=>{const{userData:t}=Dn(),{progress:e,updateProgress:n}=Hu(),[r,i]=H.useState(""),[s,o]=H.useState(null),[l,u]=H.useState(Date.now()),[c,f]=H.useState(!1);if(H.useEffect(()=>{if(t&&e){const g=t.skillLevel;let _=yn;if(g==="beginner"?_=yn:g==="intermediate"?_=yn.filter(R=>R.skillLevel==="intermediate"||R.skillLevel==="advanced"):g==="advanced"&&(_=yn.filter(R=>R.skillLevel==="advanced")),_.length>0){const R=_.find(N=>!e.completedModules.includes(N.id));i((R==null?void 0:R.id)||_[0].id)}}},[t,e]),H.useEffect(()=>{const _=setInterval(()=>{const R=Date.now(),N=R-l,D=(e==null?void 0:e.lastCheerUpTime)||0,S=R-D;if(N>18e4&&S>18e4){const w=av[Math.floor(Math.random()*av.length)];o(w),n({lastCheerUpTime:R})}},6e4);return()=>clearInterval(_)},[l,e,n]),!t||!e)return p.jsx($1,{size:"lg",message:"Loading your dashboard..."});const m=yn.find(g=>g.id===r);return p.jsxs("div",{className:"bg-gray-50 min-h-screen",children:[p.jsxs("div",{className:"fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200 shadow-sm z-20",style:{marginLeft:"20rem"},children:[p.jsx("div",{className:"text-2xl font-bold text-blue-700",children:"Eduzy Dashboard"}),p.jsxs("button",{onClick:()=>f(!0),className:"flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg",children:[p.jsx(Td,{className:"w-5 h-5"}),p.jsx("span",{children:"Attend Quiz"})]})]}),p.jsx("div",{className:"fixed top-0 left-0 h-screen w-80 z-30",children:p.jsx(tO,{currentModule:r,onModuleSelect:i})}),p.jsxs("div",{className:"ml-80 pt-24 min-h-screen",children:[p.jsx(nO,{moduleId:r}),p.jsx(VO,{}),s&&p.jsx(MO,{activity:s,onClose:()=>o(null)}),c&&m&&p.jsx(M1,{module:m,onClose:()=>f(!1),onComplete:()=>f(!1)})]})]})},FO=()=>{const{currentUser:t,userData:e,loading:n}=Dn();return n?p.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50",children:p.jsx($1,{size:"lg",message:"Loading Eduzy..."})}):t?e!=null&&e.selectedCourse?e.skillLevel===null?p.jsx(eO,{}):p.jsx(bb,{children:p.jsx(jO,{})}):p.jsx(Zb,{}):p.jsx(Xb,{})};function UO(){return p.jsx(Nb,{children:p.jsx(FO,{})})}j_(document.getElementById("root")).render(p.jsx(H.StrictMode,{children:p.jsx(UO,{})}));
