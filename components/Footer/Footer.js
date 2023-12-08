export const footerLink = document.querySelectorAll('[data-js="footer__link"]');

footerLink.forEach((link) => {
  link.addEventListener("click", (event) => {
    document.body.setAttribute("data-currentPage", "#" + event.target.id);
    footerLink.forEach((link) => {
      link.classList.remove("footer-activePage");
    });
    event.target.classList.add("footer-activePage");
  });
});
