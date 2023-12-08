import { footerLink } from "./components/Footer/Footer.js";

console.log(footerLink);
// const cardButton = document.querySelectorAll(".card-button");
// const cardButtonTextShow = document.querySelectorAll(".card-button-textShow");
// const cardButtonTextHide = document.querySelectorAll(".card-button-textHide");
// const cardAnswerText = document.querySelectorAll(".card-answerText");
// const cardAnswerBox = document.querySelectorAll(".card-answerBox");
// const cardDemandBox = document.querySelectorAll(".wrapDemand");

// const prefersDarkMode = Boolean(
//   getComputedStyle(document.documentElement).getPropertyValue("--darkMode")
// );

// const colorBase = "#f2f2f2";
// const colorBaseDark = "#181818";
// const colorDark = "#7f7f7f";
// const colorDarkDark = "#a8a8a8";
// const colorTextBox = "#ffffff";
// const colorTextBoxDark = "#e0e0e0";
// const rainbowShadowFooter =
//   "calc(-100vw / 3 * 2) 0 30px 6px #00FF00,calc(-100vw / 3) 0 30px 6px #0000FF,calc(100vw / 3) 0 30px 6px #4B0082";
// const rainbowShadowHeader =
//   "calc(-100vw / 3 * 2) 0 30px 6px rgb(255, 234, 0),calc(-100vw / 3) 0 30px 6px rgb(255, 191, 0),calc(100vw / 3) 0 30px 6px rgba(255, 0, 0, 1)";
// const shadowHeader = "var(--colorDark) 0 3px 20px 3px";
// const shadowFooter = "var(--colorDark) 0 -3px 20px 3px";

// function initialColorMode() {
//   if (localStorage.getItem("locColorMode") == null) {
//     if (prefersDarkMode) {
//       localStorage.setItem("locColorMode", "dark");
//     } else {
//       localStorage.setItem("locColorMode", "light");
//     }
//   }
// }

// initialColorMode();

// const headerLogoStandard = document.querySelector(".logo-standard");
// const headerLogoRainbow = document.querySelector(".logo-rainbow");

// function setColorMode(colorMode) {
//   if (colorMode == "dark") {
//     document.documentElement.style.setProperty("--colorBase", colorBaseDark);
//     document.documentElement.style.setProperty("--colorDark", colorDarkDark);
//     document.documentElement.style.setProperty(
//       "--colorTextBox",
//       colorTextBoxDark
//     );
//     document.documentElement.style.setProperty("--colorHighlight", "#26add1");
//     document.documentElement.style.setProperty("--shadowFooter", shadowFooter);
//     document.documentElement.style.setProperty("--shadowHeader", shadowHeader);
//     headerLogoStandard.classList.remove("hidden");
//     headerLogoRainbow.classList.add("hidden");
//   }

//   if (colorMode == "light") {
//     document.documentElement.style.setProperty("--colorBase", colorBase);
//     document.documentElement.style.setProperty("--colorDark", colorDark);
//     document.documentElement.style.setProperty("--colorTextBox", colorTextBox);
//     document.documentElement.style.setProperty("--colorHighlight", "#26add1");
//     document.documentElement.style.setProperty("--shadowFooter", shadowFooter);
//     document.documentElement.style.setProperty("--shadowHeader", shadowHeader);
//     headerLogoStandard.classList.remove("hidden");
//     headerLogoRainbow.classList.add("hidden");
//   }

//   if (colorMode == "rainbow") {
//     document.documentElement.style.setProperty("--colorBase", colorBaseDark);
//     document.documentElement.style.setProperty("--colorDark", colorDark);
//     document.documentElement.style.setProperty(
//       "--shadowFooter",
//       rainbowShadowFooter
//     );
//     document.documentElement.style.setProperty(
//       "--shadowHeader",
//       rainbowShadowHeader
//     );
//     document.documentElement.style.setProperty("--colorHighlight", "hotpink");
//     document.documentElement.style.setProperty("--colorTextBox", colorTextBox);
//     headerLogoStandard.classList.add("hidden");
//     headerLogoRainbow.classList.remove("hidden");
//   }
// }

// setColorMode(localStorage.getItem("locColorMode"));

// for (let i = 0; i < cardButton.length; i++) {
//   cardButton[i].addEventListener("click", () => {
//     cardAnswerText[i].classList.toggle("invisible");
//     // cardDemandBox[i].classList.toggle("invisible");
//     cardAnswerBox[i].classList.toggle("card-answerBox-acive");
//     cardButtonTextShow[i].classList.toggle("hidden");
//     cardButtonTextHide[i].classList.toggle("hidden");
//   });
// }

// const body = document.querySelector("body");
// const bodyHalfOffsetHeight = body.clientHeight / 2 + "px";
// document.documentElement.style.setProperty(
//   "--bodyHeight",
//   bodyHalfOffsetHeight
// );
