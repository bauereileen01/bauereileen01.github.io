var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var request = require('request');

var chatArchive = [];

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "OPTIONS,HEAD,GET,PUT");
  next();
});

app.get('/', function(req, res) {
  res.send('Hello World!');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){

    var msgWords = msg.text.split(" ");
    var lastWord = msgWords[msgWords.length - 1];

    request("https://api.spotify.com/v1/search?q=track:" + lastWord + "&type=track", function(err, resp, body) {
    body = JSON.parse(body);
    var randomTrackNumber = Math.floor(Math.random() * body.tracks.items.length);
    console.log( randomTrackNumber );
    var randomTrack = body.tracks.items[randomTrackNumber];
    msg.text = msg.text + " <a href='" + randomTrack.external_urls.spotify + "'>"+ randomTrack.name +"</a> by " + randomTrack.artists[0].name;
    io.emit("chat message", msg);
    chatArchive.push(msg);
    });

    
  });
});

app.get('/get_archive', function(req, res){
	res.send(chatArchive);
});

app.use(express.static('public'));
app.get('/chat', function(req,res){
  res.sendFile(__dirname + '/chat_client.html');
});

http.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


