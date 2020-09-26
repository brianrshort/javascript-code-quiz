var timeEl = document.querySelector(".time");

var mutableEL = document.querySelector("#quizZone");

var secondsLeft = 100;

var totalScore = 0; 

var questionCounter = 0;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Seconds left: " + secondsLeft + ":00";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      questionCounter = 5; 
    }

  }, 1000);
}

function quizBegin() {
	document.getElementById("quizContent").remove();
	var pageOne = document.createElement("div");
	document.getElementById("quizZone").appendChild(pageOne);
	
	var question = document.createElement("h3");
	pageOne.appendChild(question);
	pageOne.childNodes[0].textContent = "Question 1: What is HTML?";
	
	var answerOne = document.createElement("button");
	pageOne.appendChild(answerOne);
	pageOne.childNodes[1].textContent = "Hypertext Markup Language";
	pageOne.childNodes[1].setAttribute("id" , "answerOne");
	document.getElementById("answerOne").addEventListener("click" , function() {
		console.log("Correct!");
	})

	var answerTwo = document.createElement("button");
	pageOne.appendChild(answerTwo);
	pageOne.childNodes[2].textContent = "The basic structure of a webpage";
	pageOne.childNodes[2].setAttribute("id" , "answerTwo");
	document.getElementById("answerTwo").addEventListener("click" , function() {
		console.log("Correct!");
	})

	var answerThree = document.createElement("button");
	pageOne.appendChild(answerThree);
	pageOne.childNodes[3].textContent = "The first chapter in many web developer bootcamps";
	pageOne.childNodes[3].setAttribute("id" , "answerThree");
	document.getElementById("answerThree").addEventListener("click" , function() {
		console.log("Correct!");
	})

	var answerFour = document.createElement("button");
	pageOne.appendChild(answerFour);
	pageOne.childNodes[4].textContent = "A kind of frog";
	pageOne.childNodes[4].setAttribute("id" , "answerFour");
	document.getElementById("answerFour").addEventListener("click" , function() {
		console.log("Wrong!");
	})
}

document.getElementById("quizStart").addEventListener ("click", function() {
		setTime();
		questionCounter++;
		if (questionCounter === 1) {
			quizBegin();
		}
	})


	//add event listener for button () {
		//questionCounter++;
	//}
	//if right answer {
		//totalScore++;
		//print Right!
		//button
		//toggle button hidden
	//} else if wrong answer {
		//print Wrong!
		//toggle button hidden
	//}











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