
const spotlightsContent = document.querySelector("#spotlights-content");

async function loadSpotlights() {
    try {
        const response = await fetch("data/members.json");
        const members = await response.json();

        const qualifiedMembers = members.filter(member =>
            member.membershipLevel === 2 || member.membershipLevel === 3
        );
        qualifiedMembers.sort(() => Math.random() - 0.5);

        const selectedMembers = qualifiedMembers.slice(0, 3);
        selectedMembers.forEach(member => {
            const membership = member.membershipLevel === 3 ? "Gold Member" : "Silver Member";

            const card = document.createElement("div");
            card.classList.add("spotlight-card");

            card.innerHTML = `
                <h3>${member.name}</h3>
                <img src="images/${member.image}" alt="${member.name}" loading="lazy">
                <p>${membership}</p>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank" rel="noopener noreferrer">Visit Website</a>`;

            spotlightsContent.appendChild(card);
        });

    }
    catch (error) {
        spotlightsContent.textContent = "Unable to load business spotlights.";
        console.error("Error loading business spotlights:", error);
    }
}

loadSpotlights();

const eventsContent = document.querySelector("#events-content");

async function loadEvents() {
    try {
        const response = await fetch("data/events.json");
        const events = await response.json();

        events.forEach(event => {
            const card = document.createElement("div");
            card.classList.add("event-card");

            card.innerHTML = `
                <h3>${event.name}</h3>
                <p><strong>Date:</strong> ${event.date}</p>
                <p><strong>Time:</strong> ${event.time}</p>
                <p><strong>Location:</strong> ${event.location}</p>
                <p>${event.description}</p>
                <a href="${event.website}" target="_blank" rel="noopener noreferrer">More Information</a>
            `;

            eventsContent.appendChild(card);
        });
    }
    catch (error) {
        eventsContent.textContent = "Unable to load events.";
        console.error("Error loading events:", error);
    }
}

loadEvents();


const currentWeather = document.querySelector("#current-weather");
const weatherForecast = document.querySelector("#weather-forecast");

const apiKey = "e5be9bce02477b4700c7419841de2cdc";
const latitude = -34.6500;
const longitude = -58.5667;

async function getWeather() {
    try {
        const currentURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

        const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

        const currentResponse = await fetch(currentURL);
        const forecastResponse = await fetch(forecastURL);

        const currentData = await currentResponse.json();
        const forecastData = await forecastResponse.json();

        currentWeather.innerHTML = `
            <h3>Current Weather in Ramos Mejía</h3>
            <p>Temperature: ${Math.round(currentData.main.temp)}°C</p>
            <p>Condition: ${currentData.weather[0].description}</p>
            <img src="https://openweathermap.org/img/wn/${currentData.weather[0].icon}@2x.png"
                alt="${currentData.weather[0].description}">
        `;

    }
}

getWeather();

