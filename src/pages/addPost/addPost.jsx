import React,{Component} from 'react'
  
class AddPost extends Component {
  
  state = {
    invalidForm: true,
    formData: {
      title:'',
      post:'',
    }
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddPost(this.state.formData);
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
		const { title, post} = this.state.formData
    return (
      <>
        <h1>Add Post</h1>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">
              Title 
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
            <label htmlFor="PostInput" className="form-label">
              Post 
            </label>
            <textarea
              type="text"
              className="form-control"
              id="postInput"
              name="post"
              value={post}
              onChange={this.handleChange}
              required
            />
          </div>
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

export default AddPost;