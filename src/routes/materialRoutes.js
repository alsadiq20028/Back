const express = require("express");
const {
  createMaterial,
  getMaterials,
} = require("../controllers/materialsController");
const router = express.Router();


router.post("/", createMaterial);
router.get("/", getMaterials);

module.exports = router;
