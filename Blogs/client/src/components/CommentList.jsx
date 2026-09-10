import React from "react";

const CommentList = ({ comments }) => {
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
