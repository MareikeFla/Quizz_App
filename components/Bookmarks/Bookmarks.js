import { clearCardSection } from "../Cards/Cards.js";
import { quizCards } from "../Cards/CardsInfo.js";
import { createCard } from "../Cards/Cards.js";
import { profileHtml } from "../Footer/Footer.js";
import { sectionCards } from "../Cards/Cards.js";

export function renderBookmarks() {
  profileHtml.classList.add("hidden");
  clearCardSection();
  const bookmarkedQuizCards = quizCards.filter((quizCard) => {
    return localStorage.getItem("cardBookmarked_" + quizCard.number);
  });
  if (bookmarkedQuizCards.length === 0) {
    const info = document.createElement("p");
    info.classList.add("infoTextNoBookmarks");
    info.textContent = "You have no bookmarked cards";
    sectionCards.appendChild(info);
  } else {
    bookmarkedQuizCards.forEach(createCard);
  }
  document.querySelector("main").scrollTop = 0;
}
