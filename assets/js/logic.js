// logic.js is the js to determine the state of dark/light mode and which 
// page the user is on then render the page acordingly. 

// Global variables:
// headerE, backEl, switchEl, avatarImgEl - represent the header section, 
// back button, light switch div and the avatar img elements.
// borderEl - elements contain borders in the style.
// currentSwitch - the dark/light mode state should be when the user is on a page

const headerEl = document.querySelector("header");
const backEl = document.querySelector("#back");
const switchEl = document.querySelector(".light-switch");
const avatarImgEl = document.querySelector(".positive");
const borderEl = document.querySelectorAll("header, main, .blog-page, .post-card, .avatar-page, .form-page, footer")

let currentSwitch = "on";

// Initialize light/dark mode and back button
// Function: init()
// parameter: none
// return: none
// Hide the back button if the window is not on blog.html.  Initialize the 
// light-switch(currentSwitch) with the light-switch in localstorage(lastSwitch). 
// Then turnOn() or turnOff() the light accordingly  
function init() {
  if (!(window.location.href.includes("blog.html"))) {
    backEl.setAttribute("style","display: none;")
  }
  
  let lastSwitch = localStorage.getItem("light-switch");
  if (lastSwitch === null) {
    localStorage.setItem("light-switch", currentSwitch);
  } else if (currentSwitch !== lastSwitch && lastSwitch === "on") {
    currentSwitch = lastSwitch;
    turnOn();  
  } else if (currentSwitch !== lastSwitch && lastSwitch === "off") {
    currentSwitch = lastSwitch;
    turnOff();  
  }
}

// Turn on the light
// Function: turnOn()
// parameter: none
// return: none
// Locate all the elements with dark and light class, flip them.  Then assign the light-switch
// sun class to indicate it's light mode.  Keep the avatar image as positive if there is avatar
// from the document. Store currentSwitch as on in localstorage.
function turnOn() {
  let darkEl = document.querySelectorAll(".dark");
  let lightEl = document.querySelectorAll(".light");

  darkEl.forEach( element => {
    element.setAttribute("class", element.getAttribute("class").replaceAll("dark", "light"));
  });
  lightEl.forEach( element => {
    element.setAttribute("class", element.getAttribute("class").replaceAll("light", "dark"));
  });

  switchEl.setAttribute("class", "light-switch sun");

  if (avatarImgEl !== null) {
    avatarImgEl.setAttribute("class", "positive");
  }

  currentSwitch = "on";
  localStorage.setItem("light-switch", currentSwitch);
}

// Turn off the light
// Function: turnoff()
// parameter: none
// return: none
// Locate all the elements with dark and light class, flip them.  Then assign the light-switch
// moon class to indicate it's dark mode.  Invert the avatar image by .negative if there is avatar
// from the document. Store currentSwitch as off in localstorage.
function turnOff() {
  let darkEl = document.querySelectorAll(".dark");
  let lightEl = document.querySelectorAll(".light");

  lightEl.forEach( element => {
    element.setAttribute("class", element.getAttribute("class").replaceAll("light", "dark"));
  });
  darkEl.forEach( element => {
    element.setAttribute("class", element.getAttribute("class").replaceAll("dark", "light"));
  });

  switchEl.setAttribute("class", "light-switch moon");

  if (avatarImgEl !== null) {
    avatarImgEl.setAttribute("class", "negative");
  }

  currentSwitch = "off";
  localStorage.setItem("light-switch", currentSwitch);
}

// header event listener
// parameter: click event
// return: none
// It checks for whether the click happened on the light-switch div or the back button.  If 
// light-switch, turnOn/turnOff accordingly.  If it's the back button, load index.html.
headerEl.addEventListener('click', function (event) {
  const element = event.target;

  if (element.matches(".light-switch")) {
    if (currentSwitch === "on") {
      turnOff();
    } else {
      turnOn();
    }
  } else if (element.matches("#back")) {
    window.location.href = ("./index.html");
  }
});



init();
