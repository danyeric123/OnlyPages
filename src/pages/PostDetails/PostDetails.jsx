import { useParams, useLocation } from "react-router";
import { Link, } from "react-router-dom";
import React,{ useState, useEffect } from 'react';
import * as postService from "../../services/postService"
import ReplyForm from "../../components/ReplyForm/ReplyForm";
import ReplyCard from "../../components/ReplyCard/ReplyCard";
import moment from "moment";
import LikeButton from "../../components/LikeButton/LikeButton";
import postDetailsCss from "./PostDetail.modules.css"
const PostDetails = ({userProfile}) => {
  

  const { id } = useParams();
  const [post, setPost]= useState(null)

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

  const addReply = async (reply)=>{
    const updatedPost = await postService.reply(id,reply)
    setPost(updatedPost)
  }

  const deleteReply = async (replyId)=>{
    const updatedPost = await postService.deleteReply(id,replyId)
    setPost(updatedPost)
  }

  return (
      post&&
      <div id="wrapper">
      <div id="container">
      <section id="openbook">
      
      {/* { isLoading && <div>...loading</div>} */}
      {post && (
     
        <article id="article" >
          <h1>{ post.title }</h1>
            <h3>By: { post.author.name }</h3>
            <small>Posted on {moment(post.createdAt).fromNow()}</small>
              <p> { post.body }</p>
              {post.categories.map(cat=>{
                return (
                  <Link
                    to={{
                      pathname: `/posts/category/${cat}`,
                    }}
                  >
                  <small>
                    {cat}
                  </small>
                  </Link>
                )
              })}
      <LikeButton handleLike={handleLike} likes={post.likes} />
              </article>
      )}
     {post.author._id===userProfile._id&&<Link to={{pathname:'/edit',state:post}}>
       <button>Edit post</button>
     </Link>}
      <div class='replies'>
      <ReplyForm addReply={addReply} />
      <h2>Replies</h2>
      {post.replies.map(reply=><ReplyCard reply={reply} deleteReply={deleteReply} userProfile={userProfile} />)}
    </div>
   
   
    </section>
    </div>
    </div>
    
  );
}

export default PostDetails;