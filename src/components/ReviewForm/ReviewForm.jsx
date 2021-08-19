// import { useLocation, useHistory } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const ReviewForm = ({ book, handleAddReview }) => {
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(1);
  const [invalidForm, setInvalidForm] = useState(true);
  const [stars, setStars] = useState([true, false, false, false, false]);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      content,
      rating,
      book: book.id,
    };
    handleAddReview(formData);
    setContent("");
    setRating(1);
    setStars([true, false, false, false]);
    setInvalidForm(true);
  };

  const changeRating = (idx) => {
    let newRating = Array(5).fill(false);
    for (let i = 0; i <= idx; i++) {
      newRating[i] = true;
    }
    setRating(idx + 1);
    setStars(newRating);
  };

  return (
    <>
      <h2>What did you think of this book? Leave a review!</h2>
      <form
        ref={formRef}
        onChange={() => setInvalidForm(!formRef)}
        onSubmit={handleSubmit}
      >
        <textarea
          type="text"
          name="content"
          rows="4"
          value={content}
          onChange={({ target }) => setContent(target.value)}
          required
          className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
        />
        <div class="flex justify-center items-center">
          <div class="flex items-center mt-2 mb-4">
            <label htmlFor="rating">Rating </label>
            <br />
            {stars.map((star, idx) =>
              star ? (
                <FaStar onClick={() => changeRating(idx)} />
              ) : (
                <FaRegStar onClick={() => changeRating(idx)} />
              )
            )}
            </div>
            </div>
        <button type="submit" disabled={invalidForm} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Add Review
        </button>
      </form>
    </>
  );
};

export default ReviewForm;
