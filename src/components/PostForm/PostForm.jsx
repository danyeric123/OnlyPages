import React, { Component } from 'react';

class PostForm extends Component {
  state = {  }
  render() { 
    return (
       <>
        <form action="">
          <textarea type="text" name="test"/>
          <button
            type="submit"
            className="btn btn-success"
            disabled={this.state.invalidForm}
          >
            Submit Post
          </button>
        </form>
      </>
     );
  }
}
 
export default PostForm;