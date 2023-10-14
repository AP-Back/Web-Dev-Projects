// Modules
const express = require('express');
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const fs = require('fs');

// Routers
const mainRoute = require("./routes/mainRouter");

//configure env
dotenv.config();


// Cors options
const corsOptions = {
  origin: ['http://192.168.1.180:3000', 'http://localhost:3000', process.env.FRONTEND_URI],
  credentials: true,
  optionSuccessStatus: 200,
};

const app = express();

//middelwares
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));

//rest api
app.get("/", (req, res) => {
  res.send("Successful request. Try /api/v1/sendMails for products page.");
});

app.use("/api/v1/sendMails", mainRoute);

//PORT
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
