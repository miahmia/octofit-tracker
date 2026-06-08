import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  joinedAt: Date;
  team?: mongoose.Types.ObjectId;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  joinedAt: { type: Date, default: () => new Date() },
  team: { type: Schema.Types.ObjectId, ref: "Team" },
});

export default mongoose.model<IUser>("User", UserSchema);
