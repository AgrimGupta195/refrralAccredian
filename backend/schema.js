import mongoose from "mongoose";

const referralSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    referralCode: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Referral = mongoose.model("Referral", referralSchema);

export default Referral;
