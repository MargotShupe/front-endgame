//Constructor function with keywords. Storing three parameters inside my variables.

function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

//Add prototype to and check if the answer is corrct or incorrect.
Question.prototype.correctAnswer = function (choice) {
  return choice === this.answer;
};
