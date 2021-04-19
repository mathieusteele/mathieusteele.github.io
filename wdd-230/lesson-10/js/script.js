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

// var dayThree = new Date();
// dayThree.setDate(today.getDate() + 2);
// document.querySelector("#day-three").innerText = dayThree.toLocaleDateString(
//   "en-US",
//   {
//     weekday: "long",
//   }
// );

// var dayFour = new Date();
// dayFour.setDate(today.getDate() + 3);
// document.querySelector("#day-four").innerText = dayFour.toLocaleDateString(
//   "en-US",
//   {
//     weekday: "long",
//   }
// );

// var dayFive = new Date();
// dayFive.setDate(today.getDate() + 4);
// document.querySelector("#day-five").innerText = dayFive.toLocaleDateString(
//   "en-US",
//   {
//     weekday: "long",
//   }
// );

if (today.toLocaleDateString("en-US", {weekday: "long"}) === "Friday") {
  document.querySelector("#upcoming-event-alert").innerHTML =
    "&#129374; Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
  document.querySelector("#upcoming-event-alert")?.classList?.remove("hidden");
}

WebFont.load({
  google: {
    families: ["Raleway:500,800", "PT-Sans:700"],
  },
});
