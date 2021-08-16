import { useState, useEffect } from "react";
import PostList from "../PostList/PostList";
import * as postAPI from '../../services/postService.js'



const PostLanding = () => {
  
  const initialState = [
    { title: 'scrum manager', body: 'lorem ipsum...', author: 'zigg', id: 1 },

    { title: 'api manager!', body: 'lorem ipsum...', author: 'katia', id: 2 },
    
    { title: 'dataBase', body: 'lorem ipsum...', author: 'david', id: 3 }
  ]
  const [posts, setPosts] = useState(initialState)

  const handleDelete = (id) => {

  }

 useEffect(() => {
   console.log('use effect ran')
   async function getPosts() {
    const posts = await postAPI.getAll()
    setPosts(posts)
  }
  getPosts()
 }, []);

  return (
    <div className="postlanding">
      <PostList posts={posts} title="Recent Posts" handleDelete={handleDelete} />  
     </div>
  );
}
 
export default PostLanding;