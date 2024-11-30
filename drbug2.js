// Quiz Questions
const questions = [
    {
        question: "What does 6G stand for?",
        options: [
            "Sixth Generation Wireless",
            "Six Geometric Layers",
            "Six Gigabyte Bandwidth",
            "Six General Networks"
        ],
        correct: 0
    },
    {
        question: "What is a key feature of 6G networks?",
        options: [
            "1 Gbps speed",
            "Holographic communication",
            "4G LTE compatibility",
            "Fiber optic dependence"
        ],
        correct: 1
    },
    {
        question: "Which frequency range is expected for 6G?",
        options: [
            "1-2 GHz",
            "10-100 GHz",
            "100-300 GHz",
            "Above 1 THz"
        ],
        correct: 3
    },
    {
        question: "When is 6G expected to roll out globally?",
        options: [
            "2025",
            "2030",
            "2040",
            "Already available"
        ],
        correct: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Load the first question
function loadQuestion() {
    const questionElement = document.getElementById("question");
    const options = document.querySelectorAll(".option");

    // Load the current question
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    // Load options
    options.forEach((option, index) => {
        option.innerText = currentQuestion.options[index];
        option.style.backgroundColor = "#007bff"; // Reset button color
        option.style.color = "white";
    });
}

// Handle option selection
function selectOption(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];

    const options = document.querySelectorAll(".option");
    options.forEach((option, index) => {
        if (index === currentQuestion.correct) {
            option.style.backgroundColor = "#28a745"; // Green for correct
        } else {
            option.style.backgroundColor = "#dc3545"; // Red for incorrect
        }
    });

    if (selectedIndex === currentQuestion.correct) {
        score++;
    }

    // Disable buttons to prevent multiple clicks
    options.forEach(option => option.setAttribute("disabled", true));

    // Move to the next question after a delay
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }, 1000);
}

// Show results
function showResults() {
    const quizContainer = document.getElementById("quiz-container");
    const resultContainer = document.getElementById("result-container");
    const resultText = document.getElementById("result");

    quizContainer.style.display = "none";
    resultContainer.style.display = "block";

    resultText.innerText = `You scored ${score} out of ${questions.length}!`;
}

// Restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;

    const quizContainer = document.getElementById("quiz-container");
    const resultContainer = document.getElementById("result-container");

    quizContainer.style.display = "block";
    resultContainer.style.display = "none";

    loadQuestion();
}

// Initialize the quiz
loadQuestion();
