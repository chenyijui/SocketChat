var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',function(req, res, next) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    socket.on('chat message', function(msg) {
        console.log(msg);
        console.log('chat message', msg);
        io.emit('chat message', msg);
    });
    console.log('a user connected');
});

http.listen(3000, function() {
    console.log('listening 3000');
});
