const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();
const {
  addTeacher,
  getTeachers,
} = require("../controllers/teacherController");

router.post("/", addTeacher);
router.get("/", getTeachers);

module.exports = router;
