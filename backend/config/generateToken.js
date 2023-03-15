//installed jsonwebtoken to autherize the user
const jsonwebtoken = require("jsonwebtoken");

const generateToken = (id) => {
  return jsonwebtoken.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
};

module.exports = generateToken;
