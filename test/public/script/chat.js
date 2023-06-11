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