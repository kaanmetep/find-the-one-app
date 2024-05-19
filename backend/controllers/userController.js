const User = require("../models/userModel");

exports.getAllUsers = async (req, res) => {
  try {
    const { excludeId, ...queryParams } = req.query;
    const user = await User.findById(excludeId);
    const excludedIds = [...user.likedUsers, ...user.dislikedUsers, excludeId];

    const query = User.find(queryParams);

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
    const user = await User.findById(req.params.id);
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
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.image = req.body.image;
    user.personelDetails.about = req.body.about;
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
