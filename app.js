const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/api/test', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});