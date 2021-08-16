import { Link } from 'react-router-dom';
const PostList = ({ posts, title, handleDelete }) => {
 
  
 return (
    <div className="postlist">
      <h2>{title}</h2>
  {/* \/ this render all post on by\/*/}
      {posts.map((post) => (
        <div className="PL" key={post.id}>
          <Link to={`/posts/${post.id}`}>
          <h2>{ post.title }</h2>
{/*\/shows name of the creator of the post/*/} 
          <p>Posted by { post.author.name }</p>
            </Link>
        </div>
      ))}
    </div>
  );
}
 
export default PostList;