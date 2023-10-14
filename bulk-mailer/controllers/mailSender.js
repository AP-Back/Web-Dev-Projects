const Papa = require("papaparse");
const multer = require("multer");
const fs = require("fs");
const ejs = require("ejs");
const nodemailer = require("nodemailer");
const path = require("path");
const dotenv = require("dotenv");

//configure env
dotenv.config();

// Function to check if an email address is valid
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Function to delete the attachment files
function cleanupAttachments(attachments) {
  attachments.forEach((attachment) => {
    fs.unlink(attachment.path, (err) => {
      if (err) {
        console.error('Error deleting attachment:', err);
      }
    });
  });
}

exports.mailSender = (req, res) => {

  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: "No CSV file uploaded" });
  }

  // Check if there is a CSV file in the request
  const csvFile = req.files.find((file) => file.fieldname === "csvFile");
  if (!csvFile) {
    return res.status(400).json({ error: "No CSV file uploaded." });
  }

  fs.readFile(csvFile.path, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Error reading the CSV file" });
    }
    const results = Papa.parse(data, {
      header: true,
    });

    // Delete the uploaded file after parsing is done
    fs.unlink(csvFile.path, (unlinkErr) => {
      if (unlinkErr) {
        console.error("Error deleting the uploaded file:", unlinkErr);
      }
    });

    // Check if there are any attachments in the request
    const attachments = req.files
      .filter((file) => file.fieldname !== "csvFile")
      .map((file) => ({
        filename: file.originalname,
        path: file.path,
      }));

    const templatePath = path.join(__dirname, "../templates/email.ejs");
    fs.readFile(templatePath, "utf8", (templateErr, templateData) => {
      if (templateErr) {
        console.error("Error reading the email template file:", templateErr);
        return;
      }
      results.data.forEach((object) => {
        const { name, email } = object;

        if (!isValidEmail(email)) {
          console.error(`Invalid email address: ${email}.`);
          return;
        }

        const emailContent = ejs.render(templateData, { name });

        // Log the email content before sending (for debugging purposes)
        console.log('Email Content:', emailContent);

        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.GOOGLE_USERNAME,
            pass: process.env.GOOGLE_PASSWORD,
          },
        });

        const mailOptions = {
          from: "akash.roy2807@gmail.com",
          to: email,
          subject: "Sample Email",
          html: emailContent,
          attachments: [...attachments]
        };

        // mailOptions.headers = { "Content-Type": "text/html" };


        transporter.sendMail(mailOptions, (emailErr, info) => {
          if (emailErr) {
            console.error("Error sending email:", emailErr);
          } else {
            console.log("Email sent:", info.response);
          }
          cleanupAttachments(attachments);
        });
      });
    });
  
    res.json({ data: results.data });
  });
};
