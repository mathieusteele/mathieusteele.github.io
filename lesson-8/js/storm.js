function setRating(rating) {
  document.getElementById("severity-rating").innerText = rating;
}

let today = new Date();
let month = today.getMonth() + 1;
let month_padded = month.toString().length < 2 ? "0" + month : month;
let formatted =
  today.getFullYear() + "-" + month_padded + "-" + today.getDate();
document.getElementById("date").value = formatted;
