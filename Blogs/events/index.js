const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());
const port = 3003;

app.post("/event", (req, res) => {
  const event = req.body;
  axios.post("http://localhost:3000/event", event);
  axios.post("http://localhost:3001/event", event);
  axios.post("http://localhost:3002/event", event);

  res.send({ status: "OK" });
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
