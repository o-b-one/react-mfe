(self["webpackChunkshell"] = self["webpackChunkshell"] || []).push([[554],{

/***/ 554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: consume shared module (default) @mfe/auth@* (strict) (fallback: ../../libs/auth/src/index.ts)
var index_ts_ = __webpack_require__(7705);
// EXTERNAL MODULE: consume shared module (default) react@=18.2.0 (singleton) (fallback: ../../node_modules/react/index.js)
var index_js_ = __webpack_require__(7664);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ../../node_modules/react-dom/client.js
var client = __webpack_require__(7029);
// EXTERNAL MODULE: consume shared module (default) react-router-dom@=6.4.1 (singleton) (fallback: ../../node_modules/react-router-dom/dist/index.js)
var dist_index_js_ = __webpack_require__(5788);
;// CONCATENATED MODULE: ./src/app/app.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const app_module = ({"page-area":"app_page-area__3gTMv"});
// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2322);
;// CONCATENATED MODULE: ./src/app/app.tsx
// eslint-disable-next-line @typescript-eslint/no-unused-vars








const CustomizeNavbar = /*#__PURE__*/index_js_default().lazy(() => __webpack_require__.e(/* import() */ 257).then(__webpack_require__.t.bind(__webpack_require__, 9257, 23)));
const Login = /*#__PURE__*/index_js_default().lazy(() => __webpack_require__.e(/* import() */ 29).then(__webpack_require__.t.bind(__webpack_require__, 3029, 23)));
const Feed = /*#__PURE__*/index_js_default().lazy(() => __webpack_require__.e(/* import() */ 514).then(__webpack_require__.t.bind(__webpack_require__, 9514, 23)));
function App() {
  const auth = (0,index_js_.useContext)(index_ts_.AuthContext);
  const tabs = []; //auth.isLoggedIn ? [{label: 'Feed', path: '/'}] : [];
  const loggedOutRoutes = [/*#__PURE__*/(0,jsx_runtime.jsx)(dist_index_js_.Route, {
    path: "/",
    element: /*#__PURE__*/(0,jsx_runtime.jsx)(Login, {})
  }, 'login')];
  const loggedInRoutes = [/*#__PURE__*/(0,jsx_runtime.jsx)(dist_index_js_.Route, {
    path: "/",
    element: /*#__PURE__*/(0,jsx_runtime.jsx)(Feed, {})
  }, 'feed')];
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(CustomizeNavbar, {
      tabs: tabs,
      fixed: true
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("section", {
      className: app_module["page-area"],
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(index_js_.Suspense, {
        fallback: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          children: "Loading..."
        }),
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(dist_index_js_.Routes, {
          children: [auth.isLoggedIn ? loggedInRoutes : loggedOutRoutes, /*#__PURE__*/(0,jsx_runtime.jsx)(dist_index_js_.Route, {
            path: "/*",
            element: /*#__PURE__*/(0,jsx_runtime.jsx)(dist_index_js_.Navigate, {
              to: "/",
              replace: true
            })
          })]
        })
      })
    })]
  });
}
/* harmony default export */ const app = (App);
;// CONCATENATED MODULE: ./src/bootstrap.tsx






const root = client/* createRoot */.s(document.getElementById('root'));
root.render( /*#__PURE__*/(0,jsx_runtime.jsx)(index_js_.StrictMode, {
  children: /*#__PURE__*/(0,jsx_runtime.jsx)(dist_index_js_.BrowserRouter, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(index_ts_.AuthProvider, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(app, {})
    })
  })
}));

/***/ }),

/***/ 7029:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


var m = __webpack_require__(3321);
if (true) {
  exports.s = m.createRoot;
  __webpack_unused_export__ = m.hydrateRoot;
} else { var i; }


/***/ }),

/***/ 1837:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(7664),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 2322:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(1837);
} else {}


/***/ })

}])