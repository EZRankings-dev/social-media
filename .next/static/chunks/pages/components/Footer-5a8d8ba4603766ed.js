(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[450],{5666:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Footer",function(){return s(5301)}])},7012:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return n}});var l=s(5893),c=s(7294);let i=e=>{let[a,s]=(0,c.useState)(0),i=e=>{a===e?s(null):s(e)};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("section",{className:"faq-section",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsxs)("div",{className:"col-md-12",children:[(0,l.jsx)("h2",{className:"faq-title",children:"Frequently Asked Questions (FAQs)"}),(0,l.jsx)("div",{className:"accordion",id:"accordionExample",itemScope:"",itemProp:"mainEntity",itemType:"https://schema.org/Question",children:e.faqData&&e.faqData.length>0&&e.faqData.map((e,s)=>(0,l.jsxs)("div",{className:"accordion-item",children:[(0,l.jsx)("h2",{className:"accordion-header",id:"headingOne"+s,itemProp:e.title,children:(0,l.jsxs)("button",{className:a===s?"accordion-button collapsed openDesc":"accordion-button collapsed",type:"button","data-bs-toggle":"collapseOne"+s,"data-bs-target":"#collapseOne"+s,"aria-controls":"collapseOne"+s,onClick:()=>i(s),children:[e.status,"Q.",s+1," ",e.title]})}),(0,l.jsx)("div",{id:"collapseOne"+s,"aria-labelledby":"headingOne"+s,"data-bs-parent":"#accordionExample",itemScope:"",itemProp:e.description,itemType:"https://schema.org/Answer",children:(0,l.jsx)("div",{className:a===s?"accordion-body":"",children:a===s&&(0,l.jsx)("div",{dangerouslySetInnerHTML:{__html:e.description}})})})]},s))})]})})})})})};var n=i},5301:function(e,a,s){"use strict";s.r(a);var l=s(5893);s(7294),s(1698),s(7012);let c=()=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("footer",{children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"whatsapp",bis_skin_checked:"1",children:(0,l.jsx)("a",{href:"https://wa.me/+919599389388",target:"_blank",children:(0,l.jsx)("img",{src:"https://smca.ezrankings.in/react-backend/uploads/whatsapp.png",className:"img-responsive",alt:"whatsapp",width:"50",height:"50"})})}),(0,l.jsx)("div",{className:"col-md-3",children:(0,l.jsx)("div",{className:"footer-item",children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"",target:"_blank",children:"info@socialmediacreativeagency.com"})}),(0,l.jsxs)("li",{children:["Phone: ",(0,l.jsx)("a",{href:"tel:+91-9599389388",children:"+91-9599389388"})]})]})})}),(0,l.jsx)("div",{className:"col-md-3 ms-auto",children:(0,l.jsx)("div",{className:"footer-item",children:(0,l.jsxs)("ul",{className:"social-icon",children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"https://www.instagram.com/socialmediacreativeagency/",target:"_blank",rel:"nofollow",children:(0,l.jsx)("i",{className:"fab fa-instagram"})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"https://www.facebook.com/socialmediacreativeagency",target:"_blank",rel:"nofollow",children:(0,l.jsx)("i",{className:"fab fa-facebook-square"})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"",target:"_blank",rel:"nofollow",children:(0,l.jsx)("i",{className:"fab fa-twitter"})})})]})})}),(0,l.jsx)("div",{className:"col-md-12",children:(0,l.jsx)("div",{className:"copyright",children:(0,l.jsxs)("p",{children:["Copyright \xa9 2023 ",(0,l.jsx)("a",{href:"https://www.socialmediacreativeagency.com",children:"Social Media Creative Agency"})," All Rights Reserved."]})})})]})})})});a.default=c},1698:function(e,a,s){"use strict";s.r(a);var l=s(5893),c=s(7294),i=s(6154);let n=()=>{let[e,a]=(0,c.useState)(!1),[s,n]=(0,c.useState)(""),[t,r]=(0,c.useState)({name:"",email:"",message:""}),[o,d]=(0,c.useState)({}),m=e=>{let{name:a,value:s}=e.target;r(e=>({...e,[a]:s}))},h=()=>{a(!1)},p=e=>{e.preventDefault(),d({padding:"1rem 0rem",display:"block",color:"red"}),t.name?t.email?t.message?i.Z.post("https://smca.ezrankings.in/react-backend/contacts.php",t,{headers:{"Content-Type":"multipart/form-data"}}).then(e=>{let s=e.data;s&&(r({name:"",email:"",message:""}),n("Submit Successfully."),a(!0),d({padding:"1rem 0rem",display:"block",color:"#46c737"}))}).catch(e=>{}):(n("Message can not be blank."),a(!0)):(n("Email can not be blank."),a(!0)):(n("Name can not be blank."),a(!0))};return(0,l.jsx)("section",{className:"form-section pt-0",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)("h2",{children:"Great ideas always start as conversations."}),(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-md-12",children:(0,l.jsx)("form",{onSubmit:p,children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-md-12",children:e?(0,l.jsxs)("span",{style:o,children:[s,"  ",(0,l.jsx)("span",{onClick:h,children:(0,l.jsx)("i",{class:"fa fa-times","aria-hidden":"true"})})]}):""}),(0,l.jsx)("div",{className:"col-md-4",children:(0,l.jsx)("div",{className:"form-group",children:(0,l.jsx)("input",{type:"text",className:"form-control",onChange:m,value:t.name,name:"name",placeholder:"Name"})})}),(0,l.jsx)("div",{className:"col-md-4",children:(0,l.jsx)("div",{className:"form-group",children:(0,l.jsx)("input",{type:"text",className:"form-control",onChange:m,value:t.email,name:"email",placeholder:"Email"})})}),(0,l.jsx)("div",{className:"col-md-4",children:(0,l.jsx)("div",{className:"form-group",children:(0,l.jsx)("input",{type:"text",className:"form-control",onChange:m,value:t.message,name:"message",placeholder:"Message"})})}),(0,l.jsx)("div",{className:"col-md-12",children:(0,l.jsx)("div",{className:"form-group mt-4",children:(0,l.jsx)("button",{className:"btn-border2",type:"submit",children:"Send"})})})]})})})})]})})};a.default=n}},function(e){e.O(0,[154,774,888,179],function(){return e(e.s=5666)}),_N_E=e.O()}]);