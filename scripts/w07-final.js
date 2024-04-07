async function getWeatherByCoordinates(lat, lon) {
    const apiKey = '883777ebd84dafe24915944ded1e28e0'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      if (response.ok) {
        displayWeather(data);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('Error fetching weather:', error.message);
      displayError(error.message);
    }
  }
  
  function displayWeather(data) {
    const { name, main, weather } = data;
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
      <h2>${name}</h2>
      <p>Temperature: ${main.temp} °C</p>
      <p>Weather: ${weather[0].main}</p>
    `;
  }
  
  function displayError(message) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `<p>${message}</p>`;
  }
  

    getWeatherByCoordinates(-38.00042, -57.5562);
 
  