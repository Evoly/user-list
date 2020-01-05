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
      console.log('response', response);
      return response.name.json();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy5qc3giXSwibmFtZXMiOlsidXJsVXNlcnMiLCJSRVFVRVNUX1VTRVIiLCJSRVFVRVNUX1VTRVJfU1VDQ0VTUyIsIlJFUVVFU1RfVVNFUl9GQUlMVVJFIiwicmVxdWVzdFVzZXJzIiwidHlwZSIsImZldGNoVXNlcnNTdWNjZXNzIiwidXNlcnMiLCJwYXlsb2FkIiwiZmV0Y2hVc2Vyc0ZhaWx1cmUiLCJlcnJvciIsImZldGNoVXNlcnMiLCJkaXNwYXRjaCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJqc29uIiwic2hvdWxkRmV0Y2hQb3N0cyIsInN0YXRlIiwic3VicmVkZGl0IiwicG9zdHMiLCJwb3N0c0J5U3VicmVkZGl0IiwiaXNGZXRjaGluZyIsImRpZEludmFsaWRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLFFBQVEsR0FBRyw0Q0FBakI7QUFFTyxJQUFNQyxZQUFZLEdBQUcsY0FBckI7QUFDQSxJQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxJQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7O0FBRVAsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxTQUFPO0FBQzFCQyxRQUFJLEVBQUVKO0FBRG9CLEdBQVA7QUFBQSxDQUFyQjs7QUFJZUcsMkVBQWY7QUFFTyxJQUFNRSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQzNDRixRQUFJLEVBQUVILG9CQURxQztBQUUzQ00sV0FBTyxFQUFFO0FBQUVELFdBQUssRUFBTEE7QUFBRjtBQUZrQyxHQUFaO0FBQUEsQ0FBMUI7QUFLQSxJQUFNRSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQzNDTCxRQUFJLEVBQUVGLG9CQURxQztBQUUzQ0ssV0FBTyxFQUFFO0FBQUVFLFdBQUssRUFBTEE7QUFBRjtBQUZrQyxHQUFaO0FBQUEsQ0FBMUI7QUFLQSxTQUFTQyxVQUFULENBQW9CSixLQUFwQixFQUEyQjtBQUNoQyxTQUFPLFVBQUNLLFFBQUQsRUFBYztBQUNuQkEsWUFBUSxDQUFDUixZQUFZLENBQUNHLEtBQUQsQ0FBYixDQUFSO0FBQ0EsV0FBT00sS0FBSyxDQUFDYixRQUFELENBQUwsQ0FDSmMsSUFESSxDQUNDLFVBQUNDLFFBQUQsRUFBYztBQUNsQkMsYUFBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QkYsUUFBeEI7QUFDQSxhQUFPQSxRQUFRLENBQUNHLElBQVQsQ0FBY0MsSUFBZCxFQUFQO0FBQ0QsS0FKSSxFQUtKTCxJQUxJLENBS0MsVUFBQ0ssSUFBRDtBQUFBLGFBQVVQLFFBQVEsQ0FBQ04saUJBQWlCLENBQUNDLEtBQUQsRUFBUVksSUFBUixDQUFsQixDQUFsQjtBQUFBLEtBTEQsRUFNSkwsSUFOSSxDQU1DO0FBQUEsYUFBTUUsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQlYsS0FBdEIsQ0FBTjtBQUFBLEtBTkQsQ0FBUDtBQU9ELEdBVEQ7QUFVRDs7QUFDRCxTQUFTYSxnQkFBVCxDQUEwQkMsS0FBMUIsRUFBaUNDLFNBQWpDLEVBQTRDO0FBQzFDLE1BQU1DLEtBQUssR0FBR0YsS0FBSyxDQUFDRyxnQkFBTixDQUF1QkYsU0FBdkIsQ0FBZDs7QUFDQSxNQUFJLENBQUNDLEtBQUwsRUFBWTtBQUNWLFdBQU8sSUFBUDtBQUNELEdBRkQsTUFFTyxJQUFJQSxLQUFLLENBQUNFLFVBQVYsRUFBc0I7QUFDM0IsV0FBTyxLQUFQO0FBQ0QsR0FGTSxNQUVBO0FBQ0wsV0FBT0YsS0FBSyxDQUFDRyxhQUFiO0FBQ0Q7QUFDRixDIiwiZmlsZSI6Im1haW4uZWJmNjEyYjAzNmQ1YzI0Nzk1MTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuLy8gaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4Jztcbi8vIGltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuLy8gaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcblxuLy8gaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgdXJsVXNlcnMgPSAnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzJztcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfVVNFUiA9ICdSRVFVRVNUX1VTRVInO1xuZXhwb3J0IGNvbnN0IFJFUVVFU1RfVVNFUl9TVUNDRVNTID0gJ1JFUVVFU1RfVVNFUl9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBSRVFVRVNUX1VTRVJfRkFJTFVSRSA9ICdSRVFVRVNUX1VTRVJfRkFJTFVSRSc7XG5cbmNvbnN0IHJlcXVlc3RVc2VycyA9ICgpID0+ICh7XG4gIHR5cGU6IFJFUVVFU1RfVVNFUixcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0VXNlcnM7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFVzZXJzU3VjY2VzcyA9ICh1c2VycykgPT4gKHtcbiAgdHlwZTogUkVRVUVTVF9VU0VSX1NVQ0NFU1MsXG4gIHBheWxvYWQ6IHsgdXNlcnMgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hVc2Vyc0ZhaWx1cmUgPSAoZXJyb3IpID0+ICh7XG4gIHR5cGU6IFJFUVVFU1RfVVNFUl9GQUlMVVJFLFxuICBwYXlsb2FkOiB7IGVycm9yIH0sXG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoVXNlcnModXNlcnMpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RVc2Vycyh1c2VycykpO1xuICAgIHJldHVybiBmZXRjaCh1cmxVc2VycylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncmVzcG9uc2UnLCByZXNwb25zZSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5uYW1lLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoanNvbikgPT4gZGlzcGF0Y2goZmV0Y2hVc2Vyc1N1Y2Nlc3ModXNlcnMsIGpzb24pKSlcbiAgICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKCd1ZXNlcnMnLCB1c2VycykpO1xuICB9O1xufVxuZnVuY3Rpb24gc2hvdWxkRmV0Y2hQb3N0cyhzdGF0ZSwgc3VicmVkZGl0KSB7XG4gIGNvbnN0IHBvc3RzID0gc3RhdGUucG9zdHNCeVN1YnJlZGRpdFtzdWJyZWRkaXRdXG4gIGlmICghcG9zdHMpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9IGVsc2UgaWYgKHBvc3RzLmlzRmV0Y2hpbmcpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcG9zdHMuZGlkSW52YWxpZGF0ZVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9