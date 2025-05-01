require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,  // Your Gmail address
        pass: process.env.PASSWORD // App Password (not your regular password)
    }
});

app.post("/contact", (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;
    console.log(req.body);
    const mailOptions = {
        from: email,
        to: process.env.EMAIL,  // Your email
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ code: 500, message: "Failed to send email" });
        }
        res.json({ code: 200, message: "Message sent successfully" });
    });
});

app.listen(5000, () => console.log("Server running on port 5000"));
