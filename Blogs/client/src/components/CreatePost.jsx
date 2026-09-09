import axios from "axios";
import React, { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(title);
    await axios.post("http://localhost:3000/posts", { title });
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="flex max-w-lg mx-auto mt-10 gap-2">
        <input
          required
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your title"
          className="flex-1 px-4 py-2.5 border border-gray-300 rounded-md outline-none focus:border-black transition"
        />

        <button
          type="submit"
          className="px-5 py-2.5 bg-black text-white rounded-md hover:bg-gray-800 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
