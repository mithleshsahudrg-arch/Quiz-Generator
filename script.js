const questions = [
    {
        question: "Which language is used for web development?",
        options: ["Python", "HTML", "C++", "Java"],
        answer: 1
    },
    {
        question: "Which one is a JavaScript framework?",
        options: ["React", "Django", "Laravel", "Flask"],
        answer: 0
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Creative Style System",
            "Cascading Style Sheets",
            "Colorful Style Sheets",
            "Computer Style Sheets"
        ],
        answer: 1
    },
    {
        question: "Which tag is used for JavaScript?",
        options: ["<js>", "<javascript>", "<script>", "<code>"],
        answer: 2
    },
    {
        question: "Which is NOT a programming language?",
        options: ["Python", "HTML", "Java", "C"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;
let selectedOption = null;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const scoreText = document.getElementById("scoreText");

function startQuiz() {
    document.getElementById("startScreen").classList.add("hide");
    document.getElementById("quizScreen").classList.remove("hide");
    loadQuestion();
}

function loadQuestion() {
    selectedOption = null;
    optionsEl.innerHTML = "";

    const q = questions[currentQuestion];
    questionEl.textContent = q.question;

    q.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.textContent = option;

        btn.onclick = () => selectOption(btn, index);
        optionsEl.appendChild(btn);
    });
}

function selectOption(button, index) {
    const buttons = optionsEl.querySelectorAll("button");
    buttons.forEach(btn => btn.classList.remove("selected"));

    button.classList.add("selected");
    selectedOption = index;
}

function nextQuestion() {
    if (selectedOption === null) {
        alert("Please select an option!");
        return;
    }

    if (selectedOption === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quizScreen").classList.add("hide");
    document.getElementById("resultScreen").classList.remove("hide");
    scoreText.textContent = `${score} / ${questions.length}`;
}