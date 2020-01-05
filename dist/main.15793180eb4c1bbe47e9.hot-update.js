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








 // const urlUsers = 'https://jsonplaceholder.typicode.com/users';

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
      this.props.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_8__["fetchUsers"])());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L1VzZXJMaXN0LmpzeCJdLCJuYW1lcyI6WyJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInByb3BzIiwiaXNMb2FkaW5nIiwidXNlcnMiLCJlcnJvciIsIlVzZXJMaXN0IiwiZGlzcGF0Y2giLCJmZXRjaFVzZXJzIiwiY29udGVudCIsIm1hcCIsIm5hbWUiLCJpZCIsInBhdGhuYW1lIiwidXNlcklkIiwidXNlck5hbWUiLCJDb21wb25lbnQiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBSUE7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFDakMsTUFBTUMsS0FBSyxHQUFHO0FBQ1pDLGFBQVMsRUFBRUYsS0FBSyxDQUFDRSxTQURMO0FBRVpDLFNBQUssRUFBRUgsS0FBSyxDQUFDRyxLQUZEO0FBR1pDLFNBQUssRUFBRUosS0FBSyxDQUFDSTtBQUhELEdBQWQ7QUFLQSxTQUFPSCxLQUFQO0FBQ0QsQ0FQRDs7SUFTTUksUTs7Ozs7Ozs7Ozs7OztBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7d0NBRW9CO0FBQ2xCLFdBQUtKLEtBQUwsQ0FBV0ssUUFBWCxDQUFvQkMsMkRBQVUsRUFBOUI7QUFDRCxLLENBRUQ7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs2QkFFUztBQUFBLHdCQUNzQixLQUFLTixLQUQzQjtBQUFBLFVBQ0NDLFNBREQsZUFDQ0EsU0FERDtBQUFBLFVBQ1lDLEtBRFosZUFDWUEsS0FEWjtBQUVQLFVBQUlLLE9BQU8sR0FBRyxFQUFkOztBQUVBLFVBQUksQ0FBQ04sU0FBTCxFQUFnQjtBQUNkTSxlQUFPLEdBQUdMLEtBQUssQ0FBQ00sR0FBTixDQUFVO0FBQUEsY0FBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsY0FBU0MsRUFBVCxRQUFTQSxFQUFUO0FBQUEsaUJBQ2xCLDJEQUFDLDRDQUFELENBQU8sUUFBUDtBQUFnQixlQUFHLEVBQUVBO0FBQXJCLGFBQ0U7QUFBSSxxQkFBUyxFQUFDO0FBQWQsYUFDRSwyREFBQyxxREFBRDtBQUNFLGNBQUUsRUFBRTtBQUNGQyxzQkFBUSxFQUFFLFFBRFI7QUFFRkMsb0JBQU0sRUFBRUYsRUFGTjtBQUdGRyxzQkFBUSxFQUFFSjtBQUhSLGFBRE47QUFNRSxxQkFBUyxFQUFDO0FBTlosYUFRR0EsSUFSSCxDQURGLENBREYsQ0FEa0I7QUFBQSxTQUFWLENBQVY7QUFnQkQsT0FqQkQsTUFpQk87QUFDTEYsZUFBTyxHQUFHLG1GQUFWO0FBQ0Q7O0FBRUQsYUFDRSx3SEFDRSxvRkFERixFQUVFO0FBQUksaUJBQVMsRUFBQztBQUFkLFNBQ0dBLE9BREgsQ0FGRixDQURGO0FBU0Q7Ozs7RUFoRW9CTywrQzs7QUFtRVJDLDBIQUFPLENBQUNqQixlQUFELENBQVAsQ0FBeUJNLFFBQXpCLENBQWYsRSIsImZpbGUiOiJtYWluLjE1NzkzMTgwZWI0YzFiYmU0N2U5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciwgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHJlcXVlc3RVc2VycywgeyBmZXRjaFVzZXJzIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5cbi8vIGNvbnN0IHVybFVzZXJzID0gJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICBjb25zdCBwcm9wcyA9IHtcbiAgICBpc0xvYWRpbmc6IHN0YXRlLmlzTG9hZGluZyxcbiAgICB1c2Vyczogc3RhdGUudXNlcnMsXG4gICAgZXJyb3I6IHN0YXRlLmVycm9yLFxuICB9O1xuICByZXR1cm4gcHJvcHM7XG59O1xuXG5jbGFzcyBVc2VyTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIC8vIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gIC8vICAgc3VwZXIocHJvcHMpO1xuICAvLyAgIHRoaXMuc3RhdGUgPSB7XG4gIC8vICAgICBpc0xvYWRpbmc6IHRydWUsXG4gIC8vICAgICB1c2VyczogW10sXG4gIC8vICAgICBlcnJvcjogbnVsbCxcbiAgLy8gICB9O1xuICAvLyB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChmZXRjaFVzZXJzKCkpO1xuICB9XG5cbiAgLy8gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIC8vICAgdGhpcy5mZXRjaERhdGEoKTtcbiAgLy8gfVxuXG4gIC8vIGFzeW5jIGZldGNoRGF0YSgpIHtcbiAgLy8gICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCh1cmxVc2Vycyk7XG4gIC8vICAgdHJ5IHtcbiAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xuICAvLyAgICAgICB1c2VyczogcmVzcG9uc2UuZGF0YSxcbiAgLy8gICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgLy8gICAgIH0pO1xuICAvLyAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gIC8vICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3IsIGlzTG9hZGluZzogZmFsc2UgfSk7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaXNMb2FkaW5nLCB1c2VycyB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgY29udGVudCA9IFtdO1xuXG4gICAgaWYgKCFpc0xvYWRpbmcpIHtcbiAgICAgIGNvbnRlbnQgPSB1c2Vycy5tYXAoKHsgbmFtZSwgaWQgfSkgPT4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpZH0+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNvbnRlbnRfX2l0ZW1cIj5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIHRvPXt7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvcG9zdHMnLFxuICAgICAgICAgICAgICAgIHVzZXJJZDogaWQsXG4gICAgICAgICAgICAgICAgdXNlck5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRlbnRfX2xpbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQgPSA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGgxPiBVc2VyIGxpc3Q8L2gxPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY29udGVudCBmbGV4XCI+XG4gICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgIDwvdWw+XG4gICAgICA8Lz5cblxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFVzZXJMaXN0KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=