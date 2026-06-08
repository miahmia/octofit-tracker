import { Router } from "express";
import Workout from "../models/workout";

const router = Router();

router.get("/", async (_req, res) => {
  try {
    const workouts = await Workout.find().lean();
    res.json({ data: workouts });
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
});

router.post("/", async (req, res) => {
  try {
    const w = await Workout.create(req.body);
    res.status(201).json({ data: w });
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
});

export default router;
