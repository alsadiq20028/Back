const express = require("express");
const {
  addPerformance,
  getPerformance,
} = require("../controllers/performanceController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, addPerformance);
router.get("/", authMiddleware, getPerformance);

module.exports = router;
