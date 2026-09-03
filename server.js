require("dotenv").config();

const express = require("express");
const supabase = require("./config/supabase");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Salon Management API is running"
  });
});

app.get("/test-db", async (req, res) => {
  const { data, error } = await supabase
    .from("salons")
    .select("*");

  if (error) {
    return res.status(500).json({
      error: error.message
    });
  }

  res.json(data);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});