import React from 'react'
import {FaThumbsUp, FaThumbsDown} from 'react-icons/fa'

const LikeButton = ({handleLike,likes,userProfile}) => {
  return (
    <>
     <button onClick={handleLike} className="group relative w-full flex justify-center py-1 border border-transparent text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
     <FaThumbsUp/>
      Like
      {likes.length}
      </button> 
    </>
  )
}

export default LikeButton
