const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const posts = {};
const port = 3002;

app.get("/events", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  if (type === "PostCreated") {
    const { id, title } = data;
    posts[id] = {
      id,
      title,
      comments : []
    };
  }

  if (type === "CommentCreated") {
    const { id, content, postId } = data;
    posts[postId].comments.push({
      id,
      content,
    });
  }

  res.send({ status: "OK" });
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
