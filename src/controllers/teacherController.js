const mongoose = require("mongoose");
const Teacher = require("../models/Teacher");

exports.addTeacher = async (req, res) => {
  try {
    const { fourthname, material, user } = req.body;
    const newTeacher = await Teacher.create({
      fourthname: fourthname,
      material: material,
      user: user,
    });
    res.status(201).json({ message: "Teacher added successfully", newTeacher });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTeachers = async (req, res) => {
  try {
    const Teachers = await Teacher.find().populate("user");
    res.status(200).json(Teachers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
