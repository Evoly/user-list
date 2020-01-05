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
// import React from 'react';
// import PropTypes from 'prop-types';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import axios from 'axios';
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
    return fetch(urlUsers).then(function (response) {
      return response.json();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy5qc3giXSwibmFtZXMiOlsidXJsVXNlcnMiLCJSRVFVRVNUX1VTRVIiLCJSRVFVRVNUX1VTRVJfU1VDQ0VTUyIsIlJFUVVFU1RfVVNFUl9GQUlMVVJFIiwicmVxdWVzdFVzZXJzIiwidHlwZSIsImZldGNoVXNlcnNTdWNjZXNzIiwidXNlcnMiLCJwYXlsb2FkIiwiZmV0Y2hVc2Vyc0ZhaWx1cmUiLCJlcnJvciIsImZldGNoVXNlcnMiLCJkaXNwYXRjaCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJzaG91bGRGZXRjaFBvc3RzIiwic3RhdGUiLCJzdWJyZWRkaXQiLCJwb3N0cyIsInBvc3RzQnlTdWJyZWRkaXQiLCJpc0ZldGNoaW5nIiwiZGlkSW52YWxpZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsUUFBUSxHQUFHLDRDQUFqQjtBQUVPLElBQU1DLFlBQVksR0FBRyxjQUFyQjtBQUNBLElBQU1DLG9CQUFvQixHQUFHLHNCQUE3QjtBQUNBLElBQU1DLG9CQUFvQixHQUFHLHNCQUE3Qjs7QUFFUCxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLFNBQU87QUFDMUJDLFFBQUksRUFBRUo7QUFEb0IsR0FBUDtBQUFBLENBQXJCOztBQUllRywyRUFBZjtBQUVPLElBQU1FLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDM0NGLFFBQUksRUFBRUgsb0JBRHFDO0FBRTNDTSxXQUFPLEVBQUU7QUFBRUQsV0FBSyxFQUFMQTtBQUFGO0FBRmtDLEdBQVo7QUFBQSxDQUExQjtBQUtBLElBQU1FLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDM0NMLFFBQUksRUFBRUYsb0JBRHFDO0FBRTNDSyxXQUFPLEVBQUU7QUFBRUUsV0FBSyxFQUFMQTtBQUFGO0FBRmtDLEdBQVo7QUFBQSxDQUExQjtBQUtBLFNBQVNDLFVBQVQsQ0FBb0JKLEtBQXBCLEVBQTJCO0FBQ2hDLFNBQU8sVUFBQ0ssUUFBRCxFQUFjO0FBQ25CQSxZQUFRLENBQUNSLFlBQVksQ0FBQ0csS0FBRCxDQUFiLENBQVI7QUFDQSxXQUFPTSxLQUFLLENBQUNiLFFBQUQsQ0FBTCxDQUNKYyxJQURJLENBQ0MsVUFBQ0MsUUFBRDtBQUFBLGFBQWNBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFkO0FBQUEsS0FERCxFQUVKRixJQUZJLENBRUMsVUFBQ0UsSUFBRDtBQUFBLGFBQVVKLFFBQVEsQ0FBQ04saUJBQWlCLENBQUNDLEtBQUQsRUFBUVMsSUFBUixDQUFsQixDQUFsQjtBQUFBLEtBRkQsRUFHSkYsSUFISSxDQUdDO0FBQUEsYUFBTUcsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQlgsS0FBdEIsQ0FBTjtBQUFBLEtBSEQsQ0FBUDtBQUlELEdBTkQ7QUFPRDs7QUFDRCxTQUFTWSxnQkFBVCxDQUEwQkMsS0FBMUIsRUFBaUNDLFNBQWpDLEVBQTRDO0FBQzFDLE1BQU1DLEtBQUssR0FBR0YsS0FBSyxDQUFDRyxnQkFBTixDQUF1QkYsU0FBdkIsQ0FBZDs7QUFDQSxNQUFJLENBQUNDLEtBQUwsRUFBWTtBQUNWLFdBQU8sSUFBUDtBQUNELEdBRkQsTUFFTyxJQUFJQSxLQUFLLENBQUNFLFVBQVYsRUFBc0I7QUFDM0IsV0FBTyxLQUFQO0FBQ0QsR0FGTSxNQUVBO0FBQ0wsV0FBT0YsS0FBSyxDQUFDRyxhQUFiO0FBQ0Q7QUFDRixDIiwiZmlsZSI6Im1haW4uNDJkNzdkNmY4Y2U4Yzk3MTVmZWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuLy8gaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4Jztcbi8vIGltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuLy8gaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcblxuLy8gaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgdXJsVXNlcnMgPSAnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzJztcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfVVNFUiA9ICdSRVFVRVNUX1VTRVInO1xuZXhwb3J0IGNvbnN0IFJFUVVFU1RfVVNFUl9TVUNDRVNTID0gJ1JFUVVFU1RfVVNFUl9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBSRVFVRVNUX1VTRVJfRkFJTFVSRSA9ICdSRVFVRVNUX1VTRVJfRkFJTFVSRSc7XG5cbmNvbnN0IHJlcXVlc3RVc2VycyA9ICgpID0+ICh7XG4gIHR5cGU6IFJFUVVFU1RfVVNFUixcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0VXNlcnM7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFVzZXJzU3VjY2VzcyA9ICh1c2VycykgPT4gKHtcbiAgdHlwZTogUkVRVUVTVF9VU0VSX1NVQ0NFU1MsXG4gIHBheWxvYWQ6IHsgdXNlcnMgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hVc2Vyc0ZhaWx1cmUgPSAoZXJyb3IpID0+ICh7XG4gIHR5cGU6IFJFUVVFU1RfVVNFUl9GQUlMVVJFLFxuICBwYXlsb2FkOiB7IGVycm9yIH0sXG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoVXNlcnModXNlcnMpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RVc2Vycyh1c2VycykpO1xuICAgIHJldHVybiBmZXRjaCh1cmxVc2VycylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGpzb24pID0+IGRpc3BhdGNoKGZldGNoVXNlcnNTdWNjZXNzKHVzZXJzLCBqc29uKSkpXG4gICAgICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygndWVzZXJzJywgdXNlcnMpKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIHNob3VsZEZldGNoUG9zdHMoc3RhdGUsIHN1YnJlZGRpdCkge1xuICBjb25zdCBwb3N0cyA9IHN0YXRlLnBvc3RzQnlTdWJyZWRkaXRbc3VicmVkZGl0XVxuICBpZiAoIXBvc3RzKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfSBlbHNlIGlmIChwb3N0cy5pc0ZldGNoaW5nKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHBvc3RzLmRpZEludmFsaWRhdGVcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==