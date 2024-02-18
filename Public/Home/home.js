document.addEventListener("DOMContentLoaded", function () {
  const socket = io('http://localhost:3000');


  const sendButton = document.getElementById("sendButton");
  const messageInput = document.getElementById("messageInput");
  const imessageContainer = document.querySelector(".imessage");

  let lastMessageTime = null;

  function login(){
    const username = prompt('Enter your username: ')
    socket.emit('user-login', username)
    socket.broadcast.emit('user-login', username)
    
  }



  function createNewMessage(messageText, isFromMe) {
    const currentTime = new Date();
    const isSameTimestamp =
      lastMessageTime &&
      currentTime - lastMessageTime < 5 * 60 * 1000; // 5 minutes threshold

    const newMessageContainer = isSameTimestamp
      ? imessageContainer.lastElementChild
      : document.createElement("div");

    newMessageContainer.classList.add("message-container");

    const newMessage = document.createElement("p");
    newMessage.classList.add(isFromMe ? "p-from-me" : "p-from-them");
    newMessage.innerText = messageText;

    const timestamp = document.createElement("span");
    timestamp.classList.add("timestamp");
    timestamp.innerText = isSameTimestamp ? "" : getCurrentTime(currentTime);

    newMessageContainer.appendChild(newMessage);
    if (!isSameTimestamp) {
      newMessageContainer.appendChild(timestamp);
      imessageContainer.appendChild(newMessageContainer);
    }

    lastMessageTime = currentTime;
  }

  function clearInput() {
    messageInput.value = "";
  }

  function getCurrentTime(currentTime) {
    const hours = currentTime.getHours().toString().padStart(2, "0");
    const minutes = currentTime.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  function handleEnterKey(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      const messageText = messageInput.value.trim();
      if (messageText !== "") {
        createNewMessage(messageText, true);
        clearInput();
        socket.emit('message', messageText);
      }
    }
  }

  function handleTextareaInput(event) {
    const isShiftPressed = event.shiftKey;
    if (event.key === "Enter" && isShiftPressed) {
      event.preventDefault();
      messageInput.value += "\n";
    }
  }

  sendButton.addEventListener("click", function () {
    const messageText = messageInput.value.trim();
    if (messageText !== "") {
      createNewMessage(messageText, true);
      clearInput();
      socket.emit('message', messageText);
    }
  });

  messageInput.addEventListener("keydown", function (event) {
    handleEnterKey(event);
  });

  messageInput.addEventListener("input", function (event) {
    handleTextareaInput(event);
  });

  socket.on('connection', data =>{
    console.log(data)


  })
  socket.on('message', message => {
    createNewMessage(message, false)
  })
  
});
