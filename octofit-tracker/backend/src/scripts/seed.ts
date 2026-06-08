/**
 * Seed the octofit_db database with test data
 */
import mongoose from "mongoose";
import User from "../models/user";
import Team from "../models/team";
import Activity from "../models/activity";
import Workout from "../models/workout";
import Leaderboard from "../models/leaderboard";

const MONGO = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/octofit_db";

async function seed() {
  console.log("Connecting to MongoDB at", MONGO);
  await mongoose.connect(MONGO);

  console.log("Clearing existing collections...");
  await Promise.all([
    User.deleteMany({}),
    Team.deleteMany({}),
    Activity.deleteMany({}),
    Workout.deleteMany({}),
    Leaderboard.deleteMany({}),
  ]);

  console.log("Creating users...");
  const users = await User.create([
    { name: "Alice Johnson", email: "alice@example.com" },
    { name: "Bob Smith", email: "bob@example.com" },
    { name: "Carmen Diaz", email: "carmen@example.com" },
  ]);

  console.log("Creating teams...");
  const team = await Team.create({ name: "Morning Runners", members: [users[0]._id, users[1]._id] });

  console.log("Creating workouts...");
  const workouts = await Workout.create([
    { title: "Quick 5K", description: "Fast 5 kilometer run", durationMinutes: 25, difficulty: "medium" },
    { title: "Yoga Flow", description: "Relaxing vinyasa sequence", durationMinutes: 40, difficulty: "easy" },
  ]);

  console.log("Logging activities...");
  await Activity.create([
    { user: users[0]._id, type: "run", durationMinutes: 30, distanceKm: 5, calories: 320 },
    { user: users[1]._id, type: "cycle", durationMinutes: 45, distanceKm: 20, calories: 600 },
    { user: users[2]._id, type: "yoga", durationMinutes: 40, calories: 150 },
  ]);

  console.log("Creating leaderboard entries...");
  await Leaderboard.create([
    { user: users[1]._id, points: 120 },
    { user: users[0]._id, points: 95 },
    { user: users[2]._id, points: 60 },
  ]);

  console.log("Seed complete. Counts:");
  const [uCount, tCount, wCount, aCount, lCount] = await Promise.all([
    User.countDocuments(),
    Team.countDocuments(),
    Workout.countDocuments(),
    Activity.countDocuments(),
    Leaderboard.countDocuments(),
  ]);

  console.log({ users: uCount, teams: tCount, workouts: wCount, activities: aCount, leaderboard: lCount });

  await mongoose.disconnect();
}

seed()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Seed failed:", err);
    process.exit(1);
  });
