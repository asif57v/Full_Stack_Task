import express from "express";
import Client from "../models/Client.js";

const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  const client = new Client({
    name: req.body.name,
    designation: req.body.designation,
    description: req.body.description,
    image: req.body.imageUrl
  });
  await client.save();
  res.json(client);
});

// READ
router.get("/", async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const updated = await Client.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      designation: req.body.designation,
      description: req.body.description,
      image: req.body.imageUrl
    },
    { new: true }
  );
  res.json(updated);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Client.findByIdAndDelete(req.params.id);
  res.json({ message: "Client deleted" });
});

export default router;
