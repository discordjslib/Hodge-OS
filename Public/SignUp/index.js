document.addEventListener("DOMContentLoaded", function () {
    const socket = io('http://localhost:3000');
  
    socket.on('connect', () => {
      enter.addEventListener('click', (event) => {
        event.preventDefault();
  
        const name = document.getElementById('username').value;
        const pass = document.getElementById('password').value;
  
        const credentials = { username: name, password: pass };
        socket.emit('signup', credentials);
  
        console.log('Signup event emitted:', credentials);
  
        console.log('Redirecting...');
        window.location.href = '../Home/home.html';
      });
    });
  });