import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts';

class PostsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      posts: [],
      error: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const { id } = this.props;
    const urlPosts = id ? `${url}?userId=${id}` : url;
    const response = await axios.get(urlPosts);
    try {
      this.setState({
        posts: response.data,
        isLoading: false,
      });
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  }


  render() {
    const { name } = this.props;
    const title = name ? `${name} posts` : 'Posts list';
    const { isLoading, posts } = this.state;

    let content = [];

    if (!isLoading) {
      const { userId } = posts[0];

      content = posts.map(({
        title, body, id, userId,
      }) => (
        <React.Fragment key={id}>
          <div className="content__item">
            <Link
              to={{
                pathname: '/comments',
                postId: id,
                userId,
                name,
                postTitle: title,
              }}
              className="content__link"
            >
              {title}
            </Link>
          </div>
          <p>{body}</p>
        </React.Fragment>
      ));
    } else {
      content = <p>Loading...</p>;
    }

    return (
      <>
        <h1> {title} </h1>
        <div className="content">
          {content}
          <Link to="/" className="btn">Back</Link>
        </div>
      </>
    );
  }
}

export default withRouter(PostsList);
