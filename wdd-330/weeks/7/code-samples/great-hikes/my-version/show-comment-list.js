export function showCommentList(type = "all") {
  const commentListElement = document.getElementById("comments");
  commentListElement.innerHTML = "";
  const comments = getComments();
  console.log(type);
  console.log(comments);

  const filteredComments =
    type == "all"
      ? comments
      : comments.filter((comment) => comment.objectType === type);

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

  item.innerHTML = `${comment.commenterName} commented on ${new Date(
    comment.date
  ).toLocaleDateString()}: ${comment.content} `;

  return item;
}
