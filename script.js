import { footerLinkEvent } from "./components/Footer/Footer.js";
import { checkSliderPosition } from "./components/Profile/Profile.js";
import { createCard } from "./components/Cards/Cards.js";
import { quizCards } from "./components/Cards/Questions.js";
import { initialColorMode } from "./components/utilities/ColorMode.js";
import { setColorMode } from "./components/utilities/ColorMode.js";

footerLinkEvent();
checkSliderPosition();
quizCards.forEach(createCard);

initialColorMode();
setColorMode(localStorage.getItem("locColorMode"));
