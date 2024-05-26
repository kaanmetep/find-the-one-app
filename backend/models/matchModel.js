const mongoose = require("mongoose");
const matchSchema = new mongoose.Schema(
  {
    user1_id: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    user2_id: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    matchedAt: {
      type: Date,
    },
    status: {
      type: Boolean,
    },
  },
  { strictQuery: true }
);
const Match = mongoose.model("Match", matchSchema);

module.exports = Match;
