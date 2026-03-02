const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Dice API is running!');
});

app.get('/roll', (req, res) => {
  const dice = Math.floor(Math.random() * 6) + 1;
  res.send(`You rolled: ${dice}`);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
