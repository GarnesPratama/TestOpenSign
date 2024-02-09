"use strict";(self.webpackChunkOpenSign_Docs=self.webpackChunkOpenSign_Docs||[]).push([[2832],{8484:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>g,contentTitle:()=>u,default:()=>f,frontMatter:()=>h,metadata:()=>x,toc:()=>j});var l=a(85893),i=a(11151),t=a(58219),n=(a(62316),a(51039)),r=a.n(n),o=(a(82723),a(9487)),d=(a(41429),a(5397)),c=a(4667),m=a(9472),p=a(85162);const h={id:"get-user",title:"Get your details",description:"The Get User API enables you to get your own details.",sidebar_label:"Get your details",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VW1v2zYQ/ivcfWoB2ZLtJF2FYWg2ZEbaoilgBwPmGAUtnS3GEsmRlBPD0H8fjpIc2V6GeRj6xRbv7rk33nPcgeMrC/EM7i0amAeQok2M0E4oCTFMM2RjdIy07PrrLUPJFzlatlUlc4qt0NGnYepJshQdF7ntQwBKo+Hk4zaFGFbovPsADFqtpEUL8Q6GUUR/hxEnZZKgtcsyZ3snEECipEPpyJ5rnYvEK8JHS6Ad2CTDgtOX22qEGNTiERMHAWhDbpyoQ9ZiSmpvaZ0RcgUBLJUpuOtK8JkXOiej38ZiPRwtsvuPUAUgeYHneviokP2CSHAsuMjPxT8qXCB+aAT9RBXkSmdKnp3KxeXVux9Hw8FwRC4e1WIqXH62lxQ3BE9UobncnotWGqUVK+ldGOQO02v3d05eIMNoOOoNol70bjq4ii/ex5dX/SiK/oAAngvfz/peIOXO99nVZe3PpU6/Q5zq2Kyk0e+Y1eeKDC+ii1MGeK5J5dhSlTL94f8bfjRGmX+u/Th21clbyFxI/NZS+Bsl35ZxeVrGrdzwXKR+a0zVGuX3raQb3tXhT69G1EZeDwelduV1kRaT0gi3hXi2g+ce16JX6+PZvJoHUKDLVLPtKGHuMoghXKEr691n0WzQWI8vTQ4xZM5pG4ehdXwl5KrHte63xMj5whLLQ65FuBkAhWhTmFCb6k4cJLLvB9fiE26h3VQHVgEIup4MeernkM5L5cFN9Xca5USspO/dZgCnj4KwTFivTlVSFiidv0e2VIYdodmCW0yZksxl6JUkH/UHzGpMxLIZgT57kA9yogpkpUXa/rmQaxs/yB6b3S2XIhE8Z7/jwgqH8zdt556enk469tZjxsJl5YIZ1OrFfOWFvq1d1P7wFgJwaAp7t5yg2YgEm1t6JVTojcNmsHniB7tZ763owzGIBi0XCUqLnVG8Hn/9zEb9CILOcPyLlMPPt7/efJnckFcar/qKBv2oH/kHQllXcNkJNG6f7Oa5Pr7e3QtJ//Pz34yhw2cX6pwLTy5f1q4hxgxaYswDyJR1JNrtaFjuTV5VJP6zREN0mwew4UZQZE+2oB1eYtIat9S9JEFNtNvwvKwZcLRdDig6vplCALykTLqkWXvSNB/kvVXJbcf3IZvqBOi3Cl4B/ESt+4Tbn/fmteZVQFNfa039m1dV9Rc7pUEz",sidebar_class_name:"get api-method",info_path:"docs/API-docs/opensign-api-v-1",custom_edit_url:null},u=void 0,x={id:"API-docs/get-user",title:"Get your details",description:"The Get User API enables you to get your own details.",source:"@site/docs/API-docs/get-user.api.mdx",sourceDirName:"API-docs",slug:"/API-docs/get-user",permalink:"/docs/API-docs/get-user",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-user",title:"Get your details",description:"The Get User API enables you to get your own details.",sidebar_label:"Get your details",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VW1v2zYQ/ivcfWoB2ZLtJF2FYWg2ZEbaoilgBwPmGAUtnS3GEsmRlBPD0H8fjpIc2V6GeRj6xRbv7rk33nPcgeMrC/EM7i0amAeQok2M0E4oCTFMM2RjdIy07PrrLUPJFzlatlUlc4qt0NGnYepJshQdF7ntQwBKo+Hk4zaFGFbovPsADFqtpEUL8Q6GUUR/hxEnZZKgtcsyZ3snEECipEPpyJ5rnYvEK8JHS6Ad2CTDgtOX22qEGNTiERMHAWhDbpyoQ9ZiSmpvaZ0RcgUBLJUpuOtK8JkXOiej38ZiPRwtsvuPUAUgeYHneviokP2CSHAsuMjPxT8qXCB+aAT9RBXkSmdKnp3KxeXVux9Hw8FwRC4e1WIqXH62lxQ3BE9UobncnotWGqUVK+ldGOQO02v3d05eIMNoOOoNol70bjq4ii/ex5dX/SiK/oAAngvfz/peIOXO99nVZe3PpU6/Q5zq2Kyk0e+Y1eeKDC+ii1MGeK5J5dhSlTL94f8bfjRGmX+u/Th21clbyFxI/NZS+Bsl35ZxeVrGrdzwXKR+a0zVGuX3raQb3tXhT69G1EZeDwelduV1kRaT0gi3hXi2g+ce16JX6+PZvJoHUKDLVLPtKGHuMoghXKEr691n0WzQWI8vTQ4xZM5pG4ehdXwl5KrHte63xMj5whLLQ65FuBkAhWhTmFCb6k4cJLLvB9fiE26h3VQHVgEIup4MeernkM5L5cFN9Xca5USspO/dZgCnj4KwTFivTlVSFiidv0e2VIYdodmCW0yZksxl6JUkH/UHzGpMxLIZgT57kA9yogpkpUXa/rmQaxs/yB6b3S2XIhE8Z7/jwgqH8zdt556enk469tZjxsJl5YIZ1OrFfOWFvq1d1P7wFgJwaAp7t5yg2YgEm1t6JVTojcNmsHniB7tZ763owzGIBi0XCUqLnVG8Hn/9zEb9CILOcPyLlMPPt7/efJnckFcar/qKBv2oH/kHQllXcNkJNG6f7Oa5Pr7e3QtJ//Pz34yhw2cX6pwLTy5f1q4hxgxaYswDyJR1JNrtaFjuTV5VJP6zREN0mwew4UZQZE+2oB1eYtIat9S9JEFNtNvwvKwZcLRdDig6vplCALykTLqkWXvSNB/kvVXJbcf3IZvqBOi3Cl4B/ESt+4Tbn/fmteZVQFNfa039m1dV9Rc7pUEz",sidebar_class_name:"get api-method",info_path:"docs/API-docs/opensign-api-v-1",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"Introduction",permalink:"/docs/API-docs/opensign-api-v-1"},next:{title:"Create Contact",permalink:"/docs/API-docs/createcontact"}},g={},j=[{value:"Request",id:"request",level:2}];function v(e){const s={h2:"h2",p:"p",...(0,i.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h1",{className:"openapi__heading",children:(0,l.jsx)(s.p,{children:"Get your details"})}),"\n",(0,l.jsx)(r(),{method:"get",path:"/getuser"}),"\n",(0,l.jsx)(s.p,{children:"The Get User API enables you to get your own details."}),"\n",(0,l.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,l.jsx)("div",{children:(0,l.jsx)("div",{children:(0,l.jsxs)(t.Z,{children:[(0,l.jsxs)(p.default,{label:"200",value:"200",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Successful operation"})}),(0,l.jsx)("div",{children:(0,l.jsx)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(p.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(m.default,{className:"openapi-tabs__schema",children:[(0,l.jsx)(p.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,l.jsx)(c.Z,{collapsible:!1,name:"objectId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",format:"string",example:"FGik23bhUJ"}}),(0,l.jsx)(c.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",format:"string",example:"Joe Bee"}}),(0,l.jsx)(c.Z,{collapsible:!1,name:"email",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",format:"string",example:"joebee@example.com"}}),(0,l.jsx)(c.Z,{collapsible:!1,name:"phone",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",format:"string",example:"4567832123"}}),(0,l.jsx)(c.Z,{collapsible:!1,name:"jobTitle",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",format:"string",example:"dev"}}),(0,l.jsx)(c.Z,{collapsible:!1,name:"company",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",format:"string",example:"opensign"}}),(0,l.jsx)(c.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date",qualifierMessage:void 0,schema:{type:"string",example:"2023-10-07T16:49:56.000Z",xml:{name:"date"},title:"date"}}),(0,l.jsx)(c.Z,{collapsible:!1,name:"updatedAt",required:!1,schemaName:"date",qualifierMessage:void 0,schema:{type:"string",example:"2023-10-07T16:49:56.000Z",xml:{name:"date"},title:"date"}})]})]})}),(0,l.jsx)(p.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(d.Z,{responseExample:'{\n  "objectId": "FGik23bhUJ",\n  "name": "Joe Bee",\n  "email": "joebee@example.com",\n  "phone": "4567832123",\n  "jobTitle": "dev",\n  "company": "opensign",\n  "createdAt": "2023-10-07T16:49:56.000Z",\n  "updatedAt": "2023-10-07T16:49:56.000Z"\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(p.default,{label:"404",value:"404",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"User not found!"})}),(0,l.jsx)("div",{children:(0,l.jsx)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(p.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(m.default,{className:"openapi-tabs__schema",children:[(0,l.jsx)(p.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(c.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"User not found!"}})})]})}),(0,l.jsx)(p.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(d.Z,{responseExample:'{\n  "error": "User not found!"\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(p.default,{label:"405",value:"405",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Invalid API Token!"})}),(0,l.jsx)("div",{children:(0,l.jsx)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(p.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(m.default,{className:"openapi-tabs__schema",children:[(0,l.jsx)(p.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(c.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Invalid API token!"}})})]})}),(0,l.jsx)(p.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(d.Z,{responseExample:'{\n  "error": "Invalid API token!"\n}',language:"json"})})]})})})})]})]})})})]})}function f(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(v,{...e})}):v(e)}}}]);