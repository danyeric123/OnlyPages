import React, { Component } from 'react'
import { FaStar, FaRegStar } from "react-icons/fa";

class ReviewForm extends Component {
  state = {
    invalidForm: true,
    formData: {
      content: '',
      rating: 1,
      book: this.props.book.id
    },
    stars: [true,false,false,false]
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
    this.setState({
      invalidForm: true,
    formData: {
      content: '',
      rating: 1,
      book: this.props.book.id
    },
    stars:[true,false,false,false]
    })
  };

  changeRating = (idx) =>{
    console.log("clicked")
    let newRating = Array(5).fill(false)
    for(let i = 0; i<=idx;i++){
      newRating[i] = true
    }
    this.setState({stars:newRating,formData:{...this.state.formData,rating:idx+1}})
  }
  
  render() {
    const {stars} = this.state
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
          className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"

        />
        <label htmlFor="rating">Rating</label>
        {stars.map((star,idx)=>star?
          <FaStar onClick={()=>this.changeRating(idx)}/>:
          <FaRegStar onClick={()=>this.changeRating(idx)}/>
        )}
        <button
          type="submit"
    			disabled={this.state.invalidForm}
          className="border border-blue-400 text-black-500 bg-blue-300 block rounded-md font-bold py-2 px-6 my-2 flex items-center hover:bg-blue-600 hover:text-white"
          >
				  Add Review
        </button>         
      </form>
      </>
    );
  }
}
 
export default ReviewForm;