//Constructor function that contains the quesitons

function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}

//Function for the current question
Quiz.prototype.getQuestionIndex = function () {
  return this.questions[this.questionIndex];
};

//Function to know if our game has end.
Quiz.prototype.isEnded = function () {
  return this.questions.length === this.questionIndex;
};

//Is the correct answer the same as the answer selected by the user? It the answer is correct we can increase our score.
Quiz.prototype.guess = function (answer) {
  if ((this, this.getQuestionIndex().correctAnswer(answer))) {
    this.score++;
  }
  this.questionIndex++;
};
