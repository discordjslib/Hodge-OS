export default 
  class Clock {
  constructor(timezones = []) {
    this.timezones = timezones
    this.allTimezones = Intl.supportedValuesOf('timeZone')
    addTZ.addEventListener('click', () => this.showTimezones())
  }

  loadTimes() {
    this.timezones.forEach(t => {
      const clockDiv = document.createElement('div')
      clockDiv.classList.add('clock')

      const locationDiv = document.createElement('div')
      locationDiv.classList.add('location')
      locationDiv.textContent = t.location

      const timeDiv = document.createElement('div')
      timeDiv.classList.add('time')

      clockDiv.appendChild(locationDiv)
      clockDiv.appendChild(timeDiv)
      clockContainer.appendChild(clockDiv)

      const timeNow = new Date().toLocaleTimeString('en-UK', { timeZone: t.timezone })
      timeDiv.textContent = timeNow
    })
  }

  addTimezone(location, timez) {
    const newLocation = {
      location: location,
      timezone: timez
    }
    if (newLocation.location && newLocation.timezone) this.timezones.push(newLocation)

  }

  showTimezones() {
    timezoneOptions.style.display = 'block'
    dropdownContent.innerHTML = ''
    this.allTimezones.forEach(timezone => {
      const option = document.createElement('div')
      option.classList.add('timezone-option')
      option.textContent = timezone
      option.addEventListener('click', () => this.addSelectedTimezone(timezone))
      dropdownContent.appendChild(option)
    })
  }

  addSelectedTimezone(selectedTimezone) {
    if (this.timezones.every(a => a.location !== selectedTimezone)) {
      console.log(selectedTimezone)
      this.addTimezone(selectedTimezone, selectedTimezone)
    }
    timezoneOptions.style.display = 'none'
    this.loadTimes()
  }
}
