var mainEl = document.querySelector("main");
var startQuizEl = document.querySelector("#start-quiz");
var sectionEl = document.querySelector("#section");
var highScores = JSON.parse(localStorage.getItem("highscores")) || [];
var initialsInput = "";
var questionsIndex = -1;
var counter = 60;
var isPaused = false;
var questions = [
  {
    Q: "  ______ JavaScript is also called client-side JavaScript.",
    A1: "Microsoft",
    A2: "LiveWire",
    A3: "Native",
    A4: "Navigator"
  },
  {
    Q: 'What is the correct JavaScript syntax to write "Hello World"?',
    A1: 'System.out.println("Hello World")',
    A2: 'document.write("Hello World")',
    A3: 'println ("Hello World")',
    A4: 'response.write("Hello World")'
  },
  {
    Q: "Inside which HTML element do we put the JavaScript?",
    A1: "<script>",
    A2: "<js>",
    A3: "<scripting>",
    A4: "<javascript>"
  },
  {
    Q: "JavaScript entities start with _______ and end with _________.",
    A1: "Semicolon, colon",
    A2: "Semicolon, Ampersand",
    A3: "Ampersand, semicolon",
    A4: "Ampersand, colon"
  },
  {
    Q: "Which of the following best describes JavaScript?",
    A1: "a low-level programming language.",
    A2: "an object-oriented scripting language.",
    A3: "a scripting language precompiled in the browser.",
    A4: "a compiled scripting language."
  }
];

var startTimer = function() {
  var timer = document.querySelector("#timer");

  timer.innerHTML = counter;

  var timeInterval = setInterval(function() {
    if (!isPaused) {
      if (counter >= 1) {
        counter--;
        timer.innerHTML = counter;
      }
  
      else {
        timer.innerHTML = 0;
        clearInterval(timeInterval);
        inputInitialsPage();
      }
    }

    if (isPaused) {
      inputInitialsPage();
      clearInterval(timeInterval);
    }
  }, 1000)
};

var pause = function() {
  isPaused = true;
};

var displayQuestion = function(question) {
  var questionSectionEl = document.createElement("section");
  questionSectionEl.setAttribute("id", "section");
  questionSectionEl.innerHTML = "<h2>" + question.Q + "</h2>";
  questionSectionEl.className = "question-section"
  
  var buttonListEl = document.createElement("ul");
  // set attributes and classes later

  var listItemEl1 = document.createElement("li");
  var button1El = document.createElement("button");
  button1El.setAttribute("data-answer-id", 1)
  button1El.textContent = question.A1
  button1El.className = "btn answer";
  listItemEl1.appendChild(button1El);
  buttonListEl.appendChild(listItemEl1);

  var listItemEl2 = document.createElement("li");
  var button2El = document.createElement("button");
  button2El.setAttribute("data-answer-id", 2)
  button2El.textContent = question.A2
  button2El.className = "btn answer";
  listItemEl2.appendChild(button2El);
  buttonListEl.appendChild(listItemEl2);

  var listItemEl3 = document.createElement("li");
  var button3El = document.createElement("button");
  button3El.setAttribute("data-answer-id", 3)
  button3El.textContent = question.A3
  button3El.className = "btn answer";
  listItemEl3.appendChild(button3El);
  buttonListEl.appendChild(listItemEl3);

  var listItemEl4 = document.createElement("li");
  var button4El = document.createElement("button");
  button4El.setAttribute("data-answer-id", 4)
  button4El.textContent = question.A4
  button4El.className = "btn answer";
  listItemEl4.appendChild(button4El);
  buttonListEl.appendChild(listItemEl4);

  questionSectionEl.appendChild(buttonListEl);
  mainEl.appendChild(questionSectionEl);
  console.log(mainEl);

};

var nextQuestion = function() {
  sectionEl.remove();
  questionsIndex++;

  if (questionsIndex < questions.length) {
    displayQuestion(questions[questionsIndex]);
  }

  else if (questionsIndex >= questions.length) {
    pause();
  }
};

var answerButtonHandler = function(event) {
  var targetEl = event.target;

  if (targetEl.matches(".answer")) {
    var answerId = targetEl.getAttribute("data-answer-id");
    var timer = document.querySelector("#timer");
    
    // QUESTION 1
    if (answerId === "4") {
      if (questionsIndex === 0) {
        console.log("correct");   
      }
    }

    if (answerId !== "4") {
      if (questionsIndex === 0) {
        console.log("incorrect");
        counter = counter - 10;
      }
    }

    // QUESTION 2
    if (answerId === "2") {
      if (questionsIndex === 1) {
        console.log("correct");
      }
    }

    if (answerId !== "2") {
      if (questionsIndex === 1) {
        console.log("incorrect");
        counter = counter - 10;
      }
    }

    // QUESTION 3
    if (answerId === "1") {
      if (questionsIndex === 2) {
        console.log("correct");
      }
    }

    if (answerId !== "1") {
      if (questionsIndex === 2) {
        console.log("incorrect");
        counter = counter - 10;
      }
    }

    // QUESTION 4
    if (answerId === "3") {
      if (questionsIndex === 3) {
        console.log("correct");
      }
    }

    if (answerId !== "3") {
      if (questionsIndex === 3) {
        console.log("incorrect");
        counter = counter - 10;
      }
    }

    // QUESTION 5
    if (answerId === "2") {
      if (questionsIndex === 4) {
        console.log("correct");
      }
    }

    if (answerId !== "2") {
      if (questionsIndex === 4) {
        console.log("incorrect");
        counter = counter - 10;
        timer.innerHTML = counter;
      }
    }

    var currentSection = document.querySelector("#section");
    currentSection.remove();
    nextQuestion();
  }
};

var inputInitialsPage = function() {
  var currentSection = document.querySelector("#section");
  if (currentSection != null) {
    currentSection.remove();
  }

  var inputPageSection = document.createElement("section");
  inputPageSection.setAttribute("id", "section");
  inputPageSection.innerHTML = "<h2>All done!</h2><p>Your final score is " + counter + ".</p>"
  inputPageSection.className = "input-section";

  var formDivEl = document.createElement("div");
  formDivEl.className = "form-group";
  formDivEl.innerHTML = "<p id='input-p'>Enter initials: </p>";

  var inputEl = document.createElement("input");
  inputEl.setAttribute("type", "text");
  inputEl.setAttribute("name", "initials");
  formDivEl.appendChild(inputEl);

  var submitBtnEl = document.createElement("button");
  submitBtnEl.className = "btn submit";
  submitBtnEl.setAttribute("type", "submit");
  submitBtnEl.textContent = "Submit";
  formDivEl.appendChild(submitBtnEl);

  inputPageSection.appendChild(formDivEl);
  mainEl.appendChild(inputPageSection);
};

var submitButtonHandler = function(event) {
  targetEl = event.target;

  if (targetEl.matches(".submit")) {
    initialsInput = document.querySelector("input[name='initials']").value;

    if (!initialsInput) {
      alert("You need to enter your initials!");
      return false;
    }
    
    else {   
      displayHighScores();
    }
  }
};

var displayHighScores = function() {
  var currentSection = document.querySelector("#section");
  currentSection.remove();

  var score = {
    score: counter,
    name: initialsInput
  };

  highScores.push(score);
  highScores.sort((a,b) => b.score - a.score);
  highScores.splice(5);

  localStorage.setItem("highscores", JSON.stringify(highScores));

  scoreSectionEl = document.createElement("section");
  scoreSectionEl.setAttribute("id", "section");
  scoreSectionEl.innerHTML = "<h2>High Scores</h2>"
  scoreSectionEl.className = "high-score-section";

  listEl = document.createElement("ul");

  buttonEl = document.createElement("button");
  buttonEl.className = "btn try-again";
  buttonEl.textContent = "Try Again";

  for (var i = 0; i < highScores.length; i++) {
    scoreEl = document.createElement("li");
    scoreEl.textContent = (i + 1) + ". " + highScores[i].name + " - " + highScores[i].score;
    listEl.appendChild(scoreEl);
  }

  scoreSectionEl.appendChild(listEl);
  scoreSectionEl.appendChild(buttonEl);
  mainEl.appendChild(scoreSectionEl);
};

var tryAgainHandler = function(event) {
  targetEl = event.target;

  if (targetEl.matches(".try-again")) {
    window.location.assign("index.html");
  }
};

startQuizEl.addEventListener("click", startTimer);
startQuizEl.addEventListener("click", nextQuestion);
mainEl.addEventListener("click", answerButtonHandler);
mainEl.addEventListener("click", submitButtonHandler);
mainEl.addEventListener("click", tryAgainHandler);
