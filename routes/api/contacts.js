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

router.get("/:id", ctrlWrapper(ctrl.getContactById));

router.post("/", auth, validation(contactSchema), ctrlWrapper(ctrl.addContact));

router.delete("/:id", ctrlWrapper(ctrl.removeContact));

router.put(
  "/:id",
  validation(changeContactSchema),
  ctrlWrapper(ctrl.updateContactById)
);

router.patch(
  "/:id/favorite",
  validation(updateStatusContactSchema),
  ctrlWrapper(ctrl.updateContactStatus)
);

module.exports = router;
