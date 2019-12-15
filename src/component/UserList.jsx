import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import axios from 'axios';

const urlUsers = 'https://jsonplaceholder.typicode.com/users';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      users: [],
      error: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const response = await axios.get(urlUsers);
    //  console.log('response', response);
    try {
      this.setState({
        users: response.data,
        isLoading: false,
      });
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  }

  render() {
    const { isLoading, users } = this.state;

    let content = [];

    if (!isLoading) {
      content = users.map(({ name, id }) => (
        <React.Fragment key={id}>
          <li className="content__item">
            <Link
              to={{
                pathname: '/posts',
                userId: id,
                userName: name,
              }}
              className="content__link"
            >
              {name}
            </Link>
          </li>
        </React.Fragment>
      ));
    } else {
      content = <p>Loading...</p>;
    }

    return (
      <>
        <h1> User list</h1>
        <ul className="content flex">
          {content}
        </ul>
      </>

    );
  }
}

export default withRouter(UserList);
