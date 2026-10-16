
let questions = [
    {
        question: "JavaScript ka full form kya hai?",
        options: ["Java Source", "JavaScript", "Just Script", "None"],
        correctAnswer: 1
    },
    {
        question: "Array ka first index kya hota hai?",
        options: ["1", "-1", "0", "2"],
        correctAnswer: 2
    },
    {
        question: "Kaunsa keyword variable declare karta hai?",
        options: ["let", "print", "display", "show"],
        correctAnswer: 0
    }
];

let userAnswers = [1, 2, 0]; // Practice answers
let currentQuestion = 0;
let score = 0;
let timeLeft = 5;
let timer;

// Show current question
function showQuestion() {
    if (currentQuestion >= questions.length) {
        console.log("Quiz Completed!");
        console.log("Your Score:", score, "/", questions.length);
        return;
    }

    let q = questions[currentQuestion];

    console.log("\nQuestion:", q.question);
    console.log("Options:", q.options);
    console.log("Time Left:", timeLeft, "seconds");

    startTimer();
}

// Start timer
function startTimer() {
    timeLeft = 5;

    timer = setInterval(function () {
        timeLeft--;

        if (timeLeft <= 0) {
            clearInterval(timer);
            checkAnswer();
        }
    }, 1000);
}

// Check answer
function checkAnswer() {
    let correct = questions[currentQuestion].correctAnswer;
    let selected = userAnswers[currentQuestion];

    if (selected === correct) {
        score++;
        console.log("Correct Answer!");
    } else {
        console.log("Wrong Answer or Time Up!");
    }

    currentQuestion++;
    showQuestion();
}

// Start quiz
showQuestion();
