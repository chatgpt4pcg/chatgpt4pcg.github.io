(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[926],{8077:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/word-counter",function(){return t(4485)}])},6422:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var a=t(1527);t(959);var r=t(6284),s=t.n(r);function i(e){let{children:n}=e;return(0,a.jsx)("h1",{className:s().header,children:n})}},6884:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var a=t(1527);t(959);var r=t(1041),s=t.n(r);function i(){return(0,a.jsx)("footer",{className:s().footer,children:(0,a.jsx)("p",{children:'"Standing on the shoulders of giants"'})})}var c=t(1525),o=t.n(c),l=t(8092),u=t.n(l),d=t(1184),h=t(7418);function f(){let e=(0,d.useRouter)();return(0,a.jsxs)("nav",{className:u().navigation,children:[(0,a.jsx)("li",{className:"".concat(u().navItem," ").concat("/"==e.pathname?u().active:""),children:(0,a.jsx)(o(),{href:"/",children:"Home"})}),(0,a.jsx)("li",{className:"".concat(u().navItem," ").concat("/prizes"==e.pathname?u().active:""),children:(0,a.jsx)(o(),{href:"/prizes",children:"Prizes"})}),(0,a.jsx)("li",{className:"".concat(u().navItem," ").concat("/prompt"==e.pathname?u().active:""),children:(0,a.jsx)(o(),{href:"/prompt",children:"Prompt"})}),(0,a.jsx)("li",{className:"".concat(u().navItem," ").concat("/submission"==e.pathname?u().active:""),children:(0,a.jsx)(o(),{href:"/submission",children:"Submission"})}),(0,a.jsx)("li",{className:"".concat(u().navItem," ").concat("/evaluation"==e.pathname?u().active:""),children:(0,a.jsx)(o(),{href:"/evaluation",children:"Evaluation"})}),(0,a.jsx)("li",{className:"".concat(u().navItem," ").concat("/rules"==e.pathname?u().active:""),children:(0,a.jsx)(o(),{href:"/rules",children:"Rules"})}),(0,a.jsx)("li",{className:"".concat(u().navItem," ").concat("/resources"==e.pathname?u().active:""),children:(0,a.jsx)(o(),{href:"/resources",children:"Resources"})}),(0,a.jsx)("li",{className:"".concat(u().navItem," ").concat("/supplement"==e.pathname?u().active:""),children:(0,a.jsx)(o(),{href:"/supplement",children:"Supplementary Material"})}),(0,a.jsx)("li",{className:"".concat(u().navItem," ").concat(u().special),children:(0,a.jsxs)("a",{href:"https://github.com/chatgpt4pcg/chatgpt4pcg.github.io",children:["GitHub ",(0,a.jsx)(h,{style:{width:"12px",height:"12px"}})]})})]})}var p=t(5902),m=t.n(p);function x(e){let{children:n}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(f,{}),(0,a.jsxs)("main",{className:m().layout,children:[n,(0,a.jsx)(i,{})]})]})}},29:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var a=t(1527);t(959);var r=t(8120),s=t.n(r);function i(e){let{children:n}=e;return(0,a.jsx)("h2",{className:s().pageSubHeader,children:n})}},1281:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var a=t(1527);t(959);var r=t(7025),s=t.n(r);function i(e){let{children:n}=e;return(0,a.jsx)("p",{className:s().paragraph,children:n})}},6985:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var a=t(1527);t(959);var r=t(4598),s=t.n(r);function i(e){let{children:n}=e;return(0,a.jsx)("section",{className:s().section,children:n})}},879:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var a=t(1527);t(959);var r=t(2390),s=t.n(r);function i(e){let{children:n,id:t}=e;return t?(0,a.jsx)("h2",{id:t,className:s().sectionHeader,children:(0,a.jsx)("a",{href:"#".concat(t),children:n})}):(0,a.jsx)("h2",{id:t,className:s().sectionHeader,children:n})}},6657:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var a=t(1527);t(959);var r=t(1266),s=t.n(r);function i(e){let{id:n,children:t}=e;return n?(0,a.jsx)("h3",{id:n,className:s().subSectionHeader,children:(0,a.jsx)("a",{href:"#".concat(n),children:t})}):(0,a.jsx)("h3",{id:n,className:s().subSectionHeader,children:t})}},4485:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return v}});var a=t(1527),r=t(3670),s=t.n(r),i=t(6422),c=t(6884),o=t(29),l=t(1281),u=t(6985),d=t(879),h=t(959),f=t(6657),p=t(3122),m=t(6501),x=t.n(m);function _(){let[e,n]=(0,h.useState)(""),[t,r]=(0,h.useState)(0);return(0,h.useEffect)(()=>{r((0,p.countWords)(e))},[e]),(0,a.jsxs)("form",{className:x().form,children:[(0,a.jsxs)("div",{className:x().formField,children:[(0,a.jsx)("label",{className:x().fieldLabel,htmlFor:"raw-input-field",children:(0,a.jsx)(f.Z,{children:"Input"})}),(0,a.jsx)("textarea",{id:"raw-input-field",value:e,onChange:e=>{n(e.target.value)},rows:8})]}),(0,a.jsxs)("div",{className:x().resultContainer,children:[(0,a.jsx)("span",{className:x().result,children:t})," words"]})]})}function v(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s(),{children:[(0,a.jsx)("title",{children:"The 1st ChatGPT4PCG Competition: Character-like Level Generation for Science Birds"}),(0,a.jsx)("meta",{name:"description",content:"The ChatGPT4PCG Competition invites participants to use ChatGPT to generate stable levels for Science Birds resembling English characters. Participants must submit a prompt and instructions, and the generated levels will undergo testing for stability and similarity using an OCR model, offering a chance to showcase prompt engineering skills and push the boundaries of natural language processing and procedural content generation."}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(o.Z,{children:"The 1st ChatGPT4PCG Competition"}),(0,a.jsx)(i.Z,{children:"Character-like Level Generation for Science Birds"}),(0,a.jsxs)(u.Z,{children:[(0,a.jsx)(d.Z,{children:"Word Counter"}),(0,a.jsxs)(l.Z,{children:["The word counter web app is a quick and efficient tool that uses the"," ",(0,a.jsx)("a",{href:"https://www.npmjs.com/package/words-count",children:(0,a.jsx)("code",{children:"words-count"})})," ","package—the same package used for our evaluation process—to accurately count the number of words in your prompt."]}),(0,a.jsx)(_,{})]})]})]})}},6501:function(e){e.exports={form:"WordCounter_form__N_To3",formField:"WordCounter_formField__WerfV",fieldLabel:"WordCounter_fieldLabel__95SaZ",resultContainer:"WordCounter_resultContainer__lo_3C",result:"WordCounter_result__XG1It"}},1041:function(e){e.exports={footer:"Footer_footer__vA9Sd"}},8092:function(e){e.exports={navigation:"NavBar_navigation__D85Gu",navItem:"NavBar_navItem__yJY7U",special:"NavBar_special__EXWnz",active:"NavBar_active__PV3dY"}},6284:function(e){e.exports={header:"PageHeader_header__TvTTW"}},5902:function(e){e.exports={layout:"PageLayout_layout__D1FWk"}},8120:function(e){e.exports={pageSubHeader:"PageSubHeader_pageSubHeader__Q2Y4x"}},7025:function(e){e.exports={paragraph:"Paragraph_paragraph__eEwQk"}},4598:function(e){e.exports={section:"Section_section__gZRoR"}},2390:function(e){e.exports={sectionHeader:"SectionHeader_sectionHeader__ekLFu"}},1266:function(e){e.exports={subSectionHeader:"SectionSubHeader_subSectionHeader__Dzrl7"}}},function(e){e.O(0,[325,122,774,888,179],function(){return e(e.s=8077)}),_N_E=e.O()}]);