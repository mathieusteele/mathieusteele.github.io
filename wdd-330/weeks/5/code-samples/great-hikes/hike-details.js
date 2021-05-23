import {renderOneHikeFull} from './render-one-hike.js';

window.addEventListener("load", () => {
    const hikeName = window.location.search.substr(6).replace(/%20/g, " ");
    const requestURL = "./hikes.json";
    //console.log(hikeName);
    const hikeDetails = document.getElementById("hikeDetails");

  fetch(requestURL)
    .then(function (response) {
      

      return response.json();
    })

    .then(function (jsonObject) {
      const hikeList = jsonObject["hikes"];
      const selectedHike = hikeList.filter(hike =>(hike.name == hikeName))[0];
      //const selectedHike = hikeList.filter;
      console.log(selectedHike);
      hikeDetails.appendChild(renderOneHikeFull(selectedHike));
      //renderHikeList(hikeList, hikeListElement);
    });
    //renderOneHikeFull();
  });