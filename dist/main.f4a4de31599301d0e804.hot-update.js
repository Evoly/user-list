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
    }).then(function (response) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy5qc3giXSwibmFtZXMiOlsidXJsVXNlcnMiLCJSRVFVRVNUX1VTRVIiLCJSRVFVRVNUX1VTRVJfU1VDQ0VTUyIsIlJFUVVFU1RfVVNFUl9GQUlMVVJFIiwicmVxdWVzdFVzZXJzIiwidHlwZSIsImZldGNoVXNlcnNTdWNjZXNzIiwidXNlcnMiLCJwYXlsb2FkIiwiZmV0Y2hVc2Vyc0ZhaWx1cmUiLCJlcnJvciIsImZldGNoVXNlcnMiLCJkaXNwYXRjaCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzaG91bGRGZXRjaFBvc3RzIiwic3RhdGUiLCJzdWJyZWRkaXQiLCJwb3N0cyIsInBvc3RzQnlTdWJyZWRkaXQiLCJpc0ZldGNoaW5nIiwiZGlkSW52YWxpZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLFFBQVEsR0FBRyw0Q0FBakI7QUFFTyxJQUFNQyxZQUFZLEdBQUcsY0FBckI7QUFDQSxJQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxJQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7O0FBRVAsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxTQUFPO0FBQzFCQyxRQUFJLEVBQUVKO0FBRG9CLEdBQVA7QUFBQSxDQUFyQjs7QUFJZUcsMkVBQWY7QUFFTyxJQUFNRSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQzNDRixRQUFJLEVBQUVILG9CQURxQztBQUUzQ00sV0FBTyxFQUFFO0FBQUVELFdBQUssRUFBTEE7QUFBRjtBQUZrQyxHQUFaO0FBQUEsQ0FBMUI7QUFLQSxJQUFNRSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQzNDTCxRQUFJLEVBQUVGLG9CQURxQztBQUUzQ0ssV0FBTyxFQUFFO0FBQUVFLFdBQUssRUFBTEE7QUFBRjtBQUZrQyxHQUFaO0FBQUEsQ0FBMUI7QUFLQSxTQUFTQyxVQUFULENBQW9CSixLQUFwQixFQUEyQjtBQUNoQyxTQUFPLFVBQUNLLFFBQUQsRUFBYztBQUNuQkEsWUFBUSxDQUFDUixZQUFZLENBQUNHLEtBQUQsQ0FBYixDQUFSO0FBQ0EsV0FBT00sNENBQUssQ0FBQ0MsR0FBTixDQUFVZCxRQUFWLEVBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFKSyxLQUtKZSxJQUxJLENBS0MsVUFBQ0MsUUFBRDtBQUFBLGFBQWNKLFFBQVEsQ0FBQ04saUJBQWlCLENBQUNVLFFBQVEsQ0FBQ0MsSUFBVixDQUFsQixDQUF0QjtBQUFBLEtBTEQsRUFNSkYsSUFOSSxDQU1DLFVBQUNDLFFBQUQ7QUFBQSxhQUFjRSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCSCxRQUFRLENBQUNDLElBQS9CLENBQWQ7QUFBQSxLQU5ELENBQVA7QUFPRCxHQVREO0FBVUQ7O0FBQ0QsU0FBU0csZ0JBQVQsQ0FBMEJDLEtBQTFCLEVBQWlDQyxTQUFqQyxFQUE0QztBQUMxQyxNQUFNQyxLQUFLLEdBQUdGLEtBQUssQ0FBQ0csZ0JBQU4sQ0FBdUJGLFNBQXZCLENBQWQ7O0FBQ0EsTUFBSSxDQUFDQyxLQUFMLEVBQVk7QUFDVixXQUFPLElBQVA7QUFDRCxHQUZELE1BRU8sSUFBSUEsS0FBSyxDQUFDRSxVQUFWLEVBQXNCO0FBQzNCLFdBQU8sS0FBUDtBQUNELEdBRk0sTUFFQTtBQUNMLFdBQU9GLEtBQUssQ0FBQ0csYUFBYjtBQUNEO0FBQ0YsQyIsImZpbGUiOiJtYWluLmY0YTRkZTMxNTk5MzAxZDBlODA0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbi8vIGltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG4vLyBpbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4Jztcbi8vIGltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IHVybFVzZXJzID0gJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycyc7XG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX1VTRVIgPSAnUkVRVUVTVF9VU0VSJztcbmV4cG9ydCBjb25zdCBSRVFVRVNUX1VTRVJfU1VDQ0VTUyA9ICdSRVFVRVNUX1VTRVJfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgUkVRVUVTVF9VU0VSX0ZBSUxVUkUgPSAnUkVRVUVTVF9VU0VSX0ZBSUxVUkUnO1xuXG5jb25zdCByZXF1ZXN0VXNlcnMgPSAoKSA9PiAoe1xuICB0eXBlOiBSRVFVRVNUX1VTRVIsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdFVzZXJzO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hVc2Vyc1N1Y2Nlc3MgPSAodXNlcnMpID0+ICh7XG4gIHR5cGU6IFJFUVVFU1RfVVNFUl9TVUNDRVNTLFxuICBwYXlsb2FkOiB7IHVzZXJzIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoVXNlcnNGYWlsdXJlID0gKGVycm9yKSA9PiAoe1xuICB0eXBlOiBSRVFVRVNUX1VTRVJfRkFJTFVSRSxcbiAgcGF5bG9hZDogeyBlcnJvciB9LFxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFVzZXJzKHVzZXJzKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0VXNlcnModXNlcnMpKTtcbiAgICByZXR1cm4gYXhpb3MuZ2V0KHVybFVzZXJzKVxuICAgICAgLy8gLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKCdyZXNwb25zZScsIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgLy8gICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgIC8vIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IGRpc3BhdGNoKGZldGNoVXNlcnNTdWNjZXNzKHJlc3BvbnNlLmRhdGEpKSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gY29uc29sZS5sb2coJ3Vlc2VycycsIHJlc3BvbnNlLmRhdGEpKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIHNob3VsZEZldGNoUG9zdHMoc3RhdGUsIHN1YnJlZGRpdCkge1xuICBjb25zdCBwb3N0cyA9IHN0YXRlLnBvc3RzQnlTdWJyZWRkaXRbc3VicmVkZGl0XVxuICBpZiAoIXBvc3RzKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfSBlbHNlIGlmIChwb3N0cy5pc0ZldGNoaW5nKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHBvc3RzLmRpZEludmFsaWRhdGVcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==