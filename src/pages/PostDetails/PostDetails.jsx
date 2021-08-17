import { useParams, useLocation } from "react-router";
import { Link, } from "react-router-dom";
import React,{ useState } from 'react';
const PostDetails = () => {

  const[count, setCount]= useState(0)
  

  const { id } = useParams();
  const {post} = useLocation().state
  
  return (
    <div className="postlanding">
      {/* { isLoading && <div>...loading</div>} */}
      {post && (
        <article>
          <h2>{ post.title }</h2>
            <h2>posted by { post.author.name }</h2>
              <p> { post.body }</p> 
        </article>
      )} 
     <Link to="/edit">
       <button>Edit post</button>
     </Link>
     <Link to="/posts">
       <button>cancel</button>
     </Link>
      <button onClick={() => setCount(count + 1)}>Like:{count}</button>
     </div>
  );
}

export default PostDetails;