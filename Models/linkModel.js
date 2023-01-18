import { mongoose } from "mongoose";

const linkSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      // required: true,
      trim: true,
    },
    subjectCode: {
      type: String,
      trim: true,
    },
    url: {
      type: String,
      // required: true,
      trim: true,
    },
    clicks: {
      type: Number,
      default: 0,
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const Links = mongoose.models.link || mongoose.model("link", linkSchema);
module.exports = Links;
