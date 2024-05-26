const Match = require("../models/matchModel");

exports.createMatch = async (req, res) => {
  try {
    const newMatch = await Match.create(req.body);
    res.status(201).json({ data: newMatch });
  } catch (err) {
    res.status(401).json({ message: "match could not created" });
  }
};

exports.deleteMatch = async (req, res) => {
  try {
    const match = await Match.findByIdAndDelete(req.params.id);
    if (!match) {
      return res.status(404).json({ error: "Match not found." });
    }
    res.status(200).json({ data: "match is deleted succesfully." });
  } catch (err) {
    res.status(401).json({ message: "you couldnt delete the match." });
  }
};
