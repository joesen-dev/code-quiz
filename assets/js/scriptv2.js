answerIdCounter = 0;
questionIdCounter = 0;

const mainEl = document.querySelector("#page-content");
const formEl = document.querySelector("#wrapper");
const questionDivEl = document.querySelector("#question-div");
const h1El = document.querySelector("#title");
const pEl = document.querySelector("#description");
const buttonDivEl = document.querySelector("#answers-div")
// const buttonEl = document.querySelector("#start");
const buttonEl = document.getElementsByTagName("button"); 
const startQuiz = document.getElementById("start");


const countdownEl = document.querySelector("#time-left");

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

// START BUTTON CLICKED
var quizFormHandler = function(event) {
    event.preventDefault();
    console.log("clicked");         

    // RESET START QUIZ BLOCK    
    document.getElementById("title").innerHTML = ""
    document.getElementById("description").innerHTML = ""    
    startQuiz.remove(); 

    // startCountDown();
    createEl();       
}

function createEl(questions, answers, solution) {
    // debugger;
    var i = 0;
    questions = questionsArray[i].question
    answers = questionsArray[i].answers
    solution = questionsArray[i].solution
    console.log(questions);
    console.log(answers);
    console.log(solution);

    // do this while there are questions remaining in the array
    do {
        console.log(questions, answers)
        document.getElementById("title").setAttribute("className", questionIdCounter)
        
        // PRINT QUESTION         
        function printQuestion() {
            document.getElementById("title").innerHTML = questions;
        }
        printQuestion()

        // PRINT ANSWER
        function printAnswers(answers, solution) {            
            console.log(solution);
            var ourSolution = solution[0];
            console.log(ourSolution);           
            if(answers) {
                answers.forEach(function(answer) {
                    // debugger;
                    var buttonEl = document.createElement("button");                    
                    buttonEl.className = "answers btn";
                    buttonEl.type = "submit";
                    buttonEl.name = "answer-btn-name";
                    // buttonEl.setAttribute("onclick", "validate(event)")
                    buttonEl.setAttribute("onclick", "reply_click(this.id)")
                    console.log(buttonEl);
                    buttonEl.innerHTML = answer;
                    if(buttonEl.innerHTML === ourSolution) {
                        console.log("got it!");
                        buttonEl.setAttribute("id", solution);
                    }                     
                    buttonDivEl.appendChild(buttonEl);
                    console.log(buttonDivEl);                    
                    // answerIdCounter++;  
                });
            }
        }
        printAnswers(answers, solution);
        i++;
    }
    while(i > questionsArray.length)
    
}

// check clicked answer
function reply_click(clicked_id, solution) {
    event.preventDefault();
    var i = 0;
    questions = questionsArray[i].question
    answers = questionsArray[i].answers
    solution = questionsArray[i].solution
    console.log(questions);
    console.log(answers);
    console.log(solution);    
    var ourSolution = solution[0];
    if(clicked_id === ourSolution) {        
        var divEl = document.createElement("div");
        divEl.innerHTML = 
        "<div class='notify' id='notify-result'>" + "Correct!" 
        + "</div>"
        formEl.appendChild(divEl);
    } else {        
        var divEl = document.createElement("div");
        divEl.innerHTML = 
        "<div class='notify' id='notify-result'>" + "Wrong!" 
        + "</div>"
        formEl.appendChild(divEl);
    }
}


// Start Quiz
startQuiz.addEventListener("click", quizFormHandler);