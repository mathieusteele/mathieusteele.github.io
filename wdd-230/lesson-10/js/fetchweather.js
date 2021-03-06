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

const prestonCityID = "5604473";
const API_KEY = "dfab45f985bf2e59c8c0813c3fb11167";
const prestonAPIURL = `https://api.openweathermap.org/data/2.5/onecall?lat=42.0963&lon=-111.8766&appid=${API_KEY}&units=imperial`;

// populate weather summary
fetch(prestonAPIURL)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);
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

const prestonAPIURL2 = `https://api.openweathermap.org/data/2.5/forecast?id=${prestonCityID}&appid=${API_KEY}&units=imperial`;

// Populate five day forecast
fetch(prestonAPIURL2)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

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
