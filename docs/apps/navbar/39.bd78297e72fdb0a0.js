(self["webpackChunknavbar"] = self["webpackChunknavbar"] || []).push([[39],{

/***/ 39:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ public_api_0)
});

// EXTERNAL MODULE: ../../node_modules/@mui/material/esm/AppBar/AppBar.js + 3 modules
var AppBar = __webpack_require__(2666);
// EXTERNAL MODULE: ../../node_modules/@mui/material/esm/Container/Container.js + 2 modules
var Container = __webpack_require__(6042);
// EXTERNAL MODULE: ../../node_modules/@mui/material/esm/Toolbar/Toolbar.js + 1 modules
var Toolbar = __webpack_require__(6825);
// EXTERNAL MODULE: ../../node_modules/@mui/material/esm/Box/Box.js + 1 modules
var Box = __webpack_require__(9452);
// EXTERNAL MODULE: ../../node_modules/@mui/material/esm/Button/Button.js + 2 modules
var Button = __webpack_require__(2711);
// EXTERNAL MODULE: ../../node_modules/@mui/material/esm/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(4843);
// EXTERNAL MODULE: ../../node_modules/@mui/material/esm/Tooltip/Tooltip.js + 77 modules
var Tooltip = __webpack_require__(7435);
// EXTERNAL MODULE: ../../node_modules/@mui/material/esm/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(3023);
// EXTERNAL MODULE: ../../node_modules/@mui/material/esm/Avatar/Avatar.js + 5 modules
var Avatar = __webpack_require__(668);
;// CONCATENATED MODULE: ./src/app/customize-navbar/customize-navbar.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const customize_navbar_module = ({"link":"customize-navbar_link__10FUz"});
// EXTERNAL MODULE: consume shared module (default) react-router-dom@=6.4.1 (singleton) (fallback: ../../node_modules/react-router-dom/dist/index.js)
var index_js_ = __webpack_require__(5788);
// EXTERNAL MODULE: consume shared module (default) react@=18.2.0 (singleton) (fallback: ../../node_modules/react/index.js)
var react_index_js_ = __webpack_require__(7664);
// EXTERNAL MODULE: consume shared module (default) @mfe/auth@* (strict) (fallback: ../../libs/auth/src/index.ts)
var index_ts_ = __webpack_require__(7705);
// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2322);
;// CONCATENATED MODULE: ./src/app/customize-navbar/customize-navbar.tsx







function CustomizeNavbar(props) {
  var _auth$user, _auth$user2;
  const auth = (0,react_index_js_.useContext)(index_ts_.AuthContext);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(AppBar/* default */.Z, {
    position: props.fixed ? 'fixed' : 'static',
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
      maxWidth: "xl",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Toolbar/* default */.Z, {
        disableGutters: true,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Box/* default */.Z, {
          sx: {
            flexGrow: 0,
            display: 'flex',
            justifyContent: 'flex-end'
          },
          children: props.tabs.map(tab => /*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.Z, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(index_js_.Link, {
              to: tab.path,
              className: customize_navbar_module.link,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
                textAlign: "center",
                children: tab.label
              })
            })
          }, tab.label))
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Container/* default */.Z, {
          sx: {
            flexGrow: 0
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.Z, {
            textAlign: "center",
            children: "Quotes"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Box/* default */.Z, {
          sx: {
            flexGrow: 0
          },
          children: auth.isLoggedIn && /*#__PURE__*/(0,jsx_runtime.jsx)(Tooltip/* default */.Z, {
            title: "Open settings",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(IconButton/* default */.Z, {
              sx: {
                p: 0
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                alt: (_auth$user = auth.user) == null ? void 0 : _auth$user.name,
                src: (_auth$user2 = auth.user) == null ? void 0 : _auth$user2.avatar
              })
            })
          })
        })]
      })
    })
  });
}
;
/* harmony default export */ const customize_navbar = (CustomizeNavbar);
;// CONCATENATED MODULE: ./src/public-api.ts

/* harmony default export */ const public_api = (customize_navbar);
;// CONCATENATED MODULE: ./public-api.ts

/* harmony default export */ const public_api_0 = (public_api);

/***/ })

}])