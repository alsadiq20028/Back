const Material = require('./../models/materials');

exports.createMaterial = async (req, res) => {
  try {
    const { title, description, teachers } = req.body;
    const newMaterial = await Material.create({ title, description, teachers });
    res.status(201).json({ message: "Material created successfully", newMaterial });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMaterials = async (req, res) => {
  try {
    const Materials = await Material.find().populate("teachers").populate("_id");
    res.status(200).json(Materials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
