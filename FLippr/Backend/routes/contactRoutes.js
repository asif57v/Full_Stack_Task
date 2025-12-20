import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// CREATE CONTACT
router.post("/", async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.json(contact);
});

// GET ALL CONTACTS
router.get("/", async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

export default router;
