function setRating(rating) {
  document.getElementById("severity-rating").innerText = rating;
}

let thisDay = new Date();
let month = thisDay.getMonth() + 1;
let month_padded = month.toString().length < 2 ? "0" + month : month;
let day = thisDay.getDate();
let day_padded = thisDay.getDate().toString().length < 2 ? "0" + day : day;
let formatted = thisDay.getFullYear() + "-" + month_padded + "-" + day_padded;
document.getElementById("date").value = formatted;
