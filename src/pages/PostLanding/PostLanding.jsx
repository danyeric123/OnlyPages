import { useState, useEffect } from "react";
import PostList from "../PostList/PostList";
import * as postAPI from '../../services/postService.js'



const PostLanding = () => {
  
  
  const [posts, setPosts] = useState("")
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

 async function handleDeletePost(id){
  const posts = await postAPI.deleteOne(id)
  setPosts(posts)
 }

  return (
    <div className="postlanding">
      { isLoading && <div>...loading</div>}
      {posts && <PostList posts={posts} title="Recent Posts" handleDelete={handleDeletePost} /> } 
     </div>
  );
}
 
export default PostLanding;