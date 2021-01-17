document.getElementById("year").innerText = new Date().getFullYear();

const lastModified = new Date(document.lastModified);

document.getElementById("updated").innerText = lastModified.toLocaleString(
  "en-US"
);
