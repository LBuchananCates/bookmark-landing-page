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

// FEATURES WITH BUTTONS (3 TABS)
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
const faqQuestions = document.querySelectorAll(".faq-question");

for (const faqQuestion of faqQuestions) {
  const faqAnswer = faqQuestion.querySelector(".faq-answer");
  const openArrow = faqQuestion.querySelector(".arrow");

  faqQuestion.addEventListener("click", function () {
    faqAnswer.classList.toggle("collapse-faq-answer");
    openArrow.classList.toggle("open-arrow");
  });
}

// EMAIL VERIFICATION
const email = document.getElementById("email");
const errorMsg = document.querySelector(".error-message");
const contactUsButton = document.querySelector(".contact-us-btn");

let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
function validation() {
  if (email.value.match(pattern)) {
    email.classList.add("valid");
    email.classList.remove("invalid");
    errorMsg.style.display = "none";
  } else {
    email.classList.remove("valid");
    email.classList.add("invalid");
    errorMsg.style.display = "flex";
  }
}
contactUsButton.addEventListener("click", validation);
