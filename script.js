const cardButton = document.querySelector(".card-button");
const cardButtonTextShow = document.querySelector(".card-button-textShow");
const cardButtonTextHide = document.querySelector(".card-button-textHide");
const cardAnswerText = document.querySelector(".card-answerText");
const cardAnswerBox = document.querySelector(".card-answerBox");

const cardBookmarked = document.querySelector(".card-bookmarked");
const cardNotBookmarked = document.querySelector(".card-notBookmarked");

const footerLinkHome = document.querySelector(".footer-link-home");
const footerLinkBookmarks = document.querySelector(".footer-link-bookmarks");
const footerLinkProfile = document.querySelector(".footer-link-profile");
let footerLinkActive = footerLinkHome;

const footerLink = document.querySelectorAll(".footer-link");

let toggleModeStatus = localStorage.getItem("vtoggleModeStatus");

const colorBase = "#f2f2f2";
const colorBaseDark = "#181818";
const colorDark = "#7f7f7f";
const colorDarkDark = "#a8a8a8";
const colorTextBox = "#ffffff";
const colorTextBoxDark = "#e0e0e0";

function checkCurrentColorMode() {
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
}
checkCurrentColorMode();

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
