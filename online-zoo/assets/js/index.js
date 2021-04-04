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

