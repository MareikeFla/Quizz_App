import { clearCardSection } from "../Cards/Cards.js";
import { quizCards } from "../Cards/CardsInfo.js";
import { createCard } from "../Cards/Cards.js";
import { profileHtml } from "../Footer/Footer.js";

export function renderHome() {
  profileHtml.classList.add("hidden");
  clearCardSection();
  quizCards.forEach(createCard);
}
