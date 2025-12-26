const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "vrohsik@gmail.com",
    pass: "tjahzlfunttnaxaz"
  }
});

function sendMail(to, subject, text) {
  return transporter.sendMail({
    from: "Home Pass System <vrohsik@gmail.com>",
    to,
    subject,
    text
  });
}

module.exports = sendMail;
