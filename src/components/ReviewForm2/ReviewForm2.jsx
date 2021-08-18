// import { useLocation, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";

const ReviewForm2 = ({api_id}) => {

  const [content, setContent] = useState('')
  const [rating, setRating] = useState('')
  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      "rating": rating,
      "content": content
    });
    setContent('');
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <textarea
        type="text"
        name="content"
        rows="4"
        value={content}
        onChange={({target}) => setContent(target.value)}
        required
      />
      <br />
      <input
        id="rating"
        type="range"
        min="1"
        max="10"
        name="rating"
        value={rating}
        placeholder="5"
        onChange={({target}) => setRating(target.value)} 
        required
      />
      <label htmlFor="rating">{rating}</label>
      <br />
      <button type="submit" /* disabled={invalidForm} */>
        Add Review
      </button>
    </form>
  </>
);
};
  
export default ReviewForm2;


  /* // const { book } = this.props;
  const [state, setState] = useState({
    invalidForm: true,
    formData: {
      content: '',
      rating: "5",
      book_api_id: this.props.api_id,
      author: this.props.userProfile._id,
      book: this.props.book_id
    }) */
  // const [content, setContent] = useState("this is great placeholder");
  // const [rating, setRating] = useState(0);
  // const [review, setReviews] = useState(location.state);
    
  //const { age, siblingsNum } = state

  /* const history = useHistory();
  const location = useLocation();
  handleChange = (e) => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value,
    };
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity(),
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddReview(this.state.formData);
  };

  return (
    <>
      <form ref={this.formRef} onSubmit={this.handleSubmit}>
        <textarea
          type="text"
          name="content"
          rows="4"
          value={this.state.formData.content}
          onChange={this.handleChange}
          required
        />
        <br />
        <input
          id="rating"
          type="range"
          min="1"
          max="10"
          name="rating"
          value={this.state.formData.rating}
          placeholder="5"
          onChange={this.handleChange} //oncLick setRating
          required
        />
        <label htmlFor="rating">{this.state.formData.rating}</label>
        <br />
        <button type="submit" disabled={this.state.invalidForm}>
          Add Review
        </button>
      </form>
    </>
  );
}; */

