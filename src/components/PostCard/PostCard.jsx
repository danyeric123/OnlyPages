import React from 'react'
import { Link } from "react-router-dom"

const PostCard = (props) => {
  return(
    <>
    <Link
      to={{
        pathname:'/post',
        state:{title: 'is this', post: 'working'}
      }}>
    <h2>This is a PostCard </h2>
    </Link>
    </>
  );
}

export default PostCard;