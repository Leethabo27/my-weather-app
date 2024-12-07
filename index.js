document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#search-form");
  const searchInput = document.querySelector("#search-input");
  const cityElement = document.querySelector("#current-city");
  const detailsElement = document.querySelector("#current-details");
  const iconElement = document.querySelector("#current-icon");
  const tempElement = document.querySelector("#current-temp");

  const apiKey = "2c95a04203o5bat4acd327d7c89f7e04"; 
  const apiUrl = "https://api.shecodes.io/weather/v1/current?query={query}&key={key}";

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const city = searchInput.value.trim();

    if (city) {
      try {
        const response = await fetch(
          `${apiUrl}?q=${city}&units=metric&appid=${apiKey}`
        );
        if (!response.ok) {
          throw new Error("City not found");
        }
        const data = await response.json();

       
        cityElement.textContent = data.name;
        detailsElement.textContent = data.weather[0].description;
        iconElement.textContent = getWeatherIcon(data.weather[0].icon);
        tempElement.textContent = Math.round(data.main.temp);
      } catch (error) {
        cityElement.textContent = "Error";
        detailsElement.textContent = "Unable to fetch weather data.";
        iconElement.textContent = "❌";
        tempElement.textContent = "--";
      }
    }
  });

  function getWeatherIcon(iconCode) {
    const iconMap = {
      "01d": "☀️",
      "01n": "🌕",
      "02d": "⛅",
      "02n": "☁️",
      "03d": "☁️",
      "03n": "☁️",
      "04d": "🌥️",
      "04n": "🌥️",
      "09d": "🌧️",
      "09n": "🌧️",
      "10d": "🌦️",
      "10n": "🌦️",
      "11d": "⛈️",
      "11n": "⛈️",
      "13d": "❄️",
      "13n": "❄️",
      "50d": "🌫️",
      "50n": "🌫️",
    };
    return iconMap[iconCode] || "❓";
  }
});




