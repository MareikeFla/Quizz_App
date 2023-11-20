const quizCardsContent = [
  {
    number: "#1",
    question: "question 1",
    answer: "answer 1",
    bookmarked: false,
  },
  {
    number: "#2",
    question: "question 2",
    answer: "answer 2",
    bookmarked: false,
  },
  {
    number: "#3",
    question: "question 3",
    answer: "answer 3",
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

function setCards() {
  const main = document.querySelector("main");
  const section = document.createElement("section");
  section.className = "card";

  const cardHeader = document.createElement("div");
  cardHeader.className = "card-header";

  const h2 = document.createElement("h2");
  h2.className = "card-questionNumber";
  h2.textContent = quizCardTry.number;
  cardHeader.appendChild(h2);

  const img1 = document.createElement("img");
  img1.src = "pictures/bookmarke-active2.png";
  img1.alt = "bookmark-active";
  img1.className = "card-bookmark card-bookmarked";
  cardHeader.appendChild(img1);

  const img2 = document.createElement("img");
  img2.src = "pictures/bookmark-inactive.png";
  img2.alt = "bookmark-inactive";
  img2.className = "card-bookmark card-notBookmarked card-bookmark-hide";
  cardHeader.appendChild(img2);

  section.appendChild(cardHeader);

  const questionBox = document.createElement("div");
  questionBox.className = "card-questionBox card-textBox";

  const questionText = document.createElement("p");
  questionText.className = "card-questionText";
  questionText.textContent = quizCardTry.question;
  questionBox.appendChild(questionText);

  const cardButton = document.createElement("button");
  cardButton.className = "card-button";

  const textShow = document.createElement("p");
  textShow.className = "card-button-textShow";
  textShow.textContent = "Show Answer";
  cardButton.appendChild(textShow);

  const textHide = document.createElement("p");
  textHide.className = "card-button-textHide card-button-textHidden";
  textHide.textContent = "Hide Answer";
  cardButton.appendChild(textHide);

  questionBox.appendChild(cardButton);

  section.appendChild(questionBox);

  const answerBox = document.createElement("div");
  answerBox.className = "card-answerBox card-textBox";

  const answerText = document.createElement("p");
  answerText.className = "card-answerText card-answerText-hidden";
  answerText.textContent = quizCardTry.answer;
  answerBox.appendChild(answerText);

  section.appendChild(answerBox);

  const tagBox = document.createElement("div");
  tagBox.className = "card-tagBox";

  const tags = document.createElement("article");
  tags.className = "card-tag";
  tags.textContent = quizCardTry.tag;

  tagBox.appendChild(tags);

  section.appendChild(tagBox);

  main.appendChild(section);
}

setCards(quizCardTry);
