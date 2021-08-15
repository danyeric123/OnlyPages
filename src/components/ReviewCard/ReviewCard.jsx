import React from 'react';

const ReviewCard = ({ review, userProfile, handleDeleteReview }) => {
  return (
    <>
      <h5>{review.content}</h5>
      <h5>{review.rating}/10 - by {review.author.name}</h5>
      {review.author._id === userProfile._id &&
      <>
        <button onClick={()=> handleDeleteReview(review._id)}>X</button><br></br>
      </>
      }
    </>
  );
}
 
export default ReviewCard;