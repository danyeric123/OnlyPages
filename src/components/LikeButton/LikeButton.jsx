import React from "react";
import { FaThumbsUp } from "react-icons/fa";

const LikeButton = ({ handleLike, likes, userProfile }) => {
  return (
    <button
      onClick={handleLike}
      className="flex items-center inline-block my-2 bg-blue-500 rounded-md p-2 text-white"
    >
      <FaThumbsUp />
      <span class="ml-2">{likes.length} </span>
    </button>
  );
};

export default LikeButton;
