"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// GET /api/workouts/ - list workouts (placeholder)
router.get("/", (_req, res) => {
    res.json({ data: [], message: "List workouts (stub)" });
});
// POST /api/workouts/ - create workout (placeholder)
router.post("/", (req, res) => {
    const workout = req.body || {};
    res.status(201).json({ data: workout, message: "Create workout (stub)" });
});
exports.default = router;
