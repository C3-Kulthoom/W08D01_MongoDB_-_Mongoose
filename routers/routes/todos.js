const express = require("express");
const {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  completedtaskes
}  = require('../controllers/todos');

const todoRouter = express.Router();

todoRouter.get("/todos", getAllTodos);
todoRouter.post("/create/todos", createTodo);
todoRouter.put("/update/todos", updateTodo);
todoRouter.delete("/delete/todos", deleteTodo);
todoRouter.get("/completed/todos",completedtaskes );
module.exports = todoRouter;
