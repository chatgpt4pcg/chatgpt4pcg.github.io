(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[716],{7350:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/converter",function(){return n(2470)}])},798:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(1527);n(959);var i=n(5855),a=n.n(i);function o(e){let{children:t}=e;return(0,r.jsx)("h1",{className:a().header,children:t})}},5490:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(1527);n(959);var i=n(7318),a=n.n(i);function o(){return(0,r.jsx)("footer",{className:a().footer,children:"Organized with ❤️ by the teams."})}var s=n(1525),l=n.n(s),c=n(2231),d=n.n(c),u=n(1184);function h(){let e=(0,u.useRouter)();return(0,r.jsxs)("nav",{className:d().navigation,children:[(0,r.jsx)("li",{className:"".concat(d().navItem," ").concat("/"==e.pathname?d().active:""),children:(0,r.jsx)(l(),{href:"/",children:"Home"})}),(0,r.jsx)("li",{className:"".concat(d().navItem," ").concat("/prompt"==e.pathname?d().active:""),children:(0,r.jsx)(l(),{href:"/prompt",children:"Prompt"})}),(0,r.jsx)("li",{className:"".concat(d().navItem," ").concat("/submission"==e.pathname?d().active:""),children:(0,r.jsx)(l(),{href:"/submission",children:"Submission"})}),(0,r.jsx)("li",{className:"".concat(d().navItem," ").concat("/evaluation"==e.pathname?d().active:""),children:(0,r.jsx)(l(),{href:"/evaluation",children:"Evaluation"})}),(0,r.jsx)("li",{className:"".concat(d().navItem," ").concat("/rules"==e.pathname?d().active:""),children:(0,r.jsx)(l(),{href:"/rules",children:"Rules"})}),(0,r.jsx)("li",{className:"".concat(d().navItem," ").concat("/resources"==e.pathname?d().active:""),children:(0,r.jsx)(l(),{href:"/resources",children:"Resources"})})]})}var f=n(5946),m=n.n(f);function p(e){let{children:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h,{}),(0,r.jsxs)("main",{className:m().layout,children:[t,(0,r.jsx)(o,{})]})]})}},9140:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(1527);n(959);var i=n(4305),a=n.n(i);function o(e){let{children:t}=e;return(0,r.jsx)("h2",{className:a().pageSubHeader,children:t})}},6534:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(1527);n(959);var i=n(8281),a=n.n(i);function o(e){let{children:t}=e;return(0,r.jsx)("p",{className:a().paragraph,children:t})}},4648:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(1527);n(959);var i=n(7161),a=n.n(i);function o(e){let{children:t}=e;return(0,r.jsx)("section",{className:a().section,children:t})}},4088:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(1527);n(959);var i=n(218),a=n.n(i);function o(e){let{children:t}=e;return(0,r.jsx)("h2",{className:a().sectionHeader,children:t})}},5557:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(1527);n(959);var i=n(2122),a=n.n(i);function o(e){let{children:t}=e;return(0,r.jsx)("h3",{className:a().subSectionHeader,children:t})}},2470:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return z}});var r,i,a=n(1527),o=n(959),s=n(1232);class l{constructor(e=new s.Z("0"),t=new s.Z("0")){this.x=e,this.y=t}}class c{constructor(e=0,t=0){this.width=e,this.height=t}}class d{constructor(e,t,n){this.id=e,this.type=t,this.rotation=n,this.position=new l,this.size=u(i[e.toUpperCase()])}}function u(e){if(e===i.B31)return new c(3,1);if(e===i.B13)return new c(1,3);if(e===i.B11)return new c(1,1);throw Error("BlockType does not exist.")}(r=i||(i={}))[r.B31=0]="B31",r[r.B13=1]="B13",r[r.B11=2]="B11";let h="ab_drop(",f=new s.Z("0.2401"),m=new s.Z("18"),p=new l(new s.Z("2"),new s.Z("-3.5"));function x(e){let t=e[0];for(let n of e)n.position.x.isLessThan(t.position.x)&&(t=n);return t}function g(e){let t=e[0];for(let n of e)n.position.x.isGreaterThan(t.position.x)&&(t=n);return t}function v(e){let t=e[0];for(let n of e)n.position.y.isGreaterThan(t.position.y)&&(t=n);return t}function _(e){let t=[],n=function(e,t){let n=[];for(let e=0;e<16;e++){n.push([]);for(let t=0;t<20;t++)n[e].push(0)}return n}(0,0),r=e.split("\n");for(let e of r){if(e.substring(0,h.length)!==h)continue;let r=function(e){let t=e.indexOf(","),n=e.substring(h.length+1,t-1).toUpperCase(),r=i[n];return r}(e),a=function(e){let t=e.indexOf(","),n=e.substring(t+1).split(")")[0].trim(),r=parseInt(n,10);return r}(e),o=function(e){if(e===i.B31)return new d("b31","RectSmall",0);if(e===i.B13)return new d("b13","RectSmall",90);if(e===i.B11)return new d("b11","SquareTiny",0);throw Error("BlockType does not exist.")}(r),c=function(e,t,n){let r=u(e),i=(r.width-1)/2,a=r.width>1,o={x:t,y:n.length-1};for(let e=n.length-1;e>=0&&0===n[e][t]&&(!a||function(e,t,n,r){let i=!0;for(let a=1;a<=r;a++){let r=n-a<0||n+a>e[0].length-1;if(r||0!==e[t][n-a]||0!==e[t][n+a]){i=!1;break}}return i}(n,e,t,i));e--)o.y=e;return o}(r,a,n);n=function(e,t,n,r){let i=e.map(e=>[...e]),a=r.width>1,o=r.height>1,s=(r.width-1)/2;if(i[t.y][n]=1,a)for(let e=1;e<=s;e++)i[t.y][n-e]=1,i[t.y][n+e]=1;if(o)for(let e=1;e<r.height;e++)i[t.y+e][n]=1;return i}(n,c,a,o.size),o.position=new l(new s.Z(c.x),new s.Z(c.y)),t.push(o)}return[t,n]}var w=n(6534),j=n(5557),C=n(4770),b=n.n(C);function y(e){let{blocksResult:t,fileCounter:n}=e,r=(0,o.useRef)(null),i=(0,o.useRef)(null),[s,l]=(0,o.useState)(!0),[c,d]=(0,o.useState)(!1);function u(){let e=r.current.getContext("2d"),t=i.current.getContext("2d");e.canvas.width=480,e.canvas.height=384,e.clearRect(0,0,480,384),e.fillStyle="white",t.canvas.width=480,t.canvas.height=384,t.fillStyle="white",t.fillRect(0,0,480,384),e.strokeStyle="lightgray";for(let t=1;t<20;t++)e.moveTo(24*t,0),e.lineTo(24*t,384),e.stroke();for(let t=1;t<16;t++)e.moveTo(0,24*t),e.lineTo(480,24*t),e.stroke()}return(0,o.useEffect)(()=>{s&&u()},[]),(0,o.useEffect)(()=>{s?u():function(){let e=r.current.getContext("2d"),t=i.current.getContext("2d");e.clearRect(0,0,480,384),e.fillStyle="white",e.fillRect(0,0,480,384),t.clearRect(0,0,480,384),t.fillStyle="white",t.fillRect(0,0,480,384)}(),t.length>0&&(c?function(){let e=r.current.getContext("2d"),n=i.current.getContext("2d"),a=x(t),o=g(t),s=v(t),l=parseInt(a.position.x.toFixed()),c=19-parseInt(o.position.x.toFixed()),d=15-parseInt(s.position.y.toFixed()),u=24*Math.ceil((l+c)/2),h=24*Math.floor(d/2);t.forEach(t=>{let r=24*parseInt(t.position.x.toFixed()),i=24*parseInt(t.position.y.toFixed()),a=24*t.size.width,o=24*t.size.height,s=24*Math.floor(t.size.width/2),l=new Image(a,o);l.src="".concat(t.id,".png"),l.onload=()=>{e.drawImage(l,r-s,384-o-i,a,o),n.drawImage(l,r-s+u,384-o-i-h,a,o)}})}():function(){let e=r.current.getContext("2d"),n=i.current.getContext("2d"),a=x(t),o=g(t),s=v(t),l=parseInt(a.position.x.toFixed()),c=19-parseInt(o.position.x.toFixed()),d=15-parseInt(s.position.y.toFixed()),u=24*Math.ceil((l+c)/2),h=24*Math.floor(d/2);t.forEach(t=>{let r=24*parseInt(t.position.x.toFixed()),i=24*parseInt(t.position.y.toFixed()),a=24*t.size.width,o=24*t.size.height,s=24*Math.floor(t.size.width/2);e.fillStyle="black",e.fillRect(r-s,384-o-i,a,o),n.fillStyle="black",n.fillRect(r-s+u,384-o-i-h,a,o)})}())},[t,s,c]),(0,a.jsxs)("div",{className:b().container,children:[(0,a.jsx)(j.Z,{children:"Image Result"}),(0,a.jsx)(w.Z,{children:"When an image is downloaded, it will consistently position the structure at the center and incorporate the same texture as demonstrated here."}),(0,a.jsxs)("div",{className:b().header,children:[(0,a.jsxs)(w.Z,{children:[(0,a.jsx)("strong",{children:"Settings"}),":"]}),(0,a.jsxs)("div",{className:b().fieldGroup,children:[(0,a.jsx)("input",{type:"checkbox",name:"toggle-grid",id:"toggle-grid",checked:s,onChange:e=>l(e.target.checked)}),(0,a.jsx)("label",{htmlFor:"toggle-grid",children:"Toggle Grid"})]}),0!==t.length&&(0,a.jsxs)("div",{className:b().fieldGroup,children:[(0,a.jsx)("input",{type:"checkbox",name:"toggle-block",id:"toggle-block",checked:c,onChange:e=>d(e.target.checked)}),(0,a.jsx)("label",{htmlFor:"toggle-block",children:"Toggle Block Image"})]})]}),(0,a.jsx)("div",{className:b().canvasContainer,children:(0,a.jsx)("canvas",{ref:r,className:b().area})}),0!==t.length&&(0,a.jsx)("div",{className:b().actions,children:(0,a.jsx)("a",{className:b().standardBtn,href:i.current.toDataURL("image/png"),download:"result_".concat(String(n).padStart(2,"0"),".png"),children:"Download image"})}),(0,a.jsx)("div",{className:b().imageCanvasContainer,children:(0,a.jsx)("canvas",{ref:i,className:b().imageArea})})]})}var B=n(1196),S=n.n(B);function N(e){let{fileCounter:t,xmlResult:n}=e,r=(0,o.useRef)(null);return(0,a.jsxs)("div",{className:S().container,children:[(0,a.jsx)(j.Z,{children:"XML Result"}),(0,a.jsxs)(w.Z,{children:["Please Note that the XML file needs to be placed in the"," ",(0,a.jsx)("code",{children:"Assets/StreamingAssets/Levels"})," folder of the"," ",(0,a.jsx)("a",{href:"https://github.com/chatgpt4pcg/modified-science-birds",children:"Science Birds."})]}),(0,a.jsxs)("div",{className:S().formField,children:[(0,a.jsx)("label",{className:S().fieldLabel,htmlFor:"result-field"}),(0,a.jsx)("textarea",{readOnly:!0,ref:r,id:"result-field",value:n,rows:15})]}),n&&(0,a.jsxs)("div",{className:S().actions,children:[(0,a.jsx)("button",{className:S().standardBtn,onClick:function(){r.current.select(),r.current.setSelectionRange(0,99999),navigator.clipboard.writeText(r.current.value),alert("Copied!")},children:"Copy to clipboard"}),(0,a.jsx)("a",{className:S().standardBtn,href:URL.createObjectURL(new Blob([n],{type:"application/xml"})),download:"result_".concat(String(t).padStart(2,"0"),".xml"),children:"Download XML file"})]})]})}var I=n(4301),Z=n.n(I);function k(){let[e,t]=(0,o.useState)(""),[n,r]=(0,o.useState)(""),[i,l]=(0,o.useState)(0),[c,d]=(0,o.useState)([]);return(0,o.useEffect)(()=>{window.localStorage.getItem("fileCounter")&&l(parseInt(window.localStorage.getItem("fileCounter")))},[]),(0,o.useEffect)(()=>{window.localStorage.setItem("fileCounter",i.toString())},[i]),(0,o.useEffect)(()=>{0===e.length&&(r(""),d([]))},[e]),(0,a.jsxs)("form",{className:Z().form,onSubmit:function(t){t.preventDefault();try{let t=function(e){let t='<?xml version="1.0" encoding="utf-16"?>\n',[n,r]=function(e){let t="";t+="  <GameObjects>\n";let[n,r]=_(e),[i,a]=function(e,t){let n=t.map(e=>[...e]),r=n[0].length;for(let e=0;e<n[0].length;e++)for(let t of n)0!==t[e]&&(r=Math.min(r,e));for(let t of e)t.position.x=t.position.x.minus(r);for(let e=0;e<n.length;e++){n[e]=n[e].slice(r);for(let t=0;t<r;t++)n[e].push(0)}return[e,n]}(n,r);for(let e of i){let n=new s.Z(e.size.width),r=new s.Z(e.size.height),i=n.multipliedBy(f).dividedBy(2),a=r.multipliedBy(f).dividedBy(2),o=e.size.width>1?f:new s.Z("0"),l=e.position.x.multipliedBy(f).plus(i).plus(p.x).minus(o),c=e.position.y.multipliedBy(f).plus(a).plus(p.y);t+='    <Block type="'.concat(e.type,'" material="wood" x="').concat(l.toFixed(),'" y="').concat(c.toFixed(),'" rotation="').concat(e.rotation,'" />\n')}return[t+="  </GameObjects>\n",a,r]}(e),i=function(e){let t=0;for(let n of e){let e=n.reduce((e,t)=>e+t,0);e>t&&(t=e)}let n=new s.Z(t);return p.x.abs().plus(n.multipliedBy(f))}(r),a=function(e){let t=0;for(let n=0;n<e.length;n++){let r=e[n],i=r.reduce((e,t)=>e+t,0);i>0&&(t=n)}let n=new s.Z(t+1);return p.y.abs().plus(n.multipliedBy(f))}(r),o='<Level width="'.concat(parseInt(i.dividedBy(m).toFixed())+3,'">\n'),l=function(e,t){let n=new s.Z("1.6"),r=new s.Z("5"),i=s.Z.max(t.multipliedBy(n),e).multipliedBy(2),a=s.Z.max(i,17),o=a.plus(r);return'  <Camera x="'.concat(p.x.toFixed(),'" y="0" minWidth="').concat(a.toFixed(),'" maxWidth="').concat(o.toFixed(),'" />\n')}(i,a),c=function(){let e={x:-9,y:-2.5};return'  <Slingshot x="'.concat(e.x,'" y="').concat(e.y,'" />\n')}();return t+=o+l+'  <Birds>\n    <Bird type="BirdRed" />\n  </Birds>\n'+c+n+"</Level>"}(e.toLowerCase()),[n]=_(e.toLowerCase());r(t),l(i+1),d(n)}catch(e){alert(e)}},children:[(0,a.jsxs)("div",{className:Z().formField,children:[(0,a.jsx)("label",{className:Z().fieldLabel,htmlFor:"raw-input-field",children:(0,a.jsx)(j.Z,{children:"String Input"})}),(0,a.jsx)("textarea",{id:"raw-input-field",value:e,onChange:e=>{t(e.target.value)},placeholder:"ab_drop('b31', 1)\nab_drop('b11', 0)\nab_drop('b13', 1)",rows:8})]}),(0,a.jsx)("button",{type:"submit",className:Z().standardBtn,children:"Convert"}),(0,a.jsxs)("div",{className:Z().resultContainer,children:[(0,a.jsx)(N,{xmlResult:n,fileCounter:i}),(0,a.jsx)(y,{blocksResult:c,fileCounter:i})]})]})}var L=n(3670),R=n.n(L),F=n(798),T=n(5490),G=n(9140),M=n(4648),E=n(4088);function z(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(R(),{children:[(0,a.jsx)("title",{children:"The 1st ChatGPT4PCG Competition: Character-like Level Generation for Science Birds"}),(0,a.jsx)("meta",{name:"description",content:"The ChatGPT4PCG Competition invites participants to use ChatGPT to generate stable levels for Science Birds resembling English characters. Participants must submit a prompt and instructions, and the generated levels will undergo testing for stability and similarity using an OCR model, offering a chance to showcase prompt engineering skills and push the boundaries of natural language processing and procedural content generation."}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,a.jsxs)(T.Z,{children:[(0,a.jsx)(G.Z,{children:"The 1st ChatGPT4PCG Competition"}),(0,a.jsx)(F.Z,{children:"Character-like Level Generation for Science Birds"}),(0,a.jsxs)(M.Z,{children:[(0,a.jsx)(E.Z,{children:"Converter"}),(0,a.jsx)(w.Z,{children:"The converter is a tool that creates an XML file and image from a series of ab_drop() function string. The resulting XML file provides a structured representation of the functions while the image shows the visual representation of the functions. It is recommended to use the converter on a desktop device to ensure optimal usage and accurate generation of output files."}),(0,a.jsx)(k,{})]})]})]})}},4301:function(e){e.exports={form:"Converter_form__nEoXD",formField:"Converter_formField__flpPC",fieldLabel:"Converter_fieldLabel__69cwL",actions:"Converter_actions__R1zfi",standardBtn:"Converter_standardBtn__zD_zr",resultContainer:"Converter_resultContainer__2lJt6"}},4770:function(e){e.exports={container:"ImageConverter_container__RQAf1",header:"ImageConverter_header__86ARO",canvasContainer:"ImageConverter_canvasContainer__XidCW",imageCanvasContainer:"ImageConverter_imageCanvasContainer__4sIMZ",imageArea:"ImageConverter_imageArea__G8XLm",area:"ImageConverter_area__guTJZ",fieldGroup:"ImageConverter_fieldGroup__XEJ_U",actions:"ImageConverter_actions__C_S86",standardBtn:"ImageConverter_standardBtn__Hqmty"}},1196:function(e){e.exports={container:"XMLConverter_container__OiymG",form:"XMLConverter_form__BmT2P",formField:"XMLConverter_formField__bAhZY",fieldLabel:"XMLConverter_fieldLabel__3OZk1",actions:"XMLConverter_actions__6_5TA",standardBtn:"XMLConverter_standardBtn__fclo8"}},7318:function(e){e.exports={footer:"Footer_footer__1IwEk"}},2231:function(e){e.exports={navigation:"NavBar_navigation__fMOBn",navItem:"NavBar_navItem__DhAYz",active:"NavBar_active__Bcfd2"}},5855:function(e){e.exports={header:"PageHeader_header__dx9xv"}},5946:function(e){e.exports={layout:"PageLayout_layout__arqmj"}},4305:function(e){e.exports={pageSubHeader:"PageSubHeader_pageSubHeader__kGaWg"}},8281:function(e){e.exports={paragraph:"Paragraph_paragraph__zpRpR"}},7161:function(e){e.exports={section:"Section_section__8c_zV"}},218:function(e){e.exports={sectionHeader:"SectionHeader_sectionHeader__ntehe"}},2122:function(e){e.exports={subSectionHeader:"SectionSubHeader_subSectionHeader__7aSL4"}}},function(e){e.O(0,[886,232,774,888,179],function(){return e(e.s=7350)}),_N_E=e.O()}]);