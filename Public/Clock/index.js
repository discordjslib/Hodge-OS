import Clock from './Clock.js';

const clockContainer = document.getElementById('clockContainer');

const adjustClockContainerHeight = () => {
  const timezonesHeight = document.getElementById('timezoneOptions').offsetHeight;
  clockContainer.style.height = `calc(100% + ${timezonesHeight}px)`;
};

const toggleTimezones = () => {
  const isHidden = clockContainer.classList.contains('hidden');

  if (isHidden) {
    // Show the timezones (use your logic here)
    // For example, if you have a showTimezones method, use clock.showTimezones();
    // If you directly manipulate the DOM elements, you can show them accordingly
    clock.showTimezones();
    clockContainer.classList.remove('hidden');
  } else {
    // Hide the timezones (use your logic here)
    // For example, if you have a hideTimezones method, use clock.hideTimezones();
    // If you directly manipulate the DOM elements, you can hide them accordingly
    timezoneOptions.style.display = 'none';
    clockContainer.classList.add('hidden');
  }

  // Adjust the clock container height after toggling
  adjustClockContainerHeight();
};

// Adjust clock container height on window resize
window.addEventListener('resize', adjustClockContainerHeight);

// Initialize the clock
const clock = new Clock([
  { location: 'New York', timezone: 'America/New_York' },
  { location: 'London', timezone: 'Europe/London' },
  { location: 'Tokyo', timezone: 'Asia/Tokyo' },
]);

const updateWorldClock = () => {
  clockContainer.innerHTML = '';
  clock.loadTimes();
};

setInterval(updateWorldClock, 1000);
updateWorldClock();

document.getElementById('addTZ').addEventListener('click', toggleTimezones);

document.addEventListener('click', (event) => {
  const timezoneOptions = document.getElementById('timezoneOptions');
  if (!document.getElementById('addTZ').contains(event.target) && !timezoneOptions.contains(event.target)) {
    timezoneOptions.style.display = 'none';
  }
});
