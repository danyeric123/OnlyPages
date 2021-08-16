import { useState, useEffect } from "react";
import PostList from "../PostList/PostList";
import * as postAPI from '../../services/postService.js'
import { set } from "mongoose";



const PostLanding = () => {
  
  const initialState = [
    { title: 'scrum manager', body: 'lorem ipsum...', author: 'zigg', id: 1 },

    { title: 'api manager!', body: 'lorem ipsum...', author: 'katia', id: 2 },
    
    { title: 'dataBase', body: 'lorem ipsum...', author: 'david', id: 3 }
  ]
  const [posts, setPosts] = useState(initialState)
  const [isLoading, setIsLoading] =useState(true);
  

 useEffect(() => {
   console.log('use effect ran')
   async function getPosts() {
    const posts = await postAPI.getAll()
    setPosts(posts)
    setIsLoading(false)
  }
  getPosts()
 }, []);

  return (
    <div className="postlanding">
      { isLoading && <div>...loading</div>}
      {posts && <PostList posts={posts} title="Recent Posts" /> } 
     </div>
  );
}
 
export default PostLanding;