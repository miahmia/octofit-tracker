import { Router } from "express";
import Team from "../models/team";

const router = Router();

router.get("/", async (_req, res) => {
  try {
    const teams = await Team.find().populate("members").lean();
    res.json({ data: teams });
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
});

router.post("/", async (req, res) => {
  try {
    const t = await Team.create(req.body);
    res.status(201).json({ data: t });
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
});

export default router;
