const requestURL = "js/members.json";

// const advertiserArray = [
//   "Bloomers Floral & Gift",
//   "Parkside Pizza",
//   "Stan Steele Agency, Inc.",
// ];

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const members = jsonObject["members"];

    let luckyMembers = [];

    if (members.length > 3) {
      while (luckyMembers.length < 3) {
        winner = Math.floor(Math.random() * Math.floor(members.length));
        if (!luckyMembers.includes(winner)) {
          luckyMembers.push(winner);
        }
      }
    } else {
      for (let i = 0; i < members.length; i++) {
        luckyMembers.push(i);
      }
    }

    for (let i = 0; i < members.length; i++) {
      if (luckyMembers.includes(i)) {
        let card = document.createElement("section");
        let name = document.createElement("p");
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

        document.querySelector("#ads").appendChild(card);
      }
    }
  });
