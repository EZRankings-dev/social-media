(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[450],{5666:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Footer",function(){return s(5301)}])},4968:function(e,a,s){"use strict";s.r(a);var l=s(5893),c=s(7294);let n=e=>{let[a,s]=(0,c.useState)(0),n=e=>{a===e?s(null):s(e)};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("section",{className:"faq-section",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsxs)("div",{className:"col-md-12",children:[(0,l.jsx)("h2",{children:"Frequently Asked Questions (FAQs)"}),(0,l.jsx)("div",{className:"accordion",id:"accordionExample",children:e.faqData&&e.faqData.length>0&&e.faqData.map((e,s)=>(0,l.jsxs)("div",{className:"accordion-item",children:[(0,l.jsx)("h2",{className:"accordion-header",id:"headingOne"+s,children:(0,l.jsxs)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapseOne"+s,"data-bs-target":"#collapseOne"+s,"aria-controls":"collapseOne"+s,onClick:()=>n(s),children:[e.status,"Q.",s+1," ",e.title]})}),(0,l.jsx)("div",{id:"collapseOne"+s,className:"","aria-labelledby":"headingOne"+s,"data-bs-parent":"#accordionExample",children:(0,l.jsx)("div",{className:a===s?"accordion-body":"",children:a===s&&(0,l.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})})})]},s))})]})})})})})};a.default=n},5301:function(e,a,s){"use strict";s.r(a);var l=s(5893);s(7294),s(1698),s(4968);let c=()=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("footer",{children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-md-3",children:(0,l.jsx)("div",{className:"footer-item",children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"",target:"_blank",children:"info@socialmediacreativeagency.com"})}),(0,l.jsxs)("li",{children:["Phone: ",(0,l.jsx)("a",{href:"tel:+91-9599389388",children:"+91-9599389388"})]})]})})}),(0,l.jsx)("div",{className:"col-md-3 ms-auto",children:(0,l.jsx)("div",{className:"footer-item",children:(0,l.jsxs)("ul",{className:"social-icon",children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"https://www.instagram.com/socialmediacreativeagency/",target:"_blank",rel:"nofollow",children:(0,l.jsx)("i",{className:"fab fa-instagram"})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"https://www.facebook.com/socialmediacreativeagency",target:"_blank",rel:"nofollow",children:(0,l.jsx)("i",{className:"fab fa-facebook-square"})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"",target:"_blank",rel:"nofollow",children:(0,l.jsx)("i",{className:"fab fa-twitter"})})})]})})}),(0,l.jsx)("div",{className:"col-md-12",children:(0,l.jsx)("div",{className:"copyright",children:(0,l.jsxs)("p",{children:["Copyright \xa9 2023 ",(0,l.jsx)("a",{href:"https://www.socialmediacreativeagency.com",children:"Social Media Creative Agency"})," All Rights Reserved."]})})})]})})})});a.default=c},1698:function(e,a,s){"use strict";s.r(a);var l=s(5893),c=s(7294),n=s(6154);let i=()=>{let[e,a]=(0,c.useState)(!1),[s,i]=(0,c.useState)(""),[r,t]=(0,c.useState)({name:"",email:"",message:""}),[d,o]=(0,c.useState)({}),m=e=>{let{name:a,value:s}=e.target;t(e=>({...e,[a]:s}))},h=()=>{a(!1)},x=e=>{e.preventDefault(),o({padding:"1rem 0rem",display:"block",color:"red"}),r.name?r.email?r.message?n.Z.post("https://smca.ezrankings.in/react-backend/contacts.php",r,{headers:{"Content-Type":"multipart/form-data"}}).then(e=>{let s=e.data;s&&(t({name:"",email:"",message:""}),i("Submit Successfully."),a(!0),o({padding:"1rem 0rem",display:"block",color:"#46c737"}))}).catch(e=>{}):(i("Message can not be blank."),a(!0)):(i("Email can not be blank."),a(!0)):(i("Name can not be blank."),a(!0))};return(0,l.jsx)("section",{className:"form-section",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)("h2",{children:"Great ideas always start as conversations."}),(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-md-12",children:(0,l.jsx)("form",{onSubmit:x,children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-md-12",children:e?(0,l.jsxs)("span",{style:d,children:[s,"  ",(0,l.jsx)("span",{onClick:h,children:(0,l.jsx)("i",{class:"fa fa-times","aria-hidden":"true"})})]}):""}),(0,l.jsx)("div",{className:"col-md-4",children:(0,l.jsx)("div",{className:"form-group",children:(0,l.jsx)("input",{type:"text",className:"form-control",onChange:m,value:r.name,name:"name",placeholder:"Name"})})}),(0,l.jsx)("div",{className:"col-md-4",children:(0,l.jsx)("div",{className:"form-group",children:(0,l.jsx)("input",{type:"text",className:"form-control",onChange:m,value:r.email,name:"email",placeholder:"Email"})})}),(0,l.jsx)("div",{className:"col-md-4",children:(0,l.jsx)("div",{className:"form-group",children:(0,l.jsx)("input",{type:"text",className:"form-control",onChange:m,value:r.message,name:"message",placeholder:"Message"})})}),(0,l.jsx)("div",{className:"col-md-12",children:(0,l.jsx)("div",{className:"form-group mt-4",children:(0,l.jsx)("button",{className:"btn-border2",type:"submit",children:"Send"})})})]})})})})]})})};a.default=i}},function(e){e.O(0,[154,774,888,179],function(){return e(e.s=5666)}),_N_E=e.O()}]);