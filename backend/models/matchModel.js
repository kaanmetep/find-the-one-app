const mongoose = require("mongoose");
const matchSchema = new mongoose.Schema(
  {
    user1_id: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    user2_id: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    matchedAt: {
      type: Date,
    },
    status: {
      type: bool,
    },
  },
  { strictQuery: true }
);
const Match = mongoose.model("Match", matchSchema);

module.exports = Match;
