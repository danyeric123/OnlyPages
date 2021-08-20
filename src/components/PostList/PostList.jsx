import { Link } from 
'react-router-dom';
// import'./PostList.css'

const PostList = ({ posts, title, handleDelete, userProfile }) => {
 
  
 return (
   
    <div className="flex flex-col justify-center">
      <h2 className="font-extrabold text-2xl">{title} Posts</h2>
  {/* \/ this render all post on by\/*/}
  <div className='text-center text-gray-50 grid grid-cols-3 md:grid-cols-6'>
      {posts.map((post) => (
        <div className="p-5 mx-4 rounded-2xl shadow-2xl hover:shadow-none bg-blue-600" key={post._id}>
          <div>         
          <Link 
            to={{
              pathname: `/posts/${post._id}`,
              state: {post}
            }
          }>
          <h2 className="title">{ post.title }</h2>
          <p>Posted by <Link to={`/profiles/${post.author._id}`}>
            { post.author.name }
            </Link>
          </p>
            </Link>
            </div>
            {post.author._id===userProfile._id&&
            <button 
              onClick={()=>handleDelete(post._id)}
              className="p-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-700 hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Delete</button>}
        </div>
        
      ))}
    </div>
    </div>
   
  );
}
 
export default PostList;