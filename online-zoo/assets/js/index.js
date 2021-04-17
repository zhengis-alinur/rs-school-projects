let searchInput = document.querySelector(".search-input");
let searchButton = document.querySelector(".search-button");
let header = document.querySelector(".header");

searchButton.addEventListener("click", (e) => {
  searchInput.style = "transform: translateX(-250px);";
  console.log("sdfs");
});
header.addEventListener("mouseleave", (e) => {
  searchInput.style = "transform: translateX(0);";
  console.log("leave");
});

let toggle = document.querySelector("#toggle");
let menu = document.querySelector(".menu");
toggle.addEventListener("click", (e) => {
  const menuDisplay = getComputedStyle(menu).display;
  menuDisplay === "none" ? menu.style.display = "block" : menu.style.display = "none";
});

