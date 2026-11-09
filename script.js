const problemBank = [
  {
    difficulty: 'Hard',
    topic: 'Quadratics',
    question: 'Solve for x: 2x² - 5x - 3 = 0',
    answer: '3 or -0.5',
    normalized: ['3', '-0.5', '-1/2', '3, -1/2', '3 and -0.5']
  },
  {
    difficulty: 'Advanced',
    topic: 'System Solving',
    question: 'Solve the system: 2x + y = 11 and x - y = 1',
    answer: 'x = 4, y = 3',
    normalized: ['4,3', 'x=4 y=3', '4 and 3', '4, 3']
  },
  {
    difficulty: 'Expert',
    topic: 'Radicals',
    question: 'Solve for x: √(x + 5) = 3',
    answer: 'x = 4',
    normalized: ['4', 'x=4']
  },
  {
    difficulty: 'Hard',
    topic: 'Factoring',
    question: 'Factor completely: x² - 9x + 20',
    answer: '(x - 4)(x - 5)',
    normalized: ['(x-4)(x-5)', '(x-5)(x-4)', 'x-4 and x-5']
  },
  {
    difficulty: 'Advanced',
    topic: 'Rational Equations',
    question: 'Solve for x: 1/x + 1/(x + 2) = 1/3',
    answer: 'x = 3 or x = -2',
    normalized: ['3 or -2', '-2 or 3', '3, -2', '3 and -2']
  },
  {
    difficulty: 'Expert',
    topic: 'Exponentials',
    question: 'Solve for x: 2^(x+1) = 16',
    answer: 'x = 3',
    normalized: ['3', 'x=3']
  }
];

const difficultyBadge = document.getElementById('difficulty-badge');
const topicTag = document.getElementById('topic-tag');
const problemText = document.getElementById('problem-text');
const answerInput = document.getElementById('answer-input');
const feedback = document.getElementById('feedback');
const featuredEquation = document.getElementById('featured-equation');
const newProblemBtn = document.getElementById('new-problem-btn');
const checkAnswerBtn = document.getElementById('check-answer-btn');

function normalize(value) {
  return value
    .toLowerCase()
    .replace(/\s+/g, '')
    .replace(/x\s*=\s*/g, '')
    .replace(/\s*or\s*/g, ' or ')
    .replace(/and/g, ',')
    .replace(/\(|\)|\[|\]|/g, '')
    .replace(/;/g, '')
    .trim();
}

function showProblem() {
  const problem = problemBank[Math.floor(Math.random() * problemBank.length)];

  difficultyBadge.textContent = problem.difficulty;
  topicTag.textContent = problem.topic;
  problemText.textContent = problem.question;
  featuredEquation.textContent = problem.question.replace('Solve for x: ', '').replace('Solve the system: ', '').replace('Solve for x: ', '');
  answerInput.value = '';
  feedback.textContent = 'Try your best — you can do this.';
  feedback.style.color = '#a7bfd8';
  answerInput.dataset.answer = problem.answer;
  answerInput.dataset.normalized = JSON.stringify(problem.normalized);
}

function checkAnswer() {
  const userAnswer = answerInput.value.trim();
  const correctAnswer = answerInput.dataset.answer;
  const acceptedAnswers = JSON.parse(answerInput.dataset.normalized || '[]');

  if (!userAnswer) {
    feedback.textContent = 'Type an answer before checking.';
    feedback.style.color = '#ff7a7a';
    return;
  }

  const normalizedGuess = normalize(userAnswer);
  const isMatch =
    normalizedGuess === normalize(correctAnswer) ||
    acceptedAnswers.some((entry) => normalize(entry) === normalizedGuess);

  if (isMatch) {
    feedback.textContent = `Correct! ${correctAnswer} is right.`;
    feedback.style.color = '#6fe7b2';
  } else {
    feedback.textContent = `Not quite. Try again — the correct answer is ${correctAnswer}.`;
    feedback.style.color = '#ff7a7a';
  }
}

newProblemBtn.addEventListener('click', showProblem);
checkAnswerBtn.addEventListener('click', checkAnswer);
answerInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    checkAnswer();
  }
});

showProblem();
































































































































