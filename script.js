//==========================
//OBJECTS
//=========================

var questions = [
    {
        question: "What does an event handler contain?",
        answers: [{text: "Event listener"} , {text: "Callback function"} , 
                    {text:"Quotes, commas, brackets"} , {text: "Frog legs"}]
    },
    {
        question: "What is CSS?",
        answers: [{text: "Cascading Style Sheets"} , {text: "Code that can be called and manipulated by JS"} ,
		            {text: "Chicken Carbonara Sauce"} , {text: "Code that uses classes, IDs, and other elements"}]
    },    
    {
        question: "What is Javascript?",
        answers: [{text: "A coding language that uses traditional programming logic"} , {text: "A way to make your web page interactive"},
		{text:"One of the most popular coding languages on the web"} , {text:"The syllabary system of coffee beans"}]
    },
    {
    	question: "What is a successful strategy for learning to code?",
	    answers: [{text: "Take a day off here and there"} , {text: "Be obsessive"} , 
		            {text: "Coffee"} , {text: "yes I said yes I will Yes"}]
    }]



//================================================
//VARIABLES
//================================================

//This section grabs the html elements that get used in the functions
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
const buttonGroup = [btn1El , btn2El , btn3El , btn4El]

const nameEl = document.getElementById("name")
const submitButton = document.getElementById("submit")

const scoreContainerEl = document.getElementById("score-container")
const scoresDisplayEl = document.getElementById("scores-display")

const highScoreContainerEl = document.getElementById("high-score-container")
const highScorePageEl = document.getElementById("high-score-page")

let timeEl = document.getElementById("time")

//Score starts at 0
let totalScore = 0;

//Create undefined index for the questions; will be used to cycle through our question+answer object
let currentQuestionIndex

//Counter starts with 100 seconds
let secondsLeft = 100

//========================================
//FUNCTIONS
//========================================

//This function creates the timer, shows the timer display, sets the interval, calls the game to start
function setTime() {
    scoresEl.classList.add("hide")
    highScoreContainerEl.classList.add("hide")
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

//This function hides the instructions, shows the question container, sets the current question index to 0, calls the setNextQuestion function
function startGame() {
	instructionsEl.classList.add("hide")
	startButton.classList.add("hide")
	questionContainerElement.classList.remove("hide")
	currentQuestionIndex = 0
	setNextQuestion()
}

//This function hides the next button, pulls the questions and answers from our object and drops them on the page, 
//creates eventListeners for the buttons, calls the rightAnswer
//and wrongAnswer functions depending on the answer, and calls gameOver function
//if the currentQuestionIndex gets too high
function setNextQuestion() {
    nextButton.classList.add("hide")
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
            btn3El.removeEventListener("click" , rightAnswer);
            btn3El.addEventListener("click" , wrongAnswer);
            btn4El.innerText = questions[1].answers[3].text;
            btn4El.removeEventListener("click" , wrongAnswer);
            btn4El.addEventListener("click" , rightAnswer);
        } else if (currentQuestionIndex === 2) {
            questionElement.innerText = questions[2].question;
            btn1El.innerText = questions[2].answers[0].text;
            btn1El.addEventListener("click" , rightAnswer);
            btn2El.innerText = questions[2].answers[1].text;
            btn2El.addEventListener("click" , rightAnswer);
            btn3El.innerText = questions[2].answers[2].text;
            btn3El.removeEventListener("click" , wrongAnswer);
            btn3El.addEventListener("click" , rightAnswer);
            btn4El.innerText = questions[2].answers[3].text;
            btn4El.removeEventListener("click" , rightAnswer);
            btn4El.addEventListener("click" , wrongAnswer);
        } else if (currentQuestionIndex === 3) {
            questionElement.innerText = questions[3].question;
            btn1El.innerText = questions[3].answers[0].text;
            btn1El.removeEventListener("click" , rightAnswer);
            btn1El.addEventListener("click" , wrongAnswer);
            btn2El.innerText = questions[3].answers[1].text;
            btn2El.addEventListener("click" , rightAnswer);
            btn3El.innerText = questions[3].answers[2].text;
            btn3El.addEventListener("click" , rightAnswer);
            btn4El.innerText = questions[3].answers[3].text;
            btn4El.removeEventListener("click" , wrongAnswer);
            btn4El.addEventListener("click" , rightAnswer);
        } else if (currentQuestionIndex > 3) {
            gameOver();
    }
}


//This function displays an <hr> and "Correct!" if the answer is right, shows the nextButton, adds 1000 to the score,
//and removes the eventListeners from the answer buttons
function rightAnswer() {
	emptyDivEl.innerHTML = "<hr><br>Correct!"
	totalScore+=1000;
    nextButton.classList.remove("hide")
    for (var i = 0; i < buttonGroup.length; i++) {
        buttonGroup[i].removeEventListener("click" , rightAnswer)
        buttonGroup[i].removeEventListener("click" , wrongAnswer)
    }
}

//This function displays an <hr> and "Wrong!" if the answer is wrong, shows the next button, subtracts time from the 
//timer, and removes the eventListeners from the answer buttons
function wrongAnswer() {
	console.log("wrong")
	emptyDivEl.innerHTML = "<hr><br>Wrong!"
	secondsLeft-=5;
    nextButton.classList.remove("hide")
    for (var i = 0; i < buttonGroup.length; i++) {
        buttonGroup[i].removeEventListener("click" , rightAnswer)
        buttonGroup[i].removeEventListener("click" , wrongAnswer)
    }
}

//This function kills the timer, hides the questionContainerElement, hides the nextButton,
//shows the scoresEl, shows the user's score and how many they got right, shows the start
//button and fills in the text of it with "Go again?"
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

//This function puts the name from the input form and the score from the game
//into local storage and calls the hiScores function
function addScores() {
    var inputName = nameEl.value 
    localStorage.setItem("name" , inputName)
    localStorage.setItem("hiScore" , totalScore)
    console.log(localStorage.getItem("name"))
    console.log(localStorage.getItem("hiScore"))
    hiScores()
}

//This shows the link in the navbar to reveal the highScoreContainerEl
function hiScores() {
    scoresDisplayEl.classList.remove("hidden")
}

//This function hides the game over page, shows the high scores page, gets
//the name and hiScore from local storage, and displays them on the web page
function displayScores() {
    scoreContainerEl.classList.add("hide")
    highScoreContainerEl.classList.remove("hide")
    var grabbedName = localStorage.getItem("name")
    var grabbedScore = localStorage.getItem("hiScore")
    var champListItem = document.createElement("li")
    champListItem.innerHTML = `Champ name: ${grabbedName} -- High score: ${grabbedScore}` 
    highScorePageEl.appendChild(champListItem)
}



//==============================
//ONCLICKS
//===============================

//Click submit to send to local storage
submitButton.addEventListener("click" , function(event) {
    event.preventDefault();
    addScores();
});

//Click to reveal the high scores page
scoresDisplayEl.addEventListener("click" , displayScores)

//Click to set the timer and start the game
startButton.addEventListener("click" , setTime)

//Click to increas the currentQuestionIndex, therefore cycling through the questions/answers
//of the object and displaying them in the questionContainerEl
nextButton.addEventListener("click" , () => {
    currentQuestionIndex++
    setNextQuestion()
})