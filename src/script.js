const quizQuestions = [
  {
    question: "Qu'est-ce que la Business Intelligence (BI) ?",
    options: [
      "Un processus de collecte, d'analyse et de présentation des données",
      "Une technique de hacking",
      "Un logiciel de traitement de texte",
      "Une méthode de marketing digital",
    ],
    correctAnswer:
      "Un processus de collecte, d'analyse et de présentation des données",
  },
  {
    question:
      "Quel outil est principalement utilisé pour la création de rapports et de tableaux de bord dans Power BI ?",
    options: ["Power BI Desktop", "Excel", "Word", "Outlook"],
    correctAnswer: "Power BI Desktop",
  },
  {
    question: "Quelle est la fonction principale du service Power BI ?",
    options: [
      "Partager et collaborer sur des rapports et des tableaux de bord",
      "Écrire des documents",
      "Gérer des emails",
      "Créer des feuilles de calcul",
    ],
    correctAnswer:
      "Partager et collaborer sur des rapports et des tableaux de bord",
  },
  {
    question:
      "Quel langage de script est utilisé pour les transformations de données dans Power BI ?",
    options: ["M", "Python", "SQL", "R"],
    correctAnswer: "M",
  },
  {
    question:
      "Quelle est la principale utilisation de DAX (Data Analysis Expressions) dans Power BI ?",
    options: [
      "Créer des calculs et des mesures dans les modèles de données",
      "Rédiger des emails",
      "Dessiner des graphiques",
      "Éditer des vidéos",
    ],
    correctAnswer:
      "Créer des calculs et des mesures dans les modèles de données",
  },
  {
    question:
      "Quelle fonction de Power BI permet de programmer des mises à jour automatiques des données ?",
    options: ["Scheduled Refresh", "Auto Update", "Data Sync", "Live Connect"],
    correctAnswer: "Scheduled Refresh",
  },
  {
    question:
      "Quel est l'objectif principal de l'utilisation des tableaux de bord dans Power BI ?",
    options: [
      "Fournir une vue d'ensemble des métriques et des KPI",
      "Écrire des scripts",
      "Dessiner des images",
      "Éditer des textes",
    ],
    correctAnswer: "Fournir une vue d'ensemble des métriques et des KPI",
  },
  {
    question:
      "Quel type de visuel est utilisé dans Power BI pour montrer des relations entre les données sur deux axes continus ?",
    options: [
      "Graphique en nuage de points",
      "Graphique à barres",
      "Histogramme",
      "Diagramme circulaire",
    ],
    correctAnswer: "Graphique en nuage de points",
  },
  {
    question:
      "Comment appelle-t-on le processus de nettoyage et de structuration des données avant leur analyse dans Power BI ?",
    options: [
      "ETL (Extract, Transform, Load)",
      "Data Scrubbing",
      "Data Mining",
      "Data Visualization",
    ],
    correctAnswer: "ETL (Extract, Transform, Load)",
  },
  {
    question:
      "Quel service permet de poser des questions en langage naturel et d'obtenir des réponses sous forme de visuels dans Power BI ?",
    options: ["Q&A", "Ask Me", "Smart Query", "Data Insight"],
    correctAnswer: "Q&A",
  },
];

let currentQuestionIndex = 0;
let score = 0;
let countdownTimer;
let questionAnswered = false; // Indicateur pour savoir si la question a été répondue

function startQuiz() {
  document.getElementById("start-container").classList.add("hidden");
  document.getElementById("question-container").classList.remove("hidden");
  document.getElementById("options-container").classList.remove("hidden");
  document.getElementById("countdown").classList.remove("hidden");
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

  nextButton.classList.add("hidden");
  restartButton.classList.add("hidden");
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

    document.getElementById("next-button").classList.remove("hidden");
  }
}

function nextQuestion() {
  // Si la question n'a pas été répondue, la marquer comme incorrecte
  if (!questionAnswered) {
    // Question non répondue, donc incorrecte
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

  document.getElementById("question-container").classList.add("hidden");
  document.getElementById("options-container").classList.add("hidden");
  document.getElementById("countdown").classList.add("hidden");
  document.getElementById("next-button").classList.add("hidden");

  resultContainer.innerHTML = `Votre score est de ${score} sur ${quizQuestions.length}`;
  restartButton.classList.remove("hidden");
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("result-container").innerHTML = "";
  document.getElementById("start-container").classList.remove("hidden");
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
      }
      nextQuestion();
    }
  }, 1000);
}
