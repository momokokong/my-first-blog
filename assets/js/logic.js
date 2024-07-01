const headerEl = document.querySelector("header");
const backEl = document.querySelector("#back");
const switchEl = document.querySelector(".light-switch");
const avatarImgEl = document.querySelector(".positive");
const borderEl = document.querySelectorAll("header, main, .blog-page, .post-card, .avatar-page, .form-page, footer")
let currentSwitch = "on";


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

init();
