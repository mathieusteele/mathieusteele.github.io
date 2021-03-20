const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject["towns"];

    const currentPageCityName = document.getElementById("individual-town-page")
      .innerText;

    for (let i = 0; i < towns.length; i++) {
      if (towns[i].name === currentPageCityName) {
        let header = document.createElement("h3");
        header.textContent = "Upcoming Events";

        let events = document.createElement("ul");

        towns[i].events.map((upcomingEvent) => {
          let newEvent = document.createElement("li");
          newEvent.textContent = upcomingEvent;
          events.appendChild(newEvent);
        });

        document.querySelector("#upcoming-events").appendChild(header);
        document.querySelector("#upcoming-events").appendChild(events);
      }
    }
  });
