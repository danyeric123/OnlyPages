import { useParams, useLocation } from "react-router";
import { Link } from "react-router-dom";

const PostDetails = () => {
  
  const { id } = useParams();
  const {post} = useLocation().state
  return (
    <div className="postlanding">
      {/* { isLoading && <div>...loading</div>} */}
      {post && (
        <article>
          <h2>{ post.title }</h2>
            <h2>posted by { post.author.name }</h2>
              <p> { post.body }</p> 
        </article>
      )} 
     <Link to="/edit">
       <button>Edit post</button>
     </Link>
     </div>
  );
}

export default PostDetails;