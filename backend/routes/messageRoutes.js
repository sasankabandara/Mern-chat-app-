const express = require("express");
const {
  sendMessage,
  allMessages,
} = require("../controllers/messageControllers");
const { protect } = require("../middleWare/authMiddleWare");

const router = express.Router();

router.route("/").post(protect, sendMessage);
router.route("/:chatId").get(protect, allMessages);

module.exports = router;
