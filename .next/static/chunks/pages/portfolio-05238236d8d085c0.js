(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[371],{1641:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio",function(){return s(9546)}])},4968:function(e,a,s){"use strict";s.r(a);var l=s(5893),n=s(7294);let i=e=>{let[a,s]=(0,n.useState)(null),i=e=>{a===e?s(null):s(e)};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("section",{className:"faq-section",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsxs)("div",{className:"col-md-12",children:[(0,l.jsx)("h2",{children:"Frequently Asked Questions (FAQs)"}),(0,l.jsx)("div",{className:"accordion",id:"accordionExample",children:e.faqData&&e.faqData.length>0&&e.faqData.map((e,s)=>(0,l.jsxs)("div",{className:"accordion-item",children:[(0,l.jsx)("h2",{className:"accordion-header",id:"headingOne"+s,children:(0,l.jsxs)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapseOne"+s,"data-bs-target":"#collapseOne"+s,"aria-controls":"collapseOne"+s,onClick:()=>i(s),children:[e.status,"Q.",s+1," ",e.title]})}),(0,l.jsx)("div",{id:"collapseOne"+s,className:"","aria-labelledby":"headingOne"+s,"data-bs-parent":"#accordionExample",children:(0,l.jsx)("div",{className:a===s?"accordion-body":"",children:a===s&&(0,l.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})})})]},s))})]})})})})})};a.default=i},5301:function(e,a,s){"use strict";s.r(a);var l=s(5893);s(7294);var n=s(1698);s(4968);let i=()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.default,{}),(0,l.jsx)("footer",{children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-md-3",children:(0,l.jsx)("div",{className:"footer-item",children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"",target:"_blank",children:"info@socialmediacreativeagency.com"})}),(0,l.jsxs)("li",{children:["Phone: ",(0,l.jsx)("a",{href:"tel:+91-9599389388",children:"+91-9599389388"})]})]})})}),(0,l.jsx)("div",{className:"col-md-3 ms-auto",children:(0,l.jsx)("div",{className:"footer-item",children:(0,l.jsxs)("ul",{className:"social-icon",children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"https://www.instagram.com/socialmediacreativeagency/",target:"_blank",rel:"nofollow",children:(0,l.jsx)("i",{className:"fab fa-instagram"})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"https://www.facebook.com/socialmediacreativeagency",target:"_blank",rel:"nofollow",children:(0,l.jsx)("i",{className:"fab fa-facebook-square"})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"",target:"_blank",rel:"nofollow",children:(0,l.jsx)("i",{className:"fab fa-twitter"})})})]})})}),(0,l.jsx)("div",{className:"col-md-12",children:(0,l.jsx)("div",{className:"copyright",children:(0,l.jsxs)("p",{children:["Copyright \xa9 2023 ",(0,l.jsx)("a",{href:"https://www.socialmediacreativeagency.com",children:"Social Media Creative Agency"})," All Rights Reserved."]})})})]})})})]});a.default=i},1698:function(e,a,s){"use strict";s.r(a);var l=s(5893),n=s(7294),i=s(6154);let t=()=>{let[e,a]=(0,n.useState)(!1),[s,t]=(0,n.useState)(""),[c,r]=(0,n.useState)({name:"",email:"",message:""}),[o,d]=(0,n.useState)({}),m=e=>{let{name:a,value:s}=e.target;r(e=>({...e,[a]:s}))},h=()=>{a(!1)},x=e=>{e.preventDefault(),d({padding:"1rem 0rem",display:"block",color:"red"}),c.name?c.email?c.message?i.Z.post("https://smca.ezrankings.in/react-backend/contacts.php",c,{headers:{"Content-Type":"multipart/form-data"}}).then(e=>{let s=e.data;s&&(r({name:"",email:"",message:""}),t("Submit Successfully."),a(!0),d({padding:"1rem 0rem",display:"block",color:"#46c737"}))}).catch(e=>{}):(t("Message can not be blank."),a(!0)):(t("Email can not be blank."),a(!0)):(t("Name can not be blank."),a(!0))};return(0,l.jsx)("section",{className:"form-section",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)("h2",{children:"Great ideas always start as conversations."}),(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-md-12",children:(0,l.jsx)("form",{onSubmit:x,children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-md-12",children:e?(0,l.jsxs)("span",{style:o,children:[s,"  ",(0,l.jsx)("span",{onClick:h,children:(0,l.jsx)("i",{class:"fa fa-times","aria-hidden":"true"})})]}):""}),(0,l.jsx)("div",{className:"col-md-4",children:(0,l.jsx)("div",{className:"form-group",children:(0,l.jsx)("input",{type:"text",className:"form-control",onChange:m,value:c.name,name:"name",placeholder:"Name"})})}),(0,l.jsx)("div",{className:"col-md-4",children:(0,l.jsx)("div",{className:"form-group",children:(0,l.jsx)("input",{type:"text",className:"form-control",onChange:m,value:c.email,name:"email",placeholder:"Email"})})}),(0,l.jsx)("div",{className:"col-md-4",children:(0,l.jsx)("div",{className:"form-group",children:(0,l.jsx)("input",{type:"text",className:"form-control",onChange:m,value:c.message,name:"message",placeholder:"Message"})})}),(0,l.jsx)("div",{className:"col-md-12",children:(0,l.jsx)("div",{className:"form-group mt-4",children:(0,l.jsx)("button",{className:"btn-border2",type:"submit",children:"Send"})})})]})})})})]})})};a.default=t},5389:function(e,a,s){"use strict";s.r(a);var l=s(5893),n=s(1664),i=s.n(n);s(5675);var t=s(7294);let c=()=>{let[e,a]=(0,t.useState)({home:"nav-link active",about:"nav-link",price:"nav-link",portfolio:"nav-link",contact:"nav-link talk-let"});return(0,l.jsx)("header",{children:(0,l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light ",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)(i(),{className:"navbar-brand",href:"/",children:(0,l.jsx)("img",{src:"https://smca.ezrankings.in/react-backend/uploads/logo.png",className:"header-logo",alt:""})}),(0,l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,l.jsx)("span",{className:"navbar-toggler-icon"})}),(0,l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:(0,l.jsxs)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:[(0,l.jsx)("li",{className:"nav-item",onClick:()=>a({home:"nav-link active",about:"nav-link",price:"nav-link",portfolio:"nav-link",contact:"nav-link talk-let"}),children:(0,l.jsx)(i(),{href:"/",className:e.home,"aria-current":"page",children:"Home"})}),(0,l.jsx)("li",{className:"nav-item",onClick:()=>a({home:"nav-link",about:"nav-link active",price:"nav-link",portfolio:"nav-link",contact:"nav-link talk-let"}),children:(0,l.jsx)(i(),{href:"/about",className:e.about,children:"About"})}),(0,l.jsx)("li",{className:"nav-item",onClick:()=>a({home:"nav-link",about:"nav-link ",price:"nav-link",portfolio:"nav-link active",contact:"nav-link talk-let"}),children:(0,l.jsx)(i(),{href:"/portfolio",className:e.portfolio,children:"Portfolio"})}),(0,l.jsx)("li",{className:"nav-item",onClick:()=>a({home:"nav-link",about:"nav-link",price:"nav-link active",portfolio:"nav-link ",contact:"nav-link talk-let"}),children:(0,l.jsx)(i(),{href:"/pricing",className:e.price,children:"Pricing"})}),(0,l.jsx)("li",{className:"nav-item",onClick:()=>a({home:"nav-link",about:"nav-link",price:"nav-link",portfolio:"nav-link",contact:"nav-link talk-let active"}),children:(0,l.jsx)(i(),{href:"/contact",className:e.contact,children:"Lets Talk"})})]})})]})})})};a.default=c},3087:function(e,a,s){"use strict";s.r(a);var l=s(5893),n=s(7294),i=s(1971),t=s(6154);s(5675);let c=()=>{let[e,a]=(0,n.useState)(!1),[s,c]=(0,n.useState)([]),[r,o]=(0,n.useState)(1),[d,m]=(0,n.useState)([]),h=()=>{o(r+1)},x=async e=>{t.Z.get("https://smca.ezrankings.in/react-backend/portData.php?page=".concat(e)).then(e=>{let a=e.data.gallery.map(e=>({id:e.id,alt:e.alt,image:e.image})),s=e.data.blog.map(e=>({id:e.id,alt:e.alt,image:e.image}));if(c(a),d&&d.length>0){for(let e=0;e<s.length;e++)d.push(s[e]);m(d)}else m(s)}).catch(e=>{})};return(0,n.useEffect)(()=>{x(r)},[r]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("section",{className:"banner-section portfoliopage",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-md-12",children:(0,l.jsx)("div",{className:"banner-caption",children:(0,l.jsx)("h1",{children:(0,l.jsxs)("span",{children:["PORTF",(0,l.jsx)("img",{src:"https://smca.ezrankings.in/react-backend/uploads/oshap.png",className:"o-shap",alt:""}),"Lio"]})})})})})})}),(0,l.jsx)("section",{className:"porfolio-slider",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsxs)("div",{className:"col-md-9 mx-auto",children:[(0,l.jsx)("div",{className:"slider-porfolio",children:(0,l.jsx)(i.default,{imgData:s})}),(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-md-12",children:(0,l.jsx)("div",{className:"content-wrap",children:(0,l.jsxs)("p",{children:["We believe that every business is ",(0,l.jsx)("span",{children:"unique and deserves excellent and customized social media creatives,"})," thats why we take the time to develop an enduring connection with our clients."]})})})})]})})})}),(0,l.jsx)("section",{className:"portfolio-sec",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row",children:[d.map((e,a)=>(0,l.jsx)("div",{className:"col-md-4",children:(0,l.jsx)("div",{className:"portfolio-card",children:(0,l.jsxs)("figure",{children:[" ",(0,l.jsxs)("a",{href:e.image,"data-fancybox":"gallery","data-caption":e.alt,children:[(0,l.jsx)("img",{src:e.image,alt:e.alt}),(0,l.jsx)("span",{className:"zoom-img",children:(0,l.jsx)("i",{className:"fas fa-search-plus"})})]})]})})},a)),(0,l.jsx)("div",{className:"col-md-12",children:(0,l.jsx)("div",{className:"load-more-btn",children:(0,l.jsx)("a",{onClick:h,children:"Load More"})})})]})})})]})};a.default=c},1971:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return i}});var l=s(5893);s(7294);var n=s(6066);function i(e){return(0,l.jsx)(n.Z,{autoplay:!1,autoplaySpeed:1e3,slidesToShow:1,dots:!0,arrows:!0,responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}],className:"slick-slider2",children:e.imgData&&e.imgData.length>0&&e.imgData.map((e,a)=>(0,l.jsx)("div",{className:"item",children:(0,l.jsx)("figure",{children:(0,l.jsx)("img",{src:e.image,alt:e.alt})})},a))})}s(4640),s(9678)},9546:function(e,a,s){"use strict";s.r(a);var l=s(5893),n=s(9008),i=s.n(n),t=s(3087),c=s(5389),r=s(5301);let o=()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(i(),{children:[(0,l.jsx)("meta",{name:"robots",content:"index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"}),(0,l.jsx)("title",{children:"Our Portfolio - Social Media Creative Agency"}),(0,l.jsx)("meta",{name:"description",content:"Find the list of Social Media projects which has been done by Social Media Creative Agency with good results."}),(0,l.jsx)("link",{rel:"canonical",href:"https://www.socialmediacreativeagency.com/portfolio/"}),(0,l.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,l.jsx)("meta",{property:"og:type",content:"article"}),(0,l.jsx)("meta",{property:"og:title",content:"Our Portfolio - Social Media Creative Agency"}),(0,l.jsx)("meta",{property:"og:description",content:"Find the list of Social Media projects which has been done by Social Media Creative Agency with good results."}),(0,l.jsx)("meta",{property:"og:url",content:"https://www.socialmediacreativeagency.com/portfolio/"}),(0,l.jsx)("meta",{property:"og:site_name",content:"Creative Agency"}),(0,l.jsx)("meta",{property:"article:modified_time",content:"2023-02-27T05:41:03+00:00"}),(0,l.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]}),(0,l.jsx)(c.default,{}),(0,l.jsx)(t.default,{}),(0,l.jsx)(r.default,{})]});a.default=o},9008:function(e,a,s){e.exports=s(2636)}},function(e){e.O(0,[154,675,664,278,774,888,179],function(){return e(e.s=1641)}),_N_E=e.O()}]);