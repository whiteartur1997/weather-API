const storage = new Storage();
const weather = new Weather(storage.getLocationData());
const ui = new UI();
document.querySelector("#w-change-btn").addEventListener("click", (e) => {
  let city = document.querySelector("#city").value;
  weather.changeLocation(city);
  storage.setLocationData(city);
  city = "";
  getWeather();
  // close modal
  $("#locModal").modal("hide");
})

// wrapped getWeather method to run it only after DOM Content loaded
document.addEventListener("DOMContentLoaded", getWeather);
function getWeather() {
  weather.getWeather() // this is async method, so we can use then/catch
    .then(result => {
      ui.paint(result);
    })
    .catch(err => console.log(err))
}

function tempConverter(temp) {
  return (temp - 273.15).toFixed(1);
}

function windDirection(deg) {
  if (deg <= 44) {
		return 'North';
	} else if (deg <= 89) {
		return 'North-east'
	} else if (deg <= 134) {
		return 'East'
	} else if (deg <= 179) {
		return 'South-east'
	} else if (deg <= 224) {
		return 'South'
	} else if (deg <= 269) {
		return 'South-west'
	} else if (deg <= 314) {
		return 'West'
	} else  {
		return 'North-west'
	}
}




