const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    pic: {
      type: String,
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password); // compair enterd password with real password
};

userSchema.pre("save", async function (next) {
  //using "pre" keyword encrypt the password before save
  if (!this.isModified) {
    next();
  }
  const salt = await bcrypt.genSalt(10); // the higer the number(10) more strong the password get
  this.password = await bcrypt.hash(this.password, salt); //hashing the password
});
const User = mongoose.model("User", userSchema);

module.exports = User;
