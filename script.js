const quizData = [
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Makeup Language",
        c: "Hyper Markup Language",
        d: "Hometext Markup Language",
        correct: "a",
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        a: "<heading>",
        b: "<h1>",
        c: "head",
        d: "<h6>",
        correct: "b",
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        a: "<break>",
        b: "<br>",
        c: "<lr>",
        d: "<ul>",
        correct: "b",
    },
    {
        question: "What does CSS stand for?",
        a: "Colourful Style Sheets",
        b: "Creative Style Sheets",
        c: "Computer Style Sheets",
        d: "Cascading Style Sheets",
        correct: "d",
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        a: "<style>",
        b: "<css>",
        c: "<script>",
        d: "<html>",
        correct: "a",
    },
    {
        question: "How do you insert a comment in a CSS file?",
        a: "// This is a comment //",
        b: "*/ This is a comment /*",
        c: "/* This is a comment */",
        d: "/ This is a comment /",
        correct: "c",
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        a: "Text-color",
        b: "color",
        c: "fgcolour",
        d: "colour",
        correct: "b",
    },
    {
        question: "Which of the following is a valid type of function javascript supports?",
        a: "named function",
        b: "anonymous function",
        c: "Both of the above",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which built-in method returns the index within the calling String object of the first occurrence of the specified value?",
        a: "getindex()",
        b: "location()",
        c: "indexOf()",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which of the following function of Number object formats a number with a specific number of digits to the right of the decimal?",
        a: "toExponential()",
        b: "toPrecison()",
        c: "toLocalestring()",
        d: "toFixed()",
        correct: "d",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score} out of ${quizData.length} questions correctly.</h2>

                <button onclick="location.reload()">Attempt Again</button>
            `;
        }
    }
});
