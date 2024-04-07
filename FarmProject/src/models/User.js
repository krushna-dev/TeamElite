import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    fullName: {
      type: String,
      required: true,
    },

    phoneNumber: {
      type: String,
    },

    address: {
      type: String,
    },
    role: {
      type: String,
      enum: ["farmer", "researcher", "buyer"],
      default: "buyer",
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);

