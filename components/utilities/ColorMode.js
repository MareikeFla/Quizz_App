import { prefersDarkMode } from "../../script.js";

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

export function initialColorMode() {
  if (localStorage.getItem("locColorMode") == null) {
    if (prefersDarkMode) {
      localStorage.setItem("locColorMode", "dark");
    } else {
      localStorage.setItem("locColorMode", "light");
    }
  }
}

export function setColorMode(colorMode) {
  const headerLogoStandard = document.querySelector(".logo-standard");
  const headerLogoRainbow = document.querySelector(".logo-rainbow");
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
    headerLogoStandard.classList.remove("hidden");
    headerLogoRainbow.classList.add("hidden");
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
    headerLogoStandard.classList.remove("hidden");
    headerLogoRainbow.classList.add("hidden");
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
    headerLogoStandard.classList.add("hidden");
    headerLogoRainbow.classList.remove("hidden");
  }
}
