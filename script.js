var timeEl = document.querySelector(".time");

var mutableEL = document.querySelector(".mutable")

var secondsLeft = 100;

var totalScore = 0; 




function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Seconds left: " + secondsLeft + ":00";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      //Code here to call Endpage function
    }

  }, 1000);
}

setTime();


/* Original Pseudocode here
Timer
	Cut to end state if 0:0
High Scores
	If highscores then display
Start screen
	Coding Quiz challenge
	Instructions
	Start button
Questions
	Question
	Answers
	Right/Wrong
End screen
	Score readout
	Enter initials + Submit
	Go back
	Clear high scores
*/