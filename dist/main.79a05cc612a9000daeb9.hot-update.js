webpackHotUpdate("main",{

/***/ "":
false,

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/scss/main.scss":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/postcss-loader/src??ref--5-3!./node_modules/sass-loader/dist/cjs.js??ref--5-4!./src/scss/main.scss ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app.jsx":
/*!*********************!*\
  !*** ./src/app.jsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _component_UserList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/UserList */ "./src/component/UserList.jsx");
/* harmony import */ var _component_PostsList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/PostsList */ "./src/component/PostsList.jsx");
/* harmony import */ var _component_CommentsList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/CommentsList */ "./src/component/CommentsList.jsx");
/* harmony import */ var _component_Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/Header */ "./src/component/Header.jsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










 // import NotFound from './component/NotFound';

var initialState = {
  users: [],
  loading: false,
  error: null
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  console.log('action', action);

  switch (action.type) {
    case 'REQUEST_USER':
      console.log('state', state);
      return _objectSpread({}, state, {
        loading: true,
        error: null
      });

    case 'REQUEST_USER_SUCCESS':
      console.log('state sucsess', state);
      return _objectSpread({}, state, {
        loading: false,
        users: action.payload.users
      });

    case 'REQUEST_USER_FAILURE':
      return _objectSpread({}, state, {
        loading: false,
        users: [],
        error: action.payload.error
      });

    default:
      return state;
  }
}

var store = Object(redux__WEBPACK_IMPORTED_MODULE_3__["createStore"])(reducer, Object(redux__WEBPACK_IMPORTED_MODULE_3__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_5__["default"]));

var Comments = function Comments(props) {
  var location = props.location;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_component_CommentsList__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: location.postId,
    name: location.name,
    userId: location.userId,
    postTitle: location.postTitle
  });
};

Comments.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired // eslint-disable-line react/forbid-prop-types

};

var Posts = function Posts(props) {
  var location = props.location;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_component_PostsList__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: location.userId,
    name: location.userName
  });
};

Posts.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired // eslint-disable-line react/forbid-prop-types

};

var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_component_UserList__WEBPACK_IMPORTED_MODULE_7__["default"], null);
};

var Main = function Main() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
    exact: true,
    path: "/",
    component: Home
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
    path: "/posts",
    component: Posts
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
    path: "/comments",
    component: Comments
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
    path: "*",
    component: Home
  })));
};

var App = function App() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
    store: store
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_component_Header__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Main, {
    id: "0"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tYWluLnNjc3M/ZTViZCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzeCJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJ1c2VycyIsImxvYWRpbmciLCJlcnJvciIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwicGF5bG9hZCIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVuayIsIkNvbW1lbnRzIiwicHJvcHMiLCJsb2NhdGlvbiIsInBvc3RJZCIsIm5hbWUiLCJ1c2VySWQiLCJwb3N0VGl0bGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiUG9zdHMiLCJ1c2VyTmFtZSIsIkhvbWUiLCJNYWluIiwiQXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBSUE7QUFDQTtBQUNBO0NBRUE7O0FBRUEsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxPQUFLLEVBQUUsRUFEWTtBQUVuQkMsU0FBTyxFQUFFLEtBRlU7QUFHbkJDLE9BQUssRUFBRTtBQUhZLENBQXJCOztBQU9BLFNBQVNDLE9BQVQsR0FBK0M7QUFBQSxNQUE5QkMsS0FBOEIsdUVBQXRCTCxZQUFzQjtBQUFBLE1BQVJNLE1BQVE7QUFDN0NDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JGLE1BQXRCOztBQUNBLFVBQVFBLE1BQU0sQ0FBQ0csSUFBZjtBQUNFLFNBQUssY0FBTDtBQUNFRixhQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCSCxLQUFyQjtBQUNBLCtCQUFZQSxLQUFaO0FBQW1CSCxlQUFPLEVBQUUsSUFBNUI7QUFBa0NDLGFBQUssRUFBRTtBQUF6Qzs7QUFDRixTQUFLLHNCQUFMO0FBQ0FJLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkJILEtBQTdCO0FBQ0UsK0JBQVlBLEtBQVo7QUFBbUJILGVBQU8sRUFBRSxLQUE1QjtBQUFtQ0QsYUFBSyxFQUFFSyxNQUFNLENBQUNJLE9BQVAsQ0FBZVQ7QUFBekQ7O0FBQ0YsU0FBSyxzQkFBTDtBQUNFLCtCQUNLSSxLQURMO0FBRUVILGVBQU8sRUFBRSxLQUZYO0FBR0VELGFBQUssRUFBRSxFQUhUO0FBSUVFLGFBQUssRUFBRUcsTUFBTSxDQUFDSSxPQUFQLENBQWVQO0FBSnhCOztBQU1GO0FBQ0UsYUFBT0UsS0FBUDtBQWZKO0FBaUJEOztBQUVELElBQU1NLEtBQUssR0FBR0MseURBQVcsQ0FDdkJSLE9BRHVCLEVBRXZCUyw2REFBZSxDQUFDQyxtREFBRCxDQUZRLENBQXpCOztBQUtBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQ2xCQyxRQURrQixHQUNMRCxLQURLLENBQ2xCQyxRQURrQjtBQUUxQixTQUNFLDJEQUFDLCtEQUFEO0FBQ0UsTUFBRSxFQUFFQSxRQUFRLENBQUNDLE1BRGY7QUFFRSxRQUFJLEVBQUVELFFBQVEsQ0FBQ0UsSUFGakI7QUFHRSxVQUFNLEVBQUVGLFFBQVEsQ0FBQ0csTUFIbkI7QUFJRSxhQUFTLEVBQUVILFFBQVEsQ0FBQ0k7QUFKdEIsSUFERjtBQVFELENBVkQ7O0FBWUFOLFFBQVEsQ0FBQ08sU0FBVCxHQUFxQjtBQUNuQkwsVUFBUSxFQUFFTSxpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQURSLENBQ29COztBQURwQixDQUFyQjs7QUFJQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDVixLQUFELEVBQVc7QUFBQSxNQUNmQyxRQURlLEdBQ0ZELEtBREUsQ0FDZkMsUUFEZTtBQUV2QixTQUNFLDJEQUFDLDREQUFEO0FBQVcsTUFBRSxFQUFFQSxRQUFRLENBQUNHLE1BQXhCO0FBQWdDLFFBQUksRUFBRUgsUUFBUSxDQUFDVTtBQUEvQyxJQURGO0FBR0QsQ0FMRDs7QUFPQUQsS0FBSyxDQUFDSixTQUFOLEdBQWtCO0FBQ2hCTCxVQUFRLEVBQUVNLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBRFgsQ0FDdUI7O0FBRHZCLENBQWxCOztBQUlBLElBQU1HLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsU0FDWCwyREFBQywyREFBRCxPQURXO0FBQUEsQ0FBYjs7QUFJQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLFNBQ1g7QUFBTSxhQUFTLEVBQUM7QUFBaEIsS0FDRSwyREFBQyx1REFBRCxRQUNFLDJEQUFDLHNEQUFEO0FBQU8sU0FBSyxNQUFaO0FBQWEsUUFBSSxFQUFDLEdBQWxCO0FBQXNCLGFBQVMsRUFBRUQ7QUFBakMsSUFERixFQUVFLDJEQUFDLHNEQUFEO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsYUFBUyxFQUFFRjtBQUFoQyxJQUZGLEVBR0UsMkRBQUMsc0RBQUQ7QUFBTyxRQUFJLEVBQUMsV0FBWjtBQUF3QixhQUFTLEVBQUVYO0FBQW5DLElBSEYsRUFJRSwyREFBQyxzREFBRDtBQUFPLFFBQUksRUFBQyxHQUFaO0FBQWdCLGFBQVMsRUFBRWE7QUFBM0IsSUFKRixDQURGLENBRFc7QUFBQSxDQUFiOztBQVdBLElBQU1FLEdBQUcsR0FBRyxTQUFOQSxHQUFNO0FBQUEsU0FDViwyREFBQyxvREFBRDtBQUFVLFNBQUssRUFBRW5CO0FBQWpCLEtBQ0UsMkRBQUMsOERBQUQsUUFDRSx3RUFDRSwyREFBQywwREFBRCxPQURGLEVBRUUsMkRBQUMsSUFBRDtBQUFNLE1BQUUsRUFBQztBQUFULElBRkYsQ0FERixDQURGLENBRFU7QUFBQSxDQUFaOztBQVdlbUIsa0VBQWYsRSIsImZpbGUiOiJtYWluLjc5YTA1Y2M2MTJhOTAwMGRhZWI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5cblxuaW1wb3J0IHtcbiAgQnJvd3NlclJvdXRlciwgU3dpdGNoLCBSb3V0ZSxcbn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCBVc2VyTGlzdCBmcm9tICcuL2NvbXBvbmVudC9Vc2VyTGlzdCc7XG5pbXBvcnQgUG9zdHNMaXN0IGZyb20gJy4vY29tcG9uZW50L1Bvc3RzTGlzdCc7XG5pbXBvcnQgQ29tbWVudHNMaXN0IGZyb20gJy4vY29tcG9uZW50L0NvbW1lbnRzTGlzdCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50L0hlYWRlcic7XG4vLyBpbXBvcnQgTm90Rm91bmQgZnJvbSAnLi9jb21wb25lbnQvTm90Rm91bmQnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHVzZXJzOiBbXSxcbiAgbG9hZGluZzogZmFsc2UsXG4gIGVycm9yOiBudWxsLFxufTtcblxuXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgY29uc29sZS5sb2coJ2FjdGlvbicsIGFjdGlvbik7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdSRVFVRVNUX1VTRVInOlxuICAgICAgY29uc29sZS5sb2coJ3N0YXRlJywgc3RhdGUpO1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IHRydWUsIGVycm9yOiBudWxsIH07XG4gICAgY2FzZSAnUkVRVUVTVF9VU0VSX1NVQ0NFU1MnOlxuICAgIGNvbnNvbGUubG9nKCdzdGF0ZSBzdWNzZXNzJywgc3RhdGUpO1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCB1c2VyczogYWN0aW9uLnBheWxvYWQudXNlcnMgfTtcbiAgICBjYXNlICdSRVFVRVNUX1VTRVJfRkFJTFVSRSc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIHVzZXJzOiBbXSxcbiAgICAgICAgZXJyb3I6IGFjdGlvbi5wYXlsb2FkLmVycm9yLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gIHJlZHVjZXIsXG4gIGFwcGx5TWlkZGxld2FyZSh0aHVuayksXG4pO1xuXG5jb25zdCBDb21tZW50cyA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGxvY2F0aW9uIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8Q29tbWVudHNMaXN0XG4gICAgICBpZD17bG9jYXRpb24ucG9zdElkfVxuICAgICAgbmFtZT17bG9jYXRpb24ubmFtZX1cbiAgICAgIHVzZXJJZD17bG9jYXRpb24udXNlcklkfVxuICAgICAgcG9zdFRpdGxlPXtsb2NhdGlvbi5wb3N0VGl0bGV9XG4gICAgLz5cbiAgKTtcbn07XG5cbkNvbW1lbnRzLnByb3BUeXBlcyA9IHtcbiAgbG9jYXRpb246IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCwgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlc1xufTtcblxuY29uc3QgUG9zdHMgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBsb2NhdGlvbiB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPFBvc3RzTGlzdCBpZD17bG9jYXRpb24udXNlcklkfSBuYW1lPXtsb2NhdGlvbi51c2VyTmFtZX0gLz5cbiAgKTtcbn07XG5cblBvc3RzLnByb3BUeXBlcyA9IHtcbiAgbG9jYXRpb246IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCwgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlc1xufTtcblxuY29uc3QgSG9tZSA9ICgpID0+IChcbiAgPFVzZXJMaXN0IC8+XG4pO1xuXG5jb25zdCBNYWluID0gKCkgPT4gKFxuICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICA8U3dpdGNoPlxuICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgY29tcG9uZW50PXtIb21lfSAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCIvcG9zdHNcIiBjb21wb25lbnQ9e1Bvc3RzfSAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCIvY29tbWVudHNcIiBjb21wb25lbnQ9e0NvbW1lbnRzfSAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCIqXCIgY29tcG9uZW50PXtIb21lfSAvPlxuICAgIDwvU3dpdGNoPlxuICA8L21haW4+XG4pO1xuXG5jb25zdCBBcHAgPSAoKSA9PiAoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxCcm93c2VyUm91dGVyPlxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8TWFpbiBpZD1cIjBcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9Ccm93c2VyUm91dGVyPlxuICA8L1Byb3ZpZGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==