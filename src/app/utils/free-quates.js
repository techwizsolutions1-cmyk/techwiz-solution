import mongoose from "mongoose";

const ProposalRequestSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },
    workEmail: {
      type: String,
      required: [true, "Work email is required"],
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    },
    website: {
      type: String,
      required: [true, "Website is required"],
      trim: true,
    },
    company: {
      type: String,
      required: [true, "Company name is required"],
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    projectBudget: {
      type: String,
      required: [true, "Project budget is required"],
      enum: [
        "Less than $1,000",
        "$1,000 - $5,000",
        "$5,000 - $10,000",
        "$10,000 - $50,000",
        "$50,000+",
      ], // optional, can be adjusted to your form options
    },
    comments: {
      type: String,
      default: "",
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.ProposalRequest ||
  mongoose.model("ProposalRequest", ProposalRequestSchema);
