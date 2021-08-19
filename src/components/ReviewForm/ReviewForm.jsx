// import { useLocation, useHistory } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const ReviewForm = ({book,handleAddReview}) => {

  const [content, setContent] = useState('')
  const [rating, setRating] = useState(1)
  const [invalidForm, setInvalidForm] = useState(true)
  const [stars, setStars] = useState([true,false,false,false,false])
  const formRef = useRef()


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      content,
      rating,
      book: book.id
    }
    handleAddReview(formData)
    setContent('');
    setRating(1)
    setStars([true,false,false,false])
    setInvalidForm(true)
  }

  const changeRating = (idx) =>{
    let newRating = Array(5).fill(false)
    for(let i = 0; i<=idx;i++){
      newRating[i] = true
    }
    setRating(idx+1)
    setStars(newRating)
  }

  return (
    <>
    <h2>What did you think of this book? Leave a review!</h2>
        <form
        ref={formRef}
        onChange={()=>setInvalidForm(!formRef)}
        onSubmit={handleSubmit}
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
          <FaStar onClick={()=>changeRating(idx)}/>:
          <FaRegStar onClick={()=>changeRating(idx)}/>
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
};
  
export default ReviewForm;