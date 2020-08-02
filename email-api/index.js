const express = require("express");
const app = express();
const cors = require("cors");

const contacts = require("./data/contacts.json");
const tasks = require("./data/tasks.json");
app.use(cors());

app.get("/contacts", (req, res) => {
  return res.json({ contacts });
});

app.get("/tasks", (req, res) => {
  return res.json({ taskData: tasks });
});

app.listen(4000, () => {
  console.log("Server is running at http://localhost:4000");
});
