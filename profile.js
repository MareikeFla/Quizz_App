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
const rainbowShadowFooter =
  "calc(-100vw / 3 * 2) 0 30px 6px #00FF00,calc(-100vw / 3) 0 30px 6px #0000FF,calc(100vw / 3) 0 30px 6px #4B0082";
const rainbowShadowHeader =
  "calc(-100vw / 3 * 2) 0 30px 6px rgb(255, 234, 0),calc(-100vw / 3) 0 30px 6px rgb(255, 191, 0),calc(100vw / 3) 0 30px 6px rgba(255, 0, 0, 1)";
const shadowHeader = "var(--colorDark) 0 3px 20px 3px";
const shadowFooter = "var(--colorDark) 0 -3px 20px 3px";

// SWITCH MODE WITH SLIDER
// FUNCTIONS SLIDER

function checkSliderPosition(colorMode) {
  if (colorMode == "dark") {
    document.documentElement.style.setProperty("--left", "0%");
  } else if (colorMode == "light") {
    document.documentElement.style.setProperty("--left", "33%%");
  } else {
    document.documentElement.style.setProperty("--left", "66%%");
  }
}

checkSliderPosition(localStorage.getItem("locColorMode"));
console.log(localStorage.getItem("locColorMode"));

function setColorMode(colorMode) {
  if (colorMode == "dark") {
    document.documentElement.style.setProperty("--colorBase", colorBaseDark);
    document.documentElement.style.setProperty("--colorDark", colorDarkDark);
    document.documentElement.style.setProperty(
      "--colorTextBox",
      colorTextBoxDark
    );
    document.documentElement.style.setProperty("--colorHighlight", "#26add1");
    document.documentElement.style.setProperty("--shadowFooter", shadowFooter);
    document.documentElement.style.setProperty("--shadowHeader", shadowHeader);
  }

  if (colorMode == "light") {
    document.documentElement.style.setProperty("--colorBase", colorBase);
    document.documentElement.style.setProperty("--colorDark", colorDark);
    document.documentElement.style.setProperty("--colorTextBox", colorTextBox);
    document.documentElement.style.setProperty("--colorHighlight", "#26add1");
    document.documentElement.style.setProperty("--shadowFooter", shadowFooter);
    document.documentElement.style.setProperty("--shadowHeader", shadowHeader);
  }

  if (colorMode == "rainbow") {
    document.documentElement.style.setProperty("--colorBase", "white");
    document.documentElement.style.setProperty(
      "--shadowFooter",
      rainbowShadowFooter
    );
    document.documentElement.style.setProperty(
      "--shadowHeader",
      rainbowShadowHeader
    );
    document.documentElement.style.setProperty("--colorHighlight", "hotpink");
    document.documentElement.style.setProperty("--colorTextBox", colorTextBox);
  }
}

setColorMode(localStorage.getItem("locColorMode"));
console.log(localStorage.getItem("locColorMode"));

// EVENTLISTENER SLIDER

sliderBoxElementLight.addEventListener("click", () => {
  document.documentElement.style.setProperty("--left", "33%");
  localStorage.setItem("locColorMode", "light");
  setColorMode(localStorage.getItem("locColorMode"));
  console.log(localStorage.getItem("locColorMode"));
});

sliderBoxElementDark.addEventListener("click", () => {
  document.documentElement.style.setProperty("--left", "0%");
  localStorage.setItem("locColorMode", "dark");
  setColorMode(localStorage.getItem("locColorMode"));
  console.log(localStorage.getItem("locColorMode"));
});

sliderBoxElementRainbow.addEventListener("click", () => {
  document.documentElement.style.setProperty("--left", "66%");
  localStorage.setItem("locColorMode", "rainbow");
  setColorMode(localStorage.getItem("locColorMode"));
  console.log(localStorage.getItem("locColorMode"));
});
