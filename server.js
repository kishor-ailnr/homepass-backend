const express = require("express");
const cors = require("cors");
const sendMail = require("./mailer");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Pass Server is Live");
});

app.get("/test-mail", async (req, res) => {
  try {
    await sendMail(
      "vrohsik@gmail.com",
      "Home Pass Email Test",
      "🎉 Email system is working correctly!"
    );
    res.send("Email sent successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Email failed");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running");
});
