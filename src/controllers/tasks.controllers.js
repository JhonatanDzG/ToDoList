const pool = require("../db");

const getAllTasks = async (req, res) => {
try {
    const allTasks= await pool.query("SELECT * FROM task");
    res.json(allTasks.rows);
} catch (error) {
    console.log(error.message);
       
}
    
};

const getTask = (req, res) => {
  res.send("retrieving a single task");
};

const createTask = async (req, res) => {
  const { title, description } = req.body;

try {
    const result = await pool.query(
        "INSERT INTO task (title, description) VALUES($1, $2) RETURNING *",
        [title, description]
      );
    
      res.json(result.rows[0]);
} catch (error) {
    res.json({error: error.message})
    
}
};

const deleteTask = (req, res) => {
  res.send("deleting a task");
};
const updateTask = (req, res) => {
  res.send("updating a task");
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
};
