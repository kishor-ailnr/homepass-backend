const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendMail(to, subject, text) {
  const msg = {
    to,
    from: "rajkishor23849@gmail.com", // VERIFIED sender only
    subject,
    text,
  };

  try {
    await sgMail.send(msg);
    console.log("✅ Email sent successfully");
  } catch (error) {
    console.error("❌ SendGrid Error:");

    if (error.response) {
      console.error(error.response.body);
    } else {
      console.error(error.message);
    }

    throw error;
  }
}

module.exports = sendMail;
