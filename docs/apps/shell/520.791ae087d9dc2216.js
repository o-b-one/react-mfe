(self["webpackChunkshell"] = self["webpackChunkshell"] || []).push([[520,455],{

/***/ 6572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "AuthContext": () => (/* reexport */ auth_context),
  "AuthProvider": () => (/* reexport */ AuthProvider),
  "Authorization": () => (/* reexport */ Authorization)
});

// EXTERNAL MODULE: consume shared module (default) react@=18.2.0 (singleton) (fallback: ../../node_modules/react/index.js)
var index_js_ = __webpack_require__(7664);
;// CONCATENATED MODULE: ../../libs/auth/src/lib/context/auth-context.ts

const AuthContext = /*#__PURE__*/(0,index_js_.createContext)({});
/* harmony default export */ const auth_context = (AuthContext);
// EXTERNAL MODULE: ../../node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__(5735);
// EXTERNAL MODULE: ../../node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(6886);
// EXTERNAL MODULE: ../../node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(3439);
// EXTERNAL MODULE: ../../node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(7950);
// EXTERNAL MODULE: ../../node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(5940);
;// CONCATENATED MODULE: ../../libs/auth/src/lib/apis/authorization.ts



class Authorization {
  constructor() {
    this.BASE_URL = 'https://mfe-testing.free.beeceptor.com';
    this.abortControl = null;
    this.onLoginCB = void 0;
    this.onLogoutCB = void 0;
  }
  static getInstance() {
    if (!this.instance) {
      this.instance = new Authorization();
    }
    return this.instance;
  }
  async login(email, password) {
    this.abortLogin();
    this.abortControl = new AbortController();
    const response = await fetch(`${this.BASE_URL}/login`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      }),
      signal: this.abortControl.signal
    }).then(res => res.json()).then(_ => {
      return {
        email,
        name: email.split('@')[0].replace('.', ' '),
        avatar: 'https://avatars.githubusercontent.com/u/41166148?v=4'
      };
    });
    this.storeInLocalStorage(response);
    if (this.onLoginCB) {
      this.onLoginCB(response);
    }
    return response;
  }
  async logout() {
    localStorage.removeItem('user');
    if (this.onLogoutCB) {
      this.onLogoutCB();
    }
  }
  async isAuthorized() {
    return !!localStorage.getItem('user');
  }
  async getUser() {
    if (await this.isAuthorized()) {
      return JSON.parse(localStorage.getItem('user'));
    } else {
      return null;
    }
  }
  onLogin(cb) {
    this.onLoginCB = cb;
  }
  onLogout(cb) {
    this.onLogoutCB = cb;
  }
  storeInLocalStorage(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  abortLogin() {
    var _this$abortControl;
    (_this$abortControl = this.abortControl) == null ? void 0 : _this$abortControl.abort();
  }
}
Authorization.instance = void 0;
// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2322);
;// CONCATENATED MODULE: ../../libs/auth/src/lib/auth.tsx






function AuthProvider(props) {
  const auth = Authorization.getInstance();
  const [user, setUser] = (0,index_js_.useState)(null);
  auth.onLogin(setUser);
  auth.onLogout(() => setUser(null));
  (0,index_js_.useEffect)(() => {
    auth.getUser().then(setUser);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(auth_context.Provider, {
    value: {
      isLoggedIn: !!user,
      user: user,
      login: auth.login.bind(auth),
      logout: auth.logout.bind(auth)
    },
    children: props.children
  });
}
;// CONCATENATED MODULE: ../../libs/auth/src/index.ts





/***/ }),

/***/ 8151:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(140);
var enumBugKeys = __webpack_require__(3837);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


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