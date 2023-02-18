// const contactOperations = require("../../models/contacts");
const { Contact } = require("../../models/contactsModel");

const { NotFound } = require("http-errors");

const getContactById = async (req, res, next) => {
  const { id } = req.params;
  const { _id } = req.user;
  await Contact.findOne({ owner: id, _id }, (error, result) => {
    if (error) {
      throw new NotFound(`Contact with id=${id} not found`);
    }
    res.json({
      status: "success",
      code: 200,
      data: { result },
    });
  });
};

// const getContactById = async (req, res, next) => {
//   const { id } = req.params;
//   const { _id } = req.user;
//   const result = await Contact.findById(id);
//   const success = String(result.owner) === String(_id);
//   if (!success) {
//     throw new NotFound(`Contact with id=${id} not found`);
//   }
//   res.json({
//     status: "success",
//     code: 200,
//     data: { result },
//   });
// };

module.exports = getContactById;
