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

if (today.toLocaleDateString("en-US", {weekday: "long"}) === "Friday") {
  const currentPageCityID = document
    .getElementById("individual-town-page")
    .getAttribute("data-city-id");

  if (currentPageCityID === "5604473") {
    document.querySelector("#upcoming-event-alert").innerHTML =
      "&#129374; Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
    document
      .querySelector("#upcoming-event-alert")
      ?.classList?.remove("hidden");
  }
}

WebFont.load({
  google: {
    families: ["Raleway:500,800", "PT-Sans:700"],
  },
});
