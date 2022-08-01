import React, { useState } from "react";

const ReplyForm = ({ addReply }) => {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    submitReply();
  };

  const submitReply = () => {
    setContent("");
    addReply({ content });
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      submitReply();
    }
  };

  return (
    <>
      <h2 className="font-bold grid justify-center">Write a reply</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          onKeyDown={handleEnter}
          required
          className="border border-black w-full"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button className="my-3 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm rounded-md text-white bg-blue-600 hover:bg-blue-500">
          Reply
        </button>
      </form>
    </>
  );
};

export default ReplyForm;
