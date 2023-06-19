var socket = io(); // this variable come from the cdn above and it will


const form = document.getElementById("form");
const messageValue = document.getElementById("message-value");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendMessage(messageValue.value);
  messageValue.value = "";
});


function sendMessage(message) {
    if (message === "" || message === null || message === undefined) return;
    socket.emit("sendMessage", message);
    displaySendMessage(message);
  }
  socket.on("receiveMessage", (message,senderName) => {
    displayReceivedMessages(message,senderName);
  });
  socket.on("connectionAlert", (username)=>{
    connectionAlert(username)
  })
  socket.on("disconnectionAlert", (username)=>{
    disconnectionAlert(username)
  })
  socket.on('newOnlineUsers',(usersName)=>{
    addOnlineUsers(usersName)
  })
  socket.on('newOnlineUser',(usersName)=>{
    addOnlineUser(usersName)
  })
  socket.on('onlineUserDisconnected',userSocket=>{
    deleteOnlineUser(userSocket);
  })
  let modal = document.getElementById("modal");
  const username = document.getElementById('username-value');
  function modalHandler() {
    fadeOut(modal);
    socket.emit('username',username.value);
}