import { profileHtml } from "../Footer/Footer.js";
import { clearCardSection } from "../Cards/Cards.js";
import {
  quizCards,
  updateNumberOfBookmarkedCards,
} from "../Cards/CardsInfo.js";
import { countBookmarkedCards } from "../Cards/CardsInfo.js";
import { updateNumberOfCards } from "../Cards/CardsInfo.js";
import { sliderColorMode } from "../utilities/ColorMode.js";

export function renderProfile() {
  clearCardSection();
  profileHtml.classList.remove("hidden");
  updateNumberOfBookmarkedCards(countBookmarkedCards());
  updateNumberOfCards();
  sliderColorMode();
}
