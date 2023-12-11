import {
  createCard,
  createBookmarkedCards,
  clearCardSection,
} from "../Cards/Cards.js";
import { quizCards } from "../Cards/CardsInfo.js";
import { sliderColorMode } from "../utilities/ColorMode.js";
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
      const currentPage = event.target.id;
      document.body.setAttribute("data-currentPage", "#" + currentPage);
      footerLink.forEach((link) => {
        link.classList.remove("footer-activePage");
        if (currentPage === "profile") {
          clearCardSection();
          profileHtml.classList.remove("hidden");
          updateNumberOfBookmarkedCards(countBookmarkedCards());
          updateNumberOfCards();
          sliderColorMode();
        } else {
          profileHtml.classList.add("hidden");
          if (currentPage === "home") {
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
