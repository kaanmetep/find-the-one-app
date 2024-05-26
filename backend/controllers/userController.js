const User = require("../models/userModel");

const mongoose = require("mongoose");

exports.getAllUsers = async (req, res) => {
  try {
    const { excludeId, ids, age, ...queryParams } = req.query;
    let excludedIds = [];
    let idsArray = [];
    if (excludeId) {
      const user = await User.findById(excludeId);
      excludedIds = [...user.likedUsers, ...user.dislikedUsers, excludeId];
    }
    if (ids) {
      idsArray = ids.split(",");
    }

    let dateQuery = {};
    if (age) {
      const [minAge, maxAge] = age.split("-").map(Number);
      const currentDate = new Date();
      const minBirthDate = new Date(
        currentDate.setFullYear(currentDate.getFullYear() - maxAge)
      );
      const maxBirthDate = new Date(
        currentDate.setFullYear(currentDate.getFullYear() + (maxAge - minAge))
      );
      dateQuery = { birthDate: { $gte: minBirthDate, $lte: maxBirthDate } };
    }

    let query = User.find({ ...queryParams, ...dateQuery });

    if (idsArray.length > 0) {
      query = User.find({ _id: { $in: idsArray } });
    } else {
      query = User.find({ ...queryParams, ...dateQuery });
    }

    if (excludedIds.length > 0) {
      query.where("_id").nin(excludedIds);
    }

    const users = await query;
    res.status(200).json({ data: users });
    console.log(req.query);
  } catch (err) {
    res.status(400).json({ message: "users could not fetched" });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate({
      path: "matchedUsers",
      select: "user1_id user2_id status",
    });
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    res.status(200).json({ data: user });
  } catch (err) {
    res.status(500).json({ error: "An unexpected error occurred." });
  }
};
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    return res.status(200).json({ message: "User deleted successfully." });
  } catch (err) {
    res.status(500).json({ error: "An unexpected error occurred." });
  }
};
exports.updatePassword = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("+hashedPassword");
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    if (req.body.newPassword !== req.body.newRePassword) {
      return res.status(400).json({ error: "Passwords do not match." });
    }

    user.hashedPassword = req.body.newPassword;
    await user.save();
    return res.status(200).json({ message: "Password updated successfully." });
  } catch (err) {
    console.error("Error updating password:", err);
    return res.status(500).json({ error: "An unexpected error occurred." });
  }
};
exports.updateInfo = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }
    if (req.body.firstName !== undefined) {
      user.firstName = req.body.firstName;
    }
    if (req.body.lastName !== undefined) {
      user.lastName = req.body.lastName;
    }
    if (req.body.image !== undefined) {
      user.image = req.body.image;
    }
    if (req.body.about !== undefined) {
      user.personelDetails.about = req.body.about;
    }

    await user.save();
    res.status(200).json({ data: user, message: "User updated successfully." });
  } catch (err) {
    res.status(404).json({ message: "Please fill all the areas" });
  }
};
exports.likeUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    if (
      !user.likedUsers.includes(req.params.likedUserId) &&
      !user.dislikedUsers.includes(req.params.likedUserId)
    ) {
      user.likedUsers.push(req.params.likedUserId);
      await user.save();
    }
    res.status(200).json({ message: "user liked successfully." });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.dislikeUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    if (
      !user.dislikedUsers.includes(req.params.dislikedUserId) &&
      !user.likedUsers.includes(req.params.dislikedUserId)
    ) {
      user.dislikedUsers.push(req.params.dislikedUserId);
      await user.save();
    }
    res.status(200).json({ message: "user disliked successfully." });
  } catch (err) {
    res.status(400).json({ message: "you could not disliked the user." });
  }
};

exports.addMatch = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    if (!user.matchedUsers.includes(req.params.matchId)) {
      user.matchedUsers.push(req.params.matchId);
      await user.save();
    }
    res.status(200).json({ data: user });
  } catch (err) {
    res.status(500).json({ message: "An error occurred while matching users" });
  }
};
