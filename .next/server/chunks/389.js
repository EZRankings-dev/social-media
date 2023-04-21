"use strict";
exports.id = 389;
exports.ids = [389];
exports.modules = {

/***/ 5389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




const Navbar = ()=>{
    const [classs, setActiveClass] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
        home: "nav-link active",
        about: "nav-link",
        price: "nav-link",
        portfolio: "nav-link",
        contact: "nav-link talk-let"
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
            className: "navbar navbar-expand-lg navbar-light ",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        className: "navbar-brand",
                        href: "/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "https://smca.ezrankings.in/react-backend/uploads/logo.png",
                            className: "header-logo",
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "navbar-toggler",
                        type: "button",
                        "data-bs-toggle": "collapse",
                        "data-bs-target": "#navbarSupportedContent",
                        "aria-controls": "navbarSupportedContent",
                        "aria-expanded": "false",
                        "aria-label": "Toggle navigation",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "navbar-toggler-icon"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "collapse navbar-collapse",
                        id: "navbarSupportedContent",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            className: "navbar-nav ms-auto mb-2 mb-lg-0",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "nav-item",
                                    onClick: ()=>setActiveClass({
                                            home: "nav-link active",
                                            about: "nav-link",
                                            price: "nav-link",
                                            portfolio: "nav-link",
                                            contact: "nav-link talk-let"
                                        }),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "/",
                                        className: classs.home,
                                        "aria-current": "page",
                                        children: "Home"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "nav-item",
                                    onClick: ()=>setActiveClass({
                                            home: "nav-link",
                                            about: "nav-link active",
                                            price: "nav-link",
                                            portfolio: "nav-link",
                                            contact: "nav-link talk-let"
                                        }),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "/about",
                                        className: classs.about,
                                        children: "About"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "nav-item",
                                    onClick: ()=>setActiveClass({
                                            home: "nav-link",
                                            about: "nav-link ",
                                            price: "nav-link",
                                            portfolio: "nav-link active",
                                            contact: "nav-link talk-let"
                                        }),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "/portfolio",
                                        className: classs.portfolio,
                                        children: "Portfolio"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "nav-item",
                                    onClick: ()=>setActiveClass({
                                            home: "nav-link",
                                            about: "nav-link",
                                            price: "nav-link active",
                                            portfolio: "nav-link ",
                                            contact: "nav-link talk-let"
                                        }),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "/pricing",
                                        className: classs.price,
                                        children: "Pricing"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "nav-item",
                                    onClick: ()=>setActiveClass({
                                            home: "nav-link",
                                            about: "nav-link",
                                            price: "nav-link",
                                            portfolio: "nav-link",
                                            contact: "nav-link talk-let active"
                                        }),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "/contact",
                                        className: classs.contact,
                                        children: "Lets Talk"
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);


/***/ })

};
;