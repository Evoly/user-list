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
// import React from 'react';
// import PropTypes from 'prop-types';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';

var urlUsers = 'https://jsonplaceholder.typicode.com/users';
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
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(urlUsers).then(function (response) {
      console.log('response', response.data);
      return response.data.json();
    }).then(function (json) {
      return dispatch(fetchUsersSuccess(users, json));
    }).then(function () {
      return console.log('uesers', users);
    });
  };
}

function shouldFetchPosts(state, subreddit) {
  var posts = state.postsBySubreddit[subreddit];

  if (!posts) {
    return true;
  } else if (posts.isFetching) {
    return false;
  } else {
    return posts.didInvalidate;
  }
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy5qc3giXSwibmFtZXMiOlsidXJsVXNlcnMiLCJSRVFVRVNUX1VTRVIiLCJSRVFVRVNUX1VTRVJfU1VDQ0VTUyIsIlJFUVVFU1RfVVNFUl9GQUlMVVJFIiwicmVxdWVzdFVzZXJzIiwidHlwZSIsImZldGNoVXNlcnNTdWNjZXNzIiwidXNlcnMiLCJwYXlsb2FkIiwiZmV0Y2hVc2Vyc0ZhaWx1cmUiLCJlcnJvciIsImZldGNoVXNlcnMiLCJkaXNwYXRjaCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJqc29uIiwic2hvdWxkRmV0Y2hQb3N0cyIsInN0YXRlIiwic3VicmVkZGl0IiwicG9zdHMiLCJwb3N0c0J5U3VicmVkZGl0IiwiaXNGZXRjaGluZyIsImRpZEludmFsaWRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxRQUFRLEdBQUcsNENBQWpCO0FBRU8sSUFBTUMsWUFBWSxHQUFHLGNBQXJCO0FBQ0EsSUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsSUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCOztBQUVQLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsU0FBTztBQUMxQkMsUUFBSSxFQUFFSjtBQURvQixHQUFQO0FBQUEsQ0FBckI7O0FBSWVHLDJFQUFmO0FBRU8sSUFBTUUsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUMzQ0YsUUFBSSxFQUFFSCxvQkFEcUM7QUFFM0NNLFdBQU8sRUFBRTtBQUFFRCxXQUFLLEVBQUxBO0FBQUY7QUFGa0MsR0FBWjtBQUFBLENBQTFCO0FBS0EsSUFBTUUsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUMzQ0wsUUFBSSxFQUFFRixvQkFEcUM7QUFFM0NLLFdBQU8sRUFBRTtBQUFFRSxXQUFLLEVBQUxBO0FBQUY7QUFGa0MsR0FBWjtBQUFBLENBQTFCO0FBS0EsU0FBU0MsVUFBVCxDQUFvQkosS0FBcEIsRUFBMkI7QUFDaEMsU0FBTyxVQUFDSyxRQUFELEVBQWM7QUFDbkJBLFlBQVEsQ0FBQ1IsWUFBWSxDQUFDRyxLQUFELENBQWIsQ0FBUjtBQUNBLFdBQU9NLDRDQUFLLENBQUNDLEdBQU4sQ0FBVWQsUUFBVixFQUNKZSxJQURJLENBQ0MsVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCRixRQUFRLENBQUNHLElBQWpDO0FBQ0EsYUFBT0gsUUFBUSxDQUFDRyxJQUFULENBQWNDLElBQWQsRUFBUDtBQUNELEtBSkksRUFLSkwsSUFMSSxDQUtDLFVBQUNLLElBQUQ7QUFBQSxhQUFVUixRQUFRLENBQUNOLGlCQUFpQixDQUFDQyxLQUFELEVBQVFhLElBQVIsQ0FBbEIsQ0FBbEI7QUFBQSxLQUxELEVBTUpMLElBTkksQ0FNQztBQUFBLGFBQU1FLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JYLEtBQXRCLENBQU47QUFBQSxLQU5ELENBQVA7QUFPRCxHQVREO0FBVUQ7O0FBQ0QsU0FBU2MsZ0JBQVQsQ0FBMEJDLEtBQTFCLEVBQWlDQyxTQUFqQyxFQUE0QztBQUMxQyxNQUFNQyxLQUFLLEdBQUdGLEtBQUssQ0FBQ0csZ0JBQU4sQ0FBdUJGLFNBQXZCLENBQWQ7O0FBQ0EsTUFBSSxDQUFDQyxLQUFMLEVBQVk7QUFDVixXQUFPLElBQVA7QUFDRCxHQUZELE1BRU8sSUFBSUEsS0FBSyxDQUFDRSxVQUFWLEVBQXNCO0FBQzNCLFdBQU8sS0FBUDtBQUNELEdBRk0sTUFFQTtBQUNMLFdBQU9GLEtBQUssQ0FBQ0csYUFBYjtBQUNEO0FBQ0YsQyIsImZpbGUiOiJtYWluLmNmYzc5M2M5ZjVhMGNmNTkxMTJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbi8vIGltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG4vLyBpbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4Jztcbi8vIGltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IHVybFVzZXJzID0gJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycyc7XG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX1VTRVIgPSAnUkVRVUVTVF9VU0VSJztcbmV4cG9ydCBjb25zdCBSRVFVRVNUX1VTRVJfU1VDQ0VTUyA9ICdSRVFVRVNUX1VTRVJfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgUkVRVUVTVF9VU0VSX0ZBSUxVUkUgPSAnUkVRVUVTVF9VU0VSX0ZBSUxVUkUnO1xuXG5jb25zdCByZXF1ZXN0VXNlcnMgPSAoKSA9PiAoe1xuICB0eXBlOiBSRVFVRVNUX1VTRVIsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdFVzZXJzO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hVc2Vyc1N1Y2Nlc3MgPSAodXNlcnMpID0+ICh7XG4gIHR5cGU6IFJFUVVFU1RfVVNFUl9TVUNDRVNTLFxuICBwYXlsb2FkOiB7IHVzZXJzIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoVXNlcnNGYWlsdXJlID0gKGVycm9yKSA9PiAoe1xuICB0eXBlOiBSRVFVRVNUX1VTRVJfRkFJTFVSRSxcbiAgcGF5bG9hZDogeyBlcnJvciB9LFxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFVzZXJzKHVzZXJzKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0VXNlcnModXNlcnMpKTtcbiAgICByZXR1cm4gYXhpb3MuZ2V0KHVybFVzZXJzKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXNwb25zZScsIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5qc29uKCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKGpzb24pID0+IGRpc3BhdGNoKGZldGNoVXNlcnNTdWNjZXNzKHVzZXJzLCBqc29uKSkpXG4gICAgICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygndWVzZXJzJywgdXNlcnMpKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIHNob3VsZEZldGNoUG9zdHMoc3RhdGUsIHN1YnJlZGRpdCkge1xuICBjb25zdCBwb3N0cyA9IHN0YXRlLnBvc3RzQnlTdWJyZWRkaXRbc3VicmVkZGl0XVxuICBpZiAoIXBvc3RzKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfSBlbHNlIGlmIChwb3N0cy5pc0ZldGNoaW5nKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHBvc3RzLmRpZEludmFsaWRhdGVcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==