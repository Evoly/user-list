import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';

import UserList from './component/UserList';
import PostsList from './component/PostsList';
import CommentsList from './component/CommentsList';
import Header from './component/Header';
// import NotFound from './component/NotFound';

const Comments = (props) => {
  const { location } = props;
  return (
    <CommentsList
      id={location.postId}
      name={location.name}
      userId={location.userId}
      postTitle={location.postTitle}
    />
  );
};

Comments.propTypes = {
  location: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const Posts = (props) => {
  const { location } = props;
  return (
    <PostsList id={location.userId} name={location.userName} />
  );
};

Posts.propTypes = {
  location: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

const Home = () => (
  <UserList />
);

const Main = () => (
  <main className="container">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/posts" component={Posts} />
      <Route path="/comments" component={Comments} />
      <Route path="*" component={Home} />
    </Switch>
  </main>
);

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Main id="0" />
    </div>
  </BrowserRouter>
);

export default App;
