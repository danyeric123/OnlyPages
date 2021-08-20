import React, { useState } from "react";
import LikeButton from "../LikeButton/LikeButton";
import * as reviewsAPI from "../../services/reviewService";
import { FaStar, FaRegStar } from "react-icons/fa";
import moment from "moment";

const ReviewCard = ({ fetchedReview, userProfile, handleDeleteReview }) => {
  const [review, setReview] = useState(fetchedReview);
  const handleLike = async () => {
    const updatedReview = await reviewsAPI.likeAndUnlike(review._id);
    setReview(updatedReview);
  };

  const starRating = () => {
    const stars = Array(5).fill(<FaRegStar />);
    for (let i = 0; i < review.rating; i++) {
      stars[i] = <FaStar key={i}/>;
    }
    return stars;
  };

  return (
    /* border-transparent */
    <div className="md:p-8 p-2 h-90 border bg-blue-100 border-red-600 shadow-xl mx-2 my-2 w-full ">
      <div className="flex items-start overflow-auto object-contain w-30 h-30 mx-2">
        <div className="flex-shrink-0">
          <div className="inline-block relative">
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              <img
                className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover"
                src="https://i.imgur.com/ZnXPhEq.jpg"
                alt="only pages open book logo"
              />
              <div className="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>
            </div>
          </div>
          <div className="ml-6">
            <p className="flex items-baseline">
              <span className="text-gray-600 font-bold">
                Written by: {review.author.name}
              </span>
            </p>
            <div className="flex items-center mt-1">Rating: {starRating()}</div>
            <div className="flex items-center mt-4 text-gray-600">
              <div className="flex items-center">
                <small>Posted on {moment(review.createdAt).fromNow()}</small>
              </div>
            </div>
            <div className="">
              <p className="mt-1 overflow-auto object-contain w-40 h-20">{review.content}</p>
            </div>
            {review.author._id === userProfile._id && (
              <div className="flex items-center justify-between text-sm text-gray-600 fill-current">
                <button
                  onClick={() => handleDeleteReview(review._id)}
                  className="flex items-center group relative inline-block px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-500 py-2 px-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-red-500 "
                >
                  <span className="ml-2">DELETE</span>
                </button>
              </div>
            )}

            <div className="flex items-center">
              <LikeButton
                userProfile={userProfile}
                handleLike={handleLike}
                likes={review.likes}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
