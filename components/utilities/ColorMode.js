const colorModeLight = "light";
const colorModeDark = "dark";
const colorModeRainbow = "rainbow";
const colorModes = [colorModeLight, colorModeDark, colorModeRainbow];

const setColorMode2 = (mode) => {
  if (colorModes.includes(mode)) {
    document.querySelector("body").setAttribute("data-colorTheme", mode);
    localStorage.setItem("locColorMode", mode);
  }
};

const getColorMode = () => localStorage.getItem("locColorMode");

export function initialColorMode() {
  let colorMode = getColorMode();
  if (colorMode === null) {
    if (window.matchMedia("(prefers-color-scheme: dark)")) {
      colorMode = colorModeDark;
    } else {
      colorMode = colorModeLight;
    }
  }
  setColorMode2(colorMode);
}

export function sliderColorMode() {
  const slidercolorModes = document.querySelectorAll('[data-js="colorMode"]');
  setSliderPosition(getColorMode());
  slidercolorModes.forEach((mode) => {
    mode.addEventListener("click", (event) => {
      setColorMode2(event.target.id);
      setSliderPosition(getColorMode());
    });
  });
}

function setSliderPosition(colorMode) {
  if (colorMode === colorModeDark) {
    document.documentElement.style.setProperty("--left", "0%");
  }
  if (colorMode === colorModeLight) {
    document.documentElement.style.setProperty("--left", "33%");
  }
  if (colorMode === colorModeRainbow) {
    document.documentElement.style.setProperty("--left", "66%");
  }
}
