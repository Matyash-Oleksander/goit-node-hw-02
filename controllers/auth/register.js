const { User } = require("../../models/user");

const bcrypt = require("bcrypt");

const { Conflict } = require("http-errors");

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`User with ${email} already exist`);
  }
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const result = await User.create({ email, password: hashPassword });
  // console.log(result);
  res.status(201).json({
    status: "succes",
    code: 201,
    data: {
      user: { email },
    },
  });
};

module.exports = register;
