const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Wake up endpoint
app.get("/api/wakeup", (req, res) => {
    res.json({ message: "Server is awake!" });
});

// Roll multiple dice
app.get("/api/roll/:num", (req, res) => {
    const num = parseInt(req.params.num);
    let rolls = [];

    for (let i = 0; i < num; i++) {
        rolls.push(Math.floor(Math.random() * 6) + 1);
    }

    res.json({ rolls });
});

app.listen(port, () => {
    console.log("Server running on port " + port);
});
