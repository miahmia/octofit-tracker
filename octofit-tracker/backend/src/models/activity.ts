import mongoose, { Schema, Document } from "mongoose";

export interface IActivity extends Document {
  user: mongoose.Types.ObjectId;
  type: string;
  durationMinutes: number;
  distanceKm?: number;
  calories?: number;
  occurredAt: Date;
}

const ActivitySchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  type: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  distanceKm: { type: Number },
  calories: { type: Number },
  occurredAt: { type: Date, default: () => new Date() },
});

export default mongoose.model<IActivity>("Activity", ActivitySchema);
