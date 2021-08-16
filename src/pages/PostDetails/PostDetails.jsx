import { useParams } from "react-router";

const PostDetails = () => {
  
  const { id } =useParams();

  return( 
    <div className="postdetails">
      <h2>Postdetails</h2>
    </div>
  );
}

export default PostDetails;