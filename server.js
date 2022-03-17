var express = require("express");
var socket = require("socket.io");

var app = express();
app.use(express.static("public"))

var server = app.listen(3030, "192.168.1.154");
var io = socket(server);

io.sockets.on("connection", newConnection);

function newConnection (socket) {
    console.log("new connection:" + socket.id);

    socket.on("paddle", paddleMessage);

    function paddleMessage(data) {
        socket.broadcast.emit("paddle", data);
    }

}