// Get JSON
var data = [{

  "questionindex": 0,
  "question": "Which player scored the fastest hat-trick in the Premier League?",
  "correctAnswer": "Sadio Mane",
  "answers": ["Cristiano Ronaldo", "Sadio Mane", "Harry Kane"]
}, {

  "questionindex": 1,
  "question": "Which player has made the most Premier League appearances (653)?",
  "correctAnswer": "Gareth Barry",
  "answers": ["Ryan Giggs", "Frank Lampard", "Gareth Barry"]
}, {

  "questionindex": 2,
  "question": "Which former Tottenham manager has competed in the Dakar Rally?",
  "correctAnswer": "Andre Villas-Boas",
  "answers": ["Andre Villas-Boas", "Harry Redknapp", "Martin Jol"]
}, {

  "questionindex": 3,
  "question": "English rock star Elton John was twice the owner of which football club?",
  "correctAnswer": "Watford",
  "answers": ["Wigan Athletic", "Arsenal", "Watford"]
}, {

  "questionindex": 4,
  "question": "Which club has won the most Champions League titles?",
  "correctAnswer": "Real Madrid",
  "answers": ["FC Barcelona", "AC Milan", "Real Madrid"]
}, {

  "questionindex": 5,
  "question": "Which portuguese island is Cristiano Ronaldo from?",
  "correctAnswer": "Madeira",
  "answers": ["Madeira", "Santa Maria", "Porto Santo"]
}, {

  "questionindex": 6,
  "question": "How many clubs competed in the inaugural Premier League season?",
  "correctAnswer": "22",
  "answers": ["22", "20", "19"]
}, {

  "questionindex": 7,
  "question": "Who is Manchester Uniteds top premier league goal scorer?",
  "correctAnswer": "Wayne Rooney",
  "answers": ["Sir Bobby Charlton", "Wayne Rooney", "David Beckham"]
}, {

  "questionindex": 8,
  "question": "Which of the following player scored a hat-trick during their Manchester United debut?",
  "correctAnswer": "Wayne Rooney",
  "answers": ["Cristiano Ronaldo", "Robin Van Persie", "Wayne Rooney"]
}, {

  "questionindex": 9,
  "question": "From which club did Chelsea sign Didier Drogba?",
  "correctAnswer": "Marseille",
  "answers": ["Juventus", "Marseille", "Ajax"]
}]

var qActive = document.querySelector('.question__box.active');

var activeQuestion = {

}

var yourAnswers = [];

var gamebox = document.getElementById("gameBox");
var quizbox = document.getElementById("quiz");

var qActive = document.getElementsByClassName(".question__box.active");



// Welcome page
var welcome = document.querySelector(".welcome.active");
var beginBtn = document.getElementById("begin");
var welcomediv = document.getElementById("welcomeScreen")


function letsBegin() {
  welcome.classList.remove("active");
  welcome.parentNode.removeChild(welcome);
  tl.play();
}


// Quiz Builder
(function buildQuiz() {

  for (var i = 0; i < data.length; i++) {

    var quizitem = document.createElement("div");

    if (i == 0) {
      quizitem.className = "question__box active";
    } else {
      quizitem.className = "question__box";
    }

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
      // console.log(answers[a]);
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
    // submitAnswer.id = "submitButton";
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

var tl = anime.timeline({
  easing: 'easeOutExpo',
  duration: 750,
  autoplay: false
});

tl.add({
  targets: '.question__box',
  translateX: [400, 0],
  opacity: [0, 1],
  duration: 1000,
});


// Progress Bar
var progbar = document.getElementById("progBar");
var blockDiv = document.createElement("div");
var percentage = 100 / data.length;
var barwidth = percentage;

(function createBar() {
  blockDiv.className = "block";
  progbar.appendChild(blockDiv);
  blockDiv.style.width = barwidth + "%";
  blockDiv.style.transition = "all 1s ease-in-out";
})();

function updateBar() {
  var newwidth = barwidth += percentage;
  blockDiv.style.width = newwidth + "%";
}

// Submit Answer
var results = document.getElementById("quizResults");
var allbuttons = document.querySelectorAll(".submitbtn");

(function submitButton() {

  var tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750,
    autoplay: false
  });

  tl.add({
    targets: '.question__box',
    translateX: [400, 0],
    opacity: [0, 1],
    duration: 1000,
  });

  for (var submitbtn of allbuttons) {
    submitbtn.addEventListener('click', function (event) {
      const parent = event.target.parentNode.parentNode;
      var parentId = parent.id;
      var selected = parent.querySelector('input:checked');
      var parentClass = parent.classList;
      var nextQ = parent.nextSibling;

      tl.play();

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
        }
      } else {
        alert("Please select an answer");
      }


      // Code above here
    })
  }
})();



// Keep Score
var myScore = 0;

function checkAnswers(parentId, selectedAnswer) {
  const parent = event.target.parentNode.parentNode;
  if (data[parentId].correctAnswer == selectedAnswer) {
    console.log("This is correct")
    myScore += 1;
    console.log(myScore);
    parent.classList.add("correct");

  } else {
    console.log("Wrong");
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
  var resultsMessage = document.createElement("p");
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
  }
  resultsContainer.appendChild(qDivContainer);

}

function refresh() {
  window.location.reload();
}

resetButton.addEventListener('click', refresh);