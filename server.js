require("dotenv").config();
const express = require("express");
const cors = require("cors");
// const claudeRoute = require("./routes/claude");
const hfRoute = require("./routes/hf");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// app.use("/api/claude", claudeRoute);
app.use("/api/hf", hfRoute);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
