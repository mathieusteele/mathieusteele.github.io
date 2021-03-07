const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

const townsArray = ["Soda Springs", "Preston", "Fish Haven"];

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject["towns"];

    for (let i = 0; i < towns.length; i++) {
      if (townsArray.includes(towns[i].name)) {
        let card = document.createElement("section");
        let deets = document.createElement("div");
        let h2 = document.createElement("h2");
        let motto = document.createElement("p");
        let yearFounded = document.createElement("p");
        let population = document.createElement("p");
        let rainfall = document.createElement("p");
        let photo = document.createElement("img");

        h2.textContent = towns[i].name;
        motto.textContent = `Motto: ${towns[i].motto}`;
        yearFounded.textContent = `Year founded: ${towns[i].yearFounded}`;
        population.textContent = `Population: ${towns[i].currentPopulation}`;
        rainfall.textContent = `Annual Rain Fall: ${towns[i].averageRainfall}`;

        photo.setAttribute("src", `images/${towns[i].photo}`);
        photo.setAttribute(
          "alt",
          `${towns[i].name} ${towns[i].lastname} - ${towns[i].order}`
        );

        deets.appendChild(h2);
        deets.appendChild(motto);
        deets.appendChild(yearFounded);
        deets.appendChild(population);
        deets.appendChild(rainfall);

        // if (i % 2 === 0) {
        //   card.appendChild(photo);
        //   card.appendChild(deets);
        // } else {
        card.appendChild(deets);
        card.appendChild(photo);
        // }

        document.querySelector("div.cards").appendChild(card);
      }
    }
  });
