webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/style.scss */ "./styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "/Users/leonelaguzman/Documents/Clients/once/oncecinema/pages/contact.js";




var API_PATH = '/api/contact/contact.php';

var Contact =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Contact, _React$Component);

  function Contact(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Contact);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Contact).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleFormSubmit", function (e) {
      e.preventDefault();
      axios__WEBPACK_IMPORTED_MODULE_10___default()({
        method: 'post',
        url: "".concat(API_PATH),
        headers: {
          'content-type': 'application/json'
        },
        data: _this.state
      }).then(function (result) {
        _this.setState({
          mailSent: result.data.sent
        });
      }).catch(function (error) {
        return _this.setState({
          error: error.message
        });
      });
    });

    _this.state = {
      name: '',
      fiance: '',
      email: '',
      date: '',
      location: '',
      phone: '',
      message: '',
      mailSent: false,
      error: null
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Contact, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "subpage",
        id: "contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_head__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: "ONCE | Contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "form__headline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "CONTACT US AT ONCE"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        action: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Your Name *"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        id: "name",
        name: "name",
        value: this.state.name,
        required: true,
        onChange: function onChange(e) {
          return _this2.setState({
            name: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "Fiance's Name *"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        id: "fiance",
        name: "fiance",
        value: this.state.fiance,
        required: true,
        onChange: function onChange(e) {
          return _this2.setState({
            fiance: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Your Email *"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "email",
        id: "email",
        name: "email",
        value: this.state.email,
        required: true,
        onChange: function onChange(e) {
          return _this2.setState({
            email: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "Wedding / Event Date *"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        id: "date",
        name: "date",
        value: this.state.date,
        required: true,
        onChange: function onChange(e) {
          return _this2.setState({
            date: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Venue and City, State *"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        id: "location",
        name: "location",
        value: this.state.location,
        required: true,
        onChange: function onChange(e) {
          return _this2.setState({
            location: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Phone Number"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "tel",
        id: "phone",
        name: "phone",
        value: this.state.phone,
        onChange: function onChange(e) {
          return _this2.setState({
            phone: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Tell us about yourself!"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("textarea", {
        type: "text",
        rows: "2",
        id: "message",
        name: "message",
        value: this.state.message,
        onChange: function onChange(e) {
          return _this2.setState({
            message: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "submit",
        value: "Send",
        onClick: function onClick(e) {
          return _this2.handleFormSubmit(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), this.state.mailSent && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Thank you for contacting us at ONCE!"))));
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

})
//# sourceMappingURL=contact.js.6915d74c0ae1be0133ed.hot-update.js.map