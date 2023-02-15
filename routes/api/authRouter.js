const express = require("express");

const { auth: ctrl } = require("../../controllers");

const { auth, validation, upload, ctrlWrapper } = require("../../middlewares");

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
authRouter.get("/", ctrlWrapper(ctrl.getAllUsers));
authRouter.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);
authRouter.get("/verify/:verificationToken", ctrlWrapper(ctrl.verifyEmail));
authRouter.post(
  "/verify",
  validation(emailSchema),
  ctrlWrapper(ctrl.userRepeatVerify)
);

module.exports = authRouter;
