const { User } = require("../../models/user");

const gravatar = require("gravatar");

const bcrypt = require("bcrypt");

const { Conflict } = require("http-errors");

const { nanoid } = require("nanoid");

const { sendEmail } = require("../../helpers");

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with ${email} already exist`);
  }
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const avatarURL = gravatar.url(email);
  const verificationToken = nanoid();

  const result = await User.create({
    email,
    password: hashPassword,
    avatarURL,
    verificationToken,
  });

  const mail = {
    to: email,
    subject: "Підтвердження email",
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verificationToken}">Підтвердіть email</a>`,
  };

  await sendEmail(mail);

  // console.log(result);
  res.status(201).json({
    status: "succes",
    code: 201,
    data: {
      user: { email, avatarURL },
    },
  });
};

module.exports = register;
