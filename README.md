<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="style.css" />
    <title>My Weather Application</title>
  </head>
  <body>
    <div class="weather-app">
      <header>
        <form id="search-form">
          <input
            type="search"
            placeholder="Enter a city..."
            required
            id="search-input"
          />
          <button type="submit">Search</button>
        </form>
      </header>
      <main>
        <div class="current-weather">
          <div>
            <h1 id="current-city">City</h1>
            <p id="current-details">Weather details will appear here.</p>
          </div>
          <div class="current-temperature">
            <span id="current-icon">☀️</span>
            <span id="current-temp">--</span>
            <span class="unit">°C</span>
          </div>
        </div>
      </main>
      <footer>
        <p>
          This project was coded by
          <a href="https://github.com/Leethabo27" target="_blank"
            >Lethabo Semenya</a
          >
          and is
          <a href="https://github.com/Leethabo27/my-weather-app" target="_blank"
            >on GitHub</a
          >
          and
          <a href="https://yourapp.netlify.app" target="_blank"
            >hosted on Netlify</a
          >.
        </p>
      </footer>
    </div>
    <script src="index.js"></script>
  </body>
</html>
