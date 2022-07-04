answerIdCounter = 0;
questionIdCounter = 0;

const mainEl = document.querySelector("#page-content");
const formEl = document.querySelector("#wrapper");
const questionDivEl = document.querySelector("#question-div");
const parentDivEl = document.querySelector("#parent-div");
const h1El = document.querySelector("#title");
const pEl = document.querySelector("#description");
const buttonDivEl = document.querySelector("#answers-div")
// const buttonEl = document.querySelector("#start");
const buttonEl = document.getElementsByTagName("button"); 
const startQuiz = document.getElementById("start");

const countdownEl = document.querySelector("#time-left");
function startCountDown() {
    //  add Countdown timer and set amount of time
    const startMinutes = 2;
    let time = startMinutes * 60;

    // set countdown interval
    setInterval(updateCountdown, 1000);

    // create countdown function
    function updateCountdown() {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        countdownEl.innerHTML = `${minutes}: ${seconds}`;
        time--;
    }   
}

// STORE QUESTIONS with correct answer
const questionsArray = [
    {
        question: "If you type the following code in the console window, what result will you get?\n3 > 2 > 1 === false;", 
        answers: ["a. True", 
            "b. False"],
        solution: ["b. False"]
        
    },
    {
        question: "JavaScript is a ___ -side programming language.",
        answers: ["a. Client", 
            "b. Server", 
            "c. Both", 
            "d. None"],
        solution: ["d. None"]                
    },
    {
        question: "Which JavaScript label catches all the values, except for the ones specified?",
        answers: ["a. Catch", 
            "b. Label", 
            "c. Try", 
            "d. Default"],
        solution: ["d. Default"]                
    },
    {
        question: "Which of the following will write the message “Hello DataFlair!” in an alert box?",
        answers: ["a. alertBox('Hello DataFlair!');", 
            "b. alert(Hello DataFlair!);", 
            "c. msgAlert('Hello DataFlair!');", 
            "d. alert('Hello DataFlair!');"],
        solution: ["d. alert('Hello DataFlair!');"]               
    },
    {
        question: "What will the code return? Boolean(3 < 7)",
        answers: ["a. True", "b. False", "c. NaN", "d. SyntaxError"],
        solution: ["a. True"]                
    },
];

var i = 0;
var questions = questionsArray[i].question
var answers = questionsArray[i].answers
var solution = questionsArray[i].solution

// STORE POINTS
var score = [];

// RESET ELEMENTS FUNCTION
function reset() {
    document.getElementById("title").innerHTML = ""
    document.getElementById("description").innerHTML = ""
    document.querySelector("#answers-div").innerHTML = ""
    // document.querySelector("#parent-div").innerHTML = ""
    startQuiz.remove();
}

// START BUTTON CLICKED

startQuiz.addEventListener("click", function(event) {
    // debugger;
    event.preventDefault();
    console.log("clicked")
    console.log(score); 
    reset()
    printQuestion()
    printAnswers(answers, solution);
})

questionsArray.forEach(function(i) {
    // const startQuiz = document.getElementById("start");
    // startQuiz.addEventListener("click", function(event) {
    //     debugger;
    //     event.preventDefault();
    //     console.log("clicked")
    //     console.log(score); 
    //     reset()
    //     printQuestion()
    //     printAnswers(answers, solution);
    // })
});


var quizFormHandler = function(event) {
    event.preventDefault();
    console.log("clicked");
    
    console.log(score); 

    // startCountDown();
    reset()
    printQuestion()
    printAnswers(answers, solution);     
}


// PRINT QUESTION         
function printQuestion() {
    document.getElementById("title").innerHTML = questions;
}

// PRINT ANSWER
function printAnswers(answers, solution) {
    // debugger;                        
    console.log(solution);
    var ourSolution = solution[0];
    console.log(ourSolution);           
    if(answers) {
        console.log(answers);
        answers.forEach(function(answer) {
            // debugger;
            var buttonEl = document.createElement("button");                    
            buttonEl.className = "answers btn";
            buttonEl.type = "submit";
            buttonEl.name = "answer-btn-name";                                        
            console.log(buttonEl);
            buttonEl.innerHTML = answer;
            if(buttonEl.innerHTML === ourSolution) {
                buttonEl.setAttribute("id", solution);
            }                     
            buttonDivEl.appendChild(buttonEl);
            console.log(buttonDivEl);                    
            // answerIdCounter++;

            // are all answers printed?
            validateAnswers(answers, solution);
            function validateAnswers(answers, solution) {    
                console.log(answers)
                document.getElementById("title").setAttribute("className", questionIdCounter)
                var printedAnswers = document.getElementsByClassName("answers btn");
                 console.dir(printedAnswers);
                //  check that all answers are printed
                if(printedAnswers.length === answers.length) {
                    console.log("All answers are printed!");
                }
            }

            // check clicked answer
            buttonEl.addEventListener("click", function() {
                event.preventDefault();                        
                var i = 0;
                questions = questionsArray[i].question
                answers = questionsArray[i].answers
                solution = questionsArray[i].solution
                console.log(questions);
                console.log(answers);
                console.log(solution);    
                var ourSolution = solution[0];
                if("click" && buttonEl.innerHTML === ourSolution) {
                    // debugger;        
                    var divEl = document.createElement("div");                    
                    divEl.className = "notify";
                    divEl.setAttribute("id", "notify-result");
                    divEl.innerHTML = "Correct!"                    
                    parentDivEl.appendChild(divEl);
                    var points = 10
                    score.push(points);
                    console.log(score);
                    reset();
                } else {        
                    var divEl = document.createElement("div");                    
                    divEl.className = "notify";
                    divEl.setAttribute("id", "notify-result");
                    divEl.innerHTML = "Wrong!"
                    parentDivEl.appendChild(divEl);
                    console.log(score);
                    reset();
                }

                // TODO: add switch for new QA
                debugger;
                console.log(questionsArray)
                switch (questionsArray) {                    
                    case "question":
                        printQuestion()
                    break;
                    case "answer":
                        printAnswers(answers, solution);
                        break;
                    default:
                        console.log("Something went wrong!");
                }
            })
        });
    }    
}

// Start Quiz
// startQuiz.addEventListener("click", quizFormHandler);