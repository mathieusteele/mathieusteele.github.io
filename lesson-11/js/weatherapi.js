const prestonCityID = "5604473";
const API_KEY = "dfab45f985bf2e59c8c0813c3fb11167";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${prestonCityID}&appid=${API_KEY}&units=imperial`;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById("current-temp").textContent = jsObject?.main?.temp;
    const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.getElementById("imagesrc").textContent = imagesrc;
    document.getElementById("icon").setAttribute("src", imagesrc);
    document.getElementById("icon").setAttribute("alt", desc);
    alert(calculateWindchill(jsObject?.main?.temp, jsObject?.wind?.speed));
  });
