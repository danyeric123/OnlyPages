import React,{useState} from 'react';
import LikeButton from '../LikeButton/LikeButton';
import * as reviewsAPI from '../../services/reviewService'
import { FaStar, FaRegStar } from "react-icons/fa";

const ReviewCard = ({ fetchedReview, userProfile, handleDeleteReview }) => {
  
  const [review, setReview] = useState(fetchedReview)
  const handleLike = async () => {
    const updatedReview = await reviewsAPI.likeAndUnlike(review._id)
    setReview(updatedReview)
   }

   const starRating = ()=>{
    const stars = Array(5).fill(<FaRegStar/>)
     for(let i = 0; i < review.rating;i++){
      stars[i] = <FaStar/>
     }
     return stars
   }
  
  return (
    <>
      <h5>{review.content}</h5>
      {starRating()}
      <h5>by {review.author.name}</h5>
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