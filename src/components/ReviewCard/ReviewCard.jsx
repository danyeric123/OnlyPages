import React,{useState} from 'react';
import LikeButton from '../LikeButton/LikeButton';
import * as reviewsAPI from '../../services/reviewService'

const ReviewCard = ({ fetchedReview, userProfile, handleDeleteReview }) => {
  
  const [review, setReview] = useState(fetchedReview)
  console.log(review)
  const handleLike = async () => {
    const updatedReview = await reviewsAPI.likeAndUnlike(review._id)
    setReview(updatedReview)
   }
  
  return (
    <>
      <h5>{review.content}</h5>
      <h5>{review.rating}/10 - by {review.author.name}</h5>
      {review.author._id === userProfile._id &&
      <>
        <button onClick={()=> handleDeleteReview(review._id)}>X</button><br></br>
      </>
      }
      <LikeButton handleLike={handleLike} post={review}/>
    </>
  );
}
 
export default ReviewCard;