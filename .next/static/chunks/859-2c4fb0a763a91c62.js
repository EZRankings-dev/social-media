"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[859],{859:function(e,s,a){a.r(s);var i=a(5893),l=a(7294),n=a(8319),c=a(6154),t=a(1664),d=a.n(t),r=a(4968),o=a(6425),m=a(1698);let h=()=>{let[e,s]=(0,l.useState)(!1),[a,t]=(0,l.useState)([]),[h,x]=(0,l.useState)([]),[j,p]=(0,l.useState)([]),u=async()=>{c.Z.get("https://smca.ezrankings.in/react-backend/about.php").then(e=>{let s=e.data.about.map(e=>({id:e.id,alt:e.alt,title:e.title,description:e.description,image:e.img})),a=e.data.faq.map((e,s)=>({id:e.id,title:e.title,status:0==s,description:e.description})),i=e.data.gallery.map(e=>({id:e.id,alt:e.alt,image:e.img}));x(i),p(a),t(s)}).catch(e=>{})};return(0,l.useEffect)(()=>{u()},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("section",{className:"banner-section",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-md-12",children:(0,i.jsx)("div",{className:"banner-caption",children:(0,i.jsx)("h1",{children:(0,i.jsxs)("span",{children:["AB",(0,i.jsx)("img",{src:"https://smca.ezrankings.in/react-backend/uploads/oshap.png",className:"o-shap",alt:""}),"UT"]})})})})})})}),(0,i.jsx)("section",{className:"exp-branding-sec",children:(0,i.jsx)("div",{className:"contianer",children:(0,i.jsx)("div",{className:"title-header",children:(0,i.jsx)("h2",{children:"We are a passionate team of Social media creative experts who are committed to assisting companies in flourishing digitally."})})})}),(0,i.jsx)(n.default,{aboutContentData:a}),(0,i.jsx)(o.default,{imgData:h}),(0,i.jsx)("section",{className:"start-retainership-sec ",children:(0,i.jsxs)("div",{className:"continer",children:[(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-md-12",children:(0,i.jsx)("div",{className:"content-wrap",children:(0,i.jsxs)("p",{children:["We believe that every business is ",(0,i.jsx)("span",{children:"unique and deserves excellent and customized social media creatives,"})," thats why we take the time to develop an enduring connection with our clients."]})})})}),(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-md-12",children:(0,i.jsxs)("div",{className:"content-wrap2",children:[(0,i.jsx)("h2",{children:"Lets create something amazing together."}),(0,i.jsx)(d(),{href:"",className:"",children:"Get Started"})]})})})]})}),(0,i.jsx)(m.default,{}),(0,i.jsx)(r.default,{faqData:j})]})};s.default=h},8319:function(e,s,a){a.r(s);var i=a(5893);a(7294);let l=e=>(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("section",{className:"our-mission-sec",children:[(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("h2",{clsss:"mission-title",children:["Our Mission &",(0,i.jsx)("br",{}),"Vision & Values"]})}),(0,i.jsx)("div",{className:"container",children:e.aboutContentData&&e.aboutContentData.length>0&&e.aboutContentData.map((e,s)=>(0,i.jsx)("span",{children:(s+1)%2==1?(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-md-6",children:(0,i.jsxs)("div",{className:"content-wrap ",children:[(0,i.jsx)("h3",{children:e.title}),(0,i.jsx)("p",{children:e.description})]})}),(0,i.jsx)("div",{className:"col-md-6",children:(0,i.jsx)("div",{className:"icon-wrap",children:(0,i.jsx)("figure",{children:(0,i.jsx)("img",{src:e.image,alt:e.alt})})})})]}):(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-md-6",children:(0,i.jsx)("div",{className:"icon-wrap",children:(0,i.jsx)("figure",{children:(0,i.jsx)("img",{src:e.image,alt:e.alt})})})}),(0,i.jsx)("div",{className:"col-md-6",children:(0,i.jsxs)("div",{className:"content-wrap ",children:[(0,i.jsx)("h3",{children:e.title}),(0,i.jsx)("p",{children:e.description})]})})]})},s))})]})});s.default=l},4968:function(e,s,a){a.r(s);var i=a(5893),l=a(7294);let n=e=>{let[s,a]=(0,l.useState)(0),n=e=>{s===e?a(null):a(e)};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("section",{className:"faq-section",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsxs)("div",{className:"col-md-12",children:[(0,i.jsx)("h2",{children:"Frequently Asked Questions (FAQs)"}),(0,i.jsx)("div",{className:"accordion",id:"accordionExample",children:e.faqData&&e.faqData.length>0&&e.faqData.map((e,a)=>(0,i.jsxs)("div",{className:"accordion-item",children:[(0,i.jsx)("h2",{className:"accordion-header",id:"headingOne"+a,children:(0,i.jsxs)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapseOne"+a,"data-bs-target":"#collapseOne"+a,"aria-controls":"collapseOne"+a,onClick:()=>n(a),children:[e.status,"Q.",a+1," ",e.title]})}),(0,i.jsx)("div",{id:"collapseOne"+a,className:"","aria-labelledby":"headingOne"+a,"data-bs-parent":"#accordionExample",children:(0,i.jsx)("div",{className:s===a?"accordion-body":"",children:s===a&&(0,i.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})})})]},a))})]})})})})})};s.default=n},1698:function(e,s,a){a.r(s);var i=a(5893),l=a(7294),n=a(6154);let c=()=>{let[e,s]=(0,l.useState)(!1),[a,c]=(0,l.useState)(""),[t,d]=(0,l.useState)({name:"",email:"",message:""}),[r,o]=(0,l.useState)({}),m=e=>{let{name:s,value:a}=e.target;d(e=>({...e,[s]:a}))},h=()=>{s(!1)},x=e=>{e.preventDefault(),o({padding:"1rem 0rem",display:"block",color:"red"}),t.name?t.email?t.message?n.Z.post("https://smca.ezrankings.in/react-backend/contacts.php",t,{headers:{"Content-Type":"multipart/form-data"}}).then(e=>{let a=e.data;a&&(d({name:"",email:"",message:""}),c("Submit Successfully."),s(!0),o({padding:"1rem 0rem",display:"block",color:"#46c737"}))}).catch(e=>{}):(c("Message can not be blank."),s(!0)):(c("Email can not be blank."),s(!0)):(c("Name can not be blank."),s(!0))};return(0,i.jsx)("section",{className:"form-section",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("h2",{children:"Great ideas always start as conversations."}),(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-md-12",children:(0,i.jsx)("form",{onSubmit:x,children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-md-12",children:e?(0,i.jsxs)("span",{style:r,children:[a,"  ",(0,i.jsx)("span",{onClick:h,children:(0,i.jsx)("i",{class:"fa fa-times","aria-hidden":"true"})})]}):""}),(0,i.jsx)("div",{className:"col-md-4",children:(0,i.jsx)("div",{className:"form-group",children:(0,i.jsx)("input",{type:"text",className:"form-control",onChange:m,value:t.name,name:"name",placeholder:"Name"})})}),(0,i.jsx)("div",{className:"col-md-4",children:(0,i.jsx)("div",{className:"form-group",children:(0,i.jsx)("input",{type:"text",className:"form-control",onChange:m,value:t.email,name:"email",placeholder:"Email"})})}),(0,i.jsx)("div",{className:"col-md-4",children:(0,i.jsx)("div",{className:"form-group",children:(0,i.jsx)("input",{type:"text",className:"form-control",onChange:m,value:t.message,name:"message",placeholder:"Message"})})}),(0,i.jsx)("div",{className:"col-md-12",children:(0,i.jsx)("div",{className:"form-group mt-4",children:(0,i.jsx)("button",{className:"btn-border2",type:"submit",children:"Send"})})})]})})})})]})})};s.default=c},6425:function(e,s,a){a.r(s);var i=a(5893);a(7294);var l=a(6066);a(4640),a(9678),a(5675);let n=e=>(0,i.jsx)(l.Z,{centerMode:!0,autoplay:!1,autoplaySpeed:1e3,slidesToShow:4,dots:!0,arrows:!0,swipe:!0,infinite:!0,swipeToSlide:!0,responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}],className:"slick-slider",children:e.imgData&&e.imgData.length>0&&e.imgData.map((e,s)=>(0,i.jsx)("div",{className:"item",children:(0,i.jsx)("figure",{children:(0,i.jsx)("img",{src:e.image,alt:e.alt})})},s))});s.default=n}}]);