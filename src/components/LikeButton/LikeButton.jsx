import React from 'react'

const LikeButton = ({handleLike,post}) => {
  return (
    <>
     <button onClick={handleLike}>Like:{post.likes.length}</button> 
    </>
  )
}

export default LikeButton
