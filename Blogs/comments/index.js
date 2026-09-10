const express = require("express");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());

const port = 3001;
const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post("/posts/:id/comments", async (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;
  const comments = commentsByPostId[req.params.id] || [];
  comments.push({
    id: commentId,
    content,
  });
  commentsByPostId[req.params.id] = comments;

  await axios.post("http://localhost:3003/events", {
    type: "CommentCreated",
    data: {
      postId: req.params.id,
      id: commentId,
      content,
    },
  });

  res.status(201).json({
    message: "comment created successfully",
  });
});

app.post("/events", (req, res) => {
  console.log("Event received:", req.body.type);
  res.send({});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
