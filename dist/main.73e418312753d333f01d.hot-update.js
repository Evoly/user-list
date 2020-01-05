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
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(urlUsers) // .then((response) => {
    //   console.log('response', response.data);
    //   return response.data;
    // })
    .then(function (response) {
      return dispatch(fetchUsersSuccess(response.data));
    }).then(function () {
      return console.log('uesers', response.data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy5qc3giXSwibmFtZXMiOlsidXJsVXNlcnMiLCJSRVFVRVNUX1VTRVIiLCJSRVFVRVNUX1VTRVJfU1VDQ0VTUyIsIlJFUVVFU1RfVVNFUl9GQUlMVVJFIiwicmVxdWVzdFVzZXJzIiwidHlwZSIsImZldGNoVXNlcnNTdWNjZXNzIiwidXNlcnMiLCJwYXlsb2FkIiwiZmV0Y2hVc2Vyc0ZhaWx1cmUiLCJlcnJvciIsImZldGNoVXNlcnMiLCJkaXNwYXRjaCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzaG91bGRGZXRjaFBvc3RzIiwic3RhdGUiLCJzdWJyZWRkaXQiLCJwb3N0cyIsInBvc3RzQnlTdWJyZWRkaXQiLCJpc0ZldGNoaW5nIiwiZGlkSW52YWxpZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLFFBQVEsR0FBRyw0Q0FBakI7QUFFTyxJQUFNQyxZQUFZLEdBQUcsY0FBckI7QUFDQSxJQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxJQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7O0FBRVAsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxTQUFPO0FBQzFCQyxRQUFJLEVBQUVKO0FBRG9CLEdBQVA7QUFBQSxDQUFyQjs7QUFJZUcsMkVBQWY7QUFFTyxJQUFNRSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQzNDRixRQUFJLEVBQUVILG9CQURxQztBQUUzQ00sV0FBTyxFQUFFO0FBQUVELFdBQUssRUFBTEE7QUFBRjtBQUZrQyxHQUFaO0FBQUEsQ0FBMUI7QUFLQSxJQUFNRSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQzNDTCxRQUFJLEVBQUVGLG9CQURxQztBQUUzQ0ssV0FBTyxFQUFFO0FBQUVFLFdBQUssRUFBTEE7QUFBRjtBQUZrQyxHQUFaO0FBQUEsQ0FBMUI7QUFLQSxTQUFTQyxVQUFULENBQW9CSixLQUFwQixFQUEyQjtBQUNoQyxTQUFPLFVBQUNLLFFBQUQsRUFBYztBQUNuQkEsWUFBUSxDQUFDUixZQUFZLENBQUNHLEtBQUQsQ0FBYixDQUFSO0FBQ0EsV0FBT00sNENBQUssQ0FBQ0MsR0FBTixDQUFVZCxRQUFWLEVBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFKSyxLQUtKZSxJQUxJLENBS0MsVUFBQ0MsUUFBRDtBQUFBLGFBQWNKLFFBQVEsQ0FBQ04saUJBQWlCLENBQUNVLFFBQVEsQ0FBQ0MsSUFBVixDQUFsQixDQUF0QjtBQUFBLEtBTEQsRUFNSkYsSUFOSSxDQU1DO0FBQUEsYUFBTUcsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQkgsUUFBUSxDQUFDQyxJQUEvQixDQUFOO0FBQUEsS0FORCxDQUFQO0FBT0QsR0FURDtBQVVEOztBQUNELFNBQVNHLGdCQUFULENBQTBCQyxLQUExQixFQUFpQ0MsU0FBakMsRUFBNEM7QUFDMUMsTUFBTUMsS0FBSyxHQUFHRixLQUFLLENBQUNHLGdCQUFOLENBQXVCRixTQUF2QixDQUFkOztBQUNBLE1BQUksQ0FBQ0MsS0FBTCxFQUFZO0FBQ1YsV0FBTyxJQUFQO0FBQ0QsR0FGRCxNQUVPLElBQUlBLEtBQUssQ0FBQ0UsVUFBVixFQUFzQjtBQUMzQixXQUFPLEtBQVA7QUFDRCxHQUZNLE1BRUE7QUFDTCxXQUFPRixLQUFLLENBQUNHLGFBQWI7QUFDRDtBQUNGLEMiLCJmaWxlIjoibWFpbi43M2U0MTgzMTI3NTNkMzMzZjAxZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG4vLyBpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xuLy8gaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG4vLyBpbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCB1cmxVc2VycyA9ICdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMnO1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9VU0VSID0gJ1JFUVVFU1RfVVNFUic7XG5leHBvcnQgY29uc3QgUkVRVUVTVF9VU0VSX1NVQ0NFU1MgPSAnUkVRVUVTVF9VU0VSX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IFJFUVVFU1RfVVNFUl9GQUlMVVJFID0gJ1JFUVVFU1RfVVNFUl9GQUlMVVJFJztcblxuY29uc3QgcmVxdWVzdFVzZXJzID0gKCkgPT4gKHtcbiAgdHlwZTogUkVRVUVTVF9VU0VSLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3RVc2VycztcblxuZXhwb3J0IGNvbnN0IGZldGNoVXNlcnNTdWNjZXNzID0gKHVzZXJzKSA9PiAoe1xuICB0eXBlOiBSRVFVRVNUX1VTRVJfU1VDQ0VTUyxcbiAgcGF5bG9hZDogeyB1c2VycyB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFVzZXJzRmFpbHVyZSA9IChlcnJvcikgPT4gKHtcbiAgdHlwZTogUkVRVUVTVF9VU0VSX0ZBSUxVUkUsXG4gIHBheWxvYWQ6IHsgZXJyb3IgfSxcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hVc2Vycyh1c2Vycykge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdFVzZXJzKHVzZXJzKSk7XG4gICAgcmV0dXJuIGF4aW9zLmdldCh1cmxVc2VycylcbiAgICAgIC8vIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgLy8gICBjb25zb2xlLmxvZygncmVzcG9uc2UnLCByZXNwb25zZS5kYXRhKTtcbiAgICAgIC8vICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAvLyB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBkaXNwYXRjaChmZXRjaFVzZXJzU3VjY2VzcyhyZXNwb25zZS5kYXRhKSkpXG4gICAgICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygndWVzZXJzJywgcmVzcG9uc2UuZGF0YSkpO1xuICB9O1xufVxuZnVuY3Rpb24gc2hvdWxkRmV0Y2hQb3N0cyhzdGF0ZSwgc3VicmVkZGl0KSB7XG4gIGNvbnN0IHBvc3RzID0gc3RhdGUucG9zdHNCeVN1YnJlZGRpdFtzdWJyZWRkaXRdXG4gIGlmICghcG9zdHMpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9IGVsc2UgaWYgKHBvc3RzLmlzRmV0Y2hpbmcpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcG9zdHMuZGlkSW52YWxpZGF0ZVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9