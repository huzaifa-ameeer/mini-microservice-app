import React, { useState } from "react";
import axios from "axios";

const CreateComment = ({ postId }) => {
  const [content, setContent] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:3001/posts/${postId}/comments`, {
      content,
    });
    setContent("");
  };

  return (
    <form onSubmit={onSubmit} className="flex gap-2 mt-3">
      <input
        type="text"
        value={content}
        required
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter your comment"
        className="flex-1 min-w-0 px-3 py-2 text-sm border border-gray-200 rounded-md outline-none focus:border-gray-400 transition"
      />

      <button
        type="submit"
        className="px-3 py-2 text-sm bg-black text-white rounded-md hover:bg-gray-800 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default CreateComment;
