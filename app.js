var menuIcon = document.querySelector(".menu-icon");
var sideBar = document.querySelector(".sidebar");

menuIcon.addEventListener("click", () => {
  sideBar.classList.toggle("small-sidebar");
});
