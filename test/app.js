const express = require('express');
const app = express();
const http = require('http');
const { Socket } = require('socket.io');
const server = http.createServer(app);
const io = require("socket.io")(server,{cors:{origin: "*"}});


app.get('/', (req, res) => {
//   res.send('<h1>Hello world</h1>');
    res.sendFile("home.html", {root: './view' });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
}); 


io.on("connection", (socket)=>{// when any one connect to your server
    // socket.broadcast.emit('all',()=>{
      // io.emit("hello"); 
    // });
    console.log("User id: ",socket.id);
    socket.on('chat message', (msg) => {
      // socket.emit('chat message', msg); //!it will send it to the certain socket
      // io.emit('chat message', msg); //!it will send it to all sockets
      socket.broadcast.emit('chat message', msg); //!it will send it to all sockets except the sender it self

      
    });
    
    

    
    socket.on("disconnect", (socket)=>{
        console.log('user disconnected');
    })
})
