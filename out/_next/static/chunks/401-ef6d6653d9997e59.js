(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[401],{7418:function(e,t,n){let r=n(959),o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"}))});e.exports=o},8407:function(e,t,n){let r=n(959),o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))});e.exports=o},4233:function(e,t,n){let r=n(959),o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))});e.exports=o},9486:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4434:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(1322).Z,o=n(6239).Z,a=r(n(959)),i=n(1507),c=n(4079),l=n(7535),u=n(5479),s=n(650),f=n(1426),d=n(6586),p=n(4156),h=n(9486),v=n(4087);let m=new Set;function g(e,t,n,r,o){if(o||c.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,a=t+"%"+n+"%"+o;if(m.has(a))return;m.add(a)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function y(e){return"string"==typeof e?e:l.formatUrl(e)}let b=a.default.forwardRef(function(e,t){let n,r;let{href:l,as:m,children:b,prefetch:w,passHref:E,replace:C,shallow:k,scroll:_,locale:M,onClick:x,onMouseEnter:L,onTouchStart:R,legacyBehavior:S=!1}=e,j=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=b,S&&("string"==typeof n||"number"==typeof n)&&(n=a.default.createElement("a",null,n));let T=!1!==w,P=a.default.useContext(f.RouterContext),N=a.default.useContext(d.AppRouterContext),O=null!=P?P:N,B=!P,{href:I,as:W}=a.default.useMemo(()=>{if(!P){let e=y(l);return{href:e,as:m?y(m):e}}let[e,t]=i.resolveHref(P,l,!0);return{href:e,as:m?i.resolveHref(P,m):t||e}},[P,l,m]),A=a.default.useRef(I),X=a.default.useRef(W);S&&(r=a.default.Children.only(n));let Y=S?r&&"object"==typeof r&&r.ref:t,[Z,D,H]=p.useIntersection({rootMargin:"200px"}),U=a.default.useCallback(e=>{(X.current!==W||A.current!==I)&&(H(),X.current=W,A.current=I),Z(e),Y&&("function"==typeof Y?Y(e):"object"==typeof Y&&(Y.current=e))},[W,Y,I,H,Z]);a.default.useEffect(()=>{O&&D&&T&&g(O,I,W,{locale:M},B)},[W,I,D,M,T,null==P?void 0:P.locale,O,B]);let K={ref:U,onClick(e){S||"function"!=typeof x||x(e),S&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),O&&!e.defaultPrevented&&function(e,t,n,r,o,i,l,u,s,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!s&&!c.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:i,locale:u,scroll:l}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!f})};s?a.default.startTransition(h):h()}(e,O,I,W,C,k,_,M,B,T)},onMouseEnter(e){S||"function"!=typeof L||L(e),S&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),O&&(T||!B)&&g(O,I,W,{locale:M,priority:!0,bypassPrefetchedCheck:!0},B)},onTouchStart(e){S||"function"!=typeof R||R(e),S&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),O&&(T||!B)&&g(O,I,W,{locale:M,priority:!0,bypassPrefetchedCheck:!0},B)}};if(u.isAbsoluteUrl(W))K.href=W;else if(!S||E||"a"===r.type&&!("href"in r.props)){let e=void 0!==M?M:null==P?void 0:P.locale,t=(null==P?void 0:P.isLocaleDomain)&&h.getDomainLocale(W,e,null==P?void 0:P.locales,null==P?void 0:P.domainLocales);K.href=t||v.addBasePath(s.addLocale(W,e,null==P?void 0:P.defaultLocale))}return S?a.default.cloneElement(r,K):a.default.createElement("a",Object.assign({},j,K),n)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4156:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:l}=e,u=l||!a,[s,f]=r.useState(!1),d=r.useRef(null),p=r.useCallback(e=>{d.current=e},[]);r.useEffect(()=>{if(a){if(u||s)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:a}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=c.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=i.get(r)))return t;let o=new Map,a=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:a,elements:o},c.push(n),i.set(n,t),t}(n);return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),i.delete(r);let e=c.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&c.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!s){let e=o.requestIdleCallback(()=>f(!0));return()=>o.cancelIdleCallback(e)}},[u,n,t,s,d.current]);let h=r.useCallback(()=>{f(!1)},[]);return[p,s,h]};var r=n(959),o=n(5107);let a="function"==typeof IntersectionObserver,i=new Map,c=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7666:function(e,t,n){e.exports=n(1339)},4598:function(e,t,n){e.exports=n(4434)},2241:function(e,t,n){"use strict";n.d(t,{Z:function(){return D}});var r,o,a,i,c,l,u=n(6583),s=n(959),f="right-scroll-bar-position",d="width-before-scroll-bar",p=(void 0===r&&(r={}),(void 0===o&&(o=function(e){return e}),a=[],i=!1,c={read:function(){if(i)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return a.length?a[a.length-1]:null},useMedium:function(e){var t=o(e,i);return a.push(t),function(){a=a.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(i=!0;a.length;){var t=a;a=[],t.forEach(e)}a={push:function(t){return e(t)},filter:function(){return a}}},assignMedium:function(e){i=!0;var t=[];if(a.length){var n=a;a=[],n.forEach(e),t=a}var r=function(){var n=t;t=[],n.forEach(e)},o=function(){return Promise.resolve().then(r)};o(),a={push:function(e){t.push(e),o()},filter:function(e){return t=t.filter(e),a}}}}).options=(0,u.__assign)({async:!0,ssr:!1},r),c),h=function(){},v=s.forwardRef(function(e,t){var n,r,o,a=s.useRef(null),i=s.useState({onScrollCapture:h,onWheelCapture:h,onTouchMoveCapture:h}),c=i[0],l=i[1],f=e.forwardProps,d=e.children,v=e.className,m=e.removeScrollBar,g=e.enabled,y=e.shards,b=e.sideCar,w=e.noIsolation,E=e.inert,C=e.allowPinchZoom,k=e.as,_=(0,u.__rest)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),M=(n=[a,t],r=function(e){return n.forEach(function(t){var n;return"function"==typeof(n=t)?n(e):n&&(n.current=e),n})},(o=(0,s.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,o.facade),x=(0,u.__assign)((0,u.__assign)({},_),c);return s.createElement(s.Fragment,null,g&&s.createElement(b,{sideCar:p,removeScrollBar:m,shards:y,noIsolation:w,inert:E,setCallbacks:l,allowPinchZoom:!!C,lockRef:a}),f?s.cloneElement(s.Children.only(d),(0,u.__assign)((0,u.__assign)({},x),{ref:M})):s.createElement(void 0===k?"div":k,(0,u.__assign)({},x,{className:v,ref:M}),d))});v.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},v.classNames={fullWidth:d,zeroRight:f};var m=function(e){var t=e.sideCar,n=(0,u.__rest)(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return s.createElement(r,(0,u.__assign)({},n))};m.isSideCarExport=!0;var g=function(){var e=0,t=null;return{add:function(r){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=l||n.nc;return t&&e.setAttribute("nonce",t),e}())){var o,a;(o=t).styleSheet?o.styleSheet.cssText=r:o.appendChild(document.createTextNode(r)),a=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(a)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},y=function(){var e=g();return function(t,n){s.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},b=function(){var e=y();return function(t){return e(t.styles,t.dynamic),null}},w={left:0,top:0,right:0,gap:0},E=function(e){return parseInt(e||"",10)||0},C=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[E(n),E(r),E(o)]},k=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return w;var t=C(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},_=b(),M=function(e,t,n,r){var o=e.left,a=e.top,i=e.right,c=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(c,"px ").concat(r,";\n  }\n  body {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(i,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(c,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(c,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(f," {\n    right: ").concat(c,"px ").concat(r,";\n  }\n  \n  .").concat(d," {\n    margin-right: ").concat(c,"px ").concat(r,";\n  }\n  \n  .").concat(f," .").concat(f," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(d," .").concat(d," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(c,"px;\n  }\n")},x=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r,a=s.useMemo(function(){return k(o)},[o]);return s.createElement(_,{styles:M(a,!t,o,n?"":"!important")})},L=!1;if("undefined"!=typeof window)try{var R=Object.defineProperty({},"passive",{get:function(){return L=!0,!0}});window.addEventListener("test",R,R),window.removeEventListener("test",R,R)}catch(e){L=!1}var S=!!L&&{passive:!1},j=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},T=function(e,t){var n=t;do{if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),P(e,n)){var r=N(e,n);if(r[1]>r[2])return!0}n=n.parentNode}while(n&&n!==document.body);return!1},P=function(e,t){return"v"===e?j(t,"overflowY"):j(t,"overflowX")},N=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},O=function(e,t,n,r,o){var a,i=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),c=i*r,l=n.target,u=t.contains(l),s=!1,f=c>0,d=0,p=0;do{var h=N(e,l),v=h[0],m=h[1]-h[2]-i*v;(v||m)&&P(e,l)&&(d+=m,p+=v),l=l.parentNode}while(!u&&l!==document.body||u&&(t.contains(l)||t===l));return f&&(o&&0===d||!o&&c>d)?s=!0:!f&&(o&&0===p||!o&&-c>p)&&(s=!0),s},B=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},I=function(e){return[e.deltaX,e.deltaY]},W=function(e){return e&&"current"in e?e.current:e},A=0,X=[],Y=(p.useMedium(function(e){var t=s.useRef([]),n=s.useRef([0,0]),r=s.useRef(),o=s.useState(A++)[0],a=s.useState(function(){return b()})[0],i=s.useRef(e);s.useEffect(function(){i.current=e},[e]),s.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(0,u.__spreadArray)([e.lockRef.current],(e.shards||[]).map(W),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var c=s.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!i.current.allowPinchZoom;var o,a=B(e),c=n.current,l="deltaX"in e?e.deltaX:c[0]-a[0],u="deltaY"in e?e.deltaY:c[1]-a[1],s=e.target,f=Math.abs(l)>Math.abs(u)?"h":"v";if("touches"in e&&"h"===f&&"range"===s.type)return!1;var d=T(f,s);if(!d)return!0;if(d?o=f:(o="v"===f?"h":"v",d=T(f,s)),!d)return!1;if(!r.current&&"changedTouches"in e&&(l||u)&&(r.current=o),!o)return!0;var p=r.current||o;return O(p,t,e,"h"===p?l:u,!0)},[]),l=s.useCallback(function(e){if(X.length&&X[X.length-1]===a){var n="deltaY"in e?I(e):B(e),r=t.current.filter(function(t){var r;return t.name===e.type&&t.target===e.target&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(i.current.shards||[]).map(W).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?c(e,o[0]):!i.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),f=s.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),d=s.useCallback(function(e){n.current=B(e),r.current=void 0},[]),p=s.useCallback(function(t){f(t.type,I(t),t.target,c(t,e.lockRef.current))},[]),h=s.useCallback(function(t){f(t.type,B(t),t.target,c(t,e.lockRef.current))},[]);s.useEffect(function(){return X.push(a),e.setCallbacks({onScrollCapture:p,onWheelCapture:p,onTouchMoveCapture:h}),document.addEventListener("wheel",l,S),document.addEventListener("touchmove",l,S),document.addEventListener("touchstart",d,S),function(){X=X.filter(function(e){return e!==a}),document.removeEventListener("wheel",l,S),document.removeEventListener("touchmove",l,S),document.removeEventListener("touchstart",d,S)}},[]);var v=e.removeScrollBar,m=e.inert;return s.createElement(s.Fragment,null,m?s.createElement(a,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,v?s.createElement(x,{gapMode:"margin"}):null)}),m),Z=s.forwardRef(function(e,t){return s.createElement(v,(0,u.__assign)({},e,{ref:t,sideCar:Y}))});Z.classNames=v.classNames;var D=Z}}]);