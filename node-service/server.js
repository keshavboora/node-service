const express = require("express");
// Simple task service
// Simple task service
const app = express();
app.use(express.json());

let tasks = [];
let nextId = 1;

app.put("/tasks/:id/done", (req, res) => {
  const task = tasks.find((t) => t.id === Number(req.params.id));
  if (!task) return res.status(404).json({ error: "task not found" });
  task.done = true;
  res.json(task);
});

app.put("/tasks/:id/done", (req, res) => {
  const task = tasks[req.params.id];
  task.done = true;
  res.json(task);
});

app.listen(3000);
