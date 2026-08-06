const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/download-cv", (req, res) => {

    const file = path.join(
        __dirname,
        "public",
        "cv",
        "Piyush_singh-resume.pdf"
    );

    res.download(file);

});

app.listen(5000, () => {
    console.log("Server Running");
});