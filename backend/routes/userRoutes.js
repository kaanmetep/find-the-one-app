const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.route("/").get(userController.getAllUsers);
router
  .route("/:id")
  .get(userController.getUser)
  .delete(userController.deleteUser);

router.patch("/:id/password", userController.updatePassword);
router.patch("/:id/info", userController.updateInfo);
router.patch("/:id/:likedUserId/like", userController.likeUser);
router.patch("/:id/:dislikedUserId/dislike", userController.dislikeUser);
router.patch("/:id/:matchId/match", userController.addMatch);

module.exports = router;
