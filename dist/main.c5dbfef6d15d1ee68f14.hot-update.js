webpackHotUpdate("main",{

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
  isLoading: false,
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
        isLoading: true,
        error: null
      });

    case 'REQUEST_USER_SUCCESS':
      return _objectSpread({}, state, {
        isLoading: false,
        users: action.payload.users
      });

    case 'REQUEST_USER_FAILURE':
      return _objectSpread({}, state, {
        isLoading: false,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzeCJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJ1c2VycyIsImlzTG9hZGluZyIsImVycm9yIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJwYXlsb2FkIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIiwiQ29tbWVudHMiLCJwcm9wcyIsImxvY2F0aW9uIiwicG9zdElkIiwibmFtZSIsInVzZXJJZCIsInBvc3RUaXRsZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJQb3N0cyIsInVzZXJOYW1lIiwiSG9tZSIsIk1haW4iLCJBcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFJQTtBQUNBO0FBQ0E7Q0FFQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUc7QUFDbkJDLE9BQUssRUFBRSxFQURZO0FBRW5CQyxXQUFTLEVBQUUsS0FGUTtBQUduQkMsT0FBSyxFQUFFO0FBSFksQ0FBckI7O0FBT0EsU0FBU0MsT0FBVCxHQUErQztBQUFBLE1BQTlCQyxLQUE4Qix1RUFBdEJMLFlBQXNCO0FBQUEsTUFBUk0sTUFBUTtBQUM3Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQkYsTUFBdEI7O0FBQ0EsVUFBUUEsTUFBTSxDQUFDRyxJQUFmO0FBQ0UsU0FBSyxjQUFMO0FBQ0VGLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJILEtBQXJCO0FBQ0EsK0JBQVlBLEtBQVo7QUFBbUJILGlCQUFTLEVBQUUsSUFBOUI7QUFBb0NDLGFBQUssRUFBRTtBQUEzQzs7QUFDRixTQUFLLHNCQUFMO0FBQ0UsK0JBQVlFLEtBQVo7QUFBbUJILGlCQUFTLEVBQUUsS0FBOUI7QUFBcUNELGFBQUssRUFBRUssTUFBTSxDQUFDSSxPQUFQLENBQWVUO0FBQTNEOztBQUNGLFNBQUssc0JBQUw7QUFDRSwrQkFDS0ksS0FETDtBQUVFSCxpQkFBUyxFQUFFLEtBRmI7QUFHRUQsYUFBSyxFQUFFLEVBSFQ7QUFJRUUsYUFBSyxFQUFFRyxNQUFNLENBQUNJLE9BQVAsQ0FBZVA7QUFKeEI7O0FBTUY7QUFDRSxhQUFPRSxLQUFQO0FBZEo7QUFnQkQ7O0FBRUQsSUFBTU0sS0FBSyxHQUFHQyx5REFBVyxDQUN2QlIsT0FEdUIsRUFFdkJTLDZEQUFlLENBQUNDLG1EQUFELENBRlEsQ0FBekI7O0FBS0EsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFDbEJDLFFBRGtCLEdBQ0xELEtBREssQ0FDbEJDLFFBRGtCO0FBRTFCLFNBQ0UsMkRBQUMsK0RBQUQ7QUFDRSxNQUFFLEVBQUVBLFFBQVEsQ0FBQ0MsTUFEZjtBQUVFLFFBQUksRUFBRUQsUUFBUSxDQUFDRSxJQUZqQjtBQUdFLFVBQU0sRUFBRUYsUUFBUSxDQUFDRyxNQUhuQjtBQUlFLGFBQVMsRUFBRUgsUUFBUSxDQUFDSTtBQUp0QixJQURGO0FBUUQsQ0FWRDs7QUFZQU4sUUFBUSxDQUFDTyxTQUFULEdBQXFCO0FBQ25CTCxVQUFRLEVBQUVNLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBRFIsQ0FDb0I7O0FBRHBCLENBQXJCOztBQUlBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNWLEtBQUQsRUFBVztBQUFBLE1BQ2ZDLFFBRGUsR0FDRkQsS0FERSxDQUNmQyxRQURlO0FBRXZCLFNBQ0UsMkRBQUMsNERBQUQ7QUFBVyxNQUFFLEVBQUVBLFFBQVEsQ0FBQ0csTUFBeEI7QUFBZ0MsUUFBSSxFQUFFSCxRQUFRLENBQUNVO0FBQS9DLElBREY7QUFHRCxDQUxEOztBQU9BRCxLQUFLLENBQUNKLFNBQU4sR0FBa0I7QUFDaEJMLFVBQVEsRUFBRU0saURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFEWCxDQUN1Qjs7QUFEdkIsQ0FBbEI7O0FBSUEsSUFBTUcsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxTQUNYLDJEQUFDLDJEQUFELE9BRFc7QUFBQSxDQUFiOztBQUlBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsU0FDWDtBQUFNLGFBQVMsRUFBQztBQUFoQixLQUNFLDJEQUFDLHVEQUFELFFBQ0UsMkRBQUMsc0RBQUQ7QUFBTyxTQUFLLE1BQVo7QUFBYSxRQUFJLEVBQUMsR0FBbEI7QUFBc0IsYUFBUyxFQUFFRDtBQUFqQyxJQURGLEVBRUUsMkRBQUMsc0RBQUQ7QUFBTyxRQUFJLEVBQUMsUUFBWjtBQUFxQixhQUFTLEVBQUVGO0FBQWhDLElBRkYsRUFHRSwyREFBQyxzREFBRDtBQUFPLFFBQUksRUFBQyxXQUFaO0FBQXdCLGFBQVMsRUFBRVg7QUFBbkMsSUFIRixFQUlFLDJEQUFDLHNEQUFEO0FBQU8sUUFBSSxFQUFDLEdBQVo7QUFBZ0IsYUFBUyxFQUFFYTtBQUEzQixJQUpGLENBREYsQ0FEVztBQUFBLENBQWI7O0FBV0EsSUFBTUUsR0FBRyxHQUFHLFNBQU5BLEdBQU07QUFBQSxTQUNWLDJEQUFDLG9EQUFEO0FBQVUsU0FBSyxFQUFFbkI7QUFBakIsS0FDRSwyREFBQyw4REFBRCxRQUNFLHdFQUNFLDJEQUFDLDBEQUFELE9BREYsRUFFRSwyREFBQyxJQUFEO0FBQU0sTUFBRSxFQUFDO0FBQVQsSUFGRixDQURGLENBREYsQ0FEVTtBQUFBLENBQVo7O0FBV2VtQixrRUFBZixFIiwiZmlsZSI6Im1haW4uYzVkYmZlZjZkMTVkMWVlNjhmMTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcblxuXG5pbXBvcnQge1xuICBCcm93c2VyUm91dGVyLCBTd2l0Y2gsIFJvdXRlLFxufSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IFVzZXJMaXN0IGZyb20gJy4vY29tcG9uZW50L1VzZXJMaXN0JztcbmltcG9ydCBQb3N0c0xpc3QgZnJvbSAnLi9jb21wb25lbnQvUG9zdHNMaXN0JztcbmltcG9ydCBDb21tZW50c0xpc3QgZnJvbSAnLi9jb21wb25lbnQvQ29tbWVudHNMaXN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnQvSGVhZGVyJztcbi8vIGltcG9ydCBOb3RGb3VuZCBmcm9tICcuL2NvbXBvbmVudC9Ob3RGb3VuZCc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgdXNlcnM6IFtdLFxuICBpc0xvYWRpbmc6IGZhbHNlLFxuICBlcnJvcjogbnVsbCxcbn07XG5cblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIGNvbnNvbGUubG9nKCdhY3Rpb24nLCBhY3Rpb24pO1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnUkVRVUVTVF9VU0VSJzpcbiAgICAgIGNvbnNvbGUubG9nKCdzdGF0ZScsIHN0YXRlKTtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc0xvYWRpbmc6IHRydWUsIGVycm9yOiBudWxsIH07XG4gICAgY2FzZSAnUkVRVUVTVF9VU0VSX1NVQ0NFU1MnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzTG9hZGluZzogZmFsc2UsIHVzZXJzOiBhY3Rpb24ucGF5bG9hZC51c2VycyB9O1xuICAgIGNhc2UgJ1JFUVVFU1RfVVNFUl9GQUlMVVJFJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICB1c2VyczogW10sXG4gICAgICAgIGVycm9yOiBhY3Rpb24ucGF5bG9hZC5lcnJvcixcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICByZWR1Y2VyLFxuICBhcHBseU1pZGRsZXdhcmUodGh1bmspLFxuKTtcblxuY29uc3QgQ29tbWVudHMgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBsb2NhdGlvbiB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPENvbW1lbnRzTGlzdFxuICAgICAgaWQ9e2xvY2F0aW9uLnBvc3RJZH1cbiAgICAgIG5hbWU9e2xvY2F0aW9uLm5hbWV9XG4gICAgICB1c2VySWQ9e2xvY2F0aW9uLnVzZXJJZH1cbiAgICAgIHBvc3RUaXRsZT17bG9jYXRpb24ucG9zdFRpdGxlfVxuICAgIC8+XG4gICk7XG59O1xuXG5Db21tZW50cy5wcm9wVHlwZXMgPSB7XG4gIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXNcbn07XG5cbmNvbnN0IFBvc3RzID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgbG9jYXRpb24gfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxQb3N0c0xpc3QgaWQ9e2xvY2F0aW9uLnVzZXJJZH0gbmFtZT17bG9jYXRpb24udXNlck5hbWV9IC8+XG4gICk7XG59O1xuXG5Qb3N0cy5wcm9wVHlwZXMgPSB7XG4gIGxvY2F0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXNcbn07XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiAoXG4gIDxVc2VyTGlzdCAvPlxuKTtcblxuY29uc3QgTWFpbiA9ICgpID0+IChcbiAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgPFN3aXRjaD5cbiAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIGNvbXBvbmVudD17SG9tZX0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL3Bvc3RzXCIgY29tcG9uZW50PXtQb3N0c30gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL2NvbW1lbnRzXCIgY29tcG9uZW50PXtDb21tZW50c30gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiKlwiIGNvbXBvbmVudD17SG9tZX0gLz5cbiAgICA8L1N3aXRjaD5cbiAgPC9tYWluPlxuKTtcblxuY29uc3QgQXBwID0gKCkgPT4gKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8QnJvd3NlclJvdXRlcj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPE1haW4gaWQ9XCIwXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgPC9Qcm92aWRlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=