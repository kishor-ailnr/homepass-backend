// =========================
// IMPORTS
// =========================
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

// =========================
// APP SETUP
// =========================
const app = express();
app.use(cors());
app.use(express.json());

// =========================
// EMAIL CONFIG (GMAIL)
// =========================
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "vrohsik@gmail.com",      // 🔴 change this
    pass: "tjahzlfunttnaxaz"          // 🔴 change this
  },
  tls: {
    rejectUnauthorized: false          // ✅ FIXES self-signed certificate error
  }
});

// =========================
// TEST ROUTE
// =========================
app.get("/", (req, res) => {
  res.send("Home Pass Backend is Running ✅");
});

// =========================
// EMAIL TEST ROUTE
// =========================
app.get("/test-mail", async (req, res) => {
  try {
    const info = await transporter.sendMail({
      from: "vrohsik@gmail.com",     // 🔴 same as above
      to: "rajkishor23849@gmail.com",       // 🔴 send to yourself for testing
      subject: "Home Pass App Test Mail",
      text: "Email system is working successfully!"
    });

    res.send("✅ Email sent successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("❌ Email failed");
  }
});

// =========================
// SERVER START
// =========================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
