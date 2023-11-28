# QUIZZ WAVE

The ultimate Quiz App for Web Developer - But even more important: My first time using JavaScript.

This App is the second project I created during my Web Development bootcamp at [neue fische](https://www.neuefische.de/).

---

## My Goals

My goal for this project is to connect my knowledge about html, css and JavaScript and to try out a lot of new things.

An incomplete list of stuff I want to do:

- [x] I want an App with three pages, home, bookmarks and profile. There will be a navbar to reach each page.
- [ ] There will be questions about Web Development
- [x] The bookmark should change by clicking it
- [x] At the profile--settings the user should be able to toggle between light and dark mode, the initiale mode of the app should be adaptet to the useres system profile--settings
- [ ] I want a third mode that is called "rainbow" - Because I can
- [ ] As a first(but I guess not best solution) I will hard code my questions in JavaScript
- [ ] Only Question that are bookmarked will show up at the bookmark section
- [ ] Every question will have tags and it would be cool if I could filter by them. (But we will see...)

## Learnings

A very incompete list of things I learned while doing this (will be updatet from time to time)

- Writing down after every task what I have done, what I learned, what I am struggeling with is helping me to learn

- It makes a huge difference how detailed your frameworks are and designing Icons is harder than I thought

- You can not add an eventlistener to querySelectorAll without looping - (This gave me hard headache for half an hour)

- Before adding a new functionallity, I have to make sure I really now how it should work in detail

- You can store stuff in localeStorage - it is like cookies but without expiring.

## Code

Code I like, mostly because it is about something I have never done before and it took me some time to figured it out, but now it is working!
<br>

This code was much, much longer in the begining...

```
checkBoxToggleMode.addEventListener("click", () => {
  if (localStorage.getItem("locColorMode") === "dark") {
    localStorage.setItem("locColorMode", "light");
    setColorMode("light");
  } else {
    localStorage.setItem("locColorMode", "dark");
    setColorMode("dark");
  }
});
```

Here it took me some time to figure the syntax out...

```
const prefersDarkMode = Boolean(
  getComputedStyle(document.documentElement).getPropertyValue("--darkMode")
);
```

...and it was the important step to adapt the color mode to useres system setting

```
function initialColorMode() {
  if (localStorage.getItem("locColorMode") == null) {
    if (prefersDarkMode) {
      localStorage.setItem("locColorMode", "dark");
    } else {
      localStorage.setItem("locColorMode", "light");
    }
  }
}

initialColorMode();
```
