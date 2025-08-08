
const quizData = [
  {
    question: "Quelle est la capitale de la France ?",
    options: ["Lyon", "Paris", "Marseille"],
    answer: 1
  },
  {
    question: "Quelle est la couleur du ciel par temps clair ?",
    options: ["Bleu", "Vert", "Rouge"],
    answer: 0
  },
  {
    question: "Combien y a-t-il de continents sur Terre ?",
    options: ["5", "6", "7"],
    answer: 2
  }
];

let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const answersDiv = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const resultDiv = document.getElementById("result");

function loadQuestion() {
  // Reset
  nextBtn.disabled = true;
  answersDiv.innerHTML = "";
  resultDiv.textContent = "";

  // Charger la question
  const q = quizData[currentQuestion];
  questionText.textContent = q.question;

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.addEventListener("click", () => selectAnswer(index, btn));
    answersDiv.appendChild(btn);
  });
}

function selectAnswer(index, btn) {
  // Désélectionner les autres
  Array.from(answersDiv.children).forEach(b => b.classList.remove("selected"));

  btn.classList.add("selected");
  nextBtn.disabled = false;
  nextBtn.dataset.selected = index;
}

nextBtn.addEventListener("click", () => {
  const selected = parseInt(nextBtn.dataset.selected);
  if (selected === quizData[currentQuestion].answer) {
    score++;
  }
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  questionText.textContent = "";
  answersDiv.innerHTML = "";
  nextBtn.style.display = "none";

  let message = "";

  if(score === quizData.length) {
    message = "Tu es un boss ! 🎉";
  } else if(score === 0) {
    message = "Essaie encore ! 💪";
  } else {
    message = `Bravo, tu as ${score} sur ${quizData.length} !`;
  }

  resultDiv.textContent = message;
}

// Initialisation
loadQuestion();
