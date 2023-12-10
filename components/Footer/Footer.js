import {
  createCard,
  createBookmarkedCards,
  clearCardSection,
} from "../Cards/Cards.js";
import { quizCards } from "../Cards/CardsInfo.js";
import { checkSliderPosition } from "../utilities/ColorMode.js";
import {
  updateNumberOfCards,
  countBookmarkedCards,
  updateNumberOfBookmarkedCards,
} from "../Cards/CardsInfo.js";

const footerLink = document.querySelectorAll('[data-js="footer__link"]');

// Function - render all quiz cards at the main page,
// render only bookmarked cards at the bookmark page and show the profile section at the profile page

export function footerLinkEvent() {
  const profileHtml = document.querySelector('[data-js="profile"]');
  footerLink.forEach((link) => {
    link.addEventListener("click", (event) => {
      document.body.setAttribute("data-currentPage", "#" + event.target.id);
      footerLink.forEach((link) => {
        link.classList.remove("footer-activePage");
        if (event.target.id === "profile") {
          clearCardSection();
          profileHtml.classList.remove("hidden");
          updateNumberOfBookmarkedCards(countBookmarkedCards());
          updateNumberOfCards();
          checkSliderPosition();
        } else {
          profileHtml.classList.add("hidden");
          if (event.target.id === "home") {
            clearCardSection();
            quizCards.forEach(createCard);
          } else {
            createBookmarkedCards();
          }
        }
      });
      event.target.classList.add("footer-activePage");
    });
  });
}
