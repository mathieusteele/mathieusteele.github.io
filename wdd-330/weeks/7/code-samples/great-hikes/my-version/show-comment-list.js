export function showCommentList(type = "all", objectName = "all") {
  const commentListElement = document.getElementById("comments");
  commentListElement.innerHTML = "";
  const comments = getComments();
  console.log(type);
  console.log(comments);

  let filteredComments =
    type == "all"
      ? comments
      : comments.filter((comment) => comment.objectType === type);

  filteredComments =
    objectName == "all"
      ? filteredComments
      : comments.filter((comment) => comment.objectName === objectName);

  console.log(filteredComments);
  filteredComments.forEach((comment) => {
    commentListElement.appendChild(renderComment(comment));
  });
}

export function getComments() {
  return localStorage.getItem("comments")
    ? JSON.parse(localStorage.getItem("comments"))
    : [];
}

function renderComment(comment) {
  const item = document.createElement("li");

  item.innerHTML = `<strong>${
    comment.commenterName
  }</strong> commented on ${new Date(comment.date).toLocaleDateString()}: ${
    comment.content
  } `;

  return item;
}
