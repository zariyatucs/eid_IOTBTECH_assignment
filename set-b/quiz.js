const questions = [
  {
    q: "What does DOM stand for?",
    opts: [
      "Document Object Model",
      "Data Object Management",
      "Dynamic Object Module",
      "Document Order Method",
    ],
    ans: "Document Object Model",
  },
  {
    q: "Which keyword creates a block-scoped variable that cannot be reassigned?",
    opts: ["var", "let", "const", "static"],
    ans: "const",
  },
  {
    q: "What does the '===' operator check?",
    opts: ["Value only", "Type only", "Value and type", "Reference only"],
    ans: "Value and type",
  },
  {
    q: "Which method adds an element to the END of an array?",
    opts: ["unshift", "push", "pop", "shift"],
    ans: "push",
  },
  {
    q: "What is the output of typeof null?",
    opts: ["null", "undefined", "object", "string"],
    ans: "object",
  },
  {
    q: "Which is NOT a JavaScript data type?",
    opts: ["Symbol", "Integer", "BigInt", "Undefined"],
    ans: "Integer",
  },
  {
    q: "What does the optional chaining operator (?.) do?",
    opts: [
      "Checks if a value is null",
      "Safely accesses nested properties without throwing if undefined",
      "Assigns a default value",
      "Compares two values",
    ],
    ans: "Safely accesses nested properties without throwing if undefined",
  },
  {
    q: "What is event bubbling?",
    opts: [
      "An event travels from child up to parent elements",
      "An event travels from parent down to child elements",
      "An event fires multiple times",
      "An event is cancelled",
    ],
    ans: "An event travels from child up to parent elements",
  },
  {
    q: "Which array method returns a NEW array?",
    opts: ["push", "splice", "map", "sort"],
    ans: "map",
  },
  {
    q: "What does async/await do in JavaScript?",
    opts: [
      "Makes code run faster",
      "Creates threads",
      "Lets you write asynchronous code that reads synchronously",
      "Blocks the main thread",
    ],
    ans: "Lets you write asynchronous code that reads synchronously",
  },
];

let current = 0,
  score = 0,
  timerId,
  timeLeft;
const userAnswers = [];

const qEl = document.getElementById("question");
const optsEl = document.getElementById("options");
const barEl = document.getElementById("progress-bar");
const cntEl = document.getElementById("q-counter");
const liveSc = document.getElementById("score-live");
const timerEl = document.getElementById("timer");

function loadQuestion() {
  clearInterval(timerId);
  timeLeft = 15;
  timerEl.textContent = 15;
  timerEl.classList.remove("danger");

  const q = questions[current];
  qEl.textContent = q.q;
  cntEl.textContent = `Question ${current + 1} / ${questions.length}`;
  barEl.style.width = `${(current / questions.length) * 100}%`;

  optsEl.innerHTML = "";
  q.opts.forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.addEventListener("click", () => selectAnswer(opt));
    optsEl.appendChild(btn);
  });

  timerId = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft <= 5) timerEl.classList.add("danger");
    if (timeLeft <= 0) {
      clearInterval(timerId);
      recordAnswer("— (time up)");
      highlightAnswers(null, questions[current].ans);
      setTimeout(advance, 1200);
    }
  }, 1000);
}

function selectAnswer(chosen) {
  clearInterval(timerId);
  const correct = questions[current].ans;
  const isRight = chosen === correct;
  if (isRight) {
    score++;
    liveSc.textContent = score;
  }
  recordAnswer(chosen);
  highlightAnswers(chosen, correct);
  setTimeout(advance, 1000);
}

function highlightAnswers(chosen, correct) {
  [...optsEl.children].forEach((btn) => {
    btn.disabled = true;
    if (btn.textContent === correct) btn.classList.add("correct");
    else if (btn.textContent === chosen) btn.classList.add("wrong");
  });
}

function recordAnswer(chosen) {
  userAnswers.push({
    q: questions[current].q,
    chosen,
    correct: questions[current].ans,
  });
}

function advance() {
  current++;
  if (current < questions.length) loadQuestion();
  else showResults();
}

function showResults() {
  barEl.style.width = "100%";
  document.getElementById("quiz-screen").style.display = "none";
  const res = document.getElementById("result-screen");
  res.style.display = "block";

  document.getElementById("final-score").textContent =
    `${score}/${questions.length}`;

  const best = parseInt(localStorage.getItem("quizBest") || "0");
  if (score > best) localStorage.setItem("quizBest", score);
  document.getElementById("best-score").textContent =
    `${localStorage.getItem("quizBest")} / ${questions.length}`;

  const rev = document.getElementById("review");
  userAnswers.forEach((item) => {
    const div = document.createElement("div");
    div.className = "review-item";
    const isRight = item.chosen === item.correct;
    div.innerHTML = `
      <p class="q">${item.q}</p>
      <p class="yours ${isRight ? "right" : ""}">Your answer: ${item.chosen}</p>
      ${!isRight ? `<p class="answer">Correct: ${item.correct}</p>` : ""}
    `;
    rev.appendChild(div);
  });
}

loadQuestion();
