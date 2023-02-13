const { User } = require("../../models/user");

const userCurrent = async (req, res, next) => {
  console.log(req.user);
  const { user } = req;
  res.status(200).json({
    status: "succes",
    code: 200,
    email: user.email,
    subscription: user.subscription,
  });
  return res.status(401).json({ message: "Not authorized" });
};

module.exports = userCurrent;
