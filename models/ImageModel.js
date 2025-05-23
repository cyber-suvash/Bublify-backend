const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema(
  {
    path: {
      type: String,
      required: true,
    },
    filename: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // ✅ This creates a relationship with the "User" model
      required: true,
    },
  },
  {
    timestamps: true, // Optional: adds createdAt and updatedAt fields
  }
);

const ImageModel = mongoose.model("Image", ImageSchema);

module.exports = ImageModel;
