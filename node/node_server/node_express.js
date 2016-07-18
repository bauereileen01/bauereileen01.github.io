var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/goodbye', function (req, res) {
  res.send('Goodbye World!');
});

app.get('/hiya', function (req, res) {
  res.send('Guday Y\'all!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});