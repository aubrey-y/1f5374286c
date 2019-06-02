webpackHotUpdate("static\\development\\pages\\places.js",{

/***/ "./pages/places.js":
/*!*************************!*\
  !*** ./pages/places.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ResponsiveDrawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ResponsiveDrawer */ "./components/ResponsiveDrawer.js");
/* harmony import */ var _components_api_NPS_Query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/api/NPS_Query */ "./components/api/NPS_Query.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Launch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Launch */ "./node_modules/@material-ui/icons/Launch.js");
/* harmony import */ var _material_ui_icons_Launch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Launch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _static_default_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../static/default.css */ "./static/default.css");
/* harmony import */ var _static_default_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_static_default_css__WEBPACK_IMPORTED_MODULE_10__);











var drawerWidth = 240;
var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
  var _grid;

  return {
    root: {
      flexGrow: 1,
      width: "100%"
    },
    paper: {
      padding: theme.spacing(2)
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    },
    singlecolumn: {
      flexBasis: "100%",
      position: "relative"
    },
    grid: (_grid = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_grid, theme.breakpoints.up('xs'), {
      paddingLeft: theme.spacing(0)
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_grid, theme.breakpoints.up('sm'), {
      paddingLeft: theme.spacing(30)
    }), _grid),
    chip: {
      margin: theme.spacing(1)
    },
    button: {
      margin: theme.spacing(1),
      float: 'left'
    },
    image: {
      width: "100%",
      position: "relative",
      objectFit: 'cover'
    },
    p: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, theme.breakpoints.only('xs'), {
      fontSize: "large"
    }),
    maintitle: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, theme.breakpoints.only('xs'), {
      fontSize: "xx-large"
    }),
    rightIcon: {
      marginLeft: theme.spacing(1)
    }
  };
});

function CenteredGrid(_ref) {
  var places = _ref.places;
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("main", {
    className: classes.content
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.toolbar
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    container: true,
    spacing: 3,
    className: classes.grid
  }, places.map(function (placeObj) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
      item: true,
      xs: 12,
      md: 6,
      lg: 6
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Paper"], {
      className: classes.paper
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
      variant: "h3",
      color: "textPrimary",
      style: {
        fontWeight: 'bold'
      },
      className: classes.maintitle
    }, placeObj.title), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      id: "trim"
    }, placeObj.listingimage.url.length > 0 ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
      className: classes.image,
      src: placeObj.listingimage.url
    }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null)), placeObj.listingimage.url.length > 0 ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
      paragraph: true,
      variant: "h4",
      className: classes.p
    }, placeObj.listingdescription), placeObj.url.length > 0 ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
      href: placeObj.url,
      color: "primary"
    }, "Read More About " + placeObj.title, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_Launch__WEBPACK_IMPORTED_MODULE_9___default.a, {
      className: classes.rightIcon
    })) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Divider"], null)));
  }), places.length === 0 ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    item: true,
    xs: true
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Paper"], {
    className: classes.paper
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
    color: "textPrimary",
    variant: "h4",
    style: {
      fontWeight: 'bold'
    }
  }, "No Notable Places Found"))) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null)));
}

var Places = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      root: {
        flexGrow: 1
      }
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_ResponsiveDrawer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: props.parks.data[0].fullName + " Places",
    park: props.router.query.objectId
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(CenteredGrid, {
    places: props.places.data
  }));
});

Places.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var objectId, res, parks, res2, places;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            objectId = context.query.objectId;
            _context.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default()(Object(_components_api_NPS_Query__WEBPACK_IMPORTED_MODULE_6__["default"])("parks", objectId));

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            parks = _context.sent;
            _context.next = 9;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default()(Object(_components_api_NPS_Query__WEBPACK_IMPORTED_MODULE_6__["default"])("places", objectId));

          case 9:
            res2 = _context.sent;
            _context.next = 12;
            return res2.json();

          case 12:
            places = _context.sent;
            console.log("Fetched ".concat(parks.data[0].fullName));
            return _context.abrupt("return", {
              parks: parks,
              places: places
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Places);

/***/ })

})
//# sourceMappingURL=places.js.ebb62a5c96da4e6fb876.hot-update.js.map