document.addEventListener('DOMContentLoaded', function () {
    function goToHomePage() {
        window.location.href = 'http://127.0.0.1:5500/index.html'
    }

    const iconsContainer = document.querySelector('.icons-container')
    const logoutBtn = document.getElementById('logoutBtn')
    const searchInput = document.getElementById('searchInput')

    const apps = [
        { id: 'infoIcon', icon: '../../Images/info.png', name: 'Hodge OS Guide', url: 'http://hodge-os-guide.com/' },
        { id: 'snapchatIcon', icon: '../../Images/snapchat.png', name: 'Snapchat', url: 'https://web.snapchat.com/' },
        { id: 'spotifyIcon', icon: '../../Images/spotify.png', name: 'Spotify', url: 'https://open.spotify.com/' },
        { id: 'outlookIcon', icon: '../../Images/outlook.png', name: 'Outlook', url: 'https://outlook.com/' },
        { id: 'greaterangliaIcon', icon: '../../Images/greateranglia.png', name: 'Greater Anglia', url: 'https://greateranglia.co.uk/' },
        { id: 'nationalrailIcon', icon: '../../Images/nationalrail.png', name: 'National Rail', url: 'https://nationalrail.co.uk/' },
        { id: 'instagramIcon', icon: '../../Images/instagram.png', name: 'Instagram', url: 'https://instagram.com/' },
        { id: 'chatgptIcon', icon: '../../Images/chatgpt.png', name: 'ChatGPT', url: 'https://chat.openai.com/' },
        { id: 'netflixIcon', icon: '../../Images/netflix.png', name: 'Netflix', url: 'https://netflix.com' },
        { id: 'facebookIcon', icon: '../../Images/facebook.png', name: 'Facebook', url: 'https://facebook.com' },
        { id: 'youtubeIcon', icon: '../../Images/youtube.png', name: 'Youtube', url: 'https://youtube.com' },
        { id: 'diepioIcon', icon: '../../Images/diepio.png', name: 'Diep.io', url: 'https://diep.io' },
        { id: 'nationstatesIcon', icon: '../../Images/nationstates.png', name: 'NationStates', url: 'https://www.nationstates.net/' },
        { id: 'tiktokIcon', icon: '../../Images/tiktok.png', name: 'TikTok', url: 'https://tiktok.com' },
        { id: 'googlemapsIcon', icon: '../../Images/googlemaps.png', name: 'Google Maps', url: 'https://www.google.com/maps/' },
        { id: 'rumbleIcon', icon: '../../Images/rumble.png', name: 'Rumble', url: 'https://www.rumble.com' },
        { id: 'calculatorIcon', icon: '../../Images/calculator.png', name: 'Calculator', url: 'https://www.theonlinecalculator.com/' },
        { id: 'whatsappIcon', icon: '../../Images/whatsapp.png', name: 'WhatsApp', url: 'https://web.whatsapp.com/' },
        { id: 'bbcweatherIcon', icon: '../../Images/bbcweather.png', name: 'BBC Weather', url: 'https://www.bbc.co.uk/weather' },
        { id: 'geoguessrIcon', icon: '../../Images/geoguessr.png', name: 'Geoguessr', url: 'https://www.geoguessr.com/' },
        { id: 'googletranslateIcon', icon: '../../Images/googletranslate.png', name: 'Google Translate', url: 'https://translate.google.co.uk/' },
        { id: 'amazonIcon', icon: '../../Images/amazon.png', name: 'Amazon', url: 'https://www.amazon.com/' },
        { id: 'chessIcon', icon: '../../Images/chess.png', name: 'Chess.com', url: 'https://www.chess.com/' },
        { id: 'soundcloudIcon', icon: '../../Images/soundcloud.png', name: 'SoundCloud', url: 'https://www.soundcloud.com/' },
        { id: 'twitchIcon', icon: '../../Images/twitch.png', name: 'Twitch', url: 'https://www.twitch.tv/' },
        { id: 'xIcon', icon: '../../Images/x.png', name: 'X \n (Twitter)', url: 'https://www.x.com/' },
        { id: 'dailymailIcon', icon: '../../Images/dailymail.png', name: 'Daily Mail', url: 'https://www.dailymail.co.uk/home/index.html' },
        { id: 'Vinted', icon: '../../Images/vinted.png', name: 'Vinted', url: 'https://www.vinted.com/' },
        { id: 'soundcloudIcon', icon: '../../Images/soundcloud.png', name: 'SoundCloud', url: 'https://www.soundcloud.com/' },

        { id: 'discordIcon', icon: '../../Images/discord.png', name: 'Discord', url: 'https://discord.com' },
        { id: 'githubIcon', icon: '../../Images/github.png', name: 'Github', url: 'https://github.com/' },
        { id: 'bingIcon', icon: '../../Images/bing.png', name: 'Bing', url: 'https://bing.com/' },
        { id: 'robloxIcon', icon: '../../Images/roblox.png', name: 'Roblox', url: 'https://roblox.com' },
        { id: 'lichessIcon', icon: '../../Images/lichess.png', name: 'Lichess', url: 'https://lichess.org/' },
        


        // Add more apps as needed
    ]

    function createIconElement(app) {
        const icon = document.createElement('div')
        icon.classList.add('icon')
        icon.id = app.id
        icon.innerHTML = `<img src="${app.icon}" alt="${app.name}"><p>${app.name}</p>`
        icon.style.width = '300px' 
        icon.style.height = '120px' 
    
        icon.addEventListener('click', function () {
            window.location.href = app.url
        });
    
        return icon;
    }

    function updateIcons(searchTerm) {
        iconsContainer.innerHTML = ''; 

        const filteredApps = apps.filter(app => app.name.toLowerCase().includes(searchTerm.toLowerCase()))

        filteredApps.forEach(app => {
            const icon = createIconElement(app)
            icon.querySelector('img').style.width = '80px'
            icon.querySelector('img').style.height = '80px'
            iconsContainer.appendChild(icon)
        });
    }


    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.trim()
        updateIcons(searchTerm)
    });

    apps.forEach(app => {
        iconsContainer.appendChild(createIconElement(app))
    });

    logoutBtn.addEventListener('click', function () {
    });

    const backButton = document.querySelector('.back .icon-btn')
    backButton.addEventListener('click', goToHomePage)
});
