const mongoose = require("mongoose");

const carFormSchema = new mongoose.Schema({
  images: {
    type: [String],
    required: true,
  },
  carModel: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    enum: ["Lahore", "Karachi"],
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("CarForm", carFormSchema);
