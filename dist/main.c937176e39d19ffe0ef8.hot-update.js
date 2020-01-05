webpackHotUpdate("main",{

/***/ "./src/component/UserList.jsx":
/*!************************************!*\
  !*** ./src/component/UserList.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions */ "./src/actions.jsx");








 // import axios from 'axios';

var urlUsers = 'https://jsonplaceholder.typicode.com/users';

var mapStateToProps = function mapStateToProps(state) {
  var props = {
    isLoading: state.isLoading,
    users: state.users,
    error: state.error
  };
  return props;
};

var UserList =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(UserList, _Component);

  function UserList() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, UserList);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(UserList).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(UserList, [{
    key: "componentDidMount",
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     isLoading: true,
    //     users: [],
    //     error: null,
    //   };
    // }
    value: function componentDidMount() {
      this.props.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_8__["default"])());
    } // componentDidMount() {
    //   this.fetchData();
    // }
    // async fetchData() {
    //   const response = await axios.get(urlUsers);
    //   try {
    //     this.setState({
    //       users: response.data,
    //       isLoading: false,
    //     });
    //   } catch (error) {
    //     this.setState({ error, isLoading: false });
    //   }
    // }

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isLoading = _this$props.isLoading,
          users = _this$props.users;
      var content = [];

      if (!isLoading) {
        content = users.map(function (_ref) {
          var name = _ref.name,
              id = _ref.id;
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
            key: id
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
            className: "content__item"
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
            to: {
              pathname: '/posts',
              userId: id,
              userName: name
            },
            className: "content__link"
          }, name)));
        });
      } else {
        content = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Loading...");
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, " User list"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "content flex"
      }, content));
    }
  }]);

  return UserList;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps)(UserList));

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L1VzZXJMaXN0LmpzeCJdLCJuYW1lcyI6WyJ1cmxVc2VycyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwicHJvcHMiLCJpc0xvYWRpbmciLCJ1c2VycyIsImVycm9yIiwiVXNlckxpc3QiLCJkaXNwYXRjaCIsInJlcXVlc3RVc2VycyIsImNvbnRlbnQiLCJtYXAiLCJuYW1lIiwiaWQiLCJwYXRobmFtZSIsInVzZXJJZCIsInVzZXJOYW1lIiwiQ29tcG9uZW50IiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUlBOztBQUVBLElBQU1BLFFBQVEsR0FBRyw0Q0FBakI7O0FBRUEsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFDakMsTUFBTUMsS0FBSyxHQUFHO0FBQ1pDLGFBQVMsRUFBRUYsS0FBSyxDQUFDRSxTQURMO0FBRVpDLFNBQUssRUFBRUgsS0FBSyxDQUFDRyxLQUZEO0FBR1pDLFNBQUssRUFBRUosS0FBSyxDQUFDSTtBQUhELEdBQWQ7QUFLQSxTQUFPSCxLQUFQO0FBQ0QsQ0FQRDs7SUFTTUksUTs7Ozs7Ozs7Ozs7OztBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7d0NBRW9CO0FBQ2xCLFdBQUtKLEtBQUwsQ0FBV0ssUUFBWCxDQUFvQkMsd0RBQVksRUFBaEM7QUFDRCxLLENBRUQ7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs2QkFFUztBQUFBLHdCQUNzQixLQUFLTixLQUQzQjtBQUFBLFVBQ0NDLFNBREQsZUFDQ0EsU0FERDtBQUFBLFVBQ1lDLEtBRFosZUFDWUEsS0FEWjtBQUVQLFVBQUlLLE9BQU8sR0FBRyxFQUFkOztBQUVBLFVBQUksQ0FBQ04sU0FBTCxFQUFnQjtBQUNkTSxlQUFPLEdBQUdMLEtBQUssQ0FBQ00sR0FBTixDQUFVO0FBQUEsY0FBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsY0FBU0MsRUFBVCxRQUFTQSxFQUFUO0FBQUEsaUJBQ2xCLDJEQUFDLDRDQUFELENBQU8sUUFBUDtBQUFnQixlQUFHLEVBQUVBO0FBQXJCLGFBQ0U7QUFBSSxxQkFBUyxFQUFDO0FBQWQsYUFDRSwyREFBQyxxREFBRDtBQUNFLGNBQUUsRUFBRTtBQUNGQyxzQkFBUSxFQUFFLFFBRFI7QUFFRkMsb0JBQU0sRUFBRUYsRUFGTjtBQUdGRyxzQkFBUSxFQUFFSjtBQUhSLGFBRE47QUFNRSxxQkFBUyxFQUFDO0FBTlosYUFRR0EsSUFSSCxDQURGLENBREYsQ0FEa0I7QUFBQSxTQUFWLENBQVY7QUFnQkQsT0FqQkQsTUFpQk87QUFDTEYsZUFBTyxHQUFHLG1GQUFWO0FBQ0Q7O0FBRUQsYUFDRSx3SEFDRSxvRkFERixFQUVFO0FBQUksaUJBQVMsRUFBQztBQUFkLFNBQ0dBLE9BREgsQ0FGRixDQURGO0FBU0Q7Ozs7RUFoRW9CTywrQzs7QUFtRVJDLDBIQUFPLENBQUNqQixlQUFELENBQVAsQ0FBeUJNLFFBQXpCLENBQWYsRSIsImZpbGUiOiJtYWluLmM5MzcxNzZlMzlkMTlmZmUwZWY4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciwgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHJlcXVlc3RVc2VycyBmcm9tICcuLi9hY3Rpb25zJztcblxuLy8gaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgdXJsVXNlcnMgPSAnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIGNvbnN0IHByb3BzID0ge1xuICAgIGlzTG9hZGluZzogc3RhdGUuaXNMb2FkaW5nLFxuICAgIHVzZXJzOiBzdGF0ZS51c2VycyxcbiAgICBlcnJvcjogc3RhdGUuZXJyb3IsXG4gIH07XG4gIHJldHVybiBwcm9wcztcbn07XG5cbmNsYXNzIFVzZXJMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgLy8gY29uc3RydWN0b3IocHJvcHMpIHtcbiAgLy8gICBzdXBlcihwcm9wcyk7XG4gIC8vICAgdGhpcy5zdGF0ZSA9IHtcbiAgLy8gICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgLy8gICAgIHVzZXJzOiBbXSxcbiAgLy8gICAgIGVycm9yOiBudWxsLFxuICAvLyAgIH07XG4gIC8vIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHJlcXVlc3RVc2VycygpKTtcbiAgfVxuXG4gIC8vIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAvLyAgIHRoaXMuZmV0Y2hEYXRhKCk7XG4gIC8vIH1cblxuICAvLyBhc3luYyBmZXRjaERhdGEoKSB7XG4gIC8vICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQodXJsVXNlcnMpO1xuICAvLyAgIHRyeSB7XG4gIC8vICAgICB0aGlzLnNldFN0YXRlKHtcbiAgLy8gICAgICAgdXNlcnM6IHJlc3BvbnNlLmRhdGEsXG4gIC8vICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gIC8vICAgICB9KTtcbiAgLy8gICB9IGNhdGNoIChlcnJvcikge1xuICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yLCBpc0xvYWRpbmc6IGZhbHNlIH0pO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGlzTG9hZGluZywgdXNlcnMgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IGNvbnRlbnQgPSBbXTtcblxuICAgIGlmICghaXNMb2FkaW5nKSB7XG4gICAgICBjb250ZW50ID0gdXNlcnMubWFwKCh7IG5hbWUsIGlkIH0pID0+IChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aWR9PlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjb250ZW50X19pdGVtXCI+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICB0bz17e1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL3Bvc3RzJyxcbiAgICAgICAgICAgICAgICB1c2VySWQ6IGlkLFxuICAgICAgICAgICAgICAgIHVzZXJOYW1lOiBuYW1lLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250ZW50X19saW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZW50ID0gPHA+TG9hZGluZy4uLjwvcD47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxoMT4gVXNlciBsaXN0PC9oMT5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNvbnRlbnQgZmxleFwiPlxuICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICA8L3VsPlxuICAgICAgPC8+XG5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShVc2VyTGlzdCk7XG4iXSwic291cmNlUm9vdCI6IiJ9