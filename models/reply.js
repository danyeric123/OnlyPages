import mongoose from "mongoose";

export { replySchema };

const replySchema = new mongoose.Schema(
  {
    content: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" },
  },
  {
    timestamps: true,
  }
);
