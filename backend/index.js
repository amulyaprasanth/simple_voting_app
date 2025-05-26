const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory data store
let candidates = [
  { name: "john", votes: 0 },
  { name: "mary", votes: 0 },
  { name: "joe", votes: 0 },
  { name: "surya", votes: 0 },
];

// GET route to return all candidates
app.get("/candidates", (req, res) => {
  res.send(candidates);
});

// ✅ POST route to increment vote count
app.post("/vote", (req, res) => {
  const { name } = req.body;

  const candidate = candidates.find((c) => c.name === name);
  if (candidate) {
    candidate.votes += 1;
    res.status(200).send({ message: "Vote counted", candidate });
  } else {
    res.status(404).send({ message: "Candidate not found" });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
