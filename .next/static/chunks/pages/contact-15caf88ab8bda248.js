(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{8105:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return s(2188)}])},7479:function(e,a,s){"use strict";s.r(a);var n=s(5893),t=s(7294),c=s(39),l=s(4968),i=s(6154),r=s(1664),o=s.n(r);let d=()=>{let[e,a]=(0,t.useState)([]),s=async()=>{i.Z.get("https://smca.ezrankings.in/react-backend/contactData.php").then(e=>{let s=e.data.faq.map((e,a)=>({id:e.id,title:e.title,status:0==a,description:e.description}));a(s)}).catch(e=>{})};return(0,t.useEffect)(()=>{s()},[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"contact-page",children:[(0,n.jsx)("section",{className:"banner-section",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col-md-12",children:(0,n.jsx)("div",{className:"banner-caption",children:(0,n.jsx)("h1",{children:(0,n.jsxs)("span",{children:["C",(0,n.jsx)("img",{src:"https://smca.ezrankings.in/react-backend/uploads/oshap.png",className:"o-shap",alt:""}),"NTACT"]})})})})})})}),(0,n.jsx)("section",{className:"start-retainership-sec ",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col-md-12",children:(0,n.jsxs)("div",{className:"content-wrap2",children:[(0,n.jsx)("h2",{children:"Let’s create something amazing together."}),(0,n.jsx)(o(),{href:"",className:"",children:"Get Started"})]})})})})}),(0,n.jsx)("section",{className:"",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)(c.default,{})})}),(0,n.jsx)(l.default,{faqData:e}),(0,n.jsx)("section",{className:"form-section",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col-md-12",children:(0,n.jsx)("div",{className:"content-wrap",children:(0,n.jsx)("p",{children:"We believe that every business is unique and deserves excellent and customized social media creatives, thats why we take the time to develop an enduring connection with our clients."})})})})})})]})})};a.default=d},39:function(e,a,s){"use strict";s.r(a);var n=s(5893),t=s(7294),c=s(6154),l=s(1163),i=s.n(l);let r=()=>{let[e,a]=(0,t.useState)(!1),[s,l]=(0,t.useState)(""),[r,o]=(0,t.useState)({name:"",email:"",type:2,message:""}),[d,m]=(0,t.useState)({}),h=e=>{let{name:a,value:s}=e.target;o(e=>({...e,[a]:s}))},x=()=>{a(!1)},p=e=>{e.preventDefault(),m({padding:"1rem 0rem",display:"block",color:"red"}),r.name?r.email?r.message?c.Z.post("https://smca.ezrankings.in/react-backend/contacts.php",r,{headers:{"Content-Type":"multipart/form-data"}}).then(e=>{let s=e.data;s&&(o({name:"",email:"",message:""}),i().push("/thankyou"),l("Submit Successfully."),a(!0),m({padding:"1rem 0rem",display:"block",color:"#46c737"}))}).catch(e=>{}):(l("Message can not be blank."),a(!0)):(l("Email can not be blank."),a(!0)):(l("Name can not be blank."),a(!0))};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("form",{onSubmit:p,className:"form-inline",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-md-12",children:e?(0,n.jsxs)("span",{style:d,children:[s,"  ",(0,n.jsx)("span",{onClick:x,children:(0,n.jsx)("i",{class:"fa fa-times","aria-hidden":"true"})})]}):""}),(0,n.jsx)("div",{className:"col-md-6",children:(0,n.jsx)("div",{className:"form-group",children:(0,n.jsx)("input",{type:"text",className:"form-control contactForm",onChange:h,value:r.name,name:"name",placeholder:"Name"})})}),(0,n.jsx)("div",{className:"col-md-6",children:(0,n.jsx)("div",{className:"form-group",children:(0,n.jsx)("input",{type:"email",className:"form-control contactForm",onChange:h,value:r.email,name:"email",placeholder:"Email"})})}),(0,n.jsx)("div",{className:"col-md-6",children:(0,n.jsx)("div",{className:"form-group",children:(0,n.jsx)("input",{type:"text",className:"form-control contactForm",onChange:h,value:r.message,name:"message",placeholder:"Message"})})}),(0,n.jsx)("div",{className:"col-md-6",children:(0,n.jsx)("div",{className:"form-group mt-2",children:(0,n.jsx)("button",{className:"btn-border2",type:"submit",children:"Send"})})})]})})})};a.default=r},4968:function(e,a,s){"use strict";s.r(a);var n=s(5893),t=s(7294);let c=e=>{let[a,s]=(0,t.useState)(0),c=e=>{a===e?s(null):s(e)};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("section",{className:"faq-section",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsxs)("div",{className:"col-md-12",children:[(0,n.jsx)("h2",{children:"Frequently Asked Questions (FAQs)"}),(0,n.jsx)("div",{className:"accordion",id:"accordionExample",children:e.faqData&&e.faqData.length>0&&e.faqData.map((e,s)=>(0,n.jsxs)("div",{className:"accordion-item",children:[(0,n.jsx)("h2",{className:"accordion-header",id:"headingOne"+s,children:(0,n.jsxs)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapseOne"+s,"data-bs-target":"#collapseOne"+s,"aria-controls":"collapseOne"+s,onClick:()=>c(s),children:[e.status,"Q.",s+1," ",e.title]})}),(0,n.jsx)("div",{id:"collapseOne"+s,className:"","aria-labelledby":"headingOne"+s,"data-bs-parent":"#accordionExample",children:(0,n.jsx)("div",{className:a===s?"accordion-body":"",children:a===s&&(0,n.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})})})]},s))})]})})})})})};a.default=c},5301:function(e,a,s){"use strict";s.r(a);var n=s(5893);s(7294),s(1698),s(4968);let t=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("footer",{children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-md-3",children:(0,n.jsx)("div",{className:"footer-item",children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"",target:"_blank",children:"info@socialmediacreativeagency.com"})}),(0,n.jsxs)("li",{children:["Phone: ",(0,n.jsx)("a",{href:"tel:+91-9599389388",children:"+91-9599389388"})]})]})})}),(0,n.jsx)("div",{className:"col-md-3 ms-auto",children:(0,n.jsx)("div",{className:"footer-item",children:(0,n.jsxs)("ul",{className:"social-icon",children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://www.instagram.com/socialmediacreativeagency/",target:"_blank",rel:"nofollow",children:(0,n.jsx)("i",{className:"fab fa-instagram"})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://www.facebook.com/socialmediacreativeagency",target:"_blank",rel:"nofollow",children:(0,n.jsx)("i",{className:"fab fa-facebook-square"})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"",target:"_blank",rel:"nofollow",children:(0,n.jsx)("i",{className:"fab fa-twitter"})})})]})})}),(0,n.jsx)("div",{className:"col-md-12",children:(0,n.jsx)("div",{className:"copyright",children:(0,n.jsxs)("p",{children:["Copyright \xa9 2023 ",(0,n.jsx)("a",{href:"https://www.socialmediacreativeagency.com",children:"Social Media Creative Agency"})," All Rights Reserved."]})})})]})})})});a.default=t},1698:function(e,a,s){"use strict";s.r(a);var n=s(5893),t=s(7294),c=s(6154);let l=()=>{let[e,a]=(0,t.useState)(!1),[s,l]=(0,t.useState)(""),[i,r]=(0,t.useState)({name:"",email:"",message:""}),[o,d]=(0,t.useState)({}),m=e=>{let{name:a,value:s}=e.target;r(e=>({...e,[a]:s}))},h=()=>{a(!1)},x=e=>{e.preventDefault(),d({padding:"1rem 0rem",display:"block",color:"red"}),i.name?i.email?i.message?c.Z.post("https://smca.ezrankings.in/react-backend/contacts.php",i,{headers:{"Content-Type":"multipart/form-data"}}).then(e=>{let s=e.data;s&&(r({name:"",email:"",message:""}),l("Submit Successfully."),a(!0),d({padding:"1rem 0rem",display:"block",color:"#46c737"}))}).catch(e=>{}):(l("Message can not be blank."),a(!0)):(l("Email can not be blank."),a(!0)):(l("Name can not be blank."),a(!0))};return(0,n.jsx)("section",{className:"form-section",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("h2",{children:"Great ideas always start as conversations."}),(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col-md-12",children:(0,n.jsx)("form",{onSubmit:x,children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-md-12",children:e?(0,n.jsxs)("span",{style:o,children:[s,"  ",(0,n.jsx)("span",{onClick:h,children:(0,n.jsx)("i",{class:"fa fa-times","aria-hidden":"true"})})]}):""}),(0,n.jsx)("div",{className:"col-md-4",children:(0,n.jsx)("div",{className:"form-group",children:(0,n.jsx)("input",{type:"text",className:"form-control",onChange:m,value:i.name,name:"name",placeholder:"Name"})})}),(0,n.jsx)("div",{className:"col-md-4",children:(0,n.jsx)("div",{className:"form-group",children:(0,n.jsx)("input",{type:"text",className:"form-control",onChange:m,value:i.email,name:"email",placeholder:"Email"})})}),(0,n.jsx)("div",{className:"col-md-4",children:(0,n.jsx)("div",{className:"form-group",children:(0,n.jsx)("input",{type:"text",className:"form-control",onChange:m,value:i.message,name:"message",placeholder:"Message"})})}),(0,n.jsx)("div",{className:"col-md-12",children:(0,n.jsx)("div",{className:"form-group mt-4",children:(0,n.jsx)("button",{className:"btn-border2",type:"submit",children:"Send"})})})]})})})})]})})};a.default=l},5389:function(e,a,s){"use strict";s.r(a);var n=s(5893),t=s(1664),c=s.n(t);s(5675),s(7294);var l=s(1163);let i=()=>{let e=(0,l.useRouter)();return(0,n.jsx)("header",{children:(0,n.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light ",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)(c(),{className:"navbar-brand",href:"/",children:(0,n.jsx)("img",{src:"https://smca.ezrankings.in/react-backend/uploads/logo.png",className:"header-logo",alt:""})}),(0,n.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,n.jsx)("span",{className:"navbar-toggler-icon"})}),(0,n.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:(0,n.jsxs)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:[(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)(c(),{href:"/",className:"/"==e.pathname?"nav-link active":"nav-link","aria-current":"page",children:"Home"})}),(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)(c(),{href:"/about",className:"/about"==e.pathname?"nav-link active":"nav-link",children:"About"})}),(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)(c(),{href:"/portfolio",className:"/portfolio"==e.pathname?"nav-link active":"nav-link",children:"Portfolio"})}),(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)(c(),{href:"/pricing",className:"/pricing"==e.pathname?"nav-link active":"nav-link",children:"Pricing"})}),(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)(c(),{href:"/contact",className:"/contact"==e.pathname?"nav-link talk-let active":"nav-link talk-let",children:"Lets Talk"})})]})})]})})})};a.default=i},2188:function(e,a,s){"use strict";s.r(a);var n=s(5893),t=s(9008),c=s.n(t),l=s(7479),i=s(5389),r=s(5301);let o=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(c(),{children:[(0,n.jsx)("meta",{name:"robots",content:"index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"}),(0,n.jsx)("link",{rel:"icon",href:"https://www.socialmediacreativeagency.com/wp-content/themes/creative-agency/assets/images/favicon.webp"}),(0,n.jsx)("title",{children:"Contact Us - Social Media Creative Agency"}),(0,n.jsx)("meta",{name:"description",content:"If you would like to Contact Us, please drop an email @ info@socialmediacreativeagency.com. Our social media experts will contact you as soon as possible."}),(0,n.jsx)("link",{rel:"canonical",href:"https://www.socialmediacreativeagency.com/contact-us/"}),(0,n.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,n.jsx)("meta",{property:"og:type",content:"article"}),(0,n.jsx)("meta",{property:"og:title",content:"Contact Us - Social Media Creative Agency"}),(0,n.jsx)("meta",{property:"og:description",content:"If you would like to Contact Us, please drop an email @ info@socialmediacreativeagency.com. Our social media experts will contact you as soon as possible."}),(0,n.jsx)("meta",{property:"og:url",content:"https://www.socialmediacreativeagency.com/contact-us/"}),(0,n.jsx)("meta",{property:"og:site_name",content:"Creative Agency"}),(0,n.jsx)("meta",{property:"article:modified_time",content:"2023-02-27T05:42:06+00:00"}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("link",{rel:"stylesheet",type:"text/css",href:"https://kit-pro.fontawesome.com/releases/v5.15.3/css/pro.min.css"}),(0,n.jsx)("link",{rel:"stylesheet",type:"text/css",href:"https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500&display=swap"})]}),(0,n.jsx)(i.default,{}),(0,n.jsx)(l.default,{}),(0,n.jsx)(r.default,{})]});a.default=o},9008:function(e,a,s){e.exports=s(2636)},1163:function(e,a,s){e.exports=s(6885)}},function(e){e.O(0,[154,675,664,774,888,179],function(){return e(e.s=8105)}),_N_E=e.O()}]);