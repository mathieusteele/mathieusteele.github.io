const API_KEY = "dfab45f985bf2e59c8c0813c3fb11167";

const weatherAPIURL = `https://api.openweathermap.org/data/2.5/onecall?lat=42.899055&lon=-77.428568&appid=${API_KEY}&units=imperial`;

fetch(weatherAPIURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    if (jsObject?.alerts?.length > 0) {
      for (let i = 0; i < jsObject.alerts.length; i++) {
        let weatherAlert = document.createElement("p");
        let weatherEvent = document.createElement("h2");
        let sender = document.createElement("p");
        let description = document.createElement("p");
        let dismissButton = document.createElement("button");

        weatherEvent.textContent = `Alert! ${jsObject.alerts[i].event}`;
        sender.textContent = `From: ${jsObject.alerts[i].sender_name}`;
        description.textContent = jsObject.alerts[i].description;

        dismissButton.textContent = "Dismiss all weather alerts";
        dismissButton.addEventListener("click", function () {
          let today = new Date();
          let todayTokenized = `${today.getFullYear()}${today.getMonth()}${today.getDate()}`;
          window.localStorage.setItem("weatherAlertHidden", todayTokenized);
          document.getElementById("weather-alert").classList.add("hidden");
        });

        weatherAlert.appendChild(weatherEvent);
        weatherAlert.appendChild(sender);
        weatherAlert.appendChild(description);
        weatherAlert.appendChild(dismissButton);
        document.getElementById("weather-alert").appendChild(weatherAlert);
      }
      let suppressWeatherAlert = window.localStorage.getItem(
        "weatherAlertHidden"
      );
      let today = new Date();
      let todayTokenized = `${today.getFullYear()}${today.getMonth()}${today.getDate()}`;
      if (suppressWeatherAlert === todayTokenized) {
        // User dismissed weather alert today.
      } else {
        document.getElementById("weather-alert").classList.remove("hidden");
      }
    }

    document.getElementById(
      "temperature"
    ).innerHTML = `Current Temperature: ${jsObject?.current?.temp}&deg;`;

    document.getElementById(
      "conditions"
    ).textContent = `Weather: ${jsObject?.current?.weather[0]?.main}`;

    document.getElementById(
      "humidity"
    ).innerText = `Humidity: ${jsObject?.current?.humidity}%`;

    let threeDayForecast = "Three Day Forecast: ";
    for (let i = 0; i < 3; i++) {
      if (i == 2) {
        threeDayForecast =
          threeDayForecast + `${jsObject.daily[i].temp.day}&deg;`;
      } else {
        threeDayForecast =
          threeDayForecast + `${jsObject.daily[i].temp.day}&deg;, `;
      }
      document.getElementById(
        "three-day-forecast"
      ).innerHTML = threeDayForecast;
    }
  });
