let currentViewSetting = window.localStorage.getItem("currentViewSetting");

if (!currentViewSetting) {
  currentViewSetting = "gridview";
  window.localStorage.setItem("currentViewSetting", currentViewSetting);
}

function updateViewToMatchLocalStorage(newSetting) {
  console.log("called with " + newSetting);
  document.getElementById("directory").classList.remove("gridview", "listview");
  document.getElementById("directory").classList.add(newSetting);
}

// function toggleDirectoryView() {
//   currentViewSetting = window.localStorage.getItem("currentViewSetting");
//   let newViewSetting =
//     currentViewSetting == "gridview" ? "listview" : "gridview";
//   window.localStorage.setItem("currentViewSetting", newViewSetting);

//   updateViewToMatchLocalStorage(newViewSetting);
// }

function setDirectoryView(newView) {
  currentViewSetting = window.localStorage.getItem("currentViewSetting");

  if (currentViewSetting !== newView) {
    window.localStorage.setItem("currentViewSetting", newView);
    updateViewToMatchLocalStorage(newView);
  }
}

updateViewToMatchLocalStorage(currentViewSetting);
