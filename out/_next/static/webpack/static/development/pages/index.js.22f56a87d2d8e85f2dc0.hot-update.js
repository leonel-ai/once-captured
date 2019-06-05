webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/style.scss */ "./styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "/Users/leonelaguzman/Documents/Clients/once/oncecinema/pages/index.js";

 // import Cards from '../components/cards'




var Home =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Home, _React$Component);

  function Home(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Home).call(this, props));
    _this.state = {
      activateVideo: false
    };
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var player = new Plyr('#player', {
        autoplay: false,
        resetOnEnd: true,
        fullscreen: {
          enabled: true
        }
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      player.autoplay = true;
      this.setState(function (state) {
        return {
          activateVideo: !state.activateVideo
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_head__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: "ONCE Cinema",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jumbotron jumbotron-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "grid-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "brand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        className: "img-fluid",
        src: "/static/logo.svg",
        alt: "brand logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "cta",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Work with us"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "banner-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "banner-title display-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "YOUR", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), "MOMENT"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "banner-subhead",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "ONCE Captured"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "lead",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Wedding & event cinematography with a story to tell.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "work-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        className: "work-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "WORK"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "work-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "Creating amazing work that does blah blah blah.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "services-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        className: "services-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "SERVICES"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "services-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Creating amazing work that does blah blah blah.")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "container-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row highlight-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "video-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "video-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "video-overlay",
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
        width: "52px",
        height: "52px",
        viewBox: "-5 -5 52 52",
        className: "icon-play",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        id: "Group-5",
        transform: "matrix(1,0,0,1,2,2)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        id: "Triangle-2",
        transform: "matrix(-3.82857e-16,1,-1,-3.82857e-16,39.1429,-1.85714)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        d: "M20.5,14L27,23.286L14,23.286L20.5,14Z",
        fill: "rgb(239,58,80)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("circle", {
        id: "Oval",
        cx: "19",
        cy: "19",
        r: "19",
        fill: "none",
        stroke: "rgb(239,58,80)",
        strokeWidth: "3px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        className: "video-headline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Watch Reel")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "plyr__video-embed plyr--playing",
        id: "player",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("iframe", {
        src: "https://player.vimeo.com/video/326661659?title=0&byline=0&portrait=0&background=1",
        allowFullScreen: true,
        allowtransparency: "true",
        allow: "autoplay",
        preload: "auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row footer-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "ONCE CINEMA CO.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "Contact Us")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component); // const Home = () => (
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
//# sourceMappingURL=index.js.22f56a87d2d8e85f2dc0.hot-update.js.map