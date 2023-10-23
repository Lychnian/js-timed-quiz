/* Define Variables */

var startButtonElement = document.querySelector("#startbutton");
var startPageElement = document.querySelector("#startpg");
var questionPageElement = document.querySelector("#questpg");
var questionTextElement = document.querySelector("#askquest");
var answerButtonsElements = document.querySelectorAll(".options");
var feedbackMessageElement =document.querySelector("#feedback");
var timerElement = document.getElementById("timer");
var resultsElement = document.querySelector("#results");
var finalScoreElement = document.querySelector("#finscr");
var userInitialElement = document.querySelector("#initial");
var submitButtonElement = document.querySelector("#subbutton");
var highScorePageElement = document.querySelector("#hspage");
var scoreRecordElement = document.querySelector("#gradercd");
var scoreCheckElement = document.querySelector("#gradechk");
var finishElement = document.querySelector("#finish");
var backButtonElement = document.querySelector("#bkbutton");
var clearButtonElelment = document.querySelector("#clrbutton");

//Quiz questions and answers
var quizQuestions = [

    {

        question: "A very useful tool used during developement and debugging for printing content to the debugger is ________.",
        options: ["a. JavaScript", "b. for loops", "c. terminal/bash", "d. console.log"],
        answer: "d"

    },

    {
        question: "Commonly used data types DO NOT include:",
        options: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
        answer: "c"

    },
    
    {

        question: "String values must be enclosed within ______ when being assigned to variables.",
        options: ["a. quotes", "b. commas", "c. curly brackets", "d. parenthesis"],
        answer: "a"
    },

    {
        question: "The first index of an array is ____.",
        options: ["a. 0", "b. 1", "c. 8", "d. any"],
        answer: "a"
    },

    {  
        question: "Which of the following function of Array object joins ALL elements of an array into a string?",
        options: ["a. concat()", "b. join()", "c. pop()", "d. map()"],
        answer: "b"
    },

    {
        question: "How to write an IF statement in JavaScript?",
        options: ["a. if i == 5 then", "b. if i = 5 then", "c. if(i == 5)", "d. if i = 5"],
        answer: "c"
    },

    {
        question: "Which event occurs when the user clicks on an HTML element?",
        options: ["a. onmouseclick", "b. onchange", "c. onmouseover", "d. onclick"],
        answer: "d"
    },

    {
        question: "To see if two variables are equal in an if/else statement you would use______. ",
        options: ["a. =", "b. ==", "c. \'equals\'", "d. !="],
        answer: "b" 
    },

    {
        question: "Which of the following function of Array object reverses the order of the elements of an array?",
        options: ["a. reverse()", "b. push()", "c. reduce()", "d. reduceRight()"],
        answer: "a"
    },

    {
        question: "Which of the following function of Number object returns a string value version of the current number?",
        options: ["a. toFixed()", "b. toLocaleString()", "c. toPrecision()", "d. toString()"],
        answer: "d"
    }

]; 


// Global Variables
var secondsLeft = 60;
var currentQuestionIndex = 0;
var totalScore = 0;
var questionCount = 1;

/* Functions */
// Timer countdown function
function startCountdownTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerElement.textContent = "Time left:" + secondsLeft + "s";

        If (secondsLeft <= 0 || questionCount > quizQuestions.length) {
            clearInterval(timerInterval);
            timerElement.textContent = "Time is up!";
            finishElement.textContent = "Time is up!";
            endQuiz();

        }

    }, 1000);
    
} 


// Hide start page and show quiz function
function hideStartPageAndShowQuiz() {
    startPageElement.style.display = "none";
    questionPageElement.style.display = "block";
    currentQuestionIndex = 0;
    // Shuffle the questions array
    shuffleQuestionsArray(quizQuestions);
    startCountdownTimer();
    displayCurrentQuestion(currentQuestionIndex);

}


//Function to shuffle an array (Fisher-Yates shuffle algorithm)
function shuffleQuestionsArray(array) {
    for (var i = array.length -1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];

    }
}


    



