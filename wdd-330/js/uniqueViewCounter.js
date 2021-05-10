var uniqueViewsByUser = localStorage.getItem("uniqueViewsByUser");
if (!uniqueViewsByUser || isNaN(uniqueViewsByUser)) {
  uniqueViewsByUser = 1;
} else {
  uniqueViewsByUser++;
}

localStorage.setItem("uniqueViewsByUser", uniqueViewsByUser);

document.getElementById(
  "visit-count"
).innerText = `You have visited this page ${uniqueViewsByUser} times.`;
