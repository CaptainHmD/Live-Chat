const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server);

//! serving static files
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("chat-room.html", { root: "./public/view" });
});

server.listen(3200, () => {
  console.log("Server is listing");
});

const usersSocket = [];
io.on("connection", (socket) => {
  //save username once
  socket.once("username", (name) => {
    socket.name = name;
    socket.broadcast.emit("connectionAlert", socket.name);
    usersSocket.push({ socket: socket.id, userName: socket.name });
    socket.emit("newOnlineUsers", usersSocket);
    socket.broadcast.emit("newOnlineUser", {
      socket: socket.id,
      userName: socket.name,
    });
  });

  // serve the message then send it to all clients
  socket.on("sendMessage", (message) => {
    socket.broadcast.emit("receiveMessage", message, socket.name);
  });

  // handle disconnected users
  socket.on("disconnect", () => {
    socket.broadcast.emit("disconnectionAlert", socket.name);
    usersSocket.forEach((user, index) => {
      if (user.socket === socket.id) {
        usersSocket.splice(index, 1);
      }
    });
    socket.broadcast.emit("onlineUserDisconnected",socket.id);
  });
});
