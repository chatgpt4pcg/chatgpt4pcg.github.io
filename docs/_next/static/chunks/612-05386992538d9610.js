(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[612],{3612:function(e,t,r){"use strict";var i=r(959),o=r(464),n=r.n(o);let a=e=>{var t;let{filePath:r}=e,i=(null===(t=r.split("\\").pop())||void 0===t?void 0:t.split("/").pop())||"",o=r.split(i).shift(),n=r.split(".").pop(),a=i.substring(0,i.lastIndexOf("."))||i;return{path:o,filename:a,extension:n||""}},l=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{filename:i,path:o,extension:n}=a({filePath:e});if(!["JPG","JPEG","WEBP","PNG","AVIF","GIF"].includes(n.toUpperCase()))return e;let l=n;["JPG","JPEG","PNG","GIF"].includes(n.toUpperCase())&&(l="WEBP");let s=o,c=null==s?void 0:s.substr(-1);"/"!=c&&(s+="/");let u=e.includes("_next/static/media"),d="".concat(u?"":s).concat("nextImageExportOptimizer","/").concat(i,"-opt-").concat(t,".").concat(l.toUpperCase());return r||"/"===d.charAt(0)||(d="/"+d),d},s=e=>{let{src:t,width:r}=e,i=t.split(".").pop();if(!i||!["JPG","JPEG","WEBP","PNG","GIF","AVIF"].includes(i.toUpperCase()))return console.error("The image ".concat(t," has an unsupported extension. Please use JPG, JPEG, WEBP, PNG, GIF or AVIF.")),t;let o=t.replace(/^(https?|ftp):\/\//,"").replace(/[/\\:*?"<>|#%]/g,"_").replace(/[\x00-\x1F\x7F]/g,"").trim();return l("".concat(o,".").concat(i),r,!0)},c=e=>{let{src:t,width:r}=e,i="object"==typeof t,o=i?t.src:t,n=i&&t.width||void 0;if(i&&n&&r>n){let e=[640,750,828,1080,1200,1920,2048,3840,16,32,48,64,96,128,256,384],t=null;for(let r=0;r<e.length;r++)Number(e[r])>=n&&(null===t||Number(e[r])<t)&&(t=Number(e[r]));if(null!==t)return l(o,t)}return o.startsWith("http")?s({src:o,width:r}):l(o,r)},u=e=>{let{src:t}=e,r="object"==typeof t?t.src:t,i=r.startsWith("http");return i||"/"===r.charAt(0)||(r="/"+r),r};t.Z=function(e){let{src:t,priority:r=!1,loading:o,className:a,width:d,height:f,onLoadingComplete:p,unoptimized:g,placeholder:h="blur",blurDataURL:m,style:v,onError:b,...w}=e,[y,E]=(0,i.useState)(!1),x=(0,i.useMemo)(()=>{if(m)return m;let e="object"==typeof t?t.src:t;return!0===g?e:e.startsWith("http")?s({src:e,width:10}):l(e,10)},[m,t,g]),C="object"==typeof t?t.src.endsWith(".svg"):t.endsWith(".svg"),[P,S]=(0,i.useState)(!1),j="blur"===h&&!C&&x&&x.startsWith("/")&&!P?{backgroundSize:(null==v?void 0:v.objectFit)||"cover",backgroundPosition:(null==v?void 0:v.objectPosition)||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:"url(".concat(x,")"),filter:"url(#sharpBlur)"}:void 0,_=i.createElement(n(),{...w,...d&&{width:d},...f&&{height:f},...o&&{loading:o},...a&&{className:a},...p&&{onLoadingComplete:p},...h&&{placeholder:j||P?"empty":h},...g&&{unoptimized:g},...r&&{priority:r},...C&&{unoptimized:!0},style:{...v,...j},loader:y||!0===g?u:e=>c({src:t,width:e.width}),blurDataURL:x,onError:e=>{E(!0),S(!0),b&&b(e)},onLoadingComplete:e=>{0===e.naturalWidth&&E(!0),S(!0),p&&p(e)},src:t});return j?i.createElement(i.Fragment,null,i.createElement("noscript",null,i.createElement(n(),{...w,...d&&{width:d},...f&&{height:f},...o&&{loading:o},...a&&{className:a},placeholder:"empty",...g&&{unoptimized:g},...r&&{priority:r},style:v,loader:y||!0===g?u:e=>c({src:t,width:e.width}),src:t})),_,i.createElement("svg",{style:{border:0,clip:"rect(0 0 0 0)",height:0,margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px"}},i.createElement("filter",{id:"sharpBlur"},i.createElement("feGaussianBlur",{stdDeviation:"20",colorInterpolationFilters:"sRGB"}),i.createElement("feColorMatrix",{type:"matrix",colorInterpolationFilters:"sRGB",values:"1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 9 0"}),i.createElement("feComposite",{in2:"SourceGraphic",operator:"in"})))):_}},3252:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(5321).Z,o=r(1322).Z,n=r(6687).Z,a=r(6239).Z,l=n(r(959)),s=o(r(4369)),c=r(7525),u=r(527),d=r(7664);r(718);var f=o(r(6806));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e){return void 0!==e.default}function h(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,r,o,n,a,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&a(!0),null==o?void 0:o.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,n=!1;o.current(i({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}}))}(null==n?void 0:n.current)&&n.current(e)}})}let v=l.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:o,widthInt:n,qualityInt:s,className:c,imgStyle:u,blurStyle:d,isLazy:f,fill:p,placeholder:g,loading:h,srcString:v,config:b,unoptimized:w,loader:y,onLoadRef:E,onLoadingCompleteRef:x,setBlurComplete:C,setShowAltText:P,onLoad:S,onError:j}=e,_=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return h=f?"lazy":h,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},_,{loading:h,width:n,height:o,decoding:"async","data-nimg":p?"fill":"1",className:c,style:i({},u,d)},r,{ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(j&&(e.src=e.src),e.complete&&m(e,v,g,E,x,C,w))},[v,g,E,x,C,j,w,t]),onLoad:e=>{let t=e.currentTarget;m(t,v,g,E,x,C,w)},onError:e=>{P(!0),"blur"===g&&C(!0),j&&j(e)}})))}),b=l.forwardRef((e,t)=>{let r,o;var n,{src:m,sizes:b,unoptimized:w=!1,priority:y=!1,loading:E,className:x,quality:C,width:P,height:S,fill:j,style:_,onLoad:I,onLoadingComplete:z,placeholder:G="empty",blurDataURL:R,layout:F,objectFit:k,objectPosition:W,lazyBoundary:A,lazyRoot:B}=e,N=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let O=l.useContext(d.ImageConfigContext),M=l.useMemo(()=>{let e=p||O||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return i({},e,{allSizes:t,deviceSizes:r})},[O]),L=N,J=L.loader||f.default;delete L.loader;let D="__next_img_default"in J;if(D){if("custom"===M.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=J;J=t=>{let{config:r}=t,i=a(t,["config"]);return e(i)}}if(F){"fill"===F&&(j=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[F];e&&(_=i({},_,e));let t={responsive:"100vw",fill:"100vw"}[F];t&&!b&&(b=t)}let U="",T=h(P),V=h(S);if("object"==typeof(n=m)&&(g(n)||void 0!==n.src)){let e=g(m)?m.default:m;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(r=e.blurWidth,o=e.blurHeight,R=R||e.blurDataURL,U=e.src,!j){if(T||V){if(T&&!V){let t=T/e.width;V=Math.round(e.height*t)}else if(!T&&V){let t=V/e.height;T=Math.round(e.width*t)}}else T=e.width,V=e.height}}let Z=!y&&("lazy"===E||void 0===E);((m="string"==typeof m?m:U).startsWith("data:")||m.startsWith("blob:"))&&(w=!0,Z=!1),M.unoptimized&&(w=!0),D&&m.endsWith(".svg")&&!M.dangerouslyAllowSVG&&(w=!0);let[q,Y]=l.useState(!1),[H,$]=l.useState(!1),K=h(C),Q=Object.assign(j?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:k,objectPosition:W}:{},H?{}:{color:"transparent"},_),X="blur"===G&&R&&!q?{backgroundSize:Q.objectFit||"cover",backgroundPosition:Q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:T,heightInt:V,blurWidth:r,blurHeight:o,blurDataURL:R,objectFit:Q.objectFit}),'")')}:{},ee=function(e){let{config:t,src:r,unoptimized:i,width:o,quality:n,sizes:a,loader:l}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,r){let{deviceSizes:i,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let n=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:n,kind:"x"}}(t,o,a),u=s.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:s.map((e,i)=>"".concat(l({config:t,src:r,quality:n,width:e})," ").concat("w"===c?e:i+1).concat(c)).join(", "),src:l({config:t,src:r,quality:n,width:s[u]})}}({config:M,src:m,unoptimized:w,width:T,quality:K,sizes:b,loader:J}),et=m,er={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:L.crossOrigin},ei=l.useRef(I);l.useEffect(()=>{ei.current=I},[I]);let eo=l.useRef(z);l.useEffect(()=>{eo.current=z},[z]);let en=i({isLazy:Z,imgAttributes:ee,heightInt:V,widthInt:T,qualityInt:K,className:x,imgStyle:Q,blurStyle:X,loading:E,config:M,fill:j,unoptimized:w,placeholder:G,loader:J,srcString:et,onLoadRef:ei,onLoadingCompleteRef:eo,setBlurComplete:Y,setShowAltText:$},L);return l.default.createElement(l.default.Fragment,null,l.default.createElement(v,Object.assign({},en,{ref:t})),y?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},er))):null)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7525:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:o,blurDataURL:n,objectFit:a}=e,l=i||t,s=o||r,c=n.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(l," ").concat(s,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(i&&o?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(n,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(n,"'/%3E%3C/svg%3E")}},6806:function(e,t){"use strict";function r(e){let{config:t,src:r,width:i,quality:o}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(i,"&q=").concat(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},464:function(e,t,r){e.exports=r(3252)}}]);