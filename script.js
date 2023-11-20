const cardButton = document.querySelector(".card-button");
const cardButtonTextShow = document.querySelector(".card-button-textShow");
const cardButtonTextHide = document.querySelector(".card-button-textHide");
const cardAnswerText = document.querySelector(".card-answerText");
const cardAnswerBox = document.querySelector(".card-answerBox");

const cardBookmarked = document.querySelector(".card-bookmarked");
const cardNotBookmarked = document.querySelector(".card-notBookmarked");

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

console.log(localStorage.getItem("locColorMode"));

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

cardButton.addEventListener("click", () => {
  cardAnswerText.classList.toggle("card-answerText-hidden");
  cardAnswerBox.classList.toggle("card-answerBox-acive");
  cardButtonTextShow.classList.toggle("card-button-textHidden");
  cardButtonTextHide.classList.toggle("card-button-textHidden");
});

function toggleBookmarkClass() {
  cardBookmarked.classList.toggle("card-bookmark-hide");
  cardNotBookmarked.classList.toggle("card-bookmark-hide");
}

cardBookmarked.addEventListener("click", () => {
  toggleBookmarkClass();
});

cardNotBookmarked.addEventListener("click", () => {
  toggleBookmarkClass();
});
