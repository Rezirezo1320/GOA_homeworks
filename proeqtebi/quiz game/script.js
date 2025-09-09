// Sample quizzes
const quizzes = {
    html: [
        { question: "What does HTML stand for?", options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Home Tool Markup Language"], answer: "Hyper Text Markup Language" },
        { question: "Which tag is used for the largest heading?", options: ["<h6>", "<heading>", "<h1>"], answer: "<h1>" },
        { question: "Which element creates a hyperlink?", options: ["<link>", "<a>", "<href>"], answer: "<a>" },
    ],
    css: [
        { question: "Which property changes text color?", options: ["font-color", "color", "text-style"], answer: "color" },
        { question: "Which property controls text size?", options: ["font-size", "text-size", "size"], answer: "font-size" },
        { question: "Which symbol is used for IDs in CSS?", options: [". (dot)", "# (hash)", "@ (at)"], answer: "# (hash)" }
    ],
    js: [
        { question: "Which HTML tag contains JavaScript?", options: ["<js>", "<script>", "<code>"], answer: "<script>" },
        { question: "Which keyword declares a variable?", options: ["var", "dim", "let"], answer: "var" },
        { question: "What does console.log() do?", options: ["Writes in a file", "Prints to the console", "Shows an alert"], answer: "Prints to the console" }
    ]
};

let currentQuiz = [];
let currentQuestion = 0;
let score = 0;
let currentUser = null;

// Elements
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

// ================= AUTH =================
function register() {
    const username = document.getElementById("reg-username").value;
    const password = document.getElementById("reg-password").value;

    if (!username || !password) {
        alert("Please enter a username and password");
        return;
    }

    if (localStorage.getItem(username)) {
        alert("Username already exists!");
        return;
    }

    localStorage.setItem(username, JSON.stringify({ password: password, rating: [] }));
    alert("Account created! Please log in.");
    showLogin();
}

function showLogin() {
    document.getElementById("register").classList.add("hidden");
    document.getElementById("login").classList.remove("hidden");
}

function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    const loginMsg = document.getElementById("login-msg");

    let user = JSON.parse(localStorage.getItem(username));

    if (!user) {
        loginMsg.textContent = "Incorrect username!";
        return;
    }
    if (user.password !== password) {
        loginMsg.textContent = "Incorrect password!";
        return;
    }

    currentUser = username;
    document.getElementById("login").classList.add("hidden");
    document.getElementById("home").classList.remove("hidden");
    document.getElementById("user-name").textContent = username;
}

function logout() {
    currentUser = null;
    document.getElementById("home").classList.add("hidden");
    document.getElementById("register").classList.remove("hidden");
}

// ================= QUIZ =================
function startQuiz(topic) {
    document.getElementById("home").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");

    currentQuiz = quizzes[topic];
    currentQuestion = 0;
    score = 0;
    loadQuestion();
}

function loadQuestion() {
    let q = currentQuiz[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => checkAnswer(btn, q.answer);
        optionsEl.appendChild(btn);
    });
}

function checkAnswer(button, correctAnswer) {
    const allButtons = optionsEl.querySelectorAll("button");
    allButtons.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correctAnswer) {
            btn.classList.add("correct");
        }
    });

    if (button.textContent !== correctAnswer) {
        button.classList.add("wrong");
    } else {
        score++;
    }
}

nextBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < currentQuiz.length) {
        loadQuestion();
    } else {
        showResult();
    }
};

function showResult() {
    document.getElementById("quiz").classList.add("hidden");
    resultEl.classList.remove("hidden");
    scoreEl.textContent = `${score} / ${currentQuiz.length}`;
    loadRating();
}

document.getElementById("restart-btn").onclick = () => {
    currentQuestion = 0;
    score = 0;
    resultEl.classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    loadQuestion();
};

document.getElementById("home-btn").onclick = () => {
    resultEl.classList.add("hidden");
    document.getElementById("home").classList.remove("hidden");
};

// ================= RATING =================
function loadRating() {
    const ratingEl = document.getElementById("rating");
    ratingEl.innerHTML = "";
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement("span");
        star.textContent = "★";
        star.onclick = () => saveRating(i);
        ratingEl.appendChild(star);
    }
}

function saveRating(value) {
    let user = JSON.parse(localStorage.getItem(currentUser));
    user.rating.push(value);
    localStorage.setItem(currentUser, JSON.stringify(user));
    alert(`Thanks for rating ${value} stars!`);
}
