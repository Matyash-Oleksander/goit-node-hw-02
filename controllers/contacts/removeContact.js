// const contactOperations = require("../../models/contacts");
const { Contact } = require("../../models/contactsModel");

const { NotFound } = require("http-errors");

const removeContact = async (req, res, next) => {
  const { id } = req.params;
  const { _id } = req.user;
  // console.log(id);
  await Contact.findOneAndRemove({ owner: id, _id }, (error, result) => {
    if (error) {
      throw new NotFound(`Contact with id=${id} not found`);
    }
    res.json({
      status: "success",
      code: 200,
      message: `contact id=${id} delete`,
      data: { result },
    });
  });
};

// const removeContact = async (req, res, next) => {
//   const { id } = req.params;
//   const { _id } = req.user;
//   // console.log(id);
//   const result = await Contact.findByIdAndRemove(id, { owner: _id });
//   if (!result) {
//     throw new NotFound(`Contact with id=${id} not found`);
//   }
//   res.json({
//     status: "success",
//     code: 200,
//     message: `contact id=${id} delete`,
//     data: { result },
//   });
// };

module.exports = removeContact;
