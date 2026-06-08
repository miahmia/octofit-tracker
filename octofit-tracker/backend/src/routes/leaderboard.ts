import { Router } from "express";
import Leaderboard from "../models/leaderboard";

const router = Router();

router.get("/", async (_req, res) => {
  try {
    const entries = await Leaderboard.find().populate("user").sort({ points: -1 }).lean();
    res.json({ data: entries });
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
});

export default router;
