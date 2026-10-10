const express = require("express");

const app = express();
app.use(express.json());

let tasks = [];
let nextId = 1;

app.post("/tasks", (req, res) => {
  const title = req.body && req.body.title;
  if (typeof title !== "string" || title.trim() === "") {
    return res.status(400).json({ error: "title must be a non-empty string" });
  }
  const task = { id: nextId++, title: title.trim(), done: false };
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
