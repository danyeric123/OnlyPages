import moment from "moment";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ReplyCard = ({ reply, deleteReply, userProfile }) => {
  return (
    <div className="p-4 my-4 grid justify-center rounded-2xl shadow-2xl hover:shadow-none bg-gray-300 bg-opacity-40">
      <h3 className="font-medium text-blue-500 flex justify-items-center">
        <Link
          to={`/profiles/${reply.author._id}`}
          className="text-blue-600 ml-2"
        >
          {reply.author.name}
        </Link>
        {reply.author.avatar ? (
          <img
            src={reply.author.avatar}
            alt={reply.author.name}
            avatar
            className="w-10 h-10 ml-3 rounded-full"
          />
        ) : (
          <FaUserCircle
            size={30}
            className="flex ml-3 justify-center object-contain"
          />
        )}
      </h3>
      <p>{reply.content}</p>
      <small className="my-3">
        Replied on {moment(reply.createdAt).fromNow()}
      </small>
      {reply.author._id === userProfile._id && (
        <button
          onClick={() => deleteReply(reply._id)}
          className="p-2 rounded-md text-white bg-red-700 hover:bg-red-500"
        >
          delete
        </button>
      )}
    </div>
  );
};

export default ReplyCard;
