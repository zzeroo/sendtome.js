var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')
  , exec = require('child_process').exec
  , util = require('util')

app.listen(3000);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }
    res.writeHead(200);
    res.end(data);
  });
}

var Files = {};

io.sockets.on('connection', function (socket) {
  console.log("Connection");
  
  socket.on('Hi', function(data) {
    console.log("Hiho");
  });

  socket.on('Upload', function (data) { 
    console.log("Upload");
  });
});
