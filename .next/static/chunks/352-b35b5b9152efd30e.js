"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[352],{4968:function(e,s,a){a.r(s);var l=a(5893),i=a(7294);let n=e=>{let[s,a]=(0,i.useState)(null),n=e=>{s===e?a(null):a(e)};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("section",{className:"faq-section",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsxs)("div",{className:"col-md-12",children:[(0,l.jsx)("h2",{children:"Frequently Asked Questions (FAQs)"}),(0,l.jsx)("div",{className:"accordion",id:"accordionExample",children:e.faqData&&e.faqData.length>0&&e.faqData.map((e,a)=>(0,l.jsxs)("div",{className:"accordion-item",children:[(0,l.jsx)("h2",{className:"accordion-header",id:"headingOne"+a,children:(0,l.jsxs)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapseOne"+a,"data-bs-target":"#collapseOne"+a,"aria-controls":"collapseOne"+a,onClick:()=>n(a),children:[e.status,"Q.",a+1," ",e.title]})}),(0,l.jsx)("div",{id:"collapseOne"+a,className:"","aria-labelledby":"headingOne"+a,"data-bs-parent":"#accordionExample",children:(0,l.jsx)("div",{className:s===a?"accordion-body":"",children:s===a&&(0,l.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})})})]},a))})]})})})})})};s.default=n},1698:function(e,s,a){a.r(s);var l=a(5893),i=a(7294),n=a(6154);let c=()=>{let[e,s]=(0,i.useState)(!1),[a,c]=(0,i.useState)(""),[t,r]=(0,i.useState)({name:"",email:"",message:""}),[d,o]=(0,i.useState)({}),m=e=>{let{name:s,value:a}=e.target;r(e=>({...e,[s]:a}))},h=()=>{s(!1)},x=e=>{e.preventDefault(),o({padding:"1rem 0rem",display:"block",color:"red"}),t.name?t.email?t.message?n.Z.post("https://smca.ezrankings.in/react-backend/contacts.php",t,{headers:{"Content-Type":"multipart/form-data"}}).then(e=>{let a=e.data;a&&(r({name:"",email:"",message:""}),c("Submit Successfully."),s(!0),o({padding:"1rem 0rem",display:"block",color:"#46c737"}))}).catch(e=>{}):(c("Message can not be blank."),s(!0)):(c("Email can not be blank."),s(!0)):(c("Name can not be blank."),s(!0))};return(0,l.jsx)("section",{className:"form-section",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)("h2",{children:"Great ideas always start as conversations."}),(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-md-12",children:(0,l.jsx)("form",{onSubmit:x,children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-md-12",children:e?(0,l.jsxs)("span",{style:d,children:[a,"  ",(0,l.jsx)("span",{onClick:h,children:(0,l.jsx)("i",{class:"fa fa-times","aria-hidden":"true"})})]}):""}),(0,l.jsx)("div",{className:"col-md-4",children:(0,l.jsx)("div",{className:"form-group",children:(0,l.jsx)("input",{type:"text",className:"form-control",onChange:m,value:t.name,name:"name",placeholder:"Name"})})}),(0,l.jsx)("div",{className:"col-md-4",children:(0,l.jsx)("div",{className:"form-group",children:(0,l.jsx)("input",{type:"text",className:"form-control",onChange:m,value:t.email,name:"email",placeholder:"Email"})})}),(0,l.jsx)("div",{className:"col-md-4",children:(0,l.jsx)("div",{className:"form-group",children:(0,l.jsx)("input",{type:"text",className:"form-control",onChange:m,value:t.message,name:"message",placeholder:"Message"})})}),(0,l.jsx)("div",{className:"col-md-12",children:(0,l.jsx)("div",{className:"form-group mt-4",children:(0,l.jsx)("button",{className:"btn-border2",type:"submit",children:"Send"})})})]})})})})]})})};s.default=c},2352:function(e,s,a){a.r(s);var l=a(5893),i=a(7294),n=a(6425),c=a(6154),t=a(1664),r=a.n(t),d=a(1698),o=a(4968);let m=()=>{let[e,s]=(0,i.useState)(!1),[a,t]=(0,i.useState)([]),[m,h]=(0,i.useState)([]),x=async()=>{c.Z.get("https://smca.ezrankings.in/react-backend/homes.php").then(e=>{let s=e.data.gallery.map(e=>({id:e.id,alt:e.alt,image:e.img})),a=e.data.faq.map((e,s)=>({id:e.id,title:e.title,status:0==s,description:e.description}));t(s),h(a)}).catch(e=>{})};return(0,i.useEffect)(()=>{x()},[]),(0,l.jsxs)("div",{children:[(0,l.jsx)("section",{className:"banner-section",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-md-12",children:(0,l.jsxs)("div",{className:"banner-caption",children:[(0,l.jsxs)("h1",{children:["We Love ",(0,l.jsxs)("span",{children:["St",(0,l.jsx)("img",{src:"https://smca.ezrankings.in/react-backend/uploads/oshap.png",className:"o-shap",alt:""}),"ries"]})]}),(0,l.jsx)("p",{children:"We Love to visualize stories beacuse we love people and they inspire us."})]})})})})}),(0,l.jsxs)("section",{className:"exp-branding-sec",children:[(0,l.jsx)("div",{className:"contianer",children:(0,l.jsx)("div",{className:"title-header",children:(0,l.jsxs)("h2",{children:["We’re an experienced branding agency with more than ",(0,l.jsx)("span",{children:"seven hundred projects "}),"under our belt."]})})}),(0,l.jsx)(n.default,{imgData:a})]}),(0,l.jsx)("section",{className:"start-retainership-sec ",children:(0,l.jsxs)("div",{className:"continer",children:[(0,l.jsxs)("div",{className:"title-header",children:[(0,l.jsx)("h2",{children:"Let's Start Retainership with us"}),(0,l.jsxs)("div",{className:"currency-wrap",children:[(0,l.jsxs)("div",{className:"dollor-wrap",children:[(0,l.jsx)("sup",{children:"$"}),"150"]}),(0,l.jsx)("div",{className:"divider",children:"/"}),(0,l.jsxs)("div",{className:"rupee-wrap",children:[(0,l.jsx)("sup",{children:"₹"}),"7000",(0,l.jsx)("sub",{children:"Per month"})]})]}),(0,l.jsx)(r(),{href:"",className:"btn-border",children:"Take an Expert"})]}),(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-md-12",children:(0,l.jsx)("div",{className:"content-wrap",children:(0,l.jsxs)("p",{children:["We believe that every business is ",(0,l.jsx)("span",{children:"unique and deserves excellent and customized social media creatives,"})," thats why we take the time to develop an enduring connection with our clients."]})})})}),(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-md-12",children:(0,l.jsxs)("div",{className:"content-wrap2",children:[(0,l.jsx)("h2",{children:"Let's create something amazing together."}),(0,l.jsx)(r(),{href:"",className:"",children:"Get Started"})]})})})]})}),(0,l.jsx)(d.default,{}),(0,l.jsx)(o.default,{faqData:m})]})};s.default=m},6425:function(e,s,a){a.r(s);var l=a(5893);a(7294);var i=a(6066);a(4640),a(9678),a(5675);let n=e=>(0,l.jsx)(i.Z,{centerMode:!0,autoplay:!1,autoplaySpeed:1e3,slidesToShow:4,dots:!0,arrows:!0,swipe:!0,infinite:!0,swipeToSlide:!0,responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}],className:"slick-slider",children:e.imgData&&e.imgData.length>0&&e.imgData.map((e,s)=>(0,l.jsx)("div",{className:"item",children:(0,l.jsx)("figure",{children:(0,l.jsx)("img",{src:e.image,alt:e.alt})})},s))});s.default=n}}]);