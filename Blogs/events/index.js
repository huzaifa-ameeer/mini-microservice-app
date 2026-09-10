const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());
const port = 3003;

app.post("/events", async (req, res) => {
  const event = req.body;
  await axios.post("http://localhost:3000/events", event);
  await axios.post("http://localhost:3001/events", event);
  await axios.post("http://localhost:3002/events", event);

  res.send({ status: "OK" });
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
