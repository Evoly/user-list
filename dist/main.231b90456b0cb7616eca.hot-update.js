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
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _component_UserList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/UserList */ "./src/component/UserList.jsx");
/* harmony import */ var _component_PostsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/PostsList */ "./src/component/PostsList.jsx");
/* harmony import */ var _component_CommentsList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/CommentsList */ "./src/component/CommentsList.jsx");
/* harmony import */ var _component_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/Header */ "./src/component/Header.jsx");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};








var Comments = function Comments(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_CommentsList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: props.location.postId,
    name: props.location.name,
    userId: props.location.userId,
    postTitle: props.location.postTitle
  });
};

var Posts = function Posts(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_PostsList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: props.location.userId,
    name: props.location.userName
  });
};

var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_UserList__WEBPACK_IMPORTED_MODULE_2__["default"], null);
};

var Main = function Main() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/",
    component: Home
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/posts",
    component: Posts
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/comments",
    component: Comments
  })));
};

var App = function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_Header__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Main, null)));
};

var _default = App;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Comments, "Comments", "E:\\web_me\\user-list\\src\\app.jsx");
  reactHotLoader.register(Posts, "Posts", "E:\\web_me\\user-list\\src\\app.jsx");
  reactHotLoader.register(Home, "Home", "E:\\web_me\\user-list\\src\\app.jsx");
  reactHotLoader.register(Main, "Main", "E:\\web_me\\user-list\\src\\app.jsx");
  reactHotLoader.register(App, "App", "E:\\web_me\\user-list\\src\\app.jsx");
  reactHotLoader.register(_default, "default", "E:\\web_me\\user-list\\src\\app.jsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tYWluLnNjc3M/ZTViZCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzeCJdLCJuYW1lcyI6WyJDb21tZW50cyIsInByb3BzIiwibG9jYXRpb24iLCJwb3N0SWQiLCJuYW1lIiwidXNlcklkIiwicG9zdFRpdGxlIiwiUG9zdHMiLCJ1c2VyTmFtZSIsIkhvbWUiLCJNYWluIiwiQXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQzFCLFNBQ0UsMkRBQUMsK0RBQUQ7QUFDRSxNQUFFLEVBQUVBLEtBQUssQ0FBQ0MsUUFBTixDQUFlQyxNQURyQjtBQUVFLFFBQUksRUFBRUYsS0FBSyxDQUFDQyxRQUFOLENBQWVFLElBRnZCO0FBR0UsVUFBTSxFQUFFSCxLQUFLLENBQUNDLFFBQU4sQ0FBZUcsTUFIekI7QUFJRSxhQUFTLEVBQUVKLEtBQUssQ0FBQ0MsUUFBTixDQUFlSTtBQUo1QixJQURGO0FBUUQsQ0FURDs7QUFZQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDTixLQUFELEVBQVc7QUFDdkIsU0FDRSwyREFBQyw0REFBRDtBQUFXLE1BQUUsRUFBRUEsS0FBSyxDQUFDQyxRQUFOLENBQWVHLE1BQTlCO0FBQXNDLFFBQUksRUFBRUosS0FBSyxDQUFDQyxRQUFOLENBQWVNO0FBQTNELElBREY7QUFHRCxDQUpEOztBQU1BLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsU0FDWCwyREFBQywyREFBRCxPQURXO0FBQUEsQ0FBYjs7QUFJQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLFNBQ1g7QUFBTSxhQUFTLEVBQUM7QUFBaEIsS0FDRSwyREFBQyx1REFBRCxRQUNFLDJEQUFDLHNEQUFEO0FBQU8sU0FBSyxNQUFaO0FBQWEsUUFBSSxFQUFDLEdBQWxCO0FBQXNCLGFBQVMsRUFBRUQ7QUFBakMsSUFERixFQUVFLDJEQUFDLHNEQUFEO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsYUFBUyxFQUFFRjtBQUFoQyxJQUZGLEVBR0UsMkRBQUMsc0RBQUQ7QUFBTyxRQUFJLEVBQUMsV0FBWjtBQUF3QixhQUFTLEVBQUVQO0FBQW5DLElBSEYsQ0FERixDQURXO0FBQUEsQ0FBYjs7QUFVQSxJQUFNVyxHQUFHLEdBQUcsU0FBTkEsR0FBTTtBQUFBLFNBQ1YsMkRBQUMsOERBQUQsUUFDRSx3RUFDRSwyREFBQyx5REFBRCxPQURGLEVBRUUsMkRBQUMsSUFBRCxPQUZGLENBREYsQ0FEVTtBQUFBLENBQVo7O2VBU2VBLEc7QUFBQTs7Ozs7Ozs7OzswQkF6Q1RYLFE7MEJBWUFPLEs7MEJBTUFFLEk7MEJBSUFDLEk7MEJBVUFDLEciLCJmaWxlIjoibWFpbi4yMzFiOTA0NTZiMGNiNzYxNmVjYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIEJyb3dzZXJSb3V0ZXIsIFN3aXRjaCwgUm91dGUsXG59IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgVXNlckxpc3QgZnJvbSAnLi9jb21wb25lbnQvVXNlckxpc3QnO1xuaW1wb3J0IFBvc3RzTGlzdCBmcm9tICcuL2NvbXBvbmVudC9Qb3N0c0xpc3QnO1xuaW1wb3J0IENvbW1lbnRzTGlzdCBmcm9tICcuL2NvbXBvbmVudC9Db21tZW50c0xpc3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudC9IZWFkZXInO1xuXG5jb25zdCBDb21tZW50cyA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDb21tZW50c0xpc3RcbiAgICAgIGlkPXtwcm9wcy5sb2NhdGlvbi5wb3N0SWR9XG4gICAgICBuYW1lPXtwcm9wcy5sb2NhdGlvbi5uYW1lfVxuICAgICAgdXNlcklkPXtwcm9wcy5sb2NhdGlvbi51c2VySWR9XG4gICAgICBwb3N0VGl0bGU9e3Byb3BzLmxvY2F0aW9uLnBvc3RUaXRsZX1cbiAgICAvPlxuICApO1xufTtcblxuXG5jb25zdCBQb3N0cyA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxQb3N0c0xpc3QgaWQ9e3Byb3BzLmxvY2F0aW9uLnVzZXJJZH0gbmFtZT17cHJvcHMubG9jYXRpb24udXNlck5hbWV9IC8+XG4gICk7XG59O1xuXG5jb25zdCBIb21lID0gKCkgPT4gKFxuICA8VXNlckxpc3QgLz5cbik7XG5cbmNvbnN0IE1haW4gPSAoKSA9PiAoXG4gIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgIDxTd2l0Y2g+XG4gICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0hvbWV9IC8+XG4gICAgICA8Um91dGUgcGF0aD1cIi9wb3N0c1wiIGNvbXBvbmVudD17UG9zdHN9IC8+XG4gICAgICA8Um91dGUgcGF0aD1cIi9jb21tZW50c1wiIGNvbXBvbmVudD17Q29tbWVudHN9IC8+XG4gICAgPC9Td2l0Y2g+XG4gIDwvbWFpbj5cbik7XG5cbmNvbnN0IEFwcCA9ICgpID0+IChcbiAgPEJyb3dzZXJSb3V0ZXI+XG4gICAgPGRpdj5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxNYWluICAvPlxuICAgIDwvZGl2PlxuICA8L0Jyb3dzZXJSb3V0ZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9