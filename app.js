const express = require('express');
const path = require('path');

const PORT = 8797;
const app = express();

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(PORT, () => {
  console.log('Server started on http://localhost:' + PORT);
});

module.exports = app;
