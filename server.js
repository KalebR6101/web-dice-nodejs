// server.js
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Enable CORS for all origins
app.use(cors());

app.get("/roll", async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.randomnumberapi.com/api/v1.0/random?min=1&max=6&count=1"
    );
    res.json({ dice: response.data[0] });
  } catch (err) {
    res.status(500).json({ error: "Failed to get dice" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
