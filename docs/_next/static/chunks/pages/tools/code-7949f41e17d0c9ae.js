(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[698],{5079:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/code",function(){return n(850)}])},6422:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(1527);n(959);var r=n(6284),c=n.n(r);function i(e){let{children:t}=e;return(0,a.jsx)("h1",{className:c().header,children:t})}},6884:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var a=n(1527);n(959);var r=n(1041),c=n.n(r);function i(){return(0,a.jsx)("footer",{className:c().footer,children:(0,a.jsx)("p",{children:'"Standing on the shoulders of giants"'})})}var s=n(1525),o=n.n(s),l=n(8092),d=n.n(l),u=n(1184),h=n(7418);function f(){let e=(0,u.useRouter)();return(0,a.jsxs)("nav",{className:d().navigation,children:[(0,a.jsx)("li",{className:"".concat(d().navItem," ").concat("/"==e.pathname?d().active:""),children:(0,a.jsx)(o(),{href:"/",children:"Home"})}),(0,a.jsx)("li",{className:"".concat(d().navItem," ").concat("/prizes"==e.pathname?d().active:""),children:(0,a.jsx)(o(),{href:"/prizes",children:"Prizes"})}),(0,a.jsx)("li",{className:"".concat(d().navItem," ").concat("/prompt"==e.pathname?d().active:""),children:(0,a.jsx)(o(),{href:"/prompt",children:"Prompt"})}),(0,a.jsx)("li",{className:"".concat(d().navItem," ").concat("/submission"==e.pathname?d().active:""),children:(0,a.jsx)(o(),{href:"/submission",children:"Submission"})}),(0,a.jsx)("li",{className:"".concat(d().navItem," ").concat("/evaluation"==e.pathname?d().active:""),children:(0,a.jsx)(o(),{href:"/evaluation",children:"Evaluation"})}),(0,a.jsx)("li",{className:"".concat(d().navItem," ").concat("/rules"==e.pathname?d().active:""),children:(0,a.jsx)(o(),{href:"/rules",children:"Rules"})}),(0,a.jsx)("li",{className:"".concat(d().navItem," ").concat("/resources"==e.pathname?d().active:""),children:(0,a.jsx)(o(),{href:"/resources",children:"Resources"})}),(0,a.jsx)("li",{className:"".concat(d().navItem," ").concat("/supplement"==e.pathname?d().active:""),children:(0,a.jsx)(o(),{href:"/supplement",children:"Supplementary Material"})}),(0,a.jsx)("li",{className:"".concat(d().navItem," ").concat(d().special),children:(0,a.jsxs)("a",{href:"https://github.com/chatgpt4pcg/chatgpt4pcg.github.io",children:["GitHub ",(0,a.jsx)(h,{style:{width:"12px",height:"12px"}})]})})]})}var m=n(5902),p=n.n(m);function x(e){let{children:t}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(f,{}),(0,a.jsxs)("main",{className:p().layout,children:[t,(0,a.jsx)(i,{})]})]})}},29:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(1527);n(959);var r=n(8120),c=n.n(r);function i(e){let{children:t}=e;return(0,a.jsx)("h2",{className:c().pageSubHeader,children:t})}},1281:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(1527);n(959);var r=n(7025),c=n.n(r);function i(e){let{children:t}=e;return(0,a.jsx)("p",{className:c().paragraph,children:t})}},6985:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(1527);n(959);var r=n(4598),c=n.n(r);function i(e){let{children:t}=e;return(0,a.jsx)("section",{className:c().section,children:t})}},879:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(1527);n(959);var r=n(2390),c=n.n(r);function i(e){let{children:t,id:n}=e;return n?(0,a.jsx)("h2",{id:n,className:c().sectionHeader,children:(0,a.jsx)("a",{href:"#".concat(n),children:t})}):(0,a.jsx)("h2",{id:n,className:c().sectionHeader,children:t})}},6657:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(1527);n(959);var r=n(1266),c=n.n(r);function i(e){let{id:t,children:n}=e;return t?(0,a.jsx)("h3",{id:t,className:c().subSectionHeader,children:(0,a.jsx)("a",{href:"#".concat(t),children:n})}):(0,a.jsx)("h3",{id:t,className:c().subSectionHeader,children:n})}},850:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var a=n(1527),r=n(959),c=n(6657),i=n(3122),s=n(7259),o=n.n(s);function l(){let e=(0,r.useRef)(null),[t,n]=(0,r.useState)(""),[s,l]=(0,r.useState)(0),[d,u]=(0,r.useState)("");return(0,r.useEffect)(()=>{window.localStorage.getItem("codeFileCounter")&&l(parseInt(window.localStorage.getItem("codeFileCounter")))},[]),(0,r.useEffect)(()=>{window.localStorage.setItem("codeFileCounter",s.toString())},[s]),(0,r.useEffect)(()=>{u((0,i.extractCode)(t)||"")},[t]),(0,a.jsxs)("form",{className:o().form,children:[(0,a.jsxs)("div",{className:o().formField,children:[(0,a.jsx)("label",{className:o().fieldLabel,htmlFor:"raw-input-field",children:(0,a.jsx)(c.Z,{children:"Input"})}),(0,a.jsx)("textarea",{id:"raw-input-field",value:t,onChange:e=>{n(e.target.value)},rows:8})]}),(0,a.jsxs)("div",{className:o().formField,children:[(0,a.jsx)(c.Z,{children:"Result"}),(0,a.jsx)("label",{className:o().fieldLabel,htmlFor:"result-field"}),(0,a.jsx)("textarea",{readOnly:!0,ref:e,id:"result-field",value:d,rows:15})]}),d&&(0,a.jsxs)("div",{className:o().actions,children:[(0,a.jsx)("button",{className:o().standardBtn,onClick:function(){e.current.select(),e.current.setSelectionRange(0,99999),navigator.clipboard.writeText(e.current.value),alert("Copied!")},children:"Copy to clipboard"}),(0,a.jsx)("a",{className:o().standardBtn,href:URL.createObjectURL(new Blob([d],{type:"application/xml"})),download:"result_".concat(String(s).padStart(2,"0"),".xml"),children:"Download XML file"})]})]})}var d=n(3670),u=n.n(d),h=n(6422),f=n(6884),m=n(29),p=n(6985),x=n(879),v=n(1281);function _(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(u(),{children:[(0,a.jsx)("title",{children:"The 1st ChatGPT4PCG Competition: Character-like Level Generation for Science Birds"}),(0,a.jsx)("meta",{name:"description",content:"The ChatGPT4PCG Competition invites participants to use ChatGPT to generate stable levels for Science Birds resembling English characters. Participants must submit a prompt and instructions, and the generated levels will undergo testing for stability and similarity using an OCR model, offering a chance to showcase prompt engineering skills and push the boundaries of natural language processing and procedural content generation."}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,a.jsxs)(f.Z,{children:[(0,a.jsx)(m.Z,{children:"The 1st ChatGPT4PCG Competition"}),(0,a.jsx)(h.Z,{children:"Character-like Level Generation for Science Birds"}),(0,a.jsxs)(p.Z,{children:[(0,a.jsx)(x.Z,{children:"Code Extractor"}),(0,a.jsxs)(v.Z,{children:["The online code extractor extracts a code block from ChatGPT API responses, demonstrating the same algorithm used in the"," ",(0,a.jsx)("a",{href:"https://github.com/chatgpt4pcg/code-extraction-script",children:"code extraction script"}),"."]}),(0,a.jsx)(l,{})]})]})]})}},7259:function(e){e.exports={form:"CodeExtractor_form__FXnWM",formField:"CodeExtractor_formField__qTNiB",fieldLabel:"CodeExtractor_fieldLabel__cF7Sl",actions:"CodeExtractor_actions__VWW3U",standardBtn:"CodeExtractor_standardBtn__JPWJ_"}},1041:function(e){e.exports={footer:"Footer_footer__vA9Sd"}},8092:function(e){e.exports={navigation:"NavBar_navigation__D85Gu",navItem:"NavBar_navItem__yJY7U",special:"NavBar_special__EXWnz",active:"NavBar_active__PV3dY"}},6284:function(e){e.exports={header:"PageHeader_header__TvTTW"}},5902:function(e){e.exports={layout:"PageLayout_layout__D1FWk"}},8120:function(e){e.exports={pageSubHeader:"PageSubHeader_pageSubHeader__Q2Y4x"}},7025:function(e){e.exports={paragraph:"Paragraph_paragraph__eEwQk"}},4598:function(e){e.exports={section:"Section_section__gZRoR"}},2390:function(e){e.exports={sectionHeader:"SectionHeader_sectionHeader__ekLFu"}},1266:function(e){e.exports={subSectionHeader:"SectionSubHeader_subSectionHeader__Dzrl7"}}},function(e){e.O(0,[325,122,774,888,179],function(){return e(e.s=5079)}),_N_E=e.O()}]);