import React from 'react';
import './AllPost';

const AllPost = (props) => {
  return(
    <>
    <h1>Posts</h1>
    <div className="AllPost-grid">
      {props.posts.map(post =>
        <div>
          <li>Title: {post.title}</li>
          <li>Post: {post.post}</li>
        </div>
        )}
    </div>
    </>
  );
}

export default AllPost;