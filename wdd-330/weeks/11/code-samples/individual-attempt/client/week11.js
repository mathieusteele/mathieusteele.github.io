// import {makeRequest} from "./authHelpers.js";
import Auth from "./auth.js";
import {makeRequest} from "./authHelpers.js";

const myAuth = new Auth();

const loginForm = document.querySelector("#login");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  myAuth.login(getPosts);
});

async function getPosts() {
  let posts = await makeRequest("posts", "GET", null, myAuth.token);

  showPosts(posts);
  //   console.log(posts);
}

function showPosts(posts) {
  let postContainer = document.getElementById("posts");
  posts.map((post) => {
    let listItem = document.createElement("li");
    listItem.innerText = post.title;
    postContainer.appendChild(listItem);
  });
}

// let test = await makeRequest("login", "POST", {
//   password: "user1",
//   email: "user1@email.com",
// });

// console.log(test.accessToken);
