"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[301],{7012:function(e,a,s){s.r(a),s.d(a,{default:function(){return n}});var l=s(5893),c=s(7294);let i=e=>{let[a,s]=(0,c.useState)(0),i=e=>{a===e?s(null):s(e)};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("section",{className:"faq-section",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsxs)("div",{className:"col-md-12",children:[(0,l.jsx)("h2",{className:"faq-title",children:"Frequently Asked Questions (FAQs)"}),(0,l.jsx)("div",{className:"accordion",id:"accordionExample",children:e.faqData&&e.faqData.length>0&&e.faqData.map((e,s)=>(0,l.jsxs)("div",{className:"accordion-item",children:[(0,l.jsx)("h2",{className:"accordion-header",id:"headingOne"+s,children:(0,l.jsxs)("button",{className:a===s?"accordion-button collapsed openDesc":"accordion-button collapsed",type:"button","data-bs-toggle":"collapseOne"+s,"data-bs-target":"#collapseOne"+s,"aria-controls":"collapseOne"+s,onClick:()=>i(s),children:[e.status,"Q.",s+1," ",e.title]})}),(0,l.jsx)("div",{id:"collapseOne"+s,className:"","aria-labelledby":"headingOne"+s,"data-bs-parent":"#accordionExample",children:(0,l.jsx)("div",{className:a===s?"accordion-body":"",children:a===s&&(0,l.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})})})]},s))})]})})})})})};var n=i},1698:function(e,a,s){s.r(a);var l=s(5893),c=s(7294),i=s(6154);let n=()=>{let[e,a]=(0,c.useState)(!1),[s,n]=(0,c.useState)(""),[t,r]=(0,c.useState)({name:"",email:"",message:""}),[d,o]=(0,c.useState)({}),m=e=>{let{name:a,value:s}=e.target;r(e=>({...e,[a]:s}))},h=()=>{a(!1)},x=e=>{e.preventDefault(),o({padding:"1rem 0rem",display:"block",color:"red"}),t.name?t.email?t.message?i.Z.post("https://smca.ezrankings.in/react-backend/contacts.php",t,{headers:{"Content-Type":"multipart/form-data"}}).then(e=>{let s=e.data;s&&(r({name:"",email:"",message:""}),n("Submit Successfully."),a(!0),o({padding:"1rem 0rem",display:"block",color:"#46c737"}))}).catch(e=>{}):(n("Message can not be blank."),a(!0)):(n("Email can not be blank."),a(!0)):(n("Name can not be blank."),a(!0))};return(0,l.jsx)("section",{className:"form-section",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)("h2",{children:"Great ideas always start as conversations."}),(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-md-12",children:(0,l.jsx)("form",{onSubmit:x,children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-md-12",children:e?(0,l.jsxs)("span",{style:d,children:[s,"  ",(0,l.jsx)("span",{onClick:h,children:(0,l.jsx)("i",{class:"fa fa-times","aria-hidden":"true"})})]}):""}),(0,l.jsx)("div",{className:"col-md-4",children:(0,l.jsx)("div",{className:"form-group",children:(0,l.jsx)("input",{type:"text",className:"form-control",onChange:m,value:t.name,name:"name",placeholder:"Name"})})}),(0,l.jsx)("div",{className:"col-md-4",children:(0,l.jsx)("div",{className:"form-group",children:(0,l.jsx)("input",{type:"text",className:"form-control",onChange:m,value:t.email,name:"email",placeholder:"Email"})})}),(0,l.jsx)("div",{className:"col-md-4",children:(0,l.jsx)("div",{className:"form-group",children:(0,l.jsx)("input",{type:"text",className:"form-control",onChange:m,value:t.message,name:"message",placeholder:"Message"})})}),(0,l.jsx)("div",{className:"col-md-12",children:(0,l.jsx)("div",{className:"form-group mt-4",children:(0,l.jsx)("button",{className:"btn-border2",type:"submit",children:"Send"})})})]})})})})]})})};a.default=n},3087:function(e,a,s){s.r(a);var l=s(5893),c=s(7294),i=s(1971),n=s(6154);s(5675);var t=s(1698),r=s(7012);let d=()=>{let[e,a]=(0,c.useState)(!1),[s,d]=(0,c.useState)([]),[o,m]=(0,c.useState)([]),[h,x]=(0,c.useState)(1),[p,j]=(0,c.useState)([]),u=()=>{x(h+1)},g=async e=>{n.Z.get("https://smca.ezrankings.in/react-backend/portData.php?page=".concat(e)).then(e=>{let a=e.data.gallery&&e.data.gallery.length>0&&e.data.gallery.map(e=>({id:e.id,alt:e.alt,image:e.image})),s=e.data.faq.map((e,a)=>({id:e.id,title:e.title,status:0==a,description:e.description})),l=e.data.blog.map(e=>({id:e.id,alt:e.alt,image:e.image}));if(s&&s.length>0&&d(a),m(s),p&&p.length>0){for(let e=0;e<l.length;e++)p.push(l[e]);j(p)}else j(l)}).catch(e=>{})};return(0,c.useEffect)(()=>{g(h)},[h]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("section",{className:"banner-section portfoliopage",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-md-12",children:(0,l.jsx)("div",{className:"banner-caption",children:(0,l.jsx)("h1",{children:(0,l.jsxs)("span",{children:["PORTF",(0,l.jsx)("img",{src:"https://smca.ezrankings.in/react-backend/uploads/oshap.png",className:"o-shap",alt:""}),"Lio"]})})})})})})}),(0,l.jsx)("section",{className:"porfolio-slider",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-md-9 mx-auto",children:(0,l.jsx)("div",{className:"slider-porfolio",children:(0,l.jsx)(i.default,{imgData:s})})})})})}),(0,l.jsx)("section",{className:"portfolio-sec",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row",children:[p.map((e,a)=>(0,l.jsx)("div",{className:"col-md-4",children:(0,l.jsx)("div",{className:"portfolio-card",children:(0,l.jsxs)("figure",{children:[" ",(0,l.jsxs)("a",{href:e.image,"data-fancybox":"gallery","data-caption":e.alt,children:[(0,l.jsx)("img",{src:e.image,alt:e.alt}),(0,l.jsx)("span",{className:"zoom-img",children:(0,l.jsx)("i",{className:"fas fa-search-plus"})})]})]})})},a)),(0,l.jsx)("div",{className:"col-md-12",children:(0,l.jsx)("div",{className:"load-more-btn",children:(0,l.jsx)("a",{onClick:u,children:"Load More"})})})]})})}),(0,l.jsx)("section",{className:"start-retainership-sec ",children:(0,l.jsxs)("div",{className:"continer",children:[(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-md-12",children:(0,l.jsx)("div",{className:"content-wrap",children:(0,l.jsxs)("p",{children:["We believe that every business is ",(0,l.jsx)("span",{children:"unique and deserves excellent and customized social media creatives,"})," that's why we take the time to develop an enduring connection with our clients."]})})})}),(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-md-12",children:(0,l.jsxs)("div",{className:"content-wrap2",children:[(0,l.jsx)("h2",{children:"Let’s create something amazing together."}),(0,l.jsx)("a",{href:"https://www.socialmediacreativeagency.com/contact-us",class:"",children:"Get Started"})]})})})]})}),(0,l.jsx)(t.default,{}),(0,l.jsx)(r.default,{faqData:o})]})};a.default=d},1971:function(e,a,s){s.r(a),s.d(a,{default:function(){return i}});var l=s(5893);s(7294);var c=s(6066);function i(e){return(0,l.jsx)(c.Z,{autoplay:!1,autoplaySpeed:1e3,slidesToShow:1,dots:!0,arrows:!0,responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}],className:"slick-slider2",children:e.imgData&&e.imgData.length>0&&e.imgData.map((e,a)=>(0,l.jsx)("div",{className:"item",children:(0,l.jsx)("figure",{children:(0,l.jsx)("img",{src:e.image,alt:e.alt})})},a))})}s(4640),s(9678)}}]);