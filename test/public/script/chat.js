const el = document.getElementById("messages");
el.scrollTop = el.scrollHeight;
  
  function displaySendMessage(message) {
    el.innerHTML +=
    ' <div class="chat-message"><div class="flex flex-col items-end justify-end"><span class="space-y-2 text-base p-0.5 font-bold mb-1 max-w-xs mx-2 order-2"style="color: rgb(24, 36, 101)">You</span><div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1"><div><span class="px-4 py-2 rounded-lg inline-block text-base rounded-br-none bg-blue-600 text-white">' +
      message +
      "</span></div></div></div></div>";
      focusLast()
    }
    function displayReceivedMessages(message,senderName) {
      el.innerHTML +=
      '<div class="chat-message"><span class="space-y-2 text-base p-0.5 font-bold mb-1 max-w-xs mx-2 order-2"style="color: rgb(24, 36, 101)">'+senderName+'</span><div class="flex mt-1.5"><div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start"><div><span class="px-4 py-2 rounded-lg text-base inline-block bg-gray-300 text-gray-600">'+message+'</span></div></div></div></div>';
      focusLast()
    }

    function connectionAlert(username){
      el.innerHTML +='<div id="alert-border-3" class="flex items-center justify-center p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800 w-3/4 ml-25/2" role="alert"><svg class="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg><div class="ml-3 text-lg font-medium">'+username+' Is Connected</div></div>'
    }
    function disconnectionAlert(username){
      el.innerHTML +='<div id="alert-border-3" class="flex items-center justify-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800 w-3/4 ml-25/2" role="alert"><svg class="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg><div class="ml-3 text-lg font-medium">'+username+' Is Disconnected From the chat</div></div>'
    }
    const onlineUsersList = document.getElementById("users-list");
    function addOnlineUsers(usersName){
      usersName.forEach(username => {
        onlineUsersList.innerHTML+='<li id="'+username.socket+'"><span class="font-semibold text-gray-900 dark:text-white">'+username.userName+'</span> </li>'        
      });
    }
    function addOnlineUser(usersName){
        onlineUsersList.innerHTML+='<li id="'+usersName.socket+'"><span class="font-semibold text-gray-900 dark:text-white">'+usersName.userName+'</span> </li>'        
    }
    function deleteOnlineUser(userSocket) {
      const userInList= document.getElementById(userSocket);
      onlineUsersList.removeChild(userInList);
    }
    
    
    
    
    function fadeOut(el) {
      el.style.opacity = 1;
      (function fade() {
        if ((el.style.opacity -= 0.1) < 0) {
          el.style.display = "none";
        } else {
          requestAnimationFrame(fade);
        }
      })();
    }


    function focusLast(){
      el.scrollTop = el.scrollHeight;
    }