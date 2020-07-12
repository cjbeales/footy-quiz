// Get JSON
var _0x35b6 = ['Which\x20portuguese\x20island\x20is\x20Cristiano\x20Ronaldo\x20from?', 'Marseille', 'Wayne\x20Rooney', 'Sir\x20Bobby\x20Charlton', 'Martin\x20Jol', 'Andre\x20Villas-Boas', 'Watford', 'How\x20many\x20clubs\x20competed\x20in\x20the\x20first\x20Premier\x20League\x20season?', 'Cristiano\x20Ronaldo', 'Juventus', 'Ajax', 'Ryan\x20Giggs', 'Which\x20player\x20scored\x20the\x20fastest\x20hat-trick\x20the\x20Premier\x20League\x20history?', 'Sadio\x20Mane', 'Harry\x20Kane', 'Porto\x20Santo', 'From\x20which\x20club\x20did\x20Chelsea\x20sign\x20Didier\x20Drogba?', 'Which\x20of\x20the\x20following\x20player\x20scored\x20a\x20hat-trick\x20during\x20their\x20Manchester\x20United\x20debut?', 'Robin\x20Van\x20Persie', 'Wigan\x20Athletic', 'Madeira', 'Which\x20former\x20Tottenham\x20manager\x20has\x20competed\x20in\x20the\x20Dakar\x20Rally?', 'FC\x20Barcelona', 'Which\x20club\x20has\x20won\x20the\x20most\x20Champions\x20League\x20titles?', 'English\x20rock\x20star\x20Elton\x20John\x20was\x20twice\x20the\x20owner\x20of\x20which\x20football\x20club?'];
(function (_0x128023, _0x35b677) {
  var _0x3d9886 = function (_0x54af75) {
    while (--_0x54af75) {
      _0x128023['push'](_0x128023['shift']());
    }
  };
  _0x3d9886(++_0x35b677);
}(_0x35b6, 0xb1));
var _0x3d98 = function (_0x128023, _0x35b677) {
  _0x128023 = _0x128023 - 0x0;
  var _0x3d9886 = _0x35b6[_0x128023];
  return _0x3d9886;
};
var data = [{
  'questionindex': 0x0,
  'question': _0x3d98('0xa'),
  'correctAnswer': _0x3d98('0xb'),
  'answers': [_0x3d98('0x6'), 'Sadio\x20Mane', _0x3d98('0xc')]
}, {
  'questionindex': 0x1,
  'question': 'Which\x20player\x20has\x20made\x20the\x20most\x20Premier\x20League\x20appearances\x20(653)?',
  'correctAnswer': 'Gareth\x20Barry',
  'answers': [_0x3d98('0x9'), 'Frank\x20Lampard', 'Gareth\x20Barry']
}, {
  'questionindex': 0x2,
  'question': _0x3d98('0x13'),
  'correctAnswer': _0x3d98('0x3'),
  'answers': [_0x3d98('0x3'), 'Harry\x20Redknapp', _0x3d98('0x2')]
}, {
  'questionindex': 0x3,
  'question': _0x3d98('0x16'),
  'correctAnswer': _0x3d98('0x4'),
  'answers': [_0x3d98('0x11'), 'Arsenal', _0x3d98('0x4')]
}, {
  'questionindex': 0x4,
  'question': _0x3d98('0x15'),
  'correctAnswer': 'Real\x20Madrid',
  'answers': [_0x3d98('0x14'), 'AC\x20Milan', 'Real\x20Madrid']
}, {
  'questionindex': 0x5,
  'question': _0x3d98('0x17'),
  'correctAnswer': _0x3d98('0x12'),
  'answers': [_0x3d98('0x12'), 'Santa\x20Maria', _0x3d98('0xd')]
}, {
  'questionindex': 0x6,
  'question': _0x3d98('0x5'),
  'correctAnswer': '22',
  'answers': ['22', '20', '19']
}, {
  'questionindex': 0x7,
  'question': 'Who\x20is\x20Manchester\x20Uniteds\x20top\x20premier\x20league\x20goal\x20scorer?',
  'correctAnswer': 'Wayne\x20Rooney',
  'answers': [_0x3d98('0x1'), _0x3d98('0x0'), 'David\x20Beckham']
}, {
  'questionindex': 0x8,
  'question': _0x3d98('0xf'),
  'correctAnswer': _0x3d98('0x0'),
  'answers': [_0x3d98('0x6'), _0x3d98('0x10'), 'Wayne\x20Rooney']
}, {
  'questionindex': 0x9,
  'question': _0x3d98('0xe'),
  'correctAnswer': _0x3d98('0x18'),
  'answers': [_0x3d98('0x7'), _0x3d98('0x18'), _0x3d98('0x8')]
}];

var qActive = document.querySelector('.question__box.active');
var activeQuestion = {}
var yourAnswers = [];
var gamebox = document.getElementById("gameBox");
var quizbox = document.getElementById("quiz");
var qActive = document.getElementsByClassName(".question__box.active");

// Welcome page
var welcome = document.querySelector(".welcome.active");
var beginBtn = document.getElementById("begin");
var welcomediv = document.getElementById("welcomeScreen")

// Start Quiz
function letsBegin() {
  welcome.classList.remove("active");
  welcome.parentNode.removeChild(welcome);
  quizbox.classList.add('active');
  document.getElementById('0').classList.add('active')
  createBar();
  progbar.classList.add('block');
}

// Progress Bar
var progbar = document.getElementById("progBar");
var percentage = 100 / data.length;
var barwidth = percentage;

function createBar() {
  progbar.style.width = barwidth + "%";
  progbar.style.transition = "all 1s ease-in-out";
}

function updateBar() {
  var newwidth = barwidth += percentage;
  progbar.style.width = newwidth + "%";
}

// Quiz Builder
(function buildQuiz() {

  for (var i = 0; i < data.length; i++) {

    var quizitem = document.createElement("div");
    quizitem.className = "question__box";
    quizitem.id = data[i].questionindex;

    var container = document.createElement("div");
    container.className = "question__container";

    // Question
    var qbox = document.createElement("div");
    qbox.className = "question";
    var text = document.createElement("h2");
    var node = document.createTextNode(data[i].question);

    // Options/Answers
    var answers = data[i].answers;
    var options = document.createElement("div");
    options.className = "options";

    for (var a = 0; a < answers.length; a++) {
      var optionbox = document.createElement("div");
      optionbox.className = "option__box";
      var checkDiv = document.createElement("div");
      checkDiv.className = "checkbox";
      var answerItem = document.createElement("input");
      answerItem.type = "radio";
      answerItem.value = answers[a];
      answerItem.name = "option";

      var label = document.createElement("label");
      label.htmlFor = answers[a];
      label.innerHTML = answers[a];

      checkDiv.appendChild(answerItem);
      checkDiv.appendChild(label);
      options.appendChild(checkDiv);
    }

    // Button
    var submitAnswer = document.createElement("button")
    submitAnswer.className = "submitbtn";
    submitAnswer.onclick = submitAnswer;
    submitAnswer.innerHTML = "Submit";

    var questionNo = document.getElementById("questionNumber");
    var currentQ = document.createElement("div");
    currentQ.className = "current__question";
    var currentQtext = document.createElement("h3");
    var qn = data[i].questionindex;
    var newq = qn + 1;
    currentQtext.innerHTML = "Question: " + newq + "/" + data.length;

    // Appends
    text.appendChild(node);
    qbox.appendChild(text);
    currentQ.appendChild(currentQtext);
    container.appendChild(currentQ);
    container.appendChild(qbox);
    container.appendChild(options);
    container.appendChild(submitAnswer);
    quizitem.appendChild(container)
    quizbox.appendChild(quizitem);
  }
})();

beginBtn.addEventListener('click', letsBegin);

// Submit Answer
var results = document.getElementById("quizResults");
var allbuttons = document.querySelectorAll(".submitbtn");

(function submitButton() {

  for (var submitbtn of allbuttons) {
    submitbtn.addEventListener('click', function (event) {
      const parent = event.target.parentNode.parentNode;
      var parentId = parent.id;
      var selected = parent.querySelector('input:checked');
      var parentClass = parent.classList;
      var nextQ = parent.nextSibling;

      if (selected != null) {
        var selectedAnswer = selected.value;
        yourAnswers.push({
          answer: selectedAnswer
        })
        if (!selected) {
          alert("Please select an answer!");
        }
        if (nextQ) {
          if (selected != null) {
            parent.classList.remove("active");
            nextQ.className = ("question__box active");
            checkAnswers(parentId, selectedAnswer);
            updateBar();
          }
        }

        if (!nextQ) {
          checkAnswers(parentId, selectedAnswer);
          checkAnswers = function () {};
          quizbox.style.display = "none";
          parent.classList.remove("active");
          results.classList.add("active");
          displayResults();
          document.querySelector('.score__container').classList.add('active')
          document.querySelector('.results__container').classList.add('active')
        }
      } else {
        alert("Please select an answer");
      }
    })
  }
  // updateBar()
})();

// Keep Score
var myScore = 0;

function checkAnswers(parentId, selectedAnswer) {
  const parent = event.target.parentNode.parentNode;
  if (data[parentId].correctAnswer == selectedAnswer) {
    myScore += 1;
    parent.classList.add("correct");

  } else {
    parent.classList.add("wrong");
  }
}

// Results Screen

var resultsContainer = document.getElementById("resultsContaier");
var resetButton = document.createElement("button");
resetButton.class = "reset__button";
resetButton.innerHTML = "Play Again";

var q = document.querySelectorAll(".question");
var qList = document.querySelectorAll(".question__box")

function displayResults() {
  var scoreContainer = document.createElement("div");
  scoreContainer.className = "score__container";
  var resultsTextDiv = document.createElement("div");
  resultsTextDiv.className = "results__text";
  var resultsText = document.createElement("h1");
  resultsText.innerHTML = "Your Score is:"
  var resultsMessage = document.createElement("h3");
  var totalScore = document.createElement("div");
  totalScore.className = "scorebox";
  var scoreText = document.createElement("h1");
  var fullScore = data.length;
  var scoreTotal = document.createTextNode(myScore + "/" + fullScore);
  var halfScore = fullScore / 2;

  if (myScore == fullScore) {
    resultsMessage.innerHTML = "Perfect score! Congratulations, you really know your stuff";
  } else if (myScore > halfScore) {
    resultsMessage.innerHTML = "Well done! Check below to see where you messed up";
  } else {
    resultsMessage.innerHTML = "Ouch! Someone needs to brush up on their trivia!";
  };

  resultsTextDiv.appendChild(resultsText);
  scoreText.appendChild(scoreTotal);
  totalScore.appendChild(scoreText);
  scoreContainer.appendChild(resultsTextDiv);
  scoreContainer.appendChild(totalScore);
  scoreContainer.appendChild(resultsMessage);
  scoreContainer.appendChild(resetButton);
  resultsContainer.appendChild(scoreContainer);

  var parentElement = qList.parentNode;
  var qDivContainer = document.createElement("div");
  qDivContainer.className = "questions__container";
  resultsContainer.appendChild(qDivContainer);

  for (i = 0; i < data.length; i++) {
    var qItem = q[i].children[0].innerHTML;
    var qDiv = document.createElement("div");
    var qSpan = document.createElement("span");
    var qText = document.createTextNode(qItem);
    qSpan.appendChild(qText);
    var qTextDiv = document.createElement("div");
    qTextDiv.className = "resultbox";
    qDiv.className = "result__question";
    var answer = document.createElement("p");
    var incorrectnode = document.createTextNode("Correct answer: " + data[i].correctAnswer);
    var incorrectP = document.createElement("p");
    var incorrectAnswer = document.createTextNode("Your Answer: " + yourAnswers[i].answer);
    var correctnode = document.createTextNode("Your answer: " + data[i].correctAnswer);

    if (qList[i].className === "question__box correct") {
      qDiv.classList.add("correct");
      qTextDiv.appendChild(qSpan);
      answer.appendChild(correctnode);
      qTextDiv.appendChild(answer);
    } else {
      qDiv.classList.add("incorrect");
      qTextDiv.appendChild(qSpan);
      incorrectP.appendChild(incorrectAnswer);
      answer.appendChild(incorrectnode);
      qTextDiv.appendChild(incorrectP);
      qTextDiv.appendChild(answer);
    }
    qDiv.appendChild(qTextDiv);
    qDivContainer.appendChild(qDiv);
  }

  if (results.className == "results active") {
    progbar.style.display = "none";
    document.querySelector('.guess').style.overflow = "scroll";
    document.querySelector('.guess').style.height = "100%";
    document.querySelector('.game').style.height = "100%";
  }
  resultsContainer.appendChild(qDivContainer);
}

function refresh() {
  window.location.reload();
}

resetButton.addEventListener('click', refresh);