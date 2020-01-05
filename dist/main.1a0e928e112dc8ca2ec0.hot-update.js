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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L1VzZXJMaXN0LmpzeCJdLCJuYW1lcyI6WyJ1cmxVc2VycyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwicHJvcHMiLCJpc0xvYWRpbmciLCJ1c2VycyIsImVycm9yIiwiVXNlckxpc3QiLCJkaXNwYXRjaCIsImZldGNoVXNlcnMiLCJjb250ZW50IiwibWFwIiwibmFtZSIsImlkIiwicGF0aG5hbWUiLCJ1c2VySWQiLCJ1c2VyTmFtZSIsIkNvbXBvbmVudCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FJQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsNENBQWpCOztBQUVBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2pDLE1BQU1DLEtBQUssR0FBRztBQUNaQyxhQUFTLEVBQUVGLEtBQUssQ0FBQ0UsU0FETDtBQUVaQyxTQUFLLEVBQUVILEtBQUssQ0FBQ0csS0FGRDtBQUdaQyxTQUFLLEVBQUVKLEtBQUssQ0FBQ0k7QUFIRCxHQUFkO0FBS0EsU0FBT0gsS0FBUDtBQUNELENBUEQ7O0lBU01JLFE7Ozs7Ozs7Ozs7Ozs7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO3dDQUVvQjtBQUNsQixXQUFLSixLQUFMLENBQVdLLFFBQVgsQ0FBb0JDLDJEQUFVLEVBQTlCO0FBQ0QsSyxDQUVEO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7NkJBRVM7QUFBQSx3QkFDc0IsS0FBS04sS0FEM0I7QUFBQSxVQUNDQyxTQURELGVBQ0NBLFNBREQ7QUFBQSxVQUNZQyxLQURaLGVBQ1lBLEtBRFo7QUFFUCxVQUFJSyxPQUFPLEdBQUcsRUFBZDs7QUFFQSxVQUFJLENBQUNOLFNBQUwsRUFBZ0I7QUFDZE0sZUFBTyxHQUFHTCxLQUFLLENBQUNNLEdBQU4sQ0FBVTtBQUFBLGNBQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLGNBQVNDLEVBQVQsUUFBU0EsRUFBVDtBQUFBLGlCQUNsQiwyREFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBZ0IsZUFBRyxFQUFFQTtBQUFyQixhQUNFO0FBQUkscUJBQVMsRUFBQztBQUFkLGFBQ0UsMkRBQUMscURBQUQ7QUFDRSxjQUFFLEVBQUU7QUFDRkMsc0JBQVEsRUFBRSxRQURSO0FBRUZDLG9CQUFNLEVBQUVGLEVBRk47QUFHRkcsc0JBQVEsRUFBRUo7QUFIUixhQUROO0FBTUUscUJBQVMsRUFBQztBQU5aLGFBUUdBLElBUkgsQ0FERixDQURGLENBRGtCO0FBQUEsU0FBVixDQUFWO0FBZ0JELE9BakJELE1BaUJPO0FBQ0xGLGVBQU8sR0FBRyxtRkFBVjtBQUNEOztBQUVELGFBQ0Usd0hBQ0Usb0ZBREYsRUFFRTtBQUFJLGlCQUFTLEVBQUM7QUFBZCxTQUNHQSxPQURILENBRkYsQ0FERjtBQVNEOzs7O0VBaEVvQk8sK0M7O0FBbUVSQywwSEFBTyxDQUFDakIsZUFBRCxDQUFQLENBQXlCTSxRQUF6QixDQUFmLEUiLCJmaWxlIjoibWFpbi4xYTBlOTI4ZTExMmRjOGNhMmVjMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIsIExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCByZXF1ZXN0VXNlcnMsIHsgZmV0Y2hVc2VycyB9IGZyb20gJy4uL2FjdGlvbnMnO1xuXG4vLyBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCB1cmxVc2VycyA9ICdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgY29uc3QgcHJvcHMgPSB7XG4gICAgaXNMb2FkaW5nOiBzdGF0ZS5pc0xvYWRpbmcsXG4gICAgdXNlcnM6IHN0YXRlLnVzZXJzLFxuICAgIGVycm9yOiBzdGF0ZS5lcnJvcixcbiAgfTtcbiAgcmV0dXJuIHByb3BzO1xufTtcblxuY2xhc3MgVXNlckxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICAvLyBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAvLyAgIHN1cGVyKHByb3BzKTtcbiAgLy8gICB0aGlzLnN0YXRlID0ge1xuICAvLyAgICAgaXNMb2FkaW5nOiB0cnVlLFxuICAvLyAgICAgdXNlcnM6IFtdLFxuICAvLyAgICAgZXJyb3I6IG51bGwsXG4gIC8vICAgfTtcbiAgLy8gfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goZmV0Y2hVc2VycygpKTtcbiAgfVxuXG4gIC8vIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAvLyAgIHRoaXMuZmV0Y2hEYXRhKCk7XG4gIC8vIH1cblxuICAvLyBhc3luYyBmZXRjaERhdGEoKSB7XG4gIC8vICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQodXJsVXNlcnMpO1xuICAvLyAgIHRyeSB7XG4gIC8vICAgICB0aGlzLnNldFN0YXRlKHtcbiAgLy8gICAgICAgdXNlcnM6IHJlc3BvbnNlLmRhdGEsXG4gIC8vICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gIC8vICAgICB9KTtcbiAgLy8gICB9IGNhdGNoIChlcnJvcikge1xuICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yLCBpc0xvYWRpbmc6IGZhbHNlIH0pO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGlzTG9hZGluZywgdXNlcnMgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IGNvbnRlbnQgPSBbXTtcblxuICAgIGlmICghaXNMb2FkaW5nKSB7XG4gICAgICBjb250ZW50ID0gdXNlcnMubWFwKCh7IG5hbWUsIGlkIH0pID0+IChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aWR9PlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjb250ZW50X19pdGVtXCI+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICB0bz17e1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL3Bvc3RzJyxcbiAgICAgICAgICAgICAgICB1c2VySWQ6IGlkLFxuICAgICAgICAgICAgICAgIHVzZXJOYW1lOiBuYW1lLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250ZW50X19saW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZW50ID0gPHA+TG9hZGluZy4uLjwvcD47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxoMT4gVXNlciBsaXN0PC9oMT5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNvbnRlbnQgZmxleFwiPlxuICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICA8L3VsPlxuICAgICAgPC8+XG5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShVc2VyTGlzdCk7XG4iXSwic291cmNlUm9vdCI6IiJ9