"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// GET /api/teams/ - list teams (placeholder)
router.get("/", (_req, res) => {
    res.json({ data: [], message: "List teams (stub)" });
});
// POST /api/teams/ - create team (placeholder)
router.post("/", (req, res) => {
    const team = req.body || {};
    res.status(201).json({ data: team, message: "Create team (stub)" });
});
exports.default = router;
