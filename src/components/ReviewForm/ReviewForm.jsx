import React, { Component } from 'react'

class ReviewForm extends Component {
  state = {
    invalidForm: true,
    formData: {
      content: '',
      rating: "5",
      book_api_id: this.props.api_id,
      author: this.props.userProfile._id,
      book: this.props.book_id
    }
  }

  formRef = React.createRef();

	handleChange = e => {
		const formData = {...this.state.formData, [e.target.name]: e.target.value};
		this.setState({
		formData,
		invalidForm: !this.formRef.current.checkValidity()
		});
	};

  handleSubmit = e => {
		e.preventDefault();
    this.props.handleAddReview(this.state.formData)
  };
  
  render() { 
    return (
      <>
        <form
        ref={this.formRef}
        onSubmit={this.handleSubmit}
      >

        <textarea
          type="text"
          name="content"
          rows="4"
          value={this.state.formData.content}
          onChange={this.handleChange}
          required
        />
          <br/>
        <input 
          id="rating"
          type="range"
          min="1"
          max="10"
          name="rating"
          value={this.state.formData.rating}
          placeholder="5"
          onChange={this.handleChange}
          required
        />
        <label htmlFor="rating">{this.state.formData.rating}</label>
        <br/>
        <button
          type="submit"
    			disabled={this.state.invalidForm}
          >
				  Add Review
        </button>         
      </form>
      </>
    );
  }
}
 
export default ReviewForm;