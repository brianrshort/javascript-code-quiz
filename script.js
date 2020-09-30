var questions = [{
	question: "What is HTML?",
	answers: [
		{
			text: "Hyper Text Markup Language",
			correct: true
		} , 
		{
			text: "The basic structure of your web page",
			correct: true
		} , 
		{
			text:"Language that uses tags and elements",
			correct: true
		},
		{
			text: "A type of frog",
			correct: false
		}
		]
},
{
   question: "What is CSS?",
   answers: [
		{
			text: "Cascading Style Sheets" ,
			correct: true
		},
		{
			 text: "The basic look of your web page" ,
			 correct: true
		},
		{
			  text: "Chicken Carbonara Sauce" ,
			  correct: false
		},
		{
			 text: "Code that uses classes, IDs, and other elements",
			 correct: true
		}
		]
},    
{
   question: "What is Javascript?",
   answers: [
		{
			text: "A coding language that uses traditional programming logic" ,
			correct: true
		},
		{
			text: "A way to make your web page interactive" ,
			correct: true
		},
		{
			text:"One of the most popular coding languages on the web" ,
			correct: true
		},
		{
			text:"Nothing, and is nowhere, and is endless",
			correct: false
		}
	]
},
{
	question: "What is a successful strategy for learning to code?",
	answers: [
		{
			text: "Take a day off here and there" ,
			correct: false
		},
		{
			text: "Be obsessive" ,
			correct: true
		}, 
		{
			text: "Coffee" ,
			correct: true 
		},
		{
			text: "yes I said yes I will Yes",
			correct: true
		}
		]
}]


const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")

const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")
const instructionsEl = document.getElementById("instructions-container")
const emptyDivEl = document.getElementById("empty-div")

const scoresEl = document.getElementById("score-container")
const youGotAEl = document.getElementById("youGotA")
const thatGotAWhoppingEl = document.getElementById("thatGotAWhopping")

const btn1El = document.getElementById("btn1")
const btn2El = document.getElementById("btn2")
const btn3El = document.getElementById("btn3")
const btn4El = document.getElementById("btn4")

let totalScore = 0;

let currentQuestionIndex

let timeEl = document.getElementById("time")

let secondsLeft = 100

startButton.addEventListener("click" , setTime)
nextButton.addEventListener("click" , () => {
    currentQuestionIndex++
    setNextQuestion()
})

function setTime() {
	scoresEl.classList.add("hide")
	totalScore = 0
	secondsLeft = 100
	var timerInterval = setInterval(function() {
	  secondsLeft--
	  timeEl.textContent = "Seconds left: " + secondsLeft + ":00"
	  if(secondsLeft < 0) {
		clearInterval(timerInterval)
		timeEl.textContent = ""
		gameOver()
		}
	}, 1000)
	  
startGame()
}

function startGame() {
	console.log("started")
	instructionsEl.classList.add("hide")
	startButton.classList.add("hide")
	questionContainerElement.classList.remove("hide")
	currentQuestionIndex = 0
	setNextQuestion()
}

function setNextQuestion() {
    nextButton.style.display = "hide"
    emptyDivEl.innerHTML = ""
	if (currentQuestionIndex === 0) {
		questionElement.innerText = questions[0].question;
		btn1El.innerText = questions[0].answers[0].text;
		btn1El.addEventListener("click" , rightAnswer);
		btn2El.innerText = questions[0].answers[1].text;
		btn2El.addEventListener("click" , rightAnswer);
		btn3El.innerText = questions[0].answers[2].text;
		btn3El.addEventListener("click" , rightAnswer);
		btn4El.innerText = questions[0].answers[3].text;
		btn4El.addEventListener("click" , wrongAnswer);
	} else if (currentQuestionIndex === 1) {
		questionElement.innerText = questions[1].question;
		btn1El.innerText = questions[1].answers[0].text;
		btn1El.addEventListener("click" , rightAnswer);
		btn2El.innerText = questions[1].answers[1].text;
		btn2El.addEventListener("click" , rightAnswer);
		btn3El.innerText = questions[1].answers[2].text;
		btn3El.addEventListener("click" , wrongAnswer);
		btn4El.innerText = questions[1].answers[3].text;
		btn4El.addEventListener("click" , wrongAnswer);
	} else if (currentQuestionIndex === 2) {
		questionElement.innerText = questions[2].question;
		btn1El.innerText = questions[2].answers[0].text;
		btn1El.addEventListener("click" , rightAnswer);
		btn2El.innerText = questions[2].answers[1].text;
		btn2El.addEventListener("click" , rightAnswer);
		btn3El.innerText = questions[2].answers[2].text;
		btn3El.addEventListener("click" , rightAnswer);
		btn4El.innerText = questions[2].answers[3].text;
		btn4El.addEventListener("click" , wrongAnswer);
	} else if (currentQuestionIndex === 3) {
		questionElement.innerText = questions[3].question;
		btn1El.innerText = questions[3].answers[0].text;
		btn1El.addEventListener("click" , wrongAnswer);
		btn2El.innerText = questions[3].answers[1].text;
		btn2El.addEventListener("click" , rightAnswer);
		btn3El.innerText = questions[3].answers[2].text;
		btn3El.addEventListener("click" , rightAnswer);
		btn4El.innerText = questions[3].answers[3].text;
		btn4El.addEventListener("click" , rightAnswer);
	} else if (currentQuestionIndex > 3) {
		gameOver();
	}
}

function rightAnswer() {
	console.log("right")
	emptyDivEl.innerHTML = "<hr><br>Correct!"
	totalScore+=1000;
	nextButton.style.display = "block"
}

function wrongAnswer() {
	console.log("wrong")
	emptyDivEl.innerHTML = "<hr><br>Wrong!"
	questionContainerElement.appendChild(newInner)
	secondsLeft-=5;
	nextButton.style.display = "block"
}

function gameOver() {
	secondsLeft = -1;
	questionContainerElement.classList.add("hide")
	nextButton.classList.add("hide")
	scoresEl.classList.remove("hide")
	youGotAEl.innerText = `You got a ` + totalScore +  ` /4000!`
	thatGotAWhoppingEl.innertext = `That's a whopping total of ` + totalScore / 4000 +  ` answers right!`
	startButton.classList.remove("hide")
	startButton.innerText = "Go again?"
}
