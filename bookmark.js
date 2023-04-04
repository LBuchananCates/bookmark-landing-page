const openMobileMenuButton = document.getElementById("hamburger-menu-icon");
const closeMobileMenuButton = document.getElementById("icon-close");
const mobileMenu = document.querySelector(".mobile-menu");

const simpleBookmarking = document.getElementById("simple-bookmarking");
const speedySearching = document.getElementById("speedy-searching");
const easySharing = document.getElementById("easy-sharing");

// opens menu WORKS
openMobileMenuButton.addEventListener("click", function () {
  mobileMenu.classList.add("open-menu");
  mobileMenu.classList.remove("close-menu");
});

// closes menu WORKS
closeMobileMenuButton.addEventListener("click", function () {
  mobileMenu.classList.remove("open-menu");
  mobileMenu.classList.add("close-menu");
});

// features-section simple bookmarking button displays "bookmark in one click" paragraph
simpleBookmarking.addEventListener("click", function () {
  console.log(simpleBookmarking);
  // speedySearching display: none;
  // easySharing display: none;
  // use classList.add/remove or textContent changes
});

// features-section speedy searching button displays "intelligent search" paragraph
speedySearching.addEventListener("click", function () {
  console.log(speedySearching);
  // simpleBookmarking display: none;
  // easySharing display: none;
});

// features-section easy sharing button displays "share your bookmarks" paragraph
easySharing.addEventListener("click", function () {
  console.log(easySharing);
  // simpleBookmarking display: none;
  // speedySearching display: none;
});
