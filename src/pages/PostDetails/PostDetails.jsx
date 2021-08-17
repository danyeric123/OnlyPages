import { useParams, useLocation } from "react-router";
import { Link, } from "react-router-dom";
import React,{ useState, useEffect } from 'react';
import * as postService from "../../services/postService"

const PostDetails = () => {
  

  const { id } = useParams();
  const [post, setPost]= useState(null)
  console.log(id)

  useEffect(() => {
    const fetchPost = async () => {
      const fetchedPost = await postService.getPost(id)
      setPost(fetchedPost)
    };
    fetchPost()
  }, [])

  const handleLike = async () => {
   const updatedPost = await postService.likeAndUnlike(id)
   setPost(updatedPost)
  }

  return (
   post&&
    <div className="postlanding">
      {/* { isLoading && <div>...loading</div>} */}
      {post && (
        <article>
          <h2>{ post.title }</h2>
            <h2>posted by { post.author.name }</h2>
              <p> { post.body }</p> 
        </article>
      )} 
     <Link to={{pathname:'/edit',state:post}}>
       <button>Edit post</button>
     </Link>
     <Link to="/posts">
       <button>cancel</button>
     </Link>
      <button onClick={handleLike}>Like:{post.likes.length}</button>
     </div>
  );
}

export default PostDetails;