const dotenv = require("dotenv");

// IMPORTANT:
// Load environment variables BEFORE importing routes/controllers/mailers.
dotenv.config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");

const contactRoutes = require("./src/routes/contact.routes");

const app = express();

// =========================
// MIDDLEWARE
// =========================

app.use(cors());
app.use(express.json());

// =========================
// CONTACT ROUTES
// =========================

app.use("/api/contact", contactRoutes);

// =========================
// MONGODB
// =========================

console.log("MONGO URI exists:", !!process.env.MONGO_URI);
console.log("RESEND API KEY exists:", !!process.env.RESEND_API_KEY);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully !!");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:");
    console.error(error.message);
  });

// =========================
// RESUME DOWNLOAD
// =========================

app.get("/api/download-cv", (req, res) => {
  const file = path.join(
    __dirname,
    "public",
    "CV",
    "Piyush_singh-resume.pdf"
  );

  res.download(file, (error) => {
    if (error) {
      console.error("CV download error:", error);
    }
  });
});

// =========================
// RESEND CONNECTIVITY TEST
// =========================

app.get("/api/test-resend", async (req, res) => {
  try {
    console.log("================================");
    console.log("TESTING RESEND CONNECTION");
    console.log("================================");

    const response = await fetch("https://api.resend.com");

    console.log("Resend reachable!");
    console.log("Status:", response.status);

    return res.json({
      success: true,
      message: "Render can reach Resend",
      status: response.status,
    });
  } catch (error) {
    console.error("RESEND CONNECTION ERROR");
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Render could not reach Resend",
      error: error.message,
    });
  }
});

// =========================
// HEALTH CHECK
// =========================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio Backend is running",
  });
});

// =========================
// SERVER
// =========================

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});