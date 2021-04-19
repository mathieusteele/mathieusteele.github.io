const requestURL = "js/links.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const links = jsonObject["links"];

    for (let i = 0; i < links.length; i++) {
      let listitem = document.createElement("li");
      let anchor = document.createElement("a");

      anchor.setAttribute("href", links[i].url);
      anchor.setAttribute("target", "_blank");
      anchor.innerText = links[i].label;
      listitem.appendChild(anchor);

      document.querySelector("#links").appendChild(listitem);
    }
  });
