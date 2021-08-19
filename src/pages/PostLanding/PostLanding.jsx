import { useState, useEffect } from "react";
import PostList from "../../components/PostList/PostList";
import * as postAPI from '../../services/postService.js'
import AddPost from "../../components/AddPost/AddPost";
import postLandCss from './postLanding.modules.css'


const PostLanding = ({userProfile}) => {
  
  
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] =useState(true);
  const [pressed, setPressed] = useState(false)
  

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
  setPosts([newPost,...posts])
 }

  return (
    <div className="postLandignCss">
      {!pressed&&
        <button onClick={()=>setPressed(true)}>Add Post</button>
      }
      {pressed&&<AddPost setPressed={setPressed} addPost={addPost}/>}
      { isLoading && <div>...loading</div>}
      {posts && <PostList posts={posts} title="Recent Posts" handleDelete={handleDeletePost} userProfile={userProfile} /> } 
     </div>
  );
}
 
export default PostLanding;