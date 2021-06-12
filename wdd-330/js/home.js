let yearContainer = document.getElementById("year");

if (yearContainer) {
  yearContainer.innerText = new Date().getFullYear();
}

const lastModified = new Date(document.lastModified);

WebFont.load({
  google: {
    families: ["Inter"],
  },
});
