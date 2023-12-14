export const sectionCards = document.querySelector('[data-js="cards"]');
import { renderBookmarks } from "../Bookmarks/Bookmarks.js";
// Function - create quiz cards

export function createCard(quizCard) {
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
      if (document.body.getAttribute("data-currentpage") === "bookmarks") {
        renderBookmarks();
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
  questionBox.className = "cardQuestionBox cardBox";
  section.appendChild(questionBox);

  const questionText = document.createElement("p");
  questionText.className = "cardQuestion";
  questionText.textContent = quizCard.question;
  questionBox.appendChild(questionText);

  const cardButtonAnswer = document.createElement("button");
  cardButtonAnswer.className = "cardButton";

  questionBox.appendChild(cardButtonAnswer);

  const textShow = document.createElement("p");
  textShow.className = "cardButton-textShow";
  textShow.textContent = "Show Answer";
  cardButtonAnswer.appendChild(textShow);

  const textHide = document.createElement("p");
  textHide.className = "cardButton-textHide hidden";
  textHide.textContent = "Hide Answer";
  cardButtonAnswer.appendChild(textHide);

  const answerBox = document.createElement("div");
  answerBox.className = "cardAnswerBox cardBox";
  section.appendChild(answerBox);

  const answerText = document.createElement("p");
  answerText.className = "cardAnswer invisible ";
  answerText.textContent = quizCard.answer;
  answerBox.appendChild(answerText);

  const tagBox = document.createElement("div");
  tagBox.className = "cardWrapTags";
  section.appendChild(tagBox);

  // Function to create tag elements for each tag in the quiz card
  function createTag(tagName) {
    const tag = document.createElement("article");
    tag.className = "cardTag";
    tag.textContent = tagName;
    tagBox.appendChild(tag);
  }

  cardButtonAnswer.addEventListener("click", () => {
    answerText.classList.toggle("invisible");
    answerBox.classList.toggle("cardAnswerBox-acive");
    textShow.classList.toggle("hidden");
    textHide.classList.toggle("hidden");
  });

  // Loop through each tag in the quiz card and create a tag element
  quizCard.tags.forEach(createTag);

  sectionCards.appendChild(section);
}

// Function - Only create bookmarked cards and show info if no cards are bookmarked

// Function - remove cards from card section

export function clearCardSection() {
  const sectionCards = document.querySelector('[data-js="cards"]');
  sectionCards.innerHTML = "";
}
