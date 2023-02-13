const register = require("./register");
const login = require("./login");
const userCurrent = require("./userCurrent");
const logout = require("./logout");
const getAllUsers = require("./getAllUsers");
const updateAvatar = require("./updateAvatar");

module.exports = {
  register,
  login,
  userCurrent,
  logout,
  getAllUsers,
  updateAvatar,
};