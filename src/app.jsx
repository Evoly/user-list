import React, { Component } from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';

import UserList from './component/UserList';
import PostsList from './component/PostsList';
import CommentsList from './component/CommentsList';
import Header from './component/Header';

const Comments = (props) => {
  return (
    <CommentsList
      id={props.location.postId}
      name={props.location.name}
      userId={props.location.userId}
      postTitle={props.location.postTitle}
    />
  );
};


const Posts = (props) => {
  return (
    <PostsList id={props.location.userId} name={props.location.userName} />
  );
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
    </Switch>
  </main>
);

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Main />
    </div>
  </BrowserRouter>
);

export default App;
