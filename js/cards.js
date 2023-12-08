// // Define an array of quiz cards with their details
// const quizCards = [
//   {
//     number: 1,
//     question: "What does HTML stand for?",
//     answer: "HyperText Markup Language",
//     tags: ["#html"],
//   },
//   {
//     number: 2,
//     question: "Which HTML tag is used for creating a paragraph?",
//     answer: "<p>",
//     tags: ["#html"],
//   },
//   {
//     number: 3,
//     question: "What is the purpose of CSS?",
//     answer: "Styling web pages",
//     tags: ["#css"],
//   },
//   {
//     number: 4,
//     question: "How do you select elements with the class 'example' in CSS?",
//     answer: ".example",
//     tags: ["#css"],
//   },
//   {
//     number: 5,
//     question:
//       "What is the correct syntax for referring to an external script called 'script.js'?",
//     answer: "<script src='script.js'></script>",
//     tags: ["#html"],
//   },
//   {
//     number: 6,
//     question: "How do you write a comment in HTML?",
//     answer: "<!-- comment -->",
//     tags: ["#html"],
//   },
//   {
//     number: 7,
//     question: "Which property is used to change the background color in CSS?",
//     answer: "background-color",
//     tags: ["#css"],
//   },
//   {
//     number: 8,
//     question: "How do you create a function in JavaScript?",
//     answer: "function myFunction() {}",
//     tags: ["#javascript"],
//   },
//   {
//     number: 9,
//     question: "How do you write an IF statement in JavaScript?",
//     answer: "if (condition) {}",
//     tags: ["#javascript"],
//   },
//   {
//     number: 10,
//     question: "What is the correct HTML tag for inserting a line break?",
//     answer: "<br>",
//     tags: ["#html"],
//   },
//   {
//     number: 11,
//     question: "How do you add a comment in CSS?",
//     answer: "/* comment */",
//     tags: ["#css"],
//   },
//   {
//     number: 12,
//     question: "How do you declare a JavaScript variable?",
//     answer: "var variableName;",
//     tags: ["#javascript"],
//   },
//   {
//     number: 13,
//     question: "Which HTML attribute is used to define inline styles?",
//     answer: "style",
//     tags: ["#html"],
//   },
//   {
//     number: 14,
//     question: "What does 'DOM' stand for in JavaScript?",
//     answer: "Document Object Model",
//     tags: ["#javascript"],
//   },
//   {
//     number: 15,
//     question:
//       "How can you make a list that lists its items with numbers in HTML?",
//     answer: "<ol>",
//     tags: ["#html"],
//   },
//   {
//     number: 16,
//     question: "How do you select an element with id 'unique' in CSS?",
//     answer: "#unique",
//     tags: ["#css"],
//   },
//   {
//     number: 17,
//     question: "How do you call a function named 'myFunction' in JavaScript?",
//     answer: "myFunction()",
//     tags: ["#javascript"],
//   },
//   {
//     number: 18,
//     question: "What is the default display value for most elements in HTML?",
//     answer: "block",
//     tags: ["#css"],
//   },
//   {
//     number: 19,
//     question: "How do you write 'Hello World' in an alert box in JavaScript?",
//     answer: "alert('Hello World');",
//     tags: ["#javascript"],
//   },
//   {
//     number: 20,
//     question: "Which tag is used to define an image in HTML?",
//     answer: "<img>",
//     tags: ["#html"],
//   },
//   {
//     number: 21,
//     question: "What does CSS stand for?",
//     answer: "Cascading Style Sheets",
//     tags: ["#css"],
//   },
//   {
//     number: 22,
//     question: "What is used to define a JavaScript object literal?",
//     answer: "{}",
//     tags: ["#javascript"],
//   },
//   {
//     number: 23,
//     question:
//       "How do you define a variable that cannot be reassigned in JavaScript?",
//     answer: "const",
//     tags: ["#javascript"],
//   },
//   {
//     number: 24,
//     question:
//       "What property is used to set the spacing between characters in CSS?",
//     answer: "letter-spacing",
//     tags: ["#css"],
//   },
//   {
//     number: 25,
//     question:
//       "Which method in JavaScript is used to parse a string to an integer?",
//     answer: "parseInt()",
//     tags: ["#javascript"],
//   },
//   {
//     number: 26,
//     question: "How do you group selectors in CSS?",
//     answer: "Separate each selector with a comma",
//     tags: ["#css"],
//   },
//   {
//     number: 27,
//     question:
//       "What HTML attribute is used to define a form that is not to be validated when submitted?",
//     answer: "novalidate",
//     tags: ["#html"],
//   },
//   {
//     number: 28,
//     question:
//       "What is the method to round a number to the nearest integer in JavaScript?",
//     answer: "Math.round()",
//     tags: ["#javascript"],
//   },
//   {
//     number: 29,
//     question:
//       "How do you set a default value in a CSS property that is not supported by the browser?",
//     answer: "Use the initial value",
//     tags: ["#css"],
//   },
//   {
//     number: 30,
//     question: "What does the 'this' keyword refer to in JavaScript?",
//     answer: "The current execution context",
//     tags: ["#javascript"],
//   },
//   {
//     number: 31,
//     question: "What is the purpose of the 'data-' attribute in HTML?",
//     answer: "To store custom data private to the page or application",
//     tags: ["#html"],
//   },
//   {
//     number: 32,
//     question: "How can you apply a CSS style only for Internet Explorer 10?",
//     answer:
//       "Use conditional comments or the '@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)' hack",
//     tags: ["#css"],
//   },
//   {
//     number: 33,
//     question: "What is event delegation in JavaScript?",
//     answer:
//       "A technique of delegating an event from parent to child elements to handle events efficiently",
//     tags: ["#javascript"],
//   },
//   {
//     number: 34,
//     question: "What is a 'pseudo-element' in CSS and provide an example?",
//     answer:
//       "A pseudo-element is used to style specified parts of an element, such as '::before' or '::after'",
//     tags: ["#css"],
//   },
//   {
//     number: 35,
//     question: "How do you make a HTML element draggable in HTML5?",
//     answer: "Set the 'draggable' attribute to 'true'",
//     tags: ["#html"],
//   },
//   {
//     number: 36,
//     question:
//       "What is the difference between 'localStorage' and 'sessionStorage' in JavaScript?",
//     answer:
//       "'localStorage' is persistent and remains until explicitly deleted, while 'sessionStorage' lasts only for the session duration",
//     tags: ["#javascript"],
//   },
//   {
//     number: 37,
//     question: "Explain CSS specificity and how it is calculated.",
//     answer:
//       "CSS specificity is a score that determines which style declarations are applied to an element. It is calculated based on the number of IDs, classes, and types",
//     tags: ["#css"],
//   },
//   {
//     number: 38,
//     question: "What is a JavaScript 'Promise'?",
//     answer:
//       "A Promise is an object representing the eventual completion or failure of an asynchronous operation",
//     tags: ["#javascript"],
//   },
//   {
//     number: 39,
//     question:
//       "In HTML5, how do you check if the browser fully supports all features of Web Workers?",
//     answer: "Check if 'window.Worker' is undefined",
//     tags: ["#html"],
//   },
//   {
//     number: 40,
//     question: "What is the purpose of the 'z-index' property in CSS?",
//     answer: "To control the vertical stacking order of elements that overlap",
//     tags: ["#css"],
//   },
//   {
//     number: 41,
//     question: "How do you implement inheritance in JavaScript?",
//     answer:
//       "Through the prototype chain or the 'class' syntax introduced in ES6",
//     tags: ["#javascript"],
//   },
//   {
//     number: 42,
//     question: "What is the difference between '=='' and '===' in JavaScript?",
//     answer:
//       "'==' checks for equality with type coercion, while '===' checks for equality without type coercion",
//     tags: ["#javascript"],
//   },
//   {
//     number: 43,
//     question: "In CSS, what does 'flex-grow' do?",
//     answer:
//       "Specifies how much a flex item will grow relative to the rest of the flex items",
//     tags: ["#css"],
//   },
//   {
//     number: 44,
//     question: "How can you detect the client's browser name in JavaScript?",
//     answer: "By using the 'navigator.userAgent' property",
//     tags: ["#javascript"],
//   },
//   {
//     number: 45,
//     question: "What are CSS preprocessors, and can you name one?",
//     answer:
//       "CSS preprocessors extend the capabilities of CSS with variables, mixins, and more. Examples include Sass, LESS, and Stylus",
//     tags: ["#css"],
//   },
//   {
//     number: 46,
//     question: "What is a Service Worker in the context of HTML5?",
//     answer:
//       "A script that your browser runs in the background, separate from a web page, enabling features that don't need a web page or user interaction",
//     tags: ["#html"],
//   },
//   {
//     number: 47,
//     question: "What is 'use strict' in JavaScript, and what does it do?",
//     answer:
//       "'use strict' is a directive that enforces a stricter parsing and error handling in your JavaScript code",
//     tags: ["#javascript"],
//   },
//   {
//     number: 48,
//     question:
//       "Explain the CSS 'box model' and the components that it consists of.",
//     answer:
//       "The CSS box model describes the design and layout of elements. It consists of margins, borders, padding, and the content itself",
//     tags: ["#css"],
//   },
//   {
//     number: 49,
//     question:
//       "What is the difference between 'null' and 'undefined' in JavaScript?",
//     answer:
//       "'null' is an assignment value representing no value, while 'undefined' represents a variable that has been declared but not yet assigned a value",
//     tags: ["#javascript"],
//   },
//   {
//     number: 50,
//     question: "What is a 'shadow DOM' in HTML5?",
//     answer:
//       "A method of encapsulating parts of a DOM and hiding them from the main document, creating a separate scope",
//     tags: ["#html"],
//   },
// ];

// // Store the number of cards in the locale Storage to access it at the profile page
// const numberOfCards = quizCards.length;
// localStorage.setItem("numberOfCards", numberOfCards);

// function createCard(quizCard, i) {
//   const main = document.querySelector("main");

//   const section = document.createElement("section");
//   section.className = "card quiz-card";

//   const cardHeader = document.createElement("div");
//   cardHeader.className = "card-header";
//   section.appendChild(cardHeader);

//   const h2 = document.createElement("h2");
//   h2.className = "card-questionNumber";
//   h2.textContent = quizCard.number;
//   cardHeader.appendChild(h2);

//   const bookmark = document.createElement("div");
//   bookmark.className = "card-bookmark";
//   bookmark.addEventListener("click", () => {
//     const bookmarked = section.classList.toggle("card--isBookmarked");
//     if (bookmarked) {
//       localStorage.setItem("cardBookmarked_" + quizCard.number, true);
//     } else {
//       localStorage.removeItem("cardBookmarked_" + quizCard.number);
//     }
//   });

//   cardHeader.append(bookmark);

//   const img1 = document.createElement("img");
//   img1.src = "pictures/bookmarke-active2.png";
//   img1.alt = "bookmark-active";
//   img1.classList.add("card-bookmarkImg", "card-bookmarkImgActive");

//   const img2 = document.createElement("img");
//   img2.src = "pictures/bookmark-inactive.png";
//   img2.alt = "bookmark-inactive";
//   img2.classList.add("card-bookmarkImg", "card-bookmarkImgInactive");

//   if (localStorage.getItem("cardBookmarked_" + quizCard.number)) {
//     section.classList.add("card--isBookmarked");
//   }

//   bookmark.appendChild(img1);
//   bookmark.appendChild(img2);

//   const questionBox = document.createElement("div");
//   questionBox.className = "card-questionBox card-textBox";
//   section.appendChild(questionBox);

//   const questionText = document.createElement("p");
//   questionText.className = "card-questionText";
//   questionText.textContent = quizCard.question;
//   questionBox.appendChild(questionText);

//   const createcardButton = document.createElement("button");
//   createcardButton.className = "card-button";
//   questionBox.appendChild(createcardButton);

//   const textShow = document.createElement("p");
//   textShow.className = "card-button-textShow";
//   textShow.textContent = "Show Answer";
//   createcardButton.appendChild(textShow);

//   const textHide = document.createElement("p");
//   textHide.className = "card-button-textHide hidden";
//   textHide.textContent = "Hide Answer";
//   createcardButton.appendChild(textHide);

//   const answerBox = document.createElement("div");
//   answerBox.className = "card-answerBox card-textBox";
//   section.appendChild(answerBox);

//   const answerText = document.createElement("p");
//   answerText.className = "card-answerText invisible";
//   answerText.textContent = quizCard.answer;
//   answerBox.appendChild(answerText);

//   const demandkWrap = document.createElement("div");
//   demandkWrap.classList.add("wrapDemand");
//   answerBox.append(demandkWrap);

//   const demandText = document.createElement("p");
//   demandText.classList.add("demand");
//   demandText.textContent = "Did you knew this?";
//   demandkWrap.append(demandText);

//   const buttonYes = document.createElement("button");
//   buttonYes.textContent = "Yes";
//   buttonYes.classList.add("demandYes");
//   demandkWrap.append(buttonYes);

//   const buttonNo = document.createElement("button");
//   buttonNo.textContent = "No";
//   buttonNo.classList.add("demandNo");

//   demandkWrap.append(buttonNo);

//   const tagBox = document.createElement("div");
//   tagBox.className = "card-tagBox";
//   section.appendChild(tagBox);

//   // Function to create tag elements for each tag in the quiz card
//   function createTag(tagName) {
//     const tag = document.createElement("article");
//     tag.className = "card-tag";
//     tag.textContent = tagName;
//     tagBox.appendChild(tag);
//   }

//   // Loop through each tag in the quiz card and create a tag element
//   quizCard.tags.forEach(createTag);

//   main.appendChild(section);
// }

// // Function to dynamically load quiz cards based on the current page
// const dynamicQuizCards = () => {
//   if (window.location.href.match("index.html")) {
//     // If on index page, load all quiz cards
//     quizCards.forEach(createCard);
//   } else {
//     // If not on index page, load only bookmarked quiz cards
//     const bookmarkedQuizCards = quizCards.filter((quizCard) => {
//       return localStorage.getItem("cardBookmarked_" + quizCard.number);
//     });
//     bookmarkedQuizCards.forEach(createCard);
//   }
// };

// dynamicQuizCards();
