const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    dateAndTime: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["Online", "Offline"],
    },
    tags: [String],
    posterUrl: String,
    description: {
      type: "String",
      required: true,
    },
    venue: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    judges: [
      {
        type: Object,
      },
    ],
    presentors: [
      {
        type: Object,
      },
    ],
    organizers: [
      {
        type: Object,
      },
    ],
    prizes: [String],
    additionalInfo: [String],
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
