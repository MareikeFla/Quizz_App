// Define an array of quiz cards with their details

const quizCards = [
  {
    number: "#1",
    question: "question 1",
    answer: "answer 1",
    tags: ["#css", "#html", "#JavaScript"],
  },
  {
    number: "#2",
    question: "question 2",
    answer: "answer 2",
    tags: ["#css", "#JavaScript"],
  },
  {
    number: "#3",
    question: "question 3",
    answer: "answer 3",
    tags: ["#css", "#html, #JavaScript"],
  },
  {
    number: "#4",
    question: "question 4",
    answer: "answer 4",
    tags: ["#css", "#html"],
  },
  {
    number: "#5",
    question: "question 5",
    answer: "answer 5",
    tags: ["#css", "#html"],
  },
  {
    number: "#6",
    question: "question 6",
    answer: "answer 6",
    tags: ["#css", "#html"],
  },
  {
    number: "#7",
    question: "question 7",
    answer: "answer 7",
    tags: ["#css", "#html"],
  },
  {
    number: "#8",
    question: "question 8",
    answer: "answer 8",
    tags: ["#css", "#html"],
  },
];

// Store the number of cards in the locale Storage to access it at the profile page

const numberOfCards = quizCards.length;
localStorage.setItem("numberOfCards", numberOfCards);

// Function to create a card element in the DOM for each quiz card

function createCard(quizCard, i) {
  const main = document.querySelector("main");
  const section = document.createElement("section");
  section.className = "card";

  const cardHeader = document.createElement("div");
  cardHeader.className = "card-header";

  const h2 = document.createElement("h2");
  h2.className = "card-questionNumber";
  h2.textContent = quizCard.number;

  const img1 = document.createElement("img");
  img1.src = "pictures/bookmarke-active2.png";
  img1.alt = "bookmark-active";

  const img2 = document.createElement("img");
  img2.src = "pictures/bookmark-inactive.png";
  img2.alt = "bookmark-inactive";

  // Check if the card is bookmarked (Further info at the bottom)
  if (localStorage.getItem("cardBookmarked_" + i)) {
    img1.className = "card-bookmark card-bookmarked";
    img2.className = "card-bookmark card-notBookmarked card-bookmark-hide";
  } else {
    img1.className = "card-bookmark card-bookmarked card-bookmark-hide";
    img2.className = "card-bookmark card-notBookmarked";
  }

  const questionBox = document.createElement("div");
  questionBox.className = "card-questionBox card-textBox";

  const questionText = document.createElement("p");
  questionText.className = "card-questionText";
  questionText.textContent = quizCard.question;

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
  answerText.textContent = quizCard.answer;

  const tagBox = document.createElement("div");
  tagBox.className = "card-tagBox";

  // Function to create tag elements for each tag in the quiz card

  function createTag(tagName) {
    const tag = document.createElement("article");
    tag.className = "card-tag";
    tag.textContent = tagName;
    tagBox.appendChild(tag);
  }

  // Loop through each tag in the quiz card and create a tag element

  quizCard.tags.forEach(createTag);

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
  section.appendChild(tagBox);
  main.appendChild(section);
}

// Function to dynamically load quiz cards based on the current page

const dynamicQuizCards = () => {
  // Check if the current page is the index page
  if (window.location.href.match("index.html")) {
    // If on index page, load all quiz cards
    quizCards.forEach(createCard);
  } else {
    // If not on index page, load only bookmarked quiz cards
    for (let i = 0; i < quizCards.length; i++) {
      if (localStorage.getItem("cardBookmarked_" + i)) {
        createCard(quizCards[i], i);
      }
    }
  }
};

dynamicQuizCards();

// Toggle bookmark on click

const cardBookmarked = document.querySelectorAll(".card-bookmarked");
const cardNotBookmarked = document.querySelectorAll(".card-notBookmarked");

for (let i = 0; i < cardBookmarked.length; i++) {
  function toggleBookmarkClass() {
    cardBookmarked[i].classList.toggle("card-bookmark-hide");
    cardNotBookmarked[i].classList.toggle("card-bookmark-hide");
  }

  cardBookmarked[i].addEventListener("click", () => {
    toggleBookmarkClass();
    localStorage.removeItem("cardBookmarked_" + i);
  });

  cardNotBookmarked[i].addEventListener("click", () => {
    toggleBookmarkClass();
    localStorage.setItem("cardBookmarked_" + i, true);
  });
}
