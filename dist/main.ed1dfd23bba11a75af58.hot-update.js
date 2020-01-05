webpackHotUpdate("main",{

/***/ "./src/actions.jsx":
/*!*************************!*\
  !*** ./src/actions.jsx ***!
  \*************************/
/*! exports provided: REQUEST_USER, REQUEST_USER_SUCCESS, REQUEST_USER_FAILURE, default, fetchUsersSuccess, fetchUsersFailure, fetchUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_USER", function() { return REQUEST_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_USER_SUCCESS", function() { return REQUEST_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_USER_FAILURE", function() { return REQUEST_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsersSuccess", function() { return fetchUsersSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsersFailure", function() { return fetchUsersFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsers", function() { return fetchUsers; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var urlUsers = 'https://jsonplaceholder.typicode.com/use';
var REQUEST_USER = 'REQUEST_USER';
var REQUEST_USER_SUCCESS = 'REQUEST_USER_SUCCESS';
var REQUEST_USER_FAILURE = 'REQUEST_USER_FAILURE';

var requestUsers = function requestUsers() {
  return {
    type: REQUEST_USER
  };
};

/* harmony default export */ __webpack_exports__["default"] = (requestUsers);
var fetchUsersSuccess = function fetchUsersSuccess(users) {
  return {
    type: REQUEST_USER_SUCCESS,
    payload: {
      users: users
    }
  };
};
var fetchUsersFailure = function fetchUsersFailure(error) {
  return {
    type: REQUEST_USER_FAILURE,
    payload: {
      error: error
    }
  };
};
function fetchUsers(users) {
  return function (dispatch) {
    dispatch(requestUsers(users));
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(urlUsers) // .then((response) => {
    //   console.log('response', response.data);
    //   return response.data;
    // })
    .then(function (response) {
      return dispatch(fetchUsersSuccess(response.data));
    }).then(function (response) {
      return console.log('uesers', response.data);
    });
  };
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy5qc3giXSwibmFtZXMiOlsidXJsVXNlcnMiLCJSRVFVRVNUX1VTRVIiLCJSRVFVRVNUX1VTRVJfU1VDQ0VTUyIsIlJFUVVFU1RfVVNFUl9GQUlMVVJFIiwicmVxdWVzdFVzZXJzIiwidHlwZSIsImZldGNoVXNlcnNTdWNjZXNzIiwidXNlcnMiLCJwYXlsb2FkIiwiZmV0Y2hVc2Vyc0ZhaWx1cmUiLCJlcnJvciIsImZldGNoVXNlcnMiLCJkaXNwYXRjaCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLElBQU1BLFFBQVEsR0FBRywwQ0FBakI7QUFFTyxJQUFNQyxZQUFZLEdBQUcsY0FBckI7QUFDQSxJQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxJQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7O0FBRVAsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxTQUFPO0FBQzFCQyxRQUFJLEVBQUVKO0FBRG9CLEdBQVA7QUFBQSxDQUFyQjs7QUFJZUcsMkVBQWY7QUFFTyxJQUFNRSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQzNDRixRQUFJLEVBQUVILG9CQURxQztBQUUzQ00sV0FBTyxFQUFFO0FBQUVELFdBQUssRUFBTEE7QUFBRjtBQUZrQyxHQUFaO0FBQUEsQ0FBMUI7QUFLQSxJQUFNRSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQzNDTCxRQUFJLEVBQUVGLG9CQURxQztBQUUzQ0ssV0FBTyxFQUFFO0FBQUVFLFdBQUssRUFBTEE7QUFBRjtBQUZrQyxHQUFaO0FBQUEsQ0FBMUI7QUFLQSxTQUFTQyxVQUFULENBQW9CSixLQUFwQixFQUEyQjtBQUNoQyxTQUFPLFVBQUNLLFFBQUQsRUFBYztBQUNuQkEsWUFBUSxDQUFDUixZQUFZLENBQUNHLEtBQUQsQ0FBYixDQUFSO0FBQ0EsV0FBT00sNENBQUssQ0FBQ0MsR0FBTixDQUFVZCxRQUFWLEVBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFKSyxLQUtKZSxJQUxJLENBS0MsVUFBQ0MsUUFBRDtBQUFBLGFBQWNKLFFBQVEsQ0FBQ04saUJBQWlCLENBQUNVLFFBQVEsQ0FBQ0MsSUFBVixDQUFsQixDQUF0QjtBQUFBLEtBTEQsRUFNSkYsSUFOSSxDQU1DLFVBQUNDLFFBQUQ7QUFBQSxhQUFjRSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCSCxRQUFRLENBQUNDLElBQS9CLENBQWQ7QUFBQSxLQU5ELENBQVA7QUFPRCxHQVREO0FBVUQsQyIsImZpbGUiOiJtYWluLmVkMWRmZDIzYmJhMTFhNzVhZjU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCB1cmxVc2VycyA9ICdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlJztcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfVVNFUiA9ICdSRVFVRVNUX1VTRVInO1xuZXhwb3J0IGNvbnN0IFJFUVVFU1RfVVNFUl9TVUNDRVNTID0gJ1JFUVVFU1RfVVNFUl9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBSRVFVRVNUX1VTRVJfRkFJTFVSRSA9ICdSRVFVRVNUX1VTRVJfRkFJTFVSRSc7XG5cbmNvbnN0IHJlcXVlc3RVc2VycyA9ICgpID0+ICh7XG4gIHR5cGU6IFJFUVVFU1RfVVNFUixcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0VXNlcnM7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFVzZXJzU3VjY2VzcyA9ICh1c2VycykgPT4gKHtcbiAgdHlwZTogUkVRVUVTVF9VU0VSX1NVQ0NFU1MsXG4gIHBheWxvYWQ6IHsgdXNlcnMgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hVc2Vyc0ZhaWx1cmUgPSAoZXJyb3IpID0+ICh7XG4gIHR5cGU6IFJFUVVFU1RfVVNFUl9GQUlMVVJFLFxuICBwYXlsb2FkOiB7IGVycm9yIH0sXG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoVXNlcnModXNlcnMpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RVc2Vycyh1c2VycykpO1xuICAgIHJldHVybiBheGlvcy5nZXQodXJsVXNlcnMpXG4gICAgICAvLyAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIC8vICAgY29uc29sZS5sb2coJ3Jlc3BvbnNlJywgcmVzcG9uc2UuZGF0YSk7XG4gICAgICAvLyAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgLy8gfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gZGlzcGF0Y2goZmV0Y2hVc2Vyc1N1Y2Nlc3MocmVzcG9uc2UuZGF0YSkpKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBjb25zb2xlLmxvZygndWVzZXJzJywgcmVzcG9uc2UuZGF0YSkpO1xuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==