const quizQuestions = [
  {
    question: "Quelle est la capitale de la France ?",
    options: ["Paris", "Londres", "Berlin", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "Combien de continents y a-t-il sur Terre ?",
    options: ["4", "5", "6", "7"],
    correctAnswer: "7",
  },
  {
    question: "Qui a peint la Mona Lisa ?",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "Quelle est la plus grande planète du système solaire ?",
    options: ["Terre", "Mars", "Jupiter", "Saturne"],
    correctAnswer: "Jupiter",
  },
  {
    question: "Quelle est la langue officielle du Brésil ?",
    options: ["Espagnol", "Portugais", "Français", "Anglais"],
    correctAnswer: "Portugais",
  },
];

let currentQuestionIndex = 0;
let score = 0;
let countdownTimer;
let questionAnswered = false; // Indicateur pour savoir si la question a été répondue

function startQuiz() {
  document.getElementById("start-container").style.display = "none";
  document.getElementById("question-container").style.display = "block";
  document.getElementById("options-container").style.display = "block";
  document.getElementById("countdown").style.display = "block";
  loadQuestion();
}

function loadQuestion() {
  const questionContainer = document.getElementById("question-container");
  const optionsContainer = document.getElementById("options-container");
  const nextButton = document.getElementById("next-button");
  const restartButton = document.getElementById("restart-button");
  const countdown = document.getElementById("countdown");

  questionContainer.innerHTML = quizQuestions[currentQuestionIndex].question;
  optionsContainer.innerHTML = "";

  quizQuestions[currentQuestionIndex].options.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.onclick = () => selectAnswer(option);
    optionsContainer.appendChild(button);
  });

  nextButton.style.display = "none";
  restartButton.style.display = "none";
  questionAnswered = false; // Réinitialiser l'indicateur
  startCountdown();
}

function selectAnswer(selectedOption) {
  const correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer;
  const nextButton = document.getElementById("next-button");
  clearInterval(countdownTimer);

  if (!questionAnswered) {
    if (selectedOption === correctAnswer) {
      score++;
    } else {
      // Réponse incorrecte
    }
    questionAnswered = true; // Marquer la question comme répondue

    Array.from(document.getElementById("options-container").children).forEach(
      (button) => {
        button.disabled = true;
        if (button.innerText === correctAnswer) {
          button.style.backgroundColor = "#28a745";
        } else if (button.innerText === selectedOption) {
          button.style.backgroundColor = "#dc3545";
        }
      }
    );

    document.getElementById("next-button").style.display = "block";
  }
}

function nextQuestion() {
  // Si la question n'a pas été répondue, la marquer comme incorrecte
  if (!questionAnswered) {
    // Question non répondue, donc incorrecte
    // Pas besoin d'augmenter le score ici
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  const quizContainer = document.getElementById("quiz-container");
  const restartButton = document.getElementById("restart-button");
  const resultContainer = document.getElementById("result-container");

  document.getElementById("question-container").style.display = "none";
  document.getElementById("options-container").style.display = "none";
  document.getElementById("countdown").style.display = "none";
  document.getElementById("next-button").style.display = "none";

  resultContainer.innerHTML = `Votre score est de ${score} sur ${quizQuestions.length}`;
  restartButton.style.display = "block";
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("result-container").innerHTML = "";
  document.getElementById("start-container").style.display = "block";
}

function startCountdown() {
  let timeLeft = 10;
  const countdown = document.getElementById("countdown");
  countdown.innerHTML = `Temps restant: ${timeLeft} secondes`;

  countdownTimer = setInterval(() => {
    timeLeft--;
    countdown.innerHTML = `Temps restant: ${timeLeft} secondes`;

    if (timeLeft <= 0) {
      clearInterval(countdownTimer);
      if (!questionAnswered) {
        // Question non répondue à temps, marquer comme incorrecte
        // Pas besoin de mettre à jour le score ici
      }
      nextQuestion();
    }
  }, 1000);
}

// Initialiser la première question lorsque le quiz commence
