const footerLinkHome = document.querySelector(".footer--link-home");
const footerLinkBookmarks = document.querySelector(".footer--link-bookmarks");
const footerLinkProfile = document.querySelector(".footer--link-profile");

const sliderBoxElementDark = document.querySelector(
  ".profile-settingsColorMode--dark"
);
const sliderBoxElementLight = document.querySelector(
  ".profile-settingsColorMode--light"
);
const sliderBoxElementRainbow = document.querySelector(
  ".profile-settingsColorMode--rainbow"
);

const checkBoxToggleMode = document.querySelector(
  "#profile--settings-toggle-mode"
);

const colorBase = "#f2f2f2";
const colorBaseDark = "#181818";
const colorDark = "#7f7f7f";
const colorDarkDark = "#a8a8a8";
const colorTextBox = "#ffffff";
const colorTextBoxDark = "#e0e0e0";
const rainbowShadowFooter =
  "calc(-100vw / 3 * 2) 0 30px 6px #00FF00,calc(-100vw / 3) 0 30px 6px #0000FF,calc(100vw / 3) 0 30px 6px #4B0082";
const rainbowShadowHeader =
  "calc(-100vw / 3 * 2) 0 30px 6px rgb(255, 234, 0),calc(-100vw / 3) 0 30px 6px rgb(255, 191, 0),calc(100vw / 3) 0 30px 6px rgba(255, 0, 0, 1)";
const shadowHeader = "var(--colorDark) 0 3px 20px 3px";
const shadowFooter = "var(--colorDark) 0 -3px 20px 3px";

const headerLogoStandard = document.querySelector(".header-logo--standard");
const headerLogoRainbow = document.querySelector(".header-logo--rainbow");

const numberOfcards = document.querySelector(".profile__cardCount");
numberOfcards.innerText = localStorage.getItem("numberOfcards");

let numberOfBookmarkedcards = document.querySelector(
  ".profile__bookmarksCount"
);
numberOfBookmarkedcards.innerText = countBookmarkedcards();

function countBookmarkedcards() {
  let count = 0;
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i).match("cardBookmarked_")) {
      count++;
    }
  }
  return count;
}

// SWITCH MODE WITH SLIDER
// FUNCTIONS SLIDER

function checkSliderPosition(colorMode) {
  if (colorMode == "dark") {
    document.documentElement.style.setProperty("--left", "0%");
  }
  if (colorMode == "light") {
    document.documentElement.style.setProperty("--left", "33%");
  }
  if (colorMode == "rainbow") {
    document.documentElement.style.setProperty("--left", "66%");
  }
}

checkSliderPosition(localStorage.getItem("locColorMode"));

function setColorMode(colorMode) {
  if (colorMode == "dark") {
    document.documentElement.style.setProperty("--colorBase", colorBaseDark);
    document.documentElement.style.setProperty("--colorDark", colorDarkDark);
    document.documentElement.style.setProperty(
      "--colorTextBox",
      colorTextBoxDark
    );
    document.documentElement.style.setProperty("--colorHighlight", "#26add1");
    document.documentElement.style.setProperty("--shadowFooter", shadowFooter);
    document.documentElement.style.setProperty("--shadowHeader", shadowHeader);
    headerLogoStandard.classList.remove("hidden");
    headerLogoRainbow.classList.add("hidden");
  }

  if (colorMode == "light") {
    document.documentElement.style.setProperty("--colorBase", colorBase);
    document.documentElement.style.setProperty("--colorDark", colorDark);
    document.documentElement.style.setProperty("--colorTextBox", colorTextBox);
    document.documentElement.style.setProperty("--colorHighlight", "#26add1");
    document.documentElement.style.setProperty("--shadowFooter", shadowFooter);
    document.documentElement.style.setProperty("--shadowHeader", shadowHeader);
    headerLogoStandard.classList.remove("hidden");
    headerLogoRainbow.classList.add("hidden");
  }

  if (colorMode == "rainbow") {
    document.documentElement.style.setProperty("--colorBase", colorBaseDark);
    document.documentElement.style.setProperty("--colorDark", colorDark);
    document.documentElement.style.setProperty(
      "--shadowFooter",
      rainbowShadowFooter
    );
    document.documentElement.style.setProperty(
      "--shadowHeader",
      rainbowShadowHeader
    );
    document.documentElement.style.setProperty("--colorHighlight", "hotpink");
    document.documentElement.style.setProperty("--colorTextBox", colorTextBox);
    headerLogoStandard.classList.add("hidden");
    headerLogoRainbow.classList.remove("hidden");
  }
}

setColorMode(localStorage.getItem("locColorMode"));

// EVENTLISTENER SLIDER

sliderBoxElementDark.addEventListener("click", () => {
  document.documentElement.style.setProperty("--left", "0%");
  localStorage.setItem("locColorMode", "dark");
  setColorMode(localStorage.getItem("locColorMode"));
  headerLogoRainbow.classList.add("hidden");
  headerLogoStandard.classList.remove("hidden");
});

sliderBoxElementLight.addEventListener("click", () => {
  document.documentElement.style.setProperty("--left", "33%");
  localStorage.setItem("locColorMode", "light");
  setColorMode(localStorage.getItem("locColorMode"));
  headerLogoRainbow.classList.add("hidden");
  headerLogoStandard.classList.remove("hidden");
});

sliderBoxElementRainbow.addEventListener("click", () => {
  document.documentElement.style.setProperty("--left", "66%");
  localStorage.setItem("locColorMode", "rainbow");
  setColorMode(localStorage.getItem("locColorMode"));
  headerLogoRainbow.classList.remove("hidden");
  headerLogoStandard.classList.add("hidden");
});

const textareaQuestion = document.querySelector("#profile--newCardQuestion");
const counterQuestion = document.querySelector(".characterCounter-question");

textareaQuestion.addEventListener("input", (event) => {
  counterQuestion.textContent = textareaQuestion.value.length;
  if (textareaQuestion.value.length > 130) {
    counterQuestion.style.color = "red";
  } else {
    counterQuestion.style.color = "green";
  }
});
const textareaAnswer = document.querySelector("#profile--newCardAnswer");
const counterAnswer = document.querySelector(".characterCounter-answer");

textareaAnswer.addEventListener("input", () => {
  counterAnswer.textContent = textareaAnswer.value.length;
  if (textareaAnswer.value.length > 130) {
    counterAnswer.style.color = "red";
  } else {
    counterAnswer.style.color = "green";
  }
});

const tags = ["#html", "#css", "#JavaScript", "#react", "#test", "#test2"];
const newcardTagBox = document.querySelector(".profile--newCard-tagBox");
const newcard = document.querySelector(".newcard");

function createTag(tag) {
  const newcardTagCheckbox = document.createElement("input");
  newcardTagCheckbox.type = "checkbox";
  newcardTagCheckbox.classList.add("newcardTagCheckbox");
  newcardTagCheckbox.setAttribute("name", tag);
  newcardTagCheckbox.setAttribute("id", tag);
  newcardTagBox.append(newcardTagCheckbox);

  const newcardTagLabel = document.createElement("label");
  newcardTagLabel.textContent = tag;
  newcardTagLabel.setAttribute("for", tag);
  newcardTagLabel.classList.add("newcardTagLabel");
  newcardTagBox.append(newcardTagLabel);
}

tags.forEach(createTag);

const newcardTagClasses = () => {
  const classes = Array.from(newcard.classList);
  return classes.filter((clazz) => tags.includes(clazz));
};

const formData = new FormData(document.querySelector(".profile--newCardForm"));
console.log(formData);
