(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[485],{8891:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/ocr",function(){return t(6783)}])},798:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(1527);t(959);var i=t(5855),a=t.n(i);function s(e){let{children:n}=e;return(0,r.jsx)("h1",{className:a().header,children:n})}},8050:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(1527);t(959);var i=t(7318),a=t.n(i);function s(){return(0,r.jsx)("footer",{className:a().footer,children:'"Standing on the shoulders of giants"'})}var o=t(5946),c=t.n(o);function u(e){let{children:n}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("main",{className:c().layout,children:[n,(0,r.jsx)(s,{})]})})}},9140:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(1527);t(959);var i=t(4305),a=t.n(i);function s(e){let{children:n}=e;return(0,r.jsx)("h2",{className:a().pageSubHeader,children:n})}},6534:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(1527);t(959);var i=t(8281),a=t.n(i);function s(e){let{children:n}=e;return(0,r.jsx)("p",{className:a().paragraph,children:n})}},4648:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(1527);t(959);var i=t(7161),a=t.n(i);function s(e){let{children:n}=e;return(0,r.jsx)("section",{className:a().section,children:n})}},4088:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(1527);t(959);var i=t(218),a=t.n(i);function s(e){let{children:n}=e;return(0,r.jsx)("h2",{className:a().sectionHeader,children:n})}},5557:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(1527);t(959);var i=t(2122),a=t.n(i);function s(e){let{children:n}=e;return(0,r.jsx)("h3",{className:a().subSectionHeader,children:n})}},9308:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(1527);t(959);var i=t(3351),a=t.n(i);function s(e){let{children:n}=e;return(0,r.jsx)("h4",{className:a().subSubSectionHeader,children:n})}},6783:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return b}});var r=t(1527),i=t(3670),a=t.n(i),s=t(959),o=t(3489),c=t(7313),u=t(5994),l=t.n(u);function d(){return(0,r.jsx)("div",{className:l().spinner})}var h=t(6534),f=t(5557),_=t(9308),x=t(649),p=t(173),g=t.n(p);let m=["JPEG","PNG"];function j(){let[e,n]=(0,s.useState)(""),[t,i]=(0,s.useState)(!1),[a,u]=(0,s.useState)(0);async function l(e){i(!0);let{text:t,confidence:r}=await (0,x.recognize)(e);if(i(!1),0===t.trim().length){n("No text found in the image."),u(0);return}n(t),u(r)}return(0,r.jsxs)("div",{className:g().container,children:[(0,r.jsxs)("div",{className:g().fileUploaderContainer,children:[(0,r.jsx)(f.Z,{children:"Input Image"}),(0,r.jsx)(c.b,{handleChange:l,name:"file",types:m,children:(0,r.jsxs)("div",{className:g().fileUploader,children:[(0,r.jsx)(o,{className:g().icon}),(0,r.jsxs)(h.Z,{children:[(0,r.jsx)("span",{className:g().underline,children:"Upload"})," or drag and drop an image here to start the recognition."]})]})})]}),(0,r.jsxs)("div",{className:g().resultContainer,children:[(0,r.jsx)(f.Z,{children:"Recognized Text"}),t?(0,r.jsx)(d,{}):(0,r.jsx)(h.Z,{children:0===e.length?"Please upload an image to start the recognition process.":(0,r.jsxs)("div",{className:g().recognitionResult,children:[(0,r.jsxs)("div",{className:g().textContainer,children:[(0,r.jsx)(_.Z,{children:"Text"}),(0,r.jsx)(h.Z,{children:e})]}),(0,r.jsxs)("div",{className:g().confidenceContainer,children:[(0,r.jsx)(_.Z,{children:"Confidence"}),(0,r.jsx)(h.Z,{children:a})]})]})})]})]})}var C=t(798),v=t(8050),S=t(9140),R=t(4648),N=t(4088);function b(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:"The 1st ChatGPT4PCG Competition: Character-like Level Generation for Science Birds"}),(0,r.jsx)("meta",{name:"description",content:"The ChatGPT4PCG Competition invites participants to use ChatGPT to generate stable levels for Science Birds resembling English characters. Participants must submit a prompt and instructions, and the generated levels will undergo testing for stability and similarity using an OCR model, offering a chance to showcase prompt engineering skills and push the boundaries of natural language processing and procedural content generation."}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,r.jsxs)(v.Z,{children:[(0,r.jsx)(S.Z,{children:"The 1st ChatGPT4PCG Competition"}),(0,r.jsx)(C.Z,{children:"Character-like Level Generation for Science Birds"}),(0,r.jsxs)(R.Z,{children:[(0,r.jsx)(N.Z,{children:"OCR Recognizer"}),(0,r.jsx)(j,{})]})]})]})}},7318:function(e){e.exports={footer:"Footer_footer__1IwEk"}},5994:function(e){e.exports={spinner:"LoadingSpinner_spinner__CFooE","lds-dual-ring":"LoadingSpinner_lds-dual-ring__TpmWx"}},173:function(e){e.exports={container:"OCRRecognizer_container__xCyy7",resultContainer:"OCRRecognizer_resultContainer__UulKe",fileUploaderContainer:"OCRRecognizer_fileUploaderContainer__d1vcn",fileUploader:"OCRRecognizer_fileUploader__Hlp2a",icon:"OCRRecognizer_icon__usSlR",underline:"OCRRecognizer_underline__SxZ38",recognitionResult:"OCRRecognizer_recognitionResult__LBSoJ",textContainer:"OCRRecognizer_textContainer__UXXJZ",confidenceContainer:"OCRRecognizer_confidenceContainer__YziW5"}},5855:function(e){e.exports={header:"PageHeader_header__dx9xv"}},5946:function(e){e.exports={layout:"PageLayout_layout__arqmj"}},4305:function(e){e.exports={pageSubHeader:"PageSubHeader_pageSubHeader__kGaWg"}},8281:function(e){e.exports={paragraph:"Paragraph_paragraph__zpRpR"}},7161:function(e){e.exports={section:"Section_section__8c_zV"}},218:function(e){e.exports={sectionHeader:"SectionHeader_sectionHeader__ntehe"}},2122:function(e){e.exports={subSectionHeader:"SectionSubHeader_subSectionHeader__7aSL4"}},3351:function(e){e.exports={subSubSectionHeader:"SectionSubSubHeader_subSubSectionHeader__XoqZi"}}},function(e){e.O(0,[412,71,774,888,179],function(){return e(e.s=8891)}),_N_E=e.O()}]);