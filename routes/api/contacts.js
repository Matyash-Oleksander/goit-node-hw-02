const express = require("express");

const { contacts: ctrl } = require("../../controllers");

const { auth, validation, ctrlWrapper } = require("../../middlewares");

const {
  contactSchema,
  changeContactSchema,
  updateStatusContactSchema,
} = require("../../schemas");

const router = express.Router();

router.get("/", auth, ctrlWrapper(ctrl.getAll));

router.get("/:id", auth, ctrlWrapper(ctrl.getContactById));

router.post("/", auth, validation(contactSchema), ctrlWrapper(ctrl.addContact));

router.delete("/:id", auth, ctrlWrapper(ctrl.removeContact));

router.put(
  "/:id",
  auth,
  validation(changeContactSchema),
  ctrlWrapper(ctrl.updateContactById)
);

router.patch(
  "/:id/favorite",
  auth,
  validation(updateStatusContactSchema),
  ctrlWrapper(ctrl.updateContactStatus)
);

module.exports = router;
