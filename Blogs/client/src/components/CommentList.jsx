import React, { useEffect, useState } from "react";
import axios from "axios";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const fetchComments = async () => {
    const res = await axios.get(
      `http://localhost:3001/posts/${postId}/comments`,
    );
    setComments(res.data);
  };
  useEffect(() => {
    fetchComments();
  }, [postId]);

  return (
    <div className="mt-4 space-y-2">
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="px-3 py-2 bg-gray-50 border border-gray-100 rounded-md text-sm text-gray-700"
        >
          {comment.content}
        </div>
      ))}
    </div>
  );
};

export default CommentList;
