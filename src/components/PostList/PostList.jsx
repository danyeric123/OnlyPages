import { Link } from 
'react-router-dom';
import'./PostList.css'

const PostList = ({ posts, title, handleDelete, userProfile }) => {
 
  
 return (
   
    <div className="postlist">
      <h2>{title} Posts</h2>
  {/* \/ this render all post on by\/*/}
  <div id="title" className='grid grid-cols-3 md:grid-cols-6'>
      {posts.map((post) => (
        <div id='book' className="PL" key={post._id}>
          <div>         
          <Link 
            to={{
              pathname: `/posts/${post._id}`,
              state: {post}
            }
          }>
          <h2 id="title">{ post.title }</h2>
{/*\/shows name of the creator of the post/*/} 
          <p>Posted by { post.author.name }</p>
            </Link>
            </div>
            {post.author._id===userProfile._id&&<button onClick={()=>handleDelete(post._id)}>Delete</button>}
        </div>
        
      ))}
    </div>
    </div>
   
  );
}
 
export default PostList;