import {renderOneHikeFull} from "./render-one-hike.js";
import {getComments, showCommentList} from "./show-comment-list.js";

window.addEventListener("load", () => {
  const hikeName = window.location.search.substr(6).replace(/%20/g, " ");
  const requestURL = "./hikes.json";

  const hikeDetails = document.getElementById("hikeDetails");

  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })

    .then(function (jsonObject) {
      const hikeList = jsonObject["hikes"];
      const selectedHike = hikeList.filter((hike) => hike.name == hikeName)[0];

      console.log(selectedHike);
      hikeDetails.appendChild(renderOneHikeFull(selectedHike));
    });
});

class Hike {
  showCommentsList() {
    console.log("Hey, we did it!");
  }
}

class Comment {
  constructor(objectType, objectName, commenterName, content) {
    this.date = new Date();
    this.objectType = objectType;
    this.objectName = objectName;
    this.commenterName = commenterName;
    this.content = content;
  }
}

const hikeCommentForm = document.getElementById("hikeCommentForm");

hikeCommentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const currentComments = getComments();

  const hikeName = window.location.search.substr(6).replace(/%20/g, " ");

  const commenterName = document.getElementById("commenterName").value;
  let newOne = new Comment(
    "hike",
    hikeName,
    commenterName,
    document.getElementById("newComment").value
  );

  const updatedComments = [...currentComments, newOne];

  localStorage.setItem("comments", JSON.stringify(updatedComments));

  // Hike.showCommentsList();

  hikeCommentForm.reset();

  document.getElementById(
    "message"
  ).innerText = `Your comment was saved. Thank you, ${commenterName}!`;
});
