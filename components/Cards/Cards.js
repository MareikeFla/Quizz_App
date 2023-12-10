import { quizCards } from "./Questions.js";

export function createCard(quizCard, i) {
  const sectionCards = document.querySelector('[data-js="cards"]');

  const section = document.createElement("section");
  section.className = "card quiz-card";

  const cardHeader = document.createElement("div");
  cardHeader.className = "card-header";
  section.appendChild(cardHeader);

  const h2 = document.createElement("h2");
  h2.className = "card-questionNumber";
  h2.textContent = quizCard.number;
  cardHeader.appendChild(h2);

  const bookmark = document.createElement("div");
  bookmark.className = "card-bookmark";
  bookmark.addEventListener("click", () => {
    const bookmarked = section.classList.toggle("card--isBookmarked");
    if (bookmarked) {
      localStorage.setItem("cardBookmarked_" + quizCard.number, true);
    } else {
      localStorage.removeItem("cardBookmarked_" + quizCard.number);
      if (document.body.getAttribute("data-currentpage") === "#bookmarks") {
        createBookmarkedCards();
      }
    }
  });

  cardHeader.append(bookmark);

  const img1 = document.createElement("img");
  img1.src = "pictures/bookmarke-active2.png";
  img1.alt = "bookmark-active";
  img1.classList.add("card-bookmarkImg", "card-bookmarkImgActive");

  const img2 = document.createElement("img");
  img2.src = "pictures/bookmark-inactive.png";
  img2.alt = "bookmark-inactive";
  img2.classList.add("card-bookmarkImg", "card-bookmarkImgInactive");

  if (localStorage.getItem("cardBookmarked_" + quizCard.number)) {
    section.classList.add("card--isBookmarked");
  }

  bookmark.appendChild(img1);
  bookmark.appendChild(img2);

  const questionBox = document.createElement("div");
  questionBox.className = "card-questionBox card-textBox";
  section.appendChild(questionBox);

  const questionText = document.createElement("p");
  questionText.className = "card-questionText";
  questionText.textContent = quizCard.question;
  questionBox.appendChild(questionText);

  const createcardButton = document.createElement("button");
  createcardButton.className = "card-button";

  questionBox.appendChild(createcardButton);

  const textShow = document.createElement("p");
  textShow.className = "card-button-textShow";
  textShow.textContent = "Show Answer";
  createcardButton.appendChild(textShow);

  const textHide = document.createElement("p");
  textHide.className = "card-button-textHide hidden";
  textHide.textContent = "Hide Answer";
  createcardButton.appendChild(textHide);

  const answerBox = document.createElement("div");
  answerBox.className = "card-answerBox card-textBox";
  section.appendChild(answerBox);

  const answerText = document.createElement("p");
  answerText.className = "card-answerText invisible";
  answerText.textContent = quizCard.answer;
  answerBox.appendChild(answerText);

  const tagBox = document.createElement("div");
  tagBox.className = "card-tagBox";
  section.appendChild(tagBox);

  // Function to create tag elements for each tag in the quiz card
  function createTag(tagName) {
    const tag = document.createElement("article");
    tag.className = "card-tag";
    tag.textContent = tagName;
    tagBox.appendChild(tag);
  }

  createcardButton.addEventListener("click", () => {
    answerText.classList.toggle("invisible");
    answerBox.classList.toggle("card-answerBox-acive");
    textShow.classList.toggle("hidden");
    textHide.classList.toggle("hidden");
  });

  // Loop through each tag in the quiz card and create a tag element
  quizCard.tags.forEach(createTag);

  sectionCards.appendChild(section);
}

export function createBookmarkedCards() {
  const sectionCards = document.querySelector('[data-js="cards"]');
  sectionCards.innerHTML = "";
  const bookmarkedQuizCards = quizCards.filter((quizCard) => {
    return localStorage.getItem("cardBookmarked_" + quizCard.number);
  });
  bookmarkedQuizCards.forEach(createCard);
}
