import { clearCardSection } from "../Cards/Cards.js";
import { updateNumberOfBookmarkedCards } from "../Cards/CardsInfo.js";
import { countBookmarkedCards } from "../Cards/CardsInfo.js";
import { updateNumberOfCards } from "../Cards/CardsInfo.js";
import { sliderColorMode } from "../utilities/ColorMode.js";

export function renderProfile() {
  clearCardSection();
  updateNumberOfBookmarkedCards(countBookmarkedCards());
  updateNumberOfCards();
  sliderColorMode();
}
