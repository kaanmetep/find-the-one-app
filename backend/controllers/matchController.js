const Match = require("../models/matchModel");

exports.createMatch = async (req, res) => {
  try {
    const newMatch = await Match.create(req.body);
    res.status(201).json({ data: newMatch });
  } catch (err) {
    res.status(401).json({ message: "match could not created" });
  }
};
