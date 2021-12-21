var startButton = document.querySelector('#start');
var questionsEl = document.querySelector('#questions');
var questionEl = document.getElementById('question');
var multiplechoiceEl = document.querySelector('#multiplechoice');

var shuffleQuestions, currentQuestionsIndex;

startButton.addEventListener('click', quizStart);

function goNextQuestion() {
    currentQuestionsIndex++;
    
    nextQuestion();
};

function quizStart() {
    startButton.classList.add('hidden');

    shuffleQuestions = questions.sort(() => Math.random() - .5);

    currentQuestionsIndex = 0;

    questionsEl.classList.remove('hidden');

    nextQuestion();

};

function nextQuestion() {
    resetAnswers();
    showQuestion(shuffleQuestions[currentQuestionsIndex]);
};

function showQuestion(question) {
    resetAnswers()
    questionEl.innerText = question.question;
    question.answers.forEach(answer => {
        var button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('choices');
        if(answer.correct){
            button.dataset.correct = answer.correct
        };
        button.addEventListener('click', selectAnswer);
        questionsEl.appendChild(button);
    })
    
};

function resetAnswers() {
    clearStatusClass(document.body);
    while (multiplechoiceEl.firstChild) {
        multiplechoiceEl.removeChild(multiplechoiceEl.firstChild);
    }
};

function selectAnswer(e) {
    var selectedAnswer = e.target;
    var correct = selectedAnswer.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(multiplechoiceEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    });
    if(shuffleQuestions.length > currentQuestionsIndex + 1) {
        goNextQuestion();
    };
};

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    };
};

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
};

function viewHighscores() {

};

var questions = [
    {
        question: "placeholder1",
        answers: [
            {text: "A", correct:true},
            {text: "B", correct:false},
            {text: "C", correct:false},
            {text: "D", correct:false},
        ]
    },
    {
        question: "placeholder2",
        answers: [
            {text: "A", correct:false},
            {text: "B", correct:false},
            {text: "C", correct:true},
            {text: "D", correct:false},
        ]
    },
    {
        question: "placeholder3",
        answers: [
            {text: "A", correct:false},
            {text: "B", correct:true},
            {text: "C", correct:false},
            {text: "D", correct:false},
        ]
    },
    {
        question: "placeholder4",
        answers: [
            {text: "A", correct:true},
            {text: "B", correct:false},
            {text: "C", correct:false},
            {text: "D", correct:false},
        ]
    },
];