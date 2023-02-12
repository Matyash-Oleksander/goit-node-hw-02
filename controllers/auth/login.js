const { User } = require("../../models/user");

const bcrypt = require("bcrypt");

const { Unauthorized } = require("http-errors");

const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");
dotenv.config();
const { SECRET_KEY } = process.env;

// const SECRET_KEY = "Password19";

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw new Unauthorized(`Email ${email} or password is wrong`);
  }

  const passCompare = bcrypt.compareSync(password, user.password);
  if (!passCompare) {
    throw new Unauthorized(`Email ${email} or password is wrong`);
  }
  // console.log(user);

  const payload = {
    id: user._id,
  };
  // console.log(payload);

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "60m" });
  await User.findByIdAndUpdate(user._id, { token });
  user.token = token;
  // console.log(token);
  res.status(200).json({
    status: "succes",
    code: 200,
    data: {
      token,
    },
  });
};

module.exports = login;
