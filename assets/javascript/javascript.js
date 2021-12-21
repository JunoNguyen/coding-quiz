var startButton = document.querySelector('#start');

var nextButton = document.querySelector('#next');

var multiplechoiceEl = document.querySelector('#multiplechoice');

var questionEl = document.querySelector('#question');

var choicesEl = document.querySelector('.choices');

var questionsEl = document.querySelector('#questions');

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);

nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
});

function startGame() {
  startButton.classList.add('hidden');
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  questionsEl.classList.remove('hidden');
  setNextQuestion();
};

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
};

function showQuestion(question) {
  questionEl.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('choices');
    if (answer.correct) {
      button.dataset.correct = answer.correct
    };
    button.addEventListener('click', selectAnswer);
    multiplechoiceEl.appendChild(button);
  });
};

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hidden');
  while (multiplechoiceEl.firstChild) {
    multiplechoiceEl.removeChild(multiplechoiceEl.firstChild);
  };
};

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(choicesEl.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hidden');
  } else {
    startButton.innerText = 'Restart';
    startButton.classList.remove('hidden');
  };
};

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  };
};

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
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