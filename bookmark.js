const openMobileMenu = document.getElementById(".mobile-menu");
const closeMobileMenu = document.getElementById("icon-close");

const simplyBookmarking = document.getElementById("simply-bookmarking");
const speedySearching = document.getElementById("speedy-searching");
const easySharing = document.getElementById("easy-sharing");

// when click HAMB or X button, mobile-menu slides in and out

// opens menu WORKS
openMobileMenu.addEventListener("click", function () {
  openMobileMenu.classList.add("open-menu");
});

// closes menu
closeMobileMenu.addEventListener("click", function () {
  closeMobileMenu.classList.add("close-menu");
  closeMobileMenu.classList.remove("open-menu");
});
