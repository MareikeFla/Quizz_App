const cardButton = document.querySelectorAll(".card-button");
const cardButtonTextShow = document.querySelectorAll(".card-button-textShow");
const cardButtonTextHide = document.querySelectorAll(".card-button-textHide");
const cardAnswerText = document.querySelectorAll(".card-answerText");
const cardAnswerBox = document.querySelectorAll(".card-answerBox");

const prefersDarkMode = Boolean(
  getComputedStyle(document.documentElement).getPropertyValue("--darkMode")
);

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

function initialColorMode() {
  if (localStorage.getItem("locColorMode") == null) {
    if (prefersDarkMode) {
      localStorage.setItem("locColorMode", "dark");
    } else {
      localStorage.setItem("locColorMode", "light");
    }
  }
}

initialColorMode();

function setColorMode(colorMode) {
  if (colorMode == "dark") {
    document.documentElement.style.setProperty("--colorBase", colorBaseDark);
    document.documentElement.style.setProperty("--colorDark", colorDarkDark);
    document.documentElement.style.setProperty("--colorTextBox",colorTextBoxDark);
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
    document.documentElement.style.setProperty("--colorBase", colorBaseDark);
    document.documentElement.style.setProperty("--colorDark", colorDark);
    document.documentElement.style.setProperty("--shadowFooter",rainbowShadowFooter);
    document.documentElement.style.setProperty("--shadowHeader",rainbowShadowHeader);
    document.documentElement.style.setProperty("--colorHighlight", "hotpink");
    document.documentElement.style.setProperty("--colorTextBox", colorTextBox);
  }
}

setColorMode(localStorage.getItem("locColorMode"));

for (let i = 0; i < cardButton.length; i++) {
  cardButton[i].addEventListener("click", () => {
    cardAnswerText[i].classList.toggle("card-answerText-hidden");
    cardAnswerBox[i].classList.toggle("card-answerBox-acive");
    cardButtonTextShow[i].classList.toggle("card-button-textHidden");
    cardButtonTextHide[i].classList.toggle("card-button-textHidden");
  });
}
