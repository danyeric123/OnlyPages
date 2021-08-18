import { useState, useEffect } from "react";
import PostList from "../PostList/PostList";
import * as postAPI from '../../services/postService.js'
import AddPost from "../AddPost/AddPost";



const PostLanding = () => {
  
  
  const [posts, setPosts] = useState([])
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

 async function addPost(post){
  const newPost = await postAPI.create(post)
  setPosts([...posts,newPost])
 }

  return (
    <div className="postlanding">
      <AddPost addPost={addPost}/>
      { isLoading && <div>...loading</div>}
      {posts && <PostList posts={posts} title="Recent Posts" handleDelete={handleDeletePost} /> } 
     </div>
  );
}
 
export default PostLanding;