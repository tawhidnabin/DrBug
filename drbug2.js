// script.js

const levels = [
    {
        question: "What is the output of the following code?\n\nconsole.log(5 + 3);",
        options: ["5", "8", "15"],
        correctAnswer: "8",
        reward: "Great job! You've passed the first level! 🎉",
        isCodeLevel: false
    },
    {
        question: "Write a function to calculate the square of a number:function square(num) {YOUR CODE HERE}",
        options: null,  // Code challenge
        correctAnswer: `return num * num;`,
        reward: "Amazing! You've completed the code! 🧑‍💻",
        isCodeLevel: true
    },
    {
        question: "Fix the bug in the following function:\n\nfunction reverseString(str) {\n  return str.split('').reverse()join(''); }",
        options: null,  // Code challenge
        correctAnswer: `return str.split('').reverse().join('');`,  // This is correct code
        reward: "Great work! You've fixed the bug! 🐞🔧",
        isCodeLevel: true
    }
];

let currentLevel = 0;

// Display the current level's question and options
function displayQuestion(level) {
    const levelData = levels[level];
    document.getElementById("question-text").textContent = levelData.question;

    if (levelData.isCodeLevel) {
        // Show the code input area and hide the answer options
        document.getElementById("code-input-container").style.display = "block";
        document.getElementById("answer-options").style.display = "none";
    } else {
        // Show the multiple choice answers
        document.getElementById("answer-options").innerHTML = '';
        levelData.options.forEach(option => {
            const button = document.createElement("button");
            button.classList.add("answer-btn");
            button.textContent = option;
            button.onclick = () => checkAnswer(level, option);
            document.getElementById("answer-options").appendChild(button);
        });
        document.getElementById("code-input-container").style.display = "none";
        document.getElementById("answer-options").style.display = "block";
    }
}

// Check if the user's answer is correct
function checkAnswer(level, answer) {
    const levelData = levels[level];
    if (levelData.isCodeLevel) {
        const userCode = document.getElementById("code-input").value.trim();
        if (userCode === levelData.correctAnswer) {
            showReward(levelData.reward);
        } else {
            alert("Oops! The code doesn't seem right. Try again.");
        }
    } else {
        if (answer === levelData.correctAnswer) {
            showReward(levelData.reward);
        } else {
            alert("Oops! Try again.");
        }
    }
}

// Show the reward and the next level button
function showReward(rewardMessage) {
    document.getElementById("reward-text").textContent = rewardMessage;
    document.getElementById("question-container").style.display = "none";
    document.getElementById("reward-container").style.display = "block";

    if (currentLevel === levels.length - 1) {
        document.getElementById("winner-club-btn").style.display = "inline-block";
    }
}

// Move to the next level
document.getElementById("next-level-btn").onclick = () => {
    if (currentLevel < levels.length - 1) {
        currentLevel++;
        document.getElementById("reward-container").style.display = "none";
        document.getElementById("question-container").style.display = "block";
        displayQuestion(currentLevel);
    } else {
        alert("Congratulations! You've completed all levels!");
    }
};

// Start the game
document.getElementById("start-btn").onclick = () => {
    document.getElementById("welcome-screen").style.display = "none";
    document.getElementById("game-container").style.display = "block";
    displayQuestion(currentLevel); // Display the first question
};

// Join Winner's Club
document.getElementById("winner-club-btn").onclick = () => {
    alert("Congratulations! You've joined the Winner's Club! 🏆🎉");
};

// Event listener for submitting code
document.getElementById("submit-code-btn").onclick = function() {
    const userCode = document.getElementById("code-input").value.trim();
    const levelData = levels[currentLevel];

    // Check if the code is correct
    if (userCode === levelData.correctAnswer) {
        showReward(levelData.reward);
    } else {
        alert("Oops! The code doesn't seem right. Try again.");
    }
};

// Initialize game with welcome screen
window.onload = () => {
    document.getElementById("welcome-screen").style.display = "block"; // Show the welcome screen
};
