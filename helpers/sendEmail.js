/* eslint-disable no-useless-catch */
const sgMail = require("@sendgrid/mail");

require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: "matyash19831010@gmail.com" };
  try {
    await sgMail.send(email);
    return true;
  } catch (error) {
    throw error;
  }
};

// const email = {
//   to: "test@example.com",
//   from: "matyash19831010@gmail.com",
//   subject: "Нова заявка з сайту",
//   html: "<p>З сайту прийшла нова заявка</p>",
// };

module.exports = sendEmail;
