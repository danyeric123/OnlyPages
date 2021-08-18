import { useParams, useLocation } from "react-router";
import { Link, } from "react-router-dom";
import React,{ useState, useEffect } from 'react';
import * as postService from "../../services/postService"
import ReplyForm from "../../components/ReplyForm/ReplyForm";
import ReplyCard from "../../components/ReplyCard/ReplyCard";

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
    <div className="postlanding">
      {/* { isLoading && <div>...loading</div>} */}
      {post && (
        <article>
          <h2>{ post.title }</h2>
            <h2>posted by { post.author.name }</h2>
              <p> { post.body }</p> 
        </article>
      )} 
     {post.author._id===userProfile._id&&<Link to={{pathname:'/edit',state:post}}>
       <button>Edit post</button>
     </Link>}
     {/* <Link to="/posts">
       <button>cancel</button>
     </Link> */}
      <button onClick={handleLike}>Like:{post.likes.length}</button>
      <ReplyForm addReply={addReply} />
      <h2>Replies</h2>
      {post.replies.map(reply=><ReplyCard reply={reply} deleteReply={deleteReply} userProfile={userProfile} />)}
     </div>
  );
}

export default PostDetails;