(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[225],{6465:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/thankyou",function(){return s(9433)}])},4968:function(e,a,s){"use strict";s.r(a);var i=s(5893),n=s(7294);let l=e=>{let[a,s]=(0,n.useState)(null),l=e=>{a===e?s(null):s(e)};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("section",{className:"faq-section",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsxs)("div",{className:"col-md-12",children:[(0,i.jsx)("h2",{children:"Frequently Asked Questions (FAQs)"}),(0,i.jsx)("div",{className:"accordion",id:"accordionExample",children:e.faqData&&e.faqData.length>0&&e.faqData.map((e,s)=>(0,i.jsxs)("div",{className:"accordion-item",children:[(0,i.jsx)("h2",{className:"accordion-header",id:"headingOne"+s,children:(0,i.jsxs)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapseOne"+s,"data-bs-target":"#collapseOne"+s,"aria-controls":"collapseOne"+s,onClick:()=>l(s),children:[e.status,"Q.",s+1," ",e.title]})}),(0,i.jsx)("div",{id:"collapseOne"+s,className:"","aria-labelledby":"headingOne"+s,"data-bs-parent":"#accordionExample",children:(0,i.jsx)("div",{className:a===s?"accordion-body":"",children:a===s&&(0,i.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})})})]},s))})]})})})})})};a.default=l},5301:function(e,a,s){"use strict";s.r(a);var i=s(5893);s(7294),s(1698),s(4968);let n=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("footer",{children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-md-3",children:(0,i.jsx)("div",{className:"footer-item",children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"",target:"_blank",children:"info@socialmediacreativeagency.com"})}),(0,i.jsxs)("li",{children:["Phone: ",(0,i.jsx)("a",{href:"tel:+91-9599389388",children:"+91-9599389388"})]})]})})}),(0,i.jsx)("div",{className:"col-md-3 ms-auto",children:(0,i.jsx)("div",{className:"footer-item",children:(0,i.jsxs)("ul",{className:"social-icon",children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://www.instagram.com/socialmediacreativeagency/",target:"_blank",rel:"nofollow",children:(0,i.jsx)("i",{className:"fab fa-instagram"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://www.facebook.com/socialmediacreativeagency",target:"_blank",rel:"nofollow",children:(0,i.jsx)("i",{className:"fab fa-facebook-square"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"",target:"_blank",rel:"nofollow",children:(0,i.jsx)("i",{className:"fab fa-twitter"})})})]})})}),(0,i.jsx)("div",{className:"col-md-12",children:(0,i.jsx)("div",{className:"copyright",children:(0,i.jsxs)("p",{children:["Copyright \xa9 2023 ",(0,i.jsx)("a",{href:"https://www.socialmediacreativeagency.com",children:"Social Media Creative Agency"})," All Rights Reserved."]})})})]})})})});a.default=n},1698:function(e,a,s){"use strict";s.r(a);var i=s(5893),n=s(7294),l=s(6154);let c=()=>{let[e,a]=(0,n.useState)(!1),[s,c]=(0,n.useState)(""),[t,r]=(0,n.useState)({name:"",email:"",message:""}),[o,d]=(0,n.useState)({}),m=e=>{let{name:a,value:s}=e.target;r(e=>({...e,[a]:s}))},h=()=>{a(!1)},x=e=>{e.preventDefault(),d({padding:"1rem 0rem",display:"block",color:"red"}),t.name?t.email?t.message?l.Z.post("https://smca.ezrankings.in/react-backend/contacts.php",t,{headers:{"Content-Type":"multipart/form-data"}}).then(e=>{let s=e.data;s&&(r({name:"",email:"",message:""}),c("Submit Successfully."),a(!0),d({padding:"1rem 0rem",display:"block",color:"#46c737"}))}).catch(e=>{}):(c("Message can not be blank."),a(!0)):(c("Email can not be blank."),a(!0)):(c("Name can not be blank."),a(!0))};return(0,i.jsx)("section",{className:"form-section",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("h2",{children:"Great ideas always start as conversations."}),(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-md-12",children:(0,i.jsx)("form",{onSubmit:x,children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-md-12",children:e?(0,i.jsxs)("span",{style:o,children:[s,"  ",(0,i.jsx)("span",{onClick:h,children:(0,i.jsx)("i",{class:"fa fa-times","aria-hidden":"true"})})]}):""}),(0,i.jsx)("div",{className:"col-md-4",children:(0,i.jsx)("div",{className:"form-group",children:(0,i.jsx)("input",{type:"text",className:"form-control",onChange:m,value:t.name,name:"name",placeholder:"Name"})})}),(0,i.jsx)("div",{className:"col-md-4",children:(0,i.jsx)("div",{className:"form-group",children:(0,i.jsx)("input",{type:"text",className:"form-control",onChange:m,value:t.email,name:"email",placeholder:"Email"})})}),(0,i.jsx)("div",{className:"col-md-4",children:(0,i.jsx)("div",{className:"form-group",children:(0,i.jsx)("input",{type:"text",className:"form-control",onChange:m,value:t.message,name:"message",placeholder:"Message"})})}),(0,i.jsx)("div",{className:"col-md-12",children:(0,i.jsx)("div",{className:"form-group mt-4",children:(0,i.jsx)("button",{className:"btn-border2",type:"submit",children:"Send"})})})]})})})})]})})};a.default=c},2352:function(e,a,s){"use strict";s.r(a);var i=s(5893),n=s(7294),l=s(6425),c=s(6154),t=s(1664),r=s.n(t),o=s(1698);let d=()=>{let[e,a]=(0,n.useState)(!1),[s,t]=(0,n.useState)([]),d=async()=>{c.Z.get("https://smca.ezrankings.in/react-backend/homes.php").then(e=>{let a=e.data.gallery.map(e=>({id:e.id,alt:e.alt,image:e.img}));t(a)}).catch(e=>{})};return(0,n.useEffect)(()=>{d()},[]),(0,i.jsxs)("div",{children:[(0,i.jsx)("section",{className:"banner-section",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-md-12",children:(0,i.jsxs)("div",{className:"banner-caption",children:[(0,i.jsxs)("h1",{children:["We Love ",(0,i.jsxs)("span",{children:["St",(0,i.jsx)("img",{src:"https://smca.ezrankings.in/react-backend/uploads/oshap.png",className:"o-shap",alt:""}),"ries"]})]}),(0,i.jsx)("p",{children:"We Love to visualize stories beacuse we love people and they inspire us."})]})})})})}),(0,i.jsxs)("section",{className:"exp-branding-sec",children:[(0,i.jsx)("div",{className:"contianer",children:(0,i.jsx)("div",{className:"title-header",children:(0,i.jsxs)("h2",{children:["We’re an experienced branding agency with more than ",(0,i.jsx)("span",{children:"seven hundred projects "}),"under our belt."]})})}),(0,i.jsx)(l.default,{imgData:s})]}),(0,i.jsx)("section",{className:"start-retainership-sec ",children:(0,i.jsxs)("div",{className:"continer",children:[(0,i.jsxs)("div",{className:"title-header",children:[(0,i.jsxs)("h2",{children:["Let's Start Retainership with us",(0,i.jsxs)("span",{children:[(0,i.jsx)("sup",{children:"$"}),"150/",(0,i.jsx)("sup",{children:"₹"}),"7000",(0,i.jsx)("sub",{children:"Per month"})]})]}),(0,i.jsx)(r(),{href:"",className:"btn-border",children:"Take an Expert"})]}),(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-md-12",children:(0,i.jsx)("div",{className:"content-wrap",children:(0,i.jsxs)("p",{children:["We believe that every business is ",(0,i.jsx)("span",{children:"unique and deserves excellent and customized social media creatives,"})," thats why we take the time to develop an enduring connection with our clients."]})})})}),(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-md-12",children:(0,i.jsxs)("div",{className:"content-wrap2",children:[(0,i.jsx)("h2",{children:"Let's create something amazing together."}),(0,i.jsx)(r(),{href:"",className:"",children:"Get Started"})]})})})]})}),(0,i.jsx)(o.default,{})]})};a.default=d},5389:function(e,a,s){"use strict";s.r(a);var i=s(5893),n=s(1664),l=s.n(n);s(5675);var c=s(7294);let t=()=>{let[e,a]=(0,c.useState)({home:"nav-link active",about:"nav-link",price:"nav-link",portfolio:"nav-link",contact:"nav-link talk-let"});return(0,i.jsx)("header",{children:(0,i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light ",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)(l(),{className:"navbar-brand",href:"/",children:(0,i.jsx)("img",{src:"https://smca.ezrankings.in/react-backend/uploads/logo.png",className:"header-logo",alt:""})}),(0,i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,i.jsx)("span",{className:"navbar-toggler-icon"})}),(0,i.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:(0,i.jsxs)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:[(0,i.jsx)("li",{className:"nav-item",onClick:()=>a({home:"nav-link active",about:"nav-link",price:"nav-link",portfolio:"nav-link",contact:"nav-link talk-let"}),children:(0,i.jsx)(l(),{href:"/",className:e.home,"aria-current":"page",children:"Home"})}),(0,i.jsx)("li",{className:"nav-item",onClick:()=>a({home:"nav-link",about:"nav-link active",price:"nav-link",portfolio:"nav-link",contact:"nav-link talk-let"}),children:(0,i.jsx)(l(),{href:"/about",className:e.about,children:"About"})}),(0,i.jsx)("li",{className:"nav-item",onClick:()=>a({home:"nav-link",about:"nav-link ",price:"nav-link",portfolio:"nav-link active",contact:"nav-link talk-let"}),children:(0,i.jsx)(l(),{href:"/portfolio",className:e.portfolio,children:"Portfolio"})}),(0,i.jsx)("li",{className:"nav-item",onClick:()=>a({home:"nav-link",about:"nav-link",price:"nav-link active",portfolio:"nav-link ",contact:"nav-link talk-let"}),children:(0,i.jsx)(l(),{href:"/pricing",className:e.price,children:"Pricing"})}),(0,i.jsx)("li",{className:"nav-item",onClick:()=>a({home:"nav-link",about:"nav-link",price:"nav-link",portfolio:"nav-link",contact:"nav-link talk-let active"}),children:(0,i.jsx)(l(),{href:"/contact",className:e.contact,children:"Lets Talk"})})]})})]})})})};a.default=t},6425:function(e,a,s){"use strict";s.r(a);var i=s(5893);s(7294);var n=s(6066);s(4640),s(9678),s(5675);let l=e=>(0,i.jsx)(n.Z,{centerMode:!0,autoplay:!1,autoplaySpeed:1e3,slidesToShow:4,dots:!0,arrows:!0,swipe:!0,infinite:!0,swipeToSlide:!0,responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}],className:"slick-slider",children:e.imgData&&e.imgData.length>0&&e.imgData.map((e,a)=>(0,i.jsx)("div",{className:"item",children:(0,i.jsx)("figure",{children:(0,i.jsx)("img",{src:e.image,alt:e.alt})})},a))});a.default=l},9433:function(e,a,s){"use strict";s.r(a);var i=s(5893),n=s(9008),l=s.n(n);s(2352);var c=s(5389);s(5301);let t=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(l(),{children:[(0,i.jsx)("meta",{name:"robots",content:"index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"}),(0,i.jsx)("title",{children:"Full-Service Social Media Marketing Agency in India - Social Media Creative Agency"}),(0,i.jsx)("meta",{name:"keywords",content:"social media creative agency, creative social media services, creative agency social media posts, full service creative agency, best creative agency in india, top creative agencies, best social media agency in india, social media management agency, white label social media management, best social media marketing agency"}),(0,i.jsx)("meta",{name:"description",content:"Looking for creative Social Media Services to promote your brand?? SMCA is full-service creative agency based in India, offers white label social media management services for clients. Get top-notch quality social media posts services from the experts."}),(0,i.jsx)("link",{rel:"canonical",href:"https://www.socialmediacreativeagency.com/"}),(0,i.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("meta",{property:"og:title",content:"The Best Social Media Marketing Agency in India - Social Media Creative Agency (SMCA)"}),(0,i.jsx)("meta",{property:"og:description",content:"Looking for creative Social Media Services to promote your brand?? SMCA is full-service creative agency based in India, offers white label social media management services for clients. Get top-notch quality social media posts services from the experts."}),(0,i.jsx)("meta",{property:"og:url",content:"https://www.socialmediacreativeagency.com/"}),(0,i.jsx)("meta",{property:"og:site_name",content:"Creative Agency"}),(0,i.jsx)("meta",{property:"article:modified_time",content:"2023-02-27T05:38:12+00:00"}),(0,i.jsx)("script",{type:"application/ld+json"})]}),(0,i.jsx)(c.default,{}),(0,i.jsx)("section",{className:"start-retainership-sec ",children:(0,i.jsx)("div",{className:"continer",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-md-12",children:(0,i.jsx)("div",{className:"content-wrap",children:(0,i.jsx)("h1",{className:"thankyou",children:"Thank you for submitting."})})})})})}),(0,i.jsx)("footer",{children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-md-3",children:(0,i.jsx)("div",{className:"footer-item",children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"",target:"_blank",children:"info@socialmediacreativeagency.com"})}),(0,i.jsxs)("li",{children:["Phone: ",(0,i.jsx)("a",{href:"tel:+91-9599389388",children:"+91-9599389388"})]})]})})}),(0,i.jsx)("div",{className:"col-md-3 ms-auto",children:(0,i.jsx)("div",{className:"footer-item",children:(0,i.jsxs)("ul",{className:"social-icon",children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://www.instagram.com/socialmediacreativeagency/",target:"_blank",rel:"nofollow",children:(0,i.jsx)("i",{className:"fab fa-instagram"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://www.facebook.com/socialmediacreativeagency",target:"_blank",rel:"nofollow",children:(0,i.jsx)("i",{className:"fab fa-facebook-square"})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"",target:"_blank",rel:"nofollow",children:(0,i.jsx)("i",{className:"fab fa-twitter"})})})]})})}),(0,i.jsx)("div",{className:"col-md-12",children:(0,i.jsx)("div",{className:"copyright",children:(0,i.jsxs)("p",{children:["Copyright \xa9 2023 ",(0,i.jsx)("a",{href:"https://www.socialmediacreativeagency.com",children:"Social Media Creative Agency"})," All Rights Reserved."]})})})]})})})]});a.default=t},9008:function(e,a,s){e.exports=s(2636)}},function(e){e.O(0,[154,675,278,664,774,888,179],function(){return e(e.s=6465)}),_N_E=e.O()}]);