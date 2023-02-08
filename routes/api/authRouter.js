const express = require("express");

const { auth: ctrl } = require("../../controllers");

const { auth, validation, ctrlWrapper } = require("../../middlewares");

const { authSchema, emailSchema } = require("../../models/user");

const authRouter = express.Router();

authRouter.post(
  "/register",
  validation(authSchema),
  ctrlWrapper(ctrl.register)
);
authRouter.post("/login", validation(authSchema), ctrlWrapper(ctrl.login));
authRouter.get("/current", auth, ctrlWrapper(ctrl.userCurrent));
authRouter.get("/logout", auth, ctrlWrapper(ctrl.logout));

module.exports = authRouter;
