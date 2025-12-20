import express from "express";
import Project from "../models/Project.js";

const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  try {
    console.log("REQ BODY:", req.body);

    const project = new Project({
      name: req.body.name,
      description: req.body.description,
      image: req.body.imageUrl
    });

    await project.save();
    res.json(project);
  } catch (error) {
    console.error("PROJECT SAVE ERROR:", error);
    res.status(500).json({ message: error.message });
  }
});


// READ
router.get("/", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

// UPDATE ✅
router.put("/:id", async (req, res) => {
  const updated = await Project.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      description: req.body.description,
      image: req.body.imageUrl
    },
    { new: true }
  );
  res.json(updated);
});

// DELETE ✅
router.delete("/:id", async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: "Project deleted" });
});

export default router;
