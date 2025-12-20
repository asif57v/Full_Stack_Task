import express from "express";
import Subscriber from "../models/Subscriber.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const subscriber = new Subscriber(req.body);
  await subscriber.save();
  res.json(subscriber);
});

router.get("/", async (req, res) => {
  res.json(await Subscriber.find());
});

export default router;
