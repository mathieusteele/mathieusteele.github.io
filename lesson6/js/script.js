function toggleMenu() {
  document.getElementById("hamburger-menu").classList.toggle("hide");
}

var today = new Date();

document.getElementById("dateToday").innerText = today.toLocaleDateString(
  "en-GB",
  {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
);

var dayThree = new Date();
dayThree.setDate(today.getDate() + 2);
document.getElementById("day-three").innerText = dayThree.toLocaleDateString(
  "en-US",
  {
    weekday: "long",
  }
);

var dayFour = new Date();
dayFour.setDate(today.getDate() + 3);
document.getElementById("day-four").innerText = dayFour.toLocaleDateString(
  "en-US",
  {
    weekday: "long",
  }
);

var dayFive = new Date();
dayFive.setDate(today.getDate() + 4);
document.getElementById("day-five").innerText = dayFive.toLocaleDateString(
  "en-US",
  {
    weekday: "long",
  }
);

if (today.toLocaleDateString("en-US", {weekday: "long"}) === "Friday") {
  document.getElementById("upcoming-event-alert").innerHTML =
    "&#129374; Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
  document.getElementById("upcoming-event-alert").classList.remove("hidden");
}

const temperature = 15;

document.getElementById("temperature").innerHTML = `${temperature}&deg;`;

const windSpeed = 6;

document.getElementById("windspeed").innerHTML = `${windSpeed} mph`;

let windchill = calculateWindchill(temperature, windSpeed);

if (typeof windchill === "string") {
  document.getElementById("windchill").innerText = `${windchill}`;
} else {
  // Round to one decimal
  document.getElementById("windchill").innerHTML = `${
    Math.round(windchill * 10) / 10
  }&deg;`;
}
