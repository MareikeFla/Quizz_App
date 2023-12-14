import { renderHome } from "../Home/Home.js";
import { renderProfile } from "../Profile/Pofile.js";
import { renderBookmarks } from "../Bookmarks/Bookmarks.js";

const setCurrentPage = (page) =>
  document.querySelector("body").setAttribute("data-currentpage", page);
const getCurrentPage = () =>
  document.querySelector("body").getAttribute("data-currentpage");

const footerButtons = document.querySelectorAll('[data-js="footer__link"]');

// Function - render all quiz cards at the main page,
// render only bookmarked cards at the bookmark page and show the profile section at the profile page

export function footerButtonEvent() {
  footerButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      setCurrentPage(event.target.id);
      if (getCurrentPage() === "home") {
        renderHome();
        console.log(getCurrentPage());
      }
      if (getCurrentPage() === "bookmarks") {
        renderBookmarks();
        console.log(getCurrentPage());
      }
      if (getCurrentPage() === "profile") {
        renderProfile();
        console.log(getCurrentPage());
      }
    });
  });
}
