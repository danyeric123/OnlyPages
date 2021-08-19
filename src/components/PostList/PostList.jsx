import { Link } from 'react-router-dom';
const PostList = ({ posts, title, handleDelete, userProfile }) => {
 
  
 return (
    <div className="postlist">
      <h2>{title} Posts</h2>
      {posts.map((post) => (
        <div className="PL" key={post._id}>
          <Link 
            to={{
              pathname: `/posts/${post._id}`,
              state: {post}
            }
          }>
          <h2>{ post.title }</h2>
          <p>Posted by <Link to={`/profiles/${post.author._id}`}>
            { post.author.name }
            </Link>
          </p>
            </Link>
            {post.author._id===userProfile._id&&<button onClick={()=>handleDelete(post._id)}>Delete</button>}
        </div>
      ))}
    </div>
  );
}
 
export default PostList;