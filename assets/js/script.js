var mainEl = document.querySelector("main");
var startQuizEl = document.querySelector("#start-quiz");
var sectionEl = document.querySelector("#section");
var questionsIndex = -1;
var counter = 10;
var isPaused = false;
var questions = [
  {
    Q: "Question 1",
    A1: "Answer 1",
    A2: "Answer 2",
    A3: "Answer 3",
    A4: "Answer 4"
  },
  {
    Q: "Question 2",
    A1: "Answer 1",
    A2: "Answer 2",
    A3: "Answer 3",
    A4: "Answer 4"
  },
  {
    Q: "Question 3",
    A1: "Answer 1",
    A2: "Answer 2",
    A3: "Answer 3",
    A4: "Answer 4"
  },
  {
    Q: "Question 4",
    A1: "Answer 1",
    A2: "Answer 2",
    A3: "Answer 3",
    A4: "Answer 4"
  },
  {
    Q: "Question 5",
    A1: "Answer 1",
    A2: "Answer 2",
    A3: "Answer 3",
    A4: "Answer 4"
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
      clearInterval(timeInterval);
      inputInitialsPage();
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
    
    // QUESTION 1
    if (answerId === "4") {
      if (questionsIndex === 0) {
        console.log("correct");
      }
    }

    if (answerId !== "4") {
      if (questionsIndex === 0) {
        console.log("incorrect");
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

  var formDivEl = document.createElement("div");
  formDivEl.className = "form-group";
  formDivEl.innerHTML = "<p>Enter initials: </p>";

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

  var initialsInput = document.querySelector("input[name='initials']").value;

  if (targetEl.matches(".submit")) {
    if (!initialsInput) {
      alert("You need to enter your initials!");
      return false;
    }
    
    else {
      var currentSection = document.querySelector("#section");
      currentSection.remove();
      console.log(initialsInput);
    }
  }
};

startQuizEl.addEventListener("click", startTimer);
startQuizEl.addEventListener("click", nextQuestion);
mainEl.addEventListener("click", answerButtonHandler);
mainEl.addEventListener("click", submitButtonHandler);
