import mongoose, { Schema, Document } from "mongoose";

export interface IWorkout extends Document {
  title: string;
  description?: string;
  durationMinutes: number;
  difficulty?: string;
}

const WorkoutSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  durationMinutes: { type: Number, required: true },
  difficulty: { type: String },
});

export default mongoose.model<IWorkout>("Workout", WorkoutSchema);
