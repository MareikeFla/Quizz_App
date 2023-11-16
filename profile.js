const toggleMode = document.querySelector("#settings-toggle-mode");
let toggleModeValue = toggleMode.getAttribute("value");
let toggleModeStatus = false;

console.log(toggleModeValue);

const footerLinkHome = document.querySelector(".footer-link-home");
const footerLinkBookmarks = document.querySelector(".footer-link-bookmarks");
const footerLinkProfile = document.querySelector(".footer-link-profile");
let footerLinkActive = footerLinkProfile;
// const root = document.documentElement;
// const rootStyle = getComputedStyle(root);
// const colorBase = rootStyle.getPropertyValue("--colorBase");

const colorBase = "#f2f2f2";
const colorBaseDark = "#181818";
const colorDark = "#7f7f7f";
const colorDarkDark = "#a8a8a8";
const colorTextBox = "#ffffff";
const colorTextBoxDark = "#e0e0e0";

toggleMode.addEventListener("click", () => {
  toggleModeStatus = toggleModeStatus === false ? true : false;
  if (toggleModeStatus === true) {
    document.documentElement.style.setProperty("--colorBase", colorBaseDark);
    document.documentElement.style.setProperty("--colorDark", colorDarkDark);
    document.documentElement.style.setProperty(
      "--colorTextBox",
      colorTextBoxDark
    );
    console.log(toggleModeValue);
  } else {
    document.documentElement.style.setProperty("--colorBase", colorBase);
    document.documentElement.style.setProperty("--colorDark", colorDark);
    document.documentElement.style.setProperty("--colorTextBox", colorTextBox);
  }
  console.log(toggleModeValue);
});

function toggleActiveFooterClass(currentPage) {
  currentPage.classList.add("footer-activePage");
  footerLinkActive.classList.remove("footer-activePage");
  footerLinkActive = currentPage;
}

footerLinkHome.addEventListener("click", () => {
  toggleActiveFooterClass(footerLinkHome);
});

footerLinkBookmarks.addEventListener("click", () => {
  toggleActiveFooterClass(footerLinkBookmarks);
});
footerLinkProfile.addEventListener("click", () => {
  toggleActiveFooterClass(footerLinkProfile);
});
