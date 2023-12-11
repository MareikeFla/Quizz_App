// Check if user prefers dark mode in system settings

const prefersDarkMode = Boolean(
  getComputedStyle(document.documentElement).getPropertyValue("--darkMode")
);

// Initial color mode according to user settings if no color mode is set yet

export function initialColorMode() {
  if (localStorage.getItem("locColorMode") == null) {
    if (prefersDarkMode) {
      localStorage.setItem("locColorMode", "dark");
    } else {
      localStorage.setItem("locColorMode", "light");
    }
  }
  setColorMode(localStorage.getItem("locColorMode"));
}

// Select color variables for color mode

const root = document.querySelector(":root");
const colorPrimary = getComputedStyle(root).getPropertyValue("--colorPrimary");
const colorPrimaryDark =
  getComputedStyle(root).getPropertyValue("--colorPrimaryDark");
const colorSecondary =
  getComputedStyle(root).getPropertyValue("--colorSecondary");
const colorSecondaryDark = getComputedStyle(root).getPropertyValue(
  "--colorSecondaryDark"
);
const colorCardBox = getComputedStyle(root).getPropertyValue("--colorCardBox");
const colorcardBoxDark =
  getComputedStyle(root).getPropertyValue("--colorcardBoxDark");
const shadowFooterRainbow = getComputedStyle(root).getPropertyValue(
  "--shadowFooterRainbow"
);
const shadowHeaderRainbow = getComputedStyle(root).getPropertyValue(
  "--shadowHeaderRainbow"
);
const shadowHeader = getComputedStyle(root).getPropertyValue("--shadowHeader");
const shadowFooter = getComputedStyle(root).getPropertyValue("--shadowFooter");
const colorHighlight =
  getComputedStyle(root).getPropertyValue("--colorHighlight");
const colorHighlightRainbow = getComputedStyle(root).getPropertyValue(
  "--colorHighlightRainbow"
);

// Color mode light/dark/rainbow

export function setColorMode(colorMode) {
  if (colorMode == "dark") {
    document.documentElement.style.setProperty(
      "--colorPrimary",
      colorPrimaryDark
    );
    document.documentElement.style.setProperty(
      "--colorSecondary",
      colorSecondaryDark
    );
    document.documentElement.style.setProperty(
      "--colorCardBox",
      colorcardBoxDark
    );
    document.documentElement.style.setProperty(
      "--colorHighlight",
      colorHighlight
    );
    document.documentElement.style.setProperty("--shadowFooter", shadowFooter);
    document.documentElement.style.setProperty("--shadowHeader", shadowHeader);
    toogleLogo("dark");
  }

  if (colorMode == "light") {
    document.documentElement.style.setProperty("--colorPrimary", colorPrimary);
    document.documentElement.style.setProperty(
      "--colorSecondary",
      colorSecondary
    );
    document.documentElement.style.setProperty("--colorCardBox", colorCardBox);
    document.documentElement.style.setProperty(
      "--colorHighlight",
      colorHighlight
    );
    document.documentElement.style.setProperty("--shadowFooter", shadowFooter);
    document.documentElement.style.setProperty("--shadowHeader", shadowHeader);
    toogleLogo("light");
  }

  if (colorMode == "rainbow") {
    document.documentElement.style.setProperty(
      "--colorPrimary",
      colorPrimaryDark
    );
    document.documentElement.style.setProperty(
      "--colorSecondary",
      colorSecondary
    );
    document.documentElement.style.setProperty(
      "--shadowFooter",
      shadowFooterRainbow
    );
    document.documentElement.style.setProperty(
      "--shadowHeader",
      shadowHeaderRainbow
    );
    document.documentElement.style.setProperty(
      "--colorHighlight",
      colorHighlightRainbow
    );
    document.documentElement.style.setProperty("--colorCardBox", colorCardBox);
    toogleLogo("rainbow");
  }
}

const colorModes = document.querySelectorAll('[data-js="colorMode"]');

export function sliderColorMode() {
  sliderPosition(localStorage.getItem("locColorMode"));
  colorModes.forEach((mode) => {
    mode.addEventListener("click", (event) => {
      const eventMode = event.target.id;
      toogleLogo(eventMode);
      localStorage.setItem("locColorMode", eventMode);
      setColorMode(eventMode);
      sliderPosition(eventMode);
    });
  });
}

function sliderPosition(colorMode) {
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

function toogleLogo(mode) {
  const headerLogoStandard = document.querySelector(".logo-standard");
  const headerLogoRainbow = document.querySelector(".logo-rainbow");
  if (mode === "rainbow") {
    headerLogoRainbow.classList.remove("hidden");
    headerLogoStandard.classList.add("hidden");
  } else {
    headerLogoRainbow.classList.add("hidden");
    headerLogoStandard.classList.remove("hidden");
  }
}
