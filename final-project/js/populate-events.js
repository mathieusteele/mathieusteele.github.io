const eventsURL = "js/events.json";

fetch(eventsURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const events = jsonObject["events"];

    for (let i = 0; i < events.length; i++) {
      let event = document.createElement("li");
      let date = document.createElement("span");
      let name = document.createElement("h4");
      let location = document.createElement("span");

      name.textContent = events[i].name;
      date.textContent = `${events[i].date}, `;
      location.textContent = events[i].location;

      event.appendChild(name);
      event.appendChild(date);
      event.appendChild(location);

      document.querySelector("#events").appendChild(event);
    }
  });
