import { Router } from "express";
import Activity from "../models/activity";

const router = Router();

router.get("/", async (_req, res) => {
  try {
    const activities = await Activity.find().populate("user").lean();
    res.json({ data: activities });
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
});

router.post("/", async (req, res) => {
  try {
    const a = await Activity.create(req.body);
    res.status(201).json({ data: a });
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
});

export default router;
