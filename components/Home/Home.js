import { clearCardSection } from "../Cards/Cards.js";
import { quizCards } from "../Cards/CardsInfo.js";
import { createCard } from "../Cards/Cards.js";

export function renderHome() {
  clearCardSection();
  quizCards.forEach(createCard);
}
