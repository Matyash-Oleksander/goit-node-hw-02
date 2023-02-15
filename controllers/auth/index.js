const register = require("./register");
const login = require("./login");
const userCurrent = require("./userCurrent");
const logout = require("./logout");
const getAllUsers = require("./getAllUsers");
const updateAvatar = require("./updateAvatar");
const verifyEmail = require("./verifyEmail");
const userRepeatVerify = require("./userRepeatVerify");

module.exports = {
  register,
  login,
  userCurrent,
  logout,
  getAllUsers,
  updateAvatar,
  verifyEmail,
  userRepeatVerify,
};
