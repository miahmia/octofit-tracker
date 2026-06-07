"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const PORT = process.env.PORT ? Number(process.env.PORT) : 8000;
const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/octofit";
app.use(express_1.default.json());
app.get("/", (_req, res) => {
    res.json({ status: "ok", service: "octofit-backend" });
});
async function start() {
    try {
        await mongoose_1.default.connect(MONGO_URL);
        console.log("Connected to MongoDB at", MONGO_URL);
        app.listen(PORT, () => {
            console.log(`Server listening on http://localhost:${PORT}`);
        });
    }
    catch (err) {
        console.error("Failed to start server:", err);
        process.exit(1);
    }
}
start();
