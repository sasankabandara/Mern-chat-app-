const mongoose = require("mongoose");

const chatModel = mongoose.Schema(
  {
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false }, //in the beginning it's set to false
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    latestMessage: { type: mongoose.Schema.Types.ObjectId, ref: "Message" },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId, //admin is also a user so we user same as user
      ref: "User",
    },
  },
  { timestamps: true }
  // create timestamp when new chat is added;
);

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;
