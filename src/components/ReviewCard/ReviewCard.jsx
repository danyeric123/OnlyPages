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
      stars[i] = <FaStar />;
    }
    return stars;
  };

  return (
    <>
      <div className="flex items-start">
        <div className="flex items-center mt-1">{starRating()}</div>
        <div className="ml-6">
          <p className="flex items-baseline">
            <span className="text-gray-600 font-bold">
              by {review.author.name}
            </span>
          </p>
        </div>
        <div className="mt-3">
          <p className="mt-1">{review.content}</p>
          <small>Posted on {moment(review.createdAt).fromNow()}</small>
        </div>
        {review.author._id === userProfile._id && (
          <div>
            <button onClick={() => handleDeleteReview(review._id)}>X</button>
            <br></br>
          </div>
        )}
        <div>
          <LikeButton
            userProfile={userProfile}
            handleLike={handleLike}
            likes={review.likes}
          />
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
