const express = require("express");
const cors = require("cors");

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//test route
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: true, message: "API is running" });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
