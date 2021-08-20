import React from 'react'
import {FaThumbsUp, FaThumbsDown} from 'react-icons/fa'

const LikeButton = ({handleLike,likes,userProfile}) => {
  return (
  
     <button onClick={handleLike} className="flex items-center inline-block my-2">
     <FaThumbsUp/>
      <span class="ml-2">{likes.length} </span>
      </button> 
    
  )
}

export default LikeButton
