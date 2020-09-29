


/* 
              <h2>What is Javascript?</h2>
              <button type="button" id="answerThreeOne" class="correct">A coding language with traditional programming logic</button>
              <button type="button" id="answerThreeTwo" class="correct">A way to make web pages interactive</button>
              <button type="button" id="answerThreeThree" class="correct">One of the most popular coding languages on the web</button>
              <button type="button" id="questionThreeFour" class="wrong">Nothing, and is nowhere, and is endless</button>
              <button type="button" id="nextPageThree">Next question</button>
              <hr class="line" style="display: none;">
              <p class="righto" style="display: none;">Correct!</p>
              <p class="wrongo" style="display: none;">Wrong!</p>
            </div>
            <div class="col12 col-md-6" id="pageFour" style="display: none;">
              <h2>What's the best way to learn how to code?</h2>
              <button type="button" id="answerFourOne"class="correct">Coffee</button>
              <button type="button" id="answerFourTwo" class="correct">Be obsessed</button>
              <button type="button" id="answerFourThree" class="wrong">Take a day off here and there</button>
              <button type="button" id="questionFourFour" class="correct">yes I said yes I will Yes</button>
              <button type="button" id="nextPageFour">Finish quiz</button>
              <hr class="line" style="display: none;">
              <p class="righto" style="display: none;">Correct!</p>
              <p class="wrongo" style="display: none;">Wrong!</p>
            </div>
            <div class="col12 col-md-6" id="end" style="display: none;">
              <h2>Game Over!</h2>
              
            </div> */











// var timeEl = document.querySelector(".time");
// var startEl = document.querySelector("#quizZone");

// var oneEl = document.querySelector("#pageOne");
// var twoEl = document.querySelector("#pageTwo");
// var threeEl = document.querySelector("#pageThree");
// var fourEl = document.querySelector("#pageFour");

// var endEl = document.querySelector("#end");

// var startButton = document.querySelector("#quizStart");
// var pageOneButton = document.querySelector("#nextPageOne");
// var pageTwoButton = document.querySelector("#nextPageTwo");
// var pageThreeButton = document.querySelector("#nextPageThree");
// var pageFourButton = document.querySelector("#nextPageFour");

// var correctEl = document.querySelectorAll(".correct");
// var wrongEl = document. querySelectorAll(".wrong");

// var secondsLeft = 100;

// var totalScore = 0; 

// var i = 0;

// function setTime() {
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = "Seconds left: " + secondsLeft + ":00";

//     if(secondsLeft === 0) {
//       clearInterval(timerInterval);
//       gameOver(); 
//     }

//   }, 1000);
// }

// startButton.onclick = () => {
// 	startEl.style.display = "none";
// 	oneEl.style.display = "block";
// }

// pageOneButton.onclick = () => {
// 	oneEl.style.display = "none";
// 	twoEl.style.display = "block";
// }

// pageTwoButton.onclick = () => {
// 	twoEl.style.display = "none";
// 	threeEl.style.display = "block";
// }

// pageThreeButton.onclick = () => {
// 	threeEl.style.display = "none";
// 	fourEl.style.display = "block";
// }

// pageFourButton.onclick = () => {
// 	fourEl.style.display = "none";
// 	endEl.style.display = "block";
// }

// correctEl[0].onclick = () => {
// 	document.querySelector(".line").style.display = "block";
// 	document.querySelector(".righto").style.display = "block";
// }

// correctEl[1].onclick = () => {
// 	document.querySelector(".line").style.display = "block";
// 	document.querySelector(".righto").style.display = "block";
// }

// correctEl[2].onclick = () => {
// 	document.querySelector(".line").style.display = "block";
// 	document.querySelector(".righto").style.display = "block";
// }

// correctEl[3].onclick = () => {
// 	document.querySelector(".line").style.display = "block";
// 	document.querySelector(".righto").style.display = "block";
// }

// correctEl[4].onclick = () => {
// 	document.querySelector(".line").style.display = "block";
// 	document.querySelector(".righto").style.display = "block";
// }

// correctEl[5].onclick = () => {
// 	document.querySelector(".line").style.display = "block";
// 	document.querySelector(".righto").style.display = "block";
// }

// correctEl[6].onclick = () => {
// 	document.querySelector(".line").style.display = "block";
// 	document.querySelector(".righto").style.display = "block";
// }

// correctEl[7].onclick = () => {
// 	document.querySelector(".line").style.display = "block";
// 	document.querySelector(".righto").style.display = "block";
// }

// correctEl[8].onclick = () => {
// 	document.querySelector(".line").style.display = "block";
// 	document.querySelector(".righto").style.display = "block";
// }

// correctEl[9].onclick = () => {
// 	document.querySelector(".line").style.display = "block";
// 	document.querySelector(".righto").style.display = "block";
// }

// correctEl[10].onclick = () => {
// 	document.querySelector(".line").style.display = "block";
// 	document.querySelector(".righto").style.display = "block";
// }

// correctEl[11].onclick = () => {
// 	document.querySelector(".line").style.display = "block";
// 	document.querySelector(".righto").style.display = "block";
// }



// function clickWrong (tar) {
// 	tar.onclick = () => {
// 		document.querySelector(".line").style.display = "block";
// 		document.querySelector(".wrongo").style.display = "block";
// 	}

// }

// wrongEl.forEach(clickWrong(target));





// function quizBegin() {
// 	document.getElementById("quizContent").remove();
// 	var pageOne = document.createElement("div");
// 	document.getElementById("quizZone").appendChild(pageOne);
	
// 	var question = document.createElement("h3");
// 	pageOne.appendChild(question);
// 	pageOne.childNodes[0].textContent = "Question 1: What is HTML?";
	
// 	var answerOne = document.createElement("button");
// 	pageOne.appendChild(answerOne);
// 	pageOne.childNodes[1].textContent = "Hypertext Markup Language";
// 	pageOne.childNodes[1].setAttribute("id" , "answerOne");
// 	document.getElementById("answerOne").addEventListener("click" , function() {
// 		console.log("Correct!");
// 		questionCounter++;
// 		totalScore+=1000;
// 	})

// 	var answerTwo = document.createElement("button");
// 	pageOne.appendChild(answerTwo);
// 	pageOne.childNodes[2].textContent = "The basic structure of a webpage";
// 	pageOne.childNodes[2].setAttribute("id" , "answerTwo");
// 	document.getElementById("answerTwo").addEventListener("click" , function() {
// 		console.log("Correct!");
// 		questionCounter++;
// 		totalScore+=1000;
// 	})

// 	var answerThree = document.createElement("button");
// 	pageOne.appendChild(answerThree);
// 	pageOne.childNodes[3].textContent = "The first chapter in many web developer bootcamps";
// 	pageOne.childNodes[3].setAttribute("id" , "answerThree");
// 	document.getElementById("answerThree").addEventListener("click" , function() {
// 		console.log("Correct!");
// 		questionCounter++;
// 		totalScore+=1000;
// 	})

// 	var answerFour = document.createElement("button");
// 	pageOne.appendChild(answerFour);
// 	pageOne.childNodes[4].textContent = "A kind of frog";
// 	pageOne.childNodes[4].setAttribute("id" , "answerFour");
// 	document.getElementById("answerFour").addEventListener("click" , function() {
// 		console.log("Wrong!");
// 		questionCounter++;
// 	})
// }

// function quizTwo() {
// 	pageOne.childNodes[0].textContent = "Question 2: What is CSS?";
// 	pageOne.childNodes[1].textContent = "Cascading Style Sheets";
// 	pageOne.childNodes[2].textContent = "A way to sculpt the appearance of a web page";
// 	pageOne.childNodes[3].textContent = "An inline, internal, or external link to page styling elements";
// 	pageOne.childNodes[4].textContent = "The official flower of California";
// }

// document.getElementById("quizStart").addEventListener ("click", function() {
// 		setTime();
// 		if (questionCounter === 0) {
// 			document.getElementById("quizContent").remove();
// 			var pageOne = document.createElement("div");
// 			document.getElementById("quizZone").appendChild(pageOne);
			
// 			var question = document.createElement("h3");
// 			pageOne.appendChild(question);
// 			pageOne.childNodes[0].textContent = "Question 1: What is HTML?";
			
// 			var answerOne = document.createElement("button");
// 			pageOne.appendChild(answerOne);
// 			pageOne.childNodes[1].textContent = "Hypertext Markup Language";
// 			pageOne.childNodes[1].setAttribute("id" , "answerOne");
// 			document.getElementById("answerOne").addEventListener("click" , function() {
// 				console.log("Correct!");
// 				questionCounter++;
// 				totalScore+=1000;
// 			})

// 			var answerTwo = document.createElement("button");
// 			pageOne.appendChild(answerTwo);
// 			pageOne.childNodes[2].textContent = "The basic structure of a webpage";
// 			pageOne.childNodes[2].setAttribute("id" , "answerTwo");
// 			document.getElementById("answerTwo").addEventListener("click" , function() {
// 				console.log("Correct!");
// 				questionCounter++;
// 				totalScore+=1000;
// 			})

// 			var answerThree = document.createElement("button");
// 			pageOne.appendChild(answerThree);
// 			pageOne.childNodes[3].textContent = "The first chapter in many web developer bootcamps";
// 			pageOne.childNodes[3].setAttribute("id" , "answerThree");
// 			document.getElementById("answerThree").addEventListener("click" , function() {
// 				console.log("Correct!");
// 				questionCounter++;
// 				totalScore+=1000;
// 			})

// 			var answerFour = document.createElement("button");
// 			pageOne.appendChild(answerFour);
// 			pageOne.childNodes[4].textContent = "A kind of frog";
// 			pageOne.childNodes[4].setAttribute("id" , "answerFour");
// 			document.getElementById("answerFour").addEventListener("click" , function() {
// 				console.log("Wrong!");
// 				questionCounter++;
// 			})
// 		} else if (questionCounter === 1){
// 			pageOne.childNodes[0].textContent = "Question 2: What is CSS?";
// 			pageOne.childNodes[1].textContent = "Cascading Style Sheets";
// 			pageOne.childNodes[2].textContent = "A way to sculpt the appearance of a web page";
// 			pageOne.childNodes[3].textContent = "An inline, internal, or external link to page styling elements";
// 			pageOne.childNodes[4].textContent = "The official flower of California";
// 		}
// 	})


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