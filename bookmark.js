// MOBILE MENU FUNCTIONALITY
const openMobileMenuButton = document.getElementById("hamburger-menu-icon");
const closeMobileMenuButton = document.getElementById("icon-close");
const mobileMenu = document.querySelector(".mobile-menu");

openMobileMenuButton.addEventListener("click", function () {
  mobileMenu.classList.add("open-menu");
  mobileMenu.classList.remove("close-menu");
});

closeMobileMenuButton.addEventListener("click", function () {
  mobileMenu.classList.remove("open-menu");
  mobileMenu.classList.add("close-menu");
});

// FEATURES WITH BUTTONS (3 TABS)
const simpleBookmarkingButton = document.getElementById("simple-bookmarking");
const simpleBookmarkingContainer = document.getElementById(
  "simple-bookmarking-container"
);
const speedySearchingButton = document.getElementById("speedy-searching");
const speedySearchingContainer = document.getElementById(
  "speedy-searching-container"
);
const easySharingButton = document.getElementById("easy-sharing");
const easySharingContainer = document.getElementById("easy-sharing-container");

// features-section simple bookmarking button displays "bookmark in one click" paragraph WORKS BUT OTHERS DON'T
simpleBookmarkingButton.addEventListener("click", function () {
  speedySearchingContainer.style.display = "none";
  easySharingContainer.style.display = "none";
});

// features-section speedy searching button displays "intelligent search" paragraph
speedySearchingButton.addEventListener("click", function () {
  simpleBookmarkingContainer.style.display = "none";
  easySharingContainer.style.display = "none";
});

// features-section easy sharing button displays "share your bookmarks" paragraph
easySharingButton.addEventListener("click", function () {
  simpleBookmarkingContainer.style.display = "none";
  speedySearchingContainer.style.display = "none";
});

// FAQ TOGGLE SECTION

// EMAIL VERIFICATION
// grab email and error message by id
const email = document.getElementById("email");
const emailErrorMessage = document.getElementById("error-message");

// use regex for email
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
function validation() {
  if (email.value.match(pattern)) {
    email.classList.add("valid");
    email.classList.remove("invalid");
    // style valid and invalid classes in CSS
    emailErrorMessage.style.visibility = "hidden";
  } else {
    email.classList.remove("valid");
    email.classList.add("invalid");
    emailErrorMessage.style.visibility = "visible";
  }
}
// show error border if email entered incorrectly: style in CSS
// remove error border and error messages when email format is correct
// reference signup-form.js
