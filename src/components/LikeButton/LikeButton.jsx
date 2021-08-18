import React from 'react'
import {FaThumbsUp, FaThumbsDown} from 'react-icons/fa'

const LikeButton = ({handleLike,likes,userProfile}) => {
  return (
    <>
     <button onClick={handleLike}>
     <FaThumbsUp/>
      Like
      {likes.length}
      </button> 
    </>
  )
}

export default LikeButton
