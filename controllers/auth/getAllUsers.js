const { User } = require("../../models/user");

const getAllUsers = async (req, res, next) => {
  const users = await User.find({});
  return res.status(200).json({
    message: users,
  });
};

module.exports = getAllUsers;
