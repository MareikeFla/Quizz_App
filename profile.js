const footerLinkHome = document.querySelector(".footer-link-home");
const footerLinkBookmarks = document.querySelector(".footer-link-bookmarks");
const footerLinkProfile = document.querySelector(".footer-link-profile");

const checkBoxToggleMode = document.querySelector("#settings-toggle-mode");

const colorBase = "#f2f2f2";
const colorBaseDark = "#181818";
const colorDark = "#7f7f7f";
const colorDarkDark = "#a8a8a8";
const colorTextBox = "#ffffff";
const colorTextBoxDark = "#e0e0e0";

function checkCheckBox() {
  if (localStorage.getItem("locColorMode") === "dark") {
    checkBoxToggleMode.setAttribute("checked", true);
  }
}

checkCheckBox();

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

checkBoxToggleMode.addEventListener("click", () => {
  if (localStorage.getItem("locColorMode") === "dark") {
    localStorage.setItem("locColorMode", "light");
    setColorMode("light");
  } else {
    localStorage.setItem("locColorMode", "dark");
    setColorMode("dark");
  }
});
