// s.1 import react 
import { render } from "@testing-library/react"

import React, { Component } from "react"

// s.2 import react-router
import { Link } from "react-router-dom"


class Post extends Component{
  
  state={
    invalidForm:true,
    formData: {
      title:'',
      posts:'',
    }
  };
  
  formRef = React.createRef();

  handleSubmit = e => {
  e.preventDefault();
  // We will write the handleAddPuppy function in our App.js after this step.
  this.props.handlePost(this.state.formData);
  };

  handleChange = e => {
  const formData = {...this.state.formData, [e.target.title]: e.target.value};
  this.setState({
    formData,
    invalidForm: !this.formRef.current.checkValidity()
  });
  };
  
  // s.3.2 render Post /sanity check
  render(){
    const { title, posts} = this.state.formData
    return(
      <>
      <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          
          <div className="mb-3">
            <label htmlFor="titleInput" className="form-label">
              title (required)
            </label>
            <input
              type="text"
              className="form-control"
              id="titleInput"
              name="title"
              value={title}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="postInput" className="form-label">
              post (required)
            </label>
            <input
              type="text"
              className="form-control"
              id="postInput"
              name="post"
              value={Post}
              onChange={this.handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-success"
            disabled={this.state.invalidForm}
          >
            Add post
          </button>
      </form>
      </>
    );
  }
} 

export default Post;