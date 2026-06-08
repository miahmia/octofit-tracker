/**
 * Database configuration for Octofit backend
 * Uses mongoose to connect to the octofit_db database
 */
import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/octofit_db";

export async function connectDB(): Promise<typeof mongoose> {
  if (mongoose.connection.readyState >= 1) return mongoose;
  await mongoose.connect(MONGO_URL);
  console.log("Connected to MongoDB at", MONGO_URL);
  return mongoose;
}

export default connectDB;
