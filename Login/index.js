import User from "../Classes/User.js";
const db = [new User('Sam', '0', [])]
document.addEventListener("DOMContentLoaded", function () {
  const enter = document.getElementById('enter');
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  enter.addEventListener('click', () => {
    event.preventDefault();
    console.log('lol')
    const name = username.value
    const pass = password.value
    console.log(username)
    console.log(password)
    if (name === 'Sam' && pass === '1') {
      const user = new User(name, '1', [])
      sessionStorage.setItem('user', JSON.stringify(user));
      window.location.href = '../index.html';

    }
  })
})
