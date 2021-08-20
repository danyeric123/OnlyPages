import { useParams, useLocation } from "react-router";
import { Link } from "react-router-dom";
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
  }, [userProfile])

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
      post&&<div id="wrapper">
      <div id="container">
      <section id="openbook">
     
        <article id="article" >
          <h1
            className="font-extrabold text-3xl"
          >
            { post.title }
          </h1>
            <h3
              className="text-gray-500"
            >By: 
              <Link to={`/profiles/${post.author._id}`}>
              <span
                className="font-medium text-blue-500 ml-2"
              >
                { post.author.name }
              </span>
              </Link>
            </h3>
            <small
              className="text-gray-500"
            >
              Posted on {moment(post.createdAt).fromNow()}
            </small>
              <p> { post.body }</p>
              {post.categories.map(cat=>{
                return (
                  <Link
                    to={{
                      pathname: `/posts/category/${cat}`,
                    }}
                  >
                  <small
                    className="text-blue-500"
                  >
                    {cat}
                  </small>
                  </Link>
                )
              })}<br/>
      <LikeButton 
        handleLike={handleLike} likes={post.likes} 
      />
     {post.author._id===userProfile._id&&<Link to={{pathname:'/edit',state:post}}>
       <button
        className="group my-3 relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-400 hover:bg-yellow-300" 
       >
         Edit post
      </button>
     </Link>}
    </article>

      <div class='replies'><br/>
      <ReplyForm addReply={addReply} />
      {<h2
        className="font-bold"
      >{post.replies>0?
        "Replies:":
        "No Replies Yet"
        }
      </h2>
      }
      {post.replies.map(reply=>{
        return (<ReplyCard 
          reply={reply} 
          deleteReply={deleteReply} 
          userProfile={userProfile} 
        />)
      })}
    </div>
   
   
    </section>
    </div>
    </div>
    
  );
}

export default PostDetails;