const express = require("express");
const app = express();

app.use(express.json());

//GET API
app.get("/users", (req, res) => {
  res.json({
    success: true,
    users: ["Ashish", "Raj", "Yadav"],
  });
});

//POST API
app.post("/users", (req, res) => {
  const user = req.body;
  res.status(201).json({
    message: "User created",
    user,
  });
});

//server listening
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
