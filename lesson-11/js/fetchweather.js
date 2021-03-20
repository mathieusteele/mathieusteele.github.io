function calculateWindchill(temperature, windSpeed) {
  // temperature in degrees Fahrenheit, windSpeed in miles per hour
  if (temperature > 50.0 || windSpeed < 3.0) {
    return "N/A";
  }

  let speedFactor = windSpeed ** 0.16;

  let stepOne = 0.6215 * temperature;

  let stepTwo = 35.75 * speedFactor;

  let stepThree = 0.4275 * temperature * speedFactor;

  return 35.74 + stepOne - stepTwo + stepThree;
}

const currentPageCityID = document
  .getElementById("individual-town-page")
  .getAttribute("data-city-id");

const currentPageLatitude = document
  .getElementById("individual-town-page")
  .getAttribute("data-latitude");

const currentPageLongitude = document
  .getElementById("individual-town-page")
  .getAttribute("data-longitude");

const API_KEY = "dfab45f985bf2e59c8c0813c3fb11167";

const weatherAPIURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${currentPageLatitude}&lon=${currentPageLongitude}&appid=${API_KEY}&units=imperial`;

// populate weather summary
fetch(weatherAPIURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.getElementById("temperature").textContent =
      jsObject?.current?.temp;

    document.getElementById("current-conditions").textContent =
      jsObject?.current?.weather[0]?.main;

    let windchill = calculateWindchill(
      jsObject?.current?.temp,
      jsObject?.current?.wind_speed
    );

    if (typeof windchill === "string") {
      // Don't display degrees if no windchill
      document.getElementById("windchill").innerText = `${windchill}`;
    } else {
      // Round to one decimal
      document.getElementById("windchill").innerHTML = `${
        Math.round(windchill * 10) / 10
      }&deg;`;
    }

    document.getElementById(
      "humidity"
    ).innerText = `${jsObject?.current?.humidity}%`;

    document.getElementById(
      "windspeed"
    ).innerText = `${jsObject?.current?.wind_speed}mph`;
  });

const fiveDayForecastURL = `https://api.openweathermap.org/data/2.5/forecast?id=${currentPageCityID}&appid=${API_KEY}&units=imperial`;

// Populate five day forecast
fetch(fiveDayForecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);

    forecast = jsObject.list;

    let day = 1;
    for (let i = 0; i < forecast.length; i++) {
      if (
        forecast[i].dt_txt.substr(forecast[i].dt_txt.length - 8) === "18:00:00"
      ) {
        let forecastDate = new Date(
          forecast[i].dt_txt.substr(0, 10) + " 00:00"
        );

        document.getElementById(
          `day-${day}-date`
        ).textContent = forecastDate.toLocaleDateString("en-US", {
          weekday: "long",
        });
        const imagesrc = `https://openweathermap.org/img/w/${forecast[i].weather[0].icon}.png`;
        document
          .getElementById(`day-${day}-forecast`)
          .setAttribute("src", imagesrc);
        document
          .getElementById(`day-${day}-forecast`)
          .setAttribute("alt", forecast[i].weather[0].main);

        document.getElementById(
          `day-${day}-temp`
        ).innerHTML = `${forecast[i].main.temp}&#8457;`;

        day = day + 1;
      }
    }
  });
