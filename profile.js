const footerLinkHome = document.querySelector(".footer-link-home");
const footerLinkBookmarks = document.querySelector(".footer-link-bookmarks");
const footerLinkProfile = document.querySelector(".footer-link-profile");

const sliderBoxElementDark = document.querySelector(".sliderBox-dark");
const sliderBoxElementLight = document.querySelector(".sliderBox-light");
const sliderBoxElementRainbow = document.querySelector(".sliderBox-rainbow");

const checkBoxToggleMode = document.querySelector("#settings-toggle-mode");

const colorBase = "#f2f2f2";
const colorBaseDark = "#181818";
const colorDark = "#7f7f7f";
const colorDarkDark = "#a8a8a8";
const colorTextBox = "#ffffff";
const colorTextBoxDark = "#e0e0e0";

// SWITCH MODE WITH SLIDER

// FUNCTIONS SLIDER

function checkSliderPosition(colorMode) {
  if (colorMode === "dark") {
    document.documentElement.style.setProperty("--left", "0%");
  } else if (colorMode === "light") {
    document.documentElement.style.setProperty("--left", "33%%");
  } else {
    document.documentElement.style.setProperty("--left", "66%%");
  }
}

checkSliderPosition(localStorage.getItem("locColorMode"));

function setColorMode(colorMode) {
  if (colorMode == "dark") {
    document.documentElement.style.setProperty("--colorBase", colorBaseDark);
    document.documentElement.style.setProperty("--colorDark", colorDarkDark);
    document.documentElement.style.setProperty(
      "--colorTextBox",
      colorTextBoxDark
    );
  } else {
    document.documentElement.style.setProperty("--colorBase", colorBase);
    document.documentElement.style.setProperty("--colorDark", colorDark);
    document.documentElement.style.setProperty("--colorTextBox", colorTextBox);
  }
}

setColorMode(localStorage.getItem("locColorMode"));

// EVENTLISTENER SLIDER

sliderBoxElementLight.addEventListener("click", () => {
  document.documentElement.style.setProperty("--left", "33%");
  localStorage.setItem("locColorMode", "light");
  setColorMode(localStorage.getItem("locColorMode"));
});

sliderBoxElementDark.addEventListener("click", () => {
  document.documentElement.style.setProperty("--left", "0%");
  localStorage.setItem("locColorMode", "dark");
  setColorMode(localStorage.getItem("locColorMode"));
});

sliderBoxElementRainbow.addEventListener("click", () => {
  document.documentElement.style.setProperty("--left", "66%");
  localStorage.setItem("locColorMode", "light");
  setColorMode(localStorage.getItem("locColorMode"));
});
