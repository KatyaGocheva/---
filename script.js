const questions = [
    {
        question: "Какво е предназначението на роботизираната ръка за сортиране?",
        answers: ["Сортиране на отпадъци", "Почистване на пода", "Извършване на ремонти"],
        correct: 0
    },
    {
        question: "Какъв вид отпадъци може да сортира роботизираната ръка?",
        answers: ["Само хартия", "Пластмаса, стъкло и хартия", "Само органични отпадъци"],
        correct: 1
    },
    {
        question: "Как роботизираната ръка разпознава различните видове отпадъци?",
        answers: ["С помощта на датчици и камери", "По теглото на отпадъка", "С помощта на магнити"],
        correct: 0
    },
    {
        question: "Коя част на роботизираната ръка извършва захващането на отпадъците?",
        answers: ["Сензорите", "Захващащият механизъм", "Моторът"],
        correct: 1
    },
    {
        question: "Какво е предимството на интелигентното сортиране на отпадъци?",
        answers: ["Намаляване на отпадъците", "Повишаване на замърсяването", "Ускоряване на замърсяването"],
        correct: 0
    },
    {
        question: "Какви технологии се използват при роботизираното сортиране?",
        answers: ["Изкуствен интелект и сензори", "Бензинови двигатели", "Ръчно сортиране"],
        correct: 0
    },
    {
        question: "Какво се случва със сортираните отпадъци?",
        answers: ["Отиват на депо", "Рециклират се", "Изгарят се веднага"],
        correct: 1
    },
    {
        question: "Какво е най-важното предимство на роботизираната ръка?",
        answers: ["Тя работи бавно", "Съкращава време и усилия", "Използва много енергия"],
        correct: 1
    },
    {
        question: "Какъв вид енергия обикновено използват роботизираните системи?",
        answers: ["Електрическа", "Ядрена", "Механична"],
        correct: 0
    },
    {
        question: "Коя е най-важната цел на сортирането на отпадъци?",
        answers: ["Замърсяване на природата", "Запазване на ресурсите и околната среда", "Събиране на боклук"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");
    const nextButton = document.getElementById("next-button");

    questionElement.textContent = questions[currentQuestion].question;
    answersElement.innerHTML = "";

    questions[currentQuestion].answers.forEach((answer, index) => {
        const answerDiv = document.createElement("div");
        answerDiv.classList.add("answer");
        answerDiv.textContent = answer;
        answerDiv.onclick = () => selectAnswer(index);
        answersElement.appendChild(answerDiv);
    });

    nextButton.style.display = "none";
}

function selectAnswer(index) {
    const answerElements = document.querySelectorAll(".answer");
    const nextButton = document.getElementById("next-button");

    if (index === questions[currentQuestion].correct) {
        answerElements[index].classList.add("correct");
        score++;
        document.getElementById("score").textContent = score;
    } else {
        answerElements[index].classList.add("incorrect");
        answerElements[questions[currentQuestion].correct].classList.add("correct");
    }

    answerElements.forEach((el) => (el.onclick = null));
    nextButton.style.display = "inline-block";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    let resultMessage;

    if (score >= 9) {
        resultMessage = `Вие събрахте ${score} точки. Справихте се отлично! 😊`;
    } else if (score >= 7) {
        resultMessage = `Вие събрахте ${score} точки. Справихте се много добре! 😊`;
    } else if (score >= 5) {
        resultMessage = `Вие събрахте ${score} точки. Справихте се добре! 😊`;
    } else {
        resultMessage = `Вие събрахте ${score} точки. Прочетете още и опитайте отново! 😞`;
    }

    quizContainer.innerHTML = `<h2>${resultMessage}</h2>`;
}

window.onload = loadQuestion;
