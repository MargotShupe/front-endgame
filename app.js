//If game is end show us the score.
function populate() {
  if (quiz.isEnded()) {
    showScores();
    // If is not end show the next question
  } else {
    // show question (populate our quesitons)
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    // show choices (populate our choices)
    var choices = quiz.getQuestionIndex().choices;
    // loop to be able to select any of the four options
    for (var i = 0; i < choices.length; i++) {
      var element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }

    showProgress();
  }
}

//
function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    populate();
  };
}

// Will detect if the user select the right or the wrong answer
function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML =
    "Question" + currentQuestionNumber + "of " + quiz.questions.length;
}

function showScores() {
  var gameOverHtml = "<h1>Result</h1>";
  gameOverHtml += "<h2 id='score'> Your score is: " + quiz.score + "</h2>";
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHtml;
}

//Trivia questions
var questions = [
  new Question(
    "How many canvases of Marilyn Monroe make up the Andy Warhol piece ‘Shot Marilyns’?",
    ["One", "Four", "Ten", "Seven"],
    "Four"
  ),
  new Question(
    "In which Spanish city can you find the Salvador Dalí Museum?",
    ["Barcelona", "Madrid", "Malaga", "Figueres"],
    "Figueres"
  ),
  new Question(
    "Which famous museum of modern and contemporary art can you find in Bilbao?",
    ["Euskal", "Guggenheim", "Roqueland", "Bilboko Kaleak"],
    "Guggenheim"
  ),
  new Question(
    "During which century did Vincent Van Gogh live?",
    ["20th", "19th", "18th", "17th"],
    "19th"
  ),
  new Question(
    "Which famous female pharaoh bust was sculpted by Thutmose?",
    ["Cleopatra VII", "Merneith", "Nefertiti", "Ashotep"],
    "Nefertiti"
  ),
  new Question(
    "What is the world’s most visited museum?",
    [
      "Louvre",
      "The Metropolitan Museum of Art",
      "Vatican Museums",
      "The Modern",
    ],
    "Louvre"
  ),
  new Question(
    "Who painted the ceiling of the Sistine Chapel?",
    ["Botticelli", "Donaatello", "Michelangelo", "Leonardo da Vinci"],
    "Michelangelo"
  ),
  new Question(
    "Which surrealist artist is known for painting melting clocks?",
    ["Pablo Picasso", "Salvador Dali", "Frida Kahlo", "Edward Hopper"],
    "Salvador Dali"
  ),
  new Question(
    "In which museum can you find the Mona Lisa?",
    ["The British Museum", "The Louvre", "Tate Modern", "The Uffizi Gallery"],
    "The Louvre"
  ),
  new Question(
    "In which museum can you find the painting ‘Guernica’ by Pablo Picasso?",
    ["Guggenheim", "Museu Picasso", "Museo del Prado", "Museo Reina Sofia"],
    "Museo Reina Sofia"
  ),
];

//
var quiz = new Quiz(questions);

populate();
