const express = require("express");
const app = express();

// Middleware: parse JSON request body
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/users", (req, res) => {
  res.send("User created");
});

app.put("/api/cars", (req, res) => {
  const { id, brand, model, year, price } = req.body;

  console.log("Received data:", req.body);

  res.status(200).json({
    message: "Car updated successfully",
    updatedCar: { id, brand, model, year, price },
  });
});

// Start server
app.listen(3000, () => {
  console.log("Server at 3000");
});