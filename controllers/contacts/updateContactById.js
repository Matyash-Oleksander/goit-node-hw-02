const { Contact } = require("../../models/contactsModel");

const { NotFound } = require("http-errors");

const updateContactById = async (req, res, next) => {
  const { id } = req.params;
  const { _id } = req.user;

  await Contact.findOneAndUpdate(
    { _id: id },
    req.body,
    { new: true },
    { owner: _id },
    (error, result) => {
      if (error) {
        throw new NotFound(`Contact with id=${id} not found`);
      }
      res.json({
        status: "success",
        code: 200,
        data: { result },
      });
    }
  );
};

// const updateContactById = async (req, res, next) => {
//   const { id } = req.params;
//   const { _id } = req.user;

//   const result = await Contact.findByIdAndUpdate(
//     id,
//     req.body,
//     { new: true },
//     { owner: _id }
//   );
//   if (!result) {
//     throw new NotFound(`Contact with id=${id} not found`);
//   }
//   res.json({
//     status: "success",
//     code: 200,
//     data: { result },
//   });
// };

module.exports = updateContactById;
