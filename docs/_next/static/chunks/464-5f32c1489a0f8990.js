(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[464],{6422:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(1527);n(959);var a=n(6284),r=n.n(a);function i(e){let{children:t}=e;return(0,o.jsx)("h1",{className:r().header,children:t})}},6884:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var o=n(1527);n(959);var a=n(1041),r=n.n(a);function i(){return(0,o.jsx)("footer",{className:r().footer,children:(0,o.jsx)("p",{children:'"Standing on the shoulders of giants"'})})}var s=n(1525),l=n.n(s),h=n(8092),c=n.n(h),u=n(1184),d=n(7418);function p(){let e=(0,u.useRouter)();return(0,o.jsxs)("nav",{className:c().navigation,children:[(0,o.jsx)("li",{className:"".concat(c().navItem," ").concat("/"==e.pathname?c().active:""),children:(0,o.jsx)(l(),{href:"/",children:"Home"})}),(0,o.jsx)("li",{className:"".concat(c().navItem," ").concat("/prizes"==e.pathname?c().active:""),children:(0,o.jsx)(l(),{href:"/prizes",children:"Prizes"})}),(0,o.jsx)("li",{className:"".concat(c().navItem," ").concat("/prompt"==e.pathname?c().active:""),children:(0,o.jsx)(l(),{href:"/prompt",children:"Prompt"})}),(0,o.jsx)("li",{className:"".concat(c().navItem," ").concat("/submission"==e.pathname?c().active:""),children:(0,o.jsx)(l(),{href:"/submission",children:"Submission"})}),(0,o.jsx)("li",{className:"".concat(c().navItem," ").concat("/evaluation"==e.pathname?c().active:""),children:(0,o.jsx)(l(),{href:"/evaluation",children:"Evaluation"})}),(0,o.jsx)("li",{className:"".concat(c().navItem," ").concat("/rules"==e.pathname?c().active:""),children:(0,o.jsx)(l(),{href:"/rules",children:"Rules"})}),(0,o.jsx)("li",{className:"".concat(c().navItem," ").concat("/resources"==e.pathname?c().active:""),children:(0,o.jsx)(l(),{href:"/resources",children:"Resources"})}),(0,o.jsx)("li",{className:"".concat(c().navItem," ").concat("/supplement"==e.pathname?c().active:""),children:(0,o.jsx)(l(),{href:"/supplement",children:"Supplementary Material"})}),(0,o.jsx)("li",{className:"".concat(c().navItem," ").concat(c().special),children:(0,o.jsxs)("a",{href:"https://github.com/chatgpt4pcg/chatgpt4pcg.github.io",children:["GitHub ",(0,o.jsx)(d,{style:{width:"12px",height:"12px"}})]})})]})}var b=n(5902),m=n.n(b);function f(e){let{children:t}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(p,{}),(0,o.jsxs)("main",{className:m().layout,children:[t,(0,o.jsx)(i,{})]})]})}},29:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(1527);n(959);var a=n(8120),r=n.n(a);function i(e){let{children:t}=e;return(0,o.jsx)("h2",{className:r().pageSubHeader,children:t})}},1281:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(1527);n(959);var a=n(7025),r=n.n(a);function i(e){let{children:t}=e;return(0,o.jsx)("p",{className:r().paragraph,children:t})}},6985:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(1527);n(959);var a=n(4598),r=n.n(a);function i(e){let{children:t}=e;return(0,o.jsx)("section",{className:r().section,children:t})}},879:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(1527);n(959);var a=n(2390),r=n.n(a);function i(e){let{children:t,id:n}=e;return n?(0,o.jsx)("h2",{id:n,className:r().sectionHeader,children:(0,o.jsx)("a",{href:"#".concat(n),children:t})}):(0,o.jsx)("h2",{id:n,className:r().sectionHeader,children:t})}},3499:function(e,t,n){"use strict";n.d(t,{NQ:function(){return o},Qm:function(){return s},VC:function(){return l},bv:function(){return r},pX:function(){return i},qX:function(){return a}});let o="Use `ab_drop()` function to generate a stable structure that looks like the &lt;OBJECT&gt;—the goal. Dropping position and order are crucial.\n\n1. Definitions\nSlots: The map's width is equally partitioned into W slots where W = 20, with slots 0 and 19 being the most left and right, respectively.\nLayers: The map's height is equally partitioned into H layers where H = 16, with layers 0 and 15 being the bottom and top layers, respectively.\nBase: The bottom of the map, i.e., layer 0.\n\n2. Environment\nThere are three block types as follows:\nb11, a square block whose width is 1 unit and height is 1 unit\nb31, a horizontal block whose width is 3 units and height is 1 unit\nb13, a vertical block whose width is 1 unit and height is 3 units\n\n3. Tool\nUse the `ab_drop()` function to vertically drop a block from layer H such that its center is at slot y and drop earlier blocks representing more bottom parts of the structure.",a="Use `ab_drop()` function to generate a stable structure that looks like the character <OBJECT>—the goal—and meets all the hard constraints. Dropping position and order are crucial, and they must be determined using techniques in the block-stacking problem.\n\n1. Role\nYou are a player of the Tetris game who aims to generate a structure that meets the goal while satisfying all the hard constraints.\n\n2. Definitions\nSlots: The map's width is equally partitioned into W slots where W = 20, with slots 0 and 19 being the most left and right, respectively.\nLayers: The map's height is equally partitioned into H layers where H = 16, with layers 0 and 15 being the bottom and top layers, respectively.\nBase: The bottom of the map, i.e., layer 0.\nMap Initialization:\n# initialize the structure as an empty WxH grid\nstructure = [[' ']*W for _ in range(H)]\n\n3. Environment\nThere are three block types as follows:\nb11, a square block whose width is 1 unit and height is 1 unit\nb31, a horizontal block whose width is 3 units and height is 1 unit\nb13, a vertical block whose width is 1 unit and height is 3 units\n\n4. Tool\nUse the following function to vertically drop a block from layer H such that its center is at slot y and drop earlier blocks representing more bottom parts of the structure.\nab_drop(x, y), \nwhere x is a block type, and y is the slot number from 0 to W-1 where the block center is aligned.  After vertically falling down, the block will end up at either the layer on top of the base or a previously dropped block. This function is defined as follows:\ndef ab_drop(x, y):\n    # x is the block type, y is the slot number from 0 to W-1 where the block center is aligned\n    \n    # initialize the drop position at the top of the map\n    drop_pos = (H-1, y)\n    \n    # drop the block from the top and move it down until it lands on the base or another block\n    while drop_pos[0] > 0:\n        drop_pos = (drop_pos[0]-1, y)\n        if structure[drop_pos[0]+1][drop_pos[1]] != ' ':\n            break\n    \n    # place the block on the structure\n    structure[drop_pos[0]][drop_pos[1]] = x\n\n5. Constraints:\nThe relevant constraints are given in the following.\n\n5.1 No boundary intrusion: This is a soft constraint that should be met if possible. Namely, blocks should not intrude on the boundary of the map. In other words, the area of intrusion regions should be zero.\n---",r="Use `ab_drop()` function to generate a stable structure that looks like the character <OBJECT>—the goal—and meets all the hard constraints. Dropping position and order are crucial, and they must be determined using techniques in the block-stacking problem.\n\n1. Role\nYou are a player of the Tetris game who aims to generate a structure that meets the goal while satisfying all the hard constraints.\n\n2. Definitions\nSlots: The map's width is equally partitioned into W slots where W = 20, with slots 0 and 19 being the most left and right, respectively.\nLayers: The map's height is equally partitioned into H layers where H = 16, with layers 0 and 15 being the bottom and top layers, respectively.\nBase: The bottom of the map, i.e., layer 0.\n\n3. Environment\nThere are three block types as follows:\nb11, a square block whose width is 1 unit and height is 1 unit\nb31, a horizontal block whose width is 3 units and height is 1 unit\nb13, a vertical block whose width is 1 unit and height is 3 units\n\n4. Tool\nUse the following function to vertically drop a block from layer H such that its center is at slot y and drop earlier blocks representing more bottom parts of the structure.\nab_drop(x, y), \nwhere x is a block type, and y is the slot number from 0 to W-1 where the block center is aligned.  After vertically falling down, the block will end up at either the layer on top of the base or a previously dropped block.\n\n5. Constraints:\nThe relevant constraints are given in the following.\n5.1 Stability: This is a hard constraint that must be met. Because of gravity, as in the block-stacking problem, a block must be dropped at a proper slot to ensure that the current structure and the resulting structure are stable and do not collapse. Poor weight distribution caused by incorrect placement can lead to structural collapse.\n\n5.2 No boundary intrusion: This is a soft constraint that should be met if possible. Namely, blocks should not intrude on the boundary of the map. In other words, the area of intrusion regions should be zero.\n---",i="Use `ab_drop()` function to generate a stable structure that looks like the character <OBJECT>—the goal—and meets all the hard constraints. Dropping position and order are crucial, and they must be determined using techniques in the block-stacking problem.\n\n1. Role\nYou are a player who aims to generate a structure that meets the goal while satisfying all the hard constraints.\n\n2. Definitions\nSlots: The map's width is equally partitioned into W slots where W = 20, with slots 0 and 19 being the most left and right, respectively.\nLayers: The map's height is equally partitioned into H layers where H = 16, with layers 0 and 15 being the bottom and top layers, respectively.\nBase: The bottom of the map, i.e., layer 0.\nMap Initialization:\n# initialize the structure as an empty WxH grid\nstructure = [[' ']*W for _ in range(H)]\n\n3. Environment\nThere are three block types as follows:\nb11, a square block whose width is 1 unit and height is 1 unit\nb31, a horizontal block whose width is 3 units and height is 1 unit\nb13, a vertical block whose width is 1 unit and height is 3 units\n\n4. Tool\nUse the following function to vertically drop a block from layer H such that its center is at slot y and drop earlier blocks representing more bottom parts of the structure.\nab_drop(x, y), \nwhere x is a block type, and y is the slot number from 0 to W-1 where the block center is aligned.  After vertically falling down, the block will end up at either the layer on top of the base or a previously dropped block. This function is defined as follows:\ndef ab_drop(x, y):\n    # x is the block type, y is the slot number from 0 to W-1 where the block center is aligned\n    \n    # initialize the drop position at the top of the map\n    drop_pos = (H-1, y)\n    \n    # drop the block from the top and move it down until it lands on the base or another block\n    while drop_pos[0] > 0:\n        drop_pos = (drop_pos[0]-1, y)\n        if structure[drop_pos[0]+1][drop_pos[1]] != ' ':\n            break\n    \n    # place the block on the structure\n    structure[drop_pos[0]][drop_pos[1]] = x\n\n5. Constraints:\nThe relevant constraints are given in the following.\n5.1 Stability: This is a hard constraint that must be met. Because of gravity, as in the block-stacking problem, a block must be dropped at a proper slot to ensure that the current structure and the resulting structure are stable and do not collapse. Poor weight distribution caused by incorrect placement can lead to structural collapse.\n\n5.2 No boundary intrusion: This is a soft constraint that should be met if possible. Namely, blocks should not intrude on the boundary of the map. In other words, the area of intrusion regions should be zero.\n---",s="Use `ab_drop()` function to generate a stable structure that looks like the character <OBJECT>—the goal—and meets all the hard constraints. Dropping position and order are crucial.\n\n1. Role\nYou are a player of the Tetris game who aims to generate a structure that meets the goal while satisfying all the hard constraints.\n\n2. Definitions\nSlots: The map's width is equally partitioned into W slots where W = 20, with slots 0 and 19 being the most left and right, respectively.\nLayers: The map's height is equally partitioned into H layers where H = 16, with layers 0 and 15 being the bottom and top layers, respectively.\nBase: The bottom of the map, i.e., layer 0.\nMap Initialization:\n# initialize the structure as an empty WxH grid\nstructure = [[' ']*W for _ in range(H)]\n\n3. Environment\nThere are three block types as follows:\nb11, a square block whose width is 1 unit and height is 1 unit\nb31, a horizontal block whose width is 3 units and height is 1 unit\nb13, a vertical block whose width is 1 unit and height is 3 units\n\n4. Tool\nUse the following function to vertically drop a block from layer H such that its center is at slot y and drop earlier blocks representing more bottom parts of the structure.\nab_drop(x, y), \nwhere x is a block type, and y is the slot number from 0 to W-1 where the block center is aligned.  After vertically falling down, the block will end up at either the layer on top of the base or a previously dropped block. This function is defined as follows:\ndef ab_drop(x, y):\n    # x is the block type, y is the slot number from 0 to W-1 where the block center is aligned\n    \n    # initialize the drop position at the top of the map\n    drop_pos = (H-1, y)\n    \n    # drop the block from the top and move it down until it lands on the base or another block\n    while drop_pos[0] > 0:\n        drop_pos = (drop_pos[0]-1, y)\n        if structure[drop_pos[0]+1][drop_pos[1]] != ' ':\n            break\n    \n    # place the block on the structure\n    structure[drop_pos[0]][drop_pos[1]] = x\n\n5. Constraints:\nThe relevant constraints are given in the following.\n5.1 Stability: This is a hard constraint that must be met. Because of gravity, a block must be dropped at a proper slot to ensure that the current structure and the resulting structure are stable and do not collapse. Poor weight distribution caused by incorrect placement can lead to structural collapse.\n\n5.2 No boundary intrusion: This is a soft constraint that should be met if possible. Namely, blocks should not intrude on the boundary of the map. In other words, the area of intrusion regions should be zero.\n---",l="Use `ab_drop()` function to generate a stable structure that looks like the character <OBJECT>—the goal—and meets all the hard constraints. Dropping position and order are crucial, and they must be determined using techniques in the block-stacking problem.\n\n1. Role\nYou are a player of the Tetris game who aims to generate a structure that meets the goal while satisfying all the hard constraints.\n\n2. Definitions\nSlots: The map's width is equally partitioned into W slots where W = 20, with slots 0 and 19 being the most left and right, respectively.\nLayers: The map's height is equally partitioned into H layers where H = 16, with layers 0 and 15 being the bottom and top layers, respectively.\nBase: The bottom of the map, i.e., layer 0.\nMap Initialization:\n# initialize the structure as an empty WxH grid\nstructure = [[' ']*W for _ in range(H)]\n\n3. Environment\nThere are three block types as follows:\nb11, a square block whose width is 1 unit and height is 1 unit\nb31, a horizontal block whose width is 3 units and height is 1 unit\nb13, a vertical block whose width is 1 unit and height is 3 units\n\n4. Tool\nUse the following function to vertically drop a block from layer H such that its center is at slot y and drop earlier blocks representing more bottom parts of the structure.\nab_drop(x, y), \nwhere x is a block type, and y is the slot number from 0 to W-1 where the block center is aligned.  After vertically falling down, the block will end up at either the layer on top of the base or a previously dropped block. This function is defined as follows:\ndef ab_drop(x, y):\n    # x is the block type, y is the slot number from 0 to W-1 where the block center is aligned\n    \n    # initialize the drop position at the top of the map\n    drop_pos = (H-1, y)\n    \n    # drop the block from the top and move it down until it lands on the base or another block\n    while drop_pos[0] > 0:\n        drop_pos = (drop_pos[0]-1, y)\n        if structure[drop_pos[0]+1][drop_pos[1]] != ' ':\n            break\n    \n    # place the block on the structure\n    structure[drop_pos[0]][drop_pos[1]] = x\n\n5. Constraints:\nThe relevant constraints are given in the following.\n5.1 Stability: This is a hard constraint that must be met. Because of gravity, as in the block-stacking problem, a block must be dropped at a proper slot to ensure that the current structure and the resulting structure are stable and do not collapse. Poor weight distribution caused by incorrect placement can lead to structural collapse.\n\n5.2 No boundary intrusion: This is a soft constraint that should be met if possible. Namely, blocks should not intrude on the boundary of the map. In other words, the area of intrusion regions should be zero.\n---"},1041:function(e){e.exports={footer:"Footer_footer__vA9Sd"}},8092:function(e){e.exports={navigation:"NavBar_navigation__D85Gu",navItem:"NavBar_navItem__yJY7U",special:"NavBar_special__EXWnz",active:"NavBar_active__PV3dY"}},6284:function(e){e.exports={header:"PageHeader_header__TvTTW"}},5902:function(e){e.exports={layout:"PageLayout_layout__D1FWk"}},8120:function(e){e.exports={pageSubHeader:"PageSubHeader_pageSubHeader__Q2Y4x"}},7025:function(e){e.exports={paragraph:"Paragraph_paragraph__eEwQk"}},4598:function(e){e.exports={section:"Section_section__gZRoR"}},2390:function(e){e.exports={sectionHeader:"SectionHeader_sectionHeader__ekLFu"}}}]);