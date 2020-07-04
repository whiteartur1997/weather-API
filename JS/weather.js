class Weather {
  constructor(city) {
    this.apiKey = "b2b28665e3469b7ae15abf05fc1c9ca8";
    this.city = city;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);
    const responseJson = await response.json();
    return responseJson;
  }

  // Change weather location
  changeLocation(city) {
    this.city = city;
  }
}