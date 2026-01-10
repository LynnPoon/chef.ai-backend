require("dotenv").config();
const express = require("express");
const cors = require("cors");
// const claudeRoute = require("./routes/claude");
const hfRoute = require("./routes/hf");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
// app.use("/api/claude", claudeRoute);
app.use("/api/hf", hfRoute);

app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server running on port ${PORT}`)
);
