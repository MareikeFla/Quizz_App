const quizCardsContent = [
  {
    number: "#1",
    question: "question 1",
    answer: "answer 1",
    tag: "#css",
    bookmarked: false,
  },
  {
    number: "#2",
    question: "question 2",
    answer: "answer 2",
    tag: "#css",
    bookmarked: false,
  },
  {
    number: "#3",
    question: "question 3",
    answer: "answer 3",
    tag: "#css",
    bookmarked: false,
  },
];

const quizCardTry = {
  number: "#1",
  question: "question 1",
  answer: "answer 1",
  tag: "#css",
  bookmarked: false,
};

const main = document.querySelector("main");
const section = document.createElement("section");
section.className = "card";

const cardHeader = document.createElement("div");
cardHeader.className = "card-header";

const h2 = document.createElement("h2");
h2.className = "card-questionNumber";
h2.textContent = quizCardsContent.number;

const img1 = document.createElement("img");
img1.src = "pictures/bookmarke-active2.png";
img1.alt = "bookmark-active";
img1.className = "card-bookmark card-bookmarked";

const img2 = document.createElement("img");
img2.src = "pictures/bookmark-inactive.png";
img2.alt = "bookmark-inactive";
img2.className = "card-bookmark card-notBookmarked card-bookmark-hide";

const questionBox = document.createElement("div");
questionBox.className = "card-questionBox card-textBox";

const questionText = document.createElement("p");
questionText.className = "card-questionText";
questionText.textContent = quizCardsContent.question;

const createcardButton = document.createElement("button");
createcardButton.className = "card-button";

const textShow = document.createElement("p");
textShow.className = "card-button-textShow";
textShow.textContent = "Show Answer";

const textHide = document.createElement("p");
textHide.className = "card-button-textHide card-button-textHidden";
textHide.textContent = "Hide Answer";

const answerBox = document.createElement("div");
answerBox.className = "card-answerBox card-textBox";

const answerText = document.createElement("p");
answerText.className = "card-answerText card-answerText-hidden";
answerText.textContent = quizCardsContent.answer;

const tagBox = document.createElement("div");
tagBox.className = "card-tagBox";

const tags = document.createElement("article");
tags.className = "card-tag";
tags.textContent = quizCardsContent.tag;

function setCards() {
  cardHeader.appendChild(h2);
  cardHeader.appendChild(img1);
  cardHeader.appendChild(img2);
  section.appendChild(cardHeader);
  questionBox.appendChild(questionText);
  createcardButton.appendChild(textShow);
  createcardButton.appendChild(textHide);
  questionBox.appendChild(createcardButton);
  section.appendChild(questionBox);
  answerBox.appendChild(answerText);
  section.appendChild(answerBox);
  tagBox.appendChild(tags);

  section.appendChild(tagBox);

  main.appendChild(section);
}

quizCardsContent.forEach(setCards);