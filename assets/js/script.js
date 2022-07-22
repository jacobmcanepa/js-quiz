var startQuizEl = document.querySelector("#start-quiz");

var startTimer = function() {
  var counter = 60;
  var timer = document.querySelector("#timer");

  timer.innerHTML = counter;

  var timeInterval =   setInterval(function() {
    if (counter >= 1) {
      counter--;
      timer.innerHTML = counter;
    }

    else {
      timer.innerHTML = 0;
      clearInterval(timeInterval);
    }
  }, 1000)
};

startQuizEl.addEventListener("click", startTimer);