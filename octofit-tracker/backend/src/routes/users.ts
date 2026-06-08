import { Router } from "express";
import User from "../models/user";

const router = Router();

router.get("/", async (_req, res) => {
  try {
    const users = await User.find().lean();
    res.json({ data: users });
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
});

router.post("/", async (req, res) => {
  try {
    const u = await User.create(req.body);
    res.status(201).json({ data: u });
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
});

export default router;
