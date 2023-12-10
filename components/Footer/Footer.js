import { createCard } from "../Cards/Cards.js";
import { quizCards } from "../Cards/Questions.js";
import { createBookmarkedCards } from "../Cards/Cards.js";

const footerLink = document.querySelectorAll('[data-js="footer__link"]');
const profileHtml = document.querySelector('[data-js="profile"]');
const sectionCards = document.querySelector('[data-js="cards"]');

export function footerLinkEvent() {
  footerLink.forEach((link) => {
    link.addEventListener("click", (event) => {
      document.body.setAttribute("data-currentPage", "#" + event.target.id);
      sectionCards.innerHTML = "";
      footerLink.forEach((link) => {
        link.classList.remove("footer-activePage");
        if (event.target.id === "profile") {
          profileHtml.classList.remove("hidden");
        } else {
          profileHtml.classList.add("hidden");
          if (event.target.id === "home") {
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
