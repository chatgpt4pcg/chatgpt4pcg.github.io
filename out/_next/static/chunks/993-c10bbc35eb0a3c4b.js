(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[993],{993:function(e,t,r){"use strict";var i=r(959),o=r(8823),n=r.n(o);let a=e=>{var t;let{filePath:r}=e,i=(null===(t=r.split("\\").pop())||void 0===t?void 0:t.split("/").pop())||"",o=r.split(i).shift(),n=r.split(".").pop(),a=i.substring(0,i.lastIndexOf("."))||i;return{path:o,filename:a,extension:n||""}},l=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{filename:i,path:o,extension:n}=a({filePath:e});if(!["JPG","JPEG","WEBP","PNG","AVIF","GIF"].includes(n.toUpperCase()))return e;let l=n;["JPG","JPEG","PNG","GIF"].includes(n.toUpperCase())&&(l="WEBP");let s=o,c=null==s?void 0:s.substr(-1);"/"!=c&&(s+="/");let u=e.includes("_next/static/media"),d="".concat(u?"":s).concat("nextImageExportOptimizer","/").concat(i,"-opt-").concat(t,".").concat(l.toUpperCase());return r||"/"===d.charAt(0)||(d="/"+d),d},s=e=>{let{src:t,width:r}=e,i=t.split(".").pop();if(!i||!["JPG","JPEG","WEBP","PNG","GIF","AVIF"].includes(i.toUpperCase()))return console.error("The image ".concat(t," has an unsupported extension. Please use JPG, JPEG, WEBP, PNG, GIF or AVIF.")),t;let o=t.replace(/^(https?|ftp):\/\//,"").replace(/[/\\:*?"<>|#%]/g,"_").replace(/[\x00-\x1F\x7F]/g,"").trim();return l("".concat(o,".").concat(i),r,!0)},c=e=>{let{src:t,width:r}=e,i="object"==typeof t,o=i?t.src:t,n=i&&t.width||void 0;if(i&&n&&r>n){let e=[640,750,828,1080,1200,1920,2048,3840,16,32,48,64,96,128,256,384],t=null;for(let r=0;r<e.length;r++)Number(e[r])>=n&&(null===t||Number(e[r])<t)&&(t=Number(e[r]));if(null!==t)return l(o,t)}return o.startsWith("http")?s({src:o,width:r}):l(o,r)},u=e=>{let{src:t}=e,r="object"==typeof t?t.src:t,i=r.startsWith("http");return i||"/"===r.charAt(0)||(r="/"+r),r};t.Z=function(e){let{src:t,priority:r=!1,loading:o,className:a,width:d,height:f,onLoadingComplete:p,unoptimized:g,placeholder:h="blur",blurDataURL:m,style:v,onError:b,...w}=e,[y,E]=(0,i.useState)(!1),x=(0,i.useMemo)(()=>{if(m)return m;let e="object"==typeof t?t.src:t;return!0===g?e:e.startsWith("http")?s({src:e,width:10}):l(e,10)},[m,t,g]),P="object"==typeof t?t.src.endsWith(".svg"):t.endsWith(".svg"),[C,S]=(0,i.useState)(!1),j="blur"===h&&!P&&x&&x.startsWith("/")&&!C?{backgroundSize:(null==v?void 0:v.objectFit)||"cover",backgroundPosition:(null==v?void 0:v.objectPosition)||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:"url(".concat(x,")"),filter:"url(#sharpBlur)"}:void 0,I=i.createElement(n(),{...w,...d&&{width:d},...f&&{height:f},...o&&{loading:o},...a&&{className:a},...p&&{onLoadingComplete:p},...h&&{placeholder:j||C?"empty":h},...g&&{unoptimized:g},...r&&{priority:r},...P&&{unoptimized:!0},style:{...v,...j},loader:y||!0===g?u:e=>c({src:t,width:e.width}),blurDataURL:x,onError:e=>{E(!0),S(!0),b&&b(e)},onLoadingComplete:e=>{0===e.naturalWidth&&E(!0),S(!0),p&&p(e)},src:t});return j?i.createElement(i.Fragment,null,i.createElement("noscript",null,i.createElement(n(),{...w,...d&&{width:d},...f&&{height:f},...o&&{loading:o},...a&&{className:a},placeholder:"empty",...g&&{unoptimized:g},...r&&{priority:r},style:v,loader:y||!0===g?u:e=>c({src:t,width:e.width}),src:t})),I,i.createElement("svg",{style:{border:0,clip:"rect(0 0 0 0)",height:0,margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px"}},i.createElement("filter",{id:"sharpBlur"},i.createElement("feGaussianBlur",{stdDeviation:"20",colorInterpolationFilters:"sRGB"}),i.createElement("feColorMatrix",{type:"matrix",colorInterpolationFilters:"sRGB",values:"1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 9 0"}),i.createElement("feComposite",{in2:"SourceGraphic",operator:"in"})))):I}},4506:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(5321).Z,o=r(1322).Z,n=r(6687).Z,a=r(6239).Z,l=n(r(959)),s=o(r(1339)),c=r(7910),u=r(3199),d=r(3928);r(6513);var f=o(r(3534));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e){return void 0!==e.default}function h(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,r,o,n,a,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&a(!0),null==o?void 0:o.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,n=!1;o.current(i({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}}))}(null==n?void 0:n.current)&&n.current(e)}})}function v(e){let[t,r]=l.version.split("."),i=parseInt(t,10),o=parseInt(r,10);return i>18||18===i&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let b=l.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:o,widthInt:n,qualityInt:s,className:c,imgStyle:u,blurStyle:d,isLazy:f,fetchPriority:p,fill:g,placeholder:h,loading:b,srcString:w,config:y,unoptimized:E,loader:x,onLoadRef:P,onLoadingCompleteRef:C,setBlurComplete:S,setShowAltText:j,onLoad:I,onError:_}=e,z=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fetchPriority","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return b=f?"lazy":b,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},z,v(p),{loading:b,width:n,height:o,decoding:"async","data-nimg":g?"fill":"1",className:c,style:i({},u,d)},r,{ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(_&&(e.src=e.src),e.complete&&m(e,w,h,P,C,S,E))},[w,h,P,C,S,_,E,t]),onLoad:e=>{let t=e.currentTarget;m(t,w,h,P,C,S,E)},onError:e=>{j(!0),"blur"===h&&S(!0),_&&_(e)}})))}),w=l.forwardRef((e,t)=>{let r,o;var n,{src:m,sizes:w,unoptimized:y=!1,priority:E=!1,loading:x,className:P,quality:C,width:S,height:j,fill:I,style:_,onLoad:z,onLoadingComplete:G,placeholder:R="empty",blurDataURL:F,fetchPriority:k,layout:W,objectFit:A,objectPosition:B,lazyBoundary:N,lazyRoot:O}=e,M=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let L=l.useContext(d.ImageConfigContext),J=l.useMemo(()=>{let e=p||L||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return i({},e,{allSizes:t,deviceSizes:r})},[L]),D=M,U=D.loader||f.default;delete D.loader;let T="__next_img_default"in U;if(T){if("custom"===J.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=U;U=t=>{let{config:r}=t,i=a(t,["config"]);return e(i)}}if(W){"fill"===W&&(I=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[W];e&&(_=i({},_,e));let t={responsive:"100vw",fill:"100vw"}[W];t&&!w&&(w=t)}let V="",Z=h(S),q=h(j);if("object"==typeof(n=m)&&(g(n)||void 0!==n.src)){let e=g(m)?m.default:m;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(r=e.blurWidth,o=e.blurHeight,F=F||e.blurDataURL,V=e.src,!I){if(Z||q){if(Z&&!q){let t=Z/e.width;q=Math.round(e.height*t)}else if(!Z&&q){let t=q/e.height;Z=Math.round(e.width*t)}}else Z=e.width,q=e.height}}let Y=!E&&("lazy"===x||void 0===x);(!(m="string"==typeof m?m:V)||m.startsWith("data:")||m.startsWith("blob:"))&&(y=!0,Y=!1),J.unoptimized&&(y=!0),T&&m.endsWith(".svg")&&!J.dangerouslyAllowSVG&&(y=!0),E&&(k="high");let[H,$]=l.useState(!1),[K,Q]=l.useState(!1),X=h(C),ee=Object.assign(I?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:A,objectPosition:B}:{},K?{}:{color:"transparent"},_),et="blur"===R&&F&&!H?{backgroundSize:ee.objectFit||"cover",backgroundPosition:ee.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:Z,heightInt:q,blurWidth:r,blurHeight:o,blurDataURL:F,objectFit:ee.objectFit}),'")')}:{},er=function(e){let{config:t,src:r,unoptimized:i,width:o,quality:n,sizes:a,loader:l}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,r){let{deviceSizes:i,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let n=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:n,kind:"x"}}(t,o,a),u=s.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:s.map((e,i)=>"".concat(l({config:t,src:r,quality:n,width:e})," ").concat("w"===c?e:i+1).concat(c)).join(", "),src:l({config:t,src:r,quality:n,width:s[u]})}}({config:J,src:m,unoptimized:y,width:Z,quality:X,sizes:w,loader:U}),ei=m,eo=l.useRef(z);l.useEffect(()=>{eo.current=z},[z]);let en=l.useRef(G);l.useEffect(()=>{en.current=G},[G]);let ea=i({isLazy:Y,imgAttributes:er,heightInt:q,widthInt:Z,qualityInt:X,className:P,imgStyle:ee,blurStyle:et,loading:x,config:J,fetchPriority:k,fill:I,unoptimized:y,placeholder:R,loader:U,srcString:ei,onLoadRef:eo,onLoadingCompleteRef:en,setBlurComplete:$,setShowAltText:Q},D);return l.default.createElement(l.default.Fragment,null,l.default.createElement(b,Object.assign({},ea,{ref:t})),E?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+er.src+er.srcSet+er.sizes,rel:"preload",as:"image",href:er.srcSet?void 0:er.src,imageSrcSet:er.srcSet,imageSizes:er.sizes,crossOrigin:D.crossOrigin},v(k)))):null)});t.default=w,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7910:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:o,blurDataURL:n,objectFit:a}=e,l=i||t,s=o||r,c=n.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(l," ").concat(s,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(i&&o?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(n,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(n,"'/%3E%3C/svg%3E")}},3534:function(e,t){"use strict";function r(e){let{config:t,src:r,width:i,quality:o}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(i,"&q=").concat(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},8823:function(e,t,r){e.exports=r(4506)}}]);