const requestURL = "js/members.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const members = jsonObject["members"];

    for (let i = 0; i < members.length; i++) {
      let card = document.createElement("div");
      let name = document.createElement("h3");
      let phone = document.createElement("p");
      let anchor = document.createElement("a");
      let logo = document.createElement("img");

      name.textContent = members[i].name;
      phone.textContent = `${members[i].phone}`;

      logo.setAttribute("src", `images/${members[i].logo}`);
      logo.setAttribute("alt", `${members[i].name} Logo`);

      anchor.setAttribute("href", members[i].url);
      anchor.setAttribute("target", "_blank");
      anchor.appendChild(logo);
      card.appendChild(name);
      card.appendChild(phone);
      card.appendChild(anchor);

      document.querySelector("#directory").appendChild(card);
    }
  });
