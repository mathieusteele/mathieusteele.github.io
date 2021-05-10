const form = document.forms["hero"];
form.addEventListener("submit", makeHero, false);

function makeHero(event) {
  event.preventDefault();
  const hero = {};
  hero.name = form.heroName.value;
  hero.realName = form.realName.value;

  hero.powers = [...form.powers]
    .filter((box) => box.checked)
    .map((box) => box.value);

  hero.category = form.category.value;

  hero.age = form.age.value;

  hero.city = form.city.value;

  hero.origin = form.origin.value;

  console.log(JSON.stringify(hero));
  return hero;
}

form.addEventListener("submit", validate, false);
function validate(event) {
  const firstLetter = form.heroName.value[0];
  if (firstLetter.toUpperCase() === "X") {
    event.preventDefault();
    alert("Your name is not allowed to start with X!");
  }
}

form.heroName.addEventListener("keyup", validateInline, false);
const label = form.querySelector("label");
const error = document.createElement("div");
error.classList.add("error");
error.textContent = "! Your name is not allowed to start with X.";
label.append(error);
function validateInline() {
  const heroName = this.value.toUpperCase();
  if (heroName.startsWith("X")) {
    error.style.display = "block";
  } else {
    error.style.display = "none";
  }
}
