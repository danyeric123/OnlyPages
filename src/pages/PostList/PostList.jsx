import { Link } from 'react-router-dom';
const PostList = ({ posts, title, handleDelete }) => {
 
  
 return (
    <div className="postlist">
      <h2>{title}</h2>
  {/* \/ this render all post on by\/*/}
      {posts.map((post) => (
        <div className="PL" key={post._id}>
          <Link to={`/posts/${post.id}`}>
          <h2>{ post.title }</h2>
{/*\/shows name of the creator of the post/*/} 
          <p>Posted by { post.author.name }</p>
            </Link>
            <button onClick={()=>handleDelete(post._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
 
export default PostList;