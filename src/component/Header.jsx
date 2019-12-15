import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="container">
      <nav className="nav flex">
        <Link to="/" className="nav__link">Home</Link>
        <Link
          to={{
            pathname: '/posts',
            userId: null,
            userName: null,
          }}
          className="nav__link"
        >
          Posts
        </Link>
        <Link to="/comments" className="nav__link">Comments</Link>
      </nav>
    </div>
  </header>
);

export default withRouter(Header);
