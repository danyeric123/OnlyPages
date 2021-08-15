import React, { Component } from 'react';

class PostDetails extends Component {
  state = {
    post: this.props.location.state
  }
  render() {
    return(
      <>
      <h1>post details</h1>
      </>
    );
  }
}
export default PostDetails;