var questions = [{
	q: "What is HTML?",
	ans: ["Hyper Text Markup Language ()" , "The basic structure of your web page ()" , "Language that uses tags and elements ()" , "A type of frog"],
	incAns: "A type of frog"
	},
	{
	q: "What is CSS?",
	ans: ["Cascading Style Sheets ()" , "The basic look of your web page ()" , "Chicken Carbonara Sauce ()" , "Code that uses classes, IDs, and other elements"],
	incAns: "Chicken Carbonara Sauce"
	},
	{
		q: "What is Javascript?",
		ans: ["A coding language that uses traditional programming logic ()" , "A way to make your web page interactive ()" , "One of the most popular coding languages on the web ()" , "Nothing, and is nowhere, and is endless"],
		incAns: "Nothing, and is nowhere, and is endless"
	},
	{
		q: "What is a successful strategy for learning to code?",
	ans: ["Take a day off here and there ()" , "Be obsessive ()" , "Coffee ()" , "yes I said yes I will Yes"],
	incAns: "Take a day off here and there ()"
	}

];

var totalScore = 1000000;

var pageIndex = 0;

var rightAns1 = document.getElementById("righto1");

function setTime() {
	  	var timerInterval = setInterval(function() {
			secondsLeft--;
			timeEl.textContent = "Seconds left: " + secondsLeft + ":00";
		
			if(secondsLeft <= 0) {
			clearInterval(timerInterval);
			gameOver(); 
			}
	
	  }, 1000);
	  next();
	}


function gameOver() {
		clearInterval(setTime);
		var quizContent = `
		<h2>Game over!</h2>
		<h3>You got a ` + totalScore +  ` /100!</h3>
		<h3>That means you got ` + totalScore / 20 +  ` questions correct!</h3>
		<input type="text" id="name" placeholder="First name"> 
		<button onclick="setScore()">Set score!</button>`;
	
		document.getElementById("quizZone").innerHTML = quizContent;
	}




function next() {
	if (pageIndex === 0) {
		var pageOne = `
		<h2>${questions[0].q}</h2>
		<button class="righto1">${questions[0].ans[0]}</button>
		<button class="righto2">${questions[0].ans[1]}</button>
		<button class="righto3">${questions[0].ans[2]}</button>
		<button class="wrongo1">${questions[0].ans[3]}</button>
		`;
		document.getElementById("quizContent").innerHTML = pageOne;
	} else if (pageIndex === 1) {
	var pageTwo = `
	<h2>${questions[1].q}</h2>
	<ul>
	<li>${questions[1].ans[0]}</li>
	<li>${questions[1].ans[1]}</li>
	<li>${questions[1].ans[2]}</li>
	<li>${questions[1].ans[3]}</li>
	</ul>`;

	document.getElementById("quizContent").innerHTML = pageTwo;
	} else if (pageIndex === 2) {
		var pageThree = `
		<h2>${questions[2].q}</h2>
		<ul>
		<li>${questions[2].ans[0]}</li>
		<li>${questions[2].ans[1]}</li>
		<li>${questions[2].ans[2]}</li>
		<li>${questions[2].ans[3]}</li>
		</ul>`;
	
		document.getElementById("quizContent").innerHTML = pageThree;
	} else if (pageIndex === 3) {
		var pageFour = `
		<h2>${questions[3].q}</h2>
		<ul>
		<li>${questions[3].ans[0]}</li>
		<li>${questions[3].ans[1]}</li>
		<li>${questions[3].ans[2]}</li>
		<li>${questions[3].ans[3]}</li>
		</ul>`;
	
		document.getElementById("quizContent").innerHTML = pageFour;
	} else if (pageIndex === 4) {
		gameOver();
	}
	
	pageIndex++;
}


document.getElementById("nextPage").onclick = (pageIndex) => {
	pageIndex++;
	next();
}

document.getElementsByClassName("righto1").onclick = () => {
	console.log("Right!");
}



	// function next(questionIndex) {	
	// 		// For loops to loop through all info in array
	// 		for (var i = 0; i < questions.length; i++) {
	// 			// Appends question title only
	// 			var userQuestion = questions[questionIndex].q;
	// 			var userChoices = questions[questionIndex].ans;
	// 			quizZone.textContent = userQuestion;
	// 		}
	// 		// New for each for question choices
	// 		userChoices.forEach(function (newItem) {
	// 			var listItem = document.createElement("li");
	// 			listItem.textContent = newItem;
	// 			quizZone.appendChild(ulCreate);
	// 			ulCreate.appendChild(listItem);
	// 			listItem.addEventListener("click", (compare));
	// 		})
	// 	}
	
	
	// 	document.getElementById("quizBody").innerHTML = quizContent;
	// }

//document.querySelector("#quizStart").addEventListener("click", next);






