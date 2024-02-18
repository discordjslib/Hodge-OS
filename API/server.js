const io = require('socket.io')(3000, {
  cors: {
    origin: "*"
  }
});
const fs = require('fs');

io.on('connection', socket => {
  socket.emit('connection', 'hi');

  socket.on('message', message => {
    console.log(message);
    socket.broadcast.emit('message', message);
  });

})

