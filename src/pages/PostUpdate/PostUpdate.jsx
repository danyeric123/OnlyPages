import { useLocation, useHistory } from "react-router-dom"
import React, { useState, useEffect} from 'react';
import * as postAPI from '../../services/postService.js'
import setPosts from '../PostLanding/PostLanding'


const PostUpdate = () => {

  const location = useLocation()
  
  const history = useHistory()

  const[post,setPost]=useState(location.state)
  
  
  const handleChange = (evt) => {
    setPost({...post,[evt.target.name]:evt.target.value})
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault();
   
    postAPI.update(post)
    .then(post => { 
      history.push('/')
    } )
  }
  return(
    <>
    <h1>edit page</h1>
    <form onSubmit={handleSubmit}>
      <label htmlfor= "title">
        Post title 
      </label>
      <input name= "title"
      type ="text"
      required
      id="tiitle"
      value={post.title}
      onChange={handleChange}
       ></input>
       <label> Categories</label>
       <input name= "categories"
      type ="text"
      required
      id="tiitle"
      value={post.categories}
      onChange={(e) => setPost({...post,[e.target.name]:e.target.value.split(";")})}
       ></input>
        <label htmlFor="body">Post body</label>
        <textarea name= "body"
        required
        id="body"
        onChange={handleChange}
        >{post.body}</textarea>
        <button>Save</button>
        <button>Cancel</button>
    </form>
    </>
  )
} 
export default PostUpdate;