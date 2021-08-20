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
    setStars([true,false,false,false,false])
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
      <div className="flex" >
      <textarea
        type="text"
        name="content"
        rows="4"
        value={content}
        onChange={({target}) => setContent(target.value)}
        required
        className="border border-black"
      />
      <div className="flex self-center">
      <label className="pr-4" htmlFor="rating">Rating</label>
        {stars.map((star,idx)=>star?
          <FaStar onClick={()=>changeRating(idx)}/>:
          <FaRegStar onClick={()=>changeRating(idx)}/>
        )}
        </div>
        <button
          type="submit"
    			disabled={invalidForm}
          className="px-0 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
				  Add Review
        </button>
        </div>
      </form>
  </>
);
};
  
export default ReviewForm;