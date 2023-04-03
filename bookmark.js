const openMobileMenuButton = document.getElementById("hamburger-menu-icon");
const closeMobileMenuButton = document.getElementById("icon-close");
const mobileMenu = document.querySelector(".mobile-menu");

const simplyBookmarking = document.getElementById("simply-bookmarking");
const speedySearching = document.getElementById("speedy-searching");
const easySharing = document.getElementById("easy-sharing");

// when click HAMB or X button, mobile-menu slides in and out

// opens menu WORKS
openMobileMenuButton.addEventListener("click", function () {
  mobileMenu.classList.add("open-menu");
  mobileMenu.classList.remove("close-menu");
});

// closes menu
closeMobileMenuButton.addEventListener("click", function () {
  mobileMenu.classList.remove("open-menu");
  mobileMenu.classList.add("close-menu");
});
