const express = require("express");
const app = express();
const http = require("http");
const { Server } = require('socket.io');
const server = http.createServer(app); 
const io = new Server(server);

//! serving static files
app.use(express.static("public"));


app.get("/",(req,res)=>{
    res.sendFile("chat-room.html", {root: './public/view' });
})

server.listen(3500, ()=>{
    console.log("Server is listing");
})

io.on("connection",(socket)=>{

  //save username once
    socket.once("username",(name)=>{
      socket.name = name 
    })
    
    // serve the message then send it to all clients
    socket.on("sendMessage",(message)=>{
      socket.broadcast.emit("receiveMessage",message,socket.name)
    })


})
