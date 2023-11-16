const prefersDarkMode = Boolean(
  getComputedStyle(document.documentElement).getPropertyValue("--darkMode")
);

const toggleMode = document.querySelector("#settings-toggle-mode");
let toggleModeStatus = null;

const footerLinkHome = document.querySelector(".footer-link-home");
const footerLinkBookmarks = document.querySelector(".footer-link-bookmarks");
const footerLinkProfile = document.querySelector(".footer-link-profile");

const colorBase = "#f2f2f2";
const colorBaseDark = "#181818";
const colorDark = "#7f7f7f";
const colorDarkDark = "#a8a8a8";
const colorTextBox = "#ffffff";
const colorTextBoxDark = "#e0e0e0";

function checkForDarkMode() {
  if (Boolean(prefersDarkMode)) {
    toggleModeStatus = "true";
    localStorage.setItem("vtoggleModeStatus", "true");
    toggleMode.setAttribute("checked", true);
    document.documentElement.style.setProperty("--colorBase", colorBaseDark);
    document.documentElement.style.setProperty("--colorDark", colorDarkDark);
    document.documentElement.style.setProperty(
      "--colorTextBox",
      colorTextBoxDark
    );
  } else {
    toggleModeStatus = "false";
    localStorage.setItem("vtoggleModeStatus", "false");
    document.documentElement.style.setProperty("--colorBase", colorBase);
    document.documentElement.style.setProperty("--colorDark", colorDark);
    document.documentElement.style.setProperty("--colorTextBox", colorTextBox);
  }
}

checkForDarkMode();

toggleMode.addEventListener("click", () => {
  toggleModeStatus = toggleModeStatus === "false" ? "true" : "false";
  localStorage.setItem("vtoggleModeStatus", toggleModeStatus);
  if (toggleModeStatus === "true") {
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
});
