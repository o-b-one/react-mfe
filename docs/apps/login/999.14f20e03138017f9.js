(self["webpackChunklogin"] = self["webpackChunklogin"] || []).push([[999],{

/***/ 3999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ public_api)
});

// EXTERNAL MODULE: consume shared module (default) react@=18.2.0 (singleton) (fallback: ../../node_modules/react/index.js)
var index_js_ = __webpack_require__(7664);
;// CONCATENATED MODULE: ./src/app/login-form/login-form.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const login_form_module = ({});
// EXTERNAL MODULE: ../../node_modules/@mui/material/esm/FormGroup/FormGroup.js + 1 modules
var FormGroup = __webpack_require__(2869);
// EXTERNAL MODULE: ../../node_modules/@mui/material/esm/FormControl/FormControl.js + 3 modules
var FormControl = __webpack_require__(7265);
// EXTERNAL MODULE: ../../node_modules/@mui/material/esm/TextField/TextField.js + 73 modules
var TextField = __webpack_require__(3689);
// EXTERNAL MODULE: ../../node_modules/@mui/material/esm/Button/Button.js + 13 modules
var Button = __webpack_require__(8709);
;// CONCATENATED MODULE: ./src/app/utilities/email-utilities.ts
function isValidEmail(email) {
  return (email == null ? void 0 : email.includes('@')) && email.split('@')[1].includes('.');
}
;// CONCATENATED MODULE: ./src/app/utilities/password-utilities.ts
function isValidPassword(password) {
  return password.length > 5;
}
// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2322);
;// CONCATENATED MODULE: ./src/app/login-form/login-form.tsx







/* eslint-disable-next-line */



function LoginForm(props) {
  const emailRef = (0,index_js_.useRef)();
  const passwordRef = (0,index_js_.useRef)();
  const [submitted, setSubmitted] = (0,index_js_.useState)(false);
  const validateCredentials = () => {
    if (!emailRef.current || !passwordRef.current) {
      return false;
    }
    if (!isValidEmail(emailRef.current.value)) {
      emailRef.current.focus();
      return false;
    } else if (!isValidPassword(passwordRef.current.value)) {
      passwordRef.current.focus();
      return false;
    }
    return true;
  };
  const submit = async () => {
    if (validateCredentials()) {
      setSubmitted(true);
      try {
        await props.loginHandler.login(emailRef.current.value, passwordRef.current.value);
      } catch (e) {
        if (e instanceof DOMException) {
          return;
        }
        console.log(e);
      } finally {
        setSubmitted(false);
      }
    }
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
      children: "This form will accept any credentials \uD83D\uDE09"
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(FormGroup/* default */.Z, {
      className: login_form_module.container,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(FormControl/* default */.Z, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* default */.Z, {
          name: "email",
          type: "email",
          label: "E-mail",
          placeholder: "Enter an email",
          inputRef: emailRef
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(FormControl/* default */.Z, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* default */.Z, {
          name: "password",
          type: "password",
          label: "Password",
          placeholder: "Enter a 6-digit password",
          inputRef: passwordRef
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.Z, {
        variant: "contained",
        onClick: submit,
        children: !submitted ? 'Login' : 'Inprogress...'
      })]
    })]
  });
}
;
/* harmony default export */ const login_form = (LoginForm);
// EXTERNAL MODULE: consume shared module (default) @mfe/auth@* (strict) (fallback: ../../libs/auth/src/index.ts)
var index_ts_ = __webpack_require__(7705);
;// CONCATENATED MODULE: ./src/app/app.tsx
// eslint-disable-next-line @typescript-eslint/no-unused-vars





function LoginApp() {
  const authHandler = (0,index_js_.useContext)(index_ts_.AuthContext);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(login_form, {
      loginHandler: authHandler
    })
  });
}
/* harmony default export */ const app = (LoginApp);
;// CONCATENATED MODULE: ./public-api.ts

/* harmony default export */ const public_api = (app);

/***/ })

}])