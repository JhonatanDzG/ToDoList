const { Router } = require("express");

const pool = require("../db.js");
const {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
} = require("../controllers/tasks.controllers.js");

const router = Router();

router.get("/tasks", getAllTasks);

router.get("/tasks/01", getTask);

router.post("/tasks", createTask);

router.delete("/tasks", deleteTask);

router.put("/tasks", updateTask);

module.exports = router;
