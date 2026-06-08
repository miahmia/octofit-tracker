import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import usersRouter from "./routes/users";
import teamsRouter from "./routes/teams";
import activitiesRouter from "./routes/activities";
import leaderboardRouter from "./routes/leaderboard";
import workoutsRouter from "./routes/workouts";

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 8000;
const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/octofit_db";

app.use(express.json());

// Codespaces-aware CORS: if running in Codespaces, allow the Codespaces preview URL
const codespace = process.env.CODESPACE_NAME;
const allowedOrigins: string[] = [];
if (codespace) {
  // Common Codespaces preview host patterns
  allowedOrigins.push(`https://${codespace}-${PORT}.preview.app.github.dev`);
  allowedOrigins.push(`https://${codespace}-${PORT}.githubpreview.dev`);
}

// Allow local frontend origin for Vite default port
allowedOrigins.push(`http://localhost:5173`);

app.use(
  cors({
    origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error("Not allowed by CORS"));
    },
  })
);

app.get("/", (_req, res) => {
  res.json({ status: "ok", service: "octofit-backend" });
});

// Mount API routes
app.use("/api/users", usersRouter);
app.use("/api/teams", teamsRouter);
app.use("/api/activities", activitiesRouter);
app.use("/api/leaderboard", leaderboardRouter);
app.use("/api/workouts", workoutsRouter);

async function start() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB at", MONGO_URL);
    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
      if (codespace) {
        console.log(
          `Codespaces preview should be available at https://${codespace}-${PORT}.preview.app.github.dev`
        );
      }
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}

start();
