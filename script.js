var questions = document.querySelectorAll(".faq-question-container");
var answers = document.querySelectorAll(".faq-answer");
var arrows = document.querySelectorAll(".arrow-down");
var headers = document.querySelectorAll(".faq-question");

function hideAnswers() {
  answers.forEach(function (answer) {
    answer.style.display = "none";
  });

  questions.forEach(function (question) {
    question.style.borderBottom = "0.0625rem solid hsl(240, 5%, 91%)";
  });

  arrows.forEach(function (arrow) {
    arrow.style.transform = "rotate(0deg)";
  });

  headers.forEach(function (header) {
    header.style.fontWeight = "400";
  });
}

questions.forEach(function (question, index) {
  question.addEventListener("click", function () {
    hideAnswers();

    question.style.borderBottom = "none";
    answers[index].style.display = "block";
    answers[index].style.borderBottom = "0.0625rem solid hsl(240, 5%, 91%)";
    arrows[index].style.transform = "rotate(180deg)";
    headers[index].style.fontWeight = "700";
  });
});
