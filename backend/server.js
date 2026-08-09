const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();

const contactRoutes = require("./src/routes/contact.routes");

const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// Test
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio Backend is running",
  });
});


// Contact API
app.use("/api/contact", contactRoutes);


// CV Download
app.get("/api/download-cv", (req, res) => {
  const file = path.join(
    __dirname,
    "public",
    "CV",
    "Piyush_singh-resume.pdf"
  );

  res.download(file);
});


// MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully !!");

    app.listen(process.env.PORT || 3000, () => {
      console.log(
        `Server Running on port ${process.env.PORT || 3000}`
      );
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:");
    console.error(error.message);
  });