webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/style.scss */ "./styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "/Users/leonelaguzman/Documents/Clients/once/oncecinema/pages/index.js";

 // import Cards from '../components/cards'




var Home =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Home, _React$Component);

  function Home() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Home)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      playingVideos: [],
      plyrs: [],
      isModalOpen: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "video", react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "modalVideo", react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "inlineVideoOptions", {
      controls: ['play', 'current-time', 'volume', 'fullscreen'],
      muted: true
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "modalVideoOptions", {
      controls: ['play', 'current-time', 'volume', 'fullscreen'],
      muted: false,
      autoplay: true
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleCloseModal", function () {
      _this.setState({
        isModalOpen: false
      });

      if (_this.video.current.hasAttribute('autoplay')) {
        _this.video.current.play();
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onOverlayClick", function (hasModal, isAutoplay, e) {
      var video = e.currentTarget.parentNode.querySelector('video');

      if (hasModal) {
        _this.setState({
          isModalOpen: true
        });

        if (isAutoplay && video) {
          video.pause();
        }
      } else if (!video.hasAttribute('autoplay')) {
        if (video.paused) {
          setTimeout(function () {
            video.play();

            var playingVideos = _this.state.playingVideos.slice();

            playingVideos[video.dataset.index] = !video.paused;

            _this.setState({
              playingVideos: playingVideos
            }, function () {
              console.log(_this.state.playingVideos);
            });
          }, 0);
        } else {
          video.pause();
        }
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onVideoEnd", function (e) {
      var video = e.currentTarget;

      var playingVideos = _this.state.playingVideos.slice();

      playingVideos[video.dataset.index] = false;

      _this.setState({
        playingVideos: playingVideos
      });

      if (video.hasAttribute('autoplay')) {
        video.play();
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "createPlyrForRef", function (ref) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var key = ref.getAttribute('class');
      var plyrs = _this.state.plyrs;

      if (!plyrs[key]) {
        var plyr = new Plyr(ref, options);
        plyrs[key] = plyr;

        _this.setState({
          plyrs: plyrs
        });
      }

      console.log('plyrs', plyrs);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_head__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: "ONCE Cinema",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jumbotron jumbotron-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "grid-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "brand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/logo.svg",
        alt: "brand logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "cta",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "Work with us"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "banner-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        className: "banner-title display-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "YOUR", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }), "MOMENT"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        className: "banner-subhead",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "ONCE Captured"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "lead",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "Wedding & event cinematography with a story to tell.")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "work-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "work-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, "WORK"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "work-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "Creating amazing work that does blah blah blah.")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "services-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "services-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "SERVICES"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "services-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "Creating amazing work that does blah blah blah.")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row highlight-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "video-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "video-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "video-overlay",
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
        width: "52px",
        height: "52px",
        viewBox: "-5 -5 52 52",
        className: "icon-play",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        id: "Group-5",
        transform: "matrix(1,0,0,1,2,2)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
        id: "Triangle-2",
        transform: "matrix(-3.82857e-16,1,-1,-3.82857e-16,39.1429,-1.85714)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
        d: "M20.5,14L27,23.286L14,23.286L20.5,14Z",
        fill: "rgb(239,58,80)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("circle", {
        id: "Oval",
        cx: "19",
        cy: "19",
        r: "19",
        fill: "none",
        stroke: "rgb(239,58,80)",
        strokeWidth: "3px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        className: "video-headline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, "Watch Reel")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "plyr__video-embed plyr--playing",
        id: "player",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("iframe", {
        src: "https://player.vimeo.com/video/326661659?title=0&byline=0&portrait=0&background=1",
        allowFullScreen: true,
        allowtransparency: "true",
        allow: "autoplay",
        preload: "auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row footer-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, "ONCE CINEMA CO.")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, "Contact Us")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component); // const Home = () => (
//   <div>
//     <Head title="ONCE Cinema" />
//     <div className="jumbotron jumbotron-fluid">
//       <div className="grid-container">
//         <div className="brand">
//           <img className="img-fluid" src="/static/logo.svg" alt="brand logo"/>
//         </div>
//         <div className="cta">Work with us</div>
//         <div className="banner-block">
//           <h1 className="banner-title display-4">YOUR<br/>MOMENT</h1>
//           <h1 className="banner-subhead">ONCE Captured</h1>
//           <p className="lead">Wedding &amp; event cinematography with a story to tell.</p>
//         </div>
//         <div className="work-block">
//           <h2 className="work-title">WORK</h2>
//           <p className="work-content">Creating amazing work that does blah blah blah.</p>
//         </div>
//         <div className="services-block">
//           <h2 className="services-title">SERVICES</h2>
//           <p className="services-content">Creating amazing work that does blah blah blah.</p>
//         </div>
//       </div>
//     </div>
//     <div className="container-fluid">
//       {/* <div className="row description-block">
//         <div className="content">
//           <h2 className="content__headline">ONCE IN A LIFETIME</h2>
//           <p>Whether it's a few weeks, a month, or a year away, you can rest assured you've taken care of the most essential steps
//             in planning your wedding day. Memories are fleeting, but at ONCE, we aim to capture those once in a lifetime moments
//             for generations to come. Given our love of cinema, you can expect to get the star treatment from beginning to end
//             with a silver-screen quality production.
//           </p>
//           <p>Reservations fill up fast. Contact us for availability today.</p>
//         </div>
//       </div> */}
//       {/* <div className="row pricing-block">
//         <Cards />
//       </div> */}
//       <div className="row highlight-block">
//         <div className="video-container">
//           <div className="video-item">
//             <div className="video-overlay">
//               <svg width="52px" height="52px" viewBox="-5 -5 52 52" className="icon-play"><g id="Group-5" transform="matrix(1,0,0,1,2,2)"><g id="Triangle-2" transform="matrix(-3.82857e-16,1,-1,-3.82857e-16,39.1429,-1.85714)"><path d="M20.5,14L27,23.286L14,23.286L20.5,14Z" fill="rgb(239,58,80)"></path></g><circle id="Oval" cx="19" cy="19" r="19" fill="none" stroke="rgb(239,58,80)" strokeWidth="3px"></circle></g></svg>
//               <h3 className="video-headline">Watch Reel</h3>
//             </div>
//             {/* <div className="plyr plyr--full-ui plyr--video plyr--html5 plyr--hide-controls plyr--pip-supported plyr--fullscreen-enabled plyr--playing plyr__poster-enabled">
//               <div className="plyr__controls"></div>
//               <div className="plyr__video-wrapper">
//                 <video poster="https://unionco.imgix.net/uploads/Digital-Marketing-Agency-Charlotte-Reel.jpg?w=1800&amp;fm=jpg&amp;lossless=1" preload="auto" data-index="0" autoPlay="" loop="" className="video">
//                 <source src="https://player.vimeo.com/video/326661659?title=0&byline=0&portrait=0&background=1" type="video/mp4"/>
//                 </video>
//                 <link rel="preload" as="video" href="https://player.vimeo.com/video/326661659?background=1"></link>
//               </div>
//            </div> */}
//            <div class="plyr__video-embed" id="player">
//             <iframe
//                 src="https://player.vimeo.com/video/326661659?title=0&byline=0&portrait=0&background=1"
//                 allowfullscreen
//                 allowtransparency
//                 allow="autoplay"
//                 preload="auto"
//             ></iframe>
//             </div>
//             {/* <div className="embed-responsive embed-responsive-16by9">
//               <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/326661659?background=1" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
//             </div> */}
//           </div>
//         </div>
//       </div>
//       {/* <div className="row contact-block">
//         <div className="content">
//           <h2 className="content__headline">Ready to get started?</h2>
//           <p className="content__text">Button here or something.</p>
//         </div>
//       </div> */}
//     <div className="row footer-block">
//         <div className="col-8">
//           <h5>ONCE CINEMA CO.</h5>
//         </div>
//         <div className="col-4">
//           <h5>Contact Us</h5>
//         </div>
//     </div>
//     </div>
//     <Footer/>
//   </div>
// )


/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.59512556b0be8e023a3f.hot-update.js.map