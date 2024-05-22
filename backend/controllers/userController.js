const User = require("../models/userModel");

exports.getAllUsers = async (req, res) => {
  try {
    const { excludeId, ids, ...queryParams } = req.query;
    let excludedIds = [];
    let idsArray = [];
    if (excludeId) {
      const user = await User.findById(excludeId);
      excludedIds = [...user.likedUsers, ...user.dislikedUsers, excludeId];
    }
    if (ids) {
      idsArray = ids.split(",");
    }
    let query = User.find(queryParams);

    if (idsArray.length > 0) {
      query = User.find({ _id: { $in: idsArray } });
    } else {
      query = User.find(queryParams);
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
    res.status(200).json({ data: user });
  } catch (err) {
    res.status(404).json({ message: "user is not found!" });
  }
};
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ data: "User deleted successfully." });
  } catch (err) {
    res.status(404).json({ message: "User could not deleted." });
  }
};
exports.updatePassword = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("+hashedPassword");
    user.hashedPassword = req.body.newPassword;
    user.confirmPassword = req.body.newRePassword;
    await user.save();
    res.status(200).json({ data: "Password updated successfully." });
  } catch (err) {
    res.status(404).json({ data: "Password could not updated." });
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
    if (
      !user.likedUsers.includes(req.params.likedUserId) &&
      !user.dislikedUsers.includes(req.params.likedUserId)
    ) {
      user.likedUsers.push(req.params.likedUserId);
      await user.save();
    }
    res.status(200).json({ message: "user liked successfully." });
  } catch (err) {
    res.status(400).json({ message: "you could not like the user." });
  }
};

exports.dislikeUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
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
    if (!user.matchedUsers.includes(req.params.matchId)) {
      user.matchedUsers.push(req.params.matchId);
      await user.save();
    }
    res.status(200).json({ data: user });
  } catch (err) {
    res.status(500).json({ message: "An error occurred while matching users" });
  }
};
