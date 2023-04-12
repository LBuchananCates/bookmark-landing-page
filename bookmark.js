// MOBILE MENU FUNCTIONALITY DONE
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

// FEATURES WITH BUTTONS (3 TABS) needs fixing
const simpleBookmarkingButton = document.getElementById("simple-bookmarking");
const simpleBookmarkingContainer = document.querySelector(
  ".simple-bookmarking-container"
);
const speedySearchingButton = document.getElementById("speedy-searching");
const speedySearchingContainer = document.querySelector(
  ".speedy-searching-container"
);
const easySharingButton = document.getElementById("easy-sharing");
const easySharingContainer = document.querySelector(".easy-sharing-container");

// displays "bookmark in one click" paragraph WORKS but when refresh, all 3 display
simpleBookmarkingButton.addEventListener("click", function () {
  simpleBookmarkingContainer.classList.remove("hidden");
  easySharingContainer.classList.add("hidden");
  speedySearchingContainer.classList.add("hidden");
});

// displays "intelligent search" paragraph
speedySearchingButton.addEventListener("click", function () {
  speedySearchingContainer.classList.remove("hidden");
  simpleBookmarkingContainer.classList.add("hidden");
  easySharingContainer.classList.add("hidden");
});

// displays "share your bookmarks" paragraph
easySharingButton.addEventListener("click", function () {
  easySharingContainer.classList.remove("hidden");
  speedySearchingContainer.classList.add("hidden");
  simpleBookmarkingContainer.classList.add("hidden");
});

// FAQ SECTION TOGGLES
const faqQuestion1 = document.querySelector(".faq-question-1");
const faqAnswer1 = document.querySelector(".faq-answer-1");
const openArrow = document.getElementById("arrow");

faqQuestion1.addEventListener("click", function () {
  faqAnswer1.classList.toggle("collapse-faq-answer");
  openArrow.classList.toggle("open-arrow");
  // works here
});

const faqQuestion2 = document.querySelector(".faq-question-2");
const faqAnswer2 = document.querySelector(".faq-answer-2");
faqQuestion2.addEventListener("click", function () {
  faqAnswer2.classList.toggle("collapse-faq-answer");
  openArrow.classList.toggle("open-arrow");
});

const faqQuestion3 = document.querySelector(".faq-question-3");
const faqAnswer3 = document.querySelector(".faq-answer-3");
faqQuestion3.addEventListener("click", function () {
  faqAnswer3.classList.toggle("collapse-faq-answer");
  // openArrow.classList.toggle("open-arrow");
});

const faqQuestion4 = document.querySelector(".faq-question-4");
const faqAnswer4 = document.querySelector(".faq-answer-4");
faqQuestion4.addEventListener("click", function () {
  faqAnswer4.classList.toggle("collapse-faq-answer");
  // openArrow.classList.toggle("open-arrow");
});

// EMAIL VERIFICATION
// grab email and error message by id
const email = document.getElementById("email");
const emailErrorMessage = document.querySelector(".error-message");
const contactUsButton = document.querySelector(".contact-us-btn");

// if email doesn't fit pattern, show error border
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
function validation() {
  if (email.value.match(pattern)) {
    email.classList.add("valid");
    email.classList.remove("invalid");
    emailErrorMessage.style.display = "none";
  } else {
    email.classList.remove("valid");
    email.classList.add("invalid");
  }
}
contactUsButton.addEventListener("click", validation);
