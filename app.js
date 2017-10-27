const express = require('express');
const app = express();

const api = require('./src/api.js');

app.use(express.static('src'));

app.get('/', function(req, res) {
  res.sendFile("/src/index.html");
});

app.post("/2d", function(req, res) {
  res.send(api["twoD"]);
});

app.post("/3d", function(req, res) {
  res.send(api["threeD"]);
});

app.listen(3000, function() {
  console.log("Server is running at PORT 3000");
});
