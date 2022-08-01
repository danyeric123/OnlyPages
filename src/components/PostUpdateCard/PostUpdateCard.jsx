import React from "react";
import { Link } from "react-router-dom";

const PostUpdateCard = ({ posts, handleDelete }) => {
  return (
    <>
      <div>
        <Link
          to={{
            pathname: "/edit",
            state: { posts },
          }}
        >
          edit
        </Link>
        <button onClick={() => handleDelete(posts._id)}>Delete</button>
      </div>
    </>
  );
};

export default PostUpdateCard;
