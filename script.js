import { footerLinkEvent } from "./components/Footer/Footer.js";
import { createCard } from "./components/Cards/Cards.js";
import { quizCards } from "./components/Cards/CardsInfo.js";
import { initialColorMode } from "./components/utilities/ColorMode.js";

initialColorMode();
quizCards.forEach(createCard);
footerLinkEvent();
