# Frontend Mentor - Bookmark landing page solution

This is a solution to the [Bookmark landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the newsletter form is submitted if:
  - The input field is empty
  - The email address is not formatted correctly

### Screenshot

<img width="1414" alt="Screen Shot 2023-08-10 at 12 16 23 PM" src="https://github.com/LBuchananCates/bookmark-landing-page/assets/100169368/c493b504-ab5e-44da-a27b-67c558e10661">

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: brilliant-peony-6758cf.netlify.app

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

How to use Javascript for mobile menu slider, how to toggle open and close FAQ section questions, and user verification through email when clicking 'contact us" button

To see how you can add code snippets, see below:

```html
- proud of making easy to remember class names for mobile & desktop menu styles (both open and close) because desktop menu is "expanded mobile menu items" and mobile menu is just "menu" + hamburger icon and hidden menu items, if that makes any sense
<nav class="nav-bar-mobile">
      <img
        src="./images/logo-bookmark.svg"
        alt="bookmark-logo"
        class="bookmark-logo"
      />
      <img
        src="./images/icon-hamburger.svg"
        alt="hamburger-menu"
        class="hamburger-menu-icon"
      />
      <div class="mobile-menu close-menu">
        <div class="mobile-menu-open-nav">
          <img
            src="./images/logo-bookmark.svg"
            alt="logo-bookmark"
            class="mobile-bookmark-logo"
          />
          <img
            src="./images/icon-close.svg"
            alt="icon-close"
            class="icon-close"
          />
        </div>

        <hr />
        <button class="top-nav-features" id="features">Features</button>
        <hr />
        <button class="top-nav-pricing" id="pricing">Pricing</button>
        <hr />
        <button class="top-nav-contact" id="contact">Contact</button>
        <hr />
        <button class="top-nav-login" id="login">Login</button>

        <div class="nav-social-media-buttons">
          <img src="./images/icon-facebook.svg" alt="facebook-icon" />
          <img src="./images/icon-twitter.svg" alt="twitter-icon" />
        </div>
      </div>
    </nav>

    <nav class="nav-bar-desktop">
      <img
        src="./images/logo-bookmark.svg"
        alt="bookmark-logo"
        class="bookmark-logo"
      />
      <div class="nav-bar-desktop-buttons">
        <button class="desktop-nav-features">Features</button>
        <button class="desktop-nav-pricing">Pricing</button>
        <button class="desktop-nav-contact">Contact</button>
        <button class="desktop-nav-login">Login</button>
      </div>
    </nav>
```
```css
- very proud of the transitions which were optional, but I wanted to reproduce the sliding side menus often seen on mobile websites
- also making sure that no matter the height of the screen, that the open and close menu didn't show white space at bottom of page
- as mentioned above, proud of the way I labeled the classes for html elements; naming classes is definitely a skill and very important for organization, if someone else needed to identify or locate elements on the page

/* opens menu when click hamburger */
.open-menu {
  background-color: hsl(229, 31%, 21%, 0.9);
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  transition: margin-right 0.5s ease;
  margin-left: -9px;
  height: 100%;
}

/* closes menu when click X close button WORKS*/
.close-menu {
  background-color: hsl(229, 31%, 21%, 0.9);
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  transition: margin-right 0.5s ease;
  margin-left: -103%;
  height: 100%;
}
```
```js
- VERY proud of finding out how to use RegEx for email verification
- the "else" conditions were a challenge to code out before realizing I needed to think of it step-by-step:
> removing valid class, adding invalid class (red), followed by error message display, then validating email if everything correct

// EMAIL VERIFICATION
const email = document.querySelector(
  ".stay-uptodate-with-us-section__input__email"
);
const errorMsg = document.querySelector(".email__error-message");
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

```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
