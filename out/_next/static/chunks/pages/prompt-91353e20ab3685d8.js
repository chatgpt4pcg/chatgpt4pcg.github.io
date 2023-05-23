(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[12],{5502:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/prompt",function(){return i(1727)}])},5007:function(e,s,i){"use strict";i.d(s,{Z:function(){return l}});var o=i(1527),n=i(993);i(959);var t=i(5772),r=i.n(t);function l(e){let{src:s,alt:i,width:t=1,height:l=1,noBorderRadius:c=!1}=e;return 1===t&&1===l?(0,o.jsx)("div",{className:r().imageContainer,children:(0,o.jsx)(n.Z,{src:s,alt:i,className:r().image,layout:"responsive",width:t,height:l,style:c?{borderRadius:0}:void 0})}):(0,o.jsx)("div",{className:r().imageContainer,children:(0,o.jsx)(n.Z,{src:s,alt:i,className:r().image,width:t,height:l,style:c?{borderRadius:0}:void 0})})}},1727:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return m}});var o=i(1527),n=i(5007),t=i(4598),r=i.n(t),l=i(316),c=i(4619),a=i(6488),d=i(4555),h=i(4391),p=i(7389),u=i(3273),x=i(625),j=i(3891);function m(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.Z,{pageTitle:"Prompt Rules and Guidelines"}),(0,o.jsxs)(c.Z,{children:[(0,o.jsx)(d.Z,{children:"The 1st ChatGPT4PCG Competition"}),(0,o.jsx)(l.Z,{children:"Character-like Level Generation for Science Birds"}),(0,o.jsxs)(x.Z,{children:[(0,o.jsx)(j.Z,{id:"sample-prompt",children:"Sample Prompt"}),(0,o.jsx)(p.Z,{language:"PlainText",theme:"Base16Darcula",copy:!0,copyBtnTheme:"Dark",children:u.NQ}),(0,o.jsxs)(h.Z,{children:["Please see a modified version and its variants on"," ",(0,o.jsx)(r(),{href:"/supplement",children:"this page"})," and check"," ",(0,o.jsx)("a",{rel:"noopener",target:"_blank",href:"https://arxiv.org/abs/2303.15662",children:"this paper"})," ","and"," ",(0,o.jsx)("a",{href:"/files/supplementary_material.pdf",children:"its supplementary document"})," ","for their performance."]})]}),(0,o.jsxs)(x.Z,{children:[(0,o.jsx)(j.Z,{id:"rules",children:"Prompt Rules"}),(0,o.jsxs)("ol",{children:[(0,o.jsxs)("li",{children:["Prompts must be written in English using only alphanumeric characters, space, and the following symbols: ~ / \\ + - * ` ' \" ‘ ’ “ ” . : ; ? — , ! @ # $ % ^ & ( ) _ = [ ] "," | < >."]}),(0,o.jsxs)("li",{children:["The maximum word count for a prompt is ",(0,o.jsx)("strong",{children:"900 words"}),". The number of words will be counted by"," ",(0,o.jsx)(r(),{href:"/tools/word-counter",children:"our tool"})," which has the same algorithm as the online version provided on the."]}),(0,o.jsx)("li",{children:"Prompts designed for this competition must be created for a one-round conversation. This means that each prompt's interaction with ChatGPT should consist of one user request to and one response from ChatGPT. This ensures simplicity and fairness in this year's competition."}),(0,o.jsx)("li",{children:"Prompts exceeding this limit or containing disallowed characters will result in automatic disqualification."}),(0,o.jsxs)("li",{children:["The prompt must include ",(0,o.jsx)("code",{children:"<OBJECT>"}),' to indicate a section of the prompt that will be replaced by us with each target character, such as "I", "L", or "U". Prompts without ',(0,o.jsx)("code",{children:"<OBJECT>"})," will not be assessed."]}),(0,o.jsxs)("li",{children:["To ensure that code blocks can be extracted successfully from responses generated by the ChatGPT API, each output must include three backticks (```).",(0,o.jsxs)("ol",{children:[(0,o.jsxs)("li",{children:["The ",(0,o.jsx)("em",{children:"code extraction script"})," will only extract the content between the last pair of three backticks (```)."]}),(0,o.jsxs)("li",{children:["The extracted code must not contain any loops. Any use of loops will be ignored, resulting in only one instance of the loop's content. The code should not use variables in the call of ",(0,o.jsx)("code",{children:"ab_drop()"})," function, as this will result in an error and that response will be skipped for the rest of the evaluation process. To check the behavior of the code extractor, please refer to the"," ",(0,o.jsx)(r(),{href:"/resources",children:"Resources"})," page where you can find an online tool for this task."]}),(0,o.jsx)("li",{children:"If no code blocks are present or extracted code results in an empty string, the response will be skipped, and its score will be 0."})]})]}),(0,o.jsxs)("li",{children:["The use of"," ",(0,o.jsx)("a",{href:"https://openai.com/blog/chatgpt-plugins",children:"ChatGPT plugins"})," ","is not supported, i.e., all plugins are disabled during the evaluation process. This helps ensure fairness since the plugins only available to limited people, a small number of invited developers and web-based ChatGPT Plus users, and ChatGPT API does not support plugins, as of now (Mar 24, 2023 JST)."]}),(0,o.jsxs)("li",{children:["The response to your prompt from ChatGPT must explicitly include a series of ",(0,o.jsx)("code",{children:"ab_drop()"})," , which will be executed in that order by our tool to generate a character-like structure in a Science Birds level."]}),(0,o.jsxs)("li",{children:["The definition of the ",(0,o.jsx)("code",{children:"ab_drop()"})," function is as follows:",(0,o.jsxs)("ol",{children:[(0,o.jsxs)("li",{children:["It drops a block vertically drop a block from the top and center it at a specific slot, denoted by"," ",(0,o.jsx)("code",{children:"x_position"}),"."]}),(0,o.jsxs)("li",{children:["This function works on the following settings:",(0,o.jsxs)("ol",{children:[(0,o.jsxs)("li",{children:["A structure is situated on a 2D grid with a width (",(0,o.jsx)("code",{children:"W"}),") of 20 columns and a height (",(0,o.jsx)("code",{children:"H"}),") of 16 rows. The grid consists of 320 cells, each of equal size."]}),(0,o.jsxs)("li",{children:["Coordinates ",(0,o.jsx)("code",{children:"(x, y)"})," are used to represent the positions in the grid, where ",(0,o.jsx)("code",{children:"x"})," and"," ",(0,o.jsx)("code",{children:"y"})," show the horizontal and vertical indices of cells, respectively. For example, ",(0,o.jsx)("code",{children:"(0, 0)"})," ","denotes the bottom-left corner cell of the grid, and"," ",(0,o.jsx)("code",{children:"(W-1, H-1)"})," is the top-right corner cell."]}),(0,o.jsxs)("li",{children:["A cell on the grid has a size of 1x1. Each cell has unique"," ",(0,o.jsx)("code",{children:"(x, y)"})," coordinates associated with it."]})]})]}),(0,o.jsxs)("li",{children:["This function accepts two parameters:",(0,o.jsxs)("ol",{children:[(0,o.jsxs)("li",{children:[(0,o.jsx)("code",{children:"block_type"}),": a value that indicates the type of block to be placed. The possible values are",(0,o.jsx)("code",{children:"b11"}),", ",(0,o.jsx)("code",{children:"b13"}),", and ",(0,o.jsx)("code",{children:"b31"}),". An invalid block type will result in an error.",(0,o.jsxs)("ol",{children:[(0,o.jsxs)("li",{children:[(0,o.jsx)("code",{children:"b11"})," denotes a square block whose size is 1x1.",(0,o.jsx)(n.Z,{src:"/images/b11.png",alt:"b11 blocks",noBorderRadius:!0,width:24,height:24})]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("code",{children:"b13"})," denotes a column block whose size is 1x3.",(0,o.jsx)(n.Z,{src:"/images/b13.png",alt:"b13 blocks",noBorderRadius:!0,width:24,height:72})]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("code",{children:"b31"})," denotes a row block whose size is 3x1.",(0,o.jsx)(n.Z,{src:"/images/b31.png",alt:"b31 blocks",noBorderRadius:!0,width:72,height:24})]})]})]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("code",{children:"x_position"}),": a horizontal index of a grid cell, where ",(0,o.jsx)("code",{children:"0"})," represents the leftmost column of the grid, and ",(0,o.jsx)("code",{children:"W-1"})," represents the rightmost column of the grid. The ",(0,o.jsx)("code",{children:"x_position"})," parameter indicates the center pivot point of the block being placed. For example, if ",(0,o.jsx)("code",{children:"b31"})," is the only block in the level and is placed at ",(0,o.jsx)("code",{children:"x_position=4"}),", it will occupy cells ",(0,o.jsx)("code",{children:"(3, 0)"}),","," ",(0,o.jsx)("code",{children:"(4, 0)"}),", and ",(0,o.jsx)("code",{children:"(5, 0)"}),". An invalid position, like a position where a block of interest intrudes on the grid boundary, will result in an error."]})]})]})]})]})]})]})]})]})}},5772:function(e){e.exports={imageContainer:"Image_imageContainer__vtXSn",image:"Image_image__5H8lJ"}}},function(e){e.O(0,[318,401,903,993,516,774,888,179],function(){return e(e.s=5502)}),_N_E=e.O()}]);