// const contactOperations = require("../../models/contacts");
const { Contact } = require("../../models/contactsModel");

const addContact = async (req, res, next) => {
  const result = await Contact.create(req.body);
  res.status(201).json({
    status: "success",
    code: 201,
    data: result,
  });
};

module.exports = addContact;
