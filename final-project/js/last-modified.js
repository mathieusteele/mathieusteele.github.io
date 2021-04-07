const lastModified = new Date(document.lastModified);

document.getElementById(
  "last-modified"
).innerText = `Site Last Modified: ${lastModified.toLocaleString("en-US")}`;
