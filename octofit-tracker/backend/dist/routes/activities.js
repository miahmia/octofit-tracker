"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// GET /api/activities/ - list activities (placeholder)
router.get("/", (_req, res) => {
    res.json({ data: [], message: "List activities (stub)" });
});
// POST /api/activities/ - log activity (placeholder)
router.post("/", (req, res) => {
    const activity = req.body || {};
    res.status(201).json({ data: activity, message: "Log activity (stub)" });
});
exports.default = router;
