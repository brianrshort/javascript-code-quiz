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

const scoresEl = document.getElementById("score-container")
const youGotAEl = document.getElementById("youGotA")
const thatGotAWhoppingEl = document.getElementById("thatGotAWhopping")

let totalScore

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
    instructionsEl.classList.add("hide")
    startButton.classList.add("hide")
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(questions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if(answer.correct) {
            button.dataset.correct = button.correct
        }
    button.addEventListener("click" , selectAnswer)
    button.addEventListener("click" , newScore)
    answerButtonsElement.appendChild(button)
    })
}

function resetState() {
   clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
       answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
	const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(questions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide")
    } else {
        gameOver()
    }
    
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
		element.classList.add("correct")
    } else {
		element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}


function gameOver() {
		secondsLeft = -1;
		questionContainerElement.classList.add("hide")
		nextButton.classList.add("hide")
		scoresEl.classList.remove("hide")
		youGotAEl.innerText = `You got a ` + totalScore +  ` /4000!`
		thatGotAWhoppingEl.innertext = `That that's a whopping total of ` + totalScore / 4000 +  ` answers right!`
		startButton.classList.remove("hide")
		startButton.innerText = "Go again?"
	}


