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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy5qc3giXSwibmFtZXMiOlsidXJsVXNlcnMiLCJSRVFVRVNUX1VTRVIiLCJSRVFVRVNUX1VTRVJfU1VDQ0VTUyIsIlJFUVVFU1RfVVNFUl9GQUlMVVJFIiwicmVxdWVzdFVzZXJzIiwidHlwZSIsImZldGNoVXNlcnNTdWNjZXNzIiwidXNlcnMiLCJwYXlsb2FkIiwiZmV0Y2hVc2Vyc0ZhaWx1cmUiLCJlcnJvciIsImZldGNoVXNlcnMiLCJkaXNwYXRjaCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJuYW1lIiwianNvbiIsInNob3VsZEZldGNoUG9zdHMiLCJzdGF0ZSIsInN1YnJlZGRpdCIsInBvc3RzIiwicG9zdHNCeVN1YnJlZGRpdCIsImlzRmV0Y2hpbmciLCJkaWRJbnZhbGlkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsUUFBUSxHQUFHLDRDQUFqQjtBQUVPLElBQU1DLFlBQVksR0FBRyxjQUFyQjtBQUNBLElBQU1DLG9CQUFvQixHQUFHLHNCQUE3QjtBQUNBLElBQU1DLG9CQUFvQixHQUFHLHNCQUE3Qjs7QUFFUCxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLFNBQU87QUFDMUJDLFFBQUksRUFBRUo7QUFEb0IsR0FBUDtBQUFBLENBQXJCOztBQUllRywyRUFBZjtBQUVPLElBQU1FLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDM0NGLFFBQUksRUFBRUgsb0JBRHFDO0FBRTNDTSxXQUFPLEVBQUU7QUFBRUQsV0FBSyxFQUFMQTtBQUFGO0FBRmtDLEdBQVo7QUFBQSxDQUExQjtBQUtBLElBQU1FLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDM0NMLFFBQUksRUFBRUYsb0JBRHFDO0FBRTNDSyxXQUFPLEVBQUU7QUFBRUUsV0FBSyxFQUFMQTtBQUFGO0FBRmtDLEdBQVo7QUFBQSxDQUExQjtBQUtBLFNBQVNDLFVBQVQsQ0FBb0JKLEtBQXBCLEVBQTJCO0FBQ2hDLFNBQU8sVUFBQ0ssUUFBRCxFQUFjO0FBQ25CQSxZQUFRLENBQUNSLFlBQVksQ0FBQ0csS0FBRCxDQUFiLENBQVI7QUFDQSxXQUFPTSw0Q0FBSyxDQUFDQyxHQUFOLENBQVVkLFFBQVYsRUFDSmUsSUFESSxDQUNDLFVBQUNDLFFBQUQsRUFBYztBQUNsQkMsYUFBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QkYsUUFBUSxDQUFDRyxJQUFqQztBQUNBLGFBQU9ILFFBQVEsQ0FBQ0ksSUFBVCxDQUFjQyxJQUFkLEVBQVA7QUFDRCxLQUpJLEVBS0pOLElBTEksQ0FLQyxVQUFDTSxJQUFEO0FBQUEsYUFBVVQsUUFBUSxDQUFDTixpQkFBaUIsQ0FBQ0MsS0FBRCxFQUFRYyxJQUFSLENBQWxCLENBQWxCO0FBQUEsS0FMRCxFQU1KTixJQU5JLENBTUM7QUFBQSxhQUFNRSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCWCxLQUF0QixDQUFOO0FBQUEsS0FORCxDQUFQO0FBT0QsR0FURDtBQVVEOztBQUNELFNBQVNlLGdCQUFULENBQTBCQyxLQUExQixFQUFpQ0MsU0FBakMsRUFBNEM7QUFDMUMsTUFBTUMsS0FBSyxHQUFHRixLQUFLLENBQUNHLGdCQUFOLENBQXVCRixTQUF2QixDQUFkOztBQUNBLE1BQUksQ0FBQ0MsS0FBTCxFQUFZO0FBQ1YsV0FBTyxJQUFQO0FBQ0QsR0FGRCxNQUVPLElBQUlBLEtBQUssQ0FBQ0UsVUFBVixFQUFzQjtBQUMzQixXQUFPLEtBQVA7QUFDRCxHQUZNLE1BRUE7QUFDTCxXQUFPRixLQUFLLENBQUNHLGFBQWI7QUFDRDtBQUNGLEMiLCJmaWxlIjoibWFpbi4zMWUyNDlhNmY4MWM5NTBkZTVkMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG4vLyBpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xuLy8gaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG4vLyBpbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCB1cmxVc2VycyA9ICdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMnO1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9VU0VSID0gJ1JFUVVFU1RfVVNFUic7XG5leHBvcnQgY29uc3QgUkVRVUVTVF9VU0VSX1NVQ0NFU1MgPSAnUkVRVUVTVF9VU0VSX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IFJFUVVFU1RfVVNFUl9GQUlMVVJFID0gJ1JFUVVFU1RfVVNFUl9GQUlMVVJFJztcblxuY29uc3QgcmVxdWVzdFVzZXJzID0gKCkgPT4gKHtcbiAgdHlwZTogUkVRVUVTVF9VU0VSLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3RVc2VycztcblxuZXhwb3J0IGNvbnN0IGZldGNoVXNlcnNTdWNjZXNzID0gKHVzZXJzKSA9PiAoe1xuICB0eXBlOiBSRVFVRVNUX1VTRVJfU1VDQ0VTUyxcbiAgcGF5bG9hZDogeyB1c2VycyB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFVzZXJzRmFpbHVyZSA9IChlcnJvcikgPT4gKHtcbiAgdHlwZTogUkVRVUVTVF9VU0VSX0ZBSUxVUkUsXG4gIHBheWxvYWQ6IHsgZXJyb3IgfSxcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hVc2Vycyh1c2Vycykge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdFVzZXJzKHVzZXJzKSk7XG4gICAgcmV0dXJuIGF4aW9zLmdldCh1cmxVc2VycylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncmVzcG9uc2UnLCByZXNwb25zZS5kYXRhKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLm5hbWUuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChqc29uKSA9PiBkaXNwYXRjaChmZXRjaFVzZXJzU3VjY2Vzcyh1c2VycywganNvbikpKVxuICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ3Vlc2VycycsIHVzZXJzKSk7XG4gIH07XG59XG5mdW5jdGlvbiBzaG91bGRGZXRjaFBvc3RzKHN0YXRlLCBzdWJyZWRkaXQpIHtcbiAgY29uc3QgcG9zdHMgPSBzdGF0ZS5wb3N0c0J5U3VicmVkZGl0W3N1YnJlZGRpdF1cbiAgaWYgKCFwb3N0cykge1xuICAgIHJldHVybiB0cnVlXG4gIH0gZWxzZSBpZiAocG9zdHMuaXNGZXRjaGluZykge1xuICAgIHJldHVybiBmYWxzZVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBwb3N0cy5kaWRJbnZhbGlkYXRlXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=