import { quizCards } from "../Cards/Questions.js";
import { setColorMode } from "../utilities/ColorMode.js";
const sliderBoxElementDark = document.querySelector(".sliderBox-dark");
const sliderBoxElementLight = document.querySelector(".sliderBox-light");
const sliderBoxElementRainbow = document.querySelector(".sliderBox-rainbow");

const headerLogoStandard = document.querySelector(".logo-standard");
const headerLogoRainbow = document.querySelector(".logo-rainbow");

const numberOfCards = document.querySelector(".statistics-cards-number");
numberOfCards.innerText = localStorage.getItem("numberOfCards");

let numberOfBookmarkedCards = document.querySelector(
  ".statistics-bookmarks-number"
);
numberOfBookmarkedCards.innerText = countBookmarkedCards();

function countBookmarkedCards() {
  let numberOfBookmarkedCards = document.querySelector(
    ".statistics-bookmarks-number"
  );
  let count = 0;
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).match("cardBookmarked_")) {
      count++;
    }
  }
  return count;
}

// SWITCH MODE WITH SLIDER
// FUNCTIONS SLIDER

function checkSliderPosition(colorMode) {
  if (colorMode == "dark") {
    document.documentElement.style.setProperty("--left", "0%");
  }
  if (colorMode == "light") {
    document.documentElement.style.setProperty("--left", "33%");
  }
  if (colorMode == "rainbow") {
    document.documentElement.style.setProperty("--left", "66%");
  }
}

checkSliderPosition(localStorage.getItem("locColorMode"));

setColorMode(localStorage.getItem("locColorMode"));

// EVENTLISTENER SLIDER

sliderBoxElementDark.addEventListener("click", () => {
  document.documentElement.style.setProperty("--left", "0%");
  localStorage.setItem("locColorMode", "dark");
  setColorMode(localStorage.getItem("locColorMode"));
  headerLogoRainbow.classList.add("hidden");
  headerLogoStandard.classList.remove("hidden");
});

sliderBoxElementLight.addEventListener("click", () => {
  document.documentElement.style.setProperty("--left", "33%");
  localStorage.setItem("locColorMode", "light");
  setColorMode(localStorage.getItem("locColorMode"));
  headerLogoRainbow.classList.add("hidden");
  headerLogoStandard.classList.remove("hidden");
});

sliderBoxElementRainbow.addEventListener("click", () => {
  document.documentElement.style.setProperty("--left", "66%");
  localStorage.setItem("locColorMode", "rainbow");
  setColorMode(localStorage.getItem("locColorMode"));
  headerLogoRainbow.classList.remove("hidden");
  headerLogoStandard.classList.add("hidden");
});

const cardNumber = document.querySelector(".statistics-cards-number");
cardNumber.textContent = quizCards.length;

export { checkSliderPosition };
