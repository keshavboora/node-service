const express = require("express");
// Simple task service
// Simple task service
const app = express();
app.use(express.json());

let tasks = [];
let nextId = 1;

app.post("/tasks", (req, res) => {
  const task = { id: nextId++, title: req.body.title, done: false };
  tasks.push(task);
  res.status(201).json(task);
});

app.put("/tasks/:id/done", (req, res) => {
  const task = tasks[req.params.id];
  task.done = true;
  res.json(task);
});

app.listen(3000);
