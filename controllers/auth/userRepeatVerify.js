const { User } = require("../../models/user");

const sendEmail = require("../../helpers");

const { NotFound } = require("http-errors");

const userRepeatVerify = async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  //   const { verificationToken } = req.params;

  if (!user) {
    throw NotFound();
  }
  if (user.verify) {
    return res.status(400).json({
      message: "Verification has already been passed",
    });
  }
  await sendEmail(email, user.verificationToken);
  return res.status(200).json({
    message: "Verification email sent",
  });
};

module.exports = userRepeatVerify;
