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
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <img
            src="https://i.imgur.com/ZnXPhEq.jpg"
            alt="only pages open book logo"
            className="rounded-full h-20 w-20 mx-auto ring-4 ring-blue hover:opacity-75"
          />
          <p className="mt-2 text-center text-2xl font-extrabold text-gray-900">
            What did you think of this book? 
          </p>
          <p className="mt-2 text-center text-xl font-extrabold text-gray-900"> Leave a review and give it a star rating! </p>
          <form
            ref={formRef}
            onChange={() => setInvalidForm(!formRef)}
            onSubmit={handleSubmit}
            className="mt-8 space-y-6"
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
             
              <div>
                <label htmlFor="name" className="sr-only">
                  Review
                </label>
                <textarea
                  type="text"
                  name="content"
                  rows="4"
                  value={content}
                  onChange={({ target }) => setContent(target.value)}
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex items-center mt-2 mb-4">
               
                <label htmlFor="rating" className="sr-only">Rating</label>
                {stars.map((star, idx) =>
                  star ? (
                    <FaStar onClick={() => changeRating(idx)} />
                  ) : (
                    <FaRegStar onClick={() => changeRating(idx)} />
                  )
                )}
              </div>
            </div>
            <button
              type="submit"
              disabled={invalidForm}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Add Review
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ReviewForm;
