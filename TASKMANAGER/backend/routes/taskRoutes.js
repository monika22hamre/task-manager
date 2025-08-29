const express = require("express");
const { protect, adminOnly } = require("../middlewares/authMiddleware");
const {
  getDashboardData,
  getUserDashboardData,
  getTaskById,
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  updateTaskStatus,
  updateTaskChecklist,
} = require("../controllers/taskController");

const router = express.Router();

//Task Management Routes
router.get("/dashboard-data", protect, getDashboardData);
router.get("/user-dashboard-data", protect, getUserDashboardData);
router.get("/", protect, getTasks); //Get all tasks (Admin: all, user: assigned)
router.get("/:id", protect, getTaskById); // Get task by ID
router.post("/", protect, adminOnly, createTask); // Create a task admin only
router.put("/:id", protect, updateTask); // Update Task details
router.delete("/:id", protect, adminOnly, deleteTask); //Delete a task (Admin only)
router.put("/:id/status", protect, updateTaskStatus); // Update Task status
router.put("/:id/todo", protect, updateTaskChecklist); // uppdate task checklist

module.exports = router;
