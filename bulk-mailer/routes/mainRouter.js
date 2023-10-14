const express = require("express");
const multer = require("multer");

const { mailSender } = require("../controllers/mailSender");

const router = express.Router();

// Configure multer to handle file uploads
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});
const upload = multer({ storage });

router.post(
  "/",
  upload.any(),
  mailSender
);

module.exports = router;
