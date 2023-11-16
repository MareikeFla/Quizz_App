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
let footerLinkActive = "footerLinkHome";

const footerLink = document.querySelectorAll(".footer-link");

cardButton.addEventListener("click", () => {
  cardAnswerText.classList.toggle("card-answerText-hidden");
  cardAnswerBox.classList.toggle("card-answerBox-active");
  cardButtonTextShow.classList.toggle("card-button-textHidden");
  cardButtonTextHide.classList.toggle("card-button-textHidden");
});

cardBookmarked.addEventListener("click", () => {
  cardBookmarked.classList.toggle("card-bookmark-hide");
  cardNotBookmarked.classList.toggle("card-bookmark-hide");
});

cardNotBookmarked.addEventListener("click", () => {
  cardBookmarked.classList.toggle("card-bookmark-hide");
  cardNotBookmarked.classList.toggle("card-bookmark-hide");
});

footerLinkHome.addEventListener("click", () => {
  footerLinkHome.classList.add("footer-activePage");
  footerLinkActive.classList.remove("footer-activePage");
  footerLinkActive = "footerLinkHome";
});
footerLinkBookmarks.addEventListener("click", () => {
  footerLinkBookmarks.classList.add("footer-activePage");
  footerLinkActive.classList.remove("footer-activePage");
  footerLinkActive = "footerLinkBookmarks";
});
footerLinkProfile.addEventListener("click", () => {
  footerLinkProfile.classList.add("footer-activePage");
  footerLinkActive.classList.remove("footer-activePage");
  footerLinkActive = "footerLinkProfile";
});
