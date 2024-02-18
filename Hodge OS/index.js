let user = {}
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
document.addEventListener('DOMContentLoaded', function () {
    



    const userString = sessionStorage.getItem('user');

    // Check if the user object exists
    if (userString) {
      // Parse the JSON string to get the user object
    user = JSON.parse(userString);
    console.log(user)
  
      // Use the user object as needed
      console.log(`Welcome, ${user.displayName}!`);
      document.getElementById('name').textContent = `Logged In as ${user.displayName}`    
    } 
    const isInFullScreen = document.fullscreenElement !== null;
    const hasPopupBeenDisplayed = sessionStorage.getItem("popupDisplayed");
  
    if (!isInFullScreen && !hasPopupBeenDisplayed) {
      fullscreenPopup.style.display = "block";
      window.closeFullscreenPopup = function () {
        fullscreenPopup.style.display = "none";
        sessionStorage.setItem("popupDisplayed", "true");
      };
    }
    document.addEventListener("keydown", function (event) {
      if (!isInFullScreen && !hasPopupBeenDisplayed && event.key === "F11") {
        closeFullscreenPopup();
      }
    });

    const updateTime = () => {
        const currentTime = new Date();
        const day = currentTime.getDay()
        const date = currentTime.getDate()
        const month = currentTime.getMonth()
        const hours = currentTime.getHours().toString().padStart(2, '0');
        const minutes = currentTime.getMinutes().toString().padStart(2, '0');
        time.innerText = `${hours}:${minutes}`
        dateText.innerText = `${days[day]}, ${date} ${months[month]}`
    };
    // Add these lines inside the 'DOMContentLoaded' event listener function

    const progressBar = document.querySelector('.progress');
    const audioDuration = 180; // Replace with the actual duration of your song in seconds
    let i = 1000
    setInterval(() => {
        i = i + 2
        if(i > 5000) return i = 0
        progressBar.style.width = `${i / 50}%`;

    }, 100)
    const updateProgressBar = () => {
        const currentTime = audio.currentTime;
        const progressPercentage = (currentTime / audioDuration) * 100;
        progressBar.style.width = `${progressPercentage}%`;
    };

    // Example usage with an imaginary audio element
    //const audio = new Audio('path/to/your/song.mp3');
    // audio.addEventListener('timeupdate', updateProgressBar);


    updateTime();
    setInterval(updateTime, 1000);
    messageIcon.addEventListener('click', function () {
        window.location.href = './Public/Home/home.html'
    });
    emailIcon.addEventListener('click', function () {
        window.location.href = 'https://www.gmail.com'
    });
    clockIcon.addEventListener('click', function () {
        window.location.href = 'http://127.0.0.1:5500/Public/Clock/index.html'
    });
    googleIcon.addEventListener('click', function () {
        window.location.href = 'https://www.google.com'
    });
    contactsIcon.addEventListener('click', function () {
        window.location.href = './Public/Contacts/contacts.html'
    });
    settingsIcon.addEventListener('click', function () {
        window.location.href = 'https://open.spotify.com/'
    });
    
});
