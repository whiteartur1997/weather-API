class UI {
  constructor() {
    this.location = document.querySelector("#w-location");
    this.description = document.querySelector("#w-desc");
    this.icon = document.querySelector("#w-icon");
    this.temp = document.querySelector("#w-temp");
    this.tempFeelsLike = document.querySelector("#w-temp-feels-like");
    this.wind = document.querySelector("#w-wind");
  }

  paint(info) {
    this.location.textContent = `${info.name}, ${info.sys.country}`;
    this.description.textContent = info.weather[0].description;
    this.icon.src = `http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`;
    this.temp.textContent = `Temp: ${tempConverter(info.main.temp)}°C`;
    this.tempFeelsLike.textContent = `Feels like: ${tempConverter(info.main.feels_like)}°C`;
    this.wind.textContent = `Wind speed: ${info.wind.speed}m/s. Wind direction : ${windDirection(info.wind.deg)}`;
  }
}