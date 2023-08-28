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


### Continued development

Became more comfortable with if/else statements and adding/removing classes for styling, but 

### Useful resources

- MDN

## Author

- Frontend Mentor - [@LBuchananCates] (https://www.frontendmentor.io/profile/LBuchananCates)


## Acknowledgments

None, I worked on this project 100% by myself and it was the biggest challenge ever because I usually ask for help from one of my developer friends, @NicholasEwing, but this time, I wanted to see if I could get through each step of the process by myself. I am most proud of this project, because all my previous ones were definitely frustrating as I had rushed through the learning of Javascript; this time, I rewatched some youtube and udemy videos to get a better understanding of how to use the language. Instead of giving up, I used google and MDN to help me along and I can't emphasize enough how much google udemy have helped me.
