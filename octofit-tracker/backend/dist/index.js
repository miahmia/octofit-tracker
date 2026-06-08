"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const users_1 = __importDefault(require("./routes/users"));
const teams_1 = __importDefault(require("./routes/teams"));
const activities_1 = __importDefault(require("./routes/activities"));
const leaderboard_1 = __importDefault(require("./routes/leaderboard"));
const workouts_1 = __importDefault(require("./routes/workouts"));
const app = (0, express_1.default)();
const PORT = process.env.PORT ? Number(process.env.PORT) : 8000;
const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/octofit";
app.use(express_1.default.json());
// Codespaces-aware CORS: if running in Codespaces, allow the Codespaces preview URL
const codespace = process.env.CODESPACE_NAME;
const allowedOrigins = [];
if (codespace) {
    // Common Codespaces preview host patterns
    allowedOrigins.push(`https://${codespace}-${PORT}.preview.app.github.dev`);
    allowedOrigins.push(`https://${codespace}-${PORT}.githubpreview.dev`);
}
// Allow local frontend origin for Vite default port
allowedOrigins.push(`http://localhost:5173`);
app.use((0, cors_1.default)({
    origin: (origin, callback) => {
        if (!origin)
            return callback(null, true);
        if (allowedOrigins.includes(origin))
            return callback(null, true);
        return callback(new Error("Not allowed by CORS"));
    },
}));
app.get("/", (_req, res) => {
    res.json({ status: "ok", service: "octofit-backend" });
});
// Mount API routes
app.use("/api/users", users_1.default);
app.use("/api/teams", teams_1.default);
app.use("/api/activities", activities_1.default);
app.use("/api/leaderboard", leaderboard_1.default);
app.use("/api/workouts", workouts_1.default);
async function start() {
    try {
        await mongoose_1.default.connect(MONGO_URL);
        console.log("Connected to MongoDB at", MONGO_URL);
        app.listen(PORT, () => {
            console.log(`Server listening on http://localhost:${PORT}`);
            if (codespace) {
                console.log(`Codespaces preview should be available at https://${codespace}-${PORT}.preview.app.github.dev`);
            }
        });
    }
    catch (err) {
        console.error("Failed to start server:", err);
        process.exit(1);
    }
}
start();
