"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// GET /api/leaderboard/ - leaderboard (placeholder)
router.get("/", (_req, res) => {
    res.json({ data: [], message: "Leaderboard (stub)" });
});
exports.default = router;
