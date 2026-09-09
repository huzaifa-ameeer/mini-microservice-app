import React, { useEffect, useState } from "react";
import axios from "axios";
import CreateComment from "./CreateComment";

const PostList = () => {
  const [post, setPost] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:3000/posts");
    setPost(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10 flex flex-wrap gap-4">
      {Object.values(post).map((post) => (
        <div
          key={post.id}
          className="border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition"
        >
          <h2 className="text-xl font-semibold text-gray-900">{post.title}</h2>
          <CreateComment postId = {post.id}/>
        </div>
      ))}
      
    </div>
  );
};

export default PostList;
