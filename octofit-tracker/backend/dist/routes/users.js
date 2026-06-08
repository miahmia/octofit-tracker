"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// GET /api/users/ - list users (placeholder)
router.get("/", (_req, res) => {
    res.json({ data: [], message: "List users (stub)" });
});
// POST /api/users/ - create user (placeholder)
router.post("/", (req, res) => {
    const user = req.body || {};
    res.status(201).json({ data: user, message: "Create user (stub)" });
});
exports.default = router;
