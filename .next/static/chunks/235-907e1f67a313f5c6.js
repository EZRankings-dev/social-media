"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[235],{7012:function(e,s,a){a.r(s),a.d(s,{default:function(){return c}});var l=a(5893),t=a(7294);let i=e=>{let[s,a]=(0,t.useState)(0),i=e=>{s===e?a(null):a(e)};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("section",{className:"faq-section",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsxs)("div",{className:"col-md-12",children:[(0,l.jsx)("h2",{className:"faq-title",children:"Frequently Asked Questions (FAQs)"}),(0,l.jsx)("div",{className:"accordion",id:"accordionExample",children:e.faqData&&e.faqData.length>0&&e.faqData.map((e,a)=>(0,l.jsxs)("div",{className:"accordion-item",children:[(0,l.jsx)("h2",{className:"accordion-header",id:"headingOne"+a,children:(0,l.jsxs)("button",{className:s===a?"accordion-button collapsed openDesc":"accordion-button collapsed",type:"button","data-bs-toggle":"collapseOne"+a,"data-bs-target":"#collapseOne"+a,"aria-controls":"collapseOne"+a,onClick:()=>i(a),children:[e.status,"Q.",a+1," ",e.title]})}),(0,l.jsx)("div",{id:"collapseOne"+a,className:"","aria-labelledby":"headingOne"+a,"data-bs-parent":"#accordionExample",children:(0,l.jsx)("div",{className:s===a?"accordion-body":"",children:s===a&&(0,l.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})})})]},a))})]})})})})})};var c=i},1698:function(e,s,a){a.r(s);var l=a(5893),t=a(7294),i=a(6154);let c=()=>{let[e,s]=(0,t.useState)(!1),[a,c]=(0,t.useState)(""),[n,d]=(0,t.useState)({name:"",email:"",message:""}),[r,o]=(0,t.useState)({}),m=e=>{let{name:s,value:a}=e.target;d(e=>({...e,[s]:a}))},h=()=>{s(!1)},x=e=>{e.preventDefault(),o({padding:"1rem 0rem",display:"block",color:"red"}),n.name?n.email?n.message?i.Z.post("https://smca.ezrankings.in/react-backend/contacts.php",n,{headers:{"Content-Type":"multipart/form-data"}}).then(e=>{let a=e.data;a&&(d({name:"",email:"",message:""}),c("Submit Successfully."),s(!0),o({padding:"1rem 0rem",display:"block",color:"#46c737"}))}).catch(e=>{}):(c("Message can not be blank."),s(!0)):(c("Email can not be blank."),s(!0)):(c("Name can not be blank."),s(!0))};return(0,l.jsx)("section",{className:"form-section",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)("h2",{children:"Great ideas always start as conversations."}),(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-md-12",children:(0,l.jsx)("form",{onSubmit:x,children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-md-12",children:e?(0,l.jsxs)("span",{style:r,children:[a,"  ",(0,l.jsx)("span",{onClick:h,children:(0,l.jsx)("i",{class:"fa fa-times","aria-hidden":"true"})})]}):""}),(0,l.jsx)("div",{className:"col-md-4",children:(0,l.jsx)("div",{className:"form-group",children:(0,l.jsx)("input",{type:"text",className:"form-control",onChange:m,value:n.name,name:"name",placeholder:"Name"})})}),(0,l.jsx)("div",{className:"col-md-4",children:(0,l.jsx)("div",{className:"form-group",children:(0,l.jsx)("input",{type:"text",className:"form-control",onChange:m,value:n.email,name:"email",placeholder:"Email"})})}),(0,l.jsx)("div",{className:"col-md-4",children:(0,l.jsx)("div",{className:"form-group",children:(0,l.jsx)("input",{type:"text",className:"form-control",onChange:m,value:n.message,name:"message",placeholder:"Message"})})}),(0,l.jsx)("div",{className:"col-md-12",children:(0,l.jsx)("div",{className:"form-group mt-4",children:(0,l.jsx)("button",{className:"btn-border2",type:"submit",children:"Send"})})})]})})})})]})})};s.default=c},6425:function(e,s,a){a.r(s);var l=a(5893);a(7294);var t=a(6066);a(4640),a(9678),a(5675);let i=e=>(0,l.jsx)(t.Z,{centerMode:!0,autoplay:!1,autoplaySpeed:1e3,slidesToShow:4,dots:!0,arrows:!0,swipe:!0,infinite:!0,swipeToSlide:!0,responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}],className:"slick-slider",children:e.imgData&&e.imgData.length>0&&e.imgData.map((e,s)=>(0,l.jsx)("div",{className:"item",children:(0,l.jsx)("figure",{children:(0,l.jsx)("img",{src:e.image,alt:e.alt})})},s))});s.default=i},5599:function(e,s,a){a.r(s);var l=a(5893);a(7294);let t=e=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("section",{className:"pricing-sec",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-md-12 entry-content table-responsive",children:(0,l.jsx)("table",{className:"table",children:(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{}),(0,l.jsx)("td",{className:"redC",children:(0,l.jsx)("span",{children:"Start-Up"})}),(0,l.jsx)("td",{className:"redC",children:(0,l.jsx)("span",{children:"Economic"})}),(0,l.jsx)("td",{className:"redC",children:(0,l.jsx)("span",{children:"Business"})})]}),e.chartData&&e.chartData.length>0&&e.chartData.map((e,s)=>(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:e.title}),(0,l.jsx)("td",{className:"1"==e.colored?"fs":"",children:e.individual}),(0,l.jsx)("td",{className:"1"==e.colored?"fs":"",children:e.start_up}),(0,l.jsx)("td",{className:"1"==e.colored?"fs":"",children:e.business})]},s))]})})})})})})});s.default=t},3235:function(e,s,a){a.r(s);var l=a(5893),t=a(7294),i=a(6425),c=a(5599),n=a(6154),d=a(7012),r=a(1698);let o=()=>{let[e,s]=(0,t.useState)(!1),[a,o]=(0,t.useState)([]),[m,h]=(0,t.useState)([]),[x,j]=(0,t.useState)([]),u=async()=>{n.Z.get("https://smca.ezrankings.in/react-backend/pricing.php").then(e=>{let s=e.data.gallery.map(e=>({id:e.id,alt:e.alt,image:e.img})),a=e.data.faq.map((e,s)=>({id:e.id,title:e.title,status:0==s,description:e.description})),l=e.data.price.map(e=>({title:e.title,id:e.id,colored:e.colored,start_up:e.start_up,business:e.business,individual:e.individual}));h(a),o(s),j(l)}).catch(e=>{})};return(0,t.useEffect)(()=>{u()},[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("section",{className:"banner-section",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-md-12",children:(0,l.jsx)("div",{className:"banner-caption",children:(0,l.jsx)("h1",{children:(0,l.jsx)("span",{children:"PRICING"})})})})})})}),(0,l.jsx)(c.default,{chartData:x}),(0,l.jsx)(d.default,{faqData:m}),(0,l.jsx)(i.default,{imgData:a}),(0,l.jsx)("section",{className:"start-retainership-sec srs2 ",children:(0,l.jsxs)("div",{className:"continer",children:[(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-md-12",children:(0,l.jsx)("div",{className:"content-wrap",children:(0,l.jsxs)("p",{children:["We believe that every business is ",(0,l.jsx)("span",{children:"unique and deserves excellent and customized social media creatives,"})," thats why we take the time to develop an enduring connection with our clients."]})})})}),(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-md-12",children:(0,l.jsxs)("div",{className:"content-wrap2",children:[(0,l.jsx)("h2",{children:"Lets create something amazing together."}),(0,l.jsx)("a",{href:"",className:"",children:"Get Started"})]})})})]})}),(0,l.jsx)(r.default,{})]})};s.default=o}}]);