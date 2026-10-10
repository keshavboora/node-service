const express = require("express");

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
  const task = tasks.find((t) => t.id === Number(req.params.id));
  if (!task) return res.status(404).json({ error: "task not found" });
  task.done = true;
  res.json(task);
});

app.listen(3000);
