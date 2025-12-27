const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendMail(to, subject, text) {
  const msg = {
    to,
    from: "no-reply@homepass.app", // works for now
    subject,
    text,
  };

  await sgMail.send(msg);
}

module.exports = sendMail;
