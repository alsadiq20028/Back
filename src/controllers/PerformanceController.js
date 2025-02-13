const Performance = require("../models/Performance");

// Add or update performance record for a student
exports.addPerformance = async (req, res) => {
  try {
    const { student, course, grade, remarks } = req.body;
    let performance = await Performance.findOne({ student, course });
    if (performance) {
      performance.grade = grade;
      performance.remarks = remarks;
      await performance.save();
    } else {
      performance = await Performance.create({
        student,
        course,
        grade,
        remarks,
      });
    }
    res.status(201).json({ message: "Performance updated", performance });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Retrieve performance records for a course or student
exports.getPerformance = async (req, res) => {
  try {
    const { student, course } = req.query;
    const query = {};
    if (student) query.student = student;
    if (course) query.course = course;
    const performances = await Performance.find(query)
      .populate("student", "name")
      .populate("course", "title");
    res.status(200).json(performances);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
