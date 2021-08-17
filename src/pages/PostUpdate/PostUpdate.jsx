import { useLocation, } from "react-router-dom"
import React, { useState, useEffect} from 'react';
import * as postAPI from '../../services/postService.js'
import setPosts from '../PostLanding/PostLanding'


const PostUpdate = () => {

  const location = useLocation()
  const [title, setTitle] = useState(''); 
  const [body, setBody] = useState(''); 
  const [categories, setCategories] = useState([])

  
  useEffect(() => {
    async function getPosts(){
      const posts = await postAPI.getAll()
      setPosts(posts)
    }
    getPosts()
    
  }, []);
  
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    const post ={ title, body,categories};
    postAPI.create(post)
    console.log(post);
  }
  return(
    <>
    <h1>edit page</h1>
    <form>
      <label htmlfor= "title">
        Post title 
      </label>
      <input
      type ="text"
      required
      id="tiitle"
      // value={title}
       ></input>
       <label htmlFor= "Categories">
         Categories
       </label>
       <input type=
        "text"
        required
        id="Categories"
        ></input>
        <label htmlFor="body">Post body</label>
        <textarea
        required
        id="body"
        ></textarea>
        <button>Save</button>
        <button>Cancel</button>
    </form>
    </>
  )
} 
export default PostUpdate;